// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DescribeSigningJobRequest, DescribeSigningJobResponse } from "../models/models_0";
import { de_DescribeSigningJobCommand, se_DescribeSigningJobCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSigningJobCommand}.
 */
export interface DescribeSigningJobCommandInput extends DescribeSigningJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSigningJobCommand}.
 */
export interface DescribeSigningJobCommandOutput extends DescribeSigningJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a specific code signing job. You specify the job by using the
 * 				<code>jobId</code> value that is returned by the <a>StartSigningJob</a>
 * 			operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, DescribeSigningJobCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, DescribeSigningJobCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const input = { // DescribeSigningJobRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeSigningJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSigningJobResponse
 * //   jobId: "STRING_VALUE",
 * //   source: { // Source
 * //     s3: { // S3Source
 * //       bucketName: "STRING_VALUE", // required
 * //       key: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   signingMaterial: { // SigningMaterial
 * //     certificateArn: "STRING_VALUE", // required
 * //   },
 * //   platformId: "STRING_VALUE",
 * //   platformDisplayName: "STRING_VALUE",
 * //   profileName: "STRING_VALUE",
 * //   profileVersion: "STRING_VALUE",
 * //   overrides: { // SigningPlatformOverrides
 * //     signingConfiguration: { // SigningConfigurationOverrides
 * //       encryptionAlgorithm: "RSA" || "ECDSA",
 * //       hashAlgorithm: "SHA1" || "SHA256",
 * //     },
 * //     signingImageFormat: "JSON" || "JSONEmbedded" || "JSONDetached",
 * //   },
 * //   signingParameters: { // SigningParameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   completedAt: new Date("TIMESTAMP"),
 * //   signatureExpiresAt: new Date("TIMESTAMP"),
 * //   requestedBy: "STRING_VALUE",
 * //   status: "InProgress" || "Failed" || "Succeeded",
 * //   statusReason: "STRING_VALUE",
 * //   revocationRecord: { // SigningJobRevocationRecord
 * //     reason: "STRING_VALUE",
 * //     revokedAt: new Date("TIMESTAMP"),
 * //     revokedBy: "STRING_VALUE",
 * //   },
 * //   signedObject: { // SignedObject
 * //     s3: { // S3SignedObject
 * //       bucketName: "STRING_VALUE",
 * //       key: "STRING_VALUE",
 * //     },
 * //   },
 * //   jobOwner: "STRING_VALUE",
 * //   jobInvoker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSigningJobCommandInput - {@link DescribeSigningJobCommandInput}
 * @returns {@link DescribeSigningJobCommandOutput}
 * @see {@link DescribeSigningJobCommandInput} for command's `input` shape.
 * @see {@link DescribeSigningJobCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The allowed number of job-signing requests has been exceeded.</p>
 * 		       <p>This error supersedes the error <code>ThrottlingException</code>.</p>
 *
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 */
export class DescribeSigningJobCommand extends $Command<
  DescribeSigningJobCommandInput,
  DescribeSigningJobCommandOutput,
  SignerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeSigningJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SignerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSigningJobCommandInput, DescribeSigningJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSigningJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "DescribeSigningJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WallabyService",
        operation: "DescribeSigningJob",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeSigningJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSigningJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSigningJobCommandOutput> {
    return de_DescribeSigningJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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
} from "@smithy/types";

import { PutSigningProfileRequest, PutSigningProfileResponse } from "../models/models_0";
import { de_PutSigningProfileCommand, se_PutSigningProfileCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutSigningProfileCommand}.
 */
export interface PutSigningProfileCommandInput extends PutSigningProfileRequest {}
/**
 * @public
 *
 * The output of {@link PutSigningProfileCommand}.
 */
export interface PutSigningProfileCommandOutput extends PutSigningProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a signing profile. A signing profile is a code signing template that can be used to
 * 			carry out a pre-defined signing job.
 * 			</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, PutSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, PutSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const input = { // PutSigningProfileRequest
 *   profileName: "STRING_VALUE", // required
 *   signingMaterial: { // SigningMaterial
 *     certificateArn: "STRING_VALUE", // required
 *   },
 *   signatureValidityPeriod: { // SignatureValidityPeriod
 *     value: Number("int"),
 *     type: "DAYS" || "MONTHS" || "YEARS",
 *   },
 *   platformId: "STRING_VALUE", // required
 *   overrides: { // SigningPlatformOverrides
 *     signingConfiguration: { // SigningConfigurationOverrides
 *       encryptionAlgorithm: "RSA" || "ECDSA",
 *       hashAlgorithm: "SHA1" || "SHA256",
 *     },
 *     signingImageFormat: "JSON" || "JSONEmbedded" || "JSONDetached",
 *   },
 *   signingParameters: { // SigningParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutSigningProfileCommand(input);
 * const response = await client.send(command);
 * // { // PutSigningProfileResponse
 * //   arn: "STRING_VALUE",
 * //   profileVersion: "STRING_VALUE",
 * //   profileVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutSigningProfileCommandInput - {@link PutSigningProfileCommandInput}
 * @returns {@link PutSigningProfileCommandOutput}
 * @see {@link PutSigningProfileCommandInput} for command's `input` shape.
 * @see {@link PutSigningProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>You signing certificate could not be validated.</p>
 *
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 */
export class PutSigningProfileCommand extends $Command<
  PutSigningProfileCommandInput,
  PutSigningProfileCommandOutput,
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
  constructor(readonly input: PutSigningProfileCommandInput) {
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
  ): Handler<PutSigningProfileCommandInput, PutSigningProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutSigningProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "PutSigningProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: PutSigningProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutSigningProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSigningProfileCommandOutput> {
    return de_PutSigningProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

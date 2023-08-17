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

import { GetSigningPlatformRequest, GetSigningPlatformResponse } from "../models/models_0";
import { de_GetSigningPlatformCommand, se_GetSigningPlatformCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSigningPlatformCommand}.
 */
export interface GetSigningPlatformCommandInput extends GetSigningPlatformRequest {}
/**
 * @public
 *
 * The output of {@link GetSigningPlatformCommand}.
 */
export interface GetSigningPlatformCommandOutput extends GetSigningPlatformResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information on a specific signing platform.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, GetSigningPlatformCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, GetSigningPlatformCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const input = { // GetSigningPlatformRequest
 *   platformId: "STRING_VALUE", // required
 * };
 * const command = new GetSigningPlatformCommand(input);
 * const response = await client.send(command);
 * // { // GetSigningPlatformResponse
 * //   platformId: "STRING_VALUE",
 * //   displayName: "STRING_VALUE",
 * //   partner: "STRING_VALUE",
 * //   target: "STRING_VALUE",
 * //   category: "AWSIoT",
 * //   signingConfiguration: { // SigningConfiguration
 * //     encryptionAlgorithmOptions: { // EncryptionAlgorithmOptions
 * //       allowedValues: [ // EncryptionAlgorithms // required
 * //         "RSA" || "ECDSA",
 * //       ],
 * //       defaultValue: "RSA" || "ECDSA", // required
 * //     },
 * //     hashAlgorithmOptions: { // HashAlgorithmOptions
 * //       allowedValues: [ // HashAlgorithms // required
 * //         "SHA1" || "SHA256",
 * //       ],
 * //       defaultValue: "SHA1" || "SHA256", // required
 * //     },
 * //   },
 * //   signingImageFormat: { // SigningImageFormat
 * //     supportedFormats: [ // ImageFormats // required
 * //       "JSON" || "JSONEmbedded" || "JSONDetached",
 * //     ],
 * //     defaultFormat: "JSON" || "JSONEmbedded" || "JSONDetached", // required
 * //   },
 * //   maxSizeInMB: Number("int"),
 * //   revocationSupported: true || false,
 * // };
 *
 * ```
 *
 * @param GetSigningPlatformCommandInput - {@link GetSigningPlatformCommandInput}
 * @returns {@link GetSigningPlatformCommandOutput}
 * @see {@link GetSigningPlatformCommandInput} for command's `input` shape.
 * @see {@link GetSigningPlatformCommandOutput} for command's `response` shape.
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
export class GetSigningPlatformCommand extends $Command<
  GetSigningPlatformCommandInput,
  GetSigningPlatformCommandOutput,
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
  constructor(readonly input: GetSigningPlatformCommandInput) {
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
  ): Handler<GetSigningPlatformCommandInput, GetSigningPlatformCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSigningPlatformCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "GetSigningPlatformCommand";
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
  private serialize(input: GetSigningPlatformCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSigningPlatformCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSigningPlatformCommandOutput> {
    return de_GetSigningPlatformCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

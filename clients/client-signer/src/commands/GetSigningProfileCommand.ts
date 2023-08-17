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

import { GetSigningProfileRequest, GetSigningProfileResponse } from "../models/models_0";
import { de_GetSigningProfileCommand, se_GetSigningProfileCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSigningProfileCommand}.
 */
export interface GetSigningProfileCommandInput extends GetSigningProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetSigningProfileCommand}.
 */
export interface GetSigningProfileCommandOutput extends GetSigningProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information on a specific signing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, GetSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, GetSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const input = { // GetSigningProfileRequest
 *   profileName: "STRING_VALUE", // required
 *   profileOwner: "STRING_VALUE",
 * };
 * const command = new GetSigningProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetSigningProfileResponse
 * //   profileName: "STRING_VALUE",
 * //   profileVersion: "STRING_VALUE",
 * //   profileVersionArn: "STRING_VALUE",
 * //   revocationRecord: { // SigningProfileRevocationRecord
 * //     revocationEffectiveFrom: new Date("TIMESTAMP"),
 * //     revokedAt: new Date("TIMESTAMP"),
 * //     revokedBy: "STRING_VALUE",
 * //   },
 * //   signingMaterial: { // SigningMaterial
 * //     certificateArn: "STRING_VALUE", // required
 * //   },
 * //   platformId: "STRING_VALUE",
 * //   platformDisplayName: "STRING_VALUE",
 * //   signatureValidityPeriod: { // SignatureValidityPeriod
 * //     value: Number("int"),
 * //     type: "DAYS" || "MONTHS" || "YEARS",
 * //   },
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
 * //   status: "Active" || "Canceled" || "Revoked",
 * //   statusReason: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSigningProfileCommandInput - {@link GetSigningProfileCommandInput}
 * @returns {@link GetSigningProfileCommandOutput}
 * @see {@link GetSigningProfileCommandInput} for command's `input` shape.
 * @see {@link GetSigningProfileCommandOutput} for command's `response` shape.
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
export class GetSigningProfileCommand extends $Command<
  GetSigningProfileCommandInput,
  GetSigningProfileCommandOutput,
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
  constructor(readonly input: GetSigningProfileCommandInput) {
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
  ): Handler<GetSigningProfileCommandInput, GetSigningProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSigningProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "GetSigningProfileCommand";
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
  private serialize(input: GetSigningProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSigningProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSigningProfileCommandOutput> {
    return de_GetSigningProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

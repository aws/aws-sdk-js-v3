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

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { UpdateCertificateAuthorityRequest } from "../models/models_0";
import { de_UpdateCertificateAuthorityCommand, se_UpdateCertificateAuthorityCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCertificateAuthorityCommand}.
 */
export interface UpdateCertificateAuthorityCommandInput extends UpdateCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCertificateAuthorityCommand}.
 */
export interface UpdateCertificateAuthorityCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates the status or configuration of a private certificate authority (CA). Your
 * 			private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you
 * 			can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or
 * 			make a CA that is in the <code>DISABLED</code> state active again.</p>
 *          <note>
 *             <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to
 *                         the S3 bucket that you specify. If the IAM principal making the call
 *                         does not have permission to write to the bucket, then an exception is
 *                         thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access
 * 						policies for CRLs in Amazon S3</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, UpdateCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, UpdateCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const input = { // UpdateCertificateAuthorityRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 *   RevocationConfiguration: { // RevocationConfiguration
 *     CrlConfiguration: { // CrlConfiguration
 *       Enabled: true || false, // required
 *       ExpirationInDays: Number("int"),
 *       CustomCname: "STRING_VALUE",
 *       S3BucketName: "STRING_VALUE",
 *       S3ObjectAcl: "PUBLIC_READ" || "BUCKET_OWNER_FULL_CONTROL",
 *     },
 *     OcspConfiguration: { // OcspConfiguration
 *       Enabled: true || false, // required
 *       OcspCustomCname: "STRING_VALUE",
 *     },
 *   },
 *   Status: "CREATING" || "PENDING_CERTIFICATE" || "ACTIVE" || "DELETED" || "DISABLED" || "EXPIRED" || "FAILED",
 * };
 * const command = new UpdateCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCertificateAuthorityCommandInput - {@link UpdateCertificateAuthorityCommandInput}
 * @returns {@link UpdateCertificateAuthorityCommandOutput}
 * @see {@link UpdateCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link UpdateCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>A previous update to your private CA is still ongoing.</p>
 *
 * @throws {@link InvalidArgsException} (client fault)
 *  <p>One or more of the specified arguments was not valid.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 * 			resource.</p>
 *
 * @throws {@link InvalidPolicyException} (client fault)
 *  <p>The resource policy is invalid or is missing a required statement. For general
 * 			information about IAM policy and statement structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json">Overview of JSON Policies</a>.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The state of the private CA does not allow this action to occur.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy
 * 			cannot be found.</p>
 *
 * @throws {@link ACMPCAServiceException}
 * <p>Base exception class for all service exceptions from ACMPCA service.</p>
 *
 */
export class UpdateCertificateAuthorityCommand extends $Command<
  UpdateCertificateAuthorityCommandInput,
  UpdateCertificateAuthorityCommandOutput,
  ACMPCAClientResolvedConfig
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
  constructor(readonly input: UpdateCertificateAuthorityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCertificateAuthorityCommandInput, UpdateCertificateAuthorityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCertificateAuthorityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "UpdateCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ACMPrivateCA",
        operation: "UpdateCertificateAuthority",
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
  private serialize(input: UpdateCertificateAuthorityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateCertificateAuthorityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCertificateAuthorityCommandOutput> {
    return de_UpdateCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

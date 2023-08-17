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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UploadSigningCertificateRequest, UploadSigningCertificateResponse } from "../models/models_1";
import { de_UploadSigningCertificateCommand, se_UploadSigningCertificateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UploadSigningCertificateCommand}.
 */
export interface UploadSigningCertificateCommandInput extends UploadSigningCertificateRequest {}
/**
 * @public
 *
 * The output of {@link UploadSigningCertificateCommand}.
 */
export interface UploadSigningCertificateCommandOutput extends UploadSigningCertificateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Uploads an X.509 signing certificate and associates it with the specified IAM user.
 *             Some Amazon Web Services services require you to use certificates to validate requests that are signed
 *             with a corresponding private key. When you upload the certificate, its default status is
 *                 <code>Active</code>.</p>
 *          <p>For information about when you would use an X.509 signing certificate, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Managing
 *                 server certificates in IAM</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          <p>If the <code>UserName</code> is not specified, the IAM user name is determined
 *             implicitly based on the Amazon Web Services access key ID used to sign the request. This operation
 *             works for access keys under the Amazon Web Services account. Consequently, you can use this operation
 *             to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated
 *             users.</p>
 *          <note>
 *             <p>Because the body of an X.509 certificate can be large, you should use POST rather
 *                 than GET when calling <code>UploadSigningCertificate</code>. For information about
 *                 setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing
 *                     Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For
 *                 general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query
 *                     requests</a> in the <i>IAM User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UploadSigningCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UploadSigningCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // UploadSigningCertificateRequest
 *   UserName: "STRING_VALUE",
 *   CertificateBody: "STRING_VALUE", // required
 * };
 * const command = new UploadSigningCertificateCommand(input);
 * const response = await client.send(command);
 * // { // UploadSigningCertificateResponse
 * //   Certificate: { // SigningCertificate
 * //     UserName: "STRING_VALUE", // required
 * //     CertificateId: "STRING_VALUE", // required
 * //     CertificateBody: "STRING_VALUE", // required
 * //     Status: "Active" || "Inactive", // required
 * //     UploadDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UploadSigningCertificateCommandInput - {@link UploadSigningCertificateCommandInput}
 * @returns {@link UploadSigningCertificateCommandOutput}
 * @see {@link UploadSigningCertificateCommandInput} for command's `input` shape.
 * @see {@link UploadSigningCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link DuplicateCertificateException} (client fault)
 *  <p>The request was rejected because the same certificate is associated with an IAM user in
 *       the account.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link InvalidCertificateException} (client fault)
 *  <p>The request was rejected because the certificate is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link MalformedCertificateException} (client fault)
 *  <p>The request was rejected because the certificate was malformed or expired. The error
 *       message describes the specific error.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To upload a signing certificate for an IAM user
 * ```javascript
 * // The following command uploads a signing certificate for the IAM user named Bob.
 * const input = {
 *   "CertificateBody": "-----BEGIN CERTIFICATE-----<certificate-body>-----END CERTIFICATE-----",
 *   "UserName": "Bob"
 * };
 * const command = new UploadSigningCertificateCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Certificate": {
 *     "CertificateBody": "-----BEGIN CERTIFICATE-----<certificate-body>-----END CERTIFICATE-----",
 *     "CertificateId": "ID123456789012345EXAMPLE",
 *     "Status": "Active",
 *     "UploadDate": "2015-06-06T21:40:08.121Z",
 *     "UserName": "Bob"
 *   }
 * }
 * *\/
 * // example id: e67489b6-7b73-4e30-9ed3-9a9e0231e458
 * ```
 *
 */
export class UploadSigningCertificateCommand extends $Command<
  UploadSigningCertificateCommandInput,
  UploadSigningCertificateCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: UploadSigningCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UploadSigningCertificateCommandInput, UploadSigningCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UploadSigningCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UploadSigningCertificateCommand";
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
  private serialize(input: UploadSigningCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UploadSigningCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadSigningCertificateCommandOutput> {
    return de_UploadSigningCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

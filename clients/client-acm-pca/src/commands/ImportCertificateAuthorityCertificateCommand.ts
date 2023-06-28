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

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { ImportCertificateAuthorityCertificateRequest } from "../models/models_0";
import {
  de_ImportCertificateAuthorityCertificateCommand,
  se_ImportCertificateAuthorityCertificateCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ImportCertificateAuthorityCertificateCommand}.
 */
export interface ImportCertificateAuthorityCertificateCommandInput
  extends ImportCertificateAuthorityCertificateRequest {}
/**
 * @public
 *
 * The output of {@link ImportCertificateAuthorityCertificateCommand}.
 */
export interface ImportCertificateAuthorityCertificateCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Imports a signed private CA certificate into Amazon Web Services Private CA. This action is used when you
 * 			are using a chain of trust whose root is located outside Amazon Web Services Private CA. Before you can call
 * 			this action, the following preparations must in place:</p>
 *          <ol>
 *             <li>
 *                <p>In Amazon Web Services Private CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create the private CA that you
 * 					plan to back with the imported certificate.</p>
 *             </li>
 *             <li>
 *                <p>Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCsr.html">GetCertificateAuthorityCsr</a> action to generate a certificate signing
 * 					request (CSR).</p>
 *             </li>
 *             <li>
 *                <p>Sign the CSR using a root or intermediate CA hosted by either an on-premises
 * 					PKI hierarchy or by a commercial CA.</p>
 *             </li>
 *             <li>
 *                <p>Create a certificate chain and copy the signed certificate and the certificate
 * 					chain to your working directory.</p>
 *             </li>
 *          </ol>
 *          <p>Amazon Web Services Private CA supports three scenarios for installing a CA certificate:</p>
 *          <ul>
 *             <li>
 *                <p>Installing a certificate for a root CA hosted by Amazon Web Services Private CA.</p>
 *             </li>
 *             <li>
 *                <p>Installing a subordinate CA certificate whose parent authority is hosted by
 * 					Amazon Web Services Private CA.</p>
 *             </li>
 *             <li>
 *                <p>Installing a subordinate CA certificate whose parent authority is externally
 * 					hosted.</p>
 *             </li>
 *          </ul>
 *          <p>The following additional requirements apply when you import a CA certificate.</p>
 *          <ul>
 *             <li>
 *                <p>Only a self-signed certificate can be imported as a root CA.</p>
 *             </li>
 *             <li>
 *                <p>A self-signed certificate cannot be imported as a subordinate CA.</p>
 *             </li>
 *             <li>
 *                <p>Your certificate chain must not include the private CA certificate that you
 * 					are importing.</p>
 *             </li>
 *             <li>
 *                <p>Your root CA must be the last certificate in your chain. The subordinate
 * 					certificate, if any, that your root CA signed must be next to last. The
 * 					subordinate certificate signed by the preceding subordinate CA must come next,
 * 					and so on until your chain is built. </p>
 *             </li>
 *             <li>
 *                <p>The chain must be PEM-encoded.</p>
 *             </li>
 *             <li>
 *                <p>The maximum allowed size of a certificate is 32 KB.</p>
 *             </li>
 *             <li>
 *                <p>The maximum allowed size of a certificate chain is 2 MB.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <i>Enforcement of Critical Constraints</i>
 *          </p>
 *          <p>Amazon Web Services Private CA allows the following extensions to be marked critical in the imported CA
 * 			certificate or chain.</p>
 *          <ul>
 *             <li>
 *                <p>Basic constraints (<i>must</i> be marked critical)</p>
 *             </li>
 *             <li>
 *                <p>Subject alternative names</p>
 *             </li>
 *             <li>
 *                <p>Key usage</p>
 *             </li>
 *             <li>
 *                <p>Extended key usage</p>
 *             </li>
 *             <li>
 *                <p>Authority key identifier</p>
 *             </li>
 *             <li>
 *                <p>Subject key identifier</p>
 *             </li>
 *             <li>
 *                <p>Issuer alternative name</p>
 *             </li>
 *             <li>
 *                <p>Subject directory attributes</p>
 *             </li>
 *             <li>
 *                <p>Subject information access</p>
 *             </li>
 *             <li>
 *                <p>Certificate policies</p>
 *             </li>
 *             <li>
 *                <p>Policy mappings</p>
 *             </li>
 *             <li>
 *                <p>Inhibit anyPolicy</p>
 *             </li>
 *          </ul>
 *          <p>Amazon Web Services Private CA rejects the following extensions when they are marked critical in an
 * 			imported CA certificate or chain.</p>
 *          <ul>
 *             <li>
 *                <p>Name constraints</p>
 *             </li>
 *             <li>
 *                <p>Policy constraints</p>
 *             </li>
 *             <li>
 *                <p>CRL distribution points</p>
 *             </li>
 *             <li>
 *                <p>Authority information access</p>
 *             </li>
 *             <li>
 *                <p>Freshest CRL</p>
 *             </li>
 *             <li>
 *                <p>Any other extension</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, ImportCertificateAuthorityCertificateCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, ImportCertificateAuthorityCertificateCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const input = { // ImportCertificateAuthorityCertificateRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 *   Certificate: "BLOB_VALUE", // required
 *   CertificateChain: "BLOB_VALUE",
 * };
 * const command = new ImportCertificateAuthorityCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ImportCertificateAuthorityCertificateCommandInput - {@link ImportCertificateAuthorityCertificateCommandInput}
 * @returns {@link ImportCertificateAuthorityCertificateCommandOutput}
 * @see {@link ImportCertificateAuthorityCertificateCommandInput} for command's `input` shape.
 * @see {@link ImportCertificateAuthorityCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link CertificateMismatchException} (client fault)
 *  <p>The certificate authority certificate you are importing does not comply with
 * 			conditions specified in the certificate that signed it.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>A previous update to your private CA is still ongoing.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 * 			resource.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request action cannot be performed or is prohibited.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The state of the private CA does not allow this action to occur.</p>
 *
 * @throws {@link MalformedCertificateException} (client fault)
 *  <p>One or more fields in the certificate are invalid.</p>
 *
 * @throws {@link RequestFailedException} (client fault)
 *  <p>The request has failed for an unspecified reason.</p>
 *
 * @throws {@link RequestInProgressException} (client fault)
 *  <p>Your request is already in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy
 * 			cannot be found.</p>
 *
 * @throws {@link ACMPCAServiceException}
 * <p>Base exception class for all service exceptions from ACMPCA service.</p>
 *
 */
export class ImportCertificateAuthorityCertificateCommand extends $Command<
  ImportCertificateAuthorityCertificateCommandInput,
  ImportCertificateAuthorityCertificateCommandOutput,
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
  constructor(readonly input: ImportCertificateAuthorityCertificateCommandInput) {
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
  ): Handler<ImportCertificateAuthorityCertificateCommandInput, ImportCertificateAuthorityCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportCertificateAuthorityCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "ImportCertificateAuthorityCertificateCommand";
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
  private serialize(
    input: ImportCertificateAuthorityCertificateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ImportCertificateAuthorityCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ImportCertificateAuthorityCertificateCommandOutput> {
    return de_ImportCertificateAuthorityCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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
import { GetCertificateAuthorityCsrRequest, GetCertificateAuthorityCsrResponse } from "../models/models_0";
import { de_GetCertificateAuthorityCsrCommand, se_GetCertificateAuthorityCsrCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCertificateAuthorityCsrCommand}.
 */
export interface GetCertificateAuthorityCsrCommandInput extends GetCertificateAuthorityCsrRequest {}
/**
 * @public
 *
 * The output of {@link GetCertificateAuthorityCsrCommand}.
 */
export interface GetCertificateAuthorityCsrCommandOutput extends GetCertificateAuthorityCsrResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the certificate signing request (CSR) for your private certificate authority
 * 			(CA). The CSR is created when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. Sign the CSR with your Amazon Web Services Private CA-hosted
 * 			or on-premises root or subordinate CA. Then import the signed certificate back into
 * 			Amazon Web Services Private CA by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action. The CSR is returned as a
 * 			base64 PEM-encoded string. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, GetCertificateAuthorityCsrCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, GetCertificateAuthorityCsrCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const input = { // GetCertificateAuthorityCsrRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 * };
 * const command = new GetCertificateAuthorityCsrCommand(input);
 * const response = await client.send(command);
 * // { // GetCertificateAuthorityCsrResponse
 * //   Csr: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCertificateAuthorityCsrCommandInput - {@link GetCertificateAuthorityCsrCommandInput}
 * @returns {@link GetCertificateAuthorityCsrCommandOutput}
 * @see {@link GetCertificateAuthorityCsrCommandInput} for command's `input` shape.
 * @see {@link GetCertificateAuthorityCsrCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 * 			resource.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The state of the private CA does not allow this action to occur.</p>
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
export class GetCertificateAuthorityCsrCommand extends $Command<
  GetCertificateAuthorityCsrCommandInput,
  GetCertificateAuthorityCsrCommandOutput,
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
  constructor(readonly input: GetCertificateAuthorityCsrCommandInput) {
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
  ): Handler<GetCertificateAuthorityCsrCommandInput, GetCertificateAuthorityCsrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCertificateAuthorityCsrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "GetCertificateAuthorityCsrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ACMPrivateCA",
        operation: "GetCertificateAuthorityCsr",
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
  private serialize(input: GetCertificateAuthorityCsrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCertificateAuthorityCsrCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCertificateAuthorityCsrCommandOutput> {
    return de_GetCertificateAuthorityCsrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

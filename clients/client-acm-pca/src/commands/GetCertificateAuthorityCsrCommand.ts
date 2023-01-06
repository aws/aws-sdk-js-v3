// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import {
  GetCertificateAuthorityCsrRequest,
  GetCertificateAuthorityCsrRequestFilterSensitiveLog,
  GetCertificateAuthorityCsrResponse,
  GetCertificateAuthorityCsrResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetCertificateAuthorityCsrCommand,
  serializeAws_json1_1GetCertificateAuthorityCsrCommand,
} from "../protocols/Aws_json1_1";

export interface GetCertificateAuthorityCsrCommandInput extends GetCertificateAuthorityCsrRequest {}
export interface GetCertificateAuthorityCsrCommandOutput extends GetCertificateAuthorityCsrResponse, __MetadataBearer {}

/**
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
 * const command = new GetCertificateAuthorityCsrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCertificateAuthorityCsrCommandInput} for command's `input` shape.
 * @see {@link GetCertificateAuthorityCsrCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
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
      inputFilterSensitiveLog: GetCertificateAuthorityCsrRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCertificateAuthorityCsrResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCertificateAuthorityCsrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCertificateAuthorityCsrCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCertificateAuthorityCsrCommandOutput> {
    return deserializeAws_json1_1GetCertificateAuthorityCsrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  UploadSigningCertificateRequest,
  UploadSigningCertificateRequestFilterSensitiveLog,
  UploadSigningCertificateResponse,
  UploadSigningCertificateResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryUploadSigningCertificateCommand,
  serializeAws_queryUploadSigningCertificateCommand,
} from "../protocols/Aws_query";

export interface UploadSigningCertificateCommandInput extends UploadSigningCertificateRequest {}
export interface UploadSigningCertificateCommandOutput extends UploadSigningCertificateResponse, __MetadataBearer {}

/**
 * <p>Uploads an X.509 signing certificate and associates it with the specified IAM user.
 *             Some Amazon Web Services services require you to use certificates to validate requests that are signed
 *             with a corresponding private key. When you upload the certificate, its default status is
 *                 <code>Active</code>.</p>
 *         <p>For information about when you would use an X.509 signing certificate, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Managing
 *                 server certificates in IAM</a> in the
 *             <i>IAM User Guide</i>.</p>
 *         <p>If the <code>UserName</code> is not specified, the IAM user name is determined
 *             implicitly based on the Amazon Web Services access key ID used to sign the request. This operation
 *             works for access keys under the Amazon Web Services account. Consequently, you can use this operation
 *             to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no
 *             associated users.</p>
 *         <note>
 *             <p>Because the body of an X.509 certificate can be large, you should use POST rather
 *                 than GET when calling <code>UploadSigningCertificate</code>. For information about
 *                 setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing
 *                     Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For
 *                 general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query
 *                     requests</a> in the <i>IAM User Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UploadSigningCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UploadSigningCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UploadSigningCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UploadSigningCertificateCommandInput} for command's `input` shape.
 * @see {@link UploadSigningCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
      inputFilterSensitiveLog: UploadSigningCertificateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UploadSigningCertificateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UploadSigningCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUploadSigningCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadSigningCertificateCommandOutput> {
    return deserializeAws_queryUploadSigningCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

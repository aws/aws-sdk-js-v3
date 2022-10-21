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
import { DeleteServerCertificateRequest, DeleteServerCertificateRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryDeleteServerCertificateCommand,
  serializeAws_queryDeleteServerCertificateCommand,
} from "../protocols/Aws_query";

export interface DeleteServerCertificateCommandInput extends DeleteServerCertificateRequest {}
export interface DeleteServerCertificateCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified server certificate.</p>
 *         <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working
 *                 with server certificates</a> in the <i>IAM User Guide</i>. This
 *             topic also includes a list of Amazon Web Services services that can use the server certificates that
 *             you manage with IAM.</p>
 *         <important>
 *             <p> If you are using a server certificate with Elastic Load Balancing, deleting the
 *                 certificate could have implications for your application. If Elastic Load Balancing
 *                 doesn't detect the deletion of bound certificates, it may continue to use the
 *                 certificates. This could cause Elastic Load Balancing to stop accepting traffic. We
 *                 recommend that you remove the reference to the certificate from Elastic Load
 *                 Balancing before using this command to delete the certificate. For more information,
 *                 see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html">DeleteLoadBalancerListeners</a> in the <i>Elastic Load Balancing API
 *                     Reference</i>.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteServerCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteServerCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteServerCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServerCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteServerCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class DeleteServerCertificateCommand extends $Command<
  DeleteServerCertificateCommandInput,
  DeleteServerCertificateCommandOutput,
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

  constructor(readonly input: DeleteServerCertificateCommandInput) {
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
  ): Handler<DeleteServerCertificateCommandInput, DeleteServerCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteServerCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteServerCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteServerCertificateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteServerCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteServerCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteServerCertificateCommandOutput> {
    return deserializeAws_queryDeleteServerCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListServerCertificatesRequest, ListServerCertificatesResponse } from "../models/models_0";
import {
  deserializeAws_queryListServerCertificatesCommand,
  serializeAws_queryListServerCertificatesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ListServerCertificatesCommandInput = ListServerCertificatesRequest;
export type ListServerCertificatesCommandOutput = ListServerCertificatesResponse & __MetadataBearer;

/**
 * <p>Lists the server certificates stored in IAM that have the specified path prefix. If
 *          none exist, the operation returns an empty list.</p>
 *          <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *          parameters.</p>
 *          <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with
 *             Server Certificates</a> in the <i>IAM User Guide</i>. This topic
 *          also includes a list of AWS services that can use the server certificates that you manage
 *          with IAM.</p>
 */
export class ListServerCertificatesCommand extends $Command<
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListServerCertificatesCommandInput) {
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
  ): Handler<ListServerCertificatesCommandInput, ListServerCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListServerCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServerCertificatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListServerCertificatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListServerCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListServerCertificatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListServerCertificatesCommandOutput> {
    return deserializeAws_queryListServerCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

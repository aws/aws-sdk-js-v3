import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import { ListApplicationsRequest, ListApplicationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListApplicationsCommand,
  serializeAws_json1_1ListApplicationsCommand,
} from "../protocols/Aws_json1_1";
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

export type ListApplicationsCommandInput = ListApplicationsRequest;
export type ListApplicationsCommandOutput = ListApplicationsResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Returns a list of Amazon Kinesis Analytics applications in your account.
 *             For each application, the response includes the application name,
 *             Amazon Resource Name (ARN), and status.
 *
 *             If the response returns the <code>HasMoreApplications</code> value as true,
 *             you can send another request by adding the
 *             <code>ExclusiveStartApplicationName</code> in the request body, and
 *             set the value of this to the last application name from
 *             the previous response.
 *         </p>
 *         <p>If you want detailed information about a specific application, use
 *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a>.</p>
 *         <p>This operation requires permissions to perform the
 *             <code>kinesisanalytics:ListApplications</code> action.</p>
 */
export class ListApplicationsCommand extends $Command<
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
  KinesisAnalyticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListApplicationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListApplicationsCommandInput, ListApplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsClient";
    const commandName = "ListApplicationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListApplicationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListApplicationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListApplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListApplicationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListApplicationsCommandOutput> {
    return deserializeAws_json1_1ListApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

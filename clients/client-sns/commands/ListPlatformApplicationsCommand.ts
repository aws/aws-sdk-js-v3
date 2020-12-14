import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListPlatformApplicationsInput, ListPlatformApplicationsResponse } from "../models/models_0";
import {
  deserializeAws_queryListPlatformApplicationsCommand,
  serializeAws_queryListPlatformApplicationsCommand,
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

export type ListPlatformApplicationsCommandInput = ListPlatformApplicationsInput;
export type ListPlatformApplicationsCommandOutput = ListPlatformApplicationsResponse & __MetadataBearer;

/**
 * <p>Lists the platform application objects for the supported push notification services,
 *             such as APNS and GCM (Firebase Cloud Messaging). The results for
 *                 <code>ListPlatformApplications</code> are paginated and return a limited list of
 *             applications, up to 100. If additional records are available after the first page
 *             results, then a NextToken string will be returned. To receive the next page, you call
 *                 <code>ListPlatformApplications</code> using the NextToken string received from the
 *             previous call. When there are no more records to return, <code>NextToken</code> will be
 *             null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
 *             Notifications</a>. </p>
 *         <p>This action is throttled at 15 transactions per second (TPS).</p>
 */
export class ListPlatformApplicationsCommand extends $Command<
  ListPlatformApplicationsCommandInput,
  ListPlatformApplicationsCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPlatformApplicationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPlatformApplicationsCommandInput, ListPlatformApplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "ListPlatformApplicationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPlatformApplicationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListPlatformApplicationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPlatformApplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListPlatformApplicationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPlatformApplicationsCommandOutput> {
    return deserializeAws_queryListPlatformApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

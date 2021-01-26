import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import {
  DeleteApplicationReferenceDataSourceRequest,
  DeleteApplicationReferenceDataSourceResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand,
  serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand,
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

export type DeleteApplicationReferenceDataSourceCommandInput = DeleteApplicationReferenceDataSourceRequest;
export type DeleteApplicationReferenceDataSourceCommandOutput = DeleteApplicationReferenceDataSourceResponse &
  __MetadataBearer;

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Deletes a reference data source configuration from the specified application configuration.</p>
 *         <p>If the application is running, Amazon Kinesis Analytics immediately removes the in-application table
 *             that you created using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation.  </p>
 *
 *         <p>This operation requires permissions to perform the <code>kinesisanalytics.DeleteApplicationReferenceDataSource</code>
 *         action.</p>
 */
export class DeleteApplicationReferenceDataSourceCommand extends $Command<
  DeleteApplicationReferenceDataSourceCommandInput,
  DeleteApplicationReferenceDataSourceCommandOutput,
  KinesisAnalyticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteApplicationReferenceDataSourceCommandInput) {
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
  ): Handler<DeleteApplicationReferenceDataSourceCommandInput, DeleteApplicationReferenceDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsClient";
    const commandName = "DeleteApplicationReferenceDataSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteApplicationReferenceDataSourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteApplicationReferenceDataSourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteApplicationReferenceDataSourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteApplicationReferenceDataSourceCommandOutput> {
    return deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

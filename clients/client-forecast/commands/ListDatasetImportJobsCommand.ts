import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListDatasetImportJobsRequest, ListDatasetImportJobsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListDatasetImportJobsCommand,
  serializeAws_json1_1ListDatasetImportJobsCommand,
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

export type ListDatasetImportJobsCommandInput = ListDatasetImportJobsRequest;
export type ListDatasetImportJobsCommandOutput = ListDatasetImportJobsResponse & __MetadataBearer;

/**
 * <p>Returns a list of dataset import jobs created using the <a>CreateDatasetImportJob</a> operation. For each import job, this operation returns a
 *       summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the
 *       complete set of properties by using the ARN with the <a>DescribeDatasetImportJob</a> operation. You can filter the list by providing an array of <a>Filter</a>
 *       objects.</p>
 */
export class ListDatasetImportJobsCommand extends $Command<
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDatasetImportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDatasetImportJobsCommandInput, ListDatasetImportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListDatasetImportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDatasetImportJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDatasetImportJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDatasetImportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDatasetImportJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatasetImportJobsCommandOutput> {
    return deserializeAws_json1_1ListDatasetImportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

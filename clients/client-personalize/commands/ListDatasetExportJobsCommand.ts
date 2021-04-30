import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListDatasetExportJobsRequest, ListDatasetExportJobsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListDatasetExportJobsCommand,
  serializeAws_json1_1ListDatasetExportJobsCommand,
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

export interface ListDatasetExportJobsCommandInput extends ListDatasetExportJobsRequest {}
export interface ListDatasetExportJobsCommandOutput extends ListDatasetExportJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of dataset export jobs that use the given dataset. When a dataset is not
 *       specified, all the dataset export jobs associated with the account are listed. The response
 *       provides the properties for each dataset export job, including the Amazon Resource Name (ARN).
 *       For more information on dataset export jobs, see <a>CreateDatasetExportJob</a>. For
 *       more information on datasets, see <a>CreateDataset</a>.</p>
 */
export class ListDatasetExportJobsCommand extends $Command<
  ListDatasetExportJobsCommandInput,
  ListDatasetExportJobsCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDatasetExportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDatasetExportJobsCommandInput, ListDatasetExportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "ListDatasetExportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDatasetExportJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDatasetExportJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDatasetExportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDatasetExportJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatasetExportJobsCommandOutput> {
    return deserializeAws_json1_1ListDatasetExportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { CreateDatasetImportJobRequest, CreateDatasetImportJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDatasetImportJobCommand,
  serializeAws_json1_1CreateDatasetImportJobCommand,
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

export type CreateDatasetImportJobCommandInput = CreateDatasetImportJobRequest;
export type CreateDatasetImportJobCommandOutput = CreateDatasetImportJobResponse & __MetadataBearer;

/**
 * <p>Imports your training data to an Amazon Forecast dataset. You provide the location of your
 *       training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset
 *       that you want to import the data to.</p>
 *          <p>You must specify a <a>DataSource</a> object that includes an AWS Identity and Access Management (IAM)
 *       role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and
 *       processes it in an internal AWS system. For more information, see <a>aws-forecast-iam-roles</a>.</p>
 *          <p>The training data must be in CSV format. The delimiter must be a comma (,).</p>
 *          <p>You can specify the path to a specific CSV file, the S3 bucket, or to a folder in the S3
 *       bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000
 *       files.</p>
 *
 *
 *          <p>Because dataset imports are not aggregated, your most recent dataset import is the one
 *       that is used when training a predictor or generating a forecast. Make sure that your most
 *       recent dataset import contains all of the data you want to model off of, and not just the new
 *       data collected since the previous import.</p>
 *
 *
 *          <p>To get a list of all your dataset import jobs, filtered by specified criteria, use the
 *         <a>ListDatasetImportJobs</a> operation.</p>
 */
export class CreateDatasetImportJobCommand extends $Command<
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDatasetImportJobCommandInput) {
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
  ): Handler<CreateDatasetImportJobCommandInput, CreateDatasetImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreateDatasetImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDatasetImportJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDatasetImportJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDatasetImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDatasetImportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDatasetImportJobCommandOutput> {
    return deserializeAws_json1_1CreateDatasetImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

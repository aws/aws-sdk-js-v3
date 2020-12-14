import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
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
 * <p>Creates a job that imports training data from your data source (an Amazon S3 bucket) to an
 *       Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an
 *       AWS Identity and Access Management (IAM) role that has permission to read from the data source, as Amazon Personalize makes a
 *       copy of your data and processes it in an internal AWS system.</p>
 *          <important>
 *             <p>The dataset import job replaces any previous data in the dataset.</p>
 *          </important>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A dataset import job can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the import job, call <a>DescribeDatasetImportJob</a>,
 *       providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is
 *       complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response
 *       includes a <code>failureReason</code> key, which describes why the job failed.</p>
 *          <note>
 *             <p>Importing takes time. You must wait until the status shows as ACTIVE before training a
 *         model using the dataset.</p>
 *          </note>
 *
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListDatasetImportJobs</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeDatasetImportJob</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class CreateDatasetImportJobCommand extends $Command<
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput,
  PersonalizeClientResolvedConfig
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
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDatasetImportJobCommandInput, CreateDatasetImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
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

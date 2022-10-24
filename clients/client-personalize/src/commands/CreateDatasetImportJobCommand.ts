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

import {
  CreateDatasetImportJobRequest,
  CreateDatasetImportJobRequestFilterSensitiveLog,
  CreateDatasetImportJobResponse,
  CreateDatasetImportJobResponseFilterSensitiveLog,
} from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import {
  deserializeAws_json1_1CreateDatasetImportJobCommand,
  serializeAws_json1_1CreateDatasetImportJobCommand,
} from "../protocols/Aws_json1_1";

export interface CreateDatasetImportJobCommandInput extends CreateDatasetImportJobRequest {}
export interface CreateDatasetImportJobCommandOutput extends CreateDatasetImportJobResponse, __MetadataBearer {}

/**
 * <p>Creates a job that imports training data from your data source (an
 *       Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the
 *       training data, you must specify an IAM service role that has permission to
 *       read from the data source, as Amazon Personalize makes a copy of your data and
 *       processes it internally. For information on granting access to your Amazon S3
 *       bucket, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html">Giving
 *         Amazon Personalize Access to Amazon S3 Resources</a>. </p>
 *          <important>
 *             <p>By default, a dataset import job replaces any existing data in the
 *         dataset that you imported in bulk. To add new records without replacing
 *         existing data, specify INCREMENTAL for the import mode in the
 *         CreateDatasetImportJob operation.</p>
 *          </important>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A dataset import job can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
 *           FAILED</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the import job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>, providing the Amazon Resource Name
 *       (ARN) of the dataset import job. The dataset import is complete when the
 *       status shows as ACTIVE. If the status shows as CREATE FAILED, the response
 *       includes a <code>failureReason</code> key, which describes why the job
 *       failed.</p>
 *          <note>
 *             <p>Importing takes time. You must wait until the status shows as ACTIVE
 *         before training a model using the dataset.</p>
 *          </note>
 *
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateDatasetImportJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateDatasetImportJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateDatasetImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetImportJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 */
export class CreateDatasetImportJobCommand extends $Command<
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput,
  PersonalizeClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDatasetImportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateDatasetImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDatasetImportJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDatasetImportJobResponseFilterSensitiveLog,
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

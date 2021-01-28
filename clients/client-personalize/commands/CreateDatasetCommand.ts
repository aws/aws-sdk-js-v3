import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateDatasetRequest, CreateDatasetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDatasetCommand,
  serializeAws_json1_1CreateDatasetCommand,
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

export type CreateDatasetCommandInput = CreateDatasetRequest;
export type CreateDatasetCommandOutput = CreateDatasetResponse & __MetadataBearer;

/**
 * <p>Creates an empty dataset and adds it to the specified dataset group. Use <a>CreateDatasetImportJob</a> to import your training data to a dataset.</p>
 *          <p>There are three types of datasets:</p>
 *          <ul>
 *             <li>
 *                <p>Interactions</p>
 *             </li>
 *             <li>
 *                <p>Items</p>
 *             </li>
 *             <li>
 *                <p>Users</p>
 *             </li>
 *          </ul>
 *          <p>Each dataset type has an associated schema with required field types. Only the
 *         <code>Interactions</code> dataset is required in order to train a model (also referred to as
 *       creating a solution).</p>
 *          <p>A dataset can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the dataset, call <a>DescribeDataset</a>.</p>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateDatasetGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListDatasets</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeDataset</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteDataset</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class CreateDatasetCommand extends $Command<
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDatasetCommandInput) {
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
  ): Handler<CreateDatasetCommandInput, CreateDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDatasetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDatasetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDatasetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDatasetCommandOutput> {
    return deserializeAws_json1_1CreateDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

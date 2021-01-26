import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateDatasetGroupRequest, CreateDatasetGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDatasetGroupCommand,
  serializeAws_json1_1CreateDatasetGroupCommand,
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

export type CreateDatasetGroupCommandInput = CreateDatasetGroupRequest;
export type CreateDatasetGroupCommandOutput = CreateDatasetGroupResponse & __MetadataBearer;

/**
 * <p>Creates an empty dataset group. A dataset group contains related datasets that supply data
 *       for training a model. A dataset group can contain at most three datasets, one for each type of
 *       dataset:</p>
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
 *          <p>To train a model (create a solution), a dataset group that contains an
 *         <code>Interactions</code> dataset is required. Call <a>CreateDataset</a> to add a
 *       dataset to the group.</p>
 *          <p>A dataset group can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the dataset group, call <a>DescribeDatasetGroup</a>. If
 *       the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key,
 *       which describes why the creation failed.</p>
 *          <note>
 *             <p>You must wait until the <code>status</code> of the dataset group is <code>ACTIVE</code>
 *         before adding a dataset to the group.</p>
 *          </note>
 *          <p>You can specify an AWS Key Management Service (KMS) key to encrypt the datasets in the group. If you
 *       specify a KMS key, you must also include an AWS Identity and Access Management (IAM) role that has permission to
 *       access the key.</p>
 *          <p class="title">
 *             <b>APIs that require a dataset group ARN in the request</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateDataset</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateEventTracker</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateSolution</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListDatasetGroups</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeDatasetGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteDatasetGroup</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class CreateDatasetGroupCommand extends $Command<
  CreateDatasetGroupCommandInput,
  CreateDatasetGroupCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDatasetGroupCommandInput) {
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
  ): Handler<CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateDatasetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDatasetGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDatasetGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDatasetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDatasetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDatasetGroupCommandOutput> {
    return deserializeAws_json1_1CreateDatasetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

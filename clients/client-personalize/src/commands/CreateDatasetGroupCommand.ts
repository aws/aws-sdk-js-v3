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
  CreateDatasetGroupRequest,
  CreateDatasetGroupRequestFilterSensitiveLog,
  CreateDatasetGroupResponse,
  CreateDatasetGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import {
  deserializeAws_json1_1CreateDatasetGroupCommand,
  serializeAws_json1_1CreateDatasetGroupCommand,
} from "../protocols/Aws_json1_1";

export interface CreateDatasetGroupCommandInput extends CreateDatasetGroupRequest {}
export interface CreateDatasetGroupCommandOutput extends CreateDatasetGroupResponse, __MetadataBearer {}

/**
 * <p>Creates an empty dataset group. A dataset group is a container for
 *       Amazon Personalize resources. A dataset group can contain at most three datasets, one
 *       for each type of dataset:</p>
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
 *          <p> A dataset group can be a Domain dataset group, where you specify a
 *       domain and use pre-configured resources like recommenders, or a
 *       Custom dataset group, where you use custom resources, such as a solution
 *       with a solution version, that you deploy with a campaign. If you start
 *       with a Domain dataset group, you can still add custom resources such as
 *       solutions and solution versions trained with recipes for custom use cases
 *       and deployed with campaigns. </p>
 *          <p>A dataset group can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
 *           FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the dataset group, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>. If the status shows as CREATE FAILED, the
 *       response includes a <code>failureReason</code> key, which describes why
 *       the creation failed.</p>
 *          <note>
 *             <p>You must wait until the <code>status</code> of the dataset group is
 *           <code>ACTIVE</code> before adding a dataset to the group.</p>
 *          </note>
 *          <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in
 *       the group. If you specify a KMS key, you must also include an Identity and Access Management
 *       (IAM) role that has permission to access the key.</p>
 *          <p class="title">
 *             <b>APIs that require a dataset group ARN in the request</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDatasetGroup.html">DeleteDatasetGroup</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateDatasetGroupCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateDatasetGroupCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateDatasetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 */
export class CreateDatasetGroupCommand extends $Command<
  CreateDatasetGroupCommandInput,
  CreateDatasetGroupCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDatasetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateDatasetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDatasetGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDatasetGroupResponseFilterSensitiveLog,
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

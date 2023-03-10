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

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import {
  UpdateDeploymentGroupInput,
  UpdateDeploymentGroupInputFilterSensitiveLog,
  UpdateDeploymentGroupOutput,
  UpdateDeploymentGroupOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDeploymentGroupCommand,
  serializeAws_json1_1UpdateDeploymentGroupCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link UpdateDeploymentGroupCommand}.
 */
export interface UpdateDeploymentGroupCommandInput extends UpdateDeploymentGroupInput {}
/**
 * The output of {@link UpdateDeploymentGroupCommand}.
 */
export interface UpdateDeploymentGroupCommandOutput extends UpdateDeploymentGroupOutput, __MetadataBearer {}

/**
 * <p>Changes information about a deployment group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, UpdateDeploymentGroupCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, UpdateDeploymentGroupCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new UpdateDeploymentGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeploymentGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateDeploymentGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link AlarmsLimitExceededException} (client fault)
 *  <p>The maximum number of alarms for a deployment group (10) was exceeded.</p>
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *  <p>The application does not exist with the IAM user or Amazon Web Services account.</p>
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link DeploymentConfigDoesNotExistException} (client fault)
 *  <p>The deployment configuration does not exist with the IAM user or
 *                 Amazon Web Services account.</p>
 *
 * @throws {@link DeploymentGroupAlreadyExistsException} (client fault)
 *  <p>A deployment group with the specified name with the IAM user or Amazon Web Services account already exists.</p>
 *
 * @throws {@link DeploymentGroupDoesNotExistException} (client fault)
 *  <p>The named deployment group with the IAM user or Amazon Web Services account does not exist.</p>
 *
 * @throws {@link DeploymentGroupNameRequiredException} (client fault)
 *  <p>The deployment group name was not specified.</p>
 *
 * @throws {@link ECSServiceMappingLimitExceededException} (client fault)
 *  <p> The Amazon ECS service is associated with more than one deployment groups. An
 *             Amazon ECS service can be associated with only one deployment group. </p>
 *
 * @throws {@link InvalidAlarmConfigException} (client fault)
 *  <p>The format of the alarm configuration is invalid. Possible causes include:</p>
 *         <ul>
 *             <li>
 *                 <p>The alarm list is null.</p>
 *             </li>
 *             <li>
 *                 <p>The alarm object is null.</p>
 *             </li>
 *             <li>
 *                 <p>The alarm name is empty or null or exceeds the limit of 255 characters.</p>
 *             </li>
 *             <li>
 *                 <p>Two alarms with the same name have been specified.</p>
 *             </li>
 *             <li>
 *                 <p>The alarm configuration is enabled, but the alarm list is empty.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *  <p>The application name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidAutoRollbackConfigException} (client fault)
 *  <p>The automatic rollback configuration was specified in an invalid format. For example,
 *             automatic rollback is enabled, but an invalid triggering event type or no event types
 *             were listed.</p>
 *
 * @throws {@link InvalidAutoScalingGroupException} (client fault)
 *  <p>The Auto Scaling group was specified in an invalid format or does not
 *             exist.</p>
 *
 * @throws {@link InvalidBlueGreenDeploymentConfigurationException} (client fault)
 *  <p>The configuration for the blue/green deployment group was provided in an invalid
 *             format. For information about deployment configuration format, see <a>CreateDeploymentConfig</a>.</p>
 *
 * @throws {@link InvalidDeploymentConfigNameException} (client fault)
 *  <p>The deployment configuration name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidDeploymentGroupNameException} (client fault)
 *  <p>The deployment group name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidDeploymentStyleException} (client fault)
 *  <p>An invalid deployment style was specified. Valid deployment types include "IN_PLACE"
 *             and "BLUE_GREEN." Valid deployment options include "WITH_TRAFFIC_CONTROL" and
 *             "WITHOUT_TRAFFIC_CONTROL."</p>
 *
 * @throws {@link InvalidEC2TagCombinationException} (client fault)
 *  <p>A call was submitted that specified both Ec2TagFilters and Ec2TagSet, but only one of
 *             these data types can be used in a single call.</p>
 *
 * @throws {@link InvalidEC2TagException} (client fault)
 *  <p>The tag was specified in an invalid format.</p>
 *
 * @throws {@link InvalidECSServiceException} (client fault)
 *  <p> The Amazon ECS service identifier is not valid. </p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input was specified in an invalid format.</p>
 *
 * @throws {@link InvalidLoadBalancerInfoException} (client fault)
 *  <p>An invalid load balancer name, or no load balancer name, was specified.</p>
 *
 * @throws {@link InvalidOnPremisesTagCombinationException} (client fault)
 *  <p>A call was submitted that specified both OnPremisesTagFilters and OnPremisesTagSet,
 *             but only one of these data types can be used in a single call.</p>
 *
 * @throws {@link InvalidRoleException} (client fault)
 *  <p>The service role ARN was specified in an invalid format. Or, if an Auto Scaling
 *             group was specified, the specified service role does not grant the appropriate
 *             permissions to Amazon EC2 Auto Scaling.</p>
 *
 * @throws {@link InvalidTagException} (client fault)
 *  <p>The tag was specified in an invalid format.</p>
 *
 * @throws {@link InvalidTargetGroupPairException} (client fault)
 *  <p> A target group pair associated with this deployment is not valid. </p>
 *
 * @throws {@link InvalidTrafficRoutingConfigurationException} (client fault)
 *  <p> The configuration that specifies how traffic is routed during a deployment is
 *             invalid.</p>
 *
 * @throws {@link InvalidTriggerConfigException} (client fault)
 *  <p>The trigger was specified in an invalid format.</p>
 *
 * @throws {@link LifecycleHookLimitExceededException} (client fault)
 *  <p>The limit for lifecycle hooks was exceeded.</p>
 *
 * @throws {@link TagSetListLimitExceededException} (client fault)
 *  <p>The number of tag groups included in the tag set list exceeded the maximum allowed
 *             limit of 3.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An API function was called too frequently.</p>
 *
 * @throws {@link TriggerTargetsLimitExceededException} (client fault)
 *  <p>The maximum allowed number of triggers was exceeded.</p>
 *
 *
 */
export class UpdateDeploymentGroupCommand extends $Command<
  UpdateDeploymentGroupCommandInput,
  UpdateDeploymentGroupCommandOutput,
  CodeDeployClientResolvedConfig
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

  constructor(readonly input: UpdateDeploymentGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDeploymentGroupCommandInput, UpdateDeploymentGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDeploymentGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "UpdateDeploymentGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDeploymentGroupInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDeploymentGroupOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDeploymentGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDeploymentGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDeploymentGroupCommandOutput> {
    return deserializeAws_json1_1UpdateDeploymentGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

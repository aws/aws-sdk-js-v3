// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { PutAccountSettingRequest, PutAccountSettingResponse } from "../models/models_0";
import { de_PutAccountSettingCommand, se_PutAccountSettingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutAccountSettingCommand}.
 */
export interface PutAccountSettingCommandInput extends PutAccountSettingRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountSettingCommand}.
 */
export interface PutAccountSettingCommandOutput extends PutAccountSettingResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies an account setting. Account settings are set on a per-Region basis.</p>
 *          <p>If you change the root user account setting, the default settings are reset for  users
 * 			and roles that do not have specified individual account settings. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html">Account
 * 				Settings</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>When  you specify <code>serviceLongArnFormat</code>, <code>taskLongArnFormat</code>, or
 * 				<code>containerInstanceLongArnFormat</code>, the Amazon Resource Name (ARN) and
 * 			resource ID format of the resource type for a specified user, role, or the root user for an
 * 			account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS
 * 			resource separately. The ARN and resource ID format of a resource is defined by the
 * 			opt-in status of the user or role that created the resource. You must turn on this
 * 			setting to use Amazon ECS features such as resource tagging.</p>
 *          <p>When you specify <code>awsvpcTrunking</code>, the elastic network interface (ENI) limit for
 * 			any new container instances that support the feature is changed. If
 * 				<code>awsvpcTrunking</code> is turned on, any new container instances that support
 * 			the feature are launched have the increased ENI limits available to them. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html">Elastic Network
 * 				Interface Trunking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>When you specify <code>containerInsights</code>, the default setting indicating whether
 * 			Amazon Web Services CloudWatch Container Insights is turned on for your clusters is changed. If
 * 				<code>containerInsights</code> is turned on, any new clusters that are created will
 * 			have Container Insights turned on unless you disable it during cluster creation. For
 * 			more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html">CloudWatch
 * 				Container Insights</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>Amazon ECS is introducing tagging authorization for resource creation. Users must have
 * 			permissions for actions that create the resource, such as <code>ecsCreateCluster</code>.
 * 			If tags are specified when you create a resource, Amazon Web Services performs additional
 * 			authorization to verify if users or roles have permissions to create tags. Therefore,
 * 			you must grant explicit permissions to use the <code>ecs:TagResource</code> action. For
 * 			more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/supported-iam-actions-tagging.html">Grant
 * 				permission to tag resources on creation</a> in the <i>Amazon ECS Developer
 * 					Guide</i>.</p>
 *          <p>When Amazon Web Services determines that a security or infrastructure update is needed for an Amazon ECS
 * 			task hosted on Fargate, the tasks need to be stopped and new tasks launched to replace
 * 			them. Use <code>fargateTaskRetirementWaitPeriod</code> to configure the wait time to
 * 			retire a Fargate task. For information about the Fargate tasks maintenance, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-maintenance.html">Amazon Web Services Fargate task maintenance</a> in the <i>Amazon ECS Developer
 * 					Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, PutAccountSettingCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, PutAccountSettingCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // PutAccountSettingRequest
 *   name: "serviceLongArnFormat" || "taskLongArnFormat" || "containerInstanceLongArnFormat" || "awsvpcTrunking" || "containerInsights" || "fargateFIPSMode" || "tagResourceAuthorization" || "fargateTaskRetirementWaitPeriod", // required
 *   value: "STRING_VALUE", // required
 *   principalArn: "STRING_VALUE",
 * };
 * const command = new PutAccountSettingCommand(input);
 * const response = await client.send(command);
 * // { // PutAccountSettingResponse
 * //   setting: { // Setting
 * //     name: "serviceLongArnFormat" || "taskLongArnFormat" || "containerInstanceLongArnFormat" || "awsvpcTrunking" || "containerInsights" || "fargateFIPSMode" || "tagResourceAuthorization" || "fargateTaskRetirementWaitPeriod",
 * //     value: "STRING_VALUE",
 * //     principalArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutAccountSettingCommandInput - {@link PutAccountSettingCommandInput}
 * @returns {@link PutAccountSettingCommandOutput}
 * @see {@link PutAccountSettingCommandInput} for command's `input` shape.
 * @see {@link PutAccountSettingCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @example To modify your account settings
 * ```javascript
 * // This example modifies your account settings to opt in to the new ARN and resource ID format for Amazon ECS services. If you’re using this command as the root user, then changes apply to the entire AWS account, unless an IAM user or role explicitly overrides these settings for themselves.
 * const input = {
 *   "name": "serviceLongArnFormat",
 *   "value": "enabled"
 * };
 * const command = new PutAccountSettingCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "setting": {
 *     "name": "serviceLongArnFormat",
 *     "value": "enabled",
 *     "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 *   }
 * }
 * *\/
 * // example id: to-modify-the-account-settings-for-your-iam-user-account-1549523130939
 * ```
 *
 * @example To modify the account settings for a specific IAM user or IAM role
 * ```javascript
 * // This example modifies the account setting for a specific IAM user or IAM role to opt in to the new ARN and resource ID format for Amazon ECS container instances. If you’re using this command as the root user, then changes apply to the entire AWS account, unless an IAM user or role explicitly overrides these settings for themselves.
 * const input = {
 *   "name": "containerInstanceLongArnFormat",
 *   "value": "enabled",
 *   "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 * };
 * const command = new PutAccountSettingCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "setting": {
 *     "name": "containerInstanceLongArnFormat",
 *     "value": "enabled",
 *     "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
 *   }
 * }
 * *\/
 * // example id: to-modify-the-account-settings-for-a-specific-iam-user-or-iam-role-1549523518390
 * ```
 *
 */
export class PutAccountSettingCommand extends $Command<
  PutAccountSettingCommandInput,
  PutAccountSettingCommandOutput,
  ECSClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: PutAccountSettingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAccountSettingCommandInput, PutAccountSettingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAccountSettingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "PutAccountSettingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerServiceV20141113",
        operation: "PutAccountSetting",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: PutAccountSettingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutAccountSettingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAccountSettingCommandOutput> {
    return de_PutAccountSettingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

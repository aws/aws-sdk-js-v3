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

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { GetDeploymentInput, GetDeploymentOutput } from "../models/models_0";
import { de_GetDeploymentCommand, se_GetDeploymentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDeploymentCommand}.
 */
export interface GetDeploymentCommandInput extends GetDeploymentInput {}
/**
 * @public
 *
 * The output of {@link GetDeploymentCommand}.
 */
export interface GetDeploymentCommandOutput extends GetDeploymentOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a deployment.</p>
 *          <note>
 *             <p> The <code>content</code> property of the <code>appSpecContent</code> object in
 *                 the returned revision is always null. Use <code>GetApplicationRevision</code> and
 *                 the <code>sha256</code> property of the returned <code>appSpecContent</code> object
 *                 to get the content of the deployment’s AppSpec file. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetDeploymentCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetDeploymentCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // GetDeploymentInput
 *   deploymentId: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentOutput
 * //   deploymentInfo: { // DeploymentInfo
 * //     applicationName: "STRING_VALUE",
 * //     deploymentGroupName: "STRING_VALUE",
 * //     deploymentConfigName: "STRING_VALUE",
 * //     deploymentId: "STRING_VALUE",
 * //     previousRevision: { // RevisionLocation
 * //       revisionType: "S3" || "GitHub" || "String" || "AppSpecContent",
 * //       s3Location: { // S3Location
 * //         bucket: "STRING_VALUE",
 * //         key: "STRING_VALUE",
 * //         bundleType: "tar" || "tgz" || "zip" || "YAML" || "JSON",
 * //         version: "STRING_VALUE",
 * //         eTag: "STRING_VALUE",
 * //       },
 * //       gitHubLocation: { // GitHubLocation
 * //         repository: "STRING_VALUE",
 * //         commitId: "STRING_VALUE",
 * //       },
 * //       string: { // RawString
 * //         content: "STRING_VALUE",
 * //         sha256: "STRING_VALUE",
 * //       },
 * //       appSpecContent: { // AppSpecContent
 * //         content: "STRING_VALUE",
 * //         sha256: "STRING_VALUE",
 * //       },
 * //     },
 * //     revision: {
 * //       revisionType: "S3" || "GitHub" || "String" || "AppSpecContent",
 * //       s3Location: {
 * //         bucket: "STRING_VALUE",
 * //         key: "STRING_VALUE",
 * //         bundleType: "tar" || "tgz" || "zip" || "YAML" || "JSON",
 * //         version: "STRING_VALUE",
 * //         eTag: "STRING_VALUE",
 * //       },
 * //       gitHubLocation: {
 * //         repository: "STRING_VALUE",
 * //         commitId: "STRING_VALUE",
 * //       },
 * //       string: {
 * //         content: "STRING_VALUE",
 * //         sha256: "STRING_VALUE",
 * //       },
 * //       appSpecContent: {
 * //         content: "STRING_VALUE",
 * //         sha256: "STRING_VALUE",
 * //       },
 * //     },
 * //     status: "Created" || "Queued" || "InProgress" || "Baking" || "Succeeded" || "Failed" || "Stopped" || "Ready",
 * //     errorInformation: { // ErrorInformation
 * //       code: "AGENT_ISSUE" || "ALARM_ACTIVE" || "APPLICATION_MISSING" || "AUTOSCALING_VALIDATION_ERROR" || "AUTO_SCALING_CONFIGURATION" || "AUTO_SCALING_IAM_ROLE_PERMISSIONS" || "CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND" || "CUSTOMER_APPLICATION_UNHEALTHY" || "DEPLOYMENT_GROUP_MISSING" || "ECS_UPDATE_ERROR" || "ELASTIC_LOAD_BALANCING_INVALID" || "ELB_INVALID_INSTANCE" || "HEALTH_CONSTRAINTS" || "HEALTH_CONSTRAINTS_INVALID" || "HOOK_EXECUTION_FAILURE" || "IAM_ROLE_MISSING" || "IAM_ROLE_PERMISSIONS" || "INTERNAL_ERROR" || "INVALID_ECS_SERVICE" || "INVALID_LAMBDA_CONFIGURATION" || "INVALID_LAMBDA_FUNCTION" || "INVALID_REVISION" || "MANUAL_STOP" || "MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION" || "MISSING_ELB_INFORMATION" || "MISSING_GITHUB_TOKEN" || "NO_EC2_SUBSCRIPTION" || "NO_INSTANCES" || "OVER_MAX_INSTANCES" || "RESOURCE_LIMIT_EXCEEDED" || "REVISION_MISSING" || "THROTTLED" || "TIMEOUT" || "CLOUDFORMATION_STACK_FAILURE",
 * //       message: "STRING_VALUE",
 * //     },
 * //     createTime: new Date("TIMESTAMP"),
 * //     startTime: new Date("TIMESTAMP"),
 * //     completeTime: new Date("TIMESTAMP"),
 * //     deploymentOverview: { // DeploymentOverview
 * //       Pending: Number("long"),
 * //       InProgress: Number("long"),
 * //       Succeeded: Number("long"),
 * //       Failed: Number("long"),
 * //       Skipped: Number("long"),
 * //       Ready: Number("long"),
 * //     },
 * //     description: "STRING_VALUE",
 * //     creator: "user" || "autoscaling" || "codeDeployRollback" || "CodeDeploy" || "CodeDeployAutoUpdate" || "CloudFormation" || "CloudFormationRollback",
 * //     ignoreApplicationStopFailures: true || false,
 * //     autoRollbackConfiguration: { // AutoRollbackConfiguration
 * //       enabled: true || false,
 * //       events: [ // AutoRollbackEventsList
 * //         "DEPLOYMENT_FAILURE" || "DEPLOYMENT_STOP_ON_ALARM" || "DEPLOYMENT_STOP_ON_REQUEST",
 * //       ],
 * //     },
 * //     updateOutdatedInstancesOnly: true || false,
 * //     rollbackInfo: { // RollbackInfo
 * //       rollbackDeploymentId: "STRING_VALUE",
 * //       rollbackTriggeringDeploymentId: "STRING_VALUE",
 * //       rollbackMessage: "STRING_VALUE",
 * //     },
 * //     deploymentStyle: { // DeploymentStyle
 * //       deploymentType: "IN_PLACE" || "BLUE_GREEN",
 * //       deploymentOption: "WITH_TRAFFIC_CONTROL" || "WITHOUT_TRAFFIC_CONTROL",
 * //     },
 * //     targetInstances: { // TargetInstances
 * //       tagFilters: [ // EC2TagFilterList
 * //         { // EC2TagFilter
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //           Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 * //         },
 * //       ],
 * //       autoScalingGroups: [ // AutoScalingGroupNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       ec2TagSet: { // EC2TagSet
 * //         ec2TagSetList: [ // EC2TagSetList
 * //           [
 * //             {
 * //               Key: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //               Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 * //             },
 * //           ],
 * //         ],
 * //       },
 * //     },
 * //     instanceTerminationWaitTimeStarted: true || false,
 * //     blueGreenDeploymentConfiguration: { // BlueGreenDeploymentConfiguration
 * //       terminateBlueInstancesOnDeploymentSuccess: { // BlueInstanceTerminationOption
 * //         action: "TERMINATE" || "KEEP_ALIVE",
 * //         terminationWaitTimeInMinutes: Number("int"),
 * //       },
 * //       deploymentReadyOption: { // DeploymentReadyOption
 * //         actionOnTimeout: "CONTINUE_DEPLOYMENT" || "STOP_DEPLOYMENT",
 * //         waitTimeInMinutes: Number("int"),
 * //       },
 * //       greenFleetProvisioningOption: { // GreenFleetProvisioningOption
 * //         action: "DISCOVER_EXISTING" || "COPY_AUTO_SCALING_GROUP",
 * //       },
 * //     },
 * //     loadBalancerInfo: { // LoadBalancerInfo
 * //       elbInfoList: [ // ELBInfoList
 * //         { // ELBInfo
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       targetGroupInfoList: [ // TargetGroupInfoList
 * //         { // TargetGroupInfo
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       targetGroupPairInfoList: [ // TargetGroupPairInfoList
 * //         { // TargetGroupPairInfo
 * //           targetGroups: [
 * //             {
 * //               name: "STRING_VALUE",
 * //             },
 * //           ],
 * //           prodTrafficRoute: { // TrafficRoute
 * //             listenerArns: [ // ListenerArnList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           testTrafficRoute: {
 * //             listenerArns: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     additionalDeploymentStatusInfo: "STRING_VALUE",
 * //     fileExistsBehavior: "DISALLOW" || "OVERWRITE" || "RETAIN",
 * //     deploymentStatusMessages: [ // DeploymentStatusMessageList
 * //       "STRING_VALUE",
 * //     ],
 * //     computePlatform: "Server" || "Lambda" || "ECS",
 * //     externalId: "STRING_VALUE",
 * //     relatedDeployments: { // RelatedDeployments
 * //       autoUpdateOutdatedInstancesRootDeploymentId: "STRING_VALUE",
 * //       autoUpdateOutdatedInstancesDeploymentIds: [ // DeploymentsList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     overrideAlarmConfiguration: { // AlarmConfiguration
 * //       enabled: true || false,
 * //       ignorePollAlarmFailure: true || false,
 * //       alarms: [ // AlarmList
 * //         { // Alarm
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeploymentCommandInput - {@link GetDeploymentCommandInput}
 * @returns {@link GetDeploymentCommandOutput}
 * @see {@link GetDeploymentCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link DeploymentDoesNotExistException} (client fault)
 *  <p>The deployment with the user or Amazon Web Services account does not exist.</p>
 *
 * @throws {@link DeploymentIdRequiredException} (client fault)
 *  <p>At least one deployment ID must be specified.</p>
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *  <p>At least one of the deployment IDs was specified in an invalid format.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class GetDeploymentCommand extends $Command<
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetDeploymentCommandInput) {
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
  ): Handler<GetDeploymentCommandInput, GetDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDeploymentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "GetDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeDeploy_20141006",
        operation: "GetDeployment",
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
  private serialize(input: GetDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDeploymentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeploymentCommandOutput> {
    return de_GetDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

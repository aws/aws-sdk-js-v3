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
} from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { BatchGetDeploymentGroupsInput, BatchGetDeploymentGroupsOutput } from "../models/models_0";
import { de_BatchGetDeploymentGroupsCommand, se_BatchGetDeploymentGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetDeploymentGroupsCommand}.
 */
export interface BatchGetDeploymentGroupsCommandInput extends BatchGetDeploymentGroupsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetDeploymentGroupsCommand}.
 */
export interface BatchGetDeploymentGroupsCommandOutput extends BatchGetDeploymentGroupsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about one or more deployment groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetDeploymentGroupsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, BatchGetDeploymentGroupsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // BatchGetDeploymentGroupsInput
 *   applicationName: "STRING_VALUE", // required
 *   deploymentGroupNames: [ // DeploymentGroupsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetDeploymentGroupsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetDeploymentGroupsOutput
 * //   deploymentGroupsInfo: [ // DeploymentGroupInfoList
 * //     { // DeploymentGroupInfo
 * //       applicationName: "STRING_VALUE",
 * //       deploymentGroupId: "STRING_VALUE",
 * //       deploymentGroupName: "STRING_VALUE",
 * //       deploymentConfigName: "STRING_VALUE",
 * //       ec2TagFilters: [ // EC2TagFilterList
 * //         { // EC2TagFilter
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //           Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 * //         },
 * //       ],
 * //       onPremisesInstanceTagFilters: [ // TagFilterList
 * //         { // TagFilter
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //           Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 * //         },
 * //       ],
 * //       autoScalingGroups: [ // AutoScalingGroupList
 * //         { // AutoScalingGroup
 * //           name: "STRING_VALUE",
 * //           hook: "STRING_VALUE",
 * //         },
 * //       ],
 * //       serviceRoleArn: "STRING_VALUE",
 * //       targetRevision: { // RevisionLocation
 * //         revisionType: "S3" || "GitHub" || "String" || "AppSpecContent",
 * //         s3Location: { // S3Location
 * //           bucket: "STRING_VALUE",
 * //           key: "STRING_VALUE",
 * //           bundleType: "tar" || "tgz" || "zip" || "YAML" || "JSON",
 * //           version: "STRING_VALUE",
 * //           eTag: "STRING_VALUE",
 * //         },
 * //         gitHubLocation: { // GitHubLocation
 * //           repository: "STRING_VALUE",
 * //           commitId: "STRING_VALUE",
 * //         },
 * //         string: { // RawString
 * //           content: "STRING_VALUE",
 * //           sha256: "STRING_VALUE",
 * //         },
 * //         appSpecContent: { // AppSpecContent
 * //           content: "STRING_VALUE",
 * //           sha256: "STRING_VALUE",
 * //         },
 * //       },
 * //       triggerConfigurations: [ // TriggerConfigList
 * //         { // TriggerConfig
 * //           triggerName: "STRING_VALUE",
 * //           triggerTargetArn: "STRING_VALUE",
 * //           triggerEvents: [ // TriggerEventTypeList
 * //             "DeploymentStart" || "DeploymentSuccess" || "DeploymentFailure" || "DeploymentStop" || "DeploymentRollback" || "DeploymentReady" || "InstanceStart" || "InstanceSuccess" || "InstanceFailure" || "InstanceReady",
 * //           ],
 * //         },
 * //       ],
 * //       alarmConfiguration: { // AlarmConfiguration
 * //         enabled: true || false,
 * //         ignorePollAlarmFailure: true || false,
 * //         alarms: [ // AlarmList
 * //           { // Alarm
 * //             name: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       autoRollbackConfiguration: { // AutoRollbackConfiguration
 * //         enabled: true || false,
 * //         events: [ // AutoRollbackEventsList
 * //           "DEPLOYMENT_FAILURE" || "DEPLOYMENT_STOP_ON_ALARM" || "DEPLOYMENT_STOP_ON_REQUEST",
 * //         ],
 * //       },
 * //       deploymentStyle: { // DeploymentStyle
 * //         deploymentType: "IN_PLACE" || "BLUE_GREEN",
 * //         deploymentOption: "WITH_TRAFFIC_CONTROL" || "WITHOUT_TRAFFIC_CONTROL",
 * //       },
 * //       outdatedInstancesStrategy: "UPDATE" || "IGNORE",
 * //       blueGreenDeploymentConfiguration: { // BlueGreenDeploymentConfiguration
 * //         terminateBlueInstancesOnDeploymentSuccess: { // BlueInstanceTerminationOption
 * //           action: "TERMINATE" || "KEEP_ALIVE",
 * //           terminationWaitTimeInMinutes: Number("int"),
 * //         },
 * //         deploymentReadyOption: { // DeploymentReadyOption
 * //           actionOnTimeout: "CONTINUE_DEPLOYMENT" || "STOP_DEPLOYMENT",
 * //           waitTimeInMinutes: Number("int"),
 * //         },
 * //         greenFleetProvisioningOption: { // GreenFleetProvisioningOption
 * //           action: "DISCOVER_EXISTING" || "COPY_AUTO_SCALING_GROUP",
 * //         },
 * //       },
 * //       loadBalancerInfo: { // LoadBalancerInfo
 * //         elbInfoList: [ // ELBInfoList
 * //           { // ELBInfo
 * //             name: "STRING_VALUE",
 * //           },
 * //         ],
 * //         targetGroupInfoList: [ // TargetGroupInfoList
 * //           { // TargetGroupInfo
 * //             name: "STRING_VALUE",
 * //           },
 * //         ],
 * //         targetGroupPairInfoList: [ // TargetGroupPairInfoList
 * //           { // TargetGroupPairInfo
 * //             targetGroups: [
 * //               {
 * //                 name: "STRING_VALUE",
 * //               },
 * //             ],
 * //             prodTrafficRoute: { // TrafficRoute
 * //               listenerArns: [ // ListenerArnList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             testTrafficRoute: {
 * //               listenerArns: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       lastSuccessfulDeployment: { // LastDeploymentInfo
 * //         deploymentId: "STRING_VALUE",
 * //         status: "Created" || "Queued" || "InProgress" || "Baking" || "Succeeded" || "Failed" || "Stopped" || "Ready",
 * //         endTime: new Date("TIMESTAMP"),
 * //         createTime: new Date("TIMESTAMP"),
 * //       },
 * //       lastAttemptedDeployment: {
 * //         deploymentId: "STRING_VALUE",
 * //         status: "Created" || "Queued" || "InProgress" || "Baking" || "Succeeded" || "Failed" || "Stopped" || "Ready",
 * //         endTime: new Date("TIMESTAMP"),
 * //         createTime: new Date("TIMESTAMP"),
 * //       },
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
 * //       onPremisesTagSet: { // OnPremisesTagSet
 * //         onPremisesTagSetList: [ // OnPremisesTagSetList
 * //           [
 * //             {
 * //               Key: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //               Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 * //             },
 * //           ],
 * //         ],
 * //       },
 * //       computePlatform: "Server" || "Lambda" || "ECS",
 * //       ecsServices: [ // ECSServiceList
 * //         { // ECSService
 * //           serviceName: "STRING_VALUE",
 * //           clusterName: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   errorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param BatchGetDeploymentGroupsCommandInput - {@link BatchGetDeploymentGroupsCommandInput}
 * @returns {@link BatchGetDeploymentGroupsCommandOutput}
 * @see {@link BatchGetDeploymentGroupsCommandInput} for command's `input` shape.
 * @see {@link BatchGetDeploymentGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *  <p>The application does not exist with the IAM user or Amazon Web Services account.</p>
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link BatchLimitExceededException} (client fault)
 *  <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
 *
 * @throws {@link DeploymentConfigDoesNotExistException} (client fault)
 *  <p>The deployment configuration does not exist with the IAM user or
 *                 Amazon Web Services account.</p>
 *
 * @throws {@link DeploymentGroupNameRequiredException} (client fault)
 *  <p>The deployment group name was not specified.</p>
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *  <p>The application name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidDeploymentGroupNameException} (client fault)
 *  <p>The deployment group name was specified in an invalid format.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class BatchGetDeploymentGroupsCommand extends $Command<
  BatchGetDeploymentGroupsCommandInput,
  BatchGetDeploymentGroupsCommandOutput,
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
  constructor(readonly input: BatchGetDeploymentGroupsCommandInput) {
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
  ): Handler<BatchGetDeploymentGroupsCommandInput, BatchGetDeploymentGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetDeploymentGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "BatchGetDeploymentGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: BatchGetDeploymentGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetDeploymentGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetDeploymentGroupsCommandOutput> {
    return de_BatchGetDeploymentGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

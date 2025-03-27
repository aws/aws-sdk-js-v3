// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDeploymentInput, CreateDeploymentOutput } from "../models/models_0";
import { de_CreateDeploymentCommand, se_CreateDeploymentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandInput extends CreateDeploymentInput {}
/**
 * @public
 *
 * The output of {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandOutput extends CreateDeploymentOutput, __MetadataBearer {}

/**
 * <p>Deploys an application revision through the specified deployment group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, CreateDeploymentCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, CreateDeploymentCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // CreateDeploymentInput
 *   applicationName: "STRING_VALUE", // required
 *   deploymentGroupName: "STRING_VALUE",
 *   revision: { // RevisionLocation
 *     revisionType: "S3" || "GitHub" || "String" || "AppSpecContent",
 *     s3Location: { // S3Location
 *       bucket: "STRING_VALUE",
 *       key: "STRING_VALUE",
 *       bundleType: "tar" || "tgz" || "zip" || "YAML" || "JSON",
 *       version: "STRING_VALUE",
 *       eTag: "STRING_VALUE",
 *     },
 *     gitHubLocation: { // GitHubLocation
 *       repository: "STRING_VALUE",
 *       commitId: "STRING_VALUE",
 *     },
 *     string: { // RawString
 *       content: "STRING_VALUE",
 *       sha256: "STRING_VALUE",
 *     },
 *     appSpecContent: { // AppSpecContent
 *       content: "STRING_VALUE",
 *       sha256: "STRING_VALUE",
 *     },
 *   },
 *   deploymentConfigName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   ignoreApplicationStopFailures: true || false,
 *   targetInstances: { // TargetInstances
 *     tagFilters: [ // EC2TagFilterList
 *       { // EC2TagFilter
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *         Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 *       },
 *     ],
 *     autoScalingGroups: [ // AutoScalingGroupNameList
 *       "STRING_VALUE",
 *     ],
 *     ec2TagSet: { // EC2TagSet
 *       ec2TagSetList: [ // EC2TagSetList
 *         [
 *           {
 *             Key: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *             Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 *           },
 *         ],
 *       ],
 *     },
 *   },
 *   autoRollbackConfiguration: { // AutoRollbackConfiguration
 *     enabled: true || false,
 *     events: [ // AutoRollbackEventsList
 *       "DEPLOYMENT_FAILURE" || "DEPLOYMENT_STOP_ON_ALARM" || "DEPLOYMENT_STOP_ON_REQUEST",
 *     ],
 *   },
 *   updateOutdatedInstancesOnly: true || false,
 *   fileExistsBehavior: "DISALLOW" || "OVERWRITE" || "RETAIN",
 *   overrideAlarmConfiguration: { // AlarmConfiguration
 *     enabled: true || false,
 *     ignorePollAlarmFailure: true || false,
 *     alarms: [ // AlarmList
 *       { // Alarm
 *         name: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeploymentOutput
 * //   deploymentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDeploymentCommandInput - {@link CreateDeploymentCommandInput}
 * @returns {@link CreateDeploymentCommandOutput}
 * @see {@link CreateDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link AlarmsLimitExceededException} (client fault)
 *  <p>The maximum number of alarms for a deployment group (10) was exceeded.</p>
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *  <p>The application does not exist with the user or Amazon Web Services account.</p>
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link DeploymentConfigDoesNotExistException} (client fault)
 *  <p>The deployment configuration does not exist with the user or Amazon Web Services account.</p>
 *
 * @throws {@link DeploymentGroupDoesNotExistException} (client fault)
 *  <p>The named deployment group with the user or Amazon Web Services account does not
 *             exist.</p>
 *
 * @throws {@link DeploymentGroupNameRequiredException} (client fault)
 *  <p>The deployment group name was not specified.</p>
 *
 * @throws {@link DeploymentLimitExceededException} (client fault)
 *  <p>The number of allowed deployments was exceeded.</p>
 *
 * @throws {@link DescriptionTooLongException} (client fault)
 *  <p>The description is too long.</p>
 *
 * @throws {@link InvalidAlarmConfigException} (client fault)
 *  <p>The format of the alarm configuration is invalid. Possible causes include:</p>
 *          <ul>
 *             <li>
 *                <p>The alarm list is null.</p>
 *             </li>
 *             <li>
 *                <p>The alarm object is null.</p>
 *             </li>
 *             <li>
 *                <p>The alarm name is empty or null or exceeds the limit of 255 characters.</p>
 *             </li>
 *             <li>
 *                <p>Two alarms with the same name have been specified.</p>
 *             </li>
 *             <li>
 *                <p>The alarm configuration is enabled, but the alarm list is empty.</p>
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
 * @throws {@link InvalidDeploymentConfigNameException} (client fault)
 *  <p>The deployment configuration name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidDeploymentGroupNameException} (client fault)
 *  <p>The deployment group name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidFileExistsBehaviorException} (client fault)
 *  <p>An invalid fileExistsBehavior option was specified to determine how CodeDeploy handles files or directories that already exist in a deployment
 *             target location, but weren't part of the previous successful deployment. Valid values
 *             include "DISALLOW," "OVERWRITE," and "RETAIN."</p>
 *
 * @throws {@link InvalidGitHubAccountTokenException} (client fault)
 *  <p>The GitHub token is not valid.</p>
 *
 * @throws {@link InvalidIgnoreApplicationStopFailuresValueException} (client fault)
 *  <p>The IgnoreApplicationStopFailures value is invalid. For Lambda
 *             deployments, <code>false</code> is expected. For EC2/On-premises deployments,
 *                 <code>true</code> or <code>false</code> is expected.</p>
 *
 * @throws {@link InvalidLoadBalancerInfoException} (client fault)
 *  <p>An invalid load balancer name, or no load balancer name, was specified.</p>
 *
 * @throws {@link InvalidRevisionException} (client fault)
 *  <p>The revision was specified in an invalid format.</p>
 *
 * @throws {@link InvalidRoleException} (client fault)
 *  <p>The service role ARN was specified in an invalid format. Or, if an Auto Scaling
 *             group was specified, the specified service role does not grant the appropriate
 *             permissions to Amazon EC2 Auto Scaling.</p>
 *
 * @throws {@link InvalidTargetInstancesException} (client fault)
 *  <p>The target instance configuration is invalid. Possible causes include:</p>
 *          <ul>
 *             <li>
 *                <p>Configuration data for target instances was entered for an in-place
 *                     deployment.</p>
 *             </li>
 *             <li>
 *                <p>The limit of 10 tags for a tag type was exceeded.</p>
 *             </li>
 *             <li>
 *                <p>The combined length of the tag names exceeded the limit. </p>
 *             </li>
 *             <li>
 *                <p>A specified tag is not currently applied to any instances.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidTrafficRoutingConfigurationException} (client fault)
 *  <p> The configuration that specifies how traffic is routed during a deployment is
 *             invalid.</p>
 *
 * @throws {@link InvalidUpdateOutdatedInstancesOnlyValueException} (client fault)
 *  <p>The UpdateOutdatedInstancesOnly value is invalid. For Lambda
 *             deployments, <code>false</code> is expected. For EC2/On-premises deployments,
 *                 <code>true</code> or <code>false</code> is expected.</p>
 *
 * @throws {@link RevisionDoesNotExistException} (client fault)
 *  <p>The named revision does not exist with the user or Amazon Web Services account.</p>
 *
 * @throws {@link RevisionRequiredException} (client fault)
 *  <p>The revision ID was not specified.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An API function was called too frequently.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class CreateDeploymentCommand extends $Command
  .classBuilder<
    CreateDeploymentCommandInput,
    CreateDeploymentCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeDeploy_20141006", "CreateDeployment", {})
  .n("CodeDeployClient", "CreateDeploymentCommand")
  .f(void 0, void 0)
  .ser(se_CreateDeploymentCommand)
  .de(de_CreateDeploymentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeploymentInput;
      output: CreateDeploymentOutput;
    };
    sdk: {
      input: CreateDeploymentCommandInput;
      output: CreateDeploymentCommandOutput;
    };
  };
}

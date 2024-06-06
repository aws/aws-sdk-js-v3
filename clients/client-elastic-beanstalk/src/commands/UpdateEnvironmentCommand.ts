// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnvironmentDescription, UpdateEnvironmentMessage } from "../models/models_0";
import { de_UpdateEnvironmentCommand, se_UpdateEnvironmentCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandInput extends UpdateEnvironmentMessage {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandOutput extends EnvironmentDescription, __MetadataBearer {}

/**
 * <p>Updates the environment description, deploys a new application version, updates the
 *       configuration settings to an entirely new configuration template, or updates select
 *       configuration option values in the running environment.</p>
 *          <p> Attempting to update both the release and configuration is not allowed and AWS Elastic
 *       Beanstalk returns an <code>InvalidParameterCombination</code> error. </p>
 *          <p> When updating the configuration settings to a new template or individual settings, a
 *       draft configuration is created and <a>DescribeConfigurationSettings</a> for this
 *       environment returns two setting descriptions with different <code>DeploymentStatus</code>
 *       values. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateEnvironmentCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateEnvironmentCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // UpdateEnvironmentMessage
 *   ApplicationName: "STRING_VALUE",
 *   EnvironmentId: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 *   GroupName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tier: { // EnvironmentTier
 *     Name: "STRING_VALUE",
 *     Type: "STRING_VALUE",
 *     Version: "STRING_VALUE",
 *   },
 *   VersionLabel: "STRING_VALUE",
 *   TemplateName: "STRING_VALUE",
 *   SolutionStackName: "STRING_VALUE",
 *   PlatformArn: "STRING_VALUE",
 *   OptionSettings: [ // ConfigurationOptionSettingsList
 *     { // ConfigurationOptionSetting
 *       ResourceName: "STRING_VALUE",
 *       Namespace: "STRING_VALUE",
 *       OptionName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   OptionsToRemove: [ // OptionsSpecifierList
 *     { // OptionSpecification
 *       ResourceName: "STRING_VALUE",
 *       Namespace: "STRING_VALUE",
 *       OptionName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // EnvironmentDescription
 * //   EnvironmentName: "STRING_VALUE",
 * //   EnvironmentId: "STRING_VALUE",
 * //   ApplicationName: "STRING_VALUE",
 * //   VersionLabel: "STRING_VALUE",
 * //   SolutionStackName: "STRING_VALUE",
 * //   PlatformArn: "STRING_VALUE",
 * //   TemplateName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   EndpointURL: "STRING_VALUE",
 * //   CNAME: "STRING_VALUE",
 * //   DateCreated: new Date("TIMESTAMP"),
 * //   DateUpdated: new Date("TIMESTAMP"),
 * //   Status: "Aborting" || "Launching" || "Updating" || "LinkingFrom" || "LinkingTo" || "Ready" || "Terminating" || "Terminated",
 * //   AbortableOperationInProgress: true || false,
 * //   Health: "Green" || "Yellow" || "Red" || "Grey",
 * //   HealthStatus: "NoData" || "Unknown" || "Pending" || "Ok" || "Info" || "Warning" || "Degraded" || "Severe" || "Suspended",
 * //   Resources: { // EnvironmentResourcesDescription
 * //     LoadBalancer: { // LoadBalancerDescription
 * //       LoadBalancerName: "STRING_VALUE",
 * //       Domain: "STRING_VALUE",
 * //       Listeners: [ // LoadBalancerListenersDescription
 * //         { // Listener
 * //           Protocol: "STRING_VALUE",
 * //           Port: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   Tier: { // EnvironmentTier
 * //     Name: "STRING_VALUE",
 * //     Type: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //   },
 * //   EnvironmentLinks: [ // EnvironmentLinks
 * //     { // EnvironmentLink
 * //       LinkName: "STRING_VALUE",
 * //       EnvironmentName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   EnvironmentArn: "STRING_VALUE",
 * //   OperationsRole: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateEnvironmentCommandInput - {@link UpdateEnvironmentCommandInput}
 * @returns {@link UpdateEnvironmentCommandOutput}
 * @see {@link UpdateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link TooManyBucketsException} (client fault)
 *  <p>The specified account has reached its limit of Amazon S3 buckets.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @public
 * @example To update an environment to a new version
 * ```javascript
 * // The following operation updates an environment named "my-env" to version "v2" of the application to which it belongs:
 * const input = {
 *   "EnvironmentName": "my-env",
 *   "VersionLabel": "v2"
 * };
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationName": "my-app",
 *   "CNAME": "my-env.elasticbeanstalk.com",
 *   "DateCreated": "2015-02-03T23:04:54.453Z",
 *   "DateUpdated": "2015-02-03T23:12:29.119Z",
 *   "EndpointURL": "awseb-e-i-AWSEBLoa-1RDLX6TC9VUAO-0123456789.us-west-2.elb.amazonaws.com",
 *   "EnvironmentId": "e-szqipays4h",
 *   "EnvironmentName": "my-env",
 *   "Health": "Grey",
 *   "SolutionStackName": "64bit Amazon Linux running Tomcat 7",
 *   "Status": "Updating",
 *   "Tier": {
 *     "Name": "WebServer",
 *     "Type": "Standard",
 *     "Version": " "
 *   },
 *   "VersionLabel": "v2"
 * }
 * *\/
 * // example id: to-update-an-environment-to-a-new-version-1456278210718
 * ```
 *
 * @example To configure option settings
 * ```javascript
 * // The following operation configures several options in the aws:elb:loadbalancer namespace:
 * const input = {
 *   "EnvironmentName": "my-env",
 *   "OptionSettings": [
 *     {
 *       "Namespace": "aws:elb:healthcheck",
 *       "OptionName": "Interval",
 *       "Value": "15"
 *     },
 *     {
 *       "Namespace": "aws:elb:healthcheck",
 *       "OptionName": "Timeout",
 *       "Value": "8"
 *     },
 *     {
 *       "Namespace": "aws:elb:healthcheck",
 *       "OptionName": "HealthyThreshold",
 *       "Value": "2"
 *     },
 *     {
 *       "Namespace": "aws:elb:healthcheck",
 *       "OptionName": "UnhealthyThreshold",
 *       "Value": "3"
 *     }
 *   ]
 * };
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AbortableOperationInProgress": true,
 *   "ApplicationName": "my-app",
 *   "CNAME": "my-env.elasticbeanstalk.com",
 *   "DateCreated": "2015-08-07T20:48:49.599Z",
 *   "DateUpdated": "2015-08-12T18:15:23.804Z",
 *   "EndpointURL": "awseb-e-w-AWSEBLoa-14XB83101Q4L-104QXY80921.sa-east-1.elb.amazonaws.com",
 *   "EnvironmentId": "e-wtp2rpqsej",
 *   "EnvironmentName": "my-env",
 *   "Health": "Grey",
 *   "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
 *   "Status": "Updating",
 *   "Tier": {
 *     "Name": "WebServer",
 *     "Type": "Standard",
 *     "Version": " "
 *   },
 *   "VersionLabel": "7f58-stage-150812_025409"
 * }
 * *\/
 * // example id: to-configure-option-settings-1456278286349
 * ```
 *
 */
export class UpdateEnvironmentCommand extends $Command
  .classBuilder<
    UpdateEnvironmentCommandInput,
    UpdateEnvironmentCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSElasticBeanstalkService", "UpdateEnvironment", {})
  .n("ElasticBeanstalkClient", "UpdateEnvironmentCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEnvironmentCommand)
  .de(de_UpdateEnvironmentCommand)
  .build() {}

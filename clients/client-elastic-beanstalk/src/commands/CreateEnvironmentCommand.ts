// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEnvironmentMessage, EnvironmentDescription } from "../models/models_0";
import { de_CreateEnvironmentCommand, se_CreateEnvironmentCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandInput extends CreateEnvironmentMessage {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandOutput extends EnvironmentDescription, __MetadataBearer {}

/**
 * <p>Launches an AWS Elastic Beanstalk environment for the specified application using the specified
 *       configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreateEnvironmentCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreateEnvironmentCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // CreateEnvironmentMessage
 *   ApplicationName: "STRING_VALUE", // required
 *   EnvironmentName: "STRING_VALUE",
 *   GroupName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   CNAMEPrefix: "STRING_VALUE",
 *   Tier: { // EnvironmentTier
 *     Name: "STRING_VALUE",
 *     Type: "STRING_VALUE",
 *     Version: "STRING_VALUE",
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
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
 *   OperationsRole: "STRING_VALUE",
 * };
 * const command = new CreateEnvironmentCommand(input);
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
 * @param CreateEnvironmentCommandInput - {@link CreateEnvironmentCommandInput}
 * @returns {@link CreateEnvironmentCommandOutput}
 * @see {@link CreateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link TooManyEnvironmentsException} (client fault)
 *  <p>The specified account has reached its limit of environments.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @public
 * @example To create a new environment for an application
 * ```javascript
 * // The following operation creates a new environment for version v1 of a java application named my-app:
 * const input = {
 *   "ApplicationName": "my-app",
 *   "CNAMEPrefix": "my-app",
 *   "EnvironmentName": "my-env",
 *   "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
 *   "VersionLabel": "v1"
 * };
 * const command = new CreateEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationName": "my-app",
 *   "CNAME": "my-app.elasticbeanstalk.com",
 *   "DateCreated": "2015-02-03T23:04:54.479Z",
 *   "DateUpdated": "2015-02-03T23:04:54.479Z",
 *   "EnvironmentId": "e-izqpassy4h",
 *   "EnvironmentName": "my-env",
 *   "Health": "Grey",
 *   "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
 *   "Status": "Launching",
 *   "Tier": {
 *     "Name": "WebServer",
 *     "Type": "Standard",
 *     "Version": " "
 *   },
 *   "VersionLabel": "v1"
 * }
 * *\/
 * // example id: to-create-a-new-environment-for-an-application-1456269380396
 * ```
 *
 */
export class CreateEnvironmentCommand extends $Command
  .classBuilder<
    CreateEnvironmentCommandInput,
    CreateEnvironmentCommandOutput,
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
  .s("AWSElasticBeanstalkService", "CreateEnvironment", {})
  .n("ElasticBeanstalkClient", "CreateEnvironmentCommand")
  .f(void 0, void 0)
  .ser(se_CreateEnvironmentCommand)
  .de(de_CreateEnvironmentCommand)
  .build() {}

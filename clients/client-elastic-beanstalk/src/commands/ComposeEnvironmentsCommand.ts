// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ComposeEnvironmentsMessage, EnvironmentDescriptionsMessage } from "../models/models_0";
import { ComposeEnvironments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ComposeEnvironmentsCommand}.
 */
export interface ComposeEnvironmentsCommandInput extends ComposeEnvironmentsMessage {}
/**
 * @public
 *
 * The output of {@link ComposeEnvironmentsCommand}.
 */
export interface ComposeEnvironmentsCommandOutput extends EnvironmentDescriptionsMessage, __MetadataBearer {}

/**
 * <p>Create or update a group of environments that each run a separate component of a single
 *       application. Takes a list of version labels that specify application source bundles for each
 *       of the environments to create or update. The name of each environment and other required
 *       information must be included in the source bundles in an environment manifest named
 *       <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a>
 *       for details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ComposeEnvironmentsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ComposeEnvironmentsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // ComposeEnvironmentsMessage
 *   ApplicationName: "STRING_VALUE",
 *   GroupName: "STRING_VALUE",
 *   VersionLabels: [ // VersionLabels
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ComposeEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // EnvironmentDescriptionsMessage
 * //   Environments: [ // EnvironmentDescriptionsList
 * //     { // EnvironmentDescription
 * //       EnvironmentName: "STRING_VALUE",
 * //       EnvironmentId: "STRING_VALUE",
 * //       ApplicationName: "STRING_VALUE",
 * //       VersionLabel: "STRING_VALUE",
 * //       SolutionStackName: "STRING_VALUE",
 * //       PlatformArn: "STRING_VALUE",
 * //       TemplateName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       EndpointURL: "STRING_VALUE",
 * //       CNAME: "STRING_VALUE",
 * //       DateCreated: new Date("TIMESTAMP"),
 * //       DateUpdated: new Date("TIMESTAMP"),
 * //       Status: "Aborting" || "Launching" || "Updating" || "LinkingFrom" || "LinkingTo" || "Ready" || "Terminating" || "Terminated",
 * //       AbortableOperationInProgress: true || false,
 * //       Health: "Green" || "Yellow" || "Red" || "Grey",
 * //       HealthStatus: "NoData" || "Unknown" || "Pending" || "Ok" || "Info" || "Warning" || "Degraded" || "Severe" || "Suspended",
 * //       Resources: { // EnvironmentResourcesDescription
 * //         LoadBalancer: { // LoadBalancerDescription
 * //           LoadBalancerName: "STRING_VALUE",
 * //           Domain: "STRING_VALUE",
 * //           Listeners: [ // LoadBalancerListenersDescription
 * //             { // Listener
 * //               Protocol: "STRING_VALUE",
 * //               Port: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       Tier: { // EnvironmentTier
 * //         Name: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //       EnvironmentLinks: [ // EnvironmentLinks
 * //         { // EnvironmentLink
 * //           LinkName: "STRING_VALUE",
 * //           EnvironmentName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       EnvironmentArn: "STRING_VALUE",
 * //       OperationsRole: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ComposeEnvironmentsCommandInput - {@link ComposeEnvironmentsCommandInput}
 * @returns {@link ComposeEnvironmentsCommandOutput}
 * @see {@link ComposeEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ComposeEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link TooManyEnvironmentsException} (client fault)
 *  <p>The specified account has reached its limit of environments.</p>
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @public
 */
export class ComposeEnvironmentsCommand extends $Command
  .classBuilder<
    ComposeEnvironmentsCommandInput,
    ComposeEnvironmentsCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSElasticBeanstalkService", "ComposeEnvironments", {})
  .n("ElasticBeanstalkClient", "ComposeEnvironmentsCommand")
  .sc(ComposeEnvironments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ComposeEnvironmentsMessage;
      output: EnvironmentDescriptionsMessage;
    };
    sdk: {
      input: ComposeEnvironmentsCommandInput;
      output: ComposeEnvironmentsCommandOutput;
    };
  };
}

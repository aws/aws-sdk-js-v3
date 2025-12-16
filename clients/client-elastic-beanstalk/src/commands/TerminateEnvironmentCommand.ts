// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticBeanstalkClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { EnvironmentDescription, TerminateEnvironmentMessage } from "../models/models_0";
import { TerminateEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TerminateEnvironmentCommand}.
 */
export interface TerminateEnvironmentCommandInput extends TerminateEnvironmentMessage {}
/**
 * @public
 *
 * The output of {@link TerminateEnvironmentCommand}.
 */
export interface TerminateEnvironmentCommandOutput extends EnvironmentDescription, __MetadataBearer {}

/**
 * <p>Terminates the specified environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, TerminateEnvironmentCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, TerminateEnvironmentCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // TerminateEnvironmentMessage
 *   EnvironmentId: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 *   TerminateResources: true || false,
 *   ForceTerminate: true || false,
 * };
 * const command = new TerminateEnvironmentCommand(input);
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
 * @param TerminateEnvironmentCommandInput - {@link TerminateEnvironmentCommandInput}
 * @returns {@link TerminateEnvironmentCommandOutput}
 * @see {@link TerminateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link TerminateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To terminate an environment
 * ```javascript
 * // The following operation terminates an Elastic Beanstalk environment named my-env:
 * const input = {
 *   EnvironmentName: "my-env"
 * };
 * const command = new TerminateEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AbortableOperationInProgress: false,
 *   ApplicationName: "my-app",
 *   CNAME: "my-env.elasticbeanstalk.com",
 *   DateCreated: "2015-08-12T18:52:53.622Z",
 *   DateUpdated: "2015-08-12T19:05:54.744Z",
 *   EndpointURL: "awseb-e-f-AWSEBLoa-1I9XUMP4-8492WNUP202574.us-west-2.elb.amazonaws.com",
 *   EnvironmentId: "e-fh2eravpns",
 *   EnvironmentName: "my-env",
 *   Health: "Grey",
 *   SolutionStackName: "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
 *   Status: "Terminating",
 *   Tier: {
 *     Name: "WebServer",
 *     Type: "Standard",
 *     Version: " "
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class TerminateEnvironmentCommand extends $Command
  .classBuilder<
    TerminateEnvironmentCommandInput,
    TerminateEnvironmentCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSElasticBeanstalkService", "TerminateEnvironment", {})
  .n("ElasticBeanstalkClient", "TerminateEnvironmentCommand")
  .sc(TerminateEnvironment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateEnvironmentMessage;
      output: EnvironmentDescription;
    };
    sdk: {
      input: TerminateEnvironmentCommandInput;
      output: TerminateEnvironmentCommandOutput;
    };
  };
}

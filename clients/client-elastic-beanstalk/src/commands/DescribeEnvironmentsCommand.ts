// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEnvironmentsMessage, EnvironmentDescriptionsMessage } from "../models/models_0";
import { DescribeEnvironments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEnvironmentsCommand}.
 */
export interface DescribeEnvironmentsCommandInput extends DescribeEnvironmentsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEnvironmentsCommand}.
 */
export interface DescribeEnvironmentsCommandOutput extends EnvironmentDescriptionsMessage, __MetadataBearer {}

/**
 * <p>Returns descriptions for existing environments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeEnvironmentsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeEnvironmentsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeEnvironmentsMessage
 *   ApplicationName: "STRING_VALUE",
 *   VersionLabel: "STRING_VALUE",
 *   EnvironmentIds: [ // EnvironmentIdList
 *     "STRING_VALUE",
 *   ],
 *   EnvironmentNames: [ // EnvironmentNamesList
 *     "STRING_VALUE",
 *   ],
 *   IncludeDeleted: true || false,
 *   IncludedDeletedBackTo: new Date("TIMESTAMP"),
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeEnvironmentsCommand(input);
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
 * @param DescribeEnvironmentsCommandInput - {@link DescribeEnvironmentsCommandInput}
 * @returns {@link DescribeEnvironmentsCommandOutput}
 * @see {@link DescribeEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To view information about an environment
 * ```javascript
 * // The following operation retrieves information about an environment named my-env:
 * const input = {
 *   EnvironmentNames: [
 *     "my-env"
 *   ]
 * };
 * const command = new DescribeEnvironmentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Environments: [
 *     {
 *       AbortableOperationInProgress: false,
 *       ApplicationName: "my-app",
 *       CNAME: "my-env.elasticbeanstalk.com",
 *       DateCreated: "2015-08-07T20:48:49.599Z",
 *       DateUpdated: "2015-08-12T18:16:55.019Z",
 *       EndpointURL: "awseb-e-w-AWSEBLoa-1483140XB0Q4L-109QXY8121.us-west-2.elb.amazonaws.com",
 *       EnvironmentId: "e-rpqsewtp2j",
 *       EnvironmentName: "my-env",
 *       Health: "Green",
 *       SolutionStackName: "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
 *       Status: "Ready",
 *       Tier: {
 *         Name: "WebServer",
 *         Type: "Standard",
 *         Version: " "
 *       },
 *       VersionLabel: "7f58-stage-150812_025409"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeEnvironmentsCommand extends $Command
  .classBuilder<
    DescribeEnvironmentsCommandInput,
    DescribeEnvironmentsCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSElasticBeanstalkService", "DescribeEnvironments", {})
  .n("ElasticBeanstalkClient", "DescribeEnvironmentsCommand")
  .sc(DescribeEnvironments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEnvironmentsMessage;
      output: EnvironmentDescriptionsMessage;
    };
    sdk: {
      input: DescribeEnvironmentsCommandInput;
      output: DescribeEnvironmentsCommandOutput;
    };
  };
}

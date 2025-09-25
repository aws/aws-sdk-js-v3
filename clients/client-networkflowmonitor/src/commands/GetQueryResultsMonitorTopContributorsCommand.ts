// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetQueryResultsMonitorTopContributorsInput,
  GetQueryResultsMonitorTopContributorsOutput,
} from "../models/models_0";
import {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import { GetQueryResultsMonitorTopContributors } from "../schemas/schemas_1_Monitor";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueryResultsMonitorTopContributorsCommand}.
 */
export interface GetQueryResultsMonitorTopContributorsCommandInput extends GetQueryResultsMonitorTopContributorsInput {}
/**
 * @public
 *
 * The output of {@link GetQueryResultsMonitorTopContributorsCommand}.
 */
export interface GetQueryResultsMonitorTopContributorsCommandOutput
  extends GetQueryResultsMonitorTopContributorsOutput,
    __MetadataBearer {}

/**
 * <p>Return the data for a query with the Network Flow Monitor query interface. You specify the query that you want to return results for by providing a query ID and a monitor name. This query returns the top contributors for a specific monitor.</p> <p>Create a query ID for this call by calling the corresponding API call to start the query, <code>StartQueryMonitorTopContributors</code>. Use the scope ID that was returned for your account by <code>CreateScope</code>.</p> <p>Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, GetQueryResultsMonitorTopContributorsCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, GetQueryResultsMonitorTopContributorsCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // GetQueryResultsMonitorTopContributorsInput
 *   monitorName: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetQueryResultsMonitorTopContributorsCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryResultsMonitorTopContributorsOutput
 * //   unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //   topContributors: [ // MonitorTopContributorsRowList
 * //     { // MonitorTopContributorsRow
 * //       localIp: "STRING_VALUE",
 * //       snatIp: "STRING_VALUE",
 * //       localInstanceId: "STRING_VALUE",
 * //       localVpcId: "STRING_VALUE",
 * //       localRegion: "STRING_VALUE",
 * //       localAz: "STRING_VALUE",
 * //       localSubnetId: "STRING_VALUE",
 * //       targetPort: Number("int"),
 * //       destinationCategory: "INTRA_AZ" || "INTER_AZ" || "INTER_VPC" || "UNCLASSIFIED" || "AMAZON_S3" || "AMAZON_DYNAMODB" || "INTER_REGION",
 * //       remoteVpcId: "STRING_VALUE",
 * //       remoteRegion: "STRING_VALUE",
 * //       remoteAz: "STRING_VALUE",
 * //       remoteSubnetId: "STRING_VALUE",
 * //       remoteInstanceId: "STRING_VALUE",
 * //       remoteIp: "STRING_VALUE",
 * //       dnatIp: "STRING_VALUE",
 * //       value: Number("long"),
 * //       traversedConstructs: [ // TraversedConstructsList
 * //         { // TraversedComponent
 * //           componentId: "STRING_VALUE",
 * //           componentType: "STRING_VALUE",
 * //           componentArn: "STRING_VALUE",
 * //           serviceName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       kubernetesMetadata: { // KubernetesMetadata
 * //         localServiceName: "STRING_VALUE",
 * //         localPodName: "STRING_VALUE",
 * //         localPodNamespace: "STRING_VALUE",
 * //         remoteServiceName: "STRING_VALUE",
 * //         remotePodName: "STRING_VALUE",
 * //         remotePodNamespace: "STRING_VALUE",
 * //       },
 * //       localInstanceArn: "STRING_VALUE",
 * //       localSubnetArn: "STRING_VALUE",
 * //       localVpcArn: "STRING_VALUE",
 * //       remoteInstanceArn: "STRING_VALUE",
 * //       remoteSubnetArn: "STRING_VALUE",
 * //       remoteVpcArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueryResultsMonitorTopContributorsCommandInput - {@link GetQueryResultsMonitorTopContributorsCommandInput}
 * @returns {@link GetQueryResultsMonitorTopContributorsCommandOutput}
 * @see {@link GetQueryResultsMonitorTopContributorsCommandInput} for command's `input` shape.
 * @see {@link GetQueryResultsMonitorTopContributorsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFlowMonitorClientResolvedConfig | config} for NetworkFlowMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request specifies a resource that doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Invalid request.</p>
 *
 * @throws {@link NetworkFlowMonitorServiceException}
 * <p>Base exception class for all service exceptions from NetworkFlowMonitor service.</p>
 *
 *
 * @public
 */
export class GetQueryResultsMonitorTopContributorsCommand extends $Command
  .classBuilder<
    GetQueryResultsMonitorTopContributorsCommandInput,
    GetQueryResultsMonitorTopContributorsCommandOutput,
    NetworkFlowMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFlowMonitorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFlowMonitor", "GetQueryResultsMonitorTopContributors", {})
  .n("NetworkFlowMonitorClient", "GetQueryResultsMonitorTopContributorsCommand")
  .sc(GetQueryResultsMonitorTopContributors)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryResultsMonitorTopContributorsInput;
      output: GetQueryResultsMonitorTopContributorsOutput;
    };
    sdk: {
      input: GetQueryResultsMonitorTopContributorsCommandInput;
      output: GetQueryResultsMonitorTopContributorsCommandOutput;
    };
  };
}

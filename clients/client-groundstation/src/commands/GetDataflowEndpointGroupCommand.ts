// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import type { GetDataflowEndpointGroupRequest, GetDataflowEndpointGroupResponse } from "../models/models_0";
import { GetDataflowEndpointGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataflowEndpointGroupCommand}.
 */
export interface GetDataflowEndpointGroupCommandInput extends GetDataflowEndpointGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetDataflowEndpointGroupCommand}.
 */
export interface GetDataflowEndpointGroupCommandOutput extends GetDataflowEndpointGroupResponse, __MetadataBearer {}

/**
 * <p>Returns the dataflow endpoint group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetDataflowEndpointGroupCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetDataflowEndpointGroupCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // GetDataflowEndpointGroupRequest
 *   dataflowEndpointGroupId: "STRING_VALUE", // required
 * };
 * const command = new GetDataflowEndpointGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetDataflowEndpointGroupResponse
 * //   dataflowEndpointGroupId: "STRING_VALUE",
 * //   dataflowEndpointGroupArn: "STRING_VALUE",
 * //   endpointsDetails: [ // EndpointDetailsList
 * //     { // EndpointDetails
 * //       securityDetails: { // SecurityDetails
 * //         subnetIds: [ // SubnetList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         securityGroupIds: [ // SecurityGroupIdList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         roleArn: "STRING_VALUE", // required
 * //       },
 * //       endpoint: { // DataflowEndpoint
 * //         name: "STRING_VALUE",
 * //         address: { // SocketAddress
 * //           name: "STRING_VALUE", // required
 * //           port: Number("int"), // required
 * //         },
 * //         status: "created" || "creating" || "deleted" || "deleting" || "failed",
 * //         mtu: Number("int"),
 * //       },
 * //       awsGroundStationAgentEndpoint: { // AwsGroundStationAgentEndpoint
 * //         name: "STRING_VALUE", // required
 * //         egressAddress: { // ConnectionDetails
 * //           socketAddress: {
 * //             name: "STRING_VALUE", // required
 * //             port: Number("int"), // required
 * //           },
 * //           mtu: Number("int"),
 * //         },
 * //         ingressAddress: { // RangedConnectionDetails
 * //           socketAddress: { // RangedSocketAddress
 * //             name: "STRING_VALUE", // required
 * //             portRange: { // IntegerRange
 * //               minimum: Number("int"), // required
 * //               maximum: Number("int"), // required
 * //             },
 * //           },
 * //           mtu: Number("int"),
 * //         },
 * //         agentStatus: "SUCCESS" || "FAILED" || "ACTIVE" || "INACTIVE",
 * //         auditResults: "HEALTHY" || "UNHEALTHY",
 * //       },
 * //       uplinkAwsGroundStationAgentEndpoint: { // UplinkAwsGroundStationAgentEndpointDetails
 * //         name: "STRING_VALUE", // required
 * //         dataflowDetails: { // UplinkDataflowDetails Union: only one key present
 * //           agentConnectionDetails: { // UplinkConnectionDetails
 * //             ingressAddressAndPort: {
 * //               socketAddress: "<SocketAddress>", // required
 * //               mtu: Number("int"),
 * //             },
 * //             agentIpAndPortAddress: {
 * //               socketAddress: {
 * //                 name: "STRING_VALUE", // required
 * //                 portRange: {
 * //                   minimum: Number("int"), // required
 * //                   maximum: Number("int"), // required
 * //                 },
 * //               },
 * //               mtu: Number("int"),
 * //             },
 * //           },
 * //         },
 * //         agentStatus: "SUCCESS" || "FAILED" || "ACTIVE" || "INACTIVE",
 * //         auditResults: "HEALTHY" || "UNHEALTHY",
 * //       },
 * //       downlinkAwsGroundStationAgentEndpoint: { // DownlinkAwsGroundStationAgentEndpointDetails
 * //         name: "STRING_VALUE", // required
 * //         dataflowDetails: { // DownlinkDataflowDetails Union: only one key present
 * //           agentConnectionDetails: { // DownlinkConnectionDetails
 * //             agentIpAndPortAddress: {
 * //               socketAddress: {
 * //                 name: "STRING_VALUE", // required
 * //                 portRange: {
 * //                   minimum: Number("int"), // required
 * //                   maximum: Number("int"), // required
 * //                 },
 * //               },
 * //               mtu: Number("int"),
 * //             },
 * //             egressAddressAndPort: {
 * //               socketAddress: "<SocketAddress>", // required
 * //               mtu: Number("int"),
 * //             },
 * //           },
 * //         },
 * //         agentStatus: "SUCCESS" || "FAILED" || "ACTIVE" || "INACTIVE",
 * //         auditResults: "HEALTHY" || "UNHEALTHY",
 * //       },
 * //       healthStatus: "HEALTHY" || "UNHEALTHY",
 * //       healthReasons: [ // CapabilityHealthReasonList
 * //         "NO_REGISTERED_AGENT" || "INVALID_IP_OWNERSHIP" || "NOT_AUTHORIZED_TO_CREATE_SLR" || "UNVERIFIED_IP_OWNERSHIP" || "INITIALIZING_DATAPLANE" || "DATAPLANE_FAILURE" || "HEALTHY",
 * //       ],
 * //     },
 * //   ],
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   contactPrePassDurationSeconds: Number("int"),
 * //   contactPostPassDurationSeconds: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetDataflowEndpointGroupCommandInput - {@link GetDataflowEndpointGroupCommandInput}
 * @returns {@link GetDataflowEndpointGroupCommandOutput}
 * @see {@link GetDataflowEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link GetDataflowEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 *
 * @public
 */
export class GetDataflowEndpointGroupCommand extends $Command
  .classBuilder<
    GetDataflowEndpointGroupCommandInput,
    GetDataflowEndpointGroupCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GroundStation", "GetDataflowEndpointGroup", {})
  .n("GroundStationClient", "GetDataflowEndpointGroupCommand")
  .sc(GetDataflowEndpointGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataflowEndpointGroupRequest;
      output: GetDataflowEndpointGroupResponse;
    };
    sdk: {
      input: GetDataflowEndpointGroupCommandInput;
      output: GetDataflowEndpointGroupCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { GetDataflowEndpointGroupRequest, GetDataflowEndpointGroupResponse } from "../models/models_0";
import { de_GetDataflowEndpointGroupCommand, se_GetDataflowEndpointGroupCommand } from "../protocols/Aws_restJson1";

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
 * //         status: "STRING_VALUE",
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
 * //         agentStatus: "STRING_VALUE",
 * //         auditResults: "STRING_VALUE",
 * //       },
 * //       healthStatus: "STRING_VALUE",
 * //       healthReasons: [ // CapabilityHealthReasonList
 * //         "STRING_VALUE",
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GroundStation", "GetDataflowEndpointGroup", {})
  .n("GroundStationClient", "GetDataflowEndpointGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetDataflowEndpointGroupCommand)
  .de(de_GetDataflowEndpointGroupCommand)
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

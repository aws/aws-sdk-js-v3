// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListNodesRequest, ListNodesResponse } from "../models/models_2";
import { de_ListNodesCommand, se_ListNodesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNodesCommand}.
 */
export interface ListNodesCommandInput extends ListNodesRequest {}
/**
 * @public
 *
 * The output of {@link ListNodesCommand}.
 */
export interface ListNodesCommandOutput extends ListNodesResponse, __MetadataBearer {}

/**
 * Retrieve the list of Nodes.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListNodesCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListNodesCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // ListNodesRequest
 *   ClusterId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListNodesCommand(input);
 * const response = await client.send(command);
 * // { // ListNodesResponse
 * //   NextToken: "STRING_VALUE",
 * //   Nodes: [ // __listOfDescribeNodeSummary
 * //     { // DescribeNodeSummary
 * //       Arn: "STRING_VALUE",
 * //       ChannelPlacementGroups: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       ClusterId: "STRING_VALUE",
 * //       ConnectionState: "CONNECTED" || "DISCONNECTED",
 * //       Id: "STRING_VALUE",
 * //       InstanceArn: "STRING_VALUE",
 * //       ManagedInstanceId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       NodeInterfaceMappings: [ // __listOfNodeInterfaceMapping
 * //         { // NodeInterfaceMapping
 * //           LogicalInterfaceName: "STRING_VALUE",
 * //           NetworkInterfaceMode: "NAT" || "BRIDGE",
 * //           PhysicalInterfaceName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Role: "BACKUP" || "ACTIVE",
 * //       State: "CREATED" || "REGISTERING" || "READY_TO_ACTIVATE" || "REGISTRATION_FAILED" || "ACTIVATION_FAILED" || "ACTIVE" || "READY" || "IN_USE" || "DEREGISTERING" || "DRAINING" || "DEREGISTRATION_FAILED" || "DEREGISTERED",
 * //       SdiSourceMappings: [ // SdiSourceMappings
 * //         { // SdiSourceMapping
 * //           CardNumber: Number("int"),
 * //           ChannelNumber: Number("int"),
 * //           SdiSource: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListNodesCommandInput - {@link ListNodesCommandInput}
 * @returns {@link ListNodesCommandOutput}
 * @see {@link ListNodesCommandInput} for command's `input` shape.
 * @see {@link ListNodesCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class ListNodesCommand extends $Command
  .classBuilder<
    ListNodesCommandInput,
    ListNodesCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "ListNodes", {})
  .n("MediaLiveClient", "ListNodesCommand")
  .f(void 0, void 0)
  .ser(se_ListNodesCommand)
  .de(de_ListNodesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNodesRequest;
      output: ListNodesResponse;
    };
    sdk: {
      input: ListNodesCommandInput;
      output: ListNodesCommandOutput;
    };
  };
}

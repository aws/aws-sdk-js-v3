// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeNodeRequest, DescribeNodeResponse } from "../models/models_1";
import { DescribeNode } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNodeCommand}.
 */
export interface DescribeNodeCommandInput extends DescribeNodeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNodeCommand}.
 */
export interface DescribeNodeCommandOutput extends DescribeNodeResponse, __MetadataBearer {}

/**
 * Get details about a Node in the specified Cluster.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeNodeCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeNodeCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeNodeRequest
 *   ClusterId: "STRING_VALUE", // required
 *   NodeId: "STRING_VALUE", // required
 * };
 * const command = new DescribeNodeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNodeResponse
 * //   Arn: "STRING_VALUE",
 * //   ChannelPlacementGroups: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   ClusterId: "STRING_VALUE",
 * //   ConnectionState: "CONNECTED" || "DISCONNECTED",
 * //   Id: "STRING_VALUE",
 * //   InstanceArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   NodeInterfaceMappings: [ // __listOfNodeInterfaceMapping
 * //     { // NodeInterfaceMapping
 * //       LogicalInterfaceName: "STRING_VALUE",
 * //       NetworkInterfaceMode: "NAT" || "BRIDGE",
 * //       PhysicalInterfaceName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Role: "BACKUP" || "ACTIVE",
 * //   State: "CREATED" || "REGISTERING" || "READY_TO_ACTIVATE" || "REGISTRATION_FAILED" || "ACTIVATION_FAILED" || "ACTIVE" || "READY" || "IN_USE" || "DEREGISTERING" || "DRAINING" || "DEREGISTRATION_FAILED" || "DEREGISTERED",
 * //   SdiSourceMappings: [ // SdiSourceMappings
 * //     { // SdiSourceMapping
 * //       CardNumber: Number("int"),
 * //       ChannelNumber: Number("int"),
 * //       SdiSource: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeNodeCommandInput - {@link DescribeNodeCommandInput}
 * @returns {@link DescribeNodeCommandOutput}
 * @see {@link DescribeNodeCommandInput} for command's `input` shape.
 * @see {@link DescribeNodeCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
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
export class DescribeNodeCommand extends $Command
  .classBuilder<
    DescribeNodeCommandInput,
    DescribeNodeCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "DescribeNode", {})
  .n("MediaLiveClient", "DescribeNodeCommand")
  .sc(DescribeNode)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNodeRequest;
      output: DescribeNodeResponse;
    };
    sdk: {
      input: DescribeNodeCommandInput;
      output: DescribeNodeCommandOutput;
    };
  };
}

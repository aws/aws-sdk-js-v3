// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { UpdateNodeStateRequest, UpdateNodeStateResponse } from "../models/models_1";
import { UpdateNodeState } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNodeStateCommand}.
 */
export interface UpdateNodeStateCommandInput extends UpdateNodeStateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNodeStateCommand}.
 */
export interface UpdateNodeStateCommandOutput extends UpdateNodeStateResponse, __MetadataBearer {}

/**
 * Update the state of a node.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateNodeStateCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateNodeStateCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateNodeStateRequest
 *   ClusterId: "STRING_VALUE", // required
 *   NodeId: "STRING_VALUE", // required
 *   State: "ACTIVE" || "DRAINING",
 * };
 * const command = new UpdateNodeStateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNodeStateResponse
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
 * @param UpdateNodeStateCommandInput - {@link UpdateNodeStateCommandInput}
 * @returns {@link UpdateNodeStateCommandOutput}
 * @see {@link UpdateNodeStateCommandInput} for command's `input` shape.
 * @see {@link UpdateNodeStateCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
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
 * @throws {@link UnprocessableEntityException} (client fault)
 *  Placeholder documentation for UnprocessableEntityException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class UpdateNodeStateCommand extends $Command
  .classBuilder<
    UpdateNodeStateCommandInput,
    UpdateNodeStateCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "UpdateNodeState", {})
  .n("MediaLiveClient", "UpdateNodeStateCommand")
  .sc(UpdateNodeState)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNodeStateRequest;
      output: UpdateNodeStateResponse;
    };
    sdk: {
      input: UpdateNodeStateCommandInput;
      output: UpdateNodeStateCommandOutput;
    };
  };
}

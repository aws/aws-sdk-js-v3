// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateNodeRequest, UpdateNodeResponse } from "../models/models_2";
import { UpdateNode } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNodeCommand}.
 */
export interface UpdateNodeCommandInput extends UpdateNodeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNodeCommand}.
 */
export interface UpdateNodeCommandOutput extends UpdateNodeResponse, __MetadataBearer {}

/**
 * Change the settings for a Node.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateNodeCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateNodeCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateNodeRequest
 *   ClusterId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   NodeId: "STRING_VALUE", // required
 *   Role: "BACKUP" || "ACTIVE",
 *   SdiSourceMappings: [ // SdiSourceMappingsUpdateRequest
 *     { // SdiSourceMappingUpdateRequest
 *       CardNumber: Number("int"),
 *       ChannelNumber: Number("int"),
 *       SdiSource: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateNodeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNodeResponse
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
 * @param UpdateNodeCommandInput - {@link UpdateNodeCommandInput}
 * @returns {@link UpdateNodeCommandOutput}
 * @see {@link UpdateNodeCommandInput} for command's `input` shape.
 * @see {@link UpdateNodeCommandOutput} for command's `response` shape.
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
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class UpdateNodeCommand extends $Command
  .classBuilder<
    UpdateNodeCommandInput,
    UpdateNodeCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "UpdateNode", {})
  .n("MediaLiveClient", "UpdateNodeCommand")
  .sc(UpdateNode)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNodeRequest;
      output: UpdateNodeResponse;
    };
    sdk: {
      input: UpdateNodeCommandInput;
      output: UpdateNodeCommandOutput;
    };
  };
}

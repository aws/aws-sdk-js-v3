// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateChannelPlacementGroupRequest, UpdateChannelPlacementGroupResponse } from "../models/models_2";
import {
  de_UpdateChannelPlacementGroupCommand,
  se_UpdateChannelPlacementGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateChannelPlacementGroupCommand}.
 */
export interface UpdateChannelPlacementGroupCommandInput extends UpdateChannelPlacementGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateChannelPlacementGroupCommand}.
 */
export interface UpdateChannelPlacementGroupCommandOutput
  extends UpdateChannelPlacementGroupResponse,
    __MetadataBearer {}

/**
 * Change the settings for a ChannelPlacementGroup.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateChannelPlacementGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateChannelPlacementGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateChannelPlacementGroupRequest
 *   ChannelPlacementGroupId: "STRING_VALUE", // required
 *   ClusterId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Nodes: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateChannelPlacementGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateChannelPlacementGroupResponse
 * //   Arn: "STRING_VALUE",
 * //   Channels: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   ClusterId: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Nodes: [
 * //     "STRING_VALUE",
 * //   ],
 * //   State: "UNASSIGNED" || "ASSIGNING" || "ASSIGNED" || "DELETING" || "DELETE_FAILED" || "DELETED" || "UNASSIGNING",
 * // };
 *
 * ```
 *
 * @param UpdateChannelPlacementGroupCommandInput - {@link UpdateChannelPlacementGroupCommandInput}
 * @returns {@link UpdateChannelPlacementGroupCommandOutput}
 * @see {@link UpdateChannelPlacementGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelPlacementGroupCommandOutput} for command's `response` shape.
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
export class UpdateChannelPlacementGroupCommand extends $Command
  .classBuilder<
    UpdateChannelPlacementGroupCommandInput,
    UpdateChannelPlacementGroupCommandOutput,
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
  .s("MediaLive", "UpdateChannelPlacementGroup", {})
  .n("MediaLiveClient", "UpdateChannelPlacementGroupCommand")
  .f(void 0, void 0)
  .ser(se_UpdateChannelPlacementGroupCommand)
  .de(de_UpdateChannelPlacementGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateChannelPlacementGroupRequest;
      output: UpdateChannelPlacementGroupResponse;
    };
    sdk: {
      input: UpdateChannelPlacementGroupCommandInput;
      output: UpdateChannelPlacementGroupCommandOutput;
    };
  };
}

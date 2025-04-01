// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { CreateChannelPlacementGroupRequest, CreateChannelPlacementGroupResponse } from "../models/models_2";
import {
  de_CreateChannelPlacementGroupCommand,
  se_CreateChannelPlacementGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateChannelPlacementGroupCommand}.
 */
export interface CreateChannelPlacementGroupCommandInput extends CreateChannelPlacementGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelPlacementGroupCommand}.
 */
export interface CreateChannelPlacementGroupCommandOutput
  extends CreateChannelPlacementGroupResponse,
    __MetadataBearer {}

/**
 * Create a ChannelPlacementGroup in the specified Cluster. As part of the create operation, you specify the Nodes to attach the group to.After you create a ChannelPlacementGroup, you add Channels to the group (you do this by modifying the Channels to add them to a specific group). You now have an association of Channels to ChannelPlacementGroup, and ChannelPlacementGroup to Nodes. This association means that all the Channels in the group are able to run on any of the Nodes associated with the group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateChannelPlacementGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateChannelPlacementGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // CreateChannelPlacementGroupRequest
 *   ClusterId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Nodes: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   RequestId: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateChannelPlacementGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelPlacementGroupResponse
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
 * @param CreateChannelPlacementGroupCommandInput - {@link CreateChannelPlacementGroupCommandInput}
 * @returns {@link CreateChannelPlacementGroupCommandOutput}
 * @see {@link CreateChannelPlacementGroupCommandInput} for command's `input` shape.
 * @see {@link CreateChannelPlacementGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link UnprocessableEntityException} (client fault)
 *  Placeholder documentation for UnprocessableEntityException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class CreateChannelPlacementGroupCommand extends $Command
  .classBuilder<
    CreateChannelPlacementGroupCommandInput,
    CreateChannelPlacementGroupCommandOutput,
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
  .s("MediaLive", "CreateChannelPlacementGroup", {})
  .n("MediaLiveClient", "CreateChannelPlacementGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateChannelPlacementGroupCommand)
  .de(de_CreateChannelPlacementGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChannelPlacementGroupRequest;
      output: CreateChannelPlacementGroupResponse;
    };
    sdk: {
      input: CreateChannelPlacementGroupCommandInput;
      output: CreateChannelPlacementGroupCommandOutput;
    };
  };
}

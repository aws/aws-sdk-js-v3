// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteChannelPlacementGroupRequest, DeleteChannelPlacementGroupResponse } from "../models/models_2";
import {
  de_DeleteChannelPlacementGroupCommand,
  se_DeleteChannelPlacementGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteChannelPlacementGroupCommand}.
 */
export interface DeleteChannelPlacementGroupCommandInput extends DeleteChannelPlacementGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteChannelPlacementGroupCommand}.
 */
export interface DeleteChannelPlacementGroupCommandOutput
  extends DeleteChannelPlacementGroupResponse,
    __MetadataBearer {}

/**
 * Delete the specified ChannelPlacementGroup that exists in the specified Cluster.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteChannelPlacementGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteChannelPlacementGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaLiveClient(config);
 * const input = { // DeleteChannelPlacementGroupRequest
 *   ChannelPlacementGroupId: "STRING_VALUE", // required
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new DeleteChannelPlacementGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteChannelPlacementGroupResponse
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
 * @param DeleteChannelPlacementGroupCommandInput - {@link DeleteChannelPlacementGroupCommandInput}
 * @returns {@link DeleteChannelPlacementGroupCommandOutput}
 * @see {@link DeleteChannelPlacementGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelPlacementGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 * @public
 */
export class DeleteChannelPlacementGroupCommand extends $Command
  .classBuilder<
    DeleteChannelPlacementGroupCommandInput,
    DeleteChannelPlacementGroupCommandOutput,
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
  .s("MediaLive", "DeleteChannelPlacementGroup", {})
  .n("MediaLiveClient", "DeleteChannelPlacementGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteChannelPlacementGroupCommand)
  .de(de_DeleteChannelPlacementGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteChannelPlacementGroupRequest;
      output: DeleteChannelPlacementGroupResponse;
    };
    sdk: {
      input: DeleteChannelPlacementGroupCommandInput;
      output: DeleteChannelPlacementGroupCommandOutput;
    };
  };
}

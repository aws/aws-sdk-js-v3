// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { DescribeChannelPlacementGroupRequest, DescribeChannelPlacementGroupResponse } from "../models/models_1";
import { DescribeChannelPlacementGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeChannelPlacementGroupCommand}.
 */
export interface DescribeChannelPlacementGroupCommandInput extends DescribeChannelPlacementGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeChannelPlacementGroupCommand}.
 */
export interface DescribeChannelPlacementGroupCommandOutput
  extends DescribeChannelPlacementGroupResponse,
    __MetadataBearer {}

/**
 * Get details about a ChannelPlacementGroup.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeChannelPlacementGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeChannelPlacementGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeChannelPlacementGroupRequest
 *   ChannelPlacementGroupId: "STRING_VALUE", // required
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new DescribeChannelPlacementGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChannelPlacementGroupResponse
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
 * @param DescribeChannelPlacementGroupCommandInput - {@link DescribeChannelPlacementGroupCommandInput}
 * @returns {@link DescribeChannelPlacementGroupCommandOutput}
 * @see {@link DescribeChannelPlacementGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelPlacementGroupCommandOutput} for command's `response` shape.
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
export class DescribeChannelPlacementGroupCommand extends $Command
  .classBuilder<
    DescribeChannelPlacementGroupCommandInput,
    DescribeChannelPlacementGroupCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "DescribeChannelPlacementGroup", {})
  .n("MediaLiveClient", "DescribeChannelPlacementGroupCommand")
  .sc(DescribeChannelPlacementGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeChannelPlacementGroupRequest;
      output: DescribeChannelPlacementGroupResponse;
    };
    sdk: {
      input: DescribeChannelPlacementGroupCommandInput;
      output: DescribeChannelPlacementGroupCommandOutput;
    };
  };
}

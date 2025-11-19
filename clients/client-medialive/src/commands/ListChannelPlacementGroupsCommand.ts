// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListChannelPlacementGroupsRequest, ListChannelPlacementGroupsResponse } from "../models/models_1";
import { ListChannelPlacementGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChannelPlacementGroupsCommand}.
 */
export interface ListChannelPlacementGroupsCommandInput extends ListChannelPlacementGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelPlacementGroupsCommand}.
 */
export interface ListChannelPlacementGroupsCommandOutput extends ListChannelPlacementGroupsResponse, __MetadataBearer {}

/**
 * Retrieve the list of ChannelPlacementGroups in the specified Cluster.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListChannelPlacementGroupsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListChannelPlacementGroupsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // ListChannelPlacementGroupsRequest
 *   ClusterId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListChannelPlacementGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelPlacementGroupsResponse
 * //   ChannelPlacementGroups: [ // __listOfDescribeChannelPlacementGroupSummary
 * //     { // DescribeChannelPlacementGroupSummary
 * //       Arn: "STRING_VALUE",
 * //       Channels: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       ClusterId: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Nodes: [
 * //         "STRING_VALUE",
 * //       ],
 * //       State: "UNASSIGNED" || "ASSIGNING" || "ASSIGNED" || "DELETING" || "DELETE_FAILED" || "DELETED" || "UNASSIGNING",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelPlacementGroupsCommandInput - {@link ListChannelPlacementGroupsCommandInput}
 * @returns {@link ListChannelPlacementGroupsCommandOutput}
 * @see {@link ListChannelPlacementGroupsCommandInput} for command's `input` shape.
 * @see {@link ListChannelPlacementGroupsCommandOutput} for command's `response` shape.
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
export class ListChannelPlacementGroupsCommand extends $Command
  .classBuilder<
    ListChannelPlacementGroupsCommandInput,
    ListChannelPlacementGroupsCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "ListChannelPlacementGroups", {})
  .n("MediaLiveClient", "ListChannelPlacementGroupsCommand")
  .sc(ListChannelPlacementGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelPlacementGroupsRequest;
      output: ListChannelPlacementGroupsResponse;
    };
    sdk: {
      input: ListChannelPlacementGroupsCommandInput;
      output: ListChannelPlacementGroupsCommandOutput;
    };
  };
}

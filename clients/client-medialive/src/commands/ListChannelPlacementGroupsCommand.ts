// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListChannelPlacementGroupsRequest, ListChannelPlacementGroupsResponse } from "../models/models_2";
import { de_ListChannelPlacementGroupsCommand, se_ListChannelPlacementGroupsCommand } from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "ListChannelPlacementGroups", {})
  .n("MediaLiveClient", "ListChannelPlacementGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListChannelPlacementGroupsCommand)
  .de(de_ListChannelPlacementGroupsCommand)
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

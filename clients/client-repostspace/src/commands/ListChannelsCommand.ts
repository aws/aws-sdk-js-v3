// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListChannelsInput, ListChannelsOutput, ListChannelsOutputFilterSensitiveLog } from "../models/models_0";
import { de_ListChannelsCommand, se_ListChannelsCommand } from "../protocols/Aws_restJson1";
import { RepostspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RepostspaceClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChannelsCommand}.
 */
export interface ListChannelsCommandInput extends ListChannelsInput {}
/**
 * @public
 *
 * The output of {@link ListChannelsCommand}.
 */
export interface ListChannelsCommandOutput extends ListChannelsOutput, __MetadataBearer {}

/**
 * <p>Returns the list of channel within a private re:Post with some information about each channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, ListChannelsCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, ListChannelsCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * const client = new RepostspaceClient(config);
 * const input = { // ListChannelsInput
 *   spaceId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelsOutput
 * //   channels: [ // ChannelsList // required
 * //     { // ChannelData
 * //       spaceId: "STRING_VALUE", // required
 * //       channelId: "STRING_VALUE", // required
 * //       channelName: "STRING_VALUE", // required
 * //       channelDescription: "STRING_VALUE",
 * //       createDateTime: new Date("TIMESTAMP"), // required
 * //       deleteDateTime: new Date("TIMESTAMP"),
 * //       channelStatus: "CREATED" || "CREATING" || "CREATE_FAILED" || "DELETED" || "DELETING" || "DELETE_FAILED", // required
 * //       userCount: Number("int"), // required
 * //       groupCount: Number("int"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelsCommandInput - {@link ListChannelsCommandInput}
 * @returns {@link ListChannelsCommandOutput}
 * @see {@link ListChannelsCommandInput} for command's `input` shape.
 * @see {@link ListChannelsCommandOutput} for command's `response` shape.
 * @see {@link RepostspaceClientResolvedConfig | config} for RepostspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RepostspaceServiceException}
 * <p>Base exception class for all service exceptions from Repostspace service.</p>
 *
 *
 * @example ListChannels
 * ```javascript
 * //
 * const input = {
 *   spaceId: "SP1234567890abcdefghijkl"
 * };
 * const command = new ListChannelsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   channels: [
 *     {
 *       channelDescription: "Useful channel description",
 *       channelId: "WS1234567890abcdefghijkl",
 *       channelName: "My First Channel",
 *       channelStatus: "CREATED",
 *       createDateTime: "2020-02-20T20:20:20.420Z",
 *       groupCount: 1,
 *       spaceId: "SP1234567890abcdefghijkl",
 *       userCount: 5
 *     },
 *     {
 *       channelDescription: "Better channel description",
 *       channelId: "WSabcdefghijkl1234567890",
 *       channelName: "Better Channel",
 *       channelStatus: "CREATED",
 *       createDateTime: "2025-06-20T14:43:34.201Z",
 *       groupCount: 0,
 *       spaceId: "SP1234567890abcdefghijkl",
 *       userCount: 1
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListChannelsCommand extends $Command
  .classBuilder<
    ListChannelsCommandInput,
    ListChannelsCommandOutput,
    RepostspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RepostspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RepostSpace", "ListChannels", {})
  .n("RepostspaceClient", "ListChannelsCommand")
  .f(void 0, ListChannelsOutputFilterSensitiveLog)
  .ser(se_ListChannelsCommand)
  .de(de_ListChannelsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelsInput;
      output: ListChannelsOutput;
    };
    sdk: {
      input: ListChannelsCommandInput;
      output: ListChannelsCommandOutput;
    };
  };
}

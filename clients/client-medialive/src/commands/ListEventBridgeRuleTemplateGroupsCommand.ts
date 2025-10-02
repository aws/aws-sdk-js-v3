// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import {
  ListEventBridgeRuleTemplateGroupsRequest,
  ListEventBridgeRuleTemplateGroupsResponse,
} from "../models/models_2";
import {
  de_ListEventBridgeRuleTemplateGroupsCommand,
  se_ListEventBridgeRuleTemplateGroupsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventBridgeRuleTemplateGroupsCommand}.
 */
export interface ListEventBridgeRuleTemplateGroupsCommandInput extends ListEventBridgeRuleTemplateGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventBridgeRuleTemplateGroupsCommand}.
 */
export interface ListEventBridgeRuleTemplateGroupsCommandOutput
  extends ListEventBridgeRuleTemplateGroupsResponse,
    __MetadataBearer {}

/**
 * Lists eventbridge rule template groups.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListEventBridgeRuleTemplateGroupsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListEventBridgeRuleTemplateGroupsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // ListEventBridgeRuleTemplateGroupsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SignalMapIdentifier: "STRING_VALUE",
 * };
 * const command = new ListEventBridgeRuleTemplateGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventBridgeRuleTemplateGroupsResponse
 * //   EventBridgeRuleTemplateGroups: [ // __listOfEventBridgeRuleTemplateGroupSummary
 * //     { // EventBridgeRuleTemplateGroupSummary
 * //       Arn: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       Description: "STRING_VALUE",
 * //       Id: "STRING_VALUE", // required
 * //       ModifiedAt: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE", // required
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       TemplateCount: Number("int"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventBridgeRuleTemplateGroupsCommandInput - {@link ListEventBridgeRuleTemplateGroupsCommandInput}
 * @returns {@link ListEventBridgeRuleTemplateGroupsCommandOutput}
 * @see {@link ListEventBridgeRuleTemplateGroupsCommandInput} for command's `input` shape.
 * @see {@link ListEventBridgeRuleTemplateGroupsCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
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
export class ListEventBridgeRuleTemplateGroupsCommand extends $Command
  .classBuilder<
    ListEventBridgeRuleTemplateGroupsCommandInput,
    ListEventBridgeRuleTemplateGroupsCommandOutput,
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
  .s("MediaLive", "ListEventBridgeRuleTemplateGroups", {})
  .n("MediaLiveClient", "ListEventBridgeRuleTemplateGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListEventBridgeRuleTemplateGroupsCommand)
  .de(de_ListEventBridgeRuleTemplateGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventBridgeRuleTemplateGroupsRequest;
      output: ListEventBridgeRuleTemplateGroupsResponse;
    };
    sdk: {
      input: ListEventBridgeRuleTemplateGroupsCommandInput;
      output: ListEventBridgeRuleTemplateGroupsCommandOutput;
    };
  };
}

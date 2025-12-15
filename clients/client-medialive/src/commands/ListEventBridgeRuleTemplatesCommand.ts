// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { ListEventBridgeRuleTemplatesRequest, ListEventBridgeRuleTemplatesResponse } from "../models/models_1";
import { ListEventBridgeRuleTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventBridgeRuleTemplatesCommand}.
 */
export interface ListEventBridgeRuleTemplatesCommandInput extends ListEventBridgeRuleTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListEventBridgeRuleTemplatesCommand}.
 */
export interface ListEventBridgeRuleTemplatesCommandOutput
  extends ListEventBridgeRuleTemplatesResponse,
    __MetadataBearer {}

/**
 * Lists eventbridge rule templates.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListEventBridgeRuleTemplatesCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListEventBridgeRuleTemplatesCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // ListEventBridgeRuleTemplatesRequest
 *   GroupIdentifier: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SignalMapIdentifier: "STRING_VALUE",
 * };
 * const command = new ListEventBridgeRuleTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListEventBridgeRuleTemplatesResponse
 * //   EventBridgeRuleTemplates: [ // __listOfEventBridgeRuleTemplateSummary
 * //     { // EventBridgeRuleTemplateSummary
 * //       Arn: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       Description: "STRING_VALUE",
 * //       EventTargetCount: Number("int"), // required
 * //       EventType: "MEDIALIVE_MULTIPLEX_ALERT" || "MEDIALIVE_MULTIPLEX_STATE_CHANGE" || "MEDIALIVE_CHANNEL_ALERT" || "MEDIALIVE_CHANNEL_INPUT_CHANGE" || "MEDIALIVE_CHANNEL_STATE_CHANGE" || "MEDIAPACKAGE_INPUT_NOTIFICATION" || "MEDIAPACKAGE_KEY_PROVIDER_NOTIFICATION" || "MEDIAPACKAGE_HARVEST_JOB_NOTIFICATION" || "SIGNAL_MAP_ACTIVE_ALARM" || "MEDIACONNECT_ALERT" || "MEDIACONNECT_SOURCE_HEALTH" || "MEDIACONNECT_OUTPUT_HEALTH" || "MEDIACONNECT_FLOW_STATUS_CHANGE", // required
 * //       GroupId: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       ModifiedAt: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE", // required
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventBridgeRuleTemplatesCommandInput - {@link ListEventBridgeRuleTemplatesCommandInput}
 * @returns {@link ListEventBridgeRuleTemplatesCommandOutput}
 * @see {@link ListEventBridgeRuleTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListEventBridgeRuleTemplatesCommandOutput} for command's `response` shape.
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
export class ListEventBridgeRuleTemplatesCommand extends $Command
  .classBuilder<
    ListEventBridgeRuleTemplatesCommandInput,
    ListEventBridgeRuleTemplatesCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "ListEventBridgeRuleTemplates", {})
  .n("MediaLiveClient", "ListEventBridgeRuleTemplatesCommand")
  .sc(ListEventBridgeRuleTemplates$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventBridgeRuleTemplatesRequest;
      output: ListEventBridgeRuleTemplatesResponse;
    };
    sdk: {
      input: ListEventBridgeRuleTemplatesCommandInput;
      output: ListEventBridgeRuleTemplatesCommandOutput;
    };
  };
}

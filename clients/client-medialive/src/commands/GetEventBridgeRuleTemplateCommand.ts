// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { GetEventBridgeRuleTemplateRequest, GetEventBridgeRuleTemplateResponse } from "../models/models_2";
import { GetEventBridgeRuleTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEventBridgeRuleTemplateCommand}.
 */
export interface GetEventBridgeRuleTemplateCommandInput extends GetEventBridgeRuleTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetEventBridgeRuleTemplateCommand}.
 */
export interface GetEventBridgeRuleTemplateCommandOutput extends GetEventBridgeRuleTemplateResponse, __MetadataBearer {}

/**
 * Retrieves the specified eventbridge rule template.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, GetEventBridgeRuleTemplateCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, GetEventBridgeRuleTemplateCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // GetEventBridgeRuleTemplateRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetEventBridgeRuleTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetEventBridgeRuleTemplateResponse
 * //   Arn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   EventTargets: [ // __listOfEventBridgeRuleTemplateTarget
 * //     { // EventBridgeRuleTemplateTarget
 * //       Arn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   EventType: "MEDIALIVE_MULTIPLEX_ALERT" || "MEDIALIVE_MULTIPLEX_STATE_CHANGE" || "MEDIALIVE_CHANNEL_ALERT" || "MEDIALIVE_CHANNEL_INPUT_CHANGE" || "MEDIALIVE_CHANNEL_STATE_CHANGE" || "MEDIAPACKAGE_INPUT_NOTIFICATION" || "MEDIAPACKAGE_KEY_PROVIDER_NOTIFICATION" || "MEDIAPACKAGE_HARVEST_JOB_NOTIFICATION" || "SIGNAL_MAP_ACTIVE_ALARM" || "MEDIACONNECT_ALERT" || "MEDIACONNECT_SOURCE_HEALTH" || "MEDIACONNECT_OUTPUT_HEALTH" || "MEDIACONNECT_FLOW_STATUS_CHANGE",
 * //   GroupId: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   ModifiedAt: new Date("TIMESTAMP"),
 * //   Name: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEventBridgeRuleTemplateCommandInput - {@link GetEventBridgeRuleTemplateCommandInput}
 * @returns {@link GetEventBridgeRuleTemplateCommandOutput}
 * @see {@link GetEventBridgeRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link GetEventBridgeRuleTemplateCommandOutput} for command's `response` shape.
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
export class GetEventBridgeRuleTemplateCommand extends $Command
  .classBuilder<
    GetEventBridgeRuleTemplateCommandInput,
    GetEventBridgeRuleTemplateCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "GetEventBridgeRuleTemplate", {})
  .n("MediaLiveClient", "GetEventBridgeRuleTemplateCommand")
  .sc(GetEventBridgeRuleTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventBridgeRuleTemplateRequest;
      output: GetEventBridgeRuleTemplateResponse;
    };
    sdk: {
      input: GetEventBridgeRuleTemplateCommandInput;
      output: GetEventBridgeRuleTemplateCommandOutput;
    };
  };
}

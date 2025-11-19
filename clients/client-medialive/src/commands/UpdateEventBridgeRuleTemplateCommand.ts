// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateEventBridgeRuleTemplateRequest, UpdateEventBridgeRuleTemplateResponse } from "../models/models_1";
import { UpdateEventBridgeRuleTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEventBridgeRuleTemplateCommand}.
 */
export interface UpdateEventBridgeRuleTemplateCommandInput extends UpdateEventBridgeRuleTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventBridgeRuleTemplateCommand}.
 */
export interface UpdateEventBridgeRuleTemplateCommandOutput
  extends UpdateEventBridgeRuleTemplateResponse,
    __MetadataBearer {}

/**
 * Updates the specified eventbridge rule template.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateEventBridgeRuleTemplateCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateEventBridgeRuleTemplateCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateEventBridgeRuleTemplateRequest
 *   Description: "STRING_VALUE",
 *   EventTargets: [ // __listOfEventBridgeRuleTemplateTarget
 *     { // EventBridgeRuleTemplateTarget
 *       Arn: "STRING_VALUE", // required
 *     },
 *   ],
 *   EventType: "MEDIALIVE_MULTIPLEX_ALERT" || "MEDIALIVE_MULTIPLEX_STATE_CHANGE" || "MEDIALIVE_CHANNEL_ALERT" || "MEDIALIVE_CHANNEL_INPUT_CHANGE" || "MEDIALIVE_CHANNEL_STATE_CHANGE" || "MEDIAPACKAGE_INPUT_NOTIFICATION" || "MEDIAPACKAGE_KEY_PROVIDER_NOTIFICATION" || "MEDIAPACKAGE_HARVEST_JOB_NOTIFICATION" || "SIGNAL_MAP_ACTIVE_ALARM" || "MEDIACONNECT_ALERT" || "MEDIACONNECT_SOURCE_HEALTH" || "MEDIACONNECT_OUTPUT_HEALTH" || "MEDIACONNECT_FLOW_STATUS_CHANGE",
 *   GroupIdentifier: "STRING_VALUE",
 *   Identifier: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 * };
 * const command = new UpdateEventBridgeRuleTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEventBridgeRuleTemplateResponse
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
 * @param UpdateEventBridgeRuleTemplateCommandInput - {@link UpdateEventBridgeRuleTemplateCommandInput}
 * @returns {@link UpdateEventBridgeRuleTemplateCommandOutput}
 * @see {@link UpdateEventBridgeRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateEventBridgeRuleTemplateCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
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
export class UpdateEventBridgeRuleTemplateCommand extends $Command
  .classBuilder<
    UpdateEventBridgeRuleTemplateCommandInput,
    UpdateEventBridgeRuleTemplateCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "UpdateEventBridgeRuleTemplate", {})
  .n("MediaLiveClient", "UpdateEventBridgeRuleTemplateCommand")
  .sc(UpdateEventBridgeRuleTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventBridgeRuleTemplateRequest;
      output: UpdateEventBridgeRuleTemplateResponse;
    };
    sdk: {
      input: UpdateEventBridgeRuleTemplateCommandInput;
      output: UpdateEventBridgeRuleTemplateCommandOutput;
    };
  };
}

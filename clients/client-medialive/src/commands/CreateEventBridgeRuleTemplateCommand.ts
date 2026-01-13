// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { CreateEventBridgeRuleTemplateRequest, CreateEventBridgeRuleTemplateResponse } from "../models/models_1";
import { CreateEventBridgeRuleTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEventBridgeRuleTemplateCommand}.
 */
export interface CreateEventBridgeRuleTemplateCommandInput extends CreateEventBridgeRuleTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventBridgeRuleTemplateCommand}.
 */
export interface CreateEventBridgeRuleTemplateCommandOutput extends CreateEventBridgeRuleTemplateResponse, __MetadataBearer {}

/**
 * Creates an eventbridge rule template to monitor events and send notifications to your targeted resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateEventBridgeRuleTemplateCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateEventBridgeRuleTemplateCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // CreateEventBridgeRuleTemplateRequest
 *   Description: "STRING_VALUE",
 *   EventTargets: [ // __listOfEventBridgeRuleTemplateTarget
 *     { // EventBridgeRuleTemplateTarget
 *       Arn: "STRING_VALUE", // required
 *     },
 *   ],
 *   EventType: "MEDIALIVE_MULTIPLEX_ALERT" || "MEDIALIVE_MULTIPLEX_STATE_CHANGE" || "MEDIALIVE_CHANNEL_ALERT" || "MEDIALIVE_CHANNEL_INPUT_CHANGE" || "MEDIALIVE_CHANNEL_STATE_CHANGE" || "MEDIAPACKAGE_INPUT_NOTIFICATION" || "MEDIAPACKAGE_KEY_PROVIDER_NOTIFICATION" || "MEDIAPACKAGE_HARVEST_JOB_NOTIFICATION" || "SIGNAL_MAP_ACTIVE_ALARM" || "MEDIACONNECT_ALERT" || "MEDIACONNECT_SOURCE_HEALTH" || "MEDIACONNECT_OUTPUT_HEALTH" || "MEDIACONNECT_FLOW_STATUS_CHANGE", // required
 *   GroupIdentifier: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RequestId: "STRING_VALUE",
 * };
 * const command = new CreateEventBridgeRuleTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventBridgeRuleTemplateResponse
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
 * @param CreateEventBridgeRuleTemplateCommandInput - {@link CreateEventBridgeRuleTemplateCommandInput}
 * @returns {@link CreateEventBridgeRuleTemplateCommandOutput}
 * @see {@link CreateEventBridgeRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateEventBridgeRuleTemplateCommandOutput} for command's `response` shape.
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
export class CreateEventBridgeRuleTemplateCommand extends $Command
  .classBuilder<
    CreateEventBridgeRuleTemplateCommandInput,
    CreateEventBridgeRuleTemplateCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "CreateEventBridgeRuleTemplate", {})
  .n("MediaLiveClient", "CreateEventBridgeRuleTemplateCommand")
  .sc(CreateEventBridgeRuleTemplate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventBridgeRuleTemplateRequest;
      output: CreateEventBridgeRuleTemplateResponse;
    };
    sdk: {
      input: CreateEventBridgeRuleTemplateCommandInput;
      output: CreateEventBridgeRuleTemplateCommandOutput;
    };
  };
}

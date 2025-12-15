// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateVoiceConnectorGroupRequest, UpdateVoiceConnectorGroupResponse } from "../models/models_0";
import { UpdateVoiceConnectorGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateVoiceConnectorGroupCommand}.
 */
export interface UpdateVoiceConnectorGroupCommandInput extends UpdateVoiceConnectorGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVoiceConnectorGroupCommand}.
 */
export interface UpdateVoiceConnectorGroupCommandOutput extends UpdateVoiceConnectorGroupResponse, __MetadataBearer {}

/**
 * <p>Updates the settings for the specified Amazon Chime SDK Voice Connector group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdateVoiceConnectorGroupCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdateVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // UpdateVoiceConnectorGroupRequest
 *   VoiceConnectorGroupId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   VoiceConnectorItems: [ // VoiceConnectorItemList // required
 *     { // VoiceConnectorItem
 *       VoiceConnectorId: "STRING_VALUE", // required
 *       Priority: Number("int"), // required
 *     },
 *   ],
 * };
 * const command = new UpdateVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVoiceConnectorGroupResponse
 * //   VoiceConnectorGroup: { // VoiceConnectorGroup
 * //     VoiceConnectorGroupId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     VoiceConnectorItems: [ // VoiceConnectorItemList
 * //       { // VoiceConnectorItem
 * //         VoiceConnectorId: "STRING_VALUE", // required
 * //         Priority: Number("int"), // required
 * //       },
 * //     ],
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     VoiceConnectorGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateVoiceConnectorGroupCommandInput - {@link UpdateVoiceConnectorGroupCommandInput}
 * @returns {@link UpdateVoiceConnectorGroupCommandOutput}
 * @see {@link UpdateVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Multiple instances of the same request were made simultaneously.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 *
 * @public
 */
export class UpdateVoiceConnectorGroupCommand extends $Command
  .classBuilder<
    UpdateVoiceConnectorGroupCommandInput,
    UpdateVoiceConnectorGroupCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "UpdateVoiceConnectorGroup", {})
  .n("ChimeSDKVoiceClient", "UpdateVoiceConnectorGroupCommand")
  .sc(UpdateVoiceConnectorGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVoiceConnectorGroupRequest;
      output: UpdateVoiceConnectorGroupResponse;
    };
    sdk: {
      input: UpdateVoiceConnectorGroupCommandInput;
      output: UpdateVoiceConnectorGroupCommandOutput;
    };
  };
}

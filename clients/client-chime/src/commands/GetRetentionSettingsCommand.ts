// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRetentionSettingsRequest, GetRetentionSettingsResponse } from "../models/models_0";
import { GetRetentionSettings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRetentionSettingsCommand}.
 */
export interface GetRetentionSettingsCommandInput extends GetRetentionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetRetentionSettingsCommand}.
 */
export interface GetRetentionSettingsCommandOutput extends GetRetentionSettingsResponse, __MetadataBearer {}

/**
 * <p>
 * Gets the retention settings for the specified Amazon Chime Enterprise account. For more information about retention settings, see
 * <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a> in the <i>Amazon Chime Administration Guide</i>.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetRetentionSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetRetentionSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // GetRetentionSettingsRequest
 *   AccountId: "STRING_VALUE", // required
 * };
 * const command = new GetRetentionSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetRetentionSettingsResponse
 * //   RetentionSettings: { // RetentionSettings
 * //     RoomRetentionSettings: { // RoomRetentionSettings
 * //       RetentionDays: Number("int"),
 * //     },
 * //     ConversationRetentionSettings: { // ConversationRetentionSettings
 * //       RetentionDays: Number("int"),
 * //     },
 * //   },
 * //   InitiateDeletionTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetRetentionSettingsCommandInput - {@link GetRetentionSettingsCommandInput}
 * @returns {@link GetRetentionSettingsCommandOutput}
 * @see {@link GetRetentionSettingsCommandInput} for command's `input` shape.
 * @see {@link GetRetentionSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 *
 * @public
 */
export class GetRetentionSettingsCommand extends $Command
  .classBuilder<
    GetRetentionSettingsCommandInput,
    GetRetentionSettingsCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "GetRetentionSettings", {})
  .n("ChimeClient", "GetRetentionSettingsCommand")
  .sc(GetRetentionSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRetentionSettingsRequest;
      output: GetRetentionSettingsResponse;
    };
    sdk: {
      input: GetRetentionSettingsCommandInput;
      output: GetRetentionSettingsCommandOutput;
    };
  };
}

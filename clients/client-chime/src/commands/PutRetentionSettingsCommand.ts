// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRetentionSettingsRequest, PutRetentionSettingsResponse } from "../models/models_0";
import { PutRetentionSettings } from "../schemas/schemas_22_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRetentionSettingsCommand}.
 */
export interface PutRetentionSettingsCommandInput extends PutRetentionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link PutRetentionSettingsCommand}.
 */
export interface PutRetentionSettingsCommandOutput extends PutRetentionSettingsResponse, __MetadataBearer {}

/**
 * <p>
 * Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see
 * <a href="https://docs.aws.amazon.com/chime/latest/ag/cloudtrail.html">Logging Amazon Chime API Calls with AWS CloudTrail</a>
 * in the <i>Amazon Chime Administration Guide</i>.</p>
 *          <p>
 * To turn off existing retention settings, remove the number of days from the corresponding
 * <b>RetentionDays</b>
 * field in the
 * <b>RetentionSettings</b>
 * object. For more information about retention settings, see
 * <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a>
 * in the <i>Amazon Chime Administration Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutRetentionSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutRetentionSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // PutRetentionSettingsRequest
 *   AccountId: "STRING_VALUE", // required
 *   RetentionSettings: { // RetentionSettings
 *     RoomRetentionSettings: { // RoomRetentionSettings
 *       RetentionDays: Number("int"),
 *     },
 *     ConversationRetentionSettings: { // ConversationRetentionSettings
 *       RetentionDays: Number("int"),
 *     },
 *   },
 * };
 * const command = new PutRetentionSettingsCommand(input);
 * const response = await client.send(command);
 * // { // PutRetentionSettingsResponse
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
 * @param PutRetentionSettingsCommandInput - {@link PutRetentionSettingsCommandInput}
 * @returns {@link PutRetentionSettingsCommandOutput}
 * @see {@link PutRetentionSettingsCommandInput} for command's `input` shape.
 * @see {@link PutRetentionSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
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
export class PutRetentionSettingsCommand extends $Command
  .classBuilder<
    PutRetentionSettingsCommandInput,
    PutRetentionSettingsCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "PutRetentionSettings", {})
  .n("ChimeClient", "PutRetentionSettingsCommand")
  .sc(PutRetentionSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRetentionSettingsRequest;
      output: PutRetentionSettingsResponse;
    };
    sdk: {
      input: PutRetentionSettingsCommandInput;
      output: PutRetentionSettingsCommandOutput;
    };
  };
}

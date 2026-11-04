// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRetentionSettingsRequest, PutRetentionSettingsResponse } from "../models/models_0";
import { PutRetentionSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see [Logging Amazon Chime API Calls with AWS CloudTrail](https://docs.aws.amazon.com/chime/latest/ag/cloudtrail.html) in the *Amazon Chime Administration Guide*.
 *
 * To turn off existing retention settings, remove the number of days from the corresponding **RetentionDays** field in the **RetentionSettings** object. For more information about retention settings, see [Managing Chat Retention Policies](https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html) in the *Amazon Chime Administration Guide*.
 *
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeServiceException}
 *
 * Base exception class for all service exceptions from Chime service.
 *
 * @public
 */
export class PutRetentionSettingsCommand extends command<PutRetentionSettingsCommandInput, PutRetentionSettingsCommandOutput>(
  _ep0,
  _mw0,
  "PutRetentionSettings",
  PutRetentionSettings$
) {
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

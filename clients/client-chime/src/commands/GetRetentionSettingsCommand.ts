// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRetentionSettingsRequest, GetRetentionSettingsResponse } from "../models/models_0";
import { GetRetentionSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the retention settings for the specified Amazon Chime Enterprise account. For more information about retention settings, see [Managing Chat Retention Policies](https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html) in the *Amazon Chime Administration Guide*.
 *
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
 *
 * The input parameters don't match the service's restrictions.
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
export class GetRetentionSettingsCommand extends command<GetRetentionSettingsCommandInput, GetRetentionSettingsCommandOutput>(
  _ep0,
  _mw0,
  "GetRetentionSettings",
  GetRetentionSettings$
) {
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

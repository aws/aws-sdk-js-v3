// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutChannelExpirationSettingsRequest, PutChannelExpirationSettingsResponse } from "../models/models_0";
import { PutChannelExpirationSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutChannelExpirationSettingsCommand}.
 */
export interface PutChannelExpirationSettingsCommandInput extends PutChannelExpirationSettingsRequest {}
/**
 * @public
 *
 * The output of {@link PutChannelExpirationSettingsCommand}.
 */
export interface PutChannelExpirationSettingsCommandOutput extends PutChannelExpirationSettingsResponse, __MetadataBearer {}

/**
 * Sets the number of days before the channel is automatically deleted.
 *
 * > **Note:**
 * >
 * > - A background process deletes expired channels within 6 hours of expiration. Actual deletion times may vary.
 * > - Expired channels that have not yet been deleted appear as active, and you can update their expiration settings. The system honors the new settings.
 * > - The `x-amz-chime-bearer` request header is mandatory. Use the ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in the header.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, PutChannelExpirationSettingsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, PutChannelExpirationSettingsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // PutChannelExpirationSettingsRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE",
 *   ExpirationSettings: { // ExpirationSettings
 *     ExpirationDays: Number("int"), // required
 *     ExpirationCriterion: "CREATED_TIMESTAMP" || "LAST_MESSAGE_TIMESTAMP", // required
 *   },
 * };
 * const command = new PutChannelExpirationSettingsCommand(input);
 * const response = await client.send(command);
 * // { // PutChannelExpirationSettingsResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   ExpirationSettings: { // ExpirationSettings
 * //     ExpirationDays: Number("int"), // required
 * //     ExpirationCriterion: "CREATED_TIMESTAMP" || "LAST_MESSAGE_TIMESTAMP", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param PutChannelExpirationSettingsCommandInput - {@link PutChannelExpirationSettingsCommandInput}
 * @returns {@link PutChannelExpirationSettingsCommandOutput}
 * @see {@link PutChannelExpirationSettingsCommandInput} for command's `input` shape.
 * @see {@link PutChannelExpirationSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
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
 * @throws {@link ChimeSDKMessagingServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKMessaging service.
 *
 * @public
 */
export class PutChannelExpirationSettingsCommand extends command<PutChannelExpirationSettingsCommandInput, PutChannelExpirationSettingsCommandOutput>(
  _ep0,
  _mw0,
  "PutChannelExpirationSettings",
  PutChannelExpirationSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutChannelExpirationSettingsRequest;
      output: PutChannelExpirationSettingsResponse;
    };
    sdk: {
      input: PutChannelExpirationSettingsCommandInput;
      output: PutChannelExpirationSettingsCommandOutput;
    };
  };
}

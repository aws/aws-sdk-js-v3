// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutAppInstanceRetentionSettingsRequest,
  PutAppInstanceRetentionSettingsResponse,
} from "../models/models_0";
import { PutAppInstanceRetentionSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAppInstanceRetentionSettingsCommand}.
 */
export interface PutAppInstanceRetentionSettingsCommandInput extends PutAppInstanceRetentionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link PutAppInstanceRetentionSettingsCommand}.
 */
export interface PutAppInstanceRetentionSettingsCommandOutput extends PutAppInstanceRetentionSettingsResponse, __MetadataBearer {}

/**
 * Sets the amount of time in days that a given `AppInstance` retains data.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, PutAppInstanceRetentionSettingsCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, PutAppInstanceRetentionSettingsCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // PutAppInstanceRetentionSettingsRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   AppInstanceRetentionSettings: { // AppInstanceRetentionSettings
 *     ChannelRetentionSettings: { // ChannelRetentionSettings
 *       RetentionDays: Number("int"),
 *     },
 *   },
 * };
 * const command = new PutAppInstanceRetentionSettingsCommand(input);
 * const response = await client.send(command);
 * // { // PutAppInstanceRetentionSettingsResponse
 * //   AppInstanceRetentionSettings: { // AppInstanceRetentionSettings
 * //     ChannelRetentionSettings: { // ChannelRetentionSettings
 * //       RetentionDays: Number("int"),
 * //     },
 * //   },
 * //   InitiateDeletionTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param PutAppInstanceRetentionSettingsCommandInput - {@link PutAppInstanceRetentionSettingsCommandInput}
 * @returns {@link PutAppInstanceRetentionSettingsCommandOutput}
 * @see {@link PutAppInstanceRetentionSettingsCommandInput} for command's `input` shape.
 * @see {@link PutAppInstanceRetentionSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
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
 * @throws {@link ChimeSDKIdentityServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKIdentity service.
 *
 * @public
 */
export class PutAppInstanceRetentionSettingsCommand extends command<PutAppInstanceRetentionSettingsCommandInput, PutAppInstanceRetentionSettingsCommandOutput>(
  _ep0,
  _mw0,
  "PutAppInstanceRetentionSettings",
  PutAppInstanceRetentionSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAppInstanceRetentionSettingsRequest;
      output: PutAppInstanceRetentionSettingsResponse;
    };
    sdk: {
      input: PutAppInstanceRetentionSettingsCommandInput;
      output: PutAppInstanceRetentionSettingsCommandOutput;
    };
  };
}

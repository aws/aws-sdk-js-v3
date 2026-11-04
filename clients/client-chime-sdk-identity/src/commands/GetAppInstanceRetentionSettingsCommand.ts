// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetAppInstanceRetentionSettingsRequest,
  GetAppInstanceRetentionSettingsResponse,
} from "../models/models_0";
import { GetAppInstanceRetentionSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAppInstanceRetentionSettingsCommand}.
 */
export interface GetAppInstanceRetentionSettingsCommandInput extends GetAppInstanceRetentionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetAppInstanceRetentionSettingsCommand}.
 */
export interface GetAppInstanceRetentionSettingsCommandOutput extends GetAppInstanceRetentionSettingsResponse, __MetadataBearer {}

/**
 * Gets the retention settings for an `AppInstance`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, GetAppInstanceRetentionSettingsCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, GetAppInstanceRetentionSettingsCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // GetAppInstanceRetentionSettingsRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new GetAppInstanceRetentionSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetAppInstanceRetentionSettingsResponse
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
 * @param GetAppInstanceRetentionSettingsCommandInput - {@link GetAppInstanceRetentionSettingsCommandInput}
 * @returns {@link GetAppInstanceRetentionSettingsCommandOutput}
 * @see {@link GetAppInstanceRetentionSettingsCommandInput} for command's `input` shape.
 * @see {@link GetAppInstanceRetentionSettingsCommandOutput} for command's `response` shape.
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
export class GetAppInstanceRetentionSettingsCommand extends command<GetAppInstanceRetentionSettingsCommandInput, GetAppInstanceRetentionSettingsCommandOutput>(
  _ep0,
  _mw0,
  "GetAppInstanceRetentionSettings",
  GetAppInstanceRetentionSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAppInstanceRetentionSettingsRequest;
      output: GetAppInstanceRetentionSettingsResponse;
    };
    sdk: {
      input: GetAppInstanceRetentionSettingsCommandInput;
      output: GetAppInstanceRetentionSettingsCommandOutput;
    };
  };
}

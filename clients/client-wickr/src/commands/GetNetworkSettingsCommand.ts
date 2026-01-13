// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetNetworkSettingsRequest, GetNetworkSettingsResponse } from "../models/models_0";
import { GetNetworkSettings$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkSettingsCommand}.
 */
export interface GetNetworkSettingsCommandInput extends GetNetworkSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkSettingsCommand}.
 */
export interface GetNetworkSettingsCommandOutput extends GetNetworkSettingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves all network-level settings for a Wickr network, including client metrics, data retention, and other configuration options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, GetNetworkSettingsCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, GetNetworkSettingsCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // GetNetworkSettingsRequest
 *   networkId: "STRING_VALUE", // required
 * };
 * const command = new GetNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkSettingsResponse
 * //   settings: [ // SettingsList // required
 * //     { // Setting
 * //       optionName: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetNetworkSettingsCommandInput - {@link GetNetworkSettingsCommandInput}
 * @returns {@link GetNetworkSettingsCommandOutput}
 * @see {@link GetNetworkSettingsCommandInput} for command's `input` shape.
 * @see {@link GetNetworkSettingsCommandOutput} for command's `response` shape.
 * @see {@link WickrClientResolvedConfig | config} for WickrClient's `config` shape.
 *
 * @throws {@link BadRequestError} (client fault)
 *  <p>The request was invalid or malformed. This error occurs when the request parameters do not meet the API requirements, such as invalid field values, missing required parameters, or improperly formatted data.</p>
 *
 * @throws {@link ForbiddenError} (client fault)
 *  <p>Access to the requested resource is forbidden. This error occurs when the authenticated user does not have the necessary permissions to perform the requested operation, even though they are authenticated.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An unexpected error occurred on the server while processing the request. This indicates a problem with the Wickr service itself rather than with the request. If this error persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link RateLimitError} (client fault)
 *  <p>The request was throttled because too many requests were sent in a short period of time. Wait a moment and retry the request. Consider implementing exponential backoff in your application.</p>
 *
 * @throws {@link ResourceNotFoundError} (client fault)
 *  <p>The requested resource could not be found. This error occurs when you try to access or modify a network, user, bot, security group, or other resource that doesn't exist or has been deleted.</p>
 *
 * @throws {@link UnauthorizedError} (client fault)
 *  <p>The request was not authenticated or the authentication credentials were invalid. This error occurs when the request lacks valid authentication credentials or the credentials have expired.</p>
 *
 * @throws {@link ValidationError} (client fault)
 *  <p>One or more fields in the request failed validation. This error provides detailed information about which fields were invalid and why, allowing you to correct the request and retry.</p>
 *
 * @throws {@link WickrServiceException}
 * <p>Base exception class for all service exceptions from Wickr service.</p>
 *
 *
 * @example Get network settings with mixed value types
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678"
 * };
 * const command = new GetNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   settings: [
 *     {
 *       optionName: "enableClientMetrics",
 *       type: "boolean",
 *       value: "true"
 *     },
 *     {
 *       optionName: "dataRetention",
 *       type: "boolean",
 *       value: "true"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Get settings for network with defaults only
 * ```javascript
 * //
 * const input = {
 *   networkId: "87654321"
 * };
 * const command = new GetNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   settings: [
 *     {
 *       optionName: "enableClientMetrics",
 *       type: "boolean",
 *       value: "false"
 *     },
 *     {
 *       optionName: "dataRetention",
 *       type: "boolean",
 *       value: "false"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Network not found error
 * ```javascript
 * //
 * const input = {
 *   networkId: "99999999"
 * };
 * const command = new GetNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class GetNetworkSettingsCommand extends $Command
  .classBuilder<
    GetNetworkSettingsCommandInput,
    GetNetworkSettingsCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "GetNetworkSettings", {})
  .n("WickrClient", "GetNetworkSettingsCommand")
  .sc(GetNetworkSettings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNetworkSettingsRequest;
      output: GetNetworkSettingsResponse;
    };
    sdk: {
      input: GetNetworkSettingsCommandInput;
      output: GetNetworkSettingsCommandOutput;
    };
  };
}

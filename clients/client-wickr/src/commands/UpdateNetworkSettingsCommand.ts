// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateNetworkSettingsRequest, UpdateNetworkSettingsResponse } from "../models/models_0";
import { UpdateNetworkSettings$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNetworkSettingsCommand}.
 */
export interface UpdateNetworkSettingsCommandInput extends UpdateNetworkSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNetworkSettingsCommand}.
 */
export interface UpdateNetworkSettingsCommandOutput extends UpdateNetworkSettingsResponse, __MetadataBearer {}

/**
 * <p>Updates network-level settings for a Wickr network. You can modify settings such as client metrics, data retention, and other network-wide options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, UpdateNetworkSettingsCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, UpdateNetworkSettingsCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // UpdateNetworkSettingsRequest
 *   networkId: "STRING_VALUE", // required
 *   settings: { // NetworkSettings
 *     enableClientMetrics: true || false,
 *     readReceiptConfig: { // ReadReceiptConfig
 *       status: "DISABLED" || "ENABLED" || "FORCE_ENABLED",
 *     },
 *     dataRetention: true || false,
 *   },
 * };
 * const command = new UpdateNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNetworkSettingsResponse
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
 * @param UpdateNetworkSettingsCommandInput - {@link UpdateNetworkSettingsCommandInput}
 * @returns {@link UpdateNetworkSettingsCommandOutput}
 * @see {@link UpdateNetworkSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateNetworkSettingsCommandOutput} for command's `response` shape.
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
 * @example Update multiple network settings
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   settings: {
 *     dataRetention: true,
 *     enableClientMetrics: true
 *   }
 * };
 * const command = new UpdateNetworkSettingsCommand(input);
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
 * @example Update single boolean setting
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   settings: {
 *     enableClientMetrics: false
 *   }
 * };
 * const command = new UpdateNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   settings: [
 *     {
 *       optionName: "enableClientMetrics",
 *       type: "boolean",
 *       value: "false"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Update client metrics settings
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   settings: {
 *     enableClientMetrics: true
 *   }
 * };
 * const command = new UpdateNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   settings: [
 *     {
 *       optionName: "enableClientMetrics",
 *       type: "boolean",
 *       value: "true"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Invalid setting name error
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   settings: {
 *     enableClientMetrics: false
 *   }
 * };
 * const command = new UpdateNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Network not found error
 * ```javascript
 * //
 * const input = {
 *   networkId: "99999999",
 *   settings: {
 *     enableClientMetrics: true
 *   }
 * };
 * const command = new UpdateNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Invalid value type error
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   settings: {
 *     dataRetention: true
 *   }
 * };
 * const command = new UpdateNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateNetworkSettingsCommand extends $Command
  .classBuilder<
    UpdateNetworkSettingsCommandInput,
    UpdateNetworkSettingsCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "UpdateNetworkSettings", {})
  .n("WickrClient", "UpdateNetworkSettingsCommand")
  .sc(UpdateNetworkSettings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNetworkSettingsRequest;
      output: UpdateNetworkSettingsResponse;
    };
    sdk: {
      input: UpdateNetworkSettingsCommandInput;
      output: UpdateNetworkSettingsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RegisterOpentdfConfigRequest, RegisterOpentdfConfigResponse } from "../models/models_0";
import { RegisterOpentdfConfig$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterOpentdfConfigCommand}.
 */
export interface RegisterOpentdfConfigCommandInput extends RegisterOpentdfConfigRequest {}
/**
 * @public
 *
 * The output of {@link RegisterOpentdfConfigCommand}.
 */
export interface RegisterOpentdfConfigCommandOutput extends RegisterOpentdfConfigResponse, __MetadataBearer {}

/**
 * <p>Registers and saves OpenTDF configuration for a Wickr network, enabling attribute-based access control for Wickr through an OpenTDF provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, RegisterOpentdfConfigCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, RegisterOpentdfConfigCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // RegisterOpentdfConfigRequest
 *   networkId: "STRING_VALUE", // required
 *   clientId: "STRING_VALUE", // required
 *   clientSecret: "STRING_VALUE", // required
 *   domain: "STRING_VALUE", // required
 *   provider: "STRING_VALUE", // required
 *   dryRun: true || false,
 * };
 * const command = new RegisterOpentdfConfigCommand(input);
 * const response = await client.send(command);
 * // { // RegisterOpentdfConfigResponse
 * //   clientId: "STRING_VALUE", // required
 * //   domain: "STRING_VALUE", // required
 * //   clientSecret: "STRING_VALUE", // required
 * //   provider: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RegisterOpentdfConfigCommandInput - {@link RegisterOpentdfConfigCommandInput}
 * @returns {@link RegisterOpentdfConfigCommandOutput}
 * @see {@link RegisterOpentdfConfigCommandInput} for command's `input` shape.
 * @see {@link RegisterOpentdfConfigCommandOutput} for command's `response` shape.
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
 * @example Save OpenTDF config successfully
 * ```javascript
 * //
 * const input = {
 *   clientId: "client123",
 *   clientSecret: "secret456",
 *   domain: "https://api.sample.com",
 *   networkId: "12345678",
 *   provider: "virtru"
 * };
 * const command = new RegisterOpentdfConfigCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientId: "client123",
 *   clientSecret: "secret456",
 *   domain: "https://api.sample.com",
 *   provider: "virtru"
 * }
 * *\/
 * ```
 *
 * @example Dry run saving OpenTDF config
 * ```javascript
 * //
 * const input = {
 *   clientId: "client123",
 *   clientSecret: "secret456",
 *   domain: "https://api.sample.com",
 *   dryRun: true,
 *   networkId: "12345678",
 *   provider: "virtru"
 * };
 * const command = new RegisterOpentdfConfigCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientId: "client123",
 *   clientSecret: "secret456",
 *   domain: "https://api.sample.com",
 *   provider: "virtru"
 * }
 * *\/
 * ```
 *
 * @example Dry run saving OpenTDF config - failed test
 * ```javascript
 * //
 * const input = {
 *   clientId: "client123",
 *   clientSecret: "secret456",
 *   domain: "https://api.sample.com",
 *   dryRun: true,
 *   networkId: "12345678",
 *   provider: "virtru"
 * };
 * const command = new RegisterOpentdfConfigCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Save OpenTDF config - invalid provider
 * ```javascript
 * //
 * const input = {
 *   clientId: "client123",
 *   clientSecret: "secret456",
 *   domain: "https://api.sample.com",
 *   networkId: "12345678",
 *   provider: "invalid provider"
 * };
 * const command = new RegisterOpentdfConfigCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Save OpenTDF config - network not found
 * ```javascript
 * //
 * const input = {
 *   clientId: "client123",
 *   clientSecret: "secret456",
 *   domain: "https://api.sample.com",
 *   networkId: "99999999",
 *   provider: "virtru"
 * };
 * const command = new RegisterOpentdfConfigCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RegisterOpentdfConfigCommand extends $Command
  .classBuilder<
    RegisterOpentdfConfigCommandInput,
    RegisterOpentdfConfigCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "RegisterOpentdfConfig", {})
  .n("WickrClient", "RegisterOpentdfConfigCommand")
  .sc(RegisterOpentdfConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterOpentdfConfigRequest;
      output: RegisterOpentdfConfigResponse;
    };
    sdk: {
      input: RegisterOpentdfConfigCommandInput;
      output: RegisterOpentdfConfigCommandOutput;
    };
  };
}

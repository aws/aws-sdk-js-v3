// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetOpentdfConfigRequest, GetOpentdfConfigResponse } from "../models/models_0";
import { GetOpentdfConfig$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOpentdfConfigCommand}.
 */
export interface GetOpentdfConfigCommandInput extends GetOpentdfConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetOpentdfConfigCommand}.
 */
export interface GetOpentdfConfigCommandOutput extends GetOpentdfConfigResponse, __MetadataBearer {}

/**
 * <p>Retrieves the OpenTDF integration configuration for a Wickr network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, GetOpentdfConfigCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, GetOpentdfConfigCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // GetOpentdfConfigRequest
 *   networkId: "STRING_VALUE", // required
 * };
 * const command = new GetOpentdfConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetOpentdfConfigResponse
 * //   clientId: "STRING_VALUE", // required
 * //   domain: "STRING_VALUE", // required
 * //   clientSecret: "STRING_VALUE", // required
 * //   provider: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetOpentdfConfigCommandInput - {@link GetOpentdfConfigCommandInput}
 * @returns {@link GetOpentdfConfigCommandOutput}
 * @see {@link GetOpentdfConfigCommandInput} for command's `input` shape.
 * @see {@link GetOpentdfConfigCommandOutput} for command's `response` shape.
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
 * @example Get OpenTDF info successfully
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678"
 * };
 * const command = new GetOpentdfConfigCommand(input);
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
 * @example Get OpenTDF info - not configured
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678"
 * };
 * const command = new GetOpentdfConfigCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientId: "",
 *   clientSecret: "",
 *   domain: "",
 *   provider: ""
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetOpentdfConfigCommand extends $Command
  .classBuilder<
    GetOpentdfConfigCommandInput,
    GetOpentdfConfigCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "GetOpentdfConfig", {})
  .n("WickrClient", "GetOpentdfConfigCommand")
  .sc(GetOpentdfConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOpentdfConfigRequest;
      output: GetOpentdfConfigResponse;
    };
    sdk: {
      input: GetOpentdfConfigCommandInput;
      output: GetOpentdfConfigCommandOutput;
    };
  };
}

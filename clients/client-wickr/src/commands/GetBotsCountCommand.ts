// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetBotsCountRequest, GetBotsCountResponse } from "../models/models_0";
import { GetBotsCount$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBotsCountCommand}.
 */
export interface GetBotsCountCommandInput extends GetBotsCountRequest {}
/**
 * @public
 *
 * The output of {@link GetBotsCountCommand}.
 */
export interface GetBotsCountCommandOutput extends GetBotsCountResponse, __MetadataBearer {}

/**
 * <p>Retrieves the count of bots in a Wickr network, categorized by their status (pending, active, and total).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, GetBotsCountCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, GetBotsCountCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // GetBotsCountRequest
 *   networkId: "STRING_VALUE", // required
 * };
 * const command = new GetBotsCountCommand(input);
 * const response = await client.send(command);
 * // { // GetBotsCountResponse
 * //   pending: Number("int"), // required
 * //   active: Number("int"), // required
 * //   total: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param GetBotsCountCommandInput - {@link GetBotsCountCommandInput}
 * @returns {@link GetBotsCountCommandOutput}
 * @see {@link GetBotsCountCommandInput} for command's `input` shape.
 * @see {@link GetBotsCountCommandOutput} for command's `response` shape.
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
 * @example Get bots count successfully
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678"
 * };
 * const command = new GetBotsCountCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   active: 12,
 *   pending: 2,
 *   total: 15
 * }
 * *\/
 * ```
 *
 * @example Get bots count with filters
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678"
 * };
 * const command = new GetBotsCountCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   active: 12,
 *   pending: 0,
 *   total: 12
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBotsCountCommand extends $Command
  .classBuilder<
    GetBotsCountCommandInput,
    GetBotsCountCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "GetBotsCount", {})
  .n("WickrClient", "GetBotsCountCommand")
  .sc(GetBotsCount$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBotsCountRequest;
      output: GetBotsCountResponse;
    };
    sdk: {
      input: GetBotsCountCommandInput;
      output: GetBotsCountCommandOutput;
    };
  };
}

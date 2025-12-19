// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteNetworkRequest, DeleteNetworkResponse } from "../models/models_0";
import { DeleteNetwork$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkCommand}.
 */
export interface DeleteNetworkCommandInput extends DeleteNetworkRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkCommand}.
 */
export interface DeleteNetworkCommandOutput extends DeleteNetworkResponse, __MetadataBearer {}

/**
 * <p>Deletes a Wickr network and all its associated resources, including users, bots, security groups, and settings. This operation is permanent and cannot be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, DeleteNetworkCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, DeleteNetworkCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // DeleteNetworkRequest
 *   networkId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteNetworkCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkResponse
 * //   message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteNetworkCommandInput - {@link DeleteNetworkCommandInput}
 * @returns {@link DeleteNetworkCommandOutput}
 * @see {@link DeleteNetworkCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkCommandOutput} for command's `response` shape.
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
 * @example Delete network successfully
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678"
 * };
 * const command = new DeleteNetworkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   message: "Network deletion initiated successfully"
 * }
 * *\/
 * ```
 *
 * @example Delete network - not found
 * ```javascript
 * //
 * const input = {
 *   networkId: "99999999"
 * };
 * const command = new DeleteNetworkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteNetworkCommand extends $Command
  .classBuilder<
    DeleteNetworkCommandInput,
    DeleteNetworkCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "DeleteNetwork", {})
  .n("WickrClient", "DeleteNetworkCommand")
  .sc(DeleteNetwork$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkRequest;
      output: DeleteNetworkResponse;
    };
    sdk: {
      input: DeleteNetworkCommandInput;
      output: DeleteNetworkCommandOutput;
    };
  };
}

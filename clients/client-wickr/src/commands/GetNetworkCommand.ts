// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetNetworkRequest, GetNetworkResponse } from "../models/models_0";
import { GetNetwork$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkCommand}.
 */
export interface GetNetworkCommandInput extends GetNetworkRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkCommand}.
 */
export interface GetNetworkCommandOutput extends GetNetworkResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific Wickr network, including its configuration, access level, and status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, GetNetworkCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, GetNetworkCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // GetNetworkRequest
 *   networkId: "STRING_VALUE", // required
 * };
 * const command = new GetNetworkCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkResponse
 * //   networkId: "STRING_VALUE", // required
 * //   networkName: "STRING_VALUE", // required
 * //   accessLevel: "STANDARD" || "PREMIUM", // required
 * //   awsAccountId: "STRING_VALUE", // required
 * //   networkArn: "STRING_VALUE", // required
 * //   standing: Number("int"),
 * //   freeTrialExpiration: "STRING_VALUE",
 * //   migrationState: Number("int"),
 * //   encryptionKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetNetworkCommandInput - {@link GetNetworkCommandInput}
 * @returns {@link GetNetworkCommandOutput}
 * @see {@link GetNetworkCommandInput} for command's `input` shape.
 * @see {@link GetNetworkCommandOutput} for command's `response` shape.
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
 * @example Get network successfully
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678"
 * };
 * const command = new GetNetworkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   accessLevel: "PREMIUM",
 *   awsAccountId: "123456789012",
 *   migrationState: 0,
 *   networkArn: "arn:aws:wickr:us-east-1:123456789012:network/12345678",
 *   networkId: "12345678",
 *   networkName: "Production Network",
 *   standing: 1
 * }
 * *\/
 * ```
 *
 * @example Get network - not found
 * ```javascript
 * //
 * const input = {
 *   networkId: "99999999"
 * };
 * const command = new GetNetworkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class GetNetworkCommand extends $Command
  .classBuilder<
    GetNetworkCommandInput,
    GetNetworkCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "GetNetwork", {})
  .n("WickrClient", "GetNetworkCommand")
  .sc(GetNetwork$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNetworkRequest;
      output: GetNetworkResponse;
    };
    sdk: {
      input: GetNetworkCommandInput;
      output: GetNetworkCommandOutput;
    };
  };
}

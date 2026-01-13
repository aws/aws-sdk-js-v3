// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListNetworksRequest, ListNetworksResponse } from "../models/models_0";
import { ListNetworks$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNetworksCommand}.
 */
export interface ListNetworksCommandInput extends ListNetworksRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworksCommand}.
 */
export interface ListNetworksCommandOutput extends ListNetworksResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of all Wickr networks associated with your Amazon Web Services account. You can sort the results by network ID or name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, ListNetworksCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, ListNetworksCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // ListNetworksRequest
 *   maxResults: Number("int"),
 *   sortFields: "STRING_VALUE",
 *   sortDirection: "ASC" || "DESC",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNetworksCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworksResponse
 * //   networks: [ // NetworkList // required
 * //     { // Network
 * //       networkId: "STRING_VALUE", // required
 * //       networkName: "STRING_VALUE", // required
 * //       accessLevel: "STANDARD" || "PREMIUM", // required
 * //       awsAccountId: "STRING_VALUE", // required
 * //       networkArn: "STRING_VALUE", // required
 * //       standing: Number("int"),
 * //       freeTrialExpiration: "STRING_VALUE",
 * //       migrationState: Number("int"),
 * //       encryptionKeyArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworksCommandInput - {@link ListNetworksCommandInput}
 * @returns {@link ListNetworksCommandOutput}
 * @see {@link ListNetworksCommandInput} for command's `input` shape.
 * @see {@link ListNetworksCommandOutput} for command's `response` shape.
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
 * @example List networks with pagination
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10,
 *   sortDirection: "ASC",
 *   sortFields: "networkName"
 * };
 * const command = new ListNetworksCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   networks: [
 *     {
 *       accessLevel: "STANDARD",
 *       awsAccountId: "123456789012",
 *       networkArn: "arn:aws:wickr:us-east-1:123456789012:network/12345678",
 *       networkId: "12345678",
 *       networkName: "Dev Network",
 *       standing: 1
 *     },
 *     {
 *       accessLevel: "PREMIUM",
 *       awsAccountId: "123456789012",
 *       networkArn: "arn:aws:wickr:us-east-1:123456789012:network/87654321",
 *       networkId: "87654321",
 *       networkName: "Prod Network",
 *       standing: 1
 *     }
 *   ],
 *   nextToken: "eyJvZmZzZXQiOjEwfQ=="
 * }
 * *\/
 * ```
 *
 * @example List networks - first page
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10
 * };
 * const command = new ListNetworksCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   networks: [
 *     {
 *       accessLevel: "PREMIUM",
 *       awsAccountId: "123456789012",
 *       networkArn: "arn:aws:wickr:us-east-1:123456789012:network/12345678",
 *       networkId: "12345678",
 *       networkName: "Production Network",
 *       standing: 1
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListNetworksCommand extends $Command
  .classBuilder<
    ListNetworksCommandInput,
    ListNetworksCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "ListNetworks", {})
  .n("WickrClient", "ListNetworksCommand")
  .sc(ListNetworks$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworksRequest;
      output: ListNetworksResponse;
    };
    sdk: {
      input: ListNetworksCommandInput;
      output: ListNetworksCommandOutput;
    };
  };
}

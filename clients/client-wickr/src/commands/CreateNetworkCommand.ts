// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateNetworkRequest, CreateNetworkResponse } from "../models/models_0";
import { CreateNetwork$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkCommand}.
 */
export interface CreateNetworkCommandInput extends CreateNetworkRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkCommand}.
 */
export interface CreateNetworkCommandOutput extends CreateNetworkResponse, __MetadataBearer {}

/**
 * <p>Creates a new Wickr network with specified access level and configuration. This operation provisions a new communication network for your organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, CreateNetworkCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, CreateNetworkCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // CreateNetworkRequest
 *   networkName: "STRING_VALUE", // required
 *   accessLevel: "STANDARD" || "PREMIUM", // required
 *   enablePremiumFreeTrial: true || false,
 *   encryptionKeyArn: "STRING_VALUE",
 * };
 * const command = new CreateNetworkCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkResponse
 * //   networkId: "STRING_VALUE",
 * //   networkName: "STRING_VALUE",
 * //   encryptionKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateNetworkCommandInput - {@link CreateNetworkCommandInput}
 * @returns {@link CreateNetworkCommandOutput}
 * @see {@link CreateNetworkCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkCommandOutput} for command's `response` shape.
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
 * @example Create network successfully
 * ```javascript
 * //
 * const input = {
 *   accessLevel: "PREMIUM",
 *   enablePremiumFreeTrial: false,
 *   networkName: "Production Network"
 * };
 * const command = new CreateNetworkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   networkId: "12345678",
 *   networkName: "Production Network"
 * }
 * *\/
 * ```
 *
 * @example Create network with free trial
 * ```javascript
 * //
 * const input = {
 *   accessLevel: "PREMIUM",
 *   enablePremiumFreeTrial: true,
 *   networkName: "Trial Network"
 * };
 * const command = new CreateNetworkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   networkId: "87654321",
 *   networkName: "Trial Network"
 * }
 * *\/
 * ```
 *
 * @example Create network - invalid name
 * ```javascript
 * //
 * const input = {
 *   accessLevel: "STANDARD",
 *   networkName: "This network name is way too long"
 * };
 * const command = new CreateNetworkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateNetworkCommand extends $Command
  .classBuilder<
    CreateNetworkCommandInput,
    CreateNetworkCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "CreateNetwork", {})
  .n("WickrClient", "CreateNetworkCommand")
  .sc(CreateNetwork$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNetworkRequest;
      output: CreateNetworkResponse;
    };
    sdk: {
      input: CreateNetworkCommandInput;
      output: CreateNetworkCommandOutput;
    };
  };
}

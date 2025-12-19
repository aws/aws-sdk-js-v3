// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSecurityGroupUsersRequest, ListSecurityGroupUsersResponse } from "../models/models_0";
import { ListSecurityGroupUsers$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSecurityGroupUsersCommand}.
 */
export interface ListSecurityGroupUsersCommandInput extends ListSecurityGroupUsersRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityGroupUsersCommand}.
 */
export interface ListSecurityGroupUsersCommandOutput extends ListSecurityGroupUsersResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of users who belong to a specific security group in a Wickr network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, ListSecurityGroupUsersCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, ListSecurityGroupUsersCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // ListSecurityGroupUsersRequest
 *   networkId: "STRING_VALUE", // required
 *   groupId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   sortFields: "STRING_VALUE",
 *   sortDirection: "ASC" || "DESC",
 * };
 * const command = new ListSecurityGroupUsersCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityGroupUsersResponse
 * //   users: [ // Users // required
 * //     { // User
 * //       userId: "STRING_VALUE",
 * //       firstName: "STRING_VALUE",
 * //       lastName: "STRING_VALUE",
 * //       username: "STRING_VALUE",
 * //       securityGroups: [ // SecurityGroupIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       isAdmin: true || false,
 * //       suspended: true || false,
 * //       status: Number("int"),
 * //       otpEnabled: true || false,
 * //       scimId: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       cell: "STRING_VALUE",
 * //       countryCode: "STRING_VALUE",
 * //       challengeFailures: Number("int"),
 * //       isInviteExpired: true || false,
 * //       isUser: true || false,
 * //       inviteCode: "STRING_VALUE",
 * //       codeValidation: true || false,
 * //       uname: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityGroupUsersCommandInput - {@link ListSecurityGroupUsersCommandInput}
 * @returns {@link ListSecurityGroupUsersCommandOutput}
 * @see {@link ListSecurityGroupUsersCommandInput} for command's `input` shape.
 * @see {@link ListSecurityGroupUsersCommandOutput} for command's `response` shape.
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
 * @example List security group users with pagination
 * ```javascript
 * //
 * const input = {
 *   groupId: "abc12345",
 *   maxResults: 10,
 *   networkId: "12345678",
 *   sortDirection: "ASC",
 *   sortFields: "username"
 * };
 * const command = new ListSecurityGroupUsersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "eyJvZmZzZXQiOjEwfQ==",
 *   users: [
 *     {
 *       firstName: "Alice",
 *       lastName: "Smith",
 *       username: "alice@example.com"
 *     },
 *     {
 *       firstName: "Bob",
 *       lastName: "Jones",
 *       username: "bob@example.com"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSecurityGroupUsersCommand extends $Command
  .classBuilder<
    ListSecurityGroupUsersCommandInput,
    ListSecurityGroupUsersCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "ListSecurityGroupUsers", {})
  .n("WickrClient", "ListSecurityGroupUsersCommand")
  .sc(ListSecurityGroupUsers$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityGroupUsersRequest;
      output: ListSecurityGroupUsersResponse;
    };
    sdk: {
      input: ListSecurityGroupUsersCommandInput;
      output: ListSecurityGroupUsersCommandOutput;
    };
  };
}

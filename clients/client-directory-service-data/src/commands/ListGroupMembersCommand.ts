// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGroupMembersRequest, ListGroupMembersResult } from "../models/models_0";
import { ListGroupMembers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListGroupMembersCommand}.
 */
export interface ListGroupMembersCommandInput extends ListGroupMembersRequest {}
/**
 * @public
 *
 * The output of {@link ListGroupMembersCommand}.
 */
export interface ListGroupMembersCommandOutput extends ListGroupMembersResult, __MetadataBearer {}

/**
 * Returns member information for the specified group.
 *
 * This operation supports pagination with the use of the `NextToken` request and response parameters. If more results are available, the `ListGroupMembers.NextToken` member contains a token that you pass in the next call to `ListGroupMembers`. This retrieves the next set of items.
 *
 * You can also specify a maximum number of return results with the `MaxResults` parameter.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceDataClient, ListGroupMembersCommand } from "@aws-sdk/client-directory-service-data"; // ES Modules import
 * // const { DirectoryServiceDataClient, ListGroupMembersCommand } = require("@aws-sdk/client-directory-service-data"); // CommonJS import
 * // import type { DirectoryServiceDataClientConfig } from "@aws-sdk/client-directory-service-data";
 * const config = {}; // type is DirectoryServiceDataClientConfig
 * const client = new DirectoryServiceDataClient(config);
 * const input = { // ListGroupMembersRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Realm: "STRING_VALUE",
 *   MemberRealm: "STRING_VALUE",
 *   SAMAccountName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListGroupMembersCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupMembersResult
 * //   DirectoryId: "STRING_VALUE",
 * //   Realm: "STRING_VALUE",
 * //   MemberRealm: "STRING_VALUE",
 * //   Members: [ // MemberList
 * //     { // Member
 * //       SID: "STRING_VALUE", // required
 * //       SAMAccountName: "STRING_VALUE", // required
 * //       MemberType: "USER" || "GROUP" || "COMPUTER", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGroupMembersCommandInput - {@link ListGroupMembersCommandInput}
 * @returns {@link ListGroupMembersCommandOutput}
 * @see {@link ListGroupMembersCommandInput} for command's `input` shape.
 * @see {@link ListGroupMembersCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceDataClientResolvedConfig | config} for DirectoryServiceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform the request or access the directory. It can also occur when the `DirectoryId` doesn't exist or the user, member, or group might be outside of your organizational unit (OU).
 *
 * Make sure that you have the authentication and authorization to perform the action. Review the directory information in the request, and make sure that the object isn't outside of your OU.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The request could not be completed due to a problem in the configuration or current state of the specified directory.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The operation didn't succeed because an internal error occurred. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second has been exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. Review the details in the error message to update the invalid parameters or values in your request.
 *
 * @throws {@link DirectoryServiceDataServiceException}
 *
 * Base exception class for all service exceptions from DirectoryServiceData service.
 *
 * @example To list members of a group
 * ```javascript
 * // The following command lists Marketing users in the trusted domain example.local.
 * const input = {
 *   DirectoryId: "d-12233abcde",
 *   MemberRealm: "example.local",
 *   Realm: "examplecorp.com",
 *   SAMAccountName: "marketing"
 * };
 * const command = new ListGroupMembersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DirectoryId: "d-12233abcde",
 *   Members: [
 *     {
 *       MemberType: "USER",
 *       SAMAccountName: "twhitlock",
 *       SID: "S-1-5-11-111"
 *     },
 *     {
 *       MemberType: "USER",
 *       SAMAccountName: "pcandella",
 *       SID: "S-1-5-11-112"
 *     },
 *     {
 *       MemberType: "USER",
 *       SAMAccountName: "jstiles",
 *       SID: "S-1-5-11-113"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListGroupMembersCommand extends command<ListGroupMembersCommandInput, ListGroupMembersCommandOutput>(
  _ep0,
  _mw0,
  "ListGroupMembers",
  ListGroupMembers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGroupMembersRequest;
      output: ListGroupMembersResult;
    };
    sdk: {
      input: ListGroupMembersCommandInput;
      output: ListGroupMembersCommandOutput;
    };
  };
}

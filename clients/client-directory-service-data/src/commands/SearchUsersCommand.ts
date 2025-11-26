// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DirectoryServiceDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceDataClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchUsersRequest, SearchUsersResult } from "../models/models_0";
import { SearchUsers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchUsersCommand}.
 */
export interface SearchUsersCommandInput extends SearchUsersRequest {}
/**
 * @public
 *
 * The output of {@link SearchUsersCommand}.
 */
export interface SearchUsersCommandOutput extends SearchUsersResult, __MetadataBearer {}

/**
 * <p> Searches the specified directory for a user. You can find users that match the
 *         <code>SearchString</code> parameter with the value of their attributes included in the
 *         <code>SearchString</code> parameter.</p>
 *          <p> This operation supports pagination with the use of the <code>NextToken</code> request and
 *       response parameters. If more results are available, the <code>SearchUsers.NextToken</code>
 *       member contains a token that you pass in the next call to <code>SearchUsers</code>. This
 *       retrieves the next set of items. </p>
 *          <p> You can also specify a maximum number of return results with the <code>MaxResults</code>
 *       parameter. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceDataClient, SearchUsersCommand } from "@aws-sdk/client-directory-service-data"; // ES Modules import
 * // const { DirectoryServiceDataClient, SearchUsersCommand } = require("@aws-sdk/client-directory-service-data"); // CommonJS import
 * // import type { DirectoryServiceDataClientConfig } from "@aws-sdk/client-directory-service-data";
 * const config = {}; // type is DirectoryServiceDataClientConfig
 * const client = new DirectoryServiceDataClient(config);
 * const input = { // SearchUsersRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Realm: "STRING_VALUE",
 *   SearchString: "STRING_VALUE", // required
 *   SearchAttributes: [ // LdapDisplayNameList // required
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new SearchUsersCommand(input);
 * const response = await client.send(command);
 * // { // SearchUsersResult
 * //   DirectoryId: "STRING_VALUE",
 * //   Realm: "STRING_VALUE",
 * //   Users: [ // UserList
 * //     { // User
 * //       SID: "STRING_VALUE",
 * //       SAMAccountName: "STRING_VALUE", // required
 * //       DistinguishedName: "STRING_VALUE",
 * //       UserPrincipalName: "STRING_VALUE",
 * //       EmailAddress: "STRING_VALUE",
 * //       GivenName: "STRING_VALUE",
 * //       Surname: "STRING_VALUE",
 * //       Enabled: true || false,
 * //       OtherAttributes: { // Attributes
 * //         "<keys>": { // AttributeValue Union: only one key present
 * //           S: "STRING_VALUE",
 * //           N: Number("long"),
 * //           BOOL: true || false,
 * //           SS: [ // StringSetAttributeValue
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchUsersCommandInput - {@link SearchUsersCommandInput}
 * @returns {@link SearchUsersCommandOutput}
 * @see {@link SearchUsersCommandInput} for command's `input` shape.
 * @see {@link SearchUsersCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceDataClientResolvedConfig | config} for DirectoryServiceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permission to perform the request or access the directory. It can also
 *       occur when the <code>DirectoryId</code> doesn't exist or the user, member, or group might be
 *       outside of your organizational unit (OU). </p>
 *          <p> Make sure that you have the authentication and authorization to perform the action.
 *       Review the directory information in the request, and make sure that the object isn't outside
 *       of your OU. </p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p> The request could not be completed due to a problem in the configuration or current state
 *       of the specified directory. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The operation didn't succeed because an internal error occurred. Try again later. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The limit on the number of requests per second has been exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request isn't valid. Review the details in the error message to update the invalid
 *       parameters or values in your request. </p>
 *
 * @throws {@link DirectoryServiceDataServiceException}
 * <p>Base exception class for all service exceptions from DirectoryServiceData service.</p>
 *
 *
 * @example To search for users
 * ```javascript
 * // The following command searches for users in the domain based on the SearchAttributes.
 * const input = {
 *   DirectoryId: "d-12233abcde",
 *   Realm: "examplecorp.com",
 *   SearchAttributes: [
 *     "department"
 *   ],
 *   SearchString: "DevOps"
 * };
 * const command = new SearchUsersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DirectoryId: "d-12233abcde",
 *   NextToken: "223456",
 *   Users: [
 *     {
 *       EmailAddress: "twhitlock@examplecorp.com",
 *       SAMAccountName: "twhitlock",
 *       SID: "S-1-5-11-111"
 *     },
 *     {
 *       EmailAddress: "pcandella@examplecorp.com",
 *       SAMAccountName: "pcandella",
 *       SID: "S-1-5-11-112"
 *     },
 *     {
 *       EmailAddress: "jstiles@examplecorp.com",
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
export class SearchUsersCommand extends $Command
  .classBuilder<
    SearchUsersCommandInput,
    SearchUsersCommandOutput,
    DirectoryServiceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryServiceData", "SearchUsers", {})
  .n("DirectoryServiceDataClient", "SearchUsersCommand")
  .sc(SearchUsers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchUsersRequest;
      output: SearchUsersResult;
    };
    sdk: {
      input: SearchUsersCommandInput;
      output: SearchUsersCommandOutput;
    };
  };
}

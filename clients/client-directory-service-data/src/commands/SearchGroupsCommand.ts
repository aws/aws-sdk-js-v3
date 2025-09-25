// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DirectoryServiceDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceDataClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchGroupsRequest, SearchGroupsResult } from "../models/models_0";
import { SearchGroups } from "../schemas/schemas_3_Group";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchGroupsCommand}.
 */
export interface SearchGroupsCommandInput extends SearchGroupsRequest {}
/**
 * @public
 *
 * The output of {@link SearchGroupsCommand}.
 */
export interface SearchGroupsCommandOutput extends SearchGroupsResult, __MetadataBearer {}

/**
 * <p> Searches the specified directory for a group. You can find groups that match the
 *         <code>SearchString</code> parameter with the value of their attributes included in the
 *         <code>SearchString</code> parameter. </p>
 *          <p> This operation supports pagination with the use of the <code>NextToken</code> request and
 *       response parameters. If more results are available, the <code>SearchGroups.NextToken</code>
 *       member contains a token that you pass in the next call to <code>SearchGroups</code>. This
 *       retrieves the next set of items. </p>
 *          <p> You can also specify a maximum number of return results with the <code>MaxResults</code>
 *       parameter. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceDataClient, SearchGroupsCommand } from "@aws-sdk/client-directory-service-data"; // ES Modules import
 * // const { DirectoryServiceDataClient, SearchGroupsCommand } = require("@aws-sdk/client-directory-service-data"); // CommonJS import
 * // import type { DirectoryServiceDataClientConfig } from "@aws-sdk/client-directory-service-data";
 * const config = {}; // type is DirectoryServiceDataClientConfig
 * const client = new DirectoryServiceDataClient(config);
 * const input = { // SearchGroupsRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   SearchString: "STRING_VALUE", // required
 *   SearchAttributes: [ // LdapDisplayNameList // required
 *     "STRING_VALUE",
 *   ],
 *   Realm: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new SearchGroupsCommand(input);
 * const response = await client.send(command);
 * // { // SearchGroupsResult
 * //   DirectoryId: "STRING_VALUE",
 * //   Realm: "STRING_VALUE",
 * //   Groups: [ // GroupList
 * //     { // Group
 * //       SID: "STRING_VALUE",
 * //       SAMAccountName: "STRING_VALUE", // required
 * //       DistinguishedName: "STRING_VALUE",
 * //       GroupType: "Distribution" || "Security",
 * //       GroupScope: "DomainLocal" || "Global" || "Universal" || "BuiltinLocal",
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
 * @param SearchGroupsCommandInput - {@link SearchGroupsCommandInput}
 * @returns {@link SearchGroupsCommandOutput}
 * @see {@link SearchGroupsCommandInput} for command's `input` shape.
 * @see {@link SearchGroupsCommandOutput} for command's `response` shape.
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
 * @example To search for groups
 * ```javascript
 * // The following command searches the examplecorp.com domain for groups with the GroupType security.
 * const input = {
 *   DirectoryId: "d-12233abcde",
 *   MaxResults: 123,
 *   NextToken: "123456",
 *   Realm: "examplecorp.com",
 *   SearchAttributes: [
 *     "GroupScope"
 *   ],
 *   SearchString: "Security"
 * };
 * const command = new SearchGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DirectoryId: "d-12233abcde",
 *   Groups: [
 *     {
 *       GroupScope: "BuiltinLocal",
 *       GroupType: "Security",
 *       SAMAccountName: "Administrators",
 *       SID: "S-1-5-32-544"
 *     },
 *     {
 *       GroupScope: "BuiltinLocal",
 *       GroupType: "Security",
 *       SAMAccountName: "Users",
 *       SID: "S-1-5-32-545"
 *     }
 *   ],
 *   NextToken: "223456"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SearchGroupsCommand extends $Command
  .classBuilder<
    SearchGroupsCommandInput,
    SearchGroupsCommandOutput,
    DirectoryServiceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryServiceData", "SearchGroups", {})
  .n("DirectoryServiceDataClient", "SearchGroupsCommand")
  .sc(SearchGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchGroupsRequest;
      output: SearchGroupsResult;
    };
    sdk: {
      input: SearchGroupsCommandInput;
      output: SearchGroupsCommandOutput;
    };
  };
}

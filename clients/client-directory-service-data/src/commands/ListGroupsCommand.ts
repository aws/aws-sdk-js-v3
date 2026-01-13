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
import type { ListGroupsRequest, ListGroupsResult } from "../models/models_0";
import { ListGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGroupsCommand}.
 */
export interface ListGroupsCommandInput extends ListGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListGroupsCommand}.
 */
export interface ListGroupsCommandOutput extends ListGroupsResult, __MetadataBearer {}

/**
 * <p> Returns group information for the specified directory. </p>
 *          <p> This operation supports pagination with the use of the <code>NextToken</code> request and
 *       response parameters. If more results are available, the <code>ListGroups.NextToken</code>
 *       member contains a token that you pass in the next call to <code>ListGroups</code>. This
 *       retrieves the next set of items. </p>
 *          <p> You can also specify a maximum number of return results with the <code>MaxResults</code>
 *       parameter. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceDataClient, ListGroupsCommand } from "@aws-sdk/client-directory-service-data"; // ES Modules import
 * // const { DirectoryServiceDataClient, ListGroupsCommand } = require("@aws-sdk/client-directory-service-data"); // CommonJS import
 * // import type { DirectoryServiceDataClientConfig } from "@aws-sdk/client-directory-service-data";
 * const config = {}; // type is DirectoryServiceDataClientConfig
 * const client = new DirectoryServiceDataClient(config);
 * const input = { // ListGroupsRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Realm: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupsResult
 * //   DirectoryId: "STRING_VALUE",
 * //   Realm: "STRING_VALUE",
 * //   Groups: [ // GroupSummaryList
 * //     { // GroupSummary
 * //       SID: "STRING_VALUE", // required
 * //       SAMAccountName: "STRING_VALUE", // required
 * //       GroupType: "Distribution" || "Security", // required
 * //       GroupScope: "DomainLocal" || "Global" || "Universal" || "BuiltinLocal", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGroupsCommandInput - {@link ListGroupsCommandInput}
 * @returns {@link ListGroupsCommandOutput}
 * @see {@link ListGroupsCommandInput} for command's `input` shape.
 * @see {@link ListGroupsCommandOutput} for command's `response` shape.
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
 * @example To list domain groups
 * ```javascript
 * // The following command lists the name and default attributes for groups on the examplecorp.com domain.
 * const input = {
 *   DirectoryId: "d-12233abcde",
 *   MaxResults: 123,
 *   NextToken: "123456",
 *   Realm: "examplecorp.com"
 * };
 * const command = new ListGroupsCommand(input);
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
export class ListGroupsCommand extends $Command
  .classBuilder<
    ListGroupsCommandInput,
    ListGroupsCommandOutput,
    DirectoryServiceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryServiceData", "ListGroups", {})
  .n("DirectoryServiceDataClient", "ListGroupsCommand")
  .sc(ListGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGroupsRequest;
      output: ListGroupsResult;
    };
    sdk: {
      input: ListGroupsCommandInput;
      output: ListGroupsCommandOutput;
    };
  };
}

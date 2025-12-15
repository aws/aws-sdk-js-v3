// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListGroupsForEntityRequest, ListGroupsForEntityResponse } from "../models/models_0";
import { ListGroupsForEntity$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGroupsForEntityCommand}.
 */
export interface ListGroupsForEntityCommandInput extends ListGroupsForEntityRequest {}
/**
 * @public
 *
 * The output of {@link ListGroupsForEntityCommand}.
 */
export interface ListGroupsForEntityCommandOutput extends ListGroupsForEntityResponse, __MetadataBearer {}

/**
 * <p>Returns all the groups to which an entity belongs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListGroupsForEntityCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListGroupsForEntityCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // ListGroupsForEntityRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   EntityId: "STRING_VALUE", // required
 *   Filters: { // ListGroupsForEntityFilters
 *     GroupNamePrefix: "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListGroupsForEntityCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupsForEntityResponse
 * //   Groups: [ // GroupIdentifiers
 * //     { // GroupIdentifier
 * //       GroupId: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGroupsForEntityCommandInput - {@link ListGroupsForEntityCommandInput}
 * @returns {@link ListGroupsForEntityCommandOutput}
 * @see {@link ListGroupsForEntityCommandInput} for command's `input` shape.
 * @see {@link ListGroupsForEntityCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link EntityStateException} (client fault)
 *  <p>You are performing an operation on a user, group, or resource that isn't in the
 *          expected state, such as trying to delete an active user.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class ListGroupsForEntityCommand extends $Command
  .classBuilder<
    ListGroupsForEntityCommandInput,
    ListGroupsForEntityCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "ListGroupsForEntity", {})
  .n("WorkMailClient", "ListGroupsForEntityCommand")
  .sc(ListGroupsForEntity$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGroupsForEntityRequest;
      output: ListGroupsForEntityResponse;
    };
    sdk: {
      input: ListGroupsForEntityCommandInput;
      output: ListGroupsForEntityCommandOutput;
    };
  };
}

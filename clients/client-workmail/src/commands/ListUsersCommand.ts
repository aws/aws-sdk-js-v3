// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListUsersRequest, ListUsersResponse } from "../models/models_0";
import { ListUsers } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUsersCommand}.
 */
export interface ListUsersCommandInput extends ListUsersRequest {}
/**
 * @public
 *
 * The output of {@link ListUsersCommand}.
 */
export interface ListUsersCommandOutput extends ListUsersResponse, __MetadataBearer {}

/**
 * <p>Returns summaries of the organization's users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListUsersCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListUsersCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // ListUsersRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: { // ListUsersFilters
 *     UsernamePrefix: "STRING_VALUE",
 *     DisplayNamePrefix: "STRING_VALUE",
 *     PrimaryEmailPrefix: "STRING_VALUE",
 *     State: "ENABLED" || "DISABLED" || "DELETED",
 *     IdentityProviderUserIdPrefix: "STRING_VALUE",
 *   },
 * };
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * // { // ListUsersResponse
 * //   Users: [ // Users
 * //     { // User
 * //       Id: "STRING_VALUE",
 * //       Email: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       State: "ENABLED" || "DISABLED" || "DELETED",
 * //       UserRole: "USER" || "RESOURCE" || "SYSTEM_USER" || "REMOTE_USER",
 * //       EnabledDate: new Date("TIMESTAMP"),
 * //       DisabledDate: new Date("TIMESTAMP"),
 * //       IdentityProviderUserId: "STRING_VALUE",
 * //       IdentityProviderIdentityStoreId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUsersCommandInput - {@link ListUsersCommandInput}
 * @returns {@link ListUsersCommandOutput}
 * @see {@link ListUsersCommandInput} for command's `input` shape.
 * @see {@link ListUsersCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
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
export class ListUsersCommand extends $Command
  .classBuilder<
    ListUsersCommandInput,
    ListUsersCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "ListUsers", {})
  .n("WorkMailClient", "ListUsersCommand")
  .sc(ListUsers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUsersRequest;
      output: ListUsersResponse;
    };
    sdk: {
      input: ListUsersCommandInput;
      output: ListUsersCommandOutput;
    };
  };
}

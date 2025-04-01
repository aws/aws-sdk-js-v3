// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMailboxPermissionsRequest, ListMailboxPermissionsResponse } from "../models/models_0";
import { de_ListMailboxPermissionsCommand, se_ListMailboxPermissionsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMailboxPermissionsCommand}.
 */
export interface ListMailboxPermissionsCommandInput extends ListMailboxPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link ListMailboxPermissionsCommand}.
 */
export interface ListMailboxPermissionsCommandOutput extends ListMailboxPermissionsResponse, __MetadataBearer {}

/**
 * <p>Lists the mailbox permissions associated with a user, group, or resource
 *          mailbox.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListMailboxPermissionsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListMailboxPermissionsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // ListMailboxPermissionsRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   EntityId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMailboxPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // ListMailboxPermissionsResponse
 * //   Permissions: [ // Permissions
 * //     { // Permission
 * //       GranteeId: "STRING_VALUE", // required
 * //       GranteeType: "GROUP" || "USER", // required
 * //       PermissionValues: [ // PermissionValues // required
 * //         "FULL_ACCESS" || "SEND_AS" || "SEND_ON_BEHALF",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMailboxPermissionsCommandInput - {@link ListMailboxPermissionsCommandInput}
 * @returns {@link ListMailboxPermissionsCommandOutput}
 * @see {@link ListMailboxPermissionsCommandInput} for command's `input` shape.
 * @see {@link ListMailboxPermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
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
export class ListMailboxPermissionsCommand extends $Command
  .classBuilder<
    ListMailboxPermissionsCommandInput,
    ListMailboxPermissionsCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "ListMailboxPermissions", {})
  .n("WorkMailClient", "ListMailboxPermissionsCommand")
  .f(void 0, void 0)
  .ser(se_ListMailboxPermissionsCommand)
  .de(de_ListMailboxPermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMailboxPermissionsRequest;
      output: ListMailboxPermissionsResponse;
    };
    sdk: {
      input: ListMailboxPermissionsCommandInput;
      output: ListMailboxPermissionsCommandOutput;
    };
  };
}

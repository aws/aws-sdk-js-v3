// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateUserRequest, UpdateUserResponse } from "../models/models_0";
import { UpdateUser } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserCommand}.
 */
export interface UpdateUserCommandInput extends UpdateUserRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserCommand}.
 */
export interface UpdateUserCommandOutput extends UpdateUserResponse, __MetadataBearer {}

/**
 * <p>Updates data for the user. To have the latest information, it must be preceded by a
 *             <a>DescribeUser</a> call. The dataset in the request should be the one
 *          expected when performing another <code>DescribeUser</code> call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateUserCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateUserCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // UpdateUserRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   Role: "USER" || "RESOURCE" || "SYSTEM_USER" || "REMOTE_USER",
 *   DisplayName: "STRING_VALUE",
 *   FirstName: "STRING_VALUE",
 *   LastName: "STRING_VALUE",
 *   HiddenFromGlobalAddressList: true || false,
 *   Initials: "STRING_VALUE",
 *   Telephone: "STRING_VALUE",
 *   Street: "STRING_VALUE",
 *   JobTitle: "STRING_VALUE",
 *   City: "STRING_VALUE",
 *   Company: "STRING_VALUE",
 *   ZipCode: "STRING_VALUE",
 *   Department: "STRING_VALUE",
 *   Country: "STRING_VALUE",
 *   Office: "STRING_VALUE",
 *   IdentityProviderUserId: "STRING_VALUE",
 * };
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserCommandInput - {@link UpdateUserCommandInput}
 * @returns {@link UpdateUserCommandOutput}
 * @see {@link UpdateUserCommandInput} for command's `input` shape.
 * @see {@link UpdateUserCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link DirectoryServiceAuthenticationFailedException} (client fault)
 *  <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The directory is unavailable. It might be located in another Region or deleted.</p>
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
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>You can't perform a write operation against a read-only directory.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class UpdateUserCommand extends $Command
  .classBuilder<
    UpdateUserCommandInput,
    UpdateUserCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "UpdateUser", {})
  .n("WorkMailClient", "UpdateUserCommand")
  .sc(UpdateUser)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserCommandInput;
      output: UpdateUserCommandOutput;
    };
  };
}

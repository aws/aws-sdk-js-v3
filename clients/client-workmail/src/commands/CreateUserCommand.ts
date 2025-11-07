// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateUserRequest, CreateUserResponse } from "../models/models_0";
import { CreateUser } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUserCommand}.
 */
export interface CreateUserCommandInput extends CreateUserRequest {}
/**
 * @public
 *
 * The output of {@link CreateUserCommand}.
 */
export interface CreateUserCommandOutput extends CreateUserResponse, __MetadataBearer {}

/**
 * <p>Creates a user who can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateUserCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateUserCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // CreateUserRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE", // required
 *   Password: "STRING_VALUE",
 *   Role: "USER" || "RESOURCE" || "SYSTEM_USER" || "REMOTE_USER",
 *   FirstName: "STRING_VALUE",
 *   LastName: "STRING_VALUE",
 *   HiddenFromGlobalAddressList: true || false,
 *   IdentityProviderUserId: "STRING_VALUE",
 * };
 * const command = new CreateUserCommand(input);
 * const response = await client.send(command);
 * // { // CreateUserResponse
 * //   UserId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateUserCommandInput - {@link CreateUserCommandInput}
 * @returns {@link CreateUserCommandOutput}
 * @see {@link CreateUserCommandInput} for command's `input` shape.
 * @see {@link CreateUserCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link DirectoryServiceAuthenticationFailedException} (client fault)
 *  <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The directory is unavailable. It might be located in another Region or deleted.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link InvalidPasswordException} (client fault)
 *  <p>The supplied password doesn't match the minimum security constraints, such as length
 *          or use of special characters.</p>
 *
 * @throws {@link NameAvailabilityException} (client fault)
 *  <p>The user, group, or resource name isn't unique in WorkMail.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link ReservedNameException} (client fault)
 *  <p>This user, group, or resource name is not allowed in WorkMail.</p>
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
export class CreateUserCommand extends $Command
  .classBuilder<
    CreateUserCommandInput,
    CreateUserCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "CreateUser", {})
  .n("WorkMailClient", "CreateUserCommand")
  .sc(CreateUser)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUserRequest;
      output: CreateUserResponse;
    };
    sdk: {
      input: CreateUserCommandInput;
      output: CreateUserCommandOutput;
    };
  };
}

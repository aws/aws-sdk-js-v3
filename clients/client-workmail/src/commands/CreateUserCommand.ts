// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateUserRequest, CreateUserResponse } from "../models/models_0";
import { CreateUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a user who can be used in WorkMail by calling the RegisterToWorkMail operation.
 *
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
 *
 * The directory service doesn't recognize the credentials supplied by WorkMail.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The directory is unavailable. It might be located in another Region or deleted.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link InvalidPasswordException} (client fault)
 *
 * The supplied password doesn't match the minimum security constraints, such as length or use of special characters.
 *
 * @throws {@link NameAvailabilityException} (client fault)
 *
 * The user, group, or resource name isn't unique in WorkMail.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link ReservedNameException} (client fault)
 *
 * This user, group, or resource name is not allowed in WorkMail.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * You can't perform a write operation against a read-only directory.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class CreateUserCommand extends command<CreateUserCommandInput, CreateUserCommandOutput>(
  _ep0,
  _mw0,
  "CreateUser",
  CreateUser$
) {
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

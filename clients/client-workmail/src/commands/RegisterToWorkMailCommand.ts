// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterToWorkMailRequest, RegisterToWorkMailResponse } from "../models/models_0";
import { RegisterToWorkMail$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterToWorkMailCommand}.
 */
export interface RegisterToWorkMailCommandInput extends RegisterToWorkMailRequest {}
/**
 * @public
 *
 * The output of {@link RegisterToWorkMailCommand}.
 */
export interface RegisterToWorkMailCommandOutput extends RegisterToWorkMailResponse, __MetadataBearer {}

/**
 * Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see [Pricing](https://aws.amazon.com/workmail/pricing). The equivalent console functionality for this operation is *Enable*.
 *
 * Users can either be created by calling the CreateUser API operation or they can be synchronized from your directory. For more information, see DeregisterFromWorkMail.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, RegisterToWorkMailCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, RegisterToWorkMailCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // RegisterToWorkMailRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   EntityId: "STRING_VALUE", // required
 *   Email: "STRING_VALUE", // required
 * };
 * const command = new RegisterToWorkMailCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterToWorkMailCommandInput - {@link RegisterToWorkMailCommandInput}
 * @returns {@link RegisterToWorkMailCommandOutput}
 * @see {@link RegisterToWorkMailCommandInput} for command's `input` shape.
 * @see {@link RegisterToWorkMailCommandOutput} for command's `response` shape.
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
 * @throws {@link EmailAddressInUseException} (client fault)
 *
 * The email address that you're trying to assign is already created for a different user, group, or resource.
 *
 * @throws {@link EntityAlreadyRegisteredException} (client fault)
 *
 * The user, group, or resource that you're trying to register is already registered.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * The identifier supplied for the user, group, or resource does not exist in your organization.
 *
 * @throws {@link EntityStateException} (client fault)
 *
 * You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link MailDomainNotFoundException} (client fault)
 *
 * The domain specified is not found in your organization.
 *
 * @throws {@link MailDomainStateException} (client fault)
 *
 * After a domain has been added to the organization, it must be verified. The domain is not yet verified.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
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
export class RegisterToWorkMailCommand extends command<RegisterToWorkMailCommandInput, RegisterToWorkMailCommandOutput>(
  _ep0,
  _mw0,
  "RegisterToWorkMail",
  RegisterToWorkMail$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterToWorkMailRequest;
      output: {};
    };
    sdk: {
      input: RegisterToWorkMailCommandInput;
      output: RegisterToWorkMailCommandOutput;
    };
  };
}

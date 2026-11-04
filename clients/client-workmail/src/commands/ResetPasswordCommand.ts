// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResetPasswordRequest, ResetPasswordResponse } from "../models/models_0";
import { ResetPassword$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ResetPasswordCommand}.
 */
export interface ResetPasswordCommandInput extends ResetPasswordRequest {}
/**
 * @public
 *
 * The output of {@link ResetPasswordCommand}.
 */
export interface ResetPasswordCommandOutput extends ResetPasswordResponse, __MetadataBearer {}

/**
 * Allows the administrator to reset the password for a user.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ResetPasswordCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ResetPasswordCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // ResetPasswordRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   Password: "STRING_VALUE", // required
 * };
 * const command = new ResetPasswordCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResetPasswordCommandInput - {@link ResetPasswordCommandInput}
 * @returns {@link ResetPasswordCommandOutput}
 * @see {@link ResetPasswordCommandInput} for command's `input` shape.
 * @see {@link ResetPasswordCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidPasswordException} (client fault)
 *
 * The supplied password doesn't match the minimum security constraints, such as length or use of special characters.
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
export class ResetPasswordCommand extends command<ResetPasswordCommandInput, ResetPasswordCommandOutput>(
  _ep0,
  _mw0,
  "ResetPassword",
  ResetPassword$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetPasswordRequest;
      output: {};
    };
    sdk: {
      input: ResetPasswordCommandInput;
      output: ResetPasswordCommandOutput;
    };
  };
}

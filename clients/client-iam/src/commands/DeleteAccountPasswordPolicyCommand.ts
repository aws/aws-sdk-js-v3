// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import { DeleteAccountPasswordPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccountPasswordPolicyCommand}.
 */
export interface DeleteAccountPasswordPolicyCommandInput {}
/**
 * @public
 *
 * The output of {@link DeleteAccountPasswordPolicyCommand}.
 */
export interface DeleteAccountPasswordPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the password policy for the Amazon Web Services account. There are no parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteAccountPasswordPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteAccountPasswordPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new DeleteAccountPasswordPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccountPasswordPolicyCommandInput - {@link DeleteAccountPasswordPolicyCommandInput}
 * @returns {@link DeleteAccountPasswordPolicyCommandOutput}
 * @see {@link DeleteAccountPasswordPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountPasswordPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To delete the current account password policy
 * ```javascript
 * // The following command removes the password policy from the current AWS account:
 * const input = { /* empty *\/ };
 * const command = new DeleteAccountPasswordPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteAccountPasswordPolicyCommand extends command<DeleteAccountPasswordPolicyCommandInput, DeleteAccountPasswordPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccountPasswordPolicy",
  DeleteAccountPasswordPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DeleteAccountPasswordPolicyCommandInput;
      output: DeleteAccountPasswordPolicyCommandOutput;
    };
  };
}

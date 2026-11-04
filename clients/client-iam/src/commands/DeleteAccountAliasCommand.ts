// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccountAliasRequest } from "../models/models_0";
import { DeleteAccountAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccountAliasCommand}.
 */
export interface DeleteAccountAliasCommandInput extends DeleteAccountAliasRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountAliasCommand}.
 */
export interface DeleteAccountAliasCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services account alias, see [Creating, deleting, and listing an Amazon Web Services account alias](https://docs.aws.amazon.com/signin/latest/userguide/CreateAccountAlias.html) in the *Amazon Web Services Sign-In User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteAccountAliasCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteAccountAliasCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DeleteAccountAliasRequest
 *   AccountAlias: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccountAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccountAliasCommandInput - {@link DeleteAccountAliasCommandInput}
 * @returns {@link DeleteAccountAliasCommandOutput}
 * @see {@link DeleteAccountAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountAliasCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @example To delete an account alias
 * ```javascript
 * // The following command removes the alias mycompany from the current AWS account:
 * const input = {
 *   AccountAlias: "mycompany"
 * };
 * const command = new DeleteAccountAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteAccountAliasCommand extends command<DeleteAccountAliasCommandInput, DeleteAccountAliasCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccountAlias",
  DeleteAccountAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccountAliasRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccountAliasCommandInput;
      output: DeleteAccountAliasCommandOutput;
    };
  };
}

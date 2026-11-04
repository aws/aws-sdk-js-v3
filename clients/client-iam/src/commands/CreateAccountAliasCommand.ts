// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAccountAliasRequest } from "../models/models_0";
import { CreateAccountAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAccountAliasCommand}.
 */
export interface CreateAccountAliasCommandInput extends CreateAccountAliasRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccountAliasCommand}.
 */
export interface CreateAccountAliasCommandOutput extends __MetadataBearer {}

/**
 * Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account alias, see [Creating, deleting, and listing an Amazon Web Services account alias](https://docs.aws.amazon.com/signin/latest/userguide/CreateAccountAlias.html) in the *Amazon Web Services Sign-In User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateAccountAliasCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateAccountAliasCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // CreateAccountAliasRequest
 *   AccountAlias: "STRING_VALUE", // required
 * };
 * const command = new CreateAccountAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateAccountAliasCommandInput - {@link CreateAccountAliasCommandInput}
 * @returns {@link CreateAccountAliasCommandOutput}
 * @see {@link CreateAccountAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAccountAliasCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *
 * The request was rejected because it attempted to create a resource that already exists.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @example To create an account alias
 * ```javascript
 * // The following command associates the alias examplecorp to your AWS account.
 * const input = {
 *   AccountAlias: "examplecorp"
 * };
 * const command = new CreateAccountAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateAccountAliasCommand extends command<CreateAccountAliasCommandInput, CreateAccountAliasCommandOutput>(
  _ep0,
  _mw0,
  "CreateAccountAlias",
  CreateAccountAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccountAliasRequest;
      output: {};
    };
    sdk: {
      input: CreateAccountAliasCommandInput;
      output: CreateAccountAliasCommandOutput;
    };
  };
}

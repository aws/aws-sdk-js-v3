// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateAccountsInput, AssociateAccountsOutput } from "../models/models_0";
import { AssociateAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateAccountsCommand}.
 */
export interface AssociateAccountsCommandInput extends AssociateAccountsInput {}
/**
 * @public
 *
 * The output of {@link AssociateAccountsCommand}.
 */
export interface AssociateAccountsCommandOutput extends AssociateAccountsOutput, __MetadataBearer {}

/**
 * Connects an array of account IDs in a consolidated billing family to a predefined billing group. The account IDs must be a part of the consolidated billing family during the current month, and not already associated with another billing group. The maximum number of accounts that can be associated in one call is 30.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, AssociateAccountsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, AssociateAccountsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // AssociateAccountsInput
 *   Arn: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateAccountsCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAccountsOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateAccountsCommandInput - {@link AssociateAccountsCommandInput}
 * @returns {@link AssociateAccountsCommandOutput}
 * @see {@link AssociateAccountsCommandInput} for command's `input` shape.
 * @see {@link AssociateAccountsCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You can cause an inconsistent state by updating or deleting a resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that doesn't exist.
 *
 * @throws {@link ServiceLimitExceededException} (client fault)
 *
 * The request would cause a service limit to exceed.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't match with the constraints specified by Amazon Web Services services.
 *
 * @throws {@link BillingconductorServiceException}
 *
 * Base exception class for all service exceptions from Billingconductor service.
 *
 * @public
 */
export class AssociateAccountsCommand extends command<AssociateAccountsCommandInput, AssociateAccountsCommandOutput>(
  _ep0,
  _mw0,
  "AssociateAccounts",
  AssociateAccounts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAccountsInput;
      output: AssociateAccountsOutput;
    };
    sdk: {
      input: AssociateAccountsCommandInput;
      output: AssociateAccountsCommandOutput;
    };
  };
}

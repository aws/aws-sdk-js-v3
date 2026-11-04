// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateAccountsInput, DisassociateAccountsOutput } from "../models/models_0";
import { DisassociateAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateAccountsCommand}.
 */
export interface DisassociateAccountsCommandInput extends DisassociateAccountsInput {}
/**
 * @public
 *
 * The output of {@link DisassociateAccountsCommand}.
 */
export interface DisassociateAccountsCommandOutput extends DisassociateAccountsOutput, __MetadataBearer {}

/**
 * Removes the specified list of account IDs from the given billing group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, DisassociateAccountsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, DisassociateAccountsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // DisassociateAccountsInput
 *   Arn: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateAccountsCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateAccountsOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateAccountsCommandInput - {@link DisassociateAccountsCommandInput}
 * @returns {@link DisassociateAccountsCommandOutput}
 * @see {@link DisassociateAccountsCommandInput} for command's `input` shape.
 * @see {@link DisassociateAccountsCommandOutput} for command's `response` shape.
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
export class DisassociateAccountsCommand extends command<DisassociateAccountsCommandInput, DisassociateAccountsCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateAccounts",
  DisassociateAccounts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateAccountsInput;
      output: DisassociateAccountsOutput;
    };
    sdk: {
      input: DisassociateAccountsCommandInput;
      output: DisassociateAccountsCommandOutput;
    };
  };
}

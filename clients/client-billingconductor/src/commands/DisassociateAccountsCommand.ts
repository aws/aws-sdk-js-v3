// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateAccountsInput, DisassociateAccountsOutput } from "../models/models_0";
import { DisassociateAccounts } from "../schemas/schemas_4_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Removes the specified list of account IDs from the given billing group. </p>
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
 *  <p>You do not have sufficient access to perform this action.
 *     </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can cause an inconsistent state by updating or deleting a resource.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services.</p>
 *
 * @throws {@link BillingconductorServiceException}
 * <p>Base exception class for all service exceptions from Billingconductor service.</p>
 *
 *
 * @public
 */
export class DisassociateAccountsCommand extends $Command
  .classBuilder<
    DisassociateAccountsCommandInput,
    DisassociateAccountsCommandOutput,
    BillingconductorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingconductorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBillingConductor", "DisassociateAccounts", {})
  .n("BillingconductorClient", "DisassociateAccountsCommand")
  .sc(DisassociateAccounts)
  .build() {
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

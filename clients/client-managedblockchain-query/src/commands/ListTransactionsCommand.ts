// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ManagedBlockchainQueryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainQueryClient";
import { ListTransactionsInput, ListTransactionsOutput } from "../models/models_0";
import { de_ListTransactionsCommand, se_ListTransactionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTransactionsCommand}.
 */
export interface ListTransactionsCommandInput extends ListTransactionsInput {}
/**
 * @public
 *
 * The output of {@link ListTransactionsCommand}.
 */
export interface ListTransactionsCommandOutput extends ListTransactionsOutput, __MetadataBearer {}

/**
 * <p>Lists all the transaction events for a transaction.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, ListTransactionsCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, ListTransactionsCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * const client = new ManagedBlockchainQueryClient(config);
 * const input = { // ListTransactionsInput
 *   address: "STRING_VALUE", // required
 *   network: "STRING_VALUE", // required
 *   fromBlockchainInstant: { // BlockchainInstant
 *     time: new Date("TIMESTAMP"),
 *   },
 *   toBlockchainInstant: {
 *     time: new Date("TIMESTAMP"),
 *   },
 *   sort: { // ListTransactionsSort
 *     sortBy: "STRING_VALUE",
 *     sortOrder: "STRING_VALUE",
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   confirmationStatusFilter: { // ConfirmationStatusFilter
 *     include: [ // ConfirmationStatusIncludeList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListTransactionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTransactionsOutput
 * //   transactions: [ // TransactionOutputList // required
 * //     { // TransactionOutputItem
 * //       transactionHash: "STRING_VALUE", // required
 * //       transactionId: "STRING_VALUE",
 * //       network: "STRING_VALUE", // required
 * //       transactionTimestamp: new Date("TIMESTAMP"), // required
 * //       confirmationStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTransactionsCommandInput - {@link ListTransactionsCommandInput}
 * @returns {@link ListTransactionsCommandOutput}
 * @see {@link ListTransactionsCommandInput} for command's `input` shape.
 * @see {@link ListTransactionsCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainQueryClientResolvedConfig | config} for ManagedBlockchainQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The Amazon Web Services account doesn’t have access to this resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an internal error in the service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded for this resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation couldn't be performed because a service is throttling
 *       requests. The most common source of throttling errors is when you create resources
 *       that exceed your service limit for this resource type. Request a limit increase or
 *       delete unused resources, if possible.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The resource passed is invalid.</p>
 *
 * @throws {@link ManagedBlockchainQueryServiceException}
 * <p>Base exception class for all service exceptions from ManagedBlockchainQuery service.</p>
 *
 * @public
 */
export class ListTransactionsCommand extends $Command
  .classBuilder<
    ListTransactionsCommandInput,
    ListTransactionsCommandOutput,
    ManagedBlockchainQueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainQueryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TietonChainQueryService", "ListTransactions", {})
  .n("ManagedBlockchainQueryClient", "ListTransactionsCommand")
  .f(void 0, void 0)
  .ser(se_ListTransactionsCommand)
  .de(de_ListTransactionsCommand)
  .build() {}

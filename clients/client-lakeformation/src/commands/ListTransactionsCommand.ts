// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { ListTransactionsRequest, ListTransactionsResponse } from "../models/models_0";
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
export interface ListTransactionsCommandInput extends ListTransactionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTransactionsCommand}.
 */
export interface ListTransactionsCommandOutput extends ListTransactionsResponse, __MetadataBearer {}

/**
 * <p>Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.</p>
 *          <p>This operation can help you identify uncommitted transactions or to get information about transactions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListTransactionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListTransactionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // ListTransactionsRequest
 *   CatalogId: "STRING_VALUE",
 *   StatusFilter: "ALL" || "COMPLETED" || "ACTIVE" || "COMMITTED" || "ABORTED",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTransactionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTransactionsResponse
 * //   Transactions: [ // TransactionDescriptionList
 * //     { // TransactionDescription
 * //       TransactionId: "STRING_VALUE",
 * //       TransactionStatus: "ACTIVE" || "COMMITTED" || "ABORTED" || "COMMIT_IN_PROGRESS",
 * //       TransactionStartTime: new Date("TIMESTAMP"),
 * //       TransactionEndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTransactionsCommandInput - {@link ListTransactionsCommandInput}
 * @returns {@link ListTransactionsCommandOutput}
 * @see {@link ListTransactionsCommandInput} for command's `input` shape.
 * @see {@link ListTransactionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class ListTransactionsCommand extends $Command
  .classBuilder<
    ListTransactionsCommandInput,
    ListTransactionsCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "ListTransactions", {})
  .n("LakeFormationClient", "ListTransactionsCommand")
  .f(void 0, void 0)
  .ser(se_ListTransactionsCommand)
  .de(de_ListTransactionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTransactionsRequest;
      output: ListTransactionsResponse;
    };
    sdk: {
      input: ListTransactionsCommandInput;
      output: ListTransactionsCommandOutput;
    };
  };
}

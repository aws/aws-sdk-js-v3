// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { DescribeTransactionRequest, DescribeTransactionResponse } from "../models/models_0";
import { DescribeTransaction } from "../schemas/schemas_8_Transaction";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransactionCommand}.
 */
export interface DescribeTransactionCommandInput extends DescribeTransactionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransactionCommand}.
 */
export interface DescribeTransactionCommandOutput extends DescribeTransactionResponse, __MetadataBearer {}

/**
 * <p>Returns the details of a single transaction.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DescribeTransactionCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DescribeTransactionCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // DescribeTransactionRequest
 *   TransactionId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTransactionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransactionResponse
 * //   TransactionDescription: { // TransactionDescription
 * //     TransactionId: "STRING_VALUE",
 * //     TransactionStatus: "ACTIVE" || "COMMITTED" || "ABORTED" || "COMMIT_IN_PROGRESS",
 * //     TransactionStartTime: new Date("TIMESTAMP"),
 * //     TransactionEndTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTransactionCommandInput - {@link DescribeTransactionCommandInput}
 * @returns {@link DescribeTransactionCommandOutput}
 * @see {@link DescribeTransactionCommandInput} for command's `input` shape.
 * @see {@link DescribeTransactionCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
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
export class DescribeTransactionCommand extends $Command
  .classBuilder<
    DescribeTransactionCommandInput,
    DescribeTransactionCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "DescribeTransaction", {})
  .n("LakeFormationClient", "DescribeTransactionCommand")
  .sc(DescribeTransaction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTransactionRequest;
      output: DescribeTransactionResponse;
    };
    sdk: {
      input: DescribeTransactionCommandInput;
      output: DescribeTransactionCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type { CancelBulkOperationInput, CancelBulkOperationOutput } from "../models/models_0";
import { CancelBulkOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelBulkOperationCommand}.
 */
export interface CancelBulkOperationCommandInput extends CancelBulkOperationInput {}
/**
 * @public
 *
 * The output of {@link CancelBulkOperationCommand}.
 */
export interface CancelBulkOperationCommandOutput extends CancelBulkOperationOutput, __MetadataBearer {}

/**
 * <p>Cancels an in-progress bulk operation asynchronously. Cancellation doesn't remove
 *             items that the operation has already written. Use <code>DescribeBulkOperation</code> to
 *             monitor the operation until it reaches a terminal status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, CancelBulkOperationCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, CancelBulkOperationCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // CancelBulkOperationInput
 *   BulkOperationArn: "STRING_VALUE", // required
 * };
 * const command = new CancelBulkOperationCommand(input);
 * const response = await client.send(command);
 * // { // CancelBulkOperationOutput
 * //   BulkOperationArn: "STRING_VALUE", // required
 * //   BulkOperationStatus: "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "CANCELLING" || "CANCELLED" || "FAILED", // required
 * // };
 *
 * ```
 *
 * @param CancelBulkOperationCommandInput - {@link CancelBulkOperationCommandInput}
 * @returns {@link CancelBulkOperationCommandOutput}
 * @see {@link CancelBulkOperationCommandInput} for command's `input` shape.
 * @see {@link CancelBulkOperationCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent table or index. The resource might not
 *             be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 *
 * @public
 */
export class CancelBulkOperationCommand extends command<CancelBulkOperationCommandInput, CancelBulkOperationCommandOutput>(
  _ep2,
  _mw0,
  "CancelBulkOperation",
  CancelBulkOperation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelBulkOperationInput;
      output: CancelBulkOperationOutput;
    };
    sdk: {
      input: CancelBulkOperationCommandInput;
      output: CancelBulkOperationCommandOutput;
    };
  };
}

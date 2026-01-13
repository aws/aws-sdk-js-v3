// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type {
  DeleteColumnStatisticsForPartitionRequest,
  DeleteColumnStatisticsForPartitionResponse,
} from "../models/models_1";
import { DeleteColumnStatisticsForPartition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteColumnStatisticsForPartitionCommand}.
 */
export interface DeleteColumnStatisticsForPartitionCommandInput extends DeleteColumnStatisticsForPartitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteColumnStatisticsForPartitionCommand}.
 */
export interface DeleteColumnStatisticsForPartitionCommandOutput extends DeleteColumnStatisticsForPartitionResponse, __MetadataBearer {}

/**
 * <p>Delete the partition column statistics of a column.</p>
 *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeletePartition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteColumnStatisticsForPartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteColumnStatisticsForPartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteColumnStatisticsForPartitionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   PartitionValues: [ // ValueStringList // required
 *     "STRING_VALUE",
 *   ],
 *   ColumnName: "STRING_VALUE", // required
 * };
 * const command = new DeleteColumnStatisticsForPartitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteColumnStatisticsForPartitionCommandInput - {@link DeleteColumnStatisticsForPartitionCommandInput}
 * @returns {@link DeleteColumnStatisticsForPartitionCommandOutput}
 * @see {@link DeleteColumnStatisticsForPartitionCommandInput} for command's `input` shape.
 * @see {@link DeleteColumnStatisticsForPartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteColumnStatisticsForPartitionCommand extends $Command
  .classBuilder<
    DeleteColumnStatisticsForPartitionCommandInput,
    DeleteColumnStatisticsForPartitionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteColumnStatisticsForPartition", {})
  .n("GlueClient", "DeleteColumnStatisticsForPartitionCommand")
  .sc(DeleteColumnStatisticsForPartition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteColumnStatisticsForPartitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteColumnStatisticsForPartitionCommandInput;
      output: DeleteColumnStatisticsForPartitionCommandOutput;
    };
  };
}

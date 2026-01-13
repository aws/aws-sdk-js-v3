// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { BatchDeletePartitionRequest, BatchDeletePartitionResponse } from "../models/models_0";
import { BatchDeletePartition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeletePartitionCommand}.
 */
export interface BatchDeletePartitionCommandInput extends BatchDeletePartitionRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeletePartitionCommand}.
 */
export interface BatchDeletePartitionCommandOutput extends BatchDeletePartitionResponse, __MetadataBearer {}

/**
 * <p>Deletes one or more partitions in a batch operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchDeletePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchDeletePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // BatchDeletePartitionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   PartitionsToDelete: [ // BatchDeletePartitionValueList // required
 *     { // PartitionValueList
 *       Values: [ // ValueStringList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchDeletePartitionCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeletePartitionResponse
 * //   Errors: [ // PartitionErrors
 * //     { // PartitionError
 * //       PartitionValues: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       ErrorDetail: { // ErrorDetail
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeletePartitionCommandInput - {@link BatchDeletePartitionCommandInput}
 * @returns {@link BatchDeletePartitionCommandOutput}
 * @see {@link BatchDeletePartitionCommandInput} for command's `input` shape.
 * @see {@link BatchDeletePartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
export class BatchDeletePartitionCommand extends $Command
  .classBuilder<
    BatchDeletePartitionCommandInput,
    BatchDeletePartitionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "BatchDeletePartition", {})
  .n("GlueClient", "BatchDeletePartitionCommand")
  .sc(BatchDeletePartition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeletePartitionRequest;
      output: BatchDeletePartitionResponse;
    };
    sdk: {
      input: BatchDeletePartitionCommandInput;
      output: BatchDeletePartitionCommandOutput;
    };
  };
}

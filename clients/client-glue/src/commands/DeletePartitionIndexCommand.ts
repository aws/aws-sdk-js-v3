// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { DeletePartitionIndexRequest, DeletePartitionIndexResponse } from "../models/models_1";
import { DeletePartitionIndex } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePartitionIndexCommand}.
 */
export interface DeletePartitionIndexCommandInput extends DeletePartitionIndexRequest {}
/**
 * @public
 *
 * The output of {@link DeletePartitionIndexCommand}.
 */
export interface DeletePartitionIndexCommandOutput extends DeletePartitionIndexResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified partition index from an existing table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeletePartitionIndexCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeletePartitionIndexCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeletePartitionIndexRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   IndexName: "STRING_VALUE", // required
 * };
 * const command = new DeletePartitionIndexCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePartitionIndexCommandInput - {@link DeletePartitionIndexCommandInput}
 * @returns {@link DeletePartitionIndexCommandOutput}
 * @see {@link DeletePartitionIndexCommandInput} for command's `input` shape.
 * @see {@link DeletePartitionIndexCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The <code>CreatePartitions</code> API was called on a table that has indexes enabled.	</p>
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
export class DeletePartitionIndexCommand extends $Command
  .classBuilder<
    DeletePartitionIndexCommandInput,
    DeletePartitionIndexCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeletePartitionIndex", {})
  .n("GlueClient", "DeletePartitionIndexCommand")
  .sc(DeletePartitionIndex)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePartitionIndexRequest;
      output: {};
    };
    sdk: {
      input: DeletePartitionIndexCommandInput;
      output: DeletePartitionIndexCommandOutput;
    };
  };
}

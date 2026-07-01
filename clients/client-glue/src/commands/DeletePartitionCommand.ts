// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePartitionRequest, DeletePartitionResponse } from "../models/models_1";
import { DeletePartition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePartitionCommand}.
 */
export interface DeletePartitionCommandInput extends DeletePartitionRequest {}
/**
 * @public
 *
 * The output of {@link DeletePartitionCommand}.
 */
export interface DeletePartitionCommandOutput extends DeletePartitionResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified partition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeletePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeletePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeletePartitionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   PartitionValues: [ // ValueStringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeletePartitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePartitionCommandInput - {@link DeletePartitionCommandInput}
 * @returns {@link DeletePartitionCommandOutput}
 * @see {@link DeletePartitionCommandInput} for command's `input` shape.
 * @see {@link DeletePartitionCommandOutput} for command's `response` shape.
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
export class DeletePartitionCommand extends command<DeletePartitionCommandInput, DeletePartitionCommandOutput>(
  _ep0,
  _mw0,
  "DeletePartition",
  DeletePartition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePartitionRequest;
      output: {};
    };
    sdk: {
      input: DeletePartitionCommandInput;
      output: DeletePartitionCommandOutput;
    };
  };
}

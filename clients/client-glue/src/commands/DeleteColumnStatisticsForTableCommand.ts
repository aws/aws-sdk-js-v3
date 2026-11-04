// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteColumnStatisticsForTableRequest, DeleteColumnStatisticsForTableResponse } from "../models/models_1";
import { DeleteColumnStatisticsForTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteColumnStatisticsForTableCommand}.
 */
export interface DeleteColumnStatisticsForTableCommandInput extends DeleteColumnStatisticsForTableRequest {}
/**
 * @public
 *
 * The output of {@link DeleteColumnStatisticsForTableCommand}.
 */
export interface DeleteColumnStatisticsForTableCommandOutput extends DeleteColumnStatisticsForTableResponse, __MetadataBearer {}

/**
 * Retrieves table statistics of columns.
 *
 * The Identity and Access Management (IAM) permission required for this operation is `DeleteTable`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteColumnStatisticsForTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteColumnStatisticsForTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteColumnStatisticsForTableRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   ColumnName: "STRING_VALUE", // required
 * };
 * const command = new DeleteColumnStatisticsForTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteColumnStatisticsForTableCommandInput - {@link DeleteColumnStatisticsForTableCommandInput}
 * @returns {@link DeleteColumnStatisticsForTableCommandOutput}
 * @see {@link DeleteColumnStatisticsForTableCommandInput} for command's `input` shape.
 * @see {@link DeleteColumnStatisticsForTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *
 * An encryption operation failed.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class DeleteColumnStatisticsForTableCommand extends command<DeleteColumnStatisticsForTableCommandInput, DeleteColumnStatisticsForTableCommandOutput>(
  _ep0,
  _mw0,
  "DeleteColumnStatisticsForTable",
  DeleteColumnStatisticsForTable$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteColumnStatisticsForTableRequest;
      output: {};
    };
    sdk: {
      input: DeleteColumnStatisticsForTableCommandInput;
      output: DeleteColumnStatisticsForTableCommandOutput;
    };
  };
}

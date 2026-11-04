// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDeleteConnectionRequest, BatchDeleteConnectionResponse } from "../models/models_0";
import { BatchDeleteConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDeleteConnectionCommand}.
 */
export interface BatchDeleteConnectionCommandInput extends BatchDeleteConnectionRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteConnectionCommand}.
 */
export interface BatchDeleteConnectionCommandOutput extends BatchDeleteConnectionResponse, __MetadataBearer {}

/**
 * Deletes a list of connection definitions from the Data Catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchDeleteConnectionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchDeleteConnectionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // BatchDeleteConnectionRequest
 *   CatalogId: "STRING_VALUE",
 *   ConnectionNameList: [ // DeleteConnectionNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteConnectionCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteConnectionResponse
 * //   Succeeded: [ // NameStringList
 * //     "STRING_VALUE",
 * //   ],
 * //   Errors: { // ErrorByName
 * //     "<keys>": { // ErrorDetail
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param BatchDeleteConnectionCommandInput - {@link BatchDeleteConnectionCommandInput}
 * @returns {@link BatchDeleteConnectionCommandOutput}
 * @see {@link BatchDeleteConnectionCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteConnectionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
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
export class BatchDeleteConnectionCommand extends command<BatchDeleteConnectionCommandInput, BatchDeleteConnectionCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeleteConnection",
  BatchDeleteConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteConnectionRequest;
      output: BatchDeleteConnectionResponse;
    };
    sdk: {
      input: BatchDeleteConnectionCommandInput;
      output: BatchDeleteConnectionCommandOutput;
    };
  };
}

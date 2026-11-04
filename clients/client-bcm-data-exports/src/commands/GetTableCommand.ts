// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTableRequest, GetTableResponse } from "../models/models_0";
import { GetTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTableCommand}.
 */
export interface GetTableCommandInput extends GetTableRequest {}
/**
 * @public
 *
 * The output of {@link GetTableCommand}.
 */
export interface GetTableCommandOutput extends GetTableResponse, __MetadataBearer {}

/**
 * Returns the metadata for the specified table and table properties. This includes the list of columns in the table schema, their data types, and column descriptions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDataExportsClient, GetTableCommand } from "@aws-sdk/client-bcm-data-exports"; // ES Modules import
 * // const { BCMDataExportsClient, GetTableCommand } = require("@aws-sdk/client-bcm-data-exports"); // CommonJS import
 * // import type { BCMDataExportsClientConfig } from "@aws-sdk/client-bcm-data-exports";
 * const config = {}; // type is BCMDataExportsClientConfig
 * const client = new BCMDataExportsClient(config);
 * const input = { // GetTableRequest
 *   TableName: "STRING_VALUE", // required
 *   TableProperties: { // TableProperties
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetTableCommand(input);
 * const response = await client.send(command);
 * // { // GetTableResponse
 * //   TableName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   TableProperties: { // TableProperties
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Schema: [ // ColumnList
 * //     { // Column
 * //       Name: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTableCommandInput - {@link GetTableCommandInput}
 * @returns {@link GetTableCommandOutput}
 * @see {@link GetTableCommandInput} for command's `input` shape.
 * @see {@link GetTableCommandOutput} for command's `response` shape.
 * @see {@link BCMDataExportsClientResolvedConfig | config} for BCMDataExportsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An error on the server occurred during the processing of your request. Try again later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link BCMDataExportsServiceException}
 *
 * Base exception class for all service exceptions from BCMDataExports service.
 *
 * @public
 */
export class GetTableCommand extends command<GetTableCommandInput, GetTableCommandOutput>(
  _ep0,
  _mw0,
  "GetTable",
  GetTable$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableRequest;
      output: GetTableResponse;
    };
    sdk: {
      input: GetTableCommandInput;
      output: GetTableCommandOutput;
    };
  };
}

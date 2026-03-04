// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import type { UpdateDatasetRequest, UpdateDatasetResponse } from "../models/models_0";
import { UpdateDataset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDatasetCommand}.
 */
export interface UpdateDatasetCommandInput extends UpdateDatasetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDatasetCommand}.
 */
export interface UpdateDatasetCommandOutput extends UpdateDatasetResponse, __MetadataBearer {}

/**
 * <p>Updates a FinSpace Dataset.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, UpdateDatasetCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, UpdateDatasetCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // import type { FinspaceDataClientConfig } from "@aws-sdk/client-finspace-data";
 * const config = {}; // type is FinspaceDataClientConfig
 * const client = new FinspaceDataClient(config);
 * const input = { // UpdateDatasetRequest
 *   clientToken: "STRING_VALUE",
 *   datasetId: "STRING_VALUE", // required
 *   datasetTitle: "STRING_VALUE", // required
 *   kind: "TABULAR" || "NON_TABULAR", // required
 *   datasetDescription: "STRING_VALUE",
 *   alias: "STRING_VALUE",
 *   schemaDefinition: { // SchemaUnion
 *     tabularSchemaConfig: { // SchemaDefinition
 *       columns: [ // ColumnList
 *         { // ColumnDefinition
 *           dataType: "STRING" || "CHAR" || "INTEGER" || "TINYINT" || "SMALLINT" || "BIGINT" || "FLOAT" || "DOUBLE" || "DATE" || "DATETIME" || "BOOLEAN" || "BINARY",
 *           columnName: "STRING_VALUE",
 *           columnDescription: "STRING_VALUE",
 *         },
 *       ],
 *       primaryKeyColumns: [ // ColumnNameList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateDatasetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDatasetResponse
 * //   datasetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDatasetCommandInput - {@link UpdateDatasetCommandInput}
 * @returns {@link UpdateDatasetCommandOutput}
 * @see {@link UpdateDatasetCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 *
 * @public
 */
export class UpdateDatasetCommand extends $Command
  .classBuilder<
    UpdateDatasetCommandInput,
    UpdateDatasetCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroPublicAPI", "UpdateDataset", {})
  .n("FinspaceDataClient", "UpdateDatasetCommand")
  .sc(UpdateDataset$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDatasetRequest;
      output: UpdateDatasetResponse;
    };
    sdk: {
      input: UpdateDatasetCommandInput;
      output: UpdateDatasetCommandOutput;
    };
  };
}

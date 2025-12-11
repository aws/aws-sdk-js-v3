// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import type { GetDatasetRequest, GetDatasetResponse } from "../models/models_0";
import { GetDataset } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDatasetCommand}.
 */
export interface GetDatasetCommandInput extends GetDatasetRequest {}
/**
 * @public
 *
 * The output of {@link GetDatasetCommand}.
 */
export interface GetDatasetCommandOutput extends GetDatasetResponse, __MetadataBearer {}

/**
 * <p>Returns information about a Dataset.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetDatasetCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetDatasetCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // import type { FinspaceDataClientConfig } from "@aws-sdk/client-finspace-data";
 * const config = {}; // type is FinspaceDataClientConfig
 * const client = new FinspaceDataClient(config);
 * const input = { // GetDatasetRequest
 *   datasetId: "STRING_VALUE", // required
 * };
 * const command = new GetDatasetCommand(input);
 * const response = await client.send(command);
 * // { // GetDatasetResponse
 * //   datasetId: "STRING_VALUE",
 * //   datasetArn: "STRING_VALUE",
 * //   datasetTitle: "STRING_VALUE",
 * //   kind: "TABULAR" || "NON_TABULAR",
 * //   datasetDescription: "STRING_VALUE",
 * //   createTime: Number("long"),
 * //   lastModifiedTime: Number("long"),
 * //   schemaDefinition: { // SchemaUnion
 * //     tabularSchemaConfig: { // SchemaDefinition
 * //       columns: [ // ColumnList
 * //         { // ColumnDefinition
 * //           dataType: "STRING" || "CHAR" || "INTEGER" || "TINYINT" || "SMALLINT" || "BIGINT" || "FLOAT" || "DOUBLE" || "DATE" || "DATETIME" || "BOOLEAN" || "BINARY",
 * //           columnName: "STRING_VALUE",
 * //           columnDescription: "STRING_VALUE",
 * //         },
 * //       ],
 * //       primaryKeyColumns: [ // ColumnNameList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   alias: "STRING_VALUE",
 * //   status: "PENDING" || "FAILED" || "SUCCESS" || "RUNNING",
 * // };
 *
 * ```
 *
 * @param GetDatasetCommandInput - {@link GetDatasetCommandInput}
 * @returns {@link GetDatasetCommandOutput}
 * @see {@link GetDatasetCommandInput} for command's `input` shape.
 * @see {@link GetDatasetCommandOutput} for command's `response` shape.
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
export class GetDatasetCommand extends $Command
  .classBuilder<
    GetDatasetCommandInput,
    GetDatasetCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroPublicAPI", "GetDataset", {})
  .n("FinspaceDataClient", "GetDatasetCommand")
  .sc(GetDataset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDatasetRequest;
      output: GetDatasetResponse;
    };
    sdk: {
      input: GetDatasetCommandInput;
      output: GetDatasetCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTrainingDatasetRequest, GetTrainingDatasetResponse } from "../models/models_0";
import { GetTrainingDataset } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTrainingDatasetCommand}.
 */
export interface GetTrainingDatasetCommandInput extends GetTrainingDatasetRequest {}
/**
 * @public
 *
 * The output of {@link GetTrainingDatasetCommand}.
 */
export interface GetTrainingDatasetCommandOutput extends GetTrainingDatasetResponse, __MetadataBearer {}

/**
 * <p>Returns information about a training dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetTrainingDatasetCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetTrainingDatasetCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetTrainingDatasetRequest
 *   trainingDatasetArn: "STRING_VALUE", // required
 * };
 * const command = new GetTrainingDatasetCommand(input);
 * const response = await client.send(command);
 * // { // GetTrainingDatasetResponse
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   trainingDatasetArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   trainingData: [ // DatasetList // required
 * //     { // Dataset
 * //       type: "INTERACTIONS", // required
 * //       inputConfig: { // DatasetInputConfig
 * //         schema: [ // DatasetSchemaList // required
 * //           { // ColumnSchema
 * //             columnName: "STRING_VALUE", // required
 * //             columnTypes: [ // ColumnTypeList // required
 * //               "USER_ID" || "ITEM_ID" || "TIMESTAMP" || "CATEGORICAL_FEATURE" || "NUMERICAL_FEATURE",
 * //             ],
 * //           },
 * //         ],
 * //         dataSource: { // DataSource
 * //           glueDataSource: { // GlueDataSource
 * //             tableName: "STRING_VALUE", // required
 * //             databaseName: "STRING_VALUE", // required
 * //             catalogId: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   status: "ACTIVE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTrainingDatasetCommandInput - {@link GetTrainingDatasetCommandInput}
 * @returns {@link GetTrainingDatasetCommandOutput}
 * @see {@link GetTrainingDatasetCommandInput} for command's `input` shape.
 * @see {@link GetTrainingDatasetCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class GetTrainingDatasetCommand extends $Command
  .classBuilder<
    GetTrainingDatasetCommandInput,
    GetTrainingDatasetCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "GetTrainingDataset", {})
  .n("CleanRoomsMLClient", "GetTrainingDatasetCommand")
  .sc(GetTrainingDataset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrainingDatasetRequest;
      output: GetTrainingDatasetResponse;
    };
    sdk: {
      input: GetTrainingDatasetCommandInput;
      output: GetTrainingDatasetCommandOutput;
    };
  };
}

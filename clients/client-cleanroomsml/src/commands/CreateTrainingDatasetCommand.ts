// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateTrainingDatasetRequest, CreateTrainingDatasetResponse } from "../models/models_0";
import { CreateTrainingDataset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTrainingDatasetCommand}.
 */
export interface CreateTrainingDatasetCommandInput extends CreateTrainingDatasetRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrainingDatasetCommand}.
 */
export interface CreateTrainingDatasetCommandOutput extends CreateTrainingDatasetResponse, __MetadataBearer {}

/**
 * <p>Defines the information necessary to create a training dataset. In Clean Rooms ML, the <code>TrainingDataset</code> is metadata that points to a Glue table, which is read only during <code>AudienceModel</code> creation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, CreateTrainingDatasetCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, CreateTrainingDatasetCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // CreateTrainingDatasetRequest
 *   name: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   trainingData: [ // DatasetList // required
 *     { // Dataset
 *       type: "INTERACTIONS", // required
 *       inputConfig: { // DatasetInputConfig
 *         schema: [ // DatasetSchemaList // required
 *           { // ColumnSchema
 *             columnName: "STRING_VALUE", // required
 *             columnTypes: [ // ColumnTypeList // required
 *               "USER_ID" || "ITEM_ID" || "TIMESTAMP" || "CATEGORICAL_FEATURE" || "NUMERICAL_FEATURE",
 *             ],
 *           },
 *         ],
 *         dataSource: { // DataSource
 *           glueDataSource: { // GlueDataSource
 *             tableName: "STRING_VALUE", // required
 *             databaseName: "STRING_VALUE", // required
 *             catalogId: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateTrainingDatasetCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrainingDatasetResponse
 * //   trainingDatasetArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTrainingDatasetCommandInput - {@link CreateTrainingDatasetCommandInput}
 * @returns {@link CreateTrainingDatasetCommandOutput}
 * @see {@link CreateTrainingDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateTrainingDatasetCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't complete this action because another resource depends on this resource.</p>
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
export class CreateTrainingDatasetCommand extends $Command
  .classBuilder<
    CreateTrainingDatasetCommandInput,
    CreateTrainingDatasetCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "CreateTrainingDataset", {})
  .n("CleanRoomsMLClient", "CreateTrainingDatasetCommand")
  .sc(CreateTrainingDataset$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrainingDatasetRequest;
      output: CreateTrainingDatasetResponse;
    };
    sdk: {
      input: CreateTrainingDatasetCommandInput;
      output: CreateTrainingDatasetCommandOutput;
    };
  };
}

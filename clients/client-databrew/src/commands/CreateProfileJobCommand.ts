// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateProfileJobRequest, CreateProfileJobResponse } from "../models/models_0";
import { CreateProfileJob } from "../schemas/schemas_2_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProfileJobCommand}.
 */
export interface CreateProfileJobCommandInput extends CreateProfileJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateProfileJobCommand}.
 */
export interface CreateProfileJobCommandOutput extends CreateProfileJobResponse, __MetadataBearer {}

/**
 * <p>Creates a new job to analyze a dataset and create its data profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateProfileJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateProfileJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // CreateProfileJobRequest
 *   DatasetName: "STRING_VALUE", // required
 *   EncryptionKeyArn: "STRING_VALUE",
 *   EncryptionMode: "SSE-KMS" || "SSE-S3",
 *   Name: "STRING_VALUE", // required
 *   LogSubscription: "ENABLE" || "DISABLE",
 *   MaxCapacity: Number("int"),
 *   MaxRetries: Number("int"),
 *   OutputLocation: { // S3Location
 *     Bucket: "STRING_VALUE", // required
 *     Key: "STRING_VALUE",
 *     BucketOwner: "STRING_VALUE",
 *   },
 *   Configuration: { // ProfileConfiguration
 *     DatasetStatisticsConfiguration: { // StatisticsConfiguration
 *       IncludedStatistics: [ // StatisticList
 *         "STRING_VALUE",
 *       ],
 *       Overrides: [ // StatisticOverrideList
 *         { // StatisticOverride
 *           Statistic: "STRING_VALUE", // required
 *           Parameters: { // ParameterMap // required
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       ],
 *     },
 *     ProfileColumns: [ // ColumnSelectorList
 *       { // ColumnSelector
 *         Regex: "STRING_VALUE",
 *         Name: "STRING_VALUE",
 *       },
 *     ],
 *     ColumnStatisticsConfigurations: [ // ColumnStatisticsConfigurationList
 *       { // ColumnStatisticsConfiguration
 *         Selectors: [
 *           {
 *             Regex: "STRING_VALUE",
 *             Name: "STRING_VALUE",
 *           },
 *         ],
 *         Statistics: {
 *           IncludedStatistics: [
 *             "STRING_VALUE",
 *           ],
 *           Overrides: [
 *             {
 *               Statistic: "STRING_VALUE", // required
 *               Parameters: { // required
 *                 "<keys>": "STRING_VALUE",
 *               },
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *     EntityDetectorConfiguration: { // EntityDetectorConfiguration
 *       EntityTypes: [ // EntityTypeList // required
 *         "STRING_VALUE",
 *       ],
 *       AllowedStatistics: [ // AllowedStatisticList
 *         { // AllowedStatistics
 *           Statistics: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *   },
 *   ValidationConfigurations: [ // ValidationConfigurationList
 *     { // ValidationConfiguration
 *       RulesetArn: "STRING_VALUE", // required
 *       ValidationMode: "CHECK_ALL",
 *     },
 *   ],
 *   RoleArn: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Timeout: Number("int"),
 *   JobSample: { // JobSample
 *     Mode: "FULL_DATASET" || "CUSTOM_ROWS",
 *     Size: Number("long"),
 *   },
 * };
 * const command = new CreateProfileJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateProfileJobResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateProfileJobCommandInput - {@link CreateProfileJobCommandInput}
 * @returns {@link CreateProfileJobCommandOutput}
 * @see {@link CreateProfileJobCommandInput} for command's `input` shape.
 * @see {@link CreateProfileJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the specified resource was denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota is exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 *
 * @public
 */
export class CreateProfileJobCommand extends $Command
  .classBuilder<
    CreateProfileJobCommandInput,
    CreateProfileJobCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "CreateProfileJob", {})
  .n("DataBrewClient", "CreateProfileJobCommand")
  .sc(CreateProfileJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProfileJobRequest;
      output: CreateProfileJobResponse;
    };
    sdk: {
      input: CreateProfileJobCommandInput;
      output: CreateProfileJobCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateProfileJobRequest, UpdateProfileJobResponse } from "../models/models_0";
import { UpdateProfileJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProfileJobCommand}.
 */
export interface UpdateProfileJobCommandInput extends UpdateProfileJobRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProfileJobCommand}.
 */
export interface UpdateProfileJobCommandOutput extends UpdateProfileJobResponse, __MetadataBearer {}

/**
 * <p>Modifies the definition of an existing profile job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateProfileJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateProfileJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // UpdateProfileJobRequest
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
 *   ValidationConfigurations: [ // ValidationConfigurationList
 *     { // ValidationConfiguration
 *       RulesetArn: "STRING_VALUE", // required
 *       ValidationMode: "CHECK_ALL",
 *     },
 *   ],
 *   RoleArn: "STRING_VALUE", // required
 *   Timeout: Number("int"),
 *   JobSample: { // JobSample
 *     Mode: "FULL_DATASET" || "CUSTOM_ROWS",
 *     Size: Number("long"),
 *   },
 * };
 * const command = new UpdateProfileJobCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProfileJobResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateProfileJobCommandInput - {@link UpdateProfileJobCommandInput}
 * @returns {@link UpdateProfileJobCommandOutput}
 * @see {@link UpdateProfileJobCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the specified resource was denied.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
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
export class UpdateProfileJobCommand extends $Command
  .classBuilder<
    UpdateProfileJobCommandInput,
    UpdateProfileJobCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "UpdateProfileJob", {})
  .n("DataBrewClient", "UpdateProfileJobCommand")
  .sc(UpdateProfileJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProfileJobRequest;
      output: UpdateProfileJobResponse;
    };
    sdk: {
      input: UpdateProfileJobCommandInput;
      output: UpdateProfileJobCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { ListSensorStatisticsRequest, ListSensorStatisticsResponse } from "../models/models_0";
import { ListSensorStatistics } from "../schemas/schemas_5_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSensorStatisticsCommand}.
 */
export interface ListSensorStatisticsCommandInput extends ListSensorStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link ListSensorStatisticsCommand}.
 */
export interface ListSensorStatisticsCommandOutput extends ListSensorStatisticsResponse, __MetadataBearer {}

/**
 * <p> Lists statistics about the data collected for each of the sensors that have been
 *          successfully ingested in the particular dataset. Can also be used to retreive Sensor
 *          Statistics for a previous ingestion job. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListSensorStatisticsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListSensorStatisticsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ListSensorStatisticsRequest
 *   DatasetName: "STRING_VALUE", // required
 *   IngestionJobId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSensorStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // ListSensorStatisticsResponse
 * //   SensorStatisticsSummaries: [ // SensorStatisticsSummaries
 * //     { // SensorStatisticsSummary
 * //       ComponentName: "STRING_VALUE",
 * //       SensorName: "STRING_VALUE",
 * //       DataExists: true || false,
 * //       MissingValues: { // CountPercent
 * //         Count: Number("int"), // required
 * //         Percentage: Number("float"), // required
 * //       },
 * //       InvalidValues: {
 * //         Count: Number("int"), // required
 * //         Percentage: Number("float"), // required
 * //       },
 * //       InvalidDateEntries: {
 * //         Count: Number("int"), // required
 * //         Percentage: Number("float"), // required
 * //       },
 * //       DuplicateTimestamps: {
 * //         Count: Number("int"), // required
 * //         Percentage: Number("float"), // required
 * //       },
 * //       CategoricalValues: { // CategoricalValues
 * //         Status: "POTENTIAL_ISSUE_DETECTED" || "NO_ISSUE_DETECTED", // required
 * //         NumberOfCategory: Number("int"),
 * //       },
 * //       MultipleOperatingModes: { // MultipleOperatingModes
 * //         Status: "POTENTIAL_ISSUE_DETECTED" || "NO_ISSUE_DETECTED", // required
 * //       },
 * //       LargeTimestampGaps: { // LargeTimestampGaps
 * //         Status: "POTENTIAL_ISSUE_DETECTED" || "NO_ISSUE_DETECTED", // required
 * //         NumberOfLargeTimestampGaps: Number("int"),
 * //         MaxTimestampGapInDays: Number("int"),
 * //       },
 * //       MonotonicValues: { // MonotonicValues
 * //         Status: "POTENTIAL_ISSUE_DETECTED" || "NO_ISSUE_DETECTED", // required
 * //         Monotonicity: "DECREASING" || "INCREASING" || "STATIC",
 * //       },
 * //       DataStartTime: new Date("TIMESTAMP"),
 * //       DataEndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSensorStatisticsCommandInput - {@link ListSensorStatisticsCommandInput}
 * @returns {@link ListSensorStatisticsCommandOutput}
 * @see {@link ListSensorStatisticsCommandInput} for command's `input` shape.
 * @see {@link ListSensorStatisticsCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource requested could not be found. Verify the resource ID and retry your
 *          request. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services
 *          service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 *
 * @public
 */
export class ListSensorStatisticsCommand extends $Command
  .classBuilder<
    ListSensorStatisticsCommandInput,
    ListSensorStatisticsCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "ListSensorStatistics", {})
  .n("LookoutEquipmentClient", "ListSensorStatisticsCommand")
  .sc(ListSensorStatistics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSensorStatisticsRequest;
      output: ListSensorStatisticsResponse;
    };
    sdk: {
      input: ListSensorStatisticsCommandInput;
      output: ListSensorStatisticsCommandOutput;
    };
  };
}

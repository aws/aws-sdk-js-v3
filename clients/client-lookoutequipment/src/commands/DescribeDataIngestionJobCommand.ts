// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { DescribeDataIngestionJobRequest, DescribeDataIngestionJobResponse } from "../models/models_0";
import { de_DescribeDataIngestionJobCommand, se_DescribeDataIngestionJobCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDataIngestionJobCommand}.
 */
export interface DescribeDataIngestionJobCommandInput extends DescribeDataIngestionJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDataIngestionJobCommand}.
 */
export interface DescribeDataIngestionJobCommandOutput extends DescribeDataIngestionJobResponse, __MetadataBearer {}

/**
 * <p>Provides information on a specific data ingestion job such as creation time, dataset
 *          ARN, and status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeDataIngestionJobCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeDataIngestionJobCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // DescribeDataIngestionJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDataIngestionJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataIngestionJobResponse
 * //   JobId: "STRING_VALUE",
 * //   DatasetArn: "STRING_VALUE",
 * //   IngestionInputConfiguration: { // IngestionInputConfiguration
 * //     S3InputConfiguration: { // IngestionS3InputConfiguration
 * //       Bucket: "STRING_VALUE", // required
 * //       Prefix: "STRING_VALUE",
 * //       KeyPattern: "STRING_VALUE",
 * //     },
 * //   },
 * //   RoleArn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   Status: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "IMPORT_IN_PROGRESS",
 * //   FailedReason: "STRING_VALUE",
 * //   DataQualitySummary: { // DataQualitySummary
 * //     InsufficientSensorData: { // InsufficientSensorData
 * //       MissingCompleteSensorData: { // MissingCompleteSensorData
 * //         AffectedSensorCount: Number("int"), // required
 * //       },
 * //       SensorsWithShortDateRange: { // SensorsWithShortDateRange
 * //         AffectedSensorCount: Number("int"), // required
 * //       },
 * //     },
 * //     MissingSensorData: { // MissingSensorData
 * //       AffectedSensorCount: Number("int"), // required
 * //       TotalNumberOfMissingValues: Number("int"), // required
 * //     },
 * //     InvalidSensorData: { // InvalidSensorData
 * //       AffectedSensorCount: Number("int"), // required
 * //       TotalNumberOfInvalidValues: Number("int"), // required
 * //     },
 * //     UnsupportedTimestamps: { // UnsupportedTimestamps
 * //       TotalNumberOfUnsupportedTimestamps: Number("int"), // required
 * //     },
 * //     DuplicateTimestamps: { // DuplicateTimestamps
 * //       TotalNumberOfDuplicateTimestamps: Number("int"), // required
 * //     },
 * //   },
 * //   IngestedFilesSummary: { // IngestedFilesSummary
 * //     TotalNumberOfFiles: Number("int"), // required
 * //     IngestedNumberOfFiles: Number("int"), // required
 * //     DiscardedFiles: [ // ListOfDiscardedFiles
 * //       { // S3Object
 * //         Bucket: "STRING_VALUE", // required
 * //         Key: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   StatusDetail: "STRING_VALUE",
 * //   IngestedDataSize: Number("long"),
 * //   DataStartTime: new Date("TIMESTAMP"),
 * //   DataEndTime: new Date("TIMESTAMP"),
 * //   SourceDatasetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDataIngestionJobCommandInput - {@link DescribeDataIngestionJobCommandInput}
 * @returns {@link DescribeDataIngestionJobCommandOutput}
 * @see {@link DescribeDataIngestionJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDataIngestionJobCommandOutput} for command's `response` shape.
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
export class DescribeDataIngestionJobCommand extends $Command
  .classBuilder<
    DescribeDataIngestionJobCommandInput,
    DescribeDataIngestionJobCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLookoutEquipmentFrontendService", "DescribeDataIngestionJob", {})
  .n("LookoutEquipmentClient", "DescribeDataIngestionJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDataIngestionJobCommand)
  .de(de_DescribeDataIngestionJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDataIngestionJobRequest;
      output: DescribeDataIngestionJobResponse;
    };
    sdk: {
      input: DescribeDataIngestionJobCommandInput;
      output: DescribeDataIngestionJobCommandOutput;
    };
  };
}

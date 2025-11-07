// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { DescribeDatasetRequest, DescribeDatasetResponse } from "../models/models_0";
import { DescribeDataset } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDatasetCommand}.
 */
export interface DescribeDatasetCommandInput extends DescribeDatasetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDatasetCommand}.
 */
export interface DescribeDatasetCommandOutput extends DescribeDatasetResponse, __MetadataBearer {}

/**
 * <p>Provides a JSON description of the data in each time series dataset, including names,
 *          column names, and data types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeDatasetCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeDatasetCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // DescribeDatasetRequest
 *   DatasetName: "STRING_VALUE", // required
 * };
 * const command = new DescribeDatasetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDatasetResponse
 * //   DatasetName: "STRING_VALUE",
 * //   DatasetArn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Status: "CREATED" || "INGESTION_IN_PROGRESS" || "ACTIVE" || "IMPORT_IN_PROGRESS",
 * //   Schema: "STRING_VALUE",
 * //   ServerSideKmsKeyId: "STRING_VALUE",
 * //   IngestionInputConfiguration: { // IngestionInputConfiguration
 * //     S3InputConfiguration: { // IngestionS3InputConfiguration
 * //       Bucket: "STRING_VALUE", // required
 * //       Prefix: "STRING_VALUE",
 * //       KeyPattern: "STRING_VALUE",
 * //     },
 * //   },
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
 * //   RoleArn: "STRING_VALUE",
 * //   DataStartTime: new Date("TIMESTAMP"),
 * //   DataEndTime: new Date("TIMESTAMP"),
 * //   SourceDatasetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDatasetCommandInput - {@link DescribeDatasetCommandInput}
 * @returns {@link DescribeDatasetCommandOutput}
 * @see {@link DescribeDatasetCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetCommandOutput} for command's `response` shape.
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
export class DescribeDatasetCommand extends $Command
  .classBuilder<
    DescribeDatasetCommandInput,
    DescribeDatasetCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "DescribeDataset", {})
  .n("LookoutEquipmentClient", "DescribeDatasetCommand")
  .sc(DescribeDataset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDatasetRequest;
      output: DescribeDatasetResponse;
    };
    sdk: {
      input: DescribeDatasetCommandInput;
      output: DescribeDatasetCommandOutput;
    };
  };
}

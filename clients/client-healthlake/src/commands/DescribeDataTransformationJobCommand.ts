// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDataTransformationJobRequest, DescribeDataTransformationJobResponse } from "../models/models_0";
import { DescribeDataTransformationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDataTransformationJobCommand}.
 */
export interface DescribeDataTransformationJobCommandInput extends DescribeDataTransformationJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDataTransformationJobCommand}.
 */
export interface DescribeDataTransformationJobCommandOutput extends DescribeDataTransformationJobResponse, __MetadataBearer {}

/**
 * <p>Describes a data transformation job, including its current status, configuration, and progress information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DescribeDataTransformationJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DescribeDataTransformationJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // DescribeDataTransformationJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDataTransformationJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataTransformationJobResponse
 * //   TransformationJobProperties: { // TransformationJobProperties
 * //     JobId: "STRING_VALUE", // required
 * //     JobStatus: "SUBMITTED" || "QUEUED" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "FAILED", // required
 * //     InputDataConfig: { // TransformationInputDataConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //       SourceFormat: "CCDA" || "CSV",
 * //     },
 * //     OutputDataConfig: { // TransformationOutputDataConfig
 * //       S3Configuration: { // DataTransformationS3Configuration
 * //         S3Uri: "STRING_VALUE", // required
 * //         KmsKeyId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     DataAccessRoleArn: "STRING_VALUE", // required
 * //     SubmitTime: new Date("TIMESTAMP"), // required
 * //     JobName: "STRING_VALUE",
 * //     ProfileId: "STRING_VALUE",
 * //     ProfileName: "STRING_VALUE",
 * //     ProfileVersion: Number("int"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     DriftDetectionEnabled: true || false,
 * //     ProvenanceEnabled: true || false,
 * //     Message: "STRING_VALUE",
 * //     JobProgressReport: { // TransformationJobProgressReport
 * //       TotalFilesScanned: Number("long"), // required
 * //       TotalFilesConverted: Number("long"), // required
 * //       TotalFilesFailed: Number("long"), // required
 * //       TotalResourcesGenerated: Number("long"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDataTransformationJobCommandInput - {@link DescribeDataTransformationJobCommandInput}
 * @returns {@link DescribeDataTransformationJobCommandOutput}
 * @see {@link DescribeDataTransformationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDataTransformationJobCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied. Your account is not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested data store was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input parameter was invalid.</p>
 *
 * @throws {@link HealthLakeServiceException}
 * <p>Base exception class for all service exceptions from HealthLake service.</p>
 *
 *
 * @public
 */
export class DescribeDataTransformationJobCommand extends command<DescribeDataTransformationJobCommandInput, DescribeDataTransformationJobCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDataTransformationJob",
  DescribeDataTransformationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDataTransformationJobRequest;
      output: DescribeDataTransformationJobResponse;
    };
    sdk: {
      input: DescribeDataTransformationJobCommandInput;
      output: DescribeDataTransformationJobCommandOutput;
    };
  };
}

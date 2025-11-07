// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { DescribeFHIRImportJobRequest, DescribeFHIRImportJobResponse } from "../models/models_0";
import { DescribeFHIRImportJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFHIRImportJobCommand}.
 */
export interface DescribeFHIRImportJobCommandInput extends DescribeFHIRImportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFHIRImportJobCommand}.
 */
export interface DescribeFHIRImportJobCommandOutput extends DescribeFHIRImportJobResponse, __MetadataBearer {}

/**
 * <p>Get the import job properties to learn more about the job or job progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DescribeFHIRImportJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DescribeFHIRImportJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // DescribeFHIRImportJobRequest
 *   DatastoreId: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeFHIRImportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFHIRImportJobResponse
 * //   ImportJobProperties: { // ImportJobProperties
 * //     JobId: "STRING_VALUE", // required
 * //     JobName: "STRING_VALUE",
 * //     JobStatus: "SUBMITTED" || "QUEUED" || "IN_PROGRESS" || "COMPLETED_WITH_ERRORS" || "COMPLETED" || "FAILED" || "CANCEL_SUBMITTED" || "CANCEL_IN_PROGRESS" || "CANCEL_COMPLETED" || "CANCEL_FAILED", // required
 * //     SubmitTime: new Date("TIMESTAMP"), // required
 * //     EndTime: new Date("TIMESTAMP"),
 * //     DatastoreId: "STRING_VALUE", // required
 * //     InputDataConfig: { // InputDataConfig Union: only one key present
 * //       S3Uri: "STRING_VALUE",
 * //     },
 * //     JobOutputDataConfig: { // OutputDataConfig Union: only one key present
 * //       S3Configuration: { // S3Configuration
 * //         S3Uri: "STRING_VALUE", // required
 * //         KmsKeyId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     JobProgressReport: { // JobProgressReport
 * //       TotalNumberOfScannedFiles: Number("long"),
 * //       TotalSizeOfScannedFilesInMB: Number("double"),
 * //       TotalNumberOfImportedFiles: Number("long"),
 * //       TotalNumberOfResourcesScanned: Number("long"),
 * //       TotalNumberOfResourcesImported: Number("long"),
 * //       TotalNumberOfResourcesWithCustomerError: Number("long"),
 * //       TotalNumberOfFilesReadWithCustomerError: Number("long"),
 * //       Throughput: Number("double"),
 * //     },
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //     ValidationLevel: "strict" || "structure-only" || "minimal",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFHIRImportJobCommandInput - {@link DescribeFHIRImportJobCommandInput}
 * @returns {@link DescribeFHIRImportJobCommandOutput}
 * @see {@link DescribeFHIRImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeFHIRImportJobCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
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
export class DescribeFHIRImportJobCommand extends $Command
  .classBuilder<
    DescribeFHIRImportJobCommandInput,
    DescribeFHIRImportJobCommandOutput,
    HealthLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: HealthLakeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("HealthLake", "DescribeFHIRImportJob", {})
  .n("HealthLakeClient", "DescribeFHIRImportJobCommand")
  .sc(DescribeFHIRImportJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFHIRImportJobRequest;
      output: DescribeFHIRImportJobResponse;
    };
    sdk: {
      input: DescribeFHIRImportJobCommandInput;
      output: DescribeFHIRImportJobCommandOutput;
    };
  };
}

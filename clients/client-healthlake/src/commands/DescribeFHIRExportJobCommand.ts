// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeFHIRExportJobRequest, DescribeFHIRExportJobResponse } from "../models/models_0";
import { DescribeFHIRExportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeFHIRExportJobCommand}.
 */
export interface DescribeFHIRExportJobCommandInput extends DescribeFHIRExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFHIRExportJobCommand}.
 */
export interface DescribeFHIRExportJobCommandOutput extends DescribeFHIRExportJobResponse, __MetadataBearer {}

/**
 * Get FHIR export job properties.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DescribeFHIRExportJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DescribeFHIRExportJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // DescribeFHIRExportJobRequest
 *   DatastoreId: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeFHIRExportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFHIRExportJobResponse
 * //   ExportJobProperties: { // ExportJobProperties
 * //     JobId: "STRING_VALUE", // required
 * //     JobName: "STRING_VALUE",
 * //     JobStatus: "SUBMITTED" || "QUEUED" || "IN_PROGRESS" || "COMPLETED_WITH_ERRORS" || "COMPLETED" || "FAILED" || "CANCEL_SUBMITTED" || "CANCEL_IN_PROGRESS" || "CANCEL_COMPLETED" || "CANCEL_FAILED", // required
 * //     SubmitTime: new Date("TIMESTAMP"), // required
 * //     EndTime: new Date("TIMESTAMP"),
 * //     DatastoreId: "STRING_VALUE", // required
 * //     OutputDataConfig: { // OutputDataConfig Union: only one key present
 * //       S3Configuration: { // S3Configuration
 * //         S3Uri: "STRING_VALUE", // required
 * //         KmsKeyId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFHIRExportJobCommandInput - {@link DescribeFHIRExportJobCommandInput}
 * @returns {@link DescribeFHIRExportJobCommandOutput}
 * @see {@link DescribeFHIRExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeFHIRExportJobCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unknown internal error occurred in the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested data store was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The user has exceeded their maximum number of allowed calls to the given API.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input parameter was invalid.
 *
 * @throws {@link HealthLakeServiceException}
 *
 * Base exception class for all service exceptions from HealthLake service.
 *
 * @public
 */
export class DescribeFHIRExportJobCommand extends command<DescribeFHIRExportJobCommandInput, DescribeFHIRExportJobCommandOutput>(
  _ep0,
  _mw0,
  "DescribeFHIRExportJob",
  DescribeFHIRExportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFHIRExportJobRequest;
      output: DescribeFHIRExportJobResponse;
    };
    sdk: {
      input: DescribeFHIRExportJobCommandInput;
      output: DescribeFHIRExportJobCommandOutput;
    };
  };
}

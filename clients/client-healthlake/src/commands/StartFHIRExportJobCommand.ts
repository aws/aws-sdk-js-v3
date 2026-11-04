// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartFHIRExportJobRequest, StartFHIRExportJobResponse } from "../models/models_0";
import { StartFHIRExportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartFHIRExportJobCommand}.
 */
export interface StartFHIRExportJobCommandInput extends StartFHIRExportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartFHIRExportJobCommand}.
 */
export interface StartFHIRExportJobCommandOutput extends StartFHIRExportJobResponse, __MetadataBearer {}

/**
 * Start a FHIR export job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, StartFHIRExportJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, StartFHIRExportJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // StartFHIRExportJobRequest
 *   JobName: "STRING_VALUE",
 *   OutputDataConfig: { // OutputDataConfig Union: only one key present
 *     S3Configuration: { // S3Configuration
 *       S3Uri: "STRING_VALUE", // required
 *       KmsKeyId: "STRING_VALUE", // required
 *     },
 *   },
 *   DatastoreId: "STRING_VALUE", // required
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new StartFHIRExportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartFHIRExportJobResponse
 * //   JobId: "STRING_VALUE", // required
 * //   JobStatus: "SUBMITTED" || "QUEUED" || "IN_PROGRESS" || "COMPLETED_WITH_ERRORS" || "COMPLETED" || "FAILED" || "CANCEL_SUBMITTED" || "CANCEL_IN_PROGRESS" || "CANCEL_COMPLETED" || "CANCEL_FAILED", // required
 * //   DatastoreId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartFHIRExportJobCommandInput - {@link StartFHIRExportJobCommandInput}
 * @returns {@link StartFHIRExportJobCommandOutput}
 * @see {@link StartFHIRExportJobCommandInput} for command's `input` shape.
 * @see {@link StartFHIRExportJobCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied. Your account is not authorized to perform this operation.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *
 * A dependent service failed to fulfill the request.
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
export class StartFHIRExportJobCommand extends command<StartFHIRExportJobCommandInput, StartFHIRExportJobCommandOutput>(
  _ep0,
  _mw0,
  "StartFHIRExportJob",
  StartFHIRExportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFHIRExportJobRequest;
      output: StartFHIRExportJobResponse;
    };
    sdk: {
      input: StartFHIRExportJobCommandInput;
      output: StartFHIRExportJobCommandOutput;
    };
  };
}

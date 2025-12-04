// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import type { StartFHIRImportJobRequest, StartFHIRImportJobResponse } from "../models/models_0";
import { StartFHIRImportJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartFHIRImportJobCommand}.
 */
export interface StartFHIRImportJobCommandInput extends StartFHIRImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartFHIRImportJobCommand}.
 */
export interface StartFHIRImportJobCommandOutput extends StartFHIRImportJobResponse, __MetadataBearer {}

/**
 * <p>Start importing bulk FHIR data into an ACTIVE data store. The import job imports FHIR
 *          data found in the <code>InputDataConfig</code> object and stores processing results in the
 *             <code>JobOutputDataConfig</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, StartFHIRImportJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, StartFHIRImportJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // StartFHIRImportJobRequest
 *   JobName: "STRING_VALUE",
 *   InputDataConfig: { // InputDataConfig Union: only one key present
 *     S3Uri: "STRING_VALUE",
 *   },
 *   JobOutputDataConfig: { // OutputDataConfig Union: only one key present
 *     S3Configuration: { // S3Configuration
 *       S3Uri: "STRING_VALUE", // required
 *       KmsKeyId: "STRING_VALUE", // required
 *     },
 *   },
 *   DatastoreId: "STRING_VALUE", // required
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   ValidationLevel: "strict" || "structure-only" || "minimal",
 * };
 * const command = new StartFHIRImportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartFHIRImportJobResponse
 * //   JobId: "STRING_VALUE", // required
 * //   JobStatus: "SUBMITTED" || "QUEUED" || "IN_PROGRESS" || "COMPLETED_WITH_ERRORS" || "COMPLETED" || "FAILED" || "CANCEL_SUBMITTED" || "CANCEL_IN_PROGRESS" || "CANCEL_COMPLETED" || "CANCEL_FAILED", // required
 * //   DatastoreId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartFHIRImportJobCommandInput - {@link StartFHIRImportJobCommandInput}
 * @returns {@link StartFHIRImportJobCommandOutput}
 * @see {@link StartFHIRImportJobCommandInput} for command's `input` shape.
 * @see {@link StartFHIRImportJobCommandOutput} for command's `response` shape.
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
export class StartFHIRImportJobCommand extends $Command
  .classBuilder<
    StartFHIRImportJobCommandInput,
    StartFHIRImportJobCommandOutput,
    HealthLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: HealthLakeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("HealthLake", "StartFHIRImportJob", {})
  .n("HealthLakeClient", "StartFHIRImportJobCommand")
  .sc(StartFHIRImportJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFHIRImportJobRequest;
      output: StartFHIRImportJobResponse;
    };
    sdk: {
      input: StartFHIRImportJobCommandInput;
      output: StartFHIRImportJobCommandOutput;
    };
  };
}

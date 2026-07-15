// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDataTransformationJobRequest, StartDataTransformationJobResponse } from "../models/models_0";
import { StartDataTransformationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartDataTransformationJobCommand}.
 */
export interface StartDataTransformationJobCommandInput extends StartDataTransformationJobRequest {}
/**
 * @public
 *
 * The output of {@link StartDataTransformationJobCommand}.
 */
export interface StartDataTransformationJobCommandOutput extends StartDataTransformationJobResponse, __MetadataBearer {}

/**
 * <p>Starts an asynchronous data transformation job that converts source files from Amazon Simple Storage Service (Amazon S3) and writes the output to Amazon S3 or AWS HealthLake.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, StartDataTransformationJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, StartDataTransformationJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // StartDataTransformationJobRequest
 *   InputDataConfig: { // TransformationInputDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *     SourceFormat: "CCDA" || "CSV",
 *   },
 *   OutputDataConfig: { // TransformationOutputDataConfig
 *     S3Configuration: { // DataTransformationS3Configuration
 *       S3Uri: "STRING_VALUE", // required
 *       KmsKeyId: "STRING_VALUE", // required
 *     },
 *   },
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   JobName: "STRING_VALUE",
 *   ProfileId: "STRING_VALUE", // required
 *   DriftDetectionEnabled: true || false,
 *   ProvenanceEnabled: true || false,
 * };
 * const command = new StartDataTransformationJobCommand(input);
 * const response = await client.send(command);
 * // { // StartDataTransformationJobResponse
 * //   JobId: "STRING_VALUE", // required
 * //   JobStatus: "SUBMITTED" || "QUEUED" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "FAILED", // required
 * // };
 *
 * ```
 *
 * @param StartDataTransformationJobCommandInput - {@link StartDataTransformationJobCommandInput}
 * @returns {@link StartDataTransformationJobCommandOutput}
 * @see {@link StartDataTransformationJobCommandInput} for command's `input` shape.
 * @see {@link StartDataTransformationJobCommandOutput} for command's `response` shape.
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
export class StartDataTransformationJobCommand extends command<StartDataTransformationJobCommandInput, StartDataTransformationJobCommandOutput>(
  _ep0,
  _mw0,
  "StartDataTransformationJob",
  StartDataTransformationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDataTransformationJobRequest;
      output: StartDataTransformationJobResponse;
    };
    sdk: {
      input: StartDataTransformationJobCommandInput;
      output: StartDataTransformationJobCommandOutput;
    };
  };
}

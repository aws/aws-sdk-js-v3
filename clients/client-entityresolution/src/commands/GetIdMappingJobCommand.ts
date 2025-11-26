// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  EntityResolutionClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EntityResolutionClient";
import type { GetIdMappingJobInput, GetIdMappingJobOutput } from "../models/models_0";
import { GetIdMappingJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIdMappingJobCommand}.
 */
export interface GetIdMappingJobCommandInput extends GetIdMappingJobInput {}
/**
 * @public
 *
 * The output of {@link GetIdMappingJobCommand}.
 */
export interface GetIdMappingJobCommandOutput extends GetIdMappingJobOutput, __MetadataBearer {}

/**
 * <p>Returns the status, metrics, and errors (if there are any) that are associated with a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GetIdMappingJobCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GetIdMappingJobCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // GetIdMappingJobInput
 *   workflowName: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetIdMappingJobCommand(input);
 * const response = await client.send(command);
 * // { // GetIdMappingJobOutput
 * //   jobId: "STRING_VALUE", // required
 * //   status: "RUNNING" || "SUCCEEDED" || "FAILED" || "QUEUED", // required
 * //   startTime: new Date("TIMESTAMP"), // required
 * //   endTime: new Date("TIMESTAMP"),
 * //   metrics: { // IdMappingJobMetrics
 * //     inputRecords: Number("int"),
 * //     totalRecordsProcessed: Number("int"),
 * //     recordsNotProcessed: Number("int"),
 * //     deleteRecordsProcessed: Number("int"),
 * //     totalMappedRecords: Number("int"),
 * //     totalMappedSourceRecords: Number("int"),
 * //     totalMappedTargetRecords: Number("int"),
 * //     uniqueRecordsLoaded: Number("int"),
 * //     newMappedRecords: Number("int"),
 * //     newMappedSourceRecords: Number("int"),
 * //     newMappedTargetRecords: Number("int"),
 * //     newUniqueRecordsLoaded: Number("int"),
 * //     mappedRecordsRemoved: Number("int"),
 * //     mappedSourceRecordsRemoved: Number("int"),
 * //     mappedTargetRecordsRemoved: Number("int"),
 * //   },
 * //   errorDetails: { // ErrorDetails
 * //     errorMessage: "STRING_VALUE",
 * //   },
 * //   outputSourceConfig: [ // IdMappingJobOutputSourceConfig
 * //     { // IdMappingJobOutputSource
 * //       roleArn: "STRING_VALUE", // required
 * //       outputS3Path: "STRING_VALUE", // required
 * //       KMSArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   jobType: "BATCH" || "INCREMENTAL" || "DELETE_ONLY",
 * // };
 *
 * ```
 *
 * @param GetIdMappingJobCommandInput - {@link GetIdMappingJobCommandInput}
 * @returns {@link GetIdMappingJobCommandOutput}
 * @see {@link GetIdMappingJobCommandInput} for command's `input` shape.
 * @see {@link GetIdMappingJobCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 *
 * @public
 */
export class GetIdMappingJobCommand extends $Command
  .classBuilder<
    GetIdMappingJobCommandInput,
    GetIdMappingJobCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSVeniceService", "GetIdMappingJob", {})
  .n("EntityResolutionClient", "GetIdMappingJobCommand")
  .sc(GetIdMappingJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIdMappingJobInput;
      output: GetIdMappingJobOutput;
    };
    sdk: {
      input: GetIdMappingJobCommandInput;
      output: GetIdMappingJobCommandOutput;
    };
  };
}

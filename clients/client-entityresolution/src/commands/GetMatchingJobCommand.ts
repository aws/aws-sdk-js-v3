// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMatchingJobInput, GetMatchingJobOutput } from "../models/models_0";
import { GetMatchingJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMatchingJobCommand}.
 */
export interface GetMatchingJobCommandInput extends GetMatchingJobInput {}
/**
 * @public
 *
 * The output of {@link GetMatchingJobCommand}.
 */
export interface GetMatchingJobCommandOutput extends GetMatchingJobOutput, __MetadataBearer {}

/**
 * Returns the status, metrics, and errors (if there are any) that are associated with a job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GetMatchingJobCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GetMatchingJobCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // GetMatchingJobInput
 *   workflowName: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetMatchingJobCommand(input);
 * const response = await client.send(command);
 * // { // GetMatchingJobOutput
 * //   jobId: "STRING_VALUE", // required
 * //   status: "RUNNING" || "SUCCEEDED" || "FAILED" || "QUEUED", // required
 * //   startTime: new Date("TIMESTAMP"), // required
 * //   endTime: new Date("TIMESTAMP"),
 * //   metrics: { // JobMetrics
 * //     inputRecords: Number("int"),
 * //     totalRecordsProcessed: Number("int"),
 * //     recordsNotProcessed: Number("int"),
 * //     deleteRecordsProcessed: Number("int"),
 * //     matchIDs: Number("int"),
 * //   },
 * //   errorDetails: { // ErrorDetails
 * //     errorMessage: "STRING_VALUE",
 * //   },
 * //   outputSourceConfig: [ // JobOutputSourceConfig
 * //     { // JobOutputSource
 * //       roleArn: "STRING_VALUE", // required
 * //       outputS3Path: "STRING_VALUE", // required
 * //       KMSArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMatchingJobCommandInput - {@link GetMatchingJobCommandInput}
 * @returns {@link GetMatchingJobCommandOutput}
 * @see {@link GetMatchingJobCommandInput} for command's `input` shape.
 * @see {@link GetMatchingJobCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Entity Resolution service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Entity Resolution.
 *
 * @throws {@link EntityResolutionServiceException}
 *
 * Base exception class for all service exceptions from EntityResolution service.
 *
 * @public
 */
export class GetMatchingJobCommand extends command<GetMatchingJobCommandInput, GetMatchingJobCommandOutput>(
  _ep0,
  _mw0,
  "GetMatchingJob",
  GetMatchingJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMatchingJobInput;
      output: GetMatchingJobOutput;
    };
    sdk: {
      input: GetMatchingJobCommandInput;
      output: GetMatchingJobCommandOutput;
    };
  };
}

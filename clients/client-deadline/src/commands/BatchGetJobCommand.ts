// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetJobRequest, BatchGetJobResponse } from "../models/models_0";
import { BatchGetJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetJobCommand}.
 */
export interface BatchGetJobCommandInput extends BatchGetJobRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetJobCommand}.
 */
export interface BatchGetJobCommandOutput extends BatchGetJobResponse, __MetadataBearer {}

/**
 * <p>Retrieves multiple jobs in a single request. This is a batch version of the <code>GetJob</code> API.</p> <p>The result of getting each job is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, BatchGetJobCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, BatchGetJobCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // BatchGetJobRequest
 *   identifiers: [ // BatchGetJobIdentifiers // required
 *     { // BatchGetJobIdentifier
 *       farmId: "STRING_VALUE", // required
 *       queueId: "STRING_VALUE", // required
 *       jobId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetJobCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetJobResponse
 * //   jobs: [ // BatchGetJobItems // required
 * //     { // BatchGetJobItem
 * //       farmId: "STRING_VALUE", // required
 * //       queueId: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       lifecycleStatus: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATE_COMPLETE" || "UPLOAD_IN_PROGRESS" || "UPLOAD_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "UPDATE_SUCCEEDED" || "ARCHIVED", // required
 * //       lifecycleStatusMessage: "STRING_VALUE", // required
 * //       priority: Number("int"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       createdBy: "STRING_VALUE", // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       startedAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //       taskRunStatus: "PENDING" || "READY" || "ASSIGNED" || "STARTING" || "SCHEDULED" || "INTERRUPTING" || "RUNNING" || "SUSPENDED" || "CANCELED" || "FAILED" || "SUCCEEDED" || "NOT_COMPATIBLE",
 * //       targetTaskRunStatus: "READY" || "FAILED" || "SUCCEEDED" || "CANCELED" || "SUSPENDED" || "PENDING",
 * //       taskRunStatusCounts: { // TaskRunStatusCounts
 * //         "<keys>": Number("int"),
 * //       },
 * //       taskFailureRetryCount: Number("int"),
 * //       storageProfileId: "STRING_VALUE",
 * //       maxFailedTasksCount: Number("int"),
 * //       maxRetriesPerTask: Number("int"),
 * //       parameters: { // JobParameters
 * //         "<keys>": { // JobParameter Union: only one key present
 * //           int: "STRING_VALUE",
 * //           float: "STRING_VALUE",
 * //           string: "STRING_VALUE",
 * //           path: "STRING_VALUE",
 * //         },
 * //       },
 * //       attachments: { // Attachments
 * //         manifests: [ // ManifestPropertiesList // required
 * //           { // ManifestProperties
 * //             fileSystemLocationName: "STRING_VALUE",
 * //             rootPath: "STRING_VALUE", // required
 * //             rootPathFormat: "windows" || "posix", // required
 * //             outputRelativeDirectories: [ // OutputRelativeDirectoriesList
 * //               "STRING_VALUE",
 * //             ],
 * //             inputManifestPath: "STRING_VALUE",
 * //             inputManifestHash: "STRING_VALUE",
 * //           },
 * //         ],
 * //         fileSystem: "COPIED" || "VIRTUAL",
 * //       },
 * //       description: "STRING_VALUE",
 * //       maxWorkerCount: Number("int"),
 * //       sourceJobId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   errors: [ // BatchGetJobErrors // required
 * //     { // BatchGetJobError
 * //       farmId: "STRING_VALUE", // required
 * //       queueId: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       code: "InternalServerErrorException" || "ResourceNotFoundException" || "ValidationException" || "AccessDeniedException" || "ThrottlingException", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetJobCommandInput - {@link BatchGetJobCommandInput}
 * @returns {@link BatchGetJobCommandOutput}
 * @see {@link BatchGetJobCommandInput} for command's `input` shape.
 * @see {@link BatchGetJobCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @example Get multiple jobs in a single request
 * ```javascript
 * //
 * const input = {
 *   identifiers: [
 *     {
 *       farmId: "farm-1234567890abcdef1234567890abcdef",
 *       jobId: "job-1234567890abcdef1234567890abcdef",
 *       queueId: "queue-1234567890abcdef1234567890abcdef"
 *     },
 *     {
 *       farmId: "farm-1234567890abcdef1234567890abcdef",
 *       jobId: "job-234567890abcdef1234567890abcdef1",
 *       queueId: "queue-1234567890abcdef1234567890abcdef"
 *     }
 *   ]
 * };
 * const command = new BatchGetJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class BatchGetJobCommand extends command<BatchGetJobCommandInput, BatchGetJobCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetJob",
  BatchGetJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetJobRequest;
      output: BatchGetJobResponse;
    };
    sdk: {
      input: BatchGetJobCommandInput;
      output: BatchGetJobCommandOutput;
    };
  };
}

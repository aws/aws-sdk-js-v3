// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetJobRequest, GetJobResponse } from "../models/models_0";
import { GetJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJobCommand}.
 */
export interface GetJobCommandInput extends GetJobRequest {}
/**
 * @public
 *
 * The output of {@link GetJobCommand}.
 */
export interface GetJobCommandOutput extends GetJobResponse, __MetadataBearer {}

/**
 * <p>Gets a Deadline Cloud job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetJobCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetJobCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // GetJobRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetJobCommand(input);
 * const response = await client.send(command);
 * // { // GetJobResponse
 * //   jobId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   lifecycleStatus: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATE_COMPLETE" || "UPLOAD_IN_PROGRESS" || "UPLOAD_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "UPDATE_SUCCEEDED" || "ARCHIVED", // required
 * //   lifecycleStatusMessage: "STRING_VALUE", // required
 * //   priority: Number("int"), // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   startedAt: new Date("TIMESTAMP"),
 * //   endedAt: new Date("TIMESTAMP"),
 * //   taskRunStatus: "PENDING" || "READY" || "ASSIGNED" || "STARTING" || "SCHEDULED" || "INTERRUPTING" || "RUNNING" || "SUSPENDED" || "CANCELED" || "FAILED" || "SUCCEEDED" || "NOT_COMPATIBLE",
 * //   targetTaskRunStatus: "READY" || "FAILED" || "SUCCEEDED" || "CANCELED" || "SUSPENDED" || "PENDING",
 * //   taskRunStatusCounts: { // TaskRunStatusCounts
 * //     "<keys>": Number("int"),
 * //   },
 * //   taskFailureRetryCount: Number("int"),
 * //   storageProfileId: "STRING_VALUE",
 * //   maxFailedTasksCount: Number("int"),
 * //   maxRetriesPerTask: Number("int"),
 * //   parameters: { // JobParameters
 * //     "<keys>": { // JobParameter Union: only one key present
 * //       int: "STRING_VALUE",
 * //       float: "STRING_VALUE",
 * //       string: "STRING_VALUE",
 * //       path: "STRING_VALUE",
 * //     },
 * //   },
 * //   attachments: { // Attachments
 * //     manifests: [ // ManifestPropertiesList // required
 * //       { // ManifestProperties
 * //         fileSystemLocationName: "STRING_VALUE",
 * //         rootPath: "STRING_VALUE", // required
 * //         rootPathFormat: "windows" || "posix", // required
 * //         outputRelativeDirectories: [ // OutputRelativeDirectoriesList
 * //           "STRING_VALUE",
 * //         ],
 * //         inputManifestPath: "STRING_VALUE",
 * //         inputManifestHash: "STRING_VALUE",
 * //       },
 * //     ],
 * //     fileSystem: "COPIED" || "VIRTUAL",
 * //   },
 * //   description: "STRING_VALUE",
 * //   maxWorkerCount: Number("int"),
 * //   sourceJobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetJobCommandInput - {@link GetJobCommandInput}
 * @returns {@link GetJobCommandOutput}
 * @see {@link GetJobCommandInput} for command's `input` shape.
 * @see {@link GetJobCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class GetJobCommand extends $Command
  .classBuilder<
    GetJobCommandInput,
    GetJobCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "GetJob", {})
  .n("DeadlineClient", "GetJobCommand")
  .sc(GetJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJobRequest;
      output: GetJobResponse;
    };
    sdk: {
      input: GetJobCommandInput;
      output: GetJobCommandOutput;
    };
  };
}

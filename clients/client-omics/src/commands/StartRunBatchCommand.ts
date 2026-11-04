// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartRunBatchRequest, StartRunBatchResponse } from "../models/models_0";
import { StartRunBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartRunBatchCommand}.
 */
export interface StartRunBatchCommandInput extends StartRunBatchRequest {}
/**
 * @public
 *
 * The output of {@link StartRunBatchCommand}.
 */
export interface StartRunBatchCommandOutput extends StartRunBatchResponse, __MetadataBearer {}

/**
 * Starts a batch of workflow runs. You can group up to 100,000 runs into a single batch that share a common configuration defined in `defaultRunSetting`. Per-run overrides can be provided either inline via `inlineSettings` (up to 100 runs) or via a JSON file stored in Amazon S3 via `s3UriSettings` (up to 100,000 runs).
 *
 * `StartRunBatch` validates common fields synchronously and returns immediately with a batch ID and status `CREATING`. The batch transitions to `PENDING` once initial setup completes. Runs are then submitted gradually and asynchronously at a rate governed by your `StartRun` throughput quota.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, StartRunBatchCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, StartRunBatchCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // StartRunBatchRequest
 *   batchName: "STRING_VALUE",
 *   requestId: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   defaultRunSetting: { // DefaultRunSetting
 *     workflowId: "STRING_VALUE", // required
 *     workflowType: "STRING_VALUE",
 *     roleArn: "STRING_VALUE", // required
 *     name: "STRING_VALUE",
 *     cacheId: "STRING_VALUE",
 *     cacheBehavior: "STRING_VALUE",
 *     runGroupId: "STRING_VALUE",
 *     priority: Number("int"),
 *     parameters: "DOCUMENT_VALUE",
 *     storageCapacity: Number("int"),
 *     outputUri: "STRING_VALUE",
 *     logLevel: "STRING_VALUE",
 *     runTags: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     retentionMode: "STRING_VALUE",
 *     storageType: "STRING_VALUE",
 *     workflowOwnerId: "STRING_VALUE",
 *     outputBucketOwnerId: "STRING_VALUE",
 *     workflowVersionName: "STRING_VALUE",
 *     networkingMode: "STRING_VALUE",
 *     configurationName: "STRING_VALUE",
 *     sessionPolicy: "STRING_VALUE",
 *     engineSettings: "DOCUMENT_VALUE",
 *     scratchStorageMode: "STRING_VALUE",
 *   },
 *   batchRunSettings: { // BatchRunSettings Union: only one key present
 *     inlineSettings: [ // InlineSettings
 *       { // InlineSetting
 *         runSettingId: "STRING_VALUE", // required
 *         name: "STRING_VALUE",
 *         outputUri: "STRING_VALUE",
 *         priority: Number("int"),
 *         parameters: "DOCUMENT_VALUE",
 *         outputBucketOwnerId: "STRING_VALUE",
 *         runTags: "<TagMap>",
 *         engineSettings: "DOCUMENT_VALUE",
 *       },
 *     ],
 *     s3UriSettings: "STRING_VALUE",
 *   },
 * };
 * const command = new StartRunBatchCommand(input);
 * const response = await client.send(command);
 * // { // StartRunBatchResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   uuid: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartRunBatchCommandInput - {@link StartRunBatchCommandInput}
 * @returns {@link StartRunBatchCommandOutput}
 * @see {@link StartRunBatchCommandInput} for command's `input` shape.
 * @see {@link StartRunBatchCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class StartRunBatchCommand extends command<StartRunBatchCommandInput, StartRunBatchCommandOutput>(
  _ep0,
  _mw0,
  "StartRunBatch",
  StartRunBatch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartRunBatchRequest;
      output: StartRunBatchResponse;
    };
    sdk: {
      input: StartRunBatchCommandInput;
      output: StartRunBatchCommandOutput;
    };
  };
}

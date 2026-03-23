// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartRunBatchRequest, StartRunBatchResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { StartRunBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Starts a batch of workflow runs. You can group up to 100,000 runs into a single batch that share a common configuration defined in <code>defaultRunSetting</code>. Per-run overrides can be provided either inline via <code>inlineSettings</code> (up to 100 runs) or via a JSON file stored in Amazon S3 via <code>s3UriSettings</code> (up to 100,000 runs).</p> <p> <code>StartRunBatch</code> validates common fields synchronously and returns immediately with a batch ID and status <code>PENDING</code>. Runs are submitted gradually and asynchronously at a rate governed by your <code>StartRun</code> throughput quota.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class StartRunBatchCommand extends $Command
  .classBuilder<
    StartRunBatchCommandInput,
    StartRunBatchCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "StartRunBatch", {})
  .n("OmicsClient", "StartRunBatchCommand")
  .sc(StartRunBatch$)
  .build() {
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

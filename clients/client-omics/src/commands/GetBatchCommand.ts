// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetBatchRequest, GetBatchResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { GetBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBatchCommand}.
 */
export interface GetBatchCommandInput extends GetBatchRequest {}
/**
 * @public
 *
 * The output of {@link GetBatchCommand}.
 */
export interface GetBatchCommandOutput extends GetBatchResponse, __MetadataBearer {}

/**
 * <p>Retrieves details and current status for a specific run batch, including submission progress and run execution counts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetBatchCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetBatchCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetBatchRequest
 *   batchId: "STRING_VALUE", // required
 * };
 * const command = new GetBatchCommand(input);
 * const response = await client.send(command);
 * // { // GetBatchResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   uuid: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   totalRuns: Number("int"),
 * //   defaultRunSetting: { // DefaultRunSetting
 * //     workflowId: "STRING_VALUE", // required
 * //     workflowType: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     cacheId: "STRING_VALUE",
 * //     cacheBehavior: "STRING_VALUE",
 * //     runGroupId: "STRING_VALUE",
 * //     priority: Number("int"),
 * //     parameters: "DOCUMENT_VALUE",
 * //     storageCapacity: Number("int"),
 * //     outputUri: "STRING_VALUE",
 * //     logLevel: "STRING_VALUE",
 * //     runTags: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     retentionMode: "STRING_VALUE",
 * //     storageType: "STRING_VALUE",
 * //     workflowOwnerId: "STRING_VALUE",
 * //     outputBucketOwnerId: "STRING_VALUE",
 * //     workflowVersionName: "STRING_VALUE",
 * //   },
 * //   submissionSummary: { // SubmissionSummary
 * //     successfulStartSubmissionCount: Number("int"),
 * //     failedStartSubmissionCount: Number("int"),
 * //     pendingStartSubmissionCount: Number("int"),
 * //     successfulCancelSubmissionCount: Number("int"),
 * //     failedCancelSubmissionCount: Number("int"),
 * //     successfulDeleteSubmissionCount: Number("int"),
 * //     failedDeleteSubmissionCount: Number("int"),
 * //   },
 * //   runSummary: { // RunSummary
 * //     pendingRunCount: Number("int"),
 * //     startingRunCount: Number("int"),
 * //     runningRunCount: Number("int"),
 * //     stoppingRunCount: Number("int"),
 * //     completedRunCount: Number("int"),
 * //     deletedRunCount: Number("int"),
 * //     failedRunCount: Number("int"),
 * //     cancelledRunCount: Number("int"),
 * //   },
 * //   creationTime: new Date("TIMESTAMP"),
 * //   submittedTime: new Date("TIMESTAMP"),
 * //   processedTime: new Date("TIMESTAMP"),
 * //   failedTime: new Date("TIMESTAMP"),
 * //   failureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBatchCommandInput - {@link GetBatchCommandInput}
 * @returns {@link GetBatchCommandOutput}
 * @see {@link GetBatchCommandInput} for command's `input` shape.
 * @see {@link GetBatchCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetBatchCommand extends $Command
  .classBuilder<
    GetBatchCommandInput,
    GetBatchCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "GetBatch", {})
  .n("OmicsClient", "GetBatchCommand")
  .sc(GetBatch$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBatchRequest;
      output: GetBatchResponse;
    };
    sdk: {
      input: GetBatchCommandInput;
      output: GetBatchCommandOutput;
    };
  };
}

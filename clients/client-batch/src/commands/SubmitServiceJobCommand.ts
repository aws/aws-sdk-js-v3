// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SubmitServiceJobRequest, SubmitServiceJobResponse } from "../models/models_0";
import { SubmitServiceJob } from "../schemas/schemas_12_Service";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SubmitServiceJobCommand}.
 */
export interface SubmitServiceJobCommandInput extends SubmitServiceJobRequest {}
/**
 * @public
 *
 * The output of {@link SubmitServiceJobCommand}.
 */
export interface SubmitServiceJobCommandOutput extends SubmitServiceJobResponse, __MetadataBearer {}

/**
 * <p>Submits a service job to a specified job queue to run on SageMaker AI. A service job is a unit of work that you submit to Batch for execution on SageMaker AI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, SubmitServiceJobCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, SubmitServiceJobCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // SubmitServiceJobRequest
 *   jobName: "STRING_VALUE", // required
 *   jobQueue: "STRING_VALUE", // required
 *   retryStrategy: { // ServiceJobRetryStrategy
 *     attempts: Number("int"), // required
 *     evaluateOnExit: [ // ServiceJobEvaluateOnExitList
 *       { // ServiceJobEvaluateOnExit
 *         action: "RETRY" || "EXIT",
 *         onStatusReason: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   schedulingPriority: Number("int"),
 *   serviceRequestPayload: "STRING_VALUE", // required
 *   serviceJobType: "SAGEMAKER_TRAINING", // required
 *   shareIdentifier: "STRING_VALUE",
 *   timeoutConfig: { // ServiceJobTimeout
 *     attemptDurationSeconds: Number("int"),
 *   },
 *   tags: { // TagrisTagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new SubmitServiceJobCommand(input);
 * const response = await client.send(command);
 * // { // SubmitServiceJobResponse
 * //   jobArn: "STRING_VALUE",
 * //   jobName: "STRING_VALUE", // required
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SubmitServiceJobCommandInput - {@link SubmitServiceJobCommandInput}
 * @returns {@link SubmitServiceJobCommandOutput}
 * @see {@link SubmitServiceJobCommandInput} for command's `input` shape.
 * @see {@link SubmitServiceJobCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 *
 * @public
 */
export class SubmitServiceJobCommand extends $Command
  .classBuilder<
    SubmitServiceJobCommandInput,
    SubmitServiceJobCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "SubmitServiceJob", {})
  .n("BatchClient", "SubmitServiceJobCommand")
  .sc(SubmitServiceJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubmitServiceJobRequest;
      output: SubmitServiceJobResponse;
    };
    sdk: {
      input: SubmitServiceJobCommandInput;
      output: SubmitServiceJobCommandOutput;
    };
  };
}

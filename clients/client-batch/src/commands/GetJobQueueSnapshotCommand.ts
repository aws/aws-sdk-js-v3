// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetJobQueueSnapshotRequest, GetJobQueueSnapshotResponse } from "../models/models_0";
import { de_GetJobQueueSnapshotCommand, se_GetJobQueueSnapshotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJobQueueSnapshotCommand}.
 */
export interface GetJobQueueSnapshotCommandInput extends GetJobQueueSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link GetJobQueueSnapshotCommand}.
 */
export interface GetJobQueueSnapshotCommandOutput extends GetJobQueueSnapshotResponse, __MetadataBearer {}

/**
 * <p>Provides a list of the first 100 <code>RUNNABLE</code> jobs associated to a single job queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, GetJobQueueSnapshotCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, GetJobQueueSnapshotCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // GetJobQueueSnapshotRequest
 *   jobQueue: "STRING_VALUE", // required
 * };
 * const command = new GetJobQueueSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // GetJobQueueSnapshotResponse
 * //   frontOfQueue: { // FrontOfQueueDetail
 * //     jobs: [ // FrontOfQueueJobSummaryList
 * //       { // FrontOfQueueJobSummary
 * //         jobArn: "STRING_VALUE",
 * //         earliestTimeAtPosition: Number("long"),
 * //       },
 * //     ],
 * //     lastUpdatedAt: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetJobQueueSnapshotCommandInput - {@link GetJobQueueSnapshotCommandInput}
 * @returns {@link GetJobQueueSnapshotCommandOutput}
 * @see {@link GetJobQueueSnapshotCommandInput} for command's `input` shape.
 * @see {@link GetJobQueueSnapshotCommandOutput} for command's `response` shape.
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
export class GetJobQueueSnapshotCommand extends $Command
  .classBuilder<
    GetJobQueueSnapshotCommandInput,
    GetJobQueueSnapshotCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBatchV20160810", "GetJobQueueSnapshot", {})
  .n("BatchClient", "GetJobQueueSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_GetJobQueueSnapshotCommand)
  .de(de_GetJobQueueSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJobQueueSnapshotRequest;
      output: GetJobQueueSnapshotResponse;
    };
    sdk: {
      input: GetJobQueueSnapshotCommandInput;
      output: GetJobQueueSnapshotCommandOutput;
    };
  };
}

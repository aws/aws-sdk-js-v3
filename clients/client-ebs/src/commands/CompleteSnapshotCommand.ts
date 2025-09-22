// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CompleteSnapshotRequest, CompleteSnapshotResponse } from "../models/models_0";
import { CompleteSnapshot } from "../schemas/schemas_1_Snapshot";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CompleteSnapshotCommand}.
 */
export interface CompleteSnapshotCommandInput extends CompleteSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link CompleteSnapshotCommand}.
 */
export interface CompleteSnapshotCommandOutput extends CompleteSnapshotResponse, __MetadataBearer {}

/**
 * <p>Seals and completes the snapshot after all of the required blocks of data have been
 *             written to it. Completing the snapshot changes the status to <code>completed</code>. You
 *             cannot write new blocks to a snapshot after it has been completed.</p>
 *          <note>
 *             <p>You should always retry requests that receive server (<code>5xx</code>)
 *     error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code>
 *     client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, CompleteSnapshotCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, CompleteSnapshotCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * // import type { EBSClientConfig } from "@aws-sdk/client-ebs";
 * const config = {}; // type is EBSClientConfig
 * const client = new EBSClient(config);
 * const input = { // CompleteSnapshotRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   ChangedBlocksCount: Number("int"), // required
 *   Checksum: "STRING_VALUE",
 *   ChecksumAlgorithm: "SHA256",
 *   ChecksumAggregationMethod: "LINEAR",
 * };
 * const command = new CompleteSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CompleteSnapshotResponse
 * //   Status: "completed" || "pending" || "error",
 * // };
 *
 * ```
 *
 * @param CompleteSnapshotCommandInput - {@link CompleteSnapshotCommandInput}
 * @returns {@link CompleteSnapshotCommandOutput}
 * @see {@link CompleteSnapshotCommandInput} for command's `input` shape.
 * @see {@link CompleteSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for EBSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a>.</p>
 *
 * @throws {@link RequestThrottledException} (client fault)
 *  <p>The number of API requests has exceeded the maximum allowed API request
 *             throttling limit for the snapshot. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current service quotas do not allow you to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints of the EBS direct APIs.</p>
 *
 * @throws {@link EBSServiceException}
 * <p>Base exception class for all service exceptions from EBS service.</p>
 *
 *
 * @public
 */
export class CompleteSnapshotCommand extends $Command
  .classBuilder<
    CompleteSnapshotCommandInput,
    CompleteSnapshotCommandOutput,
    EBSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EBSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Ebs", "CompleteSnapshot", {})
  .n("EBSClient", "CompleteSnapshotCommand")
  .sc(CompleteSnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompleteSnapshotRequest;
      output: CompleteSnapshotResponse;
    };
    sdk: {
      input: CompleteSnapshotCommandInput;
      output: CompleteSnapshotCommandOutput;
    };
  };
}

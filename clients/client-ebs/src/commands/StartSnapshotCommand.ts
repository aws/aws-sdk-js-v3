// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartSnapshotRequest, StartSnapshotResponse } from "../models/models_0";
import { StartSnapshot } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSnapshotCommand}.
 */
export interface StartSnapshotCommandInput extends StartSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link StartSnapshotCommand}.
 */
export interface StartSnapshotCommandOutput extends StartSnapshotResponse, __MetadataBearer {}

/**
 * <p>Creates a new Amazon EBS snapshot. The new snapshot enters the <code>pending</code> state
 *             after the request completes. </p>
 *          <p>After creating the snapshot, use <a href="https://docs.aws.amazon.com/ebs/latest/APIReference/API_PutSnapshotBlock.html"> PutSnapshotBlock</a> to
 *             write blocks of data to the snapshot.</p>
 *          <note>
 *             <p>You should always retry requests that receive server (<code>5xx</code>)
 *     error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code>
 *     client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, StartSnapshotCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, StartSnapshotCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * // import type { EBSClientConfig } from "@aws-sdk/client-ebs";
 * const config = {}; // type is EBSClientConfig
 * const client = new EBSClient(config);
 * const input = { // StartSnapshotRequest
 *   VolumeSize: Number("long"), // required
 *   ParentSnapshotId: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   Encrypted: true || false,
 *   KmsKeyArn: "STRING_VALUE",
 *   Timeout: Number("int"),
 * };
 * const command = new StartSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // StartSnapshotResponse
 * //   Description: "STRING_VALUE",
 * //   SnapshotId: "STRING_VALUE",
 * //   OwnerId: "STRING_VALUE",
 * //   Status: "completed" || "pending" || "error",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   VolumeSize: Number("long"),
 * //   BlockSize: Number("int"),
 * //   Tags: [ // Tags
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ParentSnapshotId: "STRING_VALUE",
 * //   KmsKeyArn: "STRING_VALUE",
 * //   SseType: "sse-ebs" || "sse-kms" || "none",
 * // };
 *
 * ```
 *
 * @param StartSnapshotCommandInput - {@link StartSnapshotCommandInput}
 * @returns {@link StartSnapshotCommandOutput}
 * @see {@link StartSnapshotCommandInput} for command's `input` shape.
 * @see {@link StartSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for EBSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConcurrentLimitExceededException} (client fault)
 *  <p>You have reached the limit for concurrent API requests. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html#ebsapi-performance">Optimizing performance of the EBS direct APIs</a> in the <i>Amazon Elastic Compute Cloud
 *                 User Guide</i>.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request uses the same client token as a previous, but non-identical
 *             request.</p>
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
export class StartSnapshotCommand extends $Command
  .classBuilder<
    StartSnapshotCommandInput,
    StartSnapshotCommandOutput,
    EBSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EBSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Ebs", "StartSnapshot", {})
  .n("EBSClient", "StartSnapshotCommand")
  .sc(StartSnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSnapshotRequest;
      output: StartSnapshotResponse;
    };
    sdk: {
      input: StartSnapshotCommandInput;
      output: StartSnapshotCommandOutput;
    };
  };
}

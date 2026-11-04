// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CompleteSnapshotRequest, CompleteSnapshotResponse } from "../models/models_0";
import { CompleteSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Seals and completes the snapshot after all of the required blocks of data have been written to it. Completing the snapshot changes the status to `completed`. You cannot write new blocks to a snapshot after it has been completed.
 *
 * > **Note:** You should always retry requests that receive server (`5xx`) error responses, and `ThrottlingException` and `RequestThrottledException` client error responses. For more information see [Error retries](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html) in the *Amazon Elastic Compute Cloud User Guide*.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred. For more information see [Error retries](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html).
 *
 * @throws {@link RequestThrottledException} (client fault)
 *
 * The number of API requests has exceeded the maximum allowed API request throttling limit for the snapshot. For more information see [Error retries](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html).
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Your current service quotas do not allow you to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints of the EBS direct APIs.
 *
 * @throws {@link EBSServiceException}
 *
 * Base exception class for all service exceptions from EBS service.
 *
 * @public
 */
export class CompleteSnapshotCommand extends command<CompleteSnapshotCommandInput, CompleteSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "CompleteSnapshot",
  CompleteSnapshot$
) {
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

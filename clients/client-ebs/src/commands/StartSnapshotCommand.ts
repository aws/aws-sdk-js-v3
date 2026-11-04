// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartSnapshotRequest, StartSnapshotResponse } from "../models/models_0";
import { StartSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new Amazon EBS snapshot. The new snapshot enters the `pending` state after the request completes.
 *
 * After creating the snapshot, use [PutSnapshotBlock](https://docs.aws.amazon.com/ebs/latest/APIReference/API_PutSnapshotBlock.html) to write blocks of data to the snapshot.
 *
 * > **Note:** You should always retry requests that receive server (`5xx`) error responses, and `ThrottlingException` and `RequestThrottledException` client error responses. For more information see [Error retries](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html) in the *Amazon Elastic Compute Cloud User Guide*.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConcurrentLimitExceededException} (client fault)
 *
 * You have reached the limit for concurrent API requests. For more information, see [Optimizing performance of the EBS direct APIs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html#ebsapi-performance) in the *Amazon Elastic Compute Cloud User Guide*.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request uses the same client token as a previous, but non-identical request.
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
export class StartSnapshotCommand extends command<StartSnapshotCommandInput, StartSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "StartSnapshot",
  StartSnapshot$
) {
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

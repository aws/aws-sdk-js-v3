// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSnapshotBlocksRequest, ListSnapshotBlocksResponse } from "../models/models_0";
import { ListSnapshotBlocks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSnapshotBlocksCommand}.
 */
export interface ListSnapshotBlocksCommandInput extends ListSnapshotBlocksRequest {}
/**
 * @public
 *
 * The output of {@link ListSnapshotBlocksCommand}.
 */
export interface ListSnapshotBlocksCommandOutput extends ListSnapshotBlocksResponse, __MetadataBearer {}

/**
 * Returns information about the blocks in an Amazon Elastic Block Store snapshot.
 *
 * > **Note:** You should always retry requests that receive server (`5xx`) error responses, and `ThrottlingException` and `RequestThrottledException` client error responses. For more information see [Error retries](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html) in the *Amazon Elastic Compute Cloud User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, ListSnapshotBlocksCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, ListSnapshotBlocksCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * // import type { EBSClientConfig } from "@aws-sdk/client-ebs";
 * const config = {}; // type is EBSClientConfig
 * const client = new EBSClient(config);
 * const input = { // ListSnapshotBlocksRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   StartingBlockIndex: Number("int"),
 * };
 * const command = new ListSnapshotBlocksCommand(input);
 * const response = await client.send(command);
 * // { // ListSnapshotBlocksResponse
 * //   Blocks: [ // Blocks
 * //     { // Block
 * //       BlockIndex: Number("int"),
 * //       BlockToken: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ExpiryTime: new Date("TIMESTAMP"),
 * //   VolumeSize: Number("long"),
 * //   BlockSize: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSnapshotBlocksCommandInput - {@link ListSnapshotBlocksCommandInput}
 * @returns {@link ListSnapshotBlocksCommandOutput}
 * @see {@link ListSnapshotBlocksCommandInput} for command's `input` shape.
 * @see {@link ListSnapshotBlocksCommandOutput} for command's `response` shape.
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
export class ListSnapshotBlocksCommand extends command<ListSnapshotBlocksCommandInput, ListSnapshotBlocksCommandOutput>(
  _ep0,
  _mw0,
  "ListSnapshotBlocks",
  ListSnapshotBlocks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSnapshotBlocksRequest;
      output: ListSnapshotBlocksResponse;
    };
    sdk: {
      input: ListSnapshotBlocksCommandInput;
      output: ListSnapshotBlocksCommandOutput;
    };
  };
}

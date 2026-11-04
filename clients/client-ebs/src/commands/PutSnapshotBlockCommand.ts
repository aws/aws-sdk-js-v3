// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutSnapshotBlockRequest, PutSnapshotBlockResponse } from "../models/models_0";
import { PutSnapshotBlock$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutSnapshotBlockCommand}.
 */
export interface PutSnapshotBlockCommandInput extends Omit<PutSnapshotBlockRequest, "BlockData"> {
  BlockData: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link PutSnapshotBlockCommand}.
 */
export interface PutSnapshotBlockCommandOutput extends PutSnapshotBlockResponse, __MetadataBearer {}

/**
 * Writes a block of data to a snapshot. If the specified block contains data, the existing data is overwritten. The target snapshot must be in the `pending` state.
 *
 * Data written to a snapshot must be aligned with 512-KiB sectors.
 *
 * > **Note:** You should always retry requests that receive server (`5xx`) error responses, and `ThrottlingException` and `RequestThrottledException` client error responses. For more information see [Error retries](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html) in the *Amazon Elastic Compute Cloud User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, PutSnapshotBlockCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, PutSnapshotBlockCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * // import type { EBSClientConfig } from "@aws-sdk/client-ebs";
 * const config = {}; // type is EBSClientConfig
 * const client = new EBSClient(config);
 * const input = { // PutSnapshotBlockRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   BlockIndex: Number("int"), // required
 *   BlockData: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes // required
 *   DataLength: Number("int"), // required
 *   Progress: Number("int"),
 *   Checksum: "STRING_VALUE", // required
 *   ChecksumAlgorithm: "SHA256", // required
 * };
 * const command = new PutSnapshotBlockCommand(input);
 * const response = await client.send(command);
 * // { // PutSnapshotBlockResponse
 * //   Checksum: "STRING_VALUE",
 * //   ChecksumAlgorithm: "SHA256",
 * // };
 *
 * ```
 *
 * @param PutSnapshotBlockCommandInput - {@link PutSnapshotBlockCommandInput}
 * @returns {@link PutSnapshotBlockCommandOutput}
 * @see {@link PutSnapshotBlockCommandInput} for command's `input` shape.
 * @see {@link PutSnapshotBlockCommandOutput} for command's `response` shape.
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
export class PutSnapshotBlockCommand extends command<PutSnapshotBlockCommandInput, PutSnapshotBlockCommandOutput>(
  _ep0,
  _mw0,
  "PutSnapshotBlock",
  PutSnapshotBlock$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSnapshotBlockRequest;
      output: PutSnapshotBlockResponse;
    };
    sdk: {
      input: PutSnapshotBlockCommandInput;
      output: PutSnapshotBlockCommandOutput;
    };
  };
}

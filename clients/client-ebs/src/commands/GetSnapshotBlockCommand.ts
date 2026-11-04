// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSnapshotBlockRequest, GetSnapshotBlockResponse } from "../models/models_0";
import { GetSnapshotBlock$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSnapshotBlockCommand}.
 */
export interface GetSnapshotBlockCommandInput extends GetSnapshotBlockRequest {}
/**
 * @public
 *
 * The output of {@link GetSnapshotBlockCommand}.
 */
export interface GetSnapshotBlockCommandOutput extends Omit<GetSnapshotBlockResponse, "BlockData">, __MetadataBearer {
  BlockData?: StreamingBlobPayloadOutputTypes;
}

/**
 * Returns the data in a block in an Amazon Elastic Block Store snapshot.
 *
 * > **Note:** You should always retry requests that receive server (`5xx`) error responses, and `ThrottlingException` and `RequestThrottledException` client error responses. For more information see [Error retries](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html) in the *Amazon Elastic Compute Cloud User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, GetSnapshotBlockCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, GetSnapshotBlockCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * // import type { EBSClientConfig } from "@aws-sdk/client-ebs";
 * const config = {}; // type is EBSClientConfig
 * const client = new EBSClient(config);
 * const input = { // GetSnapshotBlockRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   BlockIndex: Number("int"), // required
 *   BlockToken: "STRING_VALUE", // required
 * };
 * const command = new GetSnapshotBlockCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.BlockData.transformToByteArray();
 * // const str = await response.BlockData.transformToString();
 * // response.BlockData.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // GetSnapshotBlockResponse
 * //   DataLength: Number("int"),
 * //   BlockData: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * //   Checksum: "STRING_VALUE",
 * //   ChecksumAlgorithm: "SHA256",
 * // };
 *
 * ```
 *
 * @param GetSnapshotBlockCommandInput - {@link GetSnapshotBlockCommandInput}
 * @returns {@link GetSnapshotBlockCommandOutput}
 * @see {@link GetSnapshotBlockCommandInput} for command's `input` shape.
 * @see {@link GetSnapshotBlockCommandOutput} for command's `response` shape.
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
export class GetSnapshotBlockCommand extends command<GetSnapshotBlockCommandInput, GetSnapshotBlockCommandOutput>(
  _ep0,
  _mw0,
  "GetSnapshotBlock",
  GetSnapshotBlock$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSnapshotBlockRequest;
      output: GetSnapshotBlockResponse;
    };
    sdk: {
      input: GetSnapshotBlockCommandInput;
      output: GetSnapshotBlockCommandOutput;
    };
  };
}

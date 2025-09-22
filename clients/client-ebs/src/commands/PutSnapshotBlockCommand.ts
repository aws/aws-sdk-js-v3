// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutSnapshotBlockRequest, PutSnapshotBlockResponse } from "../models/models_0";
import { PutSnapshotBlock } from "../schemas/schemas_1_Snapshot";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Writes a block of data to a snapshot. If the specified block contains
 *             data, the existing data is overwritten. The target snapshot must be in the
 *                 <code>pending</code> state.</p>
 *          <p>Data written to a snapshot must be aligned with 512-KiB sectors.</p>
 *          <note>
 *             <p>You should always retry requests that receive server (<code>5xx</code>)
 *     error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code>
 *     client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
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
export class PutSnapshotBlockCommand extends $Command
  .classBuilder<
    PutSnapshotBlockCommandInput,
    PutSnapshotBlockCommandOutput,
    EBSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EBSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Ebs", "PutSnapshotBlock", {})
  .n("EBSClient", "PutSnapshotBlockCommand")
  .sc(PutSnapshotBlock)
  .build() {
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

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetSnapshotBlockRequest,
  GetSnapshotBlockResponse,
  GetSnapshotBlockResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetSnapshotBlockCommand, se_GetSnapshotBlockCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the data in a block in an Amazon Elastic Block Store snapshot.</p>
 *          <note>
 *             <p>You should always retry requests that receive server (<code>5xx</code>)
 *     error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code>
 *     client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, GetSnapshotBlockCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, GetSnapshotBlockCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const input = { // GetSnapshotBlockRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   BlockIndex: Number("int"), // required
 *   BlockToken: "STRING_VALUE", // required
 * };
 * const command = new GetSnapshotBlockCommand(input);
 * const response = await client.send(command);
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
 * @public
 */
export class GetSnapshotBlockCommand extends $Command
  .classBuilder<
    GetSnapshotBlockCommandInput,
    GetSnapshotBlockCommandOutput,
    EBSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EBSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Ebs", "GetSnapshotBlock", {})
  .n("EBSClient", "GetSnapshotBlockCommand")
  .f(void 0, GetSnapshotBlockResponseFilterSensitiveLog)
  .ser(se_GetSnapshotBlockCommand)
  .de(de_GetSnapshotBlockCommand)
  .build() {}

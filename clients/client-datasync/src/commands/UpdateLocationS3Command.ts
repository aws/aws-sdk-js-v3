// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLocationS3Request, UpdateLocationS3Response } from "../models/models_0";
import { de_UpdateLocationS3Command, se_UpdateLocationS3Command } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLocationS3Command}.
 */
export interface UpdateLocationS3CommandInput extends UpdateLocationS3Request {}
/**
 * @public
 *
 * The output of {@link UpdateLocationS3Command}.
 */
export interface UpdateLocationS3CommandOutput extends UpdateLocationS3Response, __MetadataBearer {}

/**
 * <p>Modifies the following configuration parameters of the Amazon S3 transfer location
 *       that you're using with DataSync.</p>
 *          <important>
 *             <p>Before you begin, make sure that you read the following topics:</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage
 *               class considerations with Amazon S3 locations</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">Evaluating S3 request costs when using DataSync</a>
 *                   </p>
 *                </li>
 *             </ul>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationS3Command } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationS3Command } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // UpdateLocationS3Request
 *   LocationArn: "STRING_VALUE", // required
 *   Subdirectory: "STRING_VALUE",
 *   S3StorageClass: "STANDARD" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_INSTANT_RETRIEVAL",
 *   S3Config: { // S3Config
 *     BucketAccessRoleArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateLocationS3Command(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLocationS3CommandInput - {@link UpdateLocationS3CommandInput}
 * @returns {@link UpdateLocationS3CommandOutput}
 * @see {@link UpdateLocationS3CommandInput} for command's `input` shape.
 * @see {@link UpdateLocationS3CommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 *
 * @public
 */
export class UpdateLocationS3Command extends $Command
  .classBuilder<
    UpdateLocationS3CommandInput,
    UpdateLocationS3CommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "UpdateLocationS3", {})
  .n("DataSyncClient", "UpdateLocationS3Command")
  .f(void 0, void 0)
  .ser(se_UpdateLocationS3Command)
  .de(de_UpdateLocationS3Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLocationS3Request;
      output: {};
    };
    sdk: {
      input: UpdateLocationS3CommandInput;
      output: UpdateLocationS3CommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLocationS3Request, CreateLocationS3Response } from "../models/models_0";
import { de_CreateLocationS3Command, se_CreateLocationS3Command } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLocationS3Command}.
 */
export interface CreateLocationS3CommandInput extends CreateLocationS3Request {}
/**
 * @public
 *
 * The output of {@link CreateLocationS3Command}.
 */
export interface CreateLocationS3CommandOutput extends CreateLocationS3Response, __MetadataBearer {}

/**
 * <p>Creates a transfer <i>location</i> for an Amazon S3 bucket.
 *         DataSync can use this location as a source or destination for transferring
 *       data.</p>
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
 *          <p> For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html">Configuring
 *         transfers with Amazon S3</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationS3Command } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationS3Command } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // CreateLocationS3Request
 *   Subdirectory: "STRING_VALUE",
 *   S3BucketArn: "STRING_VALUE", // required
 *   S3StorageClass: "STANDARD" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_INSTANT_RETRIEVAL",
 *   S3Config: { // S3Config
 *     BucketAccessRoleArn: "STRING_VALUE", // required
 *   },
 *   AgentArns: [ // AgentArnList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateLocationS3Command(input);
 * const response = await client.send(command);
 * // { // CreateLocationS3Response
 * //   LocationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLocationS3CommandInput - {@link CreateLocationS3CommandInput}
 * @returns {@link CreateLocationS3CommandOutput}
 * @see {@link CreateLocationS3CommandInput} for command's `input` shape.
 * @see {@link CreateLocationS3CommandOutput} for command's `response` shape.
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
export class CreateLocationS3Command extends $Command
  .classBuilder<
    CreateLocationS3CommandInput,
    CreateLocationS3CommandOutput,
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
  .s("FmrsService", "CreateLocationS3", {})
  .n("DataSyncClient", "CreateLocationS3Command")
  .f(void 0, void 0)
  .ser(se_CreateLocationS3Command)
  .de(de_CreateLocationS3Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLocationS3Request;
      output: CreateLocationS3Response;
    };
    sdk: {
      input: CreateLocationS3CommandInput;
      output: CreateLocationS3CommandOutput;
    };
  };
}

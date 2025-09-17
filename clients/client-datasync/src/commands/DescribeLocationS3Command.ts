// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLocationS3Request, DescribeLocationS3Response } from "../models/models_0";
import { de_DescribeLocationS3Command, se_DescribeLocationS3Command } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationS3Command}.
 */
export interface DescribeLocationS3CommandInput extends DescribeLocationS3Request {}
/**
 * @public
 *
 * The output of {@link DescribeLocationS3Command}.
 */
export interface DescribeLocationS3CommandOutput extends DescribeLocationS3Response, __MetadataBearer {}

/**
 * <p>Provides details about how an DataSync transfer location for an S3 bucket
 *       is configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationS3Command } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationS3Command } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationS3Request
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationS3Command(input);
 * const response = await client.send(command);
 * // { // DescribeLocationS3Response
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   S3StorageClass: "STANDARD" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_INSTANT_RETRIEVAL",
 * //   S3Config: { // S3Config
 * //     BucketAccessRoleArn: "STRING_VALUE", // required
 * //   },
 * //   AgentArns: [ // AgentArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeLocationS3CommandInput - {@link DescribeLocationS3CommandInput}
 * @returns {@link DescribeLocationS3CommandOutput}
 * @see {@link DescribeLocationS3CommandInput} for command's `input` shape.
 * @see {@link DescribeLocationS3CommandOutput} for command's `response` shape.
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
export class DescribeLocationS3Command extends $Command
  .classBuilder<
    DescribeLocationS3CommandInput,
    DescribeLocationS3CommandOutput,
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
  .s("FmrsService", "DescribeLocationS3", {})
  .n("DataSyncClient", "DescribeLocationS3Command")
  .f(void 0, void 0)
  .ser(se_DescribeLocationS3Command)
  .de(de_DescribeLocationS3Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocationS3Request;
      output: DescribeLocationS3Response;
    };
    sdk: {
      input: DescribeLocationS3CommandInput;
      output: DescribeLocationS3CommandOutput;
    };
  };
}

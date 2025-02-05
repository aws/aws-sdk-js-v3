// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTableBucketPolicyRequest, GetTableBucketPolicyResponse } from "../models/models_0";
import { de_GetTableBucketPolicyCommand, se_GetTableBucketPolicyCommand } from "../protocols/Aws_restJson1";
import { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTableBucketPolicyCommand}.
 */
export interface GetTableBucketPolicyCommandInput extends GetTableBucketPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetTableBucketPolicyCommand}.
 */
export interface GetTableBucketPolicyCommandOutput extends GetTableBucketPolicyResponse, __MetadataBearer {}

/**
 * <p>Gets details about a table bucket policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-bucket-policy.html#table-bucket-policy-get">Viewing a table bucket policy</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3tables:GetTableBucketPolicy</code> permission to use this operation. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableBucketPolicyCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableBucketPolicyCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new S3TablesClient(config);
 * const input = { // GetTableBucketPolicyRequest
 *   tableBucketARN: "STRING_VALUE", // required
 * };
 * const command = new GetTableBucketPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetTableBucketPolicyResponse
 * //   resourcePolicy: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetTableBucketPolicyCommandInput - {@link GetTableBucketPolicyCommandInput}
 * @returns {@link GetTableBucketPolicyCommandOutput}
 * @see {@link GetTableBucketPolicyCommandInput} for command's `input` shape.
 * @see {@link GetTableBucketPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is invalid or malformed.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because there is a conflict with a previous write. You can retry the
 *       request.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request failed due to an internal server error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link S3TablesServiceException}
 * <p>Base exception class for all service exceptions from S3Tables service.</p>
 *
 * @public
 */
export class GetTableBucketPolicyCommand extends $Command
  .classBuilder<
    GetTableBucketPolicyCommandInput,
    GetTableBucketPolicyCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("S3TableBuckets", "GetTableBucketPolicy", {})
  .n("S3TablesClient", "GetTableBucketPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetTableBucketPolicyCommand)
  .de(de_GetTableBucketPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableBucketPolicyRequest;
      output: GetTableBucketPolicyResponse;
    };
    sdk: {
      input: GetTableBucketPolicyCommandInput;
      output: GetTableBucketPolicyCommandOutput;
    };
  };
}

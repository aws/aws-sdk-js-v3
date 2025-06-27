// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTableBucketRequest, CreateTableBucketResponse } from "../models/models_0";
import { de_CreateTableBucketCommand, se_CreateTableBucketCommand } from "../protocols/Aws_restJson1";
import { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTableBucketCommand}.
 */
export interface CreateTableBucketCommandInput extends CreateTableBucketRequest {}
/**
 * @public
 *
 * The output of {@link CreateTableBucketCommand}.
 */
export interface CreateTableBucketCommandOutput extends CreateTableBucketResponse, __MetadataBearer {}

/**
 * <p>Creates a table bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-buckets-create.html">Creating a table bucket</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <dl> <dt>Permissions</dt> <dd> <ul> <li> <p>You must have the <code>s3tables:CreateTableBucket</code> permission to use this operation. </p> </li> <li> <p>If you use this operation with the optional <code>encryptionConfiguration</code> parameter you must have the <code>s3tables:PutTableBucketEncryption</code> permission.</p> </li> </ul> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, CreateTableBucketCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, CreateTableBucketCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * const client = new S3TablesClient(config);
 * const input = { // CreateTableBucketRequest
 *   name: "STRING_VALUE", // required
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     sseAlgorithm: "AES256" || "aws:kms", // required
 *     kmsKeyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTableBucketCommand(input);
 * const response = await client.send(command);
 * // { // CreateTableBucketResponse
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTableBucketCommandInput - {@link CreateTableBucketCommandInput}
 * @returns {@link CreateTableBucketCommandOutput}
 * @see {@link CreateTableBucketCommandInput} for command's `input` shape.
 * @see {@link CreateTableBucketCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is invalid or malformed.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because there is a conflict with a previous write. You can retry the request.</p>
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
 *
 * @public
 */
export class CreateTableBucketCommand extends $Command
  .classBuilder<
    CreateTableBucketCommandInput,
    CreateTableBucketCommandOutput,
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
  .s("S3TableBuckets", "CreateTableBucket", {})
  .n("S3TablesClient", "CreateTableBucketCommand")
  .f(void 0, void 0)
  .ser(se_CreateTableBucketCommand)
  .de(de_CreateTableBucketCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTableBucketRequest;
      output: CreateTableBucketResponse;
    };
    sdk: {
      input: CreateTableBucketCommandInput;
      output: CreateTableBucketCommandOutput;
    };
  };
}

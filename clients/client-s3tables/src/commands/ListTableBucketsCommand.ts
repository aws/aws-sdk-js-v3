// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTableBucketsRequest, ListTableBucketsResponse } from "../models/models_0";
import { de_ListTableBucketsCommand, se_ListTableBucketsCommand } from "../protocols/Aws_restJson1";
import { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTableBucketsCommand}.
 */
export interface ListTableBucketsCommandInput extends ListTableBucketsRequest {}
/**
 * @public
 *
 * The output of {@link ListTableBucketsCommand}.
 */
export interface ListTableBucketsCommandOutput extends ListTableBucketsResponse, __MetadataBearer {}

/**
 * <p>Lists table buckets for your account. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-buckets.html">S3 Table buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3tables:ListTableBuckets</code> permission to use this operation. </p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, ListTableBucketsCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, ListTableBucketsCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * const client = new S3TablesClient(config);
 * const input = { // ListTableBucketsRequest
 *   prefix: "STRING_VALUE",
 *   continuationToken: "STRING_VALUE",
 *   maxBuckets: Number("int"),
 *   type: "customer" || "aws",
 * };
 * const command = new ListTableBucketsCommand(input);
 * const response = await client.send(command);
 * // { // ListTableBucketsResponse
 * //   tableBuckets: [ // TableBucketSummaryList // required
 * //     { // TableBucketSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       ownerAccountId: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       tableBucketId: "STRING_VALUE",
 * //       type: "customer" || "aws",
 * //     },
 * //   ],
 * //   continuationToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTableBucketsCommandInput - {@link ListTableBucketsCommandInput}
 * @returns {@link ListTableBucketsCommandOutput}
 * @see {@link ListTableBucketsCommandInput} for command's `input` shape.
 * @see {@link ListTableBucketsCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The action cannot be performed because you do not have the required permission.</p>
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
export class ListTableBucketsCommand extends $Command
  .classBuilder<
    ListTableBucketsCommandInput,
    ListTableBucketsCommandOutput,
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
  .s("S3TableBuckets", "ListTableBuckets", {})
  .n("S3TablesClient", "ListTableBucketsCommand")
  .f(void 0, void 0)
  .ser(se_ListTableBucketsCommand)
  .de(de_ListTableBucketsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTableBucketsRequest;
      output: ListTableBucketsResponse;
    };
    sdk: {
      input: ListTableBucketsCommandInput;
      output: ListTableBucketsCommandOutput;
    };
  };
}

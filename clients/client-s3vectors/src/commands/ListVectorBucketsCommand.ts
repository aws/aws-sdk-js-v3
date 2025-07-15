// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListVectorBucketsInput, ListVectorBucketsOutput } from "../models/models_0";
import { de_ListVectorBucketsCommand, se_ListVectorBucketsCommand } from "../protocols/Aws_restJson1";
import { S3VectorsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3VectorsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVectorBucketsCommand}.
 */
export interface ListVectorBucketsCommandInput extends ListVectorBucketsInput {}
/**
 * @public
 *
 * The output of {@link ListVectorBucketsCommand}.
 */
export interface ListVectorBucketsCommandOutput extends ListVectorBucketsOutput, __MetadataBearer {}

/**
 * <note> <p>Amazon S3 Vectors is in preview release for Amazon S3 and is subject to change.</p> </note> <p>Returns a list of all the vector buckets that are owned by the authenticated sender of the request.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3vectors:ListVectorBuckets</code> permission to use this operation. </p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3VectorsClient, ListVectorBucketsCommand } from "@aws-sdk/client-s3vectors"; // ES Modules import
 * // const { S3VectorsClient, ListVectorBucketsCommand } = require("@aws-sdk/client-s3vectors"); // CommonJS import
 * const client = new S3VectorsClient(config);
 * const input = { // ListVectorBucketsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   prefix: "STRING_VALUE",
 * };
 * const command = new ListVectorBucketsCommand(input);
 * const response = await client.send(command);
 * // { // ListVectorBucketsOutput
 * //   nextToken: "STRING_VALUE",
 * //   vectorBuckets: [ // ListVectorBucketsOutputList // required
 * //     { // VectorBucketSummary
 * //       vectorBucketName: "STRING_VALUE", // required
 * //       vectorBucketArn: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVectorBucketsCommandInput - {@link ListVectorBucketsCommandInput}
 * @returns {@link ListVectorBucketsCommandOutput}
 * @see {@link ListVectorBucketsCommandInput} for command's `input` shape.
 * @see {@link ListVectorBucketsCommandOutput} for command's `response` shape.
 * @see {@link S3VectorsClientResolvedConfig | config} for S3VectorsClient's `config` shape.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Wait briefly and retry your request. If it continues to fail, increase your waiting time between retries.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an internal server error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your request exceeds a service quota. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The requested action isn't valid.</p>
 *
 * @throws {@link S3VectorsServiceException}
 * <p>Base exception class for all service exceptions from S3Vectors service.</p>
 *
 *
 * @public
 */
export class ListVectorBucketsCommand extends $Command
  .classBuilder<
    ListVectorBucketsCommandInput,
    ListVectorBucketsCommandOutput,
    S3VectorsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3VectorsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("S3Vectors", "ListVectorBuckets", {})
  .n("S3VectorsClient", "ListVectorBucketsCommand")
  .f(void 0, void 0)
  .ser(se_ListVectorBucketsCommand)
  .de(de_ListVectorBucketsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVectorBucketsInput;
      output: ListVectorBucketsOutput;
    };
    sdk: {
      input: ListVectorBucketsCommandInput;
      output: ListVectorBucketsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTableBucketRequest, GetTableBucketResponse } from "../models/models_0";
import { GetTableBucket$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTableBucketCommand}.
 */
export interface GetTableBucketCommandInput extends GetTableBucketRequest {}
/**
 * @public
 *
 * The output of {@link GetTableBucketCommand}.
 */
export interface GetTableBucketCommandOutput extends GetTableBucketResponse, __MetadataBearer {}

/**
 * Gets details on a table bucket. For more information, see [Viewing details about an Amazon S3 table bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-buckets-details.html) in the *Amazon Simple Storage Service User Guide*.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:GetTableBucket` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableBucketCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableBucketCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // GetTableBucketRequest
 *   tableBucketARN: "STRING_VALUE", // required
 * };
 * const command = new GetTableBucketCommand(input);
 * const response = await client.send(command);
 * // { // GetTableBucketResponse
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   ownerAccountId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   tableBucketId: "STRING_VALUE",
 * //   type: "customer" || "aws",
 * // };
 *
 * ```
 *
 * @param GetTableBucketCommandInput - {@link GetTableBucketCommandInput}
 * @returns {@link GetTableBucketCommandOutput}
 * @see {@link GetTableBucketCommandInput} for command's `input` shape.
 * @see {@link GetTableBucketCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The action cannot be performed because you do not have the required permission.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is invalid or malformed.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request failed because there is a conflict with a previous write. You can retry the request.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The caller isn't authorized to make the request.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The request failed due to an internal server error.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified resource could not be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link S3TablesServiceException}
 *
 * Base exception class for all service exceptions from S3Tables service.
 *
 * @public
 */
export class GetTableBucketCommand extends command<GetTableBucketCommandInput, GetTableBucketCommandOutput>(
  _ep0,
  _mw0,
  "GetTableBucket",
  GetTableBucket$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableBucketRequest;
      output: GetTableBucketResponse;
    };
    sdk: {
      input: GetTableBucketCommandInput;
      output: GetTableBucketCommandOutput;
    };
  };
}

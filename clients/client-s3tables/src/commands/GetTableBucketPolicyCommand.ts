// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTableBucketPolicyRequest, GetTableBucketPolicyResponse } from "../models/models_0";
import { GetTableBucketPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets details about a table bucket policy. For more information, see [Viewing a table bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-bucket-policy.html#table-bucket-policy-get) in the *Amazon Simple Storage Service User Guide*.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:GetTableBucketPolicy` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableBucketPolicyCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableBucketPolicyCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
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
export class GetTableBucketPolicyCommand extends command<GetTableBucketPolicyCommandInput, GetTableBucketPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetTableBucketPolicy",
  GetTableBucketPolicy$
) {
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

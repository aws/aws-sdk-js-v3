// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTableBucketPolicyRequest } from "../models/models_0";
import { DeleteTableBucketPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTableBucketPolicyCommand}.
 */
export interface DeleteTableBucketPolicyCommandInput extends DeleteTableBucketPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTableBucketPolicyCommand}.
 */
export interface DeleteTableBucketPolicyCommandOutput extends __MetadataBearer {}

/**
 * Deletes a table bucket policy. For more information, see [Deleting a table bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-bucket-policy.html#table-bucket-policy-delete) in the *Amazon Simple Storage Service User Guide*.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:DeleteTableBucketPolicy` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, DeleteTableBucketPolicyCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, DeleteTableBucketPolicyCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // DeleteTableBucketPolicyRequest
 *   tableBucketARN: "STRING_VALUE", // required
 * };
 * const command = new DeleteTableBucketPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTableBucketPolicyCommandInput - {@link DeleteTableBucketPolicyCommandInput}
 * @returns {@link DeleteTableBucketPolicyCommandOutput}
 * @see {@link DeleteTableBucketPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteTableBucketPolicyCommandOutput} for command's `response` shape.
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
export class DeleteTableBucketPolicyCommand extends command<DeleteTableBucketPolicyCommandInput, DeleteTableBucketPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTableBucketPolicy",
  DeleteTableBucketPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTableBucketPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteTableBucketPolicyCommandInput;
      output: DeleteTableBucketPolicyCommandOutput;
    };
  };
}

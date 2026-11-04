// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTableBucketEncryptionRequest } from "../models/models_0";
import { DeleteTableBucketEncryption$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTableBucketEncryptionCommand}.
 */
export interface DeleteTableBucketEncryptionCommandInput extends DeleteTableBucketEncryptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTableBucketEncryptionCommand}.
 */
export interface DeleteTableBucketEncryptionCommandOutput extends __MetadataBearer {}

/**
 * Deletes the encryption configuration for a table bucket.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:DeleteTableBucketEncryption` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, DeleteTableBucketEncryptionCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, DeleteTableBucketEncryptionCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // DeleteTableBucketEncryptionRequest
 *   tableBucketARN: "STRING_VALUE", // required
 * };
 * const command = new DeleteTableBucketEncryptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTableBucketEncryptionCommandInput - {@link DeleteTableBucketEncryptionCommandInput}
 * @returns {@link DeleteTableBucketEncryptionCommandOutput}
 * @see {@link DeleteTableBucketEncryptionCommandInput} for command's `input` shape.
 * @see {@link DeleteTableBucketEncryptionCommandOutput} for command's `response` shape.
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
export class DeleteTableBucketEncryptionCommand extends command<DeleteTableBucketEncryptionCommandInput, DeleteTableBucketEncryptionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTableBucketEncryption",
  DeleteTableBucketEncryption$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTableBucketEncryptionRequest;
      output: {};
    };
    sdk: {
      input: DeleteTableBucketEncryptionCommandInput;
      output: DeleteTableBucketEncryptionCommandOutput;
    };
  };
}

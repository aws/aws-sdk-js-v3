// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTableBucketReplicationRequest } from "../models/models_0";
import { DeleteTableBucketReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTableBucketReplicationCommand}.
 */
export interface DeleteTableBucketReplicationCommandInput extends DeleteTableBucketReplicationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTableBucketReplicationCommand}.
 */
export interface DeleteTableBucketReplicationCommandOutput extends __MetadataBearer {}

/**
 * Deletes the replication configuration for a table bucket. After deletion, new table updates will no longer be replicated to destination buckets, though existing replicated tables will remain in destination buckets.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:DeleteTableBucketReplication` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, DeleteTableBucketReplicationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, DeleteTableBucketReplicationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // DeleteTableBucketReplicationRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   versionToken: "STRING_VALUE",
 * };
 * const command = new DeleteTableBucketReplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTableBucketReplicationCommandInput - {@link DeleteTableBucketReplicationCommandInput}
 * @returns {@link DeleteTableBucketReplicationCommandOutput}
 * @see {@link DeleteTableBucketReplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteTableBucketReplicationCommandOutput} for command's `response` shape.
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
export class DeleteTableBucketReplicationCommand extends command<DeleteTableBucketReplicationCommandInput, DeleteTableBucketReplicationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTableBucketReplication",
  DeleteTableBucketReplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTableBucketReplicationRequest;
      output: {};
    };
    sdk: {
      input: DeleteTableBucketReplicationCommandInput;
      output: DeleteTableBucketReplicationCommandOutput;
    };
  };
}

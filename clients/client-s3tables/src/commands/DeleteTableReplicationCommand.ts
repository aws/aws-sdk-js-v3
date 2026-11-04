// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTableReplicationRequest } from "../models/models_0";
import { DeleteTableReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTableReplicationCommand}.
 */
export interface DeleteTableReplicationCommandInput extends DeleteTableReplicationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTableReplicationCommand}.
 */
export interface DeleteTableReplicationCommandOutput extends __MetadataBearer {}

/**
 * Deletes the replication configuration for a specific table. After deletion, new updates to this table will no longer be replicated to destination tables, though existing replicated copies will remain in destination buckets.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:DeleteTableReplication` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, DeleteTableReplicationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, DeleteTableReplicationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // DeleteTableReplicationRequest
 *   tableArn: "STRING_VALUE", // required
 *   versionToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteTableReplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTableReplicationCommandInput - {@link DeleteTableReplicationCommandInput}
 * @returns {@link DeleteTableReplicationCommandOutput}
 * @see {@link DeleteTableReplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteTableReplicationCommandOutput} for command's `response` shape.
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
export class DeleteTableReplicationCommand extends command<DeleteTableReplicationCommandInput, DeleteTableReplicationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTableReplication",
  DeleteTableReplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTableReplicationRequest;
      output: {};
    };
    sdk: {
      input: DeleteTableReplicationCommandInput;
      output: DeleteTableReplicationCommandOutput;
    };
  };
}

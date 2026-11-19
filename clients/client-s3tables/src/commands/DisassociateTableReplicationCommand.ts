// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateTableReplicationRequest, DisassociateTableReplicationResponse } from "../models/models_0";
import { DisassociateTableReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateTableReplicationCommand}.
 */
export interface DisassociateTableReplicationCommandInput extends DisassociateTableReplicationRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateTableReplicationCommand}.
 */
export interface DisassociateTableReplicationCommandOutput extends DisassociateTableReplicationResponse, __MetadataBearer {}

/**
 * <p>Disassociates a replica table from replication, making it a standalone writable table. Any in-progress replication to the table stops, and in-flight commits fail without being committed to the table. Disassociating a table from replication is permanent and can't be reversed.</p> <p>You can only disassociate a replica table. If you call this operation on a table that isn't a replica table, including a table that you have already disassociated, the request fails.</p> <p>After you disassociate a table from replication, you can write to the table as you do any other table. <code>GetTable</code> no longer returns <code>managedByService</code> and <code>managedTableInformation</code> for the table, and <code>ListTables</code> no longer returns <code>managedByService</code> for it. On the source table, <code>GetTableReplicationStatus</code> reports a failure for this destination the next time replication to it is attempted.</p> <p>Disassociating a table from replication doesn't change its maintenance configuration. Review the maintenance settings of the table, such as compaction, after you disassociate it.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3tables:DisassociateTableReplication</code> permission to use this operation.</p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, DisassociateTableReplicationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, DisassociateTableReplicationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // DisassociateTableReplicationRequest
 *   tableArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateTableReplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateTableReplicationCommandInput - {@link DisassociateTableReplicationCommandInput}
 * @returns {@link DisassociateTableReplicationCommandOutput}
 * @see {@link DisassociateTableReplicationCommandInput} for command's `input` shape.
 * @see {@link DisassociateTableReplicationCommandOutput} for command's `response` shape.
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
export class DisassociateTableReplicationCommand extends command<DisassociateTableReplicationCommandInput, DisassociateTableReplicationCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateTableReplication",
  DisassociateTableReplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateTableReplicationRequest;
      output: {};
    };
    sdk: {
      input: DisassociateTableReplicationCommandInput;
      output: DisassociateTableReplicationCommandOutput;
    };
  };
}

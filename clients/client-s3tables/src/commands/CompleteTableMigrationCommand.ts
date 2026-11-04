// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CompleteTableMigrationRequest } from "../models/models_0";
import { CompleteTableMigration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CompleteTableMigrationCommand}.
 */
export interface CompleteTableMigrationCommandInput extends CompleteTableMigrationRequest {}
/**
 * @public
 *
 * The output of {@link CompleteTableMigrationCommand}.
 */
export interface CompleteTableMigrationCommandOutput extends __MetadataBearer {}

/**
 * <p>Completes the migration of a table. The table's most recent migration must be in the <code>succeeded</code>, <code>failed</code> or <code>cancelled</code> state. After you complete the migration, you can't sync the table again, and you can write to and maintain the table as you do any other table: compaction starts, and unreferenced file removal follows the table bucket's configuration. You can't undo this operation. Calling it again for the same table returns a <code>ConflictException</code>.</p> <dl> <dt>Permissions</dt> <dd> <ul> <li> <p>You must have the <code>s3tables:CompleteTableMigration</code> permission to use this operation.</p> </li> </ul> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, CompleteTableMigrationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, CompleteTableMigrationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // CompleteTableMigrationRequest
 *   tableARN: "STRING_VALUE", // required
 * };
 * const command = new CompleteTableMigrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CompleteTableMigrationCommandInput - {@link CompleteTableMigrationCommandInput}
 * @returns {@link CompleteTableMigrationCommandOutput}
 * @see {@link CompleteTableMigrationCommandInput} for command's `input` shape.
 * @see {@link CompleteTableMigrationCommandOutput} for command's `response` shape.
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
export class CompleteTableMigrationCommand extends command<CompleteTableMigrationCommandInput, CompleteTableMigrationCommandOutput>(
  _ep0,
  _mw0,
  "CompleteTableMigration",
  CompleteTableMigration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompleteTableMigrationRequest;
      output: {};
    };
    sdk: {
      input: CompleteTableMigrationCommandInput;
      output: CompleteTableMigrationCommandOutput;
    };
  };
}

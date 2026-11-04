// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTableMigrationRequest, UpdateTableMigrationResponse } from "../models/models_0";
import { UpdateTableMigration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTableMigrationCommand}.
 */
export interface UpdateTableMigrationCommandInput extends UpdateTableMigrationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTableMigrationCommand}.
 */
export interface UpdateTableMigrationCommandOutput extends UpdateTableMigrationResponse, __MetadataBearer {}

/**
 * <p>Requests a state change for a migration. Identify the migration by its <code>migrationId</code> or by the <code>tableARN</code> of its destination table.</p> <p>Set <code>requestedState</code> to <code>queued</code> to continue a migration in the <code>pendingReview</code> state; the migration moves to <code>queued</code> or <code>migrating</code>. Set it to <code>cancelled</code> to cancel a migration in the <code>new</code>, <code>planning</code>, <code>pendingReview</code>, <code>queued</code> or <code>migrating</code> state; the migration moves to <code>cancelling</code>, finishes the work in progress, and then ends in the <code>cancelled</code> state, or in the <code>failed</code> state if any objects failed to migrate. Data that the migration already committed stays in the destination table.</p> <dl> <dt>Permissions</dt> <dd> <ul> <li> <p>You must have the <code>s3tables:UpdateTableMigration</code> permission to use this operation.</p> </li> </ul> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, UpdateTableMigrationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, UpdateTableMigrationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // UpdateTableMigrationRequest
 *   tableARN: "STRING_VALUE",
 *   migrationId: "STRING_VALUE",
 *   requestedState: "queued" || "cancelled", // required
 *   updateDescription: "STRING_VALUE",
 * };
 * const command = new UpdateTableMigrationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTableMigrationResponse
 * //   migrationId: "STRING_VALUE", // required
 * //   state: "new" || "planning" || "pendingReview" || "queued" || "migrating" || "succeeded" || "failed" || "cancelling" || "cancelled", // required
 * //   tableARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateTableMigrationCommandInput - {@link UpdateTableMigrationCommandInput}
 * @returns {@link UpdateTableMigrationCommandOutput}
 * @see {@link UpdateTableMigrationCommandInput} for command's `input` shape.
 * @see {@link UpdateTableMigrationCommandOutput} for command's `response` shape.
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
export class UpdateTableMigrationCommand extends command<UpdateTableMigrationCommandInput, UpdateTableMigrationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTableMigration",
  UpdateTableMigration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTableMigrationRequest;
      output: UpdateTableMigrationResponse;
    };
    sdk: {
      input: UpdateTableMigrationCommandInput;
      output: UpdateTableMigrationCommandOutput;
    };
  };
}

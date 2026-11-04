// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTableMigrationsRequest, ListTableMigrationsResponse } from "../models/models_0";
import { ListTableMigrations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTableMigrationsCommand}.
 */
export interface ListTableMigrationsCommandInput extends ListTableMigrationsRequest {}
/**
 * @public
 *
 * The output of {@link ListTableMigrationsCommand}.
 */
export interface ListTableMigrationsCommandOutput extends ListTableMigrationsResponse, __MetadataBearer {}

/**
 * <p>Lists the migrations whose destination is in a table bucket, a namespace or a table. Specify a <code>tableBucketARN</code> to list the migrations into a table bucket, and add a <code>namespace</code>, or a <code>namespace</code> and a <code>name</code>, to narrow the list. Or specify a <code>tableARN</code> to list the migrations into a table.</p> <p>Migrations are listed newest first. Results are paginated: use <code>maxResults</code> to set the page size, and pass the <code>nextToken</code> from a response to retrieve the next page of results. A page can contain fewer migrations than <code>maxResults</code>, or none, and still return a <code>nextToken</code>. Continue until a response has no <code>nextToken</code>.</p> <dl> <dt>Permissions</dt> <dd> <ul> <li> <p>You must have the <code>s3tables:ListTableMigrations</code> permission to use this operation.</p> </li> </ul> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, ListTableMigrationsCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, ListTableMigrationsCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // ListTableMigrationsRequest
 *   tableBucketARN: "STRING_VALUE",
 *   namespace: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   tableARN: "STRING_VALUE",
 *   state: "new" || "planning" || "pendingReview" || "queued" || "migrating" || "succeeded" || "failed" || "cancelling" || "cancelled",
 *   hasValidPlan: true || false,
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTableMigrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListTableMigrationsResponse
 * //   migrations: [ // MigrationSummaryList // required
 * //     { // MigrationSummary
 * //       migrationId: "STRING_VALUE", // required
 * //       tableBucketARN: "STRING_VALUE", // required
 * //       namespace: "STRING_VALUE", // required
 * //       tableARN: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       type: "start" || "sync", // required
 * //       state: "new" || "planning" || "pendingReview" || "queued" || "migrating" || "succeeded" || "failed" || "cancelling" || "cancelled", // required
 * //       hasValidPlan: true || false,
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       stateUpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTableMigrationsCommandInput - {@link ListTableMigrationsCommandInput}
 * @returns {@link ListTableMigrationsCommandOutput}
 * @see {@link ListTableMigrationsCommandInput} for command's `input` shape.
 * @see {@link ListTableMigrationsCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The action cannot be performed because you do not have the required permission.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is invalid or malformed.</p>
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
export class ListTableMigrationsCommand extends command<ListTableMigrationsCommandInput, ListTableMigrationsCommandOutput>(
  _ep0,
  _mw0,
  "ListTableMigrations",
  ListTableMigrations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTableMigrationsRequest;
      output: ListTableMigrationsResponse;
    };
    sdk: {
      input: ListTableMigrationsCommandInput;
      output: ListTableMigrationsCommandOutput;
    };
  };
}

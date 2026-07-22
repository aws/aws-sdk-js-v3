// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMigrationsRequest, ListMigrationsResponse } from "../models/models_0";
import { ListMigrations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMigrationsCommand}.
 */
export interface ListMigrationsCommandInput extends ListMigrationsRequest {}
/**
 * @public
 *
 * The output of {@link ListMigrationsCommand}.
 */
export interface ListMigrationsCommandOutput extends ListMigrationsResponse, __MetadataBearer {}

/**
 * <p>Lists migration jobs for an Amazon OpenSearch Service application. You can filter results by migration status. Use pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListMigrationsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListMigrationsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // ListMigrationsRequest
 *   applicationId: "STRING_VALUE", // required
 *   status: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMigrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListMigrationsResponse
 * //   migrations: [ // MigrationSummaryList
 * //     { // MigrationSummary
 * //       migrationId: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       applicationId: "STRING_VALUE",
 * //       source: { // MigrationSource
 * //         datasourceArn: "STRING_VALUE", // required
 * //       },
 * //       exportedCount: Number("int"),
 * //       importedCount: Number("int"),
 * //       error: { // MigrationError
 * //         code: "STRING_VALUE",
 * //         message: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMigrationsCommandInput - {@link ListMigrationsCommandInput}
 * @returns {@link ListMigrationsCommandOutput}
 * @see {@link ListMigrationsCommandInput} for command's `input` shape.
 * @see {@link ListMigrationsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An error occurred because you don't have permissions to access the resource.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class ListMigrationsCommand extends command<ListMigrationsCommandInput, ListMigrationsCommandOutput>(
  _ep0,
  _mw0,
  "ListMigrations",
  ListMigrations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMigrationsRequest;
      output: ListMigrationsResponse;
    };
    sdk: {
      input: ListMigrationsCommandInput;
      output: ListMigrationsCommandOutput;
    };
  };
}

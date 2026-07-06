// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMigrationRequest, StartMigrationResponse } from "../models/models_1";
import { StartMigration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMigrationCommand}.
 */
export interface StartMigrationCommandInput extends StartMigrationRequest {}
/**
 * @public
 *
 * The output of {@link StartMigrationCommand}.
 */
export interface StartMigrationCommandOutput extends StartMigrationResponse, __MetadataBearer {}

/**
 * <p>Initiates a migration job to migrate saved objects from a data source to an Amazon OpenSearch Service application workspace. Saved objects include dashboards, visualizations, index patterns, and searches. You can specify export filters to control the scope of the migration and a conflict resolution strategy for handling existing objects in the target workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, StartMigrationCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, StartMigrationCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // StartMigrationRequest
 *   applicationId: "STRING_VALUE", // required
 *   migrationOptions: { // MigrationOptions
 *     source: { // MigrationSource
 *       datasourceArn: "STRING_VALUE", // required
 *     },
 *     workspace: { // MigrationWorkspace
 *       workspaceId: "STRING_VALUE",
 *       createWorkspace: true || false,
 *       name: "STRING_VALUE",
 *       type: "STRING_VALUE",
 *     },
 *     exportOptions: { // ExportOptions
 *       types: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *       objects: [ // SavedObjectIdentifierList
 *         { // SavedObjectIdentifier
 *           type: "STRING_VALUE", // required
 *           id: "STRING_VALUE", // required
 *         },
 *       ],
 *       includeReferencesDeep: true || false,
 *     },
 *     conflictResolution: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartMigrationCommand(input);
 * const response = await client.send(command);
 * // { // StartMigrationResponse
 * //   migrationId: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMigrationCommandInput - {@link StartMigrationCommandInput}
 * @returns {@link StartMigrationCommandOutput}
 * @see {@link StartMigrationCommandInput} for command's `input` shape.
 * @see {@link StartMigrationCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An error occurred because you don't have permissions to access the resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred because the client attempts to remove a resource that is currently in use.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
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
export class StartMigrationCommand extends command<StartMigrationCommandInput, StartMigrationCommandOutput>(
  _ep0,
  _mw0,
  "StartMigration",
  StartMigration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMigrationRequest;
      output: StartMigrationResponse;
    };
    sdk: {
      input: StartMigrationCommandInput;
      output: StartMigrationCommandOutput;
    };
  };
}

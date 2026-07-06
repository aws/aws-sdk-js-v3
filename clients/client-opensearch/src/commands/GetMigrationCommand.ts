// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMigrationRequest, GetMigrationResponse } from "../models/models_0";
import { GetMigration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMigrationCommand}.
 */
export interface GetMigrationCommandInput extends GetMigrationRequest {}
/**
 * @public
 *
 * The output of {@link GetMigrationCommand}.
 */
export interface GetMigrationCommandOutput extends GetMigrationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the current status and progress of a migration job, including the number of exported and imported objects and error details if the migration failed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, GetMigrationCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, GetMigrationCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // GetMigrationRequest
 *   migrationId: "STRING_VALUE", // required
 * };
 * const command = new GetMigrationCommand(input);
 * const response = await client.send(command);
 * // { // GetMigrationResponse
 * //   migrationId: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   applicationId: "STRING_VALUE",
 * //   source: { // MigrationSource
 * //     datasourceArn: "STRING_VALUE", // required
 * //   },
 * //   exportedCount: Number("int"),
 * //   importedCount: Number("int"),
 * //   error: { // MigrationError
 * //     code: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetMigrationCommandInput - {@link GetMigrationCommandInput}
 * @returns {@link GetMigrationCommandOutput}
 * @see {@link GetMigrationCommandInput} for command's `input` shape.
 * @see {@link GetMigrationCommandOutput} for command's `response` shape.
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
export class GetMigrationCommand extends command<GetMigrationCommandInput, GetMigrationCommandOutput>(
  _ep0,
  _mw0,
  "GetMigration",
  GetMigration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMigrationRequest;
      output: GetMigrationResponse;
    };
    sdk: {
      input: GetMigrationCommandInput;
      output: GetMigrationCommandOutput;
    };
  };
}

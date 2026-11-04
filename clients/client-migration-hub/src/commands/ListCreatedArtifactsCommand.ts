// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCreatedArtifactsRequest, ListCreatedArtifactsResult } from "../models/models_0";
import { ListCreatedArtifacts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCreatedArtifactsCommand}.
 */
export interface ListCreatedArtifactsCommandInput extends ListCreatedArtifactsRequest {}
/**
 * @public
 *
 * The output of {@link ListCreatedArtifactsCommand}.
 */
export interface ListCreatedArtifactsCommandOutput extends ListCreatedArtifactsResult, __MetadataBearer {}

/**
 * Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:
 *
 * - Gets the list of the created artifacts while migration is taking place.
 * - Shows the artifacts created by the migration tool that was associated by the `AssociateCreatedArtifact` API.
 * - Lists created artifacts in a paginated interface.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListCreatedArtifactsCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListCreatedArtifactsCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // ListCreatedArtifactsRequest
 *   ProgressUpdateStream: "STRING_VALUE", // required
 *   MigrationTaskName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCreatedArtifactsCommand(input);
 * const response = await client.send(command);
 * // { // ListCreatedArtifactsResult
 * //   NextToken: "STRING_VALUE",
 * //   CreatedArtifactList: [ // CreatedArtifactList
 * //     { // CreatedArtifact
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCreatedArtifactsCommandInput - {@link ListCreatedArtifactsCommandInput}
 * @returns {@link ListCreatedArtifactsCommandOutput}
 * @see {@link ListCreatedArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListCreatedArtifactsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *
 * The home region is not set. Set the home region to continue.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Exception raised when an internal, configuration, or dependency error is encountered.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Exception raised when the request references a resource (Application Discovery Service configuration, update stream, migration task, etc.) that does not exist in Application Discovery Service (Application Discovery Service) or in Migration Hub's repository.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * Exception raised when there is an internal, configuration, or dependency error encountered.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link MigrationHubServiceException}
 *
 * Base exception class for all service exceptions from MigrationHub service.
 *
 * @public
 */
export class ListCreatedArtifactsCommand extends command<ListCreatedArtifactsCommandInput, ListCreatedArtifactsCommandOutput>(
  _ep0,
  _mw0,
  "ListCreatedArtifacts",
  ListCreatedArtifacts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCreatedArtifactsRequest;
      output: ListCreatedArtifactsResult;
    };
    sdk: {
      input: ListCreatedArtifactsCommandInput;
      output: ListCreatedArtifactsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListApplicationStatesRequest, ListApplicationStatesResult } from "../models/models_0";
import { ListApplicationStates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListApplicationStatesCommand}.
 */
export interface ListApplicationStatesCommandInput extends ListApplicationStatesRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationStatesCommand}.
 */
export interface ListApplicationStatesCommandOutput extends ListApplicationStatesResult, __MetadataBearer {}

/**
 * Lists all the migration statuses for your applications. If you use the optional `ApplicationIds` parameter, only the migration statuses for those applications will be returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListApplicationStatesCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListApplicationStatesCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // ListApplicationStatesRequest
 *   ApplicationIds: [ // ApplicationIds
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListApplicationStatesCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationStatesResult
 * //   ApplicationStateList: [ // ApplicationStateList
 * //     { // ApplicationState
 * //       ApplicationId: "STRING_VALUE",
 * //       ApplicationStatus: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETED",
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationStatesCommandInput - {@link ListApplicationStatesCommandInput}
 * @returns {@link ListApplicationStatesCommandOutput}
 * @see {@link ListApplicationStatesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationStatesCommandOutput} for command's `response` shape.
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
export class ListApplicationStatesCommand extends command<ListApplicationStatesCommandInput, ListApplicationStatesCommandOutput>(
  _ep0,
  _mw0,
  "ListApplicationStates",
  ListApplicationStates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationStatesRequest;
      output: ListApplicationStatesResult;
    };
    sdk: {
      input: ListApplicationStatesCommandInput;
      output: ListApplicationStatesCommandOutput;
    };
  };
}

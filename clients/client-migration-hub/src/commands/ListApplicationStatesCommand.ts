// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ListApplicationStatesRequest, ListApplicationStatesResult } from "../models/models_0";
import { ListApplicationStates } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists all the migration statuses for your applications. If you use the optional
 *             <code>ApplicationIds</code> parameter, only the migration statuses for those
 *          applications will be returned.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home region is not set. Set the home region to continue.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Exception raised when an internal, configuration, or dependency error is
 *          encountered.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Exception raised when the provided input violates a policy constraint or is entered in
 *          the wrong format or data type.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Exception raised when there is an internal, configuration, or dependency error
 *          encountered.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link MigrationHubServiceException}
 * <p>Base exception class for all service exceptions from MigrationHub service.</p>
 *
 *
 * @public
 */
export class ListApplicationStatesCommand extends $Command
  .classBuilder<
    ListApplicationStatesCommandInput,
    ListApplicationStatesCommandOutput,
    MigrationHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHub", "ListApplicationStates", {})
  .n("MigrationHubClient", "ListApplicationStatesCommand")
  .sc(ListApplicationStates)
  .build() {
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

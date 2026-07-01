// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExperimentDefinitions, ListExperimentDefinitionsRequest } from "../models/models_0";
import { ListExperimentDefinitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListExperimentDefinitionsCommand}.
 */
export interface ListExperimentDefinitionsCommandInput extends ListExperimentDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListExperimentDefinitionsCommand}.
 */
export interface ListExperimentDefinitionsCommandOutput extends ExperimentDefinitions, __MetadataBearer {}

/**
 * <p>Lists the experiment definitions for an account. You can filter results by application, configuration profile, environment, or status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListExperimentDefinitionsCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListExperimentDefinitionsCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // ListExperimentDefinitionsRequest
 *   ApplicationIdentifier: "STRING_VALUE",
 *   ConfigurationProfileIdentifier: "STRING_VALUE",
 *   EnvironmentIdentifier: "STRING_VALUE",
 *   Status: "ACTIVE" || "IDLE" || "ARCHIVED",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListExperimentDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ExperimentDefinitions
 * //   Items: [ // ExperimentDefinitionList
 * //     { // ExperimentDefinitionSummary
 * //       ApplicationId: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Hypothesis: "STRING_VALUE",
 * //       Status: "ACTIVE" || "IDLE" || "ARCHIVED",
 * //       ConfigurationProfileId: "STRING_VALUE",
 * //       EnvironmentId: "STRING_VALUE",
 * //       FlagKey: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExperimentDefinitionsCommandInput - {@link ListExperimentDefinitionsCommandInput}
 * @returns {@link ListExperimentDefinitionsCommandOutput}
 * @see {@link ListExperimentDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListExperimentDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 *
 * @example To list experiment definitions
 * ```javascript
 * // The following ListExperimentDefinitions example lists the experiment definitions for an application.
 * const input = {
 *   ApplicationIdentifier: "339ohji"
 * };
 * const command = new ListExperimentDefinitionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       ApplicationId: "339ohji",
 *       ConfigurationProfileId: "ur8hx2f",
 *       CreatedAt: "2026-06-16T17:54:55.847Z",
 *       EnvironmentId: "54j1r29",
 *       FlagKey: "my-feature-flag",
 *       Id: "bsxyd7k",
 *       Name: "Example-Experiment-Definition",
 *       Status: "IDLE",
 *       UpdatedAt: "2026-06-16T17:57:36Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListExperimentDefinitionsCommand extends command<ListExperimentDefinitionsCommandInput, ListExperimentDefinitionsCommandOutput>(
  _ep0,
  _mw0,
  "ListExperimentDefinitions",
  ListExperimentDefinitions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExperimentDefinitionsRequest;
      output: ExperimentDefinitions;
    };
    sdk: {
      input: ListExperimentDefinitionsCommandInput;
      output: ListExperimentDefinitionsCommandOutput;
    };
  };
}

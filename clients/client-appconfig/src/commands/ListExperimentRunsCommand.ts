// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ExperimentRuns, ListExperimentRunsRequest } from "../models/models_0";
import { ListExperimentRuns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExperimentRunsCommand}.
 */
export interface ListExperimentRunsCommandInput extends ListExperimentRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListExperimentRunsCommand}.
 */
export interface ListExperimentRunsCommandOutput extends ExperimentRuns, __MetadataBearer {}

/**
 * <p>Lists the experiment runs for a specified experiment definition. You can filter by status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListExperimentRunsCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListExperimentRunsCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // ListExperimentRunsRequest
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   ExperimentDefinitionIdentifier: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Status: "RUNNING" || "DONE",
 * };
 * const command = new ListExperimentRunsCommand(input);
 * const response = await client.send(command);
 * // { // ExperimentRuns
 * //   Items: [ // ExperimentRunSummaryList
 * //     { // ExperimentRunSummary
 * //       ExperimentDefinitionId: "STRING_VALUE",
 * //       Run: Number("int"),
 * //       Description: "STRING_VALUE",
 * //       Status: "RUNNING" || "DONE",
 * //       StartedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       EndedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExperimentRunsCommandInput - {@link ListExperimentRunsCommandInput}
 * @returns {@link ListExperimentRunsCommandOutput}
 * @see {@link ListExperimentRunsCommandInput} for command's `input` shape.
 * @see {@link ListExperimentRunsCommandOutput} for command's `response` shape.
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
 * @example To list experiment runs
 * ```javascript
 * // The following ListExperimentRuns example lists the experiment runs for an experiment definition.
 * const input = {
 *   ApplicationIdentifier: "339ohji",
 *   ExperimentDefinitionIdentifier: "bsxyd7k"
 * };
 * const command = new ListExperimentRunsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       EndedAt: "2026-06-16T17:57:36.083Z",
 *       ExperimentDefinitionId: "bsxyd7k",
 *       Run: 1,
 *       StartedAt: "2026-06-16T17:57:10.046Z",
 *       Status: "DONE",
 *       UpdatedAt: "2026-06-16T17:57:36.083Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListExperimentRunsCommand extends $Command
  .classBuilder<
    ListExperimentRunsCommandInput,
    ListExperimentRunsCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "ListExperimentRuns", {})
  .n("AppConfigClient", "ListExperimentRunsCommand")
  .sc(ListExperimentRuns$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExperimentRunsRequest;
      output: ExperimentRuns;
    };
    sdk: {
      input: ListExperimentRunsCommandInput;
      output: ListExperimentRunsCommandOutput;
    };
  };
}

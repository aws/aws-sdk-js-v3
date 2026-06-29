// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ExperimentRunEvents, ListExperimentRunEventsRequest } from "../models/models_0";
import { ListExperimentRunEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExperimentRunEventsCommand}.
 */
export interface ListExperimentRunEventsCommandInput extends ListExperimentRunEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListExperimentRunEventsCommand}.
 */
export interface ListExperimentRunEventsCommandOutput extends ExperimentRunEvents, __MetadataBearer {}

/**
 * <p>Lists the events for a specified experiment run. Events provide a timeline of actions and state changes that occurred during the run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListExperimentRunEventsCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListExperimentRunEventsCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // ListExperimentRunEventsRequest
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   ExperimentDefinitionIdentifier: "STRING_VALUE", // required
 *   Run: Number("int"), // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListExperimentRunEventsCommand(input);
 * const response = await client.send(command);
 * // { // ExperimentRunEvents
 * //   Items: [ // ExperimentRunEventList
 * //     { // ExperimentRunEvent
 * //       Description: "STRING_VALUE",
 * //       AssociatedDeployment: "STRING_VALUE",
 * //       EventType: "RUN_STARTED" || "EXPOSURE_UPDATED" || "OVERRIDES_UPDATED" || "RUN_STOPPED",
 * //       OccurredAt: new Date("TIMESTAMP"),
 * //       TriggeredBy: "USER" || "APPCONFIG" || "CLOUDWATCH_ALARM" || "INTERNAL_ERROR",
 * //       ExposurePercentage: Number("float"),
 * //       TreatmentOverrides: { // TreatmentOverrides Union: only one key present
 * //         Inline: { // TreatmentOverrideMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExperimentRunEventsCommandInput - {@link ListExperimentRunEventsCommandInput}
 * @returns {@link ListExperimentRunEventsCommandOutput}
 * @see {@link ListExperimentRunEventsCommandInput} for command's `input` shape.
 * @see {@link ListExperimentRunEventsCommandOutput} for command's `response` shape.
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
 * @example To list experiment run events
 * ```javascript
 * // The following ListExperimentRunEvents example lists the events for an experiment run.
 * const input = {
 *   ApplicationIdentifier: "339ohji",
 *   ExperimentDefinitionIdentifier: "bsxyd7k",
 *   Run: 1
 * };
 * const command = new ListExperimentRunEventsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Description: "Experiment run stopped",
 *       EventType: "RUN_STOPPED",
 *       ExposurePercentage: 50.0,
 *       OccurredAt: "2026-06-16T17:57:36.083Z",
 *       TriggeredBy: "USER"
 *     },
 *     {
 *       Description: "Experiment run started",
 *       EventType: "RUN_STARTED",
 *       ExposurePercentage: 50.0,
 *       OccurredAt: "2026-06-16T17:57:10.567Z",
 *       TriggeredBy: "USER"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListExperimentRunEventsCommand extends $Command
  .classBuilder<
    ListExperimentRunEventsCommandInput,
    ListExperimentRunEventsCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "ListExperimentRunEvents", {})
  .n("AppConfigClient", "ListExperimentRunEventsCommand")
  .sc(ListExperimentRunEvents$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExperimentRunEventsRequest;
      output: ExperimentRunEvents;
    };
    sdk: {
      input: ListExperimentRunEventsCommandInput;
      output: ListExperimentRunEventsCommandOutput;
    };
  };
}

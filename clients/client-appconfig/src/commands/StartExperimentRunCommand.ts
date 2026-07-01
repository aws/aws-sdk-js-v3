// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExperimentRun, StartExperimentRunRequest } from "../models/models_0";
import { StartExperimentRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartExperimentRunCommand}.
 */
export interface StartExperimentRunCommandInput extends StartExperimentRunRequest {}
/**
 * @public
 *
 * The output of {@link StartExperimentRunCommand}.
 */
export interface StartExperimentRunCommandOutput extends ExperimentRun, __MetadataBearer {}

/**
 * <p>Starts an experiment run for the specified experiment definition. An experiment run delivers treatments to the target audience and collects metrics. You can start multiple experiment runs from the same experiment definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, StartExperimentRunCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, StartExperimentRunCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // StartExperimentRunRequest
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   ExperimentDefinitionIdentifier: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ExposurePercentage: Number("float"),
 *   TreatmentOverrides: { // TreatmentOverrides Union: only one key present
 *     Inline: { // TreatmentOverrideMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DeploymentParameters: { // DeploymentParameters
 *     DynamicExtensionParameters: { // DynamicParameterMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     Tags: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new StartExperimentRunCommand(input);
 * const response = await client.send(command);
 * // { // ExperimentRun
 * //   ApplicationId: "STRING_VALUE",
 * //   ExperimentDefinitionId: "STRING_VALUE",
 * //   Run: Number("int"),
 * //   Description: "STRING_VALUE",
 * //   Status: "RUNNING" || "DONE",
 * //   ExposurePercentage: Number("float"),
 * //   TreatmentOverrides: { // TreatmentOverrides Union: only one key present
 * //     Inline: { // TreatmentOverrideMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   Result: { // ExperimentRunResult
 * //     ExecutiveSummary: "STRING_VALUE",
 * //     ReasonsToLaunch: "STRING_VALUE",
 * //     ReasonsNotToLaunch: "STRING_VALUE",
 * //   },
 * //   StartedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   EndedAt: new Date("TIMESTAMP"),
 * //   ExperimentDefinitionSnapshot: { // ExperimentDefinitionSnapshot
 * //     ApplicationId: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Hypothesis: "STRING_VALUE",
 * //     ConfigurationProfileId: "STRING_VALUE",
 * //     EnvironmentId: "STRING_VALUE",
 * //     FlagKey: "STRING_VALUE",
 * //     AudienceRule: "STRING_VALUE",
 * //     AudienceDescription: "STRING_VALUE",
 * //     LaunchCriteria: "STRING_VALUE",
 * //     Treatments: [ // TreatmentList
 * //       { // Treatment
 * //         Key: "STRING_VALUE",
 * //         Weight: Number("float"), // required
 * //         Description: "STRING_VALUE",
 * //         FlagValue: { // FlagValue
 * //           Enabled: true || false, // required
 * //           AttributeValues: { // AttributeValueMap
 * //             "<keys>": { // AttributeValue Union: only one key present
 * //               StringValue: "STRING_VALUE",
 * //               NumberValue: Number("double"),
 * //               BooleanValue: true || false,
 * //               StringArray: [ // StringList
 * //                 "STRING_VALUE",
 * //               ],
 * //               NumberArray: [ // NumberList
 * //                 Number("double"),
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     Control: {
 * //       Key: "STRING_VALUE",
 * //       Weight: Number("float"), // required
 * //       Description: "STRING_VALUE",
 * //       FlagValue: {
 * //         Enabled: true || false, // required
 * //         AttributeValues: {
 * //           "<keys>": {//  Union: only one key present
 * //             StringValue: "STRING_VALUE",
 * //             NumberValue: Number("double"),
 * //             BooleanValue: true || false,
 * //             StringArray: [
 * //               "STRING_VALUE",
 * //             ],
 * //             NumberArray: [
 * //               Number("double"),
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartExperimentRunCommandInput - {@link StartExperimentRunCommandInput}
 * @returns {@link StartExperimentRunCommandOutput}
 * @see {@link StartExperimentRunCommandInput} for command's `input` shape.
 * @see {@link StartExperimentRunCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
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
 * @example To start an experiment run
 * ```javascript
 * // The following StartExperimentRun example starts an experiment run with 50% audience exposure.
 * const input = {
 *   ApplicationIdentifier: "339ohji",
 *   ExperimentDefinitionIdentifier: "bsxyd7k",
 *   ExposurePercentage: 50.0
 * };
 * const command = new StartExperimentRunCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationId: "339ohji",
 *   ExperimentDefinitionId: "bsxyd7k",
 *   ExperimentDefinitionSnapshot: {
 *     ApplicationId: "339ohji",
 *     AudienceRule: `(eq $country "US")`,
 *     ConfigurationProfileId: "ur8hx2f",
 *     Control: {
 *       FlagValue: {
 *         Enabled: false
 *       },
 *       Key: "c",
 *       Weight: 50.0
 *     },
 *     EnvironmentId: "54j1r29",
 *     FlagKey: "my-feature-flag",
 *     Id: "bsxyd7k",
 *     Name: "Example-Experiment-Definition",
 *     Treatments: [
 *       {
 *         FlagValue: {
 *           Enabled: true
 *         },
 *         Key: "t1",
 *         Weight: 50.0
 *       }
 *     ]
 *   },
 *   ExposurePercentage: 50.0,
 *   Run: 1,
 *   StartedAt: "2026-06-16T17:57:10.046Z",
 *   Status: "RUNNING",
 *   UpdatedAt: "2026-06-16T17:57:10.567Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartExperimentRunCommand extends command<StartExperimentRunCommandInput, StartExperimentRunCommandOutput>(
  _ep0,
  _mw0,
  "StartExperimentRun",
  StartExperimentRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartExperimentRunRequest;
      output: ExperimentRun;
    };
    sdk: {
      input: StartExperimentRunCommandInput;
      output: StartExperimentRunCommandOutput;
    };
  };
}

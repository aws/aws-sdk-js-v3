// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ExperimentRun, GetExperimentRunRequest } from "../models/models_0";
import { GetExperimentRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExperimentRunCommand}.
 */
export interface GetExperimentRunCommandInput extends GetExperimentRunRequest {}
/**
 * @public
 *
 * The output of {@link GetExperimentRunCommand}.
 */
export interface GetExperimentRunCommandOutput extends ExperimentRun, __MetadataBearer {}

/**
 * <p>Retrieves information about an experiment run, including its status, start time, and exposure settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetExperimentRunCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetExperimentRunCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // GetExperimentRunRequest
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   ExperimentDefinitionIdentifier: "STRING_VALUE", // required
 *   Run: Number("int"), // required
 * };
 * const command = new GetExperimentRunCommand(input);
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
 * @param GetExperimentRunCommandInput - {@link GetExperimentRunCommandInput}
 * @returns {@link GetExperimentRunCommandOutput}
 * @see {@link GetExperimentRunCommandInput} for command's `input` shape.
 * @see {@link GetExperimentRunCommandOutput} for command's `response` shape.
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
 * @example To get an experiment run
 * ```javascript
 * // The following GetExperimentRun example retrieves the details of an experiment run.
 * const input = {
 *   ApplicationIdentifier: "339ohji",
 *   ExperimentDefinitionIdentifier: "bsxyd7k",
 *   Run: 1
 * };
 * const command = new GetExperimentRunCommand(input);
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
export class GetExperimentRunCommand extends $Command
  .classBuilder<
    GetExperimentRunCommandInput,
    GetExperimentRunCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "GetExperimentRun", {})
  .n("AppConfigClient", "GetExperimentRunCommand")
  .sc(GetExperimentRun$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExperimentRunRequest;
      output: ExperimentRun;
    };
    sdk: {
      input: GetExperimentRunCommandInput;
      output: GetExperimentRunCommandOutput;
    };
  };
}

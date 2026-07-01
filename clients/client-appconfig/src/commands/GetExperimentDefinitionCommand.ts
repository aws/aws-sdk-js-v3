// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExperimentDefinition, GetExperimentDefinitionRequest } from "../models/models_0";
import { GetExperimentDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetExperimentDefinitionCommand}.
 */
export interface GetExperimentDefinitionCommandInput extends GetExperimentDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetExperimentDefinitionCommand}.
 */
export interface GetExperimentDefinitionCommandOutput extends ExperimentDefinition, __MetadataBearer {}

/**
 * <p>Retrieves information about an experiment definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetExperimentDefinitionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetExperimentDefinitionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // GetExperimentDefinitionRequest
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   ExperimentDefinitionIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetExperimentDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // ExperimentDefinition
 * //   ApplicationId: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Hypothesis: "STRING_VALUE",
 * //   Status: "ACTIVE" || "IDLE" || "ARCHIVED",
 * //   ConfigurationProfileId: "STRING_VALUE",
 * //   EnvironmentId: "STRING_VALUE",
 * //   FlagKey: "STRING_VALUE",
 * //   AudienceRule: "STRING_VALUE",
 * //   AudienceDescription: "STRING_VALUE",
 * //   LaunchCriteria: "STRING_VALUE",
 * //   Treatments: [ // TreatmentList
 * //     { // Treatment
 * //       Key: "STRING_VALUE",
 * //       Weight: Number("float"), // required
 * //       Description: "STRING_VALUE",
 * //       FlagValue: { // FlagValue
 * //         Enabled: true || false, // required
 * //         AttributeValues: { // AttributeValueMap
 * //           "<keys>": { // AttributeValue Union: only one key present
 * //             StringValue: "STRING_VALUE",
 * //             NumberValue: Number("double"),
 * //             BooleanValue: true || false,
 * //             StringArray: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //             NumberArray: [ // NumberList
 * //               Number("double"),
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   Control: {
 * //     Key: "STRING_VALUE",
 * //     Weight: Number("float"), // required
 * //     Description: "STRING_VALUE",
 * //     FlagValue: {
 * //       Enabled: true || false, // required
 * //       AttributeValues: {
 * //         "<keys>": {//  Union: only one key present
 * //           StringValue: "STRING_VALUE",
 * //           NumberValue: Number("double"),
 * //           BooleanValue: true || false,
 * //           StringArray: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NumberArray: [
 * //             Number("double"),
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   KmsKeyIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetExperimentDefinitionCommandInput - {@link GetExperimentDefinitionCommandInput}
 * @returns {@link GetExperimentDefinitionCommandOutput}
 * @see {@link GetExperimentDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetExperimentDefinitionCommandOutput} for command's `response` shape.
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
 * @example To get an experiment definition
 * ```javascript
 * // The following GetExperimentDefinition example retrieves the details of an experiment definition.
 * const input = {
 *   ApplicationIdentifier: "339ohji",
 *   ExperimentDefinitionIdentifier: "bsxyd7k"
 * };
 * const command = new GetExperimentDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationId: "339ohji",
 *   AudienceRule: `(eq $country "US")`,
 *   ConfigurationProfileId: "ur8hx2f",
 *   Control: {
 *     FlagValue: {
 *       Enabled: false
 *     },
 *     Key: "c",
 *     Weight: 50.0
 *   },
 *   CreatedAt: "2026-06-16T17:54:55.847Z",
 *   EnvironmentId: "54j1r29",
 *   FlagKey: "my-feature-flag",
 *   Id: "bsxyd7k",
 *   Name: "Example-Experiment-Definition",
 *   Status: "IDLE",
 *   Treatments: [
 *     {
 *       FlagValue: {
 *         Enabled: true
 *       },
 *       Key: "t1",
 *       Weight: 50.0
 *     }
 *   ],
 *   UpdatedAt: "2026-06-16T17:57:36Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetExperimentDefinitionCommand extends command<GetExperimentDefinitionCommandInput, GetExperimentDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "GetExperimentDefinition",
  GetExperimentDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExperimentDefinitionRequest;
      output: ExperimentDefinition;
    };
    sdk: {
      input: GetExperimentDefinitionCommandInput;
      output: GetExperimentDefinitionCommandOutput;
    };
  };
}

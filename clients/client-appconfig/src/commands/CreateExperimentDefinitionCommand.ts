// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateExperimentDefinitionRequest, ExperimentDefinition } from "../models/models_0";
import { CreateExperimentDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateExperimentDefinitionCommand}.
 */
export interface CreateExperimentDefinitionCommandInput extends CreateExperimentDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateExperimentDefinitionCommand}.
 */
export interface CreateExperimentDefinitionCommandOutput extends ExperimentDefinition, __MetadataBearer {}

/**
 * <p>Creates an experiment definition in AppConfig. An experiment definition describes the purpose, scope, and operational configuration of an experiment, including the target audience, feature flag, and treatment configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateExperimentDefinitionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateExperimentDefinitionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // CreateExperimentDefinitionRequest
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   ConfigurationProfileIdentifier: "STRING_VALUE", // required
 *   EnvironmentIdentifier: "STRING_VALUE", // required
 *   FlagKey: "STRING_VALUE", // required
 *   Treatments: [ // TreatmentInputList // required
 *     { // TreatmentInput
 *       Weight: Number("float"), // required
 *       Description: "STRING_VALUE",
 *       FlagValue: { // FlagValue
 *         Enabled: true || false, // required
 *         AttributeValues: { // AttributeValueMap
 *           "<keys>": { // AttributeValue Union: only one key present
 *             StringValue: "STRING_VALUE",
 *             NumberValue: Number("double"),
 *             BooleanValue: true || false,
 *             StringArray: [ // StringList
 *               "STRING_VALUE",
 *             ],
 *             NumberArray: [ // NumberList
 *               Number("double"),
 *             ],
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   Control: {
 *     Weight: Number("float"), // required
 *     Description: "STRING_VALUE",
 *     FlagValue: {
 *       Enabled: true || false, // required
 *       AttributeValues: {
 *         "<keys>": {//  Union: only one key present
 *           StringValue: "STRING_VALUE",
 *           NumberValue: Number("double"),
 *           BooleanValue: true || false,
 *           StringArray: [
 *             "STRING_VALUE",
 *           ],
 *           NumberArray: [
 *             Number("double"),
 *           ],
 *         },
 *       },
 *     },
 *   },
 *   AudienceRule: "STRING_VALUE", // required
 *   Hypothesis: "STRING_VALUE",
 *   AudienceDescription: "STRING_VALUE",
 *   LaunchCriteria: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateExperimentDefinitionCommand(input);
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
 * @param CreateExperimentDefinitionCommandInput - {@link CreateExperimentDefinitionCommandInput}
 * @returns {@link CreateExperimentDefinitionCommandOutput}
 * @see {@link CreateExperimentDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateExperimentDefinitionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of one more AppConfig resources exceeds the maximum allowed. Verify that your
 *          environment doesn't exceed the following service quotas:</p>
 *          <p>Applications: 100 max</p>
 *          <p>To resolve this issue, you can delete one or more resources and try again. Or, you can
 *          request a quota increase. For more information about quotas and to request an increase, see
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/appconfig.html#limits_appconfig">Service quotas for AppConfig</a> in the Amazon Web Services General Reference.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 *
 * @example To create an experiment definition
 * ```javascript
 * // The following CreateExperimentDefinition example creates an experiment definition that tests a feature flag with a 50/50 traffic split.
 * const input = {
 *   ApplicationIdentifier: "339ohji",
 *   AudienceRule: `(eq $country "US")`,
 *   ConfigurationProfileIdentifier: "ur8hx2f",
 *   Control: {
 *     FlagValue: {
 *       Enabled: false
 *     },
 *     Weight: 50
 *   },
 *   EnvironmentIdentifier: "54j1r29",
 *   FlagKey: "my-feature-flag",
 *   Name: "Example-Experiment-Definition",
 *   Treatments: [
 *     {
 *       FlagValue: {
 *         Enabled: true
 *       },
 *       Weight: 50
 *     }
 *   ]
 * };
 * const command = new CreateExperimentDefinitionCommand(input);
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
 *   UpdatedAt: "2026-06-16T17:54:55.847Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateExperimentDefinitionCommand extends command<CreateExperimentDefinitionCommandInput, CreateExperimentDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "CreateExperimentDefinition",
  CreateExperimentDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExperimentDefinitionRequest;
      output: ExperimentDefinition;
    };
    sdk: {
      input: CreateExperimentDefinitionCommandInput;
      output: CreateExperimentDefinitionCommandOutput;
    };
  };
}

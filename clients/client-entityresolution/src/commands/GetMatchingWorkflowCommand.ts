// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMatchingWorkflowInput, GetMatchingWorkflowOutput } from "../models/models_0";
import { GetMatchingWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMatchingWorkflowCommand}.
 */
export interface GetMatchingWorkflowCommandInput extends GetMatchingWorkflowInput {}
/**
 * @public
 *
 * The output of {@link GetMatchingWorkflowCommand}.
 */
export interface GetMatchingWorkflowCommandOutput extends GetMatchingWorkflowOutput, __MetadataBearer {}

/**
 * Returns the `MatchingWorkflow` with a given name, if it exists.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GetMatchingWorkflowCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GetMatchingWorkflowCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // GetMatchingWorkflowInput
 *   workflowName: "STRING_VALUE", // required
 * };
 * const command = new GetMatchingWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // GetMatchingWorkflowOutput
 * //   workflowName: "STRING_VALUE", // required
 * //   workflowArn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   inputSourceConfig: [ // InputSourceConfig // required
 * //     { // InputSource
 * //       inputSourceARN: "STRING_VALUE", // required
 * //       schemaName: "STRING_VALUE", // required
 * //       applyNormalization: true || false,
 * //     },
 * //   ],
 * //   outputSourceConfig: [ // OutputSourceConfig // required
 * //     { // OutputSource
 * //       KMSArn: "STRING_VALUE",
 * //       outputS3Path: "STRING_VALUE",
 * //       output: [ // OutputAttributes // required
 * //         { // OutputAttribute
 * //           name: "STRING_VALUE", // required
 * //           hashed: true || false,
 * //         },
 * //       ],
 * //       applyNormalization: true || false,
 * //       customerProfilesIntegrationConfig: { // CustomerProfilesIntegrationConfig
 * //         domainArn: "STRING_VALUE", // required
 * //         objectTypeArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   resolutionTechniques: { // ResolutionTechniques
 * //     resolutionType: "RULE_MATCHING" || "ML_MATCHING" || "PROVIDER", // required
 * //     ruleBasedProperties: { // RuleBasedProperties
 * //       rules: [ // RuleList // required
 * //         { // Rule
 * //           ruleName: "STRING_VALUE", // required
 * //           matchingKeys: [ // MatchingKeys // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       attributeMatchingModel: "ONE_TO_ONE" || "MANY_TO_MANY", // required
 * //       matchPurpose: "IDENTIFIER_GENERATION" || "INDEXING",
 * //     },
 * //     ruleConditionProperties: { // RuleConditionProperties
 * //       rules: [ // RuleConditionList // required
 * //         { // RuleCondition
 * //           ruleName: "STRING_VALUE", // required
 * //           condition: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       matchingConfig: { // MatchingConfig
 * //         enableTransitiveMatching: true || false,
 * //       },
 * //     },
 * //     enableRealTimeMatching: true || false,
 * //     providerProperties: { // ProviderProperties
 * //       providerServiceArn: "STRING_VALUE", // required
 * //       providerConfiguration: "DOCUMENT_VALUE",
 * //       intermediateSourceConfiguration: { // IntermediateSourceConfiguration
 * //         intermediateS3Path: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   incrementalRunConfig: { // IncrementalRunConfig
 * //     incrementalRunType: "IMMEDIATE",
 * //   },
 * //   roleArn: "STRING_VALUE", // required
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMatchingWorkflowCommandInput - {@link GetMatchingWorkflowCommandInput}
 * @returns {@link GetMatchingWorkflowCommandOutput}
 * @see {@link GetMatchingWorkflowCommandInput} for command's `input` shape.
 * @see {@link GetMatchingWorkflowCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Entity Resolution service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Entity Resolution.
 *
 * @throws {@link EntityResolutionServiceException}
 *
 * Base exception class for all service exceptions from EntityResolution service.
 *
 * @public
 */
export class GetMatchingWorkflowCommand extends command<GetMatchingWorkflowCommandInput, GetMatchingWorkflowCommandOutput>(
  _ep0,
  _mw0,
  "GetMatchingWorkflow",
  GetMatchingWorkflow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMatchingWorkflowInput;
      output: GetMatchingWorkflowOutput;
    };
    sdk: {
      input: GetMatchingWorkflowCommandInput;
      output: GetMatchingWorkflowCommandOutput;
    };
  };
}

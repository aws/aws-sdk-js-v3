// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMatchingWorkflowInput, UpdateMatchingWorkflowOutput } from "../models/models_0";
import { UpdateMatchingWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMatchingWorkflowCommand}.
 */
export interface UpdateMatchingWorkflowCommandInput extends UpdateMatchingWorkflowInput {}
/**
 * @public
 *
 * The output of {@link UpdateMatchingWorkflowCommand}.
 */
export interface UpdateMatchingWorkflowCommandOutput extends UpdateMatchingWorkflowOutput, __MetadataBearer {}

/**
 * Updates an existing matching workflow. The workflow must already exist for this operation to succeed.
 *
 * > **Important:** For workflows where `resolutionType` is `PROVIDER`, incremental processing is not supported.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, UpdateMatchingWorkflowCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, UpdateMatchingWorkflowCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // UpdateMatchingWorkflowInput
 *   workflowName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   inputSourceConfig: [ // InputSourceConfig // required
 *     { // InputSource
 *       inputSourceARN: "STRING_VALUE", // required
 *       schemaName: "STRING_VALUE", // required
 *       applyNormalization: true || false,
 *     },
 *   ],
 *   outputSourceConfig: [ // OutputSourceConfig // required
 *     { // OutputSource
 *       KMSArn: "STRING_VALUE",
 *       outputS3Path: "STRING_VALUE",
 *       output: [ // OutputAttributes // required
 *         { // OutputAttribute
 *           name: "STRING_VALUE", // required
 *           hashed: true || false,
 *         },
 *       ],
 *       applyNormalization: true || false,
 *       customerProfilesIntegrationConfig: { // CustomerProfilesIntegrationConfig
 *         domainArn: "STRING_VALUE", // required
 *         objectTypeArn: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   resolutionTechniques: { // ResolutionTechniques
 *     resolutionType: "RULE_MATCHING" || "ML_MATCHING" || "PROVIDER", // required
 *     ruleBasedProperties: { // RuleBasedProperties
 *       rules: [ // RuleList // required
 *         { // Rule
 *           ruleName: "STRING_VALUE", // required
 *           matchingKeys: [ // MatchingKeys // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       attributeMatchingModel: "ONE_TO_ONE" || "MANY_TO_MANY", // required
 *       matchPurpose: "IDENTIFIER_GENERATION" || "INDEXING",
 *     },
 *     ruleConditionProperties: { // RuleConditionProperties
 *       rules: [ // RuleConditionList // required
 *         { // RuleCondition
 *           ruleName: "STRING_VALUE", // required
 *           condition: "STRING_VALUE", // required
 *         },
 *       ],
 *       matchingConfig: { // MatchingConfig
 *         enableTransitiveMatching: true || false,
 *       },
 *     },
 *     enableRealTimeMatching: true || false,
 *     providerProperties: { // ProviderProperties
 *       providerServiceArn: "STRING_VALUE", // required
 *       providerConfiguration: "DOCUMENT_VALUE",
 *       intermediateSourceConfiguration: { // IntermediateSourceConfiguration
 *         intermediateS3Path: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   incrementalRunConfig: { // IncrementalRunConfig
 *     incrementalRunType: "IMMEDIATE",
 *   },
 *   roleArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateMatchingWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMatchingWorkflowOutput
 * //   workflowName: "STRING_VALUE", // required
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
 * //   incrementalRunConfig: { // IncrementalRunConfig
 * //     incrementalRunType: "IMMEDIATE",
 * //   },
 * //   roleArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateMatchingWorkflowCommandInput - {@link UpdateMatchingWorkflowCommandInput}
 * @returns {@link UpdateMatchingWorkflowCommandOutput}
 * @see {@link UpdateMatchingWorkflowCommandInput} for command's `input` shape.
 * @see {@link UpdateMatchingWorkflowCommandOutput} for command's `response` shape.
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
export class UpdateMatchingWorkflowCommand extends command<UpdateMatchingWorkflowCommandInput, UpdateMatchingWorkflowCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMatchingWorkflow",
  UpdateMatchingWorkflow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMatchingWorkflowInput;
      output: UpdateMatchingWorkflowOutput;
    };
    sdk: {
      input: UpdateMatchingWorkflowCommandInput;
      output: UpdateMatchingWorkflowCommandOutput;
    };
  };
}

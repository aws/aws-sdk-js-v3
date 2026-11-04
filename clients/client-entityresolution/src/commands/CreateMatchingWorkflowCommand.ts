// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMatchingWorkflowInput, CreateMatchingWorkflowOutput } from "../models/models_0";
import { CreateMatchingWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMatchingWorkflowCommand}.
 */
export interface CreateMatchingWorkflowCommandInput extends CreateMatchingWorkflowInput {}
/**
 * @public
 *
 * The output of {@link CreateMatchingWorkflowCommand}.
 */
export interface CreateMatchingWorkflowCommandOutput extends CreateMatchingWorkflowOutput, __MetadataBearer {}

/**
 * Creates a matching workflow that defines the configuration for a data processing job. The workflow name must be unique. To modify an existing workflow, use `UpdateMatchingWorkflow`.
 *
 * > **Important:** For workflows where `resolutionType` is `PROVIDER`, incremental processing is not supported.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, CreateMatchingWorkflowCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, CreateMatchingWorkflowCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // CreateMatchingWorkflowInput
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
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMatchingWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // CreateMatchingWorkflowOutput
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
 * //   incrementalRunConfig: { // IncrementalRunConfig
 * //     incrementalRunType: "IMMEDIATE",
 * //   },
 * //   roleArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateMatchingWorkflowCommandInput - {@link CreateMatchingWorkflowCommandInput}
 * @returns {@link CreateMatchingWorkflowCommandOutput}
 * @see {@link CreateMatchingWorkflowCommandInput} for command's `input` shape.
 * @see {@link CreateMatchingWorkflowCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request couldn't be processed because of conflict in the current state of the resource. Example: Workflow already exists, Schema already exists, Workflow is currently running, etc.
 *
 * @throws {@link ExceedsLimitException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Entity Resolution account limits. The error message describes the limit exceeded.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Entity Resolution service.
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
export class CreateMatchingWorkflowCommand extends command<CreateMatchingWorkflowCommandInput, CreateMatchingWorkflowCommandOutput>(
  _ep0,
  _mw0,
  "CreateMatchingWorkflow",
  CreateMatchingWorkflow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMatchingWorkflowInput;
      output: CreateMatchingWorkflowOutput;
    };
    sdk: {
      input: CreateMatchingWorkflowCommandInput;
      output: CreateMatchingWorkflowCommandOutput;
    };
  };
}

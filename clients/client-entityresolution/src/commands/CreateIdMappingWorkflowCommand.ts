// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIdMappingWorkflowInput, CreateIdMappingWorkflowOutput } from "../models/models_0";
import { CreateIdMappingWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIdMappingWorkflowCommand}.
 */
export interface CreateIdMappingWorkflowCommandInput extends CreateIdMappingWorkflowInput {}
/**
 * @public
 *
 * The output of {@link CreateIdMappingWorkflowCommand}.
 */
export interface CreateIdMappingWorkflowCommandOutput extends CreateIdMappingWorkflowOutput, __MetadataBearer {}

/**
 * Creates an `IdMappingWorkflow` object which stores the configuration of the data processing job to be run. Each `IdMappingWorkflow` must have a unique workflow name. To modify an existing workflow, use the UpdateIdMappingWorkflow API.
 *
 * > **Important:** Incremental processing is not supported for ID mapping workflows.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, CreateIdMappingWorkflowCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, CreateIdMappingWorkflowCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // CreateIdMappingWorkflowInput
 *   workflowName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   inputSourceConfig: [ // IdMappingWorkflowInputSourceConfig // required
 *     { // IdMappingWorkflowInputSource
 *       inputSourceARN: "STRING_VALUE", // required
 *       schemaName: "STRING_VALUE",
 *       type: "SOURCE" || "TARGET",
 *     },
 *   ],
 *   outputSourceConfig: [ // IdMappingWorkflowOutputSourceConfig
 *     { // IdMappingWorkflowOutputSource
 *       KMSArn: "STRING_VALUE",
 *       outputS3Path: "STRING_VALUE", // required
 *     },
 *   ],
 *   idMappingTechniques: { // IdMappingTechniques
 *     idMappingType: "PROVIDER" || "RULE_BASED", // required
 *     ruleBasedProperties: { // IdMappingRuleBasedProperties
 *       rules: [ // RuleList
 *         { // Rule
 *           ruleName: "STRING_VALUE", // required
 *           matchingKeys: [ // MatchingKeys // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       ruleDefinitionType: "SOURCE" || "TARGET", // required
 *       attributeMatchingModel: "ONE_TO_ONE" || "MANY_TO_MANY", // required
 *       recordMatchingModel: "ONE_SOURCE_TO_ONE_TARGET" || "MANY_SOURCE_TO_ONE_TARGET", // required
 *     },
 *     providerProperties: { // ProviderProperties
 *       providerServiceArn: "STRING_VALUE", // required
 *       providerConfiguration: "DOCUMENT_VALUE",
 *       intermediateSourceConfiguration: { // IntermediateSourceConfiguration
 *         intermediateS3Path: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   incrementalRunConfig: { // IdMappingIncrementalRunConfig
 *     incrementalRunType: "ON_DEMAND",
 *   },
 *   roleArn: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIdMappingWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // CreateIdMappingWorkflowOutput
 * //   workflowName: "STRING_VALUE", // required
 * //   workflowArn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   inputSourceConfig: [ // IdMappingWorkflowInputSourceConfig // required
 * //     { // IdMappingWorkflowInputSource
 * //       inputSourceARN: "STRING_VALUE", // required
 * //       schemaName: "STRING_VALUE",
 * //       type: "SOURCE" || "TARGET",
 * //     },
 * //   ],
 * //   outputSourceConfig: [ // IdMappingWorkflowOutputSourceConfig
 * //     { // IdMappingWorkflowOutputSource
 * //       KMSArn: "STRING_VALUE",
 * //       outputS3Path: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   idMappingTechniques: { // IdMappingTechniques
 * //     idMappingType: "PROVIDER" || "RULE_BASED", // required
 * //     ruleBasedProperties: { // IdMappingRuleBasedProperties
 * //       rules: [ // RuleList
 * //         { // Rule
 * //           ruleName: "STRING_VALUE", // required
 * //           matchingKeys: [ // MatchingKeys // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       ruleDefinitionType: "SOURCE" || "TARGET", // required
 * //       attributeMatchingModel: "ONE_TO_ONE" || "MANY_TO_MANY", // required
 * //       recordMatchingModel: "ONE_SOURCE_TO_ONE_TARGET" || "MANY_SOURCE_TO_ONE_TARGET", // required
 * //     },
 * //     providerProperties: { // ProviderProperties
 * //       providerServiceArn: "STRING_VALUE", // required
 * //       providerConfiguration: "DOCUMENT_VALUE",
 * //       intermediateSourceConfiguration: { // IntermediateSourceConfiguration
 * //         intermediateS3Path: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * //   incrementalRunConfig: { // IdMappingIncrementalRunConfig
 * //     incrementalRunType: "ON_DEMAND",
 * //   },
 * //   roleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateIdMappingWorkflowCommandInput - {@link CreateIdMappingWorkflowCommandInput}
 * @returns {@link CreateIdMappingWorkflowCommandOutput}
 * @see {@link CreateIdMappingWorkflowCommandInput} for command's `input` shape.
 * @see {@link CreateIdMappingWorkflowCommandOutput} for command's `response` shape.
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
export class CreateIdMappingWorkflowCommand extends command<CreateIdMappingWorkflowCommandInput, CreateIdMappingWorkflowCommandOutput>(
  _ep0,
  _mw0,
  "CreateIdMappingWorkflow",
  CreateIdMappingWorkflow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIdMappingWorkflowInput;
      output: CreateIdMappingWorkflowOutput;
    };
    sdk: {
      input: CreateIdMappingWorkflowCommandInput;
      output: CreateIdMappingWorkflowCommandOutput;
    };
  };
}

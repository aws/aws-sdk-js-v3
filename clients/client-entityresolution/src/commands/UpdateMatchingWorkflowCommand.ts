// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  EntityResolutionClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EntityResolutionClient";
import type { UpdateMatchingWorkflowInput, UpdateMatchingWorkflowOutput } from "../models/models_0";
import { UpdateMatchingWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates an existing matching workflow. The workflow must already exist for this operation to succeed.</p> <important> <p>For workflows where <code>resolutionType</code> is <code>ML_MATCHING</code> or <code>PROVIDER</code>, incremental processing is not supported. </p> </important>
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
 *     },
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
 * //     },
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
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 *
 * @public
 */
export class UpdateMatchingWorkflowCommand extends $Command
  .classBuilder<
    UpdateMatchingWorkflowCommandInput,
    UpdateMatchingWorkflowCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSVeniceService", "UpdateMatchingWorkflow", {})
  .n("EntityResolutionClient", "UpdateMatchingWorkflowCommand")
  .sc(UpdateMatchingWorkflow$)
  .build() {
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

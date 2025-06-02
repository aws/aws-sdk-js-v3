// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { CreateIdMappingWorkflowInput, CreateIdMappingWorkflowOutput } from "../models/models_0";
import { de_CreateIdMappingWorkflowCommand, se_CreateIdMappingWorkflowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates an <code>IdMappingWorkflow</code> object which stores the configuration of the data processing job to be run. Each <code>IdMappingWorkflow</code> must have a unique workflow name. To modify an existing workflow, use the <code>UpdateIdMappingWorkflow</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, CreateIdMappingWorkflowCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, CreateIdMappingWorkflowCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
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
 *       outputS3Path: "STRING_VALUE", // required
 *       KMSArn: "STRING_VALUE",
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
 * //       outputS3Path: "STRING_VALUE", // required
 * //       KMSArn: "STRING_VALUE",
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
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource. Example: Workflow already exists, Schema already exists, Workflow is currently running, etc. </p>
 *
 * @throws {@link ExceedsLimitException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Entity Resolution account limits. The error message describes the limit exceeded. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
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
export class CreateIdMappingWorkflowCommand extends $Command
  .classBuilder<
    CreateIdMappingWorkflowCommandInput,
    CreateIdMappingWorkflowCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSVeniceService", "CreateIdMappingWorkflow", {})
  .n("EntityResolutionClient", "CreateIdMappingWorkflowCommand")
  .f(void 0, void 0)
  .ser(se_CreateIdMappingWorkflowCommand)
  .de(de_CreateIdMappingWorkflowCommand)
  .build() {
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

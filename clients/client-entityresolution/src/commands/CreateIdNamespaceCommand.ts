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
import type { CreateIdNamespaceInput, CreateIdNamespaceOutput } from "../models/models_0";
import { CreateIdNamespace } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIdNamespaceCommand}.
 */
export interface CreateIdNamespaceCommandInput extends CreateIdNamespaceInput {}
/**
 * @public
 *
 * The output of {@link CreateIdNamespaceCommand}.
 */
export interface CreateIdNamespaceCommandOutput extends CreateIdNamespaceOutput, __MetadataBearer {}

/**
 * <p>Creates an ID namespace object which will help customers provide metadata explaining their dataset and how to use it. Each ID namespace must have a unique name. To modify an existing ID namespace, use the UpdateIdNamespace API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, CreateIdNamespaceCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, CreateIdNamespaceCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // CreateIdNamespaceInput
 *   idNamespaceName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   inputSourceConfig: [ // IdNamespaceInputSourceConfig
 *     { // IdNamespaceInputSource
 *       inputSourceARN: "STRING_VALUE", // required
 *       schemaName: "STRING_VALUE",
 *     },
 *   ],
 *   idMappingWorkflowProperties: [ // IdNamespaceIdMappingWorkflowPropertiesList
 *     { // IdNamespaceIdMappingWorkflowProperties
 *       idMappingType: "PROVIDER" || "RULE_BASED", // required
 *       ruleBasedProperties: { // NamespaceRuleBasedProperties
 *         rules: [ // RuleList
 *           { // Rule
 *             ruleName: "STRING_VALUE", // required
 *             matchingKeys: [ // MatchingKeys // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *         ruleDefinitionTypes: [ // IdMappingWorkflowRuleDefinitionTypeList
 *           "SOURCE" || "TARGET",
 *         ],
 *         attributeMatchingModel: "ONE_TO_ONE" || "MANY_TO_MANY",
 *         recordMatchingModels: [ // RecordMatchingModelList
 *           "ONE_SOURCE_TO_ONE_TARGET" || "MANY_SOURCE_TO_ONE_TARGET",
 *         ],
 *       },
 *       providerProperties: { // NamespaceProviderProperties
 *         providerServiceArn: "STRING_VALUE", // required
 *         providerConfiguration: "DOCUMENT_VALUE",
 *       },
 *     },
 *   ],
 *   type: "SOURCE" || "TARGET", // required
 *   roleArn: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIdNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateIdNamespaceOutput
 * //   idNamespaceName: "STRING_VALUE", // required
 * //   idNamespaceArn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   inputSourceConfig: [ // IdNamespaceInputSourceConfig
 * //     { // IdNamespaceInputSource
 * //       inputSourceARN: "STRING_VALUE", // required
 * //       schemaName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   idMappingWorkflowProperties: [ // IdNamespaceIdMappingWorkflowPropertiesList
 * //     { // IdNamespaceIdMappingWorkflowProperties
 * //       idMappingType: "PROVIDER" || "RULE_BASED", // required
 * //       ruleBasedProperties: { // NamespaceRuleBasedProperties
 * //         rules: [ // RuleList
 * //           { // Rule
 * //             ruleName: "STRING_VALUE", // required
 * //             matchingKeys: [ // MatchingKeys // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         ruleDefinitionTypes: [ // IdMappingWorkflowRuleDefinitionTypeList
 * //           "SOURCE" || "TARGET",
 * //         ],
 * //         attributeMatchingModel: "ONE_TO_ONE" || "MANY_TO_MANY",
 * //         recordMatchingModels: [ // RecordMatchingModelList
 * //           "ONE_SOURCE_TO_ONE_TARGET" || "MANY_SOURCE_TO_ONE_TARGET",
 * //         ],
 * //       },
 * //       providerProperties: { // NamespaceProviderProperties
 * //         providerServiceArn: "STRING_VALUE", // required
 * //         providerConfiguration: "DOCUMENT_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   type: "SOURCE" || "TARGET", // required
 * //   roleArn: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateIdNamespaceCommandInput - {@link CreateIdNamespaceCommandInput}
 * @returns {@link CreateIdNamespaceCommandOutput}
 * @see {@link CreateIdNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreateIdNamespaceCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request couldn't be processed because of conflict in the current state of the resource. Example: Workflow already exists, Schema already exists, Workflow is currently running, etc. </p>
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
export class CreateIdNamespaceCommand extends $Command
  .classBuilder<
    CreateIdNamespaceCommandInput,
    CreateIdNamespaceCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSVeniceService", "CreateIdNamespace", {})
  .n("EntityResolutionClient", "CreateIdNamespaceCommand")
  .sc(CreateIdNamespace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIdNamespaceInput;
      output: CreateIdNamespaceOutput;
    };
    sdk: {
      input: CreateIdNamespaceCommandInput;
      output: CreateIdNamespaceCommandOutput;
    };
  };
}

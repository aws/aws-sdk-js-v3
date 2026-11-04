// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIdNamespaceInput, GetIdNamespaceOutput } from "../models/models_0";
import { GetIdNamespace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIdNamespaceCommand}.
 */
export interface GetIdNamespaceCommandInput extends GetIdNamespaceInput {}
/**
 * @public
 *
 * The output of {@link GetIdNamespaceCommand}.
 */
export interface GetIdNamespaceCommandOutput extends GetIdNamespaceOutput, __MetadataBearer {}

/**
 * Returns the `IdNamespace` with a given name, if it exists.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GetIdNamespaceCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GetIdNamespaceCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // GetIdNamespaceInput
 *   idNamespaceName: "STRING_VALUE", // required
 * };
 * const command = new GetIdNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // GetIdNamespaceOutput
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
 * @param GetIdNamespaceCommandInput - {@link GetIdNamespaceCommandInput}
 * @returns {@link GetIdNamespaceCommandOutput}
 * @see {@link GetIdNamespaceCommandInput} for command's `input` shape.
 * @see {@link GetIdNamespaceCommandOutput} for command's `response` shape.
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
export class GetIdNamespaceCommand extends command<GetIdNamespaceCommandInput, GetIdNamespaceCommandOutput>(
  _ep0,
  _mw0,
  "GetIdNamespace",
  GetIdNamespace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIdNamespaceInput;
      output: GetIdNamespaceOutput;
    };
    sdk: {
      input: GetIdNamespaceCommandInput;
      output: GetIdNamespaceCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { GetIdNamespaceInput, GetIdNamespaceOutput } from "../models/models_0";
import { de_GetIdNamespaceCommand, se_GetIdNamespaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the <code>IdNamespace</code> with a given name, if it exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GetIdNamespaceCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GetIdNamespaceCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
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
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution
 *          service. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found. </p>
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
export class GetIdNamespaceCommand extends $Command
  .classBuilder<
    GetIdNamespaceCommandInput,
    GetIdNamespaceCommandOutput,
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
  .s("AWSVeniceService", "GetIdNamespace", {})
  .n("EntityResolutionClient", "GetIdNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_GetIdNamespaceCommand)
  .de(de_GetIdNamespaceCommand)
  .build() {
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

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetChatControlsConfigurationRequest, GetChatControlsConfigurationResponse } from "../models/models_0";
import type { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { GetChatControlsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetChatControlsConfigurationCommand}.
 */
export interface GetChatControlsConfigurationCommandInput extends GetChatControlsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetChatControlsConfigurationCommand}.
 */
export interface GetChatControlsConfigurationCommandOutput
  extends GetChatControlsConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about chat controls configured for an existing Amazon Q Business application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetChatControlsConfigurationCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetChatControlsConfigurationCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // GetChatControlsConfigurationRequest
 *   applicationId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetChatControlsConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetChatControlsConfigurationResponse
 * //   responseScope: "ENTERPRISE_CONTENT_ONLY" || "EXTENDED_KNOWLEDGE_ENABLED",
 * //   orchestrationConfiguration: { // AppliedOrchestrationConfiguration
 * //     control: "ENABLED" || "DISABLED", // required
 * //   },
 * //   blockedPhrases: { // BlockedPhrasesConfiguration
 * //     blockedPhrases: [ // BlockedPhrases
 * //       "STRING_VALUE",
 * //     ],
 * //     systemMessageOverride: "STRING_VALUE",
 * //   },
 * //   topicConfigurations: [ // TopicConfigurations
 * //     { // TopicConfiguration
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       exampleChatMessages: [ // ExampleChatMessages
 * //         "STRING_VALUE",
 * //       ],
 * //       rules: [ // Rules // required
 * //         { // Rule
 * //           includedUsersAndGroups: { // UsersAndGroups
 * //             userIds: [ // UserIds
 * //               "STRING_VALUE",
 * //             ],
 * //             userGroups: [ // UserGroups
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           excludedUsersAndGroups: {
 * //             userIds: [
 * //               "STRING_VALUE",
 * //             ],
 * //             userGroups: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           ruleType: "CONTENT_BLOCKER_RULE" || "CONTENT_RETRIEVAL_RULE", // required
 * //           ruleConfiguration: { // RuleConfiguration Union: only one key present
 * //             contentBlockerRule: { // ContentBlockerRule
 * //               systemMessageOverride: "STRING_VALUE",
 * //             },
 * //             contentRetrievalRule: { // ContentRetrievalRule
 * //               eligibleDataSources: [ // EligibleDataSources
 * //                 { // EligibleDataSource
 * //                   indexId: "STRING_VALUE",
 * //                   dataSourceId: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   creatorModeConfiguration: { // AppliedCreatorModeConfiguration
 * //     creatorModeControl: "ENABLED" || "DISABLED", // required
 * //   },
 * //   nextToken: "STRING_VALUE",
 * //   hallucinationReductionConfiguration: { // HallucinationReductionConfiguration
 * //     hallucinationReductionControl: "ENABLED" || "DISABLED",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetChatControlsConfigurationCommandInput - {@link GetChatControlsConfigurationCommandInput}
 * @returns {@link GetChatControlsConfigurationCommandOutput}
 * @see {@link GetChatControlsConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetChatControlsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class GetChatControlsConfigurationCommand extends $Command
  .classBuilder<
    GetChatControlsConfigurationCommandInput,
    GetChatControlsConfigurationCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "GetChatControlsConfiguration", {})
  .n("QBusinessClient", "GetChatControlsConfigurationCommand")
  .sc(GetChatControlsConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChatControlsConfigurationRequest;
      output: GetChatControlsConfigurationResponse;
    };
    sdk: {
      input: GetChatControlsConfigurationCommandInput;
      output: GetChatControlsConfigurationCommandOutput;
    };
  };
}

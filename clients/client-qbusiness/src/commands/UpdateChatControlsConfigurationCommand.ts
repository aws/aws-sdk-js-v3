// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateChatControlsConfigurationRequest, UpdateChatControlsConfigurationResponse } from "../models/models_1";
import {
  de_UpdateChatControlsConfigurationCommand,
  se_UpdateChatControlsConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateChatControlsConfigurationCommand}.
 */
export interface UpdateChatControlsConfigurationCommandInput extends UpdateChatControlsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateChatControlsConfigurationCommand}.
 */
export interface UpdateChatControlsConfigurationCommandOutput
  extends UpdateChatControlsConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates a set of chat controls configured for an existing Amazon Q Business
 *             application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, UpdateChatControlsConfigurationCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, UpdateChatControlsConfigurationCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // UpdateChatControlsConfigurationRequest
 *   applicationId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   responseScope: "ENTERPRISE_CONTENT_ONLY" || "EXTENDED_KNOWLEDGE_ENABLED",
 *   orchestrationConfiguration: { // OrchestrationConfiguration
 *     control: "ENABLED" || "DISABLED", // required
 *   },
 *   blockedPhrasesConfigurationUpdate: { // BlockedPhrasesConfigurationUpdate
 *     blockedPhrasesToCreateOrUpdate: [ // BlockedPhrases
 *       "STRING_VALUE",
 *     ],
 *     blockedPhrasesToDelete: [
 *       "STRING_VALUE",
 *     ],
 *     systemMessageOverride: "STRING_VALUE",
 *   },
 *   topicConfigurationsToCreateOrUpdate: [ // TopicConfigurations
 *     { // TopicConfiguration
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       exampleChatMessages: [ // ExampleChatMessages
 *         "STRING_VALUE",
 *       ],
 *       rules: [ // Rules // required
 *         { // Rule
 *           includedUsersAndGroups: { // UsersAndGroups
 *             userIds: [ // UserIds
 *               "STRING_VALUE",
 *             ],
 *             userGroups: [ // UserGroups
 *               "STRING_VALUE",
 *             ],
 *           },
 *           excludedUsersAndGroups: {
 *             userIds: [
 *               "STRING_VALUE",
 *             ],
 *             userGroups: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           ruleType: "CONTENT_BLOCKER_RULE" || "CONTENT_RETRIEVAL_RULE", // required
 *           ruleConfiguration: { // RuleConfiguration Union: only one key present
 *             contentBlockerRule: { // ContentBlockerRule
 *               systemMessageOverride: "STRING_VALUE",
 *             },
 *             contentRetrievalRule: { // ContentRetrievalRule
 *               eligibleDataSources: [ // EligibleDataSources
 *                 { // EligibleDataSource
 *                   indexId: "STRING_VALUE",
 *                   dataSourceId: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           },
 *         },
 *       ],
 *     },
 *   ],
 *   topicConfigurationsToDelete: [
 *     {
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       exampleChatMessages: [
 *         "STRING_VALUE",
 *       ],
 *       rules: [ // required
 *         {
 *           includedUsersAndGroups: {
 *             userIds: [
 *               "STRING_VALUE",
 *             ],
 *             userGroups: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           excludedUsersAndGroups: {
 *             userIds: [
 *               "STRING_VALUE",
 *             ],
 *             userGroups: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           ruleType: "CONTENT_BLOCKER_RULE" || "CONTENT_RETRIEVAL_RULE", // required
 *           ruleConfiguration: {//  Union: only one key present
 *             contentBlockerRule: {
 *               systemMessageOverride: "STRING_VALUE",
 *             },
 *             contentRetrievalRule: {
 *               eligibleDataSources: [
 *                 {
 *                   indexId: "STRING_VALUE",
 *                   dataSourceId: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           },
 *         },
 *       ],
 *     },
 *   ],
 *   creatorModeConfiguration: { // CreatorModeConfiguration
 *     creatorModeControl: "ENABLED" || "DISABLED", // required
 *   },
 * };
 * const command = new UpdateChatControlsConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateChatControlsConfigurationCommandInput - {@link UpdateChatControlsConfigurationCommandInput}
 * @returns {@link UpdateChatControlsConfigurationCommandOutput}
 * @see {@link UpdateChatControlsConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateChatControlsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have
 *             provided the correct resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Q Business service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class UpdateChatControlsConfigurationCommand extends $Command
  .classBuilder<
    UpdateChatControlsConfigurationCommandInput,
    UpdateChatControlsConfigurationCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "UpdateChatControlsConfiguration", {})
  .n("QBusinessClient", "UpdateChatControlsConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateChatControlsConfigurationCommand)
  .de(de_UpdateChatControlsConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateChatControlsConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateChatControlsConfigurationCommandInput;
      output: UpdateChatControlsConfigurationCommandOutput;
    };
  };
}

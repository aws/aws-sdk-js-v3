// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetChatControlsConfigurationRequest, GetChatControlsConfigurationResponse } from "../models/models_0";
import { GetChatControlsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetChatControlsConfigurationCommandOutput extends GetChatControlsConfigurationResponse, __MetadataBearer {}

/**
 * Gets information about chat controls configured for an existing Amazon Q Business application.
 *
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
 *
 * You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling. Reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.
 *
 * @throws {@link QBusinessServiceException}
 *
 * Base exception class for all service exceptions from QBusiness service.
 *
 * @public
 */
export class GetChatControlsConfigurationCommand extends command<GetChatControlsConfigurationCommandInput, GetChatControlsConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetChatControlsConfiguration",
  GetChatControlsConfiguration$
) {
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

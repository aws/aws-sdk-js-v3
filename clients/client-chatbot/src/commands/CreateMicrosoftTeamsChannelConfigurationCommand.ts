// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTeamsChannelConfigurationRequest, CreateTeamsChannelConfigurationResult } from "../models/models_0";
import { CreateMicrosoftTeamsChannelConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMicrosoftTeamsChannelConfigurationCommand}.
 */
export interface CreateMicrosoftTeamsChannelConfigurationCommandInput extends CreateTeamsChannelConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateMicrosoftTeamsChannelConfigurationCommand}.
 */
export interface CreateMicrosoftTeamsChannelConfigurationCommandOutput extends CreateTeamsChannelConfigurationResult, __MetadataBearer {}

/**
 * <p>Creates an AWS Chatbot configuration for Microsoft Teams.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, CreateMicrosoftTeamsChannelConfigurationCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, CreateMicrosoftTeamsChannelConfigurationCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
 * const client = new ChatbotClient(config);
 * const input = { // CreateTeamsChannelConfigurationRequest
 *   ChannelId: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE",
 *   TeamId: "STRING_VALUE", // required
 *   TeamName: "STRING_VALUE",
 *   TenantId: "STRING_VALUE", // required
 *   SnsTopicArns: [ // SnsTopicArnList
 *     "STRING_VALUE",
 *   ],
 *   IamRoleArn: "STRING_VALUE", // required
 *   ConfigurationName: "STRING_VALUE", // required
 *   LoggingLevel: "STRING_VALUE",
 *   GuardrailPolicyArns: [ // GuardrailPolicyArnList
 *     "STRING_VALUE",
 *   ],
 *   UserAuthorizationRequired: true || false,
 *   Tags: [ // Tags
 *     { // Tag
 *       TagKey: "STRING_VALUE", // required
 *       TagValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMicrosoftTeamsChannelConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateTeamsChannelConfigurationResult
 * //   ChannelConfiguration: { // TeamsChannelConfiguration
 * //     ChannelId: "STRING_VALUE", // required
 * //     ChannelName: "STRING_VALUE",
 * //     TeamId: "STRING_VALUE", // required
 * //     TeamName: "STRING_VALUE",
 * //     TenantId: "STRING_VALUE", // required
 * //     ChatConfigurationArn: "STRING_VALUE", // required
 * //     IamRoleArn: "STRING_VALUE", // required
 * //     SnsTopicArns: [ // SnsTopicArnList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     ConfigurationName: "STRING_VALUE",
 * //     LoggingLevel: "STRING_VALUE",
 * //     GuardrailPolicyArns: [ // GuardrailPolicyArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     UserAuthorizationRequired: true || false,
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         TagKey: "STRING_VALUE", // required
 * //         TagValue: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     State: "STRING_VALUE",
 * //     StateReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMicrosoftTeamsChannelConfigurationCommandInput - {@link CreateMicrosoftTeamsChannelConfigurationCommandInput}
 * @returns {@link CreateMicrosoftTeamsChannelConfigurationCommandOutput}
 * @see {@link CreateMicrosoftTeamsChannelConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateMicrosoftTeamsChannelConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was an issue processing your request.</p>
 *
 * @throws {@link CreateTeamsChannelConfigurationException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have exceeded a service limit for AWS Chatbot.</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 *
 * @public
 */
export class CreateMicrosoftTeamsChannelConfigurationCommand extends command<CreateMicrosoftTeamsChannelConfigurationCommandInput, CreateMicrosoftTeamsChannelConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateMicrosoftTeamsChannelConfiguration",
  CreateMicrosoftTeamsChannelConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTeamsChannelConfigurationRequest;
      output: CreateTeamsChannelConfigurationResult;
    };
    sdk: {
      input: CreateMicrosoftTeamsChannelConfigurationCommandInput;
      output: CreateMicrosoftTeamsChannelConfigurationCommandOutput;
    };
  };
}

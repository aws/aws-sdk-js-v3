// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateChatResponseConfigurationRequest, CreateChatResponseConfigurationResponse } from "../models/models_0";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { CreateChatResponseConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateChatResponseConfigurationCommand}.
 */
export interface CreateChatResponseConfigurationCommandInput extends CreateChatResponseConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateChatResponseConfigurationCommand}.
 */
export interface CreateChatResponseConfigurationCommandOutput
  extends CreateChatResponseConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new chat response configuration for an Amazon Q Business application. This operation establishes a set of parameters that define how the system generates and formats responses to user queries in chat interactions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, CreateChatResponseConfigurationCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, CreateChatResponseConfigurationCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // CreateChatResponseConfigurationRequest
 *   applicationId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   responseConfigurations: { // ResponseConfigurations // required
 *     "<keys>": { // ResponseConfiguration
 *       instructionCollection: { // InstructionCollection
 *         responseLength: "STRING_VALUE",
 *         targetAudience: "STRING_VALUE",
 *         perspective: "STRING_VALUE",
 *         outputStyle: "STRING_VALUE",
 *         identity: "STRING_VALUE",
 *         tone: "STRING_VALUE",
 *         customInstructions: "STRING_VALUE",
 *         examples: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateChatResponseConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateChatResponseConfigurationResponse
 * //   chatResponseConfigurationId: "STRING_VALUE", // required
 * //   chatResponseConfigurationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateChatResponseConfigurationCommandInput - {@link CreateChatResponseConfigurationCommandInput}
 * @returns {@link CreateChatResponseConfigurationCommandOutput}
 * @see {@link CreateChatResponseConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateChatResponseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Q Business service. </p>
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
export class CreateChatResponseConfigurationCommand extends $Command
  .classBuilder<
    CreateChatResponseConfigurationCommandInput,
    CreateChatResponseConfigurationCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "CreateChatResponseConfiguration", {})
  .n("QBusinessClient", "CreateChatResponseConfigurationCommand")
  .sc(CreateChatResponseConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChatResponseConfigurationRequest;
      output: CreateChatResponseConfigurationResponse;
    };
    sdk: {
      input: CreateChatResponseConfigurationCommandInput;
      output: CreateChatResponseConfigurationCommandOutput;
    };
  };
}

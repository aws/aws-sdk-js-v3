// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateChatResponseConfigurationRequest, UpdateChatResponseConfigurationResponse } from "../models/models_1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { UpdateChatResponseConfiguration } from "../schemas/schemas_1_Response";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateChatResponseConfigurationCommand}.
 */
export interface UpdateChatResponseConfigurationCommandInput extends UpdateChatResponseConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateChatResponseConfigurationCommand}.
 */
export interface UpdateChatResponseConfigurationCommandOutput
  extends UpdateChatResponseConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates an existing chat response configuration in an Amazon Q Business application. This operation allows administrators to modify configuration settings, display name, and response parameters to refine how the system generates responses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, UpdateChatResponseConfigurationCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, UpdateChatResponseConfigurationCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // UpdateChatResponseConfigurationRequest
 *   applicationId: "STRING_VALUE", // required
 *   chatResponseConfigurationId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
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
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateChatResponseConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateChatResponseConfigurationCommandInput - {@link UpdateChatResponseConfigurationCommandInput}
 * @returns {@link UpdateChatResponseConfigurationCommandOutput}
 * @see {@link UpdateChatResponseConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateChatResponseConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateChatResponseConfigurationCommand extends $Command
  .classBuilder<
    UpdateChatResponseConfigurationCommandInput,
    UpdateChatResponseConfigurationCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "UpdateChatResponseConfiguration", {})
  .n("QBusinessClient", "UpdateChatResponseConfigurationCommand")
  .sc(UpdateChatResponseConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateChatResponseConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateChatResponseConfigurationCommandInput;
      output: UpdateChatResponseConfigurationCommandOutput;
    };
  };
}

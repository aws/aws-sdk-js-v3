// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateProfileWithAgentRequest, UpdateProfileWithAgentResponse } from "../models/models_0";
import { UpdateProfileWithAgent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateProfileWithAgentCommand}.
 */
export interface UpdateProfileWithAgentCommandInput extends UpdateProfileWithAgentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProfileWithAgentCommand}.
 */
export interface UpdateProfileWithAgentCommandOutput extends UpdateProfileWithAgentResponse, __MetadataBearer {}

/**
 * <p>Updates a data transformation profile using chat-based interaction with an agent. Supports multi-turn conversations for iteratively customizing profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, UpdateProfileWithAgentCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, UpdateProfileWithAgentCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // UpdateProfileWithAgentRequest
 *   ProfileId: "STRING_VALUE", // required
 *   SourceFormat: "CCDA" || "CSV", // required
 *   InputMessage: { // AgentInputMessage
 *     Body: "STRING_VALUE", // required
 *     Type: "normal" || "confirmation_response", // required
 *   },
 *   ConversationId: "STRING_VALUE",
 * };
 * const command = new UpdateProfileWithAgentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProfileWithAgentResponse
 * //   AgentResponse: { // AgentOutputMessage
 * //     Body: "STRING_VALUE", // required
 * //     Type: "INITIAL_GREETING" || "normal" || "confirmation" || "complete" || "error" || "options" || "choices", // required
 * //     OptionsList: [ // DataTransformationChatOptionsList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   ConversationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateProfileWithAgentCommandInput - {@link UpdateProfileWithAgentCommandInput}
 * @returns {@link UpdateProfileWithAgentCommandOutput}
 * @see {@link UpdateProfileWithAgentCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileWithAgentCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied. Your account is not authorized to perform this operation.</p>
 *
 * @throws {@link AgentMessageOutOfContextException} (client fault)
 *  <p>The agent message does not fit within the current conversation context. Start a new conversation or provide a message that relates to the current profile customization session.</p>
 *
 * @throws {@link ConversationNotFoundException} (client fault)
 *  <p>The specified conversation identifier does not exist. Verify the conversation ID or omit it to start a new conversation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred in the service.</p>
 *
 * @throws {@link NotImplementedOperationException} (server fault)
 *  <p>The requested operation is not yet available. Check the service documentation for a list of supported operations.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested data store was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to make this request. Verify that your AWS credentials are valid and that you have the required permissions.</p>
 *
 * @throws {@link UnsupportedMIMETypeException} (client fault)
 *  <p>The content type in your request is not supported. Use a supported content type for this operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input parameter was invalid.</p>
 *
 * @throws {@link HealthLakeServiceException}
 * <p>Base exception class for all service exceptions from HealthLake service.</p>
 *
 *
 * @public
 */
export class UpdateProfileWithAgentCommand extends command<UpdateProfileWithAgentCommandInput, UpdateProfileWithAgentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProfileWithAgent",
  UpdateProfileWithAgent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProfileWithAgentRequest;
      output: UpdateProfileWithAgentResponse;
    };
    sdk: {
      input: UpdateProfileWithAgentCommandInput;
      output: UpdateProfileWithAgentCommandOutput;
    };
  };
}

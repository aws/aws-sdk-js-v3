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
 * Updates a data transformation profile using chat-based interaction with an agent. Supports multi-turn conversations for iteratively customizing profiles.
 *
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
 *   InputMessage: { // AgentInputMessage
 *     Body: "STRING_VALUE", // required
 *     Type: "normal" || "confirmation_response", // required
 *   },
 *   ConversationId: "STRING_VALUE",
 * };
 * const command = new UpdateProfileWithAgentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProfileWithAgentResponse
 * //   AgentResponse: { // AgentOutputMessageStream Union: only one key present
 * //     TextMessageEvent: { // TextMessageEvent
 * //       Message: "STRING_VALUE", // required
 * //     },
 * //     ProgressEvent: { // ProgressEvent
 * //       Message: "STRING_VALUE", // required
 * //     },
 * //     HeartbeatEvent: {},
 * //     ErrorEvent: { // ErrorEvent
 * //       Error: "InternalServerException" || "ResourceNotFoundException" || "ValidationException" || "AccessDeniedException" || "ThrottlingException", // required
 * //       Message: "STRING_VALUE", // required
 * //     },
 * //     EndOfOutputEvent: { // EndOfOutputEvent
 * //       FinalResponseMessage: "STRING_VALUE", // required
 * //       Options: [ // DataTransformationChatOptionsList
 * //         "STRING_VALUE",
 * //       ],
 * //       ConversationId: "STRING_VALUE",
 * //     },
 * //   },
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
 *
 * Access is denied. Your account is not authorized to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unknown internal error occurred in the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested data store was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The user has exceeded their maximum number of allowed calls to the given API.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input parameter was invalid.
 *
 * @throws {@link HealthLakeServiceException}
 *
 * Base exception class for all service exceptions from HealthLake service.
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

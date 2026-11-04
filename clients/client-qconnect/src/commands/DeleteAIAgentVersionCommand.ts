// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAIAgentVersionRequest, DeleteAIAgentVersionResponse } from "../models/models_0";
import { DeleteAIAgentVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAIAgentVersionCommand}.
 */
export interface DeleteAIAgentVersionCommandInput extends DeleteAIAgentVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAIAgentVersionCommand}.
 */
export interface DeleteAIAgentVersionCommandOutput extends DeleteAIAgentVersionResponse, __MetadataBearer {}

/**
 * Deletes an Amazon Q in Connect AI Agent Version.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, DeleteAIAgentVersionCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, DeleteAIAgentVersionCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // DeleteAIAgentVersionRequest
 *   assistantId: "STRING_VALUE", // required
 *   aiAgentId: "STRING_VALUE", // required
 *   versionNumber: Number("long"), // required
 * };
 * const command = new DeleteAIAgentVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAIAgentVersionCommandInput - {@link DeleteAIAgentVersionCommandInput}
 * @returns {@link DeleteAIAgentVersionCommandOutput}
 * @see {@link DeleteAIAgentVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteAIAgentVersionCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource. For example, if you're using a `Create` API (such as `CreateAssistant`) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class DeleteAIAgentVersionCommand extends command<DeleteAIAgentVersionCommandInput, DeleteAIAgentVersionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAIAgentVersion",
  DeleteAIAgentVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAIAgentVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteAIAgentVersionCommandInput;
      output: DeleteAIAgentVersionCommandOutput;
    };
  };
}

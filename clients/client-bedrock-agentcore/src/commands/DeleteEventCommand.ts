// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEventInput, DeleteEventOutput } from "../models/models_1";
import { DeleteEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEventCommand}.
 */
export interface DeleteEventCommandInput extends DeleteEventInput {}
/**
 * @public
 *
 * The output of {@link DeleteEventCommand}.
 */
export interface DeleteEventCommandOutput extends DeleteEventOutput, __MetadataBearer {}

/**
 * Deletes an event from an AgentCore Memory resource. When you delete an event, it is permanently removed.
 *
 * To use this operation, you must have the `bedrock-agentcore:DeleteEvent` permission.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, DeleteEventCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, DeleteEventCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // DeleteEventInput
 *   memoryId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   eventId: "STRING_VALUE", // required
 *   actorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEventOutput
 * //   eventId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteEventCommandInput - {@link DeleteEventCommandInput}
 * @returns {@link DeleteEventCommandOutput}
 * @see {@link DeleteEventCommandInput} for command's `input` shape.
 * @see {@link DeleteEventCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input fails to satisfy the constraints specified by AgentCore. Check your input values and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The service encountered an internal error. Try your request again later.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.
 *
 * @throws {@link ThrottledException} (client fault)
 *
 * The request was denied due to request throttling. Reduce the frequency of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.
 *
 * @throws {@link BedrockAgentCoreServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgentCore service.
 *
 * @public
 */
export class DeleteEventCommand extends command<DeleteEventCommandInput, DeleteEventCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEvent",
  DeleteEvent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventInput;
      output: DeleteEventOutput;
    };
    sdk: {
      input: DeleteEventCommandInput;
      output: DeleteEventCommandOutput;
    };
  };
}

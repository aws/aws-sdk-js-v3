// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAgentSpaceInput, DeleteAgentSpaceOutput } from "../models/models_0";
import { DeleteAgentSpace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAgentSpaceCommand}.
 */
export interface DeleteAgentSpaceCommandInput extends DeleteAgentSpaceInput {}
/**
 * @public
 *
 * The output of {@link DeleteAgentSpaceCommand}.
 */
export interface DeleteAgentSpaceCommandOutput extends DeleteAgentSpaceOutput, __MetadataBearer {}

/**
 * Deletes an AgentSpace. This operation is idempotent and returns a 204 No Content response on success.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, DeleteAgentSpaceCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, DeleteAgentSpaceCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // DeleteAgentSpaceInput
 *   agentSpaceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAgentSpaceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAgentSpaceCommandInput - {@link DeleteAgentSpaceCommandInput}
 * @returns {@link DeleteAgentSpaceCommandOutput}
 * @see {@link DeleteAgentSpaceCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentSpaceCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *
 * This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters provided in the request are invalid.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would exceed the service quota limit.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link DevOpsAgentServiceException}
 *
 * Base exception class for all service exceptions from DevOpsAgent service.
 *
 * @public
 */
export class DeleteAgentSpaceCommand extends command<DeleteAgentSpaceCommandInput, DeleteAgentSpaceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAgentSpace",
  DeleteAgentSpace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAgentSpaceInput;
      output: {};
    };
    sdk: {
      input: DeleteAgentSpaceCommandInput;
      output: DeleteAgentSpaceCommandOutput;
    };
  };
}

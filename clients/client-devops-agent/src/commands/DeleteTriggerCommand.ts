// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTriggerRequest, DeleteTriggerResponse } from "../models/models_0";
import { DeleteTrigger$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTriggerCommand}.
 */
export interface DeleteTriggerCommandInput extends DeleteTriggerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTriggerCommand}.
 */
export interface DeleteTriggerCommandOutput extends DeleteTriggerResponse, __MetadataBearer {}

/**
 * Deletes a Trigger from the specified agent space
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, DeleteTriggerCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, DeleteTriggerCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // DeleteTriggerRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   triggerId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTriggerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTriggerCommandInput - {@link DeleteTriggerCommandInput}
 * @returns {@link DeleteTriggerCommandOutput}
 * @see {@link DeleteTriggerCommandInput} for command's `input` shape.
 * @see {@link DeleteTriggerCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the requested resource is denied due to insufficient permissions.
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
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
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
 * @throws {@link DevOpsAgentServiceException}
 *
 * Base exception class for all service exceptions from DevOpsAgent service.
 *
 * @public
 */
export class DeleteTriggerCommand extends command<DeleteTriggerCommandInput, DeleteTriggerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTrigger",
  DeleteTrigger$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTriggerRequest;
      output: {};
    };
    sdk: {
      input: DeleteTriggerCommandInput;
      output: DeleteTriggerCommandOutput;
    };
  };
}

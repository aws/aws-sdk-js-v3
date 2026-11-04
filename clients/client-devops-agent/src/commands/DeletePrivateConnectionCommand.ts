// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePrivateConnectionInput, DeletePrivateConnectionOutput } from "../models/models_0";
import { DeletePrivateConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePrivateConnectionCommand}.
 */
export interface DeletePrivateConnectionCommandInput extends DeletePrivateConnectionInput {}
/**
 * @public
 *
 * The output of {@link DeletePrivateConnectionCommand}.
 */
export interface DeletePrivateConnectionCommandOutput extends DeletePrivateConnectionOutput, __MetadataBearer {}

/**
 * Deletes a Private Connection. The deletion is asynchronous and returns DELETE_IN_PROGRESS status.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, DeletePrivateConnectionCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, DeletePrivateConnectionCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // DeletePrivateConnectionInput
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeletePrivateConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeletePrivateConnectionOutput
 * //   name: "STRING_VALUE", // required
 * //   status: "ACTIVE" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * // };
 *
 * ```
 *
 * @param DeletePrivateConnectionCommandInput - {@link DeletePrivateConnectionCommandInput}
 * @returns {@link DeletePrivateConnectionCommandOutput}
 * @see {@link DeletePrivateConnectionCommandInput} for command's `input` shape.
 * @see {@link DeletePrivateConnectionCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the requested resource is denied due to insufficient permissions.
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
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource.
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
export class DeletePrivateConnectionCommand extends command<DeletePrivateConnectionCommandInput, DeletePrivateConnectionCommandOutput>(
  _ep0,
  _mw0,
  "DeletePrivateConnection",
  DeletePrivateConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePrivateConnectionInput;
      output: DeletePrivateConnectionOutput;
    };
    sdk: {
      input: DeletePrivateConnectionCommandInput;
      output: DeletePrivateConnectionCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAgentSpaceInput, UpdateAgentSpaceOutput } from "../models/models_0";
import { UpdateAgentSpace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAgentSpaceCommand}.
 */
export interface UpdateAgentSpaceCommandInput extends UpdateAgentSpaceInput {}
/**
 * @public
 *
 * The output of {@link UpdateAgentSpaceCommand}.
 */
export interface UpdateAgentSpaceCommandOutput extends UpdateAgentSpaceOutput, __MetadataBearer {}

/**
 * Updates the information of an existing AgentSpace.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, UpdateAgentSpaceCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, UpdateAgentSpaceCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // UpdateAgentSpaceInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   locale: "STRING_VALUE",
 *   preferences: { // AgentSpacePreferences
 *     "<keys>": true || false,
 *   },
 * };
 * const command = new UpdateAgentSpaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgentSpaceOutput
 * //   agentSpace: { // AgentSpace
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     locale: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     kmsKeyArn: "STRING_VALUE",
 * //     agentSpaceId: "STRING_VALUE", // required
 * //     preferences: { // AgentSpacePreferences
 * //       "<keys>": true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAgentSpaceCommandInput - {@link UpdateAgentSpaceCommandInput}
 * @returns {@link UpdateAgentSpaceCommandOutput}
 * @see {@link UpdateAgentSpaceCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentSpaceCommandOutput} for command's `response` shape.
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
export class UpdateAgentSpaceCommand extends command<UpdateAgentSpaceCommandInput, UpdateAgentSpaceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAgentSpace",
  UpdateAgentSpace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAgentSpaceInput;
      output: UpdateAgentSpaceOutput;
    };
    sdk: {
      input: UpdateAgentSpaceCommandInput;
      output: UpdateAgentSpaceCommandOutput;
    };
  };
}

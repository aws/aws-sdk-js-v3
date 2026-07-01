// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAgentSpaceInput, CreateAgentSpaceOutput } from "../models/models_0";
import { CreateAgentSpace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAgentSpaceCommand}.
 */
export interface CreateAgentSpaceCommandInput extends CreateAgentSpaceInput {}
/**
 * @public
 *
 * The output of {@link CreateAgentSpaceCommand}.
 */
export interface CreateAgentSpaceCommandOutput extends CreateAgentSpaceOutput, __MetadataBearer {}

/**
 * <p>Creates a new AgentSpace with the specified name and description. Duplicate space names are allowed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, CreateAgentSpaceCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, CreateAgentSpaceCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // CreateAgentSpaceInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   locale: "STRING_VALUE",
 *   kmsKeyArn: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAgentSpaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentSpaceOutput
 * //   agentSpace: { // AgentSpace
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     locale: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     kmsKeyArn: "STRING_VALUE",
 * //     agentSpaceId: "STRING_VALUE", // required
 * //   },
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAgentSpaceCommandInput - {@link CreateAgentSpaceCommandInput}
 * @returns {@link CreateAgentSpaceCommandOutput}
 * @see {@link CreateAgentSpaceCommandInput} for command's `input` shape.
 * @see {@link CreateAgentSpaceCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an unexpected error occurs in the processing of a request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters provided in the request are invalid.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed the service quota limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please slow down and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the requested resource is denied due to insufficient permissions.</p>
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  <p>This exception is thrown when the content size exceeds the allowed limit.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class CreateAgentSpaceCommand extends command<CreateAgentSpaceCommandInput, CreateAgentSpaceCommandOutput>(
  _ep0,
  _mw0,
  "CreateAgentSpace",
  CreateAgentSpace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentSpaceInput;
      output: CreateAgentSpaceOutput;
    };
    sdk: {
      input: CreateAgentSpaceCommandInput;
      output: CreateAgentSpaceCommandOutput;
    };
  };
}

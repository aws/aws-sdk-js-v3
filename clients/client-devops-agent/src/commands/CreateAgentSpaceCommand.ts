// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAgentSpaceInput, CreateAgentSpaceOutput } from "../models/models_0";
import { CreateAgentSpace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * Creates a new AgentSpace with the specified name and description. Duplicate space names are allowed.
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
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  One or more parameters provided in the request are invalid.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed the service quota limit.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class CreateAgentSpaceCommand extends $Command
  .classBuilder<
    CreateAgentSpaceCommandInput,
    CreateAgentSpaceCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "CreateAgentSpace", {})
  .n("DevOpsAgentClient", "CreateAgentSpaceCommand")
  .sc(CreateAgentSpace$)
  .build() {
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

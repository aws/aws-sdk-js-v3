// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateHarnessEndpointRequest, CreateHarnessEndpointResponse } from "../models/models_0";
import { CreateHarnessEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateHarnessEndpointCommand}.
 */
export interface CreateHarnessEndpointCommandInput extends CreateHarnessEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateHarnessEndpointCommand}.
 */
export interface CreateHarnessEndpointCommandOutput extends CreateHarnessEndpointResponse, __MetadataBearer {}

/**
 * <p>Operation to create a harness endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateHarnessEndpointCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateHarnessEndpointCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateHarnessEndpointRequest
 *   harnessId: "STRING_VALUE", // required
 *   endpointName: "STRING_VALUE", // required
 *   targetVersion: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateHarnessEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateHarnessEndpointResponse
 * //   endpoint: { // HarnessEndpoint
 * //     harnessId: "STRING_VALUE", // required
 * //     harnessName: "STRING_VALUE", // required
 * //     endpointName: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING" || "DELETE_FAILED", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     liveVersion: "STRING_VALUE",
 * //     targetVersion: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateHarnessEndpointCommandInput - {@link CreateHarnessEndpointCommandInput}
 * @returns {@link CreateHarnessEndpointCommandOutput}
 * @see {@link CreateHarnessEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateHarnessEndpointCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class CreateHarnessEndpointCommand extends command<CreateHarnessEndpointCommandInput, CreateHarnessEndpointCommandOutput>(
  _ep0,
  _mw0,
  "CreateHarnessEndpoint",
  CreateHarnessEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHarnessEndpointRequest;
      output: CreateHarnessEndpointResponse;
    };
    sdk: {
      input: CreateHarnessEndpointCommandInput;
      output: CreateHarnessEndpointCommandOutput;
    };
  };
}

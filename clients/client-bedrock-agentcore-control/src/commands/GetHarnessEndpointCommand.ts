// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetHarnessEndpointRequest, GetHarnessEndpointResponse } from "../models/models_0";
import { GetHarnessEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetHarnessEndpointCommand}.
 */
export interface GetHarnessEndpointCommandInput extends GetHarnessEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetHarnessEndpointCommand}.
 */
export interface GetHarnessEndpointCommandOutput extends GetHarnessEndpointResponse, __MetadataBearer {}

/**
 * <p>Operation to get a single harness endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetHarnessEndpointCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetHarnessEndpointCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetHarnessEndpointRequest
 *   harnessId: "STRING_VALUE", // required
 *   endpointName: "STRING_VALUE", // required
 * };
 * const command = new GetHarnessEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetHarnessEndpointResponse
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
 * @param GetHarnessEndpointCommandInput - {@link GetHarnessEndpointCommandInput}
 * @returns {@link GetHarnessEndpointCommandOutput}
 * @see {@link GetHarnessEndpointCommandInput} for command's `input` shape.
 * @see {@link GetHarnessEndpointCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
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
export class GetHarnessEndpointCommand extends command<GetHarnessEndpointCommandInput, GetHarnessEndpointCommandOutput>(
  _ep0,
  _mw0,
  "GetHarnessEndpoint",
  GetHarnessEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHarnessEndpointRequest;
      output: GetHarnessEndpointResponse;
    };
    sdk: {
      input: GetHarnessEndpointCommandInput;
      output: GetHarnessEndpointCommandOutput;
    };
  };
}

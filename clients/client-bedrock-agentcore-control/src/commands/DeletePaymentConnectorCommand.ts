// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeletePaymentConnectorRequest, DeletePaymentConnectorResponse } from "../models/models_1";
import { DeletePaymentConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePaymentConnectorCommand}.
 */
export interface DeletePaymentConnectorCommandInput extends DeletePaymentConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DeletePaymentConnectorCommand}.
 */
export interface DeletePaymentConnectorCommandOutput extends DeletePaymentConnectorResponse, __MetadataBearer {}

/**
 * <p>Deletes a payment connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeletePaymentConnectorCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeletePaymentConnectorCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeletePaymentConnectorRequest
 *   paymentManagerId: "STRING_VALUE", // required
 *   paymentConnectorId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeletePaymentConnectorCommand(input);
 * const response = await client.send(command);
 * // { // DeletePaymentConnectorResponse
 * //   status: "CREATING" || "UPDATING" || "DELETING" || "READY" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //   paymentConnectorId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeletePaymentConnectorCommandInput - {@link DeletePaymentConnectorCommandInput}
 * @returns {@link DeletePaymentConnectorCommandOutput}
 * @see {@link DeletePaymentConnectorCommandInput} for command's `input` shape.
 * @see {@link DeletePaymentConnectorCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class DeletePaymentConnectorCommand extends $Command
  .classBuilder<
    DeletePaymentConnectorCommandInput,
    DeletePaymentConnectorCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "DeletePaymentConnector", {})
  .n("BedrockAgentCoreControlClient", "DeletePaymentConnectorCommand")
  .sc(DeletePaymentConnector$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePaymentConnectorRequest;
      output: DeletePaymentConnectorResponse;
    };
    sdk: {
      input: DeletePaymentConnectorCommandInput;
      output: DeletePaymentConnectorCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDataIntegrationFlowRequest, DeleteDataIntegrationFlowResponse } from "../models/models_0";
import { DeleteDataIntegrationFlow } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataIntegrationFlowCommand}.
 */
export interface DeleteDataIntegrationFlowCommandInput extends DeleteDataIntegrationFlowRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataIntegrationFlowCommand}.
 */
export interface DeleteDataIntegrationFlowCommandOutput extends DeleteDataIntegrationFlowResponse, __MetadataBearer {}

/**
 * <p>Enable you to programmatically delete an existing data pipeline for the provided Amazon Web Services Supply Chain instance and DataIntegrationFlow name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, DeleteDataIntegrationFlowCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, DeleteDataIntegrationFlowCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // import type { SupplyChainClientConfig } from "@aws-sdk/client-supplychain";
 * const config = {}; // type is SupplyChainClientConfig
 * const client = new SupplyChainClient(config);
 * const input = { // DeleteDataIntegrationFlowRequest
 *   instanceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataIntegrationFlowCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDataIntegrationFlowResponse
 * //   instanceId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteDataIntegrationFlowCommandInput - {@link DeleteDataIntegrationFlowCommandInput}
 * @returns {@link DeleteDataIntegrationFlowCommandOutput}
 * @see {@link DeleteDataIntegrationFlowCommandInput} for command's `input` shape.
 * @see {@link DeleteDataIntegrationFlowCommandOutput} for command's `response` shape.
 * @see {@link SupplyChainClientResolvedConfig | config} for SupplyChainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the required privileges to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link SupplyChainServiceException}
 * <p>Base exception class for all service exceptions from SupplyChain service.</p>
 *
 *
 * @example Successful DeleteDataIntegrationFlow
 * ```javascript
 * //
 * const input = {
 *   instanceId: "8850c54e-e187-4fa7-89d4-6370f165174d",
 *   name: "testStagingFlow"
 * };
 * const command = new DeleteDataIntegrationFlowCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   instanceId: "8850c54e-e187-4fa7-89d4-6370f165174d",
 *   name: "testStagingFlow"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDataIntegrationFlowCommand extends $Command
  .classBuilder<
    DeleteDataIntegrationFlowCommandInput,
    DeleteDataIntegrationFlowCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GalaxyPublicAPIGateway", "DeleteDataIntegrationFlow", {})
  .n("SupplyChainClient", "DeleteDataIntegrationFlowCommand")
  .sc(DeleteDataIntegrationFlow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataIntegrationFlowRequest;
      output: DeleteDataIntegrationFlowResponse;
    };
    sdk: {
      input: DeleteDataIntegrationFlowCommandInput;
      output: DeleteDataIntegrationFlowCommandOutput;
    };
  };
}

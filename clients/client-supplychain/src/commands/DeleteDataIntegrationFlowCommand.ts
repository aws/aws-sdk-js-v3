// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDataIntegrationFlowRequest, DeleteDataIntegrationFlowResponse } from "../models/models_0";
import { DeleteDataIntegrationFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Enable you to programmatically delete an existing data pipeline for the provided Amazon Web Services Supply Chain instance and DataIntegrationFlow name.
 *
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
 *
 * You do not have the required privileges to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an AWS service.
 *
 * @throws {@link SupplyChainServiceException}
 *
 * Base exception class for all service exceptions from SupplyChain service.
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
export class DeleteDataIntegrationFlowCommand extends command<DeleteDataIntegrationFlowCommandInput, DeleteDataIntegrationFlowCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDataIntegrationFlow",
  DeleteDataIntegrationFlow$
) {
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

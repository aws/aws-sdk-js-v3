// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConnectorRequest, DeleteConnectorResponse } from "../models/models_2";
import { DeleteConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConnectorCommand}.
 */
export interface DeleteConnectorCommandInput extends DeleteConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectorCommand}.
 */
export interface DeleteConnectorCommandOutput extends DeleteConnectorResponse, __MetadataBearer {}

/**
 * <p>Deletes a CSPM connector. When you delete a connector, Security Hub CSPM stops ingesting findings and resource data from the connected cloud provider environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteConnectorCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteConnectorCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // DeleteConnectorRequest
 *   ConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectorCommand(input);
 * const response = await client.send(command);
 * // { // DeleteConnectorResponse
 * //   EnablementStatus: "ENABLED" || "PENDING_ENABLEMENT" || "PENDING_UPDATE" || "PENDING_DELETION",
 * // };
 *
 * ```
 *
 * @param DeleteConnectorCommandInput - {@link DeleteConnectorCommandInput}
 * @returns {@link DeleteConnectorCommandOutput}
 * @see {@link DeleteConnectorCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectorCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request causes conflict with the current state of the service resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To delete a CSPM connector
 * ```javascript
 * // This operation deletes a CSPM connector.
 * const input = {
 *   ConnectorId: "cspm-a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * };
 * const command = new DeleteConnectorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EnablementStatus: "PENDING_DELETION"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteConnectorCommand extends command<DeleteConnectorCommandInput, DeleteConnectorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConnector",
  DeleteConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectorRequest;
      output: DeleteConnectorResponse;
    };
    sdk: {
      input: DeleteConnectorCommandInput;
      output: DeleteConnectorCommandOutput;
    };
  };
}

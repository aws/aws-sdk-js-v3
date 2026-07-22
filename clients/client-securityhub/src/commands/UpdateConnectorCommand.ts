// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateConnectorRequest, UpdateConnectorResponse } from "../models/models_3";
import { UpdateConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateConnectorCommand}.
 */
export interface UpdateConnectorCommandInput extends UpdateConnectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectorCommand}.
 */
export interface UpdateConnectorCommandOutput extends UpdateConnectorResponse, __MetadataBearer {}

/**
 * <p>Updates a CSPM connector's configuration, such as the scope or regions for the connected cloud provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateConnectorCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateConnectorCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // UpdateConnectorRequest
 *   ConnectorId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Provider: { // CspmProviderUpdateConfiguration Union: only one key present
 *     Azure: { // AzureUpdateConfiguration
 *       ScopeConfiguration: { // AzureScopeConfiguration
 *         ScopeType: "TENANT" || "SUBSCRIPTION", // required
 *         ScopeValues: [ // ScopeValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       AzureRegions: [ // AzureRegionList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateConnectorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectorResponse
 * //   ConnectorStatus: "CONNECTED" || "DEGRADED" || "FAILED_TO_CONNECT" || "UNKNOWN",
 * //   EnablementStatus: "ENABLED" || "PENDING_ENABLEMENT" || "PENDING_UPDATE" || "PENDING_DELETION",
 * // };
 *
 * ```
 *
 * @param UpdateConnectorCommandInput - {@link UpdateConnectorCommandInput}
 * @returns {@link UpdateConnectorCommandOutput}
 * @see {@link UpdateConnectorCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorCommandOutput} for command's `response` shape.
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
 * @example To update a CSPM connector
 * ```javascript
 * // This operation updates the configuration of a CSPM connector.
 * const input = {
 *   ConnectorId: "cspm-a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   Description: "Updated connector description",
 *   Provider: {
 *     Azure: {
 *       AzureRegions: [
 *         "eastus",
 *         "westus2",
 *         "northeurope"
 *       ],
 *       ScopeConfiguration: {
 *         ScopeType: "SUBSCRIPTION",
 *         ScopeValues: [
 *           "sub-1234-5678-abcd",
 *           "sub-9012-3456-efgh"
 *         ]
 *       }
 *     }
 *   }
 * };
 * const command = new UpdateConnectorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ConnectorStatus: "CONNECTED",
 *   EnablementStatus: "PENDING_UPDATE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateConnectorCommand extends command<UpdateConnectorCommandInput, UpdateConnectorCommandOutput>(
  _ep0,
  _mw0,
  "UpdateConnector",
  UpdateConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectorRequest;
      output: UpdateConnectorResponse;
    };
    sdk: {
      input: UpdateConnectorCommandInput;
      output: UpdateConnectorCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateConnectorRequest, CreateConnectorResponse } from "../models/models_2";
import { CreateConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateConnectorCommand}.
 */
export interface CreateConnectorCommandInput extends CreateConnectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectorCommand}.
 */
export interface CreateConnectorCommandOutput extends CreateConnectorResponse, __MetadataBearer {}

/**
 * <p>Creates a cloud service provider management (CSPM) connector in Security Hub CSPM. A connector establishes a connection between Security Hub CSPM and a third-party cloud provider, enabling Security Hub CSPM to ingest security findings and resource data from the connected environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateConnectorCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateConnectorCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // CreateConnectorRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Provider: { // CspmProviderConfiguration Union: only one key present
 *     Azure: { // AzureProviderConfiguration
 *       AWSConfigConnectorArn: "STRING_VALUE", // required
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
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateConnectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectorResponse
 * //   ConnectorArn: "STRING_VALUE", // required
 * //   ConnectorId: "STRING_VALUE", // required
 * //   ConnectorStatus: "CONNECTED" || "DEGRADED" || "FAILED_TO_CONNECT" || "UNKNOWN",
 * //   EnablementStatus: "ENABLED" || "PENDING_ENABLEMENT" || "PENDING_UPDATE" || "PENDING_DELETION",
 * // };
 *
 * ```
 *
 * @param CreateConnectorCommandInput - {@link CreateConnectorCommandInput}
 * @returns {@link CreateConnectorCommandOutput}
 * @see {@link CreateConnectorCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was rejected because it would exceed the service quota limit.</p>
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
 * @example To create a CSPM connector
 * ```javascript
 * // This operation creates a CSPM connector to connect Security Hub to an Azure environment.
 * const input = {
 *   Description: "Connector for Azure tenant monitoring",
 *   Name: "MyAzureConnector",
 *   Provider: {
 *     Azure: {
 *       AWSConfigConnectorArn: "arn:aws:config:us-east-1:123456789012:connector/azure-connector-1234",
 *       AzureRegions: [
 *         "eastus",
 *         "westus2"
 *       ],
 *       ScopeConfiguration: {
 *         ScopeType: "TENANT"
 *       }
 *     }
 *   }
 * };
 * const command = new CreateConnectorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ConnectorArn: "arn:aws:securityhub:us-east-1:123456789012:connector/cspm-a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   ConnectorId: "cspm-a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   EnablementStatus: "PENDING_ENABLEMENT"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateConnectorCommand extends command<CreateConnectorCommandInput, CreateConnectorCommandOutput>(
  _ep0,
  _mw0,
  "CreateConnector",
  CreateConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectorRequest;
      output: CreateConnectorResponse;
    };
    sdk: {
      input: CreateConnectorCommandInput;
      output: CreateConnectorCommandOutput;
    };
  };
}

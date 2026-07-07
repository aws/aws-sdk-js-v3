// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetConnectorRequest, GetConnectorResponse } from "../models/models_2";
import { GetConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetConnectorCommand}.
 */
export interface GetConnectorCommandInput extends GetConnectorRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectorCommand}.
 */
export interface GetConnectorCommandOutput extends GetConnectorResponse, __MetadataBearer {}

/**
 * <p>Retrieves details for a CSPM connector based on the connector ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetConnectorCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetConnectorCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetConnectorRequest
 *   ConnectorId: "STRING_VALUE", // required
 * };
 * const command = new GetConnectorCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectorResponse
 * //   ConnectorArn: "STRING_VALUE",
 * //   ConnectorId: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   Health: { // CspmHealthCheck
 * //     ConnectorStatus: "CONNECTED" || "DEGRADED" || "FAILED_TO_CONNECT" || "UNKNOWN", // required
 * //     Message: "STRING_VALUE",
 * //     LastCheckedAt: new Date("TIMESTAMP"), // required
 * //     Issues: [ // HealthIssueList
 * //       { // HealthIssue
 * //         Code: "AUTHENTICATION_FAILURE" || "STREAM_AUTHORIZATION_FAILURE" || "DISCOVERY_FAILURE" || "STREAM_LIMIT_EXCEEDED" || "STREAM_DISCONNECTED" || "RECORDING_FAILURE" || "NO_HEALTH_DATA", // required
 * //         Message: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   ProviderDetail: { // CspmProviderDetail Union: only one key present
 * //     Azure: { // AzureDetail
 * //       AWSConfigConnectorArn: "STRING_VALUE", // required
 * //       ScopeConfiguration: { // AzureScopeConfiguration
 * //         ScopeType: "TENANT" || "SUBSCRIPTION", // required
 * //         ScopeValues: [ // ScopeValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       AzureRegions: [ // AzureRegionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   CreatedBy: "STRING_VALUE",
 * //   EnablementStatus: "ENABLED" || "PENDING_ENABLEMENT" || "PENDING_UPDATE" || "PENDING_DELETION",
 * // };
 *
 * ```
 *
 * @param GetConnectorCommandInput - {@link GetConnectorCommandInput}
 * @returns {@link GetConnectorCommandOutput}
 * @see {@link GetConnectorCommandInput} for command's `input` shape.
 * @see {@link GetConnectorCommandOutput} for command's `response` shape.
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
 * @example To get details of a CSPM connector
 * ```javascript
 * // This operation retrieves details for a CSPM connector.
 * const input = {
 *   ConnectorId: "cspm-a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * };
 * const command = new GetConnectorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ConnectorArn: "arn:aws:securityhub:us-east-1:123456789012:connector/cspm-a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   ConnectorId: "cspm-a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   CreatedAt: "2026-01-15T10:30:00.000Z",
 *   CreatedBy: "securityhub.amazonaws.com",
 *   Description: "Connector for Azure tenant monitoring",
 *   Health: {
 *     ConnectorStatus: "CONNECTED",
 *     LastCheckedAt: "2026-05-20T14:00:00.000Z"
 *   },
 *   LastUpdatedAt: "2026-05-20T14:00:00.000Z",
 *   Name: "MyAzureConnector",
 *   ProviderDetail: {
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
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetConnectorCommand extends command<GetConnectorCommandInput, GetConnectorCommandOutput>(
  _ep0,
  _mw0,
  "GetConnector",
  GetConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectorRequest;
      output: GetConnectorResponse;
    };
    sdk: {
      input: GetConnectorCommandInput;
      output: GetConnectorCommandOutput;
    };
  };
}

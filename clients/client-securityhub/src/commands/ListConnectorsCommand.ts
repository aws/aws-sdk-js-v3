// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListConnectorsRequest, ListConnectorsResponse } from "../models/models_3";
import { ListConnectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListConnectorsCommand}.
 */
export interface ListConnectorsCommandInput extends ListConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListConnectorsCommand}.
 */
export interface ListConnectorsCommandOutput extends ListConnectorsResponse, __MetadataBearer {}

/**
 * <p>Lists the CSPM connectors and their metadata for the calling account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListConnectorsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListConnectorsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // ListConnectorsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ProviderName: "AZURE",
 *   ConnectorStatus: "CONNECTED" || "DEGRADED" || "FAILED_TO_CONNECT" || "UNKNOWN",
 *   EnablementStatus: "ENABLED" || "PENDING_ENABLEMENT" || "PENDING_UPDATE" || "PENDING_DELETION",
 * };
 * const command = new ListConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectorsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Connectors: [ // CspmConnectorSummaryList // required
 * //     { // CspmConnectorSummary
 * //       ConnectorArn: "STRING_VALUE",
 * //       ConnectorId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ProviderSummary: { // CspmProviderSummary
 * //         ProviderName: "AZURE",
 * //         ConnectorStatus: "CONNECTED" || "DEGRADED" || "FAILED_TO_CONNECT" || "UNKNOWN",
 * //         ProviderConfiguration: { // CspmProviderDetail Union: only one key present
 * //           Azure: { // AzureDetail
 * //             AWSConfigConnectorArn: "STRING_VALUE", // required
 * //             ScopeConfiguration: { // AzureScopeConfiguration
 * //               ScopeType: "TENANT" || "SUBSCRIPTION", // required
 * //               ScopeValues: [ // ScopeValueList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             AzureRegions: [ // AzureRegionList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       CreatedBy: "STRING_VALUE",
 * //       EnablementStatus: "ENABLED" || "PENDING_ENABLEMENT" || "PENDING_UPDATE" || "PENDING_DELETION",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConnectorsCommandInput - {@link ListConnectorsCommandInput}
 * @returns {@link ListConnectorsCommandOutput}
 * @see {@link ListConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListConnectorsCommandOutput} for command's `response` shape.
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
 * @example To list CSPM connectors
 * ```javascript
 * // This operation lists the CSPM connectors for the calling account.
 * const input = {
 *   MaxResults: 10
 * };
 * const command = new ListConnectorsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Connectors: [
 *     {
 *       ConnectorArn: "arn:aws:securityhub:us-east-1:123456789012:connector/cspm-a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       ConnectorId: "cspm-a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       CreatedAt: "2026-01-15T10:30:00.000Z",
 *       Name: "MyAzureConnector",
 *       ProviderSummary: {
 *         ConnectorStatus: "CONNECTED",
 *         ProviderName: "AZURE"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListConnectorsCommand extends command<ListConnectorsCommandInput, ListConnectorsCommandOutput>(
  _ep0,
  _mw0,
  "ListConnectors",
  ListConnectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectorsRequest;
      output: ListConnectorsResponse;
    };
    sdk: {
      input: ListConnectorsCommandInput;
      output: ListConnectorsCommandOutput;
    };
  };
}

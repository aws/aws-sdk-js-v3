// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListConnectorsRequest, ListConnectorsResponse } from "../models/models_1";
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
 * <p>Lists connectors in your account. Results are paginated. Use the <code>nextToken</code> parameter to retrieve the next page of results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListConnectorsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListConnectorsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // ListConnectorsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filterCriteria: { // ConnectorFilterCriteria
 *     connectorArns: [ // ConnectorArnFilterList
 *       { // ConnectorArnFilter
 *         comparison: "EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     accounts: [ // StringFilterList
 *       { // StringFilter
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     awsConfigConnectorArns: [ // AwsConfigConnectorArnFilterList
 *       { // AwsConfigConnectorArnFilter
 *         comparison: "EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     connectorType: [ // ConnectorTypeFilterList
 *       { // ConnectorTypeFilter
 *         comparison: "EQUALS", // required
 *         value: "CUSTOMER_MANAGED" || "SERVICE_LINKED", // required
 *       },
 *     ],
 *     provider: [ // ProviderFilterList
 *       { // ProviderFilter
 *         comparison: "EQUALS", // required
 *         value: "AZURE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new ListConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectorsResponse
 * //   items: [ // ConnectorList // required
 * //     { // Connector
 * //       connectorArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       provider: "AZURE", // required
 * //       enablementStatus: "ENABLED" || "PENDING_ENABLEMENT" || "FAILED_TO_ENABLE" || "PENDING_UPDATE" || "FAILED_TO_UPDATE" || "PENDING_DELETION" || "DELETED" || "FAILED_TO_DELETE",
 * //       enablementStatusReason: "STRING_VALUE",
 * //       health: { // ConnectorHealth
 * //         connectorStatus: "CONNECTED" || "DEGRADED" || "FAILED_TO_CONNECT" || "PENDING_AUTHORIZATION" || "PENDING_CONFIGURATION" || "UNKNOWN", // required
 * //         lastCheckedAt: new Date("TIMESTAMP"), // required
 * //         message: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       azureRegions: [ // AzureRegionList
 * //         "STRING_VALUE",
 * //       ],
 * //       awsConfigConnectorArn: "STRING_VALUE",
 * //       scopeConfiguration: { // AzureScopeConfiguration
 * //         vmScanning: { // ScopeConfiguration
 * //           scopeType: "TENANT" || "SUBSCRIPTION", // required
 * //           scopeValues: [ // ScopeValueList
 * //             "STRING_VALUE",
 * //           ],
 * //           state: "ACTIVE" || "PENDING" || "ERROR" || "DISABLED",
 * //           stateReason: "STRING_VALUE",
 * //         },
 * //         containerImageScanning: {
 * //           scopeType: "TENANT" || "SUBSCRIPTION", // required
 * //           scopeValues: [
 * //             "STRING_VALUE",
 * //           ],
 * //           state: "ACTIVE" || "PENDING" || "ERROR" || "DISABLED",
 * //           stateReason: "STRING_VALUE",
 * //         },
 * //         serverlessScanning: {
 * //           scopeType: "TENANT" || "SUBSCRIPTION", // required
 * //           scopeValues: [
 * //             "STRING_VALUE",
 * //           ],
 * //           state: "ACTIVE" || "PENDING" || "ERROR" || "DISABLED",
 * //           stateReason: "STRING_VALUE",
 * //         },
 * //       },
 * //       tags: { // ConnectorTagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       autoInstallVMScanner: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConnectorsCommandInput - {@link ListConnectorsCommandInput}
 * @returns {@link ListConnectorsCommandOutput}
 * @see {@link ListConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListConnectorsCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @example List all Azure customer-managed connectors
 * ```javascript
 * //
 * const input = {
 *   filterCriteria: {
 *     connectorType: [
 *       {
 *         comparison: "EQUALS",
 *         value: "CUSTOMER_MANAGED"
 *       }
 *     ],
 *     provider: [
 *       {
 *         comparison: "EQUALS",
 *         value: "AZURE"
 *       }
 *     ]
 *   },
 *   maxResults: 10
 * };
 * const command = new ListConnectorsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       awsConfigConnectorArn: "arn:aws:config:us-east-1:123456789012:connector/azure/a7bc5463-04ce-4b52-901e-f26f7292a4a7/2fbed4bd-5b95-4947-a751-8defc76ecdae",
 *       azureRegions: [
 *         "eastus"
 *       ],
 *       connectorArn: "arn:aws:inspector2:us-east-1:123456789012:connector/6ccf8549-b52b-57ca-bf52-a2266da3c53a",
 *       createdAt: "2026-04-20T21:00:00.000Z",
 *       description: "Azure subscription scanner",
 *       enablementStatus: "ENABLED",
 *       health: {
 *         connectorStatus: "CONNECTED",
 *         lastCheckedAt: "2026-04-20T21:57:06.400Z"
 *       },
 *       name: "my-azure-connector",
 *       provider: "AZURE",
 *       scopeConfiguration: {
 *         vmScanning: {
 *           scopeType: "SUBSCRIPTION",
 *           scopeValues: [
 *             "552802f5-1492-4184-bbae-7291c9939b16"
 *           ],
 *           state: "ACTIVE"
 *         }
 *       },
 *       updatedAt: "2026-04-20T21:57:06.400Z"
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

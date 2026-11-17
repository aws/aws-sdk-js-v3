// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutConnectorTelemetryManifestInput, PutConnectorTelemetryManifestOutput } from "../models/models_0";
import { PutConnectorTelemetryManifest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutConnectorTelemetryManifestCommand}.
 */
export interface PutConnectorTelemetryManifestCommandInput extends PutConnectorTelemetryManifestInput {}
/**
 * @public
 *
 * The output of {@link PutConnectorTelemetryManifestCommand}.
 */
export interface PutConnectorTelemetryManifestCommandOutput extends PutConnectorTelemetryManifestOutput, __MetadataBearer {}

/**
 * <p>Creates or replaces the telemetry manifest of a connector. The telemetry manifest declares which resources in your cloud provider to collect telemetry from and which telemetry types to collect. To avoid overwriting changes made by another caller, specify <code>ExpectedVersion</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, PutConnectorTelemetryManifestCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, PutConnectorTelemetryManifestCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // PutConnectorTelemetryManifestInput
 *   ConnectorIdentifier: "STRING_VALUE", // required
 *   Manifest: { // TelemetryManifest
 *     Source: { // TelemetryManifestSource Union: only one key present
 *       Azure: [ // AzureSources
 *         { // AzureScopeItem
 *           TelemetryTypes: [ // AzureTelemetryTypeList // required
 *             "ResourceLogs" || "Metrics" || "FlowLogs",
 *           ],
 *           Scope: { // AzureScope
 *             Subscriptions: { // AzureSubscriptionScope Union: only one key present
 *               All: {},
 *               Ids: [ // AzureSubscriptionIdList
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             Regions: [ // AzureRegionList
 *               "STRING_VALUE",
 *             ],
 *             ResourceTypes: [ // AzureResourceTypeList
 *               "STRING_VALUE",
 *             ],
 *             TagFilters: [ // TagFilterList
 *               { // TagFilter
 *                 Key: "STRING_VALUE", // required
 *                 Values: [ // TagFilterValues // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *             Resources: [ // AzureResourceIdScopeList
 *               { // AzureResourceIdScope
 *                 Region: "STRING_VALUE", // required
 *                 ResourceIds: [ // AzureResourceIdList // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *           },
 *         },
 *       ],
 *     },
 *     Infrastructure: { // TelemetryManifestInfrastructure Union: only one key present
 *       Azure: { // AzureInfrastructure
 *         SubscriptionId: "STRING_VALUE",
 *         EventHubs: [ // AzureEventHubConfigurationList
 *           { // AzureEventHubConfiguration
 *             Tier: "Standard" || "Premium", // required
 *             PartitionCount: Number("int"), // required
 *           },
 *         ],
 *         FlowLogs: { // AzureFlowLogsInfrastructure Union: only one key present
 *           CustomerManaged: { // AzureCustomerManagedFlowLogs
 *             StorageAccounts: [ // AzureFlowLogStorageAccountScopeList // required
 *               { // AzureFlowLogStorageAccountScope
 *                 Region: "STRING_VALUE", // required
 *                 StorageAccountIds: [ // AzureStorageAccountIdList // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *           },
 *           AwsManaged: { // AzureAwsManagedFlowLogs
 *             RetentionDays: Number("int"), // required
 *           },
 *         },
 *       },
 *     },
 *   },
 *   ExpectedVersion: Number("long"),
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new PutConnectorTelemetryManifestCommand(input);
 * const response = await client.send(command);
 * // { // PutConnectorTelemetryManifestOutput
 * //   Version: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param PutConnectorTelemetryManifestCommandInput - {@link PutConnectorTelemetryManifestCommandInput}
 * @returns {@link PutConnectorTelemetryManifestCommandOutput}
 * @see {@link PutConnectorTelemetryManifestCommandInput} for command's `input` shape.
 * @see {@link PutConnectorTelemetryManifestCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The requested operation conflicts with the current state of the specified resource or with another request. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Indicates the request has failed to process because of an unknown server error, exception, or failure. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified resource (such as a telemetry rule) could not be found. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> The request throughput limit was exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Indicates input validation failed. Check your request parameters and retry the request. </p>
 *
 * @throws {@link ObservabilityAdminServiceException}
 * <p>Base exception class for all service exceptions from ObservabilityAdmin service.</p>
 *
 *
 * @public
 */
export class PutConnectorTelemetryManifestCommand extends command<PutConnectorTelemetryManifestCommandInput, PutConnectorTelemetryManifestCommandOutput>(
  _ep0,
  _mw0,
  "PutConnectorTelemetryManifest",
  PutConnectorTelemetryManifest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutConnectorTelemetryManifestInput;
      output: PutConnectorTelemetryManifestOutput;
    };
    sdk: {
      input: PutConnectorTelemetryManifestCommandInput;
      output: PutConnectorTelemetryManifestCommandOutput;
    };
  };
}

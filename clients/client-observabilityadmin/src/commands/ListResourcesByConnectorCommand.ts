// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResourcesByConnectorInput, ListResourcesByConnectorOutput } from "../models/models_0";
import { ListResourcesByConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourcesByConnectorCommand}.
 */
export interface ListResourcesByConnectorCommandInput extends ListResourcesByConnectorInput {}
/**
 * @public
 *
 * The output of {@link ListResourcesByConnectorCommand}.
 */
export interface ListResourcesByConnectorCommandOutput extends ListResourcesByConnectorOutput, __MetadataBearer {}

/**
 * <p>Lists resources in your cloud provider that the connector can access, such as management groups, subscriptions, resource types, Regions, resources, and Event Hubs. Use the results to build a telemetry manifest. This operation returns results in pages. To get the next page, pass the returned <code>NextToken</code> in the next call. We recommend that you use pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, ListResourcesByConnectorCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, ListResourcesByConnectorCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // ListResourcesByConnectorInput
 *   ConnectorIdentifier: "STRING_VALUE", // required
 *   Selector: { // ConnectorQuery Union: only one key present
 *     Azure: { // AzureConnectorQuery Union: only one key present
 *       ManagementGroups: { // AzureManagementGroupsQuery
 *         ParentManagementGroupId: "STRING_VALUE",
 *       },
 *       Subscriptions: { // AzureSubscriptionsQuery
 *         ManagementGroupId: "STRING_VALUE",
 *       },
 *       ResourceTypes: { // AzureResourceTypesQuery
 *         Scope: { // AzureQueryScope
 *           ManagementGroupId: "STRING_VALUE",
 *           SubscriptionIds: [ // AzureSubscriptionIdList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       Regions: { // AzureRegionsQuery
 *         Scope: {
 *           ManagementGroupId: "STRING_VALUE",
 *           SubscriptionIds: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       ResourceIds: { // AzureResourceIdsQuery
 *         Scope: {
 *           ManagementGroupId: "STRING_VALUE",
 *           SubscriptionIds: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         ResourceType: "STRING_VALUE",
 *         Region: "STRING_VALUE",
 *         TagFilters: [ // TagFilterList
 *           { // TagFilter
 *             Key: "STRING_VALUE", // required
 *             Values: [ // TagFilterValues // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *       EventHubs: { // AzureEventHubsQuery
 *         Scope: {
 *           ManagementGroupId: "STRING_VALUE",
 *           SubscriptionIds: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         NamespaceName: "STRING_VALUE",
 *         Region: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourcesByConnectorCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcesByConnectorOutput
 * //   Results: { // ConnectorQueryResults Union: only one key present
 * //     Azure: { // AzureConnectorQueryResults Union: only one key present
 * //       ManagementGroups: [ // AzureManagementGroupSummaries
 * //         { // AzureManagementGroupSummary
 * //           Id: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE",
 * //           DisplayName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Subscriptions: [ // AzureSubscriptionSummaries
 * //         { // AzureSubscriptionSummary
 * //           SubscriptionId: "STRING_VALUE", // required
 * //           DisplayName: "STRING_VALUE",
 * //           State: "STRING_VALUE",
 * //           ManagementGroupId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ResourceTypes: [ // AzureResourceTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       Regions: [ // AzureRegionList
 * //         "STRING_VALUE",
 * //       ],
 * //       ResourceIds: [ // AzureResourceIdentifierSummaries
 * //         { // AzureResourceIdentifierSummary
 * //           ResourceId: "STRING_VALUE", // required
 * //           ResourceType: "STRING_VALUE",
 * //           Region: "STRING_VALUE",
 * //           SubscriptionId: "STRING_VALUE",
 * //           Tags: { // AzureResourceTags
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       EventHubs: [ // AzureEventHubSummaries
 * //         { // AzureEventHubSummary
 * //           ResourceId: "STRING_VALUE", // required
 * //           EventHubName: "STRING_VALUE", // required
 * //           NamespaceName: "STRING_VALUE", // required
 * //           FullyQualifiedNamespace: "STRING_VALUE", // required
 * //           Region: "STRING_VALUE",
 * //           SubscriptionId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcesByConnectorCommandInput - {@link ListResourcesByConnectorCommandInput}
 * @returns {@link ListResourcesByConnectorCommandOutput}
 * @see {@link ListResourcesByConnectorCommandInput} for command's `input` shape.
 * @see {@link ListResourcesByConnectorCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
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
export class ListResourcesByConnectorCommand extends command<ListResourcesByConnectorCommandInput, ListResourcesByConnectorCommandOutput>(
  _ep0,
  _mw0,
  "ListResourcesByConnector",
  ListResourcesByConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcesByConnectorInput;
      output: ListResourcesByConnectorOutput;
    };
    sdk: {
      input: ListResourcesByConnectorCommandInput;
      output: ListResourcesByConnectorCommandOutput;
    };
  };
}

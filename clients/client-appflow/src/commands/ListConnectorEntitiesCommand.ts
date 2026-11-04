// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListConnectorEntitiesRequest, ListConnectorEntitiesResponse } from "../models/models_0";
import { ListConnectorEntities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListConnectorEntitiesCommand}.
 */
export interface ListConnectorEntitiesCommandInput extends ListConnectorEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListConnectorEntitiesCommand}.
 */
export interface ListConnectorEntitiesCommandOutput extends ListConnectorEntitiesResponse, __MetadataBearer {}

/**
 * Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for *Account* and *Opportunity* entities, or query ServiceNow for the *Incident* entity.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, ListConnectorEntitiesCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, ListConnectorEntitiesCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * // import type { AppflowClientConfig } from "@aws-sdk/client-appflow";
 * const config = {}; // type is AppflowClientConfig
 * const client = new AppflowClient(config);
 * const input = { // ListConnectorEntitiesRequest
 *   connectorProfileName: "STRING_VALUE",
 *   connectorType: "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot",
 *   entitiesPath: "STRING_VALUE",
 *   apiVersion: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListConnectorEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectorEntitiesResponse
 * //   connectorEntityMap: { // ConnectorEntityMap // required
 * //     "<keys>": [ // ConnectorEntityList
 * //       { // ConnectorEntity
 * //         name: "STRING_VALUE", // required
 * //         label: "STRING_VALUE",
 * //         hasNestedEntities: true || false,
 * //       },
 * //     ],
 * //   },
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConnectorEntitiesCommandInput - {@link ListConnectorEntitiesCommandInput}
 * @returns {@link ListConnectorEntitiesCommandOutput}
 * @see {@link ListConnectorEntitiesCommandInput} for command's `input` shape.
 * @see {@link ListConnectorEntitiesCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link ConnectorAuthenticationException} (client fault)
 *
 * An error occurred when authenticating with the connector endpoint.
 *
 * @throws {@link ConnectorServerException} (client fault)
 *
 * An error occurred when retrieving data from the connector endpoint.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred during the processing of your request. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request (such as the source or destination connector profile) is not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AppflowServiceException}
 *
 * Base exception class for all service exceptions from Appflow service.
 *
 * @public
 */
export class ListConnectorEntitiesCommand extends command<ListConnectorEntitiesCommandInput, ListConnectorEntitiesCommandOutput>(
  _ep0,
  _mw0,
  "ListConnectorEntities",
  ListConnectorEntities$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectorEntitiesRequest;
      output: ListConnectorEntitiesResponse;
    };
    sdk: {
      input: ListConnectorEntitiesCommandInput;
      output: ListConnectorEntitiesCommandOutput;
    };
  };
}

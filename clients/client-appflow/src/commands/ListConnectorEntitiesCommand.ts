// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListConnectorEntitiesRequest, ListConnectorEntitiesResponse } from "../models/models_0";
import { de_ListConnectorEntitiesCommand, se_ListConnectorEntitiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Returns the list of available connector entities supported by Amazon AppFlow. For
 *       example, you can query Salesforce for <i>Account</i> and
 *         <i>Opportunity</i> entities, or query ServiceNow for the
 *         <i>Incident</i> entity. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, ListConnectorEntitiesCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, ListConnectorEntitiesCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p> An error occurred when authenticating with the connector endpoint. </p>
 *
 * @throws {@link ConnectorServerException} (client fault)
 *  <p> An error occurred when retrieving data from the connector endpoint. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 * @public
 */
export class ListConnectorEntitiesCommand extends $Command
  .classBuilder<
    ListConnectorEntitiesCommandInput,
    ListConnectorEntitiesCommandOutput,
    AppflowClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppflowClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SandstoneConfigurationServiceLambda", "ListConnectorEntities", {})
  .n("AppflowClient", "ListConnectorEntitiesCommand")
  .f(void 0, void 0)
  .ser(se_ListConnectorEntitiesCommand)
  .de(de_ListConnectorEntitiesCommand)
  .build() {
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

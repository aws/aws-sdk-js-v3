// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ResetConnectorMetadataCacheRequest, ResetConnectorMetadataCacheResponse } from "../models/models_0";
import { ResetConnectorMetadataCache } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetConnectorMetadataCacheCommand}.
 */
export interface ResetConnectorMetadataCacheCommandInput extends ResetConnectorMetadataCacheRequest {}
/**
 * @public
 *
 * The output of {@link ResetConnectorMetadataCacheCommand}.
 */
export interface ResetConnectorMetadataCacheCommandOutput
  extends ResetConnectorMetadataCacheResponse,
    __MetadataBearer {}

/**
 * <p>Resets metadata about your connector entities that Amazon AppFlow stored in its
 *       cache. Use this action when you want Amazon AppFlow to return the latest information
 *       about the data that you have in a source application.</p>
 *          <p>Amazon AppFlow returns metadata about your entities when you use the
 *       ListConnectorEntities or DescribeConnectorEntities actions. Following these actions, Amazon AppFlow caches the metadata to reduce the number of API requests that it must send to
 *       the source application. Amazon AppFlow automatically resets the cache once every hour,
 *       but you can use this action when you want to get the latest metadata right away.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, ResetConnectorMetadataCacheCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, ResetConnectorMetadataCacheCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * // import type { AppflowClientConfig } from "@aws-sdk/client-appflow";
 * const config = {}; // type is AppflowClientConfig
 * const client = new AppflowClient(config);
 * const input = { // ResetConnectorMetadataCacheRequest
 *   connectorProfileName: "STRING_VALUE",
 *   connectorType: "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot",
 *   connectorEntityName: "STRING_VALUE",
 *   entitiesPath: "STRING_VALUE",
 *   apiVersion: "STRING_VALUE",
 * };
 * const command = new ResetConnectorMetadataCacheCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResetConnectorMetadataCacheCommandInput - {@link ResetConnectorMetadataCacheCommandInput}
 * @returns {@link ResetConnectorMetadataCacheCommandOutput}
 * @see {@link ResetConnectorMetadataCacheCommandInput} for command's `input` shape.
 * @see {@link ResetConnectorMetadataCacheCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict when processing the request (for example, a flow with the given name
 *       already exists within the account. Check for conflicting resource names and try again. </p>
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
 *
 * @public
 */
export class ResetConnectorMetadataCacheCommand extends $Command
  .classBuilder<
    ResetConnectorMetadataCacheCommandInput,
    ResetConnectorMetadataCacheCommandOutput,
    AppflowClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppflowClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SandstoneConfigurationServiceLambda", "ResetConnectorMetadataCache", {})
  .n("AppflowClient", "ResetConnectorMetadataCacheCommand")
  .sc(ResetConnectorMetadataCache)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetConnectorMetadataCacheRequest;
      output: {};
    };
    sdk: {
      input: ResetConnectorMetadataCacheCommandInput;
      output: ResetConnectorMetadataCacheCommandOutput;
    };
  };
}

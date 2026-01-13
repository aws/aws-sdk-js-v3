// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateComponentConfigurationRequest, UpdateComponentConfigurationResponse } from "../models/models_0";
import { UpdateComponentConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateComponentConfigurationCommand}.
 */
export interface UpdateComponentConfigurationCommandInput extends UpdateComponentConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateComponentConfigurationCommand}.
 */
export interface UpdateComponentConfigurationCommandOutput extends UpdateComponentConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates the monitoring configurations for the component. The configuration input
 *          parameter is an escaped JSON of the configuration and should match the schema of what is
 *          returned by <code>DescribeComponentConfigurationRecommendation</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, UpdateComponentConfigurationCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, UpdateComponentConfigurationCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * // import type { ApplicationInsightsClientConfig } from "@aws-sdk/client-application-insights";
 * const config = {}; // type is ApplicationInsightsClientConfig
 * const client = new ApplicationInsightsClient(config);
 * const input = { // UpdateComponentConfigurationRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   ComponentName: "STRING_VALUE", // required
 *   Monitor: true || false,
 *   Tier: "CUSTOM" || "DEFAULT" || "DOT_NET_CORE" || "DOT_NET_WORKER" || "DOT_NET_WEB_TIER" || "DOT_NET_WEB" || "SQL_SERVER" || "SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP" || "MYSQL" || "POSTGRESQL" || "JAVA_JMX" || "ORACLE" || "SAP_HANA_MULTI_NODE" || "SAP_HANA_SINGLE_NODE" || "SAP_HANA_HIGH_AVAILABILITY" || "SAP_ASE_SINGLE_NODE" || "SAP_ASE_HIGH_AVAILABILITY" || "SQL_SERVER_FAILOVER_CLUSTER_INSTANCE" || "SHAREPOINT" || "ACTIVE_DIRECTORY" || "SAP_NETWEAVER_STANDARD" || "SAP_NETWEAVER_DISTRIBUTED" || "SAP_NETWEAVER_HIGH_AVAILABILITY",
 *   ComponentConfiguration: "STRING_VALUE",
 *   AutoConfigEnabled: true || false,
 * };
 * const command = new UpdateComponentConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateComponentConfigurationCommandInput - {@link UpdateComponentConfigurationCommandInput}
 * @returns {@link UpdateComponentConfigurationCommandOutput}
 * @see {@link UpdateComponentConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateComponentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is already created or in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource does not exist in the customer account.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link ApplicationInsightsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationInsights service.</p>
 *
 *
 * @public
 */
export class UpdateComponentConfigurationCommand extends $Command
  .classBuilder<
    UpdateComponentConfigurationCommandInput,
    UpdateComponentConfigurationCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2WindowsBarleyService", "UpdateComponentConfiguration", {})
  .n("ApplicationInsightsClient", "UpdateComponentConfigurationCommand")
  .sc(UpdateComponentConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateComponentConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateComponentConfigurationCommandInput;
      output: UpdateComponentConfigurationCommandOutput;
    };
  };
}

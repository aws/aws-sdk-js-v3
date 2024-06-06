// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeComponentConfigurationRequest, DescribeComponentConfigurationResponse } from "../models/models_0";
import {
  de_DescribeComponentConfigurationCommand,
  se_DescribeComponentConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeComponentConfigurationCommand}.
 */
export interface DescribeComponentConfigurationCommandInput extends DescribeComponentConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeComponentConfigurationCommand}.
 */
export interface DescribeComponentConfigurationCommandOutput
  extends DescribeComponentConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Describes the monitoring configuration of the component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeComponentConfigurationCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeComponentConfigurationCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const input = { // DescribeComponentConfigurationRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   ComponentName: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DescribeComponentConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeComponentConfigurationResponse
 * //   Monitor: true || false,
 * //   Tier: "CUSTOM" || "DEFAULT" || "DOT_NET_CORE" || "DOT_NET_WORKER" || "DOT_NET_WEB_TIER" || "DOT_NET_WEB" || "SQL_SERVER" || "SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP" || "MYSQL" || "POSTGRESQL" || "JAVA_JMX" || "ORACLE" || "SAP_HANA_MULTI_NODE" || "SAP_HANA_SINGLE_NODE" || "SAP_HANA_HIGH_AVAILABILITY" || "SQL_SERVER_FAILOVER_CLUSTER_INSTANCE" || "SHAREPOINT" || "ACTIVE_DIRECTORY" || "SAP_NETWEAVER_STANDARD" || "SAP_NETWEAVER_DISTRIBUTED" || "SAP_NETWEAVER_HIGH_AVAILABILITY",
 * //   ComponentConfiguration: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeComponentConfigurationCommandInput - {@link DescribeComponentConfigurationCommandInput}
 * @returns {@link DescribeComponentConfigurationCommandOutput}
 * @see {@link DescribeComponentConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeComponentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
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
 * @public
 */
export class DescribeComponentConfigurationCommand extends $Command
  .classBuilder<
    DescribeComponentConfigurationCommandInput,
    DescribeComponentConfigurationCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EC2WindowsBarleyService", "DescribeComponentConfiguration", {})
  .n("ApplicationInsightsClient", "DescribeComponentConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeComponentConfigurationCommand)
  .de(de_DescribeComponentConfigurationCommand)
  .build() {}

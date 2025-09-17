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
import { DescribeComponentRequest, DescribeComponentResponse } from "../models/models_0";
import { de_DescribeComponentCommand, se_DescribeComponentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeComponentCommand}.
 */
export interface DescribeComponentCommandInput extends DescribeComponentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeComponentCommand}.
 */
export interface DescribeComponentCommandOutput extends DescribeComponentResponse, __MetadataBearer {}

/**
 * <p>Describes a component and lists the resources that are grouped together in a
 *          component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeComponentCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeComponentCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * // import type { ApplicationInsightsClientConfig } from "@aws-sdk/client-application-insights";
 * const config = {}; // type is ApplicationInsightsClientConfig
 * const client = new ApplicationInsightsClient(config);
 * const input = { // DescribeComponentRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   ComponentName: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DescribeComponentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeComponentResponse
 * //   ApplicationComponent: { // ApplicationComponent
 * //     ComponentName: "STRING_VALUE",
 * //     ComponentRemarks: "STRING_VALUE",
 * //     ResourceType: "STRING_VALUE",
 * //     OsType: "WINDOWS" || "LINUX",
 * //     Tier: "CUSTOM" || "DEFAULT" || "DOT_NET_CORE" || "DOT_NET_WORKER" || "DOT_NET_WEB_TIER" || "DOT_NET_WEB" || "SQL_SERVER" || "SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP" || "MYSQL" || "POSTGRESQL" || "JAVA_JMX" || "ORACLE" || "SAP_HANA_MULTI_NODE" || "SAP_HANA_SINGLE_NODE" || "SAP_HANA_HIGH_AVAILABILITY" || "SAP_ASE_SINGLE_NODE" || "SAP_ASE_HIGH_AVAILABILITY" || "SQL_SERVER_FAILOVER_CLUSTER_INSTANCE" || "SHAREPOINT" || "ACTIVE_DIRECTORY" || "SAP_NETWEAVER_STANDARD" || "SAP_NETWEAVER_DISTRIBUTED" || "SAP_NETWEAVER_HIGH_AVAILABILITY",
 * //     Monitor: true || false,
 * //     DetectedWorkload: { // DetectedWorkload
 * //       "<keys>": { // WorkloadMetaData
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   ResourceList: [ // ResourceList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeComponentCommandInput - {@link DescribeComponentCommandInput}
 * @returns {@link DescribeComponentCommandOutput}
 * @see {@link DescribeComponentCommandInput} for command's `input` shape.
 * @see {@link DescribeComponentCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeComponentCommand extends $Command
  .classBuilder<
    DescribeComponentCommandInput,
    DescribeComponentCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EC2WindowsBarleyService", "DescribeComponent", {})
  .n("ApplicationInsightsClient", "DescribeComponentCommand")
  .f(void 0, void 0)
  .ser(se_DescribeComponentCommand)
  .de(de_DescribeComponentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeComponentRequest;
      output: DescribeComponentResponse;
    };
    sdk: {
      input: DescribeComponentCommandInput;
      output: DescribeComponentCommandOutput;
    };
  };
}

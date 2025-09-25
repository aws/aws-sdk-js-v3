// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorkloadsRequest, ListWorkloadsResponse } from "../models/models_0";
import { ListWorkloads } from "../schemas/schemas_2_Component";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkloadsCommand}.
 */
export interface ListWorkloadsCommandInput extends ListWorkloadsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkloadsCommand}.
 */
export interface ListWorkloadsCommandOutput extends ListWorkloadsResponse, __MetadataBearer {}

/**
 * <p>Lists the workloads that are configured on a given component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, ListWorkloadsCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, ListWorkloadsCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * // import type { ApplicationInsightsClientConfig } from "@aws-sdk/client-application-insights";
 * const config = {}; // type is ApplicationInsightsClientConfig
 * const client = new ApplicationInsightsClient(config);
 * const input = { // ListWorkloadsRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   ComponentName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new ListWorkloadsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkloadsResponse
 * //   WorkloadList: [ // WorkloadList
 * //     { // Workload
 * //       WorkloadId: "STRING_VALUE",
 * //       ComponentName: "STRING_VALUE",
 * //       WorkloadName: "STRING_VALUE",
 * //       Tier: "CUSTOM" || "DEFAULT" || "DOT_NET_CORE" || "DOT_NET_WORKER" || "DOT_NET_WEB_TIER" || "DOT_NET_WEB" || "SQL_SERVER" || "SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP" || "MYSQL" || "POSTGRESQL" || "JAVA_JMX" || "ORACLE" || "SAP_HANA_MULTI_NODE" || "SAP_HANA_SINGLE_NODE" || "SAP_HANA_HIGH_AVAILABILITY" || "SAP_ASE_SINGLE_NODE" || "SAP_ASE_HIGH_AVAILABILITY" || "SQL_SERVER_FAILOVER_CLUSTER_INSTANCE" || "SHAREPOINT" || "ACTIVE_DIRECTORY" || "SAP_NETWEAVER_STANDARD" || "SAP_NETWEAVER_DISTRIBUTED" || "SAP_NETWEAVER_HIGH_AVAILABILITY",
 * //       WorkloadRemarks: "STRING_VALUE",
 * //       MissingWorkloadConfig: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkloadsCommandInput - {@link ListWorkloadsCommandInput}
 * @returns {@link ListWorkloadsCommandOutput}
 * @see {@link ListWorkloadsCommandInput} for command's `input` shape.
 * @see {@link ListWorkloadsCommandOutput} for command's `response` shape.
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
export class ListWorkloadsCommand extends $Command
  .classBuilder<
    ListWorkloadsCommandInput,
    ListWorkloadsCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2WindowsBarleyService", "ListWorkloads", {})
  .n("ApplicationInsightsClient", "ListWorkloadsCommand")
  .sc(ListWorkloads)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkloadsRequest;
      output: ListWorkloadsResponse;
    };
    sdk: {
      input: ListWorkloadsCommandInput;
      output: ListWorkloadsCommandOutput;
    };
  };
}

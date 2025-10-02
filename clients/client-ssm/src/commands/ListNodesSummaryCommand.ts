// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListNodesSummaryResult } from "../models/models_1";
import { ListNodesSummaryRequest } from "../models/models_2";
import { de_ListNodesSummaryCommand, se_ListNodesSummaryCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNodesSummaryCommand}.
 */
export interface ListNodesSummaryCommandInput extends ListNodesSummaryRequest {}
/**
 * @public
 *
 * The output of {@link ListNodesSummaryCommand}.
 */
export interface ListNodesSummaryCommandOutput extends ListNodesSummaryResult, __MetadataBearer {}

/**
 * <p>Generates a summary of managed instance/node metadata based on the filters and aggregators
 *    you specify. Results are grouped by the input aggregator you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListNodesSummaryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListNodesSummaryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ListNodesSummaryRequest
 *   SyncName: "STRING_VALUE",
 *   Filters: [ // NodeFilterList
 *     { // NodeFilter
 *       Key: "AgentType" || "AgentVersion" || "ComputerName" || "InstanceId" || "InstanceStatus" || "IpAddress" || "ManagedStatus" || "PlatformName" || "PlatformType" || "PlatformVersion" || "ResourceType" || "OrganizationalUnitId" || "OrganizationalUnitPath" || "Region" || "AccountId", // required
 *       Values: [ // NodeFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *       Type: "Equal" || "NotEqual" || "BeginWith",
 *     },
 *   ],
 *   Aggregators: [ // NodeAggregatorList // required
 *     { // NodeAggregator
 *       AggregatorType: "Count", // required
 *       TypeName: "Instance", // required
 *       AttributeName: "AgentVersion" || "PlatformName" || "PlatformType" || "PlatformVersion" || "Region" || "ResourceType", // required
 *       Aggregators: [
 *         {
 *           AggregatorType: "Count", // required
 *           TypeName: "Instance", // required
 *           AttributeName: "AgentVersion" || "PlatformName" || "PlatformType" || "PlatformVersion" || "Region" || "ResourceType", // required
 *           Aggregators: "<NodeAggregatorList>",
 *         },
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListNodesSummaryCommand(input);
 * const response = await client.send(command);
 * // { // ListNodesSummaryResult
 * //   Summary: [ // NodeSummaryList
 * //     { // NodeSummary
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNodesSummaryCommandInput - {@link ListNodesSummaryCommandInput}
 * @returns {@link ListNodesSummaryCommandOutput}
 * @see {@link ListNodesSummaryCommandInput} for command's `input` shape.
 * @see {@link ListNodesSummaryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidAggregatorException} (client fault)
 *  <p>The specified aggregator isn't valid for the group type. Verify that the aggregator you
 *    provided is supported.</p>
 *
 * @throws {@link InvalidFilter} (client fault)
 *  <p>The filter name isn't valid. Verify that you entered the correct name and try again.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link ResourceDataSyncNotFoundException} (client fault)
 *  <p>The specified sync name wasn't found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This operation is not supported for the current account. You must first enable the Systems Manager integrated experience in your account.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @example ListNodesSummary
 * ```javascript
 * // This example illustrates one usage of ListNodesSummary
 * const input = {
 *   Aggregators: [
 *     {
 *       AggregatorType: "Count",
 *       AttributeName: "Region",
 *       TypeName: "Instance"
 *     }
 *   ],
 *   Filters: [
 *     {
 *       Key: "InstanceStatus",
 *       Type: "Equal",
 *       Values: [
 *         "Active"
 *       ]
 *     }
 *   ],
 *   MaxResults: 2,
 *   NextToken: "A9lT8CAxj9aDFRi+MNAoFq08I---EXAMPLE",
 *   SyncName: "AWS-QuickSetup-ManagedNode"
 * };
 * const command = new ListNodesSummaryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Summary: [
 *     {
 *       Count: "26",
 *       Region: "us-east-1"
 *     },
 *     {
 *       Count: "7",
 *       Region: "us-east-2"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListNodesSummaryCommand extends $Command
  .classBuilder<
    ListNodesSummaryCommandInput,
    ListNodesSummaryCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "ListNodesSummary", {})
  .n("SSMClient", "ListNodesSummaryCommand")
  .f(void 0, void 0)
  .ser(se_ListNodesSummaryCommand)
  .de(de_ListNodesSummaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNodesSummaryRequest;
      output: ListNodesSummaryResult;
    };
    sdk: {
      input: ListNodesSummaryCommandInput;
      output: ListNodesSummaryCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListProtectionGroupsRequest, ListProtectionGroupsResponse } from "../models/models_0";
import { de_ListProtectionGroupsCommand, se_ListProtectionGroupsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProtectionGroupsCommand}.
 */
export interface ListProtectionGroupsCommandInput extends ListProtectionGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListProtectionGroupsCommand}.
 */
export interface ListProtectionGroupsCommandOutput extends ListProtectionGroupsResponse, __MetadataBearer {}

/**
 * <p>Retrieves <a>ProtectionGroup</a> objects for the account. You can retrieve all protection groups or you can provide
 *        filtering criteria and retrieve just the subset of protection groups that match the criteria. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, ListProtectionGroupsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, ListProtectionGroupsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ShieldClient(config);
 * const input = { // ListProtectionGroupsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   InclusionFilters: { // InclusionProtectionGroupFilters
 *     ProtectionGroupIds: [ // ProtectionGroupIdFilters
 *       "STRING_VALUE",
 *     ],
 *     Patterns: [ // ProtectionGroupPatternFilters
 *       "ALL" || "ARBITRARY" || "BY_RESOURCE_TYPE",
 *     ],
 *     ResourceTypes: [ // ProtectedResourceTypeFilters
 *       "CLOUDFRONT_DISTRIBUTION" || "ROUTE_53_HOSTED_ZONE" || "ELASTIC_IP_ALLOCATION" || "CLASSIC_LOAD_BALANCER" || "APPLICATION_LOAD_BALANCER" || "GLOBAL_ACCELERATOR",
 *     ],
 *     Aggregations: [ // ProtectionGroupAggregationFilters
 *       "SUM" || "MEAN" || "MAX",
 *     ],
 *   },
 * };
 * const command = new ListProtectionGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListProtectionGroupsResponse
 * //   ProtectionGroups: [ // ProtectionGroups // required
 * //     { // ProtectionGroup
 * //       ProtectionGroupId: "STRING_VALUE", // required
 * //       Aggregation: "SUM" || "MEAN" || "MAX", // required
 * //       Pattern: "ALL" || "ARBITRARY" || "BY_RESOURCE_TYPE", // required
 * //       ResourceType: "CLOUDFRONT_DISTRIBUTION" || "ROUTE_53_HOSTED_ZONE" || "ELASTIC_IP_ALLOCATION" || "CLASSIC_LOAD_BALANCER" || "APPLICATION_LOAD_BALANCER" || "GLOBAL_ACCELERATOR",
 * //       Members: [ // ProtectionGroupMembers // required
 * //         "STRING_VALUE",
 * //       ],
 * //       ProtectionGroupArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProtectionGroupsCommandInput - {@link ListProtectionGroupsCommandInput}
 * @returns {@link ListProtectionGroupsCommandOutput}
 * @see {@link ListProtectionGroupsCommandInput} for command's `input` shape.
 * @see {@link ListProtectionGroupsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Exception that indicates that the <code>NextToken</code> specified in the request is invalid. Submit the request using the <code>NextToken</code> value that was returned in the prior response.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 * @public
 */
export class ListProtectionGroupsCommand extends $Command
  .classBuilder<
    ListProtectionGroupsCommandInput,
    ListProtectionGroupsCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShield_20160616", "ListProtectionGroups", {})
  .n("ShieldClient", "ListProtectionGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListProtectionGroupsCommand)
  .de(de_ListProtectionGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProtectionGroupsRequest;
      output: ListProtectionGroupsResponse;
    };
    sdk: {
      input: ListProtectionGroupsCommandInput;
      output: ListProtectionGroupsCommandOutput;
    };
  };
}

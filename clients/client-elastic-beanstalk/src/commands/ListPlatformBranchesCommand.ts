// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPlatformBranchesRequest, ListPlatformBranchesResult } from "../models/models_0";
import { de_ListPlatformBranchesCommand, se_ListPlatformBranchesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPlatformBranchesCommand}.
 */
export interface ListPlatformBranchesCommandInput extends ListPlatformBranchesRequest {}
/**
 * @public
 *
 * The output of {@link ListPlatformBranchesCommand}.
 */
export interface ListPlatformBranchesCommandOutput extends ListPlatformBranchesResult, __MetadataBearer {}

/**
 * <p>Lists the platform branches available for your account in an AWS Region. Provides
 *       summary information about each platform branch.</p>
 *          <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk
 *         Platforms Glossary</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ListPlatformBranchesCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ListPlatformBranchesCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // ListPlatformBranchesRequest
 *   Filters: [ // SearchFilters
 *     { // SearchFilter
 *       Attribute: "STRING_VALUE",
 *       Operator: "STRING_VALUE",
 *       Values: [ // SearchFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPlatformBranchesCommand(input);
 * const response = await client.send(command);
 * // { // ListPlatformBranchesResult
 * //   PlatformBranchSummaryList: [ // PlatformBranchSummaryList
 * //     { // PlatformBranchSummary
 * //       PlatformName: "STRING_VALUE",
 * //       BranchName: "STRING_VALUE",
 * //       LifecycleState: "STRING_VALUE",
 * //       BranchOrder: Number("int"),
 * //       SupportedTierList: [ // SupportedTierList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPlatformBranchesCommandInput - {@link ListPlatformBranchesCommandInput}
 * @returns {@link ListPlatformBranchesCommandOutput}
 * @see {@link ListPlatformBranchesCommandInput} for command's `input` shape.
 * @see {@link ListPlatformBranchesCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @public
 */
export class ListPlatformBranchesCommand extends $Command
  .classBuilder<
    ListPlatformBranchesCommandInput,
    ListPlatformBranchesCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSElasticBeanstalkService", "ListPlatformBranches", {})
  .n("ElasticBeanstalkClient", "ListPlatformBranchesCommand")
  .f(void 0, void 0)
  .ser(se_ListPlatformBranchesCommand)
  .de(de_ListPlatformBranchesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPlatformBranchesRequest;
      output: ListPlatformBranchesResult;
    };
    sdk: {
      input: ListPlatformBranchesCommandInput;
      output: ListPlatformBranchesCommandOutput;
    };
  };
}

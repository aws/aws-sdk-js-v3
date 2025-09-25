// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPlatformVersionsRequest, ListPlatformVersionsResult } from "../models/models_0";
import { ListPlatformVersions } from "../schemas/schemas_1_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPlatformVersionsCommand}.
 */
export interface ListPlatformVersionsCommandInput extends ListPlatformVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPlatformVersionsCommand}.
 */
export interface ListPlatformVersionsCommandOutput extends ListPlatformVersionsResult, __MetadataBearer {}

/**
 * <p>Lists the platform versions available for your account in an AWS Region. Provides
 *       summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform
 *       version.</p>
 *          <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk
 *         Platforms Glossary</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ListPlatformVersionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ListPlatformVersionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // ListPlatformVersionsRequest
 *   Filters: [ // PlatformFilters
 *     { // PlatformFilter
 *       Type: "STRING_VALUE",
 *       Operator: "STRING_VALUE",
 *       Values: [ // PlatformFilterValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPlatformVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPlatformVersionsResult
 * //   PlatformSummaryList: [ // PlatformSummaryList
 * //     { // PlatformSummary
 * //       PlatformArn: "STRING_VALUE",
 * //       PlatformOwner: "STRING_VALUE",
 * //       PlatformStatus: "Creating" || "Failed" || "Ready" || "Deleting" || "Deleted",
 * //       PlatformCategory: "STRING_VALUE",
 * //       OperatingSystemName: "STRING_VALUE",
 * //       OperatingSystemVersion: "STRING_VALUE",
 * //       SupportedTierList: [ // SupportedTierList
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportedAddonList: [ // SupportedAddonList
 * //         "STRING_VALUE",
 * //       ],
 * //       PlatformLifecycleState: "STRING_VALUE",
 * //       PlatformVersion: "STRING_VALUE",
 * //       PlatformBranchName: "STRING_VALUE",
 * //       PlatformBranchLifecycleState: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPlatformVersionsCommandInput - {@link ListPlatformVersionsCommandInput}
 * @returns {@link ListPlatformVersionsCommandOutput}
 * @see {@link ListPlatformVersionsCommandInput} for command's `input` shape.
 * @see {@link ListPlatformVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException} (client fault)
 *  <p>A generic service exception has occurred.</p>
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @public
 */
export class ListPlatformVersionsCommand extends $Command
  .classBuilder<
    ListPlatformVersionsCommandInput,
    ListPlatformVersionsCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSElasticBeanstalkService", "ListPlatformVersions", {})
  .n("ElasticBeanstalkClient", "ListPlatformVersionsCommand")
  .sc(ListPlatformVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPlatformVersionsRequest;
      output: ListPlatformVersionsResult;
    };
    sdk: {
      input: ListPlatformVersionsCommandInput;
      output: ListPlatformVersionsCommandOutput;
    };
  };
}

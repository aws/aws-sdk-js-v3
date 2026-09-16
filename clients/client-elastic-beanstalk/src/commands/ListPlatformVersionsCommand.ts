// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPlatformVersionsRequest, ListPlatformVersionsResult } from "../models/models_0";
import { ListPlatformVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Lists the platform versions available for your account in an Amazon Web Services Region. Provides summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform version.</p>
 *          <p>This action only returns information about platform versions that the calling principle has IAM permissions to access. For example, consider a case
 *       where a user only has permission to access one of ten platform versions. When the user calls the <i>ListPlatformVersions</i> action, the
 *       response will only include the one platform version that the user has permission to access instead of all ten platform versions. If the user doesn’t have
 *       access to any of the platform versions an empty result is returned.</p>
 *          <note>
 *             <p>The <i>AWSElasticBeanstalkReadOnly</i> managed policy allows operators to view information about resources related to Elastic Beanstalk
 *         environments. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html"> Managing Elastic Beanstalk
 *           user policies</a> in the <i>Elastic Beanstalk Developer Guide</i>. For detailed instructions to attach a policy to a user or group, see the
 *         section <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#iam-userpolicies-managed"> Controlling access
 *           with managed policies</a> in the same topic.</p>
 *          </note>
 *          <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">Elastic Beanstalk Platforms Glossary</a>.</p>
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
 *  <p>The specified account does not have sufficient privileges for one or more Amazon Web Services services.</p>
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @public
 */
export class ListPlatformVersionsCommand extends command<ListPlatformVersionsCommandInput, ListPlatformVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListPlatformVersions",
  ListPlatformVersions$
) {
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

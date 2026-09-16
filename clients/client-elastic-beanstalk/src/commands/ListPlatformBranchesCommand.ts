// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPlatformBranchesRequest, ListPlatformBranchesResult } from "../models/models_0";
import { ListPlatformBranches$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Lists the platform branches available for your account in an Amazon Web Services Region. Provides summary information about each platform branch.</p>
 *          <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">Elastic Beanstalk Platforms Glossary</a>.</p>
 *          <p>This action only returns information about resources that the calling principle has IAM permissions to access. For example, consider a case where a
 *       user only has permission to access one of three resources. When the user calls the this action, the response will only include the one resource that the
 *       user has permission to access instead of all three resources. If the user doesn’t have access to any of the resources an empty result is returned.</p>
 *          <note>
 *             <p>The <a href="https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AWSElasticBeanstalkReadOnly.html">AWSElasticBeanstalkReadOnly</a>
 *         managed policy allows operators to view information about resources related to Elastic Beanstalk. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html"> Managing Elastic Beanstalk user policies</a> in the <i>Elastic Beanstalk Developer
 *           Guide</i>. For detailed instructions to attach a policy to a user or group, see the section <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#iam-userpolicies-managed"> Controlling access with managed policies</a> in the
 *         same topic.</p>
 *          </note>
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
export class ListPlatformBranchesCommand extends command<ListPlatformBranchesCommandInput, ListPlatformBranchesCommandOutput>(
  _ep0,
  _mw0,
  "ListPlatformBranches",
  ListPlatformBranches$
) {
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

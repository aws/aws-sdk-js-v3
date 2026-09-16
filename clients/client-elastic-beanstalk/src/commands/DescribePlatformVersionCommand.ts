// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePlatformVersionRequest, DescribePlatformVersionResult } from "../models/models_0";
import { DescribePlatformVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePlatformVersionCommand}.
 */
export interface DescribePlatformVersionCommandInput extends DescribePlatformVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribePlatformVersionCommand}.
 */
export interface DescribePlatformVersionCommandOutput extends DescribePlatformVersionResult, __MetadataBearer {}

/**
 * <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a
 *       list of platform versions.</p>
 *          <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">Elastic Beanstalk Platforms Glossary</a>.</p>
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
 * import { ElasticBeanstalkClient, DescribePlatformVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribePlatformVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribePlatformVersionRequest
 *   PlatformArn: "STRING_VALUE",
 * };
 * const command = new DescribePlatformVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribePlatformVersionResult
 * //   PlatformDescription: { // PlatformDescription
 * //     PlatformArn: "STRING_VALUE",
 * //     PlatformOwner: "STRING_VALUE",
 * //     PlatformName: "STRING_VALUE",
 * //     PlatformVersion: "STRING_VALUE",
 * //     SolutionStackName: "STRING_VALUE",
 * //     PlatformStatus: "Creating" || "Failed" || "Ready" || "Deleting" || "Deleted",
 * //     DateCreated: new Date("TIMESTAMP"),
 * //     DateUpdated: new Date("TIMESTAMP"),
 * //     PlatformCategory: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Maintainer: "STRING_VALUE",
 * //     OperatingSystemName: "STRING_VALUE",
 * //     OperatingSystemVersion: "STRING_VALUE",
 * //     ProgrammingLanguages: [ // PlatformProgrammingLanguages
 * //       { // PlatformProgrammingLanguage
 * //         Name: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Frameworks: [ // PlatformFrameworks
 * //       { // PlatformFramework
 * //         Name: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CustomAmiList: [ // CustomAmiList
 * //       { // CustomAmi
 * //         VirtualizationType: "STRING_VALUE",
 * //         ImageId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SupportedTierList: [ // SupportedTierList
 * //       "STRING_VALUE",
 * //     ],
 * //     SupportedAddonList: [ // SupportedAddonList
 * //       "STRING_VALUE",
 * //     ],
 * //     PlatformLifecycleState: "STRING_VALUE",
 * //     PlatformBranchName: "STRING_VALUE",
 * //     PlatformBranchLifecycleState: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePlatformVersionCommandInput - {@link DescribePlatformVersionCommandInput}
 * @returns {@link DescribePlatformVersionCommandOutput}
 * @see {@link DescribePlatformVersionCommandInput} for command's `input` shape.
 * @see {@link DescribePlatformVersionCommandOutput} for command's `response` shape.
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
export class DescribePlatformVersionCommand extends command<DescribePlatformVersionCommandInput, DescribePlatformVersionCommandOutput>(
  _ep0,
  _mw0,
  "DescribePlatformVersion",
  DescribePlatformVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePlatformVersionRequest;
      output: DescribePlatformVersionResult;
    };
    sdk: {
      input: DescribePlatformVersionCommandInput;
      output: DescribePlatformVersionCommandOutput;
    };
  };
}

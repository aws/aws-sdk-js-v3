// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAccountAttributesResult } from "../models/models_0";
import { DescribeAccountAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAccountAttributesCommand}.
 */
export interface DescribeAccountAttributesCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeAccountAttributesCommand}.
 */
export interface DescribeAccountAttributesCommandOutput extends DescribeAccountAttributesResult, __MetadataBearer {}

/**
 * <p>Returns attributes related to Elastic Beanstalk that are associated with the calling Amazon Web Services account.</p>
 *          <p>The result currently has one set of attributes—resource quotas.</p>
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
 * import { ElasticBeanstalkClient, DescribeAccountAttributesCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeAccountAttributesCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = {};
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountAttributesResult
 * //   ResourceQuotas: { // ResourceQuotas
 * //     ApplicationQuota: { // ResourceQuota
 * //       Maximum: Number("int"),
 * //     },
 * //     ApplicationVersionQuota: {
 * //       Maximum: Number("int"),
 * //     },
 * //     EnvironmentQuota: {
 * //       Maximum: Number("int"),
 * //     },
 * //     ConfigurationTemplateQuota: {
 * //       Maximum: Number("int"),
 * //     },
 * //     CustomPlatformQuota: {
 * //       Maximum: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAccountAttributesCommandInput - {@link DescribeAccountAttributesCommandInput}
 * @returns {@link DescribeAccountAttributesCommandOutput}
 * @see {@link DescribeAccountAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
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
export class DescribeAccountAttributesCommand extends command<DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAccountAttributes",
  DescribeAccountAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeAccountAttributesResult;
    };
    sdk: {
      input: DescribeAccountAttributesCommandInput;
      output: DescribeAccountAttributesCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeEnvironmentManagedActionsRequest,
  DescribeEnvironmentManagedActionsResult,
} from "../models/models_0";
import { DescribeEnvironmentManagedActions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeEnvironmentManagedActionsCommand}.
 */
export interface DescribeEnvironmentManagedActionsCommandInput extends DescribeEnvironmentManagedActionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEnvironmentManagedActionsCommand}.
 */
export interface DescribeEnvironmentManagedActionsCommandOutput extends DescribeEnvironmentManagedActionsResult, __MetadataBearer {}

/**
 * <p>Lists an environment's upcoming and in-progress managed actions.</p>
 *          <p>This action only returns information about environments that the calling principle has IAM permissions to access. For example, consider a case where
 *       a user only has permission to access one of three environments. When the user calls this action, the response will only include the one environment that
 *       the user has permission to access instead of all three environments. If the user doesn’t have access to any of the environments an empty result is
 *       returned.</p>
 *          <note>
 *             <p>The <a href="https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AWSElasticBeanstalkReadOnly.html">AWSElasticBeanstalkReadOnly</a>
 *         managed policy allows operators to view information about resources related to Elastic Beanstalk environments. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html"> Managing Elastic Beanstalk user policies</a> in the <i>Elastic Beanstalk Developer
 *           Guide</i>. For detailed instructions to attach a policy to a user or group, see the section <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#iam-userpolicies-managed"> Controlling access with managed policies</a> in the
 *         same topic.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeEnvironmentManagedActionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeEnvironmentManagedActionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeEnvironmentManagedActionsRequest
 *   EnvironmentName: "STRING_VALUE",
 *   EnvironmentId: "STRING_VALUE",
 *   Status: "Scheduled" || "Pending" || "Running" || "Unknown",
 * };
 * const command = new DescribeEnvironmentManagedActionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEnvironmentManagedActionsResult
 * //   ManagedActions: [ // ManagedActions
 * //     { // ManagedAction
 * //       ActionId: "STRING_VALUE",
 * //       ActionDescription: "STRING_VALUE",
 * //       ActionType: "InstanceRefresh" || "PlatformUpdate" || "Unknown",
 * //       Status: "Scheduled" || "Pending" || "Running" || "Unknown",
 * //       WindowStartTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEnvironmentManagedActionsCommandInput - {@link DescribeEnvironmentManagedActionsCommandInput}
 * @returns {@link DescribeEnvironmentManagedActionsCommandOutput}
 * @see {@link DescribeEnvironmentManagedActionsCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentManagedActionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException} (client fault)
 *  <p>A generic service exception has occurred.</p>
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @public
 */
export class DescribeEnvironmentManagedActionsCommand extends command<DescribeEnvironmentManagedActionsCommandInput, DescribeEnvironmentManagedActionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeEnvironmentManagedActions",
  DescribeEnvironmentManagedActions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEnvironmentManagedActionsRequest;
      output: DescribeEnvironmentManagedActionsResult;
    };
    sdk: {
      input: DescribeEnvironmentManagedActionsCommandInput;
      output: DescribeEnvironmentManagedActionsCommandOutput;
    };
  };
}

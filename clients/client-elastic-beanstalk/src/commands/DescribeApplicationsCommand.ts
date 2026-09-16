// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ApplicationDescriptionsMessage, DescribeApplicationsMessage } from "../models/models_0";
import { DescribeApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeApplicationsCommand}.
 */
export interface DescribeApplicationsCommandInput extends DescribeApplicationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationsCommand}.
 */
export interface DescribeApplicationsCommandOutput extends ApplicationDescriptionsMessage, __MetadataBearer {}

/**
 * <p>Returns the descriptions of existing applications.</p>
 *          <p>This action only returns information about applications that the calling principle has IAM permissions to
 *       access. For example, consider a case where a user only has permission to access two of three
 *       applications. When the user calls the <i>DescribeApplications</i> action, the
 *       response will only include the two applications that the user has permission to access
 *       instead of all three applications. If the user doesn’t have access to any of the applications
 *       an empty result is returned.</p>
 *          <note>
 *             <p>The <i>AWSElasticBeanstalkReadOnly</i> managed policy allows operators to
 *         view information about resources related to Elastic Beanstalk environments. For more
 *         information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html"> Managing Elastic Beanstalk user
 *           policies</a> in the <i>Elastic Beanstalk Developer Guide</i>. For detailed
 *         instructions to attach a policy to a user or group, see the section <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#iam-userpolicies-managed"> Controlling access with managed policies</a> in the same topic.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeApplicationsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeApplicationsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeApplicationsMessage
 *   ApplicationNames: [ // ApplicationNamesList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ApplicationDescriptionsMessage
 * //   Applications: [ // ApplicationDescriptionList
 * //     { // ApplicationDescription
 * //       ApplicationArn: "STRING_VALUE",
 * //       ApplicationName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DateCreated: new Date("TIMESTAMP"),
 * //       DateUpdated: new Date("TIMESTAMP"),
 * //       Versions: [ // VersionLabelsList
 * //         "STRING_VALUE",
 * //       ],
 * //       ConfigurationTemplates: [ // ConfigurationTemplateNamesList
 * //         "STRING_VALUE",
 * //       ],
 * //       ResourceLifecycleConfig: { // ApplicationResourceLifecycleConfig
 * //         ServiceRole: "STRING_VALUE",
 * //         VersionLifecycleConfig: { // ApplicationVersionLifecycleConfig
 * //           MaxCountRule: { // MaxCountRule
 * //             Enabled: true || false, // required
 * //             MaxCount: Number("int"),
 * //             DeleteSourceFromS3: true || false,
 * //           },
 * //           MaxAgeRule: { // MaxAgeRule
 * //             Enabled: true || false, // required
 * //             MaxAgeInDays: Number("int"),
 * //             DeleteSourceFromS3: true || false,
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeApplicationsCommandInput - {@link DescribeApplicationsCommandInput}
 * @returns {@link DescribeApplicationsCommandOutput}
 * @see {@link DescribeApplicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To view a list of applications
 * ```javascript
 * // The following operation retrieves information about applications in the current region:
 * const input = { /* empty *\/ };
 * const command = new DescribeApplicationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Applications: [
 *     {
 *       ApplicationName: "ruby",
 *       ConfigurationTemplates:       [],
 *       DateCreated: "2015-08-13T21:05:44.376Z",
 *       DateUpdated: "2015-08-13T21:05:44.376Z",
 *       Versions: [
 *         "Sample Application"
 *       ]
 *     },
 *     {
 *       ApplicationName: "pythonsample",
 *       ConfigurationTemplates:       [],
 *       DateCreated: "2015-08-13T19:05:43.637Z",
 *       DateUpdated: "2015-08-13T19:05:43.637Z",
 *       Description: `Application created from the EB CLI using "eb init"`,
 *       Versions: [
 *         "Sample Application"
 *       ]
 *     },
 *     {
 *       ApplicationName: "nodejs-example",
 *       ConfigurationTemplates:       [],
 *       DateCreated: "2015-08-06T17:50:02.486Z",
 *       DateUpdated: "2015-08-06T17:50:02.486Z",
 *       Versions: [
 *         "add elasticache",
 *         "First Release"
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeApplicationsCommand extends command<DescribeApplicationsCommandInput, DescribeApplicationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeApplications",
  DescribeApplications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationsMessage;
      output: ApplicationDescriptionsMessage;
    };
    sdk: {
      input: DescribeApplicationsCommandInput;
      output: DescribeApplicationsCommandOutput;
    };
  };
}

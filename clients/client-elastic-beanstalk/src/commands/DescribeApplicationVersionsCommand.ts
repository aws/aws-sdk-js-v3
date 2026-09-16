// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ApplicationVersionDescriptionsMessage, DescribeApplicationVersionsMessage } from "../models/models_0";
import { DescribeApplicationVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeApplicationVersionsCommand}.
 */
export interface DescribeApplicationVersionsCommandInput extends DescribeApplicationVersionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationVersionsCommand}.
 */
export interface DescribeApplicationVersionsCommandOutput extends ApplicationVersionDescriptionsMessage, __MetadataBearer {}

/**
 * <p>Retrieve a list of application versions.</p>
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
 * import { ElasticBeanstalkClient, DescribeApplicationVersionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeApplicationVersionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeApplicationVersionsMessage
 *   ApplicationName: "STRING_VALUE",
 *   VersionLabels: [ // VersionLabelsList
 *     "STRING_VALUE",
 *   ],
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeApplicationVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ApplicationVersionDescriptionsMessage
 * //   ApplicationVersions: [ // ApplicationVersionDescriptionList
 * //     { // ApplicationVersionDescription
 * //       ApplicationVersionArn: "STRING_VALUE",
 * //       ApplicationName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       VersionLabel: "STRING_VALUE",
 * //       SourceBuildInformation: { // SourceBuildInformation
 * //         SourceType: "Git" || "Zip", // required
 * //         SourceRepository: "CodeCommit" || "S3", // required
 * //         SourceLocation: "STRING_VALUE", // required
 * //       },
 * //       BuildArn: "STRING_VALUE",
 * //       SourceBundle: { // S3Location
 * //         S3Bucket: "STRING_VALUE",
 * //         S3Key: "STRING_VALUE",
 * //       },
 * //       ImageSource: { // ImageSource
 * //         Uri: "STRING_VALUE",
 * //       },
 * //       ImageBuildConfiguration: { // ImageBuildConfiguration
 * //         Type: "docker" || "buildpack",
 * //         DockerfileLocation: "STRING_VALUE",
 * //         Buildpack: "STRING_VALUE",
 * //         Architecture: "amd64" || "arm64",
 * //         CodeBuildServiceRole: "STRING_VALUE",
 * //         ComputeType: "BUILD_GENERAL1_SMALL" || "BUILD_GENERAL1_MEDIUM" || "BUILD_GENERAL1_LARGE",
 * //         TimeoutInMinutes: Number("int"),
 * //       },
 * //       Process: true || false,
 * //       DateCreated: new Date("TIMESTAMP"),
 * //       DateUpdated: new Date("TIMESTAMP"),
 * //       Status: "Processed" || "Unprocessed" || "Failed" || "Processing" || "Building",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeApplicationVersionsCommandInput - {@link DescribeApplicationVersionsCommandInput}
 * @returns {@link DescribeApplicationVersionsCommandOutput}
 * @see {@link DescribeApplicationVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To view information about an application version
 * ```javascript
 * // The following operation retrieves information about an application version labeled v2:
 * const input = {
 *   ApplicationName: "my-app",
 *   VersionLabels: [
 *     "v2"
 *   ]
 * };
 * const command = new DescribeApplicationVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationVersions: [
 *     {
 *       ApplicationName: "my-app",
 *       DateCreated: "2015-07-23T01:32:26.079Z",
 *       DateUpdated: "2015-07-23T01:32:26.079Z",
 *       Description: "update cover page",
 *       SourceBundle: {
 *         S3Bucket: "elasticbeanstalk-us-west-2-015321684451",
 *         S3Key: "my-app/5026-stage-150723_224258.war"
 *       },
 *       VersionLabel: "v2"
 *     },
 *     {
 *       ApplicationName: "my-app",
 *       DateCreated: "2015-07-23T22:26:10.816Z",
 *       DateUpdated: "2015-07-23T22:26:10.816Z",
 *       Description: "initial version",
 *       SourceBundle: {
 *         S3Bucket: "elasticbeanstalk-us-west-2-015321684451",
 *         S3Key: "my-app/5026-stage-150723_222618.war"
 *       },
 *       VersionLabel: "v1"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeApplicationVersionsCommand extends command<DescribeApplicationVersionsCommandInput, DescribeApplicationVersionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeApplicationVersions",
  DescribeApplicationVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationVersionsMessage;
      output: ApplicationVersionDescriptionsMessage;
    };
    sdk: {
      input: DescribeApplicationVersionsCommandInput;
      output: DescribeApplicationVersionsCommandOutput;
    };
  };
}

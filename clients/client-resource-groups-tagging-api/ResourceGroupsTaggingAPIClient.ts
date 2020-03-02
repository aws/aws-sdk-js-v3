import {
  DescribeReportCreationCommandInput,
  DescribeReportCreationCommandOutput
} from "./commands/DescribeReportCreationCommand";
import {
  GetComplianceSummaryCommandInput,
  GetComplianceSummaryCommandOutput
} from "./commands/GetComplianceSummaryCommand";
import {
  GetResourcesCommandInput,
  GetResourcesCommandOutput
} from "./commands/GetResourcesCommand";
import {
  GetTagKeysCommandInput,
  GetTagKeysCommandOutput
} from "./commands/GetTagKeysCommand";
import {
  GetTagValuesCommandInput,
  GetTagValuesCommandOutput
} from "./commands/GetTagValuesCommand";
import {
  StartReportCreationCommandInput,
  StartReportCreationCommandOutput
} from "./commands/StartReportCreationCommand";
import {
  TagResourcesCommandInput,
  TagResourcesCommandOutput
} from "./commands/TagResourcesCommand";
import {
  UntagResourcesCommandInput,
  UntagResourcesCommandOutput
} from "./commands/UntagResourcesCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | DescribeReportCreationCommandInput
  | GetComplianceSummaryCommandInput
  | GetResourcesCommandInput
  | GetTagKeysCommandInput
  | GetTagValuesCommandInput
  | StartReportCreationCommandInput
  | TagResourcesCommandInput
  | UntagResourcesCommandInput;

export type ServiceOutputTypes =
  | DescribeReportCreationCommandOutput
  | GetComplianceSummaryCommandOutput
  | GetResourcesCommandOutput
  | GetTagKeysCommandOutput
  | GetTagValuesCommandOutput
  | StartReportCreationCommandOutput
  | TagResourcesCommandOutput
  | UntagResourcesCommandOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type ResourceGroupsTaggingAPIClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ResourceGroupsTaggingAPIClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>Resource Groups Tagging API</fullname>
 *         <p>This guide describes the API operations for the resource groups tagging.</p>
 *         <p>A tag is a label that you assign to an AWS resource. A tag consists of a key and a
 *             value, both of which you define. For example, if you have two Amazon EC2 instances, you might
 *             assign both a tag key of "Stack." But the value of "Stack" might be "Testing" for one
 *             and "Production" for the other.</p>
 *         <p>Tagging can help you organize your resources and enables you to simplify resource
 *             management, access management and cost allocation. </p>
 *         <p>You can use the resource groups tagging API operations to complete the following
 *             tasks:</p>
 *         <ul>
 *             <li>
 *                 <p>Tag and untag supported resources located in the specified Region for the
 *                     AWS account.</p>
 *             </li>
 *             <li>
 *                 <p>Use tag-based filters to search for resources located in the specified Region
 *                     for the AWS account.</p>
 *             </li>
 *             <li>
 *                 <p>List all existing tag keys in the specified Region for the AWS
 *                     account.</p>
 *             </li>
 *             <li>
 *                 <p>List all existing values for the specified key in the specified Region for the
 *                     AWS account.</p>
 *             </li>
 *          </ul>
 *         <p>To use resource groups tagging API operations, you must add the following permissions
 *             to your IAM policy:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>tag:GetResources</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>tag:TagResources</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>tag:UntagResources</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>tag:GetTagKeys</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>tag:GetTagValues</code>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>You'll also need permissions to access the resources of individual services so that
 *             you can tag and untag those resources.</p>
 *         <p>For more information on IAM policies, see <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage.html">Managing IAM
 *                 Policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>You can use the Resource Groups Tagging API to tag resources for the following AWS
 *             services.</p>
 *         <ul>
 *             <li>
 *                 <p>Alexa for Business (a4b)</p>
 *             </li>
 *             <li>
 *                 <p>API Gateway</p>
 *             </li>
 *             <li>
 *                 <p>Amazon AppStream</p>
 *             </li>
 *             <li>
 *                 <p>AWS AppSync</p>
 *             </li>
 *             <li>
 *                 <p>AWS App Mesh</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Athena</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Aurora</p>
 *             </li>
 *             <li>
 *                 <p>AWS Backup</p>
 *             </li>
 *             <li>
 *                 <p>AWS Certificate Manager</p>
 *             </li>
 *             <li>
 *                 <p>AWS Certificate Manager Private CA</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Cloud Directory</p>
 *             </li>
 *             <li>
 *                 <p>AWS CloudFormation</p>
 *             </li>
 *             <li>
 *                 <p>Amazon CloudFront</p>
 *             </li>
 *             <li>
 *                 <p>AWS CloudHSM</p>
 *             </li>
 *             <li>
 *                 <p>AWS CloudTrail</p>
 *             </li>
 *             <li>
 *                 <p>Amazon CloudWatch (alarms only)</p>
 *             </li>
 *             <li>
 *                 <p>Amazon CloudWatch Events</p>
 *             </li>
 *             <li>
 *                 <p>Amazon CloudWatch Logs</p>
 *             </li>
 *             <li>
 *                 <p>AWS CodeBuild</p>
 *             </li>
 *             <li>
 *                 <p>AWS CodeCommit</p>
 *             </li>
 *             <li>
 *                 <p>AWS CodePipeline</p>
 *             </li>
 *             <li>
 *                 <p>AWS CodeStar</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Cognito Identity</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Cognito User Pools</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Comprehend</p>
 *             </li>
 *             <li>
 *                 <p>AWS Config</p>
 *             </li>
 *             <li>
 *                 <p>AWS Data Pipeline</p>
 *             </li>
 *             <li>
 *                 <p>AWS Database Migration Service</p>
 *             </li>
 *             <li>
 *                 <p>AWS DataSync</p>
 *             </li>
 *             <li>
 *                 <p>AWS Direct Connect</p>
 *             </li>
 *             <li>
 *                 <p>AWS Directory Service</p>
 *             </li>
 *             <li>
 *                 <p>Amazon DynamoDB</p>
 *             </li>
 *             <li>
 *                 <p>Amazon EBS</p>
 *             </li>
 *             <li>
 *                 <p>Amazon EC2</p>
 *             </li>
 *             <li>
 *                 <p>Amazon ECR</p>
 *             </li>
 *             <li>
 *                 <p>Amazon ECS</p>
 *             </li>
 *             <li>
 *                 <p>AWS Elastic Beanstalk</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Elastic File System</p>
 *             </li>
 *             <li>
 *                 <p>Elastic Load Balancing</p>
 *             </li>
 *             <li>
 *                 <p>Amazon ElastiCache</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Elasticsearch Service</p>
 *             </li>
 *             <li>
 *                 <p>AWS Elemental MediaLive</p>
 *             </li>
 *             <li>
 *                 <p>AWS Elemental MediaPackage</p>
 *             </li>
 *             <li>
 *                 <p>AWS Elemental MediaTailor</p>
 *             </li>
 *             <li>
 *                 <p>Amazon EMR</p>
 *             </li>
 *             <li>
 *                 <p>Amazon FSx</p>
 *             </li>
 *             <li>
 *                 <p>Amazon S3 Glacier</p>
 *             </li>
 *             <li>
 *                 <p>AWS Glue</p>
 *             </li>
 *             <li>
 *                 <p>Amazon GuardDuty</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Inspector</p>
 *             </li>
 *             <li>
 *                 <p>AWS IoT Analytics</p>
 *             </li>
 *             <li>
 *                 <p>AWS IoT Core</p>
 *             </li>
 *             <li>
 *                 <p>AWS IoT Device Defender</p>
 *             </li>
 *             <li>
 *                 <p>AWS IoT Device Management</p>
 *             </li>
 *             <li>
 *                 <p>AWS IoT Events</p>
 *             </li>
 *             <li>
 *                 <p>AWS IoT Greengrass</p>
 *             </li>
 *             <li>
 *                 <p>AWS Key Management Service</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Kinesis</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Kinesis Data Analytics</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Kinesis Data Firehose</p>
 *             </li>
 *             <li>
 *                 <p>AWS Lambda</p>
 *             </li>
 *             <li>
 *                 <p>AWS License Manager</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Machine Learning</p>
 *             </li>
 *             <li>
 *                 <p>Amazon MQ</p>
 *             </li>
 *             <li>
 *                 <p>Amazon MSK</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Neptune</p>
 *             </li>
 *             <li>
 *                 <p>AWS OpsWorks</p>
 *             </li>
 *             <li>
 *                 <p>AWS Organizations</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Quantum Ledger Database (QLDB)</p>
 *             </li>
 *             <li>
 *                 <p>Amazon RDS</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Redshift</p>
 *             </li>
 *             <li>
 *                 <p>AWS Resource Access Manager</p>
 *             </li>
 *             <li>
 *                 <p>AWS Resource Groups</p>
 *             </li>
 *             <li>
 *                 <p>AWS RoboMaker</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Route 53</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Route 53 Resolver</p>
 *             </li>
 *             <li>
 *                 <p>Amazon S3 (buckets only)</p>
 *             </li>
 *             <li>
 *                 <p>Amazon SageMaker</p>
 *             </li>
 *             <li>
 *                 <p>AWS Secrets Manager</p>
 *             </li>
 *             <li>
 *                 <p>AWS Security Hub</p>
 *             </li>
 *             <li>
 *                 <p>AWS Service Catalog</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Simple Notification Service (SNS)</p>
 *             </li>
 *             <li>
 *                 <p>Amazon Simple Queue Service (SQS)</p>
 *             </li>
 *             <li>
 *                 <p>AWS Step Functions</p>
 *             </li>
 *             <li>
 *                 <p>AWS Storage Gateway</p>
 *             </li>
 *             <li>
 *                 <p>AWS Systems Manager</p>
 *             </li>
 *             <li>
 *                 <p>AWS Transfer for SFTP</p>
 *             </li>
 *             <li>
 *                 <p>Amazon VPC</p>
 *             </li>
 *             <li>
 *                 <p>Amazon WorkSpaces</p>
 *             </li>
 *          </ul>
 */
export class ResourceGroupsTaggingAPIClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ResourceGroupsTaggingAPIClientResolvedConfig
> {
  readonly config: ResourceGroupsTaggingAPIClientResolvedConfig;

  constructor(configuration: ResourceGroupsTaggingAPIClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}

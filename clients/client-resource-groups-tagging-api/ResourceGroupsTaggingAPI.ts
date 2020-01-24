import { ResourceGroupsTaggingAPIClient } from "./ResourceGroupsTaggingAPIClient";
import {
  DescribeReportCreationCommand,
  DescribeReportCreationCommandInput,
  DescribeReportCreationCommandOutput
} from "./commands/DescribeReportCreationCommand";
import {
  GetComplianceSummaryCommand,
  GetComplianceSummaryCommandInput,
  GetComplianceSummaryCommandOutput
} from "./commands/GetComplianceSummaryCommand";
import {
  GetResourcesCommand,
  GetResourcesCommandInput,
  GetResourcesCommandOutput
} from "./commands/GetResourcesCommand";
import {
  GetTagKeysCommand,
  GetTagKeysCommandInput,
  GetTagKeysCommandOutput
} from "./commands/GetTagKeysCommand";
import {
  GetTagValuesCommand,
  GetTagValuesCommandInput,
  GetTagValuesCommandOutput
} from "./commands/GetTagValuesCommand";
import {
  StartReportCreationCommand,
  StartReportCreationCommandInput,
  StartReportCreationCommandOutput
} from "./commands/StartReportCreationCommand";
import {
  TagResourcesCommand,
  TagResourcesCommandInput,
  TagResourcesCommandOutput
} from "./commands/TagResourcesCommand";
import {
  UntagResourcesCommand,
  UntagResourcesCommandInput,
  UntagResourcesCommandOutput
} from "./commands/UntagResourcesCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
export class ResourceGroupsTaggingAPI extends ResourceGroupsTaggingAPIClient {
  /**
   * <p>Describes the status of the <code>StartReportCreation</code> operation. </p>
   *         <p>You can call this operation only from the organization's master account and from the us-east-1 Region.</p>
   */
  public describeReportCreation(
    args: DescribeReportCreationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReportCreationCommandOutput>;
  public describeReportCreation(
    args: DescribeReportCreationCommandInput,
    cb: (err: any, data?: DescribeReportCreationCommandOutput) => void
  ): void;
  public describeReportCreation(
    args: DescribeReportCreationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReportCreationCommandOutput) => void
  ): void;
  public describeReportCreation(
    args: DescribeReportCreationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeReportCreationCommandOutput) => void),
    cb?: (err: any, data?: DescribeReportCreationCommandOutput) => void
  ): Promise<DescribeReportCreationCommandOutput> | void {
    const command = new DescribeReportCreationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a table that shows counts of resources that are noncompliant with their tag
   *             policies.</p>
   *         <p>For more information on tag policies, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in
   *             the <i>AWS Organizations User Guide.</i>
   *          </p>
   *         <p>You can call this operation only from the organization's master account and from the us-east-1 Region.</p>
   */
  public getComplianceSummary(
    args: GetComplianceSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComplianceSummaryCommandOutput>;
  public getComplianceSummary(
    args: GetComplianceSummaryCommandInput,
    cb: (err: any, data?: GetComplianceSummaryCommandOutput) => void
  ): void;
  public getComplianceSummary(
    args: GetComplianceSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComplianceSummaryCommandOutput) => void
  ): void;
  public getComplianceSummary(
    args: GetComplianceSummaryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetComplianceSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetComplianceSummaryCommandOutput) => void
  ): Promise<GetComplianceSummaryCommandOutput> | void {
    const command = new GetComplianceSummaryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns all the tagged or previously tagged resources that are located in the
   *             specified Region for the AWS account.</p>
   *         <p>Depending on what information you want returned, you can also specify the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <i>Filters</i> that specify what tags and resource types you
   *                     want returned. The response includes all tags that are associated with the
   *                     requested resources.</p>
   *             </li>
   *             <li>
   *                 <p>Information about compliance with the account's effective tag policy. For more
   *                     information on tag policies, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag
   *                         Policies</a> in the <i>AWS Organizations User Guide.</i>
   *                </p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>You can check the <code>PaginationToken</code> response parameter to determine if
   *                 a query is complete. Queries occasionally return fewer results on a page than
   *                 allowed. The <code>PaginationToken</code> response parameter value is
   *                     <code>null</code>
   *                 <i>only</i> when there are no more results to display. </p>
   *         </note>
   */
  public getResources(
    args: GetResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcesCommandOutput>;
  public getResources(
    args: GetResourcesCommandInput,
    cb: (err: any, data?: GetResourcesCommandOutput) => void
  ): void;
  public getResources(
    args: GetResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcesCommandOutput) => void
  ): void;
  public getResources(
    args: GetResourcesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetResourcesCommandOutput) => void),
    cb?: (err: any, data?: GetResourcesCommandOutput) => void
  ): Promise<GetResourcesCommandOutput> | void {
    const command = new GetResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns all tag keys in the specified Region for the AWS account.</p>
   */
  public getTagKeys(
    args: GetTagKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTagKeysCommandOutput>;
  public getTagKeys(
    args: GetTagKeysCommandInput,
    cb: (err: any, data?: GetTagKeysCommandOutput) => void
  ): void;
  public getTagKeys(
    args: GetTagKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagKeysCommandOutput) => void
  ): void;
  public getTagKeys(
    args: GetTagKeysCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetTagKeysCommandOutput) => void),
    cb?: (err: any, data?: GetTagKeysCommandOutput) => void
  ): Promise<GetTagKeysCommandOutput> | void {
    const command = new GetTagKeysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns all tag values for the specified key in the specified Region for the AWS
   *             account.</p>
   */
  public getTagValues(
    args: GetTagValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTagValuesCommandOutput>;
  public getTagValues(
    args: GetTagValuesCommandInput,
    cb: (err: any, data?: GetTagValuesCommandOutput) => void
  ): void;
  public getTagValues(
    args: GetTagValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagValuesCommandOutput) => void
  ): void;
  public getTagValues(
    args: GetTagValuesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetTagValuesCommandOutput) => void),
    cb?: (err: any, data?: GetTagValuesCommandOutput) => void
  ): Promise<GetTagValuesCommandOutput> | void {
    const command = new GetTagValuesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Generates a report that lists all tagged resources in accounts across your
   *             organization and tells whether each resource is compliant with the effective tag policy.
   *             Compliance data is refreshed daily. </p>
   *         <p>The generated report is saved to the following location:</p>
   *         <p>
   *             <code>s3://example-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code>
   *          </p>
   *         <p>You can call this operation only from the organization's master account and from the us-east-1 Region.</p>
   */
  public startReportCreation(
    args: StartReportCreationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReportCreationCommandOutput>;
  public startReportCreation(
    args: StartReportCreationCommandInput,
    cb: (err: any, data?: StartReportCreationCommandOutput) => void
  ): void;
  public startReportCreation(
    args: StartReportCreationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReportCreationCommandOutput) => void
  ): void;
  public startReportCreation(
    args: StartReportCreationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartReportCreationCommandOutput) => void),
    cb?: (err: any, data?: StartReportCreationCommandOutput) => void
  ): Promise<StartReportCreationCommandOutput> | void {
    const command = new StartReportCreationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Applies one or more tags to the specified resources. Note the following:</p>
   *         <ul>
   *             <li>
   *                 <p>Not all resources can have tags. For a list of services that support tagging,
   *                     see <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/Welcome.html">this list</a>.</p>
   *             </li>
   *             <li>
   *                 <p>Each resource can have up to 50 tags. For other limits, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage
   *                         Conventions</a>
   *                     in the <i>AWS General Reference.</i>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>You can only tag resources that are located in the specified Region for the
   *                     AWS account.</p>
   *             </li>
   *             <li>
   *                 <p>To add tags to a resource, you need the necessary permissions for the service
   *                     that the resource belongs to as well as permissions for adding tags. For more
   *                     information, see <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/Welcome.html">this list</a>.</p>
   *             </li>
   *          </ul>
   */
  public tagResources(
    args: TagResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourcesCommandOutput>;
  public tagResources(
    args: TagResourcesCommandInput,
    cb: (err: any, data?: TagResourcesCommandOutput) => void
  ): void;
  public tagResources(
    args: TagResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourcesCommandOutput) => void
  ): void;
  public tagResources(
    args: TagResourcesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TagResourcesCommandOutput) => void),
    cb?: (err: any, data?: TagResourcesCommandOutput) => void
  ): Promise<TagResourcesCommandOutput> | void {
    const command = new TagResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the specified tags from the specified resources. When you specify a tag key,
   *             the action removes both that key and its associated value. The operation succeeds even
   *             if you attempt to remove tags from a resource that were already removed. Note the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>To remove tags from a resource, you need the necessary permissions for the
   *                     service that the resource belongs to as well as permissions for removing tags.
   *                     For more information, see <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/Welcome.html">this list</a>.</p>
   *             </li>
   *             <li>
   *                 <p>You can only tag resources that are located in the specified Region for the
   *                     AWS account.</p>
   *             </li>
   *          </ul>
   */
  public untagResources(
    args: UntagResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourcesCommandOutput>;
  public untagResources(
    args: UntagResourcesCommandInput,
    cb: (err: any, data?: UntagResourcesCommandOutput) => void
  ): void;
  public untagResources(
    args: UntagResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourcesCommandOutput) => void
  ): void;
  public untagResources(
    args: UntagResourcesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UntagResourcesCommandOutput) => void),
    cb?: (err: any, data?: UntagResourcesCommandOutput) => void
  ): Promise<UntagResourcesCommandOutput> | void {
    const command = new UntagResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}

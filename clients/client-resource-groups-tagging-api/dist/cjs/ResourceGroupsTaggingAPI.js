"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ResourceGroupsTaggingAPIClient_1 = require("./ResourceGroupsTaggingAPIClient");
const DescribeReportCreationCommand_1 = require("./commands/DescribeReportCreationCommand");
const GetComplianceSummaryCommand_1 = require("./commands/GetComplianceSummaryCommand");
const GetResourcesCommand_1 = require("./commands/GetResourcesCommand");
const GetTagKeysCommand_1 = require("./commands/GetTagKeysCommand");
const GetTagValuesCommand_1 = require("./commands/GetTagValuesCommand");
const StartReportCreationCommand_1 = require("./commands/StartReportCreationCommand");
const TagResourcesCommand_1 = require("./commands/TagResourcesCommand");
const UntagResourcesCommand_1 = require("./commands/UntagResourcesCommand");
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
class ResourceGroupsTaggingAPI extends ResourceGroupsTaggingAPIClient_1.ResourceGroupsTaggingAPIClient {
    describeReportCreation(args, optionsOrCb, cb) {
        const command = new DescribeReportCreationCommand_1.DescribeReportCreationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getComplianceSummary(args, optionsOrCb, cb) {
        const command = new GetComplianceSummaryCommand_1.GetComplianceSummaryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getResources(args, optionsOrCb, cb) {
        const command = new GetResourcesCommand_1.GetResourcesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getTagKeys(args, optionsOrCb, cb) {
        const command = new GetTagKeysCommand_1.GetTagKeysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getTagValues(args, optionsOrCb, cb) {
        const command = new GetTagValuesCommand_1.GetTagValuesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startReportCreation(args, optionsOrCb, cb) {
        const command = new StartReportCreationCommand_1.StartReportCreationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResources(args, optionsOrCb, cb) {
        const command = new TagResourcesCommand_1.TagResourcesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResources(args, optionsOrCb, cb) {
        const command = new UntagResourcesCommand_1.UntagResourcesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.ResourceGroupsTaggingAPI = ResourceGroupsTaggingAPI;
//# sourceMappingURL=ResourceGroupsTaggingAPI.js.map
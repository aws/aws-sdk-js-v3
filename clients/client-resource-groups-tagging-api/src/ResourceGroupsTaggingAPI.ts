// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  DescribeReportCreationCommand,
  DescribeReportCreationCommandInput,
  DescribeReportCreationCommandOutput,
} from "./commands/DescribeReportCreationCommand";
import {
  GetComplianceSummaryCommand,
  GetComplianceSummaryCommandInput,
  GetComplianceSummaryCommandOutput,
} from "./commands/GetComplianceSummaryCommand";
import {
  GetResourcesCommand,
  GetResourcesCommandInput,
  GetResourcesCommandOutput,
} from "./commands/GetResourcesCommand";
import { GetTagKeysCommand, GetTagKeysCommandInput, GetTagKeysCommandOutput } from "./commands/GetTagKeysCommand";
import {
  GetTagValuesCommand,
  GetTagValuesCommandInput,
  GetTagValuesCommandOutput,
} from "./commands/GetTagValuesCommand";
import {
  StartReportCreationCommand,
  StartReportCreationCommandInput,
  StartReportCreationCommandOutput,
} from "./commands/StartReportCreationCommand";
import {
  TagResourcesCommand,
  TagResourcesCommandInput,
  TagResourcesCommandOutput,
} from "./commands/TagResourcesCommand";
import {
  UntagResourcesCommand,
  UntagResourcesCommandInput,
  UntagResourcesCommandOutput,
} from "./commands/UntagResourcesCommand";
import { ResourceGroupsTaggingAPIClient } from "./ResourceGroupsTaggingAPIClient";

/**
 * <fullname>Resource Groups Tagging API</fullname>
 */
export class ResourceGroupsTaggingAPI extends ResourceGroupsTaggingAPIClient {
  /**
   * <p>Describes the status of the <code>StartReportCreation</code> operation. </p>
   *         <p>You can call this operation only from the organization's
   *     management account and from the us-east-1 Region.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReportCreationCommandOutput) => void),
    cb?: (err: any, data?: DescribeReportCreationCommandOutput) => void
  ): Promise<DescribeReportCreationCommandOutput> | void {
    const command = new DescribeReportCreationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a table that shows counts of resources that are noncompliant with their tag
   *             policies.</p>
   *         <p>For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in
   *             the <i>Organizations User Guide.</i>
   *          </p>
   *         <p>You can call this operation only from the organization's
   *     management account and from the us-east-1 Region.</p>
   *         <p>This operation supports pagination, where the response can be sent in
   *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
   *     if there are additional results available to return. Repeat the query, passing the
   *     <code>PaginationToken</code> response parameter value as an input to the next request until you
   *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
   *     there are no more results waiting to be returned.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetComplianceSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetComplianceSummaryCommandOutput) => void
  ): Promise<GetComplianceSummaryCommandOutput> | void {
    const command = new GetComplianceSummaryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns all the tagged or previously tagged resources that are located in the
   *             specified Amazon Web Services Region for the account.</p>
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
   *                     information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag
   *                         Policies</a> in the <i>Organizations User Guide.</i>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>This operation supports pagination, where the response can be sent in
   *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
   *     if there are additional results available to return. Repeat the query, passing the
   *     <code>PaginationToken</code> response parameter value as an input to the next request until you
   *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
   *     there are no more results waiting to be returned.</p>
   */
  public getResources(
    args: GetResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcesCommandOutput>;
  public getResources(args: GetResourcesCommandInput, cb: (err: any, data?: GetResourcesCommandOutput) => void): void;
  public getResources(
    args: GetResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcesCommandOutput) => void
  ): void;
  public getResources(
    args: GetResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourcesCommandOutput) => void),
    cb?: (err: any, data?: GetResourcesCommandOutput) => void
  ): Promise<GetResourcesCommandOutput> | void {
    const command = new GetResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns all tag keys currently in use in the specified Amazon Web Services Region for the calling
   *             account.</p>
   *         <p>This operation supports pagination, where the response can be sent in
   *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
   *     if there are additional results available to return. Repeat the query, passing the
   *     <code>PaginationToken</code> response parameter value as an input to the next request until you
   *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
   *     there are no more results waiting to be returned.</p>
   */
  public getTagKeys(args: GetTagKeysCommandInput, options?: __HttpHandlerOptions): Promise<GetTagKeysCommandOutput>;
  public getTagKeys(args: GetTagKeysCommandInput, cb: (err: any, data?: GetTagKeysCommandOutput) => void): void;
  public getTagKeys(
    args: GetTagKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagKeysCommandOutput) => void
  ): void;
  public getTagKeys(
    args: GetTagKeysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTagKeysCommandOutput) => void),
    cb?: (err: any, data?: GetTagKeysCommandOutput) => void
  ): Promise<GetTagKeysCommandOutput> | void {
    const command = new GetTagKeysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns all tag values for the specified key that are used in the specified Amazon Web Services
   *             Region for the calling account.</p>
   *         <p>This operation supports pagination, where the response can be sent in
   *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
   *     if there are additional results available to return. Repeat the query, passing the
   *     <code>PaginationToken</code> response parameter value as an input to the next request until you
   *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
   *     there are no more results waiting to be returned.</p>
   */
  public getTagValues(
    args: GetTagValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTagValuesCommandOutput>;
  public getTagValues(args: GetTagValuesCommandInput, cb: (err: any, data?: GetTagValuesCommandOutput) => void): void;
  public getTagValues(
    args: GetTagValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagValuesCommandOutput) => void
  ): void;
  public getTagValues(
    args: GetTagValuesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTagValuesCommandOutput) => void),
    cb?: (err: any, data?: GetTagValuesCommandOutput) => void
  ): Promise<GetTagValuesCommandOutput> | void {
    const command = new GetTagValuesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Generates a report that lists all tagged resources in the accounts across your
   *             organization and tells whether each resource is compliant with the effective tag policy.
   *             Compliance data is refreshed daily. The report is generated asynchronously.</p>
   *         <p>The generated report is saved to the following location:</p>
   *         <p>
   *             <code>s3://example-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code>
   *          </p>
   *         <p>You can call this operation only from the organization's
   *     management account and from the us-east-1 Region.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartReportCreationCommandOutput) => void),
    cb?: (err: any, data?: StartReportCreationCommandOutput) => void
  ): Promise<StartReportCreationCommandOutput> | void {
    const command = new StartReportCreationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Applies one or more tags to the specified resources. Note the following:</p>
   *         <ul>
   *             <li>
   *                 <p>Not all resources can have tags. For a list of services with resources that
   *                     support tagging using this operation, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the
   *                         Resource Groups Tagging API</a>. If the resource doesn't yet support
   *                     this operation, the resource's service might support tagging using its own API
   *                     operations. For more information, refer to the documentation for that
   *                     service.</p>
   *             </li>
   *             <li>
   *                 <p>Each resource can have up to 50 tags. For other limits, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage Conventions</a> in the <i>Amazon Web Services General
   *                         Reference.</i>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>You can only tag resources that are located in the specified Amazon Web Services Region for
   *                     the Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                 <p>To add tags to a resource, you need the necessary permissions for the service
   *                     that the resource belongs to as well as permissions for adding tags. For more
   *                     information, see the documentation for each service.</p>
   *             </li>
   *          </ul>
   *         <important>
   *             <p>Do not store personally identifiable information (PII) or other confidential or
   *                 sensitive information in tags. We use tags to provide you with billing and
   *                 administration services. Tags are not intended to be used for private or sensitive
   *                 data.</p>
   *         </important>
   *         <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *         <p>In addition to the <code>tag:TagResources</code> permission required by this
   *             operation, you must also have the tagging permission defined by the service that created
   *             the resource. For example, to tag an Amazon EC2 instance using the <code>TagResources</code>
   *             operation, you must have both of the following permissions:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>tag:TagResource</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ec2:CreateTags</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public tagResources(
    args: TagResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourcesCommandOutput>;
  public tagResources(args: TagResourcesCommandInput, cb: (err: any, data?: TagResourcesCommandOutput) => void): void;
  public tagResources(
    args: TagResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourcesCommandOutput) => void
  ): void;
  public tagResources(
    args: TagResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourcesCommandOutput) => void),
    cb?: (err: any, data?: TagResourcesCommandOutput) => void
  ): Promise<TagResourcesCommandOutput> | void {
    const command = new TagResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
   *                     For more information, see the documentation for the service whose resource you
   *                     want to untag.</p>
   *             </li>
   *             <li>
   *                 <p>You can only tag resources that are located in the specified Amazon Web Services Region for
   *                     the calling Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *         <p>In addition to the <code>tag:UntagResources</code> permission required by this
   *             operation, you must also have the remove tags permission defined by the service that
   *             created the resource. For example, to remove the tags from an Amazon EC2 instance using the
   *                 <code>UntagResources</code> operation, you must have both of the following
   *             permissions:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>tag:UntagResource</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ec2:DeleteTags</code>
   *                </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourcesCommandOutput) => void),
    cb?: (err: any, data?: UntagResourcesCommandOutput) => void
  ): Promise<UntagResourcesCommandOutput> | void {
    const command = new UntagResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}

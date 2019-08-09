import { ResourceGroupsTaggingAPIClient } from "./ResourceGroupsTaggingAPIClient";
import { GetResourcesInput } from "./types/GetResourcesInput";
import { GetResourcesOutput } from "./types/GetResourcesOutput";
import { GetTagKeysInput } from "./types/GetTagKeysInput";
import { GetTagKeysOutput } from "./types/GetTagKeysOutput";
import { GetTagValuesInput } from "./types/GetTagValuesInput";
import { GetTagValuesOutput } from "./types/GetTagValuesOutput";
import { InternalServiceException } from "./types/InternalServiceException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { PaginationTokenExpiredException } from "./types/PaginationTokenExpiredException";
import { TagResourcesInput } from "./types/TagResourcesInput";
import { TagResourcesOutput } from "./types/TagResourcesOutput";
import { ThrottledException } from "./types/ThrottledException";
import { UntagResourcesInput } from "./types/UntagResourcesInput";
import { UntagResourcesOutput } from "./types/UntagResourcesOutput";
import { GetResourcesCommand } from "./commands/GetResourcesCommand";
import { GetTagKeysCommand } from "./commands/GetTagKeysCommand";
import { GetTagValuesCommand } from "./commands/GetTagValuesCommand";
import { TagResourcesCommand } from "./commands/TagResourcesCommand";
import { UntagResourcesCommand } from "./commands/UntagResourcesCommand";

export class ResourceGroupsTaggingAPI extends ResourceGroupsTaggingAPIClient {
  /**
   * <p>Returns all the tagged or previously tagged resources that are located in the specified region for the AWS account. You can optionally specify <i>filters</i> (tags and resource types) in your request, depending on what information you want returned. The response includes all tags that are associated with the requested resources.</p> <note> <p>You can check the <code>PaginationToken</code> response parameter to determine if a query completed. Queries can occasionally return fewer results on a page than allowed. The <code>PaginationToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is missing or a malformed string or invalid or out-of-range value was supplied for the request parameter.</p>
   *   - {ThrottledException} <p>The request was denied to limit the frequency of submitted requests.</p>
   *   - {InternalServiceException} <p>The request processing failed because of an unknown error, exception, or failure. You can retry the request.</p>
   *   - {PaginationTokenExpiredException} <p>A <code>PaginationToken</code> is valid for a maximum of 15 minutes. Your request was denied because the specified <code>PaginationToken</code> has expired.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResources(args: GetResourcesInput): Promise<GetResourcesOutput>;
  public getResources(
    args: GetResourcesInput,
    cb: (err: any, data?: GetResourcesOutput) => void
  ): void;
  public getResources(
    args: GetResourcesInput,
    cb?: (err: any, data?: GetResourcesOutput) => void
  ): Promise<GetResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns all tag keys in the specified region for the AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is missing or a malformed string or invalid or out-of-range value was supplied for the request parameter.</p>
   *   - {ThrottledException} <p>The request was denied to limit the frequency of submitted requests.</p>
   *   - {InternalServiceException} <p>The request processing failed because of an unknown error, exception, or failure. You can retry the request.</p>
   *   - {PaginationTokenExpiredException} <p>A <code>PaginationToken</code> is valid for a maximum of 15 minutes. Your request was denied because the specified <code>PaginationToken</code> has expired.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTagKeys(args: GetTagKeysInput): Promise<GetTagKeysOutput>;
  public getTagKeys(
    args: GetTagKeysInput,
    cb: (err: any, data?: GetTagKeysOutput) => void
  ): void;
  public getTagKeys(
    args: GetTagKeysInput,
    cb?: (err: any, data?: GetTagKeysOutput) => void
  ): Promise<GetTagKeysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTagKeysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns all tag values for the specified key in the specified region for the AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is missing or a malformed string or invalid or out-of-range value was supplied for the request parameter.</p>
   *   - {ThrottledException} <p>The request was denied to limit the frequency of submitted requests.</p>
   *   - {InternalServiceException} <p>The request processing failed because of an unknown error, exception, or failure. You can retry the request.</p>
   *   - {PaginationTokenExpiredException} <p>A <code>PaginationToken</code> is valid for a maximum of 15 minutes. Your request was denied because the specified <code>PaginationToken</code> has expired.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTagValues(args: GetTagValuesInput): Promise<GetTagValuesOutput>;
  public getTagValues(
    args: GetTagValuesInput,
    cb: (err: any, data?: GetTagValuesOutput) => void
  ): void;
  public getTagValues(
    args: GetTagValuesInput,
    cb?: (err: any, data?: GetTagValuesOutput) => void
  ): Promise<GetTagValuesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTagValuesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Applies one or more tags to the specified resources. Note the following:</p> <ul> <li> <p>Not all resources can have tags. For a list of resources that support tagging, see <a href="http://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Supported Resources</a> in the <i>AWS Resource Groups User Guide</i>.</p> </li> <li> <p>Each resource can have up to 50 tags. For other limits, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-restrictions">Tag Restrictions</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> </li> <li> <p>You can only tag resources that are located in the specified region for the AWS account.</p> </li> <li> <p>To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see <a href="http://docs.aws.amazon.com/ARG/latest/userguide/obtaining-permissions-for-tagging.html">Obtaining Permissions for Tagging</a> in the <i>AWS Resource Groups User Guide</i>.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is missing or a malformed string or invalid or out-of-range value was supplied for the request parameter.</p>
   *   - {ThrottledException} <p>The request was denied to limit the frequency of submitted requests.</p>
   *   - {InternalServiceException} <p>The request processing failed because of an unknown error, exception, or failure. You can retry the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResources(args: TagResourcesInput): Promise<TagResourcesOutput>;
  public tagResources(
    args: TagResourcesInput,
    cb: (err: any, data?: TagResourcesOutput) => void
  ): void;
  public tagResources(
    args: TagResourcesInput,
    cb?: (err: any, data?: TagResourcesOutput) => void
  ): Promise<TagResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following:</p> <ul> <li> <p>To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see <a href="http://docs.aws.amazon.com/ARG/latest/userguide/obtaining-permissions-for-tagging.html">Obtaining Permissions for Tagging</a> in the <i>AWS Resource Groups User Guide</i>.</p> </li> <li> <p>You can only tag resources that are located in the specified region for the AWS account.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is missing or a malformed string or invalid or out-of-range value was supplied for the request parameter.</p>
   *   - {ThrottledException} <p>The request was denied to limit the frequency of submitted requests.</p>
   *   - {InternalServiceException} <p>The request processing failed because of an unknown error, exception, or failure. You can retry the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResources(
    args: UntagResourcesInput
  ): Promise<UntagResourcesOutput>;
  public untagResources(
    args: UntagResourcesInput,
    cb: (err: any, data?: UntagResourcesOutput) => void
  ): void;
  public untagResources(
    args: UntagResourcesInput,
    cb?: (err: any, data?: UntagResourcesOutput) => void
  ): Promise<UntagResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}

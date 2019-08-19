import { _AttachmentsSource } from "./_AttachmentsSource";
import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDocumentInput shape
 */
export interface CreateDocumentInput {
  /**
   * <p>A valid JSON or YAML string.</p>
   */
  Content: string;

  /**
   * <p>A list of key and value pairs that describe attachments to a version of a document.</p>
   */
  Attachments?: Array<_AttachmentsSource> | Iterable<_AttachmentsSource>;

  /**
   * <p>A name for the Systems Manager document.</p> <important> <p>Do not use the following to begin the names of documents you create. They are reserved by AWS for use as document prefixes:</p> <ul> <li> <p> <code>aws</code> </p> </li> <li> <p> <code>amazon</code> </p> </li> <li> <p> <code>amzn</code> </p> </li> </ul> </important>
   */
  Name: string;

  /**
   * <p>An optional field specifying the version of the artifact you are creating with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document, and cannot be changed.</p>
   */
  VersionName?: string;

  /**
   * <p>The type of document to create. Valid document types include: <code>Command</code>, <code>Policy</code>, <code>Automation</code>, <code>Session</code>, and <code>Package</code>.</p>
   */
  DocumentType?:
    | "Command"
    | "Policy"
    | "Automation"
    | "Session"
    | "Package"
    | string;

  /**
   * <p>Specify the document format for the request. The document format can be either JSON or YAML. JSON is the default format.</p>
   */
  DocumentFormat?: "YAML" | "JSON" | string;

  /**
   * <p>Specify a target type to define the kinds of resources the document can run on. For example, to run a document on EC2 instances, specify the following value: /AWS::EC2::Instance. If you specify a value of '/' the document can run on all types of resources. If you don't specify a value, the document can't run on any resources. For a list of valid resource types, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS Resource Types Reference</a> in the <i>AWS CloudFormation User Guide</i>. </p>
   */
  TargetType?: string;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag an SSM document to identify the types of targets or the environment where it will run. In this case, you could specify the following key name/value pairs:</p> <ul> <li> <p> <code>Key=OS,Value=Windows</code> </p> </li> <li> <p> <code>Key=Environment,Value=Production</code> </p> </li> </ul> <note> <p>To add tags to an existing SSM document, use the <a>AddTagsToResource</a> action.</p> </note>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}

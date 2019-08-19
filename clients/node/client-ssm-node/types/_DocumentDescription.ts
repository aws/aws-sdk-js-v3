import {
  _DocumentParameter,
  _UnmarshalledDocumentParameter
} from "./_DocumentParameter";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import {
  _AttachmentInformation,
  _UnmarshalledAttachmentInformation
} from "./_AttachmentInformation";

/**
 * <p>Describes a Systems Manager document. </p>
 */
export interface _DocumentDescription {
  /**
   * <p>The SHA1 hash of the document, which you can use for verification.</p>
   */
  Sha1?: string;

  /**
   * <p>The Sha256 or Sha1 hash created by the system when the document was created. </p> <note> <p>Sha1 hashes have been deprecated.</p> </note>
   */
  Hash?: string;

  /**
   * <p>The hash type of the document. Valid values include <code>Sha256</code> or <code>Sha1</code>.</p> <note> <p>Sha1 hashes have been deprecated.</p> </note>
   */
  HashType?: "Sha256" | "Sha1" | string;

  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name?: string;

  /**
   * <p>The version of the artifact associated with the document.</p>
   */
  VersionName?: string;

  /**
   * <p>The AWS user account that created the document.</p>
   */
  Owner?: string;

  /**
   * <p>The date when the document was created.</p>
   */
  CreatedDate?: Date | string | number;

  /**
   * <p>The status of the Systems Manager document.</p>
   */
  Status?: "Creating" | "Active" | "Updating" | "Deleting" | "Failed" | string;

  /**
   * <p>A message returned by AWS Systems Manager that explains the <code>Status</code> value. For example, a <code>Failed</code> status might be explained by the <code>StatusInformation</code> message, "The specified S3 bucket does not exist. Verify that the URL of the S3 bucket is correct."</p>
   */
  StatusInformation?: string;

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>A description of the document. </p>
   */
  Description?: string;

  /**
   * <p>A description of the parameters for a document.</p>
   */
  Parameters?: Array<_DocumentParameter> | Iterable<_DocumentParameter>;

  /**
   * <p>The list of OS platforms compatible with this Systems Manager document. </p>
   */
  PlatformTypes?:
    | Array<"Windows" | "Linux" | string>
    | Iterable<"Windows" | "Linux" | string>;

  /**
   * <p>The type of document.</p>
   */
  DocumentType?:
    | "Command"
    | "Policy"
    | "Automation"
    | "Session"
    | "Package"
    | string;

  /**
   * <p>The schema version.</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The latest version of the document.</p>
   */
  LatestVersion?: string;

  /**
   * <p>The default version.</p>
   */
  DefaultVersion?: string;

  /**
   * <p>The document format, either JSON or YAML.</p>
   */
  DocumentFormat?: "YAML" | "JSON" | string;

  /**
   * <p>The target type which defines the kinds of resources the document can run on. For example, /AWS::EC2::Instance. For a list of valid resource types, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS Resource Types Reference</a> in the <i>AWS CloudFormation User Guide</i>. </p>
   */
  TargetType?: string;

  /**
   * <p>The tags, or metadata, that have been applied to the document.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Details about the document attachments, including names, locations, sizes, etc.</p>
   */
  AttachmentsInformation?:
    | Array<_AttachmentInformation>
    | Iterable<_AttachmentInformation>;
}

export interface _UnmarshalledDocumentDescription extends _DocumentDescription {
  /**
   * <p>The date when the document was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>A description of the parameters for a document.</p>
   */
  Parameters?: Array<_UnmarshalledDocumentParameter>;

  /**
   * <p>The list of OS platforms compatible with this Systems Manager document. </p>
   */
  PlatformTypes?: Array<"Windows" | "Linux" | string>;

  /**
   * <p>The tags, or metadata, that have been applied to the document.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>Details about the document attachments, including names, locations, sizes, etc.</p>
   */
  AttachmentsInformation?: Array<_UnmarshalledAttachmentInformation>;
}

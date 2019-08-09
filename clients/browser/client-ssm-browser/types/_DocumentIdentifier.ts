import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes the name of a Systems Manager document.</p>
 */
export interface _DocumentIdentifier {
  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name?: string;

  /**
   * <p>The AWS user account that created the document.</p>
   */
  Owner?: string;

  /**
   * <p>An optional field specifying the version of the artifact associated with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document, and cannot be changed.</p>
   */
  VersionName?: string;

  /**
   * <p>The operating system platform. </p>
   */
  PlatformTypes?:
    | Array<"Windows" | "Linux" | string>
    | Iterable<"Windows" | "Linux" | string>;

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The document type.</p>
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
}

export interface _UnmarshalledDocumentIdentifier extends _DocumentIdentifier {
  /**
   * <p>The operating system platform. </p>
   */
  PlatformTypes?: Array<"Windows" | "Linux" | string>;

  /**
   * <p>The tags, or metadata, that have been applied to the document.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}

// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CodeGuruReviewerServiceException as __BaseException } from "./CodeGuruReviewerServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const AnalysisType = {
  CODE_QUALITY: "CodeQuality",
  SECURITY: "Security",
} as const;

/**
 * @public
 */
export type AnalysisType = (typeof AnalysisType)[keyof typeof AnalysisType];

/**
 * @public
 * @enum
 */
export const EncryptionOption = {
  AoCmk: "AWS_OWNED_CMK",
  CmCmk: "CUSTOMER_MANAGED_CMK",
} as const;

/**
 * @public
 */
export type EncryptionOption = (typeof EncryptionOption)[keyof typeof EncryptionOption];

/**
 * <p>An object that contains:</p>
 *          <ul>
 *             <li>
 *                <p>The encryption option for a repository association. It is either owned by Amazon Web Services
 *                Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed
 *                   (<code>CUSTOMER_MANAGED_CMK</code>).</p>
 *             </li>
 *             <li>
 *                <p>The ID of the Amazon Web Services KMS key that is associated with a repository
 *                association.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface KMSKeyDetails {
  /**
   * <p>The ID of the Amazon Web Services KMS key that is associated with a repository association.</p>
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key
   *          Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed
   *             (<code>CUSTOMER_MANAGED_CMK</code>).</p>
   * @public
   */
  EncryptionOption?: EncryptionOption | undefined;
}

/**
 * <p>Information about a third-party source repository connected to CodeGuru Reviewer.</p>
 * @public
 */
export interface ThirdPartySourceRepository {
  /**
   * <p>The name of the third party source repository.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services CodeStar Connections connection. Its format is <code>arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id</code>. For more information, see <a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html">Connection</a> in the <i>Amazon Web Services CodeStar Connections API Reference</i>.</p>
   * @public
   */
  ConnectionArn: string | undefined;

  /**
   * <p>The owner of the repository. For a GitHub, GitHub Enterprise, or Bitbucket repository,
   *          this is the username for the account that owns the repository. For an S3 repository, this
   *          can be the username or Amazon Web Services account ID </p>
   * @public
   */
  Owner: string | undefined;
}

/**
 * <p>Information about an Amazon Web Services CodeCommit repository. The CodeCommit repository must be in
 *          the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are
 *          configured.</p>
 * @public
 */
export interface CodeCommitRepository {
  /**
   * <p>The name of the Amazon Web Services CodeCommit repository. For more information, see <a href="https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetRepository.html#CodeCommit-GetRepository-request-repositoryName">repositoryName</a> in the <i>Amazon Web Services CodeCommit API
   *          Reference</i>.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Information about a repository in an S3 bucket.</p>
 * @public
 */
export interface S3Repository {
  /**
   * <p>The name of the repository in the S3 bucket.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the S3 bucket used for associating a new S3 repository. It must begin with <code>codeguru-reviewer-</code>. </p>
   * @public
   */
  BucketName: string | undefined;
}

/**
 * <p>Information about an associated Amazon Web Services CodeCommit repository or an associated repository
 *          that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This
 *             <code>Repository</code> object is not used if your source code is in an associated
 *          GitHub repository.</p>
 * @public
 */
export interface Repository {
  /**
   * <p>Information about an Amazon Web Services CodeCommit repository.</p>
   * @public
   */
  CodeCommit?: CodeCommitRepository | undefined;

  /**
   * <p> Information about a Bitbucket repository. </p>
   * @public
   */
  Bitbucket?: ThirdPartySourceRepository | undefined;

  /**
   * <p>Information about a GitHub Enterprise Server repository.</p>
   * @public
   */
  GitHubEnterpriseServer?: ThirdPartySourceRepository | undefined;

  /**
   * <p>Information about a repository in an S3 bucket.</p>
   * @public
   */
  S3Bucket?: S3Repository | undefined;
}

/**
 * @public
 */
export interface AssociateRepositoryRequest {
  /**
   * <p>The repository to associate.</p>
   * @public
   */
  Repository: Repository | undefined;

  /**
   * <p>Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository
   *          associations if there are failures and retries.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p>
   *          <ul>
   *             <li>
   *                <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
   * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   * 					keys are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>An optional field known as a <i>tag value</i> (for example,
   * 					<code>111122223333</code>, <code>Production</code>, or a team name).
   * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
   * 					values are case sensitive.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A <code>KMSKeyDetails</code> object that contains:</p>
   *          <ul>
   *             <li>
   *                <p>The encryption option for this repository association. It is either owned by Amazon Web Services
   *                Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed
   *                   (<code>CUSTOMER_MANAGED_CMK</code>).</p>
   *             </li>
   *             <li>
   *                <p>The ID of the Amazon Web Services KMS key that is associated with this repository
   *                association.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KMSKeyDetails?: KMSKeyDetails | undefined;
}

/**
 * @public
 * @enum
 */
export const ProviderType = {
  BITBUCKET: "Bitbucket",
  CODE_COMMIT: "CodeCommit",
  GIT_HUB: "GitHub",
  GIT_HUB_ENTERPRISE_SERVER: "GitHubEnterpriseServer",
  S3_BUCKET: "S3Bucket",
} as const;

/**
 * @public
 */
export type ProviderType = (typeof ProviderType)[keyof typeof ProviderType];

/**
 * <p>Code artifacts are source code artifacts and build artifacts used in a repository
 *          analysis or a pull request review.</p>
 *          <ul>
 *             <li>
 *                <p>Source code artifacts are source code files in a Git repository that are
 *                compressed into a .zip file.</p>
 *             </li>
 *             <li>
 *                <p>Build artifacts are .jar or .class files that are compressed in a .zip
 *                file.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface CodeArtifacts {
  /**
   * <p>The S3 object key for a source code .zip file. This is required for all code
   *          reviews.</p>
   * @public
   */
  SourceCodeArtifactsObjectKey: string | undefined;

  /**
   * <p>The S3 object key for a build artifacts .zip file that contains .jar or .class files.
   *          This is required for a code review with security analysis. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/working-with-cicd.html">Create
   *             code reviews with GitHub Actions</a> in the <i>Amazon CodeGuru Reviewer User
   *             Guide</i>.</p>
   * @public
   */
  BuildArtifactsObjectKey?: string | undefined;
}

/**
 * <p>Specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object that contains
 *          the S3 object keys for a source code .zip file and for a build artifacts .zip file that
 *          contains .jar or .class files.</p>
 * @public
 */
export interface S3RepositoryDetails {
  /**
   * <p>The name of the S3 bucket used for associating a new S3 repository. It must begin with <code>codeguru-reviewer-</code>. </p>
   * @public
   */
  BucketName?: string | undefined;

  /**
   * <p>A <code>CodeArtifacts</code> object. The <code>CodeArtifacts</code> object includes the
   *          S3 object key for a source code .zip file and for a build artifacts .zip file that contains
   *          .jar or .class files.</p>
   * @public
   */
  CodeArtifacts?: CodeArtifacts | undefined;
}

/**
 * @public
 * @enum
 */
export const RepositoryAssociationState = {
  ASSOCIATED: "Associated",
  ASSOCIATING: "Associating",
  DISASSOCIATED: "Disassociated",
  DISASSOCIATING: "Disassociating",
  FAILED: "Failed",
} as const;

/**
 * @public
 */
export type RepositoryAssociationState = (typeof RepositoryAssociationState)[keyof typeof RepositoryAssociationState];

/**
 * <p>Information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html">DescribeRepositoryAssociation</a> operation returns a
 *             <code>RepositoryAssociation</code> object.</p>
 * @public
 */
export interface RepositoryAssociation {
  /**
   * <p>The ID of the repository association.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) identifying the repository association.</p>
   * @public
   */
  AssociationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services CodeStar Connections connection. Its format is <code>arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id</code>. For more information, see <a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html">Connection</a> in the <i>Amazon Web Services CodeStar Connections API Reference</i>.</p>
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * <p>The name of the repository.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the
   *       account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository.
   *       For an S3 repository, it can be the username or Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The provider type of the repository association.</p>
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * <p>The state of the repository association.</p>
   *          <p>The valid repository association states are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Associated</b>: The repository association is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Associating</b>: CodeGuru Reviewer is:</p>
   *                <ul>
   *                   <li>
   *                      <p>Setting up pull request notifications. This is required
   *                      for pull requests to trigger a CodeGuru Reviewer review.</p>
   *                      <note>
   *                         <p>If your repository <code>ProviderType</code> is <code>GitHub</code>, <code>GitHub Enterprise Server</code>, or <code>Bitbucket</code>, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered.</p>
   *                      </note>
   *                   </li>
   *                   <li>
   *                      <p>Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Failed</b>: The repository failed to associate or disassociate.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Disassociating</b>: CodeGuru Reviewer is removing the repository's pull request notifications and source code access.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Disassociated</b>: CodeGuru Reviewer successfully disassociated the repository. You can create a new association with this repository if you want to review source code in it later. You can control access to code reviews created in anassociated repository with tags after it has been disassociated. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-using-tags.html">Using tags to control access to associated repositories</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: RepositoryAssociationState | undefined;

  /**
   * <p>A description of why the repository association is in the current state.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the repository association was last
   *          updated.</p>
   * @public
   */
  LastUpdatedTimeStamp?: Date | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the repository association was
   *          created.</p>
   * @public
   */
  CreatedTimeStamp?: Date | undefined;

  /**
   * <p>A <code>KMSKeyDetails</code> object that contains:</p>
   *          <ul>
   *             <li>
   *                <p>The encryption option for this repository association. It is either owned by Amazon Web Services
   *                Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed
   *                   (<code>CUSTOMER_MANAGED_CMK</code>).</p>
   *             </li>
   *             <li>
   *                <p>The ID of the Amazon Web Services KMS key that is associated with this repository
   *                association.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KMSKeyDetails?: KMSKeyDetails | undefined;

  /**
   * <p>Specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object that contains
   *          the S3 object keys for a source code .zip file and for a build artifacts .zip file that
   *          contains .jar or .class files.</p>
   * @public
   */
  S3RepositoryDetails?: S3RepositoryDetails | undefined;
}

/**
 * @public
 */
export interface AssociateRepositoryResponse {
  /**
   * <p>Information about the repository association.</p>
   * @public
   */
  RepositoryAssociation?: RepositoryAssociation | undefined;

  /**
   * <p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p>
   *          <ul>
   *             <li>
   *                <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
   * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   * 					keys are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>An optional field known as a <i>tag value</i> (for example,
   * 					<code>111122223333</code>, <code>Production</code>, or a team name).
   * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
   * 					values are case sensitive.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The requested operation would cause a conflict with the current state of a service
 *          resource associated with the request. Resolve the conflict before retrying this request.
 *       </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The server encountered an internal error and is unable to complete the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The input fails to satisfy the specified constraints.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the tip of a branch in an associated
 *          repository.</p>
 * @public
 */
export interface RepositoryHeadSourceCodeType {
  /**
   * <p>The name of the branch in an associated repository. The
   *             <code>RepositoryHeadSourceCodeType</code> specifies the tip of this branch.</p>
   * @public
   */
  BranchName: string | undefined;
}

/**
 * <p>A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that
 *          specifies a code diff between a source and destination branch in an associated
 *          repository.</p>
 * @public
 */
export interface BranchDiffSourceCodeType {
  /**
   * <p>The source branch for a diff in an associated repository.</p>
   * @public
   */
  SourceBranchName: string | undefined;

  /**
   * <p>The destination branch for a diff in an associated repository.</p>
   * @public
   */
  DestinationBranchName: string | undefined;
}

/**
 * <p>A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that
 *          specifies the commit diff for a pull request on an associated repository. The
 *             <code>SourceCommit</code> and <code>DestinationCommit</code> fields are required to do a
 *          pull request code review.</p>
 * @public
 */
export interface CommitDiffSourceCodeType {
  /**
   * <p>The SHA of the source commit used to generate a commit diff. This field is required for
   *          a pull request code review.</p>
   * @public
   */
  SourceCommit?: string | undefined;

  /**
   * <p>The SHA of the destination commit used to generate a commit diff. This field is required
   *          for a pull request code review.</p>
   * @public
   */
  DestinationCommit?: string | undefined;

  /**
   * <p>The SHA of the merge base of a commit.</p>
   * @public
   */
  MergeBaseCommit?: string | undefined;
}

/**
 * <p>Information about an event. The event might be a push, pull request, scheduled request,
 *          or another type of event.</p>
 * @public
 */
export interface EventInfo {
  /**
   * <p>The name of the event. The possible names are <code>pull_request</code>,
   *             <code>workflow_dispatch</code>, <code>schedule</code>, and <code>push</code>
   *          </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The state of an event. The state might be open, closed, or another state.</p>
   * @public
   */
  State?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VendorName = {
  GITHUB: "GitHub",
  GITLAB: "GitLab",
  NATIVE_S3: "NativeS3",
} as const;

/**
 * @public
 */
export type VendorName = (typeof VendorName)[keyof typeof VendorName];

/**
 * <p>Metadata that is associated with a code review. This applies to both pull request and
 *          repository analysis code reviews.</p>
 * @public
 */
export interface RequestMetadata {
  /**
   * <p>The ID of the request. This is required for a pull request code review.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>An identifier, such as a name or account ID, that is associated with the requester. The
   *             <code>Requester</code> is used to capture the <code>author/actor</code> name of the
   *          event request.</p>
   * @public
   */
  Requester?: string | undefined;

  /**
   * <p>Information about the event associated with a code review.</p>
   * @public
   */
  EventInfo?: EventInfo | undefined;

  /**
   * <p>The name of the repository vendor used to upload code to an S3 bucket for a CI/CD code
   *          review. For example, if code and artifacts are uploaded to an S3 bucket for a CI/CD code
   *          review by GitHub scripts from a GitHub repository, then the repository association's
   *             <code>ProviderType</code> is <code>S3Bucket</code> and the CI/CD repository vendor name
   *          is GitHub. For more information, see the definition for <code>ProviderType</code> in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a>.</p>
   * @public
   */
  VendorName?: VendorName | undefined;
}

/**
 * <p>Information about an associated repository in an S3 bucket. The associated repository
 *          contains a source code .zip file and a build artifacts .zip file that contains .jar or
 *          .class files.</p>
 * @public
 */
export interface S3BucketRepository {
  /**
   * <p>The name of the repository when the <code>ProviderType</code> is
   *          <code>S3Bucket</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An <code>S3RepositoryDetails</code> object that specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object. The <code>CodeArtifacts</code> object includes the S3 object keys for a source code .zip file and for a build artifacts .zip file.</p>
   * @public
   */
  Details?: S3RepositoryDetails | undefined;
}

/**
 * <p>Specifies the source code that is analyzed in a code review.</p>
 * @public
 */
export interface SourceCodeType {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies a commit diff created by a pull request on an
   *          associated repository.</p>
   * @public
   */
  CommitDiff?: CommitDiffSourceCodeType | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the tip of a branch in an associated
   *          repository.</p>
   * @public
   */
  RepositoryHead?: RepositoryHeadSourceCodeType | undefined;

  /**
   * <p>A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that
   *          specifies a source branch name and a destination branch name in an associated
   *          repository.</p>
   * @public
   */
  BranchDiff?: BranchDiffSourceCodeType | undefined;

  /**
   * <p>Information about an associated repository in an S3 bucket that includes its name and an <code>S3RepositoryDetails</code> object. The <code>S3RepositoryDetails</code> object includes the name of an S3 bucket, an S3 key for a source code .zip file, and an S3 key for a build artifacts .zip file. <code>S3BucketRepository</code> is required in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> for <code>S3BucketRepository</code> based code reviews.</p>
   * @public
   */
  S3BucketRepository?: S3BucketRepository | undefined;

  /**
   * <p>Metadata that is associated with a code review. This applies to any type of code review
   *          supported by CodeGuru Reviewer. The <code>RequestMetadaa</code> field captures any event metadata. For
   *          example, it might capture metadata associated with an event trigger, such as a push or a
   *          pull request.</p>
   * @public
   */
  RequestMetadata?: RequestMetadata | undefined;
}

/**
 * <p>A code review type that analyzes all code under a specified branch in an associated
 *          repository. The associated repository is specified using its ARN when you call <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>.</p>
 * @public
 */
export interface RepositoryAnalysis {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the tip of a branch in an associated
   *          repository.</p>
   * @public
   */
  RepositoryHead?: RepositoryHeadSourceCodeType | undefined;

  /**
   * <p>Specifies the source code that is analyzed in a code review.</p>
   * @public
   */
  SourceCodeType?: SourceCodeType | undefined;
}

/**
 * <p>The type of a code review. There are two code review types:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PullRequest</code> - A code review that is automatically triggered by a pull
 *                request on an associated repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RepositoryAnalysis</code> - A code review that analyzes all code under a
 *                specified branch in an associated repository. The associated repository is specified
 *                using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface CodeReviewType {
  /**
   * <p>A code review that analyzes all code under a specified branch in an associated
   *          repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>.</p>
   * @public
   */
  RepositoryAnalysis: RepositoryAnalysis | undefined;

  /**
   * <p>They types of analysis performed during a repository analysis or a pull request review.
   *          You can specify either <code>Security</code>, <code>CodeQuality</code>, or both.</p>
   * @public
   */
  AnalysisTypes?: AnalysisType[] | undefined;
}

/**
 * @public
 */
export interface CreateCodeReviewRequest {
  /**
   * <p>The name of the code review. The name of each code review in your Amazon Web Services account must be
   *          unique.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p>
   *          <p>A code review can only be created on an associated repository. This is the ARN of the
   *          associated repository.</p>
   * @public
   */
  RepositoryAssociationArn: string | undefined;

  /**
   * <p>The type of code review to create. This is specified using a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">CodeReviewType</a>
   *          object. You can create a code review only of type <code>RepositoryAnalysis</code>.</p>
   * @public
   */
  Type: CodeReviewType | undefined;

  /**
   * <p>Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate code reviews
   *          if there are failures and retries.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConfigFileState = {
  ABSENT: "Absent",
  PRESENT: "Present",
  PRESENT_WITH_ERRORS: "PresentWithErrors",
} as const;

/**
 * @public
 */
export type ConfigFileState = (typeof ConfigFileState)[keyof typeof ConfigFileState];

/**
 * <p>Information about the statistics from the code review.</p>
 * @public
 */
export interface Metrics {
  /**
   * <p>
   *             <code>MeteredLinesOfCodeCount</code> is the number of lines of code in the repository
   *          where the code review happened. This does not include non-code lines such as comments and
   *          blank lines.</p>
   * @public
   */
  MeteredLinesOfCodeCount?: number | undefined;

  /**
   * <p>
   *             <code>SuppressedLinesOfCodeCount</code> is the number of lines of code in the repository
   *          where the code review happened that CodeGuru Reviewer did not analyze. The lines suppressed in the
   *          analysis is based on the <code>excludeFiles</code> variable in the
   *             <code>aws-codeguru-reviewer.yml</code> file. This number does not include non-code lines
   *          such as comments and blank lines. </p>
   * @public
   */
  SuppressedLinesOfCodeCount?: number | undefined;

  /**
   * <p>Total number of recommendations found in the code review.</p>
   * @public
   */
  FindingsCount?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const JobState = {
  COMPLETED: "Completed",
  DELETING: "Deleting",
  FAILED: "Failed",
  PENDING: "Pending",
} as const;

/**
 * @public
 */
export type JobState = (typeof JobState)[keyof typeof JobState];

/**
 * @public
 * @enum
 */
export const Type = {
  PULL_REQUEST: "PullRequest",
  REPOSITORY_ANALYSIS: "RepositoryAnalysis",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * <p>Information about a code review. A code review belongs to the associated repository that
 *          contains the reviewed code.</p>
 * @public
 */
export interface CodeReview {
  /**
   * <p>The name of the code review.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
   *       </p>
   * @public
   */
  CodeReviewArn?: string | undefined;

  /**
   * <p>The name of the repository.</p>
   * @public
   */
  RepositoryName?: string | undefined;

  /**
   * <p>The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the
   *       account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository.
   *       For an S3 repository, it can be the username or Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The type of repository that contains the reviewed code (for example, GitHub or
   *          Bitbucket).</p>
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * <p>The valid code review states are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Completed</code>: The code review is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Pending</code>: The code review started and has not completed or failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: The code review failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleting</code>: The code review is being deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: JobState | undefined;

  /**
   * <p>The reason for the state of the code review.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the code review was created.</p>
   * @public
   */
  CreatedTimeStamp?: Date | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the code review was last updated.</p>
   * @public
   */
  LastUpdatedTimeStamp?: Date | undefined;

  /**
   * <p>The type of code review.</p>
   * @public
   */
  Type?: Type | undefined;

  /**
   * <p>The pull request ID for the code review.</p>
   * @public
   */
  PullRequestId?: string | undefined;

  /**
   * <p>The type of the source code for the code review.</p>
   * @public
   */
  SourceCodeType?: SourceCodeType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> that contains the reviewed source code. You can retrieve
   *          associated repository ARNs by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p>
   * @public
   */
  AssociationArn?: string | undefined;

  /**
   * <p>The statistics from the code review.</p>
   * @public
   */
  Metrics?: Metrics | undefined;

  /**
   * <p>The types of analysis performed during a repository analysis or a pull request review.
   *          You can specify either <code>Security</code>, <code>CodeQuality</code>, or both.</p>
   * @public
   */
  AnalysisTypes?: AnalysisType[] | undefined;

  /**
   * <p>The state of the <code>aws-codeguru-reviewer.yml</code> configuration file that allows
   *          the configuration of the CodeGuru Reviewer analysis. The file either exists, doesn't exist, or exists
   *          with errors at the root directory of your repository.</p>
   * @public
   */
  ConfigFileState?: ConfigFileState | undefined;
}

/**
 * @public
 */
export interface CreateCodeReviewResponse {
  /**
   * <p>Information about a code review. A code review belongs to the associated repository that
   *          contains the reviewed code.</p>
   * @public
   */
  CodeReview?: CodeReview | undefined;
}

/**
 * <p> The resource specified in the request was not found. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeCodeReviewRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
   *       </p>
   * @public
   */
  CodeReviewArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCodeReviewResponse {
  /**
   * <p>Information about the code review.</p>
   * @public
   */
  CodeReview?: CodeReview | undefined;
}

/**
 * @public
 */
export interface DescribeRecommendationFeedbackRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
   *       </p>
   * @public
   */
  CodeReviewArn: string | undefined;

  /**
   * <p>The recommendation ID that can be used to track the provided recommendations and then to
   *          collect the feedback.</p>
   * @public
   */
  RecommendationId: string | undefined;

  /**
   * <p>Optional parameter to describe the feedback for a given user. If this is not supplied,
   *          it defaults to the user making the request.</p>
   *          <p>
   *          The <code>UserId</code> is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">
   *             Specifying a Principal</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
   * @public
   */
  UserId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Reaction = {
  THUMBS_DOWN: "ThumbsDown",
  THUMBS_UP: "ThumbsUp",
} as const;

/**
 * @public
 */
export type Reaction = (typeof Reaction)[keyof typeof Reaction];

/**
 * <p>Information about the recommendation feedback.</p>
 * @public
 */
export interface RecommendationFeedback {
  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
   *       </p>
   * @public
   */
  CodeReviewArn?: string | undefined;

  /**
   * <p>The recommendation ID that can be used to track the provided recommendations. Later on
   *          it can be used to collect the feedback.</p>
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * <p>List for storing reactions. Reactions are utf-8 text code for emojis. You can send an
   *          empty list to clear off all your feedback.</p>
   * @public
   */
  Reactions?: Reaction[] | undefined;

  /**
   * <p>The ID of the user that made the API call.</p>
   *          <p>
   *          The <code>UserId</code> is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">
   *             Specifying a Principal</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The time at which the feedback was created.</p>
   * @public
   */
  CreatedTimeStamp?: Date | undefined;

  /**
   * <p>The time at which the feedback was last updated.</p>
   * @public
   */
  LastUpdatedTimeStamp?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRecommendationFeedbackResponse {
  /**
   * <p>The recommendation feedback given by the user.</p>
   * @public
   */
  RecommendationFeedback?: RecommendationFeedback | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoryAssociationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p>
   * @public
   */
  AssociationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoryAssociationResponse {
  /**
   * <p>Information about the repository association.</p>
   * @public
   */
  RepositoryAssociation?: RepositoryAssociation | undefined;

  /**
   * <p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p>
   *          <ul>
   *             <li>
   *                <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
   * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   * 					keys are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>An optional field known as a <i>tag value</i> (for example,
   * 					<code>111122223333</code>, <code>Production</code>, or a team name).
   * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
   * 					values are case sensitive.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The resource specified in the request was not found.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DisassociateRepositoryRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p>
   * @public
   */
  AssociationArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateRepositoryResponse {
  /**
   * <p>Information about the disassociated repository.</p>
   * @public
   */
  RepositoryAssociation?: RepositoryAssociation | undefined;

  /**
   * <p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p>
   *          <ul>
   *             <li>
   *                <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
   * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   * 					keys are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>An optional field known as a <i>tag value</i> (for example,
   * 					<code>111122223333</code>, <code>Production</code>, or a team name).
   * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
   * 					values are case sensitive.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListCodeReviewsRequest {
  /**
   * <p>List of provider types for filtering that needs to be applied before displaying the
   *          result. For example, <code>providerTypes=[GitHub]</code> lists code reviews from
   *          GitHub.</p>
   * @public
   */
  ProviderTypes?: ProviderType[] | undefined;

  /**
   * <p>List of states for filtering that needs to be applied before displaying the result. For
   *          example, <code>states=[Pending]</code> lists code reviews in the Pending state.</p>
   *          <p>The valid code review states are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Completed</code>: The code review is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Pending</code>: The code review started and has not completed or failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: The code review failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleting</code>: The code review is being deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  States?: JobState[] | undefined;

  /**
   * <p>List of repository names for filtering that needs to be applied before displaying the
   *          result.</p>
   * @public
   */
  RepositoryNames?: string[] | undefined;

  /**
   * <p>The type of code reviews to list in the response.</p>
   * @public
   */
  Type: Type | undefined;

  /**
   * <p>The maximum number of results that are returned per call. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments
   *          unchanged.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about metrics summaries.</p>
 * @public
 */
export interface MetricsSummary {
  /**
   * <p>Lines of code metered in the code review. For the initial code review pull request and
   *          all subsequent revisions, this includes all lines of code in the files added to the pull
   *          request. In subsequent revisions, for files that already existed in the pull request, this
   *          includes only the changed lines of code. In both cases, this does not include non-code
   *          lines such as comments and import statements. For example, if you submit a pull request
   *          containing 5 files, each with 500 lines of code, and in a subsequent revision you added a
   *          new file with 200 lines of code, and also modified a total of 25 lines across the initial 5
   *          files, <code>MeteredLinesOfCodeCount</code> includes the first 5 files (5 * 500 = 2,500
   *          lines), the new file (200 lines) and the 25 changed lines of code for a total of 2,725
   *          lines of code.</p>
   * @public
   */
  MeteredLinesOfCodeCount?: number | undefined;

  /**
   * <p>Lines of code suppressed in the code review based on the <code>excludeFiles</code>
   *          element in the <code>aws-codeguru-reviewer.yml</code> file. For full repository analyses,
   *          this number includes all lines of code in the files that are suppressed. For pull requests,
   *          this number only includes the <i>changed</i> lines of code that are
   *          suppressed. In both cases, this number does not include non-code lines such as comments and
   *          import statements. For example, if you initiate a full repository analysis on a repository
   *          containing 5 files, each file with 100 lines of code, and 2 files are listed as excluded in
   *          the <code>aws-codeguru-reviewer.yml</code> file, then
   *             <code>SuppressedLinesOfCodeCount</code> returns 200 (2 * 100) as the total number of
   *          lines of code suppressed. However, if you submit a pull request for the same repository,
   *          then <code>SuppressedLinesOfCodeCount</code> only includes the lines in the 2 files that
   *          changed. If only 1 of the 2 files changed in the pull request, then
   *             <code>SuppressedLinesOfCodeCount</code> returns 100 (1 * 100) as the total number of
   *          lines of code suppressed.</p>
   * @public
   */
  SuppressedLinesOfCodeCount?: number | undefined;

  /**
   * <p>Total number of recommendations found in the code review.</p>
   * @public
   */
  FindingsCount?: number | undefined;
}

/**
 * <p>Information about the summary of the code review.</p>
 * @public
 */
export interface CodeReviewSummary {
  /**
   * <p>The name of the code review.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
   *       </p>
   * @public
   */
  CodeReviewArn?: string | undefined;

  /**
   * <p>The name of the repository.</p>
   * @public
   */
  RepositoryName?: string | undefined;

  /**
   * <p>The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the
   *       account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository.
   *       For an S3 repository, it can be the username or Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The provider type of the repository association.</p>
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * <p>The state of the code review.</p>
   *          <p>The valid code review states are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Completed</code>: The code review is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Pending</code>: The code review started and has not completed or failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: The code review failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleting</code>: The code review is being deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: JobState | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the code review was created.</p>
   * @public
   */
  CreatedTimeStamp?: Date | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, when the code review was last updated.</p>
   * @public
   */
  LastUpdatedTimeStamp?: Date | undefined;

  /**
   * <p>The type of the code review.</p>
   * @public
   */
  Type?: Type | undefined;

  /**
   * <p>The pull request ID for the code review.</p>
   * @public
   */
  PullRequestId?: string | undefined;

  /**
   * <p>The statistics from the code review.</p>
   * @public
   */
  MetricsSummary?: MetricsSummary | undefined;

  /**
   * <p>Specifies the source code that is analyzed in a code review.</p>
   * @public
   */
  SourceCodeType?: SourceCodeType | undefined;
}

/**
 * @public
 */
export interface ListCodeReviewsResponse {
  /**
   * <p>A list of code reviews that meet the criteria of the request.</p>
   * @public
   */
  CodeReviewSummaries?: CodeReviewSummary[] | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationFeedbackRequest {
  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments
   *          unchanged.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
   *       </p>
   * @public
   */
  CodeReviewArn: string | undefined;

  /**
   * <p>An Amazon Web Services user's account ID or Amazon Resource Name (ARN). Use this ID to query the
   *          recommendation feedback for a code review from that user.</p>
   *          <p>
   *          The <code>UserId</code> is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">
   *             Specifying a Principal</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
   * @public
   */
  UserIds?: string[] | undefined;

  /**
   * <p>Used to query the recommendation feedback for a given recommendation.</p>
   * @public
   */
  RecommendationIds?: string[] | undefined;
}

/**
 * <p>Information about recommendation feedback summaries.</p>
 * @public
 */
export interface RecommendationFeedbackSummary {
  /**
   * <p>The recommendation ID that can be used to track the provided recommendations. Later on
   *          it can be used to collect the feedback.</p>
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * <p>List for storing reactions. Reactions are utf-8 text code for emojis.</p>
   * @public
   */
  Reactions?: Reaction[] | undefined;

  /**
   * <p>The ID of the user that gave the feedback.</p>
   *          <p>
   *          The <code>UserId</code> is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">
   *             Specifying a Principal</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
   * @public
   */
  UserId?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationFeedbackResponse {
  /**
   * <p>Recommendation feedback summaries corresponding to the code review ARN.</p>
   * @public
   */
  RecommendationFeedbackSummaries?: RecommendationFeedbackSummary[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments
   *          unchanged.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsRequest {
  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
   *       </p>
   * @public
   */
  CodeReviewArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RecommendationCategory = {
  AWS_BEST_PRACTICES: "AWSBestPractices",
  AWS_CLOUDFORMATION_ISSUES: "AWSCloudFormationIssues",
  CODE_INCONSISTENCIES: "CodeInconsistencies",
  CODE_MAINTENANCE_ISSUES: "CodeMaintenanceIssues",
  CONCURRENCY_ISSUES: "ConcurrencyIssues",
  DUPLICATE_CODE: "DuplicateCode",
  INPUT_VALIDATIONS: "InputValidations",
  JAVA_BEST_PRACTICES: "JavaBestPractices",
  PYTHON_BEST_PRACTICES: "PythonBestPractices",
  RESOURCE_LEAKS: "ResourceLeaks",
  SECURITY_ISSUES: "SecurityIssues",
} as const;

/**
 * @public
 */
export type RecommendationCategory = (typeof RecommendationCategory)[keyof typeof RecommendationCategory];

/**
 * <p>Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule.</p>
 * @public
 */
export interface RuleMetadata {
  /**
   * <p>The ID of the rule.</p>
   * @public
   */
  RuleId?: string | undefined;

  /**
   * <p>The name of the rule.</p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>A short description of the rule.</p>
   * @public
   */
  ShortDescription?: string | undefined;

  /**
   * <p>A long description of the rule.</p>
   * @public
   */
  LongDescription?: string | undefined;

  /**
   * <p>Tags that are associated with the rule.</p>
   * @public
   */
  RuleTags?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Severity = {
  CRITICAL: "Critical",
  HIGH: "High",
  INFO: "Info",
  LOW: "Low",
  MEDIUM: "Medium",
} as const;

/**
 * @public
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

/**
 * <p>Information about recommendations.</p>
 * @public
 */
export interface RecommendationSummary {
  /**
   * <p>Name of the file on which a recommendation is provided.</p>
   * @public
   */
  FilePath?: string | undefined;

  /**
   * <p>The recommendation ID that can be used to track the provided recommendations. Later on
   *          it can be used to collect the feedback.</p>
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * <p>Start line from where the recommendation is applicable in the source commit or source
   *          branch.</p>
   * @public
   */
  StartLine?: number | undefined;

  /**
   * <p>Last line where the recommendation is applicable in the source commit or source branch.
   *          For a single line comment the start line and end line values are the same.</p>
   * @public
   */
  EndLine?: number | undefined;

  /**
   * <p>A description of the recommendation generated by CodeGuru Reviewer for the lines of code between
   *          the start line and the end line.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of a recommendation.</p>
   * @public
   */
  RecommendationCategory?: RecommendationCategory | undefined;

  /**
   * <p>Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule.</p>
   * @public
   */
  RuleMetadata?: RuleMetadata | undefined;

  /**
   * <p>The severity of the issue in the code that generated this recommendation.</p>
   * @public
   */
  Severity?: Severity | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * <p>List of recommendations for the requested code review.</p>
   * @public
   */
  RecommendationSummaries?: RecommendationSummary[] | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoryAssociationsRequest {
  /**
   * <p>List of provider types to use as a filter.</p>
   * @public
   */
  ProviderTypes?: ProviderType[] | undefined;

  /**
   * <p>List of repository association states to use as a filter.</p>
   *          <p>The valid repository association states are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Associated</b>: The repository association is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Associating</b>: CodeGuru Reviewer is:</p>
   *                <ul>
   *                   <li>
   *                      <p>Setting up pull request notifications. This is required
   *                      for pull requests to trigger a CodeGuru Reviewer review.</p>
   *                      <note>
   *                         <p>If your repository <code>ProviderType</code> is <code>GitHub</code>, <code>GitHub Enterprise Server</code>, or <code>Bitbucket</code>, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered.</p>
   *                      </note>
   *                   </li>
   *                   <li>
   *                      <p>Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Failed</b>: The repository failed to associate or disassociate.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Disassociating</b>: CodeGuru Reviewer is removing the repository's pull request notifications and source code access.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Disassociated</b>: CodeGuru Reviewer successfully disassociated the repository. You can create a new association with this repository if you want to review source code in it later. You can control access to code reviews created in anassociated repository with tags after it has been disassociated. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-using-tags.html">Using tags to control access to associated repositories</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  States?: RepositoryAssociationState[] | undefined;

  /**
   * <p>List of repository names to use as a filter.</p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>List of owners to use as a filter. For Amazon Web Services CodeCommit, it is the name of the
   *          CodeCommit account that was used to associate the repository. For other repository source
   *          providers, such as Bitbucket and GitHub Enterprise Server, this is name of the account that
   *          was used to associate the repository. </p>
   * @public
   */
  Owners?: string[] | undefined;

  /**
   * <p>The maximum number of repository association results returned by
   *             <code>ListRepositoryAssociations</code> in paginated output. When this parameter is
   *          used, <code>ListRepositoryAssociations</code> only returns <code>maxResults</code> results
   *          in a single page with a <code>nextToken</code> response element. The remaining results of
   *          the initial request can be seen by sending another <code>ListRepositoryAssociations</code>
   *          request with the returned <code>nextToken</code> value. This value can be between 1 and
   *          100. If this parameter is not used, <code>ListRepositoryAssociations</code> returns up to
   *          100 results and a <code>nextToken</code> value if applicable. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListRepositoryAssociations</code> request where <code>maxResults</code> was used
   *          and the results exceeded the value of that parameter. Pagination continues from the end of
   *          the previous results that returned the <code>nextToken</code> value. </p>
   *          <note>
   *             <p>Treat this token as an opaque identifier that is only used to retrieve the next items
   *             in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Summary information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a> operation returns a list of
 *             <code>RepositoryAssociationSummary</code> objects.</p>
 * @public
 */
export interface RepositoryAssociationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p>
   * @public
   */
  AssociationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services CodeStar Connections connection. Its format is <code>arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id</code>. For more information, see <a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html">Connection</a> in the <i>Amazon Web Services CodeStar Connections API Reference</i>.</p>
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * <p>The time, in milliseconds since the epoch, since the repository association was last
   *          updated.</p>
   * @public
   */
  LastUpdatedTimeStamp?: Date | undefined;

  /**
   * <p>The repository association ID.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The name of the repository association.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the
   *       account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository.
   *       For an S3 repository, it can be the username or Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The provider type of the repository association.</p>
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * <p>The state of the repository association.</p>
   *          <p>The valid repository association states are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Associated</b>: The repository association is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Associating</b>: CodeGuru Reviewer is:</p>
   *                <ul>
   *                   <li>
   *                      <p>Setting up pull request notifications. This is required
   *                      for pull requests to trigger a CodeGuru Reviewer review.</p>
   *                      <note>
   *                         <p>If your repository <code>ProviderType</code> is <code>GitHub</code>, <code>GitHub Enterprise Server</code>, or <code>Bitbucket</code>, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered.</p>
   *                      </note>
   *                   </li>
   *                   <li>
   *                      <p>Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Failed</b>: The repository failed to associate or disassociate.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Disassociating</b>: CodeGuru Reviewer is removing the repository's pull request notifications and source code access.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Disassociated</b>: CodeGuru Reviewer successfully disassociated the repository. You can create a new association with this repository if you want to review source code in it later. You can control access to code reviews created in anassociated repository with tags after it has been disassociated. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-using-tags.html">Using tags to control access to associated repositories</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: RepositoryAssociationState | undefined;
}

/**
 * @public
 */
export interface ListRepositoryAssociationsResponse {
  /**
   * <p>A list of repository associations that meet the criteria of the request.</p>
   * @public
   */
  RepositoryAssociationSummaries?: RepositoryAssociationSummary[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListRecommendations</code>
   *          request. When the results of a <code>ListRecommendations</code> request exceed
   *             <code>maxResults</code>, this value can be used to retrieve the next page of results.
   *          This value is <code>null</code> when there are no more results to return. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p>
   *          <ul>
   *             <li>
   *                <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
   * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   * 					keys are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>An optional field known as a <i>tag value</i> (for example,
   * 					<code>111122223333</code>, <code>Production</code>, or a team name).
   * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
   * 					values are case sensitive.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutRecommendationFeedbackRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
   *       </p>
   * @public
   */
  CodeReviewArn: string | undefined;

  /**
   * <p>The recommendation ID that can be used to track the provided recommendations and then to
   *          collect the feedback.</p>
   * @public
   */
  RecommendationId: string | undefined;

  /**
   * <p>List for storing reactions. Reactions are utf-8 text code for emojis. If you send an
   *          empty list it clears all your feedback.</p>
   * @public
   */
  Reactions: Reaction[] | undefined;
}

/**
 * @public
 */
export interface PutRecommendationFeedbackResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p>
   *          <ul>
   *             <li>
   *                <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
   * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   * 					keys are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>An optional field known as a <i>tag value</i> (for example,
   * 					<code>111122223333</code>, <code>Production</code>, or a team name).
   * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
   * 					values are case sensitive.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of the keys for each tag you want to remove from an associated repository.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

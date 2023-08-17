// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CodeGuruReviewerServiceException as __BaseException } from "./CodeGuruReviewerServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
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
 */
export interface KMSKeyDetails {
  /**
   * @public
   * <p>The ID of the Amazon Web Services KMS key that is associated with a repository association.</p>
   */
  KMSKeyId?: string;

  /**
   * @public
   * <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key
   *          Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed
   *             (<code>CUSTOMER_MANAGED_CMK</code>).</p>
   */
  EncryptionOption?: EncryptionOption | string;
}

/**
 * @public
 * <p>Information about a third-party source repository connected to CodeGuru Reviewer.</p>
 */
export interface ThirdPartySourceRepository {
  /**
   * @public
   * <p>The name of the third party source repository.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services CodeStar Connections connection. Its format is <code>arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id</code>. For more information, see <a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html">Connection</a> in the <i>Amazon Web Services CodeStar Connections API Reference</i>.</p>
   */
  ConnectionArn: string | undefined;

  /**
   * @public
   * <p>The owner of the repository. For a GitHub, GitHub Enterprise, or Bitbucket repository,
   *          this is the username for the account that owns the repository. For an S3 repository, this
   *          can be the username or Amazon Web Services account ID </p>
   */
  Owner: string | undefined;
}

/**
 * @public
 * <p>Information about an Amazon Web Services CodeCommit repository. The CodeCommit repository must be in
 *          the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are
 *          configured.</p>
 */
export interface CodeCommitRepository {
  /**
   * @public
   * <p>The name of the Amazon Web Services CodeCommit repository. For more information, see <a href="https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetRepository.html#CodeCommit-GetRepository-request-repositoryName">repositoryName</a> in the <i>Amazon Web Services CodeCommit API
   *          Reference</i>.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Information about a repository in an S3 bucket.</p>
 */
export interface S3Repository {
  /**
   * @public
   * <p>The name of the repository in the S3 bucket.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name of the S3 bucket used for associating a new S3 repository. It must begin with <code>codeguru-reviewer-</code>. </p>
   */
  BucketName: string | undefined;
}

/**
 * @public
 * <p>Information about an associated Amazon Web Services CodeCommit repository or an associated repository
 *          that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This
 *             <code>Repository</code> object is not used if your source code is in an associated
 *          GitHub repository.</p>
 */
export interface Repository {
  /**
   * @public
   * <p>Information about an Amazon Web Services CodeCommit repository.</p>
   */
  CodeCommit?: CodeCommitRepository;

  /**
   * @public
   * <p> Information about a Bitbucket repository. </p>
   */
  Bitbucket?: ThirdPartySourceRepository;

  /**
   * @public
   * <p>Information about a GitHub Enterprise Server repository.</p>
   */
  GitHubEnterpriseServer?: ThirdPartySourceRepository;

  /**
   * @public
   * <p>Information about a repository in an S3 bucket.</p>
   */
  S3Bucket?: S3Repository;
}

/**
 * @public
 */
export interface AssociateRepositoryRequest {
  /**
   * @public
   * <p>The repository to associate.</p>
   */
  Repository: Repository | undefined;

  /**
   * @public
   * <p>Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository
   *          associations if there are failures and retries.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
   * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   * 					keys are case sensitive.</p>
   * 			         </li>
   *             <li>
   * 				           <p>An optional field known as a <i>tag value</i> (for example,
   * 					<code>111122223333</code>, <code>Production</code>, or a team name).
   * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
   * 					values are case sensitive.</p>
   * 			         </li>
   *          </ul>
   */
  Tags?: Record<string, string>;

  /**
   * @public
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
   */
  KMSKeyDetails?: KMSKeyDetails;
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
 * @public
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
 */
export interface CodeArtifacts {
  /**
   * @public
   * <p>The S3 object key for a source code .zip file. This is required for all code
   *          reviews.</p>
   */
  SourceCodeArtifactsObjectKey: string | undefined;

  /**
   * @public
   * <p>The S3 object key for a build artifacts .zip file that contains .jar or .class files.
   *          This is required for a code review with security analysis. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/working-with-cicd.html">Create
   *             code reviews with GitHub Actions</a> in the <i>Amazon CodeGuru Reviewer User
   *             Guide</i>.</p>
   */
  BuildArtifactsObjectKey?: string;
}

/**
 * @public
 * <p>Specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object that contains
 *          the S3 object keys for a source code .zip file and for a build artifacts .zip file that
 *          contains .jar or .class files.</p>
 */
export interface S3RepositoryDetails {
  /**
   * @public
   * <p>The name of the S3 bucket used for associating a new S3 repository. It must begin with <code>codeguru-reviewer-</code>. </p>
   */
  BucketName?: string;

  /**
   * @public
   * <p>A <code>CodeArtifacts</code> object. The <code>CodeArtifacts</code> object includes the
   *          S3 object key for a source code .zip file and for a build artifacts .zip file that contains
   *          .jar or .class files.</p>
   */
  CodeArtifacts?: CodeArtifacts;
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
 * @public
 * <p>Information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html">DescribeRepositoryAssociation</a> operation returns a
 *             <code>RepositoryAssociation</code> object.</p>
 */
export interface RepositoryAssociation {
  /**
   * @public
   * <p>The ID of the repository association.</p>
   */
  AssociationId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) identifying the repository association.</p>
   */
  AssociationArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services CodeStar Connections connection. Its format is <code>arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id</code>. For more information, see <a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html">Connection</a> in the <i>Amazon Web Services CodeStar Connections API Reference</i>.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The name of the repository.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the
   *       account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository.
   *       For an S3 repository, it can be the username or Amazon Web Services account ID.</p>
   */
  Owner?: string;

  /**
   * @public
   * <p>The provider type of the repository association.</p>
   */
  ProviderType?: ProviderType | string;

  /**
   * @public
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
   */
  State?: RepositoryAssociationState | string;

  /**
   * @public
   * <p>A description of why the repository association is in the current state.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the repository association was last
   *          updated.</p>
   */
  LastUpdatedTimeStamp?: Date;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the repository association was
   *          created.</p>
   */
  CreatedTimeStamp?: Date;

  /**
   * @public
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
   */
  KMSKeyDetails?: KMSKeyDetails;

  /**
   * @public
   * <p>Specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object that contains
   *          the S3 object keys for a source code .zip file and for a build artifacts .zip file that
   *          contains .jar or .class files.</p>
   */
  S3RepositoryDetails?: S3RepositoryDetails;
}

/**
 * @public
 */
export interface AssociateRepositoryResponse {
  /**
   * @public
   * <p>Information about the repository association.</p>
   */
  RepositoryAssociation?: RepositoryAssociation;

  /**
   * @public
   * <p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
   * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   * 					keys are case sensitive.</p>
   * 			         </li>
   *             <li>
   * 				           <p>An optional field known as a <i>tag value</i> (for example,
   * 					<code>111122223333</code>, <code>Production</code>, or a team name).
   * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
   * 					values are case sensitive.</p>
   * 			         </li>
   *          </ul>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>The requested operation would cause a conflict with the current state of a service
 *          resource associated with the request. Resolve the conflict before retrying this request.
 *       </p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The server encountered an internal error and is unable to complete the request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * @public
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The input fails to satisfy the specified constraints.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the tip of a branch in an associated
 *          repository.</p>
 */
export interface RepositoryHeadSourceCodeType {
  /**
   * @public
   * <p>The name of the branch in an associated repository. The
   *             <code>RepositoryHeadSourceCodeType</code> specifies the tip of this branch.</p>
   */
  BranchName: string | undefined;
}

/**
 * @public
 * <p>A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that
 *          specifies a code diff between a source and destination branch in an associated
 *          repository.</p>
 */
export interface BranchDiffSourceCodeType {
  /**
   * @public
   * <p>The source branch for a diff in an associated repository.</p>
   */
  SourceBranchName: string | undefined;

  /**
   * @public
   * <p>The destination branch for a diff in an associated repository.</p>
   */
  DestinationBranchName: string | undefined;
}

/**
 * @public
 * <p>A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that
 *          specifies the commit diff for a pull request on an associated repository. The
 *             <code>SourceCommit</code> and <code>DestinationCommit</code> fields are required to do a
 *          pull request code review.</p>
 */
export interface CommitDiffSourceCodeType {
  /**
   * @public
   * <p>The SHA of the source commit used to generate a commit diff. This field is required for
   *          a pull request code review.</p>
   */
  SourceCommit?: string;

  /**
   * @public
   * <p>The SHA of the destination commit used to generate a commit diff. This field is required
   *          for a pull request code review.</p>
   */
  DestinationCommit?: string;

  /**
   * @public
   * <p>The SHA of the merge base of a commit.</p>
   */
  MergeBaseCommit?: string;
}

/**
 * @public
 * <p>Information about an event. The event might be a push, pull request, scheduled request,
 *          or another type of event.</p>
 */
export interface EventInfo {
  /**
   * @public
   * <p>The name of the event. The possible names are <code>pull_request</code>,
   *             <code>workflow_dispatch</code>, <code>schedule</code>, and <code>push</code>
   *          </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The state of an event. The state might be open, closed, or another state.</p>
   */
  State?: string;
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
 * @public
 * <p>Metadata that is associated with a code review. This applies to both pull request and
 *          repository analysis code reviews.</p>
 */
export interface RequestMetadata {
  /**
   * @public
   * <p>The ID of the request. This is required for a pull request code review.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>An identifier, such as a name or account ID, that is associated with the requester. The
   *             <code>Requester</code> is used to capture the <code>author/actor</code> name of the
   *          event request.</p>
   */
  Requester?: string;

  /**
   * @public
   * <p>Information about the event associated with a code review.</p>
   */
  EventInfo?: EventInfo;

  /**
   * @public
   * <p>The name of the repository vendor used to upload code to an S3 bucket for a CI/CD code
   *          review. For example, if code and artifacts are uploaded to an S3 bucket for a CI/CD code
   *          review by GitHub scripts from a GitHub repository, then the repository association's
   *             <code>ProviderType</code> is <code>S3Bucket</code> and the CI/CD repository vendor name
   *          is GitHub. For more information, see the definition for <code>ProviderType</code> in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a>.</p>
   */
  VendorName?: VendorName | string;
}

/**
 * @public
 * <p>Information about an associated repository in an S3 bucket. The associated repository
 *          contains a source code .zip file and a build artifacts .zip file that contains .jar or
 *          .class files.</p>
 */
export interface S3BucketRepository {
  /**
   * @public
   * <p>The name of the repository when the <code>ProviderType</code> is
   *          <code>S3Bucket</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>An <code>S3RepositoryDetails</code> object that specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object. The <code>CodeArtifacts</code> object includes the S3 object keys for a source code .zip file and for a build artifacts .zip file.</p>
   */
  Details?: S3RepositoryDetails;
}

/**
 * @public
 * <p>Specifies the source code that is analyzed in a code review.</p>
 */
export interface SourceCodeType {
  /**
   * @public
   * <p>A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies a commit diff created by a pull request on an
   *          associated repository.</p>
   */
  CommitDiff?: CommitDiffSourceCodeType;

  /**
   * @public
   * <p>A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the tip of a branch in an associated
   *          repository.</p>
   */
  RepositoryHead?: RepositoryHeadSourceCodeType;

  /**
   * @public
   * <p>A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that
   *          specifies a source branch name and a destination branch name in an associated
   *          repository.</p>
   */
  BranchDiff?: BranchDiffSourceCodeType;

  /**
   * @public
   * <p>Information about an associated repository in an S3 bucket that includes its name and an <code>S3RepositoryDetails</code> object. The <code>S3RepositoryDetails</code> object includes the name of an S3 bucket, an S3 key for a source code .zip file, and an S3 key for a build artifacts .zip file. <code>S3BucketRepository</code> is required in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> for <code>S3BucketRepository</code> based code reviews.</p>
   */
  S3BucketRepository?: S3BucketRepository;

  /**
   * @public
   * <p>Metadata that is associated with a code review. This applies to any type of code review
   *          supported by CodeGuru Reviewer. The <code>RequestMetadaa</code> field captures any event metadata. For
   *          example, it might capture metadata associated with an event trigger, such as a push or a
   *          pull request.</p>
   */
  RequestMetadata?: RequestMetadata;
}

/**
 * @public
 * <p>A code review type that analyzes all code under a specified branch in an associated
 *          repository. The associated repository is specified using its ARN when you call <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>.</p>
 */
export interface RepositoryAnalysis {
  /**
   * @public
   * <p>A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the tip of a branch in an associated
   *          repository.</p>
   */
  RepositoryHead?: RepositoryHeadSourceCodeType;

  /**
   * @public
   * <p>Specifies the source code that is analyzed in a code review.</p>
   */
  SourceCodeType?: SourceCodeType;
}

/**
 * @public
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
 */
export interface CodeReviewType {
  /**
   * @public
   * <p>A code review that analyzes all code under a specified branch in an associated
   *          repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>.</p>
   */
  RepositoryAnalysis: RepositoryAnalysis | undefined;

  /**
   * @public
   * <p>They types of analysis performed during a repository analysis or a pull request review.
   *          You can specify either <code>Security</code>, <code>CodeQuality</code>, or both.</p>
   */
  AnalysisTypes?: (AnalysisType | string)[];
}

/**
 * @public
 */
export interface CreateCodeReviewRequest {
  /**
   * @public
   * <p>The name of the code review. The name of each code review in your Amazon Web Services account must be
   *          unique.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p>
   *          <p>A code review can only be created on an associated repository. This is the ARN of the
   *          associated repository.</p>
   */
  RepositoryAssociationArn: string | undefined;

  /**
   * @public
   * <p>The type of code review to create. This is specified using a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">CodeReviewType</a>
   *          object. You can create a code review only of type <code>RepositoryAnalysis</code>.</p>
   */
  Type: CodeReviewType | undefined;

  /**
   * @public
   * <p>Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate code reviews
   *          if there are failures and retries.</p>
   */
  ClientRequestToken?: string;
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
 * @public
 * <p>Information about the statistics from the code review.</p>
 */
export interface Metrics {
  /**
   * @public
   * <p>
   *             <code>MeteredLinesOfCodeCount</code> is the number of lines of code in the repository
   *          where the code review happened. This does not include non-code lines such as comments and
   *          blank lines.</p>
   */
  MeteredLinesOfCodeCount?: number;

  /**
   * @public
   * <p>
   *             <code>SuppressedLinesOfCodeCount</code> is the number of lines of code in the repository
   *          where the code review happened that CodeGuru Reviewer did not analyze. The lines suppressed in the
   *          analysis is based on the <code>excludeFiles</code> variable in the
   *             <code>aws-codeguru-reviewer.yml</code> file. This number does not include non-code lines
   *          such as comments and blank lines. </p>
   */
  SuppressedLinesOfCodeCount?: number;

  /**
   * @public
   * <p>Total number of recommendations found in the code review.</p>
   */
  FindingsCount?: number;
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
 * @public
 * <p>Information about a code review. A code review belongs to the associated repository that
 *          contains the reviewed code.</p>
 */
export interface CodeReview {
  /**
   * @public
   * <p>The name of the code review.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
   *       </p>
   */
  CodeReviewArn?: string;

  /**
   * @public
   * <p>The name of the repository.</p>
   */
  RepositoryName?: string;

  /**
   * @public
   * <p>The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the
   *       account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository.
   *       For an S3 repository, it can be the username or Amazon Web Services account ID.</p>
   */
  Owner?: string;

  /**
   * @public
   * <p>The type of repository that contains the reviewed code (for example, GitHub or
   *          Bitbucket).</p>
   */
  ProviderType?: ProviderType | string;

  /**
   * @public
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
   */
  State?: JobState | string;

  /**
   * @public
   * <p>The reason for the state of the code review.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the code review was created.</p>
   */
  CreatedTimeStamp?: Date;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the code review was last updated.</p>
   */
  LastUpdatedTimeStamp?: Date;

  /**
   * @public
   * <p>The type of code review.</p>
   */
  Type?: Type | string;

  /**
   * @public
   * <p>The pull request ID for the code review.</p>
   */
  PullRequestId?: string;

  /**
   * @public
   * <p>The type of the source code for the code review.</p>
   */
  SourceCodeType?: SourceCodeType;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> that contains the reviewed source code. You can retrieve
   *          associated repository ARNs by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p>
   */
  AssociationArn?: string;

  /**
   * @public
   * <p>The statistics from the code review.</p>
   */
  Metrics?: Metrics;

  /**
   * @public
   * <p>The types of analysis performed during a repository analysis or a pull request review.
   *          You can specify either <code>Security</code>, <code>CodeQuality</code>, or both.</p>
   */
  AnalysisTypes?: (AnalysisType | string)[];

  /**
   * @public
   * <p>The state of the <code>aws-codeguru-reviewer.yml</code> configuration file that allows
   *          the configuration of the CodeGuru Reviewer analysis. The file either exists, doesn't exist, or exists
   *          with errors at the root directory of your repository.</p>
   */
  ConfigFileState?: ConfigFileState | string;
}

/**
 * @public
 */
export interface CreateCodeReviewResponse {
  /**
   * @public
   * <p>Information about a code review. A code review belongs to the associated repository that
   *          contains the reviewed code.</p>
   */
  CodeReview?: CodeReview;
}

/**
 * @public
 * <p> The resource specified in the request was not found. </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
   *       </p>
   */
  CodeReviewArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCodeReviewResponse {
  /**
   * @public
   * <p>Information about the code review.</p>
   */
  CodeReview?: CodeReview;
}

/**
 * @public
 */
export interface DescribeRecommendationFeedbackRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
   *       </p>
   */
  CodeReviewArn: string | undefined;

  /**
   * @public
   * <p>The recommendation ID that can be used to track the provided recommendations and then to
   *          collect the feedback.</p>
   */
  RecommendationId: string | undefined;

  /**
   * @public
   * <p>Optional parameter to describe the feedback for a given user. If this is not supplied,
   *          it defaults to the user making the request.</p>
   *          <p>
   *          The <code>UserId</code> is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">
   *             Specifying a Principal</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
   */
  UserId?: string;
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
 * @public
 * <p>Information about the recommendation feedback.</p>
 */
export interface RecommendationFeedback {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
   *       </p>
   */
  CodeReviewArn?: string;

  /**
   * @public
   * <p>The recommendation ID that can be used to track the provided recommendations. Later on
   *          it can be used to collect the feedback.</p>
   */
  RecommendationId?: string;

  /**
   * @public
   * <p>List for storing reactions. Reactions are utf-8 text code for emojis. You can send an
   *          empty list to clear off all your feedback.</p>
   */
  Reactions?: (Reaction | string)[];

  /**
   * @public
   * <p>The ID of the user that made the API call.</p>
   *          <p>
   *          The <code>UserId</code> is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">
   *             Specifying a Principal</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
   */
  UserId?: string;

  /**
   * @public
   * <p>The time at which the feedback was created.</p>
   */
  CreatedTimeStamp?: Date;

  /**
   * @public
   * <p>The time at which the feedback was last updated.</p>
   */
  LastUpdatedTimeStamp?: Date;
}

/**
 * @public
 */
export interface DescribeRecommendationFeedbackResponse {
  /**
   * @public
   * <p>The recommendation feedback given by the user.</p>
   */
  RecommendationFeedback?: RecommendationFeedback;
}

/**
 * @public
 */
export interface DescribeRepositoryAssociationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p>
   */
  AssociationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoryAssociationResponse {
  /**
   * @public
   * <p>Information about the repository association.</p>
   */
  RepositoryAssociation?: RepositoryAssociation;

  /**
   * @public
   * <p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
   * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   * 					keys are case sensitive.</p>
   * 			         </li>
   *             <li>
   * 				           <p>An optional field known as a <i>tag value</i> (for example,
   * 					<code>111122223333</code>, <code>Production</code>, or a team name).
   * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
   * 					values are case sensitive.</p>
   * 			         </li>
   *          </ul>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>The resource specified in the request was not found.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p>
   */
  AssociationArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateRepositoryResponse {
  /**
   * @public
   * <p>Information about the disassociated repository.</p>
   */
  RepositoryAssociation?: RepositoryAssociation;

  /**
   * @public
   * <p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
   * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   * 					keys are case sensitive.</p>
   * 			         </li>
   *             <li>
   * 				           <p>An optional field known as a <i>tag value</i> (for example,
   * 					<code>111122223333</code>, <code>Production</code>, or a team name).
   * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
   * 					values are case sensitive.</p>
   * 			         </li>
   *          </ul>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListCodeReviewsRequest {
  /**
   * @public
   * <p>List of provider types for filtering that needs to be applied before displaying the
   *          result. For example, <code>providerTypes=[GitHub]</code> lists code reviews from
   *          GitHub.</p>
   */
  ProviderTypes?: (ProviderType | string)[];

  /**
   * @public
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
   */
  States?: (JobState | string)[];

  /**
   * @public
   * <p>List of repository names for filtering that needs to be applied before displaying the
   *          result.</p>
   */
  RepositoryNames?: string[];

  /**
   * @public
   * <p>The type of code reviews to list in the response.</p>
   */
  Type: Type | string | undefined;

  /**
   * @public
   * <p>The maximum number of results that are returned per call. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments
   *          unchanged.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Information about metrics summaries.</p>
 */
export interface MetricsSummary {
  /**
   * @public
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
   */
  MeteredLinesOfCodeCount?: number;

  /**
   * @public
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
   */
  SuppressedLinesOfCodeCount?: number;

  /**
   * @public
   * <p>Total number of recommendations found in the code review.</p>
   */
  FindingsCount?: number;
}

/**
 * @public
 * <p>Information about the summary of the code review.</p>
 */
export interface CodeReviewSummary {
  /**
   * @public
   * <p>The name of the code review.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
   *       </p>
   */
  CodeReviewArn?: string;

  /**
   * @public
   * <p>The name of the repository.</p>
   */
  RepositoryName?: string;

  /**
   * @public
   * <p>The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the
   *       account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository.
   *       For an S3 repository, it can be the username or Amazon Web Services account ID.</p>
   */
  Owner?: string;

  /**
   * @public
   * <p>The provider type of the repository association.</p>
   */
  ProviderType?: ProviderType | string;

  /**
   * @public
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
   */
  State?: JobState | string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the code review was created.</p>
   */
  CreatedTimeStamp?: Date;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the code review was last updated.</p>
   */
  LastUpdatedTimeStamp?: Date;

  /**
   * @public
   * <p>The type of the code review.</p>
   */
  Type?: Type | string;

  /**
   * @public
   * <p>The pull request ID for the code review.</p>
   */
  PullRequestId?: string;

  /**
   * @public
   * <p>The statistics from the code review.</p>
   */
  MetricsSummary?: MetricsSummary;

  /**
   * @public
   * <p>Specifies the source code that is analyzed in a code review.</p>
   */
  SourceCodeType?: SourceCodeType;
}

/**
 * @public
 */
export interface ListCodeReviewsResponse {
  /**
   * @public
   * <p>A list of code reviews that meet the criteria of the request.</p>
   */
  CodeReviewSummaries?: CodeReviewSummary[];

  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRecommendationFeedbackRequest {
  /**
   * @public
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments
   *          unchanged.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that are returned per call. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
   *       </p>
   */
  CodeReviewArn: string | undefined;

  /**
   * @public
   * <p>An Amazon Web Services user's account ID or Amazon Resource Name (ARN). Use this ID to query the
   *          recommendation feedback for a code review from that user.</p>
   *          <p>
   *          The <code>UserId</code> is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">
   *             Specifying a Principal</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
   */
  UserIds?: string[];

  /**
   * @public
   * <p>Used to query the recommendation feedback for a given recommendation.</p>
   */
  RecommendationIds?: string[];
}

/**
 * @public
 * <p>Information about recommendation feedback summaries.</p>
 */
export interface RecommendationFeedbackSummary {
  /**
   * @public
   * <p>The recommendation ID that can be used to track the provided recommendations. Later on
   *          it can be used to collect the feedback.</p>
   */
  RecommendationId?: string;

  /**
   * @public
   * <p>List for storing reactions. Reactions are utf-8 text code for emojis.</p>
   */
  Reactions?: (Reaction | string)[];

  /**
   * @public
   * <p>The ID of the user that gave the feedback.</p>
   *          <p>
   *          The <code>UserId</code> is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">
   *             Specifying a Principal</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
   */
  UserId?: string;
}

/**
 * @public
 */
export interface ListRecommendationFeedbackResponse {
  /**
   * @public
   * <p>Recommendation feedback summaries corresponding to the code review ARN.</p>
   */
  RecommendationFeedbackSummaries?: RecommendationFeedbackSummary[];

  /**
   * @public
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments
   *          unchanged.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRecommendationsRequest {
  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that are returned per call. The default is 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
   *       </p>
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
 * @public
 * <p>Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule.</p>
 */
export interface RuleMetadata {
  /**
   * @public
   * <p>The ID of the rule.</p>
   */
  RuleId?: string;

  /**
   * @public
   * <p>The name of the rule.</p>
   */
  RuleName?: string;

  /**
   * @public
   * <p>A short description of the rule.</p>
   */
  ShortDescription?: string;

  /**
   * @public
   * <p>A long description of the rule.</p>
   */
  LongDescription?: string;

  /**
   * @public
   * <p>Tags that are associated with the rule.</p>
   */
  RuleTags?: string[];
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
 * @public
 * <p>Information about recommendations.</p>
 */
export interface RecommendationSummary {
  /**
   * @public
   * <p>Name of the file on which a recommendation is provided.</p>
   */
  FilePath?: string;

  /**
   * @public
   * <p>The recommendation ID that can be used to track the provided recommendations. Later on
   *          it can be used to collect the feedback.</p>
   */
  RecommendationId?: string;

  /**
   * @public
   * <p>Start line from where the recommendation is applicable in the source commit or source
   *          branch.</p>
   */
  StartLine?: number;

  /**
   * @public
   * <p>Last line where the recommendation is applicable in the source commit or source branch.
   *          For a single line comment the start line and end line values are the same.</p>
   */
  EndLine?: number;

  /**
   * @public
   * <p>A description of the recommendation generated by CodeGuru Reviewer for the lines of code between
   *          the start line and the end line.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of a recommendation.</p>
   */
  RecommendationCategory?: RecommendationCategory | string;

  /**
   * @public
   * <p>Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule.</p>
   */
  RuleMetadata?: RuleMetadata;

  /**
   * @public
   * <p>The severity of the issue in the code that generated this recommendation.</p>
   */
  Severity?: Severity | string;
}

/**
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * @public
   * <p>List of recommendations for the requested code review.</p>
   */
  RecommendationSummaries?: RecommendationSummary[];

  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRepositoryAssociationsRequest {
  /**
   * @public
   * <p>List of provider types to use as a filter.</p>
   */
  ProviderTypes?: (ProviderType | string)[];

  /**
   * @public
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
   */
  States?: (RepositoryAssociationState | string)[];

  /**
   * @public
   * <p>List of repository names to use as a filter.</p>
   */
  Names?: string[];

  /**
   * @public
   * <p>List of owners to use as a filter. For Amazon Web Services CodeCommit, it is the name of the
   *          CodeCommit account that was used to associate the repository. For other repository source
   *          providers, such as Bitbucket and GitHub Enterprise Server, this is name of the account that
   *          was used to associate the repository. </p>
   */
  Owners?: string[];

  /**
   * @public
   * <p>The maximum number of repository association results returned by
   *             <code>ListRepositoryAssociations</code> in paginated output. When this parameter is
   *          used, <code>ListRepositoryAssociations</code> only returns <code>maxResults</code> results
   *          in a single page with a <code>nextToken</code> response element. The remaining results of
   *          the initial request can be seen by sending another <code>ListRepositoryAssociations</code>
   *          request with the returned <code>nextToken</code> value. This value can be between 1 and
   *          100. If this parameter is not used, <code>ListRepositoryAssociations</code> returns up to
   *          100 results and a <code>nextToken</code> value if applicable. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>ListRepositoryAssociations</code> request where <code>maxResults</code> was used
   *          and the results exceeded the value of that parameter. Pagination continues from the end of
   *          the previous results that returned the <code>nextToken</code> value. </p>
   *          <note>
   *             <p>Treat this token as an opaque identifier that is only used to retrieve the next items
   *             in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Summary information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a> operation returns a list of
 *             <code>RepositoryAssociationSummary</code> objects.</p>
 */
export interface RepositoryAssociationSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p>
   */
  AssociationArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services CodeStar Connections connection. Its format is <code>arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id</code>. For more information, see <a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html">Connection</a> in the <i>Amazon Web Services CodeStar Connections API Reference</i>.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, since the repository association was last
   *          updated.</p>
   */
  LastUpdatedTimeStamp?: Date;

  /**
   * @public
   * <p>The repository association ID.</p>
   */
  AssociationId?: string;

  /**
   * @public
   * <p>The name of the repository association.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the
   *       account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository.
   *       For an S3 repository, it can be the username or Amazon Web Services account ID.</p>
   */
  Owner?: string;

  /**
   * @public
   * <p>The provider type of the repository association.</p>
   */
  ProviderType?: ProviderType | string;

  /**
   * @public
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
   */
  State?: RepositoryAssociationState | string;
}

/**
 * @public
 */
export interface ListRepositoryAssociationsResponse {
  /**
   * @public
   * <p>A list of repository associations that meet the criteria of the request.</p>
   */
  RepositoryAssociationSummaries?: RepositoryAssociationSummary[];

  /**
   * @public
   * <p>The <code>nextToken</code> value to include in a future <code>ListRecommendations</code>
   *          request. When the results of a <code>ListRecommendations</code> request exceed
   *             <code>maxResults</code>, this value can be used to retrieve the next page of results.
   *          This value is <code>null</code> when there are no more results to return. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
   * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   * 					keys are case sensitive.</p>
   * 			         </li>
   *             <li>
   * 				           <p>An optional field known as a <i>tag value</i> (for example,
   * 					<code>111122223333</code>, <code>Production</code>, or a team name).
   * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
   * 					values are case sensitive.</p>
   * 			         </li>
   *          </ul>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PutRecommendationFeedbackRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
   *       </p>
   */
  CodeReviewArn: string | undefined;

  /**
   * @public
   * <p>The recommendation ID that can be used to track the provided recommendations and then to
   *          collect the feedback.</p>
   */
  RecommendationId: string | undefined;

  /**
   * @public
   * <p>List for storing reactions. Reactions are utf-8 text code for emojis. If you send an
   *          empty list it clears all your feedback.</p>
   */
  Reactions: (Reaction | string)[] | undefined;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
   * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   * 					keys are case sensitive.</p>
   * 			         </li>
   *             <li>
   * 				           <p>An optional field known as a <i>tag value</i> (for example,
   * 					<code>111122223333</code>, <code>Production</code>, or a team name).
   * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
   * 					values are case sensitive.</p>
   * 			         </li>
   *          </ul>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of the keys for each tag you want to remove from an associated repository.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

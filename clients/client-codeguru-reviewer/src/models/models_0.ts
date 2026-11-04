// smithy-typescript generated code
import type {
  AnalysisType,
  ConfigFileState,
  EncryptionOption,
  JobState,
  ProviderType,
  Reaction,
  RecommendationCategory,
  RepositoryAssociationState,
  Severity,
  Type,
  VendorName,
} from "./enums";

/**
 * An object that contains:
 *
 * - The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (`AWS_OWNED_CMK`) or customer managed (`CUSTOMER_MANAGED_CMK`).
 * - The ID of the Amazon Web Services KMS key that is associated with a repository association.
 *
 * @public
 */
export interface KMSKeyDetails {
  /**
   * The ID of the Amazon Web Services KMS key that is associated with a repository association.
   *
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (`AWS_OWNED_CMK`) or customer managed (`CUSTOMER_MANAGED_CMK`).
   *
   * @public
   */
  EncryptionOption?: EncryptionOption | undefined;
}

/**
 * Information about a third-party source repository connected to CodeGuru Reviewer.
 *
 * @public
 */
export interface ThirdPartySourceRepository {
  /**
   * The name of the third party source repository.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services CodeStar Connections connection. Its format is `arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id`. For more information, see [Connection](https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html) in the *Amazon Web Services CodeStar Connections API Reference*.
   *
   * @public
   */
  ConnectionArn: string | undefined;

  /**
   * The owner of the repository. For a GitHub, GitHub Enterprise, or Bitbucket repository, this is the username for the account that owns the repository. For an S3 repository, this can be the username or Amazon Web Services account ID
   *
   * @public
   */
  Owner: string | undefined;
}

/**
 * Information about an Amazon Web Services CodeCommit repository. The CodeCommit repository must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.
 *
 * @public
 */
export interface CodeCommitRepository {
  /**
   * The name of the Amazon Web Services CodeCommit repository. For more information, see [repositoryName](https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetRepository.html#CodeCommit-GetRepository-request-repositoryName) in the *Amazon Web Services CodeCommit API Reference*.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Information about a repository in an S3 bucket.
 *
 * @public
 */
export interface S3Repository {
  /**
   * The name of the repository in the S3 bucket.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the S3 bucket used for associating a new S3 repository. It must begin with `codeguru-reviewer-`.
   *
   * @public
   */
  BucketName: string | undefined;
}

/**
 * Information about an associated Amazon Web Services CodeCommit repository or an associated repository that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This `Repository` object is not used if your source code is in an associated GitHub repository.
 *
 * @public
 */
export interface Repository {
  /**
   * Information about an Amazon Web Services CodeCommit repository.
   *
   * @public
   */
  CodeCommit?: CodeCommitRepository | undefined;

  /**
   * Information about a Bitbucket repository.
   *
   * @public
   */
  Bitbucket?: ThirdPartySourceRepository | undefined;

  /**
   * Information about a GitHub Enterprise Server repository.
   *
   * @public
   */
  GitHubEnterpriseServer?: ThirdPartySourceRepository | undefined;

  /**
   * Information about a repository in an S3 bucket.
   *
   * @public
   */
  S3Bucket?: S3Repository | undefined;
}

/**
 * @public
 */
export interface AssociateRepositoryRequest {
  /**
   * The repository to associate.
   *
   * @public
   */
  Repository: Repository | undefined;

  /**
   * Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository associations if there are failures and retries.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:
   *
   * - A *tag key* (for example, `CostCenter`, `Environment`, `Project`, or `Secret`). Tag keys are case sensitive.
   * - An optional field known as a *tag value* (for example, `111122223333`, `Production`, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A `KMSKeyDetails` object that contains:
   *
   * - The encryption option for this repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (`AWS_OWNED_CMK`) or customer managed (`CUSTOMER_MANAGED_CMK`).
   * - The ID of the Amazon Web Services KMS key that is associated with this repository association.
   *
   * @public
   */
  KMSKeyDetails?: KMSKeyDetails | undefined;
}

/**
 * Code artifacts are source code artifacts and build artifacts used in a repository analysis or a pull request review.
 *
 * - Source code artifacts are source code files in a Git repository that are compressed into a .zip file.
 * - Build artifacts are .jar or .class files that are compressed in a .zip file.
 *
 * @public
 */
export interface CodeArtifacts {
  /**
   * The S3 object key for a source code .zip file. This is required for all code reviews.
   *
   * @public
   */
  SourceCodeArtifactsObjectKey: string | undefined;

  /**
   * The S3 object key for a build artifacts .zip file that contains .jar or .class files. This is required for a code review with security analysis. For more information, see [Create code reviews with GitHub Actions](https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/working-with-cicd.html) in the *Amazon CodeGuru Reviewer User Guide*.
   *
   * @public
   */
  BuildArtifactsObjectKey?: string | undefined;
}

/**
 * Specifies the name of an S3 bucket and a `CodeArtifacts` object that contains the S3 object keys for a source code .zip file and for a build artifacts .zip file that contains .jar or .class files.
 *
 * @public
 */
export interface S3RepositoryDetails {
  /**
   * The name of the S3 bucket used for associating a new S3 repository. It must begin with `codeguru-reviewer-`.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * A `CodeArtifacts` object. The `CodeArtifacts` object includes the S3 object key for a source code .zip file and for a build artifacts .zip file that contains .jar or .class files.
   *
   * @public
   */
  CodeArtifacts?: CodeArtifacts | undefined;
}

/**
 * Information about a repository association. The [DescribeRepositoryAssociation](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html) operation returns a `RepositoryAssociation` object.
 *
 * @public
 */
export interface RepositoryAssociation {
  /**
   * The ID of the repository association.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) identifying the repository association.
   *
   * @public
   */
  AssociationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services CodeStar Connections connection. Its format is `arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id`. For more information, see [Connection](https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html) in the *Amazon Web Services CodeStar Connections API Reference*.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The name of the repository.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository. For an S3 repository, it can be the username or Amazon Web Services account ID.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The provider type of the repository association.
   *
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * The state of the repository association.
   *
   * The valid repository association states are:
   *
   * - **Associated**: The repository association is complete.
   * - **Associating**: CodeGuru Reviewer is:
   *
   *   - Setting up pull request notifications. This is required for pull requests to trigger a CodeGuru Reviewer review.
   *
   *     > **Note:** If your repository `ProviderType` is `GitHub`, `GitHub Enterprise Server`, or `Bitbucket`, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered.
   *   - Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository.
   * - **Failed**: The repository failed to associate or disassociate.
   * - **Disassociating**: CodeGuru Reviewer is removing the repository's pull request notifications and source code access.
   * - **Disassociated**: CodeGuru Reviewer successfully disassociated the repository. You can create a new association with this repository if you want to review source code in it later. You can control access to code reviews created in anassociated repository with tags after it has been disassociated. For more information, see [Using tags to control access to associated repositories](https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-using-tags.html) in the *Amazon CodeGuru Reviewer User Guide*.
   *
   * @public
   */
  State?: RepositoryAssociationState | undefined;

  /**
   * A description of why the repository association is in the current state.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the repository association was last updated.
   *
   * @public
   */
  LastUpdatedTimeStamp?: Date | undefined;

  /**
   * The time, in milliseconds since the epoch, when the repository association was created.
   *
   * @public
   */
  CreatedTimeStamp?: Date | undefined;

  /**
   * A `KMSKeyDetails` object that contains:
   *
   * - The encryption option for this repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (`AWS_OWNED_CMK`) or customer managed (`CUSTOMER_MANAGED_CMK`).
   * - The ID of the Amazon Web Services KMS key that is associated with this repository association.
   *
   * @public
   */
  KMSKeyDetails?: KMSKeyDetails | undefined;

  /**
   * Specifies the name of an S3 bucket and a `CodeArtifacts` object that contains the S3 object keys for a source code .zip file and for a build artifacts .zip file that contains .jar or .class files.
   *
   * @public
   */
  S3RepositoryDetails?: S3RepositoryDetails | undefined;
}

/**
 * @public
 */
export interface AssociateRepositoryResponse {
  /**
   * Information about the repository association.
   *
   * @public
   */
  RepositoryAssociation?: RepositoryAssociation | undefined;

  /**
   * An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:
   *
   * - A *tag key* (for example, `CostCenter`, `Environment`, `Project`, or `Secret`). Tag keys are case sensitive.
   * - An optional field known as a *tag value* (for example, `111122223333`, `Production`, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * A [SourceCodeType](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType) that specifies the tip of a branch in an associated repository.
 *
 * @public
 */
export interface RepositoryHeadSourceCodeType {
  /**
   * The name of the branch in an associated repository. The `RepositoryHeadSourceCodeType` specifies the tip of this branch.
   *
   * @public
   */
  BranchName: string | undefined;
}

/**
 * A type of [SourceCodeType](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType) that specifies a code diff between a source and destination branch in an associated repository.
 *
 * @public
 */
export interface BranchDiffSourceCodeType {
  /**
   * The source branch for a diff in an associated repository.
   *
   * @public
   */
  SourceBranchName: string | undefined;

  /**
   * The destination branch for a diff in an associated repository.
   *
   * @public
   */
  DestinationBranchName: string | undefined;
}

/**
 * A type of [SourceCodeType](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType) that specifies the commit diff for a pull request on an associated repository. The `SourceCommit` and `DestinationCommit` fields are required to do a pull request code review.
 *
 * @public
 */
export interface CommitDiffSourceCodeType {
  /**
   * The SHA of the source commit used to generate a commit diff. This field is required for a pull request code review.
   *
   * @public
   */
  SourceCommit?: string | undefined;

  /**
   * The SHA of the destination commit used to generate a commit diff. This field is required for a pull request code review.
   *
   * @public
   */
  DestinationCommit?: string | undefined;

  /**
   * The SHA of the merge base of a commit.
   *
   * @public
   */
  MergeBaseCommit?: string | undefined;
}

/**
 * Information about an event. The event might be a push, pull request, scheduled request, or another type of event.
 *
 * @public
 */
export interface EventInfo {
  /**
   * The name of the event. The possible names are `pull_request`, `workflow_dispatch`, `schedule`, and `push`
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The state of an event. The state might be open, closed, or another state.
   *
   * @public
   */
  State?: string | undefined;
}

/**
 * Metadata that is associated with a code review. This applies to both pull request and repository analysis code reviews.
 *
 * @public
 */
export interface RequestMetadata {
  /**
   * The ID of the request. This is required for a pull request code review.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * An identifier, such as a name or account ID, that is associated with the requester. The `Requester` is used to capture the `author/actor` name of the event request.
   *
   * @public
   */
  Requester?: string | undefined;

  /**
   * Information about the event associated with a code review.
   *
   * @public
   */
  EventInfo?: EventInfo | undefined;

  /**
   * The name of the repository vendor used to upload code to an S3 bucket for a CI/CD code review. For example, if code and artifacts are uploaded to an S3 bucket for a CI/CD code review by GitHub scripts from a GitHub repository, then the repository association's `ProviderType` is `S3Bucket` and the CI/CD repository vendor name is GitHub. For more information, see the definition for `ProviderType` in [RepositoryAssociation](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html).
   *
   * @public
   */
  VendorName?: VendorName | undefined;
}

/**
 * Information about an associated repository in an S3 bucket. The associated repository contains a source code .zip file and a build artifacts .zip file that contains .jar or .class files.
 *
 * @public
 */
export interface S3BucketRepository {
  /**
   * The name of the repository when the `ProviderType` is `S3Bucket`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An `S3RepositoryDetails` object that specifies the name of an S3 bucket and a `CodeArtifacts` object. The `CodeArtifacts` object includes the S3 object keys for a source code .zip file and for a build artifacts .zip file.
   *
   * @public
   */
  Details?: S3RepositoryDetails | undefined;
}

/**
 * Specifies the source code that is analyzed in a code review.
 *
 * @public
 */
export interface SourceCodeType {
  /**
   * A [SourceCodeType](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType) that specifies a commit diff created by a pull request on an associated repository.
   *
   * @public
   */
  CommitDiff?: CommitDiffSourceCodeType | undefined;

  /**
   * A [SourceCodeType](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType) that specifies the tip of a branch in an associated repository.
   *
   * @public
   */
  RepositoryHead?: RepositoryHeadSourceCodeType | undefined;

  /**
   * A type of [SourceCodeType](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType) that specifies a source branch name and a destination branch name in an associated repository.
   *
   * @public
   */
  BranchDiff?: BranchDiffSourceCodeType | undefined;

  /**
   * Information about an associated repository in an S3 bucket that includes its name and an `S3RepositoryDetails` object. The `S3RepositoryDetails` object includes the name of an S3 bucket, an S3 key for a source code .zip file, and an S3 key for a build artifacts .zip file. `S3BucketRepository` is required in [SourceCodeType](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType) for `S3BucketRepository` based code reviews.
   *
   * @public
   */
  S3BucketRepository?: S3BucketRepository | undefined;

  /**
   * Metadata that is associated with a code review. This applies to any type of code review supported by CodeGuru Reviewer. The `RequestMetadaa` field captures any event metadata. For example, it might capture metadata associated with an event trigger, such as a push or a pull request.
   *
   * @public
   */
  RequestMetadata?: RequestMetadata | undefined;
}

/**
 * A code review type that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN when you call [CreateCodeReview](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview).
 *
 * @public
 */
export interface RepositoryAnalysis {
  /**
   * A [SourceCodeType](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType) that specifies the tip of a branch in an associated repository.
   *
   * @public
   */
  RepositoryHead?: RepositoryHeadSourceCodeType | undefined;

  /**
   * Specifies the source code that is analyzed in a code review.
   *
   * @public
   */
  SourceCodeType?: SourceCodeType | undefined;
}

/**
 * The type of a code review. There are two code review types:
 *
 * - `PullRequest` - A code review that is automatically triggered by a pull request on an associated repository.
 * - `RepositoryAnalysis` - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in [CreateCodeReview](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview).
 *
 * @public
 */
export interface CodeReviewType {
  /**
   * A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in [CreateCodeReview](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview).
   *
   * @public
   */
  RepositoryAnalysis: RepositoryAnalysis | undefined;

  /**
   * They types of analysis performed during a repository analysis or a pull request review. You can specify either `Security`, `CodeQuality`, or both.
   *
   * @public
   */
  AnalysisTypes?: AnalysisType[] | undefined;
}

/**
 * @public
 */
export interface CreateCodeReviewRequest {
  /**
   * The name of the code review. The name of each code review in your Amazon Web Services account must be unique.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the [RepositoryAssociation](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html) object. You can retrieve this ARN by calling [ListRepositoryAssociations](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html).
   *
   * A code review can only be created on an associated repository. This is the ARN of the associated repository.
   *
   * @public
   */
  RepositoryAssociationArn: string | undefined;

  /**
   * The type of code review to create. This is specified using a [CodeReviewType](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html) object. You can create a code review only of type `RepositoryAnalysis`.
   *
   * @public
   */
  Type: CodeReviewType | undefined;

  /**
   * Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate code reviews if there are failures and retries.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * Information about the statistics from the code review.
 *
 * @public
 */
export interface Metrics {
  /**
   * `MeteredLinesOfCodeCount` is the number of lines of code in the repository where the code review happened. This does not include non-code lines such as comments and blank lines.
   *
   * @public
   */
  MeteredLinesOfCodeCount?: number | undefined;

  /**
   * `SuppressedLinesOfCodeCount` is the number of lines of code in the repository where the code review happened that CodeGuru Reviewer did not analyze. The lines suppressed in the analysis is based on the `excludeFiles` variable in the `aws-codeguru-reviewer.yml` file. This number does not include non-code lines such as comments and blank lines.
   *
   * @public
   */
  SuppressedLinesOfCodeCount?: number | undefined;

  /**
   * Total number of recommendations found in the code review.
   *
   * @public
   */
  FindingsCount?: number | undefined;
}

/**
 * Information about a code review. A code review belongs to the associated repository that contains the reviewed code.
 *
 * @public
 */
export interface CodeReview {
  /**
   * The name of the code review.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the [CodeReview](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html) object.
   *
   * @public
   */
  CodeReviewArn?: string | undefined;

  /**
   * The name of the repository.
   *
   * @public
   */
  RepositoryName?: string | undefined;

  /**
   * The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository. For an S3 repository, it can be the username or Amazon Web Services account ID.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The type of repository that contains the reviewed code (for example, GitHub or Bitbucket).
   *
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * The valid code review states are:
   *
   * - `Completed`: The code review is complete.
   * - `Pending`: The code review started and has not completed or failed.
   * - `Failed`: The code review failed.
   * - `Deleting`: The code review is being deleted.
   *
   * @public
   */
  State?: JobState | undefined;

  /**
   * The reason for the state of the code review.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, when the code review was created.
   *
   * @public
   */
  CreatedTimeStamp?: Date | undefined;

  /**
   * The time, in milliseconds since the epoch, when the code review was last updated.
   *
   * @public
   */
  LastUpdatedTimeStamp?: Date | undefined;

  /**
   * The type of code review.
   *
   * @public
   */
  Type?: Type | undefined;

  /**
   * The pull request ID for the code review.
   *
   * @public
   */
  PullRequestId?: string | undefined;

  /**
   * The type of the source code for the code review.
   *
   * @public
   */
  SourceCodeType?: SourceCodeType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the [RepositoryAssociation](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html) that contains the reviewed source code. You can retrieve associated repository ARNs by calling [ListRepositoryAssociations](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html).
   *
   * @public
   */
  AssociationArn?: string | undefined;

  /**
   * The statistics from the code review.
   *
   * @public
   */
  Metrics?: Metrics | undefined;

  /**
   * The types of analysis performed during a repository analysis or a pull request review. You can specify either `Security`, `CodeQuality`, or both.
   *
   * @public
   */
  AnalysisTypes?: AnalysisType[] | undefined;

  /**
   * The state of the `aws-codeguru-reviewer.yml` configuration file that allows the configuration of the CodeGuru Reviewer analysis. The file either exists, doesn't exist, or exists with errors at the root directory of your repository.
   *
   * @public
   */
  ConfigFileState?: ConfigFileState | undefined;
}

/**
 * @public
 */
export interface CreateCodeReviewResponse {
  /**
   * Information about a code review. A code review belongs to the associated repository that contains the reviewed code.
   *
   * @public
   */
  CodeReview?: CodeReview | undefined;
}

/**
 * @public
 */
export interface DescribeCodeReviewRequest {
  /**
   * The Amazon Resource Name (ARN) of the [CodeReview](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html) object.
   *
   * @public
   */
  CodeReviewArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCodeReviewResponse {
  /**
   * Information about the code review.
   *
   * @public
   */
  CodeReview?: CodeReview | undefined;
}

/**
 * @public
 */
export interface DescribeRecommendationFeedbackRequest {
  /**
   * The Amazon Resource Name (ARN) of the [CodeReview](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html) object.
   *
   * @public
   */
  CodeReviewArn: string | undefined;

  /**
   * The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.
   *
   * @public
   */
  RecommendationId: string | undefined;

  /**
   * Optional parameter to describe the feedback for a given user. If this is not supplied, it defaults to the user making the request.
   *
   * The `UserId` is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see [Specifying a Principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying) in the *Amazon Web Services Identity and Access Management User Guide*.
   *
   * @public
   */
  UserId?: string | undefined;
}

/**
 * Information about the recommendation feedback.
 *
 * @public
 */
export interface RecommendationFeedback {
  /**
   * The Amazon Resource Name (ARN) of the [CodeReview](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html) object.
   *
   * @public
   */
  CodeReviewArn?: string | undefined;

  /**
   * The recommendation ID that can be used to track the provided recommendations. Later on it can be used to collect the feedback.
   *
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * List for storing reactions. Reactions are utf-8 text code for emojis. You can send an empty list to clear off all your feedback.
   *
   * @public
   */
  Reactions?: Reaction[] | undefined;

  /**
   * The ID of the user that made the API call.
   *
   * The `UserId` is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see [Specifying a Principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying) in the *Amazon Web Services Identity and Access Management User Guide*.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The time at which the feedback was created.
   *
   * @public
   */
  CreatedTimeStamp?: Date | undefined;

  /**
   * The time at which the feedback was last updated.
   *
   * @public
   */
  LastUpdatedTimeStamp?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRecommendationFeedbackResponse {
  /**
   * The recommendation feedback given by the user.
   *
   * @public
   */
  RecommendationFeedback?: RecommendationFeedback | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoryAssociationRequest {
  /**
   * The Amazon Resource Name (ARN) of the [RepositoryAssociation](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html) object. You can retrieve this ARN by calling [ListRepositoryAssociations](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html).
   *
   * @public
   */
  AssociationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoryAssociationResponse {
  /**
   * Information about the repository association.
   *
   * @public
   */
  RepositoryAssociation?: RepositoryAssociation | undefined;

  /**
   * An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:
   *
   * - A *tag key* (for example, `CostCenter`, `Environment`, `Project`, or `Secret`). Tag keys are case sensitive.
   * - An optional field known as a *tag value* (for example, `111122223333`, `Production`, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DisassociateRepositoryRequest {
  /**
   * The Amazon Resource Name (ARN) of the [RepositoryAssociation](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html) object. You can retrieve this ARN by calling [ListRepositoryAssociations](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html).
   *
   * @public
   */
  AssociationArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateRepositoryResponse {
  /**
   * Information about the disassociated repository.
   *
   * @public
   */
  RepositoryAssociation?: RepositoryAssociation | undefined;

  /**
   * An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:
   *
   * - A *tag key* (for example, `CostCenter`, `Environment`, `Project`, or `Secret`). Tag keys are case sensitive.
   * - An optional field known as a *tag value* (for example, `111122223333`, `Production`, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListCodeReviewsRequest {
  /**
   * List of provider types for filtering that needs to be applied before displaying the result. For example, `providerTypes=[GitHub]` lists code reviews from GitHub.
   *
   * @public
   */
  ProviderTypes?: ProviderType[] | undefined;

  /**
   * List of states for filtering that needs to be applied before displaying the result. For example, `states=[Pending]` lists code reviews in the Pending state.
   *
   * The valid code review states are:
   *
   * - `Completed`: The code review is complete.
   * - `Pending`: The code review started and has not completed or failed.
   * - `Failed`: The code review failed.
   * - `Deleting`: The code review is being deleted.
   *
   * @public
   */
  States?: JobState[] | undefined;

  /**
   * List of repository names for filtering that needs to be applied before displaying the result.
   *
   * @public
   */
  RepositoryNames?: string[] | undefined;

  /**
   * The type of code reviews to list in the response.
   *
   * @public
   */
  Type: Type | undefined;

  /**
   * The maximum number of results that are returned per call. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about metrics summaries.
 *
 * @public
 */
export interface MetricsSummary {
  /**
   * Lines of code metered in the code review. For the initial code review pull request and all subsequent revisions, this includes all lines of code in the files added to the pull request. In subsequent revisions, for files that already existed in the pull request, this includes only the changed lines of code. In both cases, this does not include non-code lines such as comments and import statements. For example, if you submit a pull request containing 5 files, each with 500 lines of code, and in a subsequent revision you added a new file with 200 lines of code, and also modified a total of 25 lines across the initial 5 files, `MeteredLinesOfCodeCount` includes the first 5 files (5 * 500 = 2,500 lines), the new file (200 lines) and the 25 changed lines of code for a total of 2,725 lines of code.
   *
   * @public
   */
  MeteredLinesOfCodeCount?: number | undefined;

  /**
   * Lines of code suppressed in the code review based on the `excludeFiles` element in the `aws-codeguru-reviewer.yml` file. For full repository analyses, this number includes all lines of code in the files that are suppressed. For pull requests, this number only includes the *changed* lines of code that are suppressed. In both cases, this number does not include non-code lines such as comments and import statements. For example, if you initiate a full repository analysis on a repository containing 5 files, each file with 100 lines of code, and 2 files are listed as excluded in the `aws-codeguru-reviewer.yml` file, then `SuppressedLinesOfCodeCount` returns 200 (2 * 100) as the total number of lines of code suppressed. However, if you submit a pull request for the same repository, then `SuppressedLinesOfCodeCount` only includes the lines in the 2 files that changed. If only 1 of the 2 files changed in the pull request, then `SuppressedLinesOfCodeCount` returns 100 (1 * 100) as the total number of lines of code suppressed.
   *
   * @public
   */
  SuppressedLinesOfCodeCount?: number | undefined;

  /**
   * Total number of recommendations found in the code review.
   *
   * @public
   */
  FindingsCount?: number | undefined;
}

/**
 * Information about the summary of the code review.
 *
 * @public
 */
export interface CodeReviewSummary {
  /**
   * The name of the code review.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the [CodeReview](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html) object.
   *
   * @public
   */
  CodeReviewArn?: string | undefined;

  /**
   * The name of the repository.
   *
   * @public
   */
  RepositoryName?: string | undefined;

  /**
   * The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository. For an S3 repository, it can be the username or Amazon Web Services account ID.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The provider type of the repository association.
   *
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * The state of the code review.
   *
   * The valid code review states are:
   *
   * - `Completed`: The code review is complete.
   * - `Pending`: The code review started and has not completed or failed.
   * - `Failed`: The code review failed.
   * - `Deleting`: The code review is being deleted.
   *
   * @public
   */
  State?: JobState | undefined;

  /**
   * The time, in milliseconds since the epoch, when the code review was created.
   *
   * @public
   */
  CreatedTimeStamp?: Date | undefined;

  /**
   * The time, in milliseconds since the epoch, when the code review was last updated.
   *
   * @public
   */
  LastUpdatedTimeStamp?: Date | undefined;

  /**
   * The type of the code review.
   *
   * @public
   */
  Type?: Type | undefined;

  /**
   * The pull request ID for the code review.
   *
   * @public
   */
  PullRequestId?: string | undefined;

  /**
   * The statistics from the code review.
   *
   * @public
   */
  MetricsSummary?: MetricsSummary | undefined;

  /**
   * Specifies the source code that is analyzed in a code review.
   *
   * @public
   */
  SourceCodeType?: SourceCodeType | undefined;
}

/**
 * @public
 */
export interface ListCodeReviewsResponse {
  /**
   * A list of code reviews that meet the criteria of the request.
   *
   * @public
   */
  CodeReviewSummaries?: CodeReviewSummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationFeedbackRequest {
  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the [CodeReview](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html) object.
   *
   * @public
   */
  CodeReviewArn: string | undefined;

  /**
   * An Amazon Web Services user's account ID or Amazon Resource Name (ARN). Use this ID to query the recommendation feedback for a code review from that user.
   *
   * The `UserId` is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see [Specifying a Principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying) in the *Amazon Web Services Identity and Access Management User Guide*.
   *
   * @public
   */
  UserIds?: string[] | undefined;

  /**
   * Used to query the recommendation feedback for a given recommendation.
   *
   * @public
   */
  RecommendationIds?: string[] | undefined;
}

/**
 * Information about recommendation feedback summaries.
 *
 * @public
 */
export interface RecommendationFeedbackSummary {
  /**
   * The recommendation ID that can be used to track the provided recommendations. Later on it can be used to collect the feedback.
   *
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * List for storing reactions. Reactions are utf-8 text code for emojis.
   *
   * @public
   */
  Reactions?: Reaction[] | undefined;

  /**
   * The ID of the user that gave the feedback.
   *
   * The `UserId` is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see [Specifying a Principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying) in the *Amazon Web Services Identity and Access Management User Guide*.
   *
   * @public
   */
  UserId?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationFeedbackResponse {
  /**
   * Recommendation feedback summaries corresponding to the code review ARN.
   *
   * @public
   */
  RecommendationFeedbackSummaries?: RecommendationFeedbackSummary[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsRequest {
  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the [CodeReview](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html) object.
   *
   * @public
   */
  CodeReviewArn: string | undefined;
}

/**
 * Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule.
 *
 * @public
 */
export interface RuleMetadata {
  /**
   * The ID of the rule.
   *
   * @public
   */
  RuleId?: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * A short description of the rule.
   *
   * @public
   */
  ShortDescription?: string | undefined;

  /**
   * A long description of the rule.
   *
   * @public
   */
  LongDescription?: string | undefined;

  /**
   * Tags that are associated with the rule.
   *
   * @public
   */
  RuleTags?: string[] | undefined;
}

/**
 * Information about recommendations.
 *
 * @public
 */
export interface RecommendationSummary {
  /**
   * Name of the file on which a recommendation is provided.
   *
   * @public
   */
  FilePath?: string | undefined;

  /**
   * The recommendation ID that can be used to track the provided recommendations. Later on it can be used to collect the feedback.
   *
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * Start line from where the recommendation is applicable in the source commit or source branch.
   *
   * @public
   */
  StartLine?: number | undefined;

  /**
   * Last line where the recommendation is applicable in the source commit or source branch. For a single line comment the start line and end line values are the same.
   *
   * @public
   */
  EndLine?: number | undefined;

  /**
   * A description of the recommendation generated by CodeGuru Reviewer for the lines of code between the start line and the end line.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of a recommendation.
   *
   * @public
   */
  RecommendationCategory?: RecommendationCategory | undefined;

  /**
   * Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule.
   *
   * @public
   */
  RuleMetadata?: RuleMetadata | undefined;

  /**
   * The severity of the issue in the code that generated this recommendation.
   *
   * @public
   */
  Severity?: Severity | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * List of recommendations for the requested code review.
   *
   * @public
   */
  RecommendationSummaries?: RecommendationSummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoryAssociationsRequest {
  /**
   * List of provider types to use as a filter.
   *
   * @public
   */
  ProviderTypes?: ProviderType[] | undefined;

  /**
   * List of repository association states to use as a filter.
   *
   * The valid repository association states are:
   *
   * - **Associated**: The repository association is complete.
   * - **Associating**: CodeGuru Reviewer is:
   *
   *   - Setting up pull request notifications. This is required for pull requests to trigger a CodeGuru Reviewer review.
   *
   *     > **Note:** If your repository `ProviderType` is `GitHub`, `GitHub Enterprise Server`, or `Bitbucket`, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered.
   *   - Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository.
   * - **Failed**: The repository failed to associate or disassociate.
   * - **Disassociating**: CodeGuru Reviewer is removing the repository's pull request notifications and source code access.
   * - **Disassociated**: CodeGuru Reviewer successfully disassociated the repository. You can create a new association with this repository if you want to review source code in it later. You can control access to code reviews created in anassociated repository with tags after it has been disassociated. For more information, see [Using tags to control access to associated repositories](https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-using-tags.html) in the *Amazon CodeGuru Reviewer User Guide*.
   *
   * @public
   */
  States?: RepositoryAssociationState[] | undefined;

  /**
   * List of repository names to use as a filter.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * List of owners to use as a filter. For Amazon Web Services CodeCommit, it is the name of the CodeCommit account that was used to associate the repository. For other repository source providers, such as Bitbucket and GitHub Enterprise Server, this is name of the account that was used to associate the repository.
   *
   * @public
   */
  Owners?: string[] | undefined;

  /**
   * The maximum number of repository association results returned by `ListRepositoryAssociations` in paginated output. When this parameter is used, `ListRepositoryAssociations` only returns `maxResults` results in a single page with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListRepositoryAssociations` request with the returned `nextToken` value. This value can be between 1 and 100. If this parameter is not used, `ListRepositoryAssociations` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListRepositoryAssociations` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value.
   *
   * > **Note:** Treat this token as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information about a repository association. The [ListRepositoryAssociations](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html) operation returns a list of `RepositoryAssociationSummary` objects.
 *
 * @public
 */
export interface RepositoryAssociationSummary {
  /**
   * The Amazon Resource Name (ARN) of the [RepositoryAssociation](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html) object. You can retrieve this ARN by calling [ListRepositoryAssociations](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html).
   *
   * @public
   */
  AssociationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services CodeStar Connections connection. Its format is `arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id`. For more information, see [Connection](https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html) in the *Amazon Web Services CodeStar Connections API Reference*.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The time, in milliseconds since the epoch, since the repository association was last updated.
   *
   * @public
   */
  LastUpdatedTimeStamp?: Date | undefined;

  /**
   * The repository association ID.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The name of the repository association.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The owner of the repository. For an Amazon Web Services CodeCommit repository, this is the Amazon Web Services account ID of the account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository. For an S3 repository, it can be the username or Amazon Web Services account ID.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The provider type of the repository association.
   *
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * The state of the repository association.
   *
   * The valid repository association states are:
   *
   * - **Associated**: The repository association is complete.
   * - **Associating**: CodeGuru Reviewer is:
   *
   *   - Setting up pull request notifications. This is required for pull requests to trigger a CodeGuru Reviewer review.
   *
   *     > **Note:** If your repository `ProviderType` is `GitHub`, `GitHub Enterprise Server`, or `Bitbucket`, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered.
   *   - Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository.
   * - **Failed**: The repository failed to associate or disassociate.
   * - **Disassociating**: CodeGuru Reviewer is removing the repository's pull request notifications and source code access.
   * - **Disassociated**: CodeGuru Reviewer successfully disassociated the repository. You can create a new association with this repository if you want to review source code in it later. You can control access to code reviews created in anassociated repository with tags after it has been disassociated. For more information, see [Using tags to control access to associated repositories](https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-using-tags.html) in the *Amazon CodeGuru Reviewer User Guide*.
   *
   * @public
   */
  State?: RepositoryAssociationState | undefined;
}

/**
 * @public
 */
export interface ListRepositoryAssociationsResponse {
  /**
   * A list of repository associations that meet the criteria of the request.
   *
   * @public
   */
  RepositoryAssociationSummaries?: RepositoryAssociationSummary[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListRecommendations` request. When the results of a `ListRecommendations` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the [RepositoryAssociation](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html) object. You can retrieve this ARN by calling [ListRepositoryAssociations](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html).
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:
   *
   * - A *tag key* (for example, `CostCenter`, `Environment`, `Project`, or `Secret`). Tag keys are case sensitive.
   * - An optional field known as a *tag value* (for example, `111122223333`, `Production`, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutRecommendationFeedbackRequest {
  /**
   * The Amazon Resource Name (ARN) of the [CodeReview](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html) object.
   *
   * @public
   */
  CodeReviewArn: string | undefined;

  /**
   * The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.
   *
   * @public
   */
  RecommendationId: string | undefined;

  /**
   * List for storing reactions. Reactions are utf-8 text code for emojis. If you send an empty list it clears all your feedback.
   *
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
   * The Amazon Resource Name (ARN) of the [RepositoryAssociation](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html) object. You can retrieve this ARN by calling [ListRepositoryAssociations](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html).
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:
   *
   * - A *tag key* (for example, `CostCenter`, `Environment`, `Project`, or `Secret`). Tag keys are case sensitive.
   * - An optional field known as a *tag value* (for example, `111122223333`, `Production`, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.
   *
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
   * The Amazon Resource Name (ARN) of the [RepositoryAssociation](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html) object. You can retrieve this ARN by calling [ListRepositoryAssociations](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html).
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of the keys for each tag you want to remove from an associated repository.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

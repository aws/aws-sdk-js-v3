import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
}

export interface AssociateRepositoryRequest {
  __type?: "AssociateRepositoryRequest";
  /**
   * <p>The repository to associate.</p>
   */
  Repository: Repository | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   *          <p>To add a new repository association, this parameter specifies a unique
   *         identifier for the new repository association that helps ensure idempotency.</p>
   *
   *          <p>If you use the AWS CLI or one of the AWS SDKs to call this operation, you
   *         can leave this parameter empty. The CLI or SDK generates a random UUID for you
   *         and includes that in the request. If you don't use the SDK and instead generate
   *         a raw HTTP request to the Secrets Manager service endpoint, you must generate
   *         a ClientRequestToken yourself for new versions and include that value in the request.</p>
   *
   *          <p>You typically interact with this value if you implement your own retry
   *         logic and want to ensure that a given repository association is not created twice.
   *         We recommend that you generate a UUID-type value to ensure uniqueness within the
   *         specified repository association.</p>
   *
   *          <p>Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository
   *         associations if there are failures and retries. </p>
   */
  ClientRequestToken?: string;
}

export namespace AssociateRepositoryRequest {
  export const filterSensitiveLog = (obj: AssociateRepositoryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateRepositoryRequest => __isa(o, "AssociateRepositoryRequest");
}

export interface AssociateRepositoryResponse {
  __type?: "AssociateRepositoryResponse";
  /**
   * <p>Information about the repository association.</p>
   */
  RepositoryAssociation?: RepositoryAssociation;
}

export namespace AssociateRepositoryResponse {
  export const filterSensitiveLog = (obj: AssociateRepositoryResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateRepositoryResponse => __isa(o, "AssociateRepositoryResponse");
}

/**
 * <p>Information about an AWS CodeCommit repository. The CodeCommit repository must be in the same
 *       AWS Region and AWS account where its CodeGuru Reviewer code reviews are configured. </p>
 */
export interface CodeCommitRepository {
  __type?: "CodeCommitRepository";
  /**
   * <p>The name of the AWS CodeCommit repository. For more information, see
   *          <a href="https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetRepository.html#CodeCommit-GetRepository-request-repositoryName">repositoryName</a>
   *          in the <i>AWS CodeCommit API Reference</i>.</p>
   */
  Name: string | undefined;
}

export namespace CodeCommitRepository {
  export const filterSensitiveLog = (obj: CodeCommitRepository): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CodeCommitRepository => __isa(o, "CodeCommitRepository");
}

/**
 * <p>
 *          Information about a code review.
 *       </p>
 */
export interface CodeReview {
  __type?: "CodeReview";
  /**
   * <p>
   *          The reason for the state of the code review.
   *       </p>
   */
  StateReason?: string;

  /**
   * <p>
   *          The type of code review.
   *       </p>
   */
  Type?: Type | string;

  /**
   * <p>The owner of the repository. For an AWS CodeCommit repository, this is the AWS account ID of the
   *       account that owns the repository. For a GitHub or Bitbucket repository, this is the username for the account that owns the repository.</p>
   */
  Owner?: string;

  /**
   * <p>
   *          The type of the source code for the code review.
   *       </p>
   */
  SourceCodeType?: SourceCodeType;

  /**
   * <p>
   *          The time, in milliseconds since the epoch, when the code review was last updated.
   *       </p>
   */
  LastUpdatedTimeStamp?: Date;

  /**
   * <p>
   *          The type of repository that contains the reviewed code (for example, GitHub or Bitbucket).
   *       </p>
   */
  ProviderType?: ProviderType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">
   *                <code>CodeReview</code>
   *             </a> object.
   *       </p>
   */
  CodeReviewArn?: string;

  /**
   * <p>
   *          The pull request ID for the code review.
   *       </p>
   */
  PullRequestId?: string;

  /**
   * <p>
   *          The name of the code review.
   *       </p>
   */
  Name?: string;

  /**
   * <p>The valid code review states are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Completed</code>: The code review is complete.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Pending</code>: The code review started and has not completed or failed.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: The code review failed.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleting</code>: The code review is being deleted.
   *             </p>
   *             </li>
   *          </ul>
   */
  State?: JobState | string;

  /**
   * <p>
   *          The statistics from the code review.
   *       </p>
   */
  Metrics?: Metrics;

  /**
   * <p>
   *          The time, in milliseconds since the epoch, when the code review was created.
   *       </p>
   */
  CreatedTimeStamp?: Date;

  /**
   * <p>
   *          The name of the repository.
   *       </p>
   */
  RepositoryName?: string;
}

export namespace CodeReview {
  export const filterSensitiveLog = (obj: CodeReview): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CodeReview => __isa(o, "CodeReview");
}

/**
 * <p>
 *          Information about the summary of the code review.
 *       </p>
 */
export interface CodeReviewSummary {
  __type?: "CodeReviewSummary";
  /**
   * <p>
   *          The provider type of the repository association.
   *       </p>
   */
  ProviderType?: ProviderType | string;

  /**
   * <p>
   *          The state of the code review.
   *       </p>
   *          <p>The valid code review states are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Completed</code>: The code review is complete.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Pending</code>: The code review started and has not completed or failed.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: The code review failed.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleting</code>: The code review is being deleted.
   *             </p>
   *             </li>
   *          </ul>
   */
  State?: JobState | string;

  /**
   * <p>
   *          The statistics from the code review.
   *       </p>
   */
  MetricsSummary?: MetricsSummary;

  /**
   * <p>
   *          The pull request ID for the code review.
   *       </p>
   */
  PullRequestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">
   *                <code>CodeReview</code>
   *             </a> object.
   *       </p>
   */
  CodeReviewArn?: string;

  /**
   * <p>The owner of the repository. For an AWS CodeCommit repository, this is the AWS account ID of the
   *       account that owns the repository. For a GitHub or Bitbucket repository, this is the username for the account that owns the repository.</p>
   */
  Owner?: string;

  /**
   * <p>
   *          The type of the code review.
   *       </p>
   */
  Type?: Type | string;

  /**
   * <p>
   *          The time, in milliseconds since the epoch, when the code review was created.
   *       </p>
   */
  CreatedTimeStamp?: Date;

  /**
   * <p>
   *          The name of the code review.
   *       </p>
   */
  Name?: string;

  /**
   * <p>
   *          The time, in milliseconds since the epoch, when the code review was last updated.
   *       </p>
   */
  LastUpdatedTimeStamp?: Date;

  /**
   * <p>
   *          The name of the repository.
   *       </p>
   */
  RepositoryName?: string;
}

export namespace CodeReviewSummary {
  export const filterSensitiveLog = (obj: CodeReviewSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CodeReviewSummary => __isa(o, "CodeReviewSummary");
}

/**
 * <p>
 *          The commit diff for the pull request.
 *       </p>
 */
export interface CommitDiffSourceCodeType {
  __type?: "CommitDiffSourceCodeType";
  /**
   * <p>
   *          The SHA of the source commit.
   *       </p>
   */
  SourceCommit?: string;

  /**
   * <p>
   *          The SHA of the destination commit.
   *       </p>
   */
  DestinationCommit?: string;
}

export namespace CommitDiffSourceCodeType {
  export const filterSensitiveLog = (obj: CommitDiffSourceCodeType): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CommitDiffSourceCodeType => __isa(o, "CommitDiffSourceCodeType");
}

/**
 * <p>The requested operation would cause a conflict with the current state of a service
 *          resource associated with the request. Resolve the conflict before retrying this request. </p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConflictException => __isa(o, "ConflictException");
}

export interface DescribeCodeReviewRequest {
  __type?: "DescribeCodeReviewRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">
   *                <code>CodeReview</code>
   *             </a> object.
   *       </p>
   */
  CodeReviewArn: string | undefined;
}

export namespace DescribeCodeReviewRequest {
  export const filterSensitiveLog = (obj: DescribeCodeReviewRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeCodeReviewRequest => __isa(o, "DescribeCodeReviewRequest");
}

export interface DescribeCodeReviewResponse {
  __type?: "DescribeCodeReviewResponse";
  /**
   * <p>
   *          Information about the code review.
   *       </p>
   */
  CodeReview?: CodeReview;
}

export namespace DescribeCodeReviewResponse {
  export const filterSensitiveLog = (obj: DescribeCodeReviewResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeCodeReviewResponse => __isa(o, "DescribeCodeReviewResponse");
}

export interface DescribeRecommendationFeedbackRequest {
  __type?: "DescribeRecommendationFeedbackRequest";
  /**
   * <p>
   *          The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.
   *       </p>
   */
  RecommendationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">
   *                <code>CodeReview</code>
   *             </a> object.
   *       </p>
   */
  CodeReviewArn: string | undefined;

  /**
   * <p>
   *          Optional parameter to describe the feedback for a given user. If this is not supplied, it defaults to the user making the request.
   *       </p>
   *          <p>
   *          The <code>UserId</code> is an IAM principal that can be specified as an AWS account ID or an Amazon Resource Name (ARN). For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">
   *             Specifying a Principal</a> in the <i>AWS Identity and Access Management User Guide</i>.
   *       </p>
   */
  UserId?: string;
}

export namespace DescribeRecommendationFeedbackRequest {
  export const filterSensitiveLog = (obj: DescribeRecommendationFeedbackRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeRecommendationFeedbackRequest =>
    __isa(o, "DescribeRecommendationFeedbackRequest");
}

export interface DescribeRecommendationFeedbackResponse {
  __type?: "DescribeRecommendationFeedbackResponse";
  /**
   * <p>
   *          The recommendation feedback given by the user.
   *       </p>
   */
  RecommendationFeedback?: RecommendationFeedback;
}

export namespace DescribeRecommendationFeedbackResponse {
  export const filterSensitiveLog = (obj: DescribeRecommendationFeedbackResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeRecommendationFeedbackResponse =>
    __isa(o, "DescribeRecommendationFeedbackResponse");
}

export interface DescribeRepositoryAssociationRequest {
  __type?: "DescribeRepositoryAssociationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the
   *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">
   *                <code>RepositoryAssociation</code>
   *             </a> object.
   *          You can retrieve this ARN by calling <code>ListRepositories</code>.</p>
   */
  AssociationArn: string | undefined;
}

export namespace DescribeRepositoryAssociationRequest {
  export const filterSensitiveLog = (obj: DescribeRepositoryAssociationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeRepositoryAssociationRequest =>
    __isa(o, "DescribeRepositoryAssociationRequest");
}

export interface DescribeRepositoryAssociationResponse {
  __type?: "DescribeRepositoryAssociationResponse";
  /**
   * <p>Information about the repository association.</p>
   */
  RepositoryAssociation?: RepositoryAssociation;
}

export namespace DescribeRepositoryAssociationResponse {
  export const filterSensitiveLog = (obj: DescribeRepositoryAssociationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeRepositoryAssociationResponse =>
    __isa(o, "DescribeRepositoryAssociationResponse");
}

export interface DisassociateRepositoryRequest {
  __type?: "DisassociateRepositoryRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the
   *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">
   *                <code>RepositoryAssociation</code>
   *             </a> object.
   *       </p>
   */
  AssociationArn: string | undefined;
}

export namespace DisassociateRepositoryRequest {
  export const filterSensitiveLog = (obj: DisassociateRepositoryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateRepositoryRequest => __isa(o, "DisassociateRepositoryRequest");
}

export interface DisassociateRepositoryResponse {
  __type?: "DisassociateRepositoryResponse";
  /**
   * <p>Information about the disassociated repository.</p>
   */
  RepositoryAssociation?: RepositoryAssociation;
}

export namespace DisassociateRepositoryResponse {
  export const filterSensitiveLog = (obj: DisassociateRepositoryResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateRepositoryResponse => __isa(o, "DisassociateRepositoryResponse");
}

/**
 * <p>The server encountered an internal error and is unable to complete the request.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerException => __isa(o, "InternalServerException");
}

export enum JobState {
  COMPLETED = "Completed",
  DELETING = "Deleting",
  FAILED = "Failed",
  PENDING = "Pending",
}

export interface ListCodeReviewsRequest {
  __type?: "ListCodeReviewsRequest";
  /**
   * <p>
   *          The maximum number of results that are returned per call. The default is 100.
   *       </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *          If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *       </p>
   */
  NextToken?: string;

  /**
   * <p>
   *          List of repository names for filtering that needs to be applied before displaying the result.
   *       </p>
   */
  RepositoryNames?: string[];

  /**
   * <p>
   *          The type of code reviews to list in the response.
   *       </p>
   */
  Type: Type | string | undefined;

  /**
   * <p>
   *          List of states for filtering that needs to be applied before displaying the result. For example, <code>states=[Pending]</code> lists code reviews in the Pending state.
   *       </p>
   *          <p>The valid code review states are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Completed</code>: The code review is complete.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Pending</code>: The code review started and has not completed or failed.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: The code review failed.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleting</code>: The code review is being deleted.
   *             </p>
   *             </li>
   *          </ul>
   */
  States?: (JobState | string)[];

  /**
   * <p>
   *          List of provider types for filtering that needs to be applied before displaying the result. For example, <code>providerTypes=[GitHub]</code>  lists code reviews from GitHub.
   *       </p>
   */
  ProviderTypes?: (ProviderType | string)[];
}

export namespace ListCodeReviewsRequest {
  export const filterSensitiveLog = (obj: ListCodeReviewsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListCodeReviewsRequest => __isa(o, "ListCodeReviewsRequest");
}

export interface ListCodeReviewsResponse {
  __type?: "ListCodeReviewsResponse";
  /**
   * <p>
   *          Pagination token.
   *       </p>
   */
  NextToken?: string;

  /**
   * <p>
   *          A list of code reviews that meet the criteria of the request.
   *       </p>
   */
  CodeReviewSummaries?: CodeReviewSummary[];
}

export namespace ListCodeReviewsResponse {
  export const filterSensitiveLog = (obj: ListCodeReviewsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListCodeReviewsResponse => __isa(o, "ListCodeReviewsResponse");
}

export interface ListRecommendationFeedbackRequest {
  __type?: "ListRecommendationFeedbackRequest";
  /**
   * <p>
   *          The maximum number of results that are returned per call. The default is 100.
   *       </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *          An AWS user's account ID or Amazon Resource Name (ARN). Use this ID to query the recommendation feedback for a code review from that user.
   *       </p>
   *          <p>
   *          The <code>UserId</code> is an IAM principal that can be specified as an AWS account ID or an Amazon Resource Name (ARN). For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">
   *             Specifying a Principal</a> in the <i>AWS Identity and Access Management User Guide</i>.
   *       </p>
   */
  UserIds?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">
   *                <code>CodeReview</code>
   *             </a> object.
   *       </p>
   */
  CodeReviewArn: string | undefined;

  /**
   * <p>
   *          Used to query the recommendation feedback for a given recommendation.
   *       </p>
   */
  RecommendationIds?: string[];

  /**
   * <p>
   *          If <code>nextToken</code> is returned, there are more results available. The value of nextToken is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *       </p>
   */
  NextToken?: string;
}

export namespace ListRecommendationFeedbackRequest {
  export const filterSensitiveLog = (obj: ListRecommendationFeedbackRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListRecommendationFeedbackRequest => __isa(o, "ListRecommendationFeedbackRequest");
}

export interface ListRecommendationFeedbackResponse {
  __type?: "ListRecommendationFeedbackResponse";
  /**
   * <p> Recommendation feedback summaries corresponding to the code review ARN. </p>
   */
  RecommendationFeedbackSummaries?: RecommendationFeedbackSummary[];

  /**
   * <p>
   *          If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *       </p>
   */
  NextToken?: string;
}

export namespace ListRecommendationFeedbackResponse {
  export const filterSensitiveLog = (obj: ListRecommendationFeedbackResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListRecommendationFeedbackResponse =>
    __isa(o, "ListRecommendationFeedbackResponse");
}

export interface ListRecommendationsRequest {
  __type?: "ListRecommendationsRequest";
  /**
   * <p>
   *          The maximum number of results that are returned per call. The default is 100.
   *       </p>
   */
  MaxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">
   *                <code>CodeReview</code>
   *             </a> object.
   *       </p>
   */
  CodeReviewArn: string | undefined;

  /**
   * <p>
   *          Pagination token.
   *       </p>
   */
  NextToken?: string;
}

export namespace ListRecommendationsRequest {
  export const filterSensitiveLog = (obj: ListRecommendationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListRecommendationsRequest => __isa(o, "ListRecommendationsRequest");
}

export interface ListRecommendationsResponse {
  __type?: "ListRecommendationsResponse";
  /**
   * <p>
   *          List of recommendations for the requested code review.
   *       </p>
   */
  RecommendationSummaries?: RecommendationSummary[];

  /**
   * <p>
   *          Pagination token.
   *       </p>
   */
  NextToken?: string;
}

export namespace ListRecommendationsResponse {
  export const filterSensitiveLog = (obj: ListRecommendationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListRecommendationsResponse => __isa(o, "ListRecommendationsResponse");
}

export interface ListRepositoryAssociationsRequest {
  __type?: "ListRepositoryAssociationsRequest";
  /**
   * <p>The maximum number of repository association results returned by <code>ListRepositoryAssociations</code>
   *          in paginated output. When this parameter is used, <code>ListRepositoryAssociations</code> only returns
   *          <code>maxResults</code> results in a single page with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListRepositoryAssociations</code> request with the returned
   *          <code>nextToken</code> value.
   *          This value can be between 1 and 100. If this parameter is not used, <code>ListRepositoryAssociations</code>
   *          returns up to 100 results and a <code>nextToken</code> value if applicable. </p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListRepositoryAssociations</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   *          <note>
   *             <p>Treat this token as an opaque identifier that is only used to retrieve
   *          the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  NextToken?: string;

  /**
   * <p>List of provider types to use as a filter.</p>
   */
  ProviderTypes?: (ProviderType | string)[];

  /**
   * <p>List of repository association states to use as a filter.</p>
   *          <p>The valid repository association states are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Associated</b>: The repository
   *                association is complete.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Associating</b>: CodeGuru Reviewer is:
   *             </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                      Setting up pull request notifications. This is required
   *                      for pull requests to trigger a CodeGuru Reviewer review.
   *                   </p>
   *                      <note>
   *                         <p>
   *                         If your repository <code>ProviderType</code> is <code>GitHub</code> or <code>Bitbucket</code>,
   *                         CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks,
   *                         reviews of code in your repository cannot be triggered.
   *                      </p>
   *                      </note>
   *                   </li>
   *                   <li>
   *                      <p>
   *                      Setting up source code access. This is required for CodeGuru Reviewer to securely
   *                      clone code in your repository.
   *                   </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Failed</b>: The repository failed to associate or disassociate.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Disassociating</b>: CodeGuru Reviewer is removing the repository's pull request notifications and
   *                source code access.
   *             </p>
   *             </li>
   *          </ul>
   */
  States?: (RepositoryAssociationState | string)[];

  /**
   * <p>List of owners to use as a filter.
   *         For AWS CodeCommit, it is the name of the CodeCommit account that was
   *         used to associate the repository. For other repository source providers, such as Bitbucket, this is name of the account
   *         that was used to associate the repository. </p>
   */
  Owners?: string[];

  /**
   * <p>List of repository names to use as a filter.</p>
   */
  Names?: string[];
}

export namespace ListRepositoryAssociationsRequest {
  export const filterSensitiveLog = (obj: ListRepositoryAssociationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListRepositoryAssociationsRequest => __isa(o, "ListRepositoryAssociationsRequest");
}

export interface ListRepositoryAssociationsResponse {
  __type?: "ListRepositoryAssociationsResponse";
  /**
   * <p>A list of repository associations that meet the criteria of the request.</p>
   */
  RepositoryAssociationSummaries?: RepositoryAssociationSummary[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListRecommendations</code> request.
   *          When the results of a <code>ListRecommendations</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   */
  NextToken?: string;
}

export namespace ListRepositoryAssociationsResponse {
  export const filterSensitiveLog = (obj: ListRepositoryAssociationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListRepositoryAssociationsResponse =>
    __isa(o, "ListRepositoryAssociationsResponse");
}

/**
 * <p>
 *          Information about the statistics from the code review.
 *       </p>
 */
export interface Metrics {
  __type?: "Metrics";
  /**
   * <p>
   *         Lines of code metered in the code review. For the initial code review pull request and all subsequent revisions,
   *         this includes all lines of code in the files added to the pull request. In subsequent revisions, for files that already
   *         existed in the pull request, this includes only the changed lines of code. In both cases, this does not include non-code lines such as comments
   *         and import statements. For example, if you submit a pull request containing 5 files, each with 500 lines of code, and in
   *         a subsequent revision you added a new file with 200 lines of code, and also modified a total of 25 lines across the initial 5 files,
   *         <code>MeteredLinesOfCodeCount</code> includes the first 5 files (5 * 500 = 2,500 lines), the new file (200 lines) and the 25 changed lines of
   *          code for a total of 2,725 lines of code.
   *       </p>
   */
  MeteredLinesOfCodeCount?: number;

  /**
   * <p>
   *          Total number of recommendations found in the code review.
   *       </p>
   */
  FindingsCount?: number;
}

export namespace Metrics {
  export const filterSensitiveLog = (obj: Metrics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Metrics => __isa(o, "Metrics");
}

/**
 * <p>
 *          Information about metrics summaries.
 *       </p>
 */
export interface MetricsSummary {
  __type?: "MetricsSummary";
  /**
   * <p>
   *          Lines of code metered in the code review. For the initial code review pull request and all subsequent revisions,
   *          this includes all lines of code in the files added to the pull request. In subsequent revisions, for files that already
   *          existed in the pull request, this includes only the changed lines of code. In both cases, this does not include non-code lines such as comments
   *          and import statements. For example, if you submit a pull request containing 5 files, each with 500 lines of code, and in
   *          a subsequent revision you added a new file with 200 lines of code, and also modified a total of 25 lines across the initial 5 files,
   *          <code>MeteredLinesOfCodeCount</code> includes the first 5 files (5 * 500 = 2,500 lines), the new file (200 lines) and the 25 changed lines of
   *          code for a total of 2,725 lines of code.
   *       </p>
   */
  MeteredLinesOfCodeCount?: number;

  /**
   * <p>
   *          Total number of recommendations found in the code review.
   *       </p>
   */
  FindingsCount?: number;
}

export namespace MetricsSummary {
  export const filterSensitiveLog = (obj: MetricsSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MetricsSummary => __isa(o, "MetricsSummary");
}

/**
 * <p>The resource specified in the request was not found.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NotFoundException => __isa(o, "NotFoundException");
}

export enum ProviderType {
  BITBUCKET = "Bitbucket",
  CODE_COMMIT = "CodeCommit",
  GIT_HUB = "GitHub",
  GIT_HUB_ENTERPRISE_SERVER = "GitHubEnterpriseServer",
}

export interface PutRecommendationFeedbackRequest {
  __type?: "PutRecommendationFeedbackRequest";
  /**
   * <p>
   *          List for storing reactions. Reactions are utf-8 text code for emojis. If you send an empty list it clears all your feedback.
   *       </p>
   */
  Reactions: (Reaction | string)[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">
   *                <code>CodeReview</code>
   *             </a> object.
   *       </p>
   */
  CodeReviewArn: string | undefined;

  /**
   * <p>
   *          The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.
   *       </p>
   */
  RecommendationId: string | undefined;
}

export namespace PutRecommendationFeedbackRequest {
  export const filterSensitiveLog = (obj: PutRecommendationFeedbackRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutRecommendationFeedbackRequest => __isa(o, "PutRecommendationFeedbackRequest");
}

export interface PutRecommendationFeedbackResponse {
  __type?: "PutRecommendationFeedbackResponse";
}

export namespace PutRecommendationFeedbackResponse {
  export const filterSensitiveLog = (obj: PutRecommendationFeedbackResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutRecommendationFeedbackResponse => __isa(o, "PutRecommendationFeedbackResponse");
}

export enum Reaction {
  THUMBS_DOWN = "ThumbsDown",
  THUMBS_UP = "ThumbsUp",
}

/**
 * <p>
 *          Information about the recommendation feedback.
 *       </p>
 */
export interface RecommendationFeedback {
  __type?: "RecommendationFeedback";
  /**
   * <p>
   *          The recommendation ID that can be used to track the provided recommendations. Later on it can be used to collect the feedback.
   *       </p>
   */
  RecommendationId?: string;

  /**
   * <p>
   *          The time at which the feedback was created.
   *       </p>
   */
  CreatedTimeStamp?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">
   *                <code>CodeReview</code>
   *             </a> object.
   *       </p>
   */
  CodeReviewArn?: string;

  /**
   * <p>
   *          List for storing reactions. Reactions are utf-8 text code for emojis. You can send an empty list to clear off all your feedback.
   *       </p>
   */
  Reactions?: (Reaction | string)[];

  /**
   * <p>
   *          The ID of the user that made the API call.
   *       </p>
   *          <p>
   *          The <code>UserId</code> is an IAM principal that can be specified as an AWS account ID or an Amazon Resource Name (ARN). For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">
   *             Specifying a Principal</a> in the <i>AWS Identity and Access Management User Guide</i>.
   *       </p>
   */
  UserId?: string;

  /**
   * <p>
   *          The time at which the feedback was last updated.
   *       </p>
   */
  LastUpdatedTimeStamp?: Date;
}

export namespace RecommendationFeedback {
  export const filterSensitiveLog = (obj: RecommendationFeedback): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecommendationFeedback => __isa(o, "RecommendationFeedback");
}

/**
 * <p>
 *          Information about recommendation feedback summaries.
 *       </p>
 */
export interface RecommendationFeedbackSummary {
  __type?: "RecommendationFeedbackSummary";
  /**
   * <p>
   *          List for storing reactions. Reactions are utf-8 text code for emojis.
   *       </p>
   */
  Reactions?: (Reaction | string)[];

  /**
   * <p>
   *          The recommendation ID that can be used to track the provided recommendations. Later on it can be used to collect the feedback.
   *       </p>
   */
  RecommendationId?: string;

  /**
   * <p>
   *          The ID of the user that gave the feedback.
   *       </p>
   *          <p>
   *          The <code>UserId</code> is an IAM principal that can be specified as an AWS account ID or an Amazon Resource Name (ARN). For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">
   *             Specifying a Principal</a> in the <i>AWS Identity and Access Management User Guide</i>.
   *       </p>
   */
  UserId?: string;
}

export namespace RecommendationFeedbackSummary {
  export const filterSensitiveLog = (obj: RecommendationFeedbackSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecommendationFeedbackSummary => __isa(o, "RecommendationFeedbackSummary");
}

/**
 * <p>
 *          Information about recommendations.
 *       </p>
 */
export interface RecommendationSummary {
  __type?: "RecommendationSummary";
  /**
   * <p>Name of the file on which a recommendation is provided.</p>
   */
  FilePath?: string;

  /**
   * <p>
   *          A description of the recommendation generated by CodeGuru Reviewer for the lines of code between the start line and the end line.
   *       </p>
   */
  Description?: string;

  /**
   * <p>
   *          Start line from where the recommendation is applicable in the source commit or source branch.
   *       </p>
   */
  StartLine?: number;

  /**
   * <p>
   *          The recommendation ID that can be used to track the provided recommendations. Later on it can be used to collect the feedback.
   *       </p>
   */
  RecommendationId?: string;

  /**
   * <p>
   *          Last line where the recommendation is applicable in the source commit or source branch. For a single line comment the start line and end line values are the same.
   *       </p>
   */
  EndLine?: number;
}

export namespace RecommendationSummary {
  export const filterSensitiveLog = (obj: RecommendationSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecommendationSummary => __isa(o, "RecommendationSummary");
}

/**
 * <p>
 *          Information about an associated AWS CodeCommit repository or an associated repository that is managed
 *          by AWS CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object
 *          is not used if your source code is in an associated GitHub repository.
 *       </p>
 */
export interface Repository {
  __type?: "Repository";
  /**
   * <p>
   *          Information about a GitHub Enterprise Server repository.
   *       </p>
   */
  GitHubEnterpriseServer?: ThirdPartySourceRepository;

  /**
   * <p>
   *          Information about a Bitbucket repository.
   *       </p>
   */
  Bitbucket?: ThirdPartySourceRepository;

  /**
   * <p>Information about an AWS CodeCommit repository.</p>
   */
  CodeCommit?: CodeCommitRepository;
}

export namespace Repository {
  export const filterSensitiveLog = (obj: Repository): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Repository => __isa(o, "Repository");
}

/**
 * <p>Information about a repository association. The
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html">
 *                <code>DescribeRepositoryAssociation</code>
 *             </a>
 *          operation returns a <code>RepositoryAssociation</code> object.</p>
 */
export interface RepositoryAssociation {
  __type?: "RepositoryAssociation";
  /**
   * <p>The Amazon Resource Name (ARN) identifying the repository association.</p>
   */
  AssociationArn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the repository association was last updated.</p>
   */
  LastUpdatedTimeStamp?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the repository association was created.</p>
   */
  CreatedTimeStamp?: Date;

  /**
   * <p>The provider type of the repository association.</p>
   */
  ProviderType?: ProviderType | string;

  /**
   * <p>A description of why the repository association is in the current state.</p>
   */
  StateReason?: string;

  /**
   * <p>The state of the repository association.</p>
   *          <p>The valid repository association states are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Associated</b>: The repository
   *                association is complete.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Associating</b>: CodeGuru Reviewer is:
   *             </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                      Setting up pull request notifications. This is required
   *                      for pull requests to trigger a CodeGuru Reviewer review.
   *                   </p>
   *                      <note>
   *                         <p>
   *                         If your repository <code>ProviderType</code> is <code>GitHub</code> or <code>Bitbucket</code>,
   *                         CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks,
   *                         reviews of code in your repository cannot be triggered.
   *                      </p>
   *                      </note>
   *                   </li>
   *                   <li>
   *                      <p>
   *                      Setting up source code access. This is required for CodeGuru Reviewer to securely
   *                      clone code in your repository.
   *                   </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Failed</b>: The repository failed to associate or disassociate.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Disassociating</b>: CodeGuru Reviewer is removing the repository's pull request notifications and
   *                source code access.
   *             </p>
   *             </li>
   *          </ul>
   */
  State?: RepositoryAssociationState | string;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection. Its format is
   *          <code>arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id</code>. For more information, see
   *          <a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html">Connection</a> in
   *          the <i>AWS CodeStar Connections API Reference</i>.
   *       </p>
   */
  ConnectionArn?: string;

  /**
   * <p>The name of the repository.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the repository association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The owner of the repository. For an AWS CodeCommit repository, this is the AWS account ID of the
   *       account that owns the repository. For a GitHub or Bitbucket repository, this is the username for the account that owns the repository.</p>
   */
  Owner?: string;
}

export namespace RepositoryAssociation {
  export const filterSensitiveLog = (obj: RepositoryAssociation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RepositoryAssociation => __isa(o, "RepositoryAssociation");
}

export enum RepositoryAssociationState {
  ASSOCIATED = "Associated",
  ASSOCIATING = "Associating",
  DISASSOCIATING = "Disassociating",
  FAILED = "Failed",
}

/**
 * <p>Summary information about a repository association. The
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">
 *                <code>ListRepositoryAssociations</code>
 *             </a>
 *          operation returns a list of <code>RepositoryAssociationSummary</code> objects.</p>
 */
export interface RepositoryAssociationSummary {
  __type?: "RepositoryAssociationSummary";
  /**
   * <p>The state of the repository association.</p>
   *          <p>The valid repository association states are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Associated</b>: The repository
   *                association is complete.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Associating</b>: CodeGuru Reviewer is:
   *             </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                      Setting up pull request notifications. This is required
   *                      for pull requests to trigger a CodeGuru Reviewer review.
   *                   </p>
   *                      <note>
   *                         <p>
   *                         If your repository <code>ProviderType</code> is <code>GitHub</code> or <code>Bitbucket</code>,
   *                         CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks,
   *                         reviews of code in your repository cannot be triggered.
   *                      </p>
   *                      </note>
   *                   </li>
   *                   <li>
   *                      <p>
   *                      Setting up source code access. This is required for CodeGuru Reviewer to securely
   *                      clone code in your repository.
   *                   </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Failed</b>: The repository failed to associate or disassociate.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Disassociating</b>: CodeGuru Reviewer is removing the repository's pull request notifications and
   *                source code access.
   *             </p>
   *             </li>
   *          </ul>
   */
  State?: RepositoryAssociationState | string;

  /**
   * <p>
   *          The repository association ID.
   *       </p>
   */
  AssociationId?: string;

  /**
   * <p>The provider type of the repository association.</p>
   */
  ProviderType?: ProviderType | string;

  /**
   * <p>The name of the repository association.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the
   *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">
   *                <code>RepositoryAssociation</code>
   *             </a> object.
   *       </p>
   */
  AssociationArn?: string;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection. Its format is
   *          <code>arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id</code>. For more information, see
   *          <a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html">Connection</a> in
   *          the <i>AWS CodeStar Connections API Reference</i>.
   *       </p>
   */
  ConnectionArn?: string;

  /**
   * <p>The owner of the repository. For an AWS CodeCommit repository, this is the AWS account ID of the
   *       account that owns the repository. For a GitHub or Bitbucket repository, this is the username for the account that owns the repository.</p>
   */
  Owner?: string;

  /**
   * <p>The time, in milliseconds since the epoch, since the repository association
   *         was last updated.
   *       </p>
   */
  LastUpdatedTimeStamp?: Date;
}

export namespace RepositoryAssociationSummary {
  export const filterSensitiveLog = (obj: RepositoryAssociationSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RepositoryAssociationSummary => __isa(o, "RepositoryAssociationSummary");
}

/**
 * <p>
 *          The resource specified in the request was not found.
 *       </p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

/**
 * <p>
 *          Information about the source code type.
 *       </p>
 */
export interface SourceCodeType {
  __type?: "SourceCodeType";
  /**
   * <p>
   *          The commit diff for the pull request.
   *       </p>
   */
  CommitDiff?: CommitDiffSourceCodeType;
}

export namespace SourceCodeType {
  export const filterSensitiveLog = (obj: SourceCodeType): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SourceCodeType => __isa(o, "SourceCodeType");
}

/**
 * <p>
 *          Information about a third-party source repository connected to CodeGuru Reviewer.
 *       </p>
 */
export interface ThirdPartySourceRepository {
  __type?: "ThirdPartySourceRepository";
  /**
   * <p>
   *          The owner of the repository. For a GitHub, GitHub Enterprise, or Bitbucket repository,
   *          this is the username for the account that owns the repository.
   *       </p>
   */
  Owner: string | undefined;

  /**
   * <p>
   *          The name of the third party source repository.
   *       </p>
   */
  Name: string | undefined;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection. Its format is
   *          <code>arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id</code>. For more information, see
   *          <a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html">Connection</a> in
   *          the <i>AWS CodeStar Connections API Reference</i>.
   *       </p>
   */
  ConnectionArn: string | undefined;
}

export namespace ThirdPartySourceRepository {
  export const filterSensitiveLog = (obj: ThirdPartySourceRepository): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ThirdPartySourceRepository => __isa(o, "ThirdPartySourceRepository");
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ThrottlingException => __isa(o, "ThrottlingException");
}

export enum Type {
  PULL_REQUEST = "PullRequest",
}

/**
 * <p>The input fails to satisfy the specified constraints.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ValidationException => __isa(o, "ValidationException");
}

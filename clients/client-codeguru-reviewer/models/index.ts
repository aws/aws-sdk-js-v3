import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return __isa(o, "AccessDeniedException");
  }
}

export interface AssociateRepositoryRequest {
  __type?: "AssociateRepositoryRequest";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   *          <p>If you want to add a new repository association, this parameter specifies a unique
   *         identifier for the new repository association that helps ensure idempotency.</p>
   *
   *          <p>If you use the AWS CLI or one of the AWS SDK to call this operation, then you
   *         can leave this parameter empty. The CLI or SDK generates a random UUID for you
   *         and includes that in the request. If you don't use the SDK and instead generate
   *         a raw HTTP request to the Secrets Manager service endpoint, then you must generate
   *         a ClientRequestToken yourself for new versions and include that value in the request.</p>
   *
   *          <p>You typically only need to interact with this value if you implement your own retry
   *         logic and want to ensure that a given repository association is not created twice.
   *         We recommend that you generate a UUID-type value to ensure uniqueness within the
   *         specified repository association.</p>
   *
   *          <p>Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository
   *         associations if there are failures and retries. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The repository to associate.</p>
   */
  Repository: Repository | undefined;
}

export namespace AssociateRepositoryRequest {
  export function isa(o: any): o is AssociateRepositoryRequest {
    return __isa(o, "AssociateRepositoryRequest");
  }
}

export interface AssociateRepositoryResponse {
  __type?: "AssociateRepositoryResponse";
  /**
   * <p>Information about the repository association.</p>
   */
  RepositoryAssociation?: RepositoryAssociation;
}

export namespace AssociateRepositoryResponse {
  export function isa(o: any): o is AssociateRepositoryResponse {
    return __isa(o, "AssociateRepositoryResponse");
  }
}

/**
 * <p>Information about an AWS CodeCommit repository.</p>
 */
export interface CodeCommitRepository {
  __type?: "CodeCommitRepository";
  /**
   * <p>The name of the AWS CodeCommit repository.</p>
   */
  Name: string | undefined;
}

export namespace CodeCommitRepository {
  export function isa(o: any): o is CodeCommitRepository {
    return __isa(o, "CodeCommitRepository");
  }
}

/**
 * <p>The requested operation would cause a conflict with the current state
 *         of a service resource associated with the request. Resolve the conflict
 *         before retrying this request.
 *       </p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export function isa(o: any): o is ConflictException {
    return __isa(o, "ConflictException");
  }
}

export interface DescribeRepositoryAssociationRequest {
  __type?: "DescribeRepositoryAssociationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) identifying the association.</p>
   */
  AssociationArn: string | undefined;
}

export namespace DescribeRepositoryAssociationRequest {
  export function isa(o: any): o is DescribeRepositoryAssociationRequest {
    return __isa(o, "DescribeRepositoryAssociationRequest");
  }
}

export interface DescribeRepositoryAssociationResponse {
  __type?: "DescribeRepositoryAssociationResponse";
  /**
   * <p>Information about the repository association.</p>
   */
  RepositoryAssociation?: RepositoryAssociation;
}

export namespace DescribeRepositoryAssociationResponse {
  export function isa(o: any): o is DescribeRepositoryAssociationResponse {
    return __isa(o, "DescribeRepositoryAssociationResponse");
  }
}

export interface DisassociateRepositoryRequest {
  __type?: "DisassociateRepositoryRequest";
  /**
   * <p>The Amazon Resource Name (ARN) identifying the association.</p>
   */
  AssociationArn: string | undefined;
}

export namespace DisassociateRepositoryRequest {
  export function isa(o: any): o is DisassociateRepositoryRequest {
    return __isa(o, "DisassociateRepositoryRequest");
  }
}

export interface DisassociateRepositoryResponse {
  __type?: "DisassociateRepositoryResponse";
  /**
   * <p>Information about the disassociated repository.</p>
   */
  RepositoryAssociation?: RepositoryAssociation;
}

export namespace DisassociateRepositoryResponse {
  export function isa(o: any): o is DisassociateRepositoryResponse {
    return __isa(o, "DisassociateRepositoryResponse");
  }
}

/**
 * <p>The server encountered an internal error and is unable to complete the request.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return __isa(o, "InternalServerException");
  }
}

export interface ListRepositoryAssociationsRequest {
  __type?: "ListRepositoryAssociationsRequest";
  /**
   * <p>The maximum number of repository association results returned by <code>ListRepositoryAssociations</code>
   *          in paginated output. When this parameter is used, <code>ListRepositoryAssociations</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListRepositoryAssociations</code> request with the returned
   *          <code>nextToken</code> value.
   *          This value can be between 1 and 100. If this parameter is not used, then <code>ListRepositoryAssociations</code>
   *          returns up to 100 results and a <code>nextToken</code> value if applicable. </p>
   */
  MaxResults?: number;

  /**
   * <p>List of names to use as a filter.</p>
   */
  Names?: Array<string>;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListRepositoryAssociations</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve
   *          the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  NextToken?: string;

  /**
   * <p>List of owners to use as a filter. For AWS CodeCommit, the owner is the AWS
   *         account id. For GitHub, it is the GitHub account name.</p>
   */
  Owners?: Array<string>;

  /**
   * <p>List of provider types to use as a filter.</p>
   */
  ProviderTypes?: Array<ProviderType | string>;

  /**
   * <p>List of states to use as a filter.</p>
   */
  States?: Array<RepositoryAssociationState | string>;
}

export namespace ListRepositoryAssociationsRequest {
  export function isa(o: any): o is ListRepositoryAssociationsRequest {
    return __isa(o, "ListRepositoryAssociationsRequest");
  }
}

export interface ListRepositoryAssociationsResponse {
  __type?: "ListRepositoryAssociationsResponse";
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListRecommendations</code> request.
   *          When the results of a <code>ListRecommendations</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of repository associations that meet the criteria of the request.</p>
   */
  RepositoryAssociationSummaries?: Array<RepositoryAssociationSummary>;
}

export namespace ListRepositoryAssociationsResponse {
  export function isa(o: any): o is ListRepositoryAssociationsResponse {
    return __isa(o, "ListRepositoryAssociationsResponse");
  }
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
  export function isa(o: any): o is NotFoundException {
    return __isa(o, "NotFoundException");
  }
}

export enum ProviderType {
  CODE_COMMIT = "CodeCommit",
  GIT_HUB = "GitHub"
}

/**
 * <p>Information about a repository.</p>
 */
export interface Repository {
  __type?: "Repository";
  /**
   * <p>Information about an AWS CodeCommit repository.</p>
   */
  CodeCommit?: CodeCommitRepository;
}

export namespace Repository {
  export function isa(o: any): o is Repository {
    return __isa(o, "Repository");
  }
}

/**
 * <p>Information about a repository association.</p>
 */
export interface RepositoryAssociation {
  __type?: "RepositoryAssociation";
  /**
   * <p>The Amazon Resource Name (ARN) identifying the repository association.</p>
   */
  AssociationArn?: string;

  /**
   * <p>The id of the repository association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the repository association was created.</p>
   */
  CreatedTimeStamp?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the repository association was last updated.</p>
   */
  LastUpdatedTimeStamp?: Date;

  /**
   * <p>The name of the repository.</p>
   */
  Name?: string;

  /**
   * <p>The owner of the repository.</p>
   */
  Owner?: string;

  /**
   * <p>The provider type of the repository association.</p>
   */
  ProviderType?: ProviderType | string;

  /**
   * <p>The state of the repository association.</p>
   */
  State?: RepositoryAssociationState | string;

  /**
   * <p>A description of why the repository association is in the current state.</p>
   */
  StateReason?: string;
}

export namespace RepositoryAssociation {
  export function isa(o: any): o is RepositoryAssociation {
    return __isa(o, "RepositoryAssociation");
  }
}

export enum RepositoryAssociationState {
  ASSOCIATED = "Associated",
  ASSOCIATING = "Associating",
  DISASSOCIATING = "Disassociating",
  FAILED = "Failed"
}

/**
 * <p>Information about a repository association.</p>
 */
export interface RepositoryAssociationSummary {
  __type?: "RepositoryAssociationSummary";
  /**
   * <p>The Amazon Resource Name (ARN) identifying the repository association.</p>
   */
  AssociationArn?: string;

  /**
   * <p>The repository association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The time, in milliseconds since the epoch, since the repository association
   *         was last updated.
   *       </p>
   */
  LastUpdatedTimeStamp?: Date;

  /**
   * <p>The name of the repository association.</p>
   */
  Name?: string;

  /**
   * <p>The owner of the repository association.</p>
   */
  Owner?: string;

  /**
   * <p>The provider type of the repository association.</p>
   */
  ProviderType?: ProviderType | string;

  /**
   * <p>The state of the repository association.</p>
   *          <dl>
   *             <dt>Associated</dt>
   *             <dd>
   *                <p>Amazon CodeGuru Reviewer is associated with the repository.
   *                </p>
   *             </dd>
   *             <dt>Associating</dt>
   *             <dd>
   *                <p>The association is in progress.
   *                </p>
   *             </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                <p>The association failed. For more information about troubleshooting (or why it failed),
   *                 see [troubleshooting topic].
   *                </p>
   *             </dd>
   *             <dt>Disassociating</dt>
   *             <dd>
   *                <p>Amazon CodeGuru Reviewer is in the process of disassociating with the repository.
   *                </p>
   *             </dd>
   *          </dl>
   */
  State?: RepositoryAssociationState | string;
}

export namespace RepositoryAssociationSummary {
  export function isa(o: any): o is RepositoryAssociationSummary {
    return __isa(o, "RepositoryAssociationSummary");
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return __isa(o, "ThrottlingException");
  }
}

/**
 * <p>The input fails to satisfy the specified constraints.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export function isa(o: any): o is ValidationException {
    return __isa(o, "ValidationException");
  }
}

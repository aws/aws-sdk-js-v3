import { CodeGuruReviewerClient } from "./CodeGuruReviewerClient";
import {
  AssociateRepositoryCommand,
  AssociateRepositoryCommandInput,
  AssociateRepositoryCommandOutput,
} from "./commands/AssociateRepositoryCommand";
import {
  CreateCodeReviewCommand,
  CreateCodeReviewCommandInput,
  CreateCodeReviewCommandOutput,
} from "./commands/CreateCodeReviewCommand";
import {
  DescribeCodeReviewCommand,
  DescribeCodeReviewCommandInput,
  DescribeCodeReviewCommandOutput,
} from "./commands/DescribeCodeReviewCommand";
import {
  DescribeRecommendationFeedbackCommand,
  DescribeRecommendationFeedbackCommandInput,
  DescribeRecommendationFeedbackCommandOutput,
} from "./commands/DescribeRecommendationFeedbackCommand";
import {
  DescribeRepositoryAssociationCommand,
  DescribeRepositoryAssociationCommandInput,
  DescribeRepositoryAssociationCommandOutput,
} from "./commands/DescribeRepositoryAssociationCommand";
import {
  DisassociateRepositoryCommand,
  DisassociateRepositoryCommandInput,
  DisassociateRepositoryCommandOutput,
} from "./commands/DisassociateRepositoryCommand";
import {
  ListCodeReviewsCommand,
  ListCodeReviewsCommandInput,
  ListCodeReviewsCommandOutput,
} from "./commands/ListCodeReviewsCommand";
import {
  ListRecommendationFeedbackCommand,
  ListRecommendationFeedbackCommandInput,
  ListRecommendationFeedbackCommandOutput,
} from "./commands/ListRecommendationFeedbackCommand";
import {
  ListRecommendationsCommand,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "./commands/ListRecommendationsCommand";
import {
  ListRepositoryAssociationsCommand,
  ListRepositoryAssociationsCommandInput,
  ListRepositoryAssociationsCommandOutput,
} from "./commands/ListRepositoryAssociationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutRecommendationFeedbackCommand,
  PutRecommendationFeedbackCommandInput,
  PutRecommendationFeedbackCommandOutput,
} from "./commands/PutRecommendationFeedbackCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>This section provides documentation for the Amazon CodeGuru Reviewer API operations. CodeGuru Reviewer is a service
 *          that uses program analysis and machine learning to detect potential defects that are difficult for developers to find and recommends
 *          fixes in your Java and Python code.</p>
 *
 *          <p>By proactively detecting and providing recommendations for addressing code defects and implementing best practices, CodeGuru Reviewer
 *             improves the overall quality and maintainability of your code base during the code review stage. For more information about CodeGuru Reviewer, see the
 *             <i>
 *                <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html">Amazon CodeGuru Reviewer User Guide</a>.</i>
 *          </p>
 *
 *          <p>
 *          To improve the security of your CodeGuru Reviewer API calls, you can establish a private connection between your VPC and CodeGuru Reviewer by
 *          creating an <i>interface VPC endpoint</i>. For more information, see
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/vpc-interface-endpoints.html">CodeGuru Reviewer and interface
 *             VPC endpoints (Amazon Web Services PrivateLink)</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.
 *       </p>
 */
export class CodeGuruReviewer extends CodeGuruReviewerClient {
  /**
   * <p>
   *          Use to associate an Amazon Web Services CodeCommit repository or a repostory managed by
   *          Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a
   *         repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides
   *         automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see
   *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in
   *             Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i>
   *         </p>
   *
   *          <p>If you associate a CodeCommit or S3 repository, it must be in the same
   *          Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p>
   *
   *          <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar
   *          Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in
   *          the <i>Amazon CodeGuru Reviewer User Guide.</i>
   *          </p>
   *
   *          <note>
   *             <p>
   *             You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate
   *             a GitHub repository, use the console. For more information, see
   *             <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting
   *             started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i>
   *             </p>
   *          </note>
   */
  public associateRepository(
    args: AssociateRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateRepositoryCommandOutput>;
  public associateRepository(
    args: AssociateRepositoryCommandInput,
    cb: (err: any, data?: AssociateRepositoryCommandOutput) => void
  ): void;
  public associateRepository(
    args: AssociateRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateRepositoryCommandOutput) => void
  ): void;
  public associateRepository(
    args: AssociateRepositoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateRepositoryCommandOutput) => void),
    cb?: (err: any, data?: AssociateRepositoryCommandOutput) => void
  ): Promise<AssociateRepositoryCommandOutput> | void {
    const command = new AssociateRepositoryCommand(args);
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
   * <p>
   *          Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">
   *                <code>CodeReviewType</code>
   *             </a>
   *          of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository.
   *          <code>PullRequest</code> code reviews are automatically triggered by a pull request.
   *       </p>
   */
  public createCodeReview(
    args: CreateCodeReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCodeReviewCommandOutput>;
  public createCodeReview(
    args: CreateCodeReviewCommandInput,
    cb: (err: any, data?: CreateCodeReviewCommandOutput) => void
  ): void;
  public createCodeReview(
    args: CreateCodeReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCodeReviewCommandOutput) => void
  ): void;
  public createCodeReview(
    args: CreateCodeReviewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCodeReviewCommandOutput) => void),
    cb?: (err: any, data?: CreateCodeReviewCommandOutput) => void
  ): Promise<CreateCodeReviewCommandOutput> | void {
    const command = new CreateCodeReviewCommand(args);
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
   * <p> Returns the metadata associated with the code review along with its status.</p>
   */
  public describeCodeReview(
    args: DescribeCodeReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCodeReviewCommandOutput>;
  public describeCodeReview(
    args: DescribeCodeReviewCommandInput,
    cb: (err: any, data?: DescribeCodeReviewCommandOutput) => void
  ): void;
  public describeCodeReview(
    args: DescribeCodeReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCodeReviewCommandOutput) => void
  ): void;
  public describeCodeReview(
    args: DescribeCodeReviewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCodeReviewCommandOutput) => void),
    cb?: (err: any, data?: DescribeCodeReviewCommandOutput) => void
  ): Promise<DescribeCodeReviewCommandOutput> | void {
    const command = new DescribeCodeReviewCommand(args);
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
   * <p>
   *          Describes the customer feedback for a CodeGuru Reviewer recommendation.
   *       </p>
   */
  public describeRecommendationFeedback(
    args: DescribeRecommendationFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecommendationFeedbackCommandOutput>;
  public describeRecommendationFeedback(
    args: DescribeRecommendationFeedbackCommandInput,
    cb: (err: any, data?: DescribeRecommendationFeedbackCommandOutput) => void
  ): void;
  public describeRecommendationFeedback(
    args: DescribeRecommendationFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecommendationFeedbackCommandOutput) => void
  ): void;
  public describeRecommendationFeedback(
    args: DescribeRecommendationFeedbackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRecommendationFeedbackCommandOutput) => void),
    cb?: (err: any, data?: DescribeRecommendationFeedbackCommandOutput) => void
  ): Promise<DescribeRecommendationFeedbackCommandOutput> | void {
    const command = new DescribeRecommendationFeedbackCommand(args);
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
   * <p>
   *          Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">
   *                <code>RepositoryAssociation</code>
   *             </a> object
   *          that contains information about the requested repository association.
   *       </p>
   */
  public describeRepositoryAssociation(
    args: DescribeRepositoryAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRepositoryAssociationCommandOutput>;
  public describeRepositoryAssociation(
    args: DescribeRepositoryAssociationCommandInput,
    cb: (err: any, data?: DescribeRepositoryAssociationCommandOutput) => void
  ): void;
  public describeRepositoryAssociation(
    args: DescribeRepositoryAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRepositoryAssociationCommandOutput) => void
  ): void;
  public describeRepositoryAssociation(
    args: DescribeRepositoryAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRepositoryAssociationCommandOutput) => void),
    cb?: (err: any, data?: DescribeRepositoryAssociationCommandOutput) => void
  ): Promise<DescribeRepositoryAssociationCommandOutput> | void {
    const command = new DescribeRepositoryAssociationCommand(args);
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
   * <p>Removes the association between Amazon CodeGuru Reviewer and a repository.</p>
   */
  public disassociateRepository(
    args: DisassociateRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateRepositoryCommandOutput>;
  public disassociateRepository(
    args: DisassociateRepositoryCommandInput,
    cb: (err: any, data?: DisassociateRepositoryCommandOutput) => void
  ): void;
  public disassociateRepository(
    args: DisassociateRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateRepositoryCommandOutput) => void
  ): void;
  public disassociateRepository(
    args: DisassociateRepositoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateRepositoryCommandOutput) => void),
    cb?: (err: any, data?: DisassociateRepositoryCommandOutput) => void
  ): Promise<DisassociateRepositoryCommandOutput> | void {
    const command = new DisassociateRepositoryCommand(args);
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
   * <p>
   *          Lists all the code reviews that the customer has created in the past 90 days.
   *       </p>
   */
  public listCodeReviews(
    args: ListCodeReviewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCodeReviewsCommandOutput>;
  public listCodeReviews(
    args: ListCodeReviewsCommandInput,
    cb: (err: any, data?: ListCodeReviewsCommandOutput) => void
  ): void;
  public listCodeReviews(
    args: ListCodeReviewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCodeReviewsCommandOutput) => void
  ): void;
  public listCodeReviews(
    args: ListCodeReviewsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCodeReviewsCommandOutput) => void),
    cb?: (err: any, data?: ListCodeReviewsCommandOutput) => void
  ): Promise<ListCodeReviewsCommandOutput> | void {
    const command = new ListCodeReviewsCommand(args);
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
   * <p>
   *          Returns a list of
   *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">
   *                <code>RecommendationFeedbackSummary</code>
   *             </a>
   *          objects that contain customer recommendation feedback for all CodeGuru Reviewer users.
   *       </p>
   */
  public listRecommendationFeedback(
    args: ListRecommendationFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationFeedbackCommandOutput>;
  public listRecommendationFeedback(
    args: ListRecommendationFeedbackCommandInput,
    cb: (err: any, data?: ListRecommendationFeedbackCommandOutput) => void
  ): void;
  public listRecommendationFeedback(
    args: ListRecommendationFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationFeedbackCommandOutput) => void
  ): void;
  public listRecommendationFeedback(
    args: ListRecommendationFeedbackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecommendationFeedbackCommandOutput) => void),
    cb?: (err: any, data?: ListRecommendationFeedbackCommandOutput) => void
  ): Promise<ListRecommendationFeedbackCommandOutput> | void {
    const command = new ListRecommendationFeedbackCommand(args);
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
   * <p>
   *          Returns the list of all recommendations for a completed code review.
   *       </p>
   */
  public listRecommendations(
    args: ListRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationsCommandOutput>;
  public listRecommendations(
    args: ListRecommendationsCommandInput,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;
  public listRecommendations(
    args: ListRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;
  public listRecommendations(
    args: ListRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): Promise<ListRecommendationsCommandOutput> | void {
    const command = new ListRecommendationsCommand(args);
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
   * <p>
   *          Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">
   *                <code>RepositoryAssociationSummary</code>
   *             </a> objects that
   *          contain summary information about a repository association. You can filter the returned list by
   *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">
   *                <code>ProviderType</code>
   *             </a>,
   *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">
   *                <code>Name</code>
   *             </a>,
   *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">
   *                <code>State</code>
   *             </a>, and
   *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">
   *                <code>Owner</code>
   *             </a>.
   *       </p>
   */
  public listRepositoryAssociations(
    args: ListRepositoryAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRepositoryAssociationsCommandOutput>;
  public listRepositoryAssociations(
    args: ListRepositoryAssociationsCommandInput,
    cb: (err: any, data?: ListRepositoryAssociationsCommandOutput) => void
  ): void;
  public listRepositoryAssociations(
    args: ListRepositoryAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRepositoryAssociationsCommandOutput) => void
  ): void;
  public listRepositoryAssociations(
    args: ListRepositoryAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRepositoryAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListRepositoryAssociationsCommandOutput) => void
  ): Promise<ListRepositoryAssociationsCommandOutput> | void {
    const command = new ListRepositoryAssociationsCommand(args);
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
   * <p>Returns the list of tags associated with an associated repository resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>
   *          Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.
   *       </p>
   */
  public putRecommendationFeedback(
    args: PutRecommendationFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRecommendationFeedbackCommandOutput>;
  public putRecommendationFeedback(
    args: PutRecommendationFeedbackCommandInput,
    cb: (err: any, data?: PutRecommendationFeedbackCommandOutput) => void
  ): void;
  public putRecommendationFeedback(
    args: PutRecommendationFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRecommendationFeedbackCommandOutput) => void
  ): void;
  public putRecommendationFeedback(
    args: PutRecommendationFeedbackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRecommendationFeedbackCommandOutput) => void),
    cb?: (err: any, data?: PutRecommendationFeedbackCommandOutput) => void
  ): Promise<PutRecommendationFeedbackCommandOutput> | void {
    const command = new PutRecommendationFeedbackCommand(args);
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
   * <p>Adds one or more tags to an associated repository.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Removes a tag from an associated repository.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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

// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  AssociateApprovalRuleTemplateWithRepositoryCommandInput,
  AssociateApprovalRuleTemplateWithRepositoryCommandOutput,
} from "./commands/AssociateApprovalRuleTemplateWithRepositoryCommand";
import {
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput,
} from "./commands/BatchAssociateApprovalRuleTemplateWithRepositoriesCommand";
import {
  BatchDescribeMergeConflictsCommandInput,
  BatchDescribeMergeConflictsCommandOutput,
} from "./commands/BatchDescribeMergeConflictsCommand";
import {
  BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput,
} from "./commands/BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand";
import { BatchGetCommitsCommandInput, BatchGetCommitsCommandOutput } from "./commands/BatchGetCommitsCommand";
import {
  BatchGetRepositoriesCommandInput,
  BatchGetRepositoriesCommandOutput,
} from "./commands/BatchGetRepositoriesCommand";
import {
  CreateApprovalRuleTemplateCommandInput,
  CreateApprovalRuleTemplateCommandOutput,
} from "./commands/CreateApprovalRuleTemplateCommand";
import { CreateBranchCommandInput, CreateBranchCommandOutput } from "./commands/CreateBranchCommand";
import { CreateCommitCommandInput, CreateCommitCommandOutput } from "./commands/CreateCommitCommand";
import {
  CreatePullRequestApprovalRuleCommandInput,
  CreatePullRequestApprovalRuleCommandOutput,
} from "./commands/CreatePullRequestApprovalRuleCommand";
import { CreatePullRequestCommandInput, CreatePullRequestCommandOutput } from "./commands/CreatePullRequestCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "./commands/CreateRepositoryCommand";
import {
  CreateUnreferencedMergeCommitCommandInput,
  CreateUnreferencedMergeCommitCommandOutput,
} from "./commands/CreateUnreferencedMergeCommitCommand";
import {
  DeleteApprovalRuleTemplateCommandInput,
  DeleteApprovalRuleTemplateCommandOutput,
} from "./commands/DeleteApprovalRuleTemplateCommand";
import { DeleteBranchCommandInput, DeleteBranchCommandOutput } from "./commands/DeleteBranchCommand";
import {
  DeleteCommentContentCommandInput,
  DeleteCommentContentCommandOutput,
} from "./commands/DeleteCommentContentCommand";
import { DeleteFileCommandInput, DeleteFileCommandOutput } from "./commands/DeleteFileCommand";
import {
  DeletePullRequestApprovalRuleCommandInput,
  DeletePullRequestApprovalRuleCommandOutput,
} from "./commands/DeletePullRequestApprovalRuleCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "./commands/DeleteRepositoryCommand";
import {
  DescribeMergeConflictsCommandInput,
  DescribeMergeConflictsCommandOutput,
} from "./commands/DescribeMergeConflictsCommand";
import {
  DescribePullRequestEventsCommandInput,
  DescribePullRequestEventsCommandOutput,
} from "./commands/DescribePullRequestEventsCommand";
import {
  DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
  DisassociateApprovalRuleTemplateFromRepositoryCommandOutput,
} from "./commands/DisassociateApprovalRuleTemplateFromRepositoryCommand";
import {
  EvaluatePullRequestApprovalRulesCommandInput,
  EvaluatePullRequestApprovalRulesCommandOutput,
} from "./commands/EvaluatePullRequestApprovalRulesCommand";
import {
  GetApprovalRuleTemplateCommandInput,
  GetApprovalRuleTemplateCommandOutput,
} from "./commands/GetApprovalRuleTemplateCommand";
import { GetBlobCommandInput, GetBlobCommandOutput } from "./commands/GetBlobCommand";
import { GetBranchCommandInput, GetBranchCommandOutput } from "./commands/GetBranchCommand";
import { GetCommentCommandInput, GetCommentCommandOutput } from "./commands/GetCommentCommand";
import {
  GetCommentReactionsCommandInput,
  GetCommentReactionsCommandOutput,
} from "./commands/GetCommentReactionsCommand";
import {
  GetCommentsForComparedCommitCommandInput,
  GetCommentsForComparedCommitCommandOutput,
} from "./commands/GetCommentsForComparedCommitCommand";
import {
  GetCommentsForPullRequestCommandInput,
  GetCommentsForPullRequestCommandOutput,
} from "./commands/GetCommentsForPullRequestCommand";
import { GetCommitCommandInput, GetCommitCommandOutput } from "./commands/GetCommitCommand";
import { GetDifferencesCommandInput, GetDifferencesCommandOutput } from "./commands/GetDifferencesCommand";
import { GetFileCommandInput, GetFileCommandOutput } from "./commands/GetFileCommand";
import { GetFolderCommandInput, GetFolderCommandOutput } from "./commands/GetFolderCommand";
import { GetMergeCommitCommandInput, GetMergeCommitCommandOutput } from "./commands/GetMergeCommitCommand";
import { GetMergeConflictsCommandInput, GetMergeConflictsCommandOutput } from "./commands/GetMergeConflictsCommand";
import { GetMergeOptionsCommandInput, GetMergeOptionsCommandOutput } from "./commands/GetMergeOptionsCommand";
import {
  GetPullRequestApprovalStatesCommandInput,
  GetPullRequestApprovalStatesCommandOutput,
} from "./commands/GetPullRequestApprovalStatesCommand";
import { GetPullRequestCommandInput, GetPullRequestCommandOutput } from "./commands/GetPullRequestCommand";
import {
  GetPullRequestOverrideStateCommandInput,
  GetPullRequestOverrideStateCommandOutput,
} from "./commands/GetPullRequestOverrideStateCommand";
import { GetRepositoryCommandInput, GetRepositoryCommandOutput } from "./commands/GetRepositoryCommand";
import {
  GetRepositoryTriggersCommandInput,
  GetRepositoryTriggersCommandOutput,
} from "./commands/GetRepositoryTriggersCommand";
import {
  ListApprovalRuleTemplatesCommandInput,
  ListApprovalRuleTemplatesCommandOutput,
} from "./commands/ListApprovalRuleTemplatesCommand";
import {
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput,
} from "./commands/ListAssociatedApprovalRuleTemplatesForRepositoryCommand";
import { ListBranchesCommandInput, ListBranchesCommandOutput } from "./commands/ListBranchesCommand";
import { ListPullRequestsCommandInput, ListPullRequestsCommandOutput } from "./commands/ListPullRequestsCommand";
import { ListRepositoriesCommandInput, ListRepositoriesCommandOutput } from "./commands/ListRepositoriesCommand";
import {
  ListRepositoriesForApprovalRuleTemplateCommandInput,
  ListRepositoriesForApprovalRuleTemplateCommandOutput,
} from "./commands/ListRepositoriesForApprovalRuleTemplateCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  MergeBranchesByFastForwardCommandInput,
  MergeBranchesByFastForwardCommandOutput,
} from "./commands/MergeBranchesByFastForwardCommand";
import {
  MergeBranchesBySquashCommandInput,
  MergeBranchesBySquashCommandOutput,
} from "./commands/MergeBranchesBySquashCommand";
import {
  MergeBranchesByThreeWayCommandInput,
  MergeBranchesByThreeWayCommandOutput,
} from "./commands/MergeBranchesByThreeWayCommand";
import {
  MergePullRequestByFastForwardCommandInput,
  MergePullRequestByFastForwardCommandOutput,
} from "./commands/MergePullRequestByFastForwardCommand";
import {
  MergePullRequestBySquashCommandInput,
  MergePullRequestBySquashCommandOutput,
} from "./commands/MergePullRequestBySquashCommand";
import {
  MergePullRequestByThreeWayCommandInput,
  MergePullRequestByThreeWayCommandOutput,
} from "./commands/MergePullRequestByThreeWayCommand";
import {
  OverridePullRequestApprovalRulesCommandInput,
  OverridePullRequestApprovalRulesCommandOutput,
} from "./commands/OverridePullRequestApprovalRulesCommand";
import {
  PostCommentForComparedCommitCommandInput,
  PostCommentForComparedCommitCommandOutput,
} from "./commands/PostCommentForComparedCommitCommand";
import {
  PostCommentForPullRequestCommandInput,
  PostCommentForPullRequestCommandOutput,
} from "./commands/PostCommentForPullRequestCommand";
import { PostCommentReplyCommandInput, PostCommentReplyCommandOutput } from "./commands/PostCommentReplyCommand";
import { PutCommentReactionCommandInput, PutCommentReactionCommandOutput } from "./commands/PutCommentReactionCommand";
import { PutFileCommandInput, PutFileCommandOutput } from "./commands/PutFileCommand";
import {
  PutRepositoryTriggersCommandInput,
  PutRepositoryTriggersCommandOutput,
} from "./commands/PutRepositoryTriggersCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestRepositoryTriggersCommandInput,
  TestRepositoryTriggersCommandOutput,
} from "./commands/TestRepositoryTriggersCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateApprovalRuleTemplateContentCommandInput,
  UpdateApprovalRuleTemplateContentCommandOutput,
} from "./commands/UpdateApprovalRuleTemplateContentCommand";
import {
  UpdateApprovalRuleTemplateDescriptionCommandInput,
  UpdateApprovalRuleTemplateDescriptionCommandOutput,
} from "./commands/UpdateApprovalRuleTemplateDescriptionCommand";
import {
  UpdateApprovalRuleTemplateNameCommandInput,
  UpdateApprovalRuleTemplateNameCommandOutput,
} from "./commands/UpdateApprovalRuleTemplateNameCommand";
import { UpdateCommentCommandInput, UpdateCommentCommandOutput } from "./commands/UpdateCommentCommand";
import {
  UpdateDefaultBranchCommandInput,
  UpdateDefaultBranchCommandOutput,
} from "./commands/UpdateDefaultBranchCommand";
import {
  UpdatePullRequestApprovalRuleContentCommandInput,
  UpdatePullRequestApprovalRuleContentCommandOutput,
} from "./commands/UpdatePullRequestApprovalRuleContentCommand";
import {
  UpdatePullRequestApprovalStateCommandInput,
  UpdatePullRequestApprovalStateCommandOutput,
} from "./commands/UpdatePullRequestApprovalStateCommand";
import {
  UpdatePullRequestDescriptionCommandInput,
  UpdatePullRequestDescriptionCommandOutput,
} from "./commands/UpdatePullRequestDescriptionCommand";
import {
  UpdatePullRequestStatusCommandInput,
  UpdatePullRequestStatusCommandOutput,
} from "./commands/UpdatePullRequestStatusCommand";
import {
  UpdatePullRequestTitleCommandInput,
  UpdatePullRequestTitleCommandOutput,
} from "./commands/UpdatePullRequestTitleCommand";
import {
  UpdateRepositoryDescriptionCommandInput,
  UpdateRepositoryDescriptionCommandOutput,
} from "./commands/UpdateRepositoryDescriptionCommand";
import {
  UpdateRepositoryNameCommandInput,
  UpdateRepositoryNameCommandOutput,
} from "./commands/UpdateRepositoryNameCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateApprovalRuleTemplateWithRepositoryCommandInput
  | BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput
  | BatchDescribeMergeConflictsCommandInput
  | BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput
  | BatchGetCommitsCommandInput
  | BatchGetRepositoriesCommandInput
  | CreateApprovalRuleTemplateCommandInput
  | CreateBranchCommandInput
  | CreateCommitCommandInput
  | CreatePullRequestApprovalRuleCommandInput
  | CreatePullRequestCommandInput
  | CreateRepositoryCommandInput
  | CreateUnreferencedMergeCommitCommandInput
  | DeleteApprovalRuleTemplateCommandInput
  | DeleteBranchCommandInput
  | DeleteCommentContentCommandInput
  | DeleteFileCommandInput
  | DeletePullRequestApprovalRuleCommandInput
  | DeleteRepositoryCommandInput
  | DescribeMergeConflictsCommandInput
  | DescribePullRequestEventsCommandInput
  | DisassociateApprovalRuleTemplateFromRepositoryCommandInput
  | EvaluatePullRequestApprovalRulesCommandInput
  | GetApprovalRuleTemplateCommandInput
  | GetBlobCommandInput
  | GetBranchCommandInput
  | GetCommentCommandInput
  | GetCommentReactionsCommandInput
  | GetCommentsForComparedCommitCommandInput
  | GetCommentsForPullRequestCommandInput
  | GetCommitCommandInput
  | GetDifferencesCommandInput
  | GetFileCommandInput
  | GetFolderCommandInput
  | GetMergeCommitCommandInput
  | GetMergeConflictsCommandInput
  | GetMergeOptionsCommandInput
  | GetPullRequestApprovalStatesCommandInput
  | GetPullRequestCommandInput
  | GetPullRequestOverrideStateCommandInput
  | GetRepositoryCommandInput
  | GetRepositoryTriggersCommandInput
  | ListApprovalRuleTemplatesCommandInput
  | ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput
  | ListBranchesCommandInput
  | ListPullRequestsCommandInput
  | ListRepositoriesCommandInput
  | ListRepositoriesForApprovalRuleTemplateCommandInput
  | ListTagsForResourceCommandInput
  | MergeBranchesByFastForwardCommandInput
  | MergeBranchesBySquashCommandInput
  | MergeBranchesByThreeWayCommandInput
  | MergePullRequestByFastForwardCommandInput
  | MergePullRequestBySquashCommandInput
  | MergePullRequestByThreeWayCommandInput
  | OverridePullRequestApprovalRulesCommandInput
  | PostCommentForComparedCommitCommandInput
  | PostCommentForPullRequestCommandInput
  | PostCommentReplyCommandInput
  | PutCommentReactionCommandInput
  | PutFileCommandInput
  | PutRepositoryTriggersCommandInput
  | TagResourceCommandInput
  | TestRepositoryTriggersCommandInput
  | UntagResourceCommandInput
  | UpdateApprovalRuleTemplateContentCommandInput
  | UpdateApprovalRuleTemplateDescriptionCommandInput
  | UpdateApprovalRuleTemplateNameCommandInput
  | UpdateCommentCommandInput
  | UpdateDefaultBranchCommandInput
  | UpdatePullRequestApprovalRuleContentCommandInput
  | UpdatePullRequestApprovalStateCommandInput
  | UpdatePullRequestDescriptionCommandInput
  | UpdatePullRequestStatusCommandInput
  | UpdatePullRequestTitleCommandInput
  | UpdateRepositoryDescriptionCommandInput
  | UpdateRepositoryNameCommandInput;

export type ServiceOutputTypes =
  | AssociateApprovalRuleTemplateWithRepositoryCommandOutput
  | BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput
  | BatchDescribeMergeConflictsCommandOutput
  | BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput
  | BatchGetCommitsCommandOutput
  | BatchGetRepositoriesCommandOutput
  | CreateApprovalRuleTemplateCommandOutput
  | CreateBranchCommandOutput
  | CreateCommitCommandOutput
  | CreatePullRequestApprovalRuleCommandOutput
  | CreatePullRequestCommandOutput
  | CreateRepositoryCommandOutput
  | CreateUnreferencedMergeCommitCommandOutput
  | DeleteApprovalRuleTemplateCommandOutput
  | DeleteBranchCommandOutput
  | DeleteCommentContentCommandOutput
  | DeleteFileCommandOutput
  | DeletePullRequestApprovalRuleCommandOutput
  | DeleteRepositoryCommandOutput
  | DescribeMergeConflictsCommandOutput
  | DescribePullRequestEventsCommandOutput
  | DisassociateApprovalRuleTemplateFromRepositoryCommandOutput
  | EvaluatePullRequestApprovalRulesCommandOutput
  | GetApprovalRuleTemplateCommandOutput
  | GetBlobCommandOutput
  | GetBranchCommandOutput
  | GetCommentCommandOutput
  | GetCommentReactionsCommandOutput
  | GetCommentsForComparedCommitCommandOutput
  | GetCommentsForPullRequestCommandOutput
  | GetCommitCommandOutput
  | GetDifferencesCommandOutput
  | GetFileCommandOutput
  | GetFolderCommandOutput
  | GetMergeCommitCommandOutput
  | GetMergeConflictsCommandOutput
  | GetMergeOptionsCommandOutput
  | GetPullRequestApprovalStatesCommandOutput
  | GetPullRequestCommandOutput
  | GetPullRequestOverrideStateCommandOutput
  | GetRepositoryCommandOutput
  | GetRepositoryTriggersCommandOutput
  | ListApprovalRuleTemplatesCommandOutput
  | ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput
  | ListBranchesCommandOutput
  | ListPullRequestsCommandOutput
  | ListRepositoriesCommandOutput
  | ListRepositoriesForApprovalRuleTemplateCommandOutput
  | ListTagsForResourceCommandOutput
  | MergeBranchesByFastForwardCommandOutput
  | MergeBranchesBySquashCommandOutput
  | MergeBranchesByThreeWayCommandOutput
  | MergePullRequestByFastForwardCommandOutput
  | MergePullRequestBySquashCommandOutput
  | MergePullRequestByThreeWayCommandOutput
  | OverridePullRequestApprovalRulesCommandOutput
  | PostCommentForComparedCommitCommandOutput
  | PostCommentForPullRequestCommandOutput
  | PostCommentReplyCommandOutput
  | PutCommentReactionCommandOutput
  | PutFileCommandOutput
  | PutRepositoryTriggersCommandOutput
  | TagResourceCommandOutput
  | TestRepositoryTriggersCommandOutput
  | UntagResourceCommandOutput
  | UpdateApprovalRuleTemplateContentCommandOutput
  | UpdateApprovalRuleTemplateDescriptionCommandOutput
  | UpdateApprovalRuleTemplateNameCommandOutput
  | UpdateCommentCommandOutput
  | UpdateDefaultBranchCommandOutput
  | UpdatePullRequestApprovalRuleContentCommandOutput
  | UpdatePullRequestApprovalStateCommandOutput
  | UpdatePullRequestDescriptionCommandOutput
  | UpdatePullRequestStatusCommandOutput
  | UpdatePullRequestTitleCommandOutput
  | UpdateRepositoryDescriptionCommandOutput
  | UpdateRepositoryNameCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type CodeCommitClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of CodeCommitClient class constructor that set the region, credentials and other options.
 */
export interface CodeCommitClientConfig extends CodeCommitClientConfigType {}

type CodeCommitClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of CodeCommitClient class. This is resolved and normalized from the {@link CodeCommitClientConfig | constructor configuration interface}.
 */
export interface CodeCommitClientResolvedConfig extends CodeCommitClientResolvedConfigType {}

/**
 * <fullname>AWS CodeCommit</fullname>
 *         <p>This is the <i>AWS CodeCommit API Reference</i>. This reference provides descriptions of the operations and data types for
 *             AWS CodeCommit API along with usage examples.</p>
 *         <p>You can use the AWS CodeCommit API to work with the following objects:</p>
 *
 *             <p>Repositories, by calling the following:</p>
 *           <ul>
 *             <li>
 *                   <p>
 *                   <a>BatchGetRepositories</a>, which returns information about one or more repositories associated with your AWS account.</p>
 *             </li>
 *             <li>
 *                   <p>
 *                   <a>CreateRepository</a>, which creates an AWS CodeCommit repository.</p>
 *             </li>
 *             <li>
 *                   <p>
 *                   <a>DeleteRepository</a>, which deletes an AWS CodeCommit repository.</p>
 *             </li>
 *             <li>
 *                   <p>
 *                   <a>GetRepository</a>, which returns information about a specified repository.</p>
 *             </li>
 *             <li>
 *                   <p>
 *                   <a>ListRepositories</a>, which lists all AWS CodeCommit repositories associated with your AWS account.</p>
 *             </li>
 *             <li>
 *                   <p>
 *                   <a>UpdateRepositoryDescription</a>, which sets or updates the description of the repository.</p>
 *               </li>
 *             <li>
 *                   <p>
 *                   <a>UpdateRepositoryName</a>, which changes the name of the
 *                     repository. If you change the name of a repository, no other users of that
 *                     repository can access it until you send them the new HTTPS or SSH URL to
 *                     use.</p>
 *             </li>
 *          </ul>
 *
 *             <p>Branches, by calling the following:</p>
 *             <ul>
 *             <li>
 *                     <p>
 *                   <a>CreateBranch</a>, which creates a branch in a specified
 *                     repository.</p>
 *             </li>
 *             <li>
 *                     <p>
 *                   <a>DeleteBranch</a>, which deletes the specified branch in a repository unless it is the default branch.</p>
 *                 </li>
 *             <li>
 *                     <p>
 *                   <a>GetBranch</a>, which returns information about a specified branch.</p>
 *             </li>
 *             <li>
 *                     <p>
 *                   <a>ListBranches</a>, which lists all branches for a specified repository.</p>
 *             </li>
 *             <li>
 *                     <p>
 *                   <a>UpdateDefaultBranch</a>, which changes the default branch for a repository.</p>
 *             </li>
 *          </ul>
 *
 *         <p>Files, by calling the following:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteFile</a>, which deletes the content of a specified file from a specified branch.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>GetBlob</a>, which returns the base-64 encoded content of an
 *                     individual Git blob object in a repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetFile</a>, which returns the base-64 encoded content of a specified file.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetFolder</a>, which returns the contents of a specified folder or directory.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutFile</a>, which adds or modifies a single file in a specified repository and branch.</p>
 *             </li>
 *          </ul>
 *
 *
 *             <p>Commits, by calling the following:</p>
 *               <ul>
 *             <li>
 *                       <p>
 *                   <a>BatchGetCommits</a>, which returns information about one or more commits in a repository.</p>
 *                   </li>
 *             <li>
 *                <p>
 *                   <a>CreateCommit</a>, which creates a commit for changes to a repository.</p>
 *             </li>
 *             <li>
 *                       <p>
 *                   <a>GetCommit</a>, which returns information about  a commit, including commit
 *                           messages and author and committer information.</p>
 *                   </li>
 *             <li>
 *                       <p>
 *                   <a>GetDifferences</a>, which returns information about the
 *                     differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID,
 *                     or other fully qualified reference).</p>
 *                   </li>
 *          </ul>
 *
 *
 *         <p>Merges, by calling the following:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a>BatchDescribeMergeConflicts</a>, which returns information about conflicts in a merge between commits in a repository.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>CreateUnreferencedMergeCommit</a>, which creates an unreferenced commit between two branches or commits for the
 *                     purpose of comparing them and identifying any potential conflicts.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>DescribeMergeConflicts</a>, which returns information about merge conflicts between the base, source, and destination versions
 *                     of a file in a potential merge.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>GetMergeCommit</a>, which returns information about the merge between a source and destination commit. </p>
 *
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>GetMergeConflicts</a>, which returns information about merge conflicts
 *                     between the source and destination branch in a pull request.</p>
 *             </li>
 *             <li>
 *
 *                 <p>
 *                   <a>GetMergeOptions</a>, which returns information about the available merge options between two branches or commit specifiers.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>MergeBranchesByFastForward</a>, which merges two branches using the fast-forward merge option.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>MergeBranchesBySquash</a>, which merges two branches using the squash merge option.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>MergeBranchesByThreeWay</a>, which merges two branches using the three-way merge option.</p>
 *             </li>
 *          </ul>
 *
 *
 *         <p>Pull requests, by calling the following:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a>CreatePullRequest</a>, which creates a pull request in a specified repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreatePullRequestApprovalRule</a>, which creates an approval rule for a specified pull request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeletePullRequestApprovalRule</a>, which deletes an approval rule for a specified pull request.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>DescribePullRequestEvents</a>, which returns information about one or more pull request events.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>EvaluatePullRequestApprovalRules</a>, which evaluates whether a pull request has met all the conditions specified in its associated approval rules.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>GetCommentsForPullRequest</a>, which returns information about comments on a specified pull request.</p>
 *             </li>
 *             <li>
 *
 *                 <p>
 *                   <a>GetPullRequest</a>, which returns information about a specified pull request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetPullRequestApprovalStates</a>, which returns information about the approval states for a specified pull request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetPullRequestOverrideState</a>, which returns information about whether approval rules have been set aside (overriden) for a
 *             pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>ListPullRequests</a>, which lists all pull requests for a repository.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>MergePullRequestByFastForward</a>, which merges the source destination branch of a pull request into the specified destination
 *                     branch for that pull request using the fast-forward merge option.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>MergePullRequestBySquash</a>, which merges the source destination branch of a pull request into the specified destination
 *                 branch for that pull request using the squash merge option.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>MergePullRequestByThreeWay</a>. which merges the source destination branch of a pull request into the specified destination
 *                 branch for that pull request using the three-way merge option.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>OverridePullRequestApprovalRules</a>, which sets aside all approval rule requirements for a pull request.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>PostCommentForPullRequest</a>, which posts a comment to a pull request at the specified line, file, or request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdatePullRequestApprovalRuleContent</a>, which updates the structure of an approval rule for a pull request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdatePullRequestApprovalState</a>, which updates the state of an approval on a pull request.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>UpdatePullRequestDescription</a>, which updates the description of a pull request.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>UpdatePullRequestStatus</a>, which updates the status of a pull request.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>UpdatePullRequestTitle</a>, which updates the title of a pull request.</p>
 *             </li>
 *          </ul>
 *
 *         <p>Approval rule templates, by calling the following:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>AssociateApprovalRuleTemplateWithRepository</a>, which associates a template
 *                     with a specified repository. After the template is associated with a repository,
 *                     AWS CodeCommit creates approval rules that match the template conditions on
 *                     every pull request created in the specified repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>BatchAssociateApprovalRuleTemplateWithRepositories</a>, which associates a
 *                     template with one or more specified repositories. After the template is
 *                     associated with a repository, AWS CodeCommit creates approval rules that match
 *                     the template conditions on every pull request created in the specified
 *                     repositories.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>BatchDisassociateApprovalRuleTemplateFromRepositories</a>, which removes the
 *                     association between a template and specified repositories so that approval rules
 *                     based on the template are not automatically created when pull requests are
 *                     created in those repositories.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateApprovalRuleTemplate</a>, which creates a template for approval rules that can then be associated with one or more repositories
 *              in your AWS account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteApprovalRuleTemplate</a>, which deletes the specified template. It does not remove approval rules on pull requests already created with the template.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisassociateApprovalRuleTemplateFromRepository</a>, which removes the
 *                     association between a template and a repository so that approval rules based on
 *                     the template are not automatically created when pull requests are created in the
 *                     specified repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetApprovalRuleTemplate</a>, which returns information about an approval rule template.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListApprovalRuleTemplates</a>, which lists all approval rule templates in the AWS Region in your AWS account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAssociatedApprovalRuleTemplatesForRepository</a>, which lists all approval rule templates that are associated with a specified repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListRepositoriesForApprovalRuleTemplate</a>, which lists all repositories associated with the specified approval rule template.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateApprovalRuleTemplateDescription</a>, which updates the description of an
 *                     approval rule template.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateApprovalRuleTemplateName</a>, which updates the name of an approval rule template.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateApprovalRuleTemplateContent</a>, which updates the content of an approval rule template.</p>
 *             </li>
 *          </ul>
 *
 *         <p>Comments in a repository, by calling the following:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a>DeleteCommentContent</a>, which deletes the content of a comment on a commit in a repository.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>GetComment</a>, which returns information about a comment on a commit.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>GetCommentReactions</a>, which returns information about emoji reactions to comments.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>GetCommentsForComparedCommit</a>, which returns information about comments on the comparison between two commit specifiers
 *                     in a repository.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>PostCommentForComparedCommit</a>, which creates a comment on the comparison between two commit specifiers in a repository.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>PostCommentReply</a>, which creates a reply to a comment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutCommentReaction</a>, which creates or updates an emoji reaction to a comment.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>UpdateComment</a>, which updates the content of a comment on a commit in a repository.</p>
 *             </li>
 *          </ul>
 *
 *         <p>Tags used to tag resources in AWS CodeCommit (not Git tags), by calling the following:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>ListTagsForResource</a>, which gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>TagResource</a>, which adds or updates tags for a resource in AWS CodeCommit.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a>, which removes tags for a resource in AWS CodeCommit.</p>
 *             </li>
 *          </ul>
 *
 *             <p>Triggers, by calling the following:</p>
 *                 <ul>
 *             <li>
 *                         <p>
 *                   <a>GetRepositoryTriggers</a>, which returns information about triggers configured
 *                             for a repository.</p>
 *             </li>
 *             <li>
 *                         <p>
 *                   <a>PutRepositoryTriggers</a>, which replaces all triggers for a repository and can
 *                             be used to create or delete triggers.</p>
 *             </li>
 *             <li>
 *                         <p>
 *                   <a>TestRepositoryTriggers</a>, which tests the functionality of a repository trigger
 *                             by sending data to the trigger target.</p>
 *             </li>
 *          </ul>
 *
 *
 *
 *
 *         <p>For information about how to use AWS CodeCommit, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit User Guide</a>.</p>
 */
export class CodeCommitClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodeCommitClientResolvedConfig
> {
  /**
   * The resolved configuration of CodeCommitClient class. This is resolved and normalized from the {@link CodeCommitClientConfig | constructor configuration interface}.
   */
  readonly config: CodeCommitClientResolvedConfig;

  constructor(configuration: CodeCommitClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}

// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CodeCommitClient } from "./CodeCommitClient";
import {
  AssociateApprovalRuleTemplateWithRepositoryCommand,
  AssociateApprovalRuleTemplateWithRepositoryCommandInput,
  AssociateApprovalRuleTemplateWithRepositoryCommandOutput,
} from "./commands/AssociateApprovalRuleTemplateWithRepositoryCommand";
import {
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommand,
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput,
} from "./commands/BatchAssociateApprovalRuleTemplateWithRepositoriesCommand";
import {
  BatchDescribeMergeConflictsCommand,
  BatchDescribeMergeConflictsCommandInput,
  BatchDescribeMergeConflictsCommandOutput,
} from "./commands/BatchDescribeMergeConflictsCommand";
import {
  BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput,
} from "./commands/BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand";
import {
  BatchGetCommitsCommand,
  BatchGetCommitsCommandInput,
  BatchGetCommitsCommandOutput,
} from "./commands/BatchGetCommitsCommand";
import {
  BatchGetRepositoriesCommand,
  BatchGetRepositoriesCommandInput,
  BatchGetRepositoriesCommandOutput,
} from "./commands/BatchGetRepositoriesCommand";
import {
  CreateApprovalRuleTemplateCommand,
  CreateApprovalRuleTemplateCommandInput,
  CreateApprovalRuleTemplateCommandOutput,
} from "./commands/CreateApprovalRuleTemplateCommand";
import {
  CreateBranchCommand,
  CreateBranchCommandInput,
  CreateBranchCommandOutput,
} from "./commands/CreateBranchCommand";
import {
  CreateCommitCommand,
  CreateCommitCommandInput,
  CreateCommitCommandOutput,
} from "./commands/CreateCommitCommand";
import {
  CreatePullRequestApprovalRuleCommand,
  CreatePullRequestApprovalRuleCommandInput,
  CreatePullRequestApprovalRuleCommandOutput,
} from "./commands/CreatePullRequestApprovalRuleCommand";
import {
  CreatePullRequestCommand,
  CreatePullRequestCommandInput,
  CreatePullRequestCommandOutput,
} from "./commands/CreatePullRequestCommand";
import {
  CreateRepositoryCommand,
  CreateRepositoryCommandInput,
  CreateRepositoryCommandOutput,
} from "./commands/CreateRepositoryCommand";
import {
  CreateUnreferencedMergeCommitCommand,
  CreateUnreferencedMergeCommitCommandInput,
  CreateUnreferencedMergeCommitCommandOutput,
} from "./commands/CreateUnreferencedMergeCommitCommand";
import {
  DeleteApprovalRuleTemplateCommand,
  DeleteApprovalRuleTemplateCommandInput,
  DeleteApprovalRuleTemplateCommandOutput,
} from "./commands/DeleteApprovalRuleTemplateCommand";
import {
  DeleteBranchCommand,
  DeleteBranchCommandInput,
  DeleteBranchCommandOutput,
} from "./commands/DeleteBranchCommand";
import {
  DeleteCommentContentCommand,
  DeleteCommentContentCommandInput,
  DeleteCommentContentCommandOutput,
} from "./commands/DeleteCommentContentCommand";
import { DeleteFileCommand, DeleteFileCommandInput, DeleteFileCommandOutput } from "./commands/DeleteFileCommand";
import {
  DeletePullRequestApprovalRuleCommand,
  DeletePullRequestApprovalRuleCommandInput,
  DeletePullRequestApprovalRuleCommandOutput,
} from "./commands/DeletePullRequestApprovalRuleCommand";
import {
  DeleteRepositoryCommand,
  DeleteRepositoryCommandInput,
  DeleteRepositoryCommandOutput,
} from "./commands/DeleteRepositoryCommand";
import {
  DescribeMergeConflictsCommand,
  DescribeMergeConflictsCommandInput,
  DescribeMergeConflictsCommandOutput,
} from "./commands/DescribeMergeConflictsCommand";
import {
  DescribePullRequestEventsCommand,
  DescribePullRequestEventsCommandInput,
  DescribePullRequestEventsCommandOutput,
} from "./commands/DescribePullRequestEventsCommand";
import {
  DisassociateApprovalRuleTemplateFromRepositoryCommand,
  DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
  DisassociateApprovalRuleTemplateFromRepositoryCommandOutput,
} from "./commands/DisassociateApprovalRuleTemplateFromRepositoryCommand";
import {
  EvaluatePullRequestApprovalRulesCommand,
  EvaluatePullRequestApprovalRulesCommandInput,
  EvaluatePullRequestApprovalRulesCommandOutput,
} from "./commands/EvaluatePullRequestApprovalRulesCommand";
import {
  GetApprovalRuleTemplateCommand,
  GetApprovalRuleTemplateCommandInput,
  GetApprovalRuleTemplateCommandOutput,
} from "./commands/GetApprovalRuleTemplateCommand";
import { GetBlobCommand, GetBlobCommandInput, GetBlobCommandOutput } from "./commands/GetBlobCommand";
import { GetBranchCommand, GetBranchCommandInput, GetBranchCommandOutput } from "./commands/GetBranchCommand";
import { GetCommentCommand, GetCommentCommandInput, GetCommentCommandOutput } from "./commands/GetCommentCommand";
import {
  GetCommentReactionsCommand,
  GetCommentReactionsCommandInput,
  GetCommentReactionsCommandOutput,
} from "./commands/GetCommentReactionsCommand";
import {
  GetCommentsForComparedCommitCommand,
  GetCommentsForComparedCommitCommandInput,
  GetCommentsForComparedCommitCommandOutput,
} from "./commands/GetCommentsForComparedCommitCommand";
import {
  GetCommentsForPullRequestCommand,
  GetCommentsForPullRequestCommandInput,
  GetCommentsForPullRequestCommandOutput,
} from "./commands/GetCommentsForPullRequestCommand";
import { GetCommitCommand, GetCommitCommandInput, GetCommitCommandOutput } from "./commands/GetCommitCommand";
import {
  GetDifferencesCommand,
  GetDifferencesCommandInput,
  GetDifferencesCommandOutput,
} from "./commands/GetDifferencesCommand";
import { GetFileCommand, GetFileCommandInput, GetFileCommandOutput } from "./commands/GetFileCommand";
import { GetFolderCommand, GetFolderCommandInput, GetFolderCommandOutput } from "./commands/GetFolderCommand";
import {
  GetMergeCommitCommand,
  GetMergeCommitCommandInput,
  GetMergeCommitCommandOutput,
} from "./commands/GetMergeCommitCommand";
import {
  GetMergeConflictsCommand,
  GetMergeConflictsCommandInput,
  GetMergeConflictsCommandOutput,
} from "./commands/GetMergeConflictsCommand";
import {
  GetMergeOptionsCommand,
  GetMergeOptionsCommandInput,
  GetMergeOptionsCommandOutput,
} from "./commands/GetMergeOptionsCommand";
import {
  GetPullRequestApprovalStatesCommand,
  GetPullRequestApprovalStatesCommandInput,
  GetPullRequestApprovalStatesCommandOutput,
} from "./commands/GetPullRequestApprovalStatesCommand";
import {
  GetPullRequestCommand,
  GetPullRequestCommandInput,
  GetPullRequestCommandOutput,
} from "./commands/GetPullRequestCommand";
import {
  GetPullRequestOverrideStateCommand,
  GetPullRequestOverrideStateCommandInput,
  GetPullRequestOverrideStateCommandOutput,
} from "./commands/GetPullRequestOverrideStateCommand";
import {
  GetRepositoryCommand,
  GetRepositoryCommandInput,
  GetRepositoryCommandOutput,
} from "./commands/GetRepositoryCommand";
import {
  GetRepositoryTriggersCommand,
  GetRepositoryTriggersCommandInput,
  GetRepositoryTriggersCommandOutput,
} from "./commands/GetRepositoryTriggersCommand";
import {
  ListApprovalRuleTemplatesCommand,
  ListApprovalRuleTemplatesCommandInput,
  ListApprovalRuleTemplatesCommandOutput,
} from "./commands/ListApprovalRuleTemplatesCommand";
import {
  ListAssociatedApprovalRuleTemplatesForRepositoryCommand,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput,
} from "./commands/ListAssociatedApprovalRuleTemplatesForRepositoryCommand";
import {
  ListBranchesCommand,
  ListBranchesCommandInput,
  ListBranchesCommandOutput,
} from "./commands/ListBranchesCommand";
import {
  ListPullRequestsCommand,
  ListPullRequestsCommandInput,
  ListPullRequestsCommandOutput,
} from "./commands/ListPullRequestsCommand";
import {
  ListRepositoriesCommand,
  ListRepositoriesCommandInput,
  ListRepositoriesCommandOutput,
} from "./commands/ListRepositoriesCommand";
import {
  ListRepositoriesForApprovalRuleTemplateCommand,
  ListRepositoriesForApprovalRuleTemplateCommandInput,
  ListRepositoriesForApprovalRuleTemplateCommandOutput,
} from "./commands/ListRepositoriesForApprovalRuleTemplateCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  MergeBranchesByFastForwardCommand,
  MergeBranchesByFastForwardCommandInput,
  MergeBranchesByFastForwardCommandOutput,
} from "./commands/MergeBranchesByFastForwardCommand";
import {
  MergeBranchesBySquashCommand,
  MergeBranchesBySquashCommandInput,
  MergeBranchesBySquashCommandOutput,
} from "./commands/MergeBranchesBySquashCommand";
import {
  MergeBranchesByThreeWayCommand,
  MergeBranchesByThreeWayCommandInput,
  MergeBranchesByThreeWayCommandOutput,
} from "./commands/MergeBranchesByThreeWayCommand";
import {
  MergePullRequestByFastForwardCommand,
  MergePullRequestByFastForwardCommandInput,
  MergePullRequestByFastForwardCommandOutput,
} from "./commands/MergePullRequestByFastForwardCommand";
import {
  MergePullRequestBySquashCommand,
  MergePullRequestBySquashCommandInput,
  MergePullRequestBySquashCommandOutput,
} from "./commands/MergePullRequestBySquashCommand";
import {
  MergePullRequestByThreeWayCommand,
  MergePullRequestByThreeWayCommandInput,
  MergePullRequestByThreeWayCommandOutput,
} from "./commands/MergePullRequestByThreeWayCommand";
import {
  OverridePullRequestApprovalRulesCommand,
  OverridePullRequestApprovalRulesCommandInput,
  OverridePullRequestApprovalRulesCommandOutput,
} from "./commands/OverridePullRequestApprovalRulesCommand";
import {
  PostCommentForComparedCommitCommand,
  PostCommentForComparedCommitCommandInput,
  PostCommentForComparedCommitCommandOutput,
} from "./commands/PostCommentForComparedCommitCommand";
import {
  PostCommentForPullRequestCommand,
  PostCommentForPullRequestCommandInput,
  PostCommentForPullRequestCommandOutput,
} from "./commands/PostCommentForPullRequestCommand";
import {
  PostCommentReplyCommand,
  PostCommentReplyCommandInput,
  PostCommentReplyCommandOutput,
} from "./commands/PostCommentReplyCommand";
import {
  PutCommentReactionCommand,
  PutCommentReactionCommandInput,
  PutCommentReactionCommandOutput,
} from "./commands/PutCommentReactionCommand";
import { PutFileCommand, PutFileCommandInput, PutFileCommandOutput } from "./commands/PutFileCommand";
import {
  PutRepositoryTriggersCommand,
  PutRepositoryTriggersCommandInput,
  PutRepositoryTriggersCommandOutput,
} from "./commands/PutRepositoryTriggersCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestRepositoryTriggersCommand,
  TestRepositoryTriggersCommandInput,
  TestRepositoryTriggersCommandOutput,
} from "./commands/TestRepositoryTriggersCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApprovalRuleTemplateContentCommand,
  UpdateApprovalRuleTemplateContentCommandInput,
  UpdateApprovalRuleTemplateContentCommandOutput,
} from "./commands/UpdateApprovalRuleTemplateContentCommand";
import {
  UpdateApprovalRuleTemplateDescriptionCommand,
  UpdateApprovalRuleTemplateDescriptionCommandInput,
  UpdateApprovalRuleTemplateDescriptionCommandOutput,
} from "./commands/UpdateApprovalRuleTemplateDescriptionCommand";
import {
  UpdateApprovalRuleTemplateNameCommand,
  UpdateApprovalRuleTemplateNameCommandInput,
  UpdateApprovalRuleTemplateNameCommandOutput,
} from "./commands/UpdateApprovalRuleTemplateNameCommand";
import {
  UpdateCommentCommand,
  UpdateCommentCommandInput,
  UpdateCommentCommandOutput,
} from "./commands/UpdateCommentCommand";
import {
  UpdateDefaultBranchCommand,
  UpdateDefaultBranchCommandInput,
  UpdateDefaultBranchCommandOutput,
} from "./commands/UpdateDefaultBranchCommand";
import {
  UpdatePullRequestApprovalRuleContentCommand,
  UpdatePullRequestApprovalRuleContentCommandInput,
  UpdatePullRequestApprovalRuleContentCommandOutput,
} from "./commands/UpdatePullRequestApprovalRuleContentCommand";
import {
  UpdatePullRequestApprovalStateCommand,
  UpdatePullRequestApprovalStateCommandInput,
  UpdatePullRequestApprovalStateCommandOutput,
} from "./commands/UpdatePullRequestApprovalStateCommand";
import {
  UpdatePullRequestDescriptionCommand,
  UpdatePullRequestDescriptionCommandInput,
  UpdatePullRequestDescriptionCommandOutput,
} from "./commands/UpdatePullRequestDescriptionCommand";
import {
  UpdatePullRequestStatusCommand,
  UpdatePullRequestStatusCommandInput,
  UpdatePullRequestStatusCommandOutput,
} from "./commands/UpdatePullRequestStatusCommand";
import {
  UpdatePullRequestTitleCommand,
  UpdatePullRequestTitleCommandInput,
  UpdatePullRequestTitleCommandOutput,
} from "./commands/UpdatePullRequestTitleCommand";
import {
  UpdateRepositoryDescriptionCommand,
  UpdateRepositoryDescriptionCommandInput,
  UpdateRepositoryDescriptionCommandOutput,
} from "./commands/UpdateRepositoryDescriptionCommand";
import {
  UpdateRepositoryNameCommand,
  UpdateRepositoryNameCommandInput,
  UpdateRepositoryNameCommandOutput,
} from "./commands/UpdateRepositoryNameCommand";

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
export class CodeCommit extends CodeCommitClient {
  /**
   * <p>Creates an association between an approval rule template and a specified repository.
   *             Then, the next time a pull request is created in the repository where the destination
   *             reference (if specified) matches the destination reference (branch) for the pull
   *             request, an approval rule that matches the template conditions is automatically created
   *             for that pull request. If no destination references are specified in the template, an
   *             approval rule that matches the template contents is created for all pull requests in
   *             that repository.</p>
   */
  public associateApprovalRuleTemplateWithRepository(
    args: AssociateApprovalRuleTemplateWithRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateApprovalRuleTemplateWithRepositoryCommandOutput>;
  public associateApprovalRuleTemplateWithRepository(
    args: AssociateApprovalRuleTemplateWithRepositoryCommandInput,
    cb: (err: any, data?: AssociateApprovalRuleTemplateWithRepositoryCommandOutput) => void
  ): void;
  public associateApprovalRuleTemplateWithRepository(
    args: AssociateApprovalRuleTemplateWithRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateApprovalRuleTemplateWithRepositoryCommandOutput) => void
  ): void;
  public associateApprovalRuleTemplateWithRepository(
    args: AssociateApprovalRuleTemplateWithRepositoryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateApprovalRuleTemplateWithRepositoryCommandOutput) => void),
    cb?: (err: any, data?: AssociateApprovalRuleTemplateWithRepositoryCommandOutput) => void
  ): Promise<AssociateApprovalRuleTemplateWithRepositoryCommandOutput> | void {
    const command = new AssociateApprovalRuleTemplateWithRepositoryCommand(args);
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
   * <p>Creates an association between an approval rule template and one or more specified repositories. </p>
   */
  public batchAssociateApprovalRuleTemplateWithRepositories(
    args: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput>;
  public batchAssociateApprovalRuleTemplateWithRepositories(
    args: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
    cb: (err: any, data?: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput) => void
  ): void;
  public batchAssociateApprovalRuleTemplateWithRepositories(
    args: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput) => void
  ): void;
  public batchAssociateApprovalRuleTemplateWithRepositories(
    args: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput) => void),
    cb?: (err: any, data?: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput) => void
  ): Promise<BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput> | void {
    const command = new BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(args);
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
   * <p>Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.</p>
   */
  public batchDescribeMergeConflicts(
    args: BatchDescribeMergeConflictsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDescribeMergeConflictsCommandOutput>;
  public batchDescribeMergeConflicts(
    args: BatchDescribeMergeConflictsCommandInput,
    cb: (err: any, data?: BatchDescribeMergeConflictsCommandOutput) => void
  ): void;
  public batchDescribeMergeConflicts(
    args: BatchDescribeMergeConflictsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDescribeMergeConflictsCommandOutput) => void
  ): void;
  public batchDescribeMergeConflicts(
    args: BatchDescribeMergeConflictsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDescribeMergeConflictsCommandOutput) => void),
    cb?: (err: any, data?: BatchDescribeMergeConflictsCommandOutput) => void
  ): Promise<BatchDescribeMergeConflictsCommandOutput> | void {
    const command = new BatchDescribeMergeConflictsCommand(args);
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
   * <p>Removes the association between an approval rule template and one or more specified repositories. </p>
   */
  public batchDisassociateApprovalRuleTemplateFromRepositories(
    args: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput>;
  public batchDisassociateApprovalRuleTemplateFromRepositories(
    args: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
    cb: (err: any, data?: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput) => void
  ): void;
  public batchDisassociateApprovalRuleTemplateFromRepositories(
    args: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput) => void
  ): void;
  public batchDisassociateApprovalRuleTemplateFromRepositories(
    args: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput) => void),
    cb?: (err: any, data?: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput) => void
  ): Promise<BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput> | void {
    const command = new BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand(args);
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
   * <p>Returns information about the contents of one or more commits in a repository.</p>
   */
  public batchGetCommits(
    args: BatchGetCommitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCommitsCommandOutput>;
  public batchGetCommits(
    args: BatchGetCommitsCommandInput,
    cb: (err: any, data?: BatchGetCommitsCommandOutput) => void
  ): void;
  public batchGetCommits(
    args: BatchGetCommitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCommitsCommandOutput) => void
  ): void;
  public batchGetCommits(
    args: BatchGetCommitsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetCommitsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetCommitsCommandOutput) => void
  ): Promise<BatchGetCommitsCommandOutput> | void {
    const command = new BatchGetCommitsCommand(args);
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
   * <p>Returns information about one or more repositories.</p>
   *         <note>
   *             <p>The description field for a repository accepts all HTML characters and all valid
   *                 Unicode characters. Applications that do not HTML-encode the description and display
   *                 it in a webpage can expose users to potentially malicious code. Make sure that you
   *                 HTML-encode the description field in any application that uses this API to display
   *                 the repository description on a webpage.</p>
   *          </note>
   */
  public batchGetRepositories(
    args: BatchGetRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetRepositoriesCommandOutput>;
  public batchGetRepositories(
    args: BatchGetRepositoriesCommandInput,
    cb: (err: any, data?: BatchGetRepositoriesCommandOutput) => void
  ): void;
  public batchGetRepositories(
    args: BatchGetRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetRepositoriesCommandOutput) => void
  ): void;
  public batchGetRepositories(
    args: BatchGetRepositoriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetRepositoriesCommandOutput) => void),
    cb?: (err: any, data?: BatchGetRepositoriesCommandOutput) => void
  ): Promise<BatchGetRepositoriesCommandOutput> | void {
    const command = new BatchGetRepositoriesCommand(args);
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
   * <p>Creates a template for approval rules that can then be associated with one or more
   *             repositories in your AWS account. When you associate a template with a repository, AWS
   *             CodeCommit creates an approval rule that matches the conditions of the template for all
   *             pull requests that meet the conditions of the template. For more information, see
   *             <a>AssociateApprovalRuleTemplateWithRepository</a>.</p>
   */
  public createApprovalRuleTemplate(
    args: CreateApprovalRuleTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApprovalRuleTemplateCommandOutput>;
  public createApprovalRuleTemplate(
    args: CreateApprovalRuleTemplateCommandInput,
    cb: (err: any, data?: CreateApprovalRuleTemplateCommandOutput) => void
  ): void;
  public createApprovalRuleTemplate(
    args: CreateApprovalRuleTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApprovalRuleTemplateCommandOutput) => void
  ): void;
  public createApprovalRuleTemplate(
    args: CreateApprovalRuleTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApprovalRuleTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateApprovalRuleTemplateCommandOutput) => void
  ): Promise<CreateApprovalRuleTemplateCommandOutput> | void {
    const command = new CreateApprovalRuleTemplateCommand(args);
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
   * <p>Creates a branch in a repository and points the branch to a commit.</p>
   *         <note>
   *             <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p>
   *          </note>
   */
  public createBranch(
    args: CreateBranchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBranchCommandOutput>;
  public createBranch(args: CreateBranchCommandInput, cb: (err: any, data?: CreateBranchCommandOutput) => void): void;
  public createBranch(
    args: CreateBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBranchCommandOutput) => void
  ): void;
  public createBranch(
    args: CreateBranchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBranchCommandOutput) => void),
    cb?: (err: any, data?: CreateBranchCommandOutput) => void
  ): Promise<CreateBranchCommandOutput> | void {
    const command = new CreateBranchCommand(args);
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
   * <p>Creates a commit for a repository on the tip of a specified branch.</p>
   */
  public createCommit(
    args: CreateCommitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCommitCommandOutput>;
  public createCommit(args: CreateCommitCommandInput, cb: (err: any, data?: CreateCommitCommandOutput) => void): void;
  public createCommit(
    args: CreateCommitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCommitCommandOutput) => void
  ): void;
  public createCommit(
    args: CreateCommitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCommitCommandOutput) => void),
    cb?: (err: any, data?: CreateCommitCommandOutput) => void
  ): Promise<CreateCommitCommandOutput> | void {
    const command = new CreateCommitCommand(args);
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
   * <p>Creates a pull request in the specified repository.</p>
   */
  public createPullRequest(
    args: CreatePullRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePullRequestCommandOutput>;
  public createPullRequest(
    args: CreatePullRequestCommandInput,
    cb: (err: any, data?: CreatePullRequestCommandOutput) => void
  ): void;
  public createPullRequest(
    args: CreatePullRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePullRequestCommandOutput) => void
  ): void;
  public createPullRequest(
    args: CreatePullRequestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePullRequestCommandOutput) => void),
    cb?: (err: any, data?: CreatePullRequestCommandOutput) => void
  ): Promise<CreatePullRequestCommandOutput> | void {
    const command = new CreatePullRequestCommand(args);
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
   * <p>Creates an approval rule for a pull request.</p>
   */
  public createPullRequestApprovalRule(
    args: CreatePullRequestApprovalRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePullRequestApprovalRuleCommandOutput>;
  public createPullRequestApprovalRule(
    args: CreatePullRequestApprovalRuleCommandInput,
    cb: (err: any, data?: CreatePullRequestApprovalRuleCommandOutput) => void
  ): void;
  public createPullRequestApprovalRule(
    args: CreatePullRequestApprovalRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePullRequestApprovalRuleCommandOutput) => void
  ): void;
  public createPullRequestApprovalRule(
    args: CreatePullRequestApprovalRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePullRequestApprovalRuleCommandOutput) => void),
    cb?: (err: any, data?: CreatePullRequestApprovalRuleCommandOutput) => void
  ): Promise<CreatePullRequestApprovalRuleCommandOutput> | void {
    const command = new CreatePullRequestApprovalRuleCommand(args);
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
   * <p>Creates a new, empty repository.</p>
   */
  public createRepository(
    args: CreateRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRepositoryCommandOutput>;
  public createRepository(
    args: CreateRepositoryCommandInput,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;
  public createRepository(
    args: CreateRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;
  public createRepository(
    args: CreateRepositoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRepositoryCommandOutput) => void),
    cb?: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): Promise<CreateRepositoryCommandOutput> | void {
    const command = new CreateRepositoryCommand(args);
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
   * <p>Creates an unreferenced commit that represents the result of merging two branches
   *             using a specified merge strategy. This can help you determine the outcome of a potential
   *             merge. This API cannot be used with the fast-forward merge strategy because that
   *             strategy does not create a merge commit.</p>
   *         <note>
   *             <p>This unreferenced merge commit
   *         can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p>
   *          </note>
   */
  public createUnreferencedMergeCommit(
    args: CreateUnreferencedMergeCommitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUnreferencedMergeCommitCommandOutput>;
  public createUnreferencedMergeCommit(
    args: CreateUnreferencedMergeCommitCommandInput,
    cb: (err: any, data?: CreateUnreferencedMergeCommitCommandOutput) => void
  ): void;
  public createUnreferencedMergeCommit(
    args: CreateUnreferencedMergeCommitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUnreferencedMergeCommitCommandOutput) => void
  ): void;
  public createUnreferencedMergeCommit(
    args: CreateUnreferencedMergeCommitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUnreferencedMergeCommitCommandOutput) => void),
    cb?: (err: any, data?: CreateUnreferencedMergeCommitCommandOutput) => void
  ): Promise<CreateUnreferencedMergeCommitCommandOutput> | void {
    const command = new CreateUnreferencedMergeCommitCommand(args);
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
   * <p>Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.</p>
   */
  public deleteApprovalRuleTemplate(
    args: DeleteApprovalRuleTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApprovalRuleTemplateCommandOutput>;
  public deleteApprovalRuleTemplate(
    args: DeleteApprovalRuleTemplateCommandInput,
    cb: (err: any, data?: DeleteApprovalRuleTemplateCommandOutput) => void
  ): void;
  public deleteApprovalRuleTemplate(
    args: DeleteApprovalRuleTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApprovalRuleTemplateCommandOutput) => void
  ): void;
  public deleteApprovalRuleTemplate(
    args: DeleteApprovalRuleTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApprovalRuleTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteApprovalRuleTemplateCommandOutput) => void
  ): Promise<DeleteApprovalRuleTemplateCommandOutput> | void {
    const command = new DeleteApprovalRuleTemplateCommand(args);
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
   * <p>Deletes a branch from a repository, unless that branch is the default branch for the repository. </p>
   */
  public deleteBranch(
    args: DeleteBranchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBranchCommandOutput>;
  public deleteBranch(args: DeleteBranchCommandInput, cb: (err: any, data?: DeleteBranchCommandOutput) => void): void;
  public deleteBranch(
    args: DeleteBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBranchCommandOutput) => void
  ): void;
  public deleteBranch(
    args: DeleteBranchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBranchCommandOutput) => void),
    cb?: (err: any, data?: DeleteBranchCommandOutput) => void
  ): Promise<DeleteBranchCommandOutput> | void {
    const command = new DeleteBranchCommand(args);
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
   * <p>Deletes the content of a comment made on a change, file, or commit in a repository.</p>
   */
  public deleteCommentContent(
    args: DeleteCommentContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCommentContentCommandOutput>;
  public deleteCommentContent(
    args: DeleteCommentContentCommandInput,
    cb: (err: any, data?: DeleteCommentContentCommandOutput) => void
  ): void;
  public deleteCommentContent(
    args: DeleteCommentContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCommentContentCommandOutput) => void
  ): void;
  public deleteCommentContent(
    args: DeleteCommentContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCommentContentCommandOutput) => void),
    cb?: (err: any, data?: DeleteCommentContentCommandOutput) => void
  ): Promise<DeleteCommentContentCommandOutput> | void {
    const command = new DeleteCommentContentCommand(args);
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
   * <p>Deletes a specified file from a specified branch. A commit is created on the branch
   *             that contains the revision. The file still exists in the commits earlier to the commit
   *             that contains the deletion.</p>
   */
  public deleteFile(args: DeleteFileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFileCommandOutput>;
  public deleteFile(args: DeleteFileCommandInput, cb: (err: any, data?: DeleteFileCommandOutput) => void): void;
  public deleteFile(
    args: DeleteFileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFileCommandOutput) => void
  ): void;
  public deleteFile(
    args: DeleteFileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFileCommandOutput) => void),
    cb?: (err: any, data?: DeleteFileCommandOutput) => void
  ): Promise<DeleteFileCommandOutput> | void {
    const command = new DeleteFileCommand(args);
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
   * <p>Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the
   *             approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the
   *             pull request was created. You cannot delete an approval rule from a merged or closed pull request.</p>
   */
  public deletePullRequestApprovalRule(
    args: DeletePullRequestApprovalRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePullRequestApprovalRuleCommandOutput>;
  public deletePullRequestApprovalRule(
    args: DeletePullRequestApprovalRuleCommandInput,
    cb: (err: any, data?: DeletePullRequestApprovalRuleCommandOutput) => void
  ): void;
  public deletePullRequestApprovalRule(
    args: DeletePullRequestApprovalRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePullRequestApprovalRuleCommandOutput) => void
  ): void;
  public deletePullRequestApprovalRule(
    args: DeletePullRequestApprovalRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePullRequestApprovalRuleCommandOutput) => void),
    cb?: (err: any, data?: DeletePullRequestApprovalRuleCommandOutput) => void
  ): Promise<DeletePullRequestApprovalRuleCommandOutput> | void {
    const command = new DeletePullRequestApprovalRuleCommand(args);
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
   * <p>Deletes a repository. If a specified repository was already deleted, a null repository
   *             ID is returned.</p>
   *         <important>
   *             <p>Deleting a repository also deletes all associated objects and metadata. After a repository is
   *                 deleted, all future push calls to the deleted repository fail.</p>
   *          </important>
   */
  public deleteRepository(
    args: DeleteRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRepositoryCommandOutput>;
  public deleteRepository(
    args: DeleteRepositoryCommandInput,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;
  public deleteRepository(
    args: DeleteRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;
  public deleteRepository(
    args: DeleteRepositoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRepositoryCommandOutput) => void),
    cb?: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): Promise<DeleteRepositoryCommandOutput> | void {
    const command = new DeleteRepositoryCommand(args);
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
   * <p>Returns information about one or more merge conflicts in the attempted merge of two
   *             commit specifiers using the squash or three-way merge strategy. If the merge option for
   *             the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.</p>
   */
  public describeMergeConflicts(
    args: DescribeMergeConflictsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMergeConflictsCommandOutput>;
  public describeMergeConflicts(
    args: DescribeMergeConflictsCommandInput,
    cb: (err: any, data?: DescribeMergeConflictsCommandOutput) => void
  ): void;
  public describeMergeConflicts(
    args: DescribeMergeConflictsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMergeConflictsCommandOutput) => void
  ): void;
  public describeMergeConflicts(
    args: DescribeMergeConflictsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMergeConflictsCommandOutput) => void),
    cb?: (err: any, data?: DescribeMergeConflictsCommandOutput) => void
  ): Promise<DescribeMergeConflictsCommandOutput> | void {
    const command = new DescribeMergeConflictsCommand(args);
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
   * <p>Returns information about one or more pull request events.</p>
   */
  public describePullRequestEvents(
    args: DescribePullRequestEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePullRequestEventsCommandOutput>;
  public describePullRequestEvents(
    args: DescribePullRequestEventsCommandInput,
    cb: (err: any, data?: DescribePullRequestEventsCommandOutput) => void
  ): void;
  public describePullRequestEvents(
    args: DescribePullRequestEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePullRequestEventsCommandOutput) => void
  ): void;
  public describePullRequestEvents(
    args: DescribePullRequestEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePullRequestEventsCommandOutput) => void),
    cb?: (err: any, data?: DescribePullRequestEventsCommandOutput) => void
  ): Promise<DescribePullRequestEventsCommandOutput> | void {
    const command = new DescribePullRequestEventsCommand(args);
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
   * <p>Removes the association between a template and a repository so that approval rules
   *             based on the template are not automatically created when pull requests are created in
   *             the specified repository. This does not delete any approval rules previously created for
   *             pull requests through the template association.</p>
   */
  public disassociateApprovalRuleTemplateFromRepository(
    args: DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateApprovalRuleTemplateFromRepositoryCommandOutput>;
  public disassociateApprovalRuleTemplateFromRepository(
    args: DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
    cb: (err: any, data?: DisassociateApprovalRuleTemplateFromRepositoryCommandOutput) => void
  ): void;
  public disassociateApprovalRuleTemplateFromRepository(
    args: DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateApprovalRuleTemplateFromRepositoryCommandOutput) => void
  ): void;
  public disassociateApprovalRuleTemplateFromRepository(
    args: DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateApprovalRuleTemplateFromRepositoryCommandOutput) => void),
    cb?: (err: any, data?: DisassociateApprovalRuleTemplateFromRepositoryCommandOutput) => void
  ): Promise<DisassociateApprovalRuleTemplateFromRepositoryCommandOutput> | void {
    const command = new DisassociateApprovalRuleTemplateFromRepositoryCommand(args);
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
   * <p>Evaluates whether a pull request has met all the conditions specified in its associated approval rules.</p>
   */
  public evaluatePullRequestApprovalRules(
    args: EvaluatePullRequestApprovalRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EvaluatePullRequestApprovalRulesCommandOutput>;
  public evaluatePullRequestApprovalRules(
    args: EvaluatePullRequestApprovalRulesCommandInput,
    cb: (err: any, data?: EvaluatePullRequestApprovalRulesCommandOutput) => void
  ): void;
  public evaluatePullRequestApprovalRules(
    args: EvaluatePullRequestApprovalRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EvaluatePullRequestApprovalRulesCommandOutput) => void
  ): void;
  public evaluatePullRequestApprovalRules(
    args: EvaluatePullRequestApprovalRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EvaluatePullRequestApprovalRulesCommandOutput) => void),
    cb?: (err: any, data?: EvaluatePullRequestApprovalRulesCommandOutput) => void
  ): Promise<EvaluatePullRequestApprovalRulesCommandOutput> | void {
    const command = new EvaluatePullRequestApprovalRulesCommand(args);
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
   * <p>Returns information about a specified approval rule template.</p>
   */
  public getApprovalRuleTemplate(
    args: GetApprovalRuleTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApprovalRuleTemplateCommandOutput>;
  public getApprovalRuleTemplate(
    args: GetApprovalRuleTemplateCommandInput,
    cb: (err: any, data?: GetApprovalRuleTemplateCommandOutput) => void
  ): void;
  public getApprovalRuleTemplate(
    args: GetApprovalRuleTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApprovalRuleTemplateCommandOutput) => void
  ): void;
  public getApprovalRuleTemplate(
    args: GetApprovalRuleTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApprovalRuleTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetApprovalRuleTemplateCommandOutput) => void
  ): Promise<GetApprovalRuleTemplateCommandOutput> | void {
    const command = new GetApprovalRuleTemplateCommand(args);
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
   * <p>Returns the base-64 encoded content of an individual blob in a repository.</p>
   */
  public getBlob(args: GetBlobCommandInput, options?: __HttpHandlerOptions): Promise<GetBlobCommandOutput>;
  public getBlob(args: GetBlobCommandInput, cb: (err: any, data?: GetBlobCommandOutput) => void): void;
  public getBlob(
    args: GetBlobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlobCommandOutput) => void
  ): void;
  public getBlob(
    args: GetBlobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBlobCommandOutput) => void),
    cb?: (err: any, data?: GetBlobCommandOutput) => void
  ): Promise<GetBlobCommandOutput> | void {
    const command = new GetBlobCommand(args);
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
   * <p>Returns information about a repository branch, including its name and the last commit ID.</p>
   */
  public getBranch(args: GetBranchCommandInput, options?: __HttpHandlerOptions): Promise<GetBranchCommandOutput>;
  public getBranch(args: GetBranchCommandInput, cb: (err: any, data?: GetBranchCommandOutput) => void): void;
  public getBranch(
    args: GetBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBranchCommandOutput) => void
  ): void;
  public getBranch(
    args: GetBranchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBranchCommandOutput) => void),
    cb?: (err: any, data?: GetBranchCommandOutput) => void
  ): Promise<GetBranchCommandOutput> | void {
    const command = new GetBranchCommand(args);
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
   * <p>Returns the content of a comment made on a change, file, or commit in a repository. </p>
   *             <note>
   *             <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of
   *         reactions from active identities, use GetCommentReactions.</p>
   *          </note>
   */
  public getComment(args: GetCommentCommandInput, options?: __HttpHandlerOptions): Promise<GetCommentCommandOutput>;
  public getComment(args: GetCommentCommandInput, cb: (err: any, data?: GetCommentCommandOutput) => void): void;
  public getComment(
    args: GetCommentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCommentCommandOutput) => void
  ): void;
  public getComment(
    args: GetCommentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCommentCommandOutput) => void),
    cb?: (err: any, data?: GetCommentCommandOutput) => void
  ): Promise<GetCommentCommandOutput> | void {
    const command = new GetCommentCommand(args);
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
   * <p>Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.</p>
   */
  public getCommentReactions(
    args: GetCommentReactionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCommentReactionsCommandOutput>;
  public getCommentReactions(
    args: GetCommentReactionsCommandInput,
    cb: (err: any, data?: GetCommentReactionsCommandOutput) => void
  ): void;
  public getCommentReactions(
    args: GetCommentReactionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCommentReactionsCommandOutput) => void
  ): void;
  public getCommentReactions(
    args: GetCommentReactionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCommentReactionsCommandOutput) => void),
    cb?: (err: any, data?: GetCommentReactionsCommandOutput) => void
  ): Promise<GetCommentReactionsCommandOutput> | void {
    const command = new GetCommentReactionsCommand(args);
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
   * <p>Returns information about comments made on the comparison between two commits.</p>
   *         <note>
   *             <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of
   *             reactions from active identities, use GetCommentReactions.</p>
   *          </note>
   */
  public getCommentsForComparedCommit(
    args: GetCommentsForComparedCommitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCommentsForComparedCommitCommandOutput>;
  public getCommentsForComparedCommit(
    args: GetCommentsForComparedCommitCommandInput,
    cb: (err: any, data?: GetCommentsForComparedCommitCommandOutput) => void
  ): void;
  public getCommentsForComparedCommit(
    args: GetCommentsForComparedCommitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCommentsForComparedCommitCommandOutput) => void
  ): void;
  public getCommentsForComparedCommit(
    args: GetCommentsForComparedCommitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCommentsForComparedCommitCommandOutput) => void),
    cb?: (err: any, data?: GetCommentsForComparedCommitCommandOutput) => void
  ): Promise<GetCommentsForComparedCommitCommandOutput> | void {
    const command = new GetCommentsForComparedCommitCommand(args);
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
   * <p>Returns comments made on a pull request.</p>
   *         <note>
   *             <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of
   *             reactions from active identities, use GetCommentReactions.</p>
   *          </note>
   */
  public getCommentsForPullRequest(
    args: GetCommentsForPullRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCommentsForPullRequestCommandOutput>;
  public getCommentsForPullRequest(
    args: GetCommentsForPullRequestCommandInput,
    cb: (err: any, data?: GetCommentsForPullRequestCommandOutput) => void
  ): void;
  public getCommentsForPullRequest(
    args: GetCommentsForPullRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCommentsForPullRequestCommandOutput) => void
  ): void;
  public getCommentsForPullRequest(
    args: GetCommentsForPullRequestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCommentsForPullRequestCommandOutput) => void),
    cb?: (err: any, data?: GetCommentsForPullRequestCommandOutput) => void
  ): Promise<GetCommentsForPullRequestCommandOutput> | void {
    const command = new GetCommentsForPullRequestCommand(args);
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
   * <p>Returns information about a commit, including commit message and committer information.</p>
   */
  public getCommit(args: GetCommitCommandInput, options?: __HttpHandlerOptions): Promise<GetCommitCommandOutput>;
  public getCommit(args: GetCommitCommandInput, cb: (err: any, data?: GetCommitCommandOutput) => void): void;
  public getCommit(
    args: GetCommitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCommitCommandOutput) => void
  ): void;
  public getCommit(
    args: GetCommitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCommitCommandOutput) => void),
    cb?: (err: any, data?: GetCommitCommandOutput) => void
  ): Promise<GetCommitCommandOutput> | void {
    const command = new GetCommitCommand(args);
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
   * <p>Returns information about the differences in a valid commit specifier (such as a
   *             branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be
   *             limited to a specified path.</p>
   */
  public getDifferences(
    args: GetDifferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDifferencesCommandOutput>;
  public getDifferences(
    args: GetDifferencesCommandInput,
    cb: (err: any, data?: GetDifferencesCommandOutput) => void
  ): void;
  public getDifferences(
    args: GetDifferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDifferencesCommandOutput) => void
  ): void;
  public getDifferences(
    args: GetDifferencesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDifferencesCommandOutput) => void),
    cb?: (err: any, data?: GetDifferencesCommandOutput) => void
  ): Promise<GetDifferencesCommandOutput> | void {
    const command = new GetDifferencesCommand(args);
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
   * <p>Returns the base-64 encoded contents of a specified file and its metadata.</p>
   */
  public getFile(args: GetFileCommandInput, options?: __HttpHandlerOptions): Promise<GetFileCommandOutput>;
  public getFile(args: GetFileCommandInput, cb: (err: any, data?: GetFileCommandOutput) => void): void;
  public getFile(
    args: GetFileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFileCommandOutput) => void
  ): void;
  public getFile(
    args: GetFileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFileCommandOutput) => void),
    cb?: (err: any, data?: GetFileCommandOutput) => void
  ): Promise<GetFileCommandOutput> | void {
    const command = new GetFileCommand(args);
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
   * <p>Returns the contents of a specified folder in a repository.</p>
   */
  public getFolder(args: GetFolderCommandInput, options?: __HttpHandlerOptions): Promise<GetFolderCommandOutput>;
  public getFolder(args: GetFolderCommandInput, cb: (err: any, data?: GetFolderCommandOutput) => void): void;
  public getFolder(
    args: GetFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFolderCommandOutput) => void
  ): void;
  public getFolder(
    args: GetFolderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFolderCommandOutput) => void),
    cb?: (err: any, data?: GetFolderCommandOutput) => void
  ): Promise<GetFolderCommandOutput> | void {
    const command = new GetFolderCommand(args);
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
   * <p>Returns information about a specified merge commit.</p>
   */
  public getMergeCommit(
    args: GetMergeCommitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMergeCommitCommandOutput>;
  public getMergeCommit(
    args: GetMergeCommitCommandInput,
    cb: (err: any, data?: GetMergeCommitCommandOutput) => void
  ): void;
  public getMergeCommit(
    args: GetMergeCommitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMergeCommitCommandOutput) => void
  ): void;
  public getMergeCommit(
    args: GetMergeCommitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMergeCommitCommandOutput) => void),
    cb?: (err: any, data?: GetMergeCommitCommandOutput) => void
  ): Promise<GetMergeCommitCommandOutput> | void {
    const command = new GetMergeCommitCommand(args);
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
   * <p>Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.</p>
   */
  public getMergeConflicts(
    args: GetMergeConflictsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMergeConflictsCommandOutput>;
  public getMergeConflicts(
    args: GetMergeConflictsCommandInput,
    cb: (err: any, data?: GetMergeConflictsCommandOutput) => void
  ): void;
  public getMergeConflicts(
    args: GetMergeConflictsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMergeConflictsCommandOutput) => void
  ): void;
  public getMergeConflicts(
    args: GetMergeConflictsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMergeConflictsCommandOutput) => void),
    cb?: (err: any, data?: GetMergeConflictsCommandOutput) => void
  ): Promise<GetMergeConflictsCommandOutput> | void {
    const command = new GetMergeConflictsCommand(args);
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
   * <p>Returns information about the merge options available for merging two specified
   *             branches. For details about why a merge option is not available, use GetMergeConflicts
   *             or DescribeMergeConflicts.</p>
   */
  public getMergeOptions(
    args: GetMergeOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMergeOptionsCommandOutput>;
  public getMergeOptions(
    args: GetMergeOptionsCommandInput,
    cb: (err: any, data?: GetMergeOptionsCommandOutput) => void
  ): void;
  public getMergeOptions(
    args: GetMergeOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMergeOptionsCommandOutput) => void
  ): void;
  public getMergeOptions(
    args: GetMergeOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMergeOptionsCommandOutput) => void),
    cb?: (err: any, data?: GetMergeOptionsCommandOutput) => void
  ): Promise<GetMergeOptionsCommandOutput> | void {
    const command = new GetMergeOptionsCommand(args);
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
   * <p>Gets information about a pull request in a specified repository.</p>
   */
  public getPullRequest(
    args: GetPullRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPullRequestCommandOutput>;
  public getPullRequest(
    args: GetPullRequestCommandInput,
    cb: (err: any, data?: GetPullRequestCommandOutput) => void
  ): void;
  public getPullRequest(
    args: GetPullRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPullRequestCommandOutput) => void
  ): void;
  public getPullRequest(
    args: GetPullRequestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPullRequestCommandOutput) => void),
    cb?: (err: any, data?: GetPullRequestCommandOutput) => void
  ): Promise<GetPullRequestCommandOutput> | void {
    const command = new GetPullRequestCommand(args);
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
   * <p>Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more
   *         approval rules applied to them.</p>
   */
  public getPullRequestApprovalStates(
    args: GetPullRequestApprovalStatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPullRequestApprovalStatesCommandOutput>;
  public getPullRequestApprovalStates(
    args: GetPullRequestApprovalStatesCommandInput,
    cb: (err: any, data?: GetPullRequestApprovalStatesCommandOutput) => void
  ): void;
  public getPullRequestApprovalStates(
    args: GetPullRequestApprovalStatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPullRequestApprovalStatesCommandOutput) => void
  ): void;
  public getPullRequestApprovalStates(
    args: GetPullRequestApprovalStatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPullRequestApprovalStatesCommandOutput) => void),
    cb?: (err: any, data?: GetPullRequestApprovalStatesCommandOutput) => void
  ): Promise<GetPullRequestApprovalStatesCommandOutput> | void {
    const command = new GetPullRequestApprovalStatesCommand(args);
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
   * <p>Returns information about whether approval rules have been set aside (overridden) for a
   *             pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p>
   */
  public getPullRequestOverrideState(
    args: GetPullRequestOverrideStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPullRequestOverrideStateCommandOutput>;
  public getPullRequestOverrideState(
    args: GetPullRequestOverrideStateCommandInput,
    cb: (err: any, data?: GetPullRequestOverrideStateCommandOutput) => void
  ): void;
  public getPullRequestOverrideState(
    args: GetPullRequestOverrideStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPullRequestOverrideStateCommandOutput) => void
  ): void;
  public getPullRequestOverrideState(
    args: GetPullRequestOverrideStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPullRequestOverrideStateCommandOutput) => void),
    cb?: (err: any, data?: GetPullRequestOverrideStateCommandOutput) => void
  ): Promise<GetPullRequestOverrideStateCommandOutput> | void {
    const command = new GetPullRequestOverrideStateCommand(args);
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
   * <p>Returns information about a repository.</p>
   *
   *         <note>
   *             <p>The description field for a repository accepts all HTML characters and all valid
   *                 Unicode characters. Applications that do not HTML-encode the description and display
   *                 it in a webpage can expose users to potentially malicious code. Make sure that you
   *                 HTML-encode the description field in any application that uses this API to display
   *                 the repository description on a webpage.</p>
   *          </note>
   */
  public getRepository(
    args: GetRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRepositoryCommandOutput>;
  public getRepository(
    args: GetRepositoryCommandInput,
    cb: (err: any, data?: GetRepositoryCommandOutput) => void
  ): void;
  public getRepository(
    args: GetRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRepositoryCommandOutput) => void
  ): void;
  public getRepository(
    args: GetRepositoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRepositoryCommandOutput) => void),
    cb?: (err: any, data?: GetRepositoryCommandOutput) => void
  ): Promise<GetRepositoryCommandOutput> | void {
    const command = new GetRepositoryCommand(args);
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
   * <p>Gets information about triggers configured for a repository.</p>
   */
  public getRepositoryTriggers(
    args: GetRepositoryTriggersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRepositoryTriggersCommandOutput>;
  public getRepositoryTriggers(
    args: GetRepositoryTriggersCommandInput,
    cb: (err: any, data?: GetRepositoryTriggersCommandOutput) => void
  ): void;
  public getRepositoryTriggers(
    args: GetRepositoryTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRepositoryTriggersCommandOutput) => void
  ): void;
  public getRepositoryTriggers(
    args: GetRepositoryTriggersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRepositoryTriggersCommandOutput) => void),
    cb?: (err: any, data?: GetRepositoryTriggersCommandOutput) => void
  ): Promise<GetRepositoryTriggersCommandOutput> | void {
    const command = new GetRepositoryTriggersCommand(args);
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
   * <p>Lists all approval rule templates in the specified AWS Region in your AWS account. If
   *             an AWS Region is not specified, the AWS Region where you are signed in is used.</p>
   */
  public listApprovalRuleTemplates(
    args: ListApprovalRuleTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApprovalRuleTemplatesCommandOutput>;
  public listApprovalRuleTemplates(
    args: ListApprovalRuleTemplatesCommandInput,
    cb: (err: any, data?: ListApprovalRuleTemplatesCommandOutput) => void
  ): void;
  public listApprovalRuleTemplates(
    args: ListApprovalRuleTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApprovalRuleTemplatesCommandOutput) => void
  ): void;
  public listApprovalRuleTemplates(
    args: ListApprovalRuleTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApprovalRuleTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListApprovalRuleTemplatesCommandOutput) => void
  ): Promise<ListApprovalRuleTemplatesCommandOutput> | void {
    const command = new ListApprovalRuleTemplatesCommand(args);
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
   * <p>Lists all approval rule templates that are associated with a specified repository.</p>
   */
  public listAssociatedApprovalRuleTemplatesForRepository(
    args: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput>;
  public listAssociatedApprovalRuleTemplatesForRepository(
    args: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
    cb: (err: any, data?: ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput) => void
  ): void;
  public listAssociatedApprovalRuleTemplatesForRepository(
    args: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput) => void
  ): void;
  public listAssociatedApprovalRuleTemplatesForRepository(
    args: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput) => void),
    cb?: (err: any, data?: ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput) => void
  ): Promise<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput> | void {
    const command = new ListAssociatedApprovalRuleTemplatesForRepositoryCommand(args);
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
   * <p>Gets information about one or more branches in a repository.</p>
   */
  public listBranches(
    args: ListBranchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBranchesCommandOutput>;
  public listBranches(args: ListBranchesCommandInput, cb: (err: any, data?: ListBranchesCommandOutput) => void): void;
  public listBranches(
    args: ListBranchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBranchesCommandOutput) => void
  ): void;
  public listBranches(
    args: ListBranchesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBranchesCommandOutput) => void),
    cb?: (err: any, data?: ListBranchesCommandOutput) => void
  ): Promise<ListBranchesCommandOutput> | void {
    const command = new ListBranchesCommand(args);
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
   * <p>Returns a list of pull requests for a specified repository. The return list can be refined by pull request
   *         status or pull request author ARN.</p>
   */
  public listPullRequests(
    args: ListPullRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPullRequestsCommandOutput>;
  public listPullRequests(
    args: ListPullRequestsCommandInput,
    cb: (err: any, data?: ListPullRequestsCommandOutput) => void
  ): void;
  public listPullRequests(
    args: ListPullRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPullRequestsCommandOutput) => void
  ): void;
  public listPullRequests(
    args: ListPullRequestsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPullRequestsCommandOutput) => void),
    cb?: (err: any, data?: ListPullRequestsCommandOutput) => void
  ): Promise<ListPullRequestsCommandOutput> | void {
    const command = new ListPullRequestsCommand(args);
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
   * <p>Gets information about one or more repositories.</p>
   */
  public listRepositories(
    args: ListRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRepositoriesCommandOutput>;
  public listRepositories(
    args: ListRepositoriesCommandInput,
    cb: (err: any, data?: ListRepositoriesCommandOutput) => void
  ): void;
  public listRepositories(
    args: ListRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRepositoriesCommandOutput) => void
  ): void;
  public listRepositories(
    args: ListRepositoriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRepositoriesCommandOutput) => void),
    cb?: (err: any, data?: ListRepositoriesCommandOutput) => void
  ): Promise<ListRepositoriesCommandOutput> | void {
    const command = new ListRepositoriesCommand(args);
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
   * <p>Lists all repositories associated with the specified approval rule template.</p>
   */
  public listRepositoriesForApprovalRuleTemplate(
    args: ListRepositoriesForApprovalRuleTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRepositoriesForApprovalRuleTemplateCommandOutput>;
  public listRepositoriesForApprovalRuleTemplate(
    args: ListRepositoriesForApprovalRuleTemplateCommandInput,
    cb: (err: any, data?: ListRepositoriesForApprovalRuleTemplateCommandOutput) => void
  ): void;
  public listRepositoriesForApprovalRuleTemplate(
    args: ListRepositoriesForApprovalRuleTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRepositoriesForApprovalRuleTemplateCommandOutput) => void
  ): void;
  public listRepositoriesForApprovalRuleTemplate(
    args: ListRepositoriesForApprovalRuleTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListRepositoriesForApprovalRuleTemplateCommandOutput) => void),
    cb?: (err: any, data?: ListRepositoriesForApprovalRuleTemplateCommandOutput) => void
  ): Promise<ListRepositoriesForApprovalRuleTemplateCommandOutput> | void {
    const command = new ListRepositoriesForApprovalRuleTemplateCommand(args);
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
   * <p>Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS
   *             CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User
   *                 Guide</i>.</p>
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
   * <p>Merges two branches using the fast-forward merge strategy.</p>
   */
  public mergeBranchesByFastForward(
    args: MergeBranchesByFastForwardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MergeBranchesByFastForwardCommandOutput>;
  public mergeBranchesByFastForward(
    args: MergeBranchesByFastForwardCommandInput,
    cb: (err: any, data?: MergeBranchesByFastForwardCommandOutput) => void
  ): void;
  public mergeBranchesByFastForward(
    args: MergeBranchesByFastForwardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MergeBranchesByFastForwardCommandOutput) => void
  ): void;
  public mergeBranchesByFastForward(
    args: MergeBranchesByFastForwardCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MergeBranchesByFastForwardCommandOutput) => void),
    cb?: (err: any, data?: MergeBranchesByFastForwardCommandOutput) => void
  ): Promise<MergeBranchesByFastForwardCommandOutput> | void {
    const command = new MergeBranchesByFastForwardCommand(args);
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
   * <p>Merges two branches using the squash merge strategy.</p>
   */
  public mergeBranchesBySquash(
    args: MergeBranchesBySquashCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MergeBranchesBySquashCommandOutput>;
  public mergeBranchesBySquash(
    args: MergeBranchesBySquashCommandInput,
    cb: (err: any, data?: MergeBranchesBySquashCommandOutput) => void
  ): void;
  public mergeBranchesBySquash(
    args: MergeBranchesBySquashCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MergeBranchesBySquashCommandOutput) => void
  ): void;
  public mergeBranchesBySquash(
    args: MergeBranchesBySquashCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MergeBranchesBySquashCommandOutput) => void),
    cb?: (err: any, data?: MergeBranchesBySquashCommandOutput) => void
  ): Promise<MergeBranchesBySquashCommandOutput> | void {
    const command = new MergeBranchesBySquashCommand(args);
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
   * <p>Merges two specified branches using the three-way merge strategy.</p>
   */
  public mergeBranchesByThreeWay(
    args: MergeBranchesByThreeWayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MergeBranchesByThreeWayCommandOutput>;
  public mergeBranchesByThreeWay(
    args: MergeBranchesByThreeWayCommandInput,
    cb: (err: any, data?: MergeBranchesByThreeWayCommandOutput) => void
  ): void;
  public mergeBranchesByThreeWay(
    args: MergeBranchesByThreeWayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MergeBranchesByThreeWayCommandOutput) => void
  ): void;
  public mergeBranchesByThreeWay(
    args: MergeBranchesByThreeWayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MergeBranchesByThreeWayCommandOutput) => void),
    cb?: (err: any, data?: MergeBranchesByThreeWayCommandOutput) => void
  ): Promise<MergeBranchesByThreeWayCommandOutput> | void {
    const command = new MergeBranchesByThreeWayCommand(args);
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
   * <p>Attempts to merge the source commit of a pull request into the specified destination
   *             branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.</p>
   */
  public mergePullRequestByFastForward(
    args: MergePullRequestByFastForwardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MergePullRequestByFastForwardCommandOutput>;
  public mergePullRequestByFastForward(
    args: MergePullRequestByFastForwardCommandInput,
    cb: (err: any, data?: MergePullRequestByFastForwardCommandOutput) => void
  ): void;
  public mergePullRequestByFastForward(
    args: MergePullRequestByFastForwardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MergePullRequestByFastForwardCommandOutput) => void
  ): void;
  public mergePullRequestByFastForward(
    args: MergePullRequestByFastForwardCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MergePullRequestByFastForwardCommandOutput) => void),
    cb?: (err: any, data?: MergePullRequestByFastForwardCommandOutput) => void
  ): Promise<MergePullRequestByFastForwardCommandOutput> | void {
    const command = new MergePullRequestByFastForwardCommand(args);
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
   * <p>Attempts to merge the source commit of a pull request into the specified destination
   *             branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.</p>
   */
  public mergePullRequestBySquash(
    args: MergePullRequestBySquashCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MergePullRequestBySquashCommandOutput>;
  public mergePullRequestBySquash(
    args: MergePullRequestBySquashCommandInput,
    cb: (err: any, data?: MergePullRequestBySquashCommandOutput) => void
  ): void;
  public mergePullRequestBySquash(
    args: MergePullRequestBySquashCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MergePullRequestBySquashCommandOutput) => void
  ): void;
  public mergePullRequestBySquash(
    args: MergePullRequestBySquashCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MergePullRequestBySquashCommandOutput) => void),
    cb?: (err: any, data?: MergePullRequestBySquashCommandOutput) => void
  ): Promise<MergePullRequestBySquashCommandOutput> | void {
    const command = new MergePullRequestBySquashCommand(args);
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
   * <p>Attempts to merge the source commit of a pull request into the specified destination
   *             branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.</p>
   */
  public mergePullRequestByThreeWay(
    args: MergePullRequestByThreeWayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MergePullRequestByThreeWayCommandOutput>;
  public mergePullRequestByThreeWay(
    args: MergePullRequestByThreeWayCommandInput,
    cb: (err: any, data?: MergePullRequestByThreeWayCommandOutput) => void
  ): void;
  public mergePullRequestByThreeWay(
    args: MergePullRequestByThreeWayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MergePullRequestByThreeWayCommandOutput) => void
  ): void;
  public mergePullRequestByThreeWay(
    args: MergePullRequestByThreeWayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MergePullRequestByThreeWayCommandOutput) => void),
    cb?: (err: any, data?: MergePullRequestByThreeWayCommandOutput) => void
  ): Promise<MergePullRequestByThreeWayCommandOutput> | void {
    const command = new MergePullRequestByThreeWayCommand(args);
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
   * <p>Sets aside (overrides) all approval rule requirements for a specified pull request.</p>
   */
  public overridePullRequestApprovalRules(
    args: OverridePullRequestApprovalRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OverridePullRequestApprovalRulesCommandOutput>;
  public overridePullRequestApprovalRules(
    args: OverridePullRequestApprovalRulesCommandInput,
    cb: (err: any, data?: OverridePullRequestApprovalRulesCommandOutput) => void
  ): void;
  public overridePullRequestApprovalRules(
    args: OverridePullRequestApprovalRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OverridePullRequestApprovalRulesCommandOutput) => void
  ): void;
  public overridePullRequestApprovalRules(
    args: OverridePullRequestApprovalRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: OverridePullRequestApprovalRulesCommandOutput) => void),
    cb?: (err: any, data?: OverridePullRequestApprovalRulesCommandOutput) => void
  ): Promise<OverridePullRequestApprovalRulesCommandOutput> | void {
    const command = new OverridePullRequestApprovalRulesCommand(args);
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
   * <p>Posts a comment on the comparison between two commits.</p>
   */
  public postCommentForComparedCommit(
    args: PostCommentForComparedCommitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PostCommentForComparedCommitCommandOutput>;
  public postCommentForComparedCommit(
    args: PostCommentForComparedCommitCommandInput,
    cb: (err: any, data?: PostCommentForComparedCommitCommandOutput) => void
  ): void;
  public postCommentForComparedCommit(
    args: PostCommentForComparedCommitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostCommentForComparedCommitCommandOutput) => void
  ): void;
  public postCommentForComparedCommit(
    args: PostCommentForComparedCommitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PostCommentForComparedCommitCommandOutput) => void),
    cb?: (err: any, data?: PostCommentForComparedCommitCommandOutput) => void
  ): Promise<PostCommentForComparedCommitCommandOutput> | void {
    const command = new PostCommentForComparedCommitCommand(args);
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
   * <p>Posts a comment on a pull request.</p>
   */
  public postCommentForPullRequest(
    args: PostCommentForPullRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PostCommentForPullRequestCommandOutput>;
  public postCommentForPullRequest(
    args: PostCommentForPullRequestCommandInput,
    cb: (err: any, data?: PostCommentForPullRequestCommandOutput) => void
  ): void;
  public postCommentForPullRequest(
    args: PostCommentForPullRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostCommentForPullRequestCommandOutput) => void
  ): void;
  public postCommentForPullRequest(
    args: PostCommentForPullRequestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PostCommentForPullRequestCommandOutput) => void),
    cb?: (err: any, data?: PostCommentForPullRequestCommandOutput) => void
  ): Promise<PostCommentForPullRequestCommandOutput> | void {
    const command = new PostCommentForPullRequestCommand(args);
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
   * <p>Posts a comment in reply to an existing comment on a comparison between commits or a pull request.</p>
   */
  public postCommentReply(
    args: PostCommentReplyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PostCommentReplyCommandOutput>;
  public postCommentReply(
    args: PostCommentReplyCommandInput,
    cb: (err: any, data?: PostCommentReplyCommandOutput) => void
  ): void;
  public postCommentReply(
    args: PostCommentReplyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostCommentReplyCommandOutput) => void
  ): void;
  public postCommentReply(
    args: PostCommentReplyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PostCommentReplyCommandOutput) => void),
    cb?: (err: any, data?: PostCommentReplyCommandOutput) => void
  ): Promise<PostCommentReplyCommandOutput> | void {
    const command = new PostCommentReplyCommand(args);
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
   * <p>Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or
   *         update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.</p>
   */
  public putCommentReaction(
    args: PutCommentReactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutCommentReactionCommandOutput>;
  public putCommentReaction(
    args: PutCommentReactionCommandInput,
    cb: (err: any, data?: PutCommentReactionCommandOutput) => void
  ): void;
  public putCommentReaction(
    args: PutCommentReactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutCommentReactionCommandOutput) => void
  ): void;
  public putCommentReaction(
    args: PutCommentReactionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutCommentReactionCommandOutput) => void),
    cb?: (err: any, data?: PutCommentReactionCommandOutput) => void
  ): Promise<PutCommentReactionCommandOutput> | void {
    const command = new PutCommentReactionCommand(args);
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
   * <p>Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.</p>
   */
  public putFile(args: PutFileCommandInput, options?: __HttpHandlerOptions): Promise<PutFileCommandOutput>;
  public putFile(args: PutFileCommandInput, cb: (err: any, data?: PutFileCommandOutput) => void): void;
  public putFile(
    args: PutFileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFileCommandOutput) => void
  ): void;
  public putFile(
    args: PutFileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutFileCommandOutput) => void),
    cb?: (err: any, data?: PutFileCommandOutput) => void
  ): Promise<PutFileCommandOutput> | void {
    const command = new PutFileCommand(args);
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
   * <p>Replaces all triggers for a repository. Used to create or delete triggers.</p>
   */
  public putRepositoryTriggers(
    args: PutRepositoryTriggersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRepositoryTriggersCommandOutput>;
  public putRepositoryTriggers(
    args: PutRepositoryTriggersCommandInput,
    cb: (err: any, data?: PutRepositoryTriggersCommandOutput) => void
  ): void;
  public putRepositoryTriggers(
    args: PutRepositoryTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRepositoryTriggersCommandOutput) => void
  ): void;
  public putRepositoryTriggers(
    args: PutRepositoryTriggersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRepositoryTriggersCommandOutput) => void),
    cb?: (err: any, data?: PutRepositoryTriggersCommandOutput) => void
  ): Promise<PutRepositoryTriggersCommandOutput> | void {
    const command = new PutRepositoryTriggersCommand(args);
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
   * <p>Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources
   *             in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User
   *                 Guide</i>.</p>
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
   * <p>Tests the functionality of repository triggers by sending information to the trigger
   *             target. If real data is available in the repository, the test sends data from the last
   *             commit. If no data is available, sample data is generated.</p>
   */
  public testRepositoryTriggers(
    args: TestRepositoryTriggersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestRepositoryTriggersCommandOutput>;
  public testRepositoryTriggers(
    args: TestRepositoryTriggersCommandInput,
    cb: (err: any, data?: TestRepositoryTriggersCommandOutput) => void
  ): void;
  public testRepositoryTriggers(
    args: TestRepositoryTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestRepositoryTriggersCommandOutput) => void
  ): void;
  public testRepositoryTriggers(
    args: TestRepositoryTriggersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestRepositoryTriggersCommandOutput) => void),
    cb?: (err: any, data?: TestRepositoryTriggersCommandOutput) => void
  ): Promise<TestRepositoryTriggersCommandOutput> | void {
    const command = new TestRepositoryTriggersCommand(args);
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
   * <p>Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS
   *             CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User
   *                 Guide</i>.</p>
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

  /**
   * <p>Updates the content of an approval rule template. You can change the number of
   *             required approvals, the membership of the approval rule, and whether an approval pool is
   *             defined.</p>
   */
  public updateApprovalRuleTemplateContent(
    args: UpdateApprovalRuleTemplateContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApprovalRuleTemplateContentCommandOutput>;
  public updateApprovalRuleTemplateContent(
    args: UpdateApprovalRuleTemplateContentCommandInput,
    cb: (err: any, data?: UpdateApprovalRuleTemplateContentCommandOutput) => void
  ): void;
  public updateApprovalRuleTemplateContent(
    args: UpdateApprovalRuleTemplateContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApprovalRuleTemplateContentCommandOutput) => void
  ): void;
  public updateApprovalRuleTemplateContent(
    args: UpdateApprovalRuleTemplateContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApprovalRuleTemplateContentCommandOutput) => void),
    cb?: (err: any, data?: UpdateApprovalRuleTemplateContentCommandOutput) => void
  ): Promise<UpdateApprovalRuleTemplateContentCommandOutput> | void {
    const command = new UpdateApprovalRuleTemplateContentCommand(args);
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
   * <p>Updates the description for a specified approval rule template.</p>
   */
  public updateApprovalRuleTemplateDescription(
    args: UpdateApprovalRuleTemplateDescriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApprovalRuleTemplateDescriptionCommandOutput>;
  public updateApprovalRuleTemplateDescription(
    args: UpdateApprovalRuleTemplateDescriptionCommandInput,
    cb: (err: any, data?: UpdateApprovalRuleTemplateDescriptionCommandOutput) => void
  ): void;
  public updateApprovalRuleTemplateDescription(
    args: UpdateApprovalRuleTemplateDescriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApprovalRuleTemplateDescriptionCommandOutput) => void
  ): void;
  public updateApprovalRuleTemplateDescription(
    args: UpdateApprovalRuleTemplateDescriptionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateApprovalRuleTemplateDescriptionCommandOutput) => void),
    cb?: (err: any, data?: UpdateApprovalRuleTemplateDescriptionCommandOutput) => void
  ): Promise<UpdateApprovalRuleTemplateDescriptionCommandOutput> | void {
    const command = new UpdateApprovalRuleTemplateDescriptionCommand(args);
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
   * <p>Updates the name of a specified approval rule template.</p>
   */
  public updateApprovalRuleTemplateName(
    args: UpdateApprovalRuleTemplateNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApprovalRuleTemplateNameCommandOutput>;
  public updateApprovalRuleTemplateName(
    args: UpdateApprovalRuleTemplateNameCommandInput,
    cb: (err: any, data?: UpdateApprovalRuleTemplateNameCommandOutput) => void
  ): void;
  public updateApprovalRuleTemplateName(
    args: UpdateApprovalRuleTemplateNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApprovalRuleTemplateNameCommandOutput) => void
  ): void;
  public updateApprovalRuleTemplateName(
    args: UpdateApprovalRuleTemplateNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApprovalRuleTemplateNameCommandOutput) => void),
    cb?: (err: any, data?: UpdateApprovalRuleTemplateNameCommandOutput) => void
  ): Promise<UpdateApprovalRuleTemplateNameCommandOutput> | void {
    const command = new UpdateApprovalRuleTemplateNameCommand(args);
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
   * <p>Replaces the contents of a comment.</p>
   */
  public updateComment(
    args: UpdateCommentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCommentCommandOutput>;
  public updateComment(
    args: UpdateCommentCommandInput,
    cb: (err: any, data?: UpdateCommentCommandOutput) => void
  ): void;
  public updateComment(
    args: UpdateCommentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCommentCommandOutput) => void
  ): void;
  public updateComment(
    args: UpdateCommentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCommentCommandOutput) => void),
    cb?: (err: any, data?: UpdateCommentCommandOutput) => void
  ): Promise<UpdateCommentCommandOutput> | void {
    const command = new UpdateCommentCommand(args);
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
   * <p>Sets or changes the default branch name for the specified repository.</p>
   *         <note>
   *             <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p>
   *          </note>
   */
  public updateDefaultBranch(
    args: UpdateDefaultBranchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDefaultBranchCommandOutput>;
  public updateDefaultBranch(
    args: UpdateDefaultBranchCommandInput,
    cb: (err: any, data?: UpdateDefaultBranchCommandOutput) => void
  ): void;
  public updateDefaultBranch(
    args: UpdateDefaultBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDefaultBranchCommandOutput) => void
  ): void;
  public updateDefaultBranch(
    args: UpdateDefaultBranchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDefaultBranchCommandOutput) => void),
    cb?: (err: any, data?: UpdateDefaultBranchCommandOutput) => void
  ): Promise<UpdateDefaultBranchCommandOutput> | void {
    const command = new UpdateDefaultBranchCommand(args);
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
   * <p>Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and
   *             the approval pool for approvers. </p>
   */
  public updatePullRequestApprovalRuleContent(
    args: UpdatePullRequestApprovalRuleContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePullRequestApprovalRuleContentCommandOutput>;
  public updatePullRequestApprovalRuleContent(
    args: UpdatePullRequestApprovalRuleContentCommandInput,
    cb: (err: any, data?: UpdatePullRequestApprovalRuleContentCommandOutput) => void
  ): void;
  public updatePullRequestApprovalRuleContent(
    args: UpdatePullRequestApprovalRuleContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePullRequestApprovalRuleContentCommandOutput) => void
  ): void;
  public updatePullRequestApprovalRuleContent(
    args: UpdatePullRequestApprovalRuleContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePullRequestApprovalRuleContentCommandOutput) => void),
    cb?: (err: any, data?: UpdatePullRequestApprovalRuleContentCommandOutput) => void
  ): Promise<UpdatePullRequestApprovalRuleContentCommandOutput> | void {
    const command = new UpdatePullRequestApprovalRuleContentCommand(args);
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
   * <p>Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.</p>
   */
  public updatePullRequestApprovalState(
    args: UpdatePullRequestApprovalStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePullRequestApprovalStateCommandOutput>;
  public updatePullRequestApprovalState(
    args: UpdatePullRequestApprovalStateCommandInput,
    cb: (err: any, data?: UpdatePullRequestApprovalStateCommandOutput) => void
  ): void;
  public updatePullRequestApprovalState(
    args: UpdatePullRequestApprovalStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePullRequestApprovalStateCommandOutput) => void
  ): void;
  public updatePullRequestApprovalState(
    args: UpdatePullRequestApprovalStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePullRequestApprovalStateCommandOutput) => void),
    cb?: (err: any, data?: UpdatePullRequestApprovalStateCommandOutput) => void
  ): Promise<UpdatePullRequestApprovalStateCommandOutput> | void {
    const command = new UpdatePullRequestApprovalStateCommand(args);
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
   * <p>Replaces the contents of the description of a pull request.</p>
   */
  public updatePullRequestDescription(
    args: UpdatePullRequestDescriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePullRequestDescriptionCommandOutput>;
  public updatePullRequestDescription(
    args: UpdatePullRequestDescriptionCommandInput,
    cb: (err: any, data?: UpdatePullRequestDescriptionCommandOutput) => void
  ): void;
  public updatePullRequestDescription(
    args: UpdatePullRequestDescriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePullRequestDescriptionCommandOutput) => void
  ): void;
  public updatePullRequestDescription(
    args: UpdatePullRequestDescriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePullRequestDescriptionCommandOutput) => void),
    cb?: (err: any, data?: UpdatePullRequestDescriptionCommandOutput) => void
  ): Promise<UpdatePullRequestDescriptionCommandOutput> | void {
    const command = new UpdatePullRequestDescriptionCommand(args);
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
   * <p>Updates the status of a pull request. </p>
   */
  public updatePullRequestStatus(
    args: UpdatePullRequestStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePullRequestStatusCommandOutput>;
  public updatePullRequestStatus(
    args: UpdatePullRequestStatusCommandInput,
    cb: (err: any, data?: UpdatePullRequestStatusCommandOutput) => void
  ): void;
  public updatePullRequestStatus(
    args: UpdatePullRequestStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePullRequestStatusCommandOutput) => void
  ): void;
  public updatePullRequestStatus(
    args: UpdatePullRequestStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePullRequestStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdatePullRequestStatusCommandOutput) => void
  ): Promise<UpdatePullRequestStatusCommandOutput> | void {
    const command = new UpdatePullRequestStatusCommand(args);
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
   * <p>Replaces the title of a pull request.</p>
   */
  public updatePullRequestTitle(
    args: UpdatePullRequestTitleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePullRequestTitleCommandOutput>;
  public updatePullRequestTitle(
    args: UpdatePullRequestTitleCommandInput,
    cb: (err: any, data?: UpdatePullRequestTitleCommandOutput) => void
  ): void;
  public updatePullRequestTitle(
    args: UpdatePullRequestTitleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePullRequestTitleCommandOutput) => void
  ): void;
  public updatePullRequestTitle(
    args: UpdatePullRequestTitleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePullRequestTitleCommandOutput) => void),
    cb?: (err: any, data?: UpdatePullRequestTitleCommandOutput) => void
  ): Promise<UpdatePullRequestTitleCommandOutput> | void {
    const command = new UpdatePullRequestTitleCommand(args);
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
   * <p>Sets or changes the comment or description for a repository.</p>
   *         <note>
   *             <p>The description field for a repository accepts all HTML characters and all valid
   *                 Unicode characters. Applications that do not HTML-encode the description and display
   *                 it in a webpage can expose users to potentially malicious code. Make sure that you
   *                 HTML-encode the description field in any application that uses this API to display
   *                 the repository description on a webpage.</p>
   *          </note>
   */
  public updateRepositoryDescription(
    args: UpdateRepositoryDescriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRepositoryDescriptionCommandOutput>;
  public updateRepositoryDescription(
    args: UpdateRepositoryDescriptionCommandInput,
    cb: (err: any, data?: UpdateRepositoryDescriptionCommandOutput) => void
  ): void;
  public updateRepositoryDescription(
    args: UpdateRepositoryDescriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRepositoryDescriptionCommandOutput) => void
  ): void;
  public updateRepositoryDescription(
    args: UpdateRepositoryDescriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRepositoryDescriptionCommandOutput) => void),
    cb?: (err: any, data?: UpdateRepositoryDescriptionCommandOutput) => void
  ): Promise<UpdateRepositoryDescriptionCommandOutput> | void {
    const command = new UpdateRepositoryDescriptionCommand(args);
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
   * <p>Renames a repository. The repository name must be unique across the calling AWS
   *             account. Repository names are limited to 100 alphanumeric, dash, and underscore
   *             characters, and cannot include certain characters. The suffix .git is prohibited. For
   *             more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit
   *             User Guide.</p>
   */
  public updateRepositoryName(
    args: UpdateRepositoryNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRepositoryNameCommandOutput>;
  public updateRepositoryName(
    args: UpdateRepositoryNameCommandInput,
    cb: (err: any, data?: UpdateRepositoryNameCommandOutput) => void
  ): void;
  public updateRepositoryName(
    args: UpdateRepositoryNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRepositoryNameCommandOutput) => void
  ): void;
  public updateRepositoryName(
    args: UpdateRepositoryNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRepositoryNameCommandOutput) => void),
    cb?: (err: any, data?: UpdateRepositoryNameCommandOutput) => void
  ): Promise<UpdateRepositoryNameCommandOutput> | void {
    const command = new UpdateRepositoryNameCommand(args);
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

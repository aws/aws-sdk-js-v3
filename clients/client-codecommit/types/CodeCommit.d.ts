import { CodeCommitClient } from "./CodeCommitClient";
import { AssociateApprovalRuleTemplateWithRepositoryCommandInput, AssociateApprovalRuleTemplateWithRepositoryCommandOutput } from "./commands/AssociateApprovalRuleTemplateWithRepositoryCommand";
import { BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput, BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput } from "./commands/BatchAssociateApprovalRuleTemplateWithRepositoriesCommand";
import { BatchDescribeMergeConflictsCommandInput, BatchDescribeMergeConflictsCommandOutput } from "./commands/BatchDescribeMergeConflictsCommand";
import { BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput, BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput } from "./commands/BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand";
import { BatchGetCommitsCommandInput, BatchGetCommitsCommandOutput } from "./commands/BatchGetCommitsCommand";
import { BatchGetRepositoriesCommandInput, BatchGetRepositoriesCommandOutput } from "./commands/BatchGetRepositoriesCommand";
import { CreateApprovalRuleTemplateCommandInput, CreateApprovalRuleTemplateCommandOutput } from "./commands/CreateApprovalRuleTemplateCommand";
import { CreateBranchCommandInput, CreateBranchCommandOutput } from "./commands/CreateBranchCommand";
import { CreateCommitCommandInput, CreateCommitCommandOutput } from "./commands/CreateCommitCommand";
import { CreatePullRequestApprovalRuleCommandInput, CreatePullRequestApprovalRuleCommandOutput } from "./commands/CreatePullRequestApprovalRuleCommand";
import { CreatePullRequestCommandInput, CreatePullRequestCommandOutput } from "./commands/CreatePullRequestCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "./commands/CreateRepositoryCommand";
import { CreateUnreferencedMergeCommitCommandInput, CreateUnreferencedMergeCommitCommandOutput } from "./commands/CreateUnreferencedMergeCommitCommand";
import { DeleteApprovalRuleTemplateCommandInput, DeleteApprovalRuleTemplateCommandOutput } from "./commands/DeleteApprovalRuleTemplateCommand";
import { DeleteBranchCommandInput, DeleteBranchCommandOutput } from "./commands/DeleteBranchCommand";
import { DeleteCommentContentCommandInput, DeleteCommentContentCommandOutput } from "./commands/DeleteCommentContentCommand";
import { DeleteFileCommandInput, DeleteFileCommandOutput } from "./commands/DeleteFileCommand";
import { DeletePullRequestApprovalRuleCommandInput, DeletePullRequestApprovalRuleCommandOutput } from "./commands/DeletePullRequestApprovalRuleCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "./commands/DeleteRepositoryCommand";
import { DescribeMergeConflictsCommandInput, DescribeMergeConflictsCommandOutput } from "./commands/DescribeMergeConflictsCommand";
import { DescribePullRequestEventsCommandInput, DescribePullRequestEventsCommandOutput } from "./commands/DescribePullRequestEventsCommand";
import { DisassociateApprovalRuleTemplateFromRepositoryCommandInput, DisassociateApprovalRuleTemplateFromRepositoryCommandOutput } from "./commands/DisassociateApprovalRuleTemplateFromRepositoryCommand";
import { EvaluatePullRequestApprovalRulesCommandInput, EvaluatePullRequestApprovalRulesCommandOutput } from "./commands/EvaluatePullRequestApprovalRulesCommand";
import { GetApprovalRuleTemplateCommandInput, GetApprovalRuleTemplateCommandOutput } from "./commands/GetApprovalRuleTemplateCommand";
import { GetBlobCommandInput, GetBlobCommandOutput } from "./commands/GetBlobCommand";
import { GetBranchCommandInput, GetBranchCommandOutput } from "./commands/GetBranchCommand";
import { GetCommentCommandInput, GetCommentCommandOutput } from "./commands/GetCommentCommand";
import { GetCommentsForComparedCommitCommandInput, GetCommentsForComparedCommitCommandOutput } from "./commands/GetCommentsForComparedCommitCommand";
import { GetCommentsForPullRequestCommandInput, GetCommentsForPullRequestCommandOutput } from "./commands/GetCommentsForPullRequestCommand";
import { GetCommitCommandInput, GetCommitCommandOutput } from "./commands/GetCommitCommand";
import { GetDifferencesCommandInput, GetDifferencesCommandOutput } from "./commands/GetDifferencesCommand";
import { GetFileCommandInput, GetFileCommandOutput } from "./commands/GetFileCommand";
import { GetFolderCommandInput, GetFolderCommandOutput } from "./commands/GetFolderCommand";
import { GetMergeCommitCommandInput, GetMergeCommitCommandOutput } from "./commands/GetMergeCommitCommand";
import { GetMergeConflictsCommandInput, GetMergeConflictsCommandOutput } from "./commands/GetMergeConflictsCommand";
import { GetMergeOptionsCommandInput, GetMergeOptionsCommandOutput } from "./commands/GetMergeOptionsCommand";
import { GetPullRequestApprovalStatesCommandInput, GetPullRequestApprovalStatesCommandOutput } from "./commands/GetPullRequestApprovalStatesCommand";
import { GetPullRequestCommandInput, GetPullRequestCommandOutput } from "./commands/GetPullRequestCommand";
import { GetPullRequestOverrideStateCommandInput, GetPullRequestOverrideStateCommandOutput } from "./commands/GetPullRequestOverrideStateCommand";
import { GetRepositoryCommandInput, GetRepositoryCommandOutput } from "./commands/GetRepositoryCommand";
import { GetRepositoryTriggersCommandInput, GetRepositoryTriggersCommandOutput } from "./commands/GetRepositoryTriggersCommand";
import { ListApprovalRuleTemplatesCommandInput, ListApprovalRuleTemplatesCommandOutput } from "./commands/ListApprovalRuleTemplatesCommand";
import { ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput, ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput } from "./commands/ListAssociatedApprovalRuleTemplatesForRepositoryCommand";
import { ListBranchesCommandInput, ListBranchesCommandOutput } from "./commands/ListBranchesCommand";
import { ListPullRequestsCommandInput, ListPullRequestsCommandOutput } from "./commands/ListPullRequestsCommand";
import { ListRepositoriesCommandInput, ListRepositoriesCommandOutput } from "./commands/ListRepositoriesCommand";
import { ListRepositoriesForApprovalRuleTemplateCommandInput, ListRepositoriesForApprovalRuleTemplateCommandOutput } from "./commands/ListRepositoriesForApprovalRuleTemplateCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { MergeBranchesByFastForwardCommandInput, MergeBranchesByFastForwardCommandOutput } from "./commands/MergeBranchesByFastForwardCommand";
import { MergeBranchesBySquashCommandInput, MergeBranchesBySquashCommandOutput } from "./commands/MergeBranchesBySquashCommand";
import { MergeBranchesByThreeWayCommandInput, MergeBranchesByThreeWayCommandOutput } from "./commands/MergeBranchesByThreeWayCommand";
import { MergePullRequestByFastForwardCommandInput, MergePullRequestByFastForwardCommandOutput } from "./commands/MergePullRequestByFastForwardCommand";
import { MergePullRequestBySquashCommandInput, MergePullRequestBySquashCommandOutput } from "./commands/MergePullRequestBySquashCommand";
import { MergePullRequestByThreeWayCommandInput, MergePullRequestByThreeWayCommandOutput } from "./commands/MergePullRequestByThreeWayCommand";
import { OverridePullRequestApprovalRulesCommandInput, OverridePullRequestApprovalRulesCommandOutput } from "./commands/OverridePullRequestApprovalRulesCommand";
import { PostCommentForComparedCommitCommandInput, PostCommentForComparedCommitCommandOutput } from "./commands/PostCommentForComparedCommitCommand";
import { PostCommentForPullRequestCommandInput, PostCommentForPullRequestCommandOutput } from "./commands/PostCommentForPullRequestCommand";
import { PostCommentReplyCommandInput, PostCommentReplyCommandOutput } from "./commands/PostCommentReplyCommand";
import { PutFileCommandInput, PutFileCommandOutput } from "./commands/PutFileCommand";
import { PutRepositoryTriggersCommandInput, PutRepositoryTriggersCommandOutput } from "./commands/PutRepositoryTriggersCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestRepositoryTriggersCommandInput, TestRepositoryTriggersCommandOutput } from "./commands/TestRepositoryTriggersCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApprovalRuleTemplateContentCommandInput, UpdateApprovalRuleTemplateContentCommandOutput } from "./commands/UpdateApprovalRuleTemplateContentCommand";
import { UpdateApprovalRuleTemplateDescriptionCommandInput, UpdateApprovalRuleTemplateDescriptionCommandOutput } from "./commands/UpdateApprovalRuleTemplateDescriptionCommand";
import { UpdateApprovalRuleTemplateNameCommandInput, UpdateApprovalRuleTemplateNameCommandOutput } from "./commands/UpdateApprovalRuleTemplateNameCommand";
import { UpdateCommentCommandInput, UpdateCommentCommandOutput } from "./commands/UpdateCommentCommand";
import { UpdateDefaultBranchCommandInput, UpdateDefaultBranchCommandOutput } from "./commands/UpdateDefaultBranchCommand";
import { UpdatePullRequestApprovalRuleContentCommandInput, UpdatePullRequestApprovalRuleContentCommandOutput } from "./commands/UpdatePullRequestApprovalRuleContentCommand";
import { UpdatePullRequestApprovalStateCommandInput, UpdatePullRequestApprovalStateCommandOutput } from "./commands/UpdatePullRequestApprovalStateCommand";
import { UpdatePullRequestDescriptionCommandInput, UpdatePullRequestDescriptionCommandOutput } from "./commands/UpdatePullRequestDescriptionCommand";
import { UpdatePullRequestStatusCommandInput, UpdatePullRequestStatusCommandOutput } from "./commands/UpdatePullRequestStatusCommand";
import { UpdatePullRequestTitleCommandInput, UpdatePullRequestTitleCommandOutput } from "./commands/UpdatePullRequestTitleCommand";
import { UpdateRepositoryDescriptionCommandInput, UpdateRepositoryDescriptionCommandOutput } from "./commands/UpdateRepositoryDescriptionCommand";
import { UpdateRepositoryNameCommandInput, UpdateRepositoryNameCommandOutput } from "./commands/UpdateRepositoryNameCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class CodeCommit extends CodeCommitClient {
    /**
     * <p>Creates an association between an approval rule template and a specified repository.
     *             Then, the next time a pull request is created in the repository where the destination
     *             reference (if specified) matches the destination reference (branch) for the pull
     *             request, an approval rule that matches the template conditions is automatically created
     *             for that pull request. If no destination references are specified in the template, an
     *             approval rule that matches the template contents is created for all pull requests in
     *             that repository.</p>
     */
    associateApprovalRuleTemplateWithRepository(args: AssociateApprovalRuleTemplateWithRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<AssociateApprovalRuleTemplateWithRepositoryCommandOutput>;
    associateApprovalRuleTemplateWithRepository(args: AssociateApprovalRuleTemplateWithRepositoryCommandInput, cb: (err: any, data?: AssociateApprovalRuleTemplateWithRepositoryCommandOutput) => void): void;
    associateApprovalRuleTemplateWithRepository(args: AssociateApprovalRuleTemplateWithRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateApprovalRuleTemplateWithRepositoryCommandOutput) => void): void;
    /**
     * <p>Creates an association between an approval rule template and one or more specified repositories. </p>
     */
    batchAssociateApprovalRuleTemplateWithRepositories(args: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput, options?: __HttpHandlerOptions): Promise<BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput>;
    batchAssociateApprovalRuleTemplateWithRepositories(args: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput, cb: (err: any, data?: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput) => void): void;
    batchAssociateApprovalRuleTemplateWithRepositories(args: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput) => void): void;
    /**
     * <p>Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.</p>
     */
    batchDescribeMergeConflicts(args: BatchDescribeMergeConflictsCommandInput, options?: __HttpHandlerOptions): Promise<BatchDescribeMergeConflictsCommandOutput>;
    batchDescribeMergeConflicts(args: BatchDescribeMergeConflictsCommandInput, cb: (err: any, data?: BatchDescribeMergeConflictsCommandOutput) => void): void;
    batchDescribeMergeConflicts(args: BatchDescribeMergeConflictsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDescribeMergeConflictsCommandOutput) => void): void;
    /**
     * <p>Removes the association between an approval rule template and one or more specified repositories. </p>
     */
    batchDisassociateApprovalRuleTemplateFromRepositories(args: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput, options?: __HttpHandlerOptions): Promise<BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput>;
    batchDisassociateApprovalRuleTemplateFromRepositories(args: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput, cb: (err: any, data?: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput) => void): void;
    batchDisassociateApprovalRuleTemplateFromRepositories(args: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput) => void): void;
    /**
     * <p>Returns information about the contents of one or more commits in a repository.</p>
     */
    batchGetCommits(args: BatchGetCommitsCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetCommitsCommandOutput>;
    batchGetCommits(args: BatchGetCommitsCommandInput, cb: (err: any, data?: BatchGetCommitsCommandOutput) => void): void;
    batchGetCommits(args: BatchGetCommitsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetCommitsCommandOutput) => void): void;
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
    batchGetRepositories(args: BatchGetRepositoriesCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetRepositoriesCommandOutput>;
    batchGetRepositories(args: BatchGetRepositoriesCommandInput, cb: (err: any, data?: BatchGetRepositoriesCommandOutput) => void): void;
    batchGetRepositories(args: BatchGetRepositoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetRepositoriesCommandOutput) => void): void;
    /**
     * <p>Creates a template for approval rules that can then be associated with one or more
     *             repositories in your AWS account. When you associate a template with a repository, AWS
     *             CodeCommit creates an approval rule that matches the conditions of the template for all
     *             pull requests that meet the conditions of the template. For more information, see
     *             <a>AssociateApprovalRuleTemplateWithRepository</a>.</p>
     */
    createApprovalRuleTemplate(args: CreateApprovalRuleTemplateCommandInput, options?: __HttpHandlerOptions): Promise<CreateApprovalRuleTemplateCommandOutput>;
    createApprovalRuleTemplate(args: CreateApprovalRuleTemplateCommandInput, cb: (err: any, data?: CreateApprovalRuleTemplateCommandOutput) => void): void;
    createApprovalRuleTemplate(args: CreateApprovalRuleTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateApprovalRuleTemplateCommandOutput) => void): void;
    /**
     * <p>Creates a branch in a repository and points the branch to a commit.</p>
     *         <note>
     *             <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p>
     *          </note>
     */
    createBranch(args: CreateBranchCommandInput, options?: __HttpHandlerOptions): Promise<CreateBranchCommandOutput>;
    createBranch(args: CreateBranchCommandInput, cb: (err: any, data?: CreateBranchCommandOutput) => void): void;
    createBranch(args: CreateBranchCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateBranchCommandOutput) => void): void;
    /**
     * <p>Creates a commit for a repository on the tip of a specified branch.</p>
     */
    createCommit(args: CreateCommitCommandInput, options?: __HttpHandlerOptions): Promise<CreateCommitCommandOutput>;
    createCommit(args: CreateCommitCommandInput, cb: (err: any, data?: CreateCommitCommandOutput) => void): void;
    createCommit(args: CreateCommitCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCommitCommandOutput) => void): void;
    /**
     * <p>Creates a pull request in the specified repository.</p>
     */
    createPullRequest(args: CreatePullRequestCommandInput, options?: __HttpHandlerOptions): Promise<CreatePullRequestCommandOutput>;
    createPullRequest(args: CreatePullRequestCommandInput, cb: (err: any, data?: CreatePullRequestCommandOutput) => void): void;
    createPullRequest(args: CreatePullRequestCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePullRequestCommandOutput) => void): void;
    /**
     * <p>Creates an approval rule for a pull request.</p>
     */
    createPullRequestApprovalRule(args: CreatePullRequestApprovalRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreatePullRequestApprovalRuleCommandOutput>;
    createPullRequestApprovalRule(args: CreatePullRequestApprovalRuleCommandInput, cb: (err: any, data?: CreatePullRequestApprovalRuleCommandOutput) => void): void;
    createPullRequestApprovalRule(args: CreatePullRequestApprovalRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePullRequestApprovalRuleCommandOutput) => void): void;
    /**
     * <p>Creates a new, empty repository.</p>
     */
    createRepository(args: CreateRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<CreateRepositoryCommandOutput>;
    createRepository(args: CreateRepositoryCommandInput, cb: (err: any, data?: CreateRepositoryCommandOutput) => void): void;
    createRepository(args: CreateRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRepositoryCommandOutput) => void): void;
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
    createUnreferencedMergeCommit(args: CreateUnreferencedMergeCommitCommandInput, options?: __HttpHandlerOptions): Promise<CreateUnreferencedMergeCommitCommandOutput>;
    createUnreferencedMergeCommit(args: CreateUnreferencedMergeCommitCommandInput, cb: (err: any, data?: CreateUnreferencedMergeCommitCommandOutput) => void): void;
    createUnreferencedMergeCommit(args: CreateUnreferencedMergeCommitCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUnreferencedMergeCommitCommandOutput) => void): void;
    /**
     * <p>Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.</p>
     */
    deleteApprovalRuleTemplate(args: DeleteApprovalRuleTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApprovalRuleTemplateCommandOutput>;
    deleteApprovalRuleTemplate(args: DeleteApprovalRuleTemplateCommandInput, cb: (err: any, data?: DeleteApprovalRuleTemplateCommandOutput) => void): void;
    deleteApprovalRuleTemplate(args: DeleteApprovalRuleTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApprovalRuleTemplateCommandOutput) => void): void;
    /**
     * <p>Deletes a branch from a repository, unless that branch is the default branch for the repository. </p>
     */
    deleteBranch(args: DeleteBranchCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBranchCommandOutput>;
    deleteBranch(args: DeleteBranchCommandInput, cb: (err: any, data?: DeleteBranchCommandOutput) => void): void;
    deleteBranch(args: DeleteBranchCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBranchCommandOutput) => void): void;
    /**
     * <p>Deletes the content of a comment made on a change, file, or commit in a repository.</p>
     */
    deleteCommentContent(args: DeleteCommentContentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCommentContentCommandOutput>;
    deleteCommentContent(args: DeleteCommentContentCommandInput, cb: (err: any, data?: DeleteCommentContentCommandOutput) => void): void;
    deleteCommentContent(args: DeleteCommentContentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCommentContentCommandOutput) => void): void;
    /**
     * <p>Deletes a specified file from a specified branch. A commit is created on the branch
     *             that contains the revision. The file still exists in the commits earlier to the commit
     *             that contains the deletion.</p>
     */
    deleteFile(args: DeleteFileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFileCommandOutput>;
    deleteFile(args: DeleteFileCommandInput, cb: (err: any, data?: DeleteFileCommandOutput) => void): void;
    deleteFile(args: DeleteFileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFileCommandOutput) => void): void;
    /**
     * <p>Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the
     *             approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the
     *             pull request was created. You cannot delete an approval rule from a merged or closed pull request.</p>
     */
    deletePullRequestApprovalRule(args: DeletePullRequestApprovalRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeletePullRequestApprovalRuleCommandOutput>;
    deletePullRequestApprovalRule(args: DeletePullRequestApprovalRuleCommandInput, cb: (err: any, data?: DeletePullRequestApprovalRuleCommandOutput) => void): void;
    deletePullRequestApprovalRule(args: DeletePullRequestApprovalRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePullRequestApprovalRuleCommandOutput) => void): void;
    /**
     * <p>Deletes a repository. If a specified repository was already deleted, a null repository
     *             ID is returned.</p>
     *         <important>
     *             <p>Deleting a repository also deletes all associated objects and metadata. After a repository is
     *                 deleted, all future push calls to the deleted repository fail.</p>
     *          </important>
     */
    deleteRepository(args: DeleteRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRepositoryCommandOutput>;
    deleteRepository(args: DeleteRepositoryCommandInput, cb: (err: any, data?: DeleteRepositoryCommandOutput) => void): void;
    deleteRepository(args: DeleteRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRepositoryCommandOutput) => void): void;
    /**
     * <p>Returns information about one or more merge conflicts in the attempted merge of two
     *             commit specifiers using the squash or three-way merge strategy. If the merge option for
     *             the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.</p>
     */
    describeMergeConflicts(args: DescribeMergeConflictsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMergeConflictsCommandOutput>;
    describeMergeConflicts(args: DescribeMergeConflictsCommandInput, cb: (err: any, data?: DescribeMergeConflictsCommandOutput) => void): void;
    describeMergeConflicts(args: DescribeMergeConflictsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMergeConflictsCommandOutput) => void): void;
    /**
     * <p>Returns information about one or more pull request events.</p>
     */
    describePullRequestEvents(args: DescribePullRequestEventsCommandInput, options?: __HttpHandlerOptions): Promise<DescribePullRequestEventsCommandOutput>;
    describePullRequestEvents(args: DescribePullRequestEventsCommandInput, cb: (err: any, data?: DescribePullRequestEventsCommandOutput) => void): void;
    describePullRequestEvents(args: DescribePullRequestEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePullRequestEventsCommandOutput) => void): void;
    /**
     * <p>Removes the association between a template and a repository so that approval rules
     *             based on the template are not automatically created when pull requests are created in
     *             the specified repository. This does not delete any approval rules previously created for
     *             pull requests through the template association.</p>
     */
    disassociateApprovalRuleTemplateFromRepository(args: DisassociateApprovalRuleTemplateFromRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateApprovalRuleTemplateFromRepositoryCommandOutput>;
    disassociateApprovalRuleTemplateFromRepository(args: DisassociateApprovalRuleTemplateFromRepositoryCommandInput, cb: (err: any, data?: DisassociateApprovalRuleTemplateFromRepositoryCommandOutput) => void): void;
    disassociateApprovalRuleTemplateFromRepository(args: DisassociateApprovalRuleTemplateFromRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateApprovalRuleTemplateFromRepositoryCommandOutput) => void): void;
    /**
     * <p>Evaluates whether a pull request has met all the conditions specified in its associated approval rules.</p>
     */
    evaluatePullRequestApprovalRules(args: EvaluatePullRequestApprovalRulesCommandInput, options?: __HttpHandlerOptions): Promise<EvaluatePullRequestApprovalRulesCommandOutput>;
    evaluatePullRequestApprovalRules(args: EvaluatePullRequestApprovalRulesCommandInput, cb: (err: any, data?: EvaluatePullRequestApprovalRulesCommandOutput) => void): void;
    evaluatePullRequestApprovalRules(args: EvaluatePullRequestApprovalRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EvaluatePullRequestApprovalRulesCommandOutput) => void): void;
    /**
     * <p>Returns information about a specified approval rule template.</p>
     */
    getApprovalRuleTemplate(args: GetApprovalRuleTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetApprovalRuleTemplateCommandOutput>;
    getApprovalRuleTemplate(args: GetApprovalRuleTemplateCommandInput, cb: (err: any, data?: GetApprovalRuleTemplateCommandOutput) => void): void;
    getApprovalRuleTemplate(args: GetApprovalRuleTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetApprovalRuleTemplateCommandOutput) => void): void;
    /**
     * <p>Returns the base-64 encoded content of an individual blob in a repository.</p>
     */
    getBlob(args: GetBlobCommandInput, options?: __HttpHandlerOptions): Promise<GetBlobCommandOutput>;
    getBlob(args: GetBlobCommandInput, cb: (err: any, data?: GetBlobCommandOutput) => void): void;
    getBlob(args: GetBlobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBlobCommandOutput) => void): void;
    /**
     * <p>Returns information about a repository branch, including its name and the last commit ID.</p>
     */
    getBranch(args: GetBranchCommandInput, options?: __HttpHandlerOptions): Promise<GetBranchCommandOutput>;
    getBranch(args: GetBranchCommandInput, cb: (err: any, data?: GetBranchCommandOutput) => void): void;
    getBranch(args: GetBranchCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBranchCommandOutput) => void): void;
    /**
     * <p>Returns the content of a comment made on a change, file, or commit in a repository.</p>
     */
    getComment(args: GetCommentCommandInput, options?: __HttpHandlerOptions): Promise<GetCommentCommandOutput>;
    getComment(args: GetCommentCommandInput, cb: (err: any, data?: GetCommentCommandOutput) => void): void;
    getComment(args: GetCommentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCommentCommandOutput) => void): void;
    /**
     * <p>Returns information about comments made on the comparison between two commits.</p>
     */
    getCommentsForComparedCommit(args: GetCommentsForComparedCommitCommandInput, options?: __HttpHandlerOptions): Promise<GetCommentsForComparedCommitCommandOutput>;
    getCommentsForComparedCommit(args: GetCommentsForComparedCommitCommandInput, cb: (err: any, data?: GetCommentsForComparedCommitCommandOutput) => void): void;
    getCommentsForComparedCommit(args: GetCommentsForComparedCommitCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCommentsForComparedCommitCommandOutput) => void): void;
    /**
     * <p>Returns comments made on a pull request.</p>
     */
    getCommentsForPullRequest(args: GetCommentsForPullRequestCommandInput, options?: __HttpHandlerOptions): Promise<GetCommentsForPullRequestCommandOutput>;
    getCommentsForPullRequest(args: GetCommentsForPullRequestCommandInput, cb: (err: any, data?: GetCommentsForPullRequestCommandOutput) => void): void;
    getCommentsForPullRequest(args: GetCommentsForPullRequestCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCommentsForPullRequestCommandOutput) => void): void;
    /**
     * <p>Returns information about a commit, including commit message and committer information.</p>
     */
    getCommit(args: GetCommitCommandInput, options?: __HttpHandlerOptions): Promise<GetCommitCommandOutput>;
    getCommit(args: GetCommitCommandInput, cb: (err: any, data?: GetCommitCommandOutput) => void): void;
    getCommit(args: GetCommitCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCommitCommandOutput) => void): void;
    /**
     * <p>Returns information about the differences in a valid commit specifier (such as a
     *             branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be
     *             limited to a specified path.</p>
     */
    getDifferences(args: GetDifferencesCommandInput, options?: __HttpHandlerOptions): Promise<GetDifferencesCommandOutput>;
    getDifferences(args: GetDifferencesCommandInput, cb: (err: any, data?: GetDifferencesCommandOutput) => void): void;
    getDifferences(args: GetDifferencesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDifferencesCommandOutput) => void): void;
    /**
     * <p>Returns the base-64 encoded contents of a specified file and its metadata.</p>
     */
    getFile(args: GetFileCommandInput, options?: __HttpHandlerOptions): Promise<GetFileCommandOutput>;
    getFile(args: GetFileCommandInput, cb: (err: any, data?: GetFileCommandOutput) => void): void;
    getFile(args: GetFileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFileCommandOutput) => void): void;
    /**
     * <p>Returns the contents of a specified folder in a repository.</p>
     */
    getFolder(args: GetFolderCommandInput, options?: __HttpHandlerOptions): Promise<GetFolderCommandOutput>;
    getFolder(args: GetFolderCommandInput, cb: (err: any, data?: GetFolderCommandOutput) => void): void;
    getFolder(args: GetFolderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFolderCommandOutput) => void): void;
    /**
     * <p>Returns information about a specified merge commit.</p>
     */
    getMergeCommit(args: GetMergeCommitCommandInput, options?: __HttpHandlerOptions): Promise<GetMergeCommitCommandOutput>;
    getMergeCommit(args: GetMergeCommitCommandInput, cb: (err: any, data?: GetMergeCommitCommandOutput) => void): void;
    getMergeCommit(args: GetMergeCommitCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMergeCommitCommandOutput) => void): void;
    /**
     * <p>Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.</p>
     */
    getMergeConflicts(args: GetMergeConflictsCommandInput, options?: __HttpHandlerOptions): Promise<GetMergeConflictsCommandOutput>;
    getMergeConflicts(args: GetMergeConflictsCommandInput, cb: (err: any, data?: GetMergeConflictsCommandOutput) => void): void;
    getMergeConflicts(args: GetMergeConflictsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMergeConflictsCommandOutput) => void): void;
    /**
     * <p>Returns information about the merge options available for merging two specified
     *             branches. For details about why a merge option is not available, use GetMergeConflicts
     *             or DescribeMergeConflicts.</p>
     */
    getMergeOptions(args: GetMergeOptionsCommandInput, options?: __HttpHandlerOptions): Promise<GetMergeOptionsCommandOutput>;
    getMergeOptions(args: GetMergeOptionsCommandInput, cb: (err: any, data?: GetMergeOptionsCommandOutput) => void): void;
    getMergeOptions(args: GetMergeOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMergeOptionsCommandOutput) => void): void;
    /**
     * <p>Gets information about a pull request in a specified repository.</p>
     */
    getPullRequest(args: GetPullRequestCommandInput, options?: __HttpHandlerOptions): Promise<GetPullRequestCommandOutput>;
    getPullRequest(args: GetPullRequestCommandInput, cb: (err: any, data?: GetPullRequestCommandOutput) => void): void;
    getPullRequest(args: GetPullRequestCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPullRequestCommandOutput) => void): void;
    /**
     * <p>Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more
     *         approval rules applied to them.</p>
     */
    getPullRequestApprovalStates(args: GetPullRequestApprovalStatesCommandInput, options?: __HttpHandlerOptions): Promise<GetPullRequestApprovalStatesCommandOutput>;
    getPullRequestApprovalStates(args: GetPullRequestApprovalStatesCommandInput, cb: (err: any, data?: GetPullRequestApprovalStatesCommandOutput) => void): void;
    getPullRequestApprovalStates(args: GetPullRequestApprovalStatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPullRequestApprovalStatesCommandOutput) => void): void;
    /**
     * <p>Returns information about whether approval rules have been set aside (overridden) for a
     *             pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p>
     */
    getPullRequestOverrideState(args: GetPullRequestOverrideStateCommandInput, options?: __HttpHandlerOptions): Promise<GetPullRequestOverrideStateCommandOutput>;
    getPullRequestOverrideState(args: GetPullRequestOverrideStateCommandInput, cb: (err: any, data?: GetPullRequestOverrideStateCommandOutput) => void): void;
    getPullRequestOverrideState(args: GetPullRequestOverrideStateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPullRequestOverrideStateCommandOutput) => void): void;
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
    getRepository(args: GetRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<GetRepositoryCommandOutput>;
    getRepository(args: GetRepositoryCommandInput, cb: (err: any, data?: GetRepositoryCommandOutput) => void): void;
    getRepository(args: GetRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRepositoryCommandOutput) => void): void;
    /**
     * <p>Gets information about triggers configured for a repository.</p>
     */
    getRepositoryTriggers(args: GetRepositoryTriggersCommandInput, options?: __HttpHandlerOptions): Promise<GetRepositoryTriggersCommandOutput>;
    getRepositoryTriggers(args: GetRepositoryTriggersCommandInput, cb: (err: any, data?: GetRepositoryTriggersCommandOutput) => void): void;
    getRepositoryTriggers(args: GetRepositoryTriggersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRepositoryTriggersCommandOutput) => void): void;
    /**
     * <p>Lists all approval rule templates in the specified AWS Region in your AWS account. If
     *             an AWS Region is not specified, the AWS Region where you are signed in is used.</p>
     */
    listApprovalRuleTemplates(args: ListApprovalRuleTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<ListApprovalRuleTemplatesCommandOutput>;
    listApprovalRuleTemplates(args: ListApprovalRuleTemplatesCommandInput, cb: (err: any, data?: ListApprovalRuleTemplatesCommandOutput) => void): void;
    listApprovalRuleTemplates(args: ListApprovalRuleTemplatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListApprovalRuleTemplatesCommandOutput) => void): void;
    /**
     * <p>Lists all approval rule templates that are associated with a specified repository.</p>
     */
    listAssociatedApprovalRuleTemplatesForRepository(args: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput>;
    listAssociatedApprovalRuleTemplatesForRepository(args: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput, cb: (err: any, data?: ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput) => void): void;
    listAssociatedApprovalRuleTemplatesForRepository(args: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput) => void): void;
    /**
     * <p>Gets information about one or more branches in a repository.</p>
     */
    listBranches(args: ListBranchesCommandInput, options?: __HttpHandlerOptions): Promise<ListBranchesCommandOutput>;
    listBranches(args: ListBranchesCommandInput, cb: (err: any, data?: ListBranchesCommandOutput) => void): void;
    listBranches(args: ListBranchesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBranchesCommandOutput) => void): void;
    /**
     * <p>Returns a list of pull requests for a specified repository. The return list can be refined by pull request
     *         status or pull request author ARN.</p>
     */
    listPullRequests(args: ListPullRequestsCommandInput, options?: __HttpHandlerOptions): Promise<ListPullRequestsCommandOutput>;
    listPullRequests(args: ListPullRequestsCommandInput, cb: (err: any, data?: ListPullRequestsCommandOutput) => void): void;
    listPullRequests(args: ListPullRequestsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPullRequestsCommandOutput) => void): void;
    /**
     * <p>Gets information about one or more repositories.</p>
     */
    listRepositories(args: ListRepositoriesCommandInput, options?: __HttpHandlerOptions): Promise<ListRepositoriesCommandOutput>;
    listRepositories(args: ListRepositoriesCommandInput, cb: (err: any, data?: ListRepositoriesCommandOutput) => void): void;
    listRepositories(args: ListRepositoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRepositoriesCommandOutput) => void): void;
    /**
     * <p>Lists all repositories associated with the specified approval rule template.</p>
     */
    listRepositoriesForApprovalRuleTemplate(args: ListRepositoriesForApprovalRuleTemplateCommandInput, options?: __HttpHandlerOptions): Promise<ListRepositoriesForApprovalRuleTemplateCommandOutput>;
    listRepositoriesForApprovalRuleTemplate(args: ListRepositoriesForApprovalRuleTemplateCommandInput, cb: (err: any, data?: ListRepositoriesForApprovalRuleTemplateCommandOutput) => void): void;
    listRepositoriesForApprovalRuleTemplate(args: ListRepositoriesForApprovalRuleTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRepositoriesForApprovalRuleTemplateCommandOutput) => void): void;
    /**
     * <p>Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS
     *             CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User
     *                 Guide</i>.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Merges two branches using the fast-forward merge strategy.</p>
     */
    mergeBranchesByFastForward(args: MergeBranchesByFastForwardCommandInput, options?: __HttpHandlerOptions): Promise<MergeBranchesByFastForwardCommandOutput>;
    mergeBranchesByFastForward(args: MergeBranchesByFastForwardCommandInput, cb: (err: any, data?: MergeBranchesByFastForwardCommandOutput) => void): void;
    mergeBranchesByFastForward(args: MergeBranchesByFastForwardCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MergeBranchesByFastForwardCommandOutput) => void): void;
    /**
     * <p>Merges two branches using the squash merge strategy.</p>
     */
    mergeBranchesBySquash(args: MergeBranchesBySquashCommandInput, options?: __HttpHandlerOptions): Promise<MergeBranchesBySquashCommandOutput>;
    mergeBranchesBySquash(args: MergeBranchesBySquashCommandInput, cb: (err: any, data?: MergeBranchesBySquashCommandOutput) => void): void;
    mergeBranchesBySquash(args: MergeBranchesBySquashCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MergeBranchesBySquashCommandOutput) => void): void;
    /**
     * <p>Merges two specified branches using the three-way merge strategy.</p>
     */
    mergeBranchesByThreeWay(args: MergeBranchesByThreeWayCommandInput, options?: __HttpHandlerOptions): Promise<MergeBranchesByThreeWayCommandOutput>;
    mergeBranchesByThreeWay(args: MergeBranchesByThreeWayCommandInput, cb: (err: any, data?: MergeBranchesByThreeWayCommandOutput) => void): void;
    mergeBranchesByThreeWay(args: MergeBranchesByThreeWayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MergeBranchesByThreeWayCommandOutput) => void): void;
    /**
     * <p>Attempts to merge the source commit of a pull request into the specified destination
     *             branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.</p>
     */
    mergePullRequestByFastForward(args: MergePullRequestByFastForwardCommandInput, options?: __HttpHandlerOptions): Promise<MergePullRequestByFastForwardCommandOutput>;
    mergePullRequestByFastForward(args: MergePullRequestByFastForwardCommandInput, cb: (err: any, data?: MergePullRequestByFastForwardCommandOutput) => void): void;
    mergePullRequestByFastForward(args: MergePullRequestByFastForwardCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MergePullRequestByFastForwardCommandOutput) => void): void;
    /**
     * <p>Attempts to merge the source commit of a pull request into the specified destination
     *             branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.</p>
     */
    mergePullRequestBySquash(args: MergePullRequestBySquashCommandInput, options?: __HttpHandlerOptions): Promise<MergePullRequestBySquashCommandOutput>;
    mergePullRequestBySquash(args: MergePullRequestBySquashCommandInput, cb: (err: any, data?: MergePullRequestBySquashCommandOutput) => void): void;
    mergePullRequestBySquash(args: MergePullRequestBySquashCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MergePullRequestBySquashCommandOutput) => void): void;
    /**
     * <p>Attempts to merge the source commit of a pull request into the specified destination
     *             branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.</p>
     */
    mergePullRequestByThreeWay(args: MergePullRequestByThreeWayCommandInput, options?: __HttpHandlerOptions): Promise<MergePullRequestByThreeWayCommandOutput>;
    mergePullRequestByThreeWay(args: MergePullRequestByThreeWayCommandInput, cb: (err: any, data?: MergePullRequestByThreeWayCommandOutput) => void): void;
    mergePullRequestByThreeWay(args: MergePullRequestByThreeWayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MergePullRequestByThreeWayCommandOutput) => void): void;
    /**
     * <p>Sets aside (overrides) all approval rule requirements for a specified pull request.</p>
     */
    overridePullRequestApprovalRules(args: OverridePullRequestApprovalRulesCommandInput, options?: __HttpHandlerOptions): Promise<OverridePullRequestApprovalRulesCommandOutput>;
    overridePullRequestApprovalRules(args: OverridePullRequestApprovalRulesCommandInput, cb: (err: any, data?: OverridePullRequestApprovalRulesCommandOutput) => void): void;
    overridePullRequestApprovalRules(args: OverridePullRequestApprovalRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: OverridePullRequestApprovalRulesCommandOutput) => void): void;
    /**
     * <p>Posts a comment on the comparison between two commits.</p>
     */
    postCommentForComparedCommit(args: PostCommentForComparedCommitCommandInput, options?: __HttpHandlerOptions): Promise<PostCommentForComparedCommitCommandOutput>;
    postCommentForComparedCommit(args: PostCommentForComparedCommitCommandInput, cb: (err: any, data?: PostCommentForComparedCommitCommandOutput) => void): void;
    postCommentForComparedCommit(args: PostCommentForComparedCommitCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PostCommentForComparedCommitCommandOutput) => void): void;
    /**
     * <p>Posts a comment on a pull request.</p>
     */
    postCommentForPullRequest(args: PostCommentForPullRequestCommandInput, options?: __HttpHandlerOptions): Promise<PostCommentForPullRequestCommandOutput>;
    postCommentForPullRequest(args: PostCommentForPullRequestCommandInput, cb: (err: any, data?: PostCommentForPullRequestCommandOutput) => void): void;
    postCommentForPullRequest(args: PostCommentForPullRequestCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PostCommentForPullRequestCommandOutput) => void): void;
    /**
     * <p>Posts a comment in reply to an existing comment on a comparison between commits or a pull request.</p>
     */
    postCommentReply(args: PostCommentReplyCommandInput, options?: __HttpHandlerOptions): Promise<PostCommentReplyCommandOutput>;
    postCommentReply(args: PostCommentReplyCommandInput, cb: (err: any, data?: PostCommentReplyCommandOutput) => void): void;
    postCommentReply(args: PostCommentReplyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PostCommentReplyCommandOutput) => void): void;
    /**
     * <p>Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.</p>
     */
    putFile(args: PutFileCommandInput, options?: __HttpHandlerOptions): Promise<PutFileCommandOutput>;
    putFile(args: PutFileCommandInput, cb: (err: any, data?: PutFileCommandOutput) => void): void;
    putFile(args: PutFileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutFileCommandOutput) => void): void;
    /**
     * <p>Replaces all triggers for a repository. Used to create or delete triggers.</p>
     */
    putRepositoryTriggers(args: PutRepositoryTriggersCommandInput, options?: __HttpHandlerOptions): Promise<PutRepositoryTriggersCommandOutput>;
    putRepositoryTriggers(args: PutRepositoryTriggersCommandInput, cb: (err: any, data?: PutRepositoryTriggersCommandOutput) => void): void;
    putRepositoryTriggers(args: PutRepositoryTriggersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutRepositoryTriggersCommandOutput) => void): void;
    /**
     * <p>Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources
     *             in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User
     *                 Guide</i>.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Tests the functionality of repository triggers by sending information to the trigger
     *             target. If real data is available in the repository, the test sends data from the last
     *             commit. If no data is available, sample data is generated.</p>
     */
    testRepositoryTriggers(args: TestRepositoryTriggersCommandInput, options?: __HttpHandlerOptions): Promise<TestRepositoryTriggersCommandOutput>;
    testRepositoryTriggers(args: TestRepositoryTriggersCommandInput, cb: (err: any, data?: TestRepositoryTriggersCommandOutput) => void): void;
    testRepositoryTriggers(args: TestRepositoryTriggersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TestRepositoryTriggersCommandOutput) => void): void;
    /**
     * <p>Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS
     *             CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User
     *                 Guide</i>.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the content of an approval rule template. You can change the number of
     *             required approvals, the membership of the approval rule, and whether an approval pool is
     *             defined.</p>
     */
    updateApprovalRuleTemplateContent(args: UpdateApprovalRuleTemplateContentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApprovalRuleTemplateContentCommandOutput>;
    updateApprovalRuleTemplateContent(args: UpdateApprovalRuleTemplateContentCommandInput, cb: (err: any, data?: UpdateApprovalRuleTemplateContentCommandOutput) => void): void;
    updateApprovalRuleTemplateContent(args: UpdateApprovalRuleTemplateContentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateApprovalRuleTemplateContentCommandOutput) => void): void;
    /**
     * <p>Updates the description for a specified approval rule template.</p>
     */
    updateApprovalRuleTemplateDescription(args: UpdateApprovalRuleTemplateDescriptionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApprovalRuleTemplateDescriptionCommandOutput>;
    updateApprovalRuleTemplateDescription(args: UpdateApprovalRuleTemplateDescriptionCommandInput, cb: (err: any, data?: UpdateApprovalRuleTemplateDescriptionCommandOutput) => void): void;
    updateApprovalRuleTemplateDescription(args: UpdateApprovalRuleTemplateDescriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateApprovalRuleTemplateDescriptionCommandOutput) => void): void;
    /**
     * <p>Updates the name of a specified approval rule template.</p>
     */
    updateApprovalRuleTemplateName(args: UpdateApprovalRuleTemplateNameCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApprovalRuleTemplateNameCommandOutput>;
    updateApprovalRuleTemplateName(args: UpdateApprovalRuleTemplateNameCommandInput, cb: (err: any, data?: UpdateApprovalRuleTemplateNameCommandOutput) => void): void;
    updateApprovalRuleTemplateName(args: UpdateApprovalRuleTemplateNameCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateApprovalRuleTemplateNameCommandOutput) => void): void;
    /**
     * <p>Replaces the contents of a comment.</p>
     */
    updateComment(args: UpdateCommentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCommentCommandOutput>;
    updateComment(args: UpdateCommentCommandInput, cb: (err: any, data?: UpdateCommentCommandOutput) => void): void;
    updateComment(args: UpdateCommentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCommentCommandOutput) => void): void;
    /**
     * <p>Sets or changes the default branch name for the specified repository.</p>
     *         <note>
     *             <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p>
     *          </note>
     */
    updateDefaultBranch(args: UpdateDefaultBranchCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDefaultBranchCommandOutput>;
    updateDefaultBranch(args: UpdateDefaultBranchCommandInput, cb: (err: any, data?: UpdateDefaultBranchCommandOutput) => void): void;
    updateDefaultBranch(args: UpdateDefaultBranchCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDefaultBranchCommandOutput) => void): void;
    /**
     * <p>Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and
     *             the approval pool for approvers. </p>
     */
    updatePullRequestApprovalRuleContent(args: UpdatePullRequestApprovalRuleContentCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePullRequestApprovalRuleContentCommandOutput>;
    updatePullRequestApprovalRuleContent(args: UpdatePullRequestApprovalRuleContentCommandInput, cb: (err: any, data?: UpdatePullRequestApprovalRuleContentCommandOutput) => void): void;
    updatePullRequestApprovalRuleContent(args: UpdatePullRequestApprovalRuleContentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePullRequestApprovalRuleContentCommandOutput) => void): void;
    /**
     * <p>Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.</p>
     */
    updatePullRequestApprovalState(args: UpdatePullRequestApprovalStateCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePullRequestApprovalStateCommandOutput>;
    updatePullRequestApprovalState(args: UpdatePullRequestApprovalStateCommandInput, cb: (err: any, data?: UpdatePullRequestApprovalStateCommandOutput) => void): void;
    updatePullRequestApprovalState(args: UpdatePullRequestApprovalStateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePullRequestApprovalStateCommandOutput) => void): void;
    /**
     * <p>Replaces the contents of the description of a pull request.</p>
     */
    updatePullRequestDescription(args: UpdatePullRequestDescriptionCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePullRequestDescriptionCommandOutput>;
    updatePullRequestDescription(args: UpdatePullRequestDescriptionCommandInput, cb: (err: any, data?: UpdatePullRequestDescriptionCommandOutput) => void): void;
    updatePullRequestDescription(args: UpdatePullRequestDescriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePullRequestDescriptionCommandOutput) => void): void;
    /**
     * <p>Updates the status of a pull request. </p>
     */
    updatePullRequestStatus(args: UpdatePullRequestStatusCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePullRequestStatusCommandOutput>;
    updatePullRequestStatus(args: UpdatePullRequestStatusCommandInput, cb: (err: any, data?: UpdatePullRequestStatusCommandOutput) => void): void;
    updatePullRequestStatus(args: UpdatePullRequestStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePullRequestStatusCommandOutput) => void): void;
    /**
     * <p>Replaces the title of a pull request.</p>
     */
    updatePullRequestTitle(args: UpdatePullRequestTitleCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePullRequestTitleCommandOutput>;
    updatePullRequestTitle(args: UpdatePullRequestTitleCommandInput, cb: (err: any, data?: UpdatePullRequestTitleCommandOutput) => void): void;
    updatePullRequestTitle(args: UpdatePullRequestTitleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePullRequestTitleCommandOutput) => void): void;
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
    updateRepositoryDescription(args: UpdateRepositoryDescriptionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRepositoryDescriptionCommandOutput>;
    updateRepositoryDescription(args: UpdateRepositoryDescriptionCommandInput, cb: (err: any, data?: UpdateRepositoryDescriptionCommandOutput) => void): void;
    updateRepositoryDescription(args: UpdateRepositoryDescriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRepositoryDescriptionCommandOutput) => void): void;
    /**
     * <p>Renames a repository. The repository name must be unique across the calling AWS
     *             account. Repository names are limited to 100 alphanumeric, dash, and underscore
     *             characters, and cannot include certain characters. The suffix .git is prohibited. For
     *             more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit
     *             User Guide.</p>
     */
    updateRepositoryName(args: UpdateRepositoryNameCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRepositoryNameCommandOutput>;
    updateRepositoryName(args: UpdateRepositoryNameCommandInput, cb: (err: any, data?: UpdateRepositoryNameCommandOutput) => void): void;
    updateRepositoryName(args: UpdateRepositoryNameCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRepositoryNameCommandOutput) => void): void;
}

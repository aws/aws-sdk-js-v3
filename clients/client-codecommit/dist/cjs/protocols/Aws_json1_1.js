"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
async function serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand = serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand;
async function serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand = serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand;
async function serializeAws_json1_1BatchDescribeMergeConflictsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.BatchDescribeMergeConflicts";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDescribeMergeConflictsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDescribeMergeConflictsCommand = serializeAws_json1_1BatchDescribeMergeConflictsCommand;
async function serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand = serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand;
async function serializeAws_json1_1BatchGetCommitsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.BatchGetCommits";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetCommitsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetCommitsCommand = serializeAws_json1_1BatchGetCommitsCommand;
async function serializeAws_json1_1BatchGetRepositoriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.BatchGetRepositories";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetRepositoriesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetRepositoriesCommand = serializeAws_json1_1BatchGetRepositoriesCommand;
async function serializeAws_json1_1CreateApprovalRuleTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.CreateApprovalRuleTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateApprovalRuleTemplateInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateApprovalRuleTemplateCommand = serializeAws_json1_1CreateApprovalRuleTemplateCommand;
async function serializeAws_json1_1CreateBranchCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.CreateBranch";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBranchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateBranchCommand = serializeAws_json1_1CreateBranchCommand;
async function serializeAws_json1_1CreateCommitCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.CreateCommit";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCommitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateCommitCommand = serializeAws_json1_1CreateCommitCommand;
async function serializeAws_json1_1CreatePullRequestCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.CreatePullRequest";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePullRequestInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePullRequestCommand = serializeAws_json1_1CreatePullRequestCommand;
async function serializeAws_json1_1CreatePullRequestApprovalRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.CreatePullRequestApprovalRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePullRequestApprovalRuleInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePullRequestApprovalRuleCommand = serializeAws_json1_1CreatePullRequestApprovalRuleCommand;
async function serializeAws_json1_1CreateRepositoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.CreateRepository";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRepositoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateRepositoryCommand = serializeAws_json1_1CreateRepositoryCommand;
async function serializeAws_json1_1CreateUnreferencedMergeCommitCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.CreateUnreferencedMergeCommit";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUnreferencedMergeCommitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateUnreferencedMergeCommitCommand = serializeAws_json1_1CreateUnreferencedMergeCommitCommand;
async function serializeAws_json1_1DeleteApprovalRuleTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.DeleteApprovalRuleTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApprovalRuleTemplateInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteApprovalRuleTemplateCommand = serializeAws_json1_1DeleteApprovalRuleTemplateCommand;
async function serializeAws_json1_1DeleteBranchCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.DeleteBranch";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBranchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteBranchCommand = serializeAws_json1_1DeleteBranchCommand;
async function serializeAws_json1_1DeleteCommentContentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.DeleteCommentContent";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCommentContentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteCommentContentCommand = serializeAws_json1_1DeleteCommentContentCommand;
async function serializeAws_json1_1DeleteFileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.DeleteFile";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFileInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteFileCommand = serializeAws_json1_1DeleteFileCommand;
async function serializeAws_json1_1DeletePullRequestApprovalRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.DeletePullRequestApprovalRule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePullRequestApprovalRuleInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeletePullRequestApprovalRuleCommand = serializeAws_json1_1DeletePullRequestApprovalRuleCommand;
async function serializeAws_json1_1DeleteRepositoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.DeleteRepository";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRepositoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRepositoryCommand = serializeAws_json1_1DeleteRepositoryCommand;
async function serializeAws_json1_1DescribeMergeConflictsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.DescribeMergeConflicts";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMergeConflictsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMergeConflictsCommand = serializeAws_json1_1DescribeMergeConflictsCommand;
async function serializeAws_json1_1DescribePullRequestEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.DescribePullRequestEvents";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePullRequestEventsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribePullRequestEventsCommand = serializeAws_json1_1DescribePullRequestEventsCommand;
async function serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand = serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand;
async function serializeAws_json1_1EvaluatePullRequestApprovalRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodeCommit_20150413.EvaluatePullRequestApprovalRules";
    let body;
    body = JSON.stringify(serializeAws_json1_1EvaluatePullRequestApprovalRulesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EvaluatePullRequestApprovalRulesCommand = serializeAws_json1_1EvaluatePullRequestApprovalRulesCommand;
async function serializeAws_json1_1GetApprovalRuleTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetApprovalRuleTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetApprovalRuleTemplateInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetApprovalRuleTemplateCommand = serializeAws_json1_1GetApprovalRuleTemplateCommand;
async function serializeAws_json1_1GetBlobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetBlob";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetBlobInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetBlobCommand = serializeAws_json1_1GetBlobCommand;
async function serializeAws_json1_1GetBranchCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetBranch";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetBranchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetBranchCommand = serializeAws_json1_1GetBranchCommand;
async function serializeAws_json1_1GetCommentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetComment";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCommentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCommentCommand = serializeAws_json1_1GetCommentCommand;
async function serializeAws_json1_1GetCommentsForComparedCommitCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetCommentsForComparedCommit";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCommentsForComparedCommitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCommentsForComparedCommitCommand = serializeAws_json1_1GetCommentsForComparedCommitCommand;
async function serializeAws_json1_1GetCommentsForPullRequestCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetCommentsForPullRequest";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCommentsForPullRequestInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCommentsForPullRequestCommand = serializeAws_json1_1GetCommentsForPullRequestCommand;
async function serializeAws_json1_1GetCommitCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetCommit";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCommitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCommitCommand = serializeAws_json1_1GetCommitCommand;
async function serializeAws_json1_1GetDifferencesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetDifferences";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDifferencesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDifferencesCommand = serializeAws_json1_1GetDifferencesCommand;
async function serializeAws_json1_1GetFileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetFile";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFileInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetFileCommand = serializeAws_json1_1GetFileCommand;
async function serializeAws_json1_1GetFolderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetFolder";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFolderInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetFolderCommand = serializeAws_json1_1GetFolderCommand;
async function serializeAws_json1_1GetMergeCommitCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetMergeCommit";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMergeCommitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetMergeCommitCommand = serializeAws_json1_1GetMergeCommitCommand;
async function serializeAws_json1_1GetMergeConflictsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetMergeConflicts";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMergeConflictsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetMergeConflictsCommand = serializeAws_json1_1GetMergeConflictsCommand;
async function serializeAws_json1_1GetMergeOptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetMergeOptions";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMergeOptionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetMergeOptionsCommand = serializeAws_json1_1GetMergeOptionsCommand;
async function serializeAws_json1_1GetPullRequestCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetPullRequest";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPullRequestInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPullRequestCommand = serializeAws_json1_1GetPullRequestCommand;
async function serializeAws_json1_1GetPullRequestApprovalStatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetPullRequestApprovalStates";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPullRequestApprovalStatesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPullRequestApprovalStatesCommand = serializeAws_json1_1GetPullRequestApprovalStatesCommand;
async function serializeAws_json1_1GetPullRequestOverrideStateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetPullRequestOverrideState";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPullRequestOverrideStateInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPullRequestOverrideStateCommand = serializeAws_json1_1GetPullRequestOverrideStateCommand;
async function serializeAws_json1_1GetRepositoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetRepository";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRepositoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRepositoryCommand = serializeAws_json1_1GetRepositoryCommand;
async function serializeAws_json1_1GetRepositoryTriggersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.GetRepositoryTriggers";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRepositoryTriggersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRepositoryTriggersCommand = serializeAws_json1_1GetRepositoryTriggersCommand;
async function serializeAws_json1_1ListApprovalRuleTemplatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.ListApprovalRuleTemplates";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApprovalRuleTemplatesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListApprovalRuleTemplatesCommand = serializeAws_json1_1ListApprovalRuleTemplatesCommand;
async function serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand = serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand;
async function serializeAws_json1_1ListBranchesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.ListBranches";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBranchesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListBranchesCommand = serializeAws_json1_1ListBranchesCommand;
async function serializeAws_json1_1ListPullRequestsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.ListPullRequests";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPullRequestsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPullRequestsCommand = serializeAws_json1_1ListPullRequestsCommand;
async function serializeAws_json1_1ListRepositoriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.ListRepositories";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRepositoriesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRepositoriesCommand = serializeAws_json1_1ListRepositoriesCommand;
async function serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand = serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1MergeBranchesByFastForwardCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.MergeBranchesByFastForward";
    let body;
    body = JSON.stringify(serializeAws_json1_1MergeBranchesByFastForwardInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1MergeBranchesByFastForwardCommand = serializeAws_json1_1MergeBranchesByFastForwardCommand;
async function serializeAws_json1_1MergeBranchesBySquashCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.MergeBranchesBySquash";
    let body;
    body = JSON.stringify(serializeAws_json1_1MergeBranchesBySquashInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1MergeBranchesBySquashCommand = serializeAws_json1_1MergeBranchesBySquashCommand;
async function serializeAws_json1_1MergeBranchesByThreeWayCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.MergeBranchesByThreeWay";
    let body;
    body = JSON.stringify(serializeAws_json1_1MergeBranchesByThreeWayInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1MergeBranchesByThreeWayCommand = serializeAws_json1_1MergeBranchesByThreeWayCommand;
async function serializeAws_json1_1MergePullRequestByFastForwardCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.MergePullRequestByFastForward";
    let body;
    body = JSON.stringify(serializeAws_json1_1MergePullRequestByFastForwardInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1MergePullRequestByFastForwardCommand = serializeAws_json1_1MergePullRequestByFastForwardCommand;
async function serializeAws_json1_1MergePullRequestBySquashCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.MergePullRequestBySquash";
    let body;
    body = JSON.stringify(serializeAws_json1_1MergePullRequestBySquashInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1MergePullRequestBySquashCommand = serializeAws_json1_1MergePullRequestBySquashCommand;
async function serializeAws_json1_1MergePullRequestByThreeWayCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.MergePullRequestByThreeWay";
    let body;
    body = JSON.stringify(serializeAws_json1_1MergePullRequestByThreeWayInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1MergePullRequestByThreeWayCommand = serializeAws_json1_1MergePullRequestByThreeWayCommand;
async function serializeAws_json1_1OverridePullRequestApprovalRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodeCommit_20150413.OverridePullRequestApprovalRules";
    let body;
    body = JSON.stringify(serializeAws_json1_1OverridePullRequestApprovalRulesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1OverridePullRequestApprovalRulesCommand = serializeAws_json1_1OverridePullRequestApprovalRulesCommand;
async function serializeAws_json1_1PostCommentForComparedCommitCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.PostCommentForComparedCommit";
    let body;
    body = JSON.stringify(serializeAws_json1_1PostCommentForComparedCommitInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PostCommentForComparedCommitCommand = serializeAws_json1_1PostCommentForComparedCommitCommand;
async function serializeAws_json1_1PostCommentForPullRequestCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.PostCommentForPullRequest";
    let body;
    body = JSON.stringify(serializeAws_json1_1PostCommentForPullRequestInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PostCommentForPullRequestCommand = serializeAws_json1_1PostCommentForPullRequestCommand;
async function serializeAws_json1_1PostCommentReplyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.PostCommentReply";
    let body;
    body = JSON.stringify(serializeAws_json1_1PostCommentReplyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PostCommentReplyCommand = serializeAws_json1_1PostCommentReplyCommand;
async function serializeAws_json1_1PutFileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.PutFile";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutFileInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutFileCommand = serializeAws_json1_1PutFileCommand;
async function serializeAws_json1_1PutRepositoryTriggersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.PutRepositoryTriggers";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRepositoryTriggersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutRepositoryTriggersCommand = serializeAws_json1_1PutRepositoryTriggersCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1TestRepositoryTriggersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.TestRepositoryTriggers";
    let body;
    body = JSON.stringify(serializeAws_json1_1TestRepositoryTriggersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TestRepositoryTriggersCommand = serializeAws_json1_1TestRepositoryTriggersCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodeCommit_20150413.UpdateApprovalRuleTemplateContent";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateApprovalRuleTemplateContentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand = serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand;
async function serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodeCommit_20150413.UpdateApprovalRuleTemplateDescription";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand = serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand;
async function serializeAws_json1_1UpdateApprovalRuleTemplateNameCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodeCommit_20150413.UpdateApprovalRuleTemplateName";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateApprovalRuleTemplateNameInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateApprovalRuleTemplateNameCommand = serializeAws_json1_1UpdateApprovalRuleTemplateNameCommand;
async function serializeAws_json1_1UpdateCommentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.UpdateComment";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCommentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateCommentCommand = serializeAws_json1_1UpdateCommentCommand;
async function serializeAws_json1_1UpdateDefaultBranchCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.UpdateDefaultBranch";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDefaultBranchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDefaultBranchCommand = serializeAws_json1_1UpdateDefaultBranchCommand;
async function serializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodeCommit_20150413.UpdatePullRequestApprovalRuleContent";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePullRequestApprovalRuleContentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand = serializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand;
async function serializeAws_json1_1UpdatePullRequestApprovalStateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodeCommit_20150413.UpdatePullRequestApprovalState";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePullRequestApprovalStateInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdatePullRequestApprovalStateCommand = serializeAws_json1_1UpdatePullRequestApprovalStateCommand;
async function serializeAws_json1_1UpdatePullRequestDescriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.UpdatePullRequestDescription";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePullRequestDescriptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdatePullRequestDescriptionCommand = serializeAws_json1_1UpdatePullRequestDescriptionCommand;
async function serializeAws_json1_1UpdatePullRequestStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.UpdatePullRequestStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePullRequestStatusInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdatePullRequestStatusCommand = serializeAws_json1_1UpdatePullRequestStatusCommand;
async function serializeAws_json1_1UpdatePullRequestTitleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.UpdatePullRequestTitle";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePullRequestTitleInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdatePullRequestTitleCommand = serializeAws_json1_1UpdatePullRequestTitleCommand;
async function serializeAws_json1_1UpdateRepositoryDescriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.UpdateRepositoryDescription";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRepositoryDescriptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRepositoryDescriptionCommand = serializeAws_json1_1UpdateRepositoryDescriptionCommand;
async function serializeAws_json1_1UpdateRepositoryNameCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeCommit_20150413.UpdateRepositoryName";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRepositoryNameInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRepositoryNameCommand = serializeAws_json1_1UpdateRepositoryNameCommand;
async function deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand = deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand;
async function deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumRuleTemplatesAssociatedWithRepositoryException":
        case "com.amazonaws.codecommit#MaximumRuleTemplatesAssociatedWithRepositoryException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchAssociateApprovalRuleTemplateWithRepositoriesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand = deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand;
async function deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumRepositoryNamesExceededException":
        case "com.amazonaws.codecommit#MaximumRepositoryNamesExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNamesRequiredException":
        case "com.amazonaws.codecommit#RepositoryNamesRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNamesRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchDescribeMergeConflictsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDescribeMergeConflictsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDescribeMergeConflictsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDescribeMergeConflictsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDescribeMergeConflictsCommand = deserializeAws_json1_1BatchDescribeMergeConflictsCommand;
async function deserializeAws_json1_1BatchDescribeMergeConflictsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMaxConflictFilesException":
        case "com.amazonaws.codecommit#InvalidMaxConflictFilesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMaxConflictFilesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMaxMergeHunksException":
        case "com.amazonaws.codecommit#InvalidMaxMergeHunksException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMaxMergeHunksExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMergeOptionException":
        case "com.amazonaws.codecommit#InvalidMergeOptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMergeOptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MergeOptionRequiredException":
        case "com.amazonaws.codecommit#MergeOptionRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MergeOptionRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand = deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand;
async function deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumRepositoryNamesExceededException":
        case "com.amazonaws.codecommit#MaximumRepositoryNamesExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNamesRequiredException":
        case "com.amazonaws.codecommit#RepositoryNamesRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNamesRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchGetCommitsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetCommitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetCommitsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetCommitsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetCommitsCommand = deserializeAws_json1_1BatchGetCommitsCommand;
async function deserializeAws_json1_1BatchGetCommitsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommitIdsLimitExceededException":
        case "com.amazonaws.codecommit#CommitIdsLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitIdsLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitIdsListRequiredException":
        case "com.amazonaws.codecommit#CommitIdsListRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitIdsListRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchGetRepositoriesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetRepositoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetRepositoriesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetRepositoriesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetRepositoriesCommand = deserializeAws_json1_1BatchGetRepositoriesCommand;
async function deserializeAws_json1_1BatchGetRepositoriesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumRepositoryNamesExceededException":
        case "com.amazonaws.codecommit#MaximumRepositoryNamesExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNamesRequiredException":
        case "com.amazonaws.codecommit#RepositoryNamesRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNamesRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateApprovalRuleTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateApprovalRuleTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateApprovalRuleTemplateOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateApprovalRuleTemplateOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateApprovalRuleTemplateCommand = deserializeAws_json1_1CreateApprovalRuleTemplateCommand;
async function deserializeAws_json1_1CreateApprovalRuleTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApprovalRuleTemplateContentRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateContentRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateContentRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleTemplateNameAlreadyExistsException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleTemplateContentException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateContentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleTemplateContentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleTemplateDescriptionException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateDescriptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NumberOfRuleTemplatesExceededException":
        case "com.amazonaws.codecommit#NumberOfRuleTemplatesExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NumberOfRuleTemplatesExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateBranchCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateBranchCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateBranchCommand = deserializeAws_json1_1CreateBranchCommand;
async function deserializeAws_json1_1CreateBranchCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BranchNameExistsException":
        case "com.amazonaws.codecommit#BranchNameExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitIdRequiredException":
        case "com.amazonaws.codecommit#CommitIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateCommitCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateCommitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCommitOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCommitOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateCommitCommand = deserializeAws_json1_1CreateCommitCommand;
async function deserializeAws_json1_1CreateCommitCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BranchDoesNotExistException":
        case "com.amazonaws.codecommit#BranchDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BranchNameIsTagNameException":
        case "com.amazonaws.codecommit#BranchNameIsTagNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitMessageLengthExceededException":
        case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryNameConflictsWithFileNameException":
        case "com.amazonaws.codecommit#DirectoryNameConflictsWithFileNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryNameConflictsWithFileNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileContentAndSourceFileSpecifiedException":
        case "com.amazonaws.codecommit#FileContentAndSourceFileSpecifiedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileContentAndSourceFileSpecifiedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileDoesNotExistException":
        case "com.amazonaws.codecommit#FileDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileEntryRequiredException":
        case "com.amazonaws.codecommit#FileEntryRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileEntryRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileModeRequiredException":
        case "com.amazonaws.codecommit#FileModeRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileModeRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileNameConflictsWithDirectoryNameException":
        case "com.amazonaws.codecommit#FileNameConflictsWithDirectoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileNameConflictsWithDirectoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FilePathConflictsWithSubmodulePathException":
        case "com.amazonaws.codecommit#FilePathConflictsWithSubmodulePathException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FilePathConflictsWithSubmodulePathExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FolderContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeletionParameterException":
        case "com.amazonaws.codecommit#InvalidDeletionParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeletionParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailException":
        case "com.amazonaws.codecommit#InvalidEmailException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFileModeException":
        case "com.amazonaws.codecommit#InvalidFileModeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParentCommitIdException":
        case "com.amazonaws.codecommit#InvalidParentCommitIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParentCommitIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumFileEntriesExceededException":
        case "com.amazonaws.codecommit#MaximumFileEntriesExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumFileEntriesExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameLengthExceededException":
        case "com.amazonaws.codecommit#NameLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoChangeException":
        case "com.amazonaws.codecommit#NoChangeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoChangeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParentCommitDoesNotExistException":
        case "com.amazonaws.codecommit#ParentCommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParentCommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParentCommitIdOutdatedException":
        case "com.amazonaws.codecommit#ParentCommitIdOutdatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParentCommitIdOutdatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParentCommitIdRequiredException":
        case "com.amazonaws.codecommit#ParentCommitIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParentCommitIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PutFileEntryConflictException":
        case "com.amazonaws.codecommit#PutFileEntryConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PutFileEntryConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RestrictedSourceFileException":
        case "com.amazonaws.codecommit#RestrictedSourceFileException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RestrictedSourceFileExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SamePathRequestException":
        case "com.amazonaws.codecommit#SamePathRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SamePathRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SourceFileOrContentRequiredException":
        case "com.amazonaws.codecommit#SourceFileOrContentRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SourceFileOrContentRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreatePullRequestCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePullRequestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePullRequestOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePullRequestOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePullRequestCommand = deserializeAws_json1_1CreatePullRequestCommand;
async function deserializeAws_json1_1CreatePullRequestCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientRequestTokenRequiredException":
        case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotencyParameterMismatchException":
        case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClientRequestTokenException":
        case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDescriptionException":
        case "com.amazonaws.codecommit#InvalidDescriptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDescriptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReferenceNameException":
        case "com.amazonaws.codecommit#InvalidReferenceNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidReferenceNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTargetException":
        case "com.amazonaws.codecommit#InvalidTargetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTargetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTargetsException":
        case "com.amazonaws.codecommit#InvalidTargetsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTargetsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTitleException":
        case "com.amazonaws.codecommit#InvalidTitleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTitleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumOpenPullRequestsExceededException":
        case "com.amazonaws.codecommit#MaximumOpenPullRequestsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumOpenPullRequestsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MultipleRepositoriesInPullRequestException":
        case "com.amazonaws.codecommit#MultipleRepositoriesInPullRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MultipleRepositoriesInPullRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReferenceDoesNotExistException":
        case "com.amazonaws.codecommit#ReferenceDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReferenceDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReferenceNameRequiredException":
        case "com.amazonaws.codecommit#ReferenceNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReferenceNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReferenceTypeNotSupportedException":
        case "com.amazonaws.codecommit#ReferenceTypeNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReferenceTypeNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SourceAndDestinationAreSameException":
        case "com.amazonaws.codecommit#SourceAndDestinationAreSameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SourceAndDestinationAreSameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetRequiredException":
        case "com.amazonaws.codecommit#TargetRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TargetRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetsRequiredException":
        case "com.amazonaws.codecommit#TargetsRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TargetsRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TitleRequiredException":
        case "com.amazonaws.codecommit#TitleRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TitleRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreatePullRequestApprovalRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePullRequestApprovalRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePullRequestApprovalRuleOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePullRequestApprovalRuleOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePullRequestApprovalRuleCommand = deserializeAws_json1_1CreatePullRequestApprovalRuleCommand;
async function deserializeAws_json1_1CreatePullRequestApprovalRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApprovalRuleContentRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleContentRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleContentRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleNameAlreadyExistsException":
        case "com.amazonaws.codecommit#ApprovalRuleNameAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleNameAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleContentException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleContentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleContentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NumberOfRulesExceededException":
        case "com.amazonaws.codecommit#NumberOfRulesExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NumberOfRulesExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateRepositoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateRepositoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRepositoryOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateRepositoryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateRepositoryCommand = deserializeAws_json1_1CreateRepositoryCommand;
async function deserializeAws_json1_1CreateRepositoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryDescriptionException":
        case "com.amazonaws.codecommit#InvalidRepositoryDescriptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryDescriptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSystemTagUsageException":
        case "com.amazonaws.codecommit#InvalidSystemTagUsageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSystemTagUsageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagsMapException":
        case "com.amazonaws.codecommit#InvalidTagsMapException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagsMapExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryLimitExceededException":
        case "com.amazonaws.codecommit#RepositoryLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameExistsException":
        case "com.amazonaws.codecommit#RepositoryNameExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagPolicyException":
        case "com.amazonaws.codecommit#TagPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.codecommit#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateUnreferencedMergeCommitCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateUnreferencedMergeCommitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUnreferencedMergeCommitOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateUnreferencedMergeCommitOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateUnreferencedMergeCommitCommand = deserializeAws_json1_1CreateUnreferencedMergeCommitCommand;
async function deserializeAws_json1_1CreateUnreferencedMergeCommitCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitMessageLengthExceededException":
        case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentReferenceUpdateException":
        case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileModeRequiredException":
        case "com.amazonaws.codecommit#FileModeRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileModeRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FolderContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictResolutionException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailException":
        case "com.amazonaws.codecommit#InvalidEmailException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFileModeException":
        case "com.amazonaws.codecommit#InvalidFileModeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMergeOptionException":
        case "com.amazonaws.codecommit#InvalidMergeOptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMergeOptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplacementContentException":
        case "com.amazonaws.codecommit#InvalidReplacementContentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplacementTypeException":
        case "com.amazonaws.codecommit#InvalidReplacementTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ManualMergeRequiredException":
        case "com.amazonaws.codecommit#ManualMergeRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumConflictResolutionEntriesExceededException":
        case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MergeOptionRequiredException":
        case "com.amazonaws.codecommit#MergeOptionRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MergeOptionRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MultipleConflictResolutionEntriesException":
        case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameLengthExceededException":
        case "com.amazonaws.codecommit#NameLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplacementContentRequiredException":
        case "com.amazonaws.codecommit#ReplacementContentRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplacementTypeRequiredException":
        case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteApprovalRuleTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteApprovalRuleTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApprovalRuleTemplateOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteApprovalRuleTemplateOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteApprovalRuleTemplateCommand = deserializeAws_json1_1DeleteApprovalRuleTemplateCommand;
async function deserializeAws_json1_1DeleteApprovalRuleTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApprovalRuleTemplateInUseException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteBranchCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteBranchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteBranchOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteBranchOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteBranchCommand = deserializeAws_json1_1DeleteBranchCommand;
async function deserializeAws_json1_1DeleteBranchCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DefaultBranchCannotBeDeletedException":
        case "com.amazonaws.codecommit#DefaultBranchCannotBeDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DefaultBranchCannotBeDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteCommentContentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteCommentContentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteCommentContentOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteCommentContentOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteCommentContentCommand = deserializeAws_json1_1DeleteCommentContentCommand;
async function deserializeAws_json1_1DeleteCommentContentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommentDeletedException":
        case "com.amazonaws.codecommit#CommentDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentDoesNotExistException":
        case "com.amazonaws.codecommit#CommentDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentIdRequiredException":
        case "com.amazonaws.codecommit#CommentIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommentIdException":
        case "com.amazonaws.codecommit#InvalidCommentIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteFileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteFileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteFileOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteFileOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteFileCommand = deserializeAws_json1_1DeleteFileCommand;
async function deserializeAws_json1_1DeleteFileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BranchDoesNotExistException":
        case "com.amazonaws.codecommit#BranchDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BranchNameIsTagNameException":
        case "com.amazonaws.codecommit#BranchNameIsTagNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitMessageLengthExceededException":
        case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileDoesNotExistException":
        case "com.amazonaws.codecommit#FileDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailException":
        case "com.amazonaws.codecommit#InvalidEmailException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParentCommitIdException":
        case "com.amazonaws.codecommit#InvalidParentCommitIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParentCommitIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameLengthExceededException":
        case "com.amazonaws.codecommit#NameLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParentCommitDoesNotExistException":
        case "com.amazonaws.codecommit#ParentCommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParentCommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParentCommitIdOutdatedException":
        case "com.amazonaws.codecommit#ParentCommitIdOutdatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParentCommitIdOutdatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParentCommitIdRequiredException":
        case "com.amazonaws.codecommit#ParentCommitIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParentCommitIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeletePullRequestApprovalRuleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeletePullRequestApprovalRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeletePullRequestApprovalRuleOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeletePullRequestApprovalRuleOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeletePullRequestApprovalRuleCommand = deserializeAws_json1_1DeletePullRequestApprovalRuleCommand;
async function deserializeAws_json1_1DeletePullRequestApprovalRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApprovalRuleNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CannotDeleteApprovalRuleFromTemplateException":
        case "com.amazonaws.codecommit#CannotDeleteApprovalRuleFromTemplateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteRepositoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRepositoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRepositoryOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRepositoryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRepositoryCommand = deserializeAws_json1_1DeleteRepositoryCommand;
async function deserializeAws_json1_1DeleteRepositoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeMergeConflictsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMergeConflictsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMergeConflictsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMergeConflictsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMergeConflictsCommand = deserializeAws_json1_1DescribeMergeConflictsCommand;
async function deserializeAws_json1_1DescribeMergeConflictsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileDoesNotExistException":
        case "com.amazonaws.codecommit#FileDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMaxMergeHunksException":
        case "com.amazonaws.codecommit#InvalidMaxMergeHunksException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMaxMergeHunksExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMergeOptionException":
        case "com.amazonaws.codecommit#InvalidMergeOptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMergeOptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MergeOptionRequiredException":
        case "com.amazonaws.codecommit#MergeOptionRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MergeOptionRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribePullRequestEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribePullRequestEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePullRequestEventsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePullRequestEventsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribePullRequestEventsCommand = deserializeAws_json1_1DescribePullRequestEventsCommand;
async function deserializeAws_json1_1DescribePullRequestEventsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ActorDoesNotExistException":
        case "com.amazonaws.codecommit#ActorDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ActorDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidActorArnException":
        case "com.amazonaws.codecommit#InvalidActorArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidActorArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestEventTypeException":
        case "com.amazonaws.codecommit#InvalidPullRequestEventTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestEventTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand = deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand;
async function deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EvaluatePullRequestApprovalRulesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EvaluatePullRequestApprovalRulesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommand = deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommand;
async function deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRevisionIdException":
        case "com.amazonaws.codecommit#InvalidRevisionIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RevisionIdRequiredException":
        case "com.amazonaws.codecommit#RevisionIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RevisionNotCurrentException":
        case "com.amazonaws.codecommit#RevisionNotCurrentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RevisionNotCurrentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetApprovalRuleTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetApprovalRuleTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetApprovalRuleTemplateOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetApprovalRuleTemplateOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetApprovalRuleTemplateCommand = deserializeAws_json1_1GetApprovalRuleTemplateCommand;
async function deserializeAws_json1_1GetApprovalRuleTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetBlobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetBlobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetBlobOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetBlobOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetBlobCommand = deserializeAws_json1_1GetBlobCommand;
async function deserializeAws_json1_1GetBlobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BlobIdDoesNotExistException":
        case "com.amazonaws.codecommit#BlobIdDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BlobIdDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BlobIdRequiredException":
        case "com.amazonaws.codecommit#BlobIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BlobIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileTooLargeException":
        case "com.amazonaws.codecommit#FileTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBlobIdException":
        case "com.amazonaws.codecommit#InvalidBlobIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidBlobIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetBranchCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetBranchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetBranchOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetBranchOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetBranchCommand = deserializeAws_json1_1GetBranchCommand;
async function deserializeAws_json1_1GetBranchCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BranchDoesNotExistException":
        case "com.amazonaws.codecommit#BranchDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetCommentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCommentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCommentOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCommentOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCommentCommand = deserializeAws_json1_1GetCommentCommand;
async function deserializeAws_json1_1GetCommentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommentDeletedException":
        case "com.amazonaws.codecommit#CommentDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentDoesNotExistException":
        case "com.amazonaws.codecommit#CommentDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentIdRequiredException":
        case "com.amazonaws.codecommit#CommentIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommentIdException":
        case "com.amazonaws.codecommit#InvalidCommentIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetCommentsForComparedCommitCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCommentsForComparedCommitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCommentsForComparedCommitOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCommentsForComparedCommitOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCommentsForComparedCommitCommand = deserializeAws_json1_1GetCommentsForComparedCommitCommand;
async function deserializeAws_json1_1GetCommentsForComparedCommitCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitIdRequiredException":
        case "com.amazonaws.codecommit#CommitIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetCommentsForPullRequestCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCommentsForPullRequestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCommentsForPullRequestOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCommentsForPullRequestOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCommentsForPullRequestCommand = deserializeAws_json1_1GetCommentsForPullRequestCommand;
async function deserializeAws_json1_1GetCommentsForPullRequestCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitIdRequiredException":
        case "com.amazonaws.codecommit#CommitIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotAssociatedWithPullRequestException":
        case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetCommitCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCommitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCommitOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCommitOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCommitCommand = deserializeAws_json1_1GetCommitCommand;
async function deserializeAws_json1_1GetCommitCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommitIdDoesNotExistException":
        case "com.amazonaws.codecommit#CommitIdDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitIdDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitIdRequiredException":
        case "com.amazonaws.codecommit#CommitIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetDifferencesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDifferencesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDifferencesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDifferencesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDifferencesCommand = deserializeAws_json1_1GetDifferencesCommand;
async function deserializeAws_json1_1GetDifferencesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PathDoesNotExistException":
        case "com.amazonaws.codecommit#PathDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PathDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetFileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetFileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFileOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetFileOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetFileCommand = deserializeAws_json1_1GetFileCommand;
async function deserializeAws_json1_1GetFileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileDoesNotExistException":
        case "com.amazonaws.codecommit#FileDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileTooLargeException":
        case "com.amazonaws.codecommit#FileTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetFolderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetFolderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFolderOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetFolderOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetFolderCommand = deserializeAws_json1_1GetFolderCommand;
async function deserializeAws_json1_1GetFolderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FolderDoesNotExistException":
        case "com.amazonaws.codecommit#FolderDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FolderDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetMergeCommitCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetMergeCommitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMergeCommitOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMergeCommitOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetMergeCommitCommand = deserializeAws_json1_1GetMergeCommitCommand;
async function deserializeAws_json1_1GetMergeCommitCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetMergeConflictsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetMergeConflictsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMergeConflictsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMergeConflictsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetMergeConflictsCommand = deserializeAws_json1_1GetMergeConflictsCommand;
async function deserializeAws_json1_1GetMergeConflictsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDestinationCommitSpecifierException":
        case "com.amazonaws.codecommit#InvalidDestinationCommitSpecifierException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDestinationCommitSpecifierExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMaxConflictFilesException":
        case "com.amazonaws.codecommit#InvalidMaxConflictFilesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMaxConflictFilesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMergeOptionException":
        case "com.amazonaws.codecommit#InvalidMergeOptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMergeOptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSourceCommitSpecifierException":
        case "com.amazonaws.codecommit#InvalidSourceCommitSpecifierException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSourceCommitSpecifierExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MergeOptionRequiredException":
        case "com.amazonaws.codecommit#MergeOptionRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MergeOptionRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetMergeOptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetMergeOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMergeOptionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMergeOptionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetMergeOptionsCommand = deserializeAws_json1_1GetMergeOptionsCommand;
async function deserializeAws_json1_1GetMergeOptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetPullRequestCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPullRequestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPullRequestOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPullRequestOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPullRequestCommand = deserializeAws_json1_1GetPullRequestCommand;
async function deserializeAws_json1_1GetPullRequestCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetPullRequestApprovalStatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPullRequestApprovalStatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPullRequestApprovalStatesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPullRequestApprovalStatesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPullRequestApprovalStatesCommand = deserializeAws_json1_1GetPullRequestApprovalStatesCommand;
async function deserializeAws_json1_1GetPullRequestApprovalStatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRevisionIdException":
        case "com.amazonaws.codecommit#InvalidRevisionIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RevisionIdRequiredException":
        case "com.amazonaws.codecommit#RevisionIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetPullRequestOverrideStateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPullRequestOverrideStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPullRequestOverrideStateOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPullRequestOverrideStateOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPullRequestOverrideStateCommand = deserializeAws_json1_1GetPullRequestOverrideStateCommand;
async function deserializeAws_json1_1GetPullRequestOverrideStateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRevisionIdException":
        case "com.amazonaws.codecommit#InvalidRevisionIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RevisionIdRequiredException":
        case "com.amazonaws.codecommit#RevisionIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetRepositoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRepositoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRepositoryOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRepositoryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRepositoryCommand = deserializeAws_json1_1GetRepositoryCommand;
async function deserializeAws_json1_1GetRepositoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetRepositoryTriggersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRepositoryTriggersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRepositoryTriggersOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRepositoryTriggersOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRepositoryTriggersCommand = deserializeAws_json1_1GetRepositoryTriggersCommand;
async function deserializeAws_json1_1GetRepositoryTriggersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListApprovalRuleTemplatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListApprovalRuleTemplatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListApprovalRuleTemplatesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListApprovalRuleTemplatesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListApprovalRuleTemplatesCommand = deserializeAws_json1_1ListApprovalRuleTemplatesCommand;
async function deserializeAws_json1_1ListApprovalRuleTemplatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAssociatedApprovalRuleTemplatesForRepositoryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand = deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand;
async function deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListBranchesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListBranchesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBranchesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListBranchesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListBranchesCommand = deserializeAws_json1_1ListBranchesCommand;
async function deserializeAws_json1_1ListBranchesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListPullRequestsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPullRequestsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPullRequestsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPullRequestsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPullRequestsCommand = deserializeAws_json1_1ListPullRequestsCommand;
async function deserializeAws_json1_1ListPullRequestsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorDoesNotExistException":
        case "com.amazonaws.codecommit#AuthorDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAuthorArnException":
        case "com.amazonaws.codecommit#InvalidAuthorArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAuthorArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestStatusException":
        case "com.amazonaws.codecommit#InvalidPullRequestStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListRepositoriesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRepositoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRepositoriesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRepositoriesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRepositoriesCommand = deserializeAws_json1_1ListRepositoriesCommand;
async function deserializeAws_json1_1ListRepositoriesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOrderException":
        case "com.amazonaws.codecommit#InvalidOrderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOrderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSortByException":
        case "com.amazonaws.codecommit#InvalidSortByException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSortByExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRepositoriesForApprovalRuleTemplateOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand = deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand;
async function deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidContinuationTokenException":
        case "com.amazonaws.codecommit#InvalidContinuationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidContinuationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.codecommit#InvalidMaxResultsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTagsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForResourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
async function deserializeAws_json1_1ListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceArnException":
        case "com.amazonaws.codecommit#InvalidResourceArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceArnRequiredException":
        case "com.amazonaws.codecommit#ResourceArnRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1MergeBranchesByFastForwardCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1MergeBranchesByFastForwardCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MergeBranchesByFastForwardOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "MergeBranchesByFastForwardOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1MergeBranchesByFastForwardCommand = deserializeAws_json1_1MergeBranchesByFastForwardCommand;
async function deserializeAws_json1_1MergeBranchesByFastForwardCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BranchDoesNotExistException":
        case "com.amazonaws.codecommit#BranchDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BranchNameIsTagNameException":
        case "com.amazonaws.codecommit#BranchNameIsTagNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentReferenceUpdateException":
        case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTargetBranchException":
        case "com.amazonaws.codecommit#InvalidTargetBranchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTargetBranchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ManualMergeRequiredException":
        case "com.amazonaws.codecommit#ManualMergeRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1MergeBranchesBySquashCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1MergeBranchesBySquashCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MergeBranchesBySquashOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "MergeBranchesBySquashOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1MergeBranchesBySquashCommand = deserializeAws_json1_1MergeBranchesBySquashCommand;
async function deserializeAws_json1_1MergeBranchesBySquashCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BranchDoesNotExistException":
        case "com.amazonaws.codecommit#BranchDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BranchNameIsTagNameException":
        case "com.amazonaws.codecommit#BranchNameIsTagNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitMessageLengthExceededException":
        case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentReferenceUpdateException":
        case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileModeRequiredException":
        case "com.amazonaws.codecommit#FileModeRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileModeRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FolderContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictResolutionException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailException":
        case "com.amazonaws.codecommit#InvalidEmailException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFileModeException":
        case "com.amazonaws.codecommit#InvalidFileModeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplacementContentException":
        case "com.amazonaws.codecommit#InvalidReplacementContentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplacementTypeException":
        case "com.amazonaws.codecommit#InvalidReplacementTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTargetBranchException":
        case "com.amazonaws.codecommit#InvalidTargetBranchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTargetBranchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ManualMergeRequiredException":
        case "com.amazonaws.codecommit#ManualMergeRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumConflictResolutionEntriesExceededException":
        case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MultipleConflictResolutionEntriesException":
        case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameLengthExceededException":
        case "com.amazonaws.codecommit#NameLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplacementContentRequiredException":
        case "com.amazonaws.codecommit#ReplacementContentRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplacementTypeRequiredException":
        case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1MergeBranchesByThreeWayCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1MergeBranchesByThreeWayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MergeBranchesByThreeWayOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "MergeBranchesByThreeWayOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1MergeBranchesByThreeWayCommand = deserializeAws_json1_1MergeBranchesByThreeWayCommand;
async function deserializeAws_json1_1MergeBranchesByThreeWayCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BranchDoesNotExistException":
        case "com.amazonaws.codecommit#BranchDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BranchNameIsTagNameException":
        case "com.amazonaws.codecommit#BranchNameIsTagNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitMessageLengthExceededException":
        case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitRequiredException":
        case "com.amazonaws.codecommit#CommitRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentReferenceUpdateException":
        case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileModeRequiredException":
        case "com.amazonaws.codecommit#FileModeRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileModeRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FolderContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitException":
        case "com.amazonaws.codecommit#InvalidCommitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictResolutionException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailException":
        case "com.amazonaws.codecommit#InvalidEmailException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFileModeException":
        case "com.amazonaws.codecommit#InvalidFileModeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplacementContentException":
        case "com.amazonaws.codecommit#InvalidReplacementContentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplacementTypeException":
        case "com.amazonaws.codecommit#InvalidReplacementTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTargetBranchException":
        case "com.amazonaws.codecommit#InvalidTargetBranchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTargetBranchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ManualMergeRequiredException":
        case "com.amazonaws.codecommit#ManualMergeRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumConflictResolutionEntriesExceededException":
        case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MultipleConflictResolutionEntriesException":
        case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameLengthExceededException":
        case "com.amazonaws.codecommit#NameLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplacementContentRequiredException":
        case "com.amazonaws.codecommit#ReplacementContentRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplacementTypeRequiredException":
        case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1MergePullRequestByFastForwardCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1MergePullRequestByFastForwardCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MergePullRequestByFastForwardOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "MergePullRequestByFastForwardOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1MergePullRequestByFastForwardCommand = deserializeAws_json1_1MergePullRequestByFastForwardCommand;
async function deserializeAws_json1_1MergePullRequestByFastForwardCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentReferenceUpdateException":
        case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ManualMergeRequiredException":
        case "com.amazonaws.codecommit#ManualMergeRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestApprovalRulesNotSatisfiedException":
        case "com.amazonaws.codecommit#PullRequestApprovalRulesNotSatisfiedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReferenceDoesNotExistException":
        case "com.amazonaws.codecommit#ReferenceDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReferenceDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotAssociatedWithPullRequestException":
        case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TipOfSourceReferenceIsDifferentException":
        case "com.amazonaws.codecommit#TipOfSourceReferenceIsDifferentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1MergePullRequestBySquashCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1MergePullRequestBySquashCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MergePullRequestBySquashOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "MergePullRequestBySquashOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1MergePullRequestBySquashCommand = deserializeAws_json1_1MergePullRequestBySquashCommand;
async function deserializeAws_json1_1MergePullRequestBySquashCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommitMessageLengthExceededException":
        case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentReferenceUpdateException":
        case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FolderContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictResolutionException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailException":
        case "com.amazonaws.codecommit#InvalidEmailException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFileModeException":
        case "com.amazonaws.codecommit#InvalidFileModeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplacementContentException":
        case "com.amazonaws.codecommit#InvalidReplacementContentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplacementTypeException":
        case "com.amazonaws.codecommit#InvalidReplacementTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ManualMergeRequiredException":
        case "com.amazonaws.codecommit#ManualMergeRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumConflictResolutionEntriesExceededException":
        case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MultipleConflictResolutionEntriesException":
        case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameLengthExceededException":
        case "com.amazonaws.codecommit#NameLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestApprovalRulesNotSatisfiedException":
        case "com.amazonaws.codecommit#PullRequestApprovalRulesNotSatisfiedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplacementContentRequiredException":
        case "com.amazonaws.codecommit#ReplacementContentRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplacementTypeRequiredException":
        case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotAssociatedWithPullRequestException":
        case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TipOfSourceReferenceIsDifferentException":
        case "com.amazonaws.codecommit#TipOfSourceReferenceIsDifferentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1MergePullRequestByThreeWayCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1MergePullRequestByThreeWayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MergePullRequestByThreeWayOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "MergePullRequestByThreeWayOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1MergePullRequestByThreeWayCommand = deserializeAws_json1_1MergePullRequestByThreeWayCommand;
async function deserializeAws_json1_1MergePullRequestByThreeWayCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommitMessageLengthExceededException":
        case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentReferenceUpdateException":
        case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FolderContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictDetailLevelException":
        case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictResolutionException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictResolutionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidConflictResolutionStrategyException":
        case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailException":
        case "com.amazonaws.codecommit#InvalidEmailException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFileModeException":
        case "com.amazonaws.codecommit#InvalidFileModeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplacementContentException":
        case "com.amazonaws.codecommit#InvalidReplacementContentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidReplacementContentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidReplacementTypeException":
        case "com.amazonaws.codecommit#InvalidReplacementTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidReplacementTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ManualMergeRequiredException":
        case "com.amazonaws.codecommit#ManualMergeRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ManualMergeRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumConflictResolutionEntriesExceededException":
        case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumFileContentToLoadExceededException":
        case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumItemsToCompareExceededException":
        case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MultipleConflictResolutionEntriesException":
        case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameLengthExceededException":
        case "com.amazonaws.codecommit#NameLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestApprovalRulesNotSatisfiedException":
        case "com.amazonaws.codecommit#PullRequestApprovalRulesNotSatisfiedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplacementContentRequiredException":
        case "com.amazonaws.codecommit#ReplacementContentRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplacementContentRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplacementTypeRequiredException":
        case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotAssociatedWithPullRequestException":
        case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TipOfSourceReferenceIsDifferentException":
        case "com.amazonaws.codecommit#TipOfSourceReferenceIsDifferentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TipsDivergenceExceededException":
        case "com.amazonaws.codecommit#TipsDivergenceExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TipsDivergenceExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1OverridePullRequestApprovalRulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1OverridePullRequestApprovalRulesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1OverridePullRequestApprovalRulesCommand = deserializeAws_json1_1OverridePullRequestApprovalRulesCommand;
async function deserializeAws_json1_1OverridePullRequestApprovalRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOverrideStatusException":
        case "com.amazonaws.codecommit#InvalidOverrideStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOverrideStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRevisionIdException":
        case "com.amazonaws.codecommit#InvalidRevisionIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OverrideAlreadySetException":
        case "com.amazonaws.codecommit#OverrideAlreadySetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OverrideAlreadySetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OverrideStatusRequiredException":
        case "com.amazonaws.codecommit#OverrideStatusRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OverrideStatusRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RevisionIdRequiredException":
        case "com.amazonaws.codecommit#RevisionIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RevisionNotCurrentException":
        case "com.amazonaws.codecommit#RevisionNotCurrentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RevisionNotCurrentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PostCommentForComparedCommitCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PostCommentForComparedCommitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PostCommentForComparedCommitOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PostCommentForComparedCommitOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PostCommentForComparedCommitCommand = deserializeAws_json1_1PostCommentForComparedCommitCommand;
async function deserializeAws_json1_1PostCommentForComparedCommitCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BeforeCommitIdAndAfterCommitIdAreSameException":
        case "com.amazonaws.codecommit#BeforeCommitIdAndAfterCommitIdAreSameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientRequestTokenRequiredException":
        case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentContentRequiredException":
        case "com.amazonaws.codecommit#CommentContentRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentContentRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitIdRequiredException":
        case "com.amazonaws.codecommit#CommitIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotencyParameterMismatchException":
        case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClientRequestTokenException":
        case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFileLocationException":
        case "com.amazonaws.codecommit#InvalidFileLocationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFileLocationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilePositionException":
        case "com.amazonaws.codecommit#InvalidFilePositionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilePositionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRelativeFileVersionEnumException":
        case "com.amazonaws.codecommit#InvalidRelativeFileVersionEnumException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRelativeFileVersionEnumExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PathDoesNotExistException":
        case "com.amazonaws.codecommit#PathDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PathDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PostCommentForPullRequestCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PostCommentForPullRequestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PostCommentForPullRequestOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PostCommentForPullRequestOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PostCommentForPullRequestCommand = deserializeAws_json1_1PostCommentForPullRequestCommand;
async function deserializeAws_json1_1PostCommentForPullRequestCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BeforeCommitIdAndAfterCommitIdAreSameException":
        case "com.amazonaws.codecommit#BeforeCommitIdAndAfterCommitIdAreSameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientRequestTokenRequiredException":
        case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentContentRequiredException":
        case "com.amazonaws.codecommit#CommentContentRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentContentRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitDoesNotExistException":
        case "com.amazonaws.codecommit#CommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitIdRequiredException":
        case "com.amazonaws.codecommit#CommitIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotencyParameterMismatchException":
        case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClientRequestTokenException":
        case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommitIdException":
        case "com.amazonaws.codecommit#InvalidCommitIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommitIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFileLocationException":
        case "com.amazonaws.codecommit#InvalidFileLocationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFileLocationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilePositionException":
        case "com.amazonaws.codecommit#InvalidFilePositionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilePositionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRelativeFileVersionEnumException":
        case "com.amazonaws.codecommit#InvalidRelativeFileVersionEnumException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRelativeFileVersionEnumExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PathDoesNotExistException":
        case "com.amazonaws.codecommit#PathDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PathDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNotAssociatedWithPullRequestException":
        case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PostCommentReplyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PostCommentReplyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PostCommentReplyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PostCommentReplyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PostCommentReplyCommand = deserializeAws_json1_1PostCommentReplyCommand;
async function deserializeAws_json1_1PostCommentReplyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientRequestTokenRequiredException":
        case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentContentRequiredException":
        case "com.amazonaws.codecommit#CommentContentRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentContentRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentDoesNotExistException":
        case "com.amazonaws.codecommit#CommentDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentIdRequiredException":
        case "com.amazonaws.codecommit#CommentIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotencyParameterMismatchException":
        case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidClientRequestTokenException":
        case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommentIdException":
        case "com.amazonaws.codecommit#InvalidCommentIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutFileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutFileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutFileOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutFileOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutFileCommand = deserializeAws_json1_1PutFileCommand;
async function deserializeAws_json1_1PutFileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BranchDoesNotExistException":
        case "com.amazonaws.codecommit#BranchDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BranchNameIsTagNameException":
        case "com.amazonaws.codecommit#BranchNameIsTagNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameIsTagNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommitMessageLengthExceededException":
        case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectoryNameConflictsWithFileNameException":
        case "com.amazonaws.codecommit#DirectoryNameConflictsWithFileNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectoryNameConflictsWithFileNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileContentRequiredException":
        case "com.amazonaws.codecommit#FileContentRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileContentRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FileNameConflictsWithDirectoryNameException":
        case "com.amazonaws.codecommit#FileNameConflictsWithDirectoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FileNameConflictsWithDirectoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FilePathConflictsWithSubmodulePathException":
        case "com.amazonaws.codecommit#FilePathConflictsWithSubmodulePathException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FilePathConflictsWithSubmodulePathExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FolderContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeletionParameterException":
        case "com.amazonaws.codecommit#InvalidDeletionParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeletionParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEmailException":
        case "com.amazonaws.codecommit#InvalidEmailException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEmailExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFileModeException":
        case "com.amazonaws.codecommit#InvalidFileModeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFileModeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParentCommitIdException":
        case "com.amazonaws.codecommit#InvalidParentCommitIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParentCommitIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPathException":
        case "com.amazonaws.codecommit#InvalidPathException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPathExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameLengthExceededException":
        case "com.amazonaws.codecommit#NameLengthExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameLengthExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParentCommitDoesNotExistException":
        case "com.amazonaws.codecommit#ParentCommitDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParentCommitDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParentCommitIdOutdatedException":
        case "com.amazonaws.codecommit#ParentCommitIdOutdatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParentCommitIdOutdatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ParentCommitIdRequiredException":
        case "com.amazonaws.codecommit#ParentCommitIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ParentCommitIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PathRequiredException":
        case "com.amazonaws.codecommit#PathRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PathRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SameFileContentException":
        case "com.amazonaws.codecommit#SameFileContentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SameFileContentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutRepositoryTriggersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutRepositoryTriggersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRepositoryTriggersOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutRepositoryTriggersOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutRepositoryTriggersCommand = deserializeAws_json1_1PutRepositoryTriggersCommand;
async function deserializeAws_json1_1PutRepositoryTriggersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryTriggerBranchNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerBranchNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryTriggerBranchNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryTriggerCustomDataException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerCustomDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryTriggerCustomDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryTriggerDestinationArnException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerDestinationArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryTriggerEventsException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerEventsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryTriggerEventsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryTriggerNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryTriggerNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryTriggerRegionException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryTriggerRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumBranchesExceededException":
        case "com.amazonaws.codecommit#MaximumBranchesExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumBranchesExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumRepositoryTriggersExceededException":
        case "com.amazonaws.codecommit#MaximumRepositoryTriggersExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumRepositoryTriggersExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryTriggerBranchNameListRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggerBranchNameListRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryTriggerDestinationArnRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggerDestinationArnRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryTriggerEventsListRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggerEventsListRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryTriggerEventsListRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryTriggerNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggerNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryTriggerNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryTriggersListRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggersListRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryTriggersListRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1TagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
async function deserializeAws_json1_1TagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceArnException":
        case "com.amazonaws.codecommit#InvalidResourceArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSystemTagUsageException":
        case "com.amazonaws.codecommit#InvalidSystemTagUsageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSystemTagUsageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagsMapException":
        case "com.amazonaws.codecommit#InvalidTagsMapException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagsMapExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceArnRequiredException":
        case "com.amazonaws.codecommit#ResourceArnRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagPolicyException":
        case "com.amazonaws.codecommit#TagPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagsMapRequiredException":
        case "com.amazonaws.codecommit#TagsMapRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagsMapRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.codecommit#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1TestRepositoryTriggersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TestRepositoryTriggersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TestRepositoryTriggersOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TestRepositoryTriggersOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TestRepositoryTriggersCommand = deserializeAws_json1_1TestRepositoryTriggersCommand;
async function deserializeAws_json1_1TestRepositoryTriggersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryTriggerBranchNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerBranchNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryTriggerBranchNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryTriggerCustomDataException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerCustomDataException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryTriggerCustomDataExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryTriggerDestinationArnException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerDestinationArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryTriggerEventsException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerEventsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryTriggerEventsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryTriggerNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryTriggerNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryTriggerRegionException":
        case "com.amazonaws.codecommit#InvalidRepositoryTriggerRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryTriggerRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumBranchesExceededException":
        case "com.amazonaws.codecommit#MaximumBranchesExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumBranchesExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumRepositoryTriggersExceededException":
        case "com.amazonaws.codecommit#MaximumRepositoryTriggersExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumRepositoryTriggersExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryTriggerBranchNameListRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggerBranchNameListRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryTriggerDestinationArnRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggerDestinationArnRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryTriggerEventsListRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggerEventsListRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryTriggerEventsListRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryTriggerNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggerNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryTriggerNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryTriggersListRequiredException":
        case "com.amazonaws.codecommit#RepositoryTriggersListRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryTriggersListRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UntagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
async function deserializeAws_json1_1UntagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceArnException":
        case "com.amazonaws.codecommit#InvalidResourceArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSystemTagUsageException":
        case "com.amazonaws.codecommit#InvalidSystemTagUsageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSystemTagUsageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagKeysListException":
        case "com.amazonaws.codecommit#InvalidTagKeysListException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagKeysListExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceArnRequiredException":
        case "com.amazonaws.codecommit#ResourceArnRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagKeysListRequiredException":
        case "com.amazonaws.codecommit#TagKeysListRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagKeysListRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagPolicyException":
        case "com.amazonaws.codecommit#TagPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.codecommit#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateApprovalRuleTemplateContentOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateApprovalRuleTemplateContentOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommand = deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommand;
async function deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApprovalRuleTemplateContentRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateContentRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateContentRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleTemplateContentException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateContentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleTemplateContentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRuleContentSha256Exception":
        case "com.amazonaws.codecommit#InvalidRuleContentSha256Exception":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRuleContentSha256ExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateApprovalRuleTemplateDescriptionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand = deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand;
async function deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleTemplateDescriptionException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateDescriptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateApprovalRuleTemplateNameOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateApprovalRuleTemplateNameOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommand = deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommand;
async function deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApprovalRuleTemplateDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleTemplateNameAlreadyExistsException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleTemplateNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleTemplateNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateCommentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateCommentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCommentOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateCommentOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateCommentCommand = deserializeAws_json1_1UpdateCommentCommand;
async function deserializeAws_json1_1UpdateCommentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CommentContentRequiredException":
        case "com.amazonaws.codecommit#CommentContentRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentContentRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentContentSizeLimitExceededException":
        case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentDeletedException":
        case "com.amazonaws.codecommit#CommentDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentDoesNotExistException":
        case "com.amazonaws.codecommit#CommentDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentIdRequiredException":
        case "com.amazonaws.codecommit#CommentIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CommentNotCreatedByCallerException":
        case "com.amazonaws.codecommit#CommentNotCreatedByCallerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CommentNotCreatedByCallerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCommentIdException":
        case "com.amazonaws.codecommit#InvalidCommentIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCommentIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateDefaultBranchCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDefaultBranchCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDefaultBranchCommand = deserializeAws_json1_1UpdateDefaultBranchCommand;
async function deserializeAws_json1_1UpdateDefaultBranchCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BranchDoesNotExistException":
        case "com.amazonaws.codecommit#BranchDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BranchNameRequiredException":
        case "com.amazonaws.codecommit#BranchNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BranchNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBranchNameException":
        case "com.amazonaws.codecommit#InvalidBranchNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidBranchNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePullRequestApprovalRuleContentOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdatePullRequestApprovalRuleContentOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand = deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand;
async function deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApprovalRuleContentRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleContentRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleContentRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleDoesNotExistException":
        case "com.amazonaws.codecommit#ApprovalRuleDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalRuleNameRequiredException":
        case "com.amazonaws.codecommit#ApprovalRuleNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalRuleNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CannotModifyApprovalRuleFromTemplateException":
        case "com.amazonaws.codecommit#CannotModifyApprovalRuleFromTemplateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleContentException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleContentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleContentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalRuleNameException":
        case "com.amazonaws.codecommit#InvalidApprovalRuleNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalRuleNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRuleContentSha256Exception":
        case "com.amazonaws.codecommit#InvalidRuleContentSha256Exception":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRuleContentSha256ExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdatePullRequestApprovalStateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdatePullRequestApprovalStateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdatePullRequestApprovalStateCommand = deserializeAws_json1_1UpdatePullRequestApprovalStateCommand;
async function deserializeAws_json1_1UpdatePullRequestApprovalStateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApprovalStateRequiredException":
        case "com.amazonaws.codecommit#ApprovalStateRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalStateRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalStateException":
        case "com.amazonaws.codecommit#InvalidApprovalStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRevisionIdException":
        case "com.amazonaws.codecommit#InvalidRevisionIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRevisionIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumNumberOfApprovalsExceededException":
        case "com.amazonaws.codecommit#MaximumNumberOfApprovalsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumNumberOfApprovalsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestCannotBeApprovedByAuthorException":
        case "com.amazonaws.codecommit#PullRequestCannotBeApprovedByAuthorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RevisionIdRequiredException":
        case "com.amazonaws.codecommit#RevisionIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RevisionIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RevisionNotCurrentException":
        case "com.amazonaws.codecommit#RevisionNotCurrentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RevisionNotCurrentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdatePullRequestDescriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdatePullRequestDescriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePullRequestDescriptionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdatePullRequestDescriptionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdatePullRequestDescriptionCommand = deserializeAws_json1_1UpdatePullRequestDescriptionCommand;
async function deserializeAws_json1_1UpdatePullRequestDescriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidDescriptionException":
        case "com.amazonaws.codecommit#InvalidDescriptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDescriptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdatePullRequestStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdatePullRequestStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePullRequestStatusOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdatePullRequestStatusOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdatePullRequestStatusCommand = deserializeAws_json1_1UpdatePullRequestStatusCommand;
async function deserializeAws_json1_1UpdatePullRequestStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestStatusException":
        case "com.amazonaws.codecommit#InvalidPullRequestStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPullRequestStatusUpdateException":
        case "com.amazonaws.codecommit#InvalidPullRequestStatusUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestStatusUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestStatusRequiredException":
        case "com.amazonaws.codecommit#PullRequestStatusRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestStatusRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdatePullRequestTitleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdatePullRequestTitleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePullRequestTitleOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdatePullRequestTitleOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdatePullRequestTitleCommand = deserializeAws_json1_1UpdatePullRequestTitleCommand;
async function deserializeAws_json1_1UpdatePullRequestTitleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidPullRequestIdException":
        case "com.amazonaws.codecommit#InvalidPullRequestIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPullRequestIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTitleException":
        case "com.amazonaws.codecommit#InvalidTitleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTitleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestAlreadyClosedException":
        case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestDoesNotExistException":
        case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PullRequestIdRequiredException":
        case "com.amazonaws.codecommit#PullRequestIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PullRequestIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TitleRequiredException":
        case "com.amazonaws.codecommit#TitleRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TitleRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateRepositoryDescriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateRepositoryDescriptionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateRepositoryDescriptionCommand = deserializeAws_json1_1UpdateRepositoryDescriptionCommand;
async function deserializeAws_json1_1UpdateRepositoryDescriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionIntegrityChecksFailedException":
        case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyAccessDeniedException":
        case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyDisabledException":
        case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyNotFoundException":
        case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EncryptionKeyUnavailableException":
        case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryDescriptionException":
        case "com.amazonaws.codecommit#InvalidRepositoryDescriptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryDescriptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateRepositoryNameCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateRepositoryNameCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateRepositoryNameCommand = deserializeAws_json1_1UpdateRepositoryNameCommand;
async function deserializeAws_json1_1UpdateRepositoryNameCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidRepositoryNameException":
        case "com.amazonaws.codecommit#InvalidRepositoryNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRepositoryNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryDoesNotExistException":
        case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameExistsException":
        case "com.amazonaws.codecommit#RepositoryNameExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RepositoryNameRequiredException":
        case "com.amazonaws.codecommit#RepositoryNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RepositoryNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1ActorDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ActorDoesNotExistException(body, context);
    const contents = Object.assign({ name: "ActorDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ApprovalRuleContentRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleContentRequiredException(body, context);
    const contents = Object.assign({ name: "ApprovalRuleContentRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ApprovalRuleDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleDoesNotExistException(body, context);
    const contents = Object.assign({ name: "ApprovalRuleDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ApprovalRuleNameAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleNameAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ApprovalRuleNameAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ApprovalRuleNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleNameRequiredException(body, context);
    const contents = Object.assign({ name: "ApprovalRuleNameRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ApprovalRuleTemplateContentRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleTemplateContentRequiredException(body, context);
    const contents = Object.assign({ name: "ApprovalRuleTemplateContentRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistException(body, context);
    const contents = Object.assign({ name: "ApprovalRuleTemplateDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ApprovalRuleTemplateInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleTemplateInUseException(body, context);
    const contents = Object.assign({ name: "ApprovalRuleTemplateInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ApprovalRuleTemplateNameAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalRuleTemplateNameRequiredException(body, context);
    const contents = Object.assign({ name: "ApprovalRuleTemplateNameRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ApprovalStateRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalStateRequiredException(body, context);
    const contents = Object.assign({ name: "ApprovalStateRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AuthorDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AuthorDoesNotExistException(body, context);
    const contents = Object.assign({ name: "AuthorDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameException(body, context);
    const contents = Object.assign({ name: "BeforeCommitIdAndAfterCommitIdAreSameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1BlobIdDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BlobIdDoesNotExistException(body, context);
    const contents = Object.assign({ name: "BlobIdDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1BlobIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BlobIdRequiredException(body, context);
    const contents = Object.assign({ name: "BlobIdRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1BranchDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BranchDoesNotExistException(body, context);
    const contents = Object.assign({ name: "BranchDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1BranchNameExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BranchNameExistsException(body, context);
    const contents = Object.assign({ name: "BranchNameExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1BranchNameIsTagNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BranchNameIsTagNameException(body, context);
    const contents = Object.assign({ name: "BranchNameIsTagNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1BranchNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BranchNameRequiredException(body, context);
    const contents = Object.assign({ name: "BranchNameRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateException(body, context);
    const contents = Object.assign({ name: "CannotDeleteApprovalRuleFromTemplateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateException(body, context);
    const contents = Object.assign({ name: "CannotModifyApprovalRuleFromTemplateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ClientRequestTokenRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClientRequestTokenRequiredException(body, context);
    const contents = Object.assign({ name: "ClientRequestTokenRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CommentContentRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommentContentRequiredException(body, context);
    const contents = Object.assign({ name: "CommentContentRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CommentContentSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommentContentSizeLimitExceededException(body, context);
    const contents = Object.assign({ name: "CommentContentSizeLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CommentDeletedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommentDeletedException(body, context);
    const contents = Object.assign({ name: "CommentDeletedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CommentDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommentDoesNotExistException(body, context);
    const contents = Object.assign({ name: "CommentDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CommentIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommentIdRequiredException(body, context);
    const contents = Object.assign({ name: "CommentIdRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CommentNotCreatedByCallerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommentNotCreatedByCallerException(body, context);
    const contents = Object.assign({ name: "CommentNotCreatedByCallerException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CommitDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommitDoesNotExistException(body, context);
    const contents = Object.assign({ name: "CommitDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CommitIdDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommitIdDoesNotExistException(body, context);
    const contents = Object.assign({ name: "CommitIdDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CommitIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommitIdRequiredException(body, context);
    const contents = Object.assign({ name: "CommitIdRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CommitIdsLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommitIdsLimitExceededException(body, context);
    const contents = Object.assign({ name: "CommitIdsLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CommitIdsListRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommitIdsListRequiredException(body, context);
    const contents = Object.assign({ name: "CommitIdsListRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CommitMessageLengthExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommitMessageLengthExceededException(body, context);
    const contents = Object.assign({ name: "CommitMessageLengthExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CommitRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CommitRequiredException(body, context);
    const contents = Object.assign({ name: "CommitRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConcurrentReferenceUpdateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentReferenceUpdateException(body, context);
    const contents = Object.assign({ name: "ConcurrentReferenceUpdateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DefaultBranchCannotBeDeletedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DefaultBranchCannotBeDeletedException(body, context);
    const contents = Object.assign({ name: "DefaultBranchCannotBeDeletedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DirectoryNameConflictsWithFileNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryNameConflictsWithFileNameException(body, context);
    const contents = Object.assign({ name: "DirectoryNameConflictsWithFileNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EncryptionIntegrityChecksFailedException(body, context);
    const contents = Object.assign({ name: "EncryptionIntegrityChecksFailedException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EncryptionKeyAccessDeniedException(body, context);
    const contents = Object.assign({ name: "EncryptionKeyAccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EncryptionKeyDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EncryptionKeyDisabledException(body, context);
    const contents = Object.assign({ name: "EncryptionKeyDisabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EncryptionKeyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EncryptionKeyNotFoundException(body, context);
    const contents = Object.assign({ name: "EncryptionKeyNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EncryptionKeyUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EncryptionKeyUnavailableException(body, context);
    const contents = Object.assign({ name: "EncryptionKeyUnavailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FileContentAndSourceFileSpecifiedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileContentAndSourceFileSpecifiedException(body, context);
    const contents = Object.assign({ name: "FileContentAndSourceFileSpecifiedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FileContentRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileContentRequiredException(body, context);
    const contents = Object.assign({ name: "FileContentRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FileContentSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileContentSizeLimitExceededException(body, context);
    const contents = Object.assign({ name: "FileContentSizeLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FileDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileDoesNotExistException(body, context);
    const contents = Object.assign({ name: "FileDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FileEntryRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileEntryRequiredException(body, context);
    const contents = Object.assign({ name: "FileEntryRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FileModeRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileModeRequiredException(body, context);
    const contents = Object.assign({ name: "FileModeRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FileNameConflictsWithDirectoryNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileNameConflictsWithDirectoryNameException(body, context);
    const contents = Object.assign({ name: "FileNameConflictsWithDirectoryNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FilePathConflictsWithSubmodulePathExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FilePathConflictsWithSubmodulePathException(body, context);
    const contents = Object.assign({ name: "FilePathConflictsWithSubmodulePathException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FileTooLargeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FileTooLargeException(body, context);
    const contents = Object.assign({ name: "FileTooLargeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FolderContentSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FolderContentSizeLimitExceededException(body, context);
    const contents = Object.assign({ name: "FolderContentSizeLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FolderDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FolderDoesNotExistException(body, context);
    const contents = Object.assign({ name: "FolderDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IdempotencyParameterMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IdempotencyParameterMismatchException(body, context);
    const contents = Object.assign({ name: "IdempotencyParameterMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidActorArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidActorArnException(body, context);
    const contents = Object.assign({ name: "InvalidActorArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidApprovalRuleContentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApprovalRuleContentException(body, context);
    const contents = Object.assign({ name: "InvalidApprovalRuleContentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidApprovalRuleNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApprovalRuleNameException(body, context);
    const contents = Object.assign({ name: "InvalidApprovalRuleNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidApprovalRuleTemplateContentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApprovalRuleTemplateContentException(body, context);
    const contents = Object.assign({ name: "InvalidApprovalRuleTemplateContentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionException(body, context);
    const contents = Object.assign({ name: "InvalidApprovalRuleTemplateDescriptionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApprovalRuleTemplateNameException(body, context);
    const contents = Object.assign({ name: "InvalidApprovalRuleTemplateNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidApprovalStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApprovalStateException(body, context);
    const contents = Object.assign({ name: "InvalidApprovalStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidAuthorArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAuthorArnException(body, context);
    const contents = Object.assign({ name: "InvalidAuthorArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidBlobIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidBlobIdException(body, context);
    const contents = Object.assign({ name: "InvalidBlobIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidBranchNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidBranchNameException(body, context);
    const contents = Object.assign({ name: "InvalidBranchNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidClientRequestTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidClientRequestTokenException(body, context);
    const contents = Object.assign({ name: "InvalidClientRequestTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidCommentIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCommentIdException(body, context);
    const contents = Object.assign({ name: "InvalidCommentIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidCommitExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCommitException(body, context);
    const contents = Object.assign({ name: "InvalidCommitException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidCommitIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCommitIdException(body, context);
    const contents = Object.assign({ name: "InvalidCommitIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidConflictDetailLevelExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidConflictDetailLevelException(body, context);
    const contents = Object.assign({ name: "InvalidConflictDetailLevelException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidConflictResolutionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidConflictResolutionException(body, context);
    const contents = Object.assign({ name: "InvalidConflictResolutionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidConflictResolutionStrategyException(body, context);
    const contents = Object.assign({ name: "InvalidConflictResolutionStrategyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidContinuationTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidContinuationTokenException(body, context);
    const contents = Object.assign({ name: "InvalidContinuationTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDeletionParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeletionParameterException(body, context);
    const contents = Object.assign({ name: "InvalidDeletionParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDescriptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDescriptionException(body, context);
    const contents = Object.assign({ name: "InvalidDescriptionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDestinationCommitSpecifierExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDestinationCommitSpecifierException(body, context);
    const contents = Object.assign({ name: "InvalidDestinationCommitSpecifierException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidEmailExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEmailException(body, context);
    const contents = Object.assign({ name: "InvalidEmailException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidFileLocationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFileLocationException(body, context);
    const contents = Object.assign({ name: "InvalidFileLocationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidFileModeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFileModeException(body, context);
    const contents = Object.assign({ name: "InvalidFileModeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidFilePositionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFilePositionException(body, context);
    const contents = Object.assign({ name: "InvalidFilePositionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidMaxConflictFilesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidMaxConflictFilesException(body, context);
    const contents = Object.assign({ name: "InvalidMaxConflictFilesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidMaxMergeHunksExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidMaxMergeHunksException(body, context);
    const contents = Object.assign({ name: "InvalidMaxMergeHunksException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidMaxResultsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidMaxResultsException(body, context);
    const contents = Object.assign({ name: "InvalidMaxResultsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidMergeOptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidMergeOptionException(body, context);
    const contents = Object.assign({ name: "InvalidMergeOptionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidOrderExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOrderException(body, context);
    const contents = Object.assign({ name: "InvalidOrderException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidOverrideStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOverrideStatusException(body, context);
    const contents = Object.assign({ name: "InvalidOverrideStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParentCommitIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParentCommitIdException(body, context);
    const contents = Object.assign({ name: "InvalidParentCommitIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPathExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPathException(body, context);
    const contents = Object.assign({ name: "InvalidPathException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPullRequestEventTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPullRequestEventTypeException(body, context);
    const contents = Object.assign({ name: "InvalidPullRequestEventTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPullRequestIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPullRequestIdException(body, context);
    const contents = Object.assign({ name: "InvalidPullRequestIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPullRequestStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPullRequestStatusException(body, context);
    const contents = Object.assign({ name: "InvalidPullRequestStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPullRequestStatusUpdateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPullRequestStatusUpdateException(body, context);
    const contents = Object.assign({ name: "InvalidPullRequestStatusUpdateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidReferenceNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidReferenceNameException(body, context);
    const contents = Object.assign({ name: "InvalidReferenceNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRelativeFileVersionEnumExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRelativeFileVersionEnumException(body, context);
    const contents = Object.assign({ name: "InvalidRelativeFileVersionEnumException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidReplacementContentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidReplacementContentException(body, context);
    const contents = Object.assign({ name: "InvalidReplacementContentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidReplacementTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidReplacementTypeException(body, context);
    const contents = Object.assign({ name: "InvalidReplacementTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryDescriptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRepositoryDescriptionException(body, context);
    const contents = Object.assign({ name: "InvalidRepositoryDescriptionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRepositoryNameException(body, context);
    const contents = Object.assign({ name: "InvalidRepositoryNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerBranchNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRepositoryTriggerBranchNameException(body, context);
    const contents = Object.assign({ name: "InvalidRepositoryTriggerBranchNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerCustomDataExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRepositoryTriggerCustomDataException(body, context);
    const contents = Object.assign({ name: "InvalidRepositoryTriggerCustomDataException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnException(body, context);
    const contents = Object.assign({ name: "InvalidRepositoryTriggerDestinationArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerEventsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRepositoryTriggerEventsException(body, context);
    const contents = Object.assign({ name: "InvalidRepositoryTriggerEventsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRepositoryTriggerNameException(body, context);
    const contents = Object.assign({ name: "InvalidRepositoryTriggerNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRepositoryTriggerRegionException(body, context);
    const contents = Object.assign({ name: "InvalidRepositoryTriggerRegionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidResourceArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceArnException(body, context);
    const contents = Object.assign({ name: "InvalidResourceArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRevisionIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRevisionIdException(body, context);
    const contents = Object.assign({ name: "InvalidRevisionIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRuleContentSha256ExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRuleContentSha256Exception(body, context);
    const contents = Object.assign({ name: "InvalidRuleContentSha256Exception", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidSortByExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSortByException(body, context);
    const contents = Object.assign({ name: "InvalidSortByException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidSourceCommitSpecifierExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSourceCommitSpecifierException(body, context);
    const contents = Object.assign({ name: "InvalidSourceCommitSpecifierException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidSystemTagUsageExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSystemTagUsageException(body, context);
    const contents = Object.assign({ name: "InvalidSystemTagUsageException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTagKeysListExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagKeysListException(body, context);
    const contents = Object.assign({ name: "InvalidTagKeysListException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTagsMapExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagsMapException(body, context);
    const contents = Object.assign({ name: "InvalidTagsMapException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTargetBranchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTargetBranchException(body, context);
    const contents = Object.assign({ name: "InvalidTargetBranchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTargetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTargetException(body, context);
    const contents = Object.assign({ name: "InvalidTargetException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTargetsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTargetsException(body, context);
    const contents = Object.assign({ name: "InvalidTargetsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTitleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTitleException(body, context);
    const contents = Object.assign({ name: "InvalidTitleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ManualMergeRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ManualMergeRequiredException(body, context);
    const contents = Object.assign({ name: "ManualMergeRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaximumBranchesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumBranchesExceededException(body, context);
    const contents = Object.assign({ name: "MaximumBranchesExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumConflictResolutionEntriesExceededException(body, context);
    const contents = Object.assign({ name: "MaximumConflictResolutionEntriesExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumFileContentToLoadExceededException(body, context);
    const contents = Object.assign({ name: "MaximumFileContentToLoadExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaximumFileEntriesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumFileEntriesExceededException(body, context);
    const contents = Object.assign({ name: "MaximumFileEntriesExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaximumItemsToCompareExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumItemsToCompareExceededException(body, context);
    const contents = Object.assign({ name: "MaximumItemsToCompareExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaximumNumberOfApprovalsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumNumberOfApprovalsExceededException(body, context);
    const contents = Object.assign({ name: "MaximumNumberOfApprovalsExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaximumOpenPullRequestsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumOpenPullRequestsExceededException(body, context);
    const contents = Object.assign({ name: "MaximumOpenPullRequestsExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumRepositoryNamesExceededException(body, context);
    const contents = Object.assign({ name: "MaximumRepositoryNamesExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaximumRepositoryTriggersExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumRepositoryTriggersExceededException(body, context);
    const contents = Object.assign({ name: "MaximumRepositoryTriggersExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryException(body, context);
    const contents = Object.assign({ name: "MaximumRuleTemplatesAssociatedWithRepositoryException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MergeOptionRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MergeOptionRequiredException(body, context);
    const contents = Object.assign({ name: "MergeOptionRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MultipleConflictResolutionEntriesException(body, context);
    const contents = Object.assign({ name: "MultipleConflictResolutionEntriesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MultipleRepositoriesInPullRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MultipleRepositoriesInPullRequestException(body, context);
    const contents = Object.assign({ name: "MultipleRepositoriesInPullRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NameLengthExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NameLengthExceededException(body, context);
    const contents = Object.assign({ name: "NameLengthExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoChangeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoChangeException(body, context);
    const contents = Object.assign({ name: "NoChangeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NumberOfRuleTemplatesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NumberOfRuleTemplatesExceededException(body, context);
    const contents = Object.assign({ name: "NumberOfRuleTemplatesExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NumberOfRulesExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NumberOfRulesExceededException(body, context);
    const contents = Object.assign({ name: "NumberOfRulesExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OverrideAlreadySetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OverrideAlreadySetException(body, context);
    const contents = Object.assign({ name: "OverrideAlreadySetException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OverrideStatusRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OverrideStatusRequiredException(body, context);
    const contents = Object.assign({ name: "OverrideStatusRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ParentCommitDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParentCommitDoesNotExistException(body, context);
    const contents = Object.assign({ name: "ParentCommitDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ParentCommitIdOutdatedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParentCommitIdOutdatedException(body, context);
    const contents = Object.assign({ name: "ParentCommitIdOutdatedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ParentCommitIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParentCommitIdRequiredException(body, context);
    const contents = Object.assign({ name: "ParentCommitIdRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PathDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PathDoesNotExistException(body, context);
    const contents = Object.assign({ name: "PathDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PathRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PathRequiredException(body, context);
    const contents = Object.assign({ name: "PathRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PullRequestAlreadyClosedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PullRequestAlreadyClosedException(body, context);
    const contents = Object.assign({ name: "PullRequestAlreadyClosedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedException(body, context);
    const contents = Object.assign({ name: "PullRequestApprovalRulesNotSatisfiedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorException(body, context);
    const contents = Object.assign({ name: "PullRequestCannotBeApprovedByAuthorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PullRequestDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PullRequestDoesNotExistException(body, context);
    const contents = Object.assign({ name: "PullRequestDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PullRequestIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PullRequestIdRequiredException(body, context);
    const contents = Object.assign({ name: "PullRequestIdRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PullRequestStatusRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PullRequestStatusRequiredException(body, context);
    const contents = Object.assign({ name: "PullRequestStatusRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PutFileEntryConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PutFileEntryConflictException(body, context);
    const contents = Object.assign({ name: "PutFileEntryConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ReferenceDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReferenceDoesNotExistException(body, context);
    const contents = Object.assign({ name: "ReferenceDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ReferenceNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReferenceNameRequiredException(body, context);
    const contents = Object.assign({ name: "ReferenceNameRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ReferenceTypeNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReferenceTypeNotSupportedException(body, context);
    const contents = Object.assign({ name: "ReferenceTypeNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ReplacementContentRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReplacementContentRequiredException(body, context);
    const contents = Object.assign({ name: "ReplacementContentRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ReplacementTypeRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReplacementTypeRequiredException(body, context);
    const contents = Object.assign({ name: "ReplacementTypeRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RepositoryDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryDoesNotExistException(body, context);
    const contents = Object.assign({ name: "RepositoryDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RepositoryLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryLimitExceededException(body, context);
    const contents = Object.assign({ name: "RepositoryLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RepositoryNameExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryNameExistsException(body, context);
    const contents = Object.assign({ name: "RepositoryNameExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RepositoryNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryNameRequiredException(body, context);
    const contents = Object.assign({ name: "RepositoryNameRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RepositoryNamesRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryNamesRequiredException(body, context);
    const contents = Object.assign({ name: "RepositoryNamesRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestException(body, context);
    const contents = Object.assign({ name: "RepositoryNotAssociatedWithPullRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredException(body, context);
    const contents = Object.assign({ name: "RepositoryTriggerBranchNameListRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredException(body, context);
    const contents = Object.assign({ name: "RepositoryTriggerDestinationArnRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RepositoryTriggerEventsListRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryTriggerEventsListRequiredException(body, context);
    const contents = Object.assign({ name: "RepositoryTriggerEventsListRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RepositoryTriggerNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryTriggerNameRequiredException(body, context);
    const contents = Object.assign({ name: "RepositoryTriggerNameRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RepositoryTriggersListRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryTriggersListRequiredException(body, context);
    const contents = Object.assign({ name: "RepositoryTriggersListRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceArnRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceArnRequiredException(body, context);
    const contents = Object.assign({ name: "ResourceArnRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RestrictedSourceFileExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RestrictedSourceFileException(body, context);
    const contents = Object.assign({ name: "RestrictedSourceFileException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RevisionIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RevisionIdRequiredException(body, context);
    const contents = Object.assign({ name: "RevisionIdRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RevisionNotCurrentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RevisionNotCurrentException(body, context);
    const contents = Object.assign({ name: "RevisionNotCurrentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SameFileContentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SameFileContentException(body, context);
    const contents = Object.assign({ name: "SameFileContentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SamePathRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SamePathRequestException(body, context);
    const contents = Object.assign({ name: "SamePathRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SourceAndDestinationAreSameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SourceAndDestinationAreSameException(body, context);
    const contents = Object.assign({ name: "SourceAndDestinationAreSameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SourceFileOrContentRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SourceFileOrContentRequiredException(body, context);
    const contents = Object.assign({ name: "SourceFileOrContentRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TagKeysListRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagKeysListRequiredException(body, context);
    const contents = Object.assign({ name: "TagKeysListRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TagPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagPolicyException(body, context);
    const contents = Object.assign({ name: "TagPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TagsMapRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagsMapRequiredException(body, context);
    const contents = Object.assign({ name: "TagsMapRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TargetRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TargetRequiredException(body, context);
    const contents = Object.assign({ name: "TargetRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TargetsRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TargetsRequiredException(body, context);
    const contents = Object.assign({ name: "TargetsRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TipOfSourceReferenceIsDifferentException(body, context);
    const contents = Object.assign({ name: "TipOfSourceReferenceIsDifferentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TipsDivergenceExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TipsDivergenceExceededException(body, context);
    const contents = Object.assign({ name: "TipsDivergenceExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TitleRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TitleRequiredException(body, context);
    const contents = Object.assign({ name: "TitleRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = Object.assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryInput = (input, context) => {
    const bodyParams = {};
    if (input.approvalRuleTemplateName !== undefined) {
        bodyParams["approvalRuleTemplateName"] = input.approvalRuleTemplateName;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesInput = (input, context) => {
    const bodyParams = {};
    if (input.approvalRuleTemplateName !== undefined) {
        bodyParams["approvalRuleTemplateName"] = input.approvalRuleTemplateName;
    }
    if (input.repositoryNames !== undefined) {
        bodyParams["repositoryNames"] = serializeAws_json1_1RepositoryNameList(input.repositoryNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchDescribeMergeConflictsInput = (input, context) => {
    const bodyParams = {};
    if (input.conflictDetailLevel !== undefined) {
        bodyParams["conflictDetailLevel"] = input.conflictDetailLevel;
    }
    if (input.conflictResolutionStrategy !== undefined) {
        bodyParams["conflictResolutionStrategy"] = input.conflictResolutionStrategy;
    }
    if (input.destinationCommitSpecifier !== undefined) {
        bodyParams["destinationCommitSpecifier"] = input.destinationCommitSpecifier;
    }
    if (input.filePaths !== undefined) {
        bodyParams["filePaths"] = serializeAws_json1_1FilePaths(input.filePaths, context);
    }
    if (input.maxConflictFiles !== undefined) {
        bodyParams["maxConflictFiles"] = input.maxConflictFiles;
    }
    if (input.maxMergeHunks !== undefined) {
        bodyParams["maxMergeHunks"] = input.maxMergeHunks;
    }
    if (input.mergeOption !== undefined) {
        bodyParams["mergeOption"] = input.mergeOption;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.sourceCommitSpecifier !== undefined) {
        bodyParams["sourceCommitSpecifier"] = input.sourceCommitSpecifier;
    }
    return bodyParams;
};
const serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesInput = (input, context) => {
    const bodyParams = {};
    if (input.approvalRuleTemplateName !== undefined) {
        bodyParams["approvalRuleTemplateName"] = input.approvalRuleTemplateName;
    }
    if (input.repositoryNames !== undefined) {
        bodyParams["repositoryNames"] = serializeAws_json1_1RepositoryNameList(input.repositoryNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetCommitsInput = (input, context) => {
    const bodyParams = {};
    if (input.commitIds !== undefined) {
        bodyParams["commitIds"] = serializeAws_json1_1CommitIdsInputList(input.commitIds, context);
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetRepositoriesInput = (input, context) => {
    const bodyParams = {};
    if (input.repositoryNames !== undefined) {
        bodyParams["repositoryNames"] = serializeAws_json1_1RepositoryNameList(input.repositoryNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BranchNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CommitIdsInputList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ConflictResolution = (input, context) => {
    const bodyParams = {};
    if (input.deleteFiles !== undefined) {
        bodyParams["deleteFiles"] = serializeAws_json1_1DeleteFileEntries(input.deleteFiles, context);
    }
    if (input.replaceContents !== undefined) {
        bodyParams["replaceContents"] = serializeAws_json1_1ReplaceContentEntries(input.replaceContents, context);
    }
    if (input.setFileModes !== undefined) {
        bodyParams["setFileModes"] = serializeAws_json1_1SetFileModeEntries(input.setFileModes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateApprovalRuleTemplateInput = (input, context) => {
    const bodyParams = {};
    if (input.approvalRuleTemplateContent !== undefined) {
        bodyParams["approvalRuleTemplateContent"] =
            input.approvalRuleTemplateContent;
    }
    if (input.approvalRuleTemplateDescription !== undefined) {
        bodyParams["approvalRuleTemplateDescription"] =
            input.approvalRuleTemplateDescription;
    }
    if (input.approvalRuleTemplateName !== undefined) {
        bodyParams["approvalRuleTemplateName"] = input.approvalRuleTemplateName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateBranchInput = (input, context) => {
    const bodyParams = {};
    if (input.branchName !== undefined) {
        bodyParams["branchName"] = input.branchName;
    }
    if (input.commitId !== undefined) {
        bodyParams["commitId"] = input.commitId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateCommitInput = (input, context) => {
    const bodyParams = {};
    if (input.authorName !== undefined) {
        bodyParams["authorName"] = input.authorName;
    }
    if (input.branchName !== undefined) {
        bodyParams["branchName"] = input.branchName;
    }
    if (input.commitMessage !== undefined) {
        bodyParams["commitMessage"] = input.commitMessage;
    }
    if (input.deleteFiles !== undefined) {
        bodyParams["deleteFiles"] = serializeAws_json1_1DeleteFileEntries(input.deleteFiles, context);
    }
    if (input.email !== undefined) {
        bodyParams["email"] = input.email;
    }
    if (input.keepEmptyFolders !== undefined) {
        bodyParams["keepEmptyFolders"] = input.keepEmptyFolders;
    }
    if (input.parentCommitId !== undefined) {
        bodyParams["parentCommitId"] = input.parentCommitId;
    }
    if (input.putFiles !== undefined) {
        bodyParams["putFiles"] = serializeAws_json1_1PutFileEntries(input.putFiles, context);
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.setFileModes !== undefined) {
        bodyParams["setFileModes"] = serializeAws_json1_1SetFileModeEntries(input.setFileModes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePullRequestApprovalRuleInput = (input, context) => {
    const bodyParams = {};
    if (input.approvalRuleContent !== undefined) {
        bodyParams["approvalRuleContent"] = input.approvalRuleContent;
    }
    if (input.approvalRuleName !== undefined) {
        bodyParams["approvalRuleName"] = input.approvalRuleName;
    }
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePullRequestInput = (input, context) => {
    const bodyParams = {};
    if (input.clientRequestToken === undefined) {
        input.clientRequestToken = uuid_1.v4();
    }
    if (input.clientRequestToken !== undefined) {
        bodyParams["clientRequestToken"] = input.clientRequestToken;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.targets !== undefined) {
        bodyParams["targets"] = serializeAws_json1_1TargetList(input.targets, context);
    }
    if (input.title !== undefined) {
        bodyParams["title"] = input.title;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRepositoryInput = (input, context) => {
    const bodyParams = {};
    if (input.repositoryDescription !== undefined) {
        bodyParams["repositoryDescription"] = input.repositoryDescription;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagsMap(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateUnreferencedMergeCommitInput = (input, context) => {
    const bodyParams = {};
    if (input.authorName !== undefined) {
        bodyParams["authorName"] = input.authorName;
    }
    if (input.commitMessage !== undefined) {
        bodyParams["commitMessage"] = input.commitMessage;
    }
    if (input.conflictDetailLevel !== undefined) {
        bodyParams["conflictDetailLevel"] = input.conflictDetailLevel;
    }
    if (input.conflictResolution !== undefined) {
        bodyParams["conflictResolution"] = serializeAws_json1_1ConflictResolution(input.conflictResolution, context);
    }
    if (input.conflictResolutionStrategy !== undefined) {
        bodyParams["conflictResolutionStrategy"] = input.conflictResolutionStrategy;
    }
    if (input.destinationCommitSpecifier !== undefined) {
        bodyParams["destinationCommitSpecifier"] = input.destinationCommitSpecifier;
    }
    if (input.email !== undefined) {
        bodyParams["email"] = input.email;
    }
    if (input.keepEmptyFolders !== undefined) {
        bodyParams["keepEmptyFolders"] = input.keepEmptyFolders;
    }
    if (input.mergeOption !== undefined) {
        bodyParams["mergeOption"] = input.mergeOption;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.sourceCommitSpecifier !== undefined) {
        bodyParams["sourceCommitSpecifier"] = input.sourceCommitSpecifier;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteApprovalRuleTemplateInput = (input, context) => {
    const bodyParams = {};
    if (input.approvalRuleTemplateName !== undefined) {
        bodyParams["approvalRuleTemplateName"] = input.approvalRuleTemplateName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteBranchInput = (input, context) => {
    const bodyParams = {};
    if (input.branchName !== undefined) {
        bodyParams["branchName"] = input.branchName;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteCommentContentInput = (input, context) => {
    const bodyParams = {};
    if (input.commentId !== undefined) {
        bodyParams["commentId"] = input.commentId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteFileEntries = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DeleteFileEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DeleteFileEntry = (input, context) => {
    const bodyParams = {};
    if (input.filePath !== undefined) {
        bodyParams["filePath"] = input.filePath;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteFileInput = (input, context) => {
    const bodyParams = {};
    if (input.branchName !== undefined) {
        bodyParams["branchName"] = input.branchName;
    }
    if (input.commitMessage !== undefined) {
        bodyParams["commitMessage"] = input.commitMessage;
    }
    if (input.email !== undefined) {
        bodyParams["email"] = input.email;
    }
    if (input.filePath !== undefined) {
        bodyParams["filePath"] = input.filePath;
    }
    if (input.keepEmptyFolders !== undefined) {
        bodyParams["keepEmptyFolders"] = input.keepEmptyFolders;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.parentCommitId !== undefined) {
        bodyParams["parentCommitId"] = input.parentCommitId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeletePullRequestApprovalRuleInput = (input, context) => {
    const bodyParams = {};
    if (input.approvalRuleName !== undefined) {
        bodyParams["approvalRuleName"] = input.approvalRuleName;
    }
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRepositoryInput = (input, context) => {
    const bodyParams = {};
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMergeConflictsInput = (input, context) => {
    const bodyParams = {};
    if (input.conflictDetailLevel !== undefined) {
        bodyParams["conflictDetailLevel"] = input.conflictDetailLevel;
    }
    if (input.conflictResolutionStrategy !== undefined) {
        bodyParams["conflictResolutionStrategy"] = input.conflictResolutionStrategy;
    }
    if (input.destinationCommitSpecifier !== undefined) {
        bodyParams["destinationCommitSpecifier"] = input.destinationCommitSpecifier;
    }
    if (input.filePath !== undefined) {
        bodyParams["filePath"] = input.filePath;
    }
    if (input.maxMergeHunks !== undefined) {
        bodyParams["maxMergeHunks"] = input.maxMergeHunks;
    }
    if (input.mergeOption !== undefined) {
        bodyParams["mergeOption"] = input.mergeOption;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.sourceCommitSpecifier !== undefined) {
        bodyParams["sourceCommitSpecifier"] = input.sourceCommitSpecifier;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribePullRequestEventsInput = (input, context) => {
    const bodyParams = {};
    if (input.actorArn !== undefined) {
        bodyParams["actorArn"] = input.actorArn;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.pullRequestEventType !== undefined) {
        bodyParams["pullRequestEventType"] = input.pullRequestEventType;
    }
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryInput = (input, context) => {
    const bodyParams = {};
    if (input.approvalRuleTemplateName !== undefined) {
        bodyParams["approvalRuleTemplateName"] = input.approvalRuleTemplateName;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1EvaluatePullRequestApprovalRulesInput = (input, context) => {
    const bodyParams = {};
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    if (input.revisionId !== undefined) {
        bodyParams["revisionId"] = input.revisionId;
    }
    return bodyParams;
};
const serializeAws_json1_1FilePaths = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1GetApprovalRuleTemplateInput = (input, context) => {
    const bodyParams = {};
    if (input.approvalRuleTemplateName !== undefined) {
        bodyParams["approvalRuleTemplateName"] = input.approvalRuleTemplateName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetBlobInput = (input, context) => {
    const bodyParams = {};
    if (input.blobId !== undefined) {
        bodyParams["blobId"] = input.blobId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetBranchInput = (input, context) => {
    const bodyParams = {};
    if (input.branchName !== undefined) {
        bodyParams["branchName"] = input.branchName;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCommentInput = (input, context) => {
    const bodyParams = {};
    if (input.commentId !== undefined) {
        bodyParams["commentId"] = input.commentId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCommentsForComparedCommitInput = (input, context) => {
    const bodyParams = {};
    if (input.afterCommitId !== undefined) {
        bodyParams["afterCommitId"] = input.afterCommitId;
    }
    if (input.beforeCommitId !== undefined) {
        bodyParams["beforeCommitId"] = input.beforeCommitId;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCommentsForPullRequestInput = (input, context) => {
    const bodyParams = {};
    if (input.afterCommitId !== undefined) {
        bodyParams["afterCommitId"] = input.afterCommitId;
    }
    if (input.beforeCommitId !== undefined) {
        bodyParams["beforeCommitId"] = input.beforeCommitId;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCommitInput = (input, context) => {
    const bodyParams = {};
    if (input.commitId !== undefined) {
        bodyParams["commitId"] = input.commitId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDifferencesInput = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.afterCommitSpecifier !== undefined) {
        bodyParams["afterCommitSpecifier"] = input.afterCommitSpecifier;
    }
    if (input.afterPath !== undefined) {
        bodyParams["afterPath"] = input.afterPath;
    }
    if (input.beforeCommitSpecifier !== undefined) {
        bodyParams["beforeCommitSpecifier"] = input.beforeCommitSpecifier;
    }
    if (input.beforePath !== undefined) {
        bodyParams["beforePath"] = input.beforePath;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetFileInput = (input, context) => {
    const bodyParams = {};
    if (input.commitSpecifier !== undefined) {
        bodyParams["commitSpecifier"] = input.commitSpecifier;
    }
    if (input.filePath !== undefined) {
        bodyParams["filePath"] = input.filePath;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetFolderInput = (input, context) => {
    const bodyParams = {};
    if (input.commitSpecifier !== undefined) {
        bodyParams["commitSpecifier"] = input.commitSpecifier;
    }
    if (input.folderPath !== undefined) {
        bodyParams["folderPath"] = input.folderPath;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetMergeCommitInput = (input, context) => {
    const bodyParams = {};
    if (input.conflictDetailLevel !== undefined) {
        bodyParams["conflictDetailLevel"] = input.conflictDetailLevel;
    }
    if (input.conflictResolutionStrategy !== undefined) {
        bodyParams["conflictResolutionStrategy"] = input.conflictResolutionStrategy;
    }
    if (input.destinationCommitSpecifier !== undefined) {
        bodyParams["destinationCommitSpecifier"] = input.destinationCommitSpecifier;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.sourceCommitSpecifier !== undefined) {
        bodyParams["sourceCommitSpecifier"] = input.sourceCommitSpecifier;
    }
    return bodyParams;
};
const serializeAws_json1_1GetMergeConflictsInput = (input, context) => {
    const bodyParams = {};
    if (input.conflictDetailLevel !== undefined) {
        bodyParams["conflictDetailLevel"] = input.conflictDetailLevel;
    }
    if (input.conflictResolutionStrategy !== undefined) {
        bodyParams["conflictResolutionStrategy"] = input.conflictResolutionStrategy;
    }
    if (input.destinationCommitSpecifier !== undefined) {
        bodyParams["destinationCommitSpecifier"] = input.destinationCommitSpecifier;
    }
    if (input.maxConflictFiles !== undefined) {
        bodyParams["maxConflictFiles"] = input.maxConflictFiles;
    }
    if (input.mergeOption !== undefined) {
        bodyParams["mergeOption"] = input.mergeOption;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.sourceCommitSpecifier !== undefined) {
        bodyParams["sourceCommitSpecifier"] = input.sourceCommitSpecifier;
    }
    return bodyParams;
};
const serializeAws_json1_1GetMergeOptionsInput = (input, context) => {
    const bodyParams = {};
    if (input.conflictDetailLevel !== undefined) {
        bodyParams["conflictDetailLevel"] = input.conflictDetailLevel;
    }
    if (input.conflictResolutionStrategy !== undefined) {
        bodyParams["conflictResolutionStrategy"] = input.conflictResolutionStrategy;
    }
    if (input.destinationCommitSpecifier !== undefined) {
        bodyParams["destinationCommitSpecifier"] = input.destinationCommitSpecifier;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.sourceCommitSpecifier !== undefined) {
        bodyParams["sourceCommitSpecifier"] = input.sourceCommitSpecifier;
    }
    return bodyParams;
};
const serializeAws_json1_1GetPullRequestApprovalStatesInput = (input, context) => {
    const bodyParams = {};
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    if (input.revisionId !== undefined) {
        bodyParams["revisionId"] = input.revisionId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetPullRequestInput = (input, context) => {
    const bodyParams = {};
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetPullRequestOverrideStateInput = (input, context) => {
    const bodyParams = {};
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    if (input.revisionId !== undefined) {
        bodyParams["revisionId"] = input.revisionId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRepositoryInput = (input, context) => {
    const bodyParams = {};
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRepositoryTriggersInput = (input, context) => {
    const bodyParams = {};
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListApprovalRuleTemplatesInput = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryInput = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListBranchesInput = (input, context) => {
    const bodyParams = {};
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListPullRequestsInput = (input, context) => {
    const bodyParams = {};
    if (input.authorArn !== undefined) {
        bodyParams["authorArn"] = input.authorArn;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.pullRequestStatus !== undefined) {
        bodyParams["pullRequestStatus"] = input.pullRequestStatus;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateInput = (input, context) => {
    const bodyParams = {};
    if (input.approvalRuleTemplateName !== undefined) {
        bodyParams["approvalRuleTemplateName"] = input.approvalRuleTemplateName;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRepositoriesInput = (input, context) => {
    const bodyParams = {};
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.order !== undefined) {
        bodyParams["order"] = input.order;
    }
    if (input.sortBy !== undefined) {
        bodyParams["sortBy"] = input.sortBy;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1Location = (input, context) => {
    const bodyParams = {};
    if (input.filePath !== undefined) {
        bodyParams["filePath"] = input.filePath;
    }
    if (input.filePosition !== undefined) {
        bodyParams["filePosition"] = input.filePosition;
    }
    if (input.relativeFileVersion !== undefined) {
        bodyParams["relativeFileVersion"] = input.relativeFileVersion;
    }
    return bodyParams;
};
const serializeAws_json1_1MergeBranchesByFastForwardInput = (input, context) => {
    const bodyParams = {};
    if (input.destinationCommitSpecifier !== undefined) {
        bodyParams["destinationCommitSpecifier"] = input.destinationCommitSpecifier;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.sourceCommitSpecifier !== undefined) {
        bodyParams["sourceCommitSpecifier"] = input.sourceCommitSpecifier;
    }
    if (input.targetBranch !== undefined) {
        bodyParams["targetBranch"] = input.targetBranch;
    }
    return bodyParams;
};
const serializeAws_json1_1MergeBranchesBySquashInput = (input, context) => {
    const bodyParams = {};
    if (input.authorName !== undefined) {
        bodyParams["authorName"] = input.authorName;
    }
    if (input.commitMessage !== undefined) {
        bodyParams["commitMessage"] = input.commitMessage;
    }
    if (input.conflictDetailLevel !== undefined) {
        bodyParams["conflictDetailLevel"] = input.conflictDetailLevel;
    }
    if (input.conflictResolution !== undefined) {
        bodyParams["conflictResolution"] = serializeAws_json1_1ConflictResolution(input.conflictResolution, context);
    }
    if (input.conflictResolutionStrategy !== undefined) {
        bodyParams["conflictResolutionStrategy"] = input.conflictResolutionStrategy;
    }
    if (input.destinationCommitSpecifier !== undefined) {
        bodyParams["destinationCommitSpecifier"] = input.destinationCommitSpecifier;
    }
    if (input.email !== undefined) {
        bodyParams["email"] = input.email;
    }
    if (input.keepEmptyFolders !== undefined) {
        bodyParams["keepEmptyFolders"] = input.keepEmptyFolders;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.sourceCommitSpecifier !== undefined) {
        bodyParams["sourceCommitSpecifier"] = input.sourceCommitSpecifier;
    }
    if (input.targetBranch !== undefined) {
        bodyParams["targetBranch"] = input.targetBranch;
    }
    return bodyParams;
};
const serializeAws_json1_1MergeBranchesByThreeWayInput = (input, context) => {
    const bodyParams = {};
    if (input.authorName !== undefined) {
        bodyParams["authorName"] = input.authorName;
    }
    if (input.commitMessage !== undefined) {
        bodyParams["commitMessage"] = input.commitMessage;
    }
    if (input.conflictDetailLevel !== undefined) {
        bodyParams["conflictDetailLevel"] = input.conflictDetailLevel;
    }
    if (input.conflictResolution !== undefined) {
        bodyParams["conflictResolution"] = serializeAws_json1_1ConflictResolution(input.conflictResolution, context);
    }
    if (input.conflictResolutionStrategy !== undefined) {
        bodyParams["conflictResolutionStrategy"] = input.conflictResolutionStrategy;
    }
    if (input.destinationCommitSpecifier !== undefined) {
        bodyParams["destinationCommitSpecifier"] = input.destinationCommitSpecifier;
    }
    if (input.email !== undefined) {
        bodyParams["email"] = input.email;
    }
    if (input.keepEmptyFolders !== undefined) {
        bodyParams["keepEmptyFolders"] = input.keepEmptyFolders;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.sourceCommitSpecifier !== undefined) {
        bodyParams["sourceCommitSpecifier"] = input.sourceCommitSpecifier;
    }
    if (input.targetBranch !== undefined) {
        bodyParams["targetBranch"] = input.targetBranch;
    }
    return bodyParams;
};
const serializeAws_json1_1MergePullRequestByFastForwardInput = (input, context) => {
    const bodyParams = {};
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.sourceCommitId !== undefined) {
        bodyParams["sourceCommitId"] = input.sourceCommitId;
    }
    return bodyParams;
};
const serializeAws_json1_1MergePullRequestBySquashInput = (input, context) => {
    const bodyParams = {};
    if (input.authorName !== undefined) {
        bodyParams["authorName"] = input.authorName;
    }
    if (input.commitMessage !== undefined) {
        bodyParams["commitMessage"] = input.commitMessage;
    }
    if (input.conflictDetailLevel !== undefined) {
        bodyParams["conflictDetailLevel"] = input.conflictDetailLevel;
    }
    if (input.conflictResolution !== undefined) {
        bodyParams["conflictResolution"] = serializeAws_json1_1ConflictResolution(input.conflictResolution, context);
    }
    if (input.conflictResolutionStrategy !== undefined) {
        bodyParams["conflictResolutionStrategy"] = input.conflictResolutionStrategy;
    }
    if (input.email !== undefined) {
        bodyParams["email"] = input.email;
    }
    if (input.keepEmptyFolders !== undefined) {
        bodyParams["keepEmptyFolders"] = input.keepEmptyFolders;
    }
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.sourceCommitId !== undefined) {
        bodyParams["sourceCommitId"] = input.sourceCommitId;
    }
    return bodyParams;
};
const serializeAws_json1_1MergePullRequestByThreeWayInput = (input, context) => {
    const bodyParams = {};
    if (input.authorName !== undefined) {
        bodyParams["authorName"] = input.authorName;
    }
    if (input.commitMessage !== undefined) {
        bodyParams["commitMessage"] = input.commitMessage;
    }
    if (input.conflictDetailLevel !== undefined) {
        bodyParams["conflictDetailLevel"] = input.conflictDetailLevel;
    }
    if (input.conflictResolution !== undefined) {
        bodyParams["conflictResolution"] = serializeAws_json1_1ConflictResolution(input.conflictResolution, context);
    }
    if (input.conflictResolutionStrategy !== undefined) {
        bodyParams["conflictResolutionStrategy"] = input.conflictResolutionStrategy;
    }
    if (input.email !== undefined) {
        bodyParams["email"] = input.email;
    }
    if (input.keepEmptyFolders !== undefined) {
        bodyParams["keepEmptyFolders"] = input.keepEmptyFolders;
    }
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.sourceCommitId !== undefined) {
        bodyParams["sourceCommitId"] = input.sourceCommitId;
    }
    return bodyParams;
};
const serializeAws_json1_1OverridePullRequestApprovalRulesInput = (input, context) => {
    const bodyParams = {};
    if (input.overrideStatus !== undefined) {
        bodyParams["overrideStatus"] = input.overrideStatus;
    }
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    if (input.revisionId !== undefined) {
        bodyParams["revisionId"] = input.revisionId;
    }
    return bodyParams;
};
const serializeAws_json1_1PostCommentForComparedCommitInput = (input, context) => {
    const bodyParams = {};
    if (input.afterCommitId !== undefined) {
        bodyParams["afterCommitId"] = input.afterCommitId;
    }
    if (input.beforeCommitId !== undefined) {
        bodyParams["beforeCommitId"] = input.beforeCommitId;
    }
    if (input.clientRequestToken === undefined) {
        input.clientRequestToken = uuid_1.v4();
    }
    if (input.clientRequestToken !== undefined) {
        bodyParams["clientRequestToken"] = input.clientRequestToken;
    }
    if (input.content !== undefined) {
        bodyParams["content"] = input.content;
    }
    if (input.location !== undefined) {
        bodyParams["location"] = serializeAws_json1_1Location(input.location, context);
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1PostCommentForPullRequestInput = (input, context) => {
    const bodyParams = {};
    if (input.afterCommitId !== undefined) {
        bodyParams["afterCommitId"] = input.afterCommitId;
    }
    if (input.beforeCommitId !== undefined) {
        bodyParams["beforeCommitId"] = input.beforeCommitId;
    }
    if (input.clientRequestToken === undefined) {
        input.clientRequestToken = uuid_1.v4();
    }
    if (input.clientRequestToken !== undefined) {
        bodyParams["clientRequestToken"] = input.clientRequestToken;
    }
    if (input.content !== undefined) {
        bodyParams["content"] = input.content;
    }
    if (input.location !== undefined) {
        bodyParams["location"] = serializeAws_json1_1Location(input.location, context);
    }
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1PostCommentReplyInput = (input, context) => {
    const bodyParams = {};
    if (input.clientRequestToken === undefined) {
        input.clientRequestToken = uuid_1.v4();
    }
    if (input.clientRequestToken !== undefined) {
        bodyParams["clientRequestToken"] = input.clientRequestToken;
    }
    if (input.content !== undefined) {
        bodyParams["content"] = input.content;
    }
    if (input.inReplyTo !== undefined) {
        bodyParams["inReplyTo"] = input.inReplyTo;
    }
    return bodyParams;
};
const serializeAws_json1_1PutFileEntries = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PutFileEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PutFileEntry = (input, context) => {
    const bodyParams = {};
    if (input.fileContent !== undefined) {
        bodyParams["fileContent"] = Buffer.from(input.fileContent).toString("utf-8");
    }
    if (input.fileMode !== undefined) {
        bodyParams["fileMode"] = input.fileMode;
    }
    if (input.filePath !== undefined) {
        bodyParams["filePath"] = input.filePath;
    }
    if (input.sourceFile !== undefined) {
        bodyParams["sourceFile"] = serializeAws_json1_1SourceFileSpecifier(input.sourceFile, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutFileInput = (input, context) => {
    const bodyParams = {};
    if (input.branchName !== undefined) {
        bodyParams["branchName"] = input.branchName;
    }
    if (input.commitMessage !== undefined) {
        bodyParams["commitMessage"] = input.commitMessage;
    }
    if (input.email !== undefined) {
        bodyParams["email"] = input.email;
    }
    if (input.fileContent !== undefined) {
        bodyParams["fileContent"] = Buffer.from(input.fileContent).toString("utf-8");
    }
    if (input.fileMode !== undefined) {
        bodyParams["fileMode"] = input.fileMode;
    }
    if (input.filePath !== undefined) {
        bodyParams["filePath"] = input.filePath;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.parentCommitId !== undefined) {
        bodyParams["parentCommitId"] = input.parentCommitId;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1PutRepositoryTriggersInput = (input, context) => {
    const bodyParams = {};
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.triggers !== undefined) {
        bodyParams["triggers"] = serializeAws_json1_1RepositoryTriggersList(input.triggers, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ReplaceContentEntries = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ReplaceContentEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ReplaceContentEntry = (input, context) => {
    const bodyParams = {};
    if (input.content !== undefined) {
        bodyParams["content"] = Buffer.from(input.content).toString("utf-8");
    }
    if (input.fileMode !== undefined) {
        bodyParams["fileMode"] = input.fileMode;
    }
    if (input.filePath !== undefined) {
        bodyParams["filePath"] = input.filePath;
    }
    if (input.replacementType !== undefined) {
        bodyParams["replacementType"] = input.replacementType;
    }
    return bodyParams;
};
const serializeAws_json1_1RepositoryNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1RepositoryTrigger = (input, context) => {
    const bodyParams = {};
    if (input.branches !== undefined) {
        bodyParams["branches"] = serializeAws_json1_1BranchNameList(input.branches, context);
    }
    if (input.customData !== undefined) {
        bodyParams["customData"] = input.customData;
    }
    if (input.destinationArn !== undefined) {
        bodyParams["destinationArn"] = input.destinationArn;
    }
    if (input.events !== undefined) {
        bodyParams["events"] = serializeAws_json1_1RepositoryTriggerEventList(input.events, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1RepositoryTriggerEventList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1RepositoryTriggersList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RepositoryTrigger(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SetFileModeEntries = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SetFileModeEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SetFileModeEntry = (input, context) => {
    const bodyParams = {};
    if (input.fileMode !== undefined) {
        bodyParams["fileMode"] = input.fileMode;
    }
    if (input.filePath !== undefined) {
        bodyParams["filePath"] = input.filePath;
    }
    return bodyParams;
};
const serializeAws_json1_1SourceFileSpecifier = (input, context) => {
    const bodyParams = {};
    if (input.filePath !== undefined) {
        bodyParams["filePath"] = input.filePath;
    }
    if (input.isMove !== undefined) {
        bodyParams["isMove"] = input.isMove;
    }
    return bodyParams;
};
const serializeAws_json1_1TagKeysList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagsMap(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TagsMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1Target = (input, context) => {
    const bodyParams = {};
    if (input.destinationReference !== undefined) {
        bodyParams["destinationReference"] = input.destinationReference;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.sourceReference !== undefined) {
        bodyParams["sourceReference"] = input.sourceReference;
    }
    return bodyParams;
};
const serializeAws_json1_1TargetList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Target(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TestRepositoryTriggersInput = (input, context) => {
    const bodyParams = {};
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    if (input.triggers !== undefined) {
        bodyParams["triggers"] = serializeAws_json1_1RepositoryTriggersList(input.triggers, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tagKeys !== undefined) {
        bodyParams["tagKeys"] = serializeAws_json1_1TagKeysList(input.tagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateApprovalRuleTemplateContentInput = (input, context) => {
    const bodyParams = {};
    if (input.approvalRuleTemplateName !== undefined) {
        bodyParams["approvalRuleTemplateName"] = input.approvalRuleTemplateName;
    }
    if (input.existingRuleContentSha256 !== undefined) {
        bodyParams["existingRuleContentSha256"] = input.existingRuleContentSha256;
    }
    if (input.newRuleContent !== undefined) {
        bodyParams["newRuleContent"] = input.newRuleContent;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionInput = (input, context) => {
    const bodyParams = {};
    if (input.approvalRuleTemplateDescription !== undefined) {
        bodyParams["approvalRuleTemplateDescription"] =
            input.approvalRuleTemplateDescription;
    }
    if (input.approvalRuleTemplateName !== undefined) {
        bodyParams["approvalRuleTemplateName"] = input.approvalRuleTemplateName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateApprovalRuleTemplateNameInput = (input, context) => {
    const bodyParams = {};
    if (input.newApprovalRuleTemplateName !== undefined) {
        bodyParams["newApprovalRuleTemplateName"] =
            input.newApprovalRuleTemplateName;
    }
    if (input.oldApprovalRuleTemplateName !== undefined) {
        bodyParams["oldApprovalRuleTemplateName"] =
            input.oldApprovalRuleTemplateName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateCommentInput = (input, context) => {
    const bodyParams = {};
    if (input.commentId !== undefined) {
        bodyParams["commentId"] = input.commentId;
    }
    if (input.content !== undefined) {
        bodyParams["content"] = input.content;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDefaultBranchInput = (input, context) => {
    const bodyParams = {};
    if (input.defaultBranchName !== undefined) {
        bodyParams["defaultBranchName"] = input.defaultBranchName;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdatePullRequestApprovalRuleContentInput = (input, context) => {
    const bodyParams = {};
    if (input.approvalRuleName !== undefined) {
        bodyParams["approvalRuleName"] = input.approvalRuleName;
    }
    if (input.existingRuleContentSha256 !== undefined) {
        bodyParams["existingRuleContentSha256"] = input.existingRuleContentSha256;
    }
    if (input.newRuleContent !== undefined) {
        bodyParams["newRuleContent"] = input.newRuleContent;
    }
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdatePullRequestApprovalStateInput = (input, context) => {
    const bodyParams = {};
    if (input.approvalState !== undefined) {
        bodyParams["approvalState"] = input.approvalState;
    }
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    if (input.revisionId !== undefined) {
        bodyParams["revisionId"] = input.revisionId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdatePullRequestDescriptionInput = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdatePullRequestStatusInput = (input, context) => {
    const bodyParams = {};
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    if (input.pullRequestStatus !== undefined) {
        bodyParams["pullRequestStatus"] = input.pullRequestStatus;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdatePullRequestTitleInput = (input, context) => {
    const bodyParams = {};
    if (input.pullRequestId !== undefined) {
        bodyParams["pullRequestId"] = input.pullRequestId;
    }
    if (input.title !== undefined) {
        bodyParams["title"] = input.title;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRepositoryDescriptionInput = (input, context) => {
    const bodyParams = {};
    if (input.repositoryDescription !== undefined) {
        bodyParams["repositoryDescription"] = input.repositoryDescription;
    }
    if (input.repositoryName !== undefined) {
        bodyParams["repositoryName"] = input.repositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRepositoryNameInput = (input, context) => {
    const bodyParams = {};
    if (input.newName !== undefined) {
        bodyParams["newName"] = input.newName;
    }
    if (input.oldName !== undefined) {
        bodyParams["oldName"] = input.oldName;
    }
    return bodyParams;
};
const deserializeAws_json1_1ActorDoesNotExistException = (output, context) => {
    let contents = {
        __type: "ActorDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Approval = (output, context) => {
    let contents = {
        __type: "Approval",
        approvalState: undefined,
        userArn: undefined
    };
    if (output.approvalState !== undefined && output.approvalState !== null) {
        contents.approvalState = output.approvalState;
    }
    if (output.userArn !== undefined && output.userArn !== null) {
        contents.userArn = output.userArn;
    }
    return contents;
};
const deserializeAws_json1_1ApprovalList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Approval(entry, context));
};
const deserializeAws_json1_1ApprovalRule = (output, context) => {
    let contents = {
        __type: "ApprovalRule",
        approvalRuleContent: undefined,
        approvalRuleId: undefined,
        approvalRuleName: undefined,
        creationDate: undefined,
        lastModifiedDate: undefined,
        lastModifiedUser: undefined,
        originApprovalRuleTemplate: undefined,
        ruleContentSha256: undefined
    };
    if (output.approvalRuleContent !== undefined &&
        output.approvalRuleContent !== null) {
        contents.approvalRuleContent = output.approvalRuleContent;
    }
    if (output.approvalRuleId !== undefined && output.approvalRuleId !== null) {
        contents.approvalRuleId = output.approvalRuleId;
    }
    if (output.approvalRuleName !== undefined &&
        output.approvalRuleName !== null) {
        contents.approvalRuleName = output.approvalRuleName;
    }
    if (output.creationDate !== undefined && output.creationDate !== null) {
        contents.creationDate = new Date(Math.round(output.creationDate * 1000));
    }
    if (output.lastModifiedDate !== undefined &&
        output.lastModifiedDate !== null) {
        contents.lastModifiedDate = new Date(Math.round(output.lastModifiedDate * 1000));
    }
    if (output.lastModifiedUser !== undefined &&
        output.lastModifiedUser !== null) {
        contents.lastModifiedUser = output.lastModifiedUser;
    }
    if (output.originApprovalRuleTemplate !== undefined &&
        output.originApprovalRuleTemplate !== null) {
        contents.originApprovalRuleTemplate = deserializeAws_json1_1OriginApprovalRuleTemplate(output.originApprovalRuleTemplate, context);
    }
    if (output.ruleContentSha256 !== undefined &&
        output.ruleContentSha256 !== null) {
        contents.ruleContentSha256 = output.ruleContentSha256;
    }
    return contents;
};
const deserializeAws_json1_1ApprovalRuleContentRequiredException = (output, context) => {
    let contents = {
        __type: "ApprovalRuleContentRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ApprovalRuleDoesNotExistException = (output, context) => {
    let contents = {
        __type: "ApprovalRuleDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ApprovalRuleEventMetadata = (output, context) => {
    let contents = {
        __type: "ApprovalRuleEventMetadata",
        approvalRuleContent: undefined,
        approvalRuleId: undefined,
        approvalRuleName: undefined
    };
    if (output.approvalRuleContent !== undefined &&
        output.approvalRuleContent !== null) {
        contents.approvalRuleContent = output.approvalRuleContent;
    }
    if (output.approvalRuleId !== undefined && output.approvalRuleId !== null) {
        contents.approvalRuleId = output.approvalRuleId;
    }
    if (output.approvalRuleName !== undefined &&
        output.approvalRuleName !== null) {
        contents.approvalRuleName = output.approvalRuleName;
    }
    return contents;
};
const deserializeAws_json1_1ApprovalRuleNameAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ApprovalRuleNameAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ApprovalRuleNameRequiredException = (output, context) => {
    let contents = {
        __type: "ApprovalRuleNameRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ApprovalRuleOverriddenEventMetadata = (output, context) => {
    let contents = {
        __type: "ApprovalRuleOverriddenEventMetadata",
        overrideStatus: undefined,
        revisionId: undefined
    };
    if (output.overrideStatus !== undefined && output.overrideStatus !== null) {
        contents.overrideStatus = output.overrideStatus;
    }
    if (output.revisionId !== undefined && output.revisionId !== null) {
        contents.revisionId = output.revisionId;
    }
    return contents;
};
const deserializeAws_json1_1ApprovalRuleTemplate = (output, context) => {
    let contents = {
        __type: "ApprovalRuleTemplate",
        approvalRuleTemplateContent: undefined,
        approvalRuleTemplateDescription: undefined,
        approvalRuleTemplateId: undefined,
        approvalRuleTemplateName: undefined,
        creationDate: undefined,
        lastModifiedDate: undefined,
        lastModifiedUser: undefined,
        ruleContentSha256: undefined
    };
    if (output.approvalRuleTemplateContent !== undefined &&
        output.approvalRuleTemplateContent !== null) {
        contents.approvalRuleTemplateContent = output.approvalRuleTemplateContent;
    }
    if (output.approvalRuleTemplateDescription !== undefined &&
        output.approvalRuleTemplateDescription !== null) {
        contents.approvalRuleTemplateDescription =
            output.approvalRuleTemplateDescription;
    }
    if (output.approvalRuleTemplateId !== undefined &&
        output.approvalRuleTemplateId !== null) {
        contents.approvalRuleTemplateId = output.approvalRuleTemplateId;
    }
    if (output.approvalRuleTemplateName !== undefined &&
        output.approvalRuleTemplateName !== null) {
        contents.approvalRuleTemplateName = output.approvalRuleTemplateName;
    }
    if (output.creationDate !== undefined && output.creationDate !== null) {
        contents.creationDate = new Date(Math.round(output.creationDate * 1000));
    }
    if (output.lastModifiedDate !== undefined &&
        output.lastModifiedDate !== null) {
        contents.lastModifiedDate = new Date(Math.round(output.lastModifiedDate * 1000));
    }
    if (output.lastModifiedUser !== undefined &&
        output.lastModifiedUser !== null) {
        contents.lastModifiedUser = output.lastModifiedUser;
    }
    if (output.ruleContentSha256 !== undefined &&
        output.ruleContentSha256 !== null) {
        contents.ruleContentSha256 = output.ruleContentSha256;
    }
    return contents;
};
const deserializeAws_json1_1ApprovalRuleTemplateContentRequiredException = (output, context) => {
    let contents = {
        __type: "ApprovalRuleTemplateContentRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistException = (output, context) => {
    let contents = {
        __type: "ApprovalRuleTemplateDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ApprovalRuleTemplateInUseException = (output, context) => {
    let contents = {
        __type: "ApprovalRuleTemplateInUseException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ApprovalRuleTemplateNameAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ApprovalRuleTemplateNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ApprovalRuleTemplateNameRequiredException = (output, context) => {
    let contents = {
        __type: "ApprovalRuleTemplateNameRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ApprovalRulesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ApprovalRule(entry, context));
};
const deserializeAws_json1_1ApprovalRulesNotSatisfiedList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ApprovalRulesSatisfiedList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ApprovalStateChangedEventMetadata = (output, context) => {
    let contents = {
        __type: "ApprovalStateChangedEventMetadata",
        approvalStatus: undefined,
        revisionId: undefined
    };
    if (output.approvalStatus !== undefined && output.approvalStatus !== null) {
        contents.approvalStatus = output.approvalStatus;
    }
    if (output.revisionId !== undefined && output.revisionId !== null) {
        contents.revisionId = output.revisionId;
    }
    return contents;
};
const deserializeAws_json1_1ApprovalStateRequiredException = (output, context) => {
    let contents = {
        __type: "ApprovalStateRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1AuthorDoesNotExistException = (output, context) => {
    let contents = {
        __type: "AuthorDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesError = (output, context) => {
    let contents = {
        __type: "BatchAssociateApprovalRuleTemplateWithRepositoriesError",
        errorCode: undefined,
        errorMessage: undefined,
        repositoryName: undefined
    };
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.errorMessage !== undefined && output.errorMessage !== null) {
        contents.errorMessage = output.errorMessage;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesError(entry, context));
};
const deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesOutput = (output, context) => {
    let contents = {
        __type: "BatchAssociateApprovalRuleTemplateWithRepositoriesOutput",
        associatedRepositoryNames: undefined,
        errors: undefined
    };
    if (output.associatedRepositoryNames !== undefined &&
        output.associatedRepositoryNames !== null) {
        contents.associatedRepositoryNames = deserializeAws_json1_1RepositoryNameList(output.associatedRepositoryNames, context);
    }
    if (output.errors !== undefined && output.errors !== null) {
        contents.errors = deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList(output.errors, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDescribeMergeConflictsError = (output, context) => {
    let contents = {
        __type: "BatchDescribeMergeConflictsError",
        exceptionName: undefined,
        filePath: undefined,
        message: undefined
    };
    if (output.exceptionName !== undefined && output.exceptionName !== null) {
        contents.exceptionName = output.exceptionName;
    }
    if (output.filePath !== undefined && output.filePath !== null) {
        contents.filePath = output.filePath;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1BatchDescribeMergeConflictsErrors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchDescribeMergeConflictsError(entry, context));
};
const deserializeAws_json1_1BatchDescribeMergeConflictsOutput = (output, context) => {
    let contents = {
        __type: "BatchDescribeMergeConflictsOutput",
        baseCommitId: undefined,
        conflicts: undefined,
        destinationCommitId: undefined,
        errors: undefined,
        nextToken: undefined,
        sourceCommitId: undefined
    };
    if (output.baseCommitId !== undefined && output.baseCommitId !== null) {
        contents.baseCommitId = output.baseCommitId;
    }
    if (output.conflicts !== undefined && output.conflicts !== null) {
        contents.conflicts = deserializeAws_json1_1Conflicts(output.conflicts, context);
    }
    if (output.destinationCommitId !== undefined &&
        output.destinationCommitId !== null) {
        contents.destinationCommitId = output.destinationCommitId;
    }
    if (output.errors !== undefined && output.errors !== null) {
        contents.errors = deserializeAws_json1_1BatchDescribeMergeConflictsErrors(output.errors, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.sourceCommitId !== undefined && output.sourceCommitId !== null) {
        contents.sourceCommitId = output.sourceCommitId;
    }
    return contents;
};
const deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesError = (output, context) => {
    let contents = {
        __type: "BatchDisassociateApprovalRuleTemplateFromRepositoriesError",
        errorCode: undefined,
        errorMessage: undefined,
        repositoryName: undefined
    };
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.errorMessage !== undefined && output.errorMessage !== null) {
        contents.errorMessage = output.errorMessage;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesError(entry, context));
};
const deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput = (output, context) => {
    let contents = {
        __type: "BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput",
        disassociatedRepositoryNames: undefined,
        errors: undefined
    };
    if (output.disassociatedRepositoryNames !== undefined &&
        output.disassociatedRepositoryNames !== null) {
        contents.disassociatedRepositoryNames = deserializeAws_json1_1RepositoryNameList(output.disassociatedRepositoryNames, context);
    }
    if (output.errors !== undefined && output.errors !== null) {
        contents.errors = deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList(output.errors, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetCommitsError = (output, context) => {
    let contents = {
        __type: "BatchGetCommitsError",
        commitId: undefined,
        errorCode: undefined,
        errorMessage: undefined
    };
    if (output.commitId !== undefined && output.commitId !== null) {
        contents.commitId = output.commitId;
    }
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.errorMessage !== undefined && output.errorMessage !== null) {
        contents.errorMessage = output.errorMessage;
    }
    return contents;
};
const deserializeAws_json1_1BatchGetCommitsErrorsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchGetCommitsError(entry, context));
};
const deserializeAws_json1_1BatchGetCommitsOutput = (output, context) => {
    let contents = {
        __type: "BatchGetCommitsOutput",
        commits: undefined,
        errors: undefined
    };
    if (output.commits !== undefined && output.commits !== null) {
        contents.commits = deserializeAws_json1_1CommitObjectsList(output.commits, context);
    }
    if (output.errors !== undefined && output.errors !== null) {
        contents.errors = deserializeAws_json1_1BatchGetCommitsErrorsList(output.errors, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetRepositoriesOutput = (output, context) => {
    let contents = {
        __type: "BatchGetRepositoriesOutput",
        repositories: undefined,
        repositoriesNotFound: undefined
    };
    if (output.repositories !== undefined && output.repositories !== null) {
        contents.repositories = deserializeAws_json1_1RepositoryMetadataList(output.repositories, context);
    }
    if (output.repositoriesNotFound !== undefined &&
        output.repositoriesNotFound !== null) {
        contents.repositoriesNotFound = deserializeAws_json1_1RepositoryNotFoundList(output.repositoriesNotFound, context);
    }
    return contents;
};
const deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameException = (output, context) => {
    let contents = {
        __type: "BeforeCommitIdAndAfterCommitIdAreSameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1BlobIdDoesNotExistException = (output, context) => {
    let contents = {
        __type: "BlobIdDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1BlobIdRequiredException = (output, context) => {
    let contents = {
        __type: "BlobIdRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1BlobMetadata = (output, context) => {
    let contents = {
        __type: "BlobMetadata",
        blobId: undefined,
        mode: undefined,
        path: undefined
    };
    if (output.blobId !== undefined && output.blobId !== null) {
        contents.blobId = output.blobId;
    }
    if (output.mode !== undefined && output.mode !== null) {
        contents.mode = output.mode;
    }
    if (output.path !== undefined && output.path !== null) {
        contents.path = output.path;
    }
    return contents;
};
const deserializeAws_json1_1BranchDoesNotExistException = (output, context) => {
    let contents = {
        __type: "BranchDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1BranchInfo = (output, context) => {
    let contents = {
        __type: "BranchInfo",
        branchName: undefined,
        commitId: undefined
    };
    if (output.branchName !== undefined && output.branchName !== null) {
        contents.branchName = output.branchName;
    }
    if (output.commitId !== undefined && output.commitId !== null) {
        contents.commitId = output.commitId;
    }
    return contents;
};
const deserializeAws_json1_1BranchNameExistsException = (output, context) => {
    let contents = {
        __type: "BranchNameExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1BranchNameIsTagNameException = (output, context) => {
    let contents = {
        __type: "BranchNameIsTagNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1BranchNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1BranchNameRequiredException = (output, context) => {
    let contents = {
        __type: "BranchNameRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateException = (output, context) => {
    let contents = {
        __type: "CannotDeleteApprovalRuleFromTemplateException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateException = (output, context) => {
    let contents = {
        __type: "CannotModifyApprovalRuleFromTemplateException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ClientRequestTokenRequiredException = (output, context) => {
    let contents = {
        __type: "ClientRequestTokenRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Comment = (output, context) => {
    let contents = {
        __type: "Comment",
        authorArn: undefined,
        clientRequestToken: undefined,
        commentId: undefined,
        content: undefined,
        creationDate: undefined,
        deleted: undefined,
        inReplyTo: undefined,
        lastModifiedDate: undefined
    };
    if (output.authorArn !== undefined && output.authorArn !== null) {
        contents.authorArn = output.authorArn;
    }
    if (output.clientRequestToken !== undefined &&
        output.clientRequestToken !== null) {
        contents.clientRequestToken = output.clientRequestToken;
    }
    if (output.commentId !== undefined && output.commentId !== null) {
        contents.commentId = output.commentId;
    }
    if (output.content !== undefined && output.content !== null) {
        contents.content = output.content;
    }
    if (output.creationDate !== undefined && output.creationDate !== null) {
        contents.creationDate = new Date(Math.round(output.creationDate * 1000));
    }
    if (output.deleted !== undefined && output.deleted !== null) {
        contents.deleted = output.deleted;
    }
    if (output.inReplyTo !== undefined && output.inReplyTo !== null) {
        contents.inReplyTo = output.inReplyTo;
    }
    if (output.lastModifiedDate !== undefined &&
        output.lastModifiedDate !== null) {
        contents.lastModifiedDate = new Date(Math.round(output.lastModifiedDate * 1000));
    }
    return contents;
};
const deserializeAws_json1_1CommentContentRequiredException = (output, context) => {
    let contents = {
        __type: "CommentContentRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CommentContentSizeLimitExceededException = (output, context) => {
    let contents = {
        __type: "CommentContentSizeLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CommentDeletedException = (output, context) => {
    let contents = {
        __type: "CommentDeletedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CommentDoesNotExistException = (output, context) => {
    let contents = {
        __type: "CommentDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CommentIdRequiredException = (output, context) => {
    let contents = {
        __type: "CommentIdRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CommentNotCreatedByCallerException = (output, context) => {
    let contents = {
        __type: "CommentNotCreatedByCallerException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Comments = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Comment(entry, context));
};
const deserializeAws_json1_1CommentsForComparedCommit = (output, context) => {
    let contents = {
        __type: "CommentsForComparedCommit",
        afterBlobId: undefined,
        afterCommitId: undefined,
        beforeBlobId: undefined,
        beforeCommitId: undefined,
        comments: undefined,
        location: undefined,
        repositoryName: undefined
    };
    if (output.afterBlobId !== undefined && output.afterBlobId !== null) {
        contents.afterBlobId = output.afterBlobId;
    }
    if (output.afterCommitId !== undefined && output.afterCommitId !== null) {
        contents.afterCommitId = output.afterCommitId;
    }
    if (output.beforeBlobId !== undefined && output.beforeBlobId !== null) {
        contents.beforeBlobId = output.beforeBlobId;
    }
    if (output.beforeCommitId !== undefined && output.beforeCommitId !== null) {
        contents.beforeCommitId = output.beforeCommitId;
    }
    if (output.comments !== undefined && output.comments !== null) {
        contents.comments = deserializeAws_json1_1Comments(output.comments, context);
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1Location(output.location, context);
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1CommentsForComparedCommitData = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CommentsForComparedCommit(entry, context));
};
const deserializeAws_json1_1CommentsForPullRequest = (output, context) => {
    let contents = {
        __type: "CommentsForPullRequest",
        afterBlobId: undefined,
        afterCommitId: undefined,
        beforeBlobId: undefined,
        beforeCommitId: undefined,
        comments: undefined,
        location: undefined,
        pullRequestId: undefined,
        repositoryName: undefined
    };
    if (output.afterBlobId !== undefined && output.afterBlobId !== null) {
        contents.afterBlobId = output.afterBlobId;
    }
    if (output.afterCommitId !== undefined && output.afterCommitId !== null) {
        contents.afterCommitId = output.afterCommitId;
    }
    if (output.beforeBlobId !== undefined && output.beforeBlobId !== null) {
        contents.beforeBlobId = output.beforeBlobId;
    }
    if (output.beforeCommitId !== undefined && output.beforeCommitId !== null) {
        contents.beforeCommitId = output.beforeCommitId;
    }
    if (output.comments !== undefined && output.comments !== null) {
        contents.comments = deserializeAws_json1_1Comments(output.comments, context);
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1Location(output.location, context);
    }
    if (output.pullRequestId !== undefined && output.pullRequestId !== null) {
        contents.pullRequestId = output.pullRequestId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1CommentsForPullRequestData = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CommentsForPullRequest(entry, context));
};
const deserializeAws_json1_1Commit = (output, context) => {
    let contents = {
        __type: "Commit",
        additionalData: undefined,
        author: undefined,
        commitId: undefined,
        committer: undefined,
        message: undefined,
        parents: undefined,
        treeId: undefined
    };
    if (output.additionalData !== undefined && output.additionalData !== null) {
        contents.additionalData = output.additionalData;
    }
    if (output.author !== undefined && output.author !== null) {
        contents.author = deserializeAws_json1_1UserInfo(output.author, context);
    }
    if (output.commitId !== undefined && output.commitId !== null) {
        contents.commitId = output.commitId;
    }
    if (output.committer !== undefined && output.committer !== null) {
        contents.committer = deserializeAws_json1_1UserInfo(output.committer, context);
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.parents !== undefined && output.parents !== null) {
        contents.parents = deserializeAws_json1_1ParentList(output.parents, context);
    }
    if (output.treeId !== undefined && output.treeId !== null) {
        contents.treeId = output.treeId;
    }
    return contents;
};
const deserializeAws_json1_1CommitDoesNotExistException = (output, context) => {
    let contents = {
        __type: "CommitDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CommitIdDoesNotExistException = (output, context) => {
    let contents = {
        __type: "CommitIdDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CommitIdRequiredException = (output, context) => {
    let contents = {
        __type: "CommitIdRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CommitIdsLimitExceededException = (output, context) => {
    let contents = {
        __type: "CommitIdsLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CommitIdsListRequiredException = (output, context) => {
    let contents = {
        __type: "CommitIdsListRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CommitMessageLengthExceededException = (output, context) => {
    let contents = {
        __type: "CommitMessageLengthExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CommitObjectsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Commit(entry, context));
};
const deserializeAws_json1_1CommitRequiredException = (output, context) => {
    let contents = {
        __type: "CommitRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ConcurrentReferenceUpdateException = (output, context) => {
    let contents = {
        __type: "ConcurrentReferenceUpdateException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Conflict = (output, context) => {
    let contents = {
        __type: "Conflict",
        conflictMetadata: undefined,
        mergeHunks: undefined
    };
    if (output.conflictMetadata !== undefined &&
        output.conflictMetadata !== null) {
        contents.conflictMetadata = deserializeAws_json1_1ConflictMetadata(output.conflictMetadata, context);
    }
    if (output.mergeHunks !== undefined && output.mergeHunks !== null) {
        contents.mergeHunks = deserializeAws_json1_1MergeHunks(output.mergeHunks, context);
    }
    return contents;
};
const deserializeAws_json1_1ConflictMetadata = (output, context) => {
    let contents = {
        __type: "ConflictMetadata",
        contentConflict: undefined,
        fileModeConflict: undefined,
        fileModes: undefined,
        filePath: undefined,
        fileSizes: undefined,
        isBinaryFile: undefined,
        mergeOperations: undefined,
        numberOfConflicts: undefined,
        objectTypeConflict: undefined,
        objectTypes: undefined
    };
    if (output.contentConflict !== undefined && output.contentConflict !== null) {
        contents.contentConflict = output.contentConflict;
    }
    if (output.fileModeConflict !== undefined &&
        output.fileModeConflict !== null) {
        contents.fileModeConflict = output.fileModeConflict;
    }
    if (output.fileModes !== undefined && output.fileModes !== null) {
        contents.fileModes = deserializeAws_json1_1FileModes(output.fileModes, context);
    }
    if (output.filePath !== undefined && output.filePath !== null) {
        contents.filePath = output.filePath;
    }
    if (output.fileSizes !== undefined && output.fileSizes !== null) {
        contents.fileSizes = deserializeAws_json1_1FileSizes(output.fileSizes, context);
    }
    if (output.isBinaryFile !== undefined && output.isBinaryFile !== null) {
        contents.isBinaryFile = deserializeAws_json1_1IsBinaryFile(output.isBinaryFile, context);
    }
    if (output.mergeOperations !== undefined && output.mergeOperations !== null) {
        contents.mergeOperations = deserializeAws_json1_1MergeOperations(output.mergeOperations, context);
    }
    if (output.numberOfConflicts !== undefined &&
        output.numberOfConflicts !== null) {
        contents.numberOfConflicts = output.numberOfConflicts;
    }
    if (output.objectTypeConflict !== undefined &&
        output.objectTypeConflict !== null) {
        contents.objectTypeConflict = output.objectTypeConflict;
    }
    if (output.objectTypes !== undefined && output.objectTypes !== null) {
        contents.objectTypes = deserializeAws_json1_1ObjectTypes(output.objectTypes, context);
    }
    return contents;
};
const deserializeAws_json1_1ConflictMetadataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConflictMetadata(entry, context));
};
const deserializeAws_json1_1Conflicts = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Conflict(entry, context));
};
const deserializeAws_json1_1CreateApprovalRuleTemplateOutput = (output, context) => {
    let contents = {
        __type: "CreateApprovalRuleTemplateOutput",
        approvalRuleTemplate: undefined
    };
    if (output.approvalRuleTemplate !== undefined &&
        output.approvalRuleTemplate !== null) {
        contents.approvalRuleTemplate = deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateCommitOutput = (output, context) => {
    let contents = {
        __type: "CreateCommitOutput",
        commitId: undefined,
        filesAdded: undefined,
        filesDeleted: undefined,
        filesUpdated: undefined,
        treeId: undefined
    };
    if (output.commitId !== undefined && output.commitId !== null) {
        contents.commitId = output.commitId;
    }
    if (output.filesAdded !== undefined && output.filesAdded !== null) {
        contents.filesAdded = deserializeAws_json1_1FilesMetadata(output.filesAdded, context);
    }
    if (output.filesDeleted !== undefined && output.filesDeleted !== null) {
        contents.filesDeleted = deserializeAws_json1_1FilesMetadata(output.filesDeleted, context);
    }
    if (output.filesUpdated !== undefined && output.filesUpdated !== null) {
        contents.filesUpdated = deserializeAws_json1_1FilesMetadata(output.filesUpdated, context);
    }
    if (output.treeId !== undefined && output.treeId !== null) {
        contents.treeId = output.treeId;
    }
    return contents;
};
const deserializeAws_json1_1CreatePullRequestApprovalRuleOutput = (output, context) => {
    let contents = {
        __type: "CreatePullRequestApprovalRuleOutput",
        approvalRule: undefined
    };
    if (output.approvalRule !== undefined && output.approvalRule !== null) {
        contents.approvalRule = deserializeAws_json1_1ApprovalRule(output.approvalRule, context);
    }
    return contents;
};
const deserializeAws_json1_1CreatePullRequestOutput = (output, context) => {
    let contents = {
        __type: "CreatePullRequestOutput",
        pullRequest: undefined
    };
    if (output.pullRequest !== undefined && output.pullRequest !== null) {
        contents.pullRequest = deserializeAws_json1_1PullRequest(output.pullRequest, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateRepositoryOutput = (output, context) => {
    let contents = {
        __type: "CreateRepositoryOutput",
        repositoryMetadata: undefined
    };
    if (output.repositoryMetadata !== undefined &&
        output.repositoryMetadata !== null) {
        contents.repositoryMetadata = deserializeAws_json1_1RepositoryMetadata(output.repositoryMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateUnreferencedMergeCommitOutput = (output, context) => {
    let contents = {
        __type: "CreateUnreferencedMergeCommitOutput",
        commitId: undefined,
        treeId: undefined
    };
    if (output.commitId !== undefined && output.commitId !== null) {
        contents.commitId = output.commitId;
    }
    if (output.treeId !== undefined && output.treeId !== null) {
        contents.treeId = output.treeId;
    }
    return contents;
};
const deserializeAws_json1_1DefaultBranchCannotBeDeletedException = (output, context) => {
    let contents = {
        __type: "DefaultBranchCannotBeDeletedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeleteApprovalRuleTemplateOutput = (output, context) => {
    let contents = {
        __type: "DeleteApprovalRuleTemplateOutput",
        approvalRuleTemplateId: undefined
    };
    if (output.approvalRuleTemplateId !== undefined &&
        output.approvalRuleTemplateId !== null) {
        contents.approvalRuleTemplateId = output.approvalRuleTemplateId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteBranchOutput = (output, context) => {
    let contents = {
        __type: "DeleteBranchOutput",
        deletedBranch: undefined
    };
    if (output.deletedBranch !== undefined && output.deletedBranch !== null) {
        contents.deletedBranch = deserializeAws_json1_1BranchInfo(output.deletedBranch, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteCommentContentOutput = (output, context) => {
    let contents = {
        __type: "DeleteCommentContentOutput",
        comment: undefined
    };
    if (output.comment !== undefined && output.comment !== null) {
        contents.comment = deserializeAws_json1_1Comment(output.comment, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteFileOutput = (output, context) => {
    let contents = {
        __type: "DeleteFileOutput",
        blobId: undefined,
        commitId: undefined,
        filePath: undefined,
        treeId: undefined
    };
    if (output.blobId !== undefined && output.blobId !== null) {
        contents.blobId = output.blobId;
    }
    if (output.commitId !== undefined && output.commitId !== null) {
        contents.commitId = output.commitId;
    }
    if (output.filePath !== undefined && output.filePath !== null) {
        contents.filePath = output.filePath;
    }
    if (output.treeId !== undefined && output.treeId !== null) {
        contents.treeId = output.treeId;
    }
    return contents;
};
const deserializeAws_json1_1DeletePullRequestApprovalRuleOutput = (output, context) => {
    let contents = {
        __type: "DeletePullRequestApprovalRuleOutput",
        approvalRuleId: undefined
    };
    if (output.approvalRuleId !== undefined && output.approvalRuleId !== null) {
        contents.approvalRuleId = output.approvalRuleId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteRepositoryOutput = (output, context) => {
    let contents = {
        __type: "DeleteRepositoryOutput",
        repositoryId: undefined
    };
    if (output.repositoryId !== undefined && output.repositoryId !== null) {
        contents.repositoryId = output.repositoryId;
    }
    return contents;
};
const deserializeAws_json1_1DescribeMergeConflictsOutput = (output, context) => {
    let contents = {
        __type: "DescribeMergeConflictsOutput",
        baseCommitId: undefined,
        conflictMetadata: undefined,
        destinationCommitId: undefined,
        mergeHunks: undefined,
        nextToken: undefined,
        sourceCommitId: undefined
    };
    if (output.baseCommitId !== undefined && output.baseCommitId !== null) {
        contents.baseCommitId = output.baseCommitId;
    }
    if (output.conflictMetadata !== undefined &&
        output.conflictMetadata !== null) {
        contents.conflictMetadata = deserializeAws_json1_1ConflictMetadata(output.conflictMetadata, context);
    }
    if (output.destinationCommitId !== undefined &&
        output.destinationCommitId !== null) {
        contents.destinationCommitId = output.destinationCommitId;
    }
    if (output.mergeHunks !== undefined && output.mergeHunks !== null) {
        contents.mergeHunks = deserializeAws_json1_1MergeHunks(output.mergeHunks, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.sourceCommitId !== undefined && output.sourceCommitId !== null) {
        contents.sourceCommitId = output.sourceCommitId;
    }
    return contents;
};
const deserializeAws_json1_1DescribePullRequestEventsOutput = (output, context) => {
    let contents = {
        __type: "DescribePullRequestEventsOutput",
        nextToken: undefined,
        pullRequestEvents: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.pullRequestEvents !== undefined &&
        output.pullRequestEvents !== null) {
        contents.pullRequestEvents = deserializeAws_json1_1PullRequestEventList(output.pullRequestEvents, context);
    }
    return contents;
};
const deserializeAws_json1_1Difference = (output, context) => {
    let contents = {
        __type: "Difference",
        afterBlob: undefined,
        beforeBlob: undefined,
        changeType: undefined
    };
    if (output.afterBlob !== undefined && output.afterBlob !== null) {
        contents.afterBlob = deserializeAws_json1_1BlobMetadata(output.afterBlob, context);
    }
    if (output.beforeBlob !== undefined && output.beforeBlob !== null) {
        contents.beforeBlob = deserializeAws_json1_1BlobMetadata(output.beforeBlob, context);
    }
    if (output.changeType !== undefined && output.changeType !== null) {
        contents.changeType = output.changeType;
    }
    return contents;
};
const deserializeAws_json1_1DifferenceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Difference(entry, context));
};
const deserializeAws_json1_1DirectoryNameConflictsWithFileNameException = (output, context) => {
    let contents = {
        __type: "DirectoryNameConflictsWithFileNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1EncryptionIntegrityChecksFailedException = (output, context) => {
    let contents = {
        __type: "EncryptionIntegrityChecksFailedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1EncryptionKeyAccessDeniedException = (output, context) => {
    let contents = {
        __type: "EncryptionKeyAccessDeniedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1EncryptionKeyDisabledException = (output, context) => {
    let contents = {
        __type: "EncryptionKeyDisabledException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1EncryptionKeyNotFoundException = (output, context) => {
    let contents = {
        __type: "EncryptionKeyNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1EncryptionKeyUnavailableException = (output, context) => {
    let contents = {
        __type: "EncryptionKeyUnavailableException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1EvaluatePullRequestApprovalRulesOutput = (output, context) => {
    let contents = {
        __type: "EvaluatePullRequestApprovalRulesOutput",
        evaluation: undefined
    };
    if (output.evaluation !== undefined && output.evaluation !== null) {
        contents.evaluation = deserializeAws_json1_1Evaluation(output.evaluation, context);
    }
    return contents;
};
const deserializeAws_json1_1Evaluation = (output, context) => {
    let contents = {
        __type: "Evaluation",
        approvalRulesNotSatisfied: undefined,
        approvalRulesSatisfied: undefined,
        approved: undefined,
        overridden: undefined
    };
    if (output.approvalRulesNotSatisfied !== undefined &&
        output.approvalRulesNotSatisfied !== null) {
        contents.approvalRulesNotSatisfied = deserializeAws_json1_1ApprovalRulesNotSatisfiedList(output.approvalRulesNotSatisfied, context);
    }
    if (output.approvalRulesSatisfied !== undefined &&
        output.approvalRulesSatisfied !== null) {
        contents.approvalRulesSatisfied = deserializeAws_json1_1ApprovalRulesSatisfiedList(output.approvalRulesSatisfied, context);
    }
    if (output.approved !== undefined && output.approved !== null) {
        contents.approved = output.approved;
    }
    if (output.overridden !== undefined && output.overridden !== null) {
        contents.overridden = output.overridden;
    }
    return contents;
};
const deserializeAws_json1_1File = (output, context) => {
    let contents = {
        __type: "File",
        absolutePath: undefined,
        blobId: undefined,
        fileMode: undefined,
        relativePath: undefined
    };
    if (output.absolutePath !== undefined && output.absolutePath !== null) {
        contents.absolutePath = output.absolutePath;
    }
    if (output.blobId !== undefined && output.blobId !== null) {
        contents.blobId = output.blobId;
    }
    if (output.fileMode !== undefined && output.fileMode !== null) {
        contents.fileMode = output.fileMode;
    }
    if (output.relativePath !== undefined && output.relativePath !== null) {
        contents.relativePath = output.relativePath;
    }
    return contents;
};
const deserializeAws_json1_1FileContentAndSourceFileSpecifiedException = (output, context) => {
    let contents = {
        __type: "FileContentAndSourceFileSpecifiedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1FileContentRequiredException = (output, context) => {
    let contents = {
        __type: "FileContentRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1FileContentSizeLimitExceededException = (output, context) => {
    let contents = {
        __type: "FileContentSizeLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1FileDoesNotExistException = (output, context) => {
    let contents = {
        __type: "FileDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1FileEntryRequiredException = (output, context) => {
    let contents = {
        __type: "FileEntryRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1FileList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1File(entry, context));
};
const deserializeAws_json1_1FileMetadata = (output, context) => {
    let contents = {
        __type: "FileMetadata",
        absolutePath: undefined,
        blobId: undefined,
        fileMode: undefined
    };
    if (output.absolutePath !== undefined && output.absolutePath !== null) {
        contents.absolutePath = output.absolutePath;
    }
    if (output.blobId !== undefined && output.blobId !== null) {
        contents.blobId = output.blobId;
    }
    if (output.fileMode !== undefined && output.fileMode !== null) {
        contents.fileMode = output.fileMode;
    }
    return contents;
};
const deserializeAws_json1_1FileModeRequiredException = (output, context) => {
    let contents = {
        __type: "FileModeRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1FileModes = (output, context) => {
    let contents = {
        __type: "FileModes",
        base: undefined,
        destination: undefined,
        source: undefined
    };
    if (output.base !== undefined && output.base !== null) {
        contents.base = output.base;
    }
    if (output.destination !== undefined && output.destination !== null) {
        contents.destination = output.destination;
    }
    if (output.source !== undefined && output.source !== null) {
        contents.source = output.source;
    }
    return contents;
};
const deserializeAws_json1_1FileNameConflictsWithDirectoryNameException = (output, context) => {
    let contents = {
        __type: "FileNameConflictsWithDirectoryNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1FilePathConflictsWithSubmodulePathException = (output, context) => {
    let contents = {
        __type: "FilePathConflictsWithSubmodulePathException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1FileSizes = (output, context) => {
    let contents = {
        __type: "FileSizes",
        base: undefined,
        destination: undefined,
        source: undefined
    };
    if (output.base !== undefined && output.base !== null) {
        contents.base = output.base;
    }
    if (output.destination !== undefined && output.destination !== null) {
        contents.destination = output.destination;
    }
    if (output.source !== undefined && output.source !== null) {
        contents.source = output.source;
    }
    return contents;
};
const deserializeAws_json1_1FileTooLargeException = (output, context) => {
    let contents = {
        __type: "FileTooLargeException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1FilesMetadata = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FileMetadata(entry, context));
};
const deserializeAws_json1_1Folder = (output, context) => {
    let contents = {
        __type: "Folder",
        absolutePath: undefined,
        relativePath: undefined,
        treeId: undefined
    };
    if (output.absolutePath !== undefined && output.absolutePath !== null) {
        contents.absolutePath = output.absolutePath;
    }
    if (output.relativePath !== undefined && output.relativePath !== null) {
        contents.relativePath = output.relativePath;
    }
    if (output.treeId !== undefined && output.treeId !== null) {
        contents.treeId = output.treeId;
    }
    return contents;
};
const deserializeAws_json1_1FolderContentSizeLimitExceededException = (output, context) => {
    let contents = {
        __type: "FolderContentSizeLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1FolderDoesNotExistException = (output, context) => {
    let contents = {
        __type: "FolderDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1FolderList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Folder(entry, context));
};
const deserializeAws_json1_1GetApprovalRuleTemplateOutput = (output, context) => {
    let contents = {
        __type: "GetApprovalRuleTemplateOutput",
        approvalRuleTemplate: undefined
    };
    if (output.approvalRuleTemplate !== undefined &&
        output.approvalRuleTemplate !== null) {
        contents.approvalRuleTemplate = deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context);
    }
    return contents;
};
const deserializeAws_json1_1GetBlobOutput = (output, context) => {
    let contents = {
        __type: "GetBlobOutput",
        content: undefined
    };
    if (output.content !== undefined && output.content !== null) {
        contents.content = Uint8Array.from(output.content);
    }
    return contents;
};
const deserializeAws_json1_1GetBranchOutput = (output, context) => {
    let contents = {
        __type: "GetBranchOutput",
        branch: undefined
    };
    if (output.branch !== undefined && output.branch !== null) {
        contents.branch = deserializeAws_json1_1BranchInfo(output.branch, context);
    }
    return contents;
};
const deserializeAws_json1_1GetCommentOutput = (output, context) => {
    let contents = {
        __type: "GetCommentOutput",
        comment: undefined
    };
    if (output.comment !== undefined && output.comment !== null) {
        contents.comment = deserializeAws_json1_1Comment(output.comment, context);
    }
    return contents;
};
const deserializeAws_json1_1GetCommentsForComparedCommitOutput = (output, context) => {
    let contents = {
        __type: "GetCommentsForComparedCommitOutput",
        commentsForComparedCommitData: undefined,
        nextToken: undefined
    };
    if (output.commentsForComparedCommitData !== undefined &&
        output.commentsForComparedCommitData !== null) {
        contents.commentsForComparedCommitData = deserializeAws_json1_1CommentsForComparedCommitData(output.commentsForComparedCommitData, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetCommentsForPullRequestOutput = (output, context) => {
    let contents = {
        __type: "GetCommentsForPullRequestOutput",
        commentsForPullRequestData: undefined,
        nextToken: undefined
    };
    if (output.commentsForPullRequestData !== undefined &&
        output.commentsForPullRequestData !== null) {
        contents.commentsForPullRequestData = deserializeAws_json1_1CommentsForPullRequestData(output.commentsForPullRequestData, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetCommitOutput = (output, context) => {
    let contents = {
        __type: "GetCommitOutput",
        commit: undefined
    };
    if (output.commit !== undefined && output.commit !== null) {
        contents.commit = deserializeAws_json1_1Commit(output.commit, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDifferencesOutput = (output, context) => {
    let contents = {
        __type: "GetDifferencesOutput",
        NextToken: undefined,
        differences: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.differences !== undefined && output.differences !== null) {
        contents.differences = deserializeAws_json1_1DifferenceList(output.differences, context);
    }
    return contents;
};
const deserializeAws_json1_1GetFileOutput = (output, context) => {
    let contents = {
        __type: "GetFileOutput",
        blobId: undefined,
        commitId: undefined,
        fileContent: undefined,
        fileMode: undefined,
        filePath: undefined,
        fileSize: undefined
    };
    if (output.blobId !== undefined && output.blobId !== null) {
        contents.blobId = output.blobId;
    }
    if (output.commitId !== undefined && output.commitId !== null) {
        contents.commitId = output.commitId;
    }
    if (output.fileContent !== undefined && output.fileContent !== null) {
        contents.fileContent = Uint8Array.from(output.fileContent);
    }
    if (output.fileMode !== undefined && output.fileMode !== null) {
        contents.fileMode = output.fileMode;
    }
    if (output.filePath !== undefined && output.filePath !== null) {
        contents.filePath = output.filePath;
    }
    if (output.fileSize !== undefined && output.fileSize !== null) {
        contents.fileSize = output.fileSize;
    }
    return contents;
};
const deserializeAws_json1_1GetFolderOutput = (output, context) => {
    let contents = {
        __type: "GetFolderOutput",
        commitId: undefined,
        files: undefined,
        folderPath: undefined,
        subFolders: undefined,
        subModules: undefined,
        symbolicLinks: undefined,
        treeId: undefined
    };
    if (output.commitId !== undefined && output.commitId !== null) {
        contents.commitId = output.commitId;
    }
    if (output.files !== undefined && output.files !== null) {
        contents.files = deserializeAws_json1_1FileList(output.files, context);
    }
    if (output.folderPath !== undefined && output.folderPath !== null) {
        contents.folderPath = output.folderPath;
    }
    if (output.subFolders !== undefined && output.subFolders !== null) {
        contents.subFolders = deserializeAws_json1_1FolderList(output.subFolders, context);
    }
    if (output.subModules !== undefined && output.subModules !== null) {
        contents.subModules = deserializeAws_json1_1SubModuleList(output.subModules, context);
    }
    if (output.symbolicLinks !== undefined && output.symbolicLinks !== null) {
        contents.symbolicLinks = deserializeAws_json1_1SymbolicLinkList(output.symbolicLinks, context);
    }
    if (output.treeId !== undefined && output.treeId !== null) {
        contents.treeId = output.treeId;
    }
    return contents;
};
const deserializeAws_json1_1GetMergeCommitOutput = (output, context) => {
    let contents = {
        __type: "GetMergeCommitOutput",
        baseCommitId: undefined,
        destinationCommitId: undefined,
        mergedCommitId: undefined,
        sourceCommitId: undefined
    };
    if (output.baseCommitId !== undefined && output.baseCommitId !== null) {
        contents.baseCommitId = output.baseCommitId;
    }
    if (output.destinationCommitId !== undefined &&
        output.destinationCommitId !== null) {
        contents.destinationCommitId = output.destinationCommitId;
    }
    if (output.mergedCommitId !== undefined && output.mergedCommitId !== null) {
        contents.mergedCommitId = output.mergedCommitId;
    }
    if (output.sourceCommitId !== undefined && output.sourceCommitId !== null) {
        contents.sourceCommitId = output.sourceCommitId;
    }
    return contents;
};
const deserializeAws_json1_1GetMergeConflictsOutput = (output, context) => {
    let contents = {
        __type: "GetMergeConflictsOutput",
        baseCommitId: undefined,
        conflictMetadataList: undefined,
        destinationCommitId: undefined,
        mergeable: undefined,
        nextToken: undefined,
        sourceCommitId: undefined
    };
    if (output.baseCommitId !== undefined && output.baseCommitId !== null) {
        contents.baseCommitId = output.baseCommitId;
    }
    if (output.conflictMetadataList !== undefined &&
        output.conflictMetadataList !== null) {
        contents.conflictMetadataList = deserializeAws_json1_1ConflictMetadataList(output.conflictMetadataList, context);
    }
    if (output.destinationCommitId !== undefined &&
        output.destinationCommitId !== null) {
        contents.destinationCommitId = output.destinationCommitId;
    }
    if (output.mergeable !== undefined && output.mergeable !== null) {
        contents.mergeable = output.mergeable;
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.sourceCommitId !== undefined && output.sourceCommitId !== null) {
        contents.sourceCommitId = output.sourceCommitId;
    }
    return contents;
};
const deserializeAws_json1_1GetMergeOptionsOutput = (output, context) => {
    let contents = {
        __type: "GetMergeOptionsOutput",
        baseCommitId: undefined,
        destinationCommitId: undefined,
        mergeOptions: undefined,
        sourceCommitId: undefined
    };
    if (output.baseCommitId !== undefined && output.baseCommitId !== null) {
        contents.baseCommitId = output.baseCommitId;
    }
    if (output.destinationCommitId !== undefined &&
        output.destinationCommitId !== null) {
        contents.destinationCommitId = output.destinationCommitId;
    }
    if (output.mergeOptions !== undefined && output.mergeOptions !== null) {
        contents.mergeOptions = deserializeAws_json1_1MergeOptions(output.mergeOptions, context);
    }
    if (output.sourceCommitId !== undefined && output.sourceCommitId !== null) {
        contents.sourceCommitId = output.sourceCommitId;
    }
    return contents;
};
const deserializeAws_json1_1GetPullRequestApprovalStatesOutput = (output, context) => {
    let contents = {
        __type: "GetPullRequestApprovalStatesOutput",
        approvals: undefined
    };
    if (output.approvals !== undefined && output.approvals !== null) {
        contents.approvals = deserializeAws_json1_1ApprovalList(output.approvals, context);
    }
    return contents;
};
const deserializeAws_json1_1GetPullRequestOutput = (output, context) => {
    let contents = {
        __type: "GetPullRequestOutput",
        pullRequest: undefined
    };
    if (output.pullRequest !== undefined && output.pullRequest !== null) {
        contents.pullRequest = deserializeAws_json1_1PullRequest(output.pullRequest, context);
    }
    return contents;
};
const deserializeAws_json1_1GetPullRequestOverrideStateOutput = (output, context) => {
    let contents = {
        __type: "GetPullRequestOverrideStateOutput",
        overridden: undefined,
        overrider: undefined
    };
    if (output.overridden !== undefined && output.overridden !== null) {
        contents.overridden = output.overridden;
    }
    if (output.overrider !== undefined && output.overrider !== null) {
        contents.overrider = output.overrider;
    }
    return contents;
};
const deserializeAws_json1_1GetRepositoryOutput = (output, context) => {
    let contents = {
        __type: "GetRepositoryOutput",
        repositoryMetadata: undefined
    };
    if (output.repositoryMetadata !== undefined &&
        output.repositoryMetadata !== null) {
        contents.repositoryMetadata = deserializeAws_json1_1RepositoryMetadata(output.repositoryMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRepositoryTriggersOutput = (output, context) => {
    let contents = {
        __type: "GetRepositoryTriggersOutput",
        configurationId: undefined,
        triggers: undefined
    };
    if (output.configurationId !== undefined && output.configurationId !== null) {
        contents.configurationId = output.configurationId;
    }
    if (output.triggers !== undefined && output.triggers !== null) {
        contents.triggers = deserializeAws_json1_1RepositoryTriggersList(output.triggers, context);
    }
    return contents;
};
const deserializeAws_json1_1IdempotencyParameterMismatchException = (output, context) => {
    let contents = {
        __type: "IdempotencyParameterMismatchException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidActorArnException = (output, context) => {
    let contents = {
        __type: "InvalidActorArnException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidApprovalRuleContentException = (output, context) => {
    let contents = {
        __type: "InvalidApprovalRuleContentException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidApprovalRuleNameException = (output, context) => {
    let contents = {
        __type: "InvalidApprovalRuleNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidApprovalRuleTemplateContentException = (output, context) => {
    let contents = {
        __type: "InvalidApprovalRuleTemplateContentException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionException = (output, context) => {
    let contents = {
        __type: "InvalidApprovalRuleTemplateDescriptionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidApprovalRuleTemplateNameException = (output, context) => {
    let contents = {
        __type: "InvalidApprovalRuleTemplateNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidApprovalStateException = (output, context) => {
    let contents = {
        __type: "InvalidApprovalStateException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidAuthorArnException = (output, context) => {
    let contents = {
        __type: "InvalidAuthorArnException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidBlobIdException = (output, context) => {
    let contents = {
        __type: "InvalidBlobIdException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidBranchNameException = (output, context) => {
    let contents = {
        __type: "InvalidBranchNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidClientRequestTokenException = (output, context) => {
    let contents = {
        __type: "InvalidClientRequestTokenException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidCommentIdException = (output, context) => {
    let contents = {
        __type: "InvalidCommentIdException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidCommitException = (output, context) => {
    let contents = {
        __type: "InvalidCommitException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidCommitIdException = (output, context) => {
    let contents = {
        __type: "InvalidCommitIdException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidConflictDetailLevelException = (output, context) => {
    let contents = {
        __type: "InvalidConflictDetailLevelException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidConflictResolutionException = (output, context) => {
    let contents = {
        __type: "InvalidConflictResolutionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidConflictResolutionStrategyException = (output, context) => {
    let contents = {
        __type: "InvalidConflictResolutionStrategyException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidContinuationTokenException = (output, context) => {
    let contents = {
        __type: "InvalidContinuationTokenException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDeletionParameterException = (output, context) => {
    let contents = {
        __type: "InvalidDeletionParameterException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDescriptionException = (output, context) => {
    let contents = {
        __type: "InvalidDescriptionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDestinationCommitSpecifierException = (output, context) => {
    let contents = {
        __type: "InvalidDestinationCommitSpecifierException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidEmailException = (output, context) => {
    let contents = {
        __type: "InvalidEmailException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidFileLocationException = (output, context) => {
    let contents = {
        __type: "InvalidFileLocationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidFileModeException = (output, context) => {
    let contents = {
        __type: "InvalidFileModeException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidFilePositionException = (output, context) => {
    let contents = {
        __type: "InvalidFilePositionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidMaxConflictFilesException = (output, context) => {
    let contents = {
        __type: "InvalidMaxConflictFilesException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidMaxMergeHunksException = (output, context) => {
    let contents = {
        __type: "InvalidMaxMergeHunksException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidMaxResultsException = (output, context) => {
    let contents = {
        __type: "InvalidMaxResultsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidMergeOptionException = (output, context) => {
    let contents = {
        __type: "InvalidMergeOptionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidOrderException = (output, context) => {
    let contents = {
        __type: "InvalidOrderException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidOverrideStatusException = (output, context) => {
    let contents = {
        __type: "InvalidOverrideStatusException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParentCommitIdException = (output, context) => {
    let contents = {
        __type: "InvalidParentCommitIdException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPathException = (output, context) => {
    let contents = {
        __type: "InvalidPathException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPullRequestEventTypeException = (output, context) => {
    let contents = {
        __type: "InvalidPullRequestEventTypeException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPullRequestIdException = (output, context) => {
    let contents = {
        __type: "InvalidPullRequestIdException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPullRequestStatusException = (output, context) => {
    let contents = {
        __type: "InvalidPullRequestStatusException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPullRequestStatusUpdateException = (output, context) => {
    let contents = {
        __type: "InvalidPullRequestStatusUpdateException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidReferenceNameException = (output, context) => {
    let contents = {
        __type: "InvalidReferenceNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRelativeFileVersionEnumException = (output, context) => {
    let contents = {
        __type: "InvalidRelativeFileVersionEnumException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidReplacementContentException = (output, context) => {
    let contents = {
        __type: "InvalidReplacementContentException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidReplacementTypeException = (output, context) => {
    let contents = {
        __type: "InvalidReplacementTypeException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryDescriptionException = (output, context) => {
    let contents = {
        __type: "InvalidRepositoryDescriptionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryNameException = (output, context) => {
    let contents = {
        __type: "InvalidRepositoryNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerBranchNameException = (output, context) => {
    let contents = {
        __type: "InvalidRepositoryTriggerBranchNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerCustomDataException = (output, context) => {
    let contents = {
        __type: "InvalidRepositoryTriggerCustomDataException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnException = (output, context) => {
    let contents = {
        __type: "InvalidRepositoryTriggerDestinationArnException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerEventsException = (output, context) => {
    let contents = {
        __type: "InvalidRepositoryTriggerEventsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerNameException = (output, context) => {
    let contents = {
        __type: "InvalidRepositoryTriggerNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRepositoryTriggerRegionException = (output, context) => {
    let contents = {
        __type: "InvalidRepositoryTriggerRegionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidResourceArnException = (output, context) => {
    let contents = {
        __type: "InvalidResourceArnException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRevisionIdException = (output, context) => {
    let contents = {
        __type: "InvalidRevisionIdException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRuleContentSha256Exception = (output, context) => {
    let contents = {
        __type: "InvalidRuleContentSha256Exception",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidSortByException = (output, context) => {
    let contents = {
        __type: "InvalidSortByException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidSourceCommitSpecifierException = (output, context) => {
    let contents = {
        __type: "InvalidSourceCommitSpecifierException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidSystemTagUsageException = (output, context) => {
    let contents = {
        __type: "InvalidSystemTagUsageException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTagKeysListException = (output, context) => {
    let contents = {
        __type: "InvalidTagKeysListException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTagsMapException = (output, context) => {
    let contents = {
        __type: "InvalidTagsMapException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTargetBranchException = (output, context) => {
    let contents = {
        __type: "InvalidTargetBranchException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTargetException = (output, context) => {
    let contents = {
        __type: "InvalidTargetException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTargetsException = (output, context) => {
    let contents = {
        __type: "InvalidTargetsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTitleException = (output, context) => {
    let contents = {
        __type: "InvalidTitleException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1IsBinaryFile = (output, context) => {
    let contents = {
        __type: "IsBinaryFile",
        base: undefined,
        destination: undefined,
        source: undefined
    };
    if (output.base !== undefined && output.base !== null) {
        contents.base = output.base;
    }
    if (output.destination !== undefined && output.destination !== null) {
        contents.destination = output.destination;
    }
    if (output.source !== undefined && output.source !== null) {
        contents.source = output.source;
    }
    return contents;
};
const deserializeAws_json1_1ListApprovalRuleTemplatesOutput = (output, context) => {
    let contents = {
        __type: "ListApprovalRuleTemplatesOutput",
        approvalRuleTemplateNames: undefined,
        nextToken: undefined
    };
    if (output.approvalRuleTemplateNames !== undefined &&
        output.approvalRuleTemplateNames !== null) {
        contents.approvalRuleTemplateNames = deserializeAws_json1_1ApprovalRuleTemplateNameList(output.approvalRuleTemplateNames, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryOutput = (output, context) => {
    let contents = {
        __type: "ListAssociatedApprovalRuleTemplatesForRepositoryOutput",
        approvalRuleTemplateNames: undefined,
        nextToken: undefined
    };
    if (output.approvalRuleTemplateNames !== undefined &&
        output.approvalRuleTemplateNames !== null) {
        contents.approvalRuleTemplateNames = deserializeAws_json1_1ApprovalRuleTemplateNameList(output.approvalRuleTemplateNames, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListBranchesOutput = (output, context) => {
    let contents = {
        __type: "ListBranchesOutput",
        branches: undefined,
        nextToken: undefined
    };
    if (output.branches !== undefined && output.branches !== null) {
        contents.branches = deserializeAws_json1_1BranchNameList(output.branches, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListPullRequestsOutput = (output, context) => {
    let contents = {
        __type: "ListPullRequestsOutput",
        nextToken: undefined,
        pullRequestIds: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.pullRequestIds !== undefined && output.pullRequestIds !== null) {
        contents.pullRequestIds = deserializeAws_json1_1PullRequestIdList(output.pullRequestIds, context);
    }
    return contents;
};
const deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateOutput = (output, context) => {
    let contents = {
        __type: "ListRepositoriesForApprovalRuleTemplateOutput",
        nextToken: undefined,
        repositoryNames: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.repositoryNames !== undefined && output.repositoryNames !== null) {
        contents.repositoryNames = deserializeAws_json1_1RepositoryNameList(output.repositoryNames, context);
    }
    return contents;
};
const deserializeAws_json1_1ListRepositoriesOutput = (output, context) => {
    let contents = {
        __type: "ListRepositoriesOutput",
        nextToken: undefined,
        repositories: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.repositories !== undefined && output.repositories !== null) {
        contents.repositories = deserializeAws_json1_1RepositoryNameIdPairList(output.repositories, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceOutput = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceOutput",
        nextToken: undefined,
        tags: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagsMap(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1Location = (output, context) => {
    let contents = {
        __type: "Location",
        filePath: undefined,
        filePosition: undefined,
        relativeFileVersion: undefined
    };
    if (output.filePath !== undefined && output.filePath !== null) {
        contents.filePath = output.filePath;
    }
    if (output.filePosition !== undefined && output.filePosition !== null) {
        contents.filePosition = output.filePosition;
    }
    if (output.relativeFileVersion !== undefined &&
        output.relativeFileVersion !== null) {
        contents.relativeFileVersion = output.relativeFileVersion;
    }
    return contents;
};
const deserializeAws_json1_1ManualMergeRequiredException = (output, context) => {
    let contents = {
        __type: "ManualMergeRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaximumBranchesExceededException = (output, context) => {
    let contents = {
        __type: "MaximumBranchesExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaximumConflictResolutionEntriesExceededException = (output, context) => {
    let contents = {
        __type: "MaximumConflictResolutionEntriesExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaximumFileContentToLoadExceededException = (output, context) => {
    let contents = {
        __type: "MaximumFileContentToLoadExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaximumFileEntriesExceededException = (output, context) => {
    let contents = {
        __type: "MaximumFileEntriesExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaximumItemsToCompareExceededException = (output, context) => {
    let contents = {
        __type: "MaximumItemsToCompareExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaximumNumberOfApprovalsExceededException = (output, context) => {
    let contents = {
        __type: "MaximumNumberOfApprovalsExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaximumOpenPullRequestsExceededException = (output, context) => {
    let contents = {
        __type: "MaximumOpenPullRequestsExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaximumRepositoryNamesExceededException = (output, context) => {
    let contents = {
        __type: "MaximumRepositoryNamesExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaximumRepositoryTriggersExceededException = (output, context) => {
    let contents = {
        __type: "MaximumRepositoryTriggersExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryException = (output, context) => {
    let contents = {
        __type: "MaximumRuleTemplatesAssociatedWithRepositoryException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MergeBranchesByFastForwardOutput = (output, context) => {
    let contents = {
        __type: "MergeBranchesByFastForwardOutput",
        commitId: undefined,
        treeId: undefined
    };
    if (output.commitId !== undefined && output.commitId !== null) {
        contents.commitId = output.commitId;
    }
    if (output.treeId !== undefined && output.treeId !== null) {
        contents.treeId = output.treeId;
    }
    return contents;
};
const deserializeAws_json1_1MergeBranchesBySquashOutput = (output, context) => {
    let contents = {
        __type: "MergeBranchesBySquashOutput",
        commitId: undefined,
        treeId: undefined
    };
    if (output.commitId !== undefined && output.commitId !== null) {
        contents.commitId = output.commitId;
    }
    if (output.treeId !== undefined && output.treeId !== null) {
        contents.treeId = output.treeId;
    }
    return contents;
};
const deserializeAws_json1_1MergeBranchesByThreeWayOutput = (output, context) => {
    let contents = {
        __type: "MergeBranchesByThreeWayOutput",
        commitId: undefined,
        treeId: undefined
    };
    if (output.commitId !== undefined && output.commitId !== null) {
        contents.commitId = output.commitId;
    }
    if (output.treeId !== undefined && output.treeId !== null) {
        contents.treeId = output.treeId;
    }
    return contents;
};
const deserializeAws_json1_1MergeHunk = (output, context) => {
    let contents = {
        __type: "MergeHunk",
        base: undefined,
        destination: undefined,
        isConflict: undefined,
        source: undefined
    };
    if (output.base !== undefined && output.base !== null) {
        contents.base = deserializeAws_json1_1MergeHunkDetail(output.base, context);
    }
    if (output.destination !== undefined && output.destination !== null) {
        contents.destination = deserializeAws_json1_1MergeHunkDetail(output.destination, context);
    }
    if (output.isConflict !== undefined && output.isConflict !== null) {
        contents.isConflict = output.isConflict;
    }
    if (output.source !== undefined && output.source !== null) {
        contents.source = deserializeAws_json1_1MergeHunkDetail(output.source, context);
    }
    return contents;
};
const deserializeAws_json1_1MergeHunkDetail = (output, context) => {
    let contents = {
        __type: "MergeHunkDetail",
        endLine: undefined,
        hunkContent: undefined,
        startLine: undefined
    };
    if (output.endLine !== undefined && output.endLine !== null) {
        contents.endLine = output.endLine;
    }
    if (output.hunkContent !== undefined && output.hunkContent !== null) {
        contents.hunkContent = output.hunkContent;
    }
    if (output.startLine !== undefined && output.startLine !== null) {
        contents.startLine = output.startLine;
    }
    return contents;
};
const deserializeAws_json1_1MergeHunks = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MergeHunk(entry, context));
};
const deserializeAws_json1_1MergeMetadata = (output, context) => {
    let contents = {
        __type: "MergeMetadata",
        isMerged: undefined,
        mergeCommitId: undefined,
        mergeOption: undefined,
        mergedBy: undefined
    };
    if (output.isMerged !== undefined && output.isMerged !== null) {
        contents.isMerged = output.isMerged;
    }
    if (output.mergeCommitId !== undefined && output.mergeCommitId !== null) {
        contents.mergeCommitId = output.mergeCommitId;
    }
    if (output.mergeOption !== undefined && output.mergeOption !== null) {
        contents.mergeOption = output.mergeOption;
    }
    if (output.mergedBy !== undefined && output.mergedBy !== null) {
        contents.mergedBy = output.mergedBy;
    }
    return contents;
};
const deserializeAws_json1_1MergeOperations = (output, context) => {
    let contents = {
        __type: "MergeOperations",
        destination: undefined,
        source: undefined
    };
    if (output.destination !== undefined && output.destination !== null) {
        contents.destination = output.destination;
    }
    if (output.source !== undefined && output.source !== null) {
        contents.source = output.source;
    }
    return contents;
};
const deserializeAws_json1_1MergeOptionRequiredException = (output, context) => {
    let contents = {
        __type: "MergeOptionRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MergeOptions = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1MergePullRequestByFastForwardOutput = (output, context) => {
    let contents = {
        __type: "MergePullRequestByFastForwardOutput",
        pullRequest: undefined
    };
    if (output.pullRequest !== undefined && output.pullRequest !== null) {
        contents.pullRequest = deserializeAws_json1_1PullRequest(output.pullRequest, context);
    }
    return contents;
};
const deserializeAws_json1_1MergePullRequestBySquashOutput = (output, context) => {
    let contents = {
        __type: "MergePullRequestBySquashOutput",
        pullRequest: undefined
    };
    if (output.pullRequest !== undefined && output.pullRequest !== null) {
        contents.pullRequest = deserializeAws_json1_1PullRequest(output.pullRequest, context);
    }
    return contents;
};
const deserializeAws_json1_1MergePullRequestByThreeWayOutput = (output, context) => {
    let contents = {
        __type: "MergePullRequestByThreeWayOutput",
        pullRequest: undefined
    };
    if (output.pullRequest !== undefined && output.pullRequest !== null) {
        contents.pullRequest = deserializeAws_json1_1PullRequest(output.pullRequest, context);
    }
    return contents;
};
const deserializeAws_json1_1MultipleConflictResolutionEntriesException = (output, context) => {
    let contents = {
        __type: "MultipleConflictResolutionEntriesException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MultipleRepositoriesInPullRequestException = (output, context) => {
    let contents = {
        __type: "MultipleRepositoriesInPullRequestException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NameLengthExceededException = (output, context) => {
    let contents = {
        __type: "NameLengthExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoChangeException = (output, context) => {
    let contents = {
        __type: "NoChangeException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NumberOfRuleTemplatesExceededException = (output, context) => {
    let contents = {
        __type: "NumberOfRuleTemplatesExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NumberOfRulesExceededException = (output, context) => {
    let contents = {
        __type: "NumberOfRulesExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ObjectTypes = (output, context) => {
    let contents = {
        __type: "ObjectTypes",
        base: undefined,
        destination: undefined,
        source: undefined
    };
    if (output.base !== undefined && output.base !== null) {
        contents.base = output.base;
    }
    if (output.destination !== undefined && output.destination !== null) {
        contents.destination = output.destination;
    }
    if (output.source !== undefined && output.source !== null) {
        contents.source = output.source;
    }
    return contents;
};
const deserializeAws_json1_1OriginApprovalRuleTemplate = (output, context) => {
    let contents = {
        __type: "OriginApprovalRuleTemplate",
        approvalRuleTemplateId: undefined,
        approvalRuleTemplateName: undefined
    };
    if (output.approvalRuleTemplateId !== undefined &&
        output.approvalRuleTemplateId !== null) {
        contents.approvalRuleTemplateId = output.approvalRuleTemplateId;
    }
    if (output.approvalRuleTemplateName !== undefined &&
        output.approvalRuleTemplateName !== null) {
        contents.approvalRuleTemplateName = output.approvalRuleTemplateName;
    }
    return contents;
};
const deserializeAws_json1_1OverrideAlreadySetException = (output, context) => {
    let contents = {
        __type: "OverrideAlreadySetException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1OverrideStatusRequiredException = (output, context) => {
    let contents = {
        __type: "OverrideStatusRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ParentCommitDoesNotExistException = (output, context) => {
    let contents = {
        __type: "ParentCommitDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ParentCommitIdOutdatedException = (output, context) => {
    let contents = {
        __type: "ParentCommitIdOutdatedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ParentCommitIdRequiredException = (output, context) => {
    let contents = {
        __type: "ParentCommitIdRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ParentList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1PathDoesNotExistException = (output, context) => {
    let contents = {
        __type: "PathDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PathRequiredException = (output, context) => {
    let contents = {
        __type: "PathRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PostCommentForComparedCommitOutput = (output, context) => {
    let contents = {
        __type: "PostCommentForComparedCommitOutput",
        afterBlobId: undefined,
        afterCommitId: undefined,
        beforeBlobId: undefined,
        beforeCommitId: undefined,
        comment: undefined,
        location: undefined,
        repositoryName: undefined
    };
    if (output.afterBlobId !== undefined && output.afterBlobId !== null) {
        contents.afterBlobId = output.afterBlobId;
    }
    if (output.afterCommitId !== undefined && output.afterCommitId !== null) {
        contents.afterCommitId = output.afterCommitId;
    }
    if (output.beforeBlobId !== undefined && output.beforeBlobId !== null) {
        contents.beforeBlobId = output.beforeBlobId;
    }
    if (output.beforeCommitId !== undefined && output.beforeCommitId !== null) {
        contents.beforeCommitId = output.beforeCommitId;
    }
    if (output.comment !== undefined && output.comment !== null) {
        contents.comment = deserializeAws_json1_1Comment(output.comment, context);
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1Location(output.location, context);
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1PostCommentForPullRequestOutput = (output, context) => {
    let contents = {
        __type: "PostCommentForPullRequestOutput",
        afterBlobId: undefined,
        afterCommitId: undefined,
        beforeBlobId: undefined,
        beforeCommitId: undefined,
        comment: undefined,
        location: undefined,
        pullRequestId: undefined,
        repositoryName: undefined
    };
    if (output.afterBlobId !== undefined && output.afterBlobId !== null) {
        contents.afterBlobId = output.afterBlobId;
    }
    if (output.afterCommitId !== undefined && output.afterCommitId !== null) {
        contents.afterCommitId = output.afterCommitId;
    }
    if (output.beforeBlobId !== undefined && output.beforeBlobId !== null) {
        contents.beforeBlobId = output.beforeBlobId;
    }
    if (output.beforeCommitId !== undefined && output.beforeCommitId !== null) {
        contents.beforeCommitId = output.beforeCommitId;
    }
    if (output.comment !== undefined && output.comment !== null) {
        contents.comment = deserializeAws_json1_1Comment(output.comment, context);
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1Location(output.location, context);
    }
    if (output.pullRequestId !== undefined && output.pullRequestId !== null) {
        contents.pullRequestId = output.pullRequestId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1PostCommentReplyOutput = (output, context) => {
    let contents = {
        __type: "PostCommentReplyOutput",
        comment: undefined
    };
    if (output.comment !== undefined && output.comment !== null) {
        contents.comment = deserializeAws_json1_1Comment(output.comment, context);
    }
    return contents;
};
const deserializeAws_json1_1PullRequest = (output, context) => {
    let contents = {
        __type: "PullRequest",
        approvalRules: undefined,
        authorArn: undefined,
        clientRequestToken: undefined,
        creationDate: undefined,
        description: undefined,
        lastActivityDate: undefined,
        pullRequestId: undefined,
        pullRequestStatus: undefined,
        pullRequestTargets: undefined,
        revisionId: undefined,
        title: undefined
    };
    if (output.approvalRules !== undefined && output.approvalRules !== null) {
        contents.approvalRules = deserializeAws_json1_1ApprovalRulesList(output.approvalRules, context);
    }
    if (output.authorArn !== undefined && output.authorArn !== null) {
        contents.authorArn = output.authorArn;
    }
    if (output.clientRequestToken !== undefined &&
        output.clientRequestToken !== null) {
        contents.clientRequestToken = output.clientRequestToken;
    }
    if (output.creationDate !== undefined && output.creationDate !== null) {
        contents.creationDate = new Date(Math.round(output.creationDate * 1000));
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.lastActivityDate !== undefined &&
        output.lastActivityDate !== null) {
        contents.lastActivityDate = new Date(Math.round(output.lastActivityDate * 1000));
    }
    if (output.pullRequestId !== undefined && output.pullRequestId !== null) {
        contents.pullRequestId = output.pullRequestId;
    }
    if (output.pullRequestStatus !== undefined &&
        output.pullRequestStatus !== null) {
        contents.pullRequestStatus = output.pullRequestStatus;
    }
    if (output.pullRequestTargets !== undefined &&
        output.pullRequestTargets !== null) {
        contents.pullRequestTargets = deserializeAws_json1_1PullRequestTargetList(output.pullRequestTargets, context);
    }
    if (output.revisionId !== undefined && output.revisionId !== null) {
        contents.revisionId = output.revisionId;
    }
    if (output.title !== undefined && output.title !== null) {
        contents.title = output.title;
    }
    return contents;
};
const deserializeAws_json1_1PullRequestAlreadyClosedException = (output, context) => {
    let contents = {
        __type: "PullRequestAlreadyClosedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedException = (output, context) => {
    let contents = {
        __type: "PullRequestApprovalRulesNotSatisfiedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorException = (output, context) => {
    let contents = {
        __type: "PullRequestCannotBeApprovedByAuthorException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PullRequestCreatedEventMetadata = (output, context) => {
    let contents = {
        __type: "PullRequestCreatedEventMetadata",
        destinationCommitId: undefined,
        mergeBase: undefined,
        repositoryName: undefined,
        sourceCommitId: undefined
    };
    if (output.destinationCommitId !== undefined &&
        output.destinationCommitId !== null) {
        contents.destinationCommitId = output.destinationCommitId;
    }
    if (output.mergeBase !== undefined && output.mergeBase !== null) {
        contents.mergeBase = output.mergeBase;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    if (output.sourceCommitId !== undefined && output.sourceCommitId !== null) {
        contents.sourceCommitId = output.sourceCommitId;
    }
    return contents;
};
const deserializeAws_json1_1PullRequestDoesNotExistException = (output, context) => {
    let contents = {
        __type: "PullRequestDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PullRequestEvent = (output, context) => {
    let contents = {
        __type: "PullRequestEvent",
        actorArn: undefined,
        approvalRuleEventMetadata: undefined,
        approvalRuleOverriddenEventMetadata: undefined,
        approvalStateChangedEventMetadata: undefined,
        eventDate: undefined,
        pullRequestCreatedEventMetadata: undefined,
        pullRequestEventType: undefined,
        pullRequestId: undefined,
        pullRequestMergedStateChangedEventMetadata: undefined,
        pullRequestSourceReferenceUpdatedEventMetadata: undefined,
        pullRequestStatusChangedEventMetadata: undefined
    };
    if (output.actorArn !== undefined && output.actorArn !== null) {
        contents.actorArn = output.actorArn;
    }
    if (output.approvalRuleEventMetadata !== undefined &&
        output.approvalRuleEventMetadata !== null) {
        contents.approvalRuleEventMetadata = deserializeAws_json1_1ApprovalRuleEventMetadata(output.approvalRuleEventMetadata, context);
    }
    if (output.approvalRuleOverriddenEventMetadata !== undefined &&
        output.approvalRuleOverriddenEventMetadata !== null) {
        contents.approvalRuleOverriddenEventMetadata = deserializeAws_json1_1ApprovalRuleOverriddenEventMetadata(output.approvalRuleOverriddenEventMetadata, context);
    }
    if (output.approvalStateChangedEventMetadata !== undefined &&
        output.approvalStateChangedEventMetadata !== null) {
        contents.approvalStateChangedEventMetadata = deserializeAws_json1_1ApprovalStateChangedEventMetadata(output.approvalStateChangedEventMetadata, context);
    }
    if (output.eventDate !== undefined && output.eventDate !== null) {
        contents.eventDate = new Date(Math.round(output.eventDate * 1000));
    }
    if (output.pullRequestCreatedEventMetadata !== undefined &&
        output.pullRequestCreatedEventMetadata !== null) {
        contents.pullRequestCreatedEventMetadata = deserializeAws_json1_1PullRequestCreatedEventMetadata(output.pullRequestCreatedEventMetadata, context);
    }
    if (output.pullRequestEventType !== undefined &&
        output.pullRequestEventType !== null) {
        contents.pullRequestEventType = output.pullRequestEventType;
    }
    if (output.pullRequestId !== undefined && output.pullRequestId !== null) {
        contents.pullRequestId = output.pullRequestId;
    }
    if (output.pullRequestMergedStateChangedEventMetadata !== undefined &&
        output.pullRequestMergedStateChangedEventMetadata !== null) {
        contents.pullRequestMergedStateChangedEventMetadata = deserializeAws_json1_1PullRequestMergedStateChangedEventMetadata(output.pullRequestMergedStateChangedEventMetadata, context);
    }
    if (output.pullRequestSourceReferenceUpdatedEventMetadata !== undefined &&
        output.pullRequestSourceReferenceUpdatedEventMetadata !== null) {
        contents.pullRequestSourceReferenceUpdatedEventMetadata = deserializeAws_json1_1PullRequestSourceReferenceUpdatedEventMetadata(output.pullRequestSourceReferenceUpdatedEventMetadata, context);
    }
    if (output.pullRequestStatusChangedEventMetadata !== undefined &&
        output.pullRequestStatusChangedEventMetadata !== null) {
        contents.pullRequestStatusChangedEventMetadata = deserializeAws_json1_1PullRequestStatusChangedEventMetadata(output.pullRequestStatusChangedEventMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1PullRequestEventList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PullRequestEvent(entry, context));
};
const deserializeAws_json1_1PullRequestIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1PullRequestIdRequiredException = (output, context) => {
    let contents = {
        __type: "PullRequestIdRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PullRequestMergedStateChangedEventMetadata = (output, context) => {
    let contents = {
        __type: "PullRequestMergedStateChangedEventMetadata",
        destinationReference: undefined,
        mergeMetadata: undefined,
        repositoryName: undefined
    };
    if (output.destinationReference !== undefined &&
        output.destinationReference !== null) {
        contents.destinationReference = output.destinationReference;
    }
    if (output.mergeMetadata !== undefined && output.mergeMetadata !== null) {
        contents.mergeMetadata = deserializeAws_json1_1MergeMetadata(output.mergeMetadata, context);
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1PullRequestSourceReferenceUpdatedEventMetadata = (output, context) => {
    let contents = {
        __type: "PullRequestSourceReferenceUpdatedEventMetadata",
        afterCommitId: undefined,
        beforeCommitId: undefined,
        mergeBase: undefined,
        repositoryName: undefined
    };
    if (output.afterCommitId !== undefined && output.afterCommitId !== null) {
        contents.afterCommitId = output.afterCommitId;
    }
    if (output.beforeCommitId !== undefined && output.beforeCommitId !== null) {
        contents.beforeCommitId = output.beforeCommitId;
    }
    if (output.mergeBase !== undefined && output.mergeBase !== null) {
        contents.mergeBase = output.mergeBase;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1PullRequestStatusChangedEventMetadata = (output, context) => {
    let contents = {
        __type: "PullRequestStatusChangedEventMetadata",
        pullRequestStatus: undefined
    };
    if (output.pullRequestStatus !== undefined &&
        output.pullRequestStatus !== null) {
        contents.pullRequestStatus = output.pullRequestStatus;
    }
    return contents;
};
const deserializeAws_json1_1PullRequestStatusRequiredException = (output, context) => {
    let contents = {
        __type: "PullRequestStatusRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PullRequestTarget = (output, context) => {
    let contents = {
        __type: "PullRequestTarget",
        destinationCommit: undefined,
        destinationReference: undefined,
        mergeBase: undefined,
        mergeMetadata: undefined,
        repositoryName: undefined,
        sourceCommit: undefined,
        sourceReference: undefined
    };
    if (output.destinationCommit !== undefined &&
        output.destinationCommit !== null) {
        contents.destinationCommit = output.destinationCommit;
    }
    if (output.destinationReference !== undefined &&
        output.destinationReference !== null) {
        contents.destinationReference = output.destinationReference;
    }
    if (output.mergeBase !== undefined && output.mergeBase !== null) {
        contents.mergeBase = output.mergeBase;
    }
    if (output.mergeMetadata !== undefined && output.mergeMetadata !== null) {
        contents.mergeMetadata = deserializeAws_json1_1MergeMetadata(output.mergeMetadata, context);
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    if (output.sourceCommit !== undefined && output.sourceCommit !== null) {
        contents.sourceCommit = output.sourceCommit;
    }
    if (output.sourceReference !== undefined && output.sourceReference !== null) {
        contents.sourceReference = output.sourceReference;
    }
    return contents;
};
const deserializeAws_json1_1PullRequestTargetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PullRequestTarget(entry, context));
};
const deserializeAws_json1_1PutFileEntryConflictException = (output, context) => {
    let contents = {
        __type: "PutFileEntryConflictException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PutFileOutput = (output, context) => {
    let contents = {
        __type: "PutFileOutput",
        blobId: undefined,
        commitId: undefined,
        treeId: undefined
    };
    if (output.blobId !== undefined && output.blobId !== null) {
        contents.blobId = output.blobId;
    }
    if (output.commitId !== undefined && output.commitId !== null) {
        contents.commitId = output.commitId;
    }
    if (output.treeId !== undefined && output.treeId !== null) {
        contents.treeId = output.treeId;
    }
    return contents;
};
const deserializeAws_json1_1PutRepositoryTriggersOutput = (output, context) => {
    let contents = {
        __type: "PutRepositoryTriggersOutput",
        configurationId: undefined
    };
    if (output.configurationId !== undefined && output.configurationId !== null) {
        contents.configurationId = output.configurationId;
    }
    return contents;
};
const deserializeAws_json1_1ReferenceDoesNotExistException = (output, context) => {
    let contents = {
        __type: "ReferenceDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ReferenceNameRequiredException = (output, context) => {
    let contents = {
        __type: "ReferenceNameRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ReferenceTypeNotSupportedException = (output, context) => {
    let contents = {
        __type: "ReferenceTypeNotSupportedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ReplacementContentRequiredException = (output, context) => {
    let contents = {
        __type: "ReplacementContentRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ReplacementTypeRequiredException = (output, context) => {
    let contents = {
        __type: "ReplacementTypeRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryDoesNotExistException = (output, context) => {
    let contents = {
        __type: "RepositoryDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryLimitExceededException = (output, context) => {
    let contents = {
        __type: "RepositoryLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryMetadata = (output, context) => {
    let contents = {
        __type: "RepositoryMetadata",
        Arn: undefined,
        accountId: undefined,
        cloneUrlHttp: undefined,
        cloneUrlSsh: undefined,
        creationDate: undefined,
        defaultBranch: undefined,
        lastModifiedDate: undefined,
        repositoryDescription: undefined,
        repositoryId: undefined,
        repositoryName: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.accountId !== undefined && output.accountId !== null) {
        contents.accountId = output.accountId;
    }
    if (output.cloneUrlHttp !== undefined && output.cloneUrlHttp !== null) {
        contents.cloneUrlHttp = output.cloneUrlHttp;
    }
    if (output.cloneUrlSsh !== undefined && output.cloneUrlSsh !== null) {
        contents.cloneUrlSsh = output.cloneUrlSsh;
    }
    if (output.creationDate !== undefined && output.creationDate !== null) {
        contents.creationDate = new Date(Math.round(output.creationDate * 1000));
    }
    if (output.defaultBranch !== undefined && output.defaultBranch !== null) {
        contents.defaultBranch = output.defaultBranch;
    }
    if (output.lastModifiedDate !== undefined &&
        output.lastModifiedDate !== null) {
        contents.lastModifiedDate = new Date(Math.round(output.lastModifiedDate * 1000));
    }
    if (output.repositoryDescription !== undefined &&
        output.repositoryDescription !== null) {
        contents.repositoryDescription = output.repositoryDescription;
    }
    if (output.repositoryId !== undefined && output.repositoryId !== null) {
        contents.repositoryId = output.repositoryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryMetadataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RepositoryMetadata(entry, context));
};
const deserializeAws_json1_1RepositoryNameExistsException = (output, context) => {
    let contents = {
        __type: "RepositoryNameExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryNameIdPair = (output, context) => {
    let contents = {
        __type: "RepositoryNameIdPair",
        repositoryId: undefined,
        repositoryName: undefined
    };
    if (output.repositoryId !== undefined && output.repositoryId !== null) {
        contents.repositoryId = output.repositoryId;
    }
    if (output.repositoryName !== undefined && output.repositoryName !== null) {
        contents.repositoryName = output.repositoryName;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryNameIdPairList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RepositoryNameIdPair(entry, context));
};
const deserializeAws_json1_1RepositoryNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1RepositoryNameRequiredException = (output, context) => {
    let contents = {
        __type: "RepositoryNameRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryNamesRequiredException = (output, context) => {
    let contents = {
        __type: "RepositoryNamesRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestException = (output, context) => {
    let contents = {
        __type: "RepositoryNotAssociatedWithPullRequestException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryNotFoundList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1RepositoryTrigger = (output, context) => {
    let contents = {
        __type: "RepositoryTrigger",
        branches: undefined,
        customData: undefined,
        destinationArn: undefined,
        events: undefined,
        name: undefined
    };
    if (output.branches !== undefined && output.branches !== null) {
        contents.branches = deserializeAws_json1_1BranchNameList(output.branches, context);
    }
    if (output.customData !== undefined && output.customData !== null) {
        contents.customData = output.customData;
    }
    if (output.destinationArn !== undefined && output.destinationArn !== null) {
        contents.destinationArn = output.destinationArn;
    }
    if (output.events !== undefined && output.events !== null) {
        contents.events = deserializeAws_json1_1RepositoryTriggerEventList(output.events, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredException = (output, context) => {
    let contents = {
        __type: "RepositoryTriggerBranchNameListRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredException = (output, context) => {
    let contents = {
        __type: "RepositoryTriggerDestinationArnRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryTriggerEventList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1RepositoryTriggerEventsListRequiredException = (output, context) => {
    let contents = {
        __type: "RepositoryTriggerEventsListRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryTriggerExecutionFailure = (output, context) => {
    let contents = {
        __type: "RepositoryTriggerExecutionFailure",
        failureMessage: undefined,
        trigger: undefined
    };
    if (output.failureMessage !== undefined && output.failureMessage !== null) {
        contents.failureMessage = output.failureMessage;
    }
    if (output.trigger !== undefined && output.trigger !== null) {
        contents.trigger = output.trigger;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryTriggerExecutionFailureList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RepositoryTriggerExecutionFailure(entry, context));
};
const deserializeAws_json1_1RepositoryTriggerNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1RepositoryTriggerNameRequiredException = (output, context) => {
    let contents = {
        __type: "RepositoryTriggerNameRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RepositoryTriggersList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RepositoryTrigger(entry, context));
};
const deserializeAws_json1_1RepositoryTriggersListRequiredException = (output, context) => {
    let contents = {
        __type: "RepositoryTriggersListRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceArnRequiredException = (output, context) => {
    let contents = {
        __type: "ResourceArnRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RestrictedSourceFileException = (output, context) => {
    let contents = {
        __type: "RestrictedSourceFileException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RevisionIdRequiredException = (output, context) => {
    let contents = {
        __type: "RevisionIdRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RevisionNotCurrentException = (output, context) => {
    let contents = {
        __type: "RevisionNotCurrentException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SameFileContentException = (output, context) => {
    let contents = {
        __type: "SameFileContentException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SamePathRequestException = (output, context) => {
    let contents = {
        __type: "SamePathRequestException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SourceAndDestinationAreSameException = (output, context) => {
    let contents = {
        __type: "SourceAndDestinationAreSameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SourceFileOrContentRequiredException = (output, context) => {
    let contents = {
        __type: "SourceFileOrContentRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1SubModule = (output, context) => {
    let contents = {
        __type: "SubModule",
        absolutePath: undefined,
        commitId: undefined,
        relativePath: undefined
    };
    if (output.absolutePath !== undefined && output.absolutePath !== null) {
        contents.absolutePath = output.absolutePath;
    }
    if (output.commitId !== undefined && output.commitId !== null) {
        contents.commitId = output.commitId;
    }
    if (output.relativePath !== undefined && output.relativePath !== null) {
        contents.relativePath = output.relativePath;
    }
    return contents;
};
const deserializeAws_json1_1SubModuleList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SubModule(entry, context));
};
const deserializeAws_json1_1SymbolicLink = (output, context) => {
    let contents = {
        __type: "SymbolicLink",
        absolutePath: undefined,
        blobId: undefined,
        fileMode: undefined,
        relativePath: undefined
    };
    if (output.absolutePath !== undefined && output.absolutePath !== null) {
        contents.absolutePath = output.absolutePath;
    }
    if (output.blobId !== undefined && output.blobId !== null) {
        contents.blobId = output.blobId;
    }
    if (output.fileMode !== undefined && output.fileMode !== null) {
        contents.fileMode = output.fileMode;
    }
    if (output.relativePath !== undefined && output.relativePath !== null) {
        contents.relativePath = output.relativePath;
    }
    return contents;
};
const deserializeAws_json1_1SymbolicLinkList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SymbolicLink(entry, context));
};
const deserializeAws_json1_1TagKeysListRequiredException = (output, context) => {
    let contents = {
        __type: "TagKeysListRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TagPolicyException = (output, context) => {
    let contents = {
        __type: "TagPolicyException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TagsMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1TagsMapRequiredException = (output, context) => {
    let contents = {
        __type: "TagsMapRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TargetRequiredException = (output, context) => {
    let contents = {
        __type: "TargetRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TargetsRequiredException = (output, context) => {
    let contents = {
        __type: "TargetsRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TestRepositoryTriggersOutput = (output, context) => {
    let contents = {
        __type: "TestRepositoryTriggersOutput",
        failedExecutions: undefined,
        successfulExecutions: undefined
    };
    if (output.failedExecutions !== undefined &&
        output.failedExecutions !== null) {
        contents.failedExecutions = deserializeAws_json1_1RepositoryTriggerExecutionFailureList(output.failedExecutions, context);
    }
    if (output.successfulExecutions !== undefined &&
        output.successfulExecutions !== null) {
        contents.successfulExecutions = deserializeAws_json1_1RepositoryTriggerNameList(output.successfulExecutions, context);
    }
    return contents;
};
const deserializeAws_json1_1TipOfSourceReferenceIsDifferentException = (output, context) => {
    let contents = {
        __type: "TipOfSourceReferenceIsDifferentException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TipsDivergenceExceededException = (output, context) => {
    let contents = {
        __type: "TipsDivergenceExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TitleRequiredException = (output, context) => {
    let contents = {
        __type: "TitleRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    let contents = {
        __type: "TooManyTagsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UpdateApprovalRuleTemplateContentOutput = (output, context) => {
    let contents = {
        __type: "UpdateApprovalRuleTemplateContentOutput",
        approvalRuleTemplate: undefined
    };
    if (output.approvalRuleTemplate !== undefined &&
        output.approvalRuleTemplate !== null) {
        contents.approvalRuleTemplate = deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionOutput = (output, context) => {
    let contents = {
        __type: "UpdateApprovalRuleTemplateDescriptionOutput",
        approvalRuleTemplate: undefined
    };
    if (output.approvalRuleTemplate !== undefined &&
        output.approvalRuleTemplate !== null) {
        contents.approvalRuleTemplate = deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateApprovalRuleTemplateNameOutput = (output, context) => {
    let contents = {
        __type: "UpdateApprovalRuleTemplateNameOutput",
        approvalRuleTemplate: undefined
    };
    if (output.approvalRuleTemplate !== undefined &&
        output.approvalRuleTemplate !== null) {
        contents.approvalRuleTemplate = deserializeAws_json1_1ApprovalRuleTemplate(output.approvalRuleTemplate, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateCommentOutput = (output, context) => {
    let contents = {
        __type: "UpdateCommentOutput",
        comment: undefined
    };
    if (output.comment !== undefined && output.comment !== null) {
        contents.comment = deserializeAws_json1_1Comment(output.comment, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdatePullRequestApprovalRuleContentOutput = (output, context) => {
    let contents = {
        __type: "UpdatePullRequestApprovalRuleContentOutput",
        approvalRule: undefined
    };
    if (output.approvalRule !== undefined && output.approvalRule !== null) {
        contents.approvalRule = deserializeAws_json1_1ApprovalRule(output.approvalRule, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdatePullRequestDescriptionOutput = (output, context) => {
    let contents = {
        __type: "UpdatePullRequestDescriptionOutput",
        pullRequest: undefined
    };
    if (output.pullRequest !== undefined && output.pullRequest !== null) {
        contents.pullRequest = deserializeAws_json1_1PullRequest(output.pullRequest, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdatePullRequestStatusOutput = (output, context) => {
    let contents = {
        __type: "UpdatePullRequestStatusOutput",
        pullRequest: undefined
    };
    if (output.pullRequest !== undefined && output.pullRequest !== null) {
        contents.pullRequest = deserializeAws_json1_1PullRequest(output.pullRequest, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdatePullRequestTitleOutput = (output, context) => {
    let contents = {
        __type: "UpdatePullRequestTitleOutput",
        pullRequest: undefined
    };
    if (output.pullRequest !== undefined && output.pullRequest !== null) {
        contents.pullRequest = deserializeAws_json1_1PullRequest(output.pullRequest, context);
    }
    return contents;
};
const deserializeAws_json1_1UserInfo = (output, context) => {
    let contents = {
        __type: "UserInfo",
        date: undefined,
        email: undefined,
        name: undefined
    };
    if (output.date !== undefined && output.date !== null) {
        contents.date = output.date;
    }
    if (output.email !== undefined && output.email !== null) {
        contents.email = output.email;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    httpHeaders: output.headers,
    requestId: output.headers["x-amzn-requestid"]
});
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody, context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return (context.streamCollector(streamBody) || Promise.resolve(new Uint8Array()));
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => {
    return collectBody(streamBody, context).then(body => context.utf8Encoder(body));
};
const buildHttpRpcRequest = (context, headers, path, resolvedHostname, body) => {
    const contents = Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", path: path, headers: headers });
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
//# sourceMappingURL=Aws_json1_1.js.map
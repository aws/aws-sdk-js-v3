"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ActorDoesNotExistException;
(function (ActorDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActorDoesNotExistException");
    }
    ActorDoesNotExistException.isa = isa;
})(ActorDoesNotExistException = exports.ActorDoesNotExistException || (exports.ActorDoesNotExistException = {}));
var Approval;
(function (Approval) {
    function isa(o) {
        return smithy_client_1.isa(o, "Approval");
    }
    Approval.isa = isa;
})(Approval = exports.Approval || (exports.Approval = {}));
var ApprovalRule;
(function (ApprovalRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalRule");
    }
    ApprovalRule.isa = isa;
})(ApprovalRule = exports.ApprovalRule || (exports.ApprovalRule = {}));
var ApprovalRuleContentRequiredException;
(function (ApprovalRuleContentRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalRuleContentRequiredException");
    }
    ApprovalRuleContentRequiredException.isa = isa;
})(ApprovalRuleContentRequiredException = exports.ApprovalRuleContentRequiredException || (exports.ApprovalRuleContentRequiredException = {}));
var ApprovalRuleDoesNotExistException;
(function (ApprovalRuleDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalRuleDoesNotExistException");
    }
    ApprovalRuleDoesNotExistException.isa = isa;
})(ApprovalRuleDoesNotExistException = exports.ApprovalRuleDoesNotExistException || (exports.ApprovalRuleDoesNotExistException = {}));
var ApprovalRuleEventMetadata;
(function (ApprovalRuleEventMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalRuleEventMetadata");
    }
    ApprovalRuleEventMetadata.isa = isa;
})(ApprovalRuleEventMetadata = exports.ApprovalRuleEventMetadata || (exports.ApprovalRuleEventMetadata = {}));
var ApprovalRuleNameAlreadyExistsException;
(function (ApprovalRuleNameAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalRuleNameAlreadyExistsException");
    }
    ApprovalRuleNameAlreadyExistsException.isa = isa;
})(ApprovalRuleNameAlreadyExistsException = exports.ApprovalRuleNameAlreadyExistsException || (exports.ApprovalRuleNameAlreadyExistsException = {}));
var ApprovalRuleNameRequiredException;
(function (ApprovalRuleNameRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalRuleNameRequiredException");
    }
    ApprovalRuleNameRequiredException.isa = isa;
})(ApprovalRuleNameRequiredException = exports.ApprovalRuleNameRequiredException || (exports.ApprovalRuleNameRequiredException = {}));
var ApprovalRuleOverriddenEventMetadata;
(function (ApprovalRuleOverriddenEventMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalRuleOverriddenEventMetadata");
    }
    ApprovalRuleOverriddenEventMetadata.isa = isa;
})(ApprovalRuleOverriddenEventMetadata = exports.ApprovalRuleOverriddenEventMetadata || (exports.ApprovalRuleOverriddenEventMetadata = {}));
var ApprovalRuleTemplate;
(function (ApprovalRuleTemplate) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalRuleTemplate");
    }
    ApprovalRuleTemplate.isa = isa;
})(ApprovalRuleTemplate = exports.ApprovalRuleTemplate || (exports.ApprovalRuleTemplate = {}));
var ApprovalRuleTemplateContentRequiredException;
(function (ApprovalRuleTemplateContentRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalRuleTemplateContentRequiredException");
    }
    ApprovalRuleTemplateContentRequiredException.isa = isa;
})(ApprovalRuleTemplateContentRequiredException = exports.ApprovalRuleTemplateContentRequiredException || (exports.ApprovalRuleTemplateContentRequiredException = {}));
var ApprovalRuleTemplateDoesNotExistException;
(function (ApprovalRuleTemplateDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalRuleTemplateDoesNotExistException");
    }
    ApprovalRuleTemplateDoesNotExistException.isa = isa;
})(ApprovalRuleTemplateDoesNotExistException = exports.ApprovalRuleTemplateDoesNotExistException || (exports.ApprovalRuleTemplateDoesNotExistException = {}));
var ApprovalRuleTemplateInUseException;
(function (ApprovalRuleTemplateInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalRuleTemplateInUseException");
    }
    ApprovalRuleTemplateInUseException.isa = isa;
})(ApprovalRuleTemplateInUseException = exports.ApprovalRuleTemplateInUseException || (exports.ApprovalRuleTemplateInUseException = {}));
var ApprovalRuleTemplateNameAlreadyExistsException;
(function (ApprovalRuleTemplateNameAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalRuleTemplateNameAlreadyExistsException");
    }
    ApprovalRuleTemplateNameAlreadyExistsException.isa = isa;
})(ApprovalRuleTemplateNameAlreadyExistsException = exports.ApprovalRuleTemplateNameAlreadyExistsException || (exports.ApprovalRuleTemplateNameAlreadyExistsException = {}));
var ApprovalRuleTemplateNameRequiredException;
(function (ApprovalRuleTemplateNameRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalRuleTemplateNameRequiredException");
    }
    ApprovalRuleTemplateNameRequiredException.isa = isa;
})(ApprovalRuleTemplateNameRequiredException = exports.ApprovalRuleTemplateNameRequiredException || (exports.ApprovalRuleTemplateNameRequiredException = {}));
var ApprovalState;
(function (ApprovalState) {
    ApprovalState["APPROVE"] = "APPROVE";
    ApprovalState["REVOKE"] = "REVOKE";
})(ApprovalState = exports.ApprovalState || (exports.ApprovalState = {}));
var ApprovalStateChangedEventMetadata;
(function (ApprovalStateChangedEventMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalStateChangedEventMetadata");
    }
    ApprovalStateChangedEventMetadata.isa = isa;
})(ApprovalStateChangedEventMetadata = exports.ApprovalStateChangedEventMetadata || (exports.ApprovalStateChangedEventMetadata = {}));
var ApprovalStateRequiredException;
(function (ApprovalStateRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalStateRequiredException");
    }
    ApprovalStateRequiredException.isa = isa;
})(ApprovalStateRequiredException = exports.ApprovalStateRequiredException || (exports.ApprovalStateRequiredException = {}));
var AssociateApprovalRuleTemplateWithRepositoryInput;
(function (AssociateApprovalRuleTemplateWithRepositoryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateApprovalRuleTemplateWithRepositoryInput");
    }
    AssociateApprovalRuleTemplateWithRepositoryInput.isa = isa;
})(AssociateApprovalRuleTemplateWithRepositoryInput = exports.AssociateApprovalRuleTemplateWithRepositoryInput || (exports.AssociateApprovalRuleTemplateWithRepositoryInput = {}));
var AuthorDoesNotExistException;
(function (AuthorDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AuthorDoesNotExistException");
    }
    AuthorDoesNotExistException.isa = isa;
})(AuthorDoesNotExistException = exports.AuthorDoesNotExistException || (exports.AuthorDoesNotExistException = {}));
var BatchAssociateApprovalRuleTemplateWithRepositoriesError;
(function (BatchAssociateApprovalRuleTemplateWithRepositoriesError) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchAssociateApprovalRuleTemplateWithRepositoriesError");
    }
    BatchAssociateApprovalRuleTemplateWithRepositoriesError.isa = isa;
})(BatchAssociateApprovalRuleTemplateWithRepositoriesError = exports.BatchAssociateApprovalRuleTemplateWithRepositoriesError || (exports.BatchAssociateApprovalRuleTemplateWithRepositoriesError = {}));
var BatchAssociateApprovalRuleTemplateWithRepositoriesInput;
(function (BatchAssociateApprovalRuleTemplateWithRepositoriesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchAssociateApprovalRuleTemplateWithRepositoriesInput");
    }
    BatchAssociateApprovalRuleTemplateWithRepositoriesInput.isa = isa;
})(BatchAssociateApprovalRuleTemplateWithRepositoriesInput = exports.BatchAssociateApprovalRuleTemplateWithRepositoriesInput || (exports.BatchAssociateApprovalRuleTemplateWithRepositoriesInput = {}));
var BatchAssociateApprovalRuleTemplateWithRepositoriesOutput;
(function (BatchAssociateApprovalRuleTemplateWithRepositoriesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchAssociateApprovalRuleTemplateWithRepositoriesOutput");
    }
    BatchAssociateApprovalRuleTemplateWithRepositoriesOutput.isa = isa;
})(BatchAssociateApprovalRuleTemplateWithRepositoriesOutput = exports.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput || (exports.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput = {}));
var BatchDescribeMergeConflictsError;
(function (BatchDescribeMergeConflictsError) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDescribeMergeConflictsError");
    }
    BatchDescribeMergeConflictsError.isa = isa;
})(BatchDescribeMergeConflictsError = exports.BatchDescribeMergeConflictsError || (exports.BatchDescribeMergeConflictsError = {}));
var BatchDescribeMergeConflictsInput;
(function (BatchDescribeMergeConflictsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDescribeMergeConflictsInput");
    }
    BatchDescribeMergeConflictsInput.isa = isa;
})(BatchDescribeMergeConflictsInput = exports.BatchDescribeMergeConflictsInput || (exports.BatchDescribeMergeConflictsInput = {}));
var BatchDescribeMergeConflictsOutput;
(function (BatchDescribeMergeConflictsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDescribeMergeConflictsOutput");
    }
    BatchDescribeMergeConflictsOutput.isa = isa;
})(BatchDescribeMergeConflictsOutput = exports.BatchDescribeMergeConflictsOutput || (exports.BatchDescribeMergeConflictsOutput = {}));
var BatchDisassociateApprovalRuleTemplateFromRepositoriesError;
(function (BatchDisassociateApprovalRuleTemplateFromRepositoriesError) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDisassociateApprovalRuleTemplateFromRepositoriesError");
    }
    BatchDisassociateApprovalRuleTemplateFromRepositoriesError.isa = isa;
})(BatchDisassociateApprovalRuleTemplateFromRepositoriesError = exports.BatchDisassociateApprovalRuleTemplateFromRepositoriesError || (exports.BatchDisassociateApprovalRuleTemplateFromRepositoriesError = {}));
var BatchDisassociateApprovalRuleTemplateFromRepositoriesInput;
(function (BatchDisassociateApprovalRuleTemplateFromRepositoriesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDisassociateApprovalRuleTemplateFromRepositoriesInput");
    }
    BatchDisassociateApprovalRuleTemplateFromRepositoriesInput.isa = isa;
})(BatchDisassociateApprovalRuleTemplateFromRepositoriesInput = exports.BatchDisassociateApprovalRuleTemplateFromRepositoriesInput || (exports.BatchDisassociateApprovalRuleTemplateFromRepositoriesInput = {}));
var BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput;
(function (BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput");
    }
    BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput.isa = isa;
})(BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput = exports.BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput || (exports.BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput = {}));
var BatchGetCommitsError;
(function (BatchGetCommitsError) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetCommitsError");
    }
    BatchGetCommitsError.isa = isa;
})(BatchGetCommitsError = exports.BatchGetCommitsError || (exports.BatchGetCommitsError = {}));
var BatchGetCommitsInput;
(function (BatchGetCommitsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetCommitsInput");
    }
    BatchGetCommitsInput.isa = isa;
})(BatchGetCommitsInput = exports.BatchGetCommitsInput || (exports.BatchGetCommitsInput = {}));
var BatchGetCommitsOutput;
(function (BatchGetCommitsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetCommitsOutput");
    }
    BatchGetCommitsOutput.isa = isa;
})(BatchGetCommitsOutput = exports.BatchGetCommitsOutput || (exports.BatchGetCommitsOutput = {}));
var BatchGetRepositoriesInput;
(function (BatchGetRepositoriesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetRepositoriesInput");
    }
    BatchGetRepositoriesInput.isa = isa;
})(BatchGetRepositoriesInput = exports.BatchGetRepositoriesInput || (exports.BatchGetRepositoriesInput = {}));
var BatchGetRepositoriesOutput;
(function (BatchGetRepositoriesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetRepositoriesOutput");
    }
    BatchGetRepositoriesOutput.isa = isa;
})(BatchGetRepositoriesOutput = exports.BatchGetRepositoriesOutput || (exports.BatchGetRepositoriesOutput = {}));
var BeforeCommitIdAndAfterCommitIdAreSameException;
(function (BeforeCommitIdAndAfterCommitIdAreSameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BeforeCommitIdAndAfterCommitIdAreSameException");
    }
    BeforeCommitIdAndAfterCommitIdAreSameException.isa = isa;
})(BeforeCommitIdAndAfterCommitIdAreSameException = exports.BeforeCommitIdAndAfterCommitIdAreSameException || (exports.BeforeCommitIdAndAfterCommitIdAreSameException = {}));
var BlobIdDoesNotExistException;
(function (BlobIdDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BlobIdDoesNotExistException");
    }
    BlobIdDoesNotExistException.isa = isa;
})(BlobIdDoesNotExistException = exports.BlobIdDoesNotExistException || (exports.BlobIdDoesNotExistException = {}));
var BlobIdRequiredException;
(function (BlobIdRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BlobIdRequiredException");
    }
    BlobIdRequiredException.isa = isa;
})(BlobIdRequiredException = exports.BlobIdRequiredException || (exports.BlobIdRequiredException = {}));
var BlobMetadata;
(function (BlobMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "BlobMetadata");
    }
    BlobMetadata.isa = isa;
})(BlobMetadata = exports.BlobMetadata || (exports.BlobMetadata = {}));
var BranchDoesNotExistException;
(function (BranchDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BranchDoesNotExistException");
    }
    BranchDoesNotExistException.isa = isa;
})(BranchDoesNotExistException = exports.BranchDoesNotExistException || (exports.BranchDoesNotExistException = {}));
var BranchInfo;
(function (BranchInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "BranchInfo");
    }
    BranchInfo.isa = isa;
})(BranchInfo = exports.BranchInfo || (exports.BranchInfo = {}));
var BranchNameExistsException;
(function (BranchNameExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BranchNameExistsException");
    }
    BranchNameExistsException.isa = isa;
})(BranchNameExistsException = exports.BranchNameExistsException || (exports.BranchNameExistsException = {}));
var BranchNameIsTagNameException;
(function (BranchNameIsTagNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BranchNameIsTagNameException");
    }
    BranchNameIsTagNameException.isa = isa;
})(BranchNameIsTagNameException = exports.BranchNameIsTagNameException || (exports.BranchNameIsTagNameException = {}));
var BranchNameRequiredException;
(function (BranchNameRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BranchNameRequiredException");
    }
    BranchNameRequiredException.isa = isa;
})(BranchNameRequiredException = exports.BranchNameRequiredException || (exports.BranchNameRequiredException = {}));
var CannotDeleteApprovalRuleFromTemplateException;
(function (CannotDeleteApprovalRuleFromTemplateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CannotDeleteApprovalRuleFromTemplateException");
    }
    CannotDeleteApprovalRuleFromTemplateException.isa = isa;
})(CannotDeleteApprovalRuleFromTemplateException = exports.CannotDeleteApprovalRuleFromTemplateException || (exports.CannotDeleteApprovalRuleFromTemplateException = {}));
var CannotModifyApprovalRuleFromTemplateException;
(function (CannotModifyApprovalRuleFromTemplateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CannotModifyApprovalRuleFromTemplateException");
    }
    CannotModifyApprovalRuleFromTemplateException.isa = isa;
})(CannotModifyApprovalRuleFromTemplateException = exports.CannotModifyApprovalRuleFromTemplateException || (exports.CannotModifyApprovalRuleFromTemplateException = {}));
var ChangeTypeEnum;
(function (ChangeTypeEnum) {
    ChangeTypeEnum["ADDED"] = "A";
    ChangeTypeEnum["DELETED"] = "D";
    ChangeTypeEnum["MODIFIED"] = "M";
})(ChangeTypeEnum = exports.ChangeTypeEnum || (exports.ChangeTypeEnum = {}));
var ClientRequestTokenRequiredException;
(function (ClientRequestTokenRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClientRequestTokenRequiredException");
    }
    ClientRequestTokenRequiredException.isa = isa;
})(ClientRequestTokenRequiredException = exports.ClientRequestTokenRequiredException || (exports.ClientRequestTokenRequiredException = {}));
var Comment;
(function (Comment) {
    function isa(o) {
        return smithy_client_1.isa(o, "Comment");
    }
    Comment.isa = isa;
})(Comment = exports.Comment || (exports.Comment = {}));
var CommentContentRequiredException;
(function (CommentContentRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommentContentRequiredException");
    }
    CommentContentRequiredException.isa = isa;
})(CommentContentRequiredException = exports.CommentContentRequiredException || (exports.CommentContentRequiredException = {}));
var CommentContentSizeLimitExceededException;
(function (CommentContentSizeLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommentContentSizeLimitExceededException");
    }
    CommentContentSizeLimitExceededException.isa = isa;
})(CommentContentSizeLimitExceededException = exports.CommentContentSizeLimitExceededException || (exports.CommentContentSizeLimitExceededException = {}));
var CommentDeletedException;
(function (CommentDeletedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommentDeletedException");
    }
    CommentDeletedException.isa = isa;
})(CommentDeletedException = exports.CommentDeletedException || (exports.CommentDeletedException = {}));
var CommentDoesNotExistException;
(function (CommentDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommentDoesNotExistException");
    }
    CommentDoesNotExistException.isa = isa;
})(CommentDoesNotExistException = exports.CommentDoesNotExistException || (exports.CommentDoesNotExistException = {}));
var CommentIdRequiredException;
(function (CommentIdRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommentIdRequiredException");
    }
    CommentIdRequiredException.isa = isa;
})(CommentIdRequiredException = exports.CommentIdRequiredException || (exports.CommentIdRequiredException = {}));
var CommentNotCreatedByCallerException;
(function (CommentNotCreatedByCallerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommentNotCreatedByCallerException");
    }
    CommentNotCreatedByCallerException.isa = isa;
})(CommentNotCreatedByCallerException = exports.CommentNotCreatedByCallerException || (exports.CommentNotCreatedByCallerException = {}));
var CommentsForComparedCommit;
(function (CommentsForComparedCommit) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommentsForComparedCommit");
    }
    CommentsForComparedCommit.isa = isa;
})(CommentsForComparedCommit = exports.CommentsForComparedCommit || (exports.CommentsForComparedCommit = {}));
var CommentsForPullRequest;
(function (CommentsForPullRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommentsForPullRequest");
    }
    CommentsForPullRequest.isa = isa;
})(CommentsForPullRequest = exports.CommentsForPullRequest || (exports.CommentsForPullRequest = {}));
var Commit;
(function (Commit) {
    function isa(o) {
        return smithy_client_1.isa(o, "Commit");
    }
    Commit.isa = isa;
})(Commit = exports.Commit || (exports.Commit = {}));
var CommitDoesNotExistException;
(function (CommitDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommitDoesNotExistException");
    }
    CommitDoesNotExistException.isa = isa;
})(CommitDoesNotExistException = exports.CommitDoesNotExistException || (exports.CommitDoesNotExistException = {}));
var CommitIdDoesNotExistException;
(function (CommitIdDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommitIdDoesNotExistException");
    }
    CommitIdDoesNotExistException.isa = isa;
})(CommitIdDoesNotExistException = exports.CommitIdDoesNotExistException || (exports.CommitIdDoesNotExistException = {}));
var CommitIdRequiredException;
(function (CommitIdRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommitIdRequiredException");
    }
    CommitIdRequiredException.isa = isa;
})(CommitIdRequiredException = exports.CommitIdRequiredException || (exports.CommitIdRequiredException = {}));
var CommitIdsLimitExceededException;
(function (CommitIdsLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommitIdsLimitExceededException");
    }
    CommitIdsLimitExceededException.isa = isa;
})(CommitIdsLimitExceededException = exports.CommitIdsLimitExceededException || (exports.CommitIdsLimitExceededException = {}));
var CommitIdsListRequiredException;
(function (CommitIdsListRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommitIdsListRequiredException");
    }
    CommitIdsListRequiredException.isa = isa;
})(CommitIdsListRequiredException = exports.CommitIdsListRequiredException || (exports.CommitIdsListRequiredException = {}));
var CommitMessageLengthExceededException;
(function (CommitMessageLengthExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommitMessageLengthExceededException");
    }
    CommitMessageLengthExceededException.isa = isa;
})(CommitMessageLengthExceededException = exports.CommitMessageLengthExceededException || (exports.CommitMessageLengthExceededException = {}));
var CommitRequiredException;
(function (CommitRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommitRequiredException");
    }
    CommitRequiredException.isa = isa;
})(CommitRequiredException = exports.CommitRequiredException || (exports.CommitRequiredException = {}));
var ConcurrentReferenceUpdateException;
(function (ConcurrentReferenceUpdateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentReferenceUpdateException");
    }
    ConcurrentReferenceUpdateException.isa = isa;
})(ConcurrentReferenceUpdateException = exports.ConcurrentReferenceUpdateException || (exports.ConcurrentReferenceUpdateException = {}));
var Conflict;
(function (Conflict) {
    function isa(o) {
        return smithy_client_1.isa(o, "Conflict");
    }
    Conflict.isa = isa;
})(Conflict = exports.Conflict || (exports.Conflict = {}));
var ConflictDetailLevelTypeEnum;
(function (ConflictDetailLevelTypeEnum) {
    ConflictDetailLevelTypeEnum["FILE_LEVEL"] = "FILE_LEVEL";
    ConflictDetailLevelTypeEnum["LINE_LEVEL"] = "LINE_LEVEL";
})(ConflictDetailLevelTypeEnum = exports.ConflictDetailLevelTypeEnum || (exports.ConflictDetailLevelTypeEnum = {}));
var ConflictMetadata;
(function (ConflictMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConflictMetadata");
    }
    ConflictMetadata.isa = isa;
})(ConflictMetadata = exports.ConflictMetadata || (exports.ConflictMetadata = {}));
var ConflictResolution;
(function (ConflictResolution) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConflictResolution");
    }
    ConflictResolution.isa = isa;
})(ConflictResolution = exports.ConflictResolution || (exports.ConflictResolution = {}));
var ConflictResolutionStrategyTypeEnum;
(function (ConflictResolutionStrategyTypeEnum) {
    ConflictResolutionStrategyTypeEnum["ACCEPT_DESTINATION"] = "ACCEPT_DESTINATION";
    ConflictResolutionStrategyTypeEnum["ACCEPT_SOURCE"] = "ACCEPT_SOURCE";
    ConflictResolutionStrategyTypeEnum["AUTOMERGE"] = "AUTOMERGE";
    ConflictResolutionStrategyTypeEnum["NONE"] = "NONE";
})(ConflictResolutionStrategyTypeEnum = exports.ConflictResolutionStrategyTypeEnum || (exports.ConflictResolutionStrategyTypeEnum = {}));
var CreateApprovalRuleTemplateInput;
(function (CreateApprovalRuleTemplateInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateApprovalRuleTemplateInput");
    }
    CreateApprovalRuleTemplateInput.isa = isa;
})(CreateApprovalRuleTemplateInput = exports.CreateApprovalRuleTemplateInput || (exports.CreateApprovalRuleTemplateInput = {}));
var CreateApprovalRuleTemplateOutput;
(function (CreateApprovalRuleTemplateOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateApprovalRuleTemplateOutput");
    }
    CreateApprovalRuleTemplateOutput.isa = isa;
})(CreateApprovalRuleTemplateOutput = exports.CreateApprovalRuleTemplateOutput || (exports.CreateApprovalRuleTemplateOutput = {}));
var CreateBranchInput;
(function (CreateBranchInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateBranchInput");
    }
    CreateBranchInput.isa = isa;
})(CreateBranchInput = exports.CreateBranchInput || (exports.CreateBranchInput = {}));
var CreateCommitInput;
(function (CreateCommitInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCommitInput");
    }
    CreateCommitInput.isa = isa;
})(CreateCommitInput = exports.CreateCommitInput || (exports.CreateCommitInput = {}));
var CreateCommitOutput;
(function (CreateCommitOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCommitOutput");
    }
    CreateCommitOutput.isa = isa;
})(CreateCommitOutput = exports.CreateCommitOutput || (exports.CreateCommitOutput = {}));
var CreatePullRequestApprovalRuleInput;
(function (CreatePullRequestApprovalRuleInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePullRequestApprovalRuleInput");
    }
    CreatePullRequestApprovalRuleInput.isa = isa;
})(CreatePullRequestApprovalRuleInput = exports.CreatePullRequestApprovalRuleInput || (exports.CreatePullRequestApprovalRuleInput = {}));
var CreatePullRequestApprovalRuleOutput;
(function (CreatePullRequestApprovalRuleOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePullRequestApprovalRuleOutput");
    }
    CreatePullRequestApprovalRuleOutput.isa = isa;
})(CreatePullRequestApprovalRuleOutput = exports.CreatePullRequestApprovalRuleOutput || (exports.CreatePullRequestApprovalRuleOutput = {}));
var CreatePullRequestInput;
(function (CreatePullRequestInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePullRequestInput");
    }
    CreatePullRequestInput.isa = isa;
})(CreatePullRequestInput = exports.CreatePullRequestInput || (exports.CreatePullRequestInput = {}));
var CreatePullRequestOutput;
(function (CreatePullRequestOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePullRequestOutput");
    }
    CreatePullRequestOutput.isa = isa;
})(CreatePullRequestOutput = exports.CreatePullRequestOutput || (exports.CreatePullRequestOutput = {}));
var CreateRepositoryInput;
(function (CreateRepositoryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRepositoryInput");
    }
    CreateRepositoryInput.isa = isa;
})(CreateRepositoryInput = exports.CreateRepositoryInput || (exports.CreateRepositoryInput = {}));
var CreateRepositoryOutput;
(function (CreateRepositoryOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRepositoryOutput");
    }
    CreateRepositoryOutput.isa = isa;
})(CreateRepositoryOutput = exports.CreateRepositoryOutput || (exports.CreateRepositoryOutput = {}));
var CreateUnreferencedMergeCommitInput;
(function (CreateUnreferencedMergeCommitInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUnreferencedMergeCommitInput");
    }
    CreateUnreferencedMergeCommitInput.isa = isa;
})(CreateUnreferencedMergeCommitInput = exports.CreateUnreferencedMergeCommitInput || (exports.CreateUnreferencedMergeCommitInput = {}));
var CreateUnreferencedMergeCommitOutput;
(function (CreateUnreferencedMergeCommitOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUnreferencedMergeCommitOutput");
    }
    CreateUnreferencedMergeCommitOutput.isa = isa;
})(CreateUnreferencedMergeCommitOutput = exports.CreateUnreferencedMergeCommitOutput || (exports.CreateUnreferencedMergeCommitOutput = {}));
var DefaultBranchCannotBeDeletedException;
(function (DefaultBranchCannotBeDeletedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DefaultBranchCannotBeDeletedException");
    }
    DefaultBranchCannotBeDeletedException.isa = isa;
})(DefaultBranchCannotBeDeletedException = exports.DefaultBranchCannotBeDeletedException || (exports.DefaultBranchCannotBeDeletedException = {}));
var DeleteApprovalRuleTemplateInput;
(function (DeleteApprovalRuleTemplateInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApprovalRuleTemplateInput");
    }
    DeleteApprovalRuleTemplateInput.isa = isa;
})(DeleteApprovalRuleTemplateInput = exports.DeleteApprovalRuleTemplateInput || (exports.DeleteApprovalRuleTemplateInput = {}));
var DeleteApprovalRuleTemplateOutput;
(function (DeleteApprovalRuleTemplateOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApprovalRuleTemplateOutput");
    }
    DeleteApprovalRuleTemplateOutput.isa = isa;
})(DeleteApprovalRuleTemplateOutput = exports.DeleteApprovalRuleTemplateOutput || (exports.DeleteApprovalRuleTemplateOutput = {}));
var DeleteBranchInput;
(function (DeleteBranchInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteBranchInput");
    }
    DeleteBranchInput.isa = isa;
})(DeleteBranchInput = exports.DeleteBranchInput || (exports.DeleteBranchInput = {}));
var DeleteBranchOutput;
(function (DeleteBranchOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteBranchOutput");
    }
    DeleteBranchOutput.isa = isa;
})(DeleteBranchOutput = exports.DeleteBranchOutput || (exports.DeleteBranchOutput = {}));
var DeleteCommentContentInput;
(function (DeleteCommentContentInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCommentContentInput");
    }
    DeleteCommentContentInput.isa = isa;
})(DeleteCommentContentInput = exports.DeleteCommentContentInput || (exports.DeleteCommentContentInput = {}));
var DeleteCommentContentOutput;
(function (DeleteCommentContentOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCommentContentOutput");
    }
    DeleteCommentContentOutput.isa = isa;
})(DeleteCommentContentOutput = exports.DeleteCommentContentOutput || (exports.DeleteCommentContentOutput = {}));
var DeleteFileEntry;
(function (DeleteFileEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteFileEntry");
    }
    DeleteFileEntry.isa = isa;
})(DeleteFileEntry = exports.DeleteFileEntry || (exports.DeleteFileEntry = {}));
var DeleteFileInput;
(function (DeleteFileInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteFileInput");
    }
    DeleteFileInput.isa = isa;
})(DeleteFileInput = exports.DeleteFileInput || (exports.DeleteFileInput = {}));
var DeleteFileOutput;
(function (DeleteFileOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteFileOutput");
    }
    DeleteFileOutput.isa = isa;
})(DeleteFileOutput = exports.DeleteFileOutput || (exports.DeleteFileOutput = {}));
var DeletePullRequestApprovalRuleInput;
(function (DeletePullRequestApprovalRuleInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePullRequestApprovalRuleInput");
    }
    DeletePullRequestApprovalRuleInput.isa = isa;
})(DeletePullRequestApprovalRuleInput = exports.DeletePullRequestApprovalRuleInput || (exports.DeletePullRequestApprovalRuleInput = {}));
var DeletePullRequestApprovalRuleOutput;
(function (DeletePullRequestApprovalRuleOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePullRequestApprovalRuleOutput");
    }
    DeletePullRequestApprovalRuleOutput.isa = isa;
})(DeletePullRequestApprovalRuleOutput = exports.DeletePullRequestApprovalRuleOutput || (exports.DeletePullRequestApprovalRuleOutput = {}));
var DeleteRepositoryInput;
(function (DeleteRepositoryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRepositoryInput");
    }
    DeleteRepositoryInput.isa = isa;
})(DeleteRepositoryInput = exports.DeleteRepositoryInput || (exports.DeleteRepositoryInput = {}));
var DeleteRepositoryOutput;
(function (DeleteRepositoryOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRepositoryOutput");
    }
    DeleteRepositoryOutput.isa = isa;
})(DeleteRepositoryOutput = exports.DeleteRepositoryOutput || (exports.DeleteRepositoryOutput = {}));
var DescribeMergeConflictsInput;
(function (DescribeMergeConflictsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMergeConflictsInput");
    }
    DescribeMergeConflictsInput.isa = isa;
})(DescribeMergeConflictsInput = exports.DescribeMergeConflictsInput || (exports.DescribeMergeConflictsInput = {}));
var DescribeMergeConflictsOutput;
(function (DescribeMergeConflictsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMergeConflictsOutput");
    }
    DescribeMergeConflictsOutput.isa = isa;
})(DescribeMergeConflictsOutput = exports.DescribeMergeConflictsOutput || (exports.DescribeMergeConflictsOutput = {}));
var DescribePullRequestEventsInput;
(function (DescribePullRequestEventsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePullRequestEventsInput");
    }
    DescribePullRequestEventsInput.isa = isa;
})(DescribePullRequestEventsInput = exports.DescribePullRequestEventsInput || (exports.DescribePullRequestEventsInput = {}));
var DescribePullRequestEventsOutput;
(function (DescribePullRequestEventsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePullRequestEventsOutput");
    }
    DescribePullRequestEventsOutput.isa = isa;
})(DescribePullRequestEventsOutput = exports.DescribePullRequestEventsOutput || (exports.DescribePullRequestEventsOutput = {}));
var Difference;
(function (Difference) {
    function isa(o) {
        return smithy_client_1.isa(o, "Difference");
    }
    Difference.isa = isa;
})(Difference = exports.Difference || (exports.Difference = {}));
var DirectoryNameConflictsWithFileNameException;
(function (DirectoryNameConflictsWithFileNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectoryNameConflictsWithFileNameException");
    }
    DirectoryNameConflictsWithFileNameException.isa = isa;
})(DirectoryNameConflictsWithFileNameException = exports.DirectoryNameConflictsWithFileNameException || (exports.DirectoryNameConflictsWithFileNameException = {}));
var DisassociateApprovalRuleTemplateFromRepositoryInput;
(function (DisassociateApprovalRuleTemplateFromRepositoryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateApprovalRuleTemplateFromRepositoryInput");
    }
    DisassociateApprovalRuleTemplateFromRepositoryInput.isa = isa;
})(DisassociateApprovalRuleTemplateFromRepositoryInput = exports.DisassociateApprovalRuleTemplateFromRepositoryInput || (exports.DisassociateApprovalRuleTemplateFromRepositoryInput = {}));
var EncryptionIntegrityChecksFailedException;
(function (EncryptionIntegrityChecksFailedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "EncryptionIntegrityChecksFailedException");
    }
    EncryptionIntegrityChecksFailedException.isa = isa;
})(EncryptionIntegrityChecksFailedException = exports.EncryptionIntegrityChecksFailedException || (exports.EncryptionIntegrityChecksFailedException = {}));
var EncryptionKeyAccessDeniedException;
(function (EncryptionKeyAccessDeniedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "EncryptionKeyAccessDeniedException");
    }
    EncryptionKeyAccessDeniedException.isa = isa;
})(EncryptionKeyAccessDeniedException = exports.EncryptionKeyAccessDeniedException || (exports.EncryptionKeyAccessDeniedException = {}));
var EncryptionKeyDisabledException;
(function (EncryptionKeyDisabledException) {
    function isa(o) {
        return smithy_client_1.isa(o, "EncryptionKeyDisabledException");
    }
    EncryptionKeyDisabledException.isa = isa;
})(EncryptionKeyDisabledException = exports.EncryptionKeyDisabledException || (exports.EncryptionKeyDisabledException = {}));
var EncryptionKeyNotFoundException;
(function (EncryptionKeyNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "EncryptionKeyNotFoundException");
    }
    EncryptionKeyNotFoundException.isa = isa;
})(EncryptionKeyNotFoundException = exports.EncryptionKeyNotFoundException || (exports.EncryptionKeyNotFoundException = {}));
var EncryptionKeyUnavailableException;
(function (EncryptionKeyUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "EncryptionKeyUnavailableException");
    }
    EncryptionKeyUnavailableException.isa = isa;
})(EncryptionKeyUnavailableException = exports.EncryptionKeyUnavailableException || (exports.EncryptionKeyUnavailableException = {}));
var EvaluatePullRequestApprovalRulesInput;
(function (EvaluatePullRequestApprovalRulesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "EvaluatePullRequestApprovalRulesInput");
    }
    EvaluatePullRequestApprovalRulesInput.isa = isa;
})(EvaluatePullRequestApprovalRulesInput = exports.EvaluatePullRequestApprovalRulesInput || (exports.EvaluatePullRequestApprovalRulesInput = {}));
var EvaluatePullRequestApprovalRulesOutput;
(function (EvaluatePullRequestApprovalRulesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "EvaluatePullRequestApprovalRulesOutput");
    }
    EvaluatePullRequestApprovalRulesOutput.isa = isa;
})(EvaluatePullRequestApprovalRulesOutput = exports.EvaluatePullRequestApprovalRulesOutput || (exports.EvaluatePullRequestApprovalRulesOutput = {}));
var Evaluation;
(function (Evaluation) {
    function isa(o) {
        return smithy_client_1.isa(o, "Evaluation");
    }
    Evaluation.isa = isa;
})(Evaluation = exports.Evaluation || (exports.Evaluation = {}));
var File;
(function (File) {
    function isa(o) {
        return smithy_client_1.isa(o, "File");
    }
    File.isa = isa;
})(File = exports.File || (exports.File = {}));
var FileContentAndSourceFileSpecifiedException;
(function (FileContentAndSourceFileSpecifiedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FileContentAndSourceFileSpecifiedException");
    }
    FileContentAndSourceFileSpecifiedException.isa = isa;
})(FileContentAndSourceFileSpecifiedException = exports.FileContentAndSourceFileSpecifiedException || (exports.FileContentAndSourceFileSpecifiedException = {}));
var FileContentRequiredException;
(function (FileContentRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FileContentRequiredException");
    }
    FileContentRequiredException.isa = isa;
})(FileContentRequiredException = exports.FileContentRequiredException || (exports.FileContentRequiredException = {}));
var FileContentSizeLimitExceededException;
(function (FileContentSizeLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FileContentSizeLimitExceededException");
    }
    FileContentSizeLimitExceededException.isa = isa;
})(FileContentSizeLimitExceededException = exports.FileContentSizeLimitExceededException || (exports.FileContentSizeLimitExceededException = {}));
var FileDoesNotExistException;
(function (FileDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FileDoesNotExistException");
    }
    FileDoesNotExistException.isa = isa;
})(FileDoesNotExistException = exports.FileDoesNotExistException || (exports.FileDoesNotExistException = {}));
var FileEntryRequiredException;
(function (FileEntryRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FileEntryRequiredException");
    }
    FileEntryRequiredException.isa = isa;
})(FileEntryRequiredException = exports.FileEntryRequiredException || (exports.FileEntryRequiredException = {}));
var FileMetadata;
(function (FileMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "FileMetadata");
    }
    FileMetadata.isa = isa;
})(FileMetadata = exports.FileMetadata || (exports.FileMetadata = {}));
var FileModeRequiredException;
(function (FileModeRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FileModeRequiredException");
    }
    FileModeRequiredException.isa = isa;
})(FileModeRequiredException = exports.FileModeRequiredException || (exports.FileModeRequiredException = {}));
var FileModeTypeEnum;
(function (FileModeTypeEnum) {
    FileModeTypeEnum["EXECUTABLE"] = "EXECUTABLE";
    FileModeTypeEnum["NORMAL"] = "NORMAL";
    FileModeTypeEnum["SYMLINK"] = "SYMLINK";
})(FileModeTypeEnum = exports.FileModeTypeEnum || (exports.FileModeTypeEnum = {}));
var FileModes;
(function (FileModes) {
    function isa(o) {
        return smithy_client_1.isa(o, "FileModes");
    }
    FileModes.isa = isa;
})(FileModes = exports.FileModes || (exports.FileModes = {}));
var FileNameConflictsWithDirectoryNameException;
(function (FileNameConflictsWithDirectoryNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FileNameConflictsWithDirectoryNameException");
    }
    FileNameConflictsWithDirectoryNameException.isa = isa;
})(FileNameConflictsWithDirectoryNameException = exports.FileNameConflictsWithDirectoryNameException || (exports.FileNameConflictsWithDirectoryNameException = {}));
var FilePathConflictsWithSubmodulePathException;
(function (FilePathConflictsWithSubmodulePathException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FilePathConflictsWithSubmodulePathException");
    }
    FilePathConflictsWithSubmodulePathException.isa = isa;
})(FilePathConflictsWithSubmodulePathException = exports.FilePathConflictsWithSubmodulePathException || (exports.FilePathConflictsWithSubmodulePathException = {}));
var FileSizes;
(function (FileSizes) {
    function isa(o) {
        return smithy_client_1.isa(o, "FileSizes");
    }
    FileSizes.isa = isa;
})(FileSizes = exports.FileSizes || (exports.FileSizes = {}));
var FileTooLargeException;
(function (FileTooLargeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FileTooLargeException");
    }
    FileTooLargeException.isa = isa;
})(FileTooLargeException = exports.FileTooLargeException || (exports.FileTooLargeException = {}));
var Folder;
(function (Folder) {
    function isa(o) {
        return smithy_client_1.isa(o, "Folder");
    }
    Folder.isa = isa;
})(Folder = exports.Folder || (exports.Folder = {}));
var FolderContentSizeLimitExceededException;
(function (FolderContentSizeLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FolderContentSizeLimitExceededException");
    }
    FolderContentSizeLimitExceededException.isa = isa;
})(FolderContentSizeLimitExceededException = exports.FolderContentSizeLimitExceededException || (exports.FolderContentSizeLimitExceededException = {}));
var FolderDoesNotExistException;
(function (FolderDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FolderDoesNotExistException");
    }
    FolderDoesNotExistException.isa = isa;
})(FolderDoesNotExistException = exports.FolderDoesNotExistException || (exports.FolderDoesNotExistException = {}));
var GetApprovalRuleTemplateInput;
(function (GetApprovalRuleTemplateInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetApprovalRuleTemplateInput");
    }
    GetApprovalRuleTemplateInput.isa = isa;
})(GetApprovalRuleTemplateInput = exports.GetApprovalRuleTemplateInput || (exports.GetApprovalRuleTemplateInput = {}));
var GetApprovalRuleTemplateOutput;
(function (GetApprovalRuleTemplateOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetApprovalRuleTemplateOutput");
    }
    GetApprovalRuleTemplateOutput.isa = isa;
})(GetApprovalRuleTemplateOutput = exports.GetApprovalRuleTemplateOutput || (exports.GetApprovalRuleTemplateOutput = {}));
var GetBlobInput;
(function (GetBlobInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetBlobInput");
    }
    GetBlobInput.isa = isa;
})(GetBlobInput = exports.GetBlobInput || (exports.GetBlobInput = {}));
var GetBlobOutput;
(function (GetBlobOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetBlobOutput");
    }
    GetBlobOutput.isa = isa;
})(GetBlobOutput = exports.GetBlobOutput || (exports.GetBlobOutput = {}));
var GetBranchInput;
(function (GetBranchInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetBranchInput");
    }
    GetBranchInput.isa = isa;
})(GetBranchInput = exports.GetBranchInput || (exports.GetBranchInput = {}));
var GetBranchOutput;
(function (GetBranchOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetBranchOutput");
    }
    GetBranchOutput.isa = isa;
})(GetBranchOutput = exports.GetBranchOutput || (exports.GetBranchOutput = {}));
var GetCommentInput;
(function (GetCommentInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCommentInput");
    }
    GetCommentInput.isa = isa;
})(GetCommentInput = exports.GetCommentInput || (exports.GetCommentInput = {}));
var GetCommentOutput;
(function (GetCommentOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCommentOutput");
    }
    GetCommentOutput.isa = isa;
})(GetCommentOutput = exports.GetCommentOutput || (exports.GetCommentOutput = {}));
var GetCommentsForComparedCommitInput;
(function (GetCommentsForComparedCommitInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCommentsForComparedCommitInput");
    }
    GetCommentsForComparedCommitInput.isa = isa;
})(GetCommentsForComparedCommitInput = exports.GetCommentsForComparedCommitInput || (exports.GetCommentsForComparedCommitInput = {}));
var GetCommentsForComparedCommitOutput;
(function (GetCommentsForComparedCommitOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCommentsForComparedCommitOutput");
    }
    GetCommentsForComparedCommitOutput.isa = isa;
})(GetCommentsForComparedCommitOutput = exports.GetCommentsForComparedCommitOutput || (exports.GetCommentsForComparedCommitOutput = {}));
var GetCommentsForPullRequestInput;
(function (GetCommentsForPullRequestInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCommentsForPullRequestInput");
    }
    GetCommentsForPullRequestInput.isa = isa;
})(GetCommentsForPullRequestInput = exports.GetCommentsForPullRequestInput || (exports.GetCommentsForPullRequestInput = {}));
var GetCommentsForPullRequestOutput;
(function (GetCommentsForPullRequestOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCommentsForPullRequestOutput");
    }
    GetCommentsForPullRequestOutput.isa = isa;
})(GetCommentsForPullRequestOutput = exports.GetCommentsForPullRequestOutput || (exports.GetCommentsForPullRequestOutput = {}));
var GetCommitInput;
(function (GetCommitInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCommitInput");
    }
    GetCommitInput.isa = isa;
})(GetCommitInput = exports.GetCommitInput || (exports.GetCommitInput = {}));
var GetCommitOutput;
(function (GetCommitOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCommitOutput");
    }
    GetCommitOutput.isa = isa;
})(GetCommitOutput = exports.GetCommitOutput || (exports.GetCommitOutput = {}));
var GetDifferencesInput;
(function (GetDifferencesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDifferencesInput");
    }
    GetDifferencesInput.isa = isa;
})(GetDifferencesInput = exports.GetDifferencesInput || (exports.GetDifferencesInput = {}));
var GetDifferencesOutput;
(function (GetDifferencesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDifferencesOutput");
    }
    GetDifferencesOutput.isa = isa;
})(GetDifferencesOutput = exports.GetDifferencesOutput || (exports.GetDifferencesOutput = {}));
var GetFileInput;
(function (GetFileInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFileInput");
    }
    GetFileInput.isa = isa;
})(GetFileInput = exports.GetFileInput || (exports.GetFileInput = {}));
var GetFileOutput;
(function (GetFileOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFileOutput");
    }
    GetFileOutput.isa = isa;
})(GetFileOutput = exports.GetFileOutput || (exports.GetFileOutput = {}));
var GetFolderInput;
(function (GetFolderInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFolderInput");
    }
    GetFolderInput.isa = isa;
})(GetFolderInput = exports.GetFolderInput || (exports.GetFolderInput = {}));
var GetFolderOutput;
(function (GetFolderOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFolderOutput");
    }
    GetFolderOutput.isa = isa;
})(GetFolderOutput = exports.GetFolderOutput || (exports.GetFolderOutput = {}));
var GetMergeCommitInput;
(function (GetMergeCommitInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMergeCommitInput");
    }
    GetMergeCommitInput.isa = isa;
})(GetMergeCommitInput = exports.GetMergeCommitInput || (exports.GetMergeCommitInput = {}));
var GetMergeCommitOutput;
(function (GetMergeCommitOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMergeCommitOutput");
    }
    GetMergeCommitOutput.isa = isa;
})(GetMergeCommitOutput = exports.GetMergeCommitOutput || (exports.GetMergeCommitOutput = {}));
var GetMergeConflictsInput;
(function (GetMergeConflictsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMergeConflictsInput");
    }
    GetMergeConflictsInput.isa = isa;
})(GetMergeConflictsInput = exports.GetMergeConflictsInput || (exports.GetMergeConflictsInput = {}));
var GetMergeConflictsOutput;
(function (GetMergeConflictsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMergeConflictsOutput");
    }
    GetMergeConflictsOutput.isa = isa;
})(GetMergeConflictsOutput = exports.GetMergeConflictsOutput || (exports.GetMergeConflictsOutput = {}));
var GetMergeOptionsInput;
(function (GetMergeOptionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMergeOptionsInput");
    }
    GetMergeOptionsInput.isa = isa;
})(GetMergeOptionsInput = exports.GetMergeOptionsInput || (exports.GetMergeOptionsInput = {}));
var GetMergeOptionsOutput;
(function (GetMergeOptionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMergeOptionsOutput");
    }
    GetMergeOptionsOutput.isa = isa;
})(GetMergeOptionsOutput = exports.GetMergeOptionsOutput || (exports.GetMergeOptionsOutput = {}));
var GetPullRequestApprovalStatesInput;
(function (GetPullRequestApprovalStatesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPullRequestApprovalStatesInput");
    }
    GetPullRequestApprovalStatesInput.isa = isa;
})(GetPullRequestApprovalStatesInput = exports.GetPullRequestApprovalStatesInput || (exports.GetPullRequestApprovalStatesInput = {}));
var GetPullRequestApprovalStatesOutput;
(function (GetPullRequestApprovalStatesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPullRequestApprovalStatesOutput");
    }
    GetPullRequestApprovalStatesOutput.isa = isa;
})(GetPullRequestApprovalStatesOutput = exports.GetPullRequestApprovalStatesOutput || (exports.GetPullRequestApprovalStatesOutput = {}));
var GetPullRequestInput;
(function (GetPullRequestInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPullRequestInput");
    }
    GetPullRequestInput.isa = isa;
})(GetPullRequestInput = exports.GetPullRequestInput || (exports.GetPullRequestInput = {}));
var GetPullRequestOutput;
(function (GetPullRequestOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPullRequestOutput");
    }
    GetPullRequestOutput.isa = isa;
})(GetPullRequestOutput = exports.GetPullRequestOutput || (exports.GetPullRequestOutput = {}));
var GetPullRequestOverrideStateInput;
(function (GetPullRequestOverrideStateInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPullRequestOverrideStateInput");
    }
    GetPullRequestOverrideStateInput.isa = isa;
})(GetPullRequestOverrideStateInput = exports.GetPullRequestOverrideStateInput || (exports.GetPullRequestOverrideStateInput = {}));
var GetPullRequestOverrideStateOutput;
(function (GetPullRequestOverrideStateOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPullRequestOverrideStateOutput");
    }
    GetPullRequestOverrideStateOutput.isa = isa;
})(GetPullRequestOverrideStateOutput = exports.GetPullRequestOverrideStateOutput || (exports.GetPullRequestOverrideStateOutput = {}));
var GetRepositoryInput;
(function (GetRepositoryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRepositoryInput");
    }
    GetRepositoryInput.isa = isa;
})(GetRepositoryInput = exports.GetRepositoryInput || (exports.GetRepositoryInput = {}));
var GetRepositoryOutput;
(function (GetRepositoryOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRepositoryOutput");
    }
    GetRepositoryOutput.isa = isa;
})(GetRepositoryOutput = exports.GetRepositoryOutput || (exports.GetRepositoryOutput = {}));
var GetRepositoryTriggersInput;
(function (GetRepositoryTriggersInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRepositoryTriggersInput");
    }
    GetRepositoryTriggersInput.isa = isa;
})(GetRepositoryTriggersInput = exports.GetRepositoryTriggersInput || (exports.GetRepositoryTriggersInput = {}));
var GetRepositoryTriggersOutput;
(function (GetRepositoryTriggersOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRepositoryTriggersOutput");
    }
    GetRepositoryTriggersOutput.isa = isa;
})(GetRepositoryTriggersOutput = exports.GetRepositoryTriggersOutput || (exports.GetRepositoryTriggersOutput = {}));
var IdempotencyParameterMismatchException;
(function (IdempotencyParameterMismatchException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdempotencyParameterMismatchException");
    }
    IdempotencyParameterMismatchException.isa = isa;
})(IdempotencyParameterMismatchException = exports.IdempotencyParameterMismatchException || (exports.IdempotencyParameterMismatchException = {}));
var InvalidActorArnException;
(function (InvalidActorArnException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidActorArnException");
    }
    InvalidActorArnException.isa = isa;
})(InvalidActorArnException = exports.InvalidActorArnException || (exports.InvalidActorArnException = {}));
var InvalidApprovalRuleContentException;
(function (InvalidApprovalRuleContentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidApprovalRuleContentException");
    }
    InvalidApprovalRuleContentException.isa = isa;
})(InvalidApprovalRuleContentException = exports.InvalidApprovalRuleContentException || (exports.InvalidApprovalRuleContentException = {}));
var InvalidApprovalRuleNameException;
(function (InvalidApprovalRuleNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidApprovalRuleNameException");
    }
    InvalidApprovalRuleNameException.isa = isa;
})(InvalidApprovalRuleNameException = exports.InvalidApprovalRuleNameException || (exports.InvalidApprovalRuleNameException = {}));
var InvalidApprovalRuleTemplateContentException;
(function (InvalidApprovalRuleTemplateContentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidApprovalRuleTemplateContentException");
    }
    InvalidApprovalRuleTemplateContentException.isa = isa;
})(InvalidApprovalRuleTemplateContentException = exports.InvalidApprovalRuleTemplateContentException || (exports.InvalidApprovalRuleTemplateContentException = {}));
var InvalidApprovalRuleTemplateDescriptionException;
(function (InvalidApprovalRuleTemplateDescriptionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidApprovalRuleTemplateDescriptionException");
    }
    InvalidApprovalRuleTemplateDescriptionException.isa = isa;
})(InvalidApprovalRuleTemplateDescriptionException = exports.InvalidApprovalRuleTemplateDescriptionException || (exports.InvalidApprovalRuleTemplateDescriptionException = {}));
var InvalidApprovalRuleTemplateNameException;
(function (InvalidApprovalRuleTemplateNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidApprovalRuleTemplateNameException");
    }
    InvalidApprovalRuleTemplateNameException.isa = isa;
})(InvalidApprovalRuleTemplateNameException = exports.InvalidApprovalRuleTemplateNameException || (exports.InvalidApprovalRuleTemplateNameException = {}));
var InvalidApprovalStateException;
(function (InvalidApprovalStateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidApprovalStateException");
    }
    InvalidApprovalStateException.isa = isa;
})(InvalidApprovalStateException = exports.InvalidApprovalStateException || (exports.InvalidApprovalStateException = {}));
var InvalidAuthorArnException;
(function (InvalidAuthorArnException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidAuthorArnException");
    }
    InvalidAuthorArnException.isa = isa;
})(InvalidAuthorArnException = exports.InvalidAuthorArnException || (exports.InvalidAuthorArnException = {}));
var InvalidBlobIdException;
(function (InvalidBlobIdException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidBlobIdException");
    }
    InvalidBlobIdException.isa = isa;
})(InvalidBlobIdException = exports.InvalidBlobIdException || (exports.InvalidBlobIdException = {}));
var InvalidBranchNameException;
(function (InvalidBranchNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidBranchNameException");
    }
    InvalidBranchNameException.isa = isa;
})(InvalidBranchNameException = exports.InvalidBranchNameException || (exports.InvalidBranchNameException = {}));
var InvalidClientRequestTokenException;
(function (InvalidClientRequestTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidClientRequestTokenException");
    }
    InvalidClientRequestTokenException.isa = isa;
})(InvalidClientRequestTokenException = exports.InvalidClientRequestTokenException || (exports.InvalidClientRequestTokenException = {}));
var InvalidCommentIdException;
(function (InvalidCommentIdException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidCommentIdException");
    }
    InvalidCommentIdException.isa = isa;
})(InvalidCommentIdException = exports.InvalidCommentIdException || (exports.InvalidCommentIdException = {}));
var InvalidCommitException;
(function (InvalidCommitException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidCommitException");
    }
    InvalidCommitException.isa = isa;
})(InvalidCommitException = exports.InvalidCommitException || (exports.InvalidCommitException = {}));
var InvalidCommitIdException;
(function (InvalidCommitIdException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidCommitIdException");
    }
    InvalidCommitIdException.isa = isa;
})(InvalidCommitIdException = exports.InvalidCommitIdException || (exports.InvalidCommitIdException = {}));
var InvalidConflictDetailLevelException;
(function (InvalidConflictDetailLevelException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidConflictDetailLevelException");
    }
    InvalidConflictDetailLevelException.isa = isa;
})(InvalidConflictDetailLevelException = exports.InvalidConflictDetailLevelException || (exports.InvalidConflictDetailLevelException = {}));
var InvalidConflictResolutionException;
(function (InvalidConflictResolutionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidConflictResolutionException");
    }
    InvalidConflictResolutionException.isa = isa;
})(InvalidConflictResolutionException = exports.InvalidConflictResolutionException || (exports.InvalidConflictResolutionException = {}));
var InvalidConflictResolutionStrategyException;
(function (InvalidConflictResolutionStrategyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidConflictResolutionStrategyException");
    }
    InvalidConflictResolutionStrategyException.isa = isa;
})(InvalidConflictResolutionStrategyException = exports.InvalidConflictResolutionStrategyException || (exports.InvalidConflictResolutionStrategyException = {}));
var InvalidContinuationTokenException;
(function (InvalidContinuationTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidContinuationTokenException");
    }
    InvalidContinuationTokenException.isa = isa;
})(InvalidContinuationTokenException = exports.InvalidContinuationTokenException || (exports.InvalidContinuationTokenException = {}));
var InvalidDeletionParameterException;
(function (InvalidDeletionParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDeletionParameterException");
    }
    InvalidDeletionParameterException.isa = isa;
})(InvalidDeletionParameterException = exports.InvalidDeletionParameterException || (exports.InvalidDeletionParameterException = {}));
var InvalidDescriptionException;
(function (InvalidDescriptionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDescriptionException");
    }
    InvalidDescriptionException.isa = isa;
})(InvalidDescriptionException = exports.InvalidDescriptionException || (exports.InvalidDescriptionException = {}));
var InvalidDestinationCommitSpecifierException;
(function (InvalidDestinationCommitSpecifierException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDestinationCommitSpecifierException");
    }
    InvalidDestinationCommitSpecifierException.isa = isa;
})(InvalidDestinationCommitSpecifierException = exports.InvalidDestinationCommitSpecifierException || (exports.InvalidDestinationCommitSpecifierException = {}));
var InvalidEmailException;
(function (InvalidEmailException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidEmailException");
    }
    InvalidEmailException.isa = isa;
})(InvalidEmailException = exports.InvalidEmailException || (exports.InvalidEmailException = {}));
var InvalidFileLocationException;
(function (InvalidFileLocationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidFileLocationException");
    }
    InvalidFileLocationException.isa = isa;
})(InvalidFileLocationException = exports.InvalidFileLocationException || (exports.InvalidFileLocationException = {}));
var InvalidFileModeException;
(function (InvalidFileModeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidFileModeException");
    }
    InvalidFileModeException.isa = isa;
})(InvalidFileModeException = exports.InvalidFileModeException || (exports.InvalidFileModeException = {}));
var InvalidFilePositionException;
(function (InvalidFilePositionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidFilePositionException");
    }
    InvalidFilePositionException.isa = isa;
})(InvalidFilePositionException = exports.InvalidFilePositionException || (exports.InvalidFilePositionException = {}));
var InvalidMaxConflictFilesException;
(function (InvalidMaxConflictFilesException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidMaxConflictFilesException");
    }
    InvalidMaxConflictFilesException.isa = isa;
})(InvalidMaxConflictFilesException = exports.InvalidMaxConflictFilesException || (exports.InvalidMaxConflictFilesException = {}));
var InvalidMaxMergeHunksException;
(function (InvalidMaxMergeHunksException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidMaxMergeHunksException");
    }
    InvalidMaxMergeHunksException.isa = isa;
})(InvalidMaxMergeHunksException = exports.InvalidMaxMergeHunksException || (exports.InvalidMaxMergeHunksException = {}));
var InvalidMaxResultsException;
(function (InvalidMaxResultsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidMaxResultsException");
    }
    InvalidMaxResultsException.isa = isa;
})(InvalidMaxResultsException = exports.InvalidMaxResultsException || (exports.InvalidMaxResultsException = {}));
var InvalidMergeOptionException;
(function (InvalidMergeOptionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidMergeOptionException");
    }
    InvalidMergeOptionException.isa = isa;
})(InvalidMergeOptionException = exports.InvalidMergeOptionException || (exports.InvalidMergeOptionException = {}));
var InvalidOrderException;
(function (InvalidOrderException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidOrderException");
    }
    InvalidOrderException.isa = isa;
})(InvalidOrderException = exports.InvalidOrderException || (exports.InvalidOrderException = {}));
var InvalidOverrideStatusException;
(function (InvalidOverrideStatusException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidOverrideStatusException");
    }
    InvalidOverrideStatusException.isa = isa;
})(InvalidOverrideStatusException = exports.InvalidOverrideStatusException || (exports.InvalidOverrideStatusException = {}));
var InvalidParentCommitIdException;
(function (InvalidParentCommitIdException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParentCommitIdException");
    }
    InvalidParentCommitIdException.isa = isa;
})(InvalidParentCommitIdException = exports.InvalidParentCommitIdException || (exports.InvalidParentCommitIdException = {}));
var InvalidPathException;
(function (InvalidPathException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPathException");
    }
    InvalidPathException.isa = isa;
})(InvalidPathException = exports.InvalidPathException || (exports.InvalidPathException = {}));
var InvalidPullRequestEventTypeException;
(function (InvalidPullRequestEventTypeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPullRequestEventTypeException");
    }
    InvalidPullRequestEventTypeException.isa = isa;
})(InvalidPullRequestEventTypeException = exports.InvalidPullRequestEventTypeException || (exports.InvalidPullRequestEventTypeException = {}));
var InvalidPullRequestIdException;
(function (InvalidPullRequestIdException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPullRequestIdException");
    }
    InvalidPullRequestIdException.isa = isa;
})(InvalidPullRequestIdException = exports.InvalidPullRequestIdException || (exports.InvalidPullRequestIdException = {}));
var InvalidPullRequestStatusException;
(function (InvalidPullRequestStatusException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPullRequestStatusException");
    }
    InvalidPullRequestStatusException.isa = isa;
})(InvalidPullRequestStatusException = exports.InvalidPullRequestStatusException || (exports.InvalidPullRequestStatusException = {}));
var InvalidPullRequestStatusUpdateException;
(function (InvalidPullRequestStatusUpdateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPullRequestStatusUpdateException");
    }
    InvalidPullRequestStatusUpdateException.isa = isa;
})(InvalidPullRequestStatusUpdateException = exports.InvalidPullRequestStatusUpdateException || (exports.InvalidPullRequestStatusUpdateException = {}));
var InvalidReferenceNameException;
(function (InvalidReferenceNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidReferenceNameException");
    }
    InvalidReferenceNameException.isa = isa;
})(InvalidReferenceNameException = exports.InvalidReferenceNameException || (exports.InvalidReferenceNameException = {}));
var InvalidRelativeFileVersionEnumException;
(function (InvalidRelativeFileVersionEnumException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRelativeFileVersionEnumException");
    }
    InvalidRelativeFileVersionEnumException.isa = isa;
})(InvalidRelativeFileVersionEnumException = exports.InvalidRelativeFileVersionEnumException || (exports.InvalidRelativeFileVersionEnumException = {}));
var InvalidReplacementContentException;
(function (InvalidReplacementContentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidReplacementContentException");
    }
    InvalidReplacementContentException.isa = isa;
})(InvalidReplacementContentException = exports.InvalidReplacementContentException || (exports.InvalidReplacementContentException = {}));
var InvalidReplacementTypeException;
(function (InvalidReplacementTypeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidReplacementTypeException");
    }
    InvalidReplacementTypeException.isa = isa;
})(InvalidReplacementTypeException = exports.InvalidReplacementTypeException || (exports.InvalidReplacementTypeException = {}));
var InvalidRepositoryDescriptionException;
(function (InvalidRepositoryDescriptionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRepositoryDescriptionException");
    }
    InvalidRepositoryDescriptionException.isa = isa;
})(InvalidRepositoryDescriptionException = exports.InvalidRepositoryDescriptionException || (exports.InvalidRepositoryDescriptionException = {}));
var InvalidRepositoryNameException;
(function (InvalidRepositoryNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRepositoryNameException");
    }
    InvalidRepositoryNameException.isa = isa;
})(InvalidRepositoryNameException = exports.InvalidRepositoryNameException || (exports.InvalidRepositoryNameException = {}));
var InvalidRepositoryTriggerBranchNameException;
(function (InvalidRepositoryTriggerBranchNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRepositoryTriggerBranchNameException");
    }
    InvalidRepositoryTriggerBranchNameException.isa = isa;
})(InvalidRepositoryTriggerBranchNameException = exports.InvalidRepositoryTriggerBranchNameException || (exports.InvalidRepositoryTriggerBranchNameException = {}));
var InvalidRepositoryTriggerCustomDataException;
(function (InvalidRepositoryTriggerCustomDataException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRepositoryTriggerCustomDataException");
    }
    InvalidRepositoryTriggerCustomDataException.isa = isa;
})(InvalidRepositoryTriggerCustomDataException = exports.InvalidRepositoryTriggerCustomDataException || (exports.InvalidRepositoryTriggerCustomDataException = {}));
var InvalidRepositoryTriggerDestinationArnException;
(function (InvalidRepositoryTriggerDestinationArnException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRepositoryTriggerDestinationArnException");
    }
    InvalidRepositoryTriggerDestinationArnException.isa = isa;
})(InvalidRepositoryTriggerDestinationArnException = exports.InvalidRepositoryTriggerDestinationArnException || (exports.InvalidRepositoryTriggerDestinationArnException = {}));
var InvalidRepositoryTriggerEventsException;
(function (InvalidRepositoryTriggerEventsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRepositoryTriggerEventsException");
    }
    InvalidRepositoryTriggerEventsException.isa = isa;
})(InvalidRepositoryTriggerEventsException = exports.InvalidRepositoryTriggerEventsException || (exports.InvalidRepositoryTriggerEventsException = {}));
var InvalidRepositoryTriggerNameException;
(function (InvalidRepositoryTriggerNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRepositoryTriggerNameException");
    }
    InvalidRepositoryTriggerNameException.isa = isa;
})(InvalidRepositoryTriggerNameException = exports.InvalidRepositoryTriggerNameException || (exports.InvalidRepositoryTriggerNameException = {}));
var InvalidRepositoryTriggerRegionException;
(function (InvalidRepositoryTriggerRegionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRepositoryTriggerRegionException");
    }
    InvalidRepositoryTriggerRegionException.isa = isa;
})(InvalidRepositoryTriggerRegionException = exports.InvalidRepositoryTriggerRegionException || (exports.InvalidRepositoryTriggerRegionException = {}));
var InvalidResourceArnException;
(function (InvalidResourceArnException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidResourceArnException");
    }
    InvalidResourceArnException.isa = isa;
})(InvalidResourceArnException = exports.InvalidResourceArnException || (exports.InvalidResourceArnException = {}));
var InvalidRevisionIdException;
(function (InvalidRevisionIdException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRevisionIdException");
    }
    InvalidRevisionIdException.isa = isa;
})(InvalidRevisionIdException = exports.InvalidRevisionIdException || (exports.InvalidRevisionIdException = {}));
var InvalidRuleContentSha256Exception;
(function (InvalidRuleContentSha256Exception) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRuleContentSha256Exception");
    }
    InvalidRuleContentSha256Exception.isa = isa;
})(InvalidRuleContentSha256Exception = exports.InvalidRuleContentSha256Exception || (exports.InvalidRuleContentSha256Exception = {}));
var InvalidSortByException;
(function (InvalidSortByException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSortByException");
    }
    InvalidSortByException.isa = isa;
})(InvalidSortByException = exports.InvalidSortByException || (exports.InvalidSortByException = {}));
var InvalidSourceCommitSpecifierException;
(function (InvalidSourceCommitSpecifierException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSourceCommitSpecifierException");
    }
    InvalidSourceCommitSpecifierException.isa = isa;
})(InvalidSourceCommitSpecifierException = exports.InvalidSourceCommitSpecifierException || (exports.InvalidSourceCommitSpecifierException = {}));
var InvalidSystemTagUsageException;
(function (InvalidSystemTagUsageException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSystemTagUsageException");
    }
    InvalidSystemTagUsageException.isa = isa;
})(InvalidSystemTagUsageException = exports.InvalidSystemTagUsageException || (exports.InvalidSystemTagUsageException = {}));
var InvalidTagKeysListException;
(function (InvalidTagKeysListException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTagKeysListException");
    }
    InvalidTagKeysListException.isa = isa;
})(InvalidTagKeysListException = exports.InvalidTagKeysListException || (exports.InvalidTagKeysListException = {}));
var InvalidTagsMapException;
(function (InvalidTagsMapException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTagsMapException");
    }
    InvalidTagsMapException.isa = isa;
})(InvalidTagsMapException = exports.InvalidTagsMapException || (exports.InvalidTagsMapException = {}));
var InvalidTargetBranchException;
(function (InvalidTargetBranchException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTargetBranchException");
    }
    InvalidTargetBranchException.isa = isa;
})(InvalidTargetBranchException = exports.InvalidTargetBranchException || (exports.InvalidTargetBranchException = {}));
var InvalidTargetException;
(function (InvalidTargetException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTargetException");
    }
    InvalidTargetException.isa = isa;
})(InvalidTargetException = exports.InvalidTargetException || (exports.InvalidTargetException = {}));
var InvalidTargetsException;
(function (InvalidTargetsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTargetsException");
    }
    InvalidTargetsException.isa = isa;
})(InvalidTargetsException = exports.InvalidTargetsException || (exports.InvalidTargetsException = {}));
var InvalidTitleException;
(function (InvalidTitleException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTitleException");
    }
    InvalidTitleException.isa = isa;
})(InvalidTitleException = exports.InvalidTitleException || (exports.InvalidTitleException = {}));
var IsBinaryFile;
(function (IsBinaryFile) {
    function isa(o) {
        return smithy_client_1.isa(o, "IsBinaryFile");
    }
    IsBinaryFile.isa = isa;
})(IsBinaryFile = exports.IsBinaryFile || (exports.IsBinaryFile = {}));
var ListApprovalRuleTemplatesInput;
(function (ListApprovalRuleTemplatesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListApprovalRuleTemplatesInput");
    }
    ListApprovalRuleTemplatesInput.isa = isa;
})(ListApprovalRuleTemplatesInput = exports.ListApprovalRuleTemplatesInput || (exports.ListApprovalRuleTemplatesInput = {}));
var ListApprovalRuleTemplatesOutput;
(function (ListApprovalRuleTemplatesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListApprovalRuleTemplatesOutput");
    }
    ListApprovalRuleTemplatesOutput.isa = isa;
})(ListApprovalRuleTemplatesOutput = exports.ListApprovalRuleTemplatesOutput || (exports.ListApprovalRuleTemplatesOutput = {}));
var ListAssociatedApprovalRuleTemplatesForRepositoryInput;
(function (ListAssociatedApprovalRuleTemplatesForRepositoryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssociatedApprovalRuleTemplatesForRepositoryInput");
    }
    ListAssociatedApprovalRuleTemplatesForRepositoryInput.isa = isa;
})(ListAssociatedApprovalRuleTemplatesForRepositoryInput = exports.ListAssociatedApprovalRuleTemplatesForRepositoryInput || (exports.ListAssociatedApprovalRuleTemplatesForRepositoryInput = {}));
var ListAssociatedApprovalRuleTemplatesForRepositoryOutput;
(function (ListAssociatedApprovalRuleTemplatesForRepositoryOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssociatedApprovalRuleTemplatesForRepositoryOutput");
    }
    ListAssociatedApprovalRuleTemplatesForRepositoryOutput.isa = isa;
})(ListAssociatedApprovalRuleTemplatesForRepositoryOutput = exports.ListAssociatedApprovalRuleTemplatesForRepositoryOutput || (exports.ListAssociatedApprovalRuleTemplatesForRepositoryOutput = {}));
var ListBranchesInput;
(function (ListBranchesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBranchesInput");
    }
    ListBranchesInput.isa = isa;
})(ListBranchesInput = exports.ListBranchesInput || (exports.ListBranchesInput = {}));
var ListBranchesOutput;
(function (ListBranchesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBranchesOutput");
    }
    ListBranchesOutput.isa = isa;
})(ListBranchesOutput = exports.ListBranchesOutput || (exports.ListBranchesOutput = {}));
var ListPullRequestsInput;
(function (ListPullRequestsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPullRequestsInput");
    }
    ListPullRequestsInput.isa = isa;
})(ListPullRequestsInput = exports.ListPullRequestsInput || (exports.ListPullRequestsInput = {}));
var ListPullRequestsOutput;
(function (ListPullRequestsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPullRequestsOutput");
    }
    ListPullRequestsOutput.isa = isa;
})(ListPullRequestsOutput = exports.ListPullRequestsOutput || (exports.ListPullRequestsOutput = {}));
var ListRepositoriesForApprovalRuleTemplateInput;
(function (ListRepositoriesForApprovalRuleTemplateInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRepositoriesForApprovalRuleTemplateInput");
    }
    ListRepositoriesForApprovalRuleTemplateInput.isa = isa;
})(ListRepositoriesForApprovalRuleTemplateInput = exports.ListRepositoriesForApprovalRuleTemplateInput || (exports.ListRepositoriesForApprovalRuleTemplateInput = {}));
var ListRepositoriesForApprovalRuleTemplateOutput;
(function (ListRepositoriesForApprovalRuleTemplateOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRepositoriesForApprovalRuleTemplateOutput");
    }
    ListRepositoriesForApprovalRuleTemplateOutput.isa = isa;
})(ListRepositoriesForApprovalRuleTemplateOutput = exports.ListRepositoriesForApprovalRuleTemplateOutput || (exports.ListRepositoriesForApprovalRuleTemplateOutput = {}));
var ListRepositoriesInput;
(function (ListRepositoriesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRepositoriesInput");
    }
    ListRepositoriesInput.isa = isa;
})(ListRepositoriesInput = exports.ListRepositoriesInput || (exports.ListRepositoriesInput = {}));
var ListRepositoriesOutput;
(function (ListRepositoriesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRepositoriesOutput");
    }
    ListRepositoriesOutput.isa = isa;
})(ListRepositoriesOutput = exports.ListRepositoriesOutput || (exports.ListRepositoriesOutput = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceInput");
    }
    ListTagsForResourceInput.isa = isa;
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceOutput");
    }
    ListTagsForResourceOutput.isa = isa;
})(ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {}));
var Location;
(function (Location) {
    function isa(o) {
        return smithy_client_1.isa(o, "Location");
    }
    Location.isa = isa;
})(Location = exports.Location || (exports.Location = {}));
var ManualMergeRequiredException;
(function (ManualMergeRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ManualMergeRequiredException");
    }
    ManualMergeRequiredException.isa = isa;
})(ManualMergeRequiredException = exports.ManualMergeRequiredException || (exports.ManualMergeRequiredException = {}));
var MaximumBranchesExceededException;
(function (MaximumBranchesExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaximumBranchesExceededException");
    }
    MaximumBranchesExceededException.isa = isa;
})(MaximumBranchesExceededException = exports.MaximumBranchesExceededException || (exports.MaximumBranchesExceededException = {}));
var MaximumConflictResolutionEntriesExceededException;
(function (MaximumConflictResolutionEntriesExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaximumConflictResolutionEntriesExceededException");
    }
    MaximumConflictResolutionEntriesExceededException.isa = isa;
})(MaximumConflictResolutionEntriesExceededException = exports.MaximumConflictResolutionEntriesExceededException || (exports.MaximumConflictResolutionEntriesExceededException = {}));
var MaximumFileContentToLoadExceededException;
(function (MaximumFileContentToLoadExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaximumFileContentToLoadExceededException");
    }
    MaximumFileContentToLoadExceededException.isa = isa;
})(MaximumFileContentToLoadExceededException = exports.MaximumFileContentToLoadExceededException || (exports.MaximumFileContentToLoadExceededException = {}));
var MaximumFileEntriesExceededException;
(function (MaximumFileEntriesExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaximumFileEntriesExceededException");
    }
    MaximumFileEntriesExceededException.isa = isa;
})(MaximumFileEntriesExceededException = exports.MaximumFileEntriesExceededException || (exports.MaximumFileEntriesExceededException = {}));
var MaximumItemsToCompareExceededException;
(function (MaximumItemsToCompareExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaximumItemsToCompareExceededException");
    }
    MaximumItemsToCompareExceededException.isa = isa;
})(MaximumItemsToCompareExceededException = exports.MaximumItemsToCompareExceededException || (exports.MaximumItemsToCompareExceededException = {}));
var MaximumNumberOfApprovalsExceededException;
(function (MaximumNumberOfApprovalsExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaximumNumberOfApprovalsExceededException");
    }
    MaximumNumberOfApprovalsExceededException.isa = isa;
})(MaximumNumberOfApprovalsExceededException = exports.MaximumNumberOfApprovalsExceededException || (exports.MaximumNumberOfApprovalsExceededException = {}));
var MaximumOpenPullRequestsExceededException;
(function (MaximumOpenPullRequestsExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaximumOpenPullRequestsExceededException");
    }
    MaximumOpenPullRequestsExceededException.isa = isa;
})(MaximumOpenPullRequestsExceededException = exports.MaximumOpenPullRequestsExceededException || (exports.MaximumOpenPullRequestsExceededException = {}));
var MaximumRepositoryNamesExceededException;
(function (MaximumRepositoryNamesExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaximumRepositoryNamesExceededException");
    }
    MaximumRepositoryNamesExceededException.isa = isa;
})(MaximumRepositoryNamesExceededException = exports.MaximumRepositoryNamesExceededException || (exports.MaximumRepositoryNamesExceededException = {}));
var MaximumRepositoryTriggersExceededException;
(function (MaximumRepositoryTriggersExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaximumRepositoryTriggersExceededException");
    }
    MaximumRepositoryTriggersExceededException.isa = isa;
})(MaximumRepositoryTriggersExceededException = exports.MaximumRepositoryTriggersExceededException || (exports.MaximumRepositoryTriggersExceededException = {}));
var MaximumRuleTemplatesAssociatedWithRepositoryException;
(function (MaximumRuleTemplatesAssociatedWithRepositoryException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaximumRuleTemplatesAssociatedWithRepositoryException");
    }
    MaximumRuleTemplatesAssociatedWithRepositoryException.isa = isa;
})(MaximumRuleTemplatesAssociatedWithRepositoryException = exports.MaximumRuleTemplatesAssociatedWithRepositoryException || (exports.MaximumRuleTemplatesAssociatedWithRepositoryException = {}));
var MergeBranchesByFastForwardInput;
(function (MergeBranchesByFastForwardInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergeBranchesByFastForwardInput");
    }
    MergeBranchesByFastForwardInput.isa = isa;
})(MergeBranchesByFastForwardInput = exports.MergeBranchesByFastForwardInput || (exports.MergeBranchesByFastForwardInput = {}));
var MergeBranchesByFastForwardOutput;
(function (MergeBranchesByFastForwardOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergeBranchesByFastForwardOutput");
    }
    MergeBranchesByFastForwardOutput.isa = isa;
})(MergeBranchesByFastForwardOutput = exports.MergeBranchesByFastForwardOutput || (exports.MergeBranchesByFastForwardOutput = {}));
var MergeBranchesBySquashInput;
(function (MergeBranchesBySquashInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergeBranchesBySquashInput");
    }
    MergeBranchesBySquashInput.isa = isa;
})(MergeBranchesBySquashInput = exports.MergeBranchesBySquashInput || (exports.MergeBranchesBySquashInput = {}));
var MergeBranchesBySquashOutput;
(function (MergeBranchesBySquashOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergeBranchesBySquashOutput");
    }
    MergeBranchesBySquashOutput.isa = isa;
})(MergeBranchesBySquashOutput = exports.MergeBranchesBySquashOutput || (exports.MergeBranchesBySquashOutput = {}));
var MergeBranchesByThreeWayInput;
(function (MergeBranchesByThreeWayInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergeBranchesByThreeWayInput");
    }
    MergeBranchesByThreeWayInput.isa = isa;
})(MergeBranchesByThreeWayInput = exports.MergeBranchesByThreeWayInput || (exports.MergeBranchesByThreeWayInput = {}));
var MergeBranchesByThreeWayOutput;
(function (MergeBranchesByThreeWayOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergeBranchesByThreeWayOutput");
    }
    MergeBranchesByThreeWayOutput.isa = isa;
})(MergeBranchesByThreeWayOutput = exports.MergeBranchesByThreeWayOutput || (exports.MergeBranchesByThreeWayOutput = {}));
var MergeHunk;
(function (MergeHunk) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergeHunk");
    }
    MergeHunk.isa = isa;
})(MergeHunk = exports.MergeHunk || (exports.MergeHunk = {}));
var MergeHunkDetail;
(function (MergeHunkDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergeHunkDetail");
    }
    MergeHunkDetail.isa = isa;
})(MergeHunkDetail = exports.MergeHunkDetail || (exports.MergeHunkDetail = {}));
var MergeMetadata;
(function (MergeMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergeMetadata");
    }
    MergeMetadata.isa = isa;
})(MergeMetadata = exports.MergeMetadata || (exports.MergeMetadata = {}));
var MergeOperations;
(function (MergeOperations) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergeOperations");
    }
    MergeOperations.isa = isa;
})(MergeOperations = exports.MergeOperations || (exports.MergeOperations = {}));
var MergeOptionRequiredException;
(function (MergeOptionRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergeOptionRequiredException");
    }
    MergeOptionRequiredException.isa = isa;
})(MergeOptionRequiredException = exports.MergeOptionRequiredException || (exports.MergeOptionRequiredException = {}));
var MergeOptionTypeEnum;
(function (MergeOptionTypeEnum) {
    MergeOptionTypeEnum["FAST_FORWARD_MERGE"] = "FAST_FORWARD_MERGE";
    MergeOptionTypeEnum["SQUASH_MERGE"] = "SQUASH_MERGE";
    MergeOptionTypeEnum["THREE_WAY_MERGE"] = "THREE_WAY_MERGE";
})(MergeOptionTypeEnum = exports.MergeOptionTypeEnum || (exports.MergeOptionTypeEnum = {}));
var MergePullRequestByFastForwardInput;
(function (MergePullRequestByFastForwardInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergePullRequestByFastForwardInput");
    }
    MergePullRequestByFastForwardInput.isa = isa;
})(MergePullRequestByFastForwardInput = exports.MergePullRequestByFastForwardInput || (exports.MergePullRequestByFastForwardInput = {}));
var MergePullRequestByFastForwardOutput;
(function (MergePullRequestByFastForwardOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergePullRequestByFastForwardOutput");
    }
    MergePullRequestByFastForwardOutput.isa = isa;
})(MergePullRequestByFastForwardOutput = exports.MergePullRequestByFastForwardOutput || (exports.MergePullRequestByFastForwardOutput = {}));
var MergePullRequestBySquashInput;
(function (MergePullRequestBySquashInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergePullRequestBySquashInput");
    }
    MergePullRequestBySquashInput.isa = isa;
})(MergePullRequestBySquashInput = exports.MergePullRequestBySquashInput || (exports.MergePullRequestBySquashInput = {}));
var MergePullRequestBySquashOutput;
(function (MergePullRequestBySquashOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergePullRequestBySquashOutput");
    }
    MergePullRequestBySquashOutput.isa = isa;
})(MergePullRequestBySquashOutput = exports.MergePullRequestBySquashOutput || (exports.MergePullRequestBySquashOutput = {}));
var MergePullRequestByThreeWayInput;
(function (MergePullRequestByThreeWayInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergePullRequestByThreeWayInput");
    }
    MergePullRequestByThreeWayInput.isa = isa;
})(MergePullRequestByThreeWayInput = exports.MergePullRequestByThreeWayInput || (exports.MergePullRequestByThreeWayInput = {}));
var MergePullRequestByThreeWayOutput;
(function (MergePullRequestByThreeWayOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergePullRequestByThreeWayOutput");
    }
    MergePullRequestByThreeWayOutput.isa = isa;
})(MergePullRequestByThreeWayOutput = exports.MergePullRequestByThreeWayOutput || (exports.MergePullRequestByThreeWayOutput = {}));
var MultipleConflictResolutionEntriesException;
(function (MultipleConflictResolutionEntriesException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MultipleConflictResolutionEntriesException");
    }
    MultipleConflictResolutionEntriesException.isa = isa;
})(MultipleConflictResolutionEntriesException = exports.MultipleConflictResolutionEntriesException || (exports.MultipleConflictResolutionEntriesException = {}));
var MultipleRepositoriesInPullRequestException;
(function (MultipleRepositoriesInPullRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MultipleRepositoriesInPullRequestException");
    }
    MultipleRepositoriesInPullRequestException.isa = isa;
})(MultipleRepositoriesInPullRequestException = exports.MultipleRepositoriesInPullRequestException || (exports.MultipleRepositoriesInPullRequestException = {}));
var NameLengthExceededException;
(function (NameLengthExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NameLengthExceededException");
    }
    NameLengthExceededException.isa = isa;
})(NameLengthExceededException = exports.NameLengthExceededException || (exports.NameLengthExceededException = {}));
var NoChangeException;
(function (NoChangeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoChangeException");
    }
    NoChangeException.isa = isa;
})(NoChangeException = exports.NoChangeException || (exports.NoChangeException = {}));
var NumberOfRuleTemplatesExceededException;
(function (NumberOfRuleTemplatesExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NumberOfRuleTemplatesExceededException");
    }
    NumberOfRuleTemplatesExceededException.isa = isa;
})(NumberOfRuleTemplatesExceededException = exports.NumberOfRuleTemplatesExceededException || (exports.NumberOfRuleTemplatesExceededException = {}));
var NumberOfRulesExceededException;
(function (NumberOfRulesExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NumberOfRulesExceededException");
    }
    NumberOfRulesExceededException.isa = isa;
})(NumberOfRulesExceededException = exports.NumberOfRulesExceededException || (exports.NumberOfRulesExceededException = {}));
var ObjectTypeEnum;
(function (ObjectTypeEnum) {
    ObjectTypeEnum["DIRECTORY"] = "DIRECTORY";
    ObjectTypeEnum["FILE"] = "FILE";
    ObjectTypeEnum["GIT_LINK"] = "GIT_LINK";
    ObjectTypeEnum["SYMBOLIC_LINK"] = "SYMBOLIC_LINK";
})(ObjectTypeEnum = exports.ObjectTypeEnum || (exports.ObjectTypeEnum = {}));
var ObjectTypes;
(function (ObjectTypes) {
    function isa(o) {
        return smithy_client_1.isa(o, "ObjectTypes");
    }
    ObjectTypes.isa = isa;
})(ObjectTypes = exports.ObjectTypes || (exports.ObjectTypes = {}));
var OrderEnum;
(function (OrderEnum) {
    OrderEnum["ASCENDING"] = "ascending";
    OrderEnum["DESCENDING"] = "descending";
})(OrderEnum = exports.OrderEnum || (exports.OrderEnum = {}));
var OriginApprovalRuleTemplate;
(function (OriginApprovalRuleTemplate) {
    function isa(o) {
        return smithy_client_1.isa(o, "OriginApprovalRuleTemplate");
    }
    OriginApprovalRuleTemplate.isa = isa;
})(OriginApprovalRuleTemplate = exports.OriginApprovalRuleTemplate || (exports.OriginApprovalRuleTemplate = {}));
var OverrideAlreadySetException;
(function (OverrideAlreadySetException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OverrideAlreadySetException");
    }
    OverrideAlreadySetException.isa = isa;
})(OverrideAlreadySetException = exports.OverrideAlreadySetException || (exports.OverrideAlreadySetException = {}));
var OverridePullRequestApprovalRulesInput;
(function (OverridePullRequestApprovalRulesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "OverridePullRequestApprovalRulesInput");
    }
    OverridePullRequestApprovalRulesInput.isa = isa;
})(OverridePullRequestApprovalRulesInput = exports.OverridePullRequestApprovalRulesInput || (exports.OverridePullRequestApprovalRulesInput = {}));
var OverrideStatus;
(function (OverrideStatus) {
    OverrideStatus["OVERRIDE"] = "OVERRIDE";
    OverrideStatus["REVOKE"] = "REVOKE";
})(OverrideStatus = exports.OverrideStatus || (exports.OverrideStatus = {}));
var OverrideStatusRequiredException;
(function (OverrideStatusRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OverrideStatusRequiredException");
    }
    OverrideStatusRequiredException.isa = isa;
})(OverrideStatusRequiredException = exports.OverrideStatusRequiredException || (exports.OverrideStatusRequiredException = {}));
var ParentCommitDoesNotExistException;
(function (ParentCommitDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParentCommitDoesNotExistException");
    }
    ParentCommitDoesNotExistException.isa = isa;
})(ParentCommitDoesNotExistException = exports.ParentCommitDoesNotExistException || (exports.ParentCommitDoesNotExistException = {}));
var ParentCommitIdOutdatedException;
(function (ParentCommitIdOutdatedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParentCommitIdOutdatedException");
    }
    ParentCommitIdOutdatedException.isa = isa;
})(ParentCommitIdOutdatedException = exports.ParentCommitIdOutdatedException || (exports.ParentCommitIdOutdatedException = {}));
var ParentCommitIdRequiredException;
(function (ParentCommitIdRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParentCommitIdRequiredException");
    }
    ParentCommitIdRequiredException.isa = isa;
})(ParentCommitIdRequiredException = exports.ParentCommitIdRequiredException || (exports.ParentCommitIdRequiredException = {}));
var PathDoesNotExistException;
(function (PathDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PathDoesNotExistException");
    }
    PathDoesNotExistException.isa = isa;
})(PathDoesNotExistException = exports.PathDoesNotExistException || (exports.PathDoesNotExistException = {}));
var PathRequiredException;
(function (PathRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PathRequiredException");
    }
    PathRequiredException.isa = isa;
})(PathRequiredException = exports.PathRequiredException || (exports.PathRequiredException = {}));
var PostCommentForComparedCommitInput;
(function (PostCommentForComparedCommitInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PostCommentForComparedCommitInput");
    }
    PostCommentForComparedCommitInput.isa = isa;
})(PostCommentForComparedCommitInput = exports.PostCommentForComparedCommitInput || (exports.PostCommentForComparedCommitInput = {}));
var PostCommentForComparedCommitOutput;
(function (PostCommentForComparedCommitOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PostCommentForComparedCommitOutput");
    }
    PostCommentForComparedCommitOutput.isa = isa;
})(PostCommentForComparedCommitOutput = exports.PostCommentForComparedCommitOutput || (exports.PostCommentForComparedCommitOutput = {}));
var PostCommentForPullRequestInput;
(function (PostCommentForPullRequestInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PostCommentForPullRequestInput");
    }
    PostCommentForPullRequestInput.isa = isa;
})(PostCommentForPullRequestInput = exports.PostCommentForPullRequestInput || (exports.PostCommentForPullRequestInput = {}));
var PostCommentForPullRequestOutput;
(function (PostCommentForPullRequestOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PostCommentForPullRequestOutput");
    }
    PostCommentForPullRequestOutput.isa = isa;
})(PostCommentForPullRequestOutput = exports.PostCommentForPullRequestOutput || (exports.PostCommentForPullRequestOutput = {}));
var PostCommentReplyInput;
(function (PostCommentReplyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PostCommentReplyInput");
    }
    PostCommentReplyInput.isa = isa;
})(PostCommentReplyInput = exports.PostCommentReplyInput || (exports.PostCommentReplyInput = {}));
var PostCommentReplyOutput;
(function (PostCommentReplyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PostCommentReplyOutput");
    }
    PostCommentReplyOutput.isa = isa;
})(PostCommentReplyOutput = exports.PostCommentReplyOutput || (exports.PostCommentReplyOutput = {}));
var PullRequest;
(function (PullRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PullRequest");
    }
    PullRequest.isa = isa;
})(PullRequest = exports.PullRequest || (exports.PullRequest = {}));
var PullRequestAlreadyClosedException;
(function (PullRequestAlreadyClosedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PullRequestAlreadyClosedException");
    }
    PullRequestAlreadyClosedException.isa = isa;
})(PullRequestAlreadyClosedException = exports.PullRequestAlreadyClosedException || (exports.PullRequestAlreadyClosedException = {}));
var PullRequestApprovalRulesNotSatisfiedException;
(function (PullRequestApprovalRulesNotSatisfiedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PullRequestApprovalRulesNotSatisfiedException");
    }
    PullRequestApprovalRulesNotSatisfiedException.isa = isa;
})(PullRequestApprovalRulesNotSatisfiedException = exports.PullRequestApprovalRulesNotSatisfiedException || (exports.PullRequestApprovalRulesNotSatisfiedException = {}));
var PullRequestCannotBeApprovedByAuthorException;
(function (PullRequestCannotBeApprovedByAuthorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PullRequestCannotBeApprovedByAuthorException");
    }
    PullRequestCannotBeApprovedByAuthorException.isa = isa;
})(PullRequestCannotBeApprovedByAuthorException = exports.PullRequestCannotBeApprovedByAuthorException || (exports.PullRequestCannotBeApprovedByAuthorException = {}));
var PullRequestCreatedEventMetadata;
(function (PullRequestCreatedEventMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "PullRequestCreatedEventMetadata");
    }
    PullRequestCreatedEventMetadata.isa = isa;
})(PullRequestCreatedEventMetadata = exports.PullRequestCreatedEventMetadata || (exports.PullRequestCreatedEventMetadata = {}));
var PullRequestDoesNotExistException;
(function (PullRequestDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PullRequestDoesNotExistException");
    }
    PullRequestDoesNotExistException.isa = isa;
})(PullRequestDoesNotExistException = exports.PullRequestDoesNotExistException || (exports.PullRequestDoesNotExistException = {}));
var PullRequestEvent;
(function (PullRequestEvent) {
    function isa(o) {
        return smithy_client_1.isa(o, "PullRequestEvent");
    }
    PullRequestEvent.isa = isa;
})(PullRequestEvent = exports.PullRequestEvent || (exports.PullRequestEvent = {}));
var PullRequestEventType;
(function (PullRequestEventType) {
    PullRequestEventType["PULL_REQUEST_APPROVAL_RULE_CREATED"] = "PULL_REQUEST_APPROVAL_RULE_CREATED";
    PullRequestEventType["PULL_REQUEST_APPROVAL_RULE_DELETED"] = "PULL_REQUEST_APPROVAL_RULE_DELETED";
    PullRequestEventType["PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN"] = "PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN";
    PullRequestEventType["PULL_REQUEST_APPROVAL_RULE_UPDATED"] = "PULL_REQUEST_APPROVAL_RULE_UPDATED";
    PullRequestEventType["PULL_REQUEST_APPROVAL_STATE_CHANGED"] = "PULL_REQUEST_APPROVAL_STATE_CHANGED";
    PullRequestEventType["PULL_REQUEST_CREATED"] = "PULL_REQUEST_CREATED";
    PullRequestEventType["PULL_REQUEST_MERGE_STATE_CHANGED"] = "PULL_REQUEST_MERGE_STATE_CHANGED";
    PullRequestEventType["PULL_REQUEST_SOURCE_REFERENCE_UPDATED"] = "PULL_REQUEST_SOURCE_REFERENCE_UPDATED";
    PullRequestEventType["PULL_REQUEST_STATUS_CHANGED"] = "PULL_REQUEST_STATUS_CHANGED";
})(PullRequestEventType = exports.PullRequestEventType || (exports.PullRequestEventType = {}));
var PullRequestIdRequiredException;
(function (PullRequestIdRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PullRequestIdRequiredException");
    }
    PullRequestIdRequiredException.isa = isa;
})(PullRequestIdRequiredException = exports.PullRequestIdRequiredException || (exports.PullRequestIdRequiredException = {}));
var PullRequestMergedStateChangedEventMetadata;
(function (PullRequestMergedStateChangedEventMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "PullRequestMergedStateChangedEventMetadata");
    }
    PullRequestMergedStateChangedEventMetadata.isa = isa;
})(PullRequestMergedStateChangedEventMetadata = exports.PullRequestMergedStateChangedEventMetadata || (exports.PullRequestMergedStateChangedEventMetadata = {}));
var PullRequestSourceReferenceUpdatedEventMetadata;
(function (PullRequestSourceReferenceUpdatedEventMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "PullRequestSourceReferenceUpdatedEventMetadata");
    }
    PullRequestSourceReferenceUpdatedEventMetadata.isa = isa;
})(PullRequestSourceReferenceUpdatedEventMetadata = exports.PullRequestSourceReferenceUpdatedEventMetadata || (exports.PullRequestSourceReferenceUpdatedEventMetadata = {}));
var PullRequestStatusChangedEventMetadata;
(function (PullRequestStatusChangedEventMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "PullRequestStatusChangedEventMetadata");
    }
    PullRequestStatusChangedEventMetadata.isa = isa;
})(PullRequestStatusChangedEventMetadata = exports.PullRequestStatusChangedEventMetadata || (exports.PullRequestStatusChangedEventMetadata = {}));
var PullRequestStatusEnum;
(function (PullRequestStatusEnum) {
    PullRequestStatusEnum["CLOSED"] = "CLOSED";
    PullRequestStatusEnum["OPEN"] = "OPEN";
})(PullRequestStatusEnum = exports.PullRequestStatusEnum || (exports.PullRequestStatusEnum = {}));
var PullRequestStatusRequiredException;
(function (PullRequestStatusRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PullRequestStatusRequiredException");
    }
    PullRequestStatusRequiredException.isa = isa;
})(PullRequestStatusRequiredException = exports.PullRequestStatusRequiredException || (exports.PullRequestStatusRequiredException = {}));
var PullRequestTarget;
(function (PullRequestTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "PullRequestTarget");
    }
    PullRequestTarget.isa = isa;
})(PullRequestTarget = exports.PullRequestTarget || (exports.PullRequestTarget = {}));
var PutFileEntry;
(function (PutFileEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutFileEntry");
    }
    PutFileEntry.isa = isa;
})(PutFileEntry = exports.PutFileEntry || (exports.PutFileEntry = {}));
var PutFileEntryConflictException;
(function (PutFileEntryConflictException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutFileEntryConflictException");
    }
    PutFileEntryConflictException.isa = isa;
})(PutFileEntryConflictException = exports.PutFileEntryConflictException || (exports.PutFileEntryConflictException = {}));
var PutFileInput;
(function (PutFileInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutFileInput");
    }
    PutFileInput.isa = isa;
})(PutFileInput = exports.PutFileInput || (exports.PutFileInput = {}));
var PutFileOutput;
(function (PutFileOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutFileOutput");
    }
    PutFileOutput.isa = isa;
})(PutFileOutput = exports.PutFileOutput || (exports.PutFileOutput = {}));
var PutRepositoryTriggersInput;
(function (PutRepositoryTriggersInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRepositoryTriggersInput");
    }
    PutRepositoryTriggersInput.isa = isa;
})(PutRepositoryTriggersInput = exports.PutRepositoryTriggersInput || (exports.PutRepositoryTriggersInput = {}));
var PutRepositoryTriggersOutput;
(function (PutRepositoryTriggersOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRepositoryTriggersOutput");
    }
    PutRepositoryTriggersOutput.isa = isa;
})(PutRepositoryTriggersOutput = exports.PutRepositoryTriggersOutput || (exports.PutRepositoryTriggersOutput = {}));
var ReferenceDoesNotExistException;
(function (ReferenceDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReferenceDoesNotExistException");
    }
    ReferenceDoesNotExistException.isa = isa;
})(ReferenceDoesNotExistException = exports.ReferenceDoesNotExistException || (exports.ReferenceDoesNotExistException = {}));
var ReferenceNameRequiredException;
(function (ReferenceNameRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReferenceNameRequiredException");
    }
    ReferenceNameRequiredException.isa = isa;
})(ReferenceNameRequiredException = exports.ReferenceNameRequiredException || (exports.ReferenceNameRequiredException = {}));
var ReferenceTypeNotSupportedException;
(function (ReferenceTypeNotSupportedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReferenceTypeNotSupportedException");
    }
    ReferenceTypeNotSupportedException.isa = isa;
})(ReferenceTypeNotSupportedException = exports.ReferenceTypeNotSupportedException || (exports.ReferenceTypeNotSupportedException = {}));
var RelativeFileVersionEnum;
(function (RelativeFileVersionEnum) {
    RelativeFileVersionEnum["AFTER"] = "AFTER";
    RelativeFileVersionEnum["BEFORE"] = "BEFORE";
})(RelativeFileVersionEnum = exports.RelativeFileVersionEnum || (exports.RelativeFileVersionEnum = {}));
var ReplaceContentEntry;
(function (ReplaceContentEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplaceContentEntry");
    }
    ReplaceContentEntry.isa = isa;
})(ReplaceContentEntry = exports.ReplaceContentEntry || (exports.ReplaceContentEntry = {}));
var ReplacementContentRequiredException;
(function (ReplacementContentRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplacementContentRequiredException");
    }
    ReplacementContentRequiredException.isa = isa;
})(ReplacementContentRequiredException = exports.ReplacementContentRequiredException || (exports.ReplacementContentRequiredException = {}));
var ReplacementTypeEnum;
(function (ReplacementTypeEnum) {
    ReplacementTypeEnum["KEEP_BASE"] = "KEEP_BASE";
    ReplacementTypeEnum["KEEP_DESTINATION"] = "KEEP_DESTINATION";
    ReplacementTypeEnum["KEEP_SOURCE"] = "KEEP_SOURCE";
    ReplacementTypeEnum["USE_NEW_CONTENT"] = "USE_NEW_CONTENT";
})(ReplacementTypeEnum = exports.ReplacementTypeEnum || (exports.ReplacementTypeEnum = {}));
var ReplacementTypeRequiredException;
(function (ReplacementTypeRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplacementTypeRequiredException");
    }
    ReplacementTypeRequiredException.isa = isa;
})(ReplacementTypeRequiredException = exports.ReplacementTypeRequiredException || (exports.ReplacementTypeRequiredException = {}));
var RepositoryDoesNotExistException;
(function (RepositoryDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RepositoryDoesNotExistException");
    }
    RepositoryDoesNotExistException.isa = isa;
})(RepositoryDoesNotExistException = exports.RepositoryDoesNotExistException || (exports.RepositoryDoesNotExistException = {}));
var RepositoryLimitExceededException;
(function (RepositoryLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RepositoryLimitExceededException");
    }
    RepositoryLimitExceededException.isa = isa;
})(RepositoryLimitExceededException = exports.RepositoryLimitExceededException || (exports.RepositoryLimitExceededException = {}));
var RepositoryMetadata;
(function (RepositoryMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "RepositoryMetadata");
    }
    RepositoryMetadata.isa = isa;
})(RepositoryMetadata = exports.RepositoryMetadata || (exports.RepositoryMetadata = {}));
var RepositoryNameExistsException;
(function (RepositoryNameExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RepositoryNameExistsException");
    }
    RepositoryNameExistsException.isa = isa;
})(RepositoryNameExistsException = exports.RepositoryNameExistsException || (exports.RepositoryNameExistsException = {}));
var RepositoryNameIdPair;
(function (RepositoryNameIdPair) {
    function isa(o) {
        return smithy_client_1.isa(o, "RepositoryNameIdPair");
    }
    RepositoryNameIdPair.isa = isa;
})(RepositoryNameIdPair = exports.RepositoryNameIdPair || (exports.RepositoryNameIdPair = {}));
var RepositoryNameRequiredException;
(function (RepositoryNameRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RepositoryNameRequiredException");
    }
    RepositoryNameRequiredException.isa = isa;
})(RepositoryNameRequiredException = exports.RepositoryNameRequiredException || (exports.RepositoryNameRequiredException = {}));
var RepositoryNamesRequiredException;
(function (RepositoryNamesRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RepositoryNamesRequiredException");
    }
    RepositoryNamesRequiredException.isa = isa;
})(RepositoryNamesRequiredException = exports.RepositoryNamesRequiredException || (exports.RepositoryNamesRequiredException = {}));
var RepositoryNotAssociatedWithPullRequestException;
(function (RepositoryNotAssociatedWithPullRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RepositoryNotAssociatedWithPullRequestException");
    }
    RepositoryNotAssociatedWithPullRequestException.isa = isa;
})(RepositoryNotAssociatedWithPullRequestException = exports.RepositoryNotAssociatedWithPullRequestException || (exports.RepositoryNotAssociatedWithPullRequestException = {}));
var RepositoryTrigger;
(function (RepositoryTrigger) {
    function isa(o) {
        return smithy_client_1.isa(o, "RepositoryTrigger");
    }
    RepositoryTrigger.isa = isa;
})(RepositoryTrigger = exports.RepositoryTrigger || (exports.RepositoryTrigger = {}));
var RepositoryTriggerBranchNameListRequiredException;
(function (RepositoryTriggerBranchNameListRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RepositoryTriggerBranchNameListRequiredException");
    }
    RepositoryTriggerBranchNameListRequiredException.isa = isa;
})(RepositoryTriggerBranchNameListRequiredException = exports.RepositoryTriggerBranchNameListRequiredException || (exports.RepositoryTriggerBranchNameListRequiredException = {}));
var RepositoryTriggerDestinationArnRequiredException;
(function (RepositoryTriggerDestinationArnRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RepositoryTriggerDestinationArnRequiredException");
    }
    RepositoryTriggerDestinationArnRequiredException.isa = isa;
})(RepositoryTriggerDestinationArnRequiredException = exports.RepositoryTriggerDestinationArnRequiredException || (exports.RepositoryTriggerDestinationArnRequiredException = {}));
var RepositoryTriggerEventEnum;
(function (RepositoryTriggerEventEnum) {
    RepositoryTriggerEventEnum["ALL"] = "all";
    RepositoryTriggerEventEnum["CREATE_REFERENCE"] = "createReference";
    RepositoryTriggerEventEnum["DELETE_REFERENCE"] = "deleteReference";
    RepositoryTriggerEventEnum["UPDATE_REFERENCE"] = "updateReference";
})(RepositoryTriggerEventEnum = exports.RepositoryTriggerEventEnum || (exports.RepositoryTriggerEventEnum = {}));
var RepositoryTriggerEventsListRequiredException;
(function (RepositoryTriggerEventsListRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RepositoryTriggerEventsListRequiredException");
    }
    RepositoryTriggerEventsListRequiredException.isa = isa;
})(RepositoryTriggerEventsListRequiredException = exports.RepositoryTriggerEventsListRequiredException || (exports.RepositoryTriggerEventsListRequiredException = {}));
var RepositoryTriggerExecutionFailure;
(function (RepositoryTriggerExecutionFailure) {
    function isa(o) {
        return smithy_client_1.isa(o, "RepositoryTriggerExecutionFailure");
    }
    RepositoryTriggerExecutionFailure.isa = isa;
})(RepositoryTriggerExecutionFailure = exports.RepositoryTriggerExecutionFailure || (exports.RepositoryTriggerExecutionFailure = {}));
var RepositoryTriggerNameRequiredException;
(function (RepositoryTriggerNameRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RepositoryTriggerNameRequiredException");
    }
    RepositoryTriggerNameRequiredException.isa = isa;
})(RepositoryTriggerNameRequiredException = exports.RepositoryTriggerNameRequiredException || (exports.RepositoryTriggerNameRequiredException = {}));
var RepositoryTriggersListRequiredException;
(function (RepositoryTriggersListRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RepositoryTriggersListRequiredException");
    }
    RepositoryTriggersListRequiredException.isa = isa;
})(RepositoryTriggersListRequiredException = exports.RepositoryTriggersListRequiredException || (exports.RepositoryTriggersListRequiredException = {}));
var ResourceArnRequiredException;
(function (ResourceArnRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceArnRequiredException");
    }
    ResourceArnRequiredException.isa = isa;
})(ResourceArnRequiredException = exports.ResourceArnRequiredException || (exports.ResourceArnRequiredException = {}));
var RestrictedSourceFileException;
(function (RestrictedSourceFileException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestrictedSourceFileException");
    }
    RestrictedSourceFileException.isa = isa;
})(RestrictedSourceFileException = exports.RestrictedSourceFileException || (exports.RestrictedSourceFileException = {}));
var RevisionIdRequiredException;
(function (RevisionIdRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RevisionIdRequiredException");
    }
    RevisionIdRequiredException.isa = isa;
})(RevisionIdRequiredException = exports.RevisionIdRequiredException || (exports.RevisionIdRequiredException = {}));
var RevisionNotCurrentException;
(function (RevisionNotCurrentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RevisionNotCurrentException");
    }
    RevisionNotCurrentException.isa = isa;
})(RevisionNotCurrentException = exports.RevisionNotCurrentException || (exports.RevisionNotCurrentException = {}));
var SameFileContentException;
(function (SameFileContentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "SameFileContentException");
    }
    SameFileContentException.isa = isa;
})(SameFileContentException = exports.SameFileContentException || (exports.SameFileContentException = {}));
var SamePathRequestException;
(function (SamePathRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "SamePathRequestException");
    }
    SamePathRequestException.isa = isa;
})(SamePathRequestException = exports.SamePathRequestException || (exports.SamePathRequestException = {}));
var SetFileModeEntry;
(function (SetFileModeEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetFileModeEntry");
    }
    SetFileModeEntry.isa = isa;
})(SetFileModeEntry = exports.SetFileModeEntry || (exports.SetFileModeEntry = {}));
var SortByEnum;
(function (SortByEnum) {
    SortByEnum["MODIFIED_DATE"] = "lastModifiedDate";
    SortByEnum["REPOSITORY_NAME"] = "repositoryName";
})(SortByEnum = exports.SortByEnum || (exports.SortByEnum = {}));
var SourceAndDestinationAreSameException;
(function (SourceAndDestinationAreSameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "SourceAndDestinationAreSameException");
    }
    SourceAndDestinationAreSameException.isa = isa;
})(SourceAndDestinationAreSameException = exports.SourceAndDestinationAreSameException || (exports.SourceAndDestinationAreSameException = {}));
var SourceFileOrContentRequiredException;
(function (SourceFileOrContentRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "SourceFileOrContentRequiredException");
    }
    SourceFileOrContentRequiredException.isa = isa;
})(SourceFileOrContentRequiredException = exports.SourceFileOrContentRequiredException || (exports.SourceFileOrContentRequiredException = {}));
var SourceFileSpecifier;
(function (SourceFileSpecifier) {
    function isa(o) {
        return smithy_client_1.isa(o, "SourceFileSpecifier");
    }
    SourceFileSpecifier.isa = isa;
})(SourceFileSpecifier = exports.SourceFileSpecifier || (exports.SourceFileSpecifier = {}));
var SubModule;
(function (SubModule) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubModule");
    }
    SubModule.isa = isa;
})(SubModule = exports.SubModule || (exports.SubModule = {}));
var SymbolicLink;
(function (SymbolicLink) {
    function isa(o) {
        return smithy_client_1.isa(o, "SymbolicLink");
    }
    SymbolicLink.isa = isa;
})(SymbolicLink = exports.SymbolicLink || (exports.SymbolicLink = {}));
var TagKeysListRequiredException;
(function (TagKeysListRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagKeysListRequiredException");
    }
    TagKeysListRequiredException.isa = isa;
})(TagKeysListRequiredException = exports.TagKeysListRequiredException || (exports.TagKeysListRequiredException = {}));
var TagPolicyException;
(function (TagPolicyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagPolicyException");
    }
    TagPolicyException.isa = isa;
})(TagPolicyException = exports.TagPolicyException || (exports.TagPolicyException = {}));
var TagResourceInput;
(function (TagResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceInput");
    }
    TagResourceInput.isa = isa;
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TagsMapRequiredException;
(function (TagsMapRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagsMapRequiredException");
    }
    TagsMapRequiredException.isa = isa;
})(TagsMapRequiredException = exports.TagsMapRequiredException || (exports.TagsMapRequiredException = {}));
var Target;
(function (Target) {
    function isa(o) {
        return smithy_client_1.isa(o, "Target");
    }
    Target.isa = isa;
})(Target = exports.Target || (exports.Target = {}));
var TargetRequiredException;
(function (TargetRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetRequiredException");
    }
    TargetRequiredException.isa = isa;
})(TargetRequiredException = exports.TargetRequiredException || (exports.TargetRequiredException = {}));
var TargetsRequiredException;
(function (TargetsRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetsRequiredException");
    }
    TargetsRequiredException.isa = isa;
})(TargetsRequiredException = exports.TargetsRequiredException || (exports.TargetsRequiredException = {}));
var TestRepositoryTriggersInput;
(function (TestRepositoryTriggersInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestRepositoryTriggersInput");
    }
    TestRepositoryTriggersInput.isa = isa;
})(TestRepositoryTriggersInput = exports.TestRepositoryTriggersInput || (exports.TestRepositoryTriggersInput = {}));
var TestRepositoryTriggersOutput;
(function (TestRepositoryTriggersOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestRepositoryTriggersOutput");
    }
    TestRepositoryTriggersOutput.isa = isa;
})(TestRepositoryTriggersOutput = exports.TestRepositoryTriggersOutput || (exports.TestRepositoryTriggersOutput = {}));
var TipOfSourceReferenceIsDifferentException;
(function (TipOfSourceReferenceIsDifferentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TipOfSourceReferenceIsDifferentException");
    }
    TipOfSourceReferenceIsDifferentException.isa = isa;
})(TipOfSourceReferenceIsDifferentException = exports.TipOfSourceReferenceIsDifferentException || (exports.TipOfSourceReferenceIsDifferentException = {}));
var TipsDivergenceExceededException;
(function (TipsDivergenceExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TipsDivergenceExceededException");
    }
    TipsDivergenceExceededException.isa = isa;
})(TipsDivergenceExceededException = exports.TipsDivergenceExceededException || (exports.TipsDivergenceExceededException = {}));
var TitleRequiredException;
(function (TitleRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TitleRequiredException");
    }
    TitleRequiredException.isa = isa;
})(TitleRequiredException = exports.TitleRequiredException || (exports.TitleRequiredException = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyTagsException");
    }
    TooManyTagsException.isa = isa;
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceInput");
    }
    UntagResourceInput.isa = isa;
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var UpdateApprovalRuleTemplateContentInput;
(function (UpdateApprovalRuleTemplateContentInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateApprovalRuleTemplateContentInput");
    }
    UpdateApprovalRuleTemplateContentInput.isa = isa;
})(UpdateApprovalRuleTemplateContentInput = exports.UpdateApprovalRuleTemplateContentInput || (exports.UpdateApprovalRuleTemplateContentInput = {}));
var UpdateApprovalRuleTemplateContentOutput;
(function (UpdateApprovalRuleTemplateContentOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateApprovalRuleTemplateContentOutput");
    }
    UpdateApprovalRuleTemplateContentOutput.isa = isa;
})(UpdateApprovalRuleTemplateContentOutput = exports.UpdateApprovalRuleTemplateContentOutput || (exports.UpdateApprovalRuleTemplateContentOutput = {}));
var UpdateApprovalRuleTemplateDescriptionInput;
(function (UpdateApprovalRuleTemplateDescriptionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateApprovalRuleTemplateDescriptionInput");
    }
    UpdateApprovalRuleTemplateDescriptionInput.isa = isa;
})(UpdateApprovalRuleTemplateDescriptionInput = exports.UpdateApprovalRuleTemplateDescriptionInput || (exports.UpdateApprovalRuleTemplateDescriptionInput = {}));
var UpdateApprovalRuleTemplateDescriptionOutput;
(function (UpdateApprovalRuleTemplateDescriptionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateApprovalRuleTemplateDescriptionOutput");
    }
    UpdateApprovalRuleTemplateDescriptionOutput.isa = isa;
})(UpdateApprovalRuleTemplateDescriptionOutput = exports.UpdateApprovalRuleTemplateDescriptionOutput || (exports.UpdateApprovalRuleTemplateDescriptionOutput = {}));
var UpdateApprovalRuleTemplateNameInput;
(function (UpdateApprovalRuleTemplateNameInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateApprovalRuleTemplateNameInput");
    }
    UpdateApprovalRuleTemplateNameInput.isa = isa;
})(UpdateApprovalRuleTemplateNameInput = exports.UpdateApprovalRuleTemplateNameInput || (exports.UpdateApprovalRuleTemplateNameInput = {}));
var UpdateApprovalRuleTemplateNameOutput;
(function (UpdateApprovalRuleTemplateNameOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateApprovalRuleTemplateNameOutput");
    }
    UpdateApprovalRuleTemplateNameOutput.isa = isa;
})(UpdateApprovalRuleTemplateNameOutput = exports.UpdateApprovalRuleTemplateNameOutput || (exports.UpdateApprovalRuleTemplateNameOutput = {}));
var UpdateCommentInput;
(function (UpdateCommentInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCommentInput");
    }
    UpdateCommentInput.isa = isa;
})(UpdateCommentInput = exports.UpdateCommentInput || (exports.UpdateCommentInput = {}));
var UpdateCommentOutput;
(function (UpdateCommentOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCommentOutput");
    }
    UpdateCommentOutput.isa = isa;
})(UpdateCommentOutput = exports.UpdateCommentOutput || (exports.UpdateCommentOutput = {}));
var UpdateDefaultBranchInput;
(function (UpdateDefaultBranchInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDefaultBranchInput");
    }
    UpdateDefaultBranchInput.isa = isa;
})(UpdateDefaultBranchInput = exports.UpdateDefaultBranchInput || (exports.UpdateDefaultBranchInput = {}));
var UpdatePullRequestApprovalRuleContentInput;
(function (UpdatePullRequestApprovalRuleContentInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePullRequestApprovalRuleContentInput");
    }
    UpdatePullRequestApprovalRuleContentInput.isa = isa;
})(UpdatePullRequestApprovalRuleContentInput = exports.UpdatePullRequestApprovalRuleContentInput || (exports.UpdatePullRequestApprovalRuleContentInput = {}));
var UpdatePullRequestApprovalRuleContentOutput;
(function (UpdatePullRequestApprovalRuleContentOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePullRequestApprovalRuleContentOutput");
    }
    UpdatePullRequestApprovalRuleContentOutput.isa = isa;
})(UpdatePullRequestApprovalRuleContentOutput = exports.UpdatePullRequestApprovalRuleContentOutput || (exports.UpdatePullRequestApprovalRuleContentOutput = {}));
var UpdatePullRequestApprovalStateInput;
(function (UpdatePullRequestApprovalStateInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePullRequestApprovalStateInput");
    }
    UpdatePullRequestApprovalStateInput.isa = isa;
})(UpdatePullRequestApprovalStateInput = exports.UpdatePullRequestApprovalStateInput || (exports.UpdatePullRequestApprovalStateInput = {}));
var UpdatePullRequestDescriptionInput;
(function (UpdatePullRequestDescriptionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePullRequestDescriptionInput");
    }
    UpdatePullRequestDescriptionInput.isa = isa;
})(UpdatePullRequestDescriptionInput = exports.UpdatePullRequestDescriptionInput || (exports.UpdatePullRequestDescriptionInput = {}));
var UpdatePullRequestDescriptionOutput;
(function (UpdatePullRequestDescriptionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePullRequestDescriptionOutput");
    }
    UpdatePullRequestDescriptionOutput.isa = isa;
})(UpdatePullRequestDescriptionOutput = exports.UpdatePullRequestDescriptionOutput || (exports.UpdatePullRequestDescriptionOutput = {}));
var UpdatePullRequestStatusInput;
(function (UpdatePullRequestStatusInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePullRequestStatusInput");
    }
    UpdatePullRequestStatusInput.isa = isa;
})(UpdatePullRequestStatusInput = exports.UpdatePullRequestStatusInput || (exports.UpdatePullRequestStatusInput = {}));
var UpdatePullRequestStatusOutput;
(function (UpdatePullRequestStatusOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePullRequestStatusOutput");
    }
    UpdatePullRequestStatusOutput.isa = isa;
})(UpdatePullRequestStatusOutput = exports.UpdatePullRequestStatusOutput || (exports.UpdatePullRequestStatusOutput = {}));
var UpdatePullRequestTitleInput;
(function (UpdatePullRequestTitleInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePullRequestTitleInput");
    }
    UpdatePullRequestTitleInput.isa = isa;
})(UpdatePullRequestTitleInput = exports.UpdatePullRequestTitleInput || (exports.UpdatePullRequestTitleInput = {}));
var UpdatePullRequestTitleOutput;
(function (UpdatePullRequestTitleOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePullRequestTitleOutput");
    }
    UpdatePullRequestTitleOutput.isa = isa;
})(UpdatePullRequestTitleOutput = exports.UpdatePullRequestTitleOutput || (exports.UpdatePullRequestTitleOutput = {}));
var UpdateRepositoryDescriptionInput;
(function (UpdateRepositoryDescriptionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRepositoryDescriptionInput");
    }
    UpdateRepositoryDescriptionInput.isa = isa;
})(UpdateRepositoryDescriptionInput = exports.UpdateRepositoryDescriptionInput || (exports.UpdateRepositoryDescriptionInput = {}));
var UpdateRepositoryNameInput;
(function (UpdateRepositoryNameInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRepositoryNameInput");
    }
    UpdateRepositoryNameInput.isa = isa;
})(UpdateRepositoryNameInput = exports.UpdateRepositoryNameInput || (exports.UpdateRepositoryNameInput = {}));
var UserInfo;
(function (UserInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserInfo");
    }
    UserInfo.isa = isa;
})(UserInfo = exports.UserInfo || (exports.UserInfo = {}));
//# sourceMappingURL=index.js.map
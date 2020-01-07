"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessDeniedException");
    }
    AccessDeniedException.isa = isa;
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AssociateMemberAccountRequest;
(function (AssociateMemberAccountRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateMemberAccountRequest");
    }
    AssociateMemberAccountRequest.isa = isa;
})(AssociateMemberAccountRequest = exports.AssociateMemberAccountRequest || (exports.AssociateMemberAccountRequest = {}));
var AssociateS3ResourcesRequest;
(function (AssociateS3ResourcesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateS3ResourcesRequest");
    }
    AssociateS3ResourcesRequest.isa = isa;
})(AssociateS3ResourcesRequest = exports.AssociateS3ResourcesRequest || (exports.AssociateS3ResourcesRequest = {}));
var AssociateS3ResourcesResult;
(function (AssociateS3ResourcesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateS3ResourcesResult");
    }
    AssociateS3ResourcesResult.isa = isa;
})(AssociateS3ResourcesResult = exports.AssociateS3ResourcesResult || (exports.AssociateS3ResourcesResult = {}));
var ClassificationType;
(function (ClassificationType) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClassificationType");
    }
    ClassificationType.isa = isa;
})(ClassificationType = exports.ClassificationType || (exports.ClassificationType = {}));
var ClassificationTypeUpdate;
(function (ClassificationTypeUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClassificationTypeUpdate");
    }
    ClassificationTypeUpdate.isa = isa;
})(ClassificationTypeUpdate = exports.ClassificationTypeUpdate || (exports.ClassificationTypeUpdate = {}));
var DisassociateMemberAccountRequest;
(function (DisassociateMemberAccountRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateMemberAccountRequest");
    }
    DisassociateMemberAccountRequest.isa = isa;
})(DisassociateMemberAccountRequest = exports.DisassociateMemberAccountRequest || (exports.DisassociateMemberAccountRequest = {}));
var DisassociateS3ResourcesRequest;
(function (DisassociateS3ResourcesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateS3ResourcesRequest");
    }
    DisassociateS3ResourcesRequest.isa = isa;
})(DisassociateS3ResourcesRequest = exports.DisassociateS3ResourcesRequest || (exports.DisassociateS3ResourcesRequest = {}));
var DisassociateS3ResourcesResult;
(function (DisassociateS3ResourcesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateS3ResourcesResult");
    }
    DisassociateS3ResourcesResult.isa = isa;
})(DisassociateS3ResourcesResult = exports.DisassociateS3ResourcesResult || (exports.DisassociateS3ResourcesResult = {}));
var FailedS3Resource;
(function (FailedS3Resource) {
    function isa(o) {
        return smithy_client_1.isa(o, "FailedS3Resource");
    }
    FailedS3Resource.isa = isa;
})(FailedS3Resource = exports.FailedS3Resource || (exports.FailedS3Resource = {}));
var InternalException;
(function (InternalException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalException");
    }
    InternalException.isa = isa;
})(InternalException = exports.InternalException || (exports.InternalException = {}));
var InvalidInputException;
(function (InvalidInputException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInputException");
    }
    InvalidInputException.isa = isa;
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListMemberAccountsRequest;
(function (ListMemberAccountsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMemberAccountsRequest");
    }
    ListMemberAccountsRequest.isa = isa;
})(ListMemberAccountsRequest = exports.ListMemberAccountsRequest || (exports.ListMemberAccountsRequest = {}));
var ListMemberAccountsResult;
(function (ListMemberAccountsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMemberAccountsResult");
    }
    ListMemberAccountsResult.isa = isa;
})(ListMemberAccountsResult = exports.ListMemberAccountsResult || (exports.ListMemberAccountsResult = {}));
var ListS3ResourcesRequest;
(function (ListS3ResourcesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListS3ResourcesRequest");
    }
    ListS3ResourcesRequest.isa = isa;
})(ListS3ResourcesRequest = exports.ListS3ResourcesRequest || (exports.ListS3ResourcesRequest = {}));
var ListS3ResourcesResult;
(function (ListS3ResourcesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListS3ResourcesResult");
    }
    ListS3ResourcesResult.isa = isa;
})(ListS3ResourcesResult = exports.ListS3ResourcesResult || (exports.ListS3ResourcesResult = {}));
var MemberAccount;
(function (MemberAccount) {
    function isa(o) {
        return smithy_client_1.isa(o, "MemberAccount");
    }
    MemberAccount.isa = isa;
})(MemberAccount = exports.MemberAccount || (exports.MemberAccount = {}));
var S3ContinuousClassificationType;
(function (S3ContinuousClassificationType) {
    S3ContinuousClassificationType["FULL"] = "FULL";
})(S3ContinuousClassificationType = exports.S3ContinuousClassificationType || (exports.S3ContinuousClassificationType = {}));
var S3OneTimeClassificationType;
(function (S3OneTimeClassificationType) {
    S3OneTimeClassificationType["FULL"] = "FULL";
    S3OneTimeClassificationType["NONE"] = "NONE";
})(S3OneTimeClassificationType = exports.S3OneTimeClassificationType || (exports.S3OneTimeClassificationType = {}));
var S3Resource;
(function (S3Resource) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Resource");
    }
    S3Resource.isa = isa;
})(S3Resource = exports.S3Resource || (exports.S3Resource = {}));
var S3ResourceClassification;
(function (S3ResourceClassification) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3ResourceClassification");
    }
    S3ResourceClassification.isa = isa;
})(S3ResourceClassification = exports.S3ResourceClassification || (exports.S3ResourceClassification = {}));
var S3ResourceClassificationUpdate;
(function (S3ResourceClassificationUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3ResourceClassificationUpdate");
    }
    S3ResourceClassificationUpdate.isa = isa;
})(S3ResourceClassificationUpdate = exports.S3ResourceClassificationUpdate || (exports.S3ResourceClassificationUpdate = {}));
var UpdateS3ResourcesRequest;
(function (UpdateS3ResourcesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateS3ResourcesRequest");
    }
    UpdateS3ResourcesRequest.isa = isa;
})(UpdateS3ResourcesRequest = exports.UpdateS3ResourcesRequest || (exports.UpdateS3ResourcesRequest = {}));
var UpdateS3ResourcesResult;
(function (UpdateS3ResourcesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateS3ResourcesResult");
    }
    UpdateS3ResourcesResult.isa = isa;
})(UpdateS3ResourcesResult = exports.UpdateS3ResourcesResult || (exports.UpdateS3ResourcesResult = {}));
//# sourceMappingURL=index.js.map
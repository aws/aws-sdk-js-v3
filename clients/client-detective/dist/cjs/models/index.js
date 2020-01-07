"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AcceptInvitationRequest;
(function (AcceptInvitationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AcceptInvitationRequest");
    }
    AcceptInvitationRequest.isa = isa;
})(AcceptInvitationRequest = exports.AcceptInvitationRequest || (exports.AcceptInvitationRequest = {}));
var Account;
(function (Account) {
    function isa(o) {
        return smithy_client_1.isa(o, "Account");
    }
    Account.isa = isa;
})(Account = exports.Account || (exports.Account = {}));
var ConflictException;
(function (ConflictException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConflictException");
    }
    ConflictException.isa = isa;
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var CreateGraphResponse;
(function (CreateGraphResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGraphResponse");
    }
    CreateGraphResponse.isa = isa;
})(CreateGraphResponse = exports.CreateGraphResponse || (exports.CreateGraphResponse = {}));
var CreateMembersRequest;
(function (CreateMembersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMembersRequest");
    }
    CreateMembersRequest.isa = isa;
})(CreateMembersRequest = exports.CreateMembersRequest || (exports.CreateMembersRequest = {}));
var CreateMembersResponse;
(function (CreateMembersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMembersResponse");
    }
    CreateMembersResponse.isa = isa;
})(CreateMembersResponse = exports.CreateMembersResponse || (exports.CreateMembersResponse = {}));
var DeleteGraphRequest;
(function (DeleteGraphRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteGraphRequest");
    }
    DeleteGraphRequest.isa = isa;
})(DeleteGraphRequest = exports.DeleteGraphRequest || (exports.DeleteGraphRequest = {}));
var DeleteMembersRequest;
(function (DeleteMembersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMembersRequest");
    }
    DeleteMembersRequest.isa = isa;
})(DeleteMembersRequest = exports.DeleteMembersRequest || (exports.DeleteMembersRequest = {}));
var DeleteMembersResponse;
(function (DeleteMembersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMembersResponse");
    }
    DeleteMembersResponse.isa = isa;
})(DeleteMembersResponse = exports.DeleteMembersResponse || (exports.DeleteMembersResponse = {}));
var DisassociateMembershipRequest;
(function (DisassociateMembershipRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateMembershipRequest");
    }
    DisassociateMembershipRequest.isa = isa;
})(DisassociateMembershipRequest = exports.DisassociateMembershipRequest || (exports.DisassociateMembershipRequest = {}));
var GetMembersRequest;
(function (GetMembersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMembersRequest");
    }
    GetMembersRequest.isa = isa;
})(GetMembersRequest = exports.GetMembersRequest || (exports.GetMembersRequest = {}));
var GetMembersResponse;
(function (GetMembersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMembersResponse");
    }
    GetMembersResponse.isa = isa;
})(GetMembersResponse = exports.GetMembersResponse || (exports.GetMembersResponse = {}));
var Graph;
(function (Graph) {
    function isa(o) {
        return smithy_client_1.isa(o, "Graph");
    }
    Graph.isa = isa;
})(Graph = exports.Graph || (exports.Graph = {}));
var InternalServerException;
(function (InternalServerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerException");
    }
    InternalServerException.isa = isa;
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ListGraphsRequest;
(function (ListGraphsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGraphsRequest");
    }
    ListGraphsRequest.isa = isa;
})(ListGraphsRequest = exports.ListGraphsRequest || (exports.ListGraphsRequest = {}));
var ListGraphsResponse;
(function (ListGraphsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGraphsResponse");
    }
    ListGraphsResponse.isa = isa;
})(ListGraphsResponse = exports.ListGraphsResponse || (exports.ListGraphsResponse = {}));
var ListInvitationsRequest;
(function (ListInvitationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInvitationsRequest");
    }
    ListInvitationsRequest.isa = isa;
})(ListInvitationsRequest = exports.ListInvitationsRequest || (exports.ListInvitationsRequest = {}));
var ListInvitationsResponse;
(function (ListInvitationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInvitationsResponse");
    }
    ListInvitationsResponse.isa = isa;
})(ListInvitationsResponse = exports.ListInvitationsResponse || (exports.ListInvitationsResponse = {}));
var ListMembersRequest;
(function (ListMembersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMembersRequest");
    }
    ListMembersRequest.isa = isa;
})(ListMembersRequest = exports.ListMembersRequest || (exports.ListMembersRequest = {}));
var ListMembersResponse;
(function (ListMembersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMembersResponse");
    }
    ListMembersResponse.isa = isa;
})(ListMembersResponse = exports.ListMembersResponse || (exports.ListMembersResponse = {}));
var MemberDetail;
(function (MemberDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "MemberDetail");
    }
    MemberDetail.isa = isa;
})(MemberDetail = exports.MemberDetail || (exports.MemberDetail = {}));
var MemberStatus;
(function (MemberStatus) {
    MemberStatus["ENABLED"] = "ENABLED";
    MemberStatus["INVITED"] = "INVITED";
    MemberStatus["VERIFICATION_FAILED"] = "VERIFICATION_FAILED";
    MemberStatus["VERIFICATION_IN_PROGRESS"] = "VERIFICATION_IN_PROGRESS";
})(MemberStatus = exports.MemberStatus || (exports.MemberStatus = {}));
var RejectInvitationRequest;
(function (RejectInvitationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RejectInvitationRequest");
    }
    RejectInvitationRequest.isa = isa;
})(RejectInvitationRequest = exports.RejectInvitationRequest || (exports.RejectInvitationRequest = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceQuotaExceededException");
    }
    ServiceQuotaExceededException.isa = isa;
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var UnprocessedAccount;
(function (UnprocessedAccount) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnprocessedAccount");
    }
    UnprocessedAccount.isa = isa;
})(UnprocessedAccount = exports.UnprocessedAccount || (exports.UnprocessedAccount = {}));
var ValidationException;
(function (ValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidationException");
    }
    ValidationException.isa = isa;
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AcceptQualificationRequestRequest;
(function (AcceptQualificationRequestRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AcceptQualificationRequestRequest");
    }
    AcceptQualificationRequestRequest.isa = isa;
})(AcceptQualificationRequestRequest = exports.AcceptQualificationRequestRequest || (exports.AcceptQualificationRequestRequest = {}));
var AcceptQualificationRequestResponse;
(function (AcceptQualificationRequestResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AcceptQualificationRequestResponse");
    }
    AcceptQualificationRequestResponse.isa = isa;
})(AcceptQualificationRequestResponse = exports.AcceptQualificationRequestResponse || (exports.AcceptQualificationRequestResponse = {}));
var ApproveAssignmentRequest;
(function (ApproveAssignmentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApproveAssignmentRequest");
    }
    ApproveAssignmentRequest.isa = isa;
})(ApproveAssignmentRequest = exports.ApproveAssignmentRequest || (exports.ApproveAssignmentRequest = {}));
var ApproveAssignmentResponse;
(function (ApproveAssignmentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApproveAssignmentResponse");
    }
    ApproveAssignmentResponse.isa = isa;
})(ApproveAssignmentResponse = exports.ApproveAssignmentResponse || (exports.ApproveAssignmentResponse = {}));
var Assignment;
(function (Assignment) {
    function isa(o) {
        return smithy_client_1.isa(o, "Assignment");
    }
    Assignment.isa = isa;
})(Assignment = exports.Assignment || (exports.Assignment = {}));
var AssignmentStatus;
(function (AssignmentStatus) {
    AssignmentStatus["Approved"] = "Approved";
    AssignmentStatus["Rejected"] = "Rejected";
    AssignmentStatus["Submitted"] = "Submitted";
})(AssignmentStatus = exports.AssignmentStatus || (exports.AssignmentStatus = {}));
var AssociateQualificationWithWorkerRequest;
(function (AssociateQualificationWithWorkerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateQualificationWithWorkerRequest");
    }
    AssociateQualificationWithWorkerRequest.isa = isa;
})(AssociateQualificationWithWorkerRequest = exports.AssociateQualificationWithWorkerRequest || (exports.AssociateQualificationWithWorkerRequest = {}));
var AssociateQualificationWithWorkerResponse;
(function (AssociateQualificationWithWorkerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateQualificationWithWorkerResponse");
    }
    AssociateQualificationWithWorkerResponse.isa = isa;
})(AssociateQualificationWithWorkerResponse = exports.AssociateQualificationWithWorkerResponse || (exports.AssociateQualificationWithWorkerResponse = {}));
var BonusPayment;
(function (BonusPayment) {
    function isa(o) {
        return smithy_client_1.isa(o, "BonusPayment");
    }
    BonusPayment.isa = isa;
})(BonusPayment = exports.BonusPayment || (exports.BonusPayment = {}));
var Comparator;
(function (Comparator) {
    Comparator["DoesNotExist"] = "DoesNotExist";
    Comparator["EqualTo"] = "EqualTo";
    Comparator["Exists"] = "Exists";
    Comparator["GreaterThan"] = "GreaterThan";
    Comparator["GreaterThanOrEqualTo"] = "GreaterThanOrEqualTo";
    Comparator["In"] = "In";
    Comparator["LessThan"] = "LessThan";
    Comparator["LessThanOrEqualTo"] = "LessThanOrEqualTo";
    Comparator["NotEqualTo"] = "NotEqualTo";
    Comparator["NotIn"] = "NotIn";
})(Comparator = exports.Comparator || (exports.Comparator = {}));
var CreateAdditionalAssignmentsForHITRequest;
(function (CreateAdditionalAssignmentsForHITRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAdditionalAssignmentsForHITRequest");
    }
    CreateAdditionalAssignmentsForHITRequest.isa = isa;
})(CreateAdditionalAssignmentsForHITRequest = exports.CreateAdditionalAssignmentsForHITRequest || (exports.CreateAdditionalAssignmentsForHITRequest = {}));
var CreateAdditionalAssignmentsForHITResponse;
(function (CreateAdditionalAssignmentsForHITResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAdditionalAssignmentsForHITResponse");
    }
    CreateAdditionalAssignmentsForHITResponse.isa = isa;
})(CreateAdditionalAssignmentsForHITResponse = exports.CreateAdditionalAssignmentsForHITResponse || (exports.CreateAdditionalAssignmentsForHITResponse = {}));
var CreateHITRequest;
(function (CreateHITRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHITRequest");
    }
    CreateHITRequest.isa = isa;
})(CreateHITRequest = exports.CreateHITRequest || (exports.CreateHITRequest = {}));
var CreateHITResponse;
(function (CreateHITResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHITResponse");
    }
    CreateHITResponse.isa = isa;
})(CreateHITResponse = exports.CreateHITResponse || (exports.CreateHITResponse = {}));
var CreateHITTypeRequest;
(function (CreateHITTypeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHITTypeRequest");
    }
    CreateHITTypeRequest.isa = isa;
})(CreateHITTypeRequest = exports.CreateHITTypeRequest || (exports.CreateHITTypeRequest = {}));
var CreateHITTypeResponse;
(function (CreateHITTypeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHITTypeResponse");
    }
    CreateHITTypeResponse.isa = isa;
})(CreateHITTypeResponse = exports.CreateHITTypeResponse || (exports.CreateHITTypeResponse = {}));
var CreateHITWithHITTypeRequest;
(function (CreateHITWithHITTypeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHITWithHITTypeRequest");
    }
    CreateHITWithHITTypeRequest.isa = isa;
})(CreateHITWithHITTypeRequest = exports.CreateHITWithHITTypeRequest || (exports.CreateHITWithHITTypeRequest = {}));
var CreateHITWithHITTypeResponse;
(function (CreateHITWithHITTypeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHITWithHITTypeResponse");
    }
    CreateHITWithHITTypeResponse.isa = isa;
})(CreateHITWithHITTypeResponse = exports.CreateHITWithHITTypeResponse || (exports.CreateHITWithHITTypeResponse = {}));
var CreateQualificationTypeRequest;
(function (CreateQualificationTypeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateQualificationTypeRequest");
    }
    CreateQualificationTypeRequest.isa = isa;
})(CreateQualificationTypeRequest = exports.CreateQualificationTypeRequest || (exports.CreateQualificationTypeRequest = {}));
var CreateQualificationTypeResponse;
(function (CreateQualificationTypeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateQualificationTypeResponse");
    }
    CreateQualificationTypeResponse.isa = isa;
})(CreateQualificationTypeResponse = exports.CreateQualificationTypeResponse || (exports.CreateQualificationTypeResponse = {}));
var CreateWorkerBlockRequest;
(function (CreateWorkerBlockRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateWorkerBlockRequest");
    }
    CreateWorkerBlockRequest.isa = isa;
})(CreateWorkerBlockRequest = exports.CreateWorkerBlockRequest || (exports.CreateWorkerBlockRequest = {}));
var CreateWorkerBlockResponse;
(function (CreateWorkerBlockResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateWorkerBlockResponse");
    }
    CreateWorkerBlockResponse.isa = isa;
})(CreateWorkerBlockResponse = exports.CreateWorkerBlockResponse || (exports.CreateWorkerBlockResponse = {}));
var DeleteHITRequest;
(function (DeleteHITRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteHITRequest");
    }
    DeleteHITRequest.isa = isa;
})(DeleteHITRequest = exports.DeleteHITRequest || (exports.DeleteHITRequest = {}));
var DeleteHITResponse;
(function (DeleteHITResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteHITResponse");
    }
    DeleteHITResponse.isa = isa;
})(DeleteHITResponse = exports.DeleteHITResponse || (exports.DeleteHITResponse = {}));
var DeleteQualificationTypeRequest;
(function (DeleteQualificationTypeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteQualificationTypeRequest");
    }
    DeleteQualificationTypeRequest.isa = isa;
})(DeleteQualificationTypeRequest = exports.DeleteQualificationTypeRequest || (exports.DeleteQualificationTypeRequest = {}));
var DeleteQualificationTypeResponse;
(function (DeleteQualificationTypeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteQualificationTypeResponse");
    }
    DeleteQualificationTypeResponse.isa = isa;
})(DeleteQualificationTypeResponse = exports.DeleteQualificationTypeResponse || (exports.DeleteQualificationTypeResponse = {}));
var DeleteWorkerBlockRequest;
(function (DeleteWorkerBlockRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteWorkerBlockRequest");
    }
    DeleteWorkerBlockRequest.isa = isa;
})(DeleteWorkerBlockRequest = exports.DeleteWorkerBlockRequest || (exports.DeleteWorkerBlockRequest = {}));
var DeleteWorkerBlockResponse;
(function (DeleteWorkerBlockResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteWorkerBlockResponse");
    }
    DeleteWorkerBlockResponse.isa = isa;
})(DeleteWorkerBlockResponse = exports.DeleteWorkerBlockResponse || (exports.DeleteWorkerBlockResponse = {}));
var DisassociateQualificationFromWorkerRequest;
(function (DisassociateQualificationFromWorkerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateQualificationFromWorkerRequest");
    }
    DisassociateQualificationFromWorkerRequest.isa = isa;
})(DisassociateQualificationFromWorkerRequest = exports.DisassociateQualificationFromWorkerRequest || (exports.DisassociateQualificationFromWorkerRequest = {}));
var DisassociateQualificationFromWorkerResponse;
(function (DisassociateQualificationFromWorkerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateQualificationFromWorkerResponse");
    }
    DisassociateQualificationFromWorkerResponse.isa = isa;
})(DisassociateQualificationFromWorkerResponse = exports.DisassociateQualificationFromWorkerResponse || (exports.DisassociateQualificationFromWorkerResponse = {}));
var EventType;
(function (EventType) {
    EventType["AssignmentAbandoned"] = "AssignmentAbandoned";
    EventType["AssignmentAccepted"] = "AssignmentAccepted";
    EventType["AssignmentApproved"] = "AssignmentApproved";
    EventType["AssignmentRejected"] = "AssignmentRejected";
    EventType["AssignmentReturned"] = "AssignmentReturned";
    EventType["AssignmentSubmitted"] = "AssignmentSubmitted";
    EventType["HITCreated"] = "HITCreated";
    EventType["HITDisposed"] = "HITDisposed";
    EventType["HITExpired"] = "HITExpired";
    EventType["HITExtended"] = "HITExtended";
    EventType["HITReviewable"] = "HITReviewable";
    EventType["Ping"] = "Ping";
})(EventType = exports.EventType || (exports.EventType = {}));
var GetAccountBalanceRequest;
(function (GetAccountBalanceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccountBalanceRequest");
    }
    GetAccountBalanceRequest.isa = isa;
})(GetAccountBalanceRequest = exports.GetAccountBalanceRequest || (exports.GetAccountBalanceRequest = {}));
var GetAccountBalanceResponse;
(function (GetAccountBalanceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccountBalanceResponse");
    }
    GetAccountBalanceResponse.isa = isa;
})(GetAccountBalanceResponse = exports.GetAccountBalanceResponse || (exports.GetAccountBalanceResponse = {}));
var GetAssignmentRequest;
(function (GetAssignmentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAssignmentRequest");
    }
    GetAssignmentRequest.isa = isa;
})(GetAssignmentRequest = exports.GetAssignmentRequest || (exports.GetAssignmentRequest = {}));
var GetAssignmentResponse;
(function (GetAssignmentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAssignmentResponse");
    }
    GetAssignmentResponse.isa = isa;
})(GetAssignmentResponse = exports.GetAssignmentResponse || (exports.GetAssignmentResponse = {}));
var GetFileUploadURLRequest;
(function (GetFileUploadURLRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFileUploadURLRequest");
    }
    GetFileUploadURLRequest.isa = isa;
})(GetFileUploadURLRequest = exports.GetFileUploadURLRequest || (exports.GetFileUploadURLRequest = {}));
var GetFileUploadURLResponse;
(function (GetFileUploadURLResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFileUploadURLResponse");
    }
    GetFileUploadURLResponse.isa = isa;
})(GetFileUploadURLResponse = exports.GetFileUploadURLResponse || (exports.GetFileUploadURLResponse = {}));
var GetHITRequest;
(function (GetHITRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetHITRequest");
    }
    GetHITRequest.isa = isa;
})(GetHITRequest = exports.GetHITRequest || (exports.GetHITRequest = {}));
var GetHITResponse;
(function (GetHITResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetHITResponse");
    }
    GetHITResponse.isa = isa;
})(GetHITResponse = exports.GetHITResponse || (exports.GetHITResponse = {}));
var GetQualificationScoreRequest;
(function (GetQualificationScoreRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetQualificationScoreRequest");
    }
    GetQualificationScoreRequest.isa = isa;
})(GetQualificationScoreRequest = exports.GetQualificationScoreRequest || (exports.GetQualificationScoreRequest = {}));
var GetQualificationScoreResponse;
(function (GetQualificationScoreResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetQualificationScoreResponse");
    }
    GetQualificationScoreResponse.isa = isa;
})(GetQualificationScoreResponse = exports.GetQualificationScoreResponse || (exports.GetQualificationScoreResponse = {}));
var GetQualificationTypeRequest;
(function (GetQualificationTypeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetQualificationTypeRequest");
    }
    GetQualificationTypeRequest.isa = isa;
})(GetQualificationTypeRequest = exports.GetQualificationTypeRequest || (exports.GetQualificationTypeRequest = {}));
var GetQualificationTypeResponse;
(function (GetQualificationTypeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetQualificationTypeResponse");
    }
    GetQualificationTypeResponse.isa = isa;
})(GetQualificationTypeResponse = exports.GetQualificationTypeResponse || (exports.GetQualificationTypeResponse = {}));
var HIT;
(function (HIT) {
    function isa(o) {
        return smithy_client_1.isa(o, "HIT");
    }
    HIT.isa = isa;
})(HIT = exports.HIT || (exports.HIT = {}));
var HITAccessActions;
(function (HITAccessActions) {
    HITAccessActions["Accept"] = "Accept";
    HITAccessActions["DiscoverPreviewAndAccept"] = "DiscoverPreviewAndAccept";
    HITAccessActions["PreviewAndAccept"] = "PreviewAndAccept";
})(HITAccessActions = exports.HITAccessActions || (exports.HITAccessActions = {}));
var HITLayoutParameter;
(function (HITLayoutParameter) {
    function isa(o) {
        return smithy_client_1.isa(o, "HITLayoutParameter");
    }
    HITLayoutParameter.isa = isa;
})(HITLayoutParameter = exports.HITLayoutParameter || (exports.HITLayoutParameter = {}));
var HITReviewStatus;
(function (HITReviewStatus) {
    HITReviewStatus["MarkedForReview"] = "MarkedForReview";
    HITReviewStatus["NotReviewed"] = "NotReviewed";
    HITReviewStatus["ReviewedAppropriate"] = "ReviewedAppropriate";
    HITReviewStatus["ReviewedInappropriate"] = "ReviewedInappropriate";
})(HITReviewStatus = exports.HITReviewStatus || (exports.HITReviewStatus = {}));
var HITStatus;
(function (HITStatus) {
    HITStatus["Assignable"] = "Assignable";
    HITStatus["Disposed"] = "Disposed";
    HITStatus["Reviewable"] = "Reviewable";
    HITStatus["Reviewing"] = "Reviewing";
    HITStatus["Unassignable"] = "Unassignable";
})(HITStatus = exports.HITStatus || (exports.HITStatus = {}));
var ListAssignmentsForHITRequest;
(function (ListAssignmentsForHITRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssignmentsForHITRequest");
    }
    ListAssignmentsForHITRequest.isa = isa;
})(ListAssignmentsForHITRequest = exports.ListAssignmentsForHITRequest || (exports.ListAssignmentsForHITRequest = {}));
var ListAssignmentsForHITResponse;
(function (ListAssignmentsForHITResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssignmentsForHITResponse");
    }
    ListAssignmentsForHITResponse.isa = isa;
})(ListAssignmentsForHITResponse = exports.ListAssignmentsForHITResponse || (exports.ListAssignmentsForHITResponse = {}));
var ListBonusPaymentsRequest;
(function (ListBonusPaymentsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBonusPaymentsRequest");
    }
    ListBonusPaymentsRequest.isa = isa;
})(ListBonusPaymentsRequest = exports.ListBonusPaymentsRequest || (exports.ListBonusPaymentsRequest = {}));
var ListBonusPaymentsResponse;
(function (ListBonusPaymentsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBonusPaymentsResponse");
    }
    ListBonusPaymentsResponse.isa = isa;
})(ListBonusPaymentsResponse = exports.ListBonusPaymentsResponse || (exports.ListBonusPaymentsResponse = {}));
var ListHITsForQualificationTypeRequest;
(function (ListHITsForQualificationTypeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListHITsForQualificationTypeRequest");
    }
    ListHITsForQualificationTypeRequest.isa = isa;
})(ListHITsForQualificationTypeRequest = exports.ListHITsForQualificationTypeRequest || (exports.ListHITsForQualificationTypeRequest = {}));
var ListHITsForQualificationTypeResponse;
(function (ListHITsForQualificationTypeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListHITsForQualificationTypeResponse");
    }
    ListHITsForQualificationTypeResponse.isa = isa;
})(ListHITsForQualificationTypeResponse = exports.ListHITsForQualificationTypeResponse || (exports.ListHITsForQualificationTypeResponse = {}));
var ListHITsRequest;
(function (ListHITsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListHITsRequest");
    }
    ListHITsRequest.isa = isa;
})(ListHITsRequest = exports.ListHITsRequest || (exports.ListHITsRequest = {}));
var ListHITsResponse;
(function (ListHITsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListHITsResponse");
    }
    ListHITsResponse.isa = isa;
})(ListHITsResponse = exports.ListHITsResponse || (exports.ListHITsResponse = {}));
var ListQualificationRequestsRequest;
(function (ListQualificationRequestsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListQualificationRequestsRequest");
    }
    ListQualificationRequestsRequest.isa = isa;
})(ListQualificationRequestsRequest = exports.ListQualificationRequestsRequest || (exports.ListQualificationRequestsRequest = {}));
var ListQualificationRequestsResponse;
(function (ListQualificationRequestsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListQualificationRequestsResponse");
    }
    ListQualificationRequestsResponse.isa = isa;
})(ListQualificationRequestsResponse = exports.ListQualificationRequestsResponse || (exports.ListQualificationRequestsResponse = {}));
var ListQualificationTypesRequest;
(function (ListQualificationTypesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListQualificationTypesRequest");
    }
    ListQualificationTypesRequest.isa = isa;
})(ListQualificationTypesRequest = exports.ListQualificationTypesRequest || (exports.ListQualificationTypesRequest = {}));
var ListQualificationTypesResponse;
(function (ListQualificationTypesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListQualificationTypesResponse");
    }
    ListQualificationTypesResponse.isa = isa;
})(ListQualificationTypesResponse = exports.ListQualificationTypesResponse || (exports.ListQualificationTypesResponse = {}));
var ListReviewPolicyResultsForHITRequest;
(function (ListReviewPolicyResultsForHITRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListReviewPolicyResultsForHITRequest");
    }
    ListReviewPolicyResultsForHITRequest.isa = isa;
})(ListReviewPolicyResultsForHITRequest = exports.ListReviewPolicyResultsForHITRequest || (exports.ListReviewPolicyResultsForHITRequest = {}));
var ListReviewPolicyResultsForHITResponse;
(function (ListReviewPolicyResultsForHITResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListReviewPolicyResultsForHITResponse");
    }
    ListReviewPolicyResultsForHITResponse.isa = isa;
})(ListReviewPolicyResultsForHITResponse = exports.ListReviewPolicyResultsForHITResponse || (exports.ListReviewPolicyResultsForHITResponse = {}));
var ListReviewableHITsRequest;
(function (ListReviewableHITsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListReviewableHITsRequest");
    }
    ListReviewableHITsRequest.isa = isa;
})(ListReviewableHITsRequest = exports.ListReviewableHITsRequest || (exports.ListReviewableHITsRequest = {}));
var ListReviewableHITsResponse;
(function (ListReviewableHITsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListReviewableHITsResponse");
    }
    ListReviewableHITsResponse.isa = isa;
})(ListReviewableHITsResponse = exports.ListReviewableHITsResponse || (exports.ListReviewableHITsResponse = {}));
var ListWorkerBlocksRequest;
(function (ListWorkerBlocksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListWorkerBlocksRequest");
    }
    ListWorkerBlocksRequest.isa = isa;
})(ListWorkerBlocksRequest = exports.ListWorkerBlocksRequest || (exports.ListWorkerBlocksRequest = {}));
var ListWorkerBlocksResponse;
(function (ListWorkerBlocksResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListWorkerBlocksResponse");
    }
    ListWorkerBlocksResponse.isa = isa;
})(ListWorkerBlocksResponse = exports.ListWorkerBlocksResponse || (exports.ListWorkerBlocksResponse = {}));
var ListWorkersWithQualificationTypeRequest;
(function (ListWorkersWithQualificationTypeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListWorkersWithQualificationTypeRequest");
    }
    ListWorkersWithQualificationTypeRequest.isa = isa;
})(ListWorkersWithQualificationTypeRequest = exports.ListWorkersWithQualificationTypeRequest || (exports.ListWorkersWithQualificationTypeRequest = {}));
var ListWorkersWithQualificationTypeResponse;
(function (ListWorkersWithQualificationTypeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListWorkersWithQualificationTypeResponse");
    }
    ListWorkersWithQualificationTypeResponse.isa = isa;
})(ListWorkersWithQualificationTypeResponse = exports.ListWorkersWithQualificationTypeResponse || (exports.ListWorkersWithQualificationTypeResponse = {}));
var Locale;
(function (Locale) {
    function isa(o) {
        return smithy_client_1.isa(o, "Locale");
    }
    Locale.isa = isa;
})(Locale = exports.Locale || (exports.Locale = {}));
var NotificationSpecification;
(function (NotificationSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotificationSpecification");
    }
    NotificationSpecification.isa = isa;
})(NotificationSpecification = exports.NotificationSpecification || (exports.NotificationSpecification = {}));
var NotificationTransport;
(function (NotificationTransport) {
    NotificationTransport["Email"] = "Email";
    NotificationTransport["SNS"] = "SNS";
    NotificationTransport["SQS"] = "SQS";
})(NotificationTransport = exports.NotificationTransport || (exports.NotificationTransport = {}));
var NotifyWorkersFailureCode;
(function (NotifyWorkersFailureCode) {
    NotifyWorkersFailureCode["HardFailure"] = "HardFailure";
    NotifyWorkersFailureCode["SoftFailure"] = "SoftFailure";
})(NotifyWorkersFailureCode = exports.NotifyWorkersFailureCode || (exports.NotifyWorkersFailureCode = {}));
var NotifyWorkersFailureStatus;
(function (NotifyWorkersFailureStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotifyWorkersFailureStatus");
    }
    NotifyWorkersFailureStatus.isa = isa;
})(NotifyWorkersFailureStatus = exports.NotifyWorkersFailureStatus || (exports.NotifyWorkersFailureStatus = {}));
var NotifyWorkersRequest;
(function (NotifyWorkersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotifyWorkersRequest");
    }
    NotifyWorkersRequest.isa = isa;
})(NotifyWorkersRequest = exports.NotifyWorkersRequest || (exports.NotifyWorkersRequest = {}));
var NotifyWorkersResponse;
(function (NotifyWorkersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotifyWorkersResponse");
    }
    NotifyWorkersResponse.isa = isa;
})(NotifyWorkersResponse = exports.NotifyWorkersResponse || (exports.NotifyWorkersResponse = {}));
var ParameterMapEntry;
(function (ParameterMapEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterMapEntry");
    }
    ParameterMapEntry.isa = isa;
})(ParameterMapEntry = exports.ParameterMapEntry || (exports.ParameterMapEntry = {}));
var PolicyParameter;
(function (PolicyParameter) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyParameter");
    }
    PolicyParameter.isa = isa;
})(PolicyParameter = exports.PolicyParameter || (exports.PolicyParameter = {}));
var Qualification;
(function (Qualification) {
    function isa(o) {
        return smithy_client_1.isa(o, "Qualification");
    }
    Qualification.isa = isa;
})(Qualification = exports.Qualification || (exports.Qualification = {}));
var QualificationRequest;
(function (QualificationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "QualificationRequest");
    }
    QualificationRequest.isa = isa;
})(QualificationRequest = exports.QualificationRequest || (exports.QualificationRequest = {}));
var QualificationRequirement;
(function (QualificationRequirement) {
    function isa(o) {
        return smithy_client_1.isa(o, "QualificationRequirement");
    }
    QualificationRequirement.isa = isa;
})(QualificationRequirement = exports.QualificationRequirement || (exports.QualificationRequirement = {}));
var QualificationStatus;
(function (QualificationStatus) {
    QualificationStatus["Granted"] = "Granted";
    QualificationStatus["Revoked"] = "Revoked";
})(QualificationStatus = exports.QualificationStatus || (exports.QualificationStatus = {}));
var QualificationType;
(function (QualificationType) {
    function isa(o) {
        return smithy_client_1.isa(o, "QualificationType");
    }
    QualificationType.isa = isa;
})(QualificationType = exports.QualificationType || (exports.QualificationType = {}));
var QualificationTypeStatus;
(function (QualificationTypeStatus) {
    QualificationTypeStatus["Active"] = "Active";
    QualificationTypeStatus["Inactive"] = "Inactive";
})(QualificationTypeStatus = exports.QualificationTypeStatus || (exports.QualificationTypeStatus = {}));
var RejectAssignmentRequest;
(function (RejectAssignmentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RejectAssignmentRequest");
    }
    RejectAssignmentRequest.isa = isa;
})(RejectAssignmentRequest = exports.RejectAssignmentRequest || (exports.RejectAssignmentRequest = {}));
var RejectAssignmentResponse;
(function (RejectAssignmentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RejectAssignmentResponse");
    }
    RejectAssignmentResponse.isa = isa;
})(RejectAssignmentResponse = exports.RejectAssignmentResponse || (exports.RejectAssignmentResponse = {}));
var RejectQualificationRequestRequest;
(function (RejectQualificationRequestRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RejectQualificationRequestRequest");
    }
    RejectQualificationRequestRequest.isa = isa;
})(RejectQualificationRequestRequest = exports.RejectQualificationRequestRequest || (exports.RejectQualificationRequestRequest = {}));
var RejectQualificationRequestResponse;
(function (RejectQualificationRequestResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RejectQualificationRequestResponse");
    }
    RejectQualificationRequestResponse.isa = isa;
})(RejectQualificationRequestResponse = exports.RejectQualificationRequestResponse || (exports.RejectQualificationRequestResponse = {}));
var ReviewActionDetail;
(function (ReviewActionDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReviewActionDetail");
    }
    ReviewActionDetail.isa = isa;
})(ReviewActionDetail = exports.ReviewActionDetail || (exports.ReviewActionDetail = {}));
var ReviewActionStatus;
(function (ReviewActionStatus) {
    ReviewActionStatus["Cancelled"] = "Cancelled";
    ReviewActionStatus["Failed"] = "Failed";
    ReviewActionStatus["Intended"] = "Intended";
    ReviewActionStatus["Succeeded"] = "Succeeded";
})(ReviewActionStatus = exports.ReviewActionStatus || (exports.ReviewActionStatus = {}));
var ReviewPolicy;
(function (ReviewPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReviewPolicy");
    }
    ReviewPolicy.isa = isa;
})(ReviewPolicy = exports.ReviewPolicy || (exports.ReviewPolicy = {}));
var ReviewPolicyLevel;
(function (ReviewPolicyLevel) {
    ReviewPolicyLevel["Assignment"] = "Assignment";
    ReviewPolicyLevel["HIT"] = "HIT";
})(ReviewPolicyLevel = exports.ReviewPolicyLevel || (exports.ReviewPolicyLevel = {}));
var ReviewReport;
(function (ReviewReport) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReviewReport");
    }
    ReviewReport.isa = isa;
})(ReviewReport = exports.ReviewReport || (exports.ReviewReport = {}));
var ReviewResultDetail;
(function (ReviewResultDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReviewResultDetail");
    }
    ReviewResultDetail.isa = isa;
})(ReviewResultDetail = exports.ReviewResultDetail || (exports.ReviewResultDetail = {}));
var ReviewableHITStatus;
(function (ReviewableHITStatus) {
    ReviewableHITStatus["Reviewable"] = "Reviewable";
    ReviewableHITStatus["Reviewing"] = "Reviewing";
})(ReviewableHITStatus = exports.ReviewableHITStatus || (exports.ReviewableHITStatus = {}));
var SendBonusRequest;
(function (SendBonusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendBonusRequest");
    }
    SendBonusRequest.isa = isa;
})(SendBonusRequest = exports.SendBonusRequest || (exports.SendBonusRequest = {}));
var SendBonusResponse;
(function (SendBonusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendBonusResponse");
    }
    SendBonusResponse.isa = isa;
})(SendBonusResponse = exports.SendBonusResponse || (exports.SendBonusResponse = {}));
var SendTestEventNotificationRequest;
(function (SendTestEventNotificationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendTestEventNotificationRequest");
    }
    SendTestEventNotificationRequest.isa = isa;
})(SendTestEventNotificationRequest = exports.SendTestEventNotificationRequest || (exports.SendTestEventNotificationRequest = {}));
var SendTestEventNotificationResponse;
(function (SendTestEventNotificationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendTestEventNotificationResponse");
    }
    SendTestEventNotificationResponse.isa = isa;
})(SendTestEventNotificationResponse = exports.SendTestEventNotificationResponse || (exports.SendTestEventNotificationResponse = {}));
var UpdateExpirationForHITRequest;
(function (UpdateExpirationForHITRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateExpirationForHITRequest");
    }
    UpdateExpirationForHITRequest.isa = isa;
})(UpdateExpirationForHITRequest = exports.UpdateExpirationForHITRequest || (exports.UpdateExpirationForHITRequest = {}));
var UpdateExpirationForHITResponse;
(function (UpdateExpirationForHITResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateExpirationForHITResponse");
    }
    UpdateExpirationForHITResponse.isa = isa;
})(UpdateExpirationForHITResponse = exports.UpdateExpirationForHITResponse || (exports.UpdateExpirationForHITResponse = {}));
var UpdateHITReviewStatusRequest;
(function (UpdateHITReviewStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateHITReviewStatusRequest");
    }
    UpdateHITReviewStatusRequest.isa = isa;
})(UpdateHITReviewStatusRequest = exports.UpdateHITReviewStatusRequest || (exports.UpdateHITReviewStatusRequest = {}));
var UpdateHITReviewStatusResponse;
(function (UpdateHITReviewStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateHITReviewStatusResponse");
    }
    UpdateHITReviewStatusResponse.isa = isa;
})(UpdateHITReviewStatusResponse = exports.UpdateHITReviewStatusResponse || (exports.UpdateHITReviewStatusResponse = {}));
var UpdateHITTypeOfHITRequest;
(function (UpdateHITTypeOfHITRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateHITTypeOfHITRequest");
    }
    UpdateHITTypeOfHITRequest.isa = isa;
})(UpdateHITTypeOfHITRequest = exports.UpdateHITTypeOfHITRequest || (exports.UpdateHITTypeOfHITRequest = {}));
var UpdateHITTypeOfHITResponse;
(function (UpdateHITTypeOfHITResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateHITTypeOfHITResponse");
    }
    UpdateHITTypeOfHITResponse.isa = isa;
})(UpdateHITTypeOfHITResponse = exports.UpdateHITTypeOfHITResponse || (exports.UpdateHITTypeOfHITResponse = {}));
var UpdateNotificationSettingsRequest;
(function (UpdateNotificationSettingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateNotificationSettingsRequest");
    }
    UpdateNotificationSettingsRequest.isa = isa;
})(UpdateNotificationSettingsRequest = exports.UpdateNotificationSettingsRequest || (exports.UpdateNotificationSettingsRequest = {}));
var UpdateNotificationSettingsResponse;
(function (UpdateNotificationSettingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateNotificationSettingsResponse");
    }
    UpdateNotificationSettingsResponse.isa = isa;
})(UpdateNotificationSettingsResponse = exports.UpdateNotificationSettingsResponse || (exports.UpdateNotificationSettingsResponse = {}));
var UpdateQualificationTypeRequest;
(function (UpdateQualificationTypeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateQualificationTypeRequest");
    }
    UpdateQualificationTypeRequest.isa = isa;
})(UpdateQualificationTypeRequest = exports.UpdateQualificationTypeRequest || (exports.UpdateQualificationTypeRequest = {}));
var UpdateQualificationTypeResponse;
(function (UpdateQualificationTypeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateQualificationTypeResponse");
    }
    UpdateQualificationTypeResponse.isa = isa;
})(UpdateQualificationTypeResponse = exports.UpdateQualificationTypeResponse || (exports.UpdateQualificationTypeResponse = {}));
var WorkerBlock;
(function (WorkerBlock) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkerBlock");
    }
    WorkerBlock.isa = isa;
})(WorkerBlock = exports.WorkerBlock || (exports.WorkerBlock = {}));
var RequestError;
(function (RequestError) {
    function isa(o) {
        return smithy_client_1.isa(o, "RequestError");
    }
    RequestError.isa = isa;
})(RequestError = exports.RequestError || (exports.RequestError = {}));
var ServiceFault;
(function (ServiceFault) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceFault");
    }
    ServiceFault.isa = isa;
})(ServiceFault = exports.ServiceFault || (exports.ServiceFault = {}));
//# sourceMappingURL=index.js.map
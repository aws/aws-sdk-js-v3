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
var AccessDeniedForDependencyException;
(function (AccessDeniedForDependencyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessDeniedForDependencyException");
    }
    AccessDeniedForDependencyException.isa = isa;
})(AccessDeniedForDependencyException = exports.AccessDeniedForDependencyException || (exports.AccessDeniedForDependencyException = {}));
var AssociateDRTLogBucketRequest;
(function (AssociateDRTLogBucketRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateDRTLogBucketRequest");
    }
    AssociateDRTLogBucketRequest.isa = isa;
})(AssociateDRTLogBucketRequest = exports.AssociateDRTLogBucketRequest || (exports.AssociateDRTLogBucketRequest = {}));
var AssociateDRTLogBucketResponse;
(function (AssociateDRTLogBucketResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateDRTLogBucketResponse");
    }
    AssociateDRTLogBucketResponse.isa = isa;
})(AssociateDRTLogBucketResponse = exports.AssociateDRTLogBucketResponse || (exports.AssociateDRTLogBucketResponse = {}));
var AssociateDRTRoleRequest;
(function (AssociateDRTRoleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateDRTRoleRequest");
    }
    AssociateDRTRoleRequest.isa = isa;
})(AssociateDRTRoleRequest = exports.AssociateDRTRoleRequest || (exports.AssociateDRTRoleRequest = {}));
var AssociateDRTRoleResponse;
(function (AssociateDRTRoleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateDRTRoleResponse");
    }
    AssociateDRTRoleResponse.isa = isa;
})(AssociateDRTRoleResponse = exports.AssociateDRTRoleResponse || (exports.AssociateDRTRoleResponse = {}));
var AttackDetail;
(function (AttackDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttackDetail");
    }
    AttackDetail.isa = isa;
})(AttackDetail = exports.AttackDetail || (exports.AttackDetail = {}));
var AttackLayer;
(function (AttackLayer) {
    AttackLayer["APPLICATION"] = "APPLICATION";
    AttackLayer["NETWORK"] = "NETWORK";
})(AttackLayer = exports.AttackLayer || (exports.AttackLayer = {}));
var AttackProperty;
(function (AttackProperty) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttackProperty");
    }
    AttackProperty.isa = isa;
})(AttackProperty = exports.AttackProperty || (exports.AttackProperty = {}));
var AttackPropertyIdentifier;
(function (AttackPropertyIdentifier) {
    AttackPropertyIdentifier["DESTINATION_URL"] = "DESTINATION_URL";
    AttackPropertyIdentifier["REFERRER"] = "REFERRER";
    AttackPropertyIdentifier["SOURCE_ASN"] = "SOURCE_ASN";
    AttackPropertyIdentifier["SOURCE_COUNTRY"] = "SOURCE_COUNTRY";
    AttackPropertyIdentifier["SOURCE_IP_ADDRESS"] = "SOURCE_IP_ADDRESS";
    AttackPropertyIdentifier["SOURCE_USER_AGENT"] = "SOURCE_USER_AGENT";
    AttackPropertyIdentifier["WORDPRESS_PINGBACK_REFLECTOR"] = "WORDPRESS_PINGBACK_REFLECTOR";
    AttackPropertyIdentifier["WORDPRESS_PINGBACK_SOURCE"] = "WORDPRESS_PINGBACK_SOURCE";
})(AttackPropertyIdentifier = exports.AttackPropertyIdentifier || (exports.AttackPropertyIdentifier = {}));
var AttackSummary;
(function (AttackSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttackSummary");
    }
    AttackSummary.isa = isa;
})(AttackSummary = exports.AttackSummary || (exports.AttackSummary = {}));
var AttackVectorDescription;
(function (AttackVectorDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttackVectorDescription");
    }
    AttackVectorDescription.isa = isa;
})(AttackVectorDescription = exports.AttackVectorDescription || (exports.AttackVectorDescription = {}));
var AutoRenew;
(function (AutoRenew) {
    AutoRenew["DISABLED"] = "DISABLED";
    AutoRenew["ENABLED"] = "ENABLED";
})(AutoRenew = exports.AutoRenew || (exports.AutoRenew = {}));
var Contributor;
(function (Contributor) {
    function isa(o) {
        return smithy_client_1.isa(o, "Contributor");
    }
    Contributor.isa = isa;
})(Contributor = exports.Contributor || (exports.Contributor = {}));
var CreateProtectionRequest;
(function (CreateProtectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProtectionRequest");
    }
    CreateProtectionRequest.isa = isa;
})(CreateProtectionRequest = exports.CreateProtectionRequest || (exports.CreateProtectionRequest = {}));
var CreateProtectionResponse;
(function (CreateProtectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProtectionResponse");
    }
    CreateProtectionResponse.isa = isa;
})(CreateProtectionResponse = exports.CreateProtectionResponse || (exports.CreateProtectionResponse = {}));
var CreateSubscriptionRequest;
(function (CreateSubscriptionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSubscriptionRequest");
    }
    CreateSubscriptionRequest.isa = isa;
})(CreateSubscriptionRequest = exports.CreateSubscriptionRequest || (exports.CreateSubscriptionRequest = {}));
var CreateSubscriptionResponse;
(function (CreateSubscriptionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSubscriptionResponse");
    }
    CreateSubscriptionResponse.isa = isa;
})(CreateSubscriptionResponse = exports.CreateSubscriptionResponse || (exports.CreateSubscriptionResponse = {}));
var DeleteProtectionRequest;
(function (DeleteProtectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteProtectionRequest");
    }
    DeleteProtectionRequest.isa = isa;
})(DeleteProtectionRequest = exports.DeleteProtectionRequest || (exports.DeleteProtectionRequest = {}));
var DeleteProtectionResponse;
(function (DeleteProtectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteProtectionResponse");
    }
    DeleteProtectionResponse.isa = isa;
})(DeleteProtectionResponse = exports.DeleteProtectionResponse || (exports.DeleteProtectionResponse = {}));
var DeleteSubscriptionRequest;
(function (DeleteSubscriptionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSubscriptionRequest");
    }
    DeleteSubscriptionRequest.isa = isa;
})(DeleteSubscriptionRequest = exports.DeleteSubscriptionRequest || (exports.DeleteSubscriptionRequest = {}));
var DeleteSubscriptionResponse;
(function (DeleteSubscriptionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSubscriptionResponse");
    }
    DeleteSubscriptionResponse.isa = isa;
})(DeleteSubscriptionResponse = exports.DeleteSubscriptionResponse || (exports.DeleteSubscriptionResponse = {}));
var DescribeAttackRequest;
(function (DescribeAttackRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAttackRequest");
    }
    DescribeAttackRequest.isa = isa;
})(DescribeAttackRequest = exports.DescribeAttackRequest || (exports.DescribeAttackRequest = {}));
var DescribeAttackResponse;
(function (DescribeAttackResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAttackResponse");
    }
    DescribeAttackResponse.isa = isa;
})(DescribeAttackResponse = exports.DescribeAttackResponse || (exports.DescribeAttackResponse = {}));
var DescribeDRTAccessRequest;
(function (DescribeDRTAccessRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDRTAccessRequest");
    }
    DescribeDRTAccessRequest.isa = isa;
})(DescribeDRTAccessRequest = exports.DescribeDRTAccessRequest || (exports.DescribeDRTAccessRequest = {}));
var DescribeDRTAccessResponse;
(function (DescribeDRTAccessResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDRTAccessResponse");
    }
    DescribeDRTAccessResponse.isa = isa;
})(DescribeDRTAccessResponse = exports.DescribeDRTAccessResponse || (exports.DescribeDRTAccessResponse = {}));
var DescribeEmergencyContactSettingsRequest;
(function (DescribeEmergencyContactSettingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEmergencyContactSettingsRequest");
    }
    DescribeEmergencyContactSettingsRequest.isa = isa;
})(DescribeEmergencyContactSettingsRequest = exports.DescribeEmergencyContactSettingsRequest || (exports.DescribeEmergencyContactSettingsRequest = {}));
var DescribeEmergencyContactSettingsResponse;
(function (DescribeEmergencyContactSettingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEmergencyContactSettingsResponse");
    }
    DescribeEmergencyContactSettingsResponse.isa = isa;
})(DescribeEmergencyContactSettingsResponse = exports.DescribeEmergencyContactSettingsResponse || (exports.DescribeEmergencyContactSettingsResponse = {}));
var DescribeProtectionRequest;
(function (DescribeProtectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeProtectionRequest");
    }
    DescribeProtectionRequest.isa = isa;
})(DescribeProtectionRequest = exports.DescribeProtectionRequest || (exports.DescribeProtectionRequest = {}));
var DescribeProtectionResponse;
(function (DescribeProtectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeProtectionResponse");
    }
    DescribeProtectionResponse.isa = isa;
})(DescribeProtectionResponse = exports.DescribeProtectionResponse || (exports.DescribeProtectionResponse = {}));
var DescribeSubscriptionRequest;
(function (DescribeSubscriptionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSubscriptionRequest");
    }
    DescribeSubscriptionRequest.isa = isa;
})(DescribeSubscriptionRequest = exports.DescribeSubscriptionRequest || (exports.DescribeSubscriptionRequest = {}));
var DescribeSubscriptionResponse;
(function (DescribeSubscriptionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSubscriptionResponse");
    }
    DescribeSubscriptionResponse.isa = isa;
})(DescribeSubscriptionResponse = exports.DescribeSubscriptionResponse || (exports.DescribeSubscriptionResponse = {}));
var DisassociateDRTLogBucketRequest;
(function (DisassociateDRTLogBucketRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateDRTLogBucketRequest");
    }
    DisassociateDRTLogBucketRequest.isa = isa;
})(DisassociateDRTLogBucketRequest = exports.DisassociateDRTLogBucketRequest || (exports.DisassociateDRTLogBucketRequest = {}));
var DisassociateDRTLogBucketResponse;
(function (DisassociateDRTLogBucketResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateDRTLogBucketResponse");
    }
    DisassociateDRTLogBucketResponse.isa = isa;
})(DisassociateDRTLogBucketResponse = exports.DisassociateDRTLogBucketResponse || (exports.DisassociateDRTLogBucketResponse = {}));
var DisassociateDRTRoleRequest;
(function (DisassociateDRTRoleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateDRTRoleRequest");
    }
    DisassociateDRTRoleRequest.isa = isa;
})(DisassociateDRTRoleRequest = exports.DisassociateDRTRoleRequest || (exports.DisassociateDRTRoleRequest = {}));
var DisassociateDRTRoleResponse;
(function (DisassociateDRTRoleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateDRTRoleResponse");
    }
    DisassociateDRTRoleResponse.isa = isa;
})(DisassociateDRTRoleResponse = exports.DisassociateDRTRoleResponse || (exports.DisassociateDRTRoleResponse = {}));
var EmergencyContact;
(function (EmergencyContact) {
    function isa(o) {
        return smithy_client_1.isa(o, "EmergencyContact");
    }
    EmergencyContact.isa = isa;
})(EmergencyContact = exports.EmergencyContact || (exports.EmergencyContact = {}));
var GetSubscriptionStateRequest;
(function (GetSubscriptionStateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSubscriptionStateRequest");
    }
    GetSubscriptionStateRequest.isa = isa;
})(GetSubscriptionStateRequest = exports.GetSubscriptionStateRequest || (exports.GetSubscriptionStateRequest = {}));
var GetSubscriptionStateResponse;
(function (GetSubscriptionStateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSubscriptionStateResponse");
    }
    GetSubscriptionStateResponse.isa = isa;
})(GetSubscriptionStateResponse = exports.GetSubscriptionStateResponse || (exports.GetSubscriptionStateResponse = {}));
var InternalErrorException;
(function (InternalErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalErrorException");
    }
    InternalErrorException.isa = isa;
})(InternalErrorException = exports.InternalErrorException || (exports.InternalErrorException = {}));
var InvalidOperationException;
(function (InvalidOperationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidOperationException");
    }
    InvalidOperationException.isa = isa;
})(InvalidOperationException = exports.InvalidOperationException || (exports.InvalidOperationException = {}));
var InvalidPaginationTokenException;
(function (InvalidPaginationTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPaginationTokenException");
    }
    InvalidPaginationTokenException.isa = isa;
})(InvalidPaginationTokenException = exports.InvalidPaginationTokenException || (exports.InvalidPaginationTokenException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterException");
    }
    InvalidParameterException.isa = isa;
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var InvalidResourceException;
(function (InvalidResourceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidResourceException");
    }
    InvalidResourceException.isa = isa;
})(InvalidResourceException = exports.InvalidResourceException || (exports.InvalidResourceException = {}));
var Limit;
(function (Limit) {
    function isa(o) {
        return smithy_client_1.isa(o, "Limit");
    }
    Limit.isa = isa;
})(Limit = exports.Limit || (exports.Limit = {}));
var LimitsExceededException;
(function (LimitsExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitsExceededException");
    }
    LimitsExceededException.isa = isa;
})(LimitsExceededException = exports.LimitsExceededException || (exports.LimitsExceededException = {}));
var ListAttacksRequest;
(function (ListAttacksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAttacksRequest");
    }
    ListAttacksRequest.isa = isa;
})(ListAttacksRequest = exports.ListAttacksRequest || (exports.ListAttacksRequest = {}));
var ListAttacksResponse;
(function (ListAttacksResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAttacksResponse");
    }
    ListAttacksResponse.isa = isa;
})(ListAttacksResponse = exports.ListAttacksResponse || (exports.ListAttacksResponse = {}));
var ListProtectionsRequest;
(function (ListProtectionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListProtectionsRequest");
    }
    ListProtectionsRequest.isa = isa;
})(ListProtectionsRequest = exports.ListProtectionsRequest || (exports.ListProtectionsRequest = {}));
var ListProtectionsResponse;
(function (ListProtectionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListProtectionsResponse");
    }
    ListProtectionsResponse.isa = isa;
})(ListProtectionsResponse = exports.ListProtectionsResponse || (exports.ListProtectionsResponse = {}));
var LockedSubscriptionException;
(function (LockedSubscriptionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LockedSubscriptionException");
    }
    LockedSubscriptionException.isa = isa;
})(LockedSubscriptionException = exports.LockedSubscriptionException || (exports.LockedSubscriptionException = {}));
var Mitigation;
(function (Mitigation) {
    function isa(o) {
        return smithy_client_1.isa(o, "Mitigation");
    }
    Mitigation.isa = isa;
})(Mitigation = exports.Mitigation || (exports.Mitigation = {}));
var NoAssociatedRoleException;
(function (NoAssociatedRoleException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoAssociatedRoleException");
    }
    NoAssociatedRoleException.isa = isa;
})(NoAssociatedRoleException = exports.NoAssociatedRoleException || (exports.NoAssociatedRoleException = {}));
var OptimisticLockException;
(function (OptimisticLockException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OptimisticLockException");
    }
    OptimisticLockException.isa = isa;
})(OptimisticLockException = exports.OptimisticLockException || (exports.OptimisticLockException = {}));
var Protection;
(function (Protection) {
    function isa(o) {
        return smithy_client_1.isa(o, "Protection");
    }
    Protection.isa = isa;
})(Protection = exports.Protection || (exports.Protection = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceAlreadyExistsException");
    }
    ResourceAlreadyExistsException.isa = isa;
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var SubResourceSummary;
(function (SubResourceSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubResourceSummary");
    }
    SubResourceSummary.isa = isa;
})(SubResourceSummary = exports.SubResourceSummary || (exports.SubResourceSummary = {}));
var SubResourceType;
(function (SubResourceType) {
    SubResourceType["IP"] = "IP";
    SubResourceType["URL"] = "URL";
})(SubResourceType = exports.SubResourceType || (exports.SubResourceType = {}));
var Subscription;
(function (Subscription) {
    function isa(o) {
        return smithy_client_1.isa(o, "Subscription");
    }
    Subscription.isa = isa;
})(Subscription = exports.Subscription || (exports.Subscription = {}));
var SubscriptionState;
(function (SubscriptionState) {
    SubscriptionState["ACTIVE"] = "ACTIVE";
    SubscriptionState["INACTIVE"] = "INACTIVE";
})(SubscriptionState = exports.SubscriptionState || (exports.SubscriptionState = {}));
var SummarizedAttackVector;
(function (SummarizedAttackVector) {
    function isa(o) {
        return smithy_client_1.isa(o, "SummarizedAttackVector");
    }
    SummarizedAttackVector.isa = isa;
})(SummarizedAttackVector = exports.SummarizedAttackVector || (exports.SummarizedAttackVector = {}));
var SummarizedCounter;
(function (SummarizedCounter) {
    function isa(o) {
        return smithy_client_1.isa(o, "SummarizedCounter");
    }
    SummarizedCounter.isa = isa;
})(SummarizedCounter = exports.SummarizedCounter || (exports.SummarizedCounter = {}));
var TimeRange;
(function (TimeRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "TimeRange");
    }
    TimeRange.isa = isa;
})(TimeRange = exports.TimeRange || (exports.TimeRange = {}));
var Unit;
(function (Unit) {
    Unit["BITS"] = "BITS";
    Unit["BYTES"] = "BYTES";
    Unit["PACKETS"] = "PACKETS";
    Unit["REQUESTS"] = "REQUESTS";
})(Unit = exports.Unit || (exports.Unit = {}));
var UpdateEmergencyContactSettingsRequest;
(function (UpdateEmergencyContactSettingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateEmergencyContactSettingsRequest");
    }
    UpdateEmergencyContactSettingsRequest.isa = isa;
})(UpdateEmergencyContactSettingsRequest = exports.UpdateEmergencyContactSettingsRequest || (exports.UpdateEmergencyContactSettingsRequest = {}));
var UpdateEmergencyContactSettingsResponse;
(function (UpdateEmergencyContactSettingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateEmergencyContactSettingsResponse");
    }
    UpdateEmergencyContactSettingsResponse.isa = isa;
})(UpdateEmergencyContactSettingsResponse = exports.UpdateEmergencyContactSettingsResponse || (exports.UpdateEmergencyContactSettingsResponse = {}));
var UpdateSubscriptionRequest;
(function (UpdateSubscriptionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSubscriptionRequest");
    }
    UpdateSubscriptionRequest.isa = isa;
})(UpdateSubscriptionRequest = exports.UpdateSubscriptionRequest || (exports.UpdateSubscriptionRequest = {}));
var UpdateSubscriptionResponse;
(function (UpdateSubscriptionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSubscriptionResponse");
    }
    UpdateSubscriptionResponse.isa = isa;
})(UpdateSubscriptionResponse = exports.UpdateSubscriptionResponse || (exports.UpdateSubscriptionResponse = {}));
//# sourceMappingURL=index.js.map
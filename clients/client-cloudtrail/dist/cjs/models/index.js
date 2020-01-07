"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AddTagsRequest;
(function (AddTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsRequest");
    }
    AddTagsRequest.isa = isa;
})(AddTagsRequest = exports.AddTagsRequest || (exports.AddTagsRequest = {}));
var AddTagsResponse;
(function (AddTagsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsResponse");
    }
    AddTagsResponse.isa = isa;
})(AddTagsResponse = exports.AddTagsResponse || (exports.AddTagsResponse = {}));
var CloudTrailARNInvalidException;
(function (CloudTrailARNInvalidException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudTrailARNInvalidException");
    }
    CloudTrailARNInvalidException.isa = isa;
})(CloudTrailARNInvalidException = exports.CloudTrailARNInvalidException || (exports.CloudTrailARNInvalidException = {}));
var CloudTrailAccessNotEnabledException;
(function (CloudTrailAccessNotEnabledException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudTrailAccessNotEnabledException");
    }
    CloudTrailAccessNotEnabledException.isa = isa;
})(CloudTrailAccessNotEnabledException = exports.CloudTrailAccessNotEnabledException || (exports.CloudTrailAccessNotEnabledException = {}));
var CloudWatchLogsDeliveryUnavailableException;
(function (CloudWatchLogsDeliveryUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudWatchLogsDeliveryUnavailableException");
    }
    CloudWatchLogsDeliveryUnavailableException.isa = isa;
})(CloudWatchLogsDeliveryUnavailableException = exports.CloudWatchLogsDeliveryUnavailableException || (exports.CloudWatchLogsDeliveryUnavailableException = {}));
var CreateTrailRequest;
(function (CreateTrailRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTrailRequest");
    }
    CreateTrailRequest.isa = isa;
})(CreateTrailRequest = exports.CreateTrailRequest || (exports.CreateTrailRequest = {}));
var CreateTrailResponse;
(function (CreateTrailResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTrailResponse");
    }
    CreateTrailResponse.isa = isa;
})(CreateTrailResponse = exports.CreateTrailResponse || (exports.CreateTrailResponse = {}));
var DataResource;
(function (DataResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataResource");
    }
    DataResource.isa = isa;
})(DataResource = exports.DataResource || (exports.DataResource = {}));
var DeleteTrailRequest;
(function (DeleteTrailRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTrailRequest");
    }
    DeleteTrailRequest.isa = isa;
})(DeleteTrailRequest = exports.DeleteTrailRequest || (exports.DeleteTrailRequest = {}));
var DeleteTrailResponse;
(function (DeleteTrailResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTrailResponse");
    }
    DeleteTrailResponse.isa = isa;
})(DeleteTrailResponse = exports.DeleteTrailResponse || (exports.DeleteTrailResponse = {}));
var DescribeTrailsRequest;
(function (DescribeTrailsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrailsRequest");
    }
    DescribeTrailsRequest.isa = isa;
})(DescribeTrailsRequest = exports.DescribeTrailsRequest || (exports.DescribeTrailsRequest = {}));
var DescribeTrailsResponse;
(function (DescribeTrailsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrailsResponse");
    }
    DescribeTrailsResponse.isa = isa;
})(DescribeTrailsResponse = exports.DescribeTrailsResponse || (exports.DescribeTrailsResponse = {}));
var Event;
(function (Event) {
    function isa(o) {
        return smithy_client_1.isa(o, "Event");
    }
    Event.isa = isa;
})(Event = exports.Event || (exports.Event = {}));
var EventCategory;
(function (EventCategory) {
    EventCategory["Insight"] = "insight";
})(EventCategory = exports.EventCategory || (exports.EventCategory = {}));
var EventSelector;
(function (EventSelector) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventSelector");
    }
    EventSelector.isa = isa;
})(EventSelector = exports.EventSelector || (exports.EventSelector = {}));
var GetEventSelectorsRequest;
(function (GetEventSelectorsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetEventSelectorsRequest");
    }
    GetEventSelectorsRequest.isa = isa;
})(GetEventSelectorsRequest = exports.GetEventSelectorsRequest || (exports.GetEventSelectorsRequest = {}));
var GetEventSelectorsResponse;
(function (GetEventSelectorsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetEventSelectorsResponse");
    }
    GetEventSelectorsResponse.isa = isa;
})(GetEventSelectorsResponse = exports.GetEventSelectorsResponse || (exports.GetEventSelectorsResponse = {}));
var GetInsightSelectorsRequest;
(function (GetInsightSelectorsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInsightSelectorsRequest");
    }
    GetInsightSelectorsRequest.isa = isa;
})(GetInsightSelectorsRequest = exports.GetInsightSelectorsRequest || (exports.GetInsightSelectorsRequest = {}));
var GetInsightSelectorsResponse;
(function (GetInsightSelectorsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInsightSelectorsResponse");
    }
    GetInsightSelectorsResponse.isa = isa;
})(GetInsightSelectorsResponse = exports.GetInsightSelectorsResponse || (exports.GetInsightSelectorsResponse = {}));
var GetTrailRequest;
(function (GetTrailRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTrailRequest");
    }
    GetTrailRequest.isa = isa;
})(GetTrailRequest = exports.GetTrailRequest || (exports.GetTrailRequest = {}));
var GetTrailResponse;
(function (GetTrailResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTrailResponse");
    }
    GetTrailResponse.isa = isa;
})(GetTrailResponse = exports.GetTrailResponse || (exports.GetTrailResponse = {}));
var GetTrailStatusRequest;
(function (GetTrailStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTrailStatusRequest");
    }
    GetTrailStatusRequest.isa = isa;
})(GetTrailStatusRequest = exports.GetTrailStatusRequest || (exports.GetTrailStatusRequest = {}));
var GetTrailStatusResponse;
(function (GetTrailStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTrailStatusResponse");
    }
    GetTrailStatusResponse.isa = isa;
})(GetTrailStatusResponse = exports.GetTrailStatusResponse || (exports.GetTrailStatusResponse = {}));
var InsightNotEnabledException;
(function (InsightNotEnabledException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InsightNotEnabledException");
    }
    InsightNotEnabledException.isa = isa;
})(InsightNotEnabledException = exports.InsightNotEnabledException || (exports.InsightNotEnabledException = {}));
var InsightSelector;
(function (InsightSelector) {
    function isa(o) {
        return smithy_client_1.isa(o, "InsightSelector");
    }
    InsightSelector.isa = isa;
})(InsightSelector = exports.InsightSelector || (exports.InsightSelector = {}));
var InsightType;
(function (InsightType) {
    InsightType["ApiCallRateInsight"] = "ApiCallRateInsight";
})(InsightType = exports.InsightType || (exports.InsightType = {}));
var InsufficientDependencyServiceAccessPermissionException;
(function (InsufficientDependencyServiceAccessPermissionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InsufficientDependencyServiceAccessPermissionException");
    }
    InsufficientDependencyServiceAccessPermissionException.isa = isa;
})(InsufficientDependencyServiceAccessPermissionException = exports.InsufficientDependencyServiceAccessPermissionException || (exports.InsufficientDependencyServiceAccessPermissionException = {}));
var InsufficientEncryptionPolicyException;
(function (InsufficientEncryptionPolicyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InsufficientEncryptionPolicyException");
    }
    InsufficientEncryptionPolicyException.isa = isa;
})(InsufficientEncryptionPolicyException = exports.InsufficientEncryptionPolicyException || (exports.InsufficientEncryptionPolicyException = {}));
var InsufficientS3BucketPolicyException;
(function (InsufficientS3BucketPolicyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InsufficientS3BucketPolicyException");
    }
    InsufficientS3BucketPolicyException.isa = isa;
})(InsufficientS3BucketPolicyException = exports.InsufficientS3BucketPolicyException || (exports.InsufficientS3BucketPolicyException = {}));
var InsufficientSnsTopicPolicyException;
(function (InsufficientSnsTopicPolicyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InsufficientSnsTopicPolicyException");
    }
    InsufficientSnsTopicPolicyException.isa = isa;
})(InsufficientSnsTopicPolicyException = exports.InsufficientSnsTopicPolicyException || (exports.InsufficientSnsTopicPolicyException = {}));
var InvalidCloudWatchLogsLogGroupArnException;
(function (InvalidCloudWatchLogsLogGroupArnException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidCloudWatchLogsLogGroupArnException");
    }
    InvalidCloudWatchLogsLogGroupArnException.isa = isa;
})(InvalidCloudWatchLogsLogGroupArnException = exports.InvalidCloudWatchLogsLogGroupArnException || (exports.InvalidCloudWatchLogsLogGroupArnException = {}));
var InvalidCloudWatchLogsRoleArnException;
(function (InvalidCloudWatchLogsRoleArnException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidCloudWatchLogsRoleArnException");
    }
    InvalidCloudWatchLogsRoleArnException.isa = isa;
})(InvalidCloudWatchLogsRoleArnException = exports.InvalidCloudWatchLogsRoleArnException || (exports.InvalidCloudWatchLogsRoleArnException = {}));
var InvalidEventCategoryException;
(function (InvalidEventCategoryException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidEventCategoryException");
    }
    InvalidEventCategoryException.isa = isa;
})(InvalidEventCategoryException = exports.InvalidEventCategoryException || (exports.InvalidEventCategoryException = {}));
var InvalidEventSelectorsException;
(function (InvalidEventSelectorsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidEventSelectorsException");
    }
    InvalidEventSelectorsException.isa = isa;
})(InvalidEventSelectorsException = exports.InvalidEventSelectorsException || (exports.InvalidEventSelectorsException = {}));
var InvalidHomeRegionException;
(function (InvalidHomeRegionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidHomeRegionException");
    }
    InvalidHomeRegionException.isa = isa;
})(InvalidHomeRegionException = exports.InvalidHomeRegionException || (exports.InvalidHomeRegionException = {}));
var InvalidInsightSelectorsException;
(function (InvalidInsightSelectorsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInsightSelectorsException");
    }
    InvalidInsightSelectorsException.isa = isa;
})(InvalidInsightSelectorsException = exports.InvalidInsightSelectorsException || (exports.InvalidInsightSelectorsException = {}));
var InvalidKmsKeyIdException;
(function (InvalidKmsKeyIdException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidKmsKeyIdException");
    }
    InvalidKmsKeyIdException.isa = isa;
})(InvalidKmsKeyIdException = exports.InvalidKmsKeyIdException || (exports.InvalidKmsKeyIdException = {}));
var InvalidLookupAttributesException;
(function (InvalidLookupAttributesException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidLookupAttributesException");
    }
    InvalidLookupAttributesException.isa = isa;
})(InvalidLookupAttributesException = exports.InvalidLookupAttributesException || (exports.InvalidLookupAttributesException = {}));
var InvalidMaxResultsException;
(function (InvalidMaxResultsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidMaxResultsException");
    }
    InvalidMaxResultsException.isa = isa;
})(InvalidMaxResultsException = exports.InvalidMaxResultsException || (exports.InvalidMaxResultsException = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNextTokenException");
    }
    InvalidNextTokenException.isa = isa;
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var InvalidParameterCombinationException;
(function (InvalidParameterCombinationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterCombinationException");
    }
    InvalidParameterCombinationException.isa = isa;
})(InvalidParameterCombinationException = exports.InvalidParameterCombinationException || (exports.InvalidParameterCombinationException = {}));
var InvalidS3BucketNameException;
(function (InvalidS3BucketNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidS3BucketNameException");
    }
    InvalidS3BucketNameException.isa = isa;
})(InvalidS3BucketNameException = exports.InvalidS3BucketNameException || (exports.InvalidS3BucketNameException = {}));
var InvalidS3PrefixException;
(function (InvalidS3PrefixException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidS3PrefixException");
    }
    InvalidS3PrefixException.isa = isa;
})(InvalidS3PrefixException = exports.InvalidS3PrefixException || (exports.InvalidS3PrefixException = {}));
var InvalidSnsTopicNameException;
(function (InvalidSnsTopicNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSnsTopicNameException");
    }
    InvalidSnsTopicNameException.isa = isa;
})(InvalidSnsTopicNameException = exports.InvalidSnsTopicNameException || (exports.InvalidSnsTopicNameException = {}));
var InvalidTagParameterException;
(function (InvalidTagParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTagParameterException");
    }
    InvalidTagParameterException.isa = isa;
})(InvalidTagParameterException = exports.InvalidTagParameterException || (exports.InvalidTagParameterException = {}));
var InvalidTimeRangeException;
(function (InvalidTimeRangeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTimeRangeException");
    }
    InvalidTimeRangeException.isa = isa;
})(InvalidTimeRangeException = exports.InvalidTimeRangeException || (exports.InvalidTimeRangeException = {}));
var InvalidTokenException;
(function (InvalidTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTokenException");
    }
    InvalidTokenException.isa = isa;
})(InvalidTokenException = exports.InvalidTokenException || (exports.InvalidTokenException = {}));
var InvalidTrailNameException;
(function (InvalidTrailNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTrailNameException");
    }
    InvalidTrailNameException.isa = isa;
})(InvalidTrailNameException = exports.InvalidTrailNameException || (exports.InvalidTrailNameException = {}));
var KmsException;
(function (KmsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "KmsException");
    }
    KmsException.isa = isa;
})(KmsException = exports.KmsException || (exports.KmsException = {}));
var KmsKeyDisabledException;
(function (KmsKeyDisabledException) {
    function isa(o) {
        return smithy_client_1.isa(o, "KmsKeyDisabledException");
    }
    KmsKeyDisabledException.isa = isa;
})(KmsKeyDisabledException = exports.KmsKeyDisabledException || (exports.KmsKeyDisabledException = {}));
var KmsKeyNotFoundException;
(function (KmsKeyNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "KmsKeyNotFoundException");
    }
    KmsKeyNotFoundException.isa = isa;
})(KmsKeyNotFoundException = exports.KmsKeyNotFoundException || (exports.KmsKeyNotFoundException = {}));
var ListPublicKeysRequest;
(function (ListPublicKeysRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPublicKeysRequest");
    }
    ListPublicKeysRequest.isa = isa;
})(ListPublicKeysRequest = exports.ListPublicKeysRequest || (exports.ListPublicKeysRequest = {}));
var ListPublicKeysResponse;
(function (ListPublicKeysResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPublicKeysResponse");
    }
    ListPublicKeysResponse.isa = isa;
})(ListPublicKeysResponse = exports.ListPublicKeysResponse || (exports.ListPublicKeysResponse = {}));
var ListTagsRequest;
(function (ListTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsRequest");
    }
    ListTagsRequest.isa = isa;
})(ListTagsRequest = exports.ListTagsRequest || (exports.ListTagsRequest = {}));
var ListTagsResponse;
(function (ListTagsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsResponse");
    }
    ListTagsResponse.isa = isa;
})(ListTagsResponse = exports.ListTagsResponse || (exports.ListTagsResponse = {}));
var ListTrailsRequest;
(function (ListTrailsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTrailsRequest");
    }
    ListTrailsRequest.isa = isa;
})(ListTrailsRequest = exports.ListTrailsRequest || (exports.ListTrailsRequest = {}));
var ListTrailsResponse;
(function (ListTrailsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTrailsResponse");
    }
    ListTrailsResponse.isa = isa;
})(ListTrailsResponse = exports.ListTrailsResponse || (exports.ListTrailsResponse = {}));
var LookupAttribute;
(function (LookupAttribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "LookupAttribute");
    }
    LookupAttribute.isa = isa;
})(LookupAttribute = exports.LookupAttribute || (exports.LookupAttribute = {}));
var LookupAttributeKey;
(function (LookupAttributeKey) {
    LookupAttributeKey["ACCESS_KEY_ID"] = "AccessKeyId";
    LookupAttributeKey["EVENT_ID"] = "EventId";
    LookupAttributeKey["EVENT_NAME"] = "EventName";
    LookupAttributeKey["EVENT_SOURCE"] = "EventSource";
    LookupAttributeKey["READ_ONLY"] = "ReadOnly";
    LookupAttributeKey["RESOURCE_NAME"] = "ResourceName";
    LookupAttributeKey["RESOURCE_TYPE"] = "ResourceType";
    LookupAttributeKey["USERNAME"] = "Username";
})(LookupAttributeKey = exports.LookupAttributeKey || (exports.LookupAttributeKey = {}));
var LookupEventsRequest;
(function (LookupEventsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "LookupEventsRequest");
    }
    LookupEventsRequest.isa = isa;
})(LookupEventsRequest = exports.LookupEventsRequest || (exports.LookupEventsRequest = {}));
var LookupEventsResponse;
(function (LookupEventsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "LookupEventsResponse");
    }
    LookupEventsResponse.isa = isa;
})(LookupEventsResponse = exports.LookupEventsResponse || (exports.LookupEventsResponse = {}));
var MaximumNumberOfTrailsExceededException;
(function (MaximumNumberOfTrailsExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaximumNumberOfTrailsExceededException");
    }
    MaximumNumberOfTrailsExceededException.isa = isa;
})(MaximumNumberOfTrailsExceededException = exports.MaximumNumberOfTrailsExceededException || (exports.MaximumNumberOfTrailsExceededException = {}));
var NotOrganizationMasterAccountException;
(function (NotOrganizationMasterAccountException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotOrganizationMasterAccountException");
    }
    NotOrganizationMasterAccountException.isa = isa;
})(NotOrganizationMasterAccountException = exports.NotOrganizationMasterAccountException || (exports.NotOrganizationMasterAccountException = {}));
var OperationNotPermittedException;
(function (OperationNotPermittedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationNotPermittedException");
    }
    OperationNotPermittedException.isa = isa;
})(OperationNotPermittedException = exports.OperationNotPermittedException || (exports.OperationNotPermittedException = {}));
var OrganizationNotInAllFeaturesModeException;
(function (OrganizationNotInAllFeaturesModeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationNotInAllFeaturesModeException");
    }
    OrganizationNotInAllFeaturesModeException.isa = isa;
})(OrganizationNotInAllFeaturesModeException = exports.OrganizationNotInAllFeaturesModeException || (exports.OrganizationNotInAllFeaturesModeException = {}));
var OrganizationsNotInUseException;
(function (OrganizationsNotInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationsNotInUseException");
    }
    OrganizationsNotInUseException.isa = isa;
})(OrganizationsNotInUseException = exports.OrganizationsNotInUseException || (exports.OrganizationsNotInUseException = {}));
var PublicKey;
(function (PublicKey) {
    function isa(o) {
        return smithy_client_1.isa(o, "PublicKey");
    }
    PublicKey.isa = isa;
})(PublicKey = exports.PublicKey || (exports.PublicKey = {}));
var PutEventSelectorsRequest;
(function (PutEventSelectorsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutEventSelectorsRequest");
    }
    PutEventSelectorsRequest.isa = isa;
})(PutEventSelectorsRequest = exports.PutEventSelectorsRequest || (exports.PutEventSelectorsRequest = {}));
var PutEventSelectorsResponse;
(function (PutEventSelectorsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutEventSelectorsResponse");
    }
    PutEventSelectorsResponse.isa = isa;
})(PutEventSelectorsResponse = exports.PutEventSelectorsResponse || (exports.PutEventSelectorsResponse = {}));
var PutInsightSelectorsRequest;
(function (PutInsightSelectorsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutInsightSelectorsRequest");
    }
    PutInsightSelectorsRequest.isa = isa;
})(PutInsightSelectorsRequest = exports.PutInsightSelectorsRequest || (exports.PutInsightSelectorsRequest = {}));
var PutInsightSelectorsResponse;
(function (PutInsightSelectorsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutInsightSelectorsResponse");
    }
    PutInsightSelectorsResponse.isa = isa;
})(PutInsightSelectorsResponse = exports.PutInsightSelectorsResponse || (exports.PutInsightSelectorsResponse = {}));
var ReadWriteType;
(function (ReadWriteType) {
    ReadWriteType["All"] = "All";
    ReadWriteType["ReadOnly"] = "ReadOnly";
    ReadWriteType["WriteOnly"] = "WriteOnly";
})(ReadWriteType = exports.ReadWriteType || (exports.ReadWriteType = {}));
var RemoveTagsRequest;
(function (RemoveTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTagsRequest");
    }
    RemoveTagsRequest.isa = isa;
})(RemoveTagsRequest = exports.RemoveTagsRequest || (exports.RemoveTagsRequest = {}));
var RemoveTagsResponse;
(function (RemoveTagsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTagsResponse");
    }
    RemoveTagsResponse.isa = isa;
})(RemoveTagsResponse = exports.RemoveTagsResponse || (exports.RemoveTagsResponse = {}));
var Resource;
(function (Resource) {
    function isa(o) {
        return smithy_client_1.isa(o, "Resource");
    }
    Resource.isa = isa;
})(Resource = exports.Resource || (exports.Resource = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResourceTag;
(function (ResourceTag) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceTag");
    }
    ResourceTag.isa = isa;
})(ResourceTag = exports.ResourceTag || (exports.ResourceTag = {}));
var ResourceTypeNotSupportedException;
(function (ResourceTypeNotSupportedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceTypeNotSupportedException");
    }
    ResourceTypeNotSupportedException.isa = isa;
})(ResourceTypeNotSupportedException = exports.ResourceTypeNotSupportedException || (exports.ResourceTypeNotSupportedException = {}));
var S3BucketDoesNotExistException;
(function (S3BucketDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3BucketDoesNotExistException");
    }
    S3BucketDoesNotExistException.isa = isa;
})(S3BucketDoesNotExistException = exports.S3BucketDoesNotExistException || (exports.S3BucketDoesNotExistException = {}));
var StartLoggingRequest;
(function (StartLoggingRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartLoggingRequest");
    }
    StartLoggingRequest.isa = isa;
})(StartLoggingRequest = exports.StartLoggingRequest || (exports.StartLoggingRequest = {}));
var StartLoggingResponse;
(function (StartLoggingResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartLoggingResponse");
    }
    StartLoggingResponse.isa = isa;
})(StartLoggingResponse = exports.StartLoggingResponse || (exports.StartLoggingResponse = {}));
var StopLoggingRequest;
(function (StopLoggingRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopLoggingRequest");
    }
    StopLoggingRequest.isa = isa;
})(StopLoggingRequest = exports.StopLoggingRequest || (exports.StopLoggingRequest = {}));
var StopLoggingResponse;
(function (StopLoggingResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopLoggingResponse");
    }
    StopLoggingResponse.isa = isa;
})(StopLoggingResponse = exports.StopLoggingResponse || (exports.StopLoggingResponse = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagsLimitExceededException;
(function (TagsLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagsLimitExceededException");
    }
    TagsLimitExceededException.isa = isa;
})(TagsLimitExceededException = exports.TagsLimitExceededException || (exports.TagsLimitExceededException = {}));
var Trail;
(function (Trail) {
    function isa(o) {
        return smithy_client_1.isa(o, "Trail");
    }
    Trail.isa = isa;
})(Trail = exports.Trail || (exports.Trail = {}));
var TrailAlreadyExistsException;
(function (TrailAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrailAlreadyExistsException");
    }
    TrailAlreadyExistsException.isa = isa;
})(TrailAlreadyExistsException = exports.TrailAlreadyExistsException || (exports.TrailAlreadyExistsException = {}));
var TrailInfo;
(function (TrailInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrailInfo");
    }
    TrailInfo.isa = isa;
})(TrailInfo = exports.TrailInfo || (exports.TrailInfo = {}));
var TrailNotFoundException;
(function (TrailNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrailNotFoundException");
    }
    TrailNotFoundException.isa = isa;
})(TrailNotFoundException = exports.TrailNotFoundException || (exports.TrailNotFoundException = {}));
var TrailNotProvidedException;
(function (TrailNotProvidedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrailNotProvidedException");
    }
    TrailNotProvidedException.isa = isa;
})(TrailNotProvidedException = exports.TrailNotProvidedException || (exports.TrailNotProvidedException = {}));
var UnsupportedOperationException;
(function (UnsupportedOperationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedOperationException");
    }
    UnsupportedOperationException.isa = isa;
})(UnsupportedOperationException = exports.UnsupportedOperationException || (exports.UnsupportedOperationException = {}));
var UpdateTrailRequest;
(function (UpdateTrailRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTrailRequest");
    }
    UpdateTrailRequest.isa = isa;
})(UpdateTrailRequest = exports.UpdateTrailRequest || (exports.UpdateTrailRequest = {}));
var UpdateTrailResponse;
(function (UpdateTrailResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTrailResponse");
    }
    UpdateTrailResponse.isa = isa;
})(UpdateTrailResponse = exports.UpdateTrailResponse || (exports.UpdateTrailResponse = {}));
//# sourceMappingURL=index.js.map
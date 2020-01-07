"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var MessageTag;
(function (MessageTag) {
    function isa(o) {
        return smithy_client_1.isa(o, "MessageTag");
    }
    MessageTag.isa = isa;
})(MessageTag = exports.MessageTag || (exports.MessageTag = {}));
var AccountSendingPausedException;
(function (AccountSendingPausedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccountSendingPausedException");
    }
    AccountSendingPausedException.isa = isa;
})(AccountSendingPausedException = exports.AccountSendingPausedException || (exports.AccountSendingPausedException = {}));
var AddHeaderAction;
(function (AddHeaderAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddHeaderAction");
    }
    AddHeaderAction.isa = isa;
})(AddHeaderAction = exports.AddHeaderAction || (exports.AddHeaderAction = {}));
var AlreadyExistsException;
(function (AlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AlreadyExistsException");
    }
    AlreadyExistsException.isa = isa;
})(AlreadyExistsException = exports.AlreadyExistsException || (exports.AlreadyExistsException = {}));
var BehaviorOnMXFailure;
(function (BehaviorOnMXFailure) {
    BehaviorOnMXFailure["RejectMessage"] = "RejectMessage";
    BehaviorOnMXFailure["UseDefaultValue"] = "UseDefaultValue";
})(BehaviorOnMXFailure = exports.BehaviorOnMXFailure || (exports.BehaviorOnMXFailure = {}));
var Body;
(function (Body) {
    function isa(o) {
        return smithy_client_1.isa(o, "Body");
    }
    Body.isa = isa;
})(Body = exports.Body || (exports.Body = {}));
var BounceAction;
(function (BounceAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "BounceAction");
    }
    BounceAction.isa = isa;
})(BounceAction = exports.BounceAction || (exports.BounceAction = {}));
var BounceType;
(function (BounceType) {
    BounceType["ContentRejected"] = "ContentRejected";
    BounceType["DoesNotExist"] = "DoesNotExist";
    BounceType["ExceededQuota"] = "ExceededQuota";
    BounceType["MessageTooLarge"] = "MessageTooLarge";
    BounceType["TemporaryFailure"] = "TemporaryFailure";
    BounceType["Undefined"] = "Undefined";
})(BounceType = exports.BounceType || (exports.BounceType = {}));
var BouncedRecipientInfo;
(function (BouncedRecipientInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "BouncedRecipientInfo");
    }
    BouncedRecipientInfo.isa = isa;
})(BouncedRecipientInfo = exports.BouncedRecipientInfo || (exports.BouncedRecipientInfo = {}));
var BulkEmailDestination;
(function (BulkEmailDestination) {
    function isa(o) {
        return smithy_client_1.isa(o, "BulkEmailDestination");
    }
    BulkEmailDestination.isa = isa;
})(BulkEmailDestination = exports.BulkEmailDestination || (exports.BulkEmailDestination = {}));
var BulkEmailDestinationStatus;
(function (BulkEmailDestinationStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "BulkEmailDestinationStatus");
    }
    BulkEmailDestinationStatus.isa = isa;
})(BulkEmailDestinationStatus = exports.BulkEmailDestinationStatus || (exports.BulkEmailDestinationStatus = {}));
var BulkEmailStatus;
(function (BulkEmailStatus) {
    BulkEmailStatus["AccountDailyQuotaExceeded"] = "AccountDailyQuotaExceeded";
    BulkEmailStatus["AccountSendingPaused"] = "AccountSendingPaused";
    BulkEmailStatus["AccountSuspended"] = "AccountSuspended";
    BulkEmailStatus["AccountThrottled"] = "AccountThrottled";
    BulkEmailStatus["ConfigurationSetDoesNotExist"] = "ConfigurationSetDoesNotExist";
    BulkEmailStatus["ConfigurationSetSendingPaused"] = "ConfigurationSetSendingPaused";
    BulkEmailStatus["Failed"] = "Failed";
    BulkEmailStatus["InvalidParameterValue"] = "InvalidParameterValue";
    BulkEmailStatus["InvalidSendingPoolName"] = "InvalidSendingPoolName";
    BulkEmailStatus["MailFromDomainNotVerified"] = "MailFromDomainNotVerified";
    BulkEmailStatus["MessageRejected"] = "MessageRejected";
    BulkEmailStatus["Success"] = "Success";
    BulkEmailStatus["TemplateDoesNotExist"] = "TemplateDoesNotExist";
    BulkEmailStatus["TransientFailure"] = "TransientFailure";
})(BulkEmailStatus = exports.BulkEmailStatus || (exports.BulkEmailStatus = {}));
var CannotDeleteException;
(function (CannotDeleteException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CannotDeleteException");
    }
    CannotDeleteException.isa = isa;
})(CannotDeleteException = exports.CannotDeleteException || (exports.CannotDeleteException = {}));
var CloneReceiptRuleSetRequest;
(function (CloneReceiptRuleSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloneReceiptRuleSetRequest");
    }
    CloneReceiptRuleSetRequest.isa = isa;
})(CloneReceiptRuleSetRequest = exports.CloneReceiptRuleSetRequest || (exports.CloneReceiptRuleSetRequest = {}));
var CloneReceiptRuleSetResponse;
(function (CloneReceiptRuleSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloneReceiptRuleSetResponse");
    }
    CloneReceiptRuleSetResponse.isa = isa;
})(CloneReceiptRuleSetResponse = exports.CloneReceiptRuleSetResponse || (exports.CloneReceiptRuleSetResponse = {}));
var CloudWatchDestination;
(function (CloudWatchDestination) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudWatchDestination");
    }
    CloudWatchDestination.isa = isa;
})(CloudWatchDestination = exports.CloudWatchDestination || (exports.CloudWatchDestination = {}));
var CloudWatchDimensionConfiguration;
(function (CloudWatchDimensionConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudWatchDimensionConfiguration");
    }
    CloudWatchDimensionConfiguration.isa = isa;
})(CloudWatchDimensionConfiguration = exports.CloudWatchDimensionConfiguration || (exports.CloudWatchDimensionConfiguration = {}));
var ConfigurationSet;
(function (ConfigurationSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigurationSet");
    }
    ConfigurationSet.isa = isa;
})(ConfigurationSet = exports.ConfigurationSet || (exports.ConfigurationSet = {}));
var ConfigurationSetAlreadyExistsException;
(function (ConfigurationSetAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigurationSetAlreadyExistsException");
    }
    ConfigurationSetAlreadyExistsException.isa = isa;
})(ConfigurationSetAlreadyExistsException = exports.ConfigurationSetAlreadyExistsException || (exports.ConfigurationSetAlreadyExistsException = {}));
var ConfigurationSetAttribute;
(function (ConfigurationSetAttribute) {
    ConfigurationSetAttribute["DELIVERY_OPTIONS"] = "deliveryOptions";
    ConfigurationSetAttribute["EVENT_DESTINATIONS"] = "eventDestinations";
    ConfigurationSetAttribute["REPUTATION_OPTIONS"] = "reputationOptions";
    ConfigurationSetAttribute["TRACKING_OPTIONS"] = "trackingOptions";
})(ConfigurationSetAttribute = exports.ConfigurationSetAttribute || (exports.ConfigurationSetAttribute = {}));
var ConfigurationSetDoesNotExistException;
(function (ConfigurationSetDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigurationSetDoesNotExistException");
    }
    ConfigurationSetDoesNotExistException.isa = isa;
})(ConfigurationSetDoesNotExistException = exports.ConfigurationSetDoesNotExistException || (exports.ConfigurationSetDoesNotExistException = {}));
var ConfigurationSetSendingPausedException;
(function (ConfigurationSetSendingPausedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigurationSetSendingPausedException");
    }
    ConfigurationSetSendingPausedException.isa = isa;
})(ConfigurationSetSendingPausedException = exports.ConfigurationSetSendingPausedException || (exports.ConfigurationSetSendingPausedException = {}));
var Content;
(function (Content) {
    function isa(o) {
        return smithy_client_1.isa(o, "Content");
    }
    Content.isa = isa;
})(Content = exports.Content || (exports.Content = {}));
var CreateConfigurationSetEventDestinationRequest;
(function (CreateConfigurationSetEventDestinationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConfigurationSetEventDestinationRequest");
    }
    CreateConfigurationSetEventDestinationRequest.isa = isa;
})(CreateConfigurationSetEventDestinationRequest = exports.CreateConfigurationSetEventDestinationRequest || (exports.CreateConfigurationSetEventDestinationRequest = {}));
var CreateConfigurationSetEventDestinationResponse;
(function (CreateConfigurationSetEventDestinationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConfigurationSetEventDestinationResponse");
    }
    CreateConfigurationSetEventDestinationResponse.isa = isa;
})(CreateConfigurationSetEventDestinationResponse = exports.CreateConfigurationSetEventDestinationResponse || (exports.CreateConfigurationSetEventDestinationResponse = {}));
var CreateConfigurationSetRequest;
(function (CreateConfigurationSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConfigurationSetRequest");
    }
    CreateConfigurationSetRequest.isa = isa;
})(CreateConfigurationSetRequest = exports.CreateConfigurationSetRequest || (exports.CreateConfigurationSetRequest = {}));
var CreateConfigurationSetResponse;
(function (CreateConfigurationSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConfigurationSetResponse");
    }
    CreateConfigurationSetResponse.isa = isa;
})(CreateConfigurationSetResponse = exports.CreateConfigurationSetResponse || (exports.CreateConfigurationSetResponse = {}));
var CreateConfigurationSetTrackingOptionsRequest;
(function (CreateConfigurationSetTrackingOptionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConfigurationSetTrackingOptionsRequest");
    }
    CreateConfigurationSetTrackingOptionsRequest.isa = isa;
})(CreateConfigurationSetTrackingOptionsRequest = exports.CreateConfigurationSetTrackingOptionsRequest || (exports.CreateConfigurationSetTrackingOptionsRequest = {}));
var CreateConfigurationSetTrackingOptionsResponse;
(function (CreateConfigurationSetTrackingOptionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConfigurationSetTrackingOptionsResponse");
    }
    CreateConfigurationSetTrackingOptionsResponse.isa = isa;
})(CreateConfigurationSetTrackingOptionsResponse = exports.CreateConfigurationSetTrackingOptionsResponse || (exports.CreateConfigurationSetTrackingOptionsResponse = {}));
var CreateCustomVerificationEmailTemplateRequest;
(function (CreateCustomVerificationEmailTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCustomVerificationEmailTemplateRequest");
    }
    CreateCustomVerificationEmailTemplateRequest.isa = isa;
})(CreateCustomVerificationEmailTemplateRequest = exports.CreateCustomVerificationEmailTemplateRequest || (exports.CreateCustomVerificationEmailTemplateRequest = {}));
var CreateReceiptFilterRequest;
(function (CreateReceiptFilterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateReceiptFilterRequest");
    }
    CreateReceiptFilterRequest.isa = isa;
})(CreateReceiptFilterRequest = exports.CreateReceiptFilterRequest || (exports.CreateReceiptFilterRequest = {}));
var CreateReceiptFilterResponse;
(function (CreateReceiptFilterResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateReceiptFilterResponse");
    }
    CreateReceiptFilterResponse.isa = isa;
})(CreateReceiptFilterResponse = exports.CreateReceiptFilterResponse || (exports.CreateReceiptFilterResponse = {}));
var CreateReceiptRuleRequest;
(function (CreateReceiptRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateReceiptRuleRequest");
    }
    CreateReceiptRuleRequest.isa = isa;
})(CreateReceiptRuleRequest = exports.CreateReceiptRuleRequest || (exports.CreateReceiptRuleRequest = {}));
var CreateReceiptRuleResponse;
(function (CreateReceiptRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateReceiptRuleResponse");
    }
    CreateReceiptRuleResponse.isa = isa;
})(CreateReceiptRuleResponse = exports.CreateReceiptRuleResponse || (exports.CreateReceiptRuleResponse = {}));
var CreateReceiptRuleSetRequest;
(function (CreateReceiptRuleSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateReceiptRuleSetRequest");
    }
    CreateReceiptRuleSetRequest.isa = isa;
})(CreateReceiptRuleSetRequest = exports.CreateReceiptRuleSetRequest || (exports.CreateReceiptRuleSetRequest = {}));
var CreateReceiptRuleSetResponse;
(function (CreateReceiptRuleSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateReceiptRuleSetResponse");
    }
    CreateReceiptRuleSetResponse.isa = isa;
})(CreateReceiptRuleSetResponse = exports.CreateReceiptRuleSetResponse || (exports.CreateReceiptRuleSetResponse = {}));
var CreateTemplateRequest;
(function (CreateTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTemplateRequest");
    }
    CreateTemplateRequest.isa = isa;
})(CreateTemplateRequest = exports.CreateTemplateRequest || (exports.CreateTemplateRequest = {}));
var CreateTemplateResponse;
(function (CreateTemplateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTemplateResponse");
    }
    CreateTemplateResponse.isa = isa;
})(CreateTemplateResponse = exports.CreateTemplateResponse || (exports.CreateTemplateResponse = {}));
var CustomMailFromStatus;
(function (CustomMailFromStatus) {
    CustomMailFromStatus["Failed"] = "Failed";
    CustomMailFromStatus["Pending"] = "Pending";
    CustomMailFromStatus["Success"] = "Success";
    CustomMailFromStatus["TemporaryFailure"] = "TemporaryFailure";
})(CustomMailFromStatus = exports.CustomMailFromStatus || (exports.CustomMailFromStatus = {}));
var CustomVerificationEmailInvalidContentException;
(function (CustomVerificationEmailInvalidContentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomVerificationEmailInvalidContentException");
    }
    CustomVerificationEmailInvalidContentException.isa = isa;
})(CustomVerificationEmailInvalidContentException = exports.CustomVerificationEmailInvalidContentException || (exports.CustomVerificationEmailInvalidContentException = {}));
var CustomVerificationEmailTemplate;
(function (CustomVerificationEmailTemplate) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomVerificationEmailTemplate");
    }
    CustomVerificationEmailTemplate.isa = isa;
})(CustomVerificationEmailTemplate = exports.CustomVerificationEmailTemplate || (exports.CustomVerificationEmailTemplate = {}));
var CustomVerificationEmailTemplateAlreadyExistsException;
(function (CustomVerificationEmailTemplateAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomVerificationEmailTemplateAlreadyExistsException");
    }
    CustomVerificationEmailTemplateAlreadyExistsException.isa = isa;
})(CustomVerificationEmailTemplateAlreadyExistsException = exports.CustomVerificationEmailTemplateAlreadyExistsException || (exports.CustomVerificationEmailTemplateAlreadyExistsException = {}));
var CustomVerificationEmailTemplateDoesNotExistException;
(function (CustomVerificationEmailTemplateDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomVerificationEmailTemplateDoesNotExistException");
    }
    CustomVerificationEmailTemplateDoesNotExistException.isa = isa;
})(CustomVerificationEmailTemplateDoesNotExistException = exports.CustomVerificationEmailTemplateDoesNotExistException || (exports.CustomVerificationEmailTemplateDoesNotExistException = {}));
var DeleteConfigurationSetEventDestinationRequest;
(function (DeleteConfigurationSetEventDestinationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConfigurationSetEventDestinationRequest");
    }
    DeleteConfigurationSetEventDestinationRequest.isa = isa;
})(DeleteConfigurationSetEventDestinationRequest = exports.DeleteConfigurationSetEventDestinationRequest || (exports.DeleteConfigurationSetEventDestinationRequest = {}));
var DeleteConfigurationSetEventDestinationResponse;
(function (DeleteConfigurationSetEventDestinationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConfigurationSetEventDestinationResponse");
    }
    DeleteConfigurationSetEventDestinationResponse.isa = isa;
})(DeleteConfigurationSetEventDestinationResponse = exports.DeleteConfigurationSetEventDestinationResponse || (exports.DeleteConfigurationSetEventDestinationResponse = {}));
var DeleteConfigurationSetRequest;
(function (DeleteConfigurationSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConfigurationSetRequest");
    }
    DeleteConfigurationSetRequest.isa = isa;
})(DeleteConfigurationSetRequest = exports.DeleteConfigurationSetRequest || (exports.DeleteConfigurationSetRequest = {}));
var DeleteConfigurationSetResponse;
(function (DeleteConfigurationSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConfigurationSetResponse");
    }
    DeleteConfigurationSetResponse.isa = isa;
})(DeleteConfigurationSetResponse = exports.DeleteConfigurationSetResponse || (exports.DeleteConfigurationSetResponse = {}));
var DeleteConfigurationSetTrackingOptionsRequest;
(function (DeleteConfigurationSetTrackingOptionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConfigurationSetTrackingOptionsRequest");
    }
    DeleteConfigurationSetTrackingOptionsRequest.isa = isa;
})(DeleteConfigurationSetTrackingOptionsRequest = exports.DeleteConfigurationSetTrackingOptionsRequest || (exports.DeleteConfigurationSetTrackingOptionsRequest = {}));
var DeleteConfigurationSetTrackingOptionsResponse;
(function (DeleteConfigurationSetTrackingOptionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConfigurationSetTrackingOptionsResponse");
    }
    DeleteConfigurationSetTrackingOptionsResponse.isa = isa;
})(DeleteConfigurationSetTrackingOptionsResponse = exports.DeleteConfigurationSetTrackingOptionsResponse || (exports.DeleteConfigurationSetTrackingOptionsResponse = {}));
var DeleteCustomVerificationEmailTemplateRequest;
(function (DeleteCustomVerificationEmailTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCustomVerificationEmailTemplateRequest");
    }
    DeleteCustomVerificationEmailTemplateRequest.isa = isa;
})(DeleteCustomVerificationEmailTemplateRequest = exports.DeleteCustomVerificationEmailTemplateRequest || (exports.DeleteCustomVerificationEmailTemplateRequest = {}));
var DeleteIdentityPolicyRequest;
(function (DeleteIdentityPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteIdentityPolicyRequest");
    }
    DeleteIdentityPolicyRequest.isa = isa;
})(DeleteIdentityPolicyRequest = exports.DeleteIdentityPolicyRequest || (exports.DeleteIdentityPolicyRequest = {}));
var DeleteIdentityPolicyResponse;
(function (DeleteIdentityPolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteIdentityPolicyResponse");
    }
    DeleteIdentityPolicyResponse.isa = isa;
})(DeleteIdentityPolicyResponse = exports.DeleteIdentityPolicyResponse || (exports.DeleteIdentityPolicyResponse = {}));
var DeleteIdentityRequest;
(function (DeleteIdentityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteIdentityRequest");
    }
    DeleteIdentityRequest.isa = isa;
})(DeleteIdentityRequest = exports.DeleteIdentityRequest || (exports.DeleteIdentityRequest = {}));
var DeleteIdentityResponse;
(function (DeleteIdentityResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteIdentityResponse");
    }
    DeleteIdentityResponse.isa = isa;
})(DeleteIdentityResponse = exports.DeleteIdentityResponse || (exports.DeleteIdentityResponse = {}));
var DeleteReceiptFilterRequest;
(function (DeleteReceiptFilterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteReceiptFilterRequest");
    }
    DeleteReceiptFilterRequest.isa = isa;
})(DeleteReceiptFilterRequest = exports.DeleteReceiptFilterRequest || (exports.DeleteReceiptFilterRequest = {}));
var DeleteReceiptFilterResponse;
(function (DeleteReceiptFilterResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteReceiptFilterResponse");
    }
    DeleteReceiptFilterResponse.isa = isa;
})(DeleteReceiptFilterResponse = exports.DeleteReceiptFilterResponse || (exports.DeleteReceiptFilterResponse = {}));
var DeleteReceiptRuleRequest;
(function (DeleteReceiptRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteReceiptRuleRequest");
    }
    DeleteReceiptRuleRequest.isa = isa;
})(DeleteReceiptRuleRequest = exports.DeleteReceiptRuleRequest || (exports.DeleteReceiptRuleRequest = {}));
var DeleteReceiptRuleResponse;
(function (DeleteReceiptRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteReceiptRuleResponse");
    }
    DeleteReceiptRuleResponse.isa = isa;
})(DeleteReceiptRuleResponse = exports.DeleteReceiptRuleResponse || (exports.DeleteReceiptRuleResponse = {}));
var DeleteReceiptRuleSetRequest;
(function (DeleteReceiptRuleSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteReceiptRuleSetRequest");
    }
    DeleteReceiptRuleSetRequest.isa = isa;
})(DeleteReceiptRuleSetRequest = exports.DeleteReceiptRuleSetRequest || (exports.DeleteReceiptRuleSetRequest = {}));
var DeleteReceiptRuleSetResponse;
(function (DeleteReceiptRuleSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteReceiptRuleSetResponse");
    }
    DeleteReceiptRuleSetResponse.isa = isa;
})(DeleteReceiptRuleSetResponse = exports.DeleteReceiptRuleSetResponse || (exports.DeleteReceiptRuleSetResponse = {}));
var DeleteTemplateRequest;
(function (DeleteTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTemplateRequest");
    }
    DeleteTemplateRequest.isa = isa;
})(DeleteTemplateRequest = exports.DeleteTemplateRequest || (exports.DeleteTemplateRequest = {}));
var DeleteTemplateResponse;
(function (DeleteTemplateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTemplateResponse");
    }
    DeleteTemplateResponse.isa = isa;
})(DeleteTemplateResponse = exports.DeleteTemplateResponse || (exports.DeleteTemplateResponse = {}));
var DeleteVerifiedEmailAddressRequest;
(function (DeleteVerifiedEmailAddressRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVerifiedEmailAddressRequest");
    }
    DeleteVerifiedEmailAddressRequest.isa = isa;
})(DeleteVerifiedEmailAddressRequest = exports.DeleteVerifiedEmailAddressRequest || (exports.DeleteVerifiedEmailAddressRequest = {}));
var DeliveryOptions;
(function (DeliveryOptions) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeliveryOptions");
    }
    DeliveryOptions.isa = isa;
})(DeliveryOptions = exports.DeliveryOptions || (exports.DeliveryOptions = {}));
var DescribeActiveReceiptRuleSetRequest;
(function (DescribeActiveReceiptRuleSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeActiveReceiptRuleSetRequest");
    }
    DescribeActiveReceiptRuleSetRequest.isa = isa;
})(DescribeActiveReceiptRuleSetRequest = exports.DescribeActiveReceiptRuleSetRequest || (exports.DescribeActiveReceiptRuleSetRequest = {}));
var DescribeActiveReceiptRuleSetResponse;
(function (DescribeActiveReceiptRuleSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeActiveReceiptRuleSetResponse");
    }
    DescribeActiveReceiptRuleSetResponse.isa = isa;
})(DescribeActiveReceiptRuleSetResponse = exports.DescribeActiveReceiptRuleSetResponse || (exports.DescribeActiveReceiptRuleSetResponse = {}));
var DescribeConfigurationSetRequest;
(function (DescribeConfigurationSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConfigurationSetRequest");
    }
    DescribeConfigurationSetRequest.isa = isa;
})(DescribeConfigurationSetRequest = exports.DescribeConfigurationSetRequest || (exports.DescribeConfigurationSetRequest = {}));
var DescribeConfigurationSetResponse;
(function (DescribeConfigurationSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConfigurationSetResponse");
    }
    DescribeConfigurationSetResponse.isa = isa;
})(DescribeConfigurationSetResponse = exports.DescribeConfigurationSetResponse || (exports.DescribeConfigurationSetResponse = {}));
var DescribeReceiptRuleRequest;
(function (DescribeReceiptRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeReceiptRuleRequest");
    }
    DescribeReceiptRuleRequest.isa = isa;
})(DescribeReceiptRuleRequest = exports.DescribeReceiptRuleRequest || (exports.DescribeReceiptRuleRequest = {}));
var DescribeReceiptRuleResponse;
(function (DescribeReceiptRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeReceiptRuleResponse");
    }
    DescribeReceiptRuleResponse.isa = isa;
})(DescribeReceiptRuleResponse = exports.DescribeReceiptRuleResponse || (exports.DescribeReceiptRuleResponse = {}));
var DescribeReceiptRuleSetRequest;
(function (DescribeReceiptRuleSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeReceiptRuleSetRequest");
    }
    DescribeReceiptRuleSetRequest.isa = isa;
})(DescribeReceiptRuleSetRequest = exports.DescribeReceiptRuleSetRequest || (exports.DescribeReceiptRuleSetRequest = {}));
var DescribeReceiptRuleSetResponse;
(function (DescribeReceiptRuleSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeReceiptRuleSetResponse");
    }
    DescribeReceiptRuleSetResponse.isa = isa;
})(DescribeReceiptRuleSetResponse = exports.DescribeReceiptRuleSetResponse || (exports.DescribeReceiptRuleSetResponse = {}));
var Destination;
(function (Destination) {
    function isa(o) {
        return smithy_client_1.isa(o, "Destination");
    }
    Destination.isa = isa;
})(Destination = exports.Destination || (exports.Destination = {}));
var DimensionValueSource;
(function (DimensionValueSource) {
    DimensionValueSource["EMAIL_HEADER"] = "emailHeader";
    DimensionValueSource["LINK_TAG"] = "linkTag";
    DimensionValueSource["MESSAGE_TAG"] = "messageTag";
})(DimensionValueSource = exports.DimensionValueSource || (exports.DimensionValueSource = {}));
var DsnAction;
(function (DsnAction) {
    DsnAction["DELAYED"] = "delayed";
    DsnAction["DELIVERED"] = "delivered";
    DsnAction["EXPANDED"] = "expanded";
    DsnAction["FAILED"] = "failed";
    DsnAction["RELAYED"] = "relayed";
})(DsnAction = exports.DsnAction || (exports.DsnAction = {}));
var EventDestination;
(function (EventDestination) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventDestination");
    }
    EventDestination.isa = isa;
})(EventDestination = exports.EventDestination || (exports.EventDestination = {}));
var EventDestinationAlreadyExistsException;
(function (EventDestinationAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventDestinationAlreadyExistsException");
    }
    EventDestinationAlreadyExistsException.isa = isa;
})(EventDestinationAlreadyExistsException = exports.EventDestinationAlreadyExistsException || (exports.EventDestinationAlreadyExistsException = {}));
var EventDestinationDoesNotExistException;
(function (EventDestinationDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventDestinationDoesNotExistException");
    }
    EventDestinationDoesNotExistException.isa = isa;
})(EventDestinationDoesNotExistException = exports.EventDestinationDoesNotExistException || (exports.EventDestinationDoesNotExistException = {}));
var EventType;
(function (EventType) {
    EventType["BOUNCE"] = "bounce";
    EventType["CLICK"] = "click";
    EventType["COMPLAINT"] = "complaint";
    EventType["DELIVERY"] = "delivery";
    EventType["OPEN"] = "open";
    EventType["REJECT"] = "reject";
    EventType["RENDERING_FAILURE"] = "renderingFailure";
    EventType["SEND"] = "send";
})(EventType = exports.EventType || (exports.EventType = {}));
var ExtensionField;
(function (ExtensionField) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExtensionField");
    }
    ExtensionField.isa = isa;
})(ExtensionField = exports.ExtensionField || (exports.ExtensionField = {}));
var FromEmailAddressNotVerifiedException;
(function (FromEmailAddressNotVerifiedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FromEmailAddressNotVerifiedException");
    }
    FromEmailAddressNotVerifiedException.isa = isa;
})(FromEmailAddressNotVerifiedException = exports.FromEmailAddressNotVerifiedException || (exports.FromEmailAddressNotVerifiedException = {}));
var GetAccountSendingEnabledResponse;
(function (GetAccountSendingEnabledResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccountSendingEnabledResponse");
    }
    GetAccountSendingEnabledResponse.isa = isa;
})(GetAccountSendingEnabledResponse = exports.GetAccountSendingEnabledResponse || (exports.GetAccountSendingEnabledResponse = {}));
var GetCustomVerificationEmailTemplateRequest;
(function (GetCustomVerificationEmailTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCustomVerificationEmailTemplateRequest");
    }
    GetCustomVerificationEmailTemplateRequest.isa = isa;
})(GetCustomVerificationEmailTemplateRequest = exports.GetCustomVerificationEmailTemplateRequest || (exports.GetCustomVerificationEmailTemplateRequest = {}));
var GetCustomVerificationEmailTemplateResponse;
(function (GetCustomVerificationEmailTemplateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCustomVerificationEmailTemplateResponse");
    }
    GetCustomVerificationEmailTemplateResponse.isa = isa;
})(GetCustomVerificationEmailTemplateResponse = exports.GetCustomVerificationEmailTemplateResponse || (exports.GetCustomVerificationEmailTemplateResponse = {}));
var GetIdentityDkimAttributesRequest;
(function (GetIdentityDkimAttributesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIdentityDkimAttributesRequest");
    }
    GetIdentityDkimAttributesRequest.isa = isa;
})(GetIdentityDkimAttributesRequest = exports.GetIdentityDkimAttributesRequest || (exports.GetIdentityDkimAttributesRequest = {}));
var GetIdentityDkimAttributesResponse;
(function (GetIdentityDkimAttributesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIdentityDkimAttributesResponse");
    }
    GetIdentityDkimAttributesResponse.isa = isa;
})(GetIdentityDkimAttributesResponse = exports.GetIdentityDkimAttributesResponse || (exports.GetIdentityDkimAttributesResponse = {}));
var GetIdentityMailFromDomainAttributesRequest;
(function (GetIdentityMailFromDomainAttributesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIdentityMailFromDomainAttributesRequest");
    }
    GetIdentityMailFromDomainAttributesRequest.isa = isa;
})(GetIdentityMailFromDomainAttributesRequest = exports.GetIdentityMailFromDomainAttributesRequest || (exports.GetIdentityMailFromDomainAttributesRequest = {}));
var GetIdentityMailFromDomainAttributesResponse;
(function (GetIdentityMailFromDomainAttributesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIdentityMailFromDomainAttributesResponse");
    }
    GetIdentityMailFromDomainAttributesResponse.isa = isa;
})(GetIdentityMailFromDomainAttributesResponse = exports.GetIdentityMailFromDomainAttributesResponse || (exports.GetIdentityMailFromDomainAttributesResponse = {}));
var GetIdentityNotificationAttributesRequest;
(function (GetIdentityNotificationAttributesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIdentityNotificationAttributesRequest");
    }
    GetIdentityNotificationAttributesRequest.isa = isa;
})(GetIdentityNotificationAttributesRequest = exports.GetIdentityNotificationAttributesRequest || (exports.GetIdentityNotificationAttributesRequest = {}));
var GetIdentityNotificationAttributesResponse;
(function (GetIdentityNotificationAttributesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIdentityNotificationAttributesResponse");
    }
    GetIdentityNotificationAttributesResponse.isa = isa;
})(GetIdentityNotificationAttributesResponse = exports.GetIdentityNotificationAttributesResponse || (exports.GetIdentityNotificationAttributesResponse = {}));
var GetIdentityPoliciesRequest;
(function (GetIdentityPoliciesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIdentityPoliciesRequest");
    }
    GetIdentityPoliciesRequest.isa = isa;
})(GetIdentityPoliciesRequest = exports.GetIdentityPoliciesRequest || (exports.GetIdentityPoliciesRequest = {}));
var GetIdentityPoliciesResponse;
(function (GetIdentityPoliciesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIdentityPoliciesResponse");
    }
    GetIdentityPoliciesResponse.isa = isa;
})(GetIdentityPoliciesResponse = exports.GetIdentityPoliciesResponse || (exports.GetIdentityPoliciesResponse = {}));
var GetIdentityVerificationAttributesRequest;
(function (GetIdentityVerificationAttributesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIdentityVerificationAttributesRequest");
    }
    GetIdentityVerificationAttributesRequest.isa = isa;
})(GetIdentityVerificationAttributesRequest = exports.GetIdentityVerificationAttributesRequest || (exports.GetIdentityVerificationAttributesRequest = {}));
var GetIdentityVerificationAttributesResponse;
(function (GetIdentityVerificationAttributesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIdentityVerificationAttributesResponse");
    }
    GetIdentityVerificationAttributesResponse.isa = isa;
})(GetIdentityVerificationAttributesResponse = exports.GetIdentityVerificationAttributesResponse || (exports.GetIdentityVerificationAttributesResponse = {}));
var GetSendQuotaResponse;
(function (GetSendQuotaResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSendQuotaResponse");
    }
    GetSendQuotaResponse.isa = isa;
})(GetSendQuotaResponse = exports.GetSendQuotaResponse || (exports.GetSendQuotaResponse = {}));
var GetSendStatisticsResponse;
(function (GetSendStatisticsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSendStatisticsResponse");
    }
    GetSendStatisticsResponse.isa = isa;
})(GetSendStatisticsResponse = exports.GetSendStatisticsResponse || (exports.GetSendStatisticsResponse = {}));
var GetTemplateRequest;
(function (GetTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTemplateRequest");
    }
    GetTemplateRequest.isa = isa;
})(GetTemplateRequest = exports.GetTemplateRequest || (exports.GetTemplateRequest = {}));
var GetTemplateResponse;
(function (GetTemplateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTemplateResponse");
    }
    GetTemplateResponse.isa = isa;
})(GetTemplateResponse = exports.GetTemplateResponse || (exports.GetTemplateResponse = {}));
var IdentityDkimAttributes;
(function (IdentityDkimAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdentityDkimAttributes");
    }
    IdentityDkimAttributes.isa = isa;
})(IdentityDkimAttributes = exports.IdentityDkimAttributes || (exports.IdentityDkimAttributes = {}));
var IdentityMailFromDomainAttributes;
(function (IdentityMailFromDomainAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdentityMailFromDomainAttributes");
    }
    IdentityMailFromDomainAttributes.isa = isa;
})(IdentityMailFromDomainAttributes = exports.IdentityMailFromDomainAttributes || (exports.IdentityMailFromDomainAttributes = {}));
var IdentityNotificationAttributes;
(function (IdentityNotificationAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdentityNotificationAttributes");
    }
    IdentityNotificationAttributes.isa = isa;
})(IdentityNotificationAttributes = exports.IdentityNotificationAttributes || (exports.IdentityNotificationAttributes = {}));
var IdentityVerificationAttributes;
(function (IdentityVerificationAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdentityVerificationAttributes");
    }
    IdentityVerificationAttributes.isa = isa;
})(IdentityVerificationAttributes = exports.IdentityVerificationAttributes || (exports.IdentityVerificationAttributes = {}));
var InvalidCloudWatchDestinationException;
(function (InvalidCloudWatchDestinationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidCloudWatchDestinationException");
    }
    InvalidCloudWatchDestinationException.isa = isa;
})(InvalidCloudWatchDestinationException = exports.InvalidCloudWatchDestinationException || (exports.InvalidCloudWatchDestinationException = {}));
var InvalidConfigurationSetException;
(function (InvalidConfigurationSetException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidConfigurationSetException");
    }
    InvalidConfigurationSetException.isa = isa;
})(InvalidConfigurationSetException = exports.InvalidConfigurationSetException || (exports.InvalidConfigurationSetException = {}));
var InvalidDeliveryOptionsException;
(function (InvalidDeliveryOptionsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDeliveryOptionsException");
    }
    InvalidDeliveryOptionsException.isa = isa;
})(InvalidDeliveryOptionsException = exports.InvalidDeliveryOptionsException || (exports.InvalidDeliveryOptionsException = {}));
var InvalidFirehoseDestinationException;
(function (InvalidFirehoseDestinationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidFirehoseDestinationException");
    }
    InvalidFirehoseDestinationException.isa = isa;
})(InvalidFirehoseDestinationException = exports.InvalidFirehoseDestinationException || (exports.InvalidFirehoseDestinationException = {}));
var InvalidLambdaFunctionException;
(function (InvalidLambdaFunctionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidLambdaFunctionException");
    }
    InvalidLambdaFunctionException.isa = isa;
})(InvalidLambdaFunctionException = exports.InvalidLambdaFunctionException || (exports.InvalidLambdaFunctionException = {}));
var InvalidPolicyException;
(function (InvalidPolicyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPolicyException");
    }
    InvalidPolicyException.isa = isa;
})(InvalidPolicyException = exports.InvalidPolicyException || (exports.InvalidPolicyException = {}));
var InvalidRenderingParameterException;
(function (InvalidRenderingParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRenderingParameterException");
    }
    InvalidRenderingParameterException.isa = isa;
})(InvalidRenderingParameterException = exports.InvalidRenderingParameterException || (exports.InvalidRenderingParameterException = {}));
var InvalidS3ConfigurationException;
(function (InvalidS3ConfigurationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidS3ConfigurationException");
    }
    InvalidS3ConfigurationException.isa = isa;
})(InvalidS3ConfigurationException = exports.InvalidS3ConfigurationException || (exports.InvalidS3ConfigurationException = {}));
var InvalidSNSDestinationException;
(function (InvalidSNSDestinationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSNSDestinationException");
    }
    InvalidSNSDestinationException.isa = isa;
})(InvalidSNSDestinationException = exports.InvalidSNSDestinationException || (exports.InvalidSNSDestinationException = {}));
var InvalidSnsTopicException;
(function (InvalidSnsTopicException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSnsTopicException");
    }
    InvalidSnsTopicException.isa = isa;
})(InvalidSnsTopicException = exports.InvalidSnsTopicException || (exports.InvalidSnsTopicException = {}));
var InvalidTemplateException;
(function (InvalidTemplateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTemplateException");
    }
    InvalidTemplateException.isa = isa;
})(InvalidTemplateException = exports.InvalidTemplateException || (exports.InvalidTemplateException = {}));
var InvalidTrackingOptionsException;
(function (InvalidTrackingOptionsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTrackingOptionsException");
    }
    InvalidTrackingOptionsException.isa = isa;
})(InvalidTrackingOptionsException = exports.InvalidTrackingOptionsException || (exports.InvalidTrackingOptionsException = {}));
var KinesisFirehoseDestination;
(function (KinesisFirehoseDestination) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisFirehoseDestination");
    }
    KinesisFirehoseDestination.isa = isa;
})(KinesisFirehoseDestination = exports.KinesisFirehoseDestination || (exports.KinesisFirehoseDestination = {}));
var LambdaAction;
(function (LambdaAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "LambdaAction");
    }
    LambdaAction.isa = isa;
})(LambdaAction = exports.LambdaAction || (exports.LambdaAction = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListConfigurationSetsRequest;
(function (ListConfigurationSetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListConfigurationSetsRequest");
    }
    ListConfigurationSetsRequest.isa = isa;
})(ListConfigurationSetsRequest = exports.ListConfigurationSetsRequest || (exports.ListConfigurationSetsRequest = {}));
var ListConfigurationSetsResponse;
(function (ListConfigurationSetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListConfigurationSetsResponse");
    }
    ListConfigurationSetsResponse.isa = isa;
})(ListConfigurationSetsResponse = exports.ListConfigurationSetsResponse || (exports.ListConfigurationSetsResponse = {}));
var ListCustomVerificationEmailTemplatesRequest;
(function (ListCustomVerificationEmailTemplatesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCustomVerificationEmailTemplatesRequest");
    }
    ListCustomVerificationEmailTemplatesRequest.isa = isa;
})(ListCustomVerificationEmailTemplatesRequest = exports.ListCustomVerificationEmailTemplatesRequest || (exports.ListCustomVerificationEmailTemplatesRequest = {}));
var ListCustomVerificationEmailTemplatesResponse;
(function (ListCustomVerificationEmailTemplatesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCustomVerificationEmailTemplatesResponse");
    }
    ListCustomVerificationEmailTemplatesResponse.isa = isa;
})(ListCustomVerificationEmailTemplatesResponse = exports.ListCustomVerificationEmailTemplatesResponse || (exports.ListCustomVerificationEmailTemplatesResponse = {}));
var ListIdentitiesRequest;
(function (ListIdentitiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListIdentitiesRequest");
    }
    ListIdentitiesRequest.isa = isa;
})(ListIdentitiesRequest = exports.ListIdentitiesRequest || (exports.ListIdentitiesRequest = {}));
var ListIdentitiesResponse;
(function (ListIdentitiesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListIdentitiesResponse");
    }
    ListIdentitiesResponse.isa = isa;
})(ListIdentitiesResponse = exports.ListIdentitiesResponse || (exports.ListIdentitiesResponse = {}));
var ListIdentityPoliciesRequest;
(function (ListIdentityPoliciesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListIdentityPoliciesRequest");
    }
    ListIdentityPoliciesRequest.isa = isa;
})(ListIdentityPoliciesRequest = exports.ListIdentityPoliciesRequest || (exports.ListIdentityPoliciesRequest = {}));
var ListIdentityPoliciesResponse;
(function (ListIdentityPoliciesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListIdentityPoliciesResponse");
    }
    ListIdentityPoliciesResponse.isa = isa;
})(ListIdentityPoliciesResponse = exports.ListIdentityPoliciesResponse || (exports.ListIdentityPoliciesResponse = {}));
var ListReceiptFiltersRequest;
(function (ListReceiptFiltersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListReceiptFiltersRequest");
    }
    ListReceiptFiltersRequest.isa = isa;
})(ListReceiptFiltersRequest = exports.ListReceiptFiltersRequest || (exports.ListReceiptFiltersRequest = {}));
var ListReceiptFiltersResponse;
(function (ListReceiptFiltersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListReceiptFiltersResponse");
    }
    ListReceiptFiltersResponse.isa = isa;
})(ListReceiptFiltersResponse = exports.ListReceiptFiltersResponse || (exports.ListReceiptFiltersResponse = {}));
var ListReceiptRuleSetsRequest;
(function (ListReceiptRuleSetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListReceiptRuleSetsRequest");
    }
    ListReceiptRuleSetsRequest.isa = isa;
})(ListReceiptRuleSetsRequest = exports.ListReceiptRuleSetsRequest || (exports.ListReceiptRuleSetsRequest = {}));
var ListReceiptRuleSetsResponse;
(function (ListReceiptRuleSetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListReceiptRuleSetsResponse");
    }
    ListReceiptRuleSetsResponse.isa = isa;
})(ListReceiptRuleSetsResponse = exports.ListReceiptRuleSetsResponse || (exports.ListReceiptRuleSetsResponse = {}));
var ListTemplatesRequest;
(function (ListTemplatesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTemplatesRequest");
    }
    ListTemplatesRequest.isa = isa;
})(ListTemplatesRequest = exports.ListTemplatesRequest || (exports.ListTemplatesRequest = {}));
var ListTemplatesResponse;
(function (ListTemplatesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTemplatesResponse");
    }
    ListTemplatesResponse.isa = isa;
})(ListTemplatesResponse = exports.ListTemplatesResponse || (exports.ListTemplatesResponse = {}));
var ListVerifiedEmailAddressesResponse;
(function (ListVerifiedEmailAddressesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListVerifiedEmailAddressesResponse");
    }
    ListVerifiedEmailAddressesResponse.isa = isa;
})(ListVerifiedEmailAddressesResponse = exports.ListVerifiedEmailAddressesResponse || (exports.ListVerifiedEmailAddressesResponse = {}));
var MailFromDomainNotVerifiedException;
(function (MailFromDomainNotVerifiedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MailFromDomainNotVerifiedException");
    }
    MailFromDomainNotVerifiedException.isa = isa;
})(MailFromDomainNotVerifiedException = exports.MailFromDomainNotVerifiedException || (exports.MailFromDomainNotVerifiedException = {}));
var Message;
(function (Message) {
    function isa(o) {
        return smithy_client_1.isa(o, "Message");
    }
    Message.isa = isa;
})(Message = exports.Message || (exports.Message = {}));
var MessageDsn;
(function (MessageDsn) {
    function isa(o) {
        return smithy_client_1.isa(o, "MessageDsn");
    }
    MessageDsn.isa = isa;
})(MessageDsn = exports.MessageDsn || (exports.MessageDsn = {}));
var MessageRejected;
(function (MessageRejected) {
    function isa(o) {
        return smithy_client_1.isa(o, "MessageRejected");
    }
    MessageRejected.isa = isa;
})(MessageRejected = exports.MessageRejected || (exports.MessageRejected = {}));
var MissingRenderingAttributeException;
(function (MissingRenderingAttributeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MissingRenderingAttributeException");
    }
    MissingRenderingAttributeException.isa = isa;
})(MissingRenderingAttributeException = exports.MissingRenderingAttributeException || (exports.MissingRenderingAttributeException = {}));
var ProductionAccessNotGrantedException;
(function (ProductionAccessNotGrantedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProductionAccessNotGrantedException");
    }
    ProductionAccessNotGrantedException.isa = isa;
})(ProductionAccessNotGrantedException = exports.ProductionAccessNotGrantedException || (exports.ProductionAccessNotGrantedException = {}));
var PutConfigurationSetDeliveryOptionsRequest;
(function (PutConfigurationSetDeliveryOptionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutConfigurationSetDeliveryOptionsRequest");
    }
    PutConfigurationSetDeliveryOptionsRequest.isa = isa;
})(PutConfigurationSetDeliveryOptionsRequest = exports.PutConfigurationSetDeliveryOptionsRequest || (exports.PutConfigurationSetDeliveryOptionsRequest = {}));
var PutConfigurationSetDeliveryOptionsResponse;
(function (PutConfigurationSetDeliveryOptionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutConfigurationSetDeliveryOptionsResponse");
    }
    PutConfigurationSetDeliveryOptionsResponse.isa = isa;
})(PutConfigurationSetDeliveryOptionsResponse = exports.PutConfigurationSetDeliveryOptionsResponse || (exports.PutConfigurationSetDeliveryOptionsResponse = {}));
var PutIdentityPolicyRequest;
(function (PutIdentityPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutIdentityPolicyRequest");
    }
    PutIdentityPolicyRequest.isa = isa;
})(PutIdentityPolicyRequest = exports.PutIdentityPolicyRequest || (exports.PutIdentityPolicyRequest = {}));
var PutIdentityPolicyResponse;
(function (PutIdentityPolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutIdentityPolicyResponse");
    }
    PutIdentityPolicyResponse.isa = isa;
})(PutIdentityPolicyResponse = exports.PutIdentityPolicyResponse || (exports.PutIdentityPolicyResponse = {}));
var RawMessage;
(function (RawMessage) {
    function isa(o) {
        return smithy_client_1.isa(o, "RawMessage");
    }
    RawMessage.isa = isa;
})(RawMessage = exports.RawMessage || (exports.RawMessage = {}));
var ReceiptAction;
(function (ReceiptAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReceiptAction");
    }
    ReceiptAction.isa = isa;
})(ReceiptAction = exports.ReceiptAction || (exports.ReceiptAction = {}));
var ReceiptFilter;
(function (ReceiptFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReceiptFilter");
    }
    ReceiptFilter.isa = isa;
})(ReceiptFilter = exports.ReceiptFilter || (exports.ReceiptFilter = {}));
var ReceiptFilterPolicy;
(function (ReceiptFilterPolicy) {
    ReceiptFilterPolicy["Allow"] = "Allow";
    ReceiptFilterPolicy["Block"] = "Block";
})(ReceiptFilterPolicy = exports.ReceiptFilterPolicy || (exports.ReceiptFilterPolicy = {}));
var ReceiptIpFilter;
(function (ReceiptIpFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReceiptIpFilter");
    }
    ReceiptIpFilter.isa = isa;
})(ReceiptIpFilter = exports.ReceiptIpFilter || (exports.ReceiptIpFilter = {}));
var ReceiptRule;
(function (ReceiptRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReceiptRule");
    }
    ReceiptRule.isa = isa;
})(ReceiptRule = exports.ReceiptRule || (exports.ReceiptRule = {}));
var ReceiptRuleSetMetadata;
(function (ReceiptRuleSetMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReceiptRuleSetMetadata");
    }
    ReceiptRuleSetMetadata.isa = isa;
})(ReceiptRuleSetMetadata = exports.ReceiptRuleSetMetadata || (exports.ReceiptRuleSetMetadata = {}));
var RecipientDsnFields;
(function (RecipientDsnFields) {
    function isa(o) {
        return smithy_client_1.isa(o, "RecipientDsnFields");
    }
    RecipientDsnFields.isa = isa;
})(RecipientDsnFields = exports.RecipientDsnFields || (exports.RecipientDsnFields = {}));
var ReorderReceiptRuleSetRequest;
(function (ReorderReceiptRuleSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReorderReceiptRuleSetRequest");
    }
    ReorderReceiptRuleSetRequest.isa = isa;
})(ReorderReceiptRuleSetRequest = exports.ReorderReceiptRuleSetRequest || (exports.ReorderReceiptRuleSetRequest = {}));
var ReorderReceiptRuleSetResponse;
(function (ReorderReceiptRuleSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReorderReceiptRuleSetResponse");
    }
    ReorderReceiptRuleSetResponse.isa = isa;
})(ReorderReceiptRuleSetResponse = exports.ReorderReceiptRuleSetResponse || (exports.ReorderReceiptRuleSetResponse = {}));
var ReputationOptions;
(function (ReputationOptions) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReputationOptions");
    }
    ReputationOptions.isa = isa;
})(ReputationOptions = exports.ReputationOptions || (exports.ReputationOptions = {}));
var RuleDoesNotExistException;
(function (RuleDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RuleDoesNotExistException");
    }
    RuleDoesNotExistException.isa = isa;
})(RuleDoesNotExistException = exports.RuleDoesNotExistException || (exports.RuleDoesNotExistException = {}));
var RuleSetDoesNotExistException;
(function (RuleSetDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RuleSetDoesNotExistException");
    }
    RuleSetDoesNotExistException.isa = isa;
})(RuleSetDoesNotExistException = exports.RuleSetDoesNotExistException || (exports.RuleSetDoesNotExistException = {}));
var S3Action;
(function (S3Action) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Action");
    }
    S3Action.isa = isa;
})(S3Action = exports.S3Action || (exports.S3Action = {}));
var SNSAction;
(function (SNSAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "SNSAction");
    }
    SNSAction.isa = isa;
})(SNSAction = exports.SNSAction || (exports.SNSAction = {}));
var SNSActionEncoding;
(function (SNSActionEncoding) {
    SNSActionEncoding["Base64"] = "Base64";
    SNSActionEncoding["UTF8"] = "UTF-8";
})(SNSActionEncoding = exports.SNSActionEncoding || (exports.SNSActionEncoding = {}));
var SNSDestination;
(function (SNSDestination) {
    function isa(o) {
        return smithy_client_1.isa(o, "SNSDestination");
    }
    SNSDestination.isa = isa;
})(SNSDestination = exports.SNSDestination || (exports.SNSDestination = {}));
var SendBounceRequest;
(function (SendBounceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendBounceRequest");
    }
    SendBounceRequest.isa = isa;
})(SendBounceRequest = exports.SendBounceRequest || (exports.SendBounceRequest = {}));
var SendBounceResponse;
(function (SendBounceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendBounceResponse");
    }
    SendBounceResponse.isa = isa;
})(SendBounceResponse = exports.SendBounceResponse || (exports.SendBounceResponse = {}));
var SendBulkTemplatedEmailRequest;
(function (SendBulkTemplatedEmailRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendBulkTemplatedEmailRequest");
    }
    SendBulkTemplatedEmailRequest.isa = isa;
})(SendBulkTemplatedEmailRequest = exports.SendBulkTemplatedEmailRequest || (exports.SendBulkTemplatedEmailRequest = {}));
var SendBulkTemplatedEmailResponse;
(function (SendBulkTemplatedEmailResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendBulkTemplatedEmailResponse");
    }
    SendBulkTemplatedEmailResponse.isa = isa;
})(SendBulkTemplatedEmailResponse = exports.SendBulkTemplatedEmailResponse || (exports.SendBulkTemplatedEmailResponse = {}));
var SendCustomVerificationEmailRequest;
(function (SendCustomVerificationEmailRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendCustomVerificationEmailRequest");
    }
    SendCustomVerificationEmailRequest.isa = isa;
})(SendCustomVerificationEmailRequest = exports.SendCustomVerificationEmailRequest || (exports.SendCustomVerificationEmailRequest = {}));
var SendCustomVerificationEmailResponse;
(function (SendCustomVerificationEmailResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendCustomVerificationEmailResponse");
    }
    SendCustomVerificationEmailResponse.isa = isa;
})(SendCustomVerificationEmailResponse = exports.SendCustomVerificationEmailResponse || (exports.SendCustomVerificationEmailResponse = {}));
var SendDataPoint;
(function (SendDataPoint) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendDataPoint");
    }
    SendDataPoint.isa = isa;
})(SendDataPoint = exports.SendDataPoint || (exports.SendDataPoint = {}));
var SendEmailRequest;
(function (SendEmailRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendEmailRequest");
    }
    SendEmailRequest.isa = isa;
})(SendEmailRequest = exports.SendEmailRequest || (exports.SendEmailRequest = {}));
var SendEmailResponse;
(function (SendEmailResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendEmailResponse");
    }
    SendEmailResponse.isa = isa;
})(SendEmailResponse = exports.SendEmailResponse || (exports.SendEmailResponse = {}));
var SendRawEmailRequest;
(function (SendRawEmailRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendRawEmailRequest");
    }
    SendRawEmailRequest.isa = isa;
})(SendRawEmailRequest = exports.SendRawEmailRequest || (exports.SendRawEmailRequest = {}));
var SendRawEmailResponse;
(function (SendRawEmailResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendRawEmailResponse");
    }
    SendRawEmailResponse.isa = isa;
})(SendRawEmailResponse = exports.SendRawEmailResponse || (exports.SendRawEmailResponse = {}));
var SendTemplatedEmailRequest;
(function (SendTemplatedEmailRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendTemplatedEmailRequest");
    }
    SendTemplatedEmailRequest.isa = isa;
})(SendTemplatedEmailRequest = exports.SendTemplatedEmailRequest || (exports.SendTemplatedEmailRequest = {}));
var SendTemplatedEmailResponse;
(function (SendTemplatedEmailResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendTemplatedEmailResponse");
    }
    SendTemplatedEmailResponse.isa = isa;
})(SendTemplatedEmailResponse = exports.SendTemplatedEmailResponse || (exports.SendTemplatedEmailResponse = {}));
var SetActiveReceiptRuleSetRequest;
(function (SetActiveReceiptRuleSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetActiveReceiptRuleSetRequest");
    }
    SetActiveReceiptRuleSetRequest.isa = isa;
})(SetActiveReceiptRuleSetRequest = exports.SetActiveReceiptRuleSetRequest || (exports.SetActiveReceiptRuleSetRequest = {}));
var SetActiveReceiptRuleSetResponse;
(function (SetActiveReceiptRuleSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetActiveReceiptRuleSetResponse");
    }
    SetActiveReceiptRuleSetResponse.isa = isa;
})(SetActiveReceiptRuleSetResponse = exports.SetActiveReceiptRuleSetResponse || (exports.SetActiveReceiptRuleSetResponse = {}));
var SetIdentityDkimEnabledRequest;
(function (SetIdentityDkimEnabledRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetIdentityDkimEnabledRequest");
    }
    SetIdentityDkimEnabledRequest.isa = isa;
})(SetIdentityDkimEnabledRequest = exports.SetIdentityDkimEnabledRequest || (exports.SetIdentityDkimEnabledRequest = {}));
var SetIdentityDkimEnabledResponse;
(function (SetIdentityDkimEnabledResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetIdentityDkimEnabledResponse");
    }
    SetIdentityDkimEnabledResponse.isa = isa;
})(SetIdentityDkimEnabledResponse = exports.SetIdentityDkimEnabledResponse || (exports.SetIdentityDkimEnabledResponse = {}));
var SetIdentityFeedbackForwardingEnabledRequest;
(function (SetIdentityFeedbackForwardingEnabledRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetIdentityFeedbackForwardingEnabledRequest");
    }
    SetIdentityFeedbackForwardingEnabledRequest.isa = isa;
})(SetIdentityFeedbackForwardingEnabledRequest = exports.SetIdentityFeedbackForwardingEnabledRequest || (exports.SetIdentityFeedbackForwardingEnabledRequest = {}));
var SetIdentityFeedbackForwardingEnabledResponse;
(function (SetIdentityFeedbackForwardingEnabledResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetIdentityFeedbackForwardingEnabledResponse");
    }
    SetIdentityFeedbackForwardingEnabledResponse.isa = isa;
})(SetIdentityFeedbackForwardingEnabledResponse = exports.SetIdentityFeedbackForwardingEnabledResponse || (exports.SetIdentityFeedbackForwardingEnabledResponse = {}));
var SetIdentityHeadersInNotificationsEnabledRequest;
(function (SetIdentityHeadersInNotificationsEnabledRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetIdentityHeadersInNotificationsEnabledRequest");
    }
    SetIdentityHeadersInNotificationsEnabledRequest.isa = isa;
})(SetIdentityHeadersInNotificationsEnabledRequest = exports.SetIdentityHeadersInNotificationsEnabledRequest || (exports.SetIdentityHeadersInNotificationsEnabledRequest = {}));
var SetIdentityHeadersInNotificationsEnabledResponse;
(function (SetIdentityHeadersInNotificationsEnabledResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetIdentityHeadersInNotificationsEnabledResponse");
    }
    SetIdentityHeadersInNotificationsEnabledResponse.isa = isa;
})(SetIdentityHeadersInNotificationsEnabledResponse = exports.SetIdentityHeadersInNotificationsEnabledResponse || (exports.SetIdentityHeadersInNotificationsEnabledResponse = {}));
var SetIdentityMailFromDomainRequest;
(function (SetIdentityMailFromDomainRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetIdentityMailFromDomainRequest");
    }
    SetIdentityMailFromDomainRequest.isa = isa;
})(SetIdentityMailFromDomainRequest = exports.SetIdentityMailFromDomainRequest || (exports.SetIdentityMailFromDomainRequest = {}));
var SetIdentityMailFromDomainResponse;
(function (SetIdentityMailFromDomainResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetIdentityMailFromDomainResponse");
    }
    SetIdentityMailFromDomainResponse.isa = isa;
})(SetIdentityMailFromDomainResponse = exports.SetIdentityMailFromDomainResponse || (exports.SetIdentityMailFromDomainResponse = {}));
var SetIdentityNotificationTopicRequest;
(function (SetIdentityNotificationTopicRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetIdentityNotificationTopicRequest");
    }
    SetIdentityNotificationTopicRequest.isa = isa;
})(SetIdentityNotificationTopicRequest = exports.SetIdentityNotificationTopicRequest || (exports.SetIdentityNotificationTopicRequest = {}));
var SetIdentityNotificationTopicResponse;
(function (SetIdentityNotificationTopicResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetIdentityNotificationTopicResponse");
    }
    SetIdentityNotificationTopicResponse.isa = isa;
})(SetIdentityNotificationTopicResponse = exports.SetIdentityNotificationTopicResponse || (exports.SetIdentityNotificationTopicResponse = {}));
var SetReceiptRulePositionRequest;
(function (SetReceiptRulePositionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetReceiptRulePositionRequest");
    }
    SetReceiptRulePositionRequest.isa = isa;
})(SetReceiptRulePositionRequest = exports.SetReceiptRulePositionRequest || (exports.SetReceiptRulePositionRequest = {}));
var SetReceiptRulePositionResponse;
(function (SetReceiptRulePositionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetReceiptRulePositionResponse");
    }
    SetReceiptRulePositionResponse.isa = isa;
})(SetReceiptRulePositionResponse = exports.SetReceiptRulePositionResponse || (exports.SetReceiptRulePositionResponse = {}));
var StopAction;
(function (StopAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopAction");
    }
    StopAction.isa = isa;
})(StopAction = exports.StopAction || (exports.StopAction = {}));
var StopScope;
(function (StopScope) {
    StopScope["RULE_SET"] = "RuleSet";
})(StopScope = exports.StopScope || (exports.StopScope = {}));
var Template;
(function (Template) {
    function isa(o) {
        return smithy_client_1.isa(o, "Template");
    }
    Template.isa = isa;
})(Template = exports.Template || (exports.Template = {}));
var TemplateDoesNotExistException;
(function (TemplateDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TemplateDoesNotExistException");
    }
    TemplateDoesNotExistException.isa = isa;
})(TemplateDoesNotExistException = exports.TemplateDoesNotExistException || (exports.TemplateDoesNotExistException = {}));
var TemplateMetadata;
(function (TemplateMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "TemplateMetadata");
    }
    TemplateMetadata.isa = isa;
})(TemplateMetadata = exports.TemplateMetadata || (exports.TemplateMetadata = {}));
var TestRenderTemplateRequest;
(function (TestRenderTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestRenderTemplateRequest");
    }
    TestRenderTemplateRequest.isa = isa;
})(TestRenderTemplateRequest = exports.TestRenderTemplateRequest || (exports.TestRenderTemplateRequest = {}));
var TestRenderTemplateResponse;
(function (TestRenderTemplateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestRenderTemplateResponse");
    }
    TestRenderTemplateResponse.isa = isa;
})(TestRenderTemplateResponse = exports.TestRenderTemplateResponse || (exports.TestRenderTemplateResponse = {}));
var TlsPolicy;
(function (TlsPolicy) {
    TlsPolicy["Optional"] = "Optional";
    TlsPolicy["Require"] = "Require";
})(TlsPolicy = exports.TlsPolicy || (exports.TlsPolicy = {}));
var TrackingOptions;
(function (TrackingOptions) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrackingOptions");
    }
    TrackingOptions.isa = isa;
})(TrackingOptions = exports.TrackingOptions || (exports.TrackingOptions = {}));
var TrackingOptionsAlreadyExistsException;
(function (TrackingOptionsAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrackingOptionsAlreadyExistsException");
    }
    TrackingOptionsAlreadyExistsException.isa = isa;
})(TrackingOptionsAlreadyExistsException = exports.TrackingOptionsAlreadyExistsException || (exports.TrackingOptionsAlreadyExistsException = {}));
var TrackingOptionsDoesNotExistException;
(function (TrackingOptionsDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrackingOptionsDoesNotExistException");
    }
    TrackingOptionsDoesNotExistException.isa = isa;
})(TrackingOptionsDoesNotExistException = exports.TrackingOptionsDoesNotExistException || (exports.TrackingOptionsDoesNotExistException = {}));
var UpdateAccountSendingEnabledRequest;
(function (UpdateAccountSendingEnabledRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAccountSendingEnabledRequest");
    }
    UpdateAccountSendingEnabledRequest.isa = isa;
})(UpdateAccountSendingEnabledRequest = exports.UpdateAccountSendingEnabledRequest || (exports.UpdateAccountSendingEnabledRequest = {}));
var UpdateConfigurationSetEventDestinationRequest;
(function (UpdateConfigurationSetEventDestinationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConfigurationSetEventDestinationRequest");
    }
    UpdateConfigurationSetEventDestinationRequest.isa = isa;
})(UpdateConfigurationSetEventDestinationRequest = exports.UpdateConfigurationSetEventDestinationRequest || (exports.UpdateConfigurationSetEventDestinationRequest = {}));
var UpdateConfigurationSetEventDestinationResponse;
(function (UpdateConfigurationSetEventDestinationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConfigurationSetEventDestinationResponse");
    }
    UpdateConfigurationSetEventDestinationResponse.isa = isa;
})(UpdateConfigurationSetEventDestinationResponse = exports.UpdateConfigurationSetEventDestinationResponse || (exports.UpdateConfigurationSetEventDestinationResponse = {}));
var UpdateConfigurationSetReputationMetricsEnabledRequest;
(function (UpdateConfigurationSetReputationMetricsEnabledRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConfigurationSetReputationMetricsEnabledRequest");
    }
    UpdateConfigurationSetReputationMetricsEnabledRequest.isa = isa;
})(UpdateConfigurationSetReputationMetricsEnabledRequest = exports.UpdateConfigurationSetReputationMetricsEnabledRequest || (exports.UpdateConfigurationSetReputationMetricsEnabledRequest = {}));
var UpdateConfigurationSetSendingEnabledRequest;
(function (UpdateConfigurationSetSendingEnabledRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConfigurationSetSendingEnabledRequest");
    }
    UpdateConfigurationSetSendingEnabledRequest.isa = isa;
})(UpdateConfigurationSetSendingEnabledRequest = exports.UpdateConfigurationSetSendingEnabledRequest || (exports.UpdateConfigurationSetSendingEnabledRequest = {}));
var UpdateConfigurationSetTrackingOptionsRequest;
(function (UpdateConfigurationSetTrackingOptionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConfigurationSetTrackingOptionsRequest");
    }
    UpdateConfigurationSetTrackingOptionsRequest.isa = isa;
})(UpdateConfigurationSetTrackingOptionsRequest = exports.UpdateConfigurationSetTrackingOptionsRequest || (exports.UpdateConfigurationSetTrackingOptionsRequest = {}));
var UpdateConfigurationSetTrackingOptionsResponse;
(function (UpdateConfigurationSetTrackingOptionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConfigurationSetTrackingOptionsResponse");
    }
    UpdateConfigurationSetTrackingOptionsResponse.isa = isa;
})(UpdateConfigurationSetTrackingOptionsResponse = exports.UpdateConfigurationSetTrackingOptionsResponse || (exports.UpdateConfigurationSetTrackingOptionsResponse = {}));
var UpdateCustomVerificationEmailTemplateRequest;
(function (UpdateCustomVerificationEmailTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCustomVerificationEmailTemplateRequest");
    }
    UpdateCustomVerificationEmailTemplateRequest.isa = isa;
})(UpdateCustomVerificationEmailTemplateRequest = exports.UpdateCustomVerificationEmailTemplateRequest || (exports.UpdateCustomVerificationEmailTemplateRequest = {}));
var UpdateReceiptRuleRequest;
(function (UpdateReceiptRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateReceiptRuleRequest");
    }
    UpdateReceiptRuleRequest.isa = isa;
})(UpdateReceiptRuleRequest = exports.UpdateReceiptRuleRequest || (exports.UpdateReceiptRuleRequest = {}));
var UpdateReceiptRuleResponse;
(function (UpdateReceiptRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateReceiptRuleResponse");
    }
    UpdateReceiptRuleResponse.isa = isa;
})(UpdateReceiptRuleResponse = exports.UpdateReceiptRuleResponse || (exports.UpdateReceiptRuleResponse = {}));
var UpdateTemplateRequest;
(function (UpdateTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTemplateRequest");
    }
    UpdateTemplateRequest.isa = isa;
})(UpdateTemplateRequest = exports.UpdateTemplateRequest || (exports.UpdateTemplateRequest = {}));
var UpdateTemplateResponse;
(function (UpdateTemplateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTemplateResponse");
    }
    UpdateTemplateResponse.isa = isa;
})(UpdateTemplateResponse = exports.UpdateTemplateResponse || (exports.UpdateTemplateResponse = {}));
var VerifyDomainDkimRequest;
(function (VerifyDomainDkimRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "VerifyDomainDkimRequest");
    }
    VerifyDomainDkimRequest.isa = isa;
})(VerifyDomainDkimRequest = exports.VerifyDomainDkimRequest || (exports.VerifyDomainDkimRequest = {}));
var VerifyDomainDkimResponse;
(function (VerifyDomainDkimResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "VerifyDomainDkimResponse");
    }
    VerifyDomainDkimResponse.isa = isa;
})(VerifyDomainDkimResponse = exports.VerifyDomainDkimResponse || (exports.VerifyDomainDkimResponse = {}));
var VerifyDomainIdentityRequest;
(function (VerifyDomainIdentityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "VerifyDomainIdentityRequest");
    }
    VerifyDomainIdentityRequest.isa = isa;
})(VerifyDomainIdentityRequest = exports.VerifyDomainIdentityRequest || (exports.VerifyDomainIdentityRequest = {}));
var VerifyDomainIdentityResponse;
(function (VerifyDomainIdentityResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "VerifyDomainIdentityResponse");
    }
    VerifyDomainIdentityResponse.isa = isa;
})(VerifyDomainIdentityResponse = exports.VerifyDomainIdentityResponse || (exports.VerifyDomainIdentityResponse = {}));
var VerifyEmailAddressRequest;
(function (VerifyEmailAddressRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "VerifyEmailAddressRequest");
    }
    VerifyEmailAddressRequest.isa = isa;
})(VerifyEmailAddressRequest = exports.VerifyEmailAddressRequest || (exports.VerifyEmailAddressRequest = {}));
var VerifyEmailIdentityRequest;
(function (VerifyEmailIdentityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "VerifyEmailIdentityRequest");
    }
    VerifyEmailIdentityRequest.isa = isa;
})(VerifyEmailIdentityRequest = exports.VerifyEmailIdentityRequest || (exports.VerifyEmailIdentityRequest = {}));
var VerifyEmailIdentityResponse;
(function (VerifyEmailIdentityResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "VerifyEmailIdentityResponse");
    }
    VerifyEmailIdentityResponse.isa = isa;
})(VerifyEmailIdentityResponse = exports.VerifyEmailIdentityResponse || (exports.VerifyEmailIdentityResponse = {}));
var WorkmailAction;
(function (WorkmailAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkmailAction");
    }
    WorkmailAction.isa = isa;
})(WorkmailAction = exports.WorkmailAction || (exports.WorkmailAction = {}));
//# sourceMappingURL=index.js.map
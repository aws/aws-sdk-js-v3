"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var Action;
(function (Action) {
    function isa(o) {
        return smithy_client_1.isa(o, "Action");
    }
    Action.isa = isa;
})(Action = exports.Action || (exports.Action = {}));
var ActionTypeEnum;
(function (ActionTypeEnum) {
    ActionTypeEnum["AUTHENTICATE_COGNITO"] = "authenticate-cognito";
    ActionTypeEnum["AUTHENTICATE_OIDC"] = "authenticate-oidc";
    ActionTypeEnum["FIXED_RESPONSE"] = "fixed-response";
    ActionTypeEnum["FORWARD"] = "forward";
    ActionTypeEnum["REDIRECT"] = "redirect";
})(ActionTypeEnum = exports.ActionTypeEnum || (exports.ActionTypeEnum = {}));
var AddListenerCertificatesInput;
(function (AddListenerCertificatesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddListenerCertificatesInput");
    }
    AddListenerCertificatesInput.isa = isa;
})(AddListenerCertificatesInput = exports.AddListenerCertificatesInput || (exports.AddListenerCertificatesInput = {}));
var AddListenerCertificatesOutput;
(function (AddListenerCertificatesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddListenerCertificatesOutput");
    }
    AddListenerCertificatesOutput.isa = isa;
})(AddListenerCertificatesOutput = exports.AddListenerCertificatesOutput || (exports.AddListenerCertificatesOutput = {}));
var AddTagsInput;
(function (AddTagsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsInput");
    }
    AddTagsInput.isa = isa;
})(AddTagsInput = exports.AddTagsInput || (exports.AddTagsInput = {}));
var AddTagsOutput;
(function (AddTagsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsOutput");
    }
    AddTagsOutput.isa = isa;
})(AddTagsOutput = exports.AddTagsOutput || (exports.AddTagsOutput = {}));
var AllocationIdNotFoundException;
(function (AllocationIdNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AllocationIdNotFoundException");
    }
    AllocationIdNotFoundException.isa = isa;
})(AllocationIdNotFoundException = exports.AllocationIdNotFoundException || (exports.AllocationIdNotFoundException = {}));
var AuthenticateCognitoActionConditionalBehaviorEnum;
(function (AuthenticateCognitoActionConditionalBehaviorEnum) {
    AuthenticateCognitoActionConditionalBehaviorEnum["ALLOW"] = "allow";
    AuthenticateCognitoActionConditionalBehaviorEnum["AUTHENTICATE"] = "authenticate";
    AuthenticateCognitoActionConditionalBehaviorEnum["DENY"] = "deny";
})(AuthenticateCognitoActionConditionalBehaviorEnum = exports.AuthenticateCognitoActionConditionalBehaviorEnum || (exports.AuthenticateCognitoActionConditionalBehaviorEnum = {}));
var AuthenticateCognitoActionConfig;
(function (AuthenticateCognitoActionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "AuthenticateCognitoActionConfig");
    }
    AuthenticateCognitoActionConfig.isa = isa;
})(AuthenticateCognitoActionConfig = exports.AuthenticateCognitoActionConfig || (exports.AuthenticateCognitoActionConfig = {}));
var AuthenticateOidcActionConditionalBehaviorEnum;
(function (AuthenticateOidcActionConditionalBehaviorEnum) {
    AuthenticateOidcActionConditionalBehaviorEnum["ALLOW"] = "allow";
    AuthenticateOidcActionConditionalBehaviorEnum["AUTHENTICATE"] = "authenticate";
    AuthenticateOidcActionConditionalBehaviorEnum["DENY"] = "deny";
})(AuthenticateOidcActionConditionalBehaviorEnum = exports.AuthenticateOidcActionConditionalBehaviorEnum || (exports.AuthenticateOidcActionConditionalBehaviorEnum = {}));
var AuthenticateOidcActionConfig;
(function (AuthenticateOidcActionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "AuthenticateOidcActionConfig");
    }
    AuthenticateOidcActionConfig.isa = isa;
})(AuthenticateOidcActionConfig = exports.AuthenticateOidcActionConfig || (exports.AuthenticateOidcActionConfig = {}));
var AvailabilityZone;
(function (AvailabilityZone) {
    function isa(o) {
        return smithy_client_1.isa(o, "AvailabilityZone");
    }
    AvailabilityZone.isa = isa;
})(AvailabilityZone = exports.AvailabilityZone || (exports.AvailabilityZone = {}));
var AvailabilityZoneNotSupportedException;
(function (AvailabilityZoneNotSupportedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AvailabilityZoneNotSupportedException");
    }
    AvailabilityZoneNotSupportedException.isa = isa;
})(AvailabilityZoneNotSupportedException = exports.AvailabilityZoneNotSupportedException || (exports.AvailabilityZoneNotSupportedException = {}));
var Certificate;
(function (Certificate) {
    function isa(o) {
        return smithy_client_1.isa(o, "Certificate");
    }
    Certificate.isa = isa;
})(Certificate = exports.Certificate || (exports.Certificate = {}));
var CertificateNotFoundException;
(function (CertificateNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CertificateNotFoundException");
    }
    CertificateNotFoundException.isa = isa;
})(CertificateNotFoundException = exports.CertificateNotFoundException || (exports.CertificateNotFoundException = {}));
var Cipher;
(function (Cipher) {
    function isa(o) {
        return smithy_client_1.isa(o, "Cipher");
    }
    Cipher.isa = isa;
})(Cipher = exports.Cipher || (exports.Cipher = {}));
var CreateListenerInput;
(function (CreateListenerInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateListenerInput");
    }
    CreateListenerInput.isa = isa;
})(CreateListenerInput = exports.CreateListenerInput || (exports.CreateListenerInput = {}));
var CreateListenerOutput;
(function (CreateListenerOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateListenerOutput");
    }
    CreateListenerOutput.isa = isa;
})(CreateListenerOutput = exports.CreateListenerOutput || (exports.CreateListenerOutput = {}));
var CreateLoadBalancerInput;
(function (CreateLoadBalancerInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLoadBalancerInput");
    }
    CreateLoadBalancerInput.isa = isa;
})(CreateLoadBalancerInput = exports.CreateLoadBalancerInput || (exports.CreateLoadBalancerInput = {}));
var CreateLoadBalancerOutput;
(function (CreateLoadBalancerOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLoadBalancerOutput");
    }
    CreateLoadBalancerOutput.isa = isa;
})(CreateLoadBalancerOutput = exports.CreateLoadBalancerOutput || (exports.CreateLoadBalancerOutput = {}));
var CreateRuleInput;
(function (CreateRuleInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRuleInput");
    }
    CreateRuleInput.isa = isa;
})(CreateRuleInput = exports.CreateRuleInput || (exports.CreateRuleInput = {}));
var CreateRuleOutput;
(function (CreateRuleOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRuleOutput");
    }
    CreateRuleOutput.isa = isa;
})(CreateRuleOutput = exports.CreateRuleOutput || (exports.CreateRuleOutput = {}));
var CreateTargetGroupInput;
(function (CreateTargetGroupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTargetGroupInput");
    }
    CreateTargetGroupInput.isa = isa;
})(CreateTargetGroupInput = exports.CreateTargetGroupInput || (exports.CreateTargetGroupInput = {}));
var CreateTargetGroupOutput;
(function (CreateTargetGroupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTargetGroupOutput");
    }
    CreateTargetGroupOutput.isa = isa;
})(CreateTargetGroupOutput = exports.CreateTargetGroupOutput || (exports.CreateTargetGroupOutput = {}));
var DeleteListenerInput;
(function (DeleteListenerInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteListenerInput");
    }
    DeleteListenerInput.isa = isa;
})(DeleteListenerInput = exports.DeleteListenerInput || (exports.DeleteListenerInput = {}));
var DeleteListenerOutput;
(function (DeleteListenerOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteListenerOutput");
    }
    DeleteListenerOutput.isa = isa;
})(DeleteListenerOutput = exports.DeleteListenerOutput || (exports.DeleteListenerOutput = {}));
var DeleteLoadBalancerInput;
(function (DeleteLoadBalancerInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLoadBalancerInput");
    }
    DeleteLoadBalancerInput.isa = isa;
})(DeleteLoadBalancerInput = exports.DeleteLoadBalancerInput || (exports.DeleteLoadBalancerInput = {}));
var DeleteLoadBalancerOutput;
(function (DeleteLoadBalancerOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLoadBalancerOutput");
    }
    DeleteLoadBalancerOutput.isa = isa;
})(DeleteLoadBalancerOutput = exports.DeleteLoadBalancerOutput || (exports.DeleteLoadBalancerOutput = {}));
var DeleteRuleInput;
(function (DeleteRuleInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRuleInput");
    }
    DeleteRuleInput.isa = isa;
})(DeleteRuleInput = exports.DeleteRuleInput || (exports.DeleteRuleInput = {}));
var DeleteRuleOutput;
(function (DeleteRuleOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRuleOutput");
    }
    DeleteRuleOutput.isa = isa;
})(DeleteRuleOutput = exports.DeleteRuleOutput || (exports.DeleteRuleOutput = {}));
var DeleteTargetGroupInput;
(function (DeleteTargetGroupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTargetGroupInput");
    }
    DeleteTargetGroupInput.isa = isa;
})(DeleteTargetGroupInput = exports.DeleteTargetGroupInput || (exports.DeleteTargetGroupInput = {}));
var DeleteTargetGroupOutput;
(function (DeleteTargetGroupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTargetGroupOutput");
    }
    DeleteTargetGroupOutput.isa = isa;
})(DeleteTargetGroupOutput = exports.DeleteTargetGroupOutput || (exports.DeleteTargetGroupOutput = {}));
var DeregisterTargetsInput;
(function (DeregisterTargetsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterTargetsInput");
    }
    DeregisterTargetsInput.isa = isa;
})(DeregisterTargetsInput = exports.DeregisterTargetsInput || (exports.DeregisterTargetsInput = {}));
var DeregisterTargetsOutput;
(function (DeregisterTargetsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterTargetsOutput");
    }
    DeregisterTargetsOutput.isa = isa;
})(DeregisterTargetsOutput = exports.DeregisterTargetsOutput || (exports.DeregisterTargetsOutput = {}));
var DescribeAccountLimitsInput;
(function (DescribeAccountLimitsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAccountLimitsInput");
    }
    DescribeAccountLimitsInput.isa = isa;
})(DescribeAccountLimitsInput = exports.DescribeAccountLimitsInput || (exports.DescribeAccountLimitsInput = {}));
var DescribeAccountLimitsOutput;
(function (DescribeAccountLimitsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAccountLimitsOutput");
    }
    DescribeAccountLimitsOutput.isa = isa;
})(DescribeAccountLimitsOutput = exports.DescribeAccountLimitsOutput || (exports.DescribeAccountLimitsOutput = {}));
var DescribeListenerCertificatesInput;
(function (DescribeListenerCertificatesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeListenerCertificatesInput");
    }
    DescribeListenerCertificatesInput.isa = isa;
})(DescribeListenerCertificatesInput = exports.DescribeListenerCertificatesInput || (exports.DescribeListenerCertificatesInput = {}));
var DescribeListenerCertificatesOutput;
(function (DescribeListenerCertificatesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeListenerCertificatesOutput");
    }
    DescribeListenerCertificatesOutput.isa = isa;
})(DescribeListenerCertificatesOutput = exports.DescribeListenerCertificatesOutput || (exports.DescribeListenerCertificatesOutput = {}));
var DescribeListenersInput;
(function (DescribeListenersInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeListenersInput");
    }
    DescribeListenersInput.isa = isa;
})(DescribeListenersInput = exports.DescribeListenersInput || (exports.DescribeListenersInput = {}));
var DescribeListenersOutput;
(function (DescribeListenersOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeListenersOutput");
    }
    DescribeListenersOutput.isa = isa;
})(DescribeListenersOutput = exports.DescribeListenersOutput || (exports.DescribeListenersOutput = {}));
var DescribeLoadBalancerAttributesInput;
(function (DescribeLoadBalancerAttributesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLoadBalancerAttributesInput");
    }
    DescribeLoadBalancerAttributesInput.isa = isa;
})(DescribeLoadBalancerAttributesInput = exports.DescribeLoadBalancerAttributesInput || (exports.DescribeLoadBalancerAttributesInput = {}));
var DescribeLoadBalancerAttributesOutput;
(function (DescribeLoadBalancerAttributesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLoadBalancerAttributesOutput");
    }
    DescribeLoadBalancerAttributesOutput.isa = isa;
})(DescribeLoadBalancerAttributesOutput = exports.DescribeLoadBalancerAttributesOutput || (exports.DescribeLoadBalancerAttributesOutput = {}));
var DescribeLoadBalancersInput;
(function (DescribeLoadBalancersInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLoadBalancersInput");
    }
    DescribeLoadBalancersInput.isa = isa;
})(DescribeLoadBalancersInput = exports.DescribeLoadBalancersInput || (exports.DescribeLoadBalancersInput = {}));
var DescribeLoadBalancersOutput;
(function (DescribeLoadBalancersOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLoadBalancersOutput");
    }
    DescribeLoadBalancersOutput.isa = isa;
})(DescribeLoadBalancersOutput = exports.DescribeLoadBalancersOutput || (exports.DescribeLoadBalancersOutput = {}));
var DescribeRulesInput;
(function (DescribeRulesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRulesInput");
    }
    DescribeRulesInput.isa = isa;
})(DescribeRulesInput = exports.DescribeRulesInput || (exports.DescribeRulesInput = {}));
var DescribeRulesOutput;
(function (DescribeRulesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRulesOutput");
    }
    DescribeRulesOutput.isa = isa;
})(DescribeRulesOutput = exports.DescribeRulesOutput || (exports.DescribeRulesOutput = {}));
var DescribeSSLPoliciesInput;
(function (DescribeSSLPoliciesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSSLPoliciesInput");
    }
    DescribeSSLPoliciesInput.isa = isa;
})(DescribeSSLPoliciesInput = exports.DescribeSSLPoliciesInput || (exports.DescribeSSLPoliciesInput = {}));
var DescribeSSLPoliciesOutput;
(function (DescribeSSLPoliciesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSSLPoliciesOutput");
    }
    DescribeSSLPoliciesOutput.isa = isa;
})(DescribeSSLPoliciesOutput = exports.DescribeSSLPoliciesOutput || (exports.DescribeSSLPoliciesOutput = {}));
var DescribeTagsInput;
(function (DescribeTagsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTagsInput");
    }
    DescribeTagsInput.isa = isa;
})(DescribeTagsInput = exports.DescribeTagsInput || (exports.DescribeTagsInput = {}));
var DescribeTagsOutput;
(function (DescribeTagsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTagsOutput");
    }
    DescribeTagsOutput.isa = isa;
})(DescribeTagsOutput = exports.DescribeTagsOutput || (exports.DescribeTagsOutput = {}));
var DescribeTargetGroupAttributesInput;
(function (DescribeTargetGroupAttributesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTargetGroupAttributesInput");
    }
    DescribeTargetGroupAttributesInput.isa = isa;
})(DescribeTargetGroupAttributesInput = exports.DescribeTargetGroupAttributesInput || (exports.DescribeTargetGroupAttributesInput = {}));
var DescribeTargetGroupAttributesOutput;
(function (DescribeTargetGroupAttributesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTargetGroupAttributesOutput");
    }
    DescribeTargetGroupAttributesOutput.isa = isa;
})(DescribeTargetGroupAttributesOutput = exports.DescribeTargetGroupAttributesOutput || (exports.DescribeTargetGroupAttributesOutput = {}));
var DescribeTargetGroupsInput;
(function (DescribeTargetGroupsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTargetGroupsInput");
    }
    DescribeTargetGroupsInput.isa = isa;
})(DescribeTargetGroupsInput = exports.DescribeTargetGroupsInput || (exports.DescribeTargetGroupsInput = {}));
var DescribeTargetGroupsOutput;
(function (DescribeTargetGroupsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTargetGroupsOutput");
    }
    DescribeTargetGroupsOutput.isa = isa;
})(DescribeTargetGroupsOutput = exports.DescribeTargetGroupsOutput || (exports.DescribeTargetGroupsOutput = {}));
var DescribeTargetHealthInput;
(function (DescribeTargetHealthInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTargetHealthInput");
    }
    DescribeTargetHealthInput.isa = isa;
})(DescribeTargetHealthInput = exports.DescribeTargetHealthInput || (exports.DescribeTargetHealthInput = {}));
var DescribeTargetHealthOutput;
(function (DescribeTargetHealthOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTargetHealthOutput");
    }
    DescribeTargetHealthOutput.isa = isa;
})(DescribeTargetHealthOutput = exports.DescribeTargetHealthOutput || (exports.DescribeTargetHealthOutput = {}));
var DuplicateListenerException;
(function (DuplicateListenerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateListenerException");
    }
    DuplicateListenerException.isa = isa;
})(DuplicateListenerException = exports.DuplicateListenerException || (exports.DuplicateListenerException = {}));
var DuplicateLoadBalancerNameException;
(function (DuplicateLoadBalancerNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateLoadBalancerNameException");
    }
    DuplicateLoadBalancerNameException.isa = isa;
})(DuplicateLoadBalancerNameException = exports.DuplicateLoadBalancerNameException || (exports.DuplicateLoadBalancerNameException = {}));
var DuplicateTagKeysException;
(function (DuplicateTagKeysException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateTagKeysException");
    }
    DuplicateTagKeysException.isa = isa;
})(DuplicateTagKeysException = exports.DuplicateTagKeysException || (exports.DuplicateTagKeysException = {}));
var DuplicateTargetGroupNameException;
(function (DuplicateTargetGroupNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateTargetGroupNameException");
    }
    DuplicateTargetGroupNameException.isa = isa;
})(DuplicateTargetGroupNameException = exports.DuplicateTargetGroupNameException || (exports.DuplicateTargetGroupNameException = {}));
var FixedResponseActionConfig;
(function (FixedResponseActionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "FixedResponseActionConfig");
    }
    FixedResponseActionConfig.isa = isa;
})(FixedResponseActionConfig = exports.FixedResponseActionConfig || (exports.FixedResponseActionConfig = {}));
var ForwardActionConfig;
(function (ForwardActionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "ForwardActionConfig");
    }
    ForwardActionConfig.isa = isa;
})(ForwardActionConfig = exports.ForwardActionConfig || (exports.ForwardActionConfig = {}));
var HealthUnavailableException;
(function (HealthUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "HealthUnavailableException");
    }
    HealthUnavailableException.isa = isa;
})(HealthUnavailableException = exports.HealthUnavailableException || (exports.HealthUnavailableException = {}));
var HostHeaderConditionConfig;
(function (HostHeaderConditionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "HostHeaderConditionConfig");
    }
    HostHeaderConditionConfig.isa = isa;
})(HostHeaderConditionConfig = exports.HostHeaderConditionConfig || (exports.HostHeaderConditionConfig = {}));
var HttpHeaderConditionConfig;
(function (HttpHeaderConditionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "HttpHeaderConditionConfig");
    }
    HttpHeaderConditionConfig.isa = isa;
})(HttpHeaderConditionConfig = exports.HttpHeaderConditionConfig || (exports.HttpHeaderConditionConfig = {}));
var HttpRequestMethodConditionConfig;
(function (HttpRequestMethodConditionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "HttpRequestMethodConditionConfig");
    }
    HttpRequestMethodConditionConfig.isa = isa;
})(HttpRequestMethodConditionConfig = exports.HttpRequestMethodConditionConfig || (exports.HttpRequestMethodConditionConfig = {}));
var IncompatibleProtocolsException;
(function (IncompatibleProtocolsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IncompatibleProtocolsException");
    }
    IncompatibleProtocolsException.isa = isa;
})(IncompatibleProtocolsException = exports.IncompatibleProtocolsException || (exports.IncompatibleProtocolsException = {}));
var InvalidConfigurationRequestException;
(function (InvalidConfigurationRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidConfigurationRequestException");
    }
    InvalidConfigurationRequestException.isa = isa;
})(InvalidConfigurationRequestException = exports.InvalidConfigurationRequestException || (exports.InvalidConfigurationRequestException = {}));
var InvalidLoadBalancerActionException;
(function (InvalidLoadBalancerActionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidLoadBalancerActionException");
    }
    InvalidLoadBalancerActionException.isa = isa;
})(InvalidLoadBalancerActionException = exports.InvalidLoadBalancerActionException || (exports.InvalidLoadBalancerActionException = {}));
var InvalidSchemeException;
(function (InvalidSchemeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSchemeException");
    }
    InvalidSchemeException.isa = isa;
})(InvalidSchemeException = exports.InvalidSchemeException || (exports.InvalidSchemeException = {}));
var InvalidSecurityGroupException;
(function (InvalidSecurityGroupException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSecurityGroupException");
    }
    InvalidSecurityGroupException.isa = isa;
})(InvalidSecurityGroupException = exports.InvalidSecurityGroupException || (exports.InvalidSecurityGroupException = {}));
var InvalidSubnetException;
(function (InvalidSubnetException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSubnetException");
    }
    InvalidSubnetException.isa = isa;
})(InvalidSubnetException = exports.InvalidSubnetException || (exports.InvalidSubnetException = {}));
var InvalidTargetException;
(function (InvalidTargetException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTargetException");
    }
    InvalidTargetException.isa = isa;
})(InvalidTargetException = exports.InvalidTargetException || (exports.InvalidTargetException = {}));
var IpAddressType;
(function (IpAddressType) {
    IpAddressType["DUALSTACK"] = "dualstack";
    IpAddressType["IPV4"] = "ipv4";
})(IpAddressType = exports.IpAddressType || (exports.IpAddressType = {}));
var Limit;
(function (Limit) {
    function isa(o) {
        return smithy_client_1.isa(o, "Limit");
    }
    Limit.isa = isa;
})(Limit = exports.Limit || (exports.Limit = {}));
var Listener;
(function (Listener) {
    function isa(o) {
        return smithy_client_1.isa(o, "Listener");
    }
    Listener.isa = isa;
})(Listener = exports.Listener || (exports.Listener = {}));
var ListenerNotFoundException;
(function (ListenerNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListenerNotFoundException");
    }
    ListenerNotFoundException.isa = isa;
})(ListenerNotFoundException = exports.ListenerNotFoundException || (exports.ListenerNotFoundException = {}));
var LoadBalancer;
(function (LoadBalancer) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoadBalancer");
    }
    LoadBalancer.isa = isa;
})(LoadBalancer = exports.LoadBalancer || (exports.LoadBalancer = {}));
var LoadBalancerAddress;
(function (LoadBalancerAddress) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoadBalancerAddress");
    }
    LoadBalancerAddress.isa = isa;
})(LoadBalancerAddress = exports.LoadBalancerAddress || (exports.LoadBalancerAddress = {}));
var LoadBalancerAttribute;
(function (LoadBalancerAttribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoadBalancerAttribute");
    }
    LoadBalancerAttribute.isa = isa;
})(LoadBalancerAttribute = exports.LoadBalancerAttribute || (exports.LoadBalancerAttribute = {}));
var LoadBalancerNotFoundException;
(function (LoadBalancerNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoadBalancerNotFoundException");
    }
    LoadBalancerNotFoundException.isa = isa;
})(LoadBalancerNotFoundException = exports.LoadBalancerNotFoundException || (exports.LoadBalancerNotFoundException = {}));
var LoadBalancerSchemeEnum;
(function (LoadBalancerSchemeEnum) {
    LoadBalancerSchemeEnum["INTERNAL"] = "internal";
    LoadBalancerSchemeEnum["INTERNET_FACING"] = "internet-facing";
})(LoadBalancerSchemeEnum = exports.LoadBalancerSchemeEnum || (exports.LoadBalancerSchemeEnum = {}));
var LoadBalancerState;
(function (LoadBalancerState) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoadBalancerState");
    }
    LoadBalancerState.isa = isa;
})(LoadBalancerState = exports.LoadBalancerState || (exports.LoadBalancerState = {}));
var LoadBalancerStateEnum;
(function (LoadBalancerStateEnum) {
    LoadBalancerStateEnum["ACTIVE"] = "active";
    LoadBalancerStateEnum["ACTIVE_IMPAIRED"] = "active_impaired";
    LoadBalancerStateEnum["FAILED"] = "failed";
    LoadBalancerStateEnum["PROVISIONING"] = "provisioning";
})(LoadBalancerStateEnum = exports.LoadBalancerStateEnum || (exports.LoadBalancerStateEnum = {}));
var LoadBalancerTypeEnum;
(function (LoadBalancerTypeEnum) {
    LoadBalancerTypeEnum["APPLICATION"] = "application";
    LoadBalancerTypeEnum["NETWORK"] = "network";
})(LoadBalancerTypeEnum = exports.LoadBalancerTypeEnum || (exports.LoadBalancerTypeEnum = {}));
var Matcher;
(function (Matcher) {
    function isa(o) {
        return smithy_client_1.isa(o, "Matcher");
    }
    Matcher.isa = isa;
})(Matcher = exports.Matcher || (exports.Matcher = {}));
var ModifyListenerInput;
(function (ModifyListenerInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyListenerInput");
    }
    ModifyListenerInput.isa = isa;
})(ModifyListenerInput = exports.ModifyListenerInput || (exports.ModifyListenerInput = {}));
var ModifyListenerOutput;
(function (ModifyListenerOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyListenerOutput");
    }
    ModifyListenerOutput.isa = isa;
})(ModifyListenerOutput = exports.ModifyListenerOutput || (exports.ModifyListenerOutput = {}));
var ModifyLoadBalancerAttributesInput;
(function (ModifyLoadBalancerAttributesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyLoadBalancerAttributesInput");
    }
    ModifyLoadBalancerAttributesInput.isa = isa;
})(ModifyLoadBalancerAttributesInput = exports.ModifyLoadBalancerAttributesInput || (exports.ModifyLoadBalancerAttributesInput = {}));
var ModifyLoadBalancerAttributesOutput;
(function (ModifyLoadBalancerAttributesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyLoadBalancerAttributesOutput");
    }
    ModifyLoadBalancerAttributesOutput.isa = isa;
})(ModifyLoadBalancerAttributesOutput = exports.ModifyLoadBalancerAttributesOutput || (exports.ModifyLoadBalancerAttributesOutput = {}));
var ModifyRuleInput;
(function (ModifyRuleInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyRuleInput");
    }
    ModifyRuleInput.isa = isa;
})(ModifyRuleInput = exports.ModifyRuleInput || (exports.ModifyRuleInput = {}));
var ModifyRuleOutput;
(function (ModifyRuleOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyRuleOutput");
    }
    ModifyRuleOutput.isa = isa;
})(ModifyRuleOutput = exports.ModifyRuleOutput || (exports.ModifyRuleOutput = {}));
var ModifyTargetGroupAttributesInput;
(function (ModifyTargetGroupAttributesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyTargetGroupAttributesInput");
    }
    ModifyTargetGroupAttributesInput.isa = isa;
})(ModifyTargetGroupAttributesInput = exports.ModifyTargetGroupAttributesInput || (exports.ModifyTargetGroupAttributesInput = {}));
var ModifyTargetGroupAttributesOutput;
(function (ModifyTargetGroupAttributesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyTargetGroupAttributesOutput");
    }
    ModifyTargetGroupAttributesOutput.isa = isa;
})(ModifyTargetGroupAttributesOutput = exports.ModifyTargetGroupAttributesOutput || (exports.ModifyTargetGroupAttributesOutput = {}));
var ModifyTargetGroupInput;
(function (ModifyTargetGroupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyTargetGroupInput");
    }
    ModifyTargetGroupInput.isa = isa;
})(ModifyTargetGroupInput = exports.ModifyTargetGroupInput || (exports.ModifyTargetGroupInput = {}));
var ModifyTargetGroupOutput;
(function (ModifyTargetGroupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyTargetGroupOutput");
    }
    ModifyTargetGroupOutput.isa = isa;
})(ModifyTargetGroupOutput = exports.ModifyTargetGroupOutput || (exports.ModifyTargetGroupOutput = {}));
var OperationNotPermittedException;
(function (OperationNotPermittedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationNotPermittedException");
    }
    OperationNotPermittedException.isa = isa;
})(OperationNotPermittedException = exports.OperationNotPermittedException || (exports.OperationNotPermittedException = {}));
var PathPatternConditionConfig;
(function (PathPatternConditionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "PathPatternConditionConfig");
    }
    PathPatternConditionConfig.isa = isa;
})(PathPatternConditionConfig = exports.PathPatternConditionConfig || (exports.PathPatternConditionConfig = {}));
var PriorityInUseException;
(function (PriorityInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PriorityInUseException");
    }
    PriorityInUseException.isa = isa;
})(PriorityInUseException = exports.PriorityInUseException || (exports.PriorityInUseException = {}));
var QueryStringConditionConfig;
(function (QueryStringConditionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "QueryStringConditionConfig");
    }
    QueryStringConditionConfig.isa = isa;
})(QueryStringConditionConfig = exports.QueryStringConditionConfig || (exports.QueryStringConditionConfig = {}));
var QueryStringKeyValuePair;
(function (QueryStringKeyValuePair) {
    function isa(o) {
        return smithy_client_1.isa(o, "QueryStringKeyValuePair");
    }
    QueryStringKeyValuePair.isa = isa;
})(QueryStringKeyValuePair = exports.QueryStringKeyValuePair || (exports.QueryStringKeyValuePair = {}));
var RedirectActionConfig;
(function (RedirectActionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "RedirectActionConfig");
    }
    RedirectActionConfig.isa = isa;
})(RedirectActionConfig = exports.RedirectActionConfig || (exports.RedirectActionConfig = {}));
var RedirectActionStatusCodeEnum;
(function (RedirectActionStatusCodeEnum) {
    RedirectActionStatusCodeEnum["HTTP_301"] = "HTTP_301";
    RedirectActionStatusCodeEnum["HTTP_302"] = "HTTP_302";
})(RedirectActionStatusCodeEnum = exports.RedirectActionStatusCodeEnum || (exports.RedirectActionStatusCodeEnum = {}));
var RegisterTargetsInput;
(function (RegisterTargetsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterTargetsInput");
    }
    RegisterTargetsInput.isa = isa;
})(RegisterTargetsInput = exports.RegisterTargetsInput || (exports.RegisterTargetsInput = {}));
var RegisterTargetsOutput;
(function (RegisterTargetsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterTargetsOutput");
    }
    RegisterTargetsOutput.isa = isa;
})(RegisterTargetsOutput = exports.RegisterTargetsOutput || (exports.RegisterTargetsOutput = {}));
var RemoveListenerCertificatesInput;
(function (RemoveListenerCertificatesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveListenerCertificatesInput");
    }
    RemoveListenerCertificatesInput.isa = isa;
})(RemoveListenerCertificatesInput = exports.RemoveListenerCertificatesInput || (exports.RemoveListenerCertificatesInput = {}));
var RemoveListenerCertificatesOutput;
(function (RemoveListenerCertificatesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveListenerCertificatesOutput");
    }
    RemoveListenerCertificatesOutput.isa = isa;
})(RemoveListenerCertificatesOutput = exports.RemoveListenerCertificatesOutput || (exports.RemoveListenerCertificatesOutput = {}));
var RemoveTagsInput;
(function (RemoveTagsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTagsInput");
    }
    RemoveTagsInput.isa = isa;
})(RemoveTagsInput = exports.RemoveTagsInput || (exports.RemoveTagsInput = {}));
var RemoveTagsOutput;
(function (RemoveTagsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTagsOutput");
    }
    RemoveTagsOutput.isa = isa;
})(RemoveTagsOutput = exports.RemoveTagsOutput || (exports.RemoveTagsOutput = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceInUseException");
    }
    ResourceInUseException.isa = isa;
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var Rule;
(function (Rule) {
    function isa(o) {
        return smithy_client_1.isa(o, "Rule");
    }
    Rule.isa = isa;
})(Rule = exports.Rule || (exports.Rule = {}));
var RuleCondition;
(function (RuleCondition) {
    function isa(o) {
        return smithy_client_1.isa(o, "RuleCondition");
    }
    RuleCondition.isa = isa;
})(RuleCondition = exports.RuleCondition || (exports.RuleCondition = {}));
var RuleNotFoundException;
(function (RuleNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RuleNotFoundException");
    }
    RuleNotFoundException.isa = isa;
})(RuleNotFoundException = exports.RuleNotFoundException || (exports.RuleNotFoundException = {}));
var RulePriorityPair;
(function (RulePriorityPair) {
    function isa(o) {
        return smithy_client_1.isa(o, "RulePriorityPair");
    }
    RulePriorityPair.isa = isa;
})(RulePriorityPair = exports.RulePriorityPair || (exports.RulePriorityPair = {}));
var SSLPolicyNotFoundException;
(function (SSLPolicyNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "SSLPolicyNotFoundException");
    }
    SSLPolicyNotFoundException.isa = isa;
})(SSLPolicyNotFoundException = exports.SSLPolicyNotFoundException || (exports.SSLPolicyNotFoundException = {}));
var SetIpAddressTypeInput;
(function (SetIpAddressTypeInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetIpAddressTypeInput");
    }
    SetIpAddressTypeInput.isa = isa;
})(SetIpAddressTypeInput = exports.SetIpAddressTypeInput || (exports.SetIpAddressTypeInput = {}));
var SetIpAddressTypeOutput;
(function (SetIpAddressTypeOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetIpAddressTypeOutput");
    }
    SetIpAddressTypeOutput.isa = isa;
})(SetIpAddressTypeOutput = exports.SetIpAddressTypeOutput || (exports.SetIpAddressTypeOutput = {}));
var SetRulePrioritiesInput;
(function (SetRulePrioritiesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetRulePrioritiesInput");
    }
    SetRulePrioritiesInput.isa = isa;
})(SetRulePrioritiesInput = exports.SetRulePrioritiesInput || (exports.SetRulePrioritiesInput = {}));
var SetRulePrioritiesOutput;
(function (SetRulePrioritiesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetRulePrioritiesOutput");
    }
    SetRulePrioritiesOutput.isa = isa;
})(SetRulePrioritiesOutput = exports.SetRulePrioritiesOutput || (exports.SetRulePrioritiesOutput = {}));
var SetSecurityGroupsInput;
(function (SetSecurityGroupsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetSecurityGroupsInput");
    }
    SetSecurityGroupsInput.isa = isa;
})(SetSecurityGroupsInput = exports.SetSecurityGroupsInput || (exports.SetSecurityGroupsInput = {}));
var SetSecurityGroupsOutput;
(function (SetSecurityGroupsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetSecurityGroupsOutput");
    }
    SetSecurityGroupsOutput.isa = isa;
})(SetSecurityGroupsOutput = exports.SetSecurityGroupsOutput || (exports.SetSecurityGroupsOutput = {}));
var SetSubnetsInput;
(function (SetSubnetsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetSubnetsInput");
    }
    SetSubnetsInput.isa = isa;
})(SetSubnetsInput = exports.SetSubnetsInput || (exports.SetSubnetsInput = {}));
var SetSubnetsOutput;
(function (SetSubnetsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetSubnetsOutput");
    }
    SetSubnetsOutput.isa = isa;
})(SetSubnetsOutput = exports.SetSubnetsOutput || (exports.SetSubnetsOutput = {}));
var SourceIpConditionConfig;
(function (SourceIpConditionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "SourceIpConditionConfig");
    }
    SourceIpConditionConfig.isa = isa;
})(SourceIpConditionConfig = exports.SourceIpConditionConfig || (exports.SourceIpConditionConfig = {}));
var SslPolicy;
(function (SslPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "SslPolicy");
    }
    SslPolicy.isa = isa;
})(SslPolicy = exports.SslPolicy || (exports.SslPolicy = {}));
var SubnetMapping;
(function (SubnetMapping) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubnetMapping");
    }
    SubnetMapping.isa = isa;
})(SubnetMapping = exports.SubnetMapping || (exports.SubnetMapping = {}));
var SubnetNotFoundException;
(function (SubnetNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubnetNotFoundException");
    }
    SubnetNotFoundException.isa = isa;
})(SubnetNotFoundException = exports.SubnetNotFoundException || (exports.SubnetNotFoundException = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagDescription;
(function (TagDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagDescription");
    }
    TagDescription.isa = isa;
})(TagDescription = exports.TagDescription || (exports.TagDescription = {}));
var TargetDescription;
(function (TargetDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetDescription");
    }
    TargetDescription.isa = isa;
})(TargetDescription = exports.TargetDescription || (exports.TargetDescription = {}));
var TargetGroup;
(function (TargetGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetGroup");
    }
    TargetGroup.isa = isa;
})(TargetGroup = exports.TargetGroup || (exports.TargetGroup = {}));
var TargetGroupAssociationLimitException;
(function (TargetGroupAssociationLimitException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetGroupAssociationLimitException");
    }
    TargetGroupAssociationLimitException.isa = isa;
})(TargetGroupAssociationLimitException = exports.TargetGroupAssociationLimitException || (exports.TargetGroupAssociationLimitException = {}));
var TargetGroupAttribute;
(function (TargetGroupAttribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetGroupAttribute");
    }
    TargetGroupAttribute.isa = isa;
})(TargetGroupAttribute = exports.TargetGroupAttribute || (exports.TargetGroupAttribute = {}));
var TargetGroupNotFoundException;
(function (TargetGroupNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetGroupNotFoundException");
    }
    TargetGroupNotFoundException.isa = isa;
})(TargetGroupNotFoundException = exports.TargetGroupNotFoundException || (exports.TargetGroupNotFoundException = {}));
var TargetGroupStickinessConfig;
(function (TargetGroupStickinessConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetGroupStickinessConfig");
    }
    TargetGroupStickinessConfig.isa = isa;
})(TargetGroupStickinessConfig = exports.TargetGroupStickinessConfig || (exports.TargetGroupStickinessConfig = {}));
var TargetGroupTuple;
(function (TargetGroupTuple) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetGroupTuple");
    }
    TargetGroupTuple.isa = isa;
})(TargetGroupTuple = exports.TargetGroupTuple || (exports.TargetGroupTuple = {}));
var TargetHealth;
(function (TargetHealth) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetHealth");
    }
    TargetHealth.isa = isa;
})(TargetHealth = exports.TargetHealth || (exports.TargetHealth = {}));
var TargetHealthDescription;
(function (TargetHealthDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetHealthDescription");
    }
    TargetHealthDescription.isa = isa;
})(TargetHealthDescription = exports.TargetHealthDescription || (exports.TargetHealthDescription = {}));
var TargetHealthReasonEnum;
(function (TargetHealthReasonEnum) {
    TargetHealthReasonEnum["DEREGISTRATION_IN_PROGRESS"] = "Target.DeregistrationInProgress";
    TargetHealthReasonEnum["FAILED_HEALTH_CHECKS"] = "Target.FailedHealthChecks";
    TargetHealthReasonEnum["HEALTH_CHECK_DISABLED"] = "Target.HealthCheckDisabled";
    TargetHealthReasonEnum["INITIAL_HEALTH_CHECKING"] = "Elb.InitialHealthChecking";
    TargetHealthReasonEnum["INTERNAL_ERROR"] = "Elb.InternalError";
    TargetHealthReasonEnum["INVALID_STATE"] = "Target.InvalidState";
    TargetHealthReasonEnum["IP_UNUSABLE"] = "Target.IpUnusable";
    TargetHealthReasonEnum["NOT_IN_USE"] = "Target.NotInUse";
    TargetHealthReasonEnum["NOT_REGISTERED"] = "Target.NotRegistered";
    TargetHealthReasonEnum["REGISTRATION_IN_PROGRESS"] = "Elb.RegistrationInProgress";
    TargetHealthReasonEnum["RESPONSE_CODE_MISMATCH"] = "Target.ResponseCodeMismatch";
    TargetHealthReasonEnum["TIMEOUT"] = "Target.Timeout";
})(TargetHealthReasonEnum = exports.TargetHealthReasonEnum || (exports.TargetHealthReasonEnum = {}));
var TargetHealthStateEnum;
(function (TargetHealthStateEnum) {
    TargetHealthStateEnum["DRAINING"] = "draining";
    TargetHealthStateEnum["HEALTHY"] = "healthy";
    TargetHealthStateEnum["INITIAL"] = "initial";
    TargetHealthStateEnum["UNAVAILABLE"] = "unavailable";
    TargetHealthStateEnum["UNHEALTHY"] = "unhealthy";
    TargetHealthStateEnum["UNUSED"] = "unused";
})(TargetHealthStateEnum = exports.TargetHealthStateEnum || (exports.TargetHealthStateEnum = {}));
var TargetTypeEnum;
(function (TargetTypeEnum) {
    TargetTypeEnum["INSTANCE"] = "instance";
    TargetTypeEnum["IP"] = "ip";
    TargetTypeEnum["LAMBDA"] = "lambda";
})(TargetTypeEnum = exports.TargetTypeEnum || (exports.TargetTypeEnum = {}));
var TooManyActionsException;
(function (TooManyActionsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyActionsException");
    }
    TooManyActionsException.isa = isa;
})(TooManyActionsException = exports.TooManyActionsException || (exports.TooManyActionsException = {}));
var TooManyCertificatesException;
(function (TooManyCertificatesException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyCertificatesException");
    }
    TooManyCertificatesException.isa = isa;
})(TooManyCertificatesException = exports.TooManyCertificatesException || (exports.TooManyCertificatesException = {}));
var TooManyListenersException;
(function (TooManyListenersException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyListenersException");
    }
    TooManyListenersException.isa = isa;
})(TooManyListenersException = exports.TooManyListenersException || (exports.TooManyListenersException = {}));
var TooManyLoadBalancersException;
(function (TooManyLoadBalancersException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyLoadBalancersException");
    }
    TooManyLoadBalancersException.isa = isa;
})(TooManyLoadBalancersException = exports.TooManyLoadBalancersException || (exports.TooManyLoadBalancersException = {}));
var TooManyRegistrationsForTargetIdException;
(function (TooManyRegistrationsForTargetIdException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyRegistrationsForTargetIdException");
    }
    TooManyRegistrationsForTargetIdException.isa = isa;
})(TooManyRegistrationsForTargetIdException = exports.TooManyRegistrationsForTargetIdException || (exports.TooManyRegistrationsForTargetIdException = {}));
var TooManyRulesException;
(function (TooManyRulesException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyRulesException");
    }
    TooManyRulesException.isa = isa;
})(TooManyRulesException = exports.TooManyRulesException || (exports.TooManyRulesException = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyTagsException");
    }
    TooManyTagsException.isa = isa;
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var TooManyTargetGroupsException;
(function (TooManyTargetGroupsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyTargetGroupsException");
    }
    TooManyTargetGroupsException.isa = isa;
})(TooManyTargetGroupsException = exports.TooManyTargetGroupsException || (exports.TooManyTargetGroupsException = {}));
var TooManyTargetsException;
(function (TooManyTargetsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyTargetsException");
    }
    TooManyTargetsException.isa = isa;
})(TooManyTargetsException = exports.TooManyTargetsException || (exports.TooManyTargetsException = {}));
var TooManyUniqueTargetGroupsPerLoadBalancerException;
(function (TooManyUniqueTargetGroupsPerLoadBalancerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyUniqueTargetGroupsPerLoadBalancerException");
    }
    TooManyUniqueTargetGroupsPerLoadBalancerException.isa = isa;
})(TooManyUniqueTargetGroupsPerLoadBalancerException = exports.TooManyUniqueTargetGroupsPerLoadBalancerException || (exports.TooManyUniqueTargetGroupsPerLoadBalancerException = {}));
var UnsupportedProtocolException;
(function (UnsupportedProtocolException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedProtocolException");
    }
    UnsupportedProtocolException.isa = isa;
})(UnsupportedProtocolException = exports.UnsupportedProtocolException || (exports.UnsupportedProtocolException = {}));
//# sourceMappingURL=index.js.map
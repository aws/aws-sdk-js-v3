"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var Attributes;
(function (Attributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "Attributes");
    }
    Attributes.isa = isa;
})(Attributes = exports.Attributes || (exports.Attributes = {}));
var ClaimDevicesByClaimCodeRequest;
(function (ClaimDevicesByClaimCodeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClaimDevicesByClaimCodeRequest");
    }
    ClaimDevicesByClaimCodeRequest.isa = isa;
})(ClaimDevicesByClaimCodeRequest = exports.ClaimDevicesByClaimCodeRequest || (exports.ClaimDevicesByClaimCodeRequest = {}));
var ClaimDevicesByClaimCodeResponse;
(function (ClaimDevicesByClaimCodeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClaimDevicesByClaimCodeResponse");
    }
    ClaimDevicesByClaimCodeResponse.isa = isa;
})(ClaimDevicesByClaimCodeResponse = exports.ClaimDevicesByClaimCodeResponse || (exports.ClaimDevicesByClaimCodeResponse = {}));
var DescribeDeviceRequest;
(function (DescribeDeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDeviceRequest");
    }
    DescribeDeviceRequest.isa = isa;
})(DescribeDeviceRequest = exports.DescribeDeviceRequest || (exports.DescribeDeviceRequest = {}));
var DescribeDeviceResponse;
(function (DescribeDeviceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDeviceResponse");
    }
    DescribeDeviceResponse.isa = isa;
})(DescribeDeviceResponse = exports.DescribeDeviceResponse || (exports.DescribeDeviceResponse = {}));
var Device;
(function (Device) {
    function isa(o) {
        return smithy_client_1.isa(o, "Device");
    }
    Device.isa = isa;
})(Device = exports.Device || (exports.Device = {}));
var DeviceDescription;
(function (DeviceDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceDescription");
    }
    DeviceDescription.isa = isa;
})(DeviceDescription = exports.DeviceDescription || (exports.DeviceDescription = {}));
var DeviceEvent;
(function (DeviceEvent) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceEvent");
    }
    DeviceEvent.isa = isa;
})(DeviceEvent = exports.DeviceEvent || (exports.DeviceEvent = {}));
var DeviceMethod;
(function (DeviceMethod) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceMethod");
    }
    DeviceMethod.isa = isa;
})(DeviceMethod = exports.DeviceMethod || (exports.DeviceMethod = {}));
var FinalizeDeviceClaimRequest;
(function (FinalizeDeviceClaimRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "FinalizeDeviceClaimRequest");
    }
    FinalizeDeviceClaimRequest.isa = isa;
})(FinalizeDeviceClaimRequest = exports.FinalizeDeviceClaimRequest || (exports.FinalizeDeviceClaimRequest = {}));
var FinalizeDeviceClaimResponse;
(function (FinalizeDeviceClaimResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "FinalizeDeviceClaimResponse");
    }
    FinalizeDeviceClaimResponse.isa = isa;
})(FinalizeDeviceClaimResponse = exports.FinalizeDeviceClaimResponse || (exports.FinalizeDeviceClaimResponse = {}));
var ForbiddenException;
(function (ForbiddenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ForbiddenException");
    }
    ForbiddenException.isa = isa;
})(ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {}));
var GetDeviceMethodsRequest;
(function (GetDeviceMethodsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeviceMethodsRequest");
    }
    GetDeviceMethodsRequest.isa = isa;
})(GetDeviceMethodsRequest = exports.GetDeviceMethodsRequest || (exports.GetDeviceMethodsRequest = {}));
var GetDeviceMethodsResponse;
(function (GetDeviceMethodsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeviceMethodsResponse");
    }
    GetDeviceMethodsResponse.isa = isa;
})(GetDeviceMethodsResponse = exports.GetDeviceMethodsResponse || (exports.GetDeviceMethodsResponse = {}));
var InitiateDeviceClaimRequest;
(function (InitiateDeviceClaimRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "InitiateDeviceClaimRequest");
    }
    InitiateDeviceClaimRequest.isa = isa;
})(InitiateDeviceClaimRequest = exports.InitiateDeviceClaimRequest || (exports.InitiateDeviceClaimRequest = {}));
var InitiateDeviceClaimResponse;
(function (InitiateDeviceClaimResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "InitiateDeviceClaimResponse");
    }
    InitiateDeviceClaimResponse.isa = isa;
})(InitiateDeviceClaimResponse = exports.InitiateDeviceClaimResponse || (exports.InitiateDeviceClaimResponse = {}));
var InternalFailureException;
(function (InternalFailureException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalFailureException");
    }
    InternalFailureException.isa = isa;
})(InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRequestException");
    }
    InvalidRequestException.isa = isa;
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var InvokeDeviceMethodRequest;
(function (InvokeDeviceMethodRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvokeDeviceMethodRequest");
    }
    InvokeDeviceMethodRequest.isa = isa;
})(InvokeDeviceMethodRequest = exports.InvokeDeviceMethodRequest || (exports.InvokeDeviceMethodRequest = {}));
var InvokeDeviceMethodResponse;
(function (InvokeDeviceMethodResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvokeDeviceMethodResponse");
    }
    InvokeDeviceMethodResponse.isa = isa;
})(InvokeDeviceMethodResponse = exports.InvokeDeviceMethodResponse || (exports.InvokeDeviceMethodResponse = {}));
var ListDeviceEventsRequest;
(function (ListDeviceEventsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeviceEventsRequest");
    }
    ListDeviceEventsRequest.isa = isa;
})(ListDeviceEventsRequest = exports.ListDeviceEventsRequest || (exports.ListDeviceEventsRequest = {}));
var ListDeviceEventsResponse;
(function (ListDeviceEventsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeviceEventsResponse");
    }
    ListDeviceEventsResponse.isa = isa;
})(ListDeviceEventsResponse = exports.ListDeviceEventsResponse || (exports.ListDeviceEventsResponse = {}));
var ListDevicesRequest;
(function (ListDevicesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDevicesRequest");
    }
    ListDevicesRequest.isa = isa;
})(ListDevicesRequest = exports.ListDevicesRequest || (exports.ListDevicesRequest = {}));
var ListDevicesResponse;
(function (ListDevicesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDevicesResponse");
    }
    ListDevicesResponse.isa = isa;
})(ListDevicesResponse = exports.ListDevicesResponse || (exports.ListDevicesResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceRequest");
    }
    ListTagsForResourceRequest.isa = isa;
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceResponse");
    }
    ListTagsForResourceResponse.isa = isa;
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var PreconditionFailedException;
(function (PreconditionFailedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PreconditionFailedException");
    }
    PreconditionFailedException.isa = isa;
})(PreconditionFailedException = exports.PreconditionFailedException || (exports.PreconditionFailedException = {}));
var RangeNotSatisfiableException;
(function (RangeNotSatisfiableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RangeNotSatisfiableException");
    }
    RangeNotSatisfiableException.isa = isa;
})(RangeNotSatisfiableException = exports.RangeNotSatisfiableException || (exports.RangeNotSatisfiableException = {}));
var ResourceConflictException;
(function (ResourceConflictException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceConflictException");
    }
    ResourceConflictException.isa = isa;
})(ResourceConflictException = exports.ResourceConflictException || (exports.ResourceConflictException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceRequest");
    }
    TagResourceRequest.isa = isa;
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UnclaimDeviceRequest;
(function (UnclaimDeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnclaimDeviceRequest");
    }
    UnclaimDeviceRequest.isa = isa;
})(UnclaimDeviceRequest = exports.UnclaimDeviceRequest || (exports.UnclaimDeviceRequest = {}));
var UnclaimDeviceResponse;
(function (UnclaimDeviceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnclaimDeviceResponse");
    }
    UnclaimDeviceResponse.isa = isa;
})(UnclaimDeviceResponse = exports.UnclaimDeviceResponse || (exports.UnclaimDeviceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateDeviceStateRequest;
(function (UpdateDeviceStateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDeviceStateRequest");
    }
    UpdateDeviceStateRequest.isa = isa;
})(UpdateDeviceStateRequest = exports.UpdateDeviceStateRequest || (exports.UpdateDeviceStateRequest = {}));
var UpdateDeviceStateResponse;
(function (UpdateDeviceStateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDeviceStateResponse");
    }
    UpdateDeviceStateResponse.isa = isa;
})(UpdateDeviceStateResponse = exports.UpdateDeviceStateResponse || (exports.UpdateDeviceStateResponse = {}));
//# sourceMappingURL=index.js.map
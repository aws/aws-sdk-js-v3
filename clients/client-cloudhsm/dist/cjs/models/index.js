"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AddTagsToResourceRequest;
(function (AddTagsToResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsToResourceRequest");
    }
    AddTagsToResourceRequest.isa = isa;
})(AddTagsToResourceRequest = exports.AddTagsToResourceRequest || (exports.AddTagsToResourceRequest = {}));
var AddTagsToResourceResponse;
(function (AddTagsToResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsToResourceResponse");
    }
    AddTagsToResourceResponse.isa = isa;
})(AddTagsToResourceResponse = exports.AddTagsToResourceResponse || (exports.AddTagsToResourceResponse = {}));
var ClientVersion;
(function (ClientVersion) {
    ClientVersion["FIVE_ONE"] = "5.1";
    ClientVersion["FIVE_THREE"] = "5.3";
})(ClientVersion = exports.ClientVersion || (exports.ClientVersion = {}));
var CloudHsmInternalException;
(function (CloudHsmInternalException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudHsmInternalException");
    }
    CloudHsmInternalException.isa = isa;
})(CloudHsmInternalException = exports.CloudHsmInternalException || (exports.CloudHsmInternalException = {}));
var CloudHsmObjectState;
(function (CloudHsmObjectState) {
    CloudHsmObjectState["DEGRADED"] = "DEGRADED";
    CloudHsmObjectState["READY"] = "READY";
    CloudHsmObjectState["UPDATING"] = "UPDATING";
})(CloudHsmObjectState = exports.CloudHsmObjectState || (exports.CloudHsmObjectState = {}));
var CloudHsmServiceException;
(function (CloudHsmServiceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudHsmServiceException");
    }
    CloudHsmServiceException.isa = isa;
})(CloudHsmServiceException = exports.CloudHsmServiceException || (exports.CloudHsmServiceException = {}));
var CreateHapgRequest;
(function (CreateHapgRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHapgRequest");
    }
    CreateHapgRequest.isa = isa;
})(CreateHapgRequest = exports.CreateHapgRequest || (exports.CreateHapgRequest = {}));
var CreateHapgResponse;
(function (CreateHapgResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHapgResponse");
    }
    CreateHapgResponse.isa = isa;
})(CreateHapgResponse = exports.CreateHapgResponse || (exports.CreateHapgResponse = {}));
var CreateHsmRequest;
(function (CreateHsmRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHsmRequest");
    }
    CreateHsmRequest.isa = isa;
})(CreateHsmRequest = exports.CreateHsmRequest || (exports.CreateHsmRequest = {}));
var CreateHsmResponse;
(function (CreateHsmResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHsmResponse");
    }
    CreateHsmResponse.isa = isa;
})(CreateHsmResponse = exports.CreateHsmResponse || (exports.CreateHsmResponse = {}));
var CreateLunaClientRequest;
(function (CreateLunaClientRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLunaClientRequest");
    }
    CreateLunaClientRequest.isa = isa;
})(CreateLunaClientRequest = exports.CreateLunaClientRequest || (exports.CreateLunaClientRequest = {}));
var CreateLunaClientResponse;
(function (CreateLunaClientResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLunaClientResponse");
    }
    CreateLunaClientResponse.isa = isa;
})(CreateLunaClientResponse = exports.CreateLunaClientResponse || (exports.CreateLunaClientResponse = {}));
var DeleteHapgRequest;
(function (DeleteHapgRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteHapgRequest");
    }
    DeleteHapgRequest.isa = isa;
})(DeleteHapgRequest = exports.DeleteHapgRequest || (exports.DeleteHapgRequest = {}));
var DeleteHapgResponse;
(function (DeleteHapgResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteHapgResponse");
    }
    DeleteHapgResponse.isa = isa;
})(DeleteHapgResponse = exports.DeleteHapgResponse || (exports.DeleteHapgResponse = {}));
var DeleteHsmRequest;
(function (DeleteHsmRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteHsmRequest");
    }
    DeleteHsmRequest.isa = isa;
})(DeleteHsmRequest = exports.DeleteHsmRequest || (exports.DeleteHsmRequest = {}));
var DeleteHsmResponse;
(function (DeleteHsmResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteHsmResponse");
    }
    DeleteHsmResponse.isa = isa;
})(DeleteHsmResponse = exports.DeleteHsmResponse || (exports.DeleteHsmResponse = {}));
var DeleteLunaClientRequest;
(function (DeleteLunaClientRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLunaClientRequest");
    }
    DeleteLunaClientRequest.isa = isa;
})(DeleteLunaClientRequest = exports.DeleteLunaClientRequest || (exports.DeleteLunaClientRequest = {}));
var DeleteLunaClientResponse;
(function (DeleteLunaClientResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLunaClientResponse");
    }
    DeleteLunaClientResponse.isa = isa;
})(DeleteLunaClientResponse = exports.DeleteLunaClientResponse || (exports.DeleteLunaClientResponse = {}));
var DescribeHapgRequest;
(function (DescribeHapgRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeHapgRequest");
    }
    DescribeHapgRequest.isa = isa;
})(DescribeHapgRequest = exports.DescribeHapgRequest || (exports.DescribeHapgRequest = {}));
var DescribeHapgResponse;
(function (DescribeHapgResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeHapgResponse");
    }
    DescribeHapgResponse.isa = isa;
})(DescribeHapgResponse = exports.DescribeHapgResponse || (exports.DescribeHapgResponse = {}));
var DescribeHsmRequest;
(function (DescribeHsmRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeHsmRequest");
    }
    DescribeHsmRequest.isa = isa;
})(DescribeHsmRequest = exports.DescribeHsmRequest || (exports.DescribeHsmRequest = {}));
var DescribeHsmResponse;
(function (DescribeHsmResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeHsmResponse");
    }
    DescribeHsmResponse.isa = isa;
})(DescribeHsmResponse = exports.DescribeHsmResponse || (exports.DescribeHsmResponse = {}));
var DescribeLunaClientRequest;
(function (DescribeLunaClientRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLunaClientRequest");
    }
    DescribeLunaClientRequest.isa = isa;
})(DescribeLunaClientRequest = exports.DescribeLunaClientRequest || (exports.DescribeLunaClientRequest = {}));
var DescribeLunaClientResponse;
(function (DescribeLunaClientResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLunaClientResponse");
    }
    DescribeLunaClientResponse.isa = isa;
})(DescribeLunaClientResponse = exports.DescribeLunaClientResponse || (exports.DescribeLunaClientResponse = {}));
var GetConfigRequest;
(function (GetConfigRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConfigRequest");
    }
    GetConfigRequest.isa = isa;
})(GetConfigRequest = exports.GetConfigRequest || (exports.GetConfigRequest = {}));
var GetConfigResponse;
(function (GetConfigResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConfigResponse");
    }
    GetConfigResponse.isa = isa;
})(GetConfigResponse = exports.GetConfigResponse || (exports.GetConfigResponse = {}));
var HsmStatus;
(function (HsmStatus) {
    HsmStatus["DEGRADED"] = "DEGRADED";
    HsmStatus["PENDING"] = "PENDING";
    HsmStatus["RUNNING"] = "RUNNING";
    HsmStatus["SUSPENDED"] = "SUSPENDED";
    HsmStatus["TERMINATED"] = "TERMINATED";
    HsmStatus["TERMINATING"] = "TERMINATING";
    HsmStatus["UPDATING"] = "UPDATING";
})(HsmStatus = exports.HsmStatus || (exports.HsmStatus = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRequestException");
    }
    InvalidRequestException.isa = isa;
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ListAvailableZonesRequest;
(function (ListAvailableZonesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAvailableZonesRequest");
    }
    ListAvailableZonesRequest.isa = isa;
})(ListAvailableZonesRequest = exports.ListAvailableZonesRequest || (exports.ListAvailableZonesRequest = {}));
var ListAvailableZonesResponse;
(function (ListAvailableZonesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAvailableZonesResponse");
    }
    ListAvailableZonesResponse.isa = isa;
})(ListAvailableZonesResponse = exports.ListAvailableZonesResponse || (exports.ListAvailableZonesResponse = {}));
var ListHapgsRequest;
(function (ListHapgsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListHapgsRequest");
    }
    ListHapgsRequest.isa = isa;
})(ListHapgsRequest = exports.ListHapgsRequest || (exports.ListHapgsRequest = {}));
var ListHapgsResponse;
(function (ListHapgsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListHapgsResponse");
    }
    ListHapgsResponse.isa = isa;
})(ListHapgsResponse = exports.ListHapgsResponse || (exports.ListHapgsResponse = {}));
var ListHsmsRequest;
(function (ListHsmsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListHsmsRequest");
    }
    ListHsmsRequest.isa = isa;
})(ListHsmsRequest = exports.ListHsmsRequest || (exports.ListHsmsRequest = {}));
var ListHsmsResponse;
(function (ListHsmsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListHsmsResponse");
    }
    ListHsmsResponse.isa = isa;
})(ListHsmsResponse = exports.ListHsmsResponse || (exports.ListHsmsResponse = {}));
var ListLunaClientsRequest;
(function (ListLunaClientsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLunaClientsRequest");
    }
    ListLunaClientsRequest.isa = isa;
})(ListLunaClientsRequest = exports.ListLunaClientsRequest || (exports.ListLunaClientsRequest = {}));
var ListLunaClientsResponse;
(function (ListLunaClientsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLunaClientsResponse");
    }
    ListLunaClientsResponse.isa = isa;
})(ListLunaClientsResponse = exports.ListLunaClientsResponse || (exports.ListLunaClientsResponse = {}));
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
var ModifyHapgRequest;
(function (ModifyHapgRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyHapgRequest");
    }
    ModifyHapgRequest.isa = isa;
})(ModifyHapgRequest = exports.ModifyHapgRequest || (exports.ModifyHapgRequest = {}));
var ModifyHapgResponse;
(function (ModifyHapgResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyHapgResponse");
    }
    ModifyHapgResponse.isa = isa;
})(ModifyHapgResponse = exports.ModifyHapgResponse || (exports.ModifyHapgResponse = {}));
var ModifyHsmRequest;
(function (ModifyHsmRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyHsmRequest");
    }
    ModifyHsmRequest.isa = isa;
})(ModifyHsmRequest = exports.ModifyHsmRequest || (exports.ModifyHsmRequest = {}));
var ModifyHsmResponse;
(function (ModifyHsmResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyHsmResponse");
    }
    ModifyHsmResponse.isa = isa;
})(ModifyHsmResponse = exports.ModifyHsmResponse || (exports.ModifyHsmResponse = {}));
var ModifyLunaClientRequest;
(function (ModifyLunaClientRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyLunaClientRequest");
    }
    ModifyLunaClientRequest.isa = isa;
})(ModifyLunaClientRequest = exports.ModifyLunaClientRequest || (exports.ModifyLunaClientRequest = {}));
var ModifyLunaClientResponse;
(function (ModifyLunaClientResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyLunaClientResponse");
    }
    ModifyLunaClientResponse.isa = isa;
})(ModifyLunaClientResponse = exports.ModifyLunaClientResponse || (exports.ModifyLunaClientResponse = {}));
var RemoveTagsFromResourceRequest;
(function (RemoveTagsFromResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTagsFromResourceRequest");
    }
    RemoveTagsFromResourceRequest.isa = isa;
})(RemoveTagsFromResourceRequest = exports.RemoveTagsFromResourceRequest || (exports.RemoveTagsFromResourceRequest = {}));
var RemoveTagsFromResourceResponse;
(function (RemoveTagsFromResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTagsFromResourceResponse");
    }
    RemoveTagsFromResourceResponse.isa = isa;
})(RemoveTagsFromResourceResponse = exports.RemoveTagsFromResourceResponse || (exports.RemoveTagsFromResourceResponse = {}));
var SubscriptionType;
(function (SubscriptionType) {
    SubscriptionType["PRODUCTION"] = "PRODUCTION";
})(SubscriptionType = exports.SubscriptionType || (exports.SubscriptionType = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
//# sourceMappingURL=index.js.map
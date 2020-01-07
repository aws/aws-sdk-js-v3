"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var CloseTunnelRequest;
(function (CloseTunnelRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloseTunnelRequest");
    }
    CloseTunnelRequest.isa = isa;
})(CloseTunnelRequest = exports.CloseTunnelRequest || (exports.CloseTunnelRequest = {}));
var CloseTunnelResponse;
(function (CloseTunnelResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloseTunnelResponse");
    }
    CloseTunnelResponse.isa = isa;
})(CloseTunnelResponse = exports.CloseTunnelResponse || (exports.CloseTunnelResponse = {}));
var ConnectionState;
(function (ConnectionState) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConnectionState");
    }
    ConnectionState.isa = isa;
})(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["CONNECTED"] = "CONNECTED";
    ConnectionStatus["DISCONNECTED"] = "DISCONNECTED";
})(ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {}));
var DescribeTunnelRequest;
(function (DescribeTunnelRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTunnelRequest");
    }
    DescribeTunnelRequest.isa = isa;
})(DescribeTunnelRequest = exports.DescribeTunnelRequest || (exports.DescribeTunnelRequest = {}));
var DescribeTunnelResponse;
(function (DescribeTunnelResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTunnelResponse");
    }
    DescribeTunnelResponse.isa = isa;
})(DescribeTunnelResponse = exports.DescribeTunnelResponse || (exports.DescribeTunnelResponse = {}));
var DestinationConfig;
(function (DestinationConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "DestinationConfig");
    }
    DestinationConfig.isa = isa;
})(DestinationConfig = exports.DestinationConfig || (exports.DestinationConfig = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
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
var ListTunnelsRequest;
(function (ListTunnelsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTunnelsRequest");
    }
    ListTunnelsRequest.isa = isa;
})(ListTunnelsRequest = exports.ListTunnelsRequest || (exports.ListTunnelsRequest = {}));
var ListTunnelsResponse;
(function (ListTunnelsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTunnelsResponse");
    }
    ListTunnelsResponse.isa = isa;
})(ListTunnelsResponse = exports.ListTunnelsResponse || (exports.ListTunnelsResponse = {}));
var OpenTunnelRequest;
(function (OpenTunnelRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpenTunnelRequest");
    }
    OpenTunnelRequest.isa = isa;
})(OpenTunnelRequest = exports.OpenTunnelRequest || (exports.OpenTunnelRequest = {}));
var OpenTunnelResponse;
(function (OpenTunnelResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpenTunnelResponse");
    }
    OpenTunnelResponse.isa = isa;
})(OpenTunnelResponse = exports.OpenTunnelResponse || (exports.OpenTunnelResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceRequest");
    }
    TagResourceRequest.isa = isa;
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceResponse");
    }
    TagResourceResponse.isa = isa;
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var TimeoutConfig;
(function (TimeoutConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "TimeoutConfig");
    }
    TimeoutConfig.isa = isa;
})(TimeoutConfig = exports.TimeoutConfig || (exports.TimeoutConfig = {}));
var Tunnel;
(function (Tunnel) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tunnel");
    }
    Tunnel.isa = isa;
})(Tunnel = exports.Tunnel || (exports.Tunnel = {}));
var TunnelStatus;
(function (TunnelStatus) {
    TunnelStatus["CLOSED"] = "CLOSED";
    TunnelStatus["OPEN"] = "OPEN";
})(TunnelStatus = exports.TunnelStatus || (exports.TunnelStatus = {}));
var TunnelSummary;
(function (TunnelSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TunnelSummary");
    }
    TunnelSummary.isa = isa;
})(TunnelSummary = exports.TunnelSummary || (exports.TunnelSummary = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceResponse");
    }
    UntagResourceResponse.isa = isa;
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
//# sourceMappingURL=index.js.map
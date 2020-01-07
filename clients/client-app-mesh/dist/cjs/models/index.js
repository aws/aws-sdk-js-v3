"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessLog;
(function (AccessLog) {
    function visit(value, visitor) {
        if (value.file !== undefined)
            return visitor.file(value.file);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    }
    AccessLog.visit = visit;
})(AccessLog = exports.AccessLog || (exports.AccessLog = {}));
var AwsCloudMapInstanceAttribute;
(function (AwsCloudMapInstanceAttribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "AwsCloudMapInstanceAttribute");
    }
    AwsCloudMapInstanceAttribute.isa = isa;
})(AwsCloudMapInstanceAttribute = exports.AwsCloudMapInstanceAttribute || (exports.AwsCloudMapInstanceAttribute = {}));
var AwsCloudMapServiceDiscovery;
(function (AwsCloudMapServiceDiscovery) {
    function isa(o) {
        return smithy_client_1.isa(o, "AwsCloudMapServiceDiscovery");
    }
    AwsCloudMapServiceDiscovery.isa = isa;
})(AwsCloudMapServiceDiscovery = exports.AwsCloudMapServiceDiscovery || (exports.AwsCloudMapServiceDiscovery = {}));
var Backend;
(function (Backend) {
    function visit(value, visitor) {
        if (value.virtualService !== undefined)
            return visitor.virtualService(value.virtualService);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    }
    Backend.visit = visit;
})(Backend = exports.Backend || (exports.Backend = {}));
var BadRequestException;
(function (BadRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BadRequestException");
    }
    BadRequestException.isa = isa;
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var ConflictException;
(function (ConflictException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConflictException");
    }
    ConflictException.isa = isa;
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var CreateMeshInput;
(function (CreateMeshInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMeshInput");
    }
    CreateMeshInput.isa = isa;
})(CreateMeshInput = exports.CreateMeshInput || (exports.CreateMeshInput = {}));
var CreateMeshOutput;
(function (CreateMeshOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMeshOutput");
    }
    CreateMeshOutput.isa = isa;
})(CreateMeshOutput = exports.CreateMeshOutput || (exports.CreateMeshOutput = {}));
var CreateRouteInput;
(function (CreateRouteInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRouteInput");
    }
    CreateRouteInput.isa = isa;
})(CreateRouteInput = exports.CreateRouteInput || (exports.CreateRouteInput = {}));
var CreateRouteOutput;
(function (CreateRouteOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRouteOutput");
    }
    CreateRouteOutput.isa = isa;
})(CreateRouteOutput = exports.CreateRouteOutput || (exports.CreateRouteOutput = {}));
var CreateVirtualNodeInput;
(function (CreateVirtualNodeInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVirtualNodeInput");
    }
    CreateVirtualNodeInput.isa = isa;
})(CreateVirtualNodeInput = exports.CreateVirtualNodeInput || (exports.CreateVirtualNodeInput = {}));
var CreateVirtualNodeOutput;
(function (CreateVirtualNodeOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVirtualNodeOutput");
    }
    CreateVirtualNodeOutput.isa = isa;
})(CreateVirtualNodeOutput = exports.CreateVirtualNodeOutput || (exports.CreateVirtualNodeOutput = {}));
var CreateVirtualRouterInput;
(function (CreateVirtualRouterInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVirtualRouterInput");
    }
    CreateVirtualRouterInput.isa = isa;
})(CreateVirtualRouterInput = exports.CreateVirtualRouterInput || (exports.CreateVirtualRouterInput = {}));
var CreateVirtualRouterOutput;
(function (CreateVirtualRouterOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVirtualRouterOutput");
    }
    CreateVirtualRouterOutput.isa = isa;
})(CreateVirtualRouterOutput = exports.CreateVirtualRouterOutput || (exports.CreateVirtualRouterOutput = {}));
var CreateVirtualServiceInput;
(function (CreateVirtualServiceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVirtualServiceInput");
    }
    CreateVirtualServiceInput.isa = isa;
})(CreateVirtualServiceInput = exports.CreateVirtualServiceInput || (exports.CreateVirtualServiceInput = {}));
var CreateVirtualServiceOutput;
(function (CreateVirtualServiceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVirtualServiceOutput");
    }
    CreateVirtualServiceOutput.isa = isa;
})(CreateVirtualServiceOutput = exports.CreateVirtualServiceOutput || (exports.CreateVirtualServiceOutput = {}));
var DeleteMeshInput;
(function (DeleteMeshInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMeshInput");
    }
    DeleteMeshInput.isa = isa;
})(DeleteMeshInput = exports.DeleteMeshInput || (exports.DeleteMeshInput = {}));
var DeleteMeshOutput;
(function (DeleteMeshOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMeshOutput");
    }
    DeleteMeshOutput.isa = isa;
})(DeleteMeshOutput = exports.DeleteMeshOutput || (exports.DeleteMeshOutput = {}));
var DeleteRouteInput;
(function (DeleteRouteInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRouteInput");
    }
    DeleteRouteInput.isa = isa;
})(DeleteRouteInput = exports.DeleteRouteInput || (exports.DeleteRouteInput = {}));
var DeleteRouteOutput;
(function (DeleteRouteOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRouteOutput");
    }
    DeleteRouteOutput.isa = isa;
})(DeleteRouteOutput = exports.DeleteRouteOutput || (exports.DeleteRouteOutput = {}));
var DeleteVirtualNodeInput;
(function (DeleteVirtualNodeInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVirtualNodeInput");
    }
    DeleteVirtualNodeInput.isa = isa;
})(DeleteVirtualNodeInput = exports.DeleteVirtualNodeInput || (exports.DeleteVirtualNodeInput = {}));
var DeleteVirtualNodeOutput;
(function (DeleteVirtualNodeOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVirtualNodeOutput");
    }
    DeleteVirtualNodeOutput.isa = isa;
})(DeleteVirtualNodeOutput = exports.DeleteVirtualNodeOutput || (exports.DeleteVirtualNodeOutput = {}));
var DeleteVirtualRouterInput;
(function (DeleteVirtualRouterInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVirtualRouterInput");
    }
    DeleteVirtualRouterInput.isa = isa;
})(DeleteVirtualRouterInput = exports.DeleteVirtualRouterInput || (exports.DeleteVirtualRouterInput = {}));
var DeleteVirtualRouterOutput;
(function (DeleteVirtualRouterOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVirtualRouterOutput");
    }
    DeleteVirtualRouterOutput.isa = isa;
})(DeleteVirtualRouterOutput = exports.DeleteVirtualRouterOutput || (exports.DeleteVirtualRouterOutput = {}));
var DeleteVirtualServiceInput;
(function (DeleteVirtualServiceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVirtualServiceInput");
    }
    DeleteVirtualServiceInput.isa = isa;
})(DeleteVirtualServiceInput = exports.DeleteVirtualServiceInput || (exports.DeleteVirtualServiceInput = {}));
var DeleteVirtualServiceOutput;
(function (DeleteVirtualServiceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVirtualServiceOutput");
    }
    DeleteVirtualServiceOutput.isa = isa;
})(DeleteVirtualServiceOutput = exports.DeleteVirtualServiceOutput || (exports.DeleteVirtualServiceOutput = {}));
var DescribeMeshInput;
(function (DescribeMeshInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMeshInput");
    }
    DescribeMeshInput.isa = isa;
})(DescribeMeshInput = exports.DescribeMeshInput || (exports.DescribeMeshInput = {}));
var DescribeMeshOutput;
(function (DescribeMeshOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMeshOutput");
    }
    DescribeMeshOutput.isa = isa;
})(DescribeMeshOutput = exports.DescribeMeshOutput || (exports.DescribeMeshOutput = {}));
var DescribeRouteInput;
(function (DescribeRouteInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRouteInput");
    }
    DescribeRouteInput.isa = isa;
})(DescribeRouteInput = exports.DescribeRouteInput || (exports.DescribeRouteInput = {}));
var DescribeRouteOutput;
(function (DescribeRouteOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRouteOutput");
    }
    DescribeRouteOutput.isa = isa;
})(DescribeRouteOutput = exports.DescribeRouteOutput || (exports.DescribeRouteOutput = {}));
var DescribeVirtualNodeInput;
(function (DescribeVirtualNodeInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeVirtualNodeInput");
    }
    DescribeVirtualNodeInput.isa = isa;
})(DescribeVirtualNodeInput = exports.DescribeVirtualNodeInput || (exports.DescribeVirtualNodeInput = {}));
var DescribeVirtualNodeOutput;
(function (DescribeVirtualNodeOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeVirtualNodeOutput");
    }
    DescribeVirtualNodeOutput.isa = isa;
})(DescribeVirtualNodeOutput = exports.DescribeVirtualNodeOutput || (exports.DescribeVirtualNodeOutput = {}));
var DescribeVirtualRouterInput;
(function (DescribeVirtualRouterInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeVirtualRouterInput");
    }
    DescribeVirtualRouterInput.isa = isa;
})(DescribeVirtualRouterInput = exports.DescribeVirtualRouterInput || (exports.DescribeVirtualRouterInput = {}));
var DescribeVirtualRouterOutput;
(function (DescribeVirtualRouterOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeVirtualRouterOutput");
    }
    DescribeVirtualRouterOutput.isa = isa;
})(DescribeVirtualRouterOutput = exports.DescribeVirtualRouterOutput || (exports.DescribeVirtualRouterOutput = {}));
var DescribeVirtualServiceInput;
(function (DescribeVirtualServiceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeVirtualServiceInput");
    }
    DescribeVirtualServiceInput.isa = isa;
})(DescribeVirtualServiceInput = exports.DescribeVirtualServiceInput || (exports.DescribeVirtualServiceInput = {}));
var DescribeVirtualServiceOutput;
(function (DescribeVirtualServiceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeVirtualServiceOutput");
    }
    DescribeVirtualServiceOutput.isa = isa;
})(DescribeVirtualServiceOutput = exports.DescribeVirtualServiceOutput || (exports.DescribeVirtualServiceOutput = {}));
var DnsServiceDiscovery;
(function (DnsServiceDiscovery) {
    function isa(o) {
        return smithy_client_1.isa(o, "DnsServiceDiscovery");
    }
    DnsServiceDiscovery.isa = isa;
})(DnsServiceDiscovery = exports.DnsServiceDiscovery || (exports.DnsServiceDiscovery = {}));
var Duration;
(function (Duration) {
    function isa(o) {
        return smithy_client_1.isa(o, "Duration");
    }
    Duration.isa = isa;
})(Duration = exports.Duration || (exports.Duration = {}));
var DurationUnit;
(function (DurationUnit) {
    DurationUnit["MS"] = "ms";
    DurationUnit["S"] = "s";
})(DurationUnit = exports.DurationUnit || (exports.DurationUnit = {}));
var EgressFilter;
(function (EgressFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "EgressFilter");
    }
    EgressFilter.isa = isa;
})(EgressFilter = exports.EgressFilter || (exports.EgressFilter = {}));
var EgressFilterType;
(function (EgressFilterType) {
    EgressFilterType["ALLOW_ALL"] = "ALLOW_ALL";
    EgressFilterType["DROP_ALL"] = "DROP_ALL";
})(EgressFilterType = exports.EgressFilterType || (exports.EgressFilterType = {}));
var FileAccessLog;
(function (FileAccessLog) {
    function isa(o) {
        return smithy_client_1.isa(o, "FileAccessLog");
    }
    FileAccessLog.isa = isa;
})(FileAccessLog = exports.FileAccessLog || (exports.FileAccessLog = {}));
var ForbiddenException;
(function (ForbiddenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ForbiddenException");
    }
    ForbiddenException.isa = isa;
})(ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {}));
var GrpcRetryPolicy;
(function (GrpcRetryPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "GrpcRetryPolicy");
    }
    GrpcRetryPolicy.isa = isa;
})(GrpcRetryPolicy = exports.GrpcRetryPolicy || (exports.GrpcRetryPolicy = {}));
var GrpcRetryPolicyEvent;
(function (GrpcRetryPolicyEvent) {
    GrpcRetryPolicyEvent["CANCELLED"] = "cancelled";
    GrpcRetryPolicyEvent["DEADLINE_EXCEEDED"] = "deadline-exceeded";
    GrpcRetryPolicyEvent["INTERNAL"] = "internal";
    GrpcRetryPolicyEvent["RESOURCE_EXHAUSTED"] = "resource-exhausted";
    GrpcRetryPolicyEvent["UNAVAILABLE"] = "unavailable";
})(GrpcRetryPolicyEvent = exports.GrpcRetryPolicyEvent || (exports.GrpcRetryPolicyEvent = {}));
var GrpcRoute;
(function (GrpcRoute) {
    function isa(o) {
        return smithy_client_1.isa(o, "GrpcRoute");
    }
    GrpcRoute.isa = isa;
})(GrpcRoute = exports.GrpcRoute || (exports.GrpcRoute = {}));
var GrpcRouteAction;
(function (GrpcRouteAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "GrpcRouteAction");
    }
    GrpcRouteAction.isa = isa;
})(GrpcRouteAction = exports.GrpcRouteAction || (exports.GrpcRouteAction = {}));
var GrpcRouteMatch;
(function (GrpcRouteMatch) {
    function isa(o) {
        return smithy_client_1.isa(o, "GrpcRouteMatch");
    }
    GrpcRouteMatch.isa = isa;
})(GrpcRouteMatch = exports.GrpcRouteMatch || (exports.GrpcRouteMatch = {}));
var GrpcRouteMetadata;
(function (GrpcRouteMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "GrpcRouteMetadata");
    }
    GrpcRouteMetadata.isa = isa;
})(GrpcRouteMetadata = exports.GrpcRouteMetadata || (exports.GrpcRouteMetadata = {}));
var GrpcRouteMetadataMatchMethod;
(function (GrpcRouteMetadataMatchMethod) {
    function visit(value, visitor) {
        if (value.exact !== undefined)
            return visitor.exact(value.exact);
        if (value.prefix !== undefined)
            return visitor.prefix(value.prefix);
        if (value.range !== undefined)
            return visitor.range(value.range);
        if (value.regex !== undefined)
            return visitor.regex(value.regex);
        if (value.suffix !== undefined)
            return visitor.suffix(value.suffix);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    }
    GrpcRouteMetadataMatchMethod.visit = visit;
})(GrpcRouteMetadataMatchMethod = exports.GrpcRouteMetadataMatchMethod || (exports.GrpcRouteMetadataMatchMethod = {}));
var HeaderMatchMethod;
(function (HeaderMatchMethod) {
    function visit(value, visitor) {
        if (value.exact !== undefined)
            return visitor.exact(value.exact);
        if (value.prefix !== undefined)
            return visitor.prefix(value.prefix);
        if (value.range !== undefined)
            return visitor.range(value.range);
        if (value.regex !== undefined)
            return visitor.regex(value.regex);
        if (value.suffix !== undefined)
            return visitor.suffix(value.suffix);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    }
    HeaderMatchMethod.visit = visit;
})(HeaderMatchMethod = exports.HeaderMatchMethod || (exports.HeaderMatchMethod = {}));
var HealthCheckPolicy;
(function (HealthCheckPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "HealthCheckPolicy");
    }
    HealthCheckPolicy.isa = isa;
})(HealthCheckPolicy = exports.HealthCheckPolicy || (exports.HealthCheckPolicy = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["CONNECT"] = "CONNECT";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["GET"] = "GET";
    HttpMethod["HEAD"] = "HEAD";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["PATCH"] = "PATCH";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["TRACE"] = "TRACE";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
var HttpRetryPolicy;
(function (HttpRetryPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "HttpRetryPolicy");
    }
    HttpRetryPolicy.isa = isa;
})(HttpRetryPolicy = exports.HttpRetryPolicy || (exports.HttpRetryPolicy = {}));
var HttpRoute;
(function (HttpRoute) {
    function isa(o) {
        return smithy_client_1.isa(o, "HttpRoute");
    }
    HttpRoute.isa = isa;
})(HttpRoute = exports.HttpRoute || (exports.HttpRoute = {}));
var HttpRouteAction;
(function (HttpRouteAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "HttpRouteAction");
    }
    HttpRouteAction.isa = isa;
})(HttpRouteAction = exports.HttpRouteAction || (exports.HttpRouteAction = {}));
var HttpRouteHeader;
(function (HttpRouteHeader) {
    function isa(o) {
        return smithy_client_1.isa(o, "HttpRouteHeader");
    }
    HttpRouteHeader.isa = isa;
})(HttpRouteHeader = exports.HttpRouteHeader || (exports.HttpRouteHeader = {}));
var HttpRouteMatch;
(function (HttpRouteMatch) {
    function isa(o) {
        return smithy_client_1.isa(o, "HttpRouteMatch");
    }
    HttpRouteMatch.isa = isa;
})(HttpRouteMatch = exports.HttpRouteMatch || (exports.HttpRouteMatch = {}));
var HttpScheme;
(function (HttpScheme) {
    HttpScheme["HTTP"] = "http";
    HttpScheme["HTTPS"] = "https";
})(HttpScheme = exports.HttpScheme || (exports.HttpScheme = {}));
var InternalServerErrorException;
(function (InternalServerErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerErrorException");
    }
    InternalServerErrorException.isa = isa;
})(InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListMeshesInput;
(function (ListMeshesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMeshesInput");
    }
    ListMeshesInput.isa = isa;
})(ListMeshesInput = exports.ListMeshesInput || (exports.ListMeshesInput = {}));
var ListMeshesOutput;
(function (ListMeshesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMeshesOutput");
    }
    ListMeshesOutput.isa = isa;
})(ListMeshesOutput = exports.ListMeshesOutput || (exports.ListMeshesOutput = {}));
var ListRoutesInput;
(function (ListRoutesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRoutesInput");
    }
    ListRoutesInput.isa = isa;
})(ListRoutesInput = exports.ListRoutesInput || (exports.ListRoutesInput = {}));
var ListRoutesOutput;
(function (ListRoutesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRoutesOutput");
    }
    ListRoutesOutput.isa = isa;
})(ListRoutesOutput = exports.ListRoutesOutput || (exports.ListRoutesOutput = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceInput");
    }
    ListTagsForResourceInput.isa = isa;
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceOutput");
    }
    ListTagsForResourceOutput.isa = isa;
})(ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {}));
var ListVirtualNodesInput;
(function (ListVirtualNodesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListVirtualNodesInput");
    }
    ListVirtualNodesInput.isa = isa;
})(ListVirtualNodesInput = exports.ListVirtualNodesInput || (exports.ListVirtualNodesInput = {}));
var ListVirtualNodesOutput;
(function (ListVirtualNodesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListVirtualNodesOutput");
    }
    ListVirtualNodesOutput.isa = isa;
})(ListVirtualNodesOutput = exports.ListVirtualNodesOutput || (exports.ListVirtualNodesOutput = {}));
var ListVirtualRoutersInput;
(function (ListVirtualRoutersInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListVirtualRoutersInput");
    }
    ListVirtualRoutersInput.isa = isa;
})(ListVirtualRoutersInput = exports.ListVirtualRoutersInput || (exports.ListVirtualRoutersInput = {}));
var ListVirtualRoutersOutput;
(function (ListVirtualRoutersOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListVirtualRoutersOutput");
    }
    ListVirtualRoutersOutput.isa = isa;
})(ListVirtualRoutersOutput = exports.ListVirtualRoutersOutput || (exports.ListVirtualRoutersOutput = {}));
var ListVirtualServicesInput;
(function (ListVirtualServicesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListVirtualServicesInput");
    }
    ListVirtualServicesInput.isa = isa;
})(ListVirtualServicesInput = exports.ListVirtualServicesInput || (exports.ListVirtualServicesInput = {}));
var ListVirtualServicesOutput;
(function (ListVirtualServicesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListVirtualServicesOutput");
    }
    ListVirtualServicesOutput.isa = isa;
})(ListVirtualServicesOutput = exports.ListVirtualServicesOutput || (exports.ListVirtualServicesOutput = {}));
var Listener;
(function (Listener) {
    function isa(o) {
        return smithy_client_1.isa(o, "Listener");
    }
    Listener.isa = isa;
})(Listener = exports.Listener || (exports.Listener = {}));
var Logging;
(function (Logging) {
    function isa(o) {
        return smithy_client_1.isa(o, "Logging");
    }
    Logging.isa = isa;
})(Logging = exports.Logging || (exports.Logging = {}));
var MatchRange;
(function (MatchRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "MatchRange");
    }
    MatchRange.isa = isa;
})(MatchRange = exports.MatchRange || (exports.MatchRange = {}));
var MeshData;
(function (MeshData) {
    function isa(o) {
        return smithy_client_1.isa(o, "MeshData");
    }
    MeshData.isa = isa;
})(MeshData = exports.MeshData || (exports.MeshData = {}));
var MeshRef;
(function (MeshRef) {
    function isa(o) {
        return smithy_client_1.isa(o, "MeshRef");
    }
    MeshRef.isa = isa;
})(MeshRef = exports.MeshRef || (exports.MeshRef = {}));
var MeshSpec;
(function (MeshSpec) {
    function isa(o) {
        return smithy_client_1.isa(o, "MeshSpec");
    }
    MeshSpec.isa = isa;
})(MeshSpec = exports.MeshSpec || (exports.MeshSpec = {}));
var MeshStatus;
(function (MeshStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "MeshStatus");
    }
    MeshStatus.isa = isa;
})(MeshStatus = exports.MeshStatus || (exports.MeshStatus = {}));
var MeshStatusCode;
(function (MeshStatusCode) {
    MeshStatusCode["ACTIVE"] = "ACTIVE";
    MeshStatusCode["DELETED"] = "DELETED";
    MeshStatusCode["INACTIVE"] = "INACTIVE";
})(MeshStatusCode = exports.MeshStatusCode || (exports.MeshStatusCode = {}));
var NotFoundException;
(function (NotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotFoundException");
    }
    NotFoundException.isa = isa;
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var PortMapping;
(function (PortMapping) {
    function isa(o) {
        return smithy_client_1.isa(o, "PortMapping");
    }
    PortMapping.isa = isa;
})(PortMapping = exports.PortMapping || (exports.PortMapping = {}));
var PortProtocol;
(function (PortProtocol) {
    PortProtocol["GRPC"] = "grpc";
    PortProtocol["HTTP"] = "http";
    PortProtocol["HTTP2"] = "http2";
    PortProtocol["TCP"] = "tcp";
})(PortProtocol = exports.PortProtocol || (exports.PortProtocol = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceInUseException");
    }
    ResourceInUseException.isa = isa;
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ResourceMetadata;
(function (ResourceMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceMetadata");
    }
    ResourceMetadata.isa = isa;
})(ResourceMetadata = exports.ResourceMetadata || (exports.ResourceMetadata = {}));
var RouteData;
(function (RouteData) {
    function isa(o) {
        return smithy_client_1.isa(o, "RouteData");
    }
    RouteData.isa = isa;
})(RouteData = exports.RouteData || (exports.RouteData = {}));
var RouteRef;
(function (RouteRef) {
    function isa(o) {
        return smithy_client_1.isa(o, "RouteRef");
    }
    RouteRef.isa = isa;
})(RouteRef = exports.RouteRef || (exports.RouteRef = {}));
var RouteSpec;
(function (RouteSpec) {
    function isa(o) {
        return smithy_client_1.isa(o, "RouteSpec");
    }
    RouteSpec.isa = isa;
})(RouteSpec = exports.RouteSpec || (exports.RouteSpec = {}));
var RouteStatus;
(function (RouteStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "RouteStatus");
    }
    RouteStatus.isa = isa;
})(RouteStatus = exports.RouteStatus || (exports.RouteStatus = {}));
var RouteStatusCode;
(function (RouteStatusCode) {
    RouteStatusCode["ACTIVE"] = "ACTIVE";
    RouteStatusCode["DELETED"] = "DELETED";
    RouteStatusCode["INACTIVE"] = "INACTIVE";
})(RouteStatusCode = exports.RouteStatusCode || (exports.RouteStatusCode = {}));
var ServiceDiscovery;
(function (ServiceDiscovery) {
    function visit(value, visitor) {
        if (value.awsCloudMap !== undefined)
            return visitor.awsCloudMap(value.awsCloudMap);
        if (value.dns !== undefined)
            return visitor.dns(value.dns);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    }
    ServiceDiscovery.visit = visit;
})(ServiceDiscovery = exports.ServiceDiscovery || (exports.ServiceDiscovery = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceUnavailableException");
    }
    ServiceUnavailableException.isa = isa;
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var TagRef;
(function (TagRef) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagRef");
    }
    TagRef.isa = isa;
})(TagRef = exports.TagRef || (exports.TagRef = {}));
var TagResourceInput;
(function (TagResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceInput");
    }
    TagResourceInput.isa = isa;
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TagResourceOutput;
(function (TagResourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceOutput");
    }
    TagResourceOutput.isa = isa;
})(TagResourceOutput = exports.TagResourceOutput || (exports.TagResourceOutput = {}));
var TcpRetryPolicyEvent;
(function (TcpRetryPolicyEvent) {
    TcpRetryPolicyEvent["CONNECTION_ERROR"] = "connection-error";
})(TcpRetryPolicyEvent = exports.TcpRetryPolicyEvent || (exports.TcpRetryPolicyEvent = {}));
var TcpRoute;
(function (TcpRoute) {
    function isa(o) {
        return smithy_client_1.isa(o, "TcpRoute");
    }
    TcpRoute.isa = isa;
})(TcpRoute = exports.TcpRoute || (exports.TcpRoute = {}));
var TcpRouteAction;
(function (TcpRouteAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "TcpRouteAction");
    }
    TcpRouteAction.isa = isa;
})(TcpRouteAction = exports.TcpRouteAction || (exports.TcpRouteAction = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyRequestsException");
    }
    TooManyRequestsException.isa = isa;
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyTagsException");
    }
    TooManyTagsException.isa = isa;
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceInput");
    }
    UntagResourceInput.isa = isa;
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var UntagResourceOutput;
(function (UntagResourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceOutput");
    }
    UntagResourceOutput.isa = isa;
})(UntagResourceOutput = exports.UntagResourceOutput || (exports.UntagResourceOutput = {}));
var UpdateMeshInput;
(function (UpdateMeshInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMeshInput");
    }
    UpdateMeshInput.isa = isa;
})(UpdateMeshInput = exports.UpdateMeshInput || (exports.UpdateMeshInput = {}));
var UpdateMeshOutput;
(function (UpdateMeshOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMeshOutput");
    }
    UpdateMeshOutput.isa = isa;
})(UpdateMeshOutput = exports.UpdateMeshOutput || (exports.UpdateMeshOutput = {}));
var UpdateRouteInput;
(function (UpdateRouteInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRouteInput");
    }
    UpdateRouteInput.isa = isa;
})(UpdateRouteInput = exports.UpdateRouteInput || (exports.UpdateRouteInput = {}));
var UpdateRouteOutput;
(function (UpdateRouteOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRouteOutput");
    }
    UpdateRouteOutput.isa = isa;
})(UpdateRouteOutput = exports.UpdateRouteOutput || (exports.UpdateRouteOutput = {}));
var UpdateVirtualNodeInput;
(function (UpdateVirtualNodeInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateVirtualNodeInput");
    }
    UpdateVirtualNodeInput.isa = isa;
})(UpdateVirtualNodeInput = exports.UpdateVirtualNodeInput || (exports.UpdateVirtualNodeInput = {}));
var UpdateVirtualNodeOutput;
(function (UpdateVirtualNodeOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateVirtualNodeOutput");
    }
    UpdateVirtualNodeOutput.isa = isa;
})(UpdateVirtualNodeOutput = exports.UpdateVirtualNodeOutput || (exports.UpdateVirtualNodeOutput = {}));
var UpdateVirtualRouterInput;
(function (UpdateVirtualRouterInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateVirtualRouterInput");
    }
    UpdateVirtualRouterInput.isa = isa;
})(UpdateVirtualRouterInput = exports.UpdateVirtualRouterInput || (exports.UpdateVirtualRouterInput = {}));
var UpdateVirtualRouterOutput;
(function (UpdateVirtualRouterOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateVirtualRouterOutput");
    }
    UpdateVirtualRouterOutput.isa = isa;
})(UpdateVirtualRouterOutput = exports.UpdateVirtualRouterOutput || (exports.UpdateVirtualRouterOutput = {}));
var UpdateVirtualServiceInput;
(function (UpdateVirtualServiceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateVirtualServiceInput");
    }
    UpdateVirtualServiceInput.isa = isa;
})(UpdateVirtualServiceInput = exports.UpdateVirtualServiceInput || (exports.UpdateVirtualServiceInput = {}));
var UpdateVirtualServiceOutput;
(function (UpdateVirtualServiceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateVirtualServiceOutput");
    }
    UpdateVirtualServiceOutput.isa = isa;
})(UpdateVirtualServiceOutput = exports.UpdateVirtualServiceOutput || (exports.UpdateVirtualServiceOutput = {}));
var VirtualNodeData;
(function (VirtualNodeData) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualNodeData");
    }
    VirtualNodeData.isa = isa;
})(VirtualNodeData = exports.VirtualNodeData || (exports.VirtualNodeData = {}));
var VirtualNodeRef;
(function (VirtualNodeRef) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualNodeRef");
    }
    VirtualNodeRef.isa = isa;
})(VirtualNodeRef = exports.VirtualNodeRef || (exports.VirtualNodeRef = {}));
var VirtualNodeServiceProvider;
(function (VirtualNodeServiceProvider) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualNodeServiceProvider");
    }
    VirtualNodeServiceProvider.isa = isa;
})(VirtualNodeServiceProvider = exports.VirtualNodeServiceProvider || (exports.VirtualNodeServiceProvider = {}));
var VirtualNodeSpec;
(function (VirtualNodeSpec) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualNodeSpec");
    }
    VirtualNodeSpec.isa = isa;
})(VirtualNodeSpec = exports.VirtualNodeSpec || (exports.VirtualNodeSpec = {}));
var VirtualNodeStatus;
(function (VirtualNodeStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualNodeStatus");
    }
    VirtualNodeStatus.isa = isa;
})(VirtualNodeStatus = exports.VirtualNodeStatus || (exports.VirtualNodeStatus = {}));
var VirtualNodeStatusCode;
(function (VirtualNodeStatusCode) {
    VirtualNodeStatusCode["ACTIVE"] = "ACTIVE";
    VirtualNodeStatusCode["DELETED"] = "DELETED";
    VirtualNodeStatusCode["INACTIVE"] = "INACTIVE";
})(VirtualNodeStatusCode = exports.VirtualNodeStatusCode || (exports.VirtualNodeStatusCode = {}));
var VirtualRouterData;
(function (VirtualRouterData) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualRouterData");
    }
    VirtualRouterData.isa = isa;
})(VirtualRouterData = exports.VirtualRouterData || (exports.VirtualRouterData = {}));
var VirtualRouterListener;
(function (VirtualRouterListener) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualRouterListener");
    }
    VirtualRouterListener.isa = isa;
})(VirtualRouterListener = exports.VirtualRouterListener || (exports.VirtualRouterListener = {}));
var VirtualRouterRef;
(function (VirtualRouterRef) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualRouterRef");
    }
    VirtualRouterRef.isa = isa;
})(VirtualRouterRef = exports.VirtualRouterRef || (exports.VirtualRouterRef = {}));
var VirtualRouterServiceProvider;
(function (VirtualRouterServiceProvider) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualRouterServiceProvider");
    }
    VirtualRouterServiceProvider.isa = isa;
})(VirtualRouterServiceProvider = exports.VirtualRouterServiceProvider || (exports.VirtualRouterServiceProvider = {}));
var VirtualRouterSpec;
(function (VirtualRouterSpec) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualRouterSpec");
    }
    VirtualRouterSpec.isa = isa;
})(VirtualRouterSpec = exports.VirtualRouterSpec || (exports.VirtualRouterSpec = {}));
var VirtualRouterStatus;
(function (VirtualRouterStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualRouterStatus");
    }
    VirtualRouterStatus.isa = isa;
})(VirtualRouterStatus = exports.VirtualRouterStatus || (exports.VirtualRouterStatus = {}));
var VirtualRouterStatusCode;
(function (VirtualRouterStatusCode) {
    VirtualRouterStatusCode["ACTIVE"] = "ACTIVE";
    VirtualRouterStatusCode["DELETED"] = "DELETED";
    VirtualRouterStatusCode["INACTIVE"] = "INACTIVE";
})(VirtualRouterStatusCode = exports.VirtualRouterStatusCode || (exports.VirtualRouterStatusCode = {}));
var VirtualServiceBackend;
(function (VirtualServiceBackend) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualServiceBackend");
    }
    VirtualServiceBackend.isa = isa;
})(VirtualServiceBackend = exports.VirtualServiceBackend || (exports.VirtualServiceBackend = {}));
var VirtualServiceData;
(function (VirtualServiceData) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualServiceData");
    }
    VirtualServiceData.isa = isa;
})(VirtualServiceData = exports.VirtualServiceData || (exports.VirtualServiceData = {}));
var VirtualServiceProvider;
(function (VirtualServiceProvider) {
    function visit(value, visitor) {
        if (value.virtualNode !== undefined)
            return visitor.virtualNode(value.virtualNode);
        if (value.virtualRouter !== undefined)
            return visitor.virtualRouter(value.virtualRouter);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    }
    VirtualServiceProvider.visit = visit;
})(VirtualServiceProvider = exports.VirtualServiceProvider || (exports.VirtualServiceProvider = {}));
var VirtualServiceRef;
(function (VirtualServiceRef) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualServiceRef");
    }
    VirtualServiceRef.isa = isa;
})(VirtualServiceRef = exports.VirtualServiceRef || (exports.VirtualServiceRef = {}));
var VirtualServiceSpec;
(function (VirtualServiceSpec) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualServiceSpec");
    }
    VirtualServiceSpec.isa = isa;
})(VirtualServiceSpec = exports.VirtualServiceSpec || (exports.VirtualServiceSpec = {}));
var VirtualServiceStatus;
(function (VirtualServiceStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualServiceStatus");
    }
    VirtualServiceStatus.isa = isa;
})(VirtualServiceStatus = exports.VirtualServiceStatus || (exports.VirtualServiceStatus = {}));
var VirtualServiceStatusCode;
(function (VirtualServiceStatusCode) {
    VirtualServiceStatusCode["ACTIVE"] = "ACTIVE";
    VirtualServiceStatusCode["DELETED"] = "DELETED";
    VirtualServiceStatusCode["INACTIVE"] = "INACTIVE";
})(VirtualServiceStatusCode = exports.VirtualServiceStatusCode || (exports.VirtualServiceStatusCode = {}));
var WeightedTarget;
(function (WeightedTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "WeightedTarget");
    }
    WeightedTarget.isa = isa;
})(WeightedTarget = exports.WeightedTarget || (exports.WeightedTarget = {}));
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var InternalServiceError;
(function (InternalServiceError) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServiceError");
    }
    InternalServiceError.isa = isa;
})(InternalServiceError = exports.InternalServiceError || (exports.InternalServiceError = {}));
var InvalidArgumentException;
(function (InvalidArgumentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidArgumentException");
    }
    InvalidArgumentException.isa = isa;
})(InvalidArgumentException = exports.InvalidArgumentException || (exports.InvalidArgumentException = {}));
var NotAuthorizedException;
(function (NotAuthorizedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotAuthorizedException");
    }
    NotAuthorizedException.isa = isa;
})(NotAuthorizedException = exports.NotAuthorizedException || (exports.NotAuthorizedException = {}));
var ServiceType;
(function (ServiceType) {
    ServiceType["RDS"] = "RDS";
})(ServiceType = exports.ServiceType || (exports.ServiceType = {}));
var DataPoint;
(function (DataPoint) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataPoint");
    }
    DataPoint.isa = isa;
})(DataPoint = exports.DataPoint || (exports.DataPoint = {}));
var DescribeDimensionKeysRequest;
(function (DescribeDimensionKeysRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDimensionKeysRequest");
    }
    DescribeDimensionKeysRequest.isa = isa;
})(DescribeDimensionKeysRequest = exports.DescribeDimensionKeysRequest || (exports.DescribeDimensionKeysRequest = {}));
var DescribeDimensionKeysResponse;
(function (DescribeDimensionKeysResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDimensionKeysResponse");
    }
    DescribeDimensionKeysResponse.isa = isa;
})(DescribeDimensionKeysResponse = exports.DescribeDimensionKeysResponse || (exports.DescribeDimensionKeysResponse = {}));
var DimensionGroup;
(function (DimensionGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "DimensionGroup");
    }
    DimensionGroup.isa = isa;
})(DimensionGroup = exports.DimensionGroup || (exports.DimensionGroup = {}));
var DimensionKeyDescription;
(function (DimensionKeyDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "DimensionKeyDescription");
    }
    DimensionKeyDescription.isa = isa;
})(DimensionKeyDescription = exports.DimensionKeyDescription || (exports.DimensionKeyDescription = {}));
var GetResourceMetricsRequest;
(function (GetResourceMetricsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetResourceMetricsRequest");
    }
    GetResourceMetricsRequest.isa = isa;
})(GetResourceMetricsRequest = exports.GetResourceMetricsRequest || (exports.GetResourceMetricsRequest = {}));
var GetResourceMetricsResponse;
(function (GetResourceMetricsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetResourceMetricsResponse");
    }
    GetResourceMetricsResponse.isa = isa;
})(GetResourceMetricsResponse = exports.GetResourceMetricsResponse || (exports.GetResourceMetricsResponse = {}));
var MetricKeyDataPoints;
(function (MetricKeyDataPoints) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricKeyDataPoints");
    }
    MetricKeyDataPoints.isa = isa;
})(MetricKeyDataPoints = exports.MetricKeyDataPoints || (exports.MetricKeyDataPoints = {}));
var MetricQuery;
(function (MetricQuery) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricQuery");
    }
    MetricQuery.isa = isa;
})(MetricQuery = exports.MetricQuery || (exports.MetricQuery = {}));
var ResponsePartitionKey;
(function (ResponsePartitionKey) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResponsePartitionKey");
    }
    ResponsePartitionKey.isa = isa;
})(ResponsePartitionKey = exports.ResponsePartitionKey || (exports.ResponsePartitionKey = {}));
var ResponseResourceMetricKey;
(function (ResponseResourceMetricKey) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResponseResourceMetricKey");
    }
    ResponseResourceMetricKey.isa = isa;
})(ResponseResourceMetricKey = exports.ResponseResourceMetricKey || (exports.ResponseResourceMetricKey = {}));
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AWSRegion;
(function (AWSRegion) {
    AWSRegion["FRANKFURT"] = "eu-central-1";
    AWSRegion["HONG_KONG"] = "ap-east-1";
    AWSRegion["IRELAND"] = "eu-west-1";
    AWSRegion["NORTHERN_CALIFORNIA"] = "us-west-1";
    AWSRegion["OREGON"] = "us-west-2";
    AWSRegion["OSAKA"] = "ap-northeast-3";
    AWSRegion["SINGAPORE"] = "ap-southeast-1";
    AWSRegion["STOCKHOLM"] = "eu-north-1";
    AWSRegion["SYDNEY"] = "ap-southeast-2";
    AWSRegion["TOKYO"] = "ap-northeast-1";
    AWSRegion["US_STANDARD"] = "us-east-1";
})(AWSRegion = exports.AWSRegion || (exports.AWSRegion = {}));
var AdditionalArtifact;
(function (AdditionalArtifact) {
    AdditionalArtifact["ATHENA"] = "ATHENA";
    AdditionalArtifact["QUICKSIGHT"] = "QUICKSIGHT";
    AdditionalArtifact["REDSHIFT"] = "REDSHIFT";
})(AdditionalArtifact = exports.AdditionalArtifact || (exports.AdditionalArtifact = {}));
var CompressionFormat;
(function (CompressionFormat) {
    CompressionFormat["GZIP"] = "GZIP";
    CompressionFormat["Parquet"] = "Parquet";
    CompressionFormat["ZIP"] = "ZIP";
})(CompressionFormat = exports.CompressionFormat || (exports.CompressionFormat = {}));
var DeleteReportDefinitionRequest;
(function (DeleteReportDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteReportDefinitionRequest");
    }
    DeleteReportDefinitionRequest.isa = isa;
})(DeleteReportDefinitionRequest = exports.DeleteReportDefinitionRequest || (exports.DeleteReportDefinitionRequest = {}));
var DeleteReportDefinitionResponse;
(function (DeleteReportDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteReportDefinitionResponse");
    }
    DeleteReportDefinitionResponse.isa = isa;
})(DeleteReportDefinitionResponse = exports.DeleteReportDefinitionResponse || (exports.DeleteReportDefinitionResponse = {}));
var DescribeReportDefinitionsRequest;
(function (DescribeReportDefinitionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeReportDefinitionsRequest");
    }
    DescribeReportDefinitionsRequest.isa = isa;
})(DescribeReportDefinitionsRequest = exports.DescribeReportDefinitionsRequest || (exports.DescribeReportDefinitionsRequest = {}));
var DescribeReportDefinitionsResponse;
(function (DescribeReportDefinitionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeReportDefinitionsResponse");
    }
    DescribeReportDefinitionsResponse.isa = isa;
})(DescribeReportDefinitionsResponse = exports.DescribeReportDefinitionsResponse || (exports.DescribeReportDefinitionsResponse = {}));
var DuplicateReportNameException;
(function (DuplicateReportNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateReportNameException");
    }
    DuplicateReportNameException.isa = isa;
})(DuplicateReportNameException = exports.DuplicateReportNameException || (exports.DuplicateReportNameException = {}));
var InternalErrorException;
(function (InternalErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalErrorException");
    }
    InternalErrorException.isa = isa;
})(InternalErrorException = exports.InternalErrorException || (exports.InternalErrorException = {}));
var ModifyReportDefinitionRequest;
(function (ModifyReportDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyReportDefinitionRequest");
    }
    ModifyReportDefinitionRequest.isa = isa;
})(ModifyReportDefinitionRequest = exports.ModifyReportDefinitionRequest || (exports.ModifyReportDefinitionRequest = {}));
var ModifyReportDefinitionResponse;
(function (ModifyReportDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyReportDefinitionResponse");
    }
    ModifyReportDefinitionResponse.isa = isa;
})(ModifyReportDefinitionResponse = exports.ModifyReportDefinitionResponse || (exports.ModifyReportDefinitionResponse = {}));
var PutReportDefinitionRequest;
(function (PutReportDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutReportDefinitionRequest");
    }
    PutReportDefinitionRequest.isa = isa;
})(PutReportDefinitionRequest = exports.PutReportDefinitionRequest || (exports.PutReportDefinitionRequest = {}));
var PutReportDefinitionResponse;
(function (PutReportDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutReportDefinitionResponse");
    }
    PutReportDefinitionResponse.isa = isa;
})(PutReportDefinitionResponse = exports.PutReportDefinitionResponse || (exports.PutReportDefinitionResponse = {}));
var ReportDefinition;
(function (ReportDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReportDefinition");
    }
    ReportDefinition.isa = isa;
})(ReportDefinition = exports.ReportDefinition || (exports.ReportDefinition = {}));
var ReportFormat;
(function (ReportFormat) {
    ReportFormat["CSV"] = "textORcsv";
    ReportFormat["Parquet"] = "Parquet";
})(ReportFormat = exports.ReportFormat || (exports.ReportFormat = {}));
var ReportLimitReachedException;
(function (ReportLimitReachedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReportLimitReachedException");
    }
    ReportLimitReachedException.isa = isa;
})(ReportLimitReachedException = exports.ReportLimitReachedException || (exports.ReportLimitReachedException = {}));
var ReportVersioning;
(function (ReportVersioning) {
    ReportVersioning["CREATE_NEW_REPORT"] = "CREATE_NEW_REPORT";
    ReportVersioning["OVERWRITE_REPORT"] = "OVERWRITE_REPORT";
})(ReportVersioning = exports.ReportVersioning || (exports.ReportVersioning = {}));
var SchemaElement;
(function (SchemaElement) {
    SchemaElement["RESOURCES"] = "RESOURCES";
})(SchemaElement = exports.SchemaElement || (exports.SchemaElement = {}));
var TimeUnit;
(function (TimeUnit) {
    TimeUnit["DAILY"] = "DAILY";
    TimeUnit["HOURLY"] = "HOURLY";
})(TimeUnit = exports.TimeUnit || (exports.TimeUnit = {}));
var ValidationException;
(function (ValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidationException");
    }
    ValidationException.isa = isa;
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
//# sourceMappingURL=index.js.map
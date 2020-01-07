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
var AnalyzeDocumentRequest;
(function (AnalyzeDocumentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AnalyzeDocumentRequest");
    }
    AnalyzeDocumentRequest.isa = isa;
})(AnalyzeDocumentRequest = exports.AnalyzeDocumentRequest || (exports.AnalyzeDocumentRequest = {}));
var AnalyzeDocumentResponse;
(function (AnalyzeDocumentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AnalyzeDocumentResponse");
    }
    AnalyzeDocumentResponse.isa = isa;
})(AnalyzeDocumentResponse = exports.AnalyzeDocumentResponse || (exports.AnalyzeDocumentResponse = {}));
var BadDocumentException;
(function (BadDocumentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BadDocumentException");
    }
    BadDocumentException.isa = isa;
})(BadDocumentException = exports.BadDocumentException || (exports.BadDocumentException = {}));
var Block;
(function (Block) {
    function isa(o) {
        return smithy_client_1.isa(o, "Block");
    }
    Block.isa = isa;
})(Block = exports.Block || (exports.Block = {}));
var BlockType;
(function (BlockType) {
    BlockType["CELL"] = "CELL";
    BlockType["KEY_VALUE_SET"] = "KEY_VALUE_SET";
    BlockType["LINE"] = "LINE";
    BlockType["PAGE"] = "PAGE";
    BlockType["SELECTION_ELEMENT"] = "SELECTION_ELEMENT";
    BlockType["TABLE"] = "TABLE";
    BlockType["WORD"] = "WORD";
})(BlockType = exports.BlockType || (exports.BlockType = {}));
var BoundingBox;
(function (BoundingBox) {
    function isa(o) {
        return smithy_client_1.isa(o, "BoundingBox");
    }
    BoundingBox.isa = isa;
})(BoundingBox = exports.BoundingBox || (exports.BoundingBox = {}));
var ContentClassifier;
(function (ContentClassifier) {
    ContentClassifier["FREE_OF_ADULT_CONTENT"] = "FreeOfAdultContent";
    ContentClassifier["FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION"] = "FreeOfPersonallyIdentifiableInformation";
})(ContentClassifier = exports.ContentClassifier || (exports.ContentClassifier = {}));
var DetectDocumentTextRequest;
(function (DetectDocumentTextRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectDocumentTextRequest");
    }
    DetectDocumentTextRequest.isa = isa;
})(DetectDocumentTextRequest = exports.DetectDocumentTextRequest || (exports.DetectDocumentTextRequest = {}));
var DetectDocumentTextResponse;
(function (DetectDocumentTextResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectDocumentTextResponse");
    }
    DetectDocumentTextResponse.isa = isa;
})(DetectDocumentTextResponse = exports.DetectDocumentTextResponse || (exports.DetectDocumentTextResponse = {}));
var Document;
(function (Document) {
    function isa(o) {
        return smithy_client_1.isa(o, "Document");
    }
    Document.isa = isa;
})(Document = exports.Document || (exports.Document = {}));
var DocumentLocation;
(function (DocumentLocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "DocumentLocation");
    }
    DocumentLocation.isa = isa;
})(DocumentLocation = exports.DocumentLocation || (exports.DocumentLocation = {}));
var DocumentMetadata;
(function (DocumentMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "DocumentMetadata");
    }
    DocumentMetadata.isa = isa;
})(DocumentMetadata = exports.DocumentMetadata || (exports.DocumentMetadata = {}));
var DocumentTooLargeException;
(function (DocumentTooLargeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DocumentTooLargeException");
    }
    DocumentTooLargeException.isa = isa;
})(DocumentTooLargeException = exports.DocumentTooLargeException || (exports.DocumentTooLargeException = {}));
var EntityType;
(function (EntityType) {
    EntityType["KEY"] = "KEY";
    EntityType["VALUE"] = "VALUE";
})(EntityType = exports.EntityType || (exports.EntityType = {}));
var FeatureType;
(function (FeatureType) {
    FeatureType["FORMS"] = "FORMS";
    FeatureType["TABLES"] = "TABLES";
})(FeatureType = exports.FeatureType || (exports.FeatureType = {}));
var Geometry;
(function (Geometry) {
    function isa(o) {
        return smithy_client_1.isa(o, "Geometry");
    }
    Geometry.isa = isa;
})(Geometry = exports.Geometry || (exports.Geometry = {}));
var GetDocumentAnalysisRequest;
(function (GetDocumentAnalysisRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDocumentAnalysisRequest");
    }
    GetDocumentAnalysisRequest.isa = isa;
})(GetDocumentAnalysisRequest = exports.GetDocumentAnalysisRequest || (exports.GetDocumentAnalysisRequest = {}));
var GetDocumentAnalysisResponse;
(function (GetDocumentAnalysisResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDocumentAnalysisResponse");
    }
    GetDocumentAnalysisResponse.isa = isa;
})(GetDocumentAnalysisResponse = exports.GetDocumentAnalysisResponse || (exports.GetDocumentAnalysisResponse = {}));
var GetDocumentTextDetectionRequest;
(function (GetDocumentTextDetectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDocumentTextDetectionRequest");
    }
    GetDocumentTextDetectionRequest.isa = isa;
})(GetDocumentTextDetectionRequest = exports.GetDocumentTextDetectionRequest || (exports.GetDocumentTextDetectionRequest = {}));
var GetDocumentTextDetectionResponse;
(function (GetDocumentTextDetectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDocumentTextDetectionResponse");
    }
    GetDocumentTextDetectionResponse.isa = isa;
})(GetDocumentTextDetectionResponse = exports.GetDocumentTextDetectionResponse || (exports.GetDocumentTextDetectionResponse = {}));
var HumanLoopActivationOutput;
(function (HumanLoopActivationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "HumanLoopActivationOutput");
    }
    HumanLoopActivationOutput.isa = isa;
})(HumanLoopActivationOutput = exports.HumanLoopActivationOutput || (exports.HumanLoopActivationOutput = {}));
var HumanLoopConfig;
(function (HumanLoopConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "HumanLoopConfig");
    }
    HumanLoopConfig.isa = isa;
})(HumanLoopConfig = exports.HumanLoopConfig || (exports.HumanLoopConfig = {}));
var HumanLoopDataAttributes;
(function (HumanLoopDataAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "HumanLoopDataAttributes");
    }
    HumanLoopDataAttributes.isa = isa;
})(HumanLoopDataAttributes = exports.HumanLoopDataAttributes || (exports.HumanLoopDataAttributes = {}));
var HumanLoopQuotaExceededException;
(function (HumanLoopQuotaExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "HumanLoopQuotaExceededException");
    }
    HumanLoopQuotaExceededException.isa = isa;
})(HumanLoopQuotaExceededException = exports.HumanLoopQuotaExceededException || (exports.HumanLoopQuotaExceededException = {}));
var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdempotentParameterMismatchException");
    }
    IdempotentParameterMismatchException.isa = isa;
})(IdempotentParameterMismatchException = exports.IdempotentParameterMismatchException || (exports.IdempotentParameterMismatchException = {}));
var InternalServerError;
(function (InternalServerError) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerError");
    }
    InternalServerError.isa = isa;
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var InvalidJobIdException;
(function (InvalidJobIdException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidJobIdException");
    }
    InvalidJobIdException.isa = isa;
})(InvalidJobIdException = exports.InvalidJobIdException || (exports.InvalidJobIdException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterException");
    }
    InvalidParameterException.isa = isa;
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var InvalidS3ObjectException;
(function (InvalidS3ObjectException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidS3ObjectException");
    }
    InvalidS3ObjectException.isa = isa;
})(InvalidS3ObjectException = exports.InvalidS3ObjectException || (exports.InvalidS3ObjectException = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["FAILED"] = "FAILED";
    JobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    JobStatus["PARTIAL_SUCCESS"] = "PARTIAL_SUCCESS";
    JobStatus["SUCCEEDED"] = "SUCCEEDED";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var NotificationChannel;
(function (NotificationChannel) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotificationChannel");
    }
    NotificationChannel.isa = isa;
})(NotificationChannel = exports.NotificationChannel || (exports.NotificationChannel = {}));
var Point;
(function (Point) {
    function isa(o) {
        return smithy_client_1.isa(o, "Point");
    }
    Point.isa = isa;
})(Point = exports.Point || (exports.Point = {}));
var ProvisionedThroughputExceededException;
(function (ProvisionedThroughputExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProvisionedThroughputExceededException");
    }
    ProvisionedThroughputExceededException.isa = isa;
})(ProvisionedThroughputExceededException = exports.ProvisionedThroughputExceededException || (exports.ProvisionedThroughputExceededException = {}));
var Relationship;
(function (Relationship) {
    function isa(o) {
        return smithy_client_1.isa(o, "Relationship");
    }
    Relationship.isa = isa;
})(Relationship = exports.Relationship || (exports.Relationship = {}));
var RelationshipType;
(function (RelationshipType) {
    RelationshipType["CHILD"] = "CHILD";
    RelationshipType["VALUE"] = "VALUE";
})(RelationshipType = exports.RelationshipType || (exports.RelationshipType = {}));
var S3Object;
(function (S3Object) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Object");
    }
    S3Object.isa = isa;
})(S3Object = exports.S3Object || (exports.S3Object = {}));
var SelectionStatus;
(function (SelectionStatus) {
    SelectionStatus["NOT_SELECTED"] = "NOT_SELECTED";
    SelectionStatus["SELECTED"] = "SELECTED";
})(SelectionStatus = exports.SelectionStatus || (exports.SelectionStatus = {}));
var StartDocumentAnalysisRequest;
(function (StartDocumentAnalysisRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartDocumentAnalysisRequest");
    }
    StartDocumentAnalysisRequest.isa = isa;
})(StartDocumentAnalysisRequest = exports.StartDocumentAnalysisRequest || (exports.StartDocumentAnalysisRequest = {}));
var StartDocumentAnalysisResponse;
(function (StartDocumentAnalysisResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartDocumentAnalysisResponse");
    }
    StartDocumentAnalysisResponse.isa = isa;
})(StartDocumentAnalysisResponse = exports.StartDocumentAnalysisResponse || (exports.StartDocumentAnalysisResponse = {}));
var StartDocumentTextDetectionRequest;
(function (StartDocumentTextDetectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartDocumentTextDetectionRequest");
    }
    StartDocumentTextDetectionRequest.isa = isa;
})(StartDocumentTextDetectionRequest = exports.StartDocumentTextDetectionRequest || (exports.StartDocumentTextDetectionRequest = {}));
var StartDocumentTextDetectionResponse;
(function (StartDocumentTextDetectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartDocumentTextDetectionResponse");
    }
    StartDocumentTextDetectionResponse.isa = isa;
})(StartDocumentTextDetectionResponse = exports.StartDocumentTextDetectionResponse || (exports.StartDocumentTextDetectionResponse = {}));
var ThrottlingException;
(function (ThrottlingException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ThrottlingException");
    }
    ThrottlingException.isa = isa;
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var UnsupportedDocumentException;
(function (UnsupportedDocumentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedDocumentException");
    }
    UnsupportedDocumentException.isa = isa;
})(UnsupportedDocumentException = exports.UnsupportedDocumentException || (exports.UnsupportedDocumentException = {}));
var Warning;
(function (Warning) {
    function isa(o) {
        return smithy_client_1.isa(o, "Warning");
    }
    Warning.isa = isa;
})(Warning = exports.Warning || (exports.Warning = {}));
//# sourceMappingURL=index.js.map
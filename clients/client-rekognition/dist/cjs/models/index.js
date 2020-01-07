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
var AgeRange;
(function (AgeRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "AgeRange");
    }
    AgeRange.isa = isa;
})(AgeRange = exports.AgeRange || (exports.AgeRange = {}));
var Asset;
(function (Asset) {
    function isa(o) {
        return smithy_client_1.isa(o, "Asset");
    }
    Asset.isa = isa;
})(Asset = exports.Asset || (exports.Asset = {}));
var Attribute;
(function (Attribute) {
    Attribute["ALL"] = "ALL";
    Attribute["DEFAULT"] = "DEFAULT";
})(Attribute = exports.Attribute || (exports.Attribute = {}));
var Beard;
(function (Beard) {
    function isa(o) {
        return smithy_client_1.isa(o, "Beard");
    }
    Beard.isa = isa;
})(Beard = exports.Beard || (exports.Beard = {}));
var BoundingBox;
(function (BoundingBox) {
    function isa(o) {
        return smithy_client_1.isa(o, "BoundingBox");
    }
    BoundingBox.isa = isa;
})(BoundingBox = exports.BoundingBox || (exports.BoundingBox = {}));
var Celebrity;
(function (Celebrity) {
    function isa(o) {
        return smithy_client_1.isa(o, "Celebrity");
    }
    Celebrity.isa = isa;
})(Celebrity = exports.Celebrity || (exports.Celebrity = {}));
var CelebrityDetail;
(function (CelebrityDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "CelebrityDetail");
    }
    CelebrityDetail.isa = isa;
})(CelebrityDetail = exports.CelebrityDetail || (exports.CelebrityDetail = {}));
var CelebrityRecognition;
(function (CelebrityRecognition) {
    function isa(o) {
        return smithy_client_1.isa(o, "CelebrityRecognition");
    }
    CelebrityRecognition.isa = isa;
})(CelebrityRecognition = exports.CelebrityRecognition || (exports.CelebrityRecognition = {}));
var CelebrityRecognitionSortBy;
(function (CelebrityRecognitionSortBy) {
    CelebrityRecognitionSortBy["ID"] = "ID";
    CelebrityRecognitionSortBy["TIMESTAMP"] = "TIMESTAMP";
})(CelebrityRecognitionSortBy = exports.CelebrityRecognitionSortBy || (exports.CelebrityRecognitionSortBy = {}));
var CompareFacesMatch;
(function (CompareFacesMatch) {
    function isa(o) {
        return smithy_client_1.isa(o, "CompareFacesMatch");
    }
    CompareFacesMatch.isa = isa;
})(CompareFacesMatch = exports.CompareFacesMatch || (exports.CompareFacesMatch = {}));
var CompareFacesRequest;
(function (CompareFacesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CompareFacesRequest");
    }
    CompareFacesRequest.isa = isa;
})(CompareFacesRequest = exports.CompareFacesRequest || (exports.CompareFacesRequest = {}));
var CompareFacesResponse;
(function (CompareFacesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CompareFacesResponse");
    }
    CompareFacesResponse.isa = isa;
})(CompareFacesResponse = exports.CompareFacesResponse || (exports.CompareFacesResponse = {}));
var ComparedFace;
(function (ComparedFace) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComparedFace");
    }
    ComparedFace.isa = isa;
})(ComparedFace = exports.ComparedFace || (exports.ComparedFace = {}));
var ComparedSourceImageFace;
(function (ComparedSourceImageFace) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComparedSourceImageFace");
    }
    ComparedSourceImageFace.isa = isa;
})(ComparedSourceImageFace = exports.ComparedSourceImageFace || (exports.ComparedSourceImageFace = {}));
var ContentClassifier;
(function (ContentClassifier) {
    ContentClassifier["FREE_OF_ADULT_CONTENT"] = "FreeOfAdultContent";
    ContentClassifier["FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION"] = "FreeOfPersonallyIdentifiableInformation";
})(ContentClassifier = exports.ContentClassifier || (exports.ContentClassifier = {}));
var ContentModerationDetection;
(function (ContentModerationDetection) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContentModerationDetection");
    }
    ContentModerationDetection.isa = isa;
})(ContentModerationDetection = exports.ContentModerationDetection || (exports.ContentModerationDetection = {}));
var ContentModerationSortBy;
(function (ContentModerationSortBy) {
    ContentModerationSortBy["NAME"] = "NAME";
    ContentModerationSortBy["TIMESTAMP"] = "TIMESTAMP";
})(ContentModerationSortBy = exports.ContentModerationSortBy || (exports.ContentModerationSortBy = {}));
var CreateCollectionRequest;
(function (CreateCollectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCollectionRequest");
    }
    CreateCollectionRequest.isa = isa;
})(CreateCollectionRequest = exports.CreateCollectionRequest || (exports.CreateCollectionRequest = {}));
var CreateCollectionResponse;
(function (CreateCollectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCollectionResponse");
    }
    CreateCollectionResponse.isa = isa;
})(CreateCollectionResponse = exports.CreateCollectionResponse || (exports.CreateCollectionResponse = {}));
var CreateProjectRequest;
(function (CreateProjectRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProjectRequest");
    }
    CreateProjectRequest.isa = isa;
})(CreateProjectRequest = exports.CreateProjectRequest || (exports.CreateProjectRequest = {}));
var CreateProjectResponse;
(function (CreateProjectResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProjectResponse");
    }
    CreateProjectResponse.isa = isa;
})(CreateProjectResponse = exports.CreateProjectResponse || (exports.CreateProjectResponse = {}));
var CreateProjectVersionRequest;
(function (CreateProjectVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProjectVersionRequest");
    }
    CreateProjectVersionRequest.isa = isa;
})(CreateProjectVersionRequest = exports.CreateProjectVersionRequest || (exports.CreateProjectVersionRequest = {}));
var CreateProjectVersionResponse;
(function (CreateProjectVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProjectVersionResponse");
    }
    CreateProjectVersionResponse.isa = isa;
})(CreateProjectVersionResponse = exports.CreateProjectVersionResponse || (exports.CreateProjectVersionResponse = {}));
var CreateStreamProcessorRequest;
(function (CreateStreamProcessorRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateStreamProcessorRequest");
    }
    CreateStreamProcessorRequest.isa = isa;
})(CreateStreamProcessorRequest = exports.CreateStreamProcessorRequest || (exports.CreateStreamProcessorRequest = {}));
var CreateStreamProcessorResponse;
(function (CreateStreamProcessorResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateStreamProcessorResponse");
    }
    CreateStreamProcessorResponse.isa = isa;
})(CreateStreamProcessorResponse = exports.CreateStreamProcessorResponse || (exports.CreateStreamProcessorResponse = {}));
var CustomLabel;
(function (CustomLabel) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomLabel");
    }
    CustomLabel.isa = isa;
})(CustomLabel = exports.CustomLabel || (exports.CustomLabel = {}));
var DeleteCollectionRequest;
(function (DeleteCollectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCollectionRequest");
    }
    DeleteCollectionRequest.isa = isa;
})(DeleteCollectionRequest = exports.DeleteCollectionRequest || (exports.DeleteCollectionRequest = {}));
var DeleteCollectionResponse;
(function (DeleteCollectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCollectionResponse");
    }
    DeleteCollectionResponse.isa = isa;
})(DeleteCollectionResponse = exports.DeleteCollectionResponse || (exports.DeleteCollectionResponse = {}));
var DeleteFacesRequest;
(function (DeleteFacesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteFacesRequest");
    }
    DeleteFacesRequest.isa = isa;
})(DeleteFacesRequest = exports.DeleteFacesRequest || (exports.DeleteFacesRequest = {}));
var DeleteFacesResponse;
(function (DeleteFacesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteFacesResponse");
    }
    DeleteFacesResponse.isa = isa;
})(DeleteFacesResponse = exports.DeleteFacesResponse || (exports.DeleteFacesResponse = {}));
var DeleteStreamProcessorRequest;
(function (DeleteStreamProcessorRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteStreamProcessorRequest");
    }
    DeleteStreamProcessorRequest.isa = isa;
})(DeleteStreamProcessorRequest = exports.DeleteStreamProcessorRequest || (exports.DeleteStreamProcessorRequest = {}));
var DeleteStreamProcessorResponse;
(function (DeleteStreamProcessorResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteStreamProcessorResponse");
    }
    DeleteStreamProcessorResponse.isa = isa;
})(DeleteStreamProcessorResponse = exports.DeleteStreamProcessorResponse || (exports.DeleteStreamProcessorResponse = {}));
var DescribeCollectionRequest;
(function (DescribeCollectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCollectionRequest");
    }
    DescribeCollectionRequest.isa = isa;
})(DescribeCollectionRequest = exports.DescribeCollectionRequest || (exports.DescribeCollectionRequest = {}));
var DescribeCollectionResponse;
(function (DescribeCollectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCollectionResponse");
    }
    DescribeCollectionResponse.isa = isa;
})(DescribeCollectionResponse = exports.DescribeCollectionResponse || (exports.DescribeCollectionResponse = {}));
var DescribeProjectVersionsRequest;
(function (DescribeProjectVersionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeProjectVersionsRequest");
    }
    DescribeProjectVersionsRequest.isa = isa;
})(DescribeProjectVersionsRequest = exports.DescribeProjectVersionsRequest || (exports.DescribeProjectVersionsRequest = {}));
var DescribeProjectVersionsResponse;
(function (DescribeProjectVersionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeProjectVersionsResponse");
    }
    DescribeProjectVersionsResponse.isa = isa;
})(DescribeProjectVersionsResponse = exports.DescribeProjectVersionsResponse || (exports.DescribeProjectVersionsResponse = {}));
var DescribeProjectsRequest;
(function (DescribeProjectsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeProjectsRequest");
    }
    DescribeProjectsRequest.isa = isa;
})(DescribeProjectsRequest = exports.DescribeProjectsRequest || (exports.DescribeProjectsRequest = {}));
var DescribeProjectsResponse;
(function (DescribeProjectsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeProjectsResponse");
    }
    DescribeProjectsResponse.isa = isa;
})(DescribeProjectsResponse = exports.DescribeProjectsResponse || (exports.DescribeProjectsResponse = {}));
var DescribeStreamProcessorRequest;
(function (DescribeStreamProcessorRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStreamProcessorRequest");
    }
    DescribeStreamProcessorRequest.isa = isa;
})(DescribeStreamProcessorRequest = exports.DescribeStreamProcessorRequest || (exports.DescribeStreamProcessorRequest = {}));
var DescribeStreamProcessorResponse;
(function (DescribeStreamProcessorResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStreamProcessorResponse");
    }
    DescribeStreamProcessorResponse.isa = isa;
})(DescribeStreamProcessorResponse = exports.DescribeStreamProcessorResponse || (exports.DescribeStreamProcessorResponse = {}));
var DetectCustomLabelsRequest;
(function (DetectCustomLabelsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectCustomLabelsRequest");
    }
    DetectCustomLabelsRequest.isa = isa;
})(DetectCustomLabelsRequest = exports.DetectCustomLabelsRequest || (exports.DetectCustomLabelsRequest = {}));
var DetectCustomLabelsResponse;
(function (DetectCustomLabelsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectCustomLabelsResponse");
    }
    DetectCustomLabelsResponse.isa = isa;
})(DetectCustomLabelsResponse = exports.DetectCustomLabelsResponse || (exports.DetectCustomLabelsResponse = {}));
var DetectFacesRequest;
(function (DetectFacesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectFacesRequest");
    }
    DetectFacesRequest.isa = isa;
})(DetectFacesRequest = exports.DetectFacesRequest || (exports.DetectFacesRequest = {}));
var DetectFacesResponse;
(function (DetectFacesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectFacesResponse");
    }
    DetectFacesResponse.isa = isa;
})(DetectFacesResponse = exports.DetectFacesResponse || (exports.DetectFacesResponse = {}));
var DetectLabelsRequest;
(function (DetectLabelsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectLabelsRequest");
    }
    DetectLabelsRequest.isa = isa;
})(DetectLabelsRequest = exports.DetectLabelsRequest || (exports.DetectLabelsRequest = {}));
var DetectLabelsResponse;
(function (DetectLabelsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectLabelsResponse");
    }
    DetectLabelsResponse.isa = isa;
})(DetectLabelsResponse = exports.DetectLabelsResponse || (exports.DetectLabelsResponse = {}));
var DetectModerationLabelsRequest;
(function (DetectModerationLabelsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectModerationLabelsRequest");
    }
    DetectModerationLabelsRequest.isa = isa;
})(DetectModerationLabelsRequest = exports.DetectModerationLabelsRequest || (exports.DetectModerationLabelsRequest = {}));
var DetectModerationLabelsResponse;
(function (DetectModerationLabelsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectModerationLabelsResponse");
    }
    DetectModerationLabelsResponse.isa = isa;
})(DetectModerationLabelsResponse = exports.DetectModerationLabelsResponse || (exports.DetectModerationLabelsResponse = {}));
var DetectTextRequest;
(function (DetectTextRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectTextRequest");
    }
    DetectTextRequest.isa = isa;
})(DetectTextRequest = exports.DetectTextRequest || (exports.DetectTextRequest = {}));
var DetectTextResponse;
(function (DetectTextResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectTextResponse");
    }
    DetectTextResponse.isa = isa;
})(DetectTextResponse = exports.DetectTextResponse || (exports.DetectTextResponse = {}));
var Emotion;
(function (Emotion) {
    function isa(o) {
        return smithy_client_1.isa(o, "Emotion");
    }
    Emotion.isa = isa;
})(Emotion = exports.Emotion || (exports.Emotion = {}));
var EvaluationResult;
(function (EvaluationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "EvaluationResult");
    }
    EvaluationResult.isa = isa;
})(EvaluationResult = exports.EvaluationResult || (exports.EvaluationResult = {}));
var EyeOpen;
(function (EyeOpen) {
    function isa(o) {
        return smithy_client_1.isa(o, "EyeOpen");
    }
    EyeOpen.isa = isa;
})(EyeOpen = exports.EyeOpen || (exports.EyeOpen = {}));
var Eyeglasses;
(function (Eyeglasses) {
    function isa(o) {
        return smithy_client_1.isa(o, "Eyeglasses");
    }
    Eyeglasses.isa = isa;
})(Eyeglasses = exports.Eyeglasses || (exports.Eyeglasses = {}));
var Face;
(function (Face) {
    function isa(o) {
        return smithy_client_1.isa(o, "Face");
    }
    Face.isa = isa;
})(Face = exports.Face || (exports.Face = {}));
var FaceAttributes;
(function (FaceAttributes) {
    FaceAttributes["ALL"] = "ALL";
    FaceAttributes["DEFAULT"] = "DEFAULT";
})(FaceAttributes = exports.FaceAttributes || (exports.FaceAttributes = {}));
var FaceDetail;
(function (FaceDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "FaceDetail");
    }
    FaceDetail.isa = isa;
})(FaceDetail = exports.FaceDetail || (exports.FaceDetail = {}));
var FaceDetection;
(function (FaceDetection) {
    function isa(o) {
        return smithy_client_1.isa(o, "FaceDetection");
    }
    FaceDetection.isa = isa;
})(FaceDetection = exports.FaceDetection || (exports.FaceDetection = {}));
var FaceMatch;
(function (FaceMatch) {
    function isa(o) {
        return smithy_client_1.isa(o, "FaceMatch");
    }
    FaceMatch.isa = isa;
})(FaceMatch = exports.FaceMatch || (exports.FaceMatch = {}));
var FaceRecord;
(function (FaceRecord) {
    function isa(o) {
        return smithy_client_1.isa(o, "FaceRecord");
    }
    FaceRecord.isa = isa;
})(FaceRecord = exports.FaceRecord || (exports.FaceRecord = {}));
var FaceSearchSettings;
(function (FaceSearchSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "FaceSearchSettings");
    }
    FaceSearchSettings.isa = isa;
})(FaceSearchSettings = exports.FaceSearchSettings || (exports.FaceSearchSettings = {}));
var FaceSearchSortBy;
(function (FaceSearchSortBy) {
    FaceSearchSortBy["INDEX"] = "INDEX";
    FaceSearchSortBy["TIMESTAMP"] = "TIMESTAMP";
})(FaceSearchSortBy = exports.FaceSearchSortBy || (exports.FaceSearchSortBy = {}));
var Gender;
(function (Gender) {
    function isa(o) {
        return smithy_client_1.isa(o, "Gender");
    }
    Gender.isa = isa;
})(Gender = exports.Gender || (exports.Gender = {}));
var GenderType;
(function (GenderType) {
    GenderType["Female"] = "Female";
    GenderType["Male"] = "Male";
})(GenderType = exports.GenderType || (exports.GenderType = {}));
var Geometry;
(function (Geometry) {
    function isa(o) {
        return smithy_client_1.isa(o, "Geometry");
    }
    Geometry.isa = isa;
})(Geometry = exports.Geometry || (exports.Geometry = {}));
var GetCelebrityInfoRequest;
(function (GetCelebrityInfoRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCelebrityInfoRequest");
    }
    GetCelebrityInfoRequest.isa = isa;
})(GetCelebrityInfoRequest = exports.GetCelebrityInfoRequest || (exports.GetCelebrityInfoRequest = {}));
var GetCelebrityInfoResponse;
(function (GetCelebrityInfoResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCelebrityInfoResponse");
    }
    GetCelebrityInfoResponse.isa = isa;
})(GetCelebrityInfoResponse = exports.GetCelebrityInfoResponse || (exports.GetCelebrityInfoResponse = {}));
var GetCelebrityRecognitionRequest;
(function (GetCelebrityRecognitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCelebrityRecognitionRequest");
    }
    GetCelebrityRecognitionRequest.isa = isa;
})(GetCelebrityRecognitionRequest = exports.GetCelebrityRecognitionRequest || (exports.GetCelebrityRecognitionRequest = {}));
var GetCelebrityRecognitionResponse;
(function (GetCelebrityRecognitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCelebrityRecognitionResponse");
    }
    GetCelebrityRecognitionResponse.isa = isa;
})(GetCelebrityRecognitionResponse = exports.GetCelebrityRecognitionResponse || (exports.GetCelebrityRecognitionResponse = {}));
var GetContentModerationRequest;
(function (GetContentModerationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetContentModerationRequest");
    }
    GetContentModerationRequest.isa = isa;
})(GetContentModerationRequest = exports.GetContentModerationRequest || (exports.GetContentModerationRequest = {}));
var GetContentModerationResponse;
(function (GetContentModerationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetContentModerationResponse");
    }
    GetContentModerationResponse.isa = isa;
})(GetContentModerationResponse = exports.GetContentModerationResponse || (exports.GetContentModerationResponse = {}));
var GetFaceDetectionRequest;
(function (GetFaceDetectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFaceDetectionRequest");
    }
    GetFaceDetectionRequest.isa = isa;
})(GetFaceDetectionRequest = exports.GetFaceDetectionRequest || (exports.GetFaceDetectionRequest = {}));
var GetFaceDetectionResponse;
(function (GetFaceDetectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFaceDetectionResponse");
    }
    GetFaceDetectionResponse.isa = isa;
})(GetFaceDetectionResponse = exports.GetFaceDetectionResponse || (exports.GetFaceDetectionResponse = {}));
var GetFaceSearchRequest;
(function (GetFaceSearchRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFaceSearchRequest");
    }
    GetFaceSearchRequest.isa = isa;
})(GetFaceSearchRequest = exports.GetFaceSearchRequest || (exports.GetFaceSearchRequest = {}));
var GetFaceSearchResponse;
(function (GetFaceSearchResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFaceSearchResponse");
    }
    GetFaceSearchResponse.isa = isa;
})(GetFaceSearchResponse = exports.GetFaceSearchResponse || (exports.GetFaceSearchResponse = {}));
var GetLabelDetectionRequest;
(function (GetLabelDetectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLabelDetectionRequest");
    }
    GetLabelDetectionRequest.isa = isa;
})(GetLabelDetectionRequest = exports.GetLabelDetectionRequest || (exports.GetLabelDetectionRequest = {}));
var GetLabelDetectionResponse;
(function (GetLabelDetectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLabelDetectionResponse");
    }
    GetLabelDetectionResponse.isa = isa;
})(GetLabelDetectionResponse = exports.GetLabelDetectionResponse || (exports.GetLabelDetectionResponse = {}));
var GetPersonTrackingRequest;
(function (GetPersonTrackingRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPersonTrackingRequest");
    }
    GetPersonTrackingRequest.isa = isa;
})(GetPersonTrackingRequest = exports.GetPersonTrackingRequest || (exports.GetPersonTrackingRequest = {}));
var GetPersonTrackingResponse;
(function (GetPersonTrackingResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPersonTrackingResponse");
    }
    GetPersonTrackingResponse.isa = isa;
})(GetPersonTrackingResponse = exports.GetPersonTrackingResponse || (exports.GetPersonTrackingResponse = {}));
var GroundTruthManifest;
(function (GroundTruthManifest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GroundTruthManifest");
    }
    GroundTruthManifest.isa = isa;
})(GroundTruthManifest = exports.GroundTruthManifest || (exports.GroundTruthManifest = {}));
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
var Image;
(function (Image) {
    function isa(o) {
        return smithy_client_1.isa(o, "Image");
    }
    Image.isa = isa;
})(Image = exports.Image || (exports.Image = {}));
var ImageQuality;
(function (ImageQuality) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImageQuality");
    }
    ImageQuality.isa = isa;
})(ImageQuality = exports.ImageQuality || (exports.ImageQuality = {}));
var ImageTooLargeException;
(function (ImageTooLargeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImageTooLargeException");
    }
    ImageTooLargeException.isa = isa;
})(ImageTooLargeException = exports.ImageTooLargeException || (exports.ImageTooLargeException = {}));
var IndexFacesRequest;
(function (IndexFacesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "IndexFacesRequest");
    }
    IndexFacesRequest.isa = isa;
})(IndexFacesRequest = exports.IndexFacesRequest || (exports.IndexFacesRequest = {}));
var IndexFacesResponse;
(function (IndexFacesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "IndexFacesResponse");
    }
    IndexFacesResponse.isa = isa;
})(IndexFacesResponse = exports.IndexFacesResponse || (exports.IndexFacesResponse = {}));
var Instance;
(function (Instance) {
    function isa(o) {
        return smithy_client_1.isa(o, "Instance");
    }
    Instance.isa = isa;
})(Instance = exports.Instance || (exports.Instance = {}));
var InternalServerError;
(function (InternalServerError) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerError");
    }
    InternalServerError.isa = isa;
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var InvalidImageFormatException;
(function (InvalidImageFormatException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidImageFormatException");
    }
    InvalidImageFormatException.isa = isa;
})(InvalidImageFormatException = exports.InvalidImageFormatException || (exports.InvalidImageFormatException = {}));
var InvalidPaginationTokenException;
(function (InvalidPaginationTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPaginationTokenException");
    }
    InvalidPaginationTokenException.isa = isa;
})(InvalidPaginationTokenException = exports.InvalidPaginationTokenException || (exports.InvalidPaginationTokenException = {}));
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
var KinesisDataStream;
(function (KinesisDataStream) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisDataStream");
    }
    KinesisDataStream.isa = isa;
})(KinesisDataStream = exports.KinesisDataStream || (exports.KinesisDataStream = {}));
var KinesisVideoStream;
(function (KinesisVideoStream) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisVideoStream");
    }
    KinesisVideoStream.isa = isa;
})(KinesisVideoStream = exports.KinesisVideoStream || (exports.KinesisVideoStream = {}));
var Label;
(function (Label) {
    function isa(o) {
        return smithy_client_1.isa(o, "Label");
    }
    Label.isa = isa;
})(Label = exports.Label || (exports.Label = {}));
var LabelDetection;
(function (LabelDetection) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelDetection");
    }
    LabelDetection.isa = isa;
})(LabelDetection = exports.LabelDetection || (exports.LabelDetection = {}));
var LabelDetectionSortBy;
(function (LabelDetectionSortBy) {
    LabelDetectionSortBy["NAME"] = "NAME";
    LabelDetectionSortBy["TIMESTAMP"] = "TIMESTAMP";
})(LabelDetectionSortBy = exports.LabelDetectionSortBy || (exports.LabelDetectionSortBy = {}));
var Landmark;
(function (Landmark) {
    function isa(o) {
        return smithy_client_1.isa(o, "Landmark");
    }
    Landmark.isa = isa;
})(Landmark = exports.Landmark || (exports.Landmark = {}));
var LandmarkType;
(function (LandmarkType) {
    LandmarkType["chinBottom"] = "chinBottom";
    LandmarkType["eyeLeft"] = "eyeLeft";
    LandmarkType["eyeRight"] = "eyeRight";
    LandmarkType["leftEyeBrowLeft"] = "leftEyeBrowLeft";
    LandmarkType["leftEyeBrowRight"] = "leftEyeBrowRight";
    LandmarkType["leftEyeBrowUp"] = "leftEyeBrowUp";
    LandmarkType["leftEyeDown"] = "leftEyeDown";
    LandmarkType["leftEyeLeft"] = "leftEyeLeft";
    LandmarkType["leftEyeRight"] = "leftEyeRight";
    LandmarkType["leftEyeUp"] = "leftEyeUp";
    LandmarkType["leftPupil"] = "leftPupil";
    LandmarkType["midJawlineLeft"] = "midJawlineLeft";
    LandmarkType["midJawlineRight"] = "midJawlineRight";
    LandmarkType["mouthDown"] = "mouthDown";
    LandmarkType["mouthLeft"] = "mouthLeft";
    LandmarkType["mouthRight"] = "mouthRight";
    LandmarkType["mouthUp"] = "mouthUp";
    LandmarkType["nose"] = "nose";
    LandmarkType["noseLeft"] = "noseLeft";
    LandmarkType["noseRight"] = "noseRight";
    LandmarkType["rightEyeBrowLeft"] = "rightEyeBrowLeft";
    LandmarkType["rightEyeBrowRight"] = "rightEyeBrowRight";
    LandmarkType["rightEyeBrowUp"] = "rightEyeBrowUp";
    LandmarkType["rightEyeDown"] = "rightEyeDown";
    LandmarkType["rightEyeLeft"] = "rightEyeLeft";
    LandmarkType["rightEyeRight"] = "rightEyeRight";
    LandmarkType["rightEyeUp"] = "rightEyeUp";
    LandmarkType["rightPupil"] = "rightPupil";
    LandmarkType["upperJawlineLeft"] = "upperJawlineLeft";
    LandmarkType["upperJawlineRight"] = "upperJawlineRight";
})(LandmarkType = exports.LandmarkType || (exports.LandmarkType = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListCollectionsRequest;
(function (ListCollectionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCollectionsRequest");
    }
    ListCollectionsRequest.isa = isa;
})(ListCollectionsRequest = exports.ListCollectionsRequest || (exports.ListCollectionsRequest = {}));
var ListCollectionsResponse;
(function (ListCollectionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCollectionsResponse");
    }
    ListCollectionsResponse.isa = isa;
})(ListCollectionsResponse = exports.ListCollectionsResponse || (exports.ListCollectionsResponse = {}));
var ListFacesRequest;
(function (ListFacesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListFacesRequest");
    }
    ListFacesRequest.isa = isa;
})(ListFacesRequest = exports.ListFacesRequest || (exports.ListFacesRequest = {}));
var ListFacesResponse;
(function (ListFacesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListFacesResponse");
    }
    ListFacesResponse.isa = isa;
})(ListFacesResponse = exports.ListFacesResponse || (exports.ListFacesResponse = {}));
var ListStreamProcessorsRequest;
(function (ListStreamProcessorsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStreamProcessorsRequest");
    }
    ListStreamProcessorsRequest.isa = isa;
})(ListStreamProcessorsRequest = exports.ListStreamProcessorsRequest || (exports.ListStreamProcessorsRequest = {}));
var ListStreamProcessorsResponse;
(function (ListStreamProcessorsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStreamProcessorsResponse");
    }
    ListStreamProcessorsResponse.isa = isa;
})(ListStreamProcessorsResponse = exports.ListStreamProcessorsResponse || (exports.ListStreamProcessorsResponse = {}));
var ModerationLabel;
(function (ModerationLabel) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModerationLabel");
    }
    ModerationLabel.isa = isa;
})(ModerationLabel = exports.ModerationLabel || (exports.ModerationLabel = {}));
var MouthOpen;
(function (MouthOpen) {
    function isa(o) {
        return smithy_client_1.isa(o, "MouthOpen");
    }
    MouthOpen.isa = isa;
})(MouthOpen = exports.MouthOpen || (exports.MouthOpen = {}));
var Mustache;
(function (Mustache) {
    function isa(o) {
        return smithy_client_1.isa(o, "Mustache");
    }
    Mustache.isa = isa;
})(Mustache = exports.Mustache || (exports.Mustache = {}));
var NotificationChannel;
(function (NotificationChannel) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotificationChannel");
    }
    NotificationChannel.isa = isa;
})(NotificationChannel = exports.NotificationChannel || (exports.NotificationChannel = {}));
var OrientationCorrection;
(function (OrientationCorrection) {
    OrientationCorrection["ROTATE_0"] = "ROTATE_0";
    OrientationCorrection["ROTATE_180"] = "ROTATE_180";
    OrientationCorrection["ROTATE_270"] = "ROTATE_270";
    OrientationCorrection["ROTATE_90"] = "ROTATE_90";
})(OrientationCorrection = exports.OrientationCorrection || (exports.OrientationCorrection = {}));
var OutputConfig;
(function (OutputConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "OutputConfig");
    }
    OutputConfig.isa = isa;
})(OutputConfig = exports.OutputConfig || (exports.OutputConfig = {}));
var Parent;
(function (Parent) {
    function isa(o) {
        return smithy_client_1.isa(o, "Parent");
    }
    Parent.isa = isa;
})(Parent = exports.Parent || (exports.Parent = {}));
var PersonDetail;
(function (PersonDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "PersonDetail");
    }
    PersonDetail.isa = isa;
})(PersonDetail = exports.PersonDetail || (exports.PersonDetail = {}));
var PersonDetection;
(function (PersonDetection) {
    function isa(o) {
        return smithy_client_1.isa(o, "PersonDetection");
    }
    PersonDetection.isa = isa;
})(PersonDetection = exports.PersonDetection || (exports.PersonDetection = {}));
var PersonMatch;
(function (PersonMatch) {
    function isa(o) {
        return smithy_client_1.isa(o, "PersonMatch");
    }
    PersonMatch.isa = isa;
})(PersonMatch = exports.PersonMatch || (exports.PersonMatch = {}));
var PersonTrackingSortBy;
(function (PersonTrackingSortBy) {
    PersonTrackingSortBy["INDEX"] = "INDEX";
    PersonTrackingSortBy["TIMESTAMP"] = "TIMESTAMP";
})(PersonTrackingSortBy = exports.PersonTrackingSortBy || (exports.PersonTrackingSortBy = {}));
var Point;
(function (Point) {
    function isa(o) {
        return smithy_client_1.isa(o, "Point");
    }
    Point.isa = isa;
})(Point = exports.Point || (exports.Point = {}));
var Pose;
(function (Pose) {
    function isa(o) {
        return smithy_client_1.isa(o, "Pose");
    }
    Pose.isa = isa;
})(Pose = exports.Pose || (exports.Pose = {}));
var ProjectDescription;
(function (ProjectDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProjectDescription");
    }
    ProjectDescription.isa = isa;
})(ProjectDescription = exports.ProjectDescription || (exports.ProjectDescription = {}));
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["CREATED"] = "CREATED";
    ProjectStatus["CREATING"] = "CREATING";
    ProjectStatus["DELETING"] = "DELETING";
})(ProjectStatus = exports.ProjectStatus || (exports.ProjectStatus = {}));
var ProjectVersionDescription;
(function (ProjectVersionDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProjectVersionDescription");
    }
    ProjectVersionDescription.isa = isa;
})(ProjectVersionDescription = exports.ProjectVersionDescription || (exports.ProjectVersionDescription = {}));
var ProjectVersionStatus;
(function (ProjectVersionStatus) {
    ProjectVersionStatus["DELETING"] = "DELETING";
    ProjectVersionStatus["FAILED"] = "FAILED";
    ProjectVersionStatus["RUNNING"] = "RUNNING";
    ProjectVersionStatus["STARTING"] = "STARTING";
    ProjectVersionStatus["STOPPED"] = "STOPPED";
    ProjectVersionStatus["STOPPING"] = "STOPPING";
    ProjectVersionStatus["TRAINING_COMPLETED"] = "TRAINING_COMPLETED";
    ProjectVersionStatus["TRAINING_FAILED"] = "TRAINING_FAILED";
    ProjectVersionStatus["TRAINING_IN_PROGRESS"] = "TRAINING_IN_PROGRESS";
})(ProjectVersionStatus = exports.ProjectVersionStatus || (exports.ProjectVersionStatus = {}));
var ProvisionedThroughputExceededException;
(function (ProvisionedThroughputExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProvisionedThroughputExceededException");
    }
    ProvisionedThroughputExceededException.isa = isa;
})(ProvisionedThroughputExceededException = exports.ProvisionedThroughputExceededException || (exports.ProvisionedThroughputExceededException = {}));
var QualityFilter;
(function (QualityFilter) {
    QualityFilter["AUTO"] = "AUTO";
    QualityFilter["HIGH"] = "HIGH";
    QualityFilter["LOW"] = "LOW";
    QualityFilter["MEDIUM"] = "MEDIUM";
    QualityFilter["NONE"] = "NONE";
})(QualityFilter = exports.QualityFilter || (exports.QualityFilter = {}));
var Reason;
(function (Reason) {
    Reason["EXCEEDS_MAX_FACES"] = "EXCEEDS_MAX_FACES";
    Reason["EXTREME_POSE"] = "EXTREME_POSE";
    Reason["LOW_BRIGHTNESS"] = "LOW_BRIGHTNESS";
    Reason["LOW_CONFIDENCE"] = "LOW_CONFIDENCE";
    Reason["LOW_FACE_QUALITY"] = "LOW_FACE_QUALITY";
    Reason["LOW_SHARPNESS"] = "LOW_SHARPNESS";
    Reason["SMALL_BOUNDING_BOX"] = "SMALL_BOUNDING_BOX";
})(Reason = exports.Reason || (exports.Reason = {}));
var RecognizeCelebritiesRequest;
(function (RecognizeCelebritiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RecognizeCelebritiesRequest");
    }
    RecognizeCelebritiesRequest.isa = isa;
})(RecognizeCelebritiesRequest = exports.RecognizeCelebritiesRequest || (exports.RecognizeCelebritiesRequest = {}));
var RecognizeCelebritiesResponse;
(function (RecognizeCelebritiesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RecognizeCelebritiesResponse");
    }
    RecognizeCelebritiesResponse.isa = isa;
})(RecognizeCelebritiesResponse = exports.RecognizeCelebritiesResponse || (exports.RecognizeCelebritiesResponse = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceAlreadyExistsException");
    }
    ResourceAlreadyExistsException.isa = isa;
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceInUseException");
    }
    ResourceInUseException.isa = isa;
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResourceNotReadyException;
(function (ResourceNotReadyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotReadyException");
    }
    ResourceNotReadyException.isa = isa;
})(ResourceNotReadyException = exports.ResourceNotReadyException || (exports.ResourceNotReadyException = {}));
var S3Object;
(function (S3Object) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Object");
    }
    S3Object.isa = isa;
})(S3Object = exports.S3Object || (exports.S3Object = {}));
var SearchFacesByImageRequest;
(function (SearchFacesByImageRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchFacesByImageRequest");
    }
    SearchFacesByImageRequest.isa = isa;
})(SearchFacesByImageRequest = exports.SearchFacesByImageRequest || (exports.SearchFacesByImageRequest = {}));
var SearchFacesByImageResponse;
(function (SearchFacesByImageResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchFacesByImageResponse");
    }
    SearchFacesByImageResponse.isa = isa;
})(SearchFacesByImageResponse = exports.SearchFacesByImageResponse || (exports.SearchFacesByImageResponse = {}));
var SearchFacesRequest;
(function (SearchFacesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchFacesRequest");
    }
    SearchFacesRequest.isa = isa;
})(SearchFacesRequest = exports.SearchFacesRequest || (exports.SearchFacesRequest = {}));
var SearchFacesResponse;
(function (SearchFacesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchFacesResponse");
    }
    SearchFacesResponse.isa = isa;
})(SearchFacesResponse = exports.SearchFacesResponse || (exports.SearchFacesResponse = {}));
var Smile;
(function (Smile) {
    function isa(o) {
        return smithy_client_1.isa(o, "Smile");
    }
    Smile.isa = isa;
})(Smile = exports.Smile || (exports.Smile = {}));
var StartCelebrityRecognitionRequest;
(function (StartCelebrityRecognitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartCelebrityRecognitionRequest");
    }
    StartCelebrityRecognitionRequest.isa = isa;
})(StartCelebrityRecognitionRequest = exports.StartCelebrityRecognitionRequest || (exports.StartCelebrityRecognitionRequest = {}));
var StartCelebrityRecognitionResponse;
(function (StartCelebrityRecognitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartCelebrityRecognitionResponse");
    }
    StartCelebrityRecognitionResponse.isa = isa;
})(StartCelebrityRecognitionResponse = exports.StartCelebrityRecognitionResponse || (exports.StartCelebrityRecognitionResponse = {}));
var StartContentModerationRequest;
(function (StartContentModerationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartContentModerationRequest");
    }
    StartContentModerationRequest.isa = isa;
})(StartContentModerationRequest = exports.StartContentModerationRequest || (exports.StartContentModerationRequest = {}));
var StartContentModerationResponse;
(function (StartContentModerationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartContentModerationResponse");
    }
    StartContentModerationResponse.isa = isa;
})(StartContentModerationResponse = exports.StartContentModerationResponse || (exports.StartContentModerationResponse = {}));
var StartFaceDetectionRequest;
(function (StartFaceDetectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartFaceDetectionRequest");
    }
    StartFaceDetectionRequest.isa = isa;
})(StartFaceDetectionRequest = exports.StartFaceDetectionRequest || (exports.StartFaceDetectionRequest = {}));
var StartFaceDetectionResponse;
(function (StartFaceDetectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartFaceDetectionResponse");
    }
    StartFaceDetectionResponse.isa = isa;
})(StartFaceDetectionResponse = exports.StartFaceDetectionResponse || (exports.StartFaceDetectionResponse = {}));
var StartFaceSearchRequest;
(function (StartFaceSearchRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartFaceSearchRequest");
    }
    StartFaceSearchRequest.isa = isa;
})(StartFaceSearchRequest = exports.StartFaceSearchRequest || (exports.StartFaceSearchRequest = {}));
var StartFaceSearchResponse;
(function (StartFaceSearchResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartFaceSearchResponse");
    }
    StartFaceSearchResponse.isa = isa;
})(StartFaceSearchResponse = exports.StartFaceSearchResponse || (exports.StartFaceSearchResponse = {}));
var StartLabelDetectionRequest;
(function (StartLabelDetectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartLabelDetectionRequest");
    }
    StartLabelDetectionRequest.isa = isa;
})(StartLabelDetectionRequest = exports.StartLabelDetectionRequest || (exports.StartLabelDetectionRequest = {}));
var StartLabelDetectionResponse;
(function (StartLabelDetectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartLabelDetectionResponse");
    }
    StartLabelDetectionResponse.isa = isa;
})(StartLabelDetectionResponse = exports.StartLabelDetectionResponse || (exports.StartLabelDetectionResponse = {}));
var StartPersonTrackingRequest;
(function (StartPersonTrackingRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartPersonTrackingRequest");
    }
    StartPersonTrackingRequest.isa = isa;
})(StartPersonTrackingRequest = exports.StartPersonTrackingRequest || (exports.StartPersonTrackingRequest = {}));
var StartPersonTrackingResponse;
(function (StartPersonTrackingResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartPersonTrackingResponse");
    }
    StartPersonTrackingResponse.isa = isa;
})(StartPersonTrackingResponse = exports.StartPersonTrackingResponse || (exports.StartPersonTrackingResponse = {}));
var StartProjectVersionRequest;
(function (StartProjectVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartProjectVersionRequest");
    }
    StartProjectVersionRequest.isa = isa;
})(StartProjectVersionRequest = exports.StartProjectVersionRequest || (exports.StartProjectVersionRequest = {}));
var StartProjectVersionResponse;
(function (StartProjectVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartProjectVersionResponse");
    }
    StartProjectVersionResponse.isa = isa;
})(StartProjectVersionResponse = exports.StartProjectVersionResponse || (exports.StartProjectVersionResponse = {}));
var StartStreamProcessorRequest;
(function (StartStreamProcessorRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartStreamProcessorRequest");
    }
    StartStreamProcessorRequest.isa = isa;
})(StartStreamProcessorRequest = exports.StartStreamProcessorRequest || (exports.StartStreamProcessorRequest = {}));
var StartStreamProcessorResponse;
(function (StartStreamProcessorResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartStreamProcessorResponse");
    }
    StartStreamProcessorResponse.isa = isa;
})(StartStreamProcessorResponse = exports.StartStreamProcessorResponse || (exports.StartStreamProcessorResponse = {}));
var StopProjectVersionRequest;
(function (StopProjectVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopProjectVersionRequest");
    }
    StopProjectVersionRequest.isa = isa;
})(StopProjectVersionRequest = exports.StopProjectVersionRequest || (exports.StopProjectVersionRequest = {}));
var StopProjectVersionResponse;
(function (StopProjectVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopProjectVersionResponse");
    }
    StopProjectVersionResponse.isa = isa;
})(StopProjectVersionResponse = exports.StopProjectVersionResponse || (exports.StopProjectVersionResponse = {}));
var StopStreamProcessorRequest;
(function (StopStreamProcessorRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopStreamProcessorRequest");
    }
    StopStreamProcessorRequest.isa = isa;
})(StopStreamProcessorRequest = exports.StopStreamProcessorRequest || (exports.StopStreamProcessorRequest = {}));
var StopStreamProcessorResponse;
(function (StopStreamProcessorResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopStreamProcessorResponse");
    }
    StopStreamProcessorResponse.isa = isa;
})(StopStreamProcessorResponse = exports.StopStreamProcessorResponse || (exports.StopStreamProcessorResponse = {}));
var StreamProcessor;
(function (StreamProcessor) {
    function isa(o) {
        return smithy_client_1.isa(o, "StreamProcessor");
    }
    StreamProcessor.isa = isa;
})(StreamProcessor = exports.StreamProcessor || (exports.StreamProcessor = {}));
var StreamProcessorInput;
(function (StreamProcessorInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StreamProcessorInput");
    }
    StreamProcessorInput.isa = isa;
})(StreamProcessorInput = exports.StreamProcessorInput || (exports.StreamProcessorInput = {}));
var StreamProcessorOutput;
(function (StreamProcessorOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StreamProcessorOutput");
    }
    StreamProcessorOutput.isa = isa;
})(StreamProcessorOutput = exports.StreamProcessorOutput || (exports.StreamProcessorOutput = {}));
var StreamProcessorSettings;
(function (StreamProcessorSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "StreamProcessorSettings");
    }
    StreamProcessorSettings.isa = isa;
})(StreamProcessorSettings = exports.StreamProcessorSettings || (exports.StreamProcessorSettings = {}));
var StreamProcessorStatus;
(function (StreamProcessorStatus) {
    StreamProcessorStatus["FAILED"] = "FAILED";
    StreamProcessorStatus["RUNNING"] = "RUNNING";
    StreamProcessorStatus["STARTING"] = "STARTING";
    StreamProcessorStatus["STOPPED"] = "STOPPED";
    StreamProcessorStatus["STOPPING"] = "STOPPING";
})(StreamProcessorStatus = exports.StreamProcessorStatus || (exports.StreamProcessorStatus = {}));
var Summary;
(function (Summary) {
    function isa(o) {
        return smithy_client_1.isa(o, "Summary");
    }
    Summary.isa = isa;
})(Summary = exports.Summary || (exports.Summary = {}));
var Sunglasses;
(function (Sunglasses) {
    function isa(o) {
        return smithy_client_1.isa(o, "Sunglasses");
    }
    Sunglasses.isa = isa;
})(Sunglasses = exports.Sunglasses || (exports.Sunglasses = {}));
var TestingData;
(function (TestingData) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestingData");
    }
    TestingData.isa = isa;
})(TestingData = exports.TestingData || (exports.TestingData = {}));
var TestingDataResult;
(function (TestingDataResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestingDataResult");
    }
    TestingDataResult.isa = isa;
})(TestingDataResult = exports.TestingDataResult || (exports.TestingDataResult = {}));
var TextDetection;
(function (TextDetection) {
    function isa(o) {
        return smithy_client_1.isa(o, "TextDetection");
    }
    TextDetection.isa = isa;
})(TextDetection = exports.TextDetection || (exports.TextDetection = {}));
var TextTypes;
(function (TextTypes) {
    TextTypes["LINE"] = "LINE";
    TextTypes["WORD"] = "WORD";
})(TextTypes = exports.TextTypes || (exports.TextTypes = {}));
var ThrottlingException;
(function (ThrottlingException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ThrottlingException");
    }
    ThrottlingException.isa = isa;
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var TrainingData;
(function (TrainingData) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrainingData");
    }
    TrainingData.isa = isa;
})(TrainingData = exports.TrainingData || (exports.TrainingData = {}));
var TrainingDataResult;
(function (TrainingDataResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrainingDataResult");
    }
    TrainingDataResult.isa = isa;
})(TrainingDataResult = exports.TrainingDataResult || (exports.TrainingDataResult = {}));
var UnindexedFace;
(function (UnindexedFace) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnindexedFace");
    }
    UnindexedFace.isa = isa;
})(UnindexedFace = exports.UnindexedFace || (exports.UnindexedFace = {}));
var Video;
(function (Video) {
    function isa(o) {
        return smithy_client_1.isa(o, "Video");
    }
    Video.isa = isa;
})(Video = exports.Video || (exports.Video = {}));
var VideoJobStatus;
(function (VideoJobStatus) {
    VideoJobStatus["FAILED"] = "FAILED";
    VideoJobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    VideoJobStatus["SUCCEEDED"] = "SUCCEEDED";
})(VideoJobStatus = exports.VideoJobStatus || (exports.VideoJobStatus = {}));
var VideoMetadata;
(function (VideoMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "VideoMetadata");
    }
    VideoMetadata.isa = isa;
})(VideoMetadata = exports.VideoMetadata || (exports.VideoMetadata = {}));
var VideoTooLargeException;
(function (VideoTooLargeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "VideoTooLargeException");
    }
    VideoTooLargeException.isa = isa;
})(VideoTooLargeException = exports.VideoTooLargeException || (exports.VideoTooLargeException = {}));
//# sourceMappingURL=index.js.map
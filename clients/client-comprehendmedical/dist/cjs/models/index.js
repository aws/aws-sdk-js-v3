"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var Attribute;
(function (Attribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "Attribute");
    }
    Attribute.isa = isa;
})(Attribute = exports.Attribute || (exports.Attribute = {}));
var AttributeName;
(function (AttributeName) {
    AttributeName["DIAGNOSIS"] = "DIAGNOSIS";
    AttributeName["NEGATION"] = "NEGATION";
    AttributeName["SIGN"] = "SIGN";
    AttributeName["SYMPTOM"] = "SYMPTOM";
})(AttributeName = exports.AttributeName || (exports.AttributeName = {}));
var ComprehendMedicalAsyncJobFilter;
(function (ComprehendMedicalAsyncJobFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComprehendMedicalAsyncJobFilter");
    }
    ComprehendMedicalAsyncJobFilter.isa = isa;
})(ComprehendMedicalAsyncJobFilter = exports.ComprehendMedicalAsyncJobFilter || (exports.ComprehendMedicalAsyncJobFilter = {}));
var ComprehendMedicalAsyncJobProperties;
(function (ComprehendMedicalAsyncJobProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComprehendMedicalAsyncJobProperties");
    }
    ComprehendMedicalAsyncJobProperties.isa = isa;
})(ComprehendMedicalAsyncJobProperties = exports.ComprehendMedicalAsyncJobProperties || (exports.ComprehendMedicalAsyncJobProperties = {}));
var DescribeEntitiesDetectionV2JobRequest;
(function (DescribeEntitiesDetectionV2JobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEntitiesDetectionV2JobRequest");
    }
    DescribeEntitiesDetectionV2JobRequest.isa = isa;
})(DescribeEntitiesDetectionV2JobRequest = exports.DescribeEntitiesDetectionV2JobRequest || (exports.DescribeEntitiesDetectionV2JobRequest = {}));
var DescribeEntitiesDetectionV2JobResponse;
(function (DescribeEntitiesDetectionV2JobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEntitiesDetectionV2JobResponse");
    }
    DescribeEntitiesDetectionV2JobResponse.isa = isa;
})(DescribeEntitiesDetectionV2JobResponse = exports.DescribeEntitiesDetectionV2JobResponse || (exports.DescribeEntitiesDetectionV2JobResponse = {}));
var DescribePHIDetectionJobRequest;
(function (DescribePHIDetectionJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePHIDetectionJobRequest");
    }
    DescribePHIDetectionJobRequest.isa = isa;
})(DescribePHIDetectionJobRequest = exports.DescribePHIDetectionJobRequest || (exports.DescribePHIDetectionJobRequest = {}));
var DescribePHIDetectionJobResponse;
(function (DescribePHIDetectionJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePHIDetectionJobResponse");
    }
    DescribePHIDetectionJobResponse.isa = isa;
})(DescribePHIDetectionJobResponse = exports.DescribePHIDetectionJobResponse || (exports.DescribePHIDetectionJobResponse = {}));
var DetectEntitiesRequest;
(function (DetectEntitiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectEntitiesRequest");
    }
    DetectEntitiesRequest.isa = isa;
})(DetectEntitiesRequest = exports.DetectEntitiesRequest || (exports.DetectEntitiesRequest = {}));
var DetectEntitiesResponse;
(function (DetectEntitiesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectEntitiesResponse");
    }
    DetectEntitiesResponse.isa = isa;
})(DetectEntitiesResponse = exports.DetectEntitiesResponse || (exports.DetectEntitiesResponse = {}));
var DetectEntitiesV2Request;
(function (DetectEntitiesV2Request) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectEntitiesV2Request");
    }
    DetectEntitiesV2Request.isa = isa;
})(DetectEntitiesV2Request = exports.DetectEntitiesV2Request || (exports.DetectEntitiesV2Request = {}));
var DetectEntitiesV2Response;
(function (DetectEntitiesV2Response) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectEntitiesV2Response");
    }
    DetectEntitiesV2Response.isa = isa;
})(DetectEntitiesV2Response = exports.DetectEntitiesV2Response || (exports.DetectEntitiesV2Response = {}));
var DetectPHIRequest;
(function (DetectPHIRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectPHIRequest");
    }
    DetectPHIRequest.isa = isa;
})(DetectPHIRequest = exports.DetectPHIRequest || (exports.DetectPHIRequest = {}));
var DetectPHIResponse;
(function (DetectPHIResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectPHIResponse");
    }
    DetectPHIResponse.isa = isa;
})(DetectPHIResponse = exports.DetectPHIResponse || (exports.DetectPHIResponse = {}));
var Entity;
(function (Entity) {
    function isa(o) {
        return smithy_client_1.isa(o, "Entity");
    }
    Entity.isa = isa;
})(Entity = exports.Entity || (exports.Entity = {}));
var EntitySubType;
(function (EntitySubType) {
    EntitySubType["ACUITY"] = "ACUITY";
    EntitySubType["ADDRESS"] = "ADDRESS";
    EntitySubType["AGE"] = "AGE";
    EntitySubType["BRAND_NAME"] = "BRAND_NAME";
    EntitySubType["CONTACT_POINT"] = "CONTACT_POINT";
    EntitySubType["DATE"] = "DATE";
    EntitySubType["DIRECTION"] = "DIRECTION";
    EntitySubType["DOSAGE"] = "DOSAGE";
    EntitySubType["DURATION"] = "DURATION";
    EntitySubType["EMAIL"] = "EMAIL";
    EntitySubType["FORM"] = "FORM";
    EntitySubType["FREQUENCY"] = "FREQUENCY";
    EntitySubType["GENERIC_NAME"] = "GENERIC_NAME";
    EntitySubType["IDENTIFIER"] = "IDENTIFIER";
    EntitySubType["NAME"] = "NAME";
    EntitySubType["PROCEDURE_NAME"] = "PROCEDURE_NAME";
    EntitySubType["PROFESSION"] = "PROFESSION";
    EntitySubType["QUALITY"] = "QUALITY";
    EntitySubType["QUANTITY"] = "QUANTITY";
    EntitySubType["RATE"] = "RATE";
    EntitySubType["ROUTE_OR_MODE"] = "ROUTE_OR_MODE";
    EntitySubType["STRENGTH"] = "STRENGTH";
    EntitySubType["SYSTEM_ORGAN_SITE"] = "SYSTEM_ORGAN_SITE";
    EntitySubType["TEST_NAME"] = "TEST_NAME";
    EntitySubType["TEST_UNITS"] = "TEST_UNITS";
    EntitySubType["TEST_VALUE"] = "TEST_VALUE";
    EntitySubType["TREATMENT_NAME"] = "TREATMENT_NAME";
    EntitySubType["URL"] = "URL";
})(EntitySubType = exports.EntitySubType || (exports.EntitySubType = {}));
var EntityType;
(function (EntityType) {
    EntityType["ANATOMY"] = "ANATOMY";
    EntityType["MEDICAL_CONDITION"] = "MEDICAL_CONDITION";
    EntityType["MEDICATION"] = "MEDICATION";
    EntityType["PROTECTED_HEALTH_INFORMATION"] = "PROTECTED_HEALTH_INFORMATION";
    EntityType["TEST_TREATMENT_PROCEDURE"] = "TEST_TREATMENT_PROCEDURE";
})(EntityType = exports.EntityType || (exports.EntityType = {}));
var ICD10CMAttribute;
(function (ICD10CMAttribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "ICD10CMAttribute");
    }
    ICD10CMAttribute.isa = isa;
})(ICD10CMAttribute = exports.ICD10CMAttribute || (exports.ICD10CMAttribute = {}));
var ICD10CMAttributeType;
(function (ICD10CMAttributeType) {
    ICD10CMAttributeType["ACUITY"] = "ACUITY";
    ICD10CMAttributeType["DIRECTION"] = "DIRECTION";
    ICD10CMAttributeType["QUALITY"] = "QUALITY";
    ICD10CMAttributeType["QUANTITY"] = "QUANTITY";
    ICD10CMAttributeType["SYSTEM_ORGAN_SITE"] = "SYSTEM_ORGAN_SITE";
})(ICD10CMAttributeType = exports.ICD10CMAttributeType || (exports.ICD10CMAttributeType = {}));
var ICD10CMConcept;
(function (ICD10CMConcept) {
    function isa(o) {
        return smithy_client_1.isa(o, "ICD10CMConcept");
    }
    ICD10CMConcept.isa = isa;
})(ICD10CMConcept = exports.ICD10CMConcept || (exports.ICD10CMConcept = {}));
var ICD10CMEntity;
(function (ICD10CMEntity) {
    function isa(o) {
        return smithy_client_1.isa(o, "ICD10CMEntity");
    }
    ICD10CMEntity.isa = isa;
})(ICD10CMEntity = exports.ICD10CMEntity || (exports.ICD10CMEntity = {}));
var ICD10CMEntityCategory;
(function (ICD10CMEntityCategory) {
    ICD10CMEntityCategory["MEDICAL_CONDITION"] = "MEDICAL_CONDITION";
})(ICD10CMEntityCategory = exports.ICD10CMEntityCategory || (exports.ICD10CMEntityCategory = {}));
var ICD10CMEntityType;
(function (ICD10CMEntityType) {
    ICD10CMEntityType["DX_NAME"] = "DX_NAME";
})(ICD10CMEntityType = exports.ICD10CMEntityType || (exports.ICD10CMEntityType = {}));
var ICD10CMTrait;
(function (ICD10CMTrait) {
    function isa(o) {
        return smithy_client_1.isa(o, "ICD10CMTrait");
    }
    ICD10CMTrait.isa = isa;
})(ICD10CMTrait = exports.ICD10CMTrait || (exports.ICD10CMTrait = {}));
var ICD10CMTraitName;
(function (ICD10CMTraitName) {
    ICD10CMTraitName["DIAGNOSIS"] = "DIAGNOSIS";
    ICD10CMTraitName["NEGATION"] = "NEGATION";
    ICD10CMTraitName["SIGN"] = "SIGN";
    ICD10CMTraitName["SYMPTOM"] = "SYMPTOM";
})(ICD10CMTraitName = exports.ICD10CMTraitName || (exports.ICD10CMTraitName = {}));
var InferICD10CMRequest;
(function (InferICD10CMRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "InferICD10CMRequest");
    }
    InferICD10CMRequest.isa = isa;
})(InferICD10CMRequest = exports.InferICD10CMRequest || (exports.InferICD10CMRequest = {}));
var InferICD10CMResponse;
(function (InferICD10CMResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "InferICD10CMResponse");
    }
    InferICD10CMResponse.isa = isa;
})(InferICD10CMResponse = exports.InferICD10CMResponse || (exports.InferICD10CMResponse = {}));
var InferRxNormRequest;
(function (InferRxNormRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "InferRxNormRequest");
    }
    InferRxNormRequest.isa = isa;
})(InferRxNormRequest = exports.InferRxNormRequest || (exports.InferRxNormRequest = {}));
var InferRxNormResponse;
(function (InferRxNormResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "InferRxNormResponse");
    }
    InferRxNormResponse.isa = isa;
})(InferRxNormResponse = exports.InferRxNormResponse || (exports.InferRxNormResponse = {}));
var InputDataConfig;
(function (InputDataConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputDataConfig");
    }
    InputDataConfig.isa = isa;
})(InputDataConfig = exports.InputDataConfig || (exports.InputDataConfig = {}));
var InternalServerException;
(function (InternalServerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerException");
    }
    InternalServerException.isa = isa;
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var InvalidEncodingException;
(function (InvalidEncodingException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidEncodingException");
    }
    InvalidEncodingException.isa = isa;
})(InvalidEncodingException = exports.InvalidEncodingException || (exports.InvalidEncodingException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRequestException");
    }
    InvalidRequestException.isa = isa;
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["FAILED"] = "FAILED";
    JobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    JobStatus["PARTIAL_SUCCESS"] = "PARTIAL_SUCCESS";
    JobStatus["STOPPED"] = "STOPPED";
    JobStatus["STOP_REQUESTED"] = "STOP_REQUESTED";
    JobStatus["SUBMITTED"] = "SUBMITTED";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["EN"] = "en";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));
var ListEntitiesDetectionV2JobsRequest;
(function (ListEntitiesDetectionV2JobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListEntitiesDetectionV2JobsRequest");
    }
    ListEntitiesDetectionV2JobsRequest.isa = isa;
})(ListEntitiesDetectionV2JobsRequest = exports.ListEntitiesDetectionV2JobsRequest || (exports.ListEntitiesDetectionV2JobsRequest = {}));
var ListEntitiesDetectionV2JobsResponse;
(function (ListEntitiesDetectionV2JobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListEntitiesDetectionV2JobsResponse");
    }
    ListEntitiesDetectionV2JobsResponse.isa = isa;
})(ListEntitiesDetectionV2JobsResponse = exports.ListEntitiesDetectionV2JobsResponse || (exports.ListEntitiesDetectionV2JobsResponse = {}));
var ListPHIDetectionJobsRequest;
(function (ListPHIDetectionJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPHIDetectionJobsRequest");
    }
    ListPHIDetectionJobsRequest.isa = isa;
})(ListPHIDetectionJobsRequest = exports.ListPHIDetectionJobsRequest || (exports.ListPHIDetectionJobsRequest = {}));
var ListPHIDetectionJobsResponse;
(function (ListPHIDetectionJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPHIDetectionJobsResponse");
    }
    ListPHIDetectionJobsResponse.isa = isa;
})(ListPHIDetectionJobsResponse = exports.ListPHIDetectionJobsResponse || (exports.ListPHIDetectionJobsResponse = {}));
var OutputDataConfig;
(function (OutputDataConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "OutputDataConfig");
    }
    OutputDataConfig.isa = isa;
})(OutputDataConfig = exports.OutputDataConfig || (exports.OutputDataConfig = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var RxNormAttribute;
(function (RxNormAttribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "RxNormAttribute");
    }
    RxNormAttribute.isa = isa;
})(RxNormAttribute = exports.RxNormAttribute || (exports.RxNormAttribute = {}));
var RxNormAttributeType;
(function (RxNormAttributeType) {
    RxNormAttributeType["DOSAGE"] = "DOSAGE";
    RxNormAttributeType["DURATION"] = "DURATION";
    RxNormAttributeType["FORM"] = "FORM";
    RxNormAttributeType["FREQUENCY"] = "FREQUENCY";
    RxNormAttributeType["RATE"] = "RATE";
    RxNormAttributeType["ROUTE_OR_MODE"] = "ROUTE_OR_MODE";
    RxNormAttributeType["STRENGTH"] = "STRENGTH";
})(RxNormAttributeType = exports.RxNormAttributeType || (exports.RxNormAttributeType = {}));
var RxNormConcept;
(function (RxNormConcept) {
    function isa(o) {
        return smithy_client_1.isa(o, "RxNormConcept");
    }
    RxNormConcept.isa = isa;
})(RxNormConcept = exports.RxNormConcept || (exports.RxNormConcept = {}));
var RxNormEntity;
(function (RxNormEntity) {
    function isa(o) {
        return smithy_client_1.isa(o, "RxNormEntity");
    }
    RxNormEntity.isa = isa;
})(RxNormEntity = exports.RxNormEntity || (exports.RxNormEntity = {}));
var RxNormEntityCategory;
(function (RxNormEntityCategory) {
    RxNormEntityCategory["MEDICATION"] = "MEDICATION";
})(RxNormEntityCategory = exports.RxNormEntityCategory || (exports.RxNormEntityCategory = {}));
var RxNormEntityType;
(function (RxNormEntityType) {
    RxNormEntityType["BRAND_NAME"] = "BRAND_NAME";
    RxNormEntityType["GENERIC_NAME"] = "GENERIC_NAME";
})(RxNormEntityType = exports.RxNormEntityType || (exports.RxNormEntityType = {}));
var RxNormTrait;
(function (RxNormTrait) {
    function isa(o) {
        return smithy_client_1.isa(o, "RxNormTrait");
    }
    RxNormTrait.isa = isa;
})(RxNormTrait = exports.RxNormTrait || (exports.RxNormTrait = {}));
var RxNormTraitName;
(function (RxNormTraitName) {
    RxNormTraitName["NEGATION"] = "NEGATION";
})(RxNormTraitName = exports.RxNormTraitName || (exports.RxNormTraitName = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceUnavailableException");
    }
    ServiceUnavailableException.isa = isa;
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var StartEntitiesDetectionV2JobRequest;
(function (StartEntitiesDetectionV2JobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartEntitiesDetectionV2JobRequest");
    }
    StartEntitiesDetectionV2JobRequest.isa = isa;
})(StartEntitiesDetectionV2JobRequest = exports.StartEntitiesDetectionV2JobRequest || (exports.StartEntitiesDetectionV2JobRequest = {}));
var StartEntitiesDetectionV2JobResponse;
(function (StartEntitiesDetectionV2JobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartEntitiesDetectionV2JobResponse");
    }
    StartEntitiesDetectionV2JobResponse.isa = isa;
})(StartEntitiesDetectionV2JobResponse = exports.StartEntitiesDetectionV2JobResponse || (exports.StartEntitiesDetectionV2JobResponse = {}));
var StartPHIDetectionJobRequest;
(function (StartPHIDetectionJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartPHIDetectionJobRequest");
    }
    StartPHIDetectionJobRequest.isa = isa;
})(StartPHIDetectionJobRequest = exports.StartPHIDetectionJobRequest || (exports.StartPHIDetectionJobRequest = {}));
var StartPHIDetectionJobResponse;
(function (StartPHIDetectionJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartPHIDetectionJobResponse");
    }
    StartPHIDetectionJobResponse.isa = isa;
})(StartPHIDetectionJobResponse = exports.StartPHIDetectionJobResponse || (exports.StartPHIDetectionJobResponse = {}));
var StopEntitiesDetectionV2JobRequest;
(function (StopEntitiesDetectionV2JobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopEntitiesDetectionV2JobRequest");
    }
    StopEntitiesDetectionV2JobRequest.isa = isa;
})(StopEntitiesDetectionV2JobRequest = exports.StopEntitiesDetectionV2JobRequest || (exports.StopEntitiesDetectionV2JobRequest = {}));
var StopEntitiesDetectionV2JobResponse;
(function (StopEntitiesDetectionV2JobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopEntitiesDetectionV2JobResponse");
    }
    StopEntitiesDetectionV2JobResponse.isa = isa;
})(StopEntitiesDetectionV2JobResponse = exports.StopEntitiesDetectionV2JobResponse || (exports.StopEntitiesDetectionV2JobResponse = {}));
var StopPHIDetectionJobRequest;
(function (StopPHIDetectionJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopPHIDetectionJobRequest");
    }
    StopPHIDetectionJobRequest.isa = isa;
})(StopPHIDetectionJobRequest = exports.StopPHIDetectionJobRequest || (exports.StopPHIDetectionJobRequest = {}));
var StopPHIDetectionJobResponse;
(function (StopPHIDetectionJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopPHIDetectionJobResponse");
    }
    StopPHIDetectionJobResponse.isa = isa;
})(StopPHIDetectionJobResponse = exports.StopPHIDetectionJobResponse || (exports.StopPHIDetectionJobResponse = {}));
var TextSizeLimitExceededException;
(function (TextSizeLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TextSizeLimitExceededException");
    }
    TextSizeLimitExceededException.isa = isa;
})(TextSizeLimitExceededException = exports.TextSizeLimitExceededException || (exports.TextSizeLimitExceededException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyRequestsException");
    }
    TooManyRequestsException.isa = isa;
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var Trait;
(function (Trait) {
    function isa(o) {
        return smithy_client_1.isa(o, "Trait");
    }
    Trait.isa = isa;
})(Trait = exports.Trait || (exports.Trait = {}));
var UnmappedAttribute;
(function (UnmappedAttribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnmappedAttribute");
    }
    UnmappedAttribute.isa = isa;
})(UnmappedAttribute = exports.UnmappedAttribute || (exports.UnmappedAttribute = {}));
var ValidationException;
(function (ValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidationException");
    }
    ValidationException.isa = isa;
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
//# sourceMappingURL=index.js.map
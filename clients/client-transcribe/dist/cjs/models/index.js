"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
var CreateVocabularyFilterRequest;
(function (CreateVocabularyFilterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVocabularyFilterRequest");
    }
    CreateVocabularyFilterRequest.isa = isa;
})(CreateVocabularyFilterRequest = exports.CreateVocabularyFilterRequest || (exports.CreateVocabularyFilterRequest = {}));
var CreateVocabularyFilterResponse;
(function (CreateVocabularyFilterResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVocabularyFilterResponse");
    }
    CreateVocabularyFilterResponse.isa = isa;
})(CreateVocabularyFilterResponse = exports.CreateVocabularyFilterResponse || (exports.CreateVocabularyFilterResponse = {}));
var CreateVocabularyRequest;
(function (CreateVocabularyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVocabularyRequest");
    }
    CreateVocabularyRequest.isa = isa;
})(CreateVocabularyRequest = exports.CreateVocabularyRequest || (exports.CreateVocabularyRequest = {}));
var CreateVocabularyResponse;
(function (CreateVocabularyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVocabularyResponse");
    }
    CreateVocabularyResponse.isa = isa;
})(CreateVocabularyResponse = exports.CreateVocabularyResponse || (exports.CreateVocabularyResponse = {}));
var DeleteTranscriptionJobRequest;
(function (DeleteTranscriptionJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTranscriptionJobRequest");
    }
    DeleteTranscriptionJobRequest.isa = isa;
})(DeleteTranscriptionJobRequest = exports.DeleteTranscriptionJobRequest || (exports.DeleteTranscriptionJobRequest = {}));
var DeleteVocabularyFilterRequest;
(function (DeleteVocabularyFilterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVocabularyFilterRequest");
    }
    DeleteVocabularyFilterRequest.isa = isa;
})(DeleteVocabularyFilterRequest = exports.DeleteVocabularyFilterRequest || (exports.DeleteVocabularyFilterRequest = {}));
var DeleteVocabularyRequest;
(function (DeleteVocabularyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVocabularyRequest");
    }
    DeleteVocabularyRequest.isa = isa;
})(DeleteVocabularyRequest = exports.DeleteVocabularyRequest || (exports.DeleteVocabularyRequest = {}));
var GetTranscriptionJobRequest;
(function (GetTranscriptionJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTranscriptionJobRequest");
    }
    GetTranscriptionJobRequest.isa = isa;
})(GetTranscriptionJobRequest = exports.GetTranscriptionJobRequest || (exports.GetTranscriptionJobRequest = {}));
var GetTranscriptionJobResponse;
(function (GetTranscriptionJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTranscriptionJobResponse");
    }
    GetTranscriptionJobResponse.isa = isa;
})(GetTranscriptionJobResponse = exports.GetTranscriptionJobResponse || (exports.GetTranscriptionJobResponse = {}));
var GetVocabularyFilterRequest;
(function (GetVocabularyFilterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetVocabularyFilterRequest");
    }
    GetVocabularyFilterRequest.isa = isa;
})(GetVocabularyFilterRequest = exports.GetVocabularyFilterRequest || (exports.GetVocabularyFilterRequest = {}));
var GetVocabularyFilterResponse;
(function (GetVocabularyFilterResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetVocabularyFilterResponse");
    }
    GetVocabularyFilterResponse.isa = isa;
})(GetVocabularyFilterResponse = exports.GetVocabularyFilterResponse || (exports.GetVocabularyFilterResponse = {}));
var GetVocabularyRequest;
(function (GetVocabularyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetVocabularyRequest");
    }
    GetVocabularyRequest.isa = isa;
})(GetVocabularyRequest = exports.GetVocabularyRequest || (exports.GetVocabularyRequest = {}));
var GetVocabularyResponse;
(function (GetVocabularyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetVocabularyResponse");
    }
    GetVocabularyResponse.isa = isa;
})(GetVocabularyResponse = exports.GetVocabularyResponse || (exports.GetVocabularyResponse = {}));
var InternalFailureException;
(function (InternalFailureException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalFailureException");
    }
    InternalFailureException.isa = isa;
})(InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {}));
var JobExecutionSettings;
(function (JobExecutionSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobExecutionSettings");
    }
    JobExecutionSettings.isa = isa;
})(JobExecutionSettings = exports.JobExecutionSettings || (exports.JobExecutionSettings = {}));
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["AR_AE"] = "ar-AE";
    LanguageCode["AR_SA"] = "ar-SA";
    LanguageCode["DE_CH"] = "de-CH";
    LanguageCode["DE_DE"] = "de-DE";
    LanguageCode["EN_AB"] = "en-AB";
    LanguageCode["EN_AU"] = "en-AU";
    LanguageCode["EN_GB"] = "en-GB";
    LanguageCode["EN_IE"] = "en-IE";
    LanguageCode["EN_IN"] = "en-IN";
    LanguageCode["EN_US"] = "en-US";
    LanguageCode["EN_WL"] = "en-WL";
    LanguageCode["ES_ES"] = "es-ES";
    LanguageCode["ES_US"] = "es-US";
    LanguageCode["FA_IR"] = "fa-IR";
    LanguageCode["FR_CA"] = "fr-CA";
    LanguageCode["FR_FR"] = "fr-FR";
    LanguageCode["HE_IL"] = "he-IL";
    LanguageCode["HI_IN"] = "hi-IN";
    LanguageCode["ID_ID"] = "id-ID";
    LanguageCode["IT_IT"] = "it-IT";
    LanguageCode["JA_JP"] = "ja-JP";
    LanguageCode["KO_KR"] = "ko-KR";
    LanguageCode["MS_MY"] = "ms-MY";
    LanguageCode["NL_NL"] = "nl-NL";
    LanguageCode["PT_BR"] = "pt-BR";
    LanguageCode["PT_PT"] = "pt-PT";
    LanguageCode["RU_RU"] = "ru-RU";
    LanguageCode["TA_IN"] = "ta-IN";
    LanguageCode["TE_IN"] = "te-IN";
    LanguageCode["TR_TR"] = "tr-TR";
    LanguageCode["ZH_CN"] = "zh-CN";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListTranscriptionJobsRequest;
(function (ListTranscriptionJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTranscriptionJobsRequest");
    }
    ListTranscriptionJobsRequest.isa = isa;
})(ListTranscriptionJobsRequest = exports.ListTranscriptionJobsRequest || (exports.ListTranscriptionJobsRequest = {}));
var ListTranscriptionJobsResponse;
(function (ListTranscriptionJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTranscriptionJobsResponse");
    }
    ListTranscriptionJobsResponse.isa = isa;
})(ListTranscriptionJobsResponse = exports.ListTranscriptionJobsResponse || (exports.ListTranscriptionJobsResponse = {}));
var ListVocabulariesRequest;
(function (ListVocabulariesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListVocabulariesRequest");
    }
    ListVocabulariesRequest.isa = isa;
})(ListVocabulariesRequest = exports.ListVocabulariesRequest || (exports.ListVocabulariesRequest = {}));
var ListVocabulariesResponse;
(function (ListVocabulariesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListVocabulariesResponse");
    }
    ListVocabulariesResponse.isa = isa;
})(ListVocabulariesResponse = exports.ListVocabulariesResponse || (exports.ListVocabulariesResponse = {}));
var ListVocabularyFiltersRequest;
(function (ListVocabularyFiltersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListVocabularyFiltersRequest");
    }
    ListVocabularyFiltersRequest.isa = isa;
})(ListVocabularyFiltersRequest = exports.ListVocabularyFiltersRequest || (exports.ListVocabularyFiltersRequest = {}));
var ListVocabularyFiltersResponse;
(function (ListVocabularyFiltersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListVocabularyFiltersResponse");
    }
    ListVocabularyFiltersResponse.isa = isa;
})(ListVocabularyFiltersResponse = exports.ListVocabularyFiltersResponse || (exports.ListVocabularyFiltersResponse = {}));
var Media;
(function (Media) {
    function isa(o) {
        return smithy_client_1.isa(o, "Media");
    }
    Media.isa = isa;
})(Media = exports.Media || (exports.Media = {}));
var MediaFormat;
(function (MediaFormat) {
    MediaFormat["FLAC"] = "flac";
    MediaFormat["MP3"] = "mp3";
    MediaFormat["MP4"] = "mp4";
    MediaFormat["WAV"] = "wav";
})(MediaFormat = exports.MediaFormat || (exports.MediaFormat = {}));
var NotFoundException;
(function (NotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotFoundException");
    }
    NotFoundException.isa = isa;
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var OutputLocationType;
(function (OutputLocationType) {
    OutputLocationType["CUSTOMER_BUCKET"] = "CUSTOMER_BUCKET";
    OutputLocationType["SERVICE_BUCKET"] = "SERVICE_BUCKET";
})(OutputLocationType = exports.OutputLocationType || (exports.OutputLocationType = {}));
var Settings;
(function (Settings) {
    function isa(o) {
        return smithy_client_1.isa(o, "Settings");
    }
    Settings.isa = isa;
})(Settings = exports.Settings || (exports.Settings = {}));
var StartTranscriptionJobRequest;
(function (StartTranscriptionJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartTranscriptionJobRequest");
    }
    StartTranscriptionJobRequest.isa = isa;
})(StartTranscriptionJobRequest = exports.StartTranscriptionJobRequest || (exports.StartTranscriptionJobRequest = {}));
var StartTranscriptionJobResponse;
(function (StartTranscriptionJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartTranscriptionJobResponse");
    }
    StartTranscriptionJobResponse.isa = isa;
})(StartTranscriptionJobResponse = exports.StartTranscriptionJobResponse || (exports.StartTranscriptionJobResponse = {}));
var Transcript;
(function (Transcript) {
    function isa(o) {
        return smithy_client_1.isa(o, "Transcript");
    }
    Transcript.isa = isa;
})(Transcript = exports.Transcript || (exports.Transcript = {}));
var TranscriptionJob;
(function (TranscriptionJob) {
    function isa(o) {
        return smithy_client_1.isa(o, "TranscriptionJob");
    }
    TranscriptionJob.isa = isa;
})(TranscriptionJob = exports.TranscriptionJob || (exports.TranscriptionJob = {}));
var TranscriptionJobStatus;
(function (TranscriptionJobStatus) {
    TranscriptionJobStatus["COMPLETED"] = "COMPLETED";
    TranscriptionJobStatus["FAILED"] = "FAILED";
    TranscriptionJobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TranscriptionJobStatus["QUEUED"] = "QUEUED";
})(TranscriptionJobStatus = exports.TranscriptionJobStatus || (exports.TranscriptionJobStatus = {}));
var TranscriptionJobSummary;
(function (TranscriptionJobSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TranscriptionJobSummary");
    }
    TranscriptionJobSummary.isa = isa;
})(TranscriptionJobSummary = exports.TranscriptionJobSummary || (exports.TranscriptionJobSummary = {}));
var UpdateVocabularyFilterRequest;
(function (UpdateVocabularyFilterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateVocabularyFilterRequest");
    }
    UpdateVocabularyFilterRequest.isa = isa;
})(UpdateVocabularyFilterRequest = exports.UpdateVocabularyFilterRequest || (exports.UpdateVocabularyFilterRequest = {}));
var UpdateVocabularyFilterResponse;
(function (UpdateVocabularyFilterResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateVocabularyFilterResponse");
    }
    UpdateVocabularyFilterResponse.isa = isa;
})(UpdateVocabularyFilterResponse = exports.UpdateVocabularyFilterResponse || (exports.UpdateVocabularyFilterResponse = {}));
var UpdateVocabularyRequest;
(function (UpdateVocabularyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateVocabularyRequest");
    }
    UpdateVocabularyRequest.isa = isa;
})(UpdateVocabularyRequest = exports.UpdateVocabularyRequest || (exports.UpdateVocabularyRequest = {}));
var UpdateVocabularyResponse;
(function (UpdateVocabularyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateVocabularyResponse");
    }
    UpdateVocabularyResponse.isa = isa;
})(UpdateVocabularyResponse = exports.UpdateVocabularyResponse || (exports.UpdateVocabularyResponse = {}));
var VocabularyFilterInfo;
(function (VocabularyFilterInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "VocabularyFilterInfo");
    }
    VocabularyFilterInfo.isa = isa;
})(VocabularyFilterInfo = exports.VocabularyFilterInfo || (exports.VocabularyFilterInfo = {}));
var VocabularyFilterMethod;
(function (VocabularyFilterMethod) {
    VocabularyFilterMethod["MASK"] = "mask";
    VocabularyFilterMethod["REMOVE"] = "remove";
})(VocabularyFilterMethod = exports.VocabularyFilterMethod || (exports.VocabularyFilterMethod = {}));
var VocabularyInfo;
(function (VocabularyInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "VocabularyInfo");
    }
    VocabularyInfo.isa = isa;
})(VocabularyInfo = exports.VocabularyInfo || (exports.VocabularyInfo = {}));
var VocabularyState;
(function (VocabularyState) {
    VocabularyState["FAILED"] = "FAILED";
    VocabularyState["PENDING"] = "PENDING";
    VocabularyState["READY"] = "READY";
})(VocabularyState = exports.VocabularyState || (exports.VocabularyState = {}));
//# sourceMappingURL=index.js.map
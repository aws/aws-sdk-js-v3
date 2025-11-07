export const _ADE = "AccessDeniedException";
export const _AS = "AuthorizationStrategy";
export const _CA = "CreatedAfter";
export const _CAr = "CreatedAt";
export const _CB = "CreatedBefore";
export const _CE = "ConflictException";
export const _CFHIRD = "CreateFHIRDatastore";
export const _CFHIRDR = "CreateFHIRDatastoreRequest";
export const _CFHIRDRr = "CreateFHIRDatastoreResponse";
export const _CT = "ClientToken";
export const _CTm = "CmkType";
export const _DA = "DatastoreArn";
export const _DARA = "DataAccessRoleArn";
export const _DE = "DatastoreEndpoint";
export const _DF = "DatastoreFilter";
export const _DFHIRD = "DeleteFHIRDatastore";
export const _DFHIRDR = "DeleteFHIRDatastoreRequest";
export const _DFHIRDRe = "DeleteFHIRDatastoreResponse";
export const _DFHIRDRes = "DescribeFHIRDatastoreRequest";
export const _DFHIRDResc = "DescribeFHIRDatastoreResponse";
export const _DFHIRDe = "DescribeFHIRDatastore";
export const _DFHIREJ = "DescribeFHIRExportJob";
export const _DFHIREJR = "DescribeFHIRExportJobRequest";
export const _DFHIREJRe = "DescribeFHIRExportJobResponse";
export const _DFHIRIJ = "DescribeFHIRImportJob";
export const _DFHIRIJR = "DescribeFHIRImportJobRequest";
export const _DFHIRIJRe = "DescribeFHIRImportJobResponse";
export const _DI = "DatastoreId";
export const _DN = "DatastoreName";
export const _DP = "DatastoreProperties";
export const _DPL = "DatastorePropertiesList";
export const _DS = "DatastoreStatus";
export const _DTV = "DatastoreTypeVersion";
export const _EC = "ErrorCause";
export const _ECr = "ErrorCategory";
export const _EJP = "ExportJobProperties";
export const _EJPL = "ExportJobPropertiesList";
export const _EM = "ErrorMessage";
export const _ET = "EndTime";
export const _F = "Filter";
export const _FGAE = "FineGrainedAuthorizationEnabled";
export const _IDC = "InputDataConfig";
export const _IJP = "ImportJobProperties";
export const _IJPL = "ImportJobPropertiesList";
export const _ILA = "IdpLambdaArn";
export const _IPC = "IdentityProviderConfiguration";
export const _ISE = "InternalServerException";
export const _JI = "JobId";
export const _JN = "JobName";
export const _JODC = "JobOutputDataConfig";
export const _JPR = "JobProgressReport";
export const _JS = "JobStatus";
export const _K = "Key";
export const _KEC = "KmsEncryptionConfig";
export const _KKI = "KmsKeyId";
export const _LFHIRD = "ListFHIRDatastores";
export const _LFHIRDR = "ListFHIRDatastoresRequest";
export const _LFHIRDRi = "ListFHIRDatastoresResponse";
export const _LFHIREJ = "ListFHIRExportJobs";
export const _LFHIREJR = "ListFHIRExportJobsRequest";
export const _LFHIREJRi = "ListFHIRExportJobsResponse";
export const _LFHIRIJ = "ListFHIRImportJobs";
export const _LFHIRIJR = "ListFHIRImportJobsRequest";
export const _LFHIRIJRi = "ListFHIRImportJobsResponse";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _M = "Message";
export const _MR = "MaxResults";
export const _Me = "Metadata";
export const _NT = "NextToken";
export const _ODC = "OutputDataConfig";
export const _PDC = "PreloadDataConfig";
export const _PDT = "PreloadDataType";
export const _RARN = "ResourceARN";
export const _RNFE = "ResourceNotFoundException";
export const _SA = "SubmittedAfter";
export const _SB = "SubmittedBefore";
export const _SC = "SseConfiguration";
export const _SCo = "S3Configuration";
export const _SFHIREJ = "StartFHIRExportJob";
export const _SFHIREJR = "StartFHIRExportJobRequest";
export const _SFHIREJRt = "StartFHIRExportJobResponse";
export const _SFHIRIJ = "StartFHIRImportJob";
export const _SFHIRIJR = "StartFHIRImportJobRequest";
export const _SFHIRIJRt = "StartFHIRImportJobResponse";
export const _ST = "SubmitTime";
export const _SU = "S3Uri";
export const _T = "Tags";
export const _TE = "ThrottlingException";
export const _TK = "TagKeys";
export const _TL = "TagList";
export const _TNOFRWCE = "TotalNumberOfFilesReadWithCustomerError";
export const _TNOIF = "TotalNumberOfImportedFiles";
export const _TNORI = "TotalNumberOfResourcesImported";
export const _TNORS = "TotalNumberOfResourcesScanned";
export const _TNORWCE = "TotalNumberOfResourcesWithCustomerError";
export const _TNOSF = "TotalNumberOfScannedFiles";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _TSOSFIMB = "TotalSizeOfScannedFilesInMB";
export const _Ta = "Tag";
export const _Th = "Throughput";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _V = "Value";
export const _VE = "ValidationException";
export const _VL = "ValidationLevel";
export const _c = "client";
export const _e = "error";
export const _hE = "httpError";
export const _s = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.healthlake";
export const n0 = "com.amazonaws.healthlake";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { HealthLakeServiceException as __HealthLakeServiceException } from "../models/HealthLakeServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CreateFHIRDatastoreRequest: StaticStructureSchema = [
  3,
  n0,
  _CFHIRDR,
  0,
  [_DN, _DTV, _SC, _PDC, _CT, _T, _IPC],
  [0, 0, () => SseConfiguration, () => PreloadDataConfig, [0, 4], () => TagList, () => IdentityProviderConfiguration],
];
export var CreateFHIRDatastoreResponse: StaticStructureSchema = [
  3,
  n0,
  _CFHIRDRr,
  0,
  [_DI, _DA, _DS, _DE],
  [0, 0, 0, 0],
];
export var DatastoreFilter: StaticStructureSchema = [3, n0, _DF, 0, [_DN, _DS, _CB, _CA], [0, 0, 4, 4]];
export var DatastoreProperties: StaticStructureSchema = [
  3,
  n0,
  _DP,
  0,
  [_DI, _DA, _DN, _DS, _CAr, _DTV, _DE, _SC, _PDC, _IPC, _EC],
  [
    0,
    0,
    0,
    0,
    4,
    0,
    0,
    () => SseConfiguration,
    () => PreloadDataConfig,
    () => IdentityProviderConfiguration,
    () => ErrorCause,
  ],
];
export var DeleteFHIRDatastoreRequest: StaticStructureSchema = [3, n0, _DFHIRDR, 0, [_DI], [0]];
export var DeleteFHIRDatastoreResponse: StaticStructureSchema = [
  3,
  n0,
  _DFHIRDRe,
  0,
  [_DI, _DA, _DS, _DE],
  [0, 0, 0, 0],
];
export var DescribeFHIRDatastoreRequest: StaticStructureSchema = [3, n0, _DFHIRDRes, 0, [_DI], [0]];
export var DescribeFHIRDatastoreResponse: StaticStructureSchema = [
  3,
  n0,
  _DFHIRDResc,
  0,
  [_DP],
  [() => DatastoreProperties],
];
export var DescribeFHIRExportJobRequest: StaticStructureSchema = [3, n0, _DFHIREJR, 0, [_DI, _JI], [0, 0]];
export var DescribeFHIRExportJobResponse: StaticStructureSchema = [
  3,
  n0,
  _DFHIREJRe,
  0,
  [_EJP],
  [() => ExportJobProperties],
];
export var DescribeFHIRImportJobRequest: StaticStructureSchema = [3, n0, _DFHIRIJR, 0, [_DI, _JI], [0, 0]];
export var DescribeFHIRImportJobResponse: StaticStructureSchema = [
  3,
  n0,
  _DFHIRIJRe,
  0,
  [_IJP],
  [() => ImportJobProperties],
];
export var ErrorCause: StaticStructureSchema = [3, n0, _EC, 0, [_EM, _ECr], [0, 0]];
export var ExportJobProperties: StaticStructureSchema = [
  3,
  n0,
  _EJP,
  0,
  [_JI, _JN, _JS, _ST, _ET, _DI, _ODC, _DARA, _M],
  [0, 0, 0, 4, 4, 0, () => OutputDataConfig, 0, 0],
];
export var IdentityProviderConfiguration: StaticStructureSchema = [
  3,
  n0,
  _IPC,
  0,
  [_AS, _FGAE, _Me, _ILA],
  [0, 2, 0, 0],
];
export var ImportJobProperties: StaticStructureSchema = [
  3,
  n0,
  _IJP,
  0,
  [_JI, _JN, _JS, _ST, _ET, _DI, _IDC, _JODC, _JPR, _DARA, _M, _VL],
  [0, 0, 0, 4, 4, 0, () => InputDataConfig, () => OutputDataConfig, () => JobProgressReport, 0, 0, 0],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var JobProgressReport: StaticStructureSchema = [
  3,
  n0,
  _JPR,
  0,
  [_TNOSF, _TSOSFIMB, _TNOIF, _TNORS, _TNORI, _TNORWCE, _TNOFRWCE, _Th],
  [1, 1, 1, 1, 1, 1, 1, 1],
];
export var KmsEncryptionConfig: StaticStructureSchema = [3, n0, _KEC, 0, [_CTm, _KKI], [0, 0]];
export var ListFHIRDatastoresRequest: StaticStructureSchema = [
  3,
  n0,
  _LFHIRDR,
  0,
  [_F, _NT, _MR],
  [() => DatastoreFilter, 0, 1],
];
export var ListFHIRDatastoresResponse: StaticStructureSchema = [
  3,
  n0,
  _LFHIRDRi,
  0,
  [_DPL, _NT],
  [() => DatastorePropertiesList, 0],
];
export var ListFHIRExportJobsRequest: StaticStructureSchema = [
  3,
  n0,
  _LFHIREJR,
  0,
  [_DI, _NT, _MR, _JN, _JS, _SB, _SA],
  [0, 0, 1, 0, 0, 4, 4],
];
export var ListFHIRExportJobsResponse: StaticStructureSchema = [
  3,
  n0,
  _LFHIREJRi,
  0,
  [_EJPL, _NT],
  [() => ExportJobPropertiesList, 0],
];
export var ListFHIRImportJobsRequest: StaticStructureSchema = [
  3,
  n0,
  _LFHIRIJR,
  0,
  [_DI, _NT, _MR, _JN, _JS, _SB, _SA],
  [0, 0, 1, 0, 0, 4, 4],
];
export var ListFHIRImportJobsResponse: StaticStructureSchema = [
  3,
  n0,
  _LFHIRIJRi,
  0,
  [_IJPL, _NT],
  [() => ImportJobPropertiesList, 0],
];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RARN], [0]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_T], [() => TagList]];
export var PreloadDataConfig: StaticStructureSchema = [3, n0, _PDC, 0, [_PDT], [0]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var S3Configuration: StaticStructureSchema = [3, n0, _SCo, 0, [_SU, _KKI], [0, 0]];
export var SseConfiguration: StaticStructureSchema = [3, n0, _SC, 0, [_KEC], [() => KmsEncryptionConfig]];
export var StartFHIRExportJobRequest: StaticStructureSchema = [
  3,
  n0,
  _SFHIREJR,
  0,
  [_JN, _ODC, _DI, _DARA, _CT],
  [0, () => OutputDataConfig, 0, 0, [0, 4]],
];
export var StartFHIRExportJobResponse: StaticStructureSchema = [3, n0, _SFHIREJRt, 0, [_JI, _JS, _DI], [0, 0, 0]];
export var StartFHIRImportJobRequest: StaticStructureSchema = [
  3,
  n0,
  _SFHIRIJR,
  0,
  [_JN, _IDC, _JODC, _DI, _DARA, _CT, _VL],
  [0, () => InputDataConfig, () => OutputDataConfig, 0, 0, [0, 4], 0],
];
export var StartFHIRImportJobResponse: StaticStructureSchema = [3, n0, _SFHIRIJRt, 0, [_JI, _JS, _DI], [0, 0, 0]];
export var Tag: StaticStructureSchema = [3, n0, _Ta, 0, [_K, _V], [0, 0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_RARN, _T], [0, () => TagList]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var __Unit = "unit" as const;

export var HealthLakeServiceException: StaticErrorSchema = [-3, _sm, "HealthLakeServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(HealthLakeServiceException, __HealthLakeServiceException);

export var DatastorePropertiesList: StaticListSchema = [1, n0, _DPL, 0, () => DatastoreProperties];
export var ExportJobPropertiesList: StaticListSchema = [1, n0, _EJPL, 0, () => ExportJobProperties];
export var ImportJobPropertiesList: StaticListSchema = [1, n0, _IJPL, 0, () => ImportJobProperties];
export var TagKeyList = 64 | 0;

export var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag];
export var InputDataConfig: StaticStructureSchema = [3, n0, _IDC, 0, [_SU], [0]];
export var OutputDataConfig: StaticStructureSchema = [3, n0, _ODC, 0, [_SCo], [() => S3Configuration]];
export var CreateFHIRDatastore: StaticOperationSchema = [
  9,
  n0,
  _CFHIRD,
  0,
  () => CreateFHIRDatastoreRequest,
  () => CreateFHIRDatastoreResponse,
];
export var DeleteFHIRDatastore: StaticOperationSchema = [
  9,
  n0,
  _DFHIRD,
  0,
  () => DeleteFHIRDatastoreRequest,
  () => DeleteFHIRDatastoreResponse,
];
export var DescribeFHIRDatastore: StaticOperationSchema = [
  9,
  n0,
  _DFHIRDe,
  0,
  () => DescribeFHIRDatastoreRequest,
  () => DescribeFHIRDatastoreResponse,
];
export var DescribeFHIRExportJob: StaticOperationSchema = [
  9,
  n0,
  _DFHIREJ,
  0,
  () => DescribeFHIRExportJobRequest,
  () => DescribeFHIRExportJobResponse,
];
export var DescribeFHIRImportJob: StaticOperationSchema = [
  9,
  n0,
  _DFHIRIJ,
  0,
  () => DescribeFHIRImportJobRequest,
  () => DescribeFHIRImportJobResponse,
];
export var ListFHIRDatastores: StaticOperationSchema = [
  9,
  n0,
  _LFHIRD,
  0,
  () => ListFHIRDatastoresRequest,
  () => ListFHIRDatastoresResponse,
];
export var ListFHIRExportJobs: StaticOperationSchema = [
  9,
  n0,
  _LFHIREJ,
  0,
  () => ListFHIRExportJobsRequest,
  () => ListFHIRExportJobsResponse,
];
export var ListFHIRImportJobs: StaticOperationSchema = [
  9,
  n0,
  _LFHIRIJ,
  0,
  () => ListFHIRImportJobsRequest,
  () => ListFHIRImportJobsResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var StartFHIRExportJob: StaticOperationSchema = [
  9,
  n0,
  _SFHIREJ,
  0,
  () => StartFHIRExportJobRequest,
  () => StartFHIRExportJobResponse,
];
export var StartFHIRImportJob: StaticOperationSchema = [
  9,
  n0,
  _SFHIRIJ,
  0,
  () => StartFHIRImportJobRequest,
  () => StartFHIRImportJobResponse,
];
export var TagResource: StaticOperationSchema = [9, n0, _TR, 0, () => TagResourceRequest, () => TagResourceResponse];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];

const _ADE = "AccessDeniedException";
const _AS = "AuthorizationStrategy";
const _CA = "CreatedAfter";
const _CAr = "CreatedAt";
const _CB = "CreatedBefore";
const _CE = "ConflictException";
const _CFHIRD = "CreateFHIRDatastore";
const _CFHIRDR = "CreateFHIRDatastoreRequest";
const _CFHIRDRr = "CreateFHIRDatastoreResponse";
const _CT = "ClientToken";
const _CTm = "CmkType";
const _DA = "DatastoreArn";
const _DARA = "DataAccessRoleArn";
const _DE = "DatastoreEndpoint";
const _DF = "DatastoreFilter";
const _DFHIRD = "DeleteFHIRDatastore";
const _DFHIRDR = "DeleteFHIRDatastoreRequest";
const _DFHIRDRe = "DeleteFHIRDatastoreResponse";
const _DFHIRDRes = "DescribeFHIRDatastoreRequest";
const _DFHIRDResc = "DescribeFHIRDatastoreResponse";
const _DFHIRDe = "DescribeFHIRDatastore";
const _DFHIREJ = "DescribeFHIRExportJob";
const _DFHIREJR = "DescribeFHIRExportJobRequest";
const _DFHIREJRe = "DescribeFHIRExportJobResponse";
const _DFHIRIJ = "DescribeFHIRImportJob";
const _DFHIRIJR = "DescribeFHIRImportJobRequest";
const _DFHIRIJRe = "DescribeFHIRImportJobResponse";
const _DI = "DatastoreId";
const _DN = "DatastoreName";
const _DP = "DatastoreProperties";
const _DPL = "DatastorePropertiesList";
const _DS = "DatastoreStatus";
const _DTV = "DatastoreTypeVersion";
const _EC = "ErrorCause";
const _ECr = "ErrorCategory";
const _EJP = "ExportJobProperties";
const _EJPL = "ExportJobPropertiesList";
const _EM = "ErrorMessage";
const _ET = "EndTime";
const _F = "Filter";
const _FGAE = "FineGrainedAuthorizationEnabled";
const _IDC = "InputDataConfig";
const _IJP = "ImportJobProperties";
const _IJPL = "ImportJobPropertiesList";
const _ILA = "IdpLambdaArn";
const _IPC = "IdentityProviderConfiguration";
const _ISE = "InternalServerException";
const _JI = "JobId";
const _JN = "JobName";
const _JODC = "JobOutputDataConfig";
const _JPR = "JobProgressReport";
const _JS = "JobStatus";
const _K = "Key";
const _KEC = "KmsEncryptionConfig";
const _KKI = "KmsKeyId";
const _LFHIRD = "ListFHIRDatastores";
const _LFHIRDR = "ListFHIRDatastoresRequest";
const _LFHIRDRi = "ListFHIRDatastoresResponse";
const _LFHIREJ = "ListFHIRExportJobs";
const _LFHIREJR = "ListFHIRExportJobsRequest";
const _LFHIREJRi = "ListFHIRExportJobsResponse";
const _LFHIRIJ = "ListFHIRImportJobs";
const _LFHIRIJR = "ListFHIRImportJobsRequest";
const _LFHIRIJRi = "ListFHIRImportJobsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _M = "Message";
const _MR = "MaxResults";
const _Me = "Metadata";
const _NT = "NextToken";
const _ODC = "OutputDataConfig";
const _PDC = "PreloadDataConfig";
const _PDT = "PreloadDataType";
const _RARN = "ResourceARN";
const _RNFE = "ResourceNotFoundException";
const _SA = "SubmittedAfter";
const _SB = "SubmittedBefore";
const _SC = "SseConfiguration";
const _SCo = "S3Configuration";
const _SFHIREJ = "StartFHIRExportJob";
const _SFHIREJR = "StartFHIRExportJobRequest";
const _SFHIREJRt = "StartFHIRExportJobResponse";
const _SFHIRIJ = "StartFHIRImportJob";
const _SFHIRIJR = "StartFHIRImportJobRequest";
const _SFHIRIJRt = "StartFHIRImportJobResponse";
const _ST = "SubmitTime";
const _SU = "S3Uri";
const _T = "Tags";
const _TE = "ThrottlingException";
const _TK = "TagKeys";
const _TL = "TagList";
const _TNOFRWCE = "TotalNumberOfFilesReadWithCustomerError";
const _TNOIF = "TotalNumberOfImportedFiles";
const _TNORI = "TotalNumberOfResourcesImported";
const _TNORS = "TotalNumberOfResourcesScanned";
const _TNORWCE = "TotalNumberOfResourcesWithCustomerError";
const _TNOSF = "TotalNumberOfScannedFiles";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _TSOSFIMB = "TotalSizeOfScannedFilesInMB";
const _Ta = "Tag";
const _Th = "Throughput";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _V = "Value";
const _VE = "ValidationException";
const _VL = "ValidationLevel";
const _c = "client";
const _e = "error";
const _hE = "httpError";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.healthlake";
const n0 = "com.amazonaws.healthlake";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { HealthLakeServiceException } from "../models/HealthLakeServiceException";

/* eslint no-var: 0 */
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_M], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var CreateFHIRDatastoreRequest$: StaticStructureSchema = [
  3,
  n0,
  _CFHIRDR,
  0,
  [_DN, _DTV, _SC, _PDC, _CT, _T, _IPC],
  [
    0,
    0,
    () => SseConfiguration$,
    () => PreloadDataConfig$,
    [0, 4],
    () => TagList,
    () => IdentityProviderConfiguration$,
  ],
];
export var CreateFHIRDatastoreResponse$: StaticStructureSchema = [
  3,
  n0,
  _CFHIRDRr,
  0,
  [_DI, _DA, _DS, _DE],
  [0, 0, 0, 0],
];
export var DatastoreFilter$: StaticStructureSchema = [3, n0, _DF, 0, [_DN, _DS, _CB, _CA], [0, 0, 4, 4]];
export var DatastoreProperties$: StaticStructureSchema = [
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
    () => SseConfiguration$,
    () => PreloadDataConfig$,
    () => IdentityProviderConfiguration$,
    () => ErrorCause$,
  ],
];
export var DeleteFHIRDatastoreRequest$: StaticStructureSchema = [3, n0, _DFHIRDR, 0, [_DI], [0]];
export var DeleteFHIRDatastoreResponse$: StaticStructureSchema = [
  3,
  n0,
  _DFHIRDRe,
  0,
  [_DI, _DA, _DS, _DE],
  [0, 0, 0, 0],
];
export var DescribeFHIRDatastoreRequest$: StaticStructureSchema = [3, n0, _DFHIRDRes, 0, [_DI], [0]];
export var DescribeFHIRDatastoreResponse$: StaticStructureSchema = [
  3,
  n0,
  _DFHIRDResc,
  0,
  [_DP],
  [() => DatastoreProperties$],
];
export var DescribeFHIRExportJobRequest$: StaticStructureSchema = [3, n0, _DFHIREJR, 0, [_DI, _JI], [0, 0]];
export var DescribeFHIRExportJobResponse$: StaticStructureSchema = [
  3,
  n0,
  _DFHIREJRe,
  0,
  [_EJP],
  [() => ExportJobProperties$],
];
export var DescribeFHIRImportJobRequest$: StaticStructureSchema = [3, n0, _DFHIRIJR, 0, [_DI, _JI], [0, 0]];
export var DescribeFHIRImportJobResponse$: StaticStructureSchema = [
  3,
  n0,
  _DFHIRIJRe,
  0,
  [_IJP],
  [() => ImportJobProperties$],
];
export var ErrorCause$: StaticStructureSchema = [3, n0, _EC, 0, [_EM, _ECr], [0, 0]];
export var ExportJobProperties$: StaticStructureSchema = [
  3,
  n0,
  _EJP,
  0,
  [_JI, _JN, _JS, _ST, _ET, _DI, _ODC, _DARA, _M],
  [0, 0, 0, 4, 4, 0, () => OutputDataConfig$, 0, 0],
];
export var IdentityProviderConfiguration$: StaticStructureSchema = [
  3,
  n0,
  _IPC,
  0,
  [_AS, _FGAE, _Me, _ILA],
  [0, 2, 0, 0],
];
export var ImportJobProperties$: StaticStructureSchema = [
  3,
  n0,
  _IJP,
  0,
  [_JI, _JN, _JS, _ST, _ET, _DI, _IDC, _JODC, _JPR, _DARA, _M, _VL],
  [0, 0, 0, 4, 4, 0, () => InputDataConfig$, () => OutputDataConfig$, () => JobProgressReport$, 0, 0, 0],
];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s, [_hE]: 500 }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var JobProgressReport$: StaticStructureSchema = [
  3,
  n0,
  _JPR,
  0,
  [_TNOSF, _TSOSFIMB, _TNOIF, _TNORS, _TNORI, _TNORWCE, _TNOFRWCE, _Th],
  [1, 1, 1, 1, 1, 1, 1, 1],
];
export var KmsEncryptionConfig$: StaticStructureSchema = [3, n0, _KEC, 0, [_CTm, _KKI], [0, 0]];
export var ListFHIRDatastoresRequest$: StaticStructureSchema = [
  3,
  n0,
  _LFHIRDR,
  0,
  [_F, _NT, _MR],
  [() => DatastoreFilter$, 0, 1],
];
export var ListFHIRDatastoresResponse$: StaticStructureSchema = [
  3,
  n0,
  _LFHIRDRi,
  0,
  [_DPL, _NT],
  [() => DatastorePropertiesList, 0],
];
export var ListFHIRExportJobsRequest$: StaticStructureSchema = [
  3,
  n0,
  _LFHIREJR,
  0,
  [_DI, _NT, _MR, _JN, _JS, _SB, _SA],
  [0, 0, 1, 0, 0, 4, 4],
];
export var ListFHIRExportJobsResponse$: StaticStructureSchema = [
  3,
  n0,
  _LFHIREJRi,
  0,
  [_EJPL, _NT],
  [() => ExportJobPropertiesList, 0],
];
export var ListFHIRImportJobsRequest$: StaticStructureSchema = [
  3,
  n0,
  _LFHIRIJR,
  0,
  [_DI, _NT, _MR, _JN, _JS, _SB, _SA],
  [0, 0, 1, 0, 0, 4, 4],
];
export var ListFHIRImportJobsResponse$: StaticStructureSchema = [
  3,
  n0,
  _LFHIRIJRi,
  0,
  [_IJPL, _NT],
  [() => ImportJobPropertiesList, 0],
];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RARN], [0]];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_T], [() => TagList]];
export var PreloadDataConfig$: StaticStructureSchema = [3, n0, _PDC, 0, [_PDT], [0]];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var S3Configuration$: StaticStructureSchema = [3, n0, _SCo, 0, [_SU, _KKI], [0, 0]];
export var SseConfiguration$: StaticStructureSchema = [3, n0, _SC, 0, [_KEC], [() => KmsEncryptionConfig$]];
export var StartFHIRExportJobRequest$: StaticStructureSchema = [
  3,
  n0,
  _SFHIREJR,
  0,
  [_JN, _ODC, _DI, _DARA, _CT],
  [0, () => OutputDataConfig$, 0, 0, [0, 4]],
];
export var StartFHIRExportJobResponse$: StaticStructureSchema = [3, n0, _SFHIREJRt, 0, [_JI, _JS, _DI], [0, 0, 0]];
export var StartFHIRImportJobRequest$: StaticStructureSchema = [
  3,
  n0,
  _SFHIRIJR,
  0,
  [_JN, _IDC, _JODC, _DI, _DARA, _CT, _VL],
  [0, () => InputDataConfig$, () => OutputDataConfig$, 0, 0, [0, 4], 0],
];
export var StartFHIRImportJobResponse$: StaticStructureSchema = [3, n0, _SFHIRIJRt, 0, [_JI, _JS, _DI], [0, 0, 0]];
export var Tag$: StaticStructureSchema = [3, n0, _Ta, 0, [_K, _V], [0, 0]];
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR, 0, [_RARN, _T], [0, () => TagList]];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var UntagResourceRequest$: StaticStructureSchema = [3, n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var HealthLakeServiceException$: StaticErrorSchema = [-3, _sm, "HealthLakeServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(HealthLakeServiceException$, HealthLakeServiceException);
var DatastorePropertiesList: StaticListSchema = [1, n0, _DPL, 0, () => DatastoreProperties$];
var ExportJobPropertiesList: StaticListSchema = [1, n0, _EJPL, 0, () => ExportJobProperties$];
var ImportJobPropertiesList: StaticListSchema = [1, n0, _IJPL, 0, () => ImportJobProperties$];
var TagKeyList = 64 | 0;
var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag$];
export var InputDataConfig$: StaticStructureSchema = [3, n0, _IDC, 0, [_SU], [0]];
export var OutputDataConfig$: StaticStructureSchema = [3, n0, _ODC, 0, [_SCo], [() => S3Configuration$]];
export var CreateFHIRDatastore$: StaticOperationSchema = [
  9,
  n0,
  _CFHIRD,
  0,
  () => CreateFHIRDatastoreRequest$,
  () => CreateFHIRDatastoreResponse$,
];
export var DeleteFHIRDatastore$: StaticOperationSchema = [
  9,
  n0,
  _DFHIRD,
  0,
  () => DeleteFHIRDatastoreRequest$,
  () => DeleteFHIRDatastoreResponse$,
];
export var DescribeFHIRDatastore$: StaticOperationSchema = [
  9,
  n0,
  _DFHIRDe,
  0,
  () => DescribeFHIRDatastoreRequest$,
  () => DescribeFHIRDatastoreResponse$,
];
export var DescribeFHIRExportJob$: StaticOperationSchema = [
  9,
  n0,
  _DFHIREJ,
  0,
  () => DescribeFHIRExportJobRequest$,
  () => DescribeFHIRExportJobResponse$,
];
export var DescribeFHIRImportJob$: StaticOperationSchema = [
  9,
  n0,
  _DFHIRIJ,
  0,
  () => DescribeFHIRImportJobRequest$,
  () => DescribeFHIRImportJobResponse$,
];
export var ListFHIRDatastores$: StaticOperationSchema = [
  9,
  n0,
  _LFHIRD,
  0,
  () => ListFHIRDatastoresRequest$,
  () => ListFHIRDatastoresResponse$,
];
export var ListFHIRExportJobs$: StaticOperationSchema = [
  9,
  n0,
  _LFHIREJ,
  0,
  () => ListFHIRExportJobsRequest$,
  () => ListFHIRExportJobsResponse$,
];
export var ListFHIRImportJobs$: StaticOperationSchema = [
  9,
  n0,
  _LFHIRIJ,
  0,
  () => ListFHIRImportJobsRequest$,
  () => ListFHIRImportJobsResponse$,
];
export var ListTagsForResource$: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest$,
  () => ListTagsForResourceResponse$,
];
export var StartFHIRExportJob$: StaticOperationSchema = [
  9,
  n0,
  _SFHIREJ,
  0,
  () => StartFHIRExportJobRequest$,
  () => StartFHIRExportJobResponse$,
];
export var StartFHIRImportJob$: StaticOperationSchema = [
  9,
  n0,
  _SFHIRIJ,
  0,
  () => StartFHIRImportJobRequest$,
  () => StartFHIRImportJobResponse$,
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR, 0, () => TagResourceRequest$, () => TagResourceResponse$];
export var UntagResource$: StaticOperationSchema = [
  9,
  n0,
  _UR,
  0,
  () => UntagResourceRequest$,
  () => UntagResourceResponse$,
];

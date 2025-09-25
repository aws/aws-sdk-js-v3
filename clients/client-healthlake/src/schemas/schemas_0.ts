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
export const n0 = "com.amazonaws.healthlake";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { HealthLakeServiceException as __HealthLakeServiceException } from "../models/HealthLakeServiceException";
import { ValidationException as __ValidationException } from "../models/index";

/* eslint no-var: 0 */

export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ValidationException
);
export var HealthLakeServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.healthlake",
  "HealthLakeServiceException",
  0,
  [],
  [],
  __HealthLakeServiceException
);

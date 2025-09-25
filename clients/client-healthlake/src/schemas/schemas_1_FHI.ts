// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _c,
  _CE,
  _CT,
  _DA,
  _DARA,
  _DE,
  _DFHIRD,
  _DFHIRDe,
  _DFHIRDR,
  _DFHIRDRe,
  _DFHIRDRes,
  _DFHIRDResc,
  _DFHIREJ,
  _DFHIREJR,
  _DFHIREJRe,
  _DFHIRIJ,
  _DFHIRIJR,
  _DFHIRIJRe,
  _DI,
  _DP,
  _DS,
  _e,
  _EJP,
  _EJPL,
  _ET,
  _hE,
  _IDC,
  _IJP,
  _IJPL,
  _JI,
  _JN,
  _JODC,
  _JPR,
  _JS,
  _KKI,
  _LFHIREJ,
  _LFHIREJR,
  _LFHIREJRi,
  _LFHIRIJ,
  _LFHIRIJR,
  _LFHIRIJRi,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MR,
  _NT,
  _ODC,
  _RARN,
  _RNFE,
  _SA,
  _SB,
  _SCo,
  _SFHIREJ,
  _SFHIREJR,
  _SFHIREJRt,
  _SFHIRIJ,
  _SFHIRIJR,
  _SFHIRIJRt,
  _ST,
  _SU,
  _T,
  _Th,
  _TK,
  _TNOFRWCE,
  _TNOIF,
  _TNORI,
  _TNORS,
  _TNORWCE,
  _TNOSF,
  _TR,
  _TRR,
  _TRRa,
  _TSOSFIMB,
  _UR,
  _URR,
  _URRn,
  _VL,
  n0,
} from "./schemas_0";
import { DatastoreProperties } from "./schemas_2_FHI";
import { TagList } from "./schemas_3_Resource";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var DeleteFHIRDatastoreRequest = struct(n0, _DFHIRDR, 0, [_DI], [0]);
export var DeleteFHIRDatastoreResponse = struct(n0, _DFHIRDRe, 0, [_DI, _DA, _DS, _DE], [0, 0, 0, 0]);
export var DescribeFHIRDatastoreRequest = struct(n0, _DFHIRDRes, 0, [_DI], [0]);
export var DescribeFHIRDatastoreResponse = struct(n0, _DFHIRDResc, 0, [_DP], [() => DatastoreProperties]);
export var DescribeFHIRExportJobRequest = struct(n0, _DFHIREJR, 0, [_DI, _JI], [0, 0]);
export var DescribeFHIRExportJobResponse = struct(n0, _DFHIREJRe, 0, [_EJP], [() => ExportJobProperties]);
export var DescribeFHIRImportJobRequest = struct(n0, _DFHIRIJR, 0, [_DI, _JI], [0, 0]);
export var DescribeFHIRImportJobResponse = struct(n0, _DFHIRIJRe, 0, [_IJP], [() => ImportJobProperties]);
export var ExportJobProperties = struct(
  n0,
  _EJP,
  0,
  [_JI, _JN, _JS, _ST, _ET, _DI, _ODC, _DARA, _M],
  [0, 0, 0, 4, 4, 0, () => OutputDataConfig, 0, 0]
);
export var ImportJobProperties = struct(
  n0,
  _IJP,
  0,
  [_JI, _JN, _JS, _ST, _ET, _DI, _IDC, _JODC, _JPR, _DARA, _M, _VL],
  [0, 0, 0, 4, 4, 0, () => InputDataConfig, () => OutputDataConfig, () => JobProgressReport, 0, 0, 0]
);
export var JobProgressReport = struct(
  n0,
  _JPR,
  0,
  [_TNOSF, _TSOSFIMB, _TNOIF, _TNORS, _TNORI, _TNORWCE, _TNOFRWCE, _Th],
  [1, 1, 1, 1, 1, 1, 1, 1]
);
export var ListFHIRExportJobsRequest = struct(
  n0,
  _LFHIREJR,
  0,
  [_DI, _NT, _MR, _JN, _JS, _SB, _SA],
  [0, 0, 1, 0, 0, 4, 4]
);
export var ListFHIRExportJobsResponse = struct(n0, _LFHIREJRi, 0, [_EJPL, _NT], [() => ExportJobPropertiesList, 0]);
export var ListFHIRImportJobsRequest = struct(
  n0,
  _LFHIRIJR,
  0,
  [_DI, _NT, _MR, _JN, _JS, _SB, _SA],
  [0, 0, 1, 0, 0, 4, 4]
);
export var ListFHIRImportJobsResponse = struct(n0, _LFHIRIJRi, 0, [_IJPL, _NT], [() => ImportJobPropertiesList, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARN], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [() => TagList]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var S3Configuration = struct(n0, _SCo, 0, [_SU, _KKI], [0, 0]);
export var StartFHIRExportJobRequest = struct(
  n0,
  _SFHIREJR,
  0,
  [_JN, _ODC, _DI, _DARA, _CT],
  [0, () => OutputDataConfig, 0, 0, [0, 4]]
);
export var StartFHIRExportJobResponse = struct(n0, _SFHIREJRt, 0, [_JI, _JS, _DI], [0, 0, 0]);
export var StartFHIRImportJobRequest = struct(
  n0,
  _SFHIRIJR,
  0,
  [_JN, _IDC, _JODC, _DI, _DARA, _CT, _VL],
  [0, () => InputDataConfig, () => OutputDataConfig, 0, 0, [0, 4], 0]
);
export var StartFHIRImportJobResponse = struct(n0, _SFHIRIJRt, 0, [_JI, _JS, _DI], [0, 0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _T], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var ExportJobPropertiesList = list(n0, _EJPL, 0, () => ExportJobProperties);
export var ImportJobPropertiesList = list(n0, _IJPL, 0, () => ImportJobProperties);
export var TagKeyList = 64 | 0;

export var InputDataConfig = uni(n0, _IDC, 0, [_SU], [0]);
export var OutputDataConfig = uni(n0, _ODC, 0, [_SCo], [() => S3Configuration]);
export var DeleteFHIRDatastore = op(
  n0,
  _DFHIRD,
  0,
  () => DeleteFHIRDatastoreRequest,
  () => DeleteFHIRDatastoreResponse
);
export var DescribeFHIRDatastore = op(
  n0,
  _DFHIRDe,
  0,
  () => DescribeFHIRDatastoreRequest,
  () => DescribeFHIRDatastoreResponse
);
export var DescribeFHIRExportJob = op(
  n0,
  _DFHIREJ,
  0,
  () => DescribeFHIRExportJobRequest,
  () => DescribeFHIRExportJobResponse
);
export var DescribeFHIRImportJob = op(
  n0,
  _DFHIRIJ,
  0,
  () => DescribeFHIRImportJobRequest,
  () => DescribeFHIRImportJobResponse
);
export var ListFHIRExportJobs = op(
  n0,
  _LFHIREJ,
  0,
  () => ListFHIRExportJobsRequest,
  () => ListFHIRExportJobsResponse
);
export var ListFHIRImportJobs = op(
  n0,
  _LFHIRIJ,
  0,
  () => ListFHIRImportJobsRequest,
  () => ListFHIRImportJobsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var StartFHIRExportJob = op(
  n0,
  _SFHIREJ,
  0,
  () => StartFHIRExportJobRequest,
  () => StartFHIRExportJobResponse
);
export var StartFHIRImportJob = op(
  n0,
  _SFHIRIJ,
  0,
  () => StartFHIRImportJobRequest,
  () => StartFHIRImportJobResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);

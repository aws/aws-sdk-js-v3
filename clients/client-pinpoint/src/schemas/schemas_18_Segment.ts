// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _Ar,
  _CCh,
  _CD,
  _CDo,
  _CIJ,
  _CIJR,
  _CIJRr,
  _CP,
  _CSR,
  _CSr,
  _CSRr,
  _Def,
  _Di,
  _DSef,
  _DSele,
  _DSR,
  _DSRe,
  _EIx,
  _F,
  _Fo,
  _FP,
  _G,
  _GIJ,
  _GIJe,
  _GIJR,
  _GIJRe,
  _GIJRet,
  _GIJRetm,
  _GS,
  _GSe,
  _GSIJ,
  _GSIJR,
  _GSIJRe,
  _GSR,
  _GSRe,
  _GSRet,
  _GSRete,
  _GSV,
  _GSVe,
  _GSVR,
  _GSVRe,
  _GSVRet,
  _GSVRete,
  _h,
  _hQ,
  _I,
  _ID,
  _Id,
  _IJR,
  _IJRm,
  _IJRmp,
  _IJRmpo,
  _In,
  _JIo,
  _jN,
  _JS,
  _LMD,
  _LOIJR,
  _LOSD,
  _LOSG,
  _LOSR,
  _LOSRi,
  _N,
  _NT,
  _PS,
  _ps,
  _RA,
  _REe,
  _SG,
  _SGe,
  _SGL,
  _SI,
  _Si,
  _SIR,
  _SNe,
  _SR,
  _SRe,
  _SReg,
  _SSo,
  _STe,
  _STo,
  _SU,
  _t,
  _TF,
  _to,
  _Tok,
  _TPo,
  _TPot,
  _Ty,
  _US,
  _USR,
  _USRp,
  _V,
  _WSR,
  n0,
  SegmentDimensions,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateImportJobRequest = struct(
  n0,
  _CIJR,
  0,
  [_AI, _IJR],
  [
    [0, 1],
    [() => ImportJobRequest, 16],
  ]
);
export var CreateImportJobResponse = struct(n0, _CIJRr, 0, [_IJRm], [[() => ImportJobResponse, 16]]);
export var CreateSegmentRequest = struct(
  n0,
  _CSR,
  0,
  [_AI, _WSR],
  [
    [0, 1],
    [() => WriteSegmentRequest, 16],
  ]
);
export var CreateSegmentResponse = struct(n0, _CSRr, 0, [_SR], [[() => SegmentResponse, 16]]);
export var DeleteSegmentRequest = struct(
  n0,
  _DSR,
  0,
  [_AI, _SI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteSegmentResponse = struct(n0, _DSRe, 0, [_SR], [[() => SegmentResponse, 16]]);
export var GetImportJobRequest = struct(
  n0,
  _GIJR,
  0,
  [_AI, _JIo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetImportJobResponse = struct(n0, _GIJRe, 0, [_IJRm], [[() => ImportJobResponse, 16]]);
export var GetImportJobsRequest = struct(
  n0,
  _GIJRet,
  0,
  [_AI, _PS, _Tok],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
    [
      0,
      {
        [_hQ]: _to,
      },
    ],
  ]
);
export var GetImportJobsResponse = struct(n0, _GIJRetm, 0, [_IJRmp], [[() => ImportJobsResponse, 16]]);
export var GetSegmentImportJobsRequest = struct(
  n0,
  _GSIJR,
  0,
  [_AI, _PS, _SI, _Tok],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _to,
      },
    ],
  ]
);
export var GetSegmentImportJobsResponse = struct(n0, _GSIJRe, 0, [_IJRmp], [[() => ImportJobsResponse, 16]]);
export var GetSegmentRequest = struct(
  n0,
  _GSR,
  0,
  [_AI, _SI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetSegmentResponse = struct(n0, _GSRe, 0, [_SR], [[() => SegmentResponse, 16]]);
export var GetSegmentsRequest = struct(
  n0,
  _GSRet,
  0,
  [_AI, _PS, _Tok],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
    [
      0,
      {
        [_hQ]: _to,
      },
    ],
  ]
);
export var GetSegmentsResponse = struct(n0, _GSRete, 0, [_SRe], [[() => SegmentsResponse, 16]]);
export var GetSegmentVersionRequest = struct(
  n0,
  _GSVR,
  0,
  [_AI, _SI, _V],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetSegmentVersionResponse = struct(n0, _GSVRe, 0, [_SR], [[() => SegmentResponse, 16]]);
export var GetSegmentVersionsRequest = struct(
  n0,
  _GSVRet,
  0,
  [_AI, _PS, _SI, _Tok],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _to,
      },
    ],
  ]
);
export var GetSegmentVersionsResponse = struct(n0, _GSVRete, 0, [_SRe], [[() => SegmentsResponse, 16]]);
export var ImportJobRequest = struct(
  n0,
  _IJR,
  0,
  [_DSef, _EIx, _Fo, _REe, _RA, _SU, _SI, _SNe],
  [2, 0, 0, 2, 0, 0, 0, 0]
);
export var ImportJobResource = struct(
  n0,
  _IJRmpo,
  0,
  [_DSef, _EIx, _Fo, _REe, _RA, _SU, _SI, _SNe],
  [2, 0, 0, 2, 0, 0, 0, 0]
);
export var ImportJobResponse = struct(
  n0,
  _IJRm,
  0,
  [_AI, _CP, _CDo, _CD, _Def, _FP, _F, _Id, _JS, _TF, _TPo, _TPot, _Ty],
  [0, 1, 0, 0, () => ImportJobResource, 1, 64 | 0, 0, 0, 1, 1, 1, 0]
);
export var ImportJobsResponse = struct(n0, _IJRmp, 0, [_I, _NT], [() => ListOfImportJobResponse, 0]);
export var SegmentGroup = struct(
  n0,
  _SG,
  0,
  [_Di, _SSo, _STo, _Ty],
  [() => ListOfSegmentDimensions, () => ListOfSegmentReference, 0, 0]
);
export var SegmentGroupList = struct(n0, _SGL, 0, [_G, _In], [() => ListOfSegmentGroup, 0]);
export var SegmentImportResource = struct(n0, _SIR, 0, [_CCh, _EIx, _Fo, _RA, _SU, _Si], [128 | 1, 0, 0, 0, 0, 1]);
export var SegmentReference = struct(n0, _SReg, 0, [_Id, _V], [0, 1]);
export var SegmentResponse = struct(
  n0,
  _SR,
  0,
  [_AI, _Ar, _CD, _Di, _Id, _ID, _LMD, _N, _SGe, _STe, _t, _V],
  [
    0,
    0,
    0,
    () => SegmentDimensions,
    0,
    () => SegmentImportResource,
    0,
    0,
    () => SegmentGroupList,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    1,
  ]
);
export var SegmentsResponse = struct(n0, _SRe, 0, [_I, _NT], [[() => ListOfSegmentResponse, 0], 0]);
export var UpdateSegmentRequest = struct(
  n0,
  _USR,
  0,
  [_AI, _SI, _WSR],
  [
    [0, 1],
    [0, 1],
    [() => WriteSegmentRequest, 16],
  ]
);
export var UpdateSegmentResponse = struct(n0, _USRp, 0, [_SR], [[() => SegmentResponse, 16]]);
export var WriteSegmentRequest = struct(
  n0,
  _WSR,
  0,
  [_Di, _N, _SGe, _t],
  [
    () => SegmentDimensions,
    0,
    () => SegmentGroupList,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var ListOfImportJobResponse = list(n0, _LOIJR, 0, () => ImportJobResponse);
export var ListOfSegmentDimensions = list(n0, _LOSD, 0, () => SegmentDimensions);
export var ListOfSegmentGroup = list(n0, _LOSG, 0, () => SegmentGroup);
export var ListOfSegmentReference = list(n0, _LOSR, 0, () => SegmentReference);
export var ListOfSegmentResponse = list(n0, _LOSRi, 0, [() => SegmentResponse, 0]);
export var MapOf__integer = 128 | 1;

export var CreateImportJob = op(
  n0,
  _CIJ,
  {
    [_h]: ["POST", "/v1/apps/{ApplicationId}/jobs/import", 201],
  },
  () => CreateImportJobRequest,
  () => CreateImportJobResponse
);
export var CreateSegment = op(
  n0,
  _CSr,
  {
    [_h]: ["POST", "/v1/apps/{ApplicationId}/segments", 201],
  },
  () => CreateSegmentRequest,
  () => CreateSegmentResponse
);
export var DeleteSegment = op(
  n0,
  _DSele,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}/segments/{SegmentId}", 200],
  },
  () => DeleteSegmentRequest,
  () => DeleteSegmentResponse
);
export var GetImportJob = op(
  n0,
  _GIJ,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/jobs/import/{JobId}", 200],
  },
  () => GetImportJobRequest,
  () => GetImportJobResponse
);
export var GetImportJobs = op(
  n0,
  _GIJe,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/jobs/import", 200],
  },
  () => GetImportJobsRequest,
  () => GetImportJobsResponse
);
export var GetSegment = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/segments/{SegmentId}", 200],
  },
  () => GetSegmentRequest,
  () => GetSegmentResponse
);
export var GetSegmentImportJobs = op(
  n0,
  _GSIJ,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/segments/{SegmentId}/jobs/import", 200],
  },
  () => GetSegmentImportJobsRequest,
  () => GetSegmentImportJobsResponse
);
export var GetSegments = op(
  n0,
  _GSe,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/segments", 200],
  },
  () => GetSegmentsRequest,
  () => GetSegmentsResponse
);
export var GetSegmentVersion = op(
  n0,
  _GSV,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/segments/{SegmentId}/versions/{Version}", 200],
  },
  () => GetSegmentVersionRequest,
  () => GetSegmentVersionResponse
);
export var GetSegmentVersions = op(
  n0,
  _GSVe,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/segments/{SegmentId}/versions", 200],
  },
  () => GetSegmentVersionsRequest,
  () => GetSegmentVersionsResponse
);
export var UpdateSegment = op(
  n0,
  _US,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/segments/{SegmentId}", 200],
  },
  () => UpdateSegmentRequest,
  () => UpdateSegmentResponse
);

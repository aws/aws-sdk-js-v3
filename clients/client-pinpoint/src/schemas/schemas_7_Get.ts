// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _CD,
  _CDo,
  _CEJ,
  _CEJR,
  _CEJRr,
  _CP,
  _Def,
  _EJR,
  _EJRx,
  _EJRxp,
  _EJRxpo,
  _F,
  _FP,
  _GEJ,
  _GEJe,
  _GEJR,
  _GEJRe,
  _GEJRet,
  _GEJRetx,
  _GSEJ,
  _GSEJR,
  _GSEJRe,
  _h,
  _hQ,
  _I,
  _Id,
  _JIo,
  _JS,
  _LOEJR,
  _NT,
  _PS,
  _ps,
  _RA,
  _SI,
  _SUP,
  _SV,
  _TF,
  _to,
  _Tok,
  _TPo,
  _TPot,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateExportJobRequest = struct(
  n0,
  _CEJR,
  0,
  [_AI, _EJR],
  [
    [0, 1],
    [() => ExportJobRequest, 16],
  ]
);
export var CreateExportJobResponse = struct(n0, _CEJRr, 0, [_EJRx], [[() => ExportJobResponse, 16]]);
export var ExportJobRequest = struct(n0, _EJR, 0, [_RA, _SUP, _SI, _SV], [0, 0, 0, 1]);
export var ExportJobResource = struct(n0, _EJRxp, 0, [_RA, _SUP, _SI, _SV], [0, 0, 0, 1]);
export var ExportJobResponse = struct(
  n0,
  _EJRx,
  0,
  [_AI, _CP, _CDo, _CD, _Def, _FP, _F, _Id, _JS, _TF, _TPo, _TPot, _Ty],
  [0, 1, 0, 0, () => ExportJobResource, 1, 64 | 0, 0, 0, 1, 1, 1, 0]
);
export var ExportJobsResponse = struct(n0, _EJRxpo, 0, [_I, _NT], [() => ListOfExportJobResponse, 0]);
export var GetExportJobRequest = struct(
  n0,
  _GEJR,
  0,
  [_AI, _JIo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetExportJobResponse = struct(n0, _GEJRe, 0, [_EJRx], [[() => ExportJobResponse, 16]]);
export var GetExportJobsRequest = struct(
  n0,
  _GEJRet,
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
export var GetExportJobsResponse = struct(n0, _GEJRetx, 0, [_EJRxpo], [[() => ExportJobsResponse, 16]]);
export var GetSegmentExportJobsRequest = struct(
  n0,
  _GSEJR,
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
export var GetSegmentExportJobsResponse = struct(n0, _GSEJRe, 0, [_EJRxpo], [[() => ExportJobsResponse, 16]]);
export var ListOfExportJobResponse = list(n0, _LOEJR, 0, () => ExportJobResponse);
export var CreateExportJob = op(
  n0,
  _CEJ,
  {
    [_h]: ["POST", "/v1/apps/{ApplicationId}/jobs/export", 202],
  },
  () => CreateExportJobRequest,
  () => CreateExportJobResponse
);
export var GetExportJob = op(
  n0,
  _GEJ,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/jobs/export/{JobId}", 200],
  },
  () => GetExportJobRequest,
  () => GetExportJobResponse
);
export var GetExportJobs = op(
  n0,
  _GEJe,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/jobs/export", 200],
  },
  () => GetExportJobsRequest,
  () => GetExportJobsResponse
);
export var GetSegmentExportJobs = op(
  n0,
  _GSEJ,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/segments/{SegmentId}/jobs/export", 200],
  },
  () => GetSegmentExportJobsRequest,
  () => GetSegmentExportJobsResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _AIWA,
  _AIWM,
  _AIWS,
  _AM,
  _At,
  _BRET,
  _BRST,
  _CA,
  _Con,
  _CPN,
  _CR,
  _DN,
  _EDr,
  _EL,
  _EM,
  _FN,
  _GAMP,
  _GAMPR,
  _GAMPRe,
  _GIRJ,
  _GIRJR,
  _GIRJRe,
  _GW,
  _GWR,
  _GWRe,
  _GWS,
  _GWSR,
  _GWSRe,
  _h,
  _hQ,
  _IRJ,
  _IRJL,
  _It,
  _JET,
  _JETo,
  _JI,
  _JS,
  _JST,
  _LIRJ,
  _LIRJR,
  _LIRJRi,
  _LUA,
  _M,
  _MACSFM,
  _Me,
  _MR,
  _mr,
  _NOMD,
  _NOMF,
  _NOMIS,
  _NOPIS,
  _NOPR,
  _NOPWBM,
  _NT,
  _nt,
  _RA,
  _RP,
  _SBN,
  _SC,
  _SCT,
  _SD,
  _SE,
  _SEL,
  _SKN,
  _Sta,
  _TS,
  _WA,
  _WI,
  _WM,
  _WSI,
  _WSL,
  _WT,
  n0,
} from "./schemas_0";
import { AutoMerging, ConflictResolution, Consolidation } from "./schemas_10_Get";

/* eslint no-var: 0 */

export var AppflowIntegrationWorkflowAttributes = struct(n0, _AIWA, 0, [_SCT, _CPN, _RA], [0, 0, 0]);
export var AppflowIntegrationWorkflowMetrics = struct(n0, _AIWM, 0, [_RP, _SC, _TS], [1, 1, 1]);
export var AppflowIntegrationWorkflowStep = struct(
  n0,
  _AIWS,
  0,
  [_FN, _Sta, _EM, _RP, _BRST, _BRET, _CA, _LUA],
  [0, 0, 0, 1, 0, 0, 4, 4]
);
export var ExportingLocation = struct(n0, _EL, 0, [_SE], [() => S3ExportingLocation]);
export var GetAutoMergingPreviewRequest = struct(
  n0,
  _GAMPR,
  0,
  [_DN, _Con, _CR, _MACSFM],
  [[0, 1], () => Consolidation, () => ConflictResolution, 1]
);
export var GetAutoMergingPreviewResponse = struct(n0, _GAMPRe, 0, [_DN, _NOMIS, _NOPIS, _NOPWBM], [0, 1, 1, 1]);
export var GetIdentityResolutionJobRequest = struct(
  n0,
  _GIRJR,
  0,
  [_DN, _JI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetIdentityResolutionJobResponse = struct(
  n0,
  _GIRJRe,
  0,
  [_DN, _JI, _Sta, _M, _JST, _JET, _LUA, _JETo, _AM, _EL, _JS],
  [0, 0, 0, 0, 4, 4, 4, 4, () => AutoMerging, () => ExportingLocation, () => JobStats]
);
export var GetWorkflowRequest = struct(
  n0,
  _GWR,
  0,
  [_DN, _WI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetWorkflowResponse = struct(
  n0,
  _GWRe,
  0,
  [_WI, _WT, _Sta, _EDr, _SD, _LUA, _At, _Me],
  [0, 0, 0, 0, 4, 4, () => WorkflowAttributes, () => WorkflowMetrics]
);
export var GetWorkflowStepsRequest = struct(
  n0,
  _GWSR,
  0,
  [_DN, _WI, _NT, _MR],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var GetWorkflowStepsResponse = struct(n0, _GWSRe, 0, [_WI, _WT, _It, _NT], [0, 0, () => WorkflowStepsList, 0]);
export var IdentityResolutionJob = struct(
  n0,
  _IRJ,
  0,
  [_DN, _JI, _Sta, _JST, _JET, _JS, _EL, _M],
  [0, 0, 0, 4, 4, () => JobStats, () => ExportingLocation, 0]
);
export var JobStats = struct(n0, _JS, 0, [_NOPR, _NOMF, _NOMD], [1, 1, 1]);
export var ListIdentityResolutionJobsRequest = struct(
  n0,
  _LIRJR,
  0,
  [_DN, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListIdentityResolutionJobsResponse = struct(
  n0,
  _LIRJRi,
  0,
  [_IRJL, _NT],
  [() => IdentityResolutionJobsList, 0]
);
export var S3ExportingLocation = struct(n0, _SEL, 0, [_SBN, _SKN], [0, 0]);
export var WorkflowAttributes = struct(n0, _WA, 0, [_AI], [() => AppflowIntegrationWorkflowAttributes]);
export var WorkflowMetrics = struct(n0, _WM, 0, [_AI], [() => AppflowIntegrationWorkflowMetrics]);
export var WorkflowStepItem = struct(n0, _WSI, 0, [_AI], [() => AppflowIntegrationWorkflowStep]);
export var IdentityResolutionJobsList = list(n0, _IRJL, 0, () => IdentityResolutionJob);
export var WorkflowStepsList = list(n0, _WSL, 0, () => WorkflowStepItem);
export var GetAutoMergingPreview = op(
  n0,
  _GAMP,
  {
    [_h]: ["POST", "/domains/{DomainName}/identity-resolution-jobs/auto-merging-preview", 200],
  },
  () => GetAutoMergingPreviewRequest,
  () => GetAutoMergingPreviewResponse
);
export var GetIdentityResolutionJob = op(
  n0,
  _GIRJ,
  {
    [_h]: ["GET", "/domains/{DomainName}/identity-resolution-jobs/{JobId}", 200],
  },
  () => GetIdentityResolutionJobRequest,
  () => GetIdentityResolutionJobResponse
);
export var GetWorkflow = op(
  n0,
  _GW,
  {
    [_h]: ["GET", "/domains/{DomainName}/workflows/{WorkflowId}", 200],
  },
  () => GetWorkflowRequest,
  () => GetWorkflowResponse
);
export var GetWorkflowSteps = op(
  n0,
  _GWS,
  {
    [_h]: ["GET", "/domains/{DomainName}/workflows/{WorkflowId}/steps", 200],
  },
  () => GetWorkflowStepsRequest,
  () => GetWorkflowStepsResponse
);
export var ListIdentityResolutionJobs = op(
  n0,
  _LIRJ,
  {
    [_h]: ["GET", "/domains/{DomainName}/identity-resolution-jobs", 200],
  },
  () => ListIdentityResolutionJobsRequest,
  () => ListIdentityResolutionJobsResponse
);

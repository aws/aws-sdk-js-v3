// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _ac,
  _ar,
  _cAo,
  _cBa,
  _cI,
  _CRM,
  _cRM,
  _cRMU,
  _cT,
  _CW,
  _CWR,
  _CWRr,
  _CWV,
  _CWVR,
  _CWVRr,
  _d,
  _def,
  _dI,
  _di,
  _DR,
  _dR,
  _DRD,
  _dRD,
  _dU,
  _dZ,
  _eAI,
  _eFP,
  _eLS,
  _en,
  _end,
  _eRP,
  _eV,
  _ex,
  _fR,
  _fRI,
  _GRe,
  _GRRet,
  _GRRetu,
  _GW,
  _GWR,
  _GWRe,
  _GWV,
  _GWVR,
  _GWVRe,
  _hQ,
  _ht,
  _i,
  _IM,
  _iM,
  _IML,
  _it,
  _lL,
  _lLo,
  _LRi,
  _LRRis,
  _LRRist,
  _ma,
  _met,
  _mRa,
  _mT,
  _n,
  _nT,
  _o,
  _oU,
  _par,
  _pE,
  _pr,
  _pT,
  _pTP,
  _pTr,
  _rA,
  _rD,
  _re,
  _rGI,
  _rI,
  _rIu,
  _RLIu,
  _RLL,
  _rLS,
  _RLu,
  _RM,
  _rM,
  _RMe,
  _rMe,
  _rMet,
  _RML,
  _rOU,
  _rP,
  _rU,
  _sB,
  _sCt,
  _sIo,
  _sM,
  _SR,
  _sR,
  _SRR,
  _SRRt,
  _SRt,
  _sT,
  _st,
  _sTt,
  _sTta,
  _sTto,
  _t,
  _ta,
  _ty,
  _u,
  _uRP,
  _uRU,
  _UW,
  _UWR,
  _UWV,
  _UWVR,
  _va,
  _vN,
  _wBOI,
  _wI,
  _wOI,
  _WP,
  _WPT,
  _wT,
  _wU,
  _wVN,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_21_Set";

/* eslint no-var: 0 */

export var ReadmeMarkdown = sim(n0, _RM, 0, {
  [_mT]: _t,
});
export var ContainerRegistryMap = struct(
  n0,
  _CRM,
  0,
  [_rM, _iM],
  [() => RegistryMappingsList, () => ImageMappingsList]
);
export var CreateWorkflowRequest = struct(
  n0,
  _CWR,
  0,
  [_n, _d, _en, _dZ, _dU, _ma, _pT, _sCt, _ta, _rI, _ac, _sT, _cRM, _cRMU, _rMe, _pTP, _rP, _dR, _wBOI, _rU],
  [
    0,
    0,
    0,
    21,
    0,
    0,
    () => WorkflowParameterTemplate,
    1,
    128 | 0,
    [0, 4],
    0,
    0,
    () => ContainerRegistryMap,
    0,
    [() => ReadmeMarkdown, 0],
    0,
    0,
    () => DefinitionRepository,
    0,
    0,
  ]
);
export var CreateWorkflowResponse = struct(n0, _CWRr, 0, [_ar, _i, _st, _ta, _u], [0, 0, 0, 128 | 0, 0]);
export var CreateWorkflowVersionRequest = struct(
  n0,
  _CWVR,
  0,
  [_wI, _vN, _dZ, _dU, _ac, _d, _en, _ma, _pT, _rI, _sT, _sCt, _ta, _wBOI, _cRM, _cRMU, _rMe, _pTP, _rP, _dR, _rU],
  [
    [0, 1],
    0,
    21,
    0,
    0,
    0,
    0,
    0,
    () => WorkflowParameterTemplate,
    [0, 4],
    0,
    1,
    128 | 0,
    0,
    () => ContainerRegistryMap,
    0,
    [() => ReadmeMarkdown, 0],
    0,
    0,
    () => DefinitionRepository,
    0,
  ]
);
export var CreateWorkflowVersionResponse = struct(
  n0,
  _CWVRr,
  0,
  [_ar, _wI, _vN, _st, _ta, _u],
  [0, 0, 0, 0, 128 | 0, 0]
);
export var DefinitionRepository = struct(n0, _DR, 0, [_cAo, _fRI, _sR, _eFP], [0, 0, () => SourceReference, 64 | 0]);
export var DefinitionRepositoryDetails = struct(
  n0,
  _DRD,
  0,
  [_cAo, _fRI, _sR, _pTr, _pE],
  [0, 0, () => SourceReference, 0, 0]
);
export var GetRunRequest = struct(
  n0,
  _GRRet,
  0,
  [_i, _ex],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _ex,
      },
    ],
  ]
);
export var GetRunResponse = struct(
  n0,
  _GRRetu,
  0,
  [
    _ar,
    _i,
    _cI,
    _cBa,
    _eV,
    _st,
    _wI,
    _wT,
    _rIu,
    _rA,
    _n,
    _rGI,
    _pr,
    _def,
    _di,
    _par,
    _sCt,
    _oU,
    _lL,
    _rD,
    _sB,
    _cT,
    _sTt,
    _sTto,
    _sM,
    _ta,
    _ac,
    _rMet,
    _fR,
    _lLo,
    _u,
    _rOU,
    _sT,
    _wOI,
    _wVN,
    _wU,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    15,
    1,
    0,
    0,
    128 | 0,
    0,
    5,
    5,
    5,
    0,
    128 | 0,
    0,
    0,
    0,
    () => RunLogLocation,
    0,
    0,
    0,
    0,
    0,
    0,
  ]
);
export var GetWorkflowRequest = struct(
  n0,
  _GWR,
  0,
  [_i, _ty, _ex, _wOI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ty,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _ex,
      },
    ],
    [
      0,
      {
        [_hQ]: _wOI,
      },
    ],
  ]
);
export var GetWorkflowResponse = struct(
  n0,
  _GWRe,
  0,
  [_ar, _i, _st, _ty, _n, _d, _en, _def, _ma, _di, _pT, _sCt, _cT, _sM, _ta, _met, _ac, _sT, _u, _cRM, _re, _dRD, _rP],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => WorkflowParameterTemplate,
    1,
    5,
    0,
    128 | 0,
    128 | 0,
    0,
    0,
    0,
    () => ContainerRegistryMap,
    0,
    () => DefinitionRepositoryDetails,
    0,
  ]
);
export var GetWorkflowVersionRequest = struct(
  n0,
  _GWVR,
  0,
  [_wI, _vN, _ty, _ex, _wOI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _ty,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _ex,
      },
    ],
    [
      0,
      {
        [_hQ]: _wOI,
      },
    ],
  ]
);
export var GetWorkflowVersionResponse = struct(
  n0,
  _GWVRe,
  0,
  [
    _ar,
    _wI,
    _vN,
    _ac,
    _cT,
    _d,
    _def,
    _di,
    _en,
    _ma,
    _met,
    _pT,
    _st,
    _sM,
    _sT,
    _sCt,
    _ty,
    _ta,
    _u,
    _wBOI,
    _cRM,
    _re,
    _dRD,
    _rP,
  ],
  [
    0,
    0,
    0,
    0,
    5,
    0,
    0,
    0,
    0,
    0,
    128 | 0,
    () => WorkflowParameterTemplate,
    0,
    0,
    0,
    1,
    0,
    128 | 0,
    0,
    0,
    () => ContainerRegistryMap,
    0,
    () => DefinitionRepositoryDetails,
    0,
  ]
);
export var ImageMapping = struct(n0, _IM, 0, [_sIo, _dI], [0, 0]);
export var ListRunsRequest = struct(
  n0,
  _LRRis,
  0,
  [_n, _rGI, _sTta, _mRa, _st],
  [
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _rGI,
      },
    ],
    [
      0,
      {
        [_hQ]: _sTta,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
  ]
);
export var ListRunsResponse = struct(n0, _LRRist, 0, [_it, _nT], [() => RunList, 0]);
export var RegistryMapping = struct(n0, _RMe, 0, [_uRU, _eRP, _uRP, _eAI], [0, 0, 0, 0]);
export var RunListItem = struct(
  n0,
  _RLIu,
  0,
  [_ar, _i, _st, _wI, _n, _pr, _sCt, _cT, _sTt, _sTto, _sT, _wVN],
  [0, 0, 0, 0, 0, 1, 1, 5, 5, 5, 0, 0]
);
export var RunLogLocation = struct(n0, _RLL, 0, [_eLS, _rLS], [0, 0]);
export var SourceReference = struct(n0, _SR, 0, [_ty, _va], [0, 0]);
export var StartRunRequest = struct(
  n0,
  _SRR,
  0,
  [_wI, _wT, _rIu, _rA, _n, _cI, _cBa, _rGI, _pr, _par, _sCt, _oU, _lL, _ta, _rI, _rMet, _sT, _wOI, _wVN],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 1, 0, 0, 128 | 0, [0, 4], 0, 0, 0, 0]
);
export var StartRunResponse = struct(n0, _SRRt, 0, [_ar, _i, _st, _ta, _u, _rOU], [0, 0, 0, 128 | 0, 0, 0]);
export var UpdateWorkflowRequest = struct(
  n0,
  _UWR,
  0,
  [_i, _n, _d, _sT, _sCt, _rMe],
  [[0, 1], 0, 0, 0, 1, [() => ReadmeMarkdown, 0]]
);
export var UpdateWorkflowVersionRequest = struct(
  n0,
  _UWVR,
  0,
  [_wI, _vN, _d, _sT, _sCt, _rMe],
  [[0, 1], [0, 1], 0, 0, 1, [() => ReadmeMarkdown, 0]]
);
export var WorkflowParameter = struct(n0, _WP, 0, [_d, _o], [0, 2]);
export var ExcludeFilePatternList = 64 | 0;

export var ImageMappingsList = list(n0, _IML, 0, () => ImageMapping);
export var RegistryMappingsList = list(n0, _RML, 0, () => RegistryMapping);
export var RunExportList = 64 | 0;

export var RunList = list(n0, _RLu, 0, () => RunListItem);
export var WorkflowExportList = 64 | 0;

export var RunResourceDigests = 128 | 0;

export var WorkflowParameterTemplate = map(n0, _WPT, 0, 0, () => WorkflowParameter);
export var CreateWorkflow = op(
  n0,
  _CW,
  {
    [_ht]: ["POST", "/workflow", 201],
    [_end]: ["workflows-"],
  },
  () => CreateWorkflowRequest,
  () => CreateWorkflowResponse
);
export var CreateWorkflowVersion = op(
  n0,
  _CWV,
  {
    [_ht]: ["POST", "/workflow/{workflowId}/version", 201],
    [_end]: ["workflows-"],
  },
  () => CreateWorkflowVersionRequest,
  () => CreateWorkflowVersionResponse
);
export var GetRun = op(
  n0,
  _GRe,
  {
    [_ht]: ["GET", "/run/{id}", 200],
    [_end]: ["workflows-"],
  },
  () => GetRunRequest,
  () => GetRunResponse
);
export var GetWorkflow = op(
  n0,
  _GW,
  {
    [_ht]: ["GET", "/workflow/{id}", 200],
    [_end]: ["workflows-"],
  },
  () => GetWorkflowRequest,
  () => GetWorkflowResponse
);
export var GetWorkflowVersion = op(
  n0,
  _GWV,
  {
    [_ht]: ["GET", "/workflow/{workflowId}/version/{versionName}", 200],
    [_end]: ["workflows-"],
  },
  () => GetWorkflowVersionRequest,
  () => GetWorkflowVersionResponse
);
export var ListRuns = op(
  n0,
  _LRi,
  {
    [_ht]: ["GET", "/run", 200],
    [_end]: ["workflows-"],
  },
  () => ListRunsRequest,
  () => ListRunsResponse
);
export var StartRun = op(
  n0,
  _SRt,
  {
    [_ht]: ["POST", "/run", 201],
    [_end]: ["workflows-"],
  },
  () => StartRunRequest,
  () => StartRunResponse
);
export var UpdateWorkflow = op(
  n0,
  _UW,
  {
    [_ht]: ["POST", "/workflow/{id}", 202],
    [_end]: ["workflows-"],
  },
  () => UpdateWorkflowRequest,
  () => Unit
);
export var UpdateWorkflowVersion = op(
  n0,
  _UWV,
  {
    [_ht]: ["POST", "/workflow/{workflowId}/version/{versionName}", 202],
    [_end]: ["workflows-"],
  },
  () => UpdateWorkflowVersionRequest,
  () => Unit
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aACN,
  _co,
  _cS,
  _cT,
  _cTl,
  _d,
  _DT,
  _dT,
  _DTR,
  _DTRe,
  _eT,
  _GMWTR,
  _GMWTRe,
  _GT,
  _GTS,
  _GTSG,
  _GTSGR,
  _GTSGRe,
  _GTSR,
  _GTSRe,
  _hQ,
  _ht,
  _i,
  _iN,
  _in,
  _lMT,
  _LMWR,
  _LMWRi,
  _LTS,
  _LTSG,
  _LTSGR,
  _LTSGRi,
  _LTSR,
  _LTSRi,
  _LW,
  _mR,
  _MWS,
  _mWS,
  _MWSL,
  _n,
  _ne,
  _nT,
  _o,
  _ow,
  _p,
  _r,
  _rE,
  _s,
  _SAC,
  _sAC,
  _sAT,
  _sGI,
  _sLSB,
  _sLSK,
  _sM,
  _SO,
  _SOL,
  _t,
  _tA,
  _tC,
  _tD,
  _TI,
  _tI,
  _TIL,
  _tN,
  _to,
  _TSGS,
  _tSGS,
  _TSGSL,
  _tSo,
  _TSS,
  _TSSL,
  _tSSL,
  _tT,
  _UT,
  _UTR,
  _UTRp,
  n0,
} from "./schemas_0";
import { ToolsList } from "./schemas_10_Group";
import { PlatformCommand, PlatformScriptKey } from "./schemas_13_Step";

/* eslint no-var: 0 */

export var DeleteTemplateRequest = struct(n0, _DTR, 0, [_i], [[0, 1]]);
export var DeleteTemplateResponse = struct(n0, _DTRe, 0, [], []);
export var GetMigrationWorkflowTemplateRequest = struct(n0, _GMWTR, 0, [_i], [[0, 1]]);
export var GetMigrationWorkflowTemplateResponse = struct(
  n0,
  _GMWTRe,
  0,
  [_i, _tA, _n, _d, _in, _to, _cT, _ow, _s, _sM, _tC, _t],
  [0, 0, 0, 0, () => TemplateInputList, () => ToolsList, 4, 0, 0, 0, 0, 128 | 0]
);
export var GetTemplateStepGroupRequest = struct(
  n0,
  _GTSGR,
  0,
  [_tI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetTemplateStepGroupResponse = struct(
  n0,
  _GTSGRe,
  0,
  [_tI, _i, _n, _d, _s, _cT, _lMT, _to, _p, _ne],
  [0, 0, 0, 0, 0, 4, 4, () => ToolsList, 64 | 0, 64 | 0]
);
export var GetTemplateStepRequest = struct(
  n0,
  _GTSR,
  0,
  [_i, _tI, _sGI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _tI,
      },
    ],
    [
      0,
      {
        [_hQ]: _sGI,
      },
    ],
  ]
);
export var GetTemplateStepResponse = struct(
  n0,
  _GTSRe,
  0,
  [_i, _sGI, _tI, _n, _d, _sAT, _cT, _p, _ne, _o, _sAC],
  [0, 0, 0, 0, 0, 0, 0, 64 | 0, 64 | 0, () => StepOutputList, () => StepAutomationConfiguration]
);
export var ListMigrationWorkflowsRequest = struct(
  n0,
  _LMWR,
  0,
  [_mR, _nT, _tI, _aACN, _s, _n],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _tI,
      },
    ],
    [
      0,
      {
        [_hQ]: _aACN,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
  ]
);
export var ListMigrationWorkflowsResponse = struct(n0, _LMWRi, 0, [_nT, _mWS], [0, () => MigrationWorkflowSummaryList]);
export var ListTemplateStepGroupsRequest = struct(
  n0,
  _LTSGR,
  0,
  [_mR, _nT, _tI],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [0, 1],
  ]
);
export var ListTemplateStepGroupsResponse = struct(
  n0,
  _LTSGRi,
  0,
  [_nT, _tSGS],
  [0, () => TemplateStepGroupSummaryList]
);
export var ListTemplateStepsRequest = struct(
  n0,
  _LTSR,
  0,
  [_mR, _nT, _tI, _sGI],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _tI,
      },
    ],
    [
      0,
      {
        [_hQ]: _sGI,
      },
    ],
  ]
);
export var ListTemplateStepsResponse = struct(n0, _LTSRi, 0, [_nT, _tSSL], [0, () => TemplateStepSummaryList]);
export var MigrationWorkflowSummary = struct(
  n0,
  _MWS,
  0,
  [_i, _n, _tI, _aACN, _s, _cT, _eT, _sM, _cS, _tSo],
  [0, 0, 0, 0, 0, 4, 4, 0, 1, 1]
);
export var StepAutomationConfiguration = struct(
  n0,
  _SAC,
  0,
  [_sLSB, _sLSK, _co, _rE, _tT],
  [0, () => PlatformScriptKey, () => PlatformCommand, 0, 0]
);
export var StepOutput = struct(n0, _SO, 0, [_n, _dT, _r], [0, 0, 2]);
export var TemplateInput = struct(n0, _TI, 0, [_iN, _dT, _r], [0, 0, 2]);
export var TemplateStepGroupSummary = struct(n0, _TSGS, 0, [_i, _n, _p, _ne], [0, 0, 64 | 0, 64 | 0]);
export var TemplateStepSummary = struct(
  n0,
  _TSS,
  0,
  [_i, _sGI, _tI, _n, _sAT, _tT, _ow, _p, _ne],
  [0, 0, 0, 0, 0, 0, 0, 64 | 0, 64 | 0]
);
export var UpdateTemplateRequest = struct(n0, _UTR, 0, [_i, _tN, _tD, _cTl], [[0, 1], 0, 0, [0, 4]]);
export var UpdateTemplateResponse = struct(n0, _UTRp, 0, [_tI, _tA, _t], [0, 0, 128 | 0]);
export var MigrationWorkflowSummaryList = list(n0, _MWSL, 0, () => MigrationWorkflowSummary);
export var StepOutputList = list(n0, _SOL, 0, () => StepOutput);
export var TemplateInputList = list(n0, _TIL, 0, () => TemplateInput);
export var TemplateStepGroupSummaryList = list(n0, _TSGSL, 0, () => TemplateStepGroupSummary);
export var TemplateStepSummaryList = list(n0, _TSSL, 0, () => TemplateStepSummary);
export var DeleteTemplate = op(
  n0,
  _DT,
  {
    [_ht]: ["DELETE", "/template/{id}", 200],
  },
  () => DeleteTemplateRequest,
  () => DeleteTemplateResponse
);
export var GetTemplate = op(
  n0,
  _GT,
  {
    [_ht]: ["GET", "/migrationworkflowtemplate/{id}", 200],
  },
  () => GetMigrationWorkflowTemplateRequest,
  () => GetMigrationWorkflowTemplateResponse
);
export var GetTemplateStep = op(
  n0,
  _GTS,
  {
    [_ht]: ["GET", "/templatestep/{id}", 200],
  },
  () => GetTemplateStepRequest,
  () => GetTemplateStepResponse
);
export var GetTemplateStepGroup = op(
  n0,
  _GTSG,
  {
    [_ht]: ["GET", "/templates/{templateId}/stepgroups/{id}", 200],
  },
  () => GetTemplateStepGroupRequest,
  () => GetTemplateStepGroupResponse
);
export var ListTemplateStepGroups = op(
  n0,
  _LTSG,
  {
    [_ht]: ["GET", "/templatestepgroups/{templateId}", 200],
  },
  () => ListTemplateStepGroupsRequest,
  () => ListTemplateStepGroupsResponse
);
export var ListTemplateSteps = op(
  n0,
  _LTS,
  {
    [_ht]: ["GET", "/templatesteps", 200],
  },
  () => ListTemplateStepsRequest,
  () => ListTemplateStepsResponse
);
export var ListWorkflows = op(
  n0,
  _LW,
  {
    [_ht]: ["GET", "/migrationworkflows", 200],
  },
  () => ListMigrationWorkflowsRequest,
  () => ListMigrationWorkflowsResponse
);
export var UpdateTemplate = op(
  n0,
  _UT,
  {
    [_ht]: ["POST", "/template/{id}", 200],
  },
  () => UpdateTemplateRequest,
  () => UpdateTemplateResponse
);

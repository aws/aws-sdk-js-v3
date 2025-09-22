// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _d,
  _h,
  _hQ,
  _ht,
  _i,
  _iA,
  _LMWTR,
  _LMWTRi,
  _LP,
  _LPR,
  _LPRi,
  _LT,
  _LWSG,
  _LWSGR,
  _LWSGRi,
  _mR,
  _n,
  _ne,
  _nT,
  _ow,
  _p,
  _pI,
  _pl,
  _PS,
  _PSl,
  _rT,
  _s,
  _TS,
  _tSe,
  _TSL,
  _v,
  _wIo,
  _WSGS,
  _wSGS,
  _WSGSL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListMigrationWorkflowTemplatesRequest = struct(
  n0,
  _LMWTR,
  0,
  [_mR, _nT, _n],
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
        [_hQ]: _n,
      },
    ],
  ]
);
export var ListMigrationWorkflowTemplatesResponse = struct(n0, _LMWTRi, 0, [_nT, _tSe], [0, () => TemplateSummaryList]);
export var ListPluginsRequest = struct(
  n0,
  _LPR,
  0,
  [_mR, _nT],
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
  ]
);
export var ListPluginsResponse = struct(n0, _LPRi, 0, [_nT, _pl], [0, () => PluginSummaries]);
export var ListWorkflowStepGroupsRequest = struct(
  n0,
  _LWSGR,
  0,
  [_nT, _mR, _wIo],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _wIo,
      },
    ],
  ]
);
export var ListWorkflowStepGroupsResponse = struct(
  n0,
  _LWSGRi,
  0,
  [_nT, _wSGS],
  [0, () => WorkflowStepGroupsSummaryList]
);
export var PluginSummary = struct(n0, _PS, 0, [_pI, _h, _s, _iA, _v, _rT], [0, 0, 0, 0, 0, 0]);
export var TemplateSummary = struct(n0, _TS, 0, [_i, _n, _a, _d], [0, 0, 0, 0]);
export var WorkflowStepGroupSummary = struct(n0, _WSGS, 0, [_i, _n, _ow, _s, _p, _ne], [0, 0, 0, 0, 64 | 0, 64 | 0]);
export var PluginSummaries = list(n0, _PSl, 0, () => PluginSummary);
export var TemplateSummaryList = list(n0, _TSL, 0, () => TemplateSummary);
export var WorkflowStepGroupsSummaryList = list(n0, _WSGSL, 0, () => WorkflowStepGroupSummary);
export var ListPlugins = op(
  n0,
  _LP,
  {
    [_ht]: ["GET", "/plugins", 200],
  },
  () => ListPluginsRequest,
  () => ListPluginsResponse
);
export var ListTemplates = op(
  n0,
  _LT,
  {
    [_ht]: ["GET", "/migrationworkflowtemplates", 200],
  },
  () => ListMigrationWorkflowTemplatesRequest,
  () => ListMigrationWorkflowTemplatesResponse
);
export var ListWorkflowStepGroups = op(
  n0,
  _LWSG,
  {
    [_ht]: ["GET", "/workflowstepgroups", 200],
  },
  () => ListWorkflowStepGroupsRequest,
  () => ListWorkflowStepGroupsResponse
);

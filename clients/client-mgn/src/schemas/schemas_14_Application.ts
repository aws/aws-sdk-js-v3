// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _AA,
  _AAR,
  _AAS,
  _aAS,
  _aID,
  _aIDc,
  _aIDp,
  _AL,
  _CA,
  _CAR,
  _cDT,
  _d,
  _f,
  _hS,
  _ht,
  _i,
  _iA,
  _LA,
  _LAR,
  _LARF,
  _LARi,
  _lMDT,
  _lUDT,
  _mR,
  _n,
  _nT,
  _pS,
  _t,
  _tSS,
  _UA,
  _UAp,
  _UAR,
  _UARp,
  _wID,
  _wIDa,
  n0,
  TagsMap,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Application = struct(
  n0,
  _A,
  0,
  [_aID, _a, _n, _d, _iA, _aAS, _cDT, _lMDT, _t, _wID],
  [0, 0, 0, 0, 2, () => ApplicationAggregatedStatus, 0, 0, [() => TagsMap, 0], 0]
);
export var ApplicationAggregatedStatus = struct(n0, _AAS, 0, [_lUDT, _hS, _pS, _tSS], [0, 0, 0, 1]);
export var ArchiveApplicationRequest = struct(n0, _AAR, 0, [_aID, _aIDc], [0, 0]);
export var CreateApplicationRequest = struct(n0, _CAR, 0, [_n, _d, _t, _aIDc], [0, 0, [() => TagsMap, 0], 0]);
export var ListApplicationsRequest = struct(
  n0,
  _LAR,
  0,
  [_f, _mR, _nT, _aIDc],
  [() => ListApplicationsRequestFilters, 1, 0, 0]
);
export var ListApplicationsRequestFilters = struct(n0, _LARF, 0, [_aIDp, _iA, _wIDa], [64 | 0, 2, 64 | 0]);
export var ListApplicationsResponse = struct(n0, _LARi, 0, [_i, _nT], [[() => ApplicationsList, 0], 0]);
export var UnarchiveApplicationRequest = struct(n0, _UAR, 0, [_aID, _aIDc], [0, 0]);
export var UpdateApplicationRequest = struct(n0, _UARp, 0, [_aID, _n, _d, _aIDc], [0, 0, 0, 0]);
export var ApplicationIDsFilter = 64 | 0;

export var ApplicationsList = list(n0, _AL, 0, [() => Application, 0]);
export var ArchiveApplication = op(
  n0,
  _AA,
  {
    [_ht]: ["POST", "/ArchiveApplication", 200],
  },
  () => ArchiveApplicationRequest,
  () => Application
);
export var CreateApplication = op(
  n0,
  _CA,
  {
    [_ht]: ["POST", "/CreateApplication", 201],
  },
  () => CreateApplicationRequest,
  () => Application
);
export var ListApplications = op(
  n0,
  _LA,
  {
    [_ht]: ["POST", "/ListApplications", 200],
  },
  () => ListApplicationsRequest,
  () => ListApplicationsResponse
);
export var UnarchiveApplication = op(
  n0,
  _UA,
  {
    [_ht]: ["POST", "/UnarchiveApplication", 200],
  },
  () => UnarchiveApplicationRequest,
  () => Application
);
export var UpdateApplication = op(
  n0,
  _UAp,
  {
    [_ht]: ["POST", "/UpdateApplication", 200],
  },
  () => UpdateApplicationRequest,
  () => Application
);

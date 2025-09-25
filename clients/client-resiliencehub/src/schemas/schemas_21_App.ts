// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aA,
  _aV,
  _AVL,
  _aVp,
  _AVS,
  _cT,
  _eT,
  _h,
  _ide,
  _LAV,
  _LAVR,
  _LAVRi,
  _mR,
  _nT,
  _PAV,
  _PAVR,
  _PAVRu,
  _sT,
  _vN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AppVersionSummary = struct(n0, _AVS, 0, [_aV, _ide, _cT, _vN], [0, 1, 4, 0]);
export var ListAppVersionsRequest = struct(n0, _LAVR, 0, [_aA, _nT, _mR, _sT, _eT], [0, 0, 1, 4, 4]);
export var ListAppVersionsResponse = struct(n0, _LAVRi, 0, [_aVp, _nT], [() => AppVersionList, 0]);
export var PublishAppVersionRequest = struct(n0, _PAVR, 0, [_aA, _vN], [0, 0]);
export var PublishAppVersionResponse = struct(n0, _PAVRu, 0, [_aA, _aV, _ide, _vN], [0, 0, 1, 0]);
export var AppVersionList = list(n0, _AVL, 0, () => AppVersionSummary);
export var ListAppVersions = op(
  n0,
  _LAV,
  {
    [_h]: ["POST", "/list-app-versions", 200],
  },
  () => ListAppVersionsRequest,
  () => ListAppVersionsResponse
);
export var PublishAppVersion = op(
  n0,
  _PAV,
  {
    [_h]: ["POST", "/publish-app-version", 200],
  },
  () => PublishAppVersionRequest,
  () => PublishAppVersionResponse
);

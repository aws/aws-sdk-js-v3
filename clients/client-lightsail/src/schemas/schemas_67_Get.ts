// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aC,
  _B,
  _bI,
  _BL,
  _bl,
  _de,
  _g,
  _GB,
  _GBR,
  _GBRe,
  _ht,
  _iA,
  _iI,
  _lUi,
  _mP,
  _n,
  _nPT,
  _pl,
  _pT,
  _pU,
  _ty,
  _v,
  _vC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Blueprint = struct(
  n0,
  _B,
  0,
  [_bI, _n, _g, _ty, _de, _iA, _mP, _v, _vC, _pU, _lUi, _pl, _aC],
  [0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0]
);
export var GetBlueprintsRequest = struct(n0, _GBR, 0, [_iI, _pT, _aC], [2, 0, 0]);
export var GetBlueprintsResult = struct(n0, _GBRe, 0, [_bl, _nPT], [() => BlueprintList, 0]);
export var BlueprintList = list(n0, _BL, 0, () => Blueprint);
export var GetBlueprints = op(
  n0,
  _GB,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetBlueprints", 200],
  },
  () => GetBlueprintsRequest,
  () => GetBlueprintsResult
);

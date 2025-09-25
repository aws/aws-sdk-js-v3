// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { UnsupportedOperatingSystem as __UnsupportedOperatingSystem } from "../models/index";
import {
  _AIdv,
  _aQE,
  _Arc,
  _BIu,
  _c,
  _Cl,
  _CU,
  _CVEI,
  _D,
  _DAP,
  _DAPR,
  _DAPRe,
  _e,
  _Ep,
  _Fi,
  _I,
  _KNb,
  _Lan,
  _M,
  _MN,
  _MR,
  _MSs,
  _N,
  _NT,
  _Pa,
  _Pat,
  _PFr,
  _PLa,
  _Prod,
  _RDe,
  _Rel,
  _Rep,
  _Se,
  _Ti,
  _UOS,
  _Ve,
  _Ven,
  n0,
} from "./schemas_0";
import { PatchOrchestratorFilterList } from "./schemas_10_Describe";

/* eslint no-var: 0 */

export var DescribeAvailablePatchesRequest = struct(
  n0,
  _DAPR,
  0,
  [_Fi, _MR, _NT],
  [() => PatchOrchestratorFilterList, 1, 0]
);
export var DescribeAvailablePatchesResult = struct(n0, _DAPRe, 0, [_Pa, _NT], [() => PatchList, 0]);
export var Patch = struct(
  n0,
  _Pat,
  0,
  [
    _I,
    _RDe,
    _Ti,
    _D,
    _CU,
    _Ven,
    _PFr,
    _Prod,
    _Cl,
    _MSs,
    _KNb,
    _MN,
    _Lan,
    _AIdv,
    _BIu,
    _CVEI,
    _N,
    _Ep,
    _Ve,
    _Rel,
    _Arc,
    _Se,
    _Rep,
  ],
  [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0, 64 | 0, 64 | 0, 0, 1, 0, 0, 0, 0, 0]
);
export var UnsupportedOperatingSystem = error(
  n0,
  _UOS,
  {
    [_e]: _c,
    [_aQE]: [`UnsupportedOperatingSystem`, 400],
  },
  [_M],
  [0],

  __UnsupportedOperatingSystem
);
export var PatchAdvisoryIdList = 64 | 0;

export var PatchBugzillaIdList = 64 | 0;

export var PatchCVEIdList = 64 | 0;

export var PatchList = list(n0, _PLa, 0, () => Patch);
export var DescribeAvailablePatches = op(
  n0,
  _DAP,
  0,
  () => DescribeAvailablePatchesRequest,
  () => DescribeAvailablePatchesResult
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _AId,
  _AN,
  _At,
  _BA,
  _BD,
  _BEA,
  _BN,
  _BPN,
  _DN,
  _EA,
  _EP,
  _FNi,
  _FSPI,
  _G,
  _h,
  _HPN,
  _LN,
  _M,
  _MA,
  _MN,
  _MP,
  _MPI,
  _MPN,
  _MPR,
  _MPRe,
  _PEA,
  _PITBM,
  _PN,
  _PT,
  _PTr,
  _SA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FieldSourceProfileIds = struct(
  n0,
  _FSPI,
  0,
  [
    _AN,
    _AId,
    _PT,
    _BN,
    _FNi,
    _MN,
    _LN,
    _BD,
    _G,
    _PN,
    _MPN,
    _HPN,
    _BPN,
    _EA,
    _PEA,
    _BEA,
    _A,
    _SA,
    _MA,
    _BA,
    _At,
    _PTr,
    _EP,
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128 | 0, 0, 0]
);
export var MergeProfilesRequest = struct(
  n0,
  _MPR,
  0,
  [_DN, _MPI, _PITBM, _FSPI],
  [[0, 1], 0, 64 | 0, () => FieldSourceProfileIds]
);
export var MergeProfilesResponse = struct(n0, _MPRe, 0, [_M], [0]);
export var ProfileIdToBeMergedList = 64 | 0;

export var AttributeSourceIdMap = 128 | 0;

export var MergeProfiles = op(
  n0,
  _MP,
  {
    [_h]: ["POST", "/domains/{DomainName}/profiles/objects/merge", 200],
  },
  () => MergeProfilesRequest,
  () => MergeProfilesResponse
);

// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TooManyTagsException as __TooManyTagsException } from "../models/index";
import {
  _ar,
  _c,
  _cD,
  _cV,
  _des,
  _dPe,
  _e,
  _GPS,
  _GPSI,
  _GPSO,
  _hE,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _lUD,
  _m,
  _pSI,
  _rA,
  _rN,
  _t,
  _tK,
  _TMTE,
  _TR,
  _TRI,
  _TRO,
  _UR,
  _URI,
  _URO,
  _vS,
  n0,
} from "./schemas_0";
import { PolicyStoreDescription, ValidationSettings } from "./schemas_7_Policy";

/* eslint no-var: 0 */

export var GetPolicyStoreInput = struct(n0, _GPSI, 0, [_pSI, _t], [0, 2]);
export var GetPolicyStoreOutput = struct(
  n0,
  _GPSO,
  0,
  [_pSI, _ar, _vS, _cD, _lUD, _des, _dPe, _cV, _t],
  [0, 0, () => ValidationSettings, 5, 5, [() => PolicyStoreDescription, 0], 0, 0, 128 | 0]
);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_rA], [0]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_t], [128 | 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_rA, _t], [0, 128 | 0]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _rN],
  [0, 0],

  __TooManyTagsException
);
export var UntagResourceInput = struct(n0, _URI, 0, [_rA, _tK], [0, 64 | 0]);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var GetPolicyStore = op(
  n0,
  _GPS,
  0,
  () => GetPolicyStoreInput,
  () => GetPolicyStoreOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceInput,
  () => UntagResourceOutput
);

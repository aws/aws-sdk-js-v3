// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _aI,
  _BEN,
  _bEN,
  _BN,
  _bN,
  _CAA,
  _cAA,
  _DT,
  _DTR,
  _DTRe,
  _E,
  _e,
  _GBS,
  _GBSR,
  _GBSRC,
  _GBSRe,
  _h,
  _I,
  _i,
  _IS,
  _iS,
  _JI,
  _jI,
  _jN,
  _O,
  _o,
  _P,
  _p,
  _RAB,
  _RABR,
  _RABRe,
  _RC,
  _rC,
  _RN,
  _rN,
  _SI,
  _SN,
  _sN,
  _St,
  _st,
  n0,
} from "./schemas_0";
import { BackendStoragePermissions } from "./schemas_1_Backend";

/* eslint no-var: 0 */

export var DeleteTokenRequest = struct(
  n0,
  _DTR,
  0,
  [_AI, _SI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteTokenResponse = struct(
  n0,
  _DTRe,
  0,
  [_IS],
  [
    [
      2,
      {
        [_jN]: _iS,
      },
    ],
  ]
);
export var GetBackendStorageRequest = struct(
  n0,
  _GBSR,
  0,
  [_AI, _BEN, _RN],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var GetBackendStorageResourceConfig = struct(
  n0,
  _GBSRC,
  0,
  [_BN, _I, _P, _SN],
  [
    [
      0,
      {
        [_jN]: _bN,
      },
    ],
    [
      2,
      {
        [_jN]: _i,
      },
    ],
    [
      () => BackendStoragePermissions,
      {
        [_jN]: _p,
      },
    ],
    [
      0,
      {
        [_jN]: _sN,
      },
    ],
  ]
);
export var GetBackendStorageResponse = struct(
  n0,
  _GBSRe,
  0,
  [_AI, _BEN, _RC, _RN],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _bEN,
      },
    ],
    [
      () => GetBackendStorageResourceConfig,
      {
        [_jN]: _rC,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var RemoveAllBackendsRequest = struct(
  n0,
  _RABR,
  0,
  [_AI, _CAA],
  [
    [0, 1],
    [
      2,
      {
        [_jN]: _cAA,
      },
    ],
  ]
);
export var RemoveAllBackendsResponse = struct(
  n0,
  _RABRe,
  0,
  [_AI, _E, _JI, _O, _St],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _e,
      },
    ],
    [
      0,
      {
        [_jN]: _jI,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var DeleteToken = op(
  n0,
  _DT,
  {
    [_h]: ["POST", "/backend/{AppId}/challenge/{SessionId}/remove", 200],
  },
  () => DeleteTokenRequest,
  () => DeleteTokenResponse
);
export var GetBackendStorage = op(
  n0,
  _GBS,
  {
    [_h]: ["POST", "/backend/{AppId}/storage/{BackendEnvironmentName}/details", 200],
  },
  () => GetBackendStorageRequest,
  () => GetBackendStorageResponse
);
export var RemoveAllBackends = op(
  n0,
  _RAB,
  {
    [_h]: ["POST", "/backend/{AppId}/remove", 200],
  },
  () => RemoveAllBackendsRequest,
  () => RemoveAllBackendsResponse
);

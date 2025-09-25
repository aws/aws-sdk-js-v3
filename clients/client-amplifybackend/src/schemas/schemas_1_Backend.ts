// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _AI,
  _aI,
  _BEN,
  _bEN,
  _BN,
  _bN,
  _BSP,
  _CBS,
  _CBSR,
  _CBSRC,
  _CBSRr,
  _DBS,
  _DBSR,
  _DBSRe,
  _h,
  _IBS,
  _IBSR,
  _IBSRm,
  _JI,
  _jI,
  _jN,
  _P,
  _p,
  _RC,
  _rC,
  _RN,
  _rN,
  _SN,
  _sN,
  _St,
  _st,
  _UA,
  _uA,
  _UBS,
  _UBSR,
  _UBSRC,
  _UBSRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BackendStoragePermissions = struct(
  n0,
  _BSP,
  0,
  [_A, _UA],
  [
    [
      64 | 0,
      {
        [_jN]: _a,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _uA,
      },
    ],
  ]
);
export var CreateBackendStorageRequest = struct(
  n0,
  _CBSR,
  0,
  [_AI, _BEN, _RC, _RN],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _bEN,
      },
    ],
    [
      () => CreateBackendStorageResourceConfig,
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
export var CreateBackendStorageResourceConfig = struct(
  n0,
  _CBSRC,
  0,
  [_BN, _P, _SN],
  [
    [
      0,
      {
        [_jN]: _bN,
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
export var CreateBackendStorageResponse = struct(
  n0,
  _CBSRr,
  0,
  [_AI, _BEN, _JI, _St],
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
      0,
      {
        [_jN]: _jI,
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
export var DeleteBackendStorageRequest = struct(
  n0,
  _DBSR,
  0,
  [_AI, _BEN, _RN, _SN],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _rN,
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
export var DeleteBackendStorageResponse = struct(
  n0,
  _DBSRe,
  0,
  [_AI, _BEN, _JI, _St],
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
      0,
      {
        [_jN]: _jI,
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
export var ImportBackendStorageRequest = struct(
  n0,
  _IBSR,
  0,
  [_AI, _BEN, _BN, _SN],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _bN,
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
export var ImportBackendStorageResponse = struct(
  n0,
  _IBSRm,
  0,
  [_AI, _BEN, _JI, _St],
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
      0,
      {
        [_jN]: _jI,
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
export var UpdateBackendStorageRequest = struct(
  n0,
  _UBSR,
  0,
  [_AI, _BEN, _RC, _RN],
  [
    [0, 1],
    [0, 1],
    [
      () => UpdateBackendStorageResourceConfig,
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
export var UpdateBackendStorageResourceConfig = struct(
  n0,
  _UBSRC,
  0,
  [_P, _SN],
  [
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
export var UpdateBackendStorageResponse = struct(
  n0,
  _UBSRp,
  0,
  [_AI, _BEN, _JI, _St],
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
      0,
      {
        [_jN]: _jI,
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
export var ListOfAuthenticatedElement = 64 | 0;

export var ListOfUnAuthenticatedElement = 64 | 0;

export var CreateBackendStorage = op(
  n0,
  _CBS,
  {
    [_h]: ["POST", "/backend/{AppId}/storage", 200],
  },
  () => CreateBackendStorageRequest,
  () => CreateBackendStorageResponse
);
export var DeleteBackendStorage = op(
  n0,
  _DBS,
  {
    [_h]: ["POST", "/backend/{AppId}/storage/{BackendEnvironmentName}/remove", 200],
  },
  () => DeleteBackendStorageRequest,
  () => DeleteBackendStorageResponse
);
export var ImportBackendStorage = op(
  n0,
  _IBS,
  {
    [_h]: ["POST", "/backend/{AppId}/storage/{BackendEnvironmentName}/import", 200],
  },
  () => ImportBackendStorageRequest,
  () => ImportBackendStorageResponse
);
export var UpdateBackendStorage = op(
  n0,
  _UBS,
  {
    [_h]: ["POST", "/backend/{AppId}/storage/{BackendEnvironmentName}", 200],
  },
  () => UpdateBackendStorageRequest,
  () => UpdateBackendStorageResponse
);

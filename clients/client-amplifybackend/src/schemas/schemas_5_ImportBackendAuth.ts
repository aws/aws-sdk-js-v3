// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _aI,
  _BEN,
  _bEN,
  _E,
  _e,
  _h,
  _IBA,
  _IBAR,
  _IBARm,
  _IPI,
  _iPI,
  _JI,
  _jI,
  _jN,
  _NCI,
  _nCI,
  _O,
  _o,
  _St,
  _st,
  _UPI,
  _uPI,
  _WCI,
  _wCI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ImportBackendAuthRequest = struct(
  n0,
  _IBAR,
  0,
  [_AI, _BEN, _IPI, _NCI, _UPI, _WCI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _iPI,
      },
    ],
    [
      0,
      {
        [_jN]: _nCI,
      },
    ],
    [
      0,
      {
        [_jN]: _uPI,
      },
    ],
    [
      0,
      {
        [_jN]: _wCI,
      },
    ],
  ]
);
export var ImportBackendAuthResponse = struct(
  n0,
  _IBARm,
  0,
  [_AI, _BEN, _E, _JI, _O, _St],
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
export var ImportBackendAuth = op(
  n0,
  _IBA,
  {
    [_h]: ["POST", "/backend/{AppId}/auth/{BackendEnvironmentName}/import", 200],
  },
  () => ImportBackendAuthRequest,
  () => ImportBackendAuthResponse
);

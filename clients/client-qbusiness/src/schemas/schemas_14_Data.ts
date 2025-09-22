// smithy-typescript generated code
import { op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aCut,
  _aIp,
  _aT,
  _DAAC,
  _DAAD,
  _dAI,
  _DAITTIC,
  _DAN,
  _DDA,
  _DDAR,
  _DDARe,
  _eI,
  _ht,
  _iTTIA,
  _iTTIC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataAccessorName = sim(n0, _DAN, 0, 8);
export var DataAccessorAuthenticationDetail = struct(
  n0,
  _DAAD,
  0,
  [_aT, _aCut, _eI],
  [0, () => DataAccessorAuthenticationConfiguration, 64 | 0]
);
export var DataAccessorIdcTrustedTokenIssuerConfiguration = struct(n0, _DAITTIC, 0, [_iTTIA], [0]);
export var DeleteDataAccessorRequest = struct(
  n0,
  _DDAR,
  0,
  [_aIp, _dAI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDataAccessorResponse = struct(n0, _DDARe, 0, [], []);
export var DataAccessorExternalIds = 64 | 0;

export var DataAccessorAuthenticationConfiguration = uni(
  n0,
  _DAAC,
  0,
  [_iTTIC],
  [() => DataAccessorIdcTrustedTokenIssuerConfiguration]
);
export var DeleteDataAccessor = op(
  n0,
  _DDA,
  {
    [_ht]: ["DELETE", "/applications/{applicationId}/dataaccessors/{dataAccessorId}", 200],
  },
  () => DeleteDataAccessorRequest,
  () => DeleteDataAccessorResponse
);

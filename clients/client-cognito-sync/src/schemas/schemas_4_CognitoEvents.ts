// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _E, _GCE, _GCER, _GCERe, _h, _IPI, _SCE, _SCER, n0 } from "./schemas_0";
import { Unit } from "./schemas_5_PoolConfiguration";

/* eslint no-var: 0 */

export var GetCognitoEventsRequest = struct(n0, _GCER, 0, [_IPI], [[0, 1]]);
export var GetCognitoEventsResponse = struct(n0, _GCERe, 0, [_E], [128 | 0]);
export var SetCognitoEventsRequest = struct(n0, _SCER, 0, [_IPI, _E], [[0, 1], 128 | 0]);
export var Events = 128 | 0;

export var GetCognitoEvents = op(
  n0,
  _GCE,
  {
    [_h]: ["GET", "/identitypools/{IdentityPoolId}/events", 200],
  },
  () => GetCognitoEventsRequest,
  () => GetCognitoEventsResponse
);
export var SetCognitoEvents = op(
  n0,
  _SCE,
  {
    [_h]: ["POST", "/identitypools/{IdentityPoolId}/events", 200],
  },
  () => SetCognitoEventsRequest,
  () => Unit
);

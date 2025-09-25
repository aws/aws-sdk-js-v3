// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AIUA,
  _AIUEp,
  _AIUES,
  _AIUESL,
  _AM,
  _CRT,
  _DAIUE,
  _DAIUER,
  _DT,
  _EA,
  _EI,
  _ESn,
  _h,
  _hQ,
  _LAIUE,
  _LAIUER,
  _LAIUERi,
  _MR,
  _mr,
  _N,
  _NESS,
  _NT,
  _nt,
  _RA,
  _RAIUE,
  _RAIUER,
  _RAIUERe,
  _S,
  _SCA,
  _SR,
  _SS,
  _T,
  _UAIUE,
  _UAIUER,
  _UAIUERp,
  _VDT,
  n0,
  Unit,
} from "./schemas_0";
import { NextToken } from "./schemas_5_App";

/* eslint no-var: 0 */

export var NonEmptySensitiveString1600 = sim(n0, _NESS, 0, 8);
export var SensitiveChimeArn = sim(n0, _SCA, 0, 8);
export var SensitiveString1600 = sim(n0, _SS, 0, 8);
export var AppInstanceUserEndpointSummary = struct(
  n0,
  _AIUES,
  0,
  [_AIUA, _EI, _N, _T, _AM, _ESn],
  [0, 0, [() => SensitiveString1600, 0], 0, 0, () => EndpointState]
);
export var DeregisterAppInstanceUserEndpointRequest = struct(
  n0,
  _DAIUER,
  0,
  [_AIUA, _EI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var EndpointAttributes = struct(
  n0,
  _EA,
  0,
  [_DT, _VDT],
  [
    [() => NonEmptySensitiveString1600, 0],
    [() => NonEmptySensitiveString1600, 0],
  ]
);
export var EndpointState = struct(n0, _ESn, 0, [_S, _SR], [0, 0]);
export var ListAppInstanceUserEndpointsRequest = struct(
  n0,
  _LAIUER,
  0,
  [_AIUA, _MR, _NT],
  [
    [() => SensitiveChimeArn, 1],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListAppInstanceUserEndpointsResponse = struct(
  n0,
  _LAIUERi,
  0,
  [_AIUEp, _NT],
  [
    [() => AppInstanceUserEndpointSummaryList, 0],
    [() => NextToken, 0],
  ]
);
export var RegisterAppInstanceUserEndpointRequest = struct(
  n0,
  _RAIUER,
  0,
  [_AIUA, _N, _T, _RA, _EA, _CRT, _AM],
  [[() => SensitiveChimeArn, 1], [() => SensitiveString1600, 0], 0, 0, [() => EndpointAttributes, 0], [0, 4], 0]
);
export var RegisterAppInstanceUserEndpointResponse = struct(n0, _RAIUERe, 0, [_AIUA, _EI], [0, 0]);
export var UpdateAppInstanceUserEndpointRequest = struct(
  n0,
  _UAIUER,
  0,
  [_AIUA, _EI, _N, _AM],
  [[0, 1], [0, 1], [() => SensitiveString1600, 0], 0]
);
export var UpdateAppInstanceUserEndpointResponse = struct(n0, _UAIUERp, 0, [_AIUA, _EI], [0, 0]);
export var AppInstanceUserEndpointSummaryList = list(n0, _AIUESL, 0, [() => AppInstanceUserEndpointSummary, 0]);
export var DeregisterAppInstanceUserEndpoint = op(
  n0,
  _DAIUE,
  {
    [_h]: ["DELETE", "/app-instance-users/{AppInstanceUserArn}/endpoints/{EndpointId}", 204],
  },
  () => DeregisterAppInstanceUserEndpointRequest,
  () => Unit
);
export var ListAppInstanceUserEndpoints = op(
  n0,
  _LAIUE,
  {
    [_h]: ["GET", "/app-instance-users/{AppInstanceUserArn}/endpoints", 200],
  },
  () => ListAppInstanceUserEndpointsRequest,
  () => ListAppInstanceUserEndpointsResponse
);
export var RegisterAppInstanceUserEndpoint = op(
  n0,
  _RAIUE,
  {
    [_h]: ["POST", "/app-instance-users/{AppInstanceUserArn}/endpoints", 201],
  },
  () => RegisterAppInstanceUserEndpointRequest,
  () => RegisterAppInstanceUserEndpointResponse
);
export var UpdateAppInstanceUserEndpoint = op(
  n0,
  _UAIUE,
  {
    [_h]: ["PUT", "/app-instance-users/{AppInstanceUserArn}/endpoints/{EndpointId}", 200],
  },
  () => UpdateAppInstanceUserEndpointRequest,
  () => UpdateAppInstanceUserEndpointResponse
);

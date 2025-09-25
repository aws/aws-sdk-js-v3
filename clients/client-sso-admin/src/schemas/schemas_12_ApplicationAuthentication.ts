// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AAp,
  _AM,
  _AMI,
  _AMT,
  _AMu,
  _APc,
  _DAAM,
  _DAAMR,
  _GAAM,
  _GAAMR,
  _GAAMRe,
  _Ia,
  _IAM,
  _LAAM,
  _LAAMR,
  _LAAMRi,
  _NT,
  _PAAM,
  _PAAMR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AuthenticationMethodItem = struct(n0, _AMI, 0, [_AMT, _AM], [0, () => AuthenticationMethod]);
export var DeleteApplicationAuthenticationMethodRequest = struct(n0, _DAAMR, 0, [_AAp, _AMT], [0, 0]);
export var GetApplicationAuthenticationMethodRequest = struct(n0, _GAAMR, 0, [_AAp, _AMT], [0, 0]);
export var GetApplicationAuthenticationMethodResponse = struct(n0, _GAAMRe, 0, [_AM], [() => AuthenticationMethod]);
export var IamAuthenticationMethod = struct(n0, _IAM, 0, [_APc], [15]);
export var ListApplicationAuthenticationMethodsRequest = struct(n0, _LAAMR, 0, [_AAp, _NT], [0, 0]);
export var ListApplicationAuthenticationMethodsResponse = struct(
  n0,
  _LAAMRi,
  0,
  [_AMu, _NT],
  [() => AuthenticationMethods, 0]
);
export var PutApplicationAuthenticationMethodRequest = struct(
  n0,
  _PAAMR,
  0,
  [_AAp, _AMT, _AM],
  [0, 0, () => AuthenticationMethod]
);
export var AuthenticationMethods = list(n0, _AMu, 0, () => AuthenticationMethodItem);
export var AuthenticationMethod = uni(n0, _AM, 0, [_Ia], [() => IamAuthenticationMethod]);
export var DeleteApplicationAuthenticationMethod = op(
  n0,
  _DAAM,
  2,
  () => DeleteApplicationAuthenticationMethodRequest,
  () => Unit
);
export var GetApplicationAuthenticationMethod = op(
  n0,
  _GAAM,
  0,
  () => GetApplicationAuthenticationMethodRequest,
  () => GetApplicationAuthenticationMethodResponse
);
export var ListApplicationAuthenticationMethods = op(
  n0,
  _LAAM,
  0,
  () => ListApplicationAuthenticationMethodsRequest,
  () => ListApplicationAuthenticationMethodsResponse
);
export var PutApplicationAuthenticationMethod = op(
  n0,
  _PAAM,
  2,
  () => PutApplicationAuthenticationMethodRequest,
  () => Unit
);

// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AR,
  _CT,
  _E,
  _FA,
  _GSMA,
  _GSMAR,
  _GSMARe,
  _h,
  _LA,
  _N,
  _SMA,
  _SMAA,
  _SMAE,
  _SMAEL,
  _SMAI,
  _USMA,
  _USMAR,
  _USMARp,
  _UT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FunctionArn = sim(n0, _FA, 0, 8);
export var GetSipMediaApplicationRequest = struct(n0, _GSMAR, 0, [_SMAI], [[0, 1]]);
export var GetSipMediaApplicationResponse = struct(n0, _GSMARe, 0, [_SMA], [[() => SipMediaApplication, 0]]);
export var SipMediaApplication = struct(
  n0,
  _SMA,
  0,
  [_SMAI, _AR, _N, _E, _CT, _UT, _SMAA],
  [0, 0, 0, [() => SipMediaApplicationEndpointList, 0], 5, 5, 0]
);
export var SipMediaApplicationEndpoint = struct(n0, _SMAE, 0, [_LA], [[() => FunctionArn, 0]]);
export var UpdateSipMediaApplicationRequest = struct(
  n0,
  _USMAR,
  0,
  [_SMAI, _N, _E],
  [[0, 1], 0, [() => SipMediaApplicationEndpointList, 0]]
);
export var UpdateSipMediaApplicationResponse = struct(n0, _USMARp, 0, [_SMA], [[() => SipMediaApplication, 0]]);
export var SipMediaApplicationEndpointList = list(n0, _SMAEL, 0, [() => SipMediaApplicationEndpoint, 0]);
export var GetSipMediaApplication = op(
  n0,
  _GSMA,
  {
    [_h]: ["GET", "/sip-media-applications/{SipMediaApplicationId}", 200],
  },
  () => GetSipMediaApplicationRequest,
  () => GetSipMediaApplicationResponse
);
export var UpdateSipMediaApplication = op(
  n0,
  _USMA,
  {
    [_h]: ["PUT", "/sip-media-applications/{SipMediaApplicationId}", 200],
  },
  () => UpdateSipMediaApplicationRequest,
  () => UpdateSipMediaApplicationResponse
);

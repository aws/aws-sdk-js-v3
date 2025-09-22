// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _C,
  _CIP,
  _ET,
  _GSR,
  _GSRR,
  _GSRRe,
  _H,
  _HTTPH,
  _HTTPHe,
  _HTTPR,
  _HTTPV,
  _M,
  _MI,
  _N,
  _PS,
  _Re,
  _RI,
  _RWRG,
  _SHTTPR,
  _SHTTPRa,
  _SR,
  _ST,
  _Ti,
  _TW,
  _URI,
  _V,
  _W,
  _WAI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSampledRequestsRequest = struct(n0, _GSRR, 0, [_WAI, _RI, _TW, _MI], [0, 0, () => TimeWindow, 1]);
export var GetSampledRequestsResponse = struct(
  n0,
  _GSRRe,
  0,
  [_SR, _PS, _TW],
  [() => SampledHTTPRequests, 1, () => TimeWindow]
);
export var HTTPHeader = struct(n0, _HTTPH, 0, [_N, _V], [0, 0]);
export var HTTPRequest = struct(n0, _HTTPR, 0, [_CIP, _C, _URI, _M, _HTTPV, _H], [0, 0, 0, 0, 0, () => HTTPHeaders]);
export var SampledHTTPRequest = struct(n0, _SHTTPR, 0, [_Re, _W, _Ti, _A, _RWRG], [() => HTTPRequest, 1, 4, 0, 0]);
export var TimeWindow = struct(n0, _TW, 0, [_ST, _ET], [4, 4]);
export var HTTPHeaders = list(n0, _HTTPHe, 0, () => HTTPHeader);
export var SampledHTTPRequests = list(n0, _SHTTPRa, 0, () => SampledHTTPRequest);
export var GetSampledRequests = op(
  n0,
  _GSR,
  0,
  () => GetSampledRequestsRequest,
  () => GetSampledRequestsResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aT,
  _cA,
  _cAe,
  _cDN,
  _dE,
  _DS,
  _DSR,
  _DSRe,
  _fC,
  _fM,
  _GS,
  _GSR,
  _GSRe,
  _h,
  _hQ,
  _i,
  _it,
  _LSi,
  _LSR,
  _LSRi,
  _lUA,
  _mR,
  _n,
  _nT,
  _sI,
  _SL,
  _SS,
  _st,
  _US,
  _USR,
  _USRp,
  n0,
} from "./schemas_0";
import { DnsEntry } from "./schemas_23_Service";

/* eslint no-var: 0 */

export var DeleteServiceRequest = struct(n0, _DSR, 0, [_sI], [[0, 1]]);
export var DeleteServiceResponse = struct(n0, _DSRe, 0, [_i, _a, _n, _st], [0, 0, 0, 0]);
export var GetServiceRequest = struct(n0, _GSR, 0, [_sI], [[0, 1]]);
export var GetServiceResponse = struct(
  n0,
  _GSRe,
  0,
  [_i, _n, _a, _cA, _lUA, _dE, _cDN, _cAe, _st, _aT, _fC, _fM],
  [0, 0, 0, 5, 5, () => DnsEntry, 0, 0, 0, 0, 0, 0]
);
export var ListServicesRequest = struct(
  n0,
  _LSR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListServicesResponse = struct(n0, _LSRi, 0, [_it, _nT], [() => ServiceList, 0]);
export var ServiceSummary = struct(
  n0,
  _SS,
  0,
  [_i, _n, _a, _cA, _lUA, _dE, _cDN, _st],
  [0, 0, 0, 5, 5, () => DnsEntry, 0, 0]
);
export var UpdateServiceRequest = struct(n0, _USR, 0, [_sI, _cAe, _aT], [[0, 1], 0, 0]);
export var UpdateServiceResponse = struct(n0, _USRp, 0, [_i, _a, _n, _cDN, _cAe, _aT], [0, 0, 0, 0, 0, 0]);
export var ServiceList = list(n0, _SL, 0, () => ServiceSummary);
export var DeleteService = op(
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/services/{serviceIdentifier}", 200],
  },
  () => DeleteServiceRequest,
  () => DeleteServiceResponse
);
export var GetService = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/services/{serviceIdentifier}", 200],
  },
  () => GetServiceRequest,
  () => GetServiceResponse
);
export var ListServices = op(
  n0,
  _LSi,
  {
    [_h]: ["GET", "/services", 200],
  },
  () => ListServicesRequest,
  () => ListServicesResponse
);
export var UpdateService = op(
  n0,
  _US,
  {
    [_h]: ["PATCH", "/services/{serviceIdentifier}", 200],
  },
  () => UpdateServiceRequest,
  () => UpdateServiceResponse
);

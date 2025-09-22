// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { CustomHealthNotFound as __CustomHealthNotFound } from "../models/index";
import {
  _C,
  _c,
  _CHNF,
  _D,
  _DC,
  _DCC,
  _DR,
  _DRL,
  _DRn,
  _e,
  _F,
  _FT,
  _FV,
  _GIHS,
  _GIHSR,
  _GIHSRe,
  _HCC,
  _hE,
  _I,
  _i,
  _II,
  _IIL,
  _In,
  _LO,
  _LOR,
  _LORi,
  _M,
  _MR,
  _N,
  _NT,
  _OF,
  _OFp,
  _OI,
  _Op,
  _OS,
  _OSL,
  _RPe,
  _S,
  _SCe,
  _SI,
  _St,
  _TTL,
  _Ty,
  _UICHS,
  _UICHSR,
  _US,
  _USR,
  _USRp,
  _Va,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomHealthNotFound = error(
  n0,
  _CHNF,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __CustomHealthNotFound
);
export var DnsConfigChange = struct(n0, _DCC, 0, [_DR], [() => DnsRecordList]);
export var DnsRecord = struct(n0, _DRn, 0, [_Ty, _TTL], [0, 1]);
export var GetInstancesHealthStatusRequest = struct(
  n0,
  _GIHSR,
  0,
  [_SI, _In, _MR, _NT],
  [0, [() => InstanceIdList, 0], 1, 0]
);
export var GetInstancesHealthStatusResponse = struct(n0, _GIHSRe, 0, [_St, _NT], [128 | 0, 0]);
export var HealthCheckConfig = struct(n0, _HCC, 0, [_Ty, _RPe, _FT], [0, 0, 1]);
export var ListOperationsRequest = struct(n0, _LOR, 0, [_NT, _MR, _F], [0, 1, [() => OperationFilters, 0]]);
export var ListOperationsResponse = struct(n0, _LORi, 0, [_Op, _NT], [[() => OperationSummaryList, 0], 0]);
export var OperationFilter = struct(n0, _OF, 0, [_N, _Va, _C], [0, [() => FilterValues, 0], 0]);
export var OperationSummary = struct(n0, _OS, 0, [_I, _St], [0, 0]);
export var ServiceChange = struct(n0, _SCe, 0, [_D, _DC, _HCC], [0, () => DnsConfigChange, () => HealthCheckConfig]);
export var UpdateInstanceCustomHealthStatusRequest = struct(n0, _UICHSR, 0, [_SI, _II, _St], [0, 0, 0]);
export var UpdateServiceRequest = struct(n0, _USR, 0, [_I, _S], [0, () => ServiceChange]);
export var UpdateServiceResponse = struct(n0, _USRp, 0, [_OI], [0]);
export var Unit = "unit" as const;

export var DnsRecordList = list(n0, _DRL, 0, () => DnsRecord);
export var FilterValues = list(n0, _FV, 0, [
  0,
  {
    [_xN]: _i,
  },
]);
export var InstanceIdList = list(n0, _IIL, 0, [
  0,
  {
    [_xN]: _II,
  },
]);
export var OperationFilters = list(n0, _OFp, 0, [
  () => OperationFilter,
  {
    [_xN]: _i,
  },
]);
export var OperationSummaryList = list(n0, _OSL, 0, [
  () => OperationSummary,
  {
    [_xN]: _OS,
  },
]);
export var InstanceHealthStatusMap = 128 | 0;

export var GetInstancesHealthStatus = op(
  n0,
  _GIHS,
  0,
  () => GetInstancesHealthStatusRequest,
  () => GetInstancesHealthStatusResponse
);
export var ListOperations = op(
  n0,
  _LO,
  0,
  () => ListOperationsRequest,
  () => ListOperationsResponse
);
export var UpdateInstanceCustomHealthStatus = op(
  n0,
  _UICHS,
  0,
  () => UpdateInstanceCustomHealthStatusRequest,
  () => Unit
);
export var UpdateService = op(
  n0,
  _US,
  0,
  () => UpdateServiceRequest,
  () => UpdateServiceResponse
);

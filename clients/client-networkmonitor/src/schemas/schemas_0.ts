const _ADE = "AccessDeniedException";
const _CE = "ConflictException";
const _CM = "CreateMonitor";
const _CMI = "CreateMonitorInput";
const _CMO = "CreateMonitorOutput";
const _CMPI = "CreateMonitorProbeInput";
const _CMPIL = "CreateMonitorProbeInputList";
const _CP = "CreateProbe";
const _CPI = "CreateProbeInput";
const _CPO = "CreateProbeOutput";
const _DM = "DeleteMonitor";
const _DMI = "DeleteMonitorInput";
const _DMO = "DeleteMonitorOutput";
const _DP = "DeleteProbe";
const _DPI = "DeleteProbeInput";
const _DPO = "DeleteProbeOutput";
const _GM = "GetMonitor";
const _GMI = "GetMonitorInput";
const _GMO = "GetMonitorOutput";
const _GP = "GetProbe";
const _GPI = "GetProbeInput";
const _GPO = "GetProbeOutput";
const _ISE = "InternalServerException";
const _LM = "ListMonitors";
const _LMI = "ListMonitorsInput";
const _LMO = "ListMonitorsOutput";
const _LTFR = "ListTagsForResource";
const _LTFRI = "ListTagsForResourceInput";
const _LTFRO = "ListTagsForResourceOutput";
const _ML = "MonitorList";
const _MS = "MonitorSummary";
const _P = "Probe";
const _PI = "ProbeInput";
const _PL = "ProbeList";
const _RNFE = "ResourceNotFoundException";
const _SQEE = "ServiceQuotaExceededException";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRI = "TagResourceInput";
const _TRO = "TagResourceOutput";
const _UM = "UpdateMonitor";
const _UMI = "UpdateMonitorInput";
const _UMO = "UpdateMonitorOutput";
const _UP = "UpdateProbe";
const _UPI = "UpdateProbeInput";
const _UPO = "UpdateProbeOutput";
const _UR = "UntagResource";
const _URI = "UntagResourceInput";
const _URO = "UntagResourceOutput";
const _VE = "ValidationException";
const _aF = "addressFamily";
const _aP = "aggregationPeriod";
const _c = "client";
const _cA = "createdAt";
const _cT = "clientToken";
const _d = "destination";
const _dP = "destinationPort";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _m = "message";
const _mA = "monitorArn";
const _mAo = "modifiedAt";
const _mN = "monitorName";
const _mR = "maxResults";
const _mo = "monitors";
const _nT = "nextToken";
const _p = "probes";
const _pA = "probeArn";
const _pI = "probeId";
const _pS = "packetSize";
const _pT = "probeTags";
const _pr = "protocol";
const _pro = "probe";
const _rA = "resourceArn";
const _s = "state";
const _sA = "sourceArn";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.networkmonitor";
const _t = "tags";
const _tK = "tagKeys";
const _vI = "vpcId";
const n0 = "com.amazonaws.networkmonitor";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { NetworkMonitorServiceException as __NetworkMonitorServiceException } from "../models/NetworkMonitorServiceException";

/* eslint no-var: 0 */
export var AccessDeniedException: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);
export var ConflictException: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);
export var CreateMonitorInput: StaticStructureSchema = [
  3,
  n0,
  _CMI,
  0,
  [_mN, _p, _aP, _cT, _t],
  [0, () => CreateMonitorProbeInputList, 1, [0, 4], 128 | 0],
];
export var CreateMonitorOutput: StaticStructureSchema = [
  3,
  n0,
  _CMO,
  0,
  [_mA, _mN, _s, _aP, _t],
  [0, 0, 0, 1, 128 | 0],
];
export var CreateMonitorProbeInput: StaticStructureSchema = [
  3,
  n0,
  _CMPI,
  0,
  [_sA, _d, _dP, _pr, _pS, _pT],
  [0, 0, 1, 0, 1, 128 | 0],
];
export var CreateProbeInput: StaticStructureSchema = [
  3,
  n0,
  _CPI,
  0,
  [_mN, _pro, _cT, _t],
  [[0, 1], () => ProbeInput, [0, 4], 128 | 0],
];
export var CreateProbeOutput: StaticStructureSchema = [
  3,
  n0,
  _CPO,
  0,
  [_pI, _pA, _sA, _d, _dP, _pr, _pS, _aF, _vI, _s, _cA, _mAo, _t],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 4, 4, 128 | 0],
];
export var DeleteMonitorInput: StaticStructureSchema = [3, n0, _DMI, 0, [_mN], [[0, 1]]];
export var DeleteMonitorOutput: StaticStructureSchema = [3, n0, _DMO, 0, [], []];
export var DeleteProbeInput: StaticStructureSchema = [
  3,
  n0,
  _DPI,
  0,
  [_mN, _pI],
  [
    [0, 1],
    [0, 1],
  ],
];
export var DeleteProbeOutput: StaticStructureSchema = [3, n0, _DPO, 0, [], []];
export var GetMonitorInput: StaticStructureSchema = [3, n0, _GMI, 0, [_mN], [[0, 1]]];
export var GetMonitorOutput: StaticStructureSchema = [
  3,
  n0,
  _GMO,
  0,
  [_mA, _mN, _s, _aP, _t, _p, _cA, _mAo],
  [0, 0, 0, 1, 128 | 0, () => ProbeList, 4, 4],
];
export var GetProbeInput: StaticStructureSchema = [
  3,
  n0,
  _GPI,
  0,
  [_mN, _pI],
  [
    [0, 1],
    [0, 1],
  ],
];
export var GetProbeOutput: StaticStructureSchema = [
  3,
  n0,
  _GPO,
  0,
  [_pI, _pA, _sA, _d, _dP, _pr, _pS, _aF, _vI, _s, _cA, _mAo, _t],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 4, 4, 128 | 0],
];
export var InternalServerException: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _se, [_hE]: 500 }, [_m], [0]];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);
export var ListMonitorsInput: StaticStructureSchema = [
  3,
  n0,
  _LMI,
  0,
  [_nT, _mR, _s],
  [
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
    [0, { [_hQ]: _s }],
  ],
];
export var ListMonitorsOutput: StaticStructureSchema = [3, n0, _LMO, 0, [_mo, _nT], [() => MonitorList, 0]];
export var ListTagsForResourceInput: StaticStructureSchema = [3, n0, _LTFRI, 0, [_rA], [[0, 1]]];
export var ListTagsForResourceOutput: StaticStructureSchema = [3, n0, _LTFRO, 0, [_t], [128 | 0]];
export var MonitorSummary: StaticStructureSchema = [3, n0, _MS, 0, [_mA, _mN, _s, _aP, _t], [0, 0, 0, 1, 128 | 0]];
export var Probe: StaticStructureSchema = [
  3,
  n0,
  _P,
  0,
  [_pI, _pA, _sA, _d, _dP, _pr, _pS, _aF, _vI, _s, _cA, _mAo, _t],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 4, 4, 128 | 0],
];
export var ProbeInput: StaticStructureSchema = [3, n0, _PI, 0, [_sA, _d, _dP, _pr, _pS, _t], [0, 0, 1, 0, 1, 128 | 0]];
export var ResourceNotFoundException: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);
export var ServiceQuotaExceededException: StaticErrorSchema = [-3, n0, _SQEE, { [_e]: _c, [_hE]: 402 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);
export var TagResourceInput: StaticStructureSchema = [3, n0, _TRI, 0, [_rA, _t], [[0, 1], 128 | 0]];
export var TagResourceOutput: StaticStructureSchema = [3, n0, _TRO, 0, [], []];
export var ThrottlingException: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);
export var UntagResourceInput: StaticStructureSchema = [
  3,
  n0,
  _URI,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _tK }],
  ],
];
export var UntagResourceOutput: StaticStructureSchema = [3, n0, _URO, 0, [], []];
export var UpdateMonitorInput: StaticStructureSchema = [3, n0, _UMI, 0, [_mN, _aP], [[0, 1], 1]];
export var UpdateMonitorOutput: StaticStructureSchema = [
  3,
  n0,
  _UMO,
  0,
  [_mA, _mN, _s, _aP, _t],
  [0, 0, 0, 1, 128 | 0],
];
export var UpdateProbeInput: StaticStructureSchema = [
  3,
  n0,
  _UPI,
  0,
  [_mN, _pI, _s, _d, _dP, _pr, _pS],
  [[0, 1], [0, 1], 0, 0, 1, 0, 1],
];
export var UpdateProbeOutput: StaticStructureSchema = [
  3,
  n0,
  _UPO,
  0,
  [_pI, _pA, _sA, _d, _dP, _pr, _pS, _aF, _vI, _s, _cA, _mAo, _t],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 4, 4, 128 | 0],
];
export var ValidationException: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);
export var __Unit = "unit" as const;
export var NetworkMonitorServiceException: StaticErrorSchema = [-3, _sm, "NetworkMonitorServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(NetworkMonitorServiceException, __NetworkMonitorServiceException);
export var CreateMonitorProbeInputList: StaticListSchema = [1, n0, _CMPIL, 0, () => CreateMonitorProbeInput];
export var MonitorList: StaticListSchema = [1, n0, _ML, 0, () => MonitorSummary];
export var ProbeList: StaticListSchema = [1, n0, _PL, 0, () => Probe];
export var TagKeyList = 64 | 0;
export var TagMap = 128 | 0;
export var CreateMonitor: StaticOperationSchema = [
  9,
  n0,
  _CM,
  { [_h]: ["POST", "/monitors", 200] },
  () => CreateMonitorInput,
  () => CreateMonitorOutput,
];
export var CreateProbe: StaticOperationSchema = [
  9,
  n0,
  _CP,
  { [_h]: ["POST", "/monitors/{monitorName}/probes", 200] },
  () => CreateProbeInput,
  () => CreateProbeOutput,
];
export var DeleteMonitor: StaticOperationSchema = [
  9,
  n0,
  _DM,
  { [_h]: ["DELETE", "/monitors/{monitorName}", 200] },
  () => DeleteMonitorInput,
  () => DeleteMonitorOutput,
];
export var DeleteProbe: StaticOperationSchema = [
  9,
  n0,
  _DP,
  { [_h]: ["DELETE", "/monitors/{monitorName}/probes/{probeId}", 200] },
  () => DeleteProbeInput,
  () => DeleteProbeOutput,
];
export var GetMonitor: StaticOperationSchema = [
  9,
  n0,
  _GM,
  { [_h]: ["GET", "/monitors/{monitorName}", 200] },
  () => GetMonitorInput,
  () => GetMonitorOutput,
];
export var GetProbe: StaticOperationSchema = [
  9,
  n0,
  _GP,
  { [_h]: ["GET", "/monitors/{monitorName}/probes/{probeId}", 200] },
  () => GetProbeInput,
  () => GetProbeOutput,
];
export var ListMonitors: StaticOperationSchema = [
  9,
  n0,
  _LM,
  { [_h]: ["GET", "/monitors", 200] },
  () => ListMonitorsInput,
  () => ListMonitorsOutput,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["GET", "/tags/{resourceArn}", 200] },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/tags/{resourceArn}", 200] },
  () => TagResourceInput,
  () => TagResourceOutput,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["DELETE", "/tags/{resourceArn}", 200] },
  () => UntagResourceInput,
  () => UntagResourceOutput,
];
export var UpdateMonitor: StaticOperationSchema = [
  9,
  n0,
  _UM,
  { [_h]: ["PATCH", "/monitors/{monitorName}", 200] },
  () => UpdateMonitorInput,
  () => UpdateMonitorOutput,
];
export var UpdateProbe: StaticOperationSchema = [
  9,
  n0,
  _UP,
  { [_h]: ["PATCH", "/monitors/{monitorName}/probes/{probeId}", 200] },
  () => UpdateProbeInput,
  () => UpdateProbeOutput,
];

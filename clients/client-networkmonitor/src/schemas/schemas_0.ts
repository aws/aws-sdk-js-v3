export const _ADE = "AccessDeniedException";
export const _CE = "ConflictException";
export const _CM = "CreateMonitor";
export const _CMI = "CreateMonitorInput";
export const _CMO = "CreateMonitorOutput";
export const _CMPI = "CreateMonitorProbeInput";
export const _CMPIL = "CreateMonitorProbeInputList";
export const _CP = "CreateProbe";
export const _CPI = "CreateProbeInput";
export const _CPO = "CreateProbeOutput";
export const _DM = "DeleteMonitor";
export const _DMI = "DeleteMonitorInput";
export const _DMO = "DeleteMonitorOutput";
export const _DP = "DeleteProbe";
export const _DPI = "DeleteProbeInput";
export const _DPO = "DeleteProbeOutput";
export const _GM = "GetMonitor";
export const _GMI = "GetMonitorInput";
export const _GMO = "GetMonitorOutput";
export const _GP = "GetProbe";
export const _GPI = "GetProbeInput";
export const _GPO = "GetProbeOutput";
export const _ISE = "InternalServerException";
export const _LM = "ListMonitors";
export const _LMI = "ListMonitorsInput";
export const _LMO = "ListMonitorsOutput";
export const _LTFR = "ListTagsForResource";
export const _LTFRI = "ListTagsForResourceInput";
export const _LTFRO = "ListTagsForResourceOutput";
export const _ML = "MonitorList";
export const _MS = "MonitorSummary";
export const _P = "Probe";
export const _PI = "ProbeInput";
export const _PL = "ProbeList";
export const _RNFE = "ResourceNotFoundException";
export const _SQEE = "ServiceQuotaExceededException";
export const _TE = "ThrottlingException";
export const _TR = "TagResource";
export const _TRI = "TagResourceInput";
export const _TRO = "TagResourceOutput";
export const _UM = "UpdateMonitor";
export const _UMI = "UpdateMonitorInput";
export const _UMO = "UpdateMonitorOutput";
export const _UP = "UpdateProbe";
export const _UPI = "UpdateProbeInput";
export const _UPO = "UpdateProbeOutput";
export const _UR = "UntagResource";
export const _URI = "UntagResourceInput";
export const _URO = "UntagResourceOutput";
export const _VE = "ValidationException";
export const _aF = "addressFamily";
export const _aP = "aggregationPeriod";
export const _c = "client";
export const _cA = "createdAt";
export const _cT = "clientToken";
export const _d = "destination";
export const _dP = "destinationPort";
export const _e = "error";
export const _h = "http";
export const _hE = "httpError";
export const _hQ = "httpQuery";
export const _m = "message";
export const _mA = "monitorArn";
export const _mAo = "modifiedAt";
export const _mN = "monitorName";
export const _mR = "maxResults";
export const _mo = "monitors";
export const _nT = "nextToken";
export const _p = "probes";
export const _pA = "probeArn";
export const _pI = "probeId";
export const _pS = "packetSize";
export const _pT = "probeTags";
export const _pr = "protocol";
export const _pro = "probe";
export const _rA = "resourceArn";
export const _s = "state";
export const _sA = "sourceArn";
export const _se = "server";
export const _t = "tags";
export const _tK = "tagKeys";
export const _vI = "vpcId";
export const n0 = "com.amazonaws.networkmonitor";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { NetworkMonitorServiceException as __NetworkMonitorServiceException } from "../models/NetworkMonitorServiceException";

/* eslint no-var: 0 */

export var NetworkMonitorServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.networkmonitor",
  "NetworkMonitorServiceException",
  0,
  [],
  [],
  __NetworkMonitorServiceException
);

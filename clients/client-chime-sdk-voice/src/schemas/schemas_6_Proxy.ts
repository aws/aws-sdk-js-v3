// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AC,
  _Ca,
  _Co,
  _CPS,
  _CPSR,
  _CPSRr,
  _CT,
  _D,
  _DSEM,
  _EM,
  _ET,
  _FBPN,
  _GML,
  _GMP,
  _GPS,
  _GPSR,
  _GPSRe,
  _h,
  _N,
  _NSB,
  _Pa,
  _Par,
  _PN,
  _PNPC,
  _PPN,
  _PPNL,
  _PPNr,
  _Pr,
  _PS,
  _PSI,
  _PSNS,
  _PVCP,
  _PVCPR,
  _PVCPRu,
  _S,
  _UPS,
  _UPSR,
  _UPSRp,
  _UT,
  _VCI,
  E164PhoneNumber,
  n0,
} from "./schemas_0";
import { Proxy } from "./schemas_29_Connector";

/* eslint no-var: 0 */

export var ProxySessionNameString = sim(n0, _PSNS, 0, 8);
export var CreateProxySessionRequest = struct(
  n0,
  _CPSR,
  0,
  [_VCI, _PPN, _N, _EM, _Ca, _NSB, _GML, _GMP],
  [
    [0, 1],
    [() => ParticipantPhoneNumberList, 0],
    [() => ProxySessionNameString, 0],
    1,
    64 | 0,
    0,
    0,
    () => GeoMatchParams,
  ]
);
export var CreateProxySessionResponse = struct(n0, _CPSRr, 0, [_PS], [[() => ProxySession, 0]]);
export var GeoMatchParams = struct(n0, _GMP, 0, [_Co, _AC], [0, 0]);
export var GetProxySessionRequest = struct(
  n0,
  _GPSR,
  0,
  [_VCI, _PSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetProxySessionResponse = struct(n0, _GPSRe, 0, [_PS], [[() => ProxySession, 0]]);
export var Participant = struct(
  n0,
  _Pa,
  0,
  [_PN, _PPNr],
  [
    [() => E164PhoneNumber, 0],
    [() => E164PhoneNumber, 0],
  ]
);
export var ProxySession = struct(
  n0,
  _PS,
  0,
  [_VCI, _PSI, _N, _S, _EM, _Ca, _CT, _UT, _ET, _Par, _NSB, _GML, _GMP],
  [0, 0, 0, 0, 1, 64 | 0, 5, 5, 5, [() => Participants, 0], 0, 0, () => GeoMatchParams]
);
export var PutVoiceConnectorProxyRequest = struct(
  n0,
  _PVCPR,
  0,
  [_VCI, _DSEM, _PNPC, _FBPN, _D],
  [[0, 1], 1, 64 | 0, [() => E164PhoneNumber, 0], 2]
);
export var PutVoiceConnectorProxyResponse = struct(n0, _PVCPRu, 0, [_Pr], [[() => Proxy, 0]]);
export var UpdateProxySessionRequest = struct(n0, _UPSR, 0, [_VCI, _PSI, _Ca, _EM], [[0, 1], [0, 1], 64 | 0, 1]);
export var UpdateProxySessionResponse = struct(n0, _UPSRp, 0, [_PS], [[() => ProxySession, 0]]);
export var CapabilityList = 64 | 0;

export var CountryList = 64 | 0;

export var ParticipantPhoneNumberList = list(n0, _PPNL, 0, [() => E164PhoneNumber, 0]);
export var Participants = list(n0, _Par, 0, [() => Participant, 0]);
export var CreateProxySession = op(
  n0,
  _CPS,
  {
    [_h]: ["POST", "/voice-connectors/{VoiceConnectorId}/proxy-sessions", 201],
  },
  () => CreateProxySessionRequest,
  () => CreateProxySessionResponse
);
export var GetProxySession = op(
  n0,
  _GPS,
  {
    [_h]: ["GET", "/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}", 200],
  },
  () => GetProxySessionRequest,
  () => GetProxySessionResponse
);
export var PutVoiceConnectorProxy = op(
  n0,
  _PVCP,
  {
    [_h]: ["PUT", "/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy", 200],
  },
  () => PutVoiceConnectorProxyRequest,
  () => PutVoiceConnectorProxyResponse
);
export var UpdateProxySession = op(
  n0,
  _UPS,
  {
    [_h]: ["POST", "/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}", 201],
  },
  () => UpdateProxySessionRequest,
  () => UpdateProxySessionResponse
);

// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aA,
  _aE,
  _aIp,
  _ap,
  _aPc,
  _cA,
  _cE,
  _col,
  _DI,
  _DIR,
  _DIRe,
  _dSa,
  _dSNa,
  _dSRA,
  _dVP,
  _eP,
  _fo,
  _GI,
  _GIR,
  _GIRe,
  _ID,
  _iD,
  _iN,
  _iNP,
  _IS,
  _iS,
  _ISn,
  _iSn,
  _iTn,
  _kKA,
  _LI,
  _LIR,
  _LIRi,
  _lP,
  _nP,
  _OSA,
  _OSC,
  _OSDAP,
  _OSDS,
  _OSEP,
  _OSID,
  _oSID,
  _OSLP,
  _OSNP,
  _OSRC,
  _oSRC,
  _OSRS,
  _OSW,
  _PI,
  _PIR,
  _PIRu,
  _pN,
  _RC,
  _rC,
  _rD,
  _sMt,
  _sta,
  _w,
  _wI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIntegrationRequest = struct(n0, _DIR, 0, [_iN, _fo], [0, 2]);
export var DeleteIntegrationResponse = struct(n0, _DIRe, 0, [], []);
export var GetIntegrationRequest = struct(n0, _GIR, 0, [_iN], [0]);
export var GetIntegrationResponse = struct(n0, _GIRe, 0, [_iN, _iTn, _iS, _iD], [0, 0, 0, () => IntegrationDetails]);
export var IntegrationSummary = struct(n0, _IS, 0, [_iN, _iTn, _iS], [0, 0, 0]);
export var ListIntegrationsRequest = struct(n0, _LIR, 0, [_iNP, _iTn, _iS], [0, 0, 0]);
export var ListIntegrationsResponse = struct(n0, _LIRi, 0, [_iSn], [() => IntegrationSummaries]);
export var OpenSearchApplication = struct(
  n0,
  _OSA,
  0,
  [_aE, _aA, _aIp, _sta],
  [0, 0, 0, () => OpenSearchResourceStatus]
);
export var OpenSearchCollection = struct(n0, _OSC, 0, [_cE, _cA, _sta], [0, 0, () => OpenSearchResourceStatus]);
export var OpenSearchDataAccessPolicy = struct(n0, _OSDAP, 0, [_pN, _sta], [0, () => OpenSearchResourceStatus]);
export var OpenSearchDataSource = struct(n0, _OSDS, 0, [_dSNa, _sta], [0, () => OpenSearchResourceStatus]);
export var OpenSearchEncryptionPolicy = struct(n0, _OSEP, 0, [_pN, _sta], [0, () => OpenSearchResourceStatus]);
export var OpenSearchIntegrationDetails = struct(
  n0,
  _OSID,
  0,
  [_dSa, _ap, _col, _w, _eP, _nP, _aPc, _lP],
  [
    () => OpenSearchDataSource,
    () => OpenSearchApplication,
    () => OpenSearchCollection,
    () => OpenSearchWorkspace,
    () => OpenSearchEncryptionPolicy,
    () => OpenSearchNetworkPolicy,
    () => OpenSearchDataAccessPolicy,
    () => OpenSearchLifecyclePolicy,
  ]
);
export var OpenSearchLifecyclePolicy = struct(n0, _OSLP, 0, [_pN, _sta], [0, () => OpenSearchResourceStatus]);
export var OpenSearchNetworkPolicy = struct(n0, _OSNP, 0, [_pN, _sta], [0, () => OpenSearchResourceStatus]);
export var OpenSearchResourceConfig = struct(n0, _OSRC, 0, [_kKA, _dSRA, _dVP, _aA, _rD], [0, 0, 64 | 0, 0, 1]);
export var OpenSearchResourceStatus = struct(n0, _OSRS, 0, [_sta, _sMt], [0, 0]);
export var OpenSearchWorkspace = struct(n0, _OSW, 0, [_wI, _sta], [0, () => OpenSearchResourceStatus]);
export var PutIntegrationRequest = struct(n0, _PIR, 0, [_iN, _rC, _iTn], [0, () => ResourceConfig, 0]);
export var PutIntegrationResponse = struct(n0, _PIRu, 0, [_iN, _iS], [0, 0]);
export var DashboardViewerPrincipals = 64 | 0;

export var IntegrationSummaries = list(n0, _ISn, 0, () => IntegrationSummary);
export var IntegrationDetails = uni(n0, _ID, 0, [_oSID], [() => OpenSearchIntegrationDetails]);
export var ResourceConfig = uni(n0, _RC, 0, [_oSRC], [() => OpenSearchResourceConfig]);
export var DeleteIntegration = op(
  n0,
  _DI,
  0,
  () => DeleteIntegrationRequest,
  () => DeleteIntegrationResponse
);
export var GetIntegration = op(
  n0,
  _GI,
  0,
  () => GetIntegrationRequest,
  () => GetIntegrationResponse
);
export var ListIntegrations = op(
  n0,
  _LI,
  0,
  () => ListIntegrationsRequest,
  () => ListIntegrationsResponse
);
export var PutIntegration = op(
  n0,
  _PI,
  0,
  () => PutIntegrationRequest,
  () => PutIntegrationResponse
);

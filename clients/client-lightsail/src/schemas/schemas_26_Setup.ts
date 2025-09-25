// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _com,
  _cPe,
  _dNom,
  _dTa,
  _EA,
  _eAm,
  _eDx,
  _GSH,
  _GSHR,
  _GSHRe,
  _ht,
  _iN,
  _l,
  _n,
  _nPT,
  _o,
  _oI,
  _pT,
  _req,
  _res,
  _rN,
  _rT,
  _s,
  _sE,
  _SED,
  _SEDL,
  _SH,
  _sH,
  _sHL,
  _SHR,
  _SIH,
  _SIHR,
  _SIHRe,
  _sO,
  _SR,
  _v,
  n0,
  OperationList,
  ResourceLocation,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EmailAddress = sim(n0, _EA, 0, 8);
export var GetSetupHistoryRequest = struct(n0, _GSHR, 0, [_rN, _pT], [0, 0]);
export var GetSetupHistoryResult = struct(n0, _GSHRe, 0, [_sH, _nPT], [() => setupHistoryList, 0]);
export var SetupExecutionDetails = struct(n0, _SED, 0, [_com, _dTa, _n, _s, _sE, _sO, _v], [0, 4, 0, 0, 0, 0, 0]);
export var SetupHistory = struct(
  n0,
  _SH,
  0,
  [_oI, _req, _res, _eDx, _s],
  [0, () => SetupRequest, () => SetupHistoryResource, () => SetupExecutionDetailsList, 0]
);
export var SetupHistoryResource = struct(n0, _SHR, 0, [_n, _a, _cA, _l, _rT], [0, 0, 4, () => ResourceLocation, 0]);
export var SetupInstanceHttpsRequest = struct(
  n0,
  _SIHR,
  0,
  [_iN, _eAm, _dNom, _cPe],
  [0, [() => EmailAddress, 0], 64 | 0, 0]
);
export var SetupInstanceHttpsResult = struct(n0, _SIHRe, 0, [_o], [() => OperationList]);
export var SetupRequest = struct(n0, _SR, 0, [_iN, _dNom, _cPe], [0, 64 | 0, 0]);
export var SetupDomainNameList = 64 | 0;

export var SetupExecutionDetailsList = list(n0, _SEDL, 0, () => SetupExecutionDetails);
export var setupHistoryList = list(n0, _sHL, 0, () => SetupHistory);
export var GetSetupHistory = op(
  n0,
  _GSH,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/get-setup-history", 200],
  },
  () => GetSetupHistoryRequest,
  () => GetSetupHistoryResult
);
export var SetupInstanceHttps = op(
  n0,
  _SIH,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/setup-instance-https", 200],
  },
  () => SetupInstanceHttpsRequest,
  () => SetupInstanceHttpsResult
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aC,
  _aT,
  _bA,
  _bI,
  _cA,
  _CB,
  _CBR,
  _CBRr,
  _CCIR,
  _CCIr,
  _CCIRr,
  _CG,
  _CGR,
  _CGRr,
  _CGT,
  _CGTR,
  _CGTRr,
  _cIA,
  _cII,
  _cPC,
  _cTl,
  _d,
  _DB,
  _DBR,
  _DBRe,
  _DCI,
  _DCIR,
  _DCIRe,
  _eL,
  _eRA,
  _gA,
  _gI,
  _gIa,
  _gU,
  _h,
  _hQ,
  _iT,
  _kKA,
  _lUA,
  _n,
  _nC,
  _pC,
  _pT,
  _r,
  _rA,
  _s,
  _sR,
  _t,
  _tC,
  _tI,
  _uA,
  _wID,
  Description,
  n0,
} from "./schemas_0";
import { CredentialProviderConfigurations, TargetConfiguration } from "./schemas_5_Gateway";
import { GatewayDescription, GatewayName } from "./schemas_9_Gateway";
import { TargetDescription, TargetName } from "./schemas_10_Gateway";
import {
  AuthorizerConfiguration,
  BrowserNetworkConfiguration,
  CodeInterpreterNetworkConfiguration,
  GatewayProtocolConfiguration,
  RecordingConfig,
  WorkloadIdentityDetails,
} from "./schemas_13_Create";

/* eslint no-var: 0 */

export var CreateBrowserRequest = struct(
  n0,
  _CBR,
  0,
  [_n, _d, _eRA, _nC, _r, _cTl, _t],
  [0, [() => Description, 0], 0, () => BrowserNetworkConfiguration, () => RecordingConfig, [0, 4], 128 | 0]
);
export var CreateBrowserResponse = struct(n0, _CBRr, 0, [_bI, _bA, _cA, _s], [0, 0, 5, 0]);
export var CreateCodeInterpreterRequest = struct(
  n0,
  _CCIR,
  0,
  [_n, _d, _eRA, _nC, _cTl, _t],
  [0, [() => Description, 0], 0, () => CodeInterpreterNetworkConfiguration, [0, 4], 128 | 0]
);
export var CreateCodeInterpreterResponse = struct(n0, _CCIRr, 0, [_cII, _cIA, _cA, _s], [0, 0, 5, 0]);
export var CreateGatewayRequest = struct(
  n0,
  _CGR,
  0,
  [_n, _d, _cTl, _rA, _pT, _pC, _aT, _aC, _kKA, _eL],
  [
    [() => GatewayName, 0],
    [() => GatewayDescription, 0],
    [0, 4],
    0,
    0,
    () => GatewayProtocolConfiguration,
    0,
    () => AuthorizerConfiguration,
    0,
    0,
  ]
);
export var CreateGatewayResponse = struct(
  n0,
  _CGRr,
  0,
  [_gA, _gI, _gU, _cA, _uA, _s, _sR, _n, _d, _rA, _pT, _pC, _aT, _aC, _kKA, _wID, _eL],
  [
    0,
    0,
    0,
    5,
    5,
    0,
    64 | 0,
    [() => GatewayName, 0],
    [() => GatewayDescription, 0],
    0,
    0,
    () => GatewayProtocolConfiguration,
    0,
    () => AuthorizerConfiguration,
    0,
    () => WorkloadIdentityDetails,
    0,
  ]
);
export var CreateGatewayTargetRequest = struct(
  n0,
  _CGTR,
  0,
  [_gIa, _n, _d, _cTl, _tC, _cPC],
  [
    [0, 1],
    [() => TargetName, 0],
    [() => TargetDescription, 0],
    [0, 4],
    [() => TargetConfiguration, 0],
    [() => CredentialProviderConfigurations, 0],
  ]
);
export var CreateGatewayTargetResponse = struct(
  n0,
  _CGTRr,
  0,
  [_gA, _tI, _cA, _uA, _s, _sR, _n, _d, _tC, _cPC],
  [
    0,
    0,
    5,
    5,
    0,
    64 | 0,
    [() => TargetName, 0],
    [() => TargetDescription, 0],
    [() => TargetConfiguration, 0],
    [() => CredentialProviderConfigurations, 0],
  ]
);
export var DeleteBrowserRequest = struct(
  n0,
  _DBR,
  0,
  [_bI, _cTl],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
  ]
);
export var DeleteBrowserResponse = struct(n0, _DBRe, 0, [_bI, _s, _lUA], [0, 0, 5]);
export var DeleteCodeInterpreterRequest = struct(
  n0,
  _DCIR,
  0,
  [_cII, _cTl],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
  ]
);
export var DeleteCodeInterpreterResponse = struct(n0, _DCIRe, 0, [_cII, _s, _lUA], [0, 0, 5]);
export var CreateBrowser = op(
  n0,
  _CB,
  {
    [_h]: ["PUT", "/browsers", 201],
  },
  () => CreateBrowserRequest,
  () => CreateBrowserResponse
);
export var CreateCodeInterpreter = op(
  n0,
  _CCIr,
  {
    [_h]: ["PUT", "/code-interpreters", 201],
  },
  () => CreateCodeInterpreterRequest,
  () => CreateCodeInterpreterResponse
);
export var CreateGateway = op(
  n0,
  _CG,
  {
    [_h]: ["POST", "/gateways/", 202],
  },
  () => CreateGatewayRequest,
  () => CreateGatewayResponse
);
export var CreateGatewayTarget = op(
  n0,
  _CGT,
  {
    [_h]: ["POST", "/gateways/{gatewayIdentifier}/targets/", 202],
  },
  () => CreateGatewayTargetRequest,
  () => CreateGatewayTargetResponse
);
export var DeleteBrowser = op(
  n0,
  _DB,
  {
    [_h]: ["DELETE", "/browsers/{browserId}", 200],
  },
  () => DeleteBrowserRequest,
  () => DeleteBrowserResponse
);
export var DeleteCodeInterpreter = op(
  n0,
  _DCI,
  {
    [_h]: ["DELETE", "/code-interpreters/{codeInterpreterId}", 200],
  },
  () => DeleteCodeInterpreterRequest,
  () => DeleteCodeInterpreterResponse
);

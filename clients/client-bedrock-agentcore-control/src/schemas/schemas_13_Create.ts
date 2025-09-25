// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aA,
  _AC,
  _aC,
  _aCl,
  _aT,
  _b,
  _bA,
  _bI,
  _BNC,
  _cA,
  _cIA,
  _cII,
  _CINC,
  _cJWTA,
  _CJWTAC,
  _d,
  _dU,
  _eL,
  _en,
  _eRA,
  _fR,
  _gA,
  _GB,
  _GBR,
  _GBRe,
  _GCI,
  _GCIR,
  _GCIRe,
  _GG,
  _GGR,
  _GGRe,
  _gI,
  _gIa,
  _GPC,
  _gU,
  _h,
  _in,
  _kKA,
  _lUA,
  _mc,
  _MCPGC,
  _n,
  _nC,
  _nM,
  _p,
  _pC,
  _pT,
  _r,
  _rA,
  _RC,
  _s,
  _sG,
  _SL,
  _sL,
  _sR,
  _sT,
  _su,
  _sV,
  _uA,
  _UG,
  _UGR,
  _UGRp,
  _VC,
  _vC,
  _wIA,
  _WID,
  _wID,
  Description,
  n0,
} from "./schemas_0";
import { GatewayDescription, GatewayName } from "./schemas_9_Gateway";

/* eslint no-var: 0 */

export var BrowserNetworkConfiguration = struct(n0, _BNC, 0, [_nM, _vC], [0, () => VpcConfig]);
export var CodeInterpreterNetworkConfiguration = struct(n0, _CINC, 0, [_nM, _vC], [0, () => VpcConfig]);
export var CustomJWTAuthorizerConfiguration = struct(n0, _CJWTAC, 0, [_dU, _aA, _aCl], [0, 64 | 0, 64 | 0]);
export var GetBrowserRequest = struct(n0, _GBR, 0, [_bI], [[0, 1]]);
export var GetBrowserResponse = struct(
  n0,
  _GBRe,
  0,
  [_bI, _bA, _n, _d, _eRA, _nC, _r, _s, _fR, _cA, _lUA],
  [0, 0, 0, [() => Description, 0], 0, () => BrowserNetworkConfiguration, () => RecordingConfig, 0, 0, 5, 5]
);
export var GetCodeInterpreterRequest = struct(n0, _GCIR, 0, [_cII], [[0, 1]]);
export var GetCodeInterpreterResponse = struct(
  n0,
  _GCIRe,
  0,
  [_cII, _cIA, _n, _d, _eRA, _nC, _s, _fR, _cA, _lUA],
  [0, 0, 0, [() => Description, 0], 0, () => CodeInterpreterNetworkConfiguration, 0, 0, 5, 5]
);
export var GetGatewayRequest = struct(n0, _GGR, 0, [_gIa], [[0, 1]]);
export var GetGatewayResponse = struct(
  n0,
  _GGRe,
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
export var MCPGatewayConfiguration = struct(n0, _MCPGC, 0, [_sV, _in, _sT], [64 | 0, 0, 0]);
export var RecordingConfig = struct(n0, _RC, 0, [_en, _sL], [2, () => S3Location]);
export var S3Location = struct(n0, _SL, 0, [_b, _p], [0, 0]);
export var UpdateGatewayRequest = struct(
  n0,
  _UGR,
  0,
  [_gIa, _n, _d, _rA, _pT, _pC, _aT, _aC, _kKA, _eL],
  [
    [0, 1],
    [() => GatewayName, 0],
    [() => GatewayDescription, 0],
    0,
    0,
    () => GatewayProtocolConfiguration,
    0,
    () => AuthorizerConfiguration,
    0,
    0,
  ]
);
export var UpdateGatewayResponse = struct(
  n0,
  _UGRp,
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
export var VpcConfig = struct(n0, _VC, 0, [_sG, _su], [64 | 0, 64 | 0]);
export var WorkloadIdentityDetails = struct(n0, _WID, 0, [_wIA], [0]);
export var AllowedAudienceList = 64 | 0;

export var AllowedClientsList = 64 | 0;

export var McpSupportedVersions = 64 | 0;

export var SecurityGroups = 64 | 0;

export var Subnets = 64 | 0;

export var AuthorizerConfiguration = uni(n0, _AC, 0, [_cJWTA], [() => CustomJWTAuthorizerConfiguration]);
export var GatewayProtocolConfiguration = uni(n0, _GPC, 0, [_mc], [() => MCPGatewayConfiguration]);
export var GetBrowser = op(
  n0,
  _GB,
  {
    [_h]: ["GET", "/browsers/{browserId}", 200],
  },
  () => GetBrowserRequest,
  () => GetBrowserResponse
);
export var GetCodeInterpreter = op(
  n0,
  _GCI,
  {
    [_h]: ["GET", "/code-interpreters/{codeInterpreterId}", 200],
  },
  () => GetCodeInterpreterRequest,
  () => GetCodeInterpreterResponse
);
export var GetGateway = op(
  n0,
  _GG,
  {
    [_h]: ["GET", "/gateways/{gatewayIdentifier}/", 200],
  },
  () => GetGatewayRequest,
  () => GetGatewayResponse
);
export var UpdateGateway = op(
  n0,
  _UG,
  {
    [_h]: ["PUT", "/gateways/{gatewayIdentifier}/", 202],
  },
  () => UpdateGatewayRequest,
  () => UpdateGatewayResponse
);

// smithy-typescript generated code
import { list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aKCP,
  _ASC,
  _bOAI,
  _cA,
  _cL,
  _CP,
  _cP,
  _CPC,
  _cPC,
  _CPCr,
  _cPN,
  _cPr,
  _cPT,
  _cPu,
  _d,
  _DG,
  _DGR,
  _DGRe,
  _DGT,
  _DGTR,
  _DGTRe,
  _gA,
  _GAKCP,
  _GGT,
  _GGTR,
  _GGTRe,
  _gI,
  _gIa,
  _h,
  _IP,
  _iP,
  _iS,
  _it,
  _l,
  _lA,
  _mc,
  _MLTC,
  _MTC,
  _n,
  _OACP,
  _OACPu,
  _OACPV,
  _oAS,
  _oCP,
  _oS,
  _pA,
  _pr,
  _re,
  _s,
  _s_,
  _SC,
  _sc,
  _SD,
  _sM,
  _SP,
  _sR,
  _TC,
  _tC,
  _TDo,
  _TDoo,
  _tI,
  _tS,
  _TSo,
  _ty,
  _u,
  _uA,
  _UGT,
  _UGTR,
  _UGTRp,
  n0,
} from "./schemas_0";
import { TargetDescription, TargetName } from "./schemas_10_Gateway";

/* eslint no-var: 0 */

export var InlinePayload = sim(n0, _IP, 0, 8);
export var OAuthCustomParametersValue = sim(n0, _OACPV, 0, 8);
export var CredentialProviderConfiguration = struct(n0, _CPC, 0, [_cPT, _cP], [0, [() => CredentialProvider, 0]]);
export var DeleteGatewayRequest = struct(n0, _DGR, 0, [_gIa], [[0, 1]]);
export var DeleteGatewayResponse = struct(n0, _DGRe, 0, [_gI, _s, _sR], [0, 0, 64 | 0]);
export var DeleteGatewayTargetRequest = struct(
  n0,
  _DGTR,
  0,
  [_gIa, _tI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteGatewayTargetResponse = struct(n0, _DGTRe, 0, [_gA, _tI, _s, _sR], [0, 0, 0, 64 | 0]);
export var GatewayApiKeyCredentialProvider = struct(n0, _GAKCP, 0, [_pA, _cPN, _cPr, _cL], [0, 0, 0, 0]);
export var GetGatewayTargetRequest = struct(
  n0,
  _GGTR,
  0,
  [_gIa, _tI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetGatewayTargetResponse = struct(
  n0,
  _GGTRe,
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
export var McpLambdaTargetConfiguration = struct(n0, _MLTC, 0, [_lA, _tS], [0, () => ToolSchema]);
export var OAuthCredentialProvider = struct(
  n0,
  _OACP,
  0,
  [_pA, _sc, _cPu],
  [0, 64 | 0, [() => OAuthCustomParameters, 0]]
);
export var S3Configuration = struct(n0, _SC, 0, [_u, _bOAI], [0, 0]);
export var SchemaDefinition = struct(
  n0,
  _SD,
  0,
  [_ty, _pr, _re, _it, _d],
  [0, () => SchemaProperties, 64 | 0, () => SchemaDefinition, 0]
);
export var ToolDefinition = struct(
  n0,
  _TDo,
  0,
  [_n, _d, _iS, _oS],
  [0, 0, () => SchemaDefinition, () => SchemaDefinition]
);
export var UpdateGatewayTargetRequest = struct(
  n0,
  _UGTR,
  0,
  [_gIa, _tI, _n, _d, _tC, _cPC],
  [
    [0, 1],
    [0, 1],
    [() => TargetName, 0],
    [() => TargetDescription, 0],
    [() => TargetConfiguration, 0],
    [() => CredentialProviderConfigurations, 0],
  ]
);
export var UpdateGatewayTargetResponse = struct(
  n0,
  _UGTRp,
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
export var CredentialProviderConfigurations = list(n0, _CPCr, 0, [() => CredentialProviderConfiguration, 0]);
export var OAuthScopes = 64 | 0;

export var RequiredProperties = 64 | 0;

export var StatusReasons = 64 | 0;

export var ToolDefinitions = list(n0, _TDoo, 0, () => ToolDefinition);
export var OAuthCustomParameters = map(n0, _OACPu, 0, [0, 0], [() => OAuthCustomParametersValue, 0]);
export var SchemaProperties = map(n0, _SP, 0, 0, () => SchemaDefinition);
export var ApiSchemaConfiguration = uni(n0, _ASC, 0, [_s_, _iP], [() => S3Configuration, [() => InlinePayload, 0]]);
export var CredentialProvider = uni(
  n0,
  _CP,
  0,
  [_oCP, _aKCP],
  [[() => OAuthCredentialProvider, 0], () => GatewayApiKeyCredentialProvider]
);
export var McpTargetConfiguration = uni(
  n0,
  _MTC,
  0,
  [_oAS, _sM, _l],
  [[() => ApiSchemaConfiguration, 0], [() => ApiSchemaConfiguration, 0], () => McpLambdaTargetConfiguration]
);
export var TargetConfiguration = uni(n0, _TC, 0, [_mc], [[() => McpTargetConfiguration, 0]]);
export var ToolSchema = uni(n0, _TSo, 0, [_s_, _iP], [() => S3Configuration, () => ToolDefinitions]);
export var DeleteGateway = op(
  n0,
  _DG,
  {
    [_h]: ["DELETE", "/gateways/{gatewayIdentifier}/", 202],
  },
  () => DeleteGatewayRequest,
  () => DeleteGatewayResponse
);
export var DeleteGatewayTarget = op(
  n0,
  _DGT,
  {
    [_h]: ["DELETE", "/gateways/{gatewayIdentifier}/targets/{targetId}/", 202],
  },
  () => DeleteGatewayTargetRequest,
  () => DeleteGatewayTargetResponse
);
export var GetGatewayTarget = op(
  n0,
  _GGT,
  {
    [_h]: ["GET", "/gateways/{gatewayIdentifier}/targets/{targetId}/", 200],
  },
  () => GetGatewayTargetRequest,
  () => GetGatewayTargetResponse
);
export var UpdateGatewayTarget = op(
  n0,
  _UGT,
  {
    [_h]: ["PUT", "/gateways/{gatewayIdentifier}/targets/{targetId}/", 202],
  },
  () => UpdateGatewayTargetRequest,
  () => UpdateGatewayTargetResponse
);

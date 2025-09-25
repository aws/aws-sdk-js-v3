// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _ADA,
  _ADS,
  _AE,
  _AKAP,
  _AKN,
  _APu,
  _AT,
  _BAPa,
  _BPo,
  _CA,
  _CAKARP,
  _CARP,
  _CBARP,
  _CBP,
  _CBPL,
  _CHP,
  _CHPL,
  _CHPo,
  _CID,
  _COACRP,
  _COARP,
  _CP,
  _CQSP,
  _CQSPL,
  _CS,
  _CT,
  _D,
  _DADe,
  _DADRes,
  _DADResc,
  _DC,
  _DCe,
  _DCes,
  _DCR,
  _DCRe,
  _DCRel,
  _DCRele,
  _DCRes,
  _DCResc,
  _HM,
  _HP,
  _HVS,
  _IE,
  _IHP,
  _IRLPS,
  _IVS,
  _K,
  _LAT,
  _LMT,
  _N,
  _OAHP,
  _OAP,
  _QSP,
  _QSVS,
  _SA,
  _SR,
  _SS,
  _U,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var HeaderValueSensitive = sim(n0, _HVS, 0, 8);
export var QueryStringValueSensitive = sim(n0, _QSVS, 0, 8);
export var SensitiveString = sim(n0, _SS, 0, 8);
export var ConnectionApiKeyAuthResponseParameters = struct(n0, _CAKARP, 0, [_AKN], [0]);
export var ConnectionAuthResponseParameters = struct(
  n0,
  _CARP,
  0,
  [_BAPa, _OAP, _AKAP, _IHP],
  [
    () => ConnectionBasicAuthResponseParameters,
    [() => ConnectionOAuthResponseParameters, 0],
    () => ConnectionApiKeyAuthResponseParameters,
    [() => ConnectionHttpParameters, 0],
  ]
);
export var ConnectionBasicAuthResponseParameters = struct(n0, _CBARP, 0, [_U], [0]);
export var ConnectionBodyParameter = struct(n0, _CBP, 0, [_K, _V, _IVS], [0, [() => SensitiveString, 0], 2]);
export var ConnectionHeaderParameter = struct(n0, _CHP, 0, [_K, _V, _IVS], [0, [() => HeaderValueSensitive, 0], 2]);
export var ConnectionHttpParameters = struct(
  n0,
  _CHPo,
  0,
  [_HP, _QSP, _BPo],
  [
    [() => ConnectionHeaderParametersList, 0],
    [() => ConnectionQueryStringParametersList, 0],
    [() => ConnectionBodyParametersList, 0],
  ]
);
export var ConnectionOAuthClientResponseParameters = struct(n0, _COACRP, 0, [_CID], [0]);
export var ConnectionOAuthResponseParameters = struct(
  n0,
  _COARP,
  0,
  [_CP, _AE, _HM, _OAHP],
  [() => ConnectionOAuthClientResponseParameters, 0, 0, [() => ConnectionHttpParameters, 0]]
);
export var ConnectionQueryStringParameter = struct(
  n0,
  _CQSP,
  0,
  [_K, _V, _IVS],
  [0, [() => QueryStringValueSensitive, 0], 2]
);
export var DeauthorizeConnectionRequest = struct(n0, _DCR, 0, [_N], [0]);
export var DeauthorizeConnectionResponse = struct(n0, _DCRe, 0, [_CA, _CS, _CT, _LMT, _LAT], [0, 0, 4, 4, 4]);
export var DeleteConnectionRequest = struct(n0, _DCRel, 0, [_N], [0]);
export var DeleteConnectionResponse = struct(n0, _DCRele, 0, [_CA, _CS, _CT, _LMT, _LAT], [0, 0, 4, 4, 4]);
export var DescribeApiDestinationRequest = struct(n0, _DADRes, 0, [_N], [0]);
export var DescribeApiDestinationResponse = struct(
  n0,
  _DADResc,
  0,
  [_ADA, _N, _D, _ADS, _CA, _IE, _HM, _IRLPS, _CT, _LMT],
  [0, 0, 0, 0, 0, 0, 0, 1, 4, 4]
);
export var DescribeConnectionRequest = struct(n0, _DCRes, 0, [_N], [0]);
export var DescribeConnectionResponse = struct(
  n0,
  _DCResc,
  0,
  [_CA, _N, _D, _CS, _SR, _AT, _SA, _APu, _CT, _LMT, _LAT],
  [0, 0, 0, 0, 0, 0, 0, [() => ConnectionAuthResponseParameters, 0], 4, 4, 4]
);
export var ConnectionBodyParametersList = list(n0, _CBPL, 0, [() => ConnectionBodyParameter, 0]);
export var ConnectionHeaderParametersList = list(n0, _CHPL, 0, [() => ConnectionHeaderParameter, 0]);
export var ConnectionQueryStringParametersList = list(n0, _CQSPL, 0, [() => ConnectionQueryStringParameter, 0]);
export var DeauthorizeConnection = op(
  n0,
  _DC,
  0,
  () => DeauthorizeConnectionRequest,
  () => DeauthorizeConnectionResponse
);
export var DeleteConnection = op(
  n0,
  _DCe,
  0,
  () => DeleteConnectionRequest,
  () => DeleteConnectionResponse
);
export var DescribeApiDestination = op(
  n0,
  _DADe,
  0,
  () => DescribeApiDestinationRequest,
  () => DescribeApiDestinationResponse
);
export var DescribeConnection = op(
  n0,
  _DCes,
  0,
  () => DescribeConnectionRequest,
  () => DescribeConnectionResponse
);

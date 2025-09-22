// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _AD,
  _ADA,
  _ADE,
  _ADp,
  _ADRL,
  _ADS,
  _AE,
  _AHPS,
  _AKAP,
  _AKN,
  _AKV,
  _APu,
  _AT,
  _BAPa,
  _BPo,
  _c,
  _CA,
  _CAD,
  _CADR,
  _CADRr,
  _CAKARP,
  _CARP,
  _CBARP,
  _CBP,
  _CBPL,
  _CC,
  _CCAKARP,
  _CCARP,
  _CCBARP,
  _CCOACRP,
  _CCOARP,
  _CCR,
  _CCRr,
  _CHP,
  _CHPL,
  _CHPo,
  _CID,
  _Co,
  _COACRP,
  _COARP,
  _Con,
  _CP,
  _CPl,
  _CQSP,
  _CQSPL,
  _CRCA,
  _CRL,
  _CRP,
  _CS,
  _CSl,
  _CT,
  _D,
  _DADe,
  _DADRes,
  _DADResc,
  _DC,
  _DCCP,
  _DCe,
  _DCes,
  _DCR,
  _DCRe,
  _DCRel,
  _DCRele,
  _DCRes,
  _DCResc,
  _DCRP,
  _e,
  _HM,
  _HP,
  _HVS,
  _ICP,
  _IE,
  _IHP,
  _IRLPS,
  _IVS,
  _K,
  _KKI,
  _L,
  _LAD,
  _LADR,
  _LADRi,
  _LAT,
  _LCi,
  _LCR,
  _LCRi,
  _LMT,
  _m,
  _N,
  _NP,
  _NT,
  _OAHP,
  _OAP,
  _P,
  _QSP,
  _QSVS,
  _RAA,
  _RCA,
  _RP,
  _SA,
  _SR,
  _SS,
  _TE,
  _U,
  _UAD,
  _UADR,
  _UADRp,
  _UC,
  _UCAKARP,
  _UCARP,
  _UCBARP,
  _UCOACRP,
  _UCOARP,
  _UCR,
  _UCRp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AuthHeaderParametersSensitive = sim(n0, _AHPS, 0, 8);
export var HeaderValueSensitive = sim(n0, _HVS, 0, 8);
export var QueryStringValueSensitive = sim(n0, _QSVS, 0, 8);
export var SensitiveString = sim(n0, _SS, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var ApiDestination = struct(
  n0,
  _AD,
  0,
  [_ADA, _N, _ADS, _CA, _IE, _HM, _IRLPS, _CT, _LMT],
  [0, 0, 0, 0, 0, 0, 1, 4, 4]
);
export var Connection = struct(n0, _Co, 0, [_CA, _N, _CS, _SR, _AT, _CT, _LMT, _LAT], [0, 0, 0, 0, 0, 4, 4, 4]);
export var ConnectionApiKeyAuthResponseParameters = struct(n0, _CAKARP, 0, [_AKN], [0]);
export var ConnectionAuthResponseParameters = struct(
  n0,
  _CARP,
  0,
  [_BAPa, _OAP, _AKAP, _IHP, _CP],
  [
    () => ConnectionBasicAuthResponseParameters,
    [() => ConnectionOAuthResponseParameters, 0],
    () => ConnectionApiKeyAuthResponseParameters,
    [() => ConnectionHttpParameters, 0],
    () => DescribeConnectionConnectivityParameters,
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
  [_CPl, _AE, _HM, _OAHP],
  [() => ConnectionOAuthClientResponseParameters, 0, 0, [() => ConnectionHttpParameters, 0]]
);
export var ConnectionQueryStringParameter = struct(
  n0,
  _CQSP,
  0,
  [_K, _V, _IVS],
  [0, [() => QueryStringValueSensitive, 0], 2]
);
export var ConnectivityResourceConfigurationArn = struct(n0, _CRCA, 0, [_RCA], [0]);
export var ConnectivityResourceParameters = struct(n0, _CRP, 0, [_RP], [() => ConnectivityResourceConfigurationArn]);
export var CreateApiDestinationRequest = struct(n0, _CADR, 0, [_N, _D, _CA, _IE, _HM, _IRLPS], [0, 0, 0, 0, 0, 1]);
export var CreateApiDestinationResponse = struct(n0, _CADRr, 0, [_ADA, _ADS, _CT, _LMT], [0, 0, 4, 4]);
export var CreateConnectionApiKeyAuthRequestParameters = struct(
  n0,
  _CCAKARP,
  0,
  [_AKN, _AKV],
  [0, [() => AuthHeaderParametersSensitive, 0]]
);
export var CreateConnectionAuthRequestParameters = struct(
  n0,
  _CCARP,
  0,
  [_BAPa, _OAP, _AKAP, _IHP, _CP],
  [
    [() => CreateConnectionBasicAuthRequestParameters, 0],
    [() => CreateConnectionOAuthRequestParameters, 0],
    [() => CreateConnectionApiKeyAuthRequestParameters, 0],
    [() => ConnectionHttpParameters, 0],
    () => ConnectivityResourceParameters,
  ]
);
export var CreateConnectionBasicAuthRequestParameters = struct(
  n0,
  _CCBARP,
  0,
  [_U, _P],
  [0, [() => AuthHeaderParametersSensitive, 0]]
);
export var CreateConnectionOAuthClientRequestParameters = struct(
  n0,
  _CCOACRP,
  0,
  [_CID, _CSl],
  [0, [() => AuthHeaderParametersSensitive, 0]]
);
export var CreateConnectionOAuthRequestParameters = struct(
  n0,
  _CCOARP,
  0,
  [_CPl, _AE, _HM, _OAHP],
  [[() => CreateConnectionOAuthClientRequestParameters, 0], 0, 0, [() => ConnectionHttpParameters, 0]]
);
export var CreateConnectionRequest = struct(
  n0,
  _CCR,
  0,
  [_N, _D, _AT, _APu, _ICP, _KKI],
  [0, 0, 0, [() => CreateConnectionAuthRequestParameters, 0], () => ConnectivityResourceParameters, 0]
);
export var CreateConnectionResponse = struct(n0, _CCRr, 0, [_CA, _CS, _CT, _LMT], [0, 0, 4, 4]);
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
export var DescribeConnectionConnectivityParameters = struct(
  n0,
  _DCCP,
  0,
  [_RP],
  [() => DescribeConnectionResourceParameters]
);
export var DescribeConnectionRequest = struct(n0, _DCRes, 0, [_N], [0]);
export var DescribeConnectionResourceParameters = struct(n0, _DCRP, 0, [_RCA, _RAA], [0, 0]);
export var DescribeConnectionResponse = struct(
  n0,
  _DCResc,
  0,
  [_CA, _N, _D, _ICP, _CS, _SR, _AT, _SA, _KKI, _APu, _CT, _LMT, _LAT],
  [
    0,
    0,
    0,
    () => DescribeConnectionConnectivityParameters,
    0,
    0,
    0,
    0,
    0,
    [() => ConnectionAuthResponseParameters, 0],
    4,
    4,
    4,
  ]
);
export var ListApiDestinationsRequest = struct(n0, _LADR, 0, [_NP, _CA, _NT, _L], [0, 0, 0, 1]);
export var ListApiDestinationsResponse = struct(n0, _LADRi, 0, [_ADp, _NT], [() => ApiDestinationResponseList, 0]);
export var ListConnectionsRequest = struct(n0, _LCR, 0, [_NP, _CS, _NT, _L], [0, 0, 0, 1]);
export var ListConnectionsResponse = struct(n0, _LCRi, 0, [_Con, _NT], [() => ConnectionResponseList, 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var UpdateApiDestinationRequest = struct(n0, _UADR, 0, [_N, _D, _CA, _IE, _HM, _IRLPS], [0, 0, 0, 0, 0, 1]);
export var UpdateApiDestinationResponse = struct(n0, _UADRp, 0, [_ADA, _ADS, _CT, _LMT], [0, 0, 4, 4]);
export var UpdateConnectionApiKeyAuthRequestParameters = struct(
  n0,
  _UCAKARP,
  0,
  [_AKN, _AKV],
  [0, [() => AuthHeaderParametersSensitive, 0]]
);
export var UpdateConnectionAuthRequestParameters = struct(
  n0,
  _UCARP,
  0,
  [_BAPa, _OAP, _AKAP, _IHP, _CP],
  [
    [() => UpdateConnectionBasicAuthRequestParameters, 0],
    [() => UpdateConnectionOAuthRequestParameters, 0],
    [() => UpdateConnectionApiKeyAuthRequestParameters, 0],
    [() => ConnectionHttpParameters, 0],
    () => ConnectivityResourceParameters,
  ]
);
export var UpdateConnectionBasicAuthRequestParameters = struct(
  n0,
  _UCBARP,
  0,
  [_U, _P],
  [0, [() => AuthHeaderParametersSensitive, 0]]
);
export var UpdateConnectionOAuthClientRequestParameters = struct(
  n0,
  _UCOACRP,
  0,
  [_CID, _CSl],
  [0, [() => AuthHeaderParametersSensitive, 0]]
);
export var UpdateConnectionOAuthRequestParameters = struct(
  n0,
  _UCOARP,
  0,
  [_CPl, _AE, _HM, _OAHP],
  [[() => UpdateConnectionOAuthClientRequestParameters, 0], 0, 0, [() => ConnectionHttpParameters, 0]]
);
export var UpdateConnectionRequest = struct(
  n0,
  _UCR,
  0,
  [_N, _D, _AT, _APu, _ICP, _KKI],
  [0, 0, 0, [() => UpdateConnectionAuthRequestParameters, 0], () => ConnectivityResourceParameters, 0]
);
export var UpdateConnectionResponse = struct(n0, _UCRp, 0, [_CA, _CS, _CT, _LMT, _LAT], [0, 0, 4, 4, 4]);
export var ApiDestinationResponseList = list(n0, _ADRL, 0, () => ApiDestination);
export var ConnectionBodyParametersList = list(n0, _CBPL, 0, [() => ConnectionBodyParameter, 0]);
export var ConnectionHeaderParametersList = list(n0, _CHPL, 0, [() => ConnectionHeaderParameter, 0]);
export var ConnectionQueryStringParametersList = list(n0, _CQSPL, 0, [() => ConnectionQueryStringParameter, 0]);
export var ConnectionResponseList = list(n0, _CRL, 0, () => Connection);
export var CreateApiDestination = op(
  n0,
  _CAD,
  0,
  () => CreateApiDestinationRequest,
  () => CreateApiDestinationResponse
);
export var CreateConnection = op(
  n0,
  _CC,
  0,
  () => CreateConnectionRequest,
  () => CreateConnectionResponse
);
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
export var ListApiDestinations = op(
  n0,
  _LAD,
  0,
  () => ListApiDestinationsRequest,
  () => ListApiDestinationsResponse
);
export var ListConnections = op(
  n0,
  _LCi,
  0,
  () => ListConnectionsRequest,
  () => ListConnectionsResponse
);
export var UpdateApiDestination = op(
  n0,
  _UAD,
  0,
  () => UpdateApiDestinationRequest,
  () => UpdateApiDestinationResponse
);
export var UpdateConnection = op(
  n0,
  _UC,
  0,
  () => UpdateConnectionRequest,
  () => UpdateConnectionResponse
);

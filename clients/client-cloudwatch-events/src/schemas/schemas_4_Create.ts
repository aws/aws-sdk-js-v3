// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { LimitExceededException as __LimitExceededException } from "../models/index";
import {
  _AA,
  _Ac,
  _ADA,
  _ADS,
  _AE,
  _AHPS,
  _AKAP,
  _AKN,
  _AKV,
  _AN,
  _APu,
  _AT,
  _BAPa,
  _c,
  _CA,
  _CAD,
  _CADR,
  _CADRr,
  _CAR,
  _CAr,
  _CARr,
  _CC,
  _CCAKARP,
  _CCARP,
  _CCBARP,
  _CCOACRP,
  _CCOARP,
  _CCR,
  _CCRr,
  _CEB,
  _CEBR,
  _CEBRr,
  _CID,
  _CP,
  _CPES,
  _CPESR,
  _CPESRr,
  _CS,
  _CSl,
  _CT,
  _D,
  _De,
  _e,
  _EBA,
  _EBN,
  _ECr,
  _EET,
  _EM,
  _EP,
  _ESA,
  _ESN,
  _EST,
  _FE,
  _FEC,
  _HM,
  _IE,
  _IHP,
  _IRLPS,
  _LAT,
  _LEE,
  _LMT,
  _m,
  _N,
  _OAHP,
  _OAP,
  _P,
  _PR,
  _PRR,
  _PRRu,
  _PTR,
  _PTRE,
  _PTREL,
  _PTRu,
  _PTu,
  _RA,
  _RAo,
  _RAu,
  _RD,
  _RN,
  _RST,
  _Rul,
  _S,
  _SE,
  _SR,
  _SRR,
  _SRRt,
  _SRt,
  _Ta,
  _Tar,
  _TI,
  _U,
  _UA,
  _UAD,
  _UADR,
  _UADRp,
  _UAR,
  _UARp,
  _UC,
  _UCAKARP,
  _UCARP,
  _UCBARP,
  _UCOACRP,
  _UCOARP,
  _UCR,
  _UCRp,
  n0,
} from "./schemas_0";
import { ReplayDestination, TargetList } from "./schemas_2_List";
import { TagList } from "./schemas_3_Resource";
import { ConnectionHttpParameters } from "./schemas_6_Connection";

/* eslint no-var: 0 */

export var AuthHeaderParametersSensitive = sim(n0, _AHPS, 0, 8);
export var CreateApiDestinationRequest = struct(n0, _CADR, 0, [_N, _D, _CA, _IE, _HM, _IRLPS], [0, 0, 0, 0, 0, 1]);
export var CreateApiDestinationResponse = struct(n0, _CADRr, 0, [_ADA, _ADS, _CT, _LMT], [0, 0, 4, 4]);
export var CreateArchiveRequest = struct(n0, _CAR, 0, [_AN, _ESA, _D, _EP, _RD], [0, 0, 0, 0, 1]);
export var CreateArchiveResponse = struct(n0, _CARr, 0, [_AA, _S, _SR, _CT], [0, 0, 0, 4]);
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
  [_BAPa, _OAP, _AKAP, _IHP],
  [
    [() => CreateConnectionBasicAuthRequestParameters, 0],
    [() => CreateConnectionOAuthRequestParameters, 0],
    [() => CreateConnectionApiKeyAuthRequestParameters, 0],
    [() => ConnectionHttpParameters, 0],
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
  [_CP, _AE, _HM, _OAHP],
  [[() => CreateConnectionOAuthClientRequestParameters, 0], 0, 0, [() => ConnectionHttpParameters, 0]]
);
export var CreateConnectionRequest = struct(
  n0,
  _CCR,
  0,
  [_N, _D, _AT, _APu],
  [0, 0, 0, [() => CreateConnectionAuthRequestParameters, 0]]
);
export var CreateConnectionResponse = struct(n0, _CCRr, 0, [_CA, _CS, _CT, _LMT], [0, 0, 4, 4]);
export var CreateEventBusRequest = struct(n0, _CEBR, 0, [_N, _ESN, _Ta], [0, 0, () => TagList]);
export var CreateEventBusResponse = struct(n0, _CEBRr, 0, [_EBA], [0]);
export var CreatePartnerEventSourceRequest = struct(n0, _CPESR, 0, [_N, _Ac], [0, 0]);
export var CreatePartnerEventSourceResponse = struct(n0, _CPESRr, 0, [_ESA], [0]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __LimitExceededException
);
export var PutRuleRequest = struct(
  n0,
  _PRR,
  0,
  [_N, _SE, _EP, _S, _D, _RAo, _Ta, _EBN],
  [0, 0, 0, 0, 0, 0, () => TagList, 0]
);
export var PutRuleResponse = struct(n0, _PRRu, 0, [_RAu], [0]);
export var PutTargetsRequest = struct(n0, _PTR, 0, [_Rul, _EBN, _Tar], [0, 0, () => TargetList]);
export var PutTargetsResponse = struct(n0, _PTRu, 0, [_FEC, _FE], [1, () => PutTargetsResultEntryList]);
export var PutTargetsResultEntry = struct(n0, _PTRE, 0, [_TI, _ECr, _EM], [0, 0, 0]);
export var StartReplayRequest = struct(
  n0,
  _SRR,
  0,
  [_RN, _D, _ESA, _EST, _EET, _De],
  [0, 0, 0, 4, 4, () => ReplayDestination]
);
export var StartReplayResponse = struct(n0, _SRRt, 0, [_RA, _S, _SR, _RST], [0, 0, 0, 4]);
export var UpdateApiDestinationRequest = struct(n0, _UADR, 0, [_N, _D, _CA, _IE, _HM, _IRLPS], [0, 0, 0, 0, 0, 1]);
export var UpdateApiDestinationResponse = struct(n0, _UADRp, 0, [_ADA, _ADS, _CT, _LMT], [0, 0, 4, 4]);
export var UpdateArchiveRequest = struct(n0, _UAR, 0, [_AN, _D, _EP, _RD], [0, 0, 0, 1]);
export var UpdateArchiveResponse = struct(n0, _UARp, 0, [_AA, _S, _SR, _CT], [0, 0, 0, 4]);
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
  [_BAPa, _OAP, _AKAP, _IHP],
  [
    [() => UpdateConnectionBasicAuthRequestParameters, 0],
    [() => UpdateConnectionOAuthRequestParameters, 0],
    [() => UpdateConnectionApiKeyAuthRequestParameters, 0],
    [() => ConnectionHttpParameters, 0],
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
  [_CP, _AE, _HM, _OAHP],
  [[() => UpdateConnectionOAuthClientRequestParameters, 0], 0, 0, [() => ConnectionHttpParameters, 0]]
);
export var UpdateConnectionRequest = struct(
  n0,
  _UCR,
  0,
  [_N, _D, _AT, _APu],
  [0, 0, 0, [() => UpdateConnectionAuthRequestParameters, 0]]
);
export var UpdateConnectionResponse = struct(n0, _UCRp, 0, [_CA, _CS, _CT, _LMT, _LAT], [0, 0, 4, 4, 4]);
export var PutTargetsResultEntryList = list(n0, _PTREL, 0, () => PutTargetsResultEntry);
export var CreateApiDestination = op(
  n0,
  _CAD,
  0,
  () => CreateApiDestinationRequest,
  () => CreateApiDestinationResponse
);
export var CreateArchive = op(
  n0,
  _CAr,
  0,
  () => CreateArchiveRequest,
  () => CreateArchiveResponse
);
export var CreateConnection = op(
  n0,
  _CC,
  0,
  () => CreateConnectionRequest,
  () => CreateConnectionResponse
);
export var CreateEventBus = op(
  n0,
  _CEB,
  0,
  () => CreateEventBusRequest,
  () => CreateEventBusResponse
);
export var CreatePartnerEventSource = op(
  n0,
  _CPES,
  0,
  () => CreatePartnerEventSourceRequest,
  () => CreatePartnerEventSourceResponse
);
export var PutRule = op(
  n0,
  _PR,
  0,
  () => PutRuleRequest,
  () => PutRuleResponse
);
export var PutTargets = op(
  n0,
  _PTu,
  0,
  () => PutTargetsRequest,
  () => PutTargetsResponse
);
export var StartReplay = op(
  n0,
  _SRt,
  0,
  () => StartReplayRequest,
  () => StartReplayResponse
);
export var UpdateApiDestination = op(
  n0,
  _UAD,
  0,
  () => UpdateApiDestinationRequest,
  () => UpdateApiDestinationResponse
);
export var UpdateArchive = op(
  n0,
  _UA,
  0,
  () => UpdateArchiveRequest,
  () => UpdateArchiveResponse
);
export var UpdateConnection = op(
  n0,
  _UC,
  0,
  () => UpdateConnectionRequest,
  () => UpdateConnectionResponse
);

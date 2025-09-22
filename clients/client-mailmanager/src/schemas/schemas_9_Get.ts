// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AMI,
  _B,
  _Cc,
  _D,
  _En,
  _F,
  _GAMC,
  _GAMCR,
  _GAMCRe,
  _GASRetrc,
  _GASRR,
  _GASRRe,
  _H,
  _HA,
  _Ht,
  _IPI,
  _IRT,
  _MB,
  _MI,
  _MM,
  _RH,
  _RL,
  _Ro,
  _Row,
  _RT,
  _SAo,
  _SH,
  _SI,
  _SIA,
  _Su,
  _Te,
  _To,
  _XM,
  _XOM,
  _XP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SenderIpAddress = sim(n0, _SIA, 0, 8);
export var Envelope = struct(n0, _En, 0, [_H, _F, _To], [0, 0, 64 | 0]);
export var GetArchiveMessageContentRequest = struct(n0, _GAMCR, 0, [_AMI], [0]);
export var GetArchiveMessageContentResponse = struct(n0, _GAMCRe, 0, [_B], [() => MessageBody]);
export var GetArchiveSearchResultsRequest = struct(n0, _GASRR, 0, [_SI], [0]);
export var GetArchiveSearchResultsResponse = struct(n0, _GASRRe, 0, [_Ro], [[() => RowsList, 0]]);
export var MessageBody = struct(n0, _MB, 0, [_Te, _Ht, _MM], [0, 0, 2]);
export var Row = struct(
  n0,
  _Row,
  0,
  [_AMI, _RT, _D, _To, _F, _Cc, _Su, _MI, _HA, _RH, _IRT, _XM, _XOM, _XP, _IPI, _SH, _SIA, _En, _SAo],
  [0, 4, 0, 0, 0, 0, 0, 0, 2, 64 | 0, 0, 0, 0, 0, 0, 0, [() => SenderIpAddress, 0], () => Envelope, 0]
);
export var EmailReceivedHeadersList = 64 | 0;

export var RowsList = list(n0, _RL, 0, [() => Row, 0]);
export var StringList = 64 | 0;

export var GetArchiveMessageContent = op(
  n0,
  _GAMC,
  0,
  () => GetArchiveMessageContentRequest,
  () => GetArchiveMessageContentResponse
);
export var GetArchiveSearchResults = op(
  n0,
  _GASRetrc,
  0,
  () => GetArchiveSearchResultsRequest,
  () => GetArchiveSearchResultsResponse
);

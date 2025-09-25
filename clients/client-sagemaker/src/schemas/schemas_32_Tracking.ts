// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AMR,
  _ASU,
  _AU,
  _CAre,
  _CB,
  _CBr,
  _CMTS,
  _CMTSR,
  _CMTSRr,
  _CPMTSU,
  _CPMTSUR,
  _CPMTSURr,
  _CT,
  _DMTS,
  _DMTSe,
  _DMTSR,
  _DMTSRe,
  _DMTSRes,
  _DMTSResc,
  _EIS,
  _IAs,
  _LMB,
  _LMT,
  _LMTS,
  _LMTSR,
  _LMTSRi,
  _MR,
  _MVl,
  _NT,
  _RAo,
  _SBo,
  _SEDIS,
  _SMTS,
  _SMTSR,
  _SMTSRt,
  _SMTSRto,
  _SMTSRtop,
  _SMTSt,
  _SO,
  _T,
  _TSA,
  _TSMS,
  _TSN,
  _TSS,
  _TSSL,
  _TSSr,
  _TSSra,
  _TSSrac,
  _TSU,
  _UMTS,
  _UMTSR,
  _UMTSRp,
  _WMWS,
  n0,
  TagList,
  UserContext,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateMlflowTrackingServerRequest = struct(
  n0,
  _CMTSR,
  0,
  [_TSN, _ASU, _TSS, _MVl, _RAo, _AMR, _WMWS, _T],
  [0, 0, 0, 0, 0, 2, 0, () => TagList]
);
export var CreateMlflowTrackingServerResponse = struct(n0, _CMTSRr, 0, [_TSA], [0]);
export var CreatePresignedMlflowTrackingServerUrlRequest = struct(n0, _CPMTSUR, 0, [_TSN, _EIS, _SEDIS], [0, 1, 1]);
export var CreatePresignedMlflowTrackingServerUrlResponse = struct(n0, _CPMTSURr, 0, [_AU], [0]);
export var DeleteMlflowTrackingServerRequest = struct(n0, _DMTSR, 0, [_TSN], [0]);
export var DeleteMlflowTrackingServerResponse = struct(n0, _DMTSRe, 0, [_TSA], [0]);
export var DescribeMlflowTrackingServerRequest = struct(n0, _DMTSRes, 0, [_TSN], [0]);
export var DescribeMlflowTrackingServerResponse = struct(
  n0,
  _DMTSResc,
  0,
  [_TSA, _TSN, _ASU, _TSS, _MVl, _RAo, _TSSr, _TSMS, _IAs, _TSU, _WMWS, _AMR, _CT, _CB, _LMT, _LMB],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, () => UserContext, 4, () => UserContext]
);
export var ListMlflowTrackingServersRequest = struct(
  n0,
  _LMTSR,
  0,
  [_CAre, _CBr, _TSSr, _MVl, _SBo, _SO, _NT, _MR],
  [4, 4, 0, 0, 0, 0, 0, 1]
);
export var ListMlflowTrackingServersResponse = struct(
  n0,
  _LMTSRi,
  0,
  [_TSSra, _NT],
  [() => TrackingServerSummaryList, 0]
);
export var StartMlflowTrackingServerRequest = struct(n0, _SMTSR, 0, [_TSN], [0]);
export var StartMlflowTrackingServerResponse = struct(n0, _SMTSRt, 0, [_TSA], [0]);
export var StopMlflowTrackingServerRequest = struct(n0, _SMTSRto, 0, [_TSN], [0]);
export var StopMlflowTrackingServerResponse = struct(n0, _SMTSRtop, 0, [_TSA], [0]);
export var TrackingServerSummary = struct(
  n0,
  _TSSrac,
  0,
  [_TSA, _TSN, _CT, _LMT, _TSSr, _IAs, _MVl],
  [0, 0, 4, 4, 0, 0, 0]
);
export var UpdateMlflowTrackingServerRequest = struct(n0, _UMTSR, 0, [_TSN, _ASU, _TSS, _AMR, _WMWS], [0, 0, 0, 2, 0]);
export var UpdateMlflowTrackingServerResponse = struct(n0, _UMTSRp, 0, [_TSA], [0]);
export var TrackingServerSummaryList = list(n0, _TSSL, 0, () => TrackingServerSummary);
export var CreateMlflowTrackingServer = op(
  n0,
  _CMTS,
  0,
  () => CreateMlflowTrackingServerRequest,
  () => CreateMlflowTrackingServerResponse
);
export var CreatePresignedMlflowTrackingServerUrl = op(
  n0,
  _CPMTSU,
  0,
  () => CreatePresignedMlflowTrackingServerUrlRequest,
  () => CreatePresignedMlflowTrackingServerUrlResponse
);
export var DeleteMlflowTrackingServer = op(
  n0,
  _DMTS,
  0,
  () => DeleteMlflowTrackingServerRequest,
  () => DeleteMlflowTrackingServerResponse
);
export var DescribeMlflowTrackingServer = op(
  n0,
  _DMTSe,
  0,
  () => DescribeMlflowTrackingServerRequest,
  () => DescribeMlflowTrackingServerResponse
);
export var ListMlflowTrackingServers = op(
  n0,
  _LMTS,
  0,
  () => ListMlflowTrackingServersRequest,
  () => ListMlflowTrackingServersResponse
);
export var StartMlflowTrackingServer = op(
  n0,
  _SMTS,
  0,
  () => StartMlflowTrackingServerRequest,
  () => StartMlflowTrackingServerResponse
);
export var StopMlflowTrackingServer = op(
  n0,
  _SMTSt,
  0,
  () => StopMlflowTrackingServerRequest,
  () => StopMlflowTrackingServerResponse
);
export var UpdateMlflowTrackingServer = op(
  n0,
  _UMTS,
  0,
  () => UpdateMlflowTrackingServerRequest,
  () => UpdateMlflowTrackingServerResponse
);

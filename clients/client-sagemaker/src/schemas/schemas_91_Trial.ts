// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ATC,
  _ATCR,
  _ATCRs,
  _CAre,
  _CB,
  _CBr,
  _CT,
  _DNi,
  _DTC,
  _DTCi,
  _DTCR,
  _DTCRe,
  _DTCRi,
  _DTCRis,
  _ENx,
  _ETn,
  _IAn,
  _IATR,
  _LMB,
  _LMT,
  _LTC,
  _LTCR,
  _LTCRi,
  _Me,
  _MR,
  _MTe,
  _NT,
  _NV,
  _OA,
  _OATR,
  _P,
  _PSri,
  _PTRa,
  _SA,
  _SBo,
  _SO,
  _ST,
  _St,
  _STt,
  _SV,
  _TA,
  _TCA,
  _TCAr,
  _TCAri,
  _TCN,
  _TCP,
  _TCPV,
  _TCS,
  _TCSr,
  _TCSri,
  _TCSria,
  _TN,
  _UTC,
  _UTCR,
  _UTCRp,
  _Va,
  n0,
  UserContext,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateTrialComponentRequest = struct(n0, _ATCR, 0, [_TCN, _TN], [0, 0]);
export var AssociateTrialComponentResponse = struct(n0, _ATCRs, 0, [_TCA, _TA], [0, 0]);
export var DeleteTrialComponentRequest = struct(n0, _DTCR, 0, [_TCN], [0]);
export var DeleteTrialComponentResponse = struct(n0, _DTCRe, 0, [_TCA], [0]);
export var DisassociateTrialComponentRequest = struct(n0, _DTCRi, 0, [_TCN, _TN], [0, 0]);
export var DisassociateTrialComponentResponse = struct(n0, _DTCRis, 0, [_TCA, _TA], [0, 0]);
export var ListTrialComponentsRequest = struct(
  n0,
  _LTCR,
  0,
  [_ENx, _TN, _SA, _CAre, _CBr, _SBo, _SO, _MR, _NT],
  [0, 0, 0, 4, 4, 0, 0, 1, 0]
);
export var ListTrialComponentsResponse = struct(n0, _LTCRi, 0, [_TCS, _NT], [() => TrialComponentSummaries, 0]);
export var TrialComponentArtifact = struct(n0, _TCAr, 0, [_MTe, _Va], [0, 0]);
export var TrialComponentSource = struct(n0, _TCSr, 0, [_SA, _ST], [0, 0]);
export var TrialComponentStatus = struct(n0, _TCSri, 0, [_PSri, _Me], [0, 0]);
export var TrialComponentSummary = struct(
  n0,
  _TCSria,
  0,
  [_TCN, _TCA, _DNi, _TCSr, _St, _STt, _ETn, _CT, _CB, _LMT, _LMB],
  [0, 0, 0, () => TrialComponentSource, () => TrialComponentStatus, 4, 4, 4, () => UserContext, 4, () => UserContext]
);
export var UpdateTrialComponentRequest = struct(
  n0,
  _UTCR,
  0,
  [_TCN, _DNi, _St, _STt, _ETn, _P, _PTRa, _IAn, _IATR, _OA, _OATR],
  [
    0,
    0,
    () => TrialComponentStatus,
    4,
    4,
    () => TrialComponentParameters,
    64 | 0,
    () => TrialComponentArtifacts,
    64 | 0,
    () => TrialComponentArtifacts,
    64 | 0,
  ]
);
export var UpdateTrialComponentResponse = struct(n0, _UTCRp, 0, [_TCA], [0]);
export var ListTrialComponentKey256 = 64 | 0;

export var TrialComponentSummaries = list(n0, _TCS, 0, () => TrialComponentSummary);
export var TrialComponentArtifacts = map(n0, _TCAri, 0, 0, () => TrialComponentArtifact);
export var TrialComponentParameters = map(n0, _TCP, 0, 0, () => TrialComponentParameterValue);
export var TrialComponentParameterValue = uni(n0, _TCPV, 0, [_SV, _NV], [0, 1]);
export var AssociateTrialComponent = op(
  n0,
  _ATC,
  0,
  () => AssociateTrialComponentRequest,
  () => AssociateTrialComponentResponse
);
export var DeleteTrialComponent = op(
  n0,
  _DTC,
  0,
  () => DeleteTrialComponentRequest,
  () => DeleteTrialComponentResponse
);
export var DisassociateTrialComponent = op(
  n0,
  _DTCi,
  0,
  () => DisassociateTrialComponentRequest,
  () => DisassociateTrialComponentResponse
);
export var ListTrialComponents = op(
  n0,
  _LTC,
  0,
  () => ListTrialComponentsRequest,
  () => ListTrialComponentsResponse
);
export var UpdateTrialComponent = op(
  n0,
  _UTC,
  0,
  () => UpdateTrialComponentRequest,
  () => UpdateTrialComponentResponse
);

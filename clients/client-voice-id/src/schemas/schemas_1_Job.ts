// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AAEA,
  _AASA,
  _AC,
  _AR,
  _ARI,
  _AT,
  _C,
  _CA,
  _CSI,
  _De,
  _DI,
  _EA,
  _ES,
  _ESR,
  _ESRv,
  _FD,
  _FDCr,
  _FDR,
  _FDRI,
  _FRD,
  _FRJS,
  _FRJSr,
  _GFI,
  _GSI,
  _JI,
  _JN,
  _JP,
  _JS,
  _JSo,
  _KFR,
  _LFRJ,
  _LFRJR,
  _LFRJRi,
  _LSEJ,
  _LSEJR,
  _LSEJRi,
  _M,
  _MR,
  _NT,
  _PC,
  _R,
  _RD,
  _RS,
  _RT,
  _S,
  _SC,
  _SEJS,
  _SEJSp,
  _SIe,
  _SN,
  _SNOI,
  _SS,
  _VSR,
  _WI,
  n0,
} from "./schemas_0";
import { CustomerSpeakerId } from "./schemas_10_Speaker";

/* eslint no-var: 0 */

export var JobName = sim(n0, _JN, 0, 8);
export var AuthenticationConfiguration = struct(n0, _AC, 0, [_AT], [1]);
export var AuthenticationResult = struct(
  n0,
  _AR,
  0,
  [_ARI, _AASA, _AAEA, _CSI, _GSI, _De, _S, _C],
  [0, 4, 4, [() => CustomerSpeakerId, 0], 0, 0, 1, () => AuthenticationConfiguration]
);
export var EvaluateSessionRequest = struct(n0, _ESR, 0, [_DI, _SNOI], [0, 0]);
export var EvaluateSessionResponse = struct(
  n0,
  _ESRv,
  0,
  [_DI, _SIe, _SN, _SS, _AR, _FDR],
  [0, 0, 0, 0, [() => AuthenticationResult, 0], () => FraudDetectionResult]
);
export var FailureDetails = struct(n0, _FD, 0, [_SC, _M], [1, 0]);
export var FraudDetectionConfiguration = struct(n0, _FDCr, 0, [_RT, _WI], [1, 0]);
export var FraudDetectionResult = struct(
  n0,
  _FDR,
  0,
  [_FDRI, _AASA, _AAEA, _C, _De, _R, _RD],
  [0, 4, 4, () => FraudDetectionConfiguration, 0, 64 | 0, () => FraudRiskDetails]
);
export var FraudRiskDetails = struct(n0, _FRD, 0, [_KFR, _VSR], [() => KnownFraudsterRisk, () => VoiceSpoofingRisk]);
export var FraudsterRegistrationJobSummary = struct(
  n0,
  _FRJS,
  0,
  [_JN, _JI, _JS, _DI, _CA, _EA, _FD, _JP],
  [[() => JobName, 0], 0, 0, 0, 4, 4, () => FailureDetails, () => JobProgress]
);
export var JobProgress = struct(n0, _JP, 0, [_PC], [1]);
export var KnownFraudsterRisk = struct(n0, _KFR, 0, [_RS, _GFI], [1, 0]);
export var ListFraudsterRegistrationJobsRequest = struct(n0, _LFRJR, 0, [_DI, _JS, _MR, _NT], [0, 0, 1, 0]);
export var ListFraudsterRegistrationJobsResponse = struct(
  n0,
  _LFRJRi,
  0,
  [_JSo, _NT],
  [[() => FraudsterRegistrationJobSummaries, 0], 0]
);
export var ListSpeakerEnrollmentJobsRequest = struct(n0, _LSEJR, 0, [_DI, _JS, _MR, _NT], [0, 0, 1, 0]);
export var ListSpeakerEnrollmentJobsResponse = struct(
  n0,
  _LSEJRi,
  0,
  [_JSo, _NT],
  [[() => SpeakerEnrollmentJobSummaries, 0], 0]
);
export var SpeakerEnrollmentJobSummary = struct(
  n0,
  _SEJS,
  0,
  [_JN, _JI, _JS, _DI, _CA, _EA, _FD, _JP],
  [[() => JobName, 0], 0, 0, 0, 4, 4, () => FailureDetails, () => JobProgress]
);
export var VoiceSpoofingRisk = struct(n0, _VSR, 0, [_RS], [1]);
export var FraudDetectionReasons = 64 | 0;

export var FraudsterRegistrationJobSummaries = list(n0, _FRJSr, 0, [() => FraudsterRegistrationJobSummary, 0]);
export var SpeakerEnrollmentJobSummaries = list(n0, _SEJSp, 0, [() => SpeakerEnrollmentJobSummary, 0]);
export var EvaluateSession = op(
  n0,
  _ES,
  0,
  () => EvaluateSessionRequest,
  () => EvaluateSessionResponse
);
export var ListFraudsterRegistrationJobs = op(
  n0,
  _LFRJ,
  0,
  () => ListFraudsterRegistrationJobsRequest,
  () => ListFraudsterRegistrationJobsResponse
);
export var ListSpeakerEnrollmentJobs = op(
  n0,
  _LSEJ,
  0,
  () => ListSpeakerEnrollmentJobsRequest,
  () => ListSpeakerEnrollmentJobsResponse
);

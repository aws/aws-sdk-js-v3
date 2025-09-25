// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _CA,
  _CD,
  _CDR,
  _CDRr,
  _CTl,
  _D,
  _DARA,
  _DDe,
  _DDRe,
  _DDRes,
  _DFRJ,
  _DFRJR,
  _DFRJRe,
  _DI,
  _DN,
  _Do,
  _DRA,
  _DS,
  _DSEJ,
  _DSEJR,
  _DSEJRe,
  _DSo,
  _DSom,
  _DWI,
  _EA,
  _EC,
  _EEA,
  _EJFDC,
  _FD,
  _FDA,
  _FDC,
  _FRJ,
  _FST,
  _IDC,
  _J,
  _JI,
  _JN,
  _JP,
  _JS,
  _KKI,
  _LD,
  _LDR,
  _LDRi,
  _M,
  _MR,
  _N,
  _NT,
  _ODC,
  _OKKI,
  _RC,
  _RT,
  _SEJ,
  _SFRJ,
  _SFRJR,
  _SFRJRt,
  _SSEC,
  _SSEJ,
  _SSEJR,
  _SSEJRt,
  _SSEUD,
  _SU,
  _T,
  _UA,
  _UD,
  _UDR,
  _UDRp,
  _US,
  _WDa,
  _WIa,
  n0,
} from "./schemas_0";
import { FailureDetails, JobName, JobProgress } from "./schemas_1_Job";
import { TagList } from "./schemas_6_Resource";

/* eslint no-var: 0 */

export var Description = sim(n0, _D, 0, 8);
export var DomainName = sim(n0, _DN, 0, 8);
export var CreateDomainRequest = struct(
  n0,
  _CDR,
  0,
  [_N, _D, _SSEC, _CTl, _T],
  [[() => DomainName, 0], [() => Description, 0], () => ServerSideEncryptionConfiguration, [0, 4], [() => TagList, 0]]
);
export var CreateDomainResponse = struct(n0, _CDRr, 0, [_Do], [[() => Domain, 0]]);
export var DescribeDomainRequest = struct(n0, _DDRe, 0, [_DI], [0]);
export var DescribeDomainResponse = struct(n0, _DDRes, 0, [_Do], [[() => Domain, 0]]);
export var DescribeFraudsterRegistrationJobRequest = struct(n0, _DFRJR, 0, [_DI, _JI], [0, 0]);
export var DescribeFraudsterRegistrationJobResponse = struct(
  n0,
  _DFRJRe,
  0,
  [_J],
  [[() => FraudsterRegistrationJob, 0]]
);
export var DescribeSpeakerEnrollmentJobRequest = struct(n0, _DSEJR, 0, [_DI, _JI], [0, 0]);
export var DescribeSpeakerEnrollmentJobResponse = struct(n0, _DSEJRe, 0, [_J], [[() => SpeakerEnrollmentJob, 0]]);
export var Domain = struct(
  n0,
  _Do,
  0,
  [_DI, _A, _N, _D, _DS, _SSEC, _CA, _UA, _SSEUD, _WDa],
  [
    0,
    0,
    [() => DomainName, 0],
    [() => Description, 0],
    0,
    () => ServerSideEncryptionConfiguration,
    4,
    4,
    () => ServerSideEncryptionUpdateDetails,
    () => WatchlistDetails,
  ]
);
export var DomainSummary = struct(
  n0,
  _DSo,
  0,
  [_DI, _A, _N, _D, _DS, _SSEC, _CA, _UA, _SSEUD, _WDa],
  [
    0,
    0,
    [() => DomainName, 0],
    [() => Description, 0],
    0,
    () => ServerSideEncryptionConfiguration,
    4,
    4,
    () => ServerSideEncryptionUpdateDetails,
    () => WatchlistDetails,
  ]
);
export var EnrollmentConfig = struct(n0, _EC, 0, [_EEA, _FDC], [0, () => EnrollmentJobFraudDetectionConfig]);
export var EnrollmentJobFraudDetectionConfig = struct(n0, _EJFDC, 0, [_FDA, _RT, _WIa], [0, 1, 64 | 0]);
export var FraudsterRegistrationJob = struct(
  n0,
  _FRJ,
  0,
  [_JN, _JI, _JS, _DI, _DARA, _RC, _IDC, _ODC, _CA, _EA, _FD, _JP],
  [
    [() => JobName, 0],
    0,
    0,
    0,
    0,
    () => RegistrationConfig,
    () => InputDataConfig,
    () => OutputDataConfig,
    4,
    4,
    () => FailureDetails,
    () => JobProgress,
  ]
);
export var InputDataConfig = struct(n0, _IDC, 0, [_SU], [0]);
export var ListDomainsRequest = struct(n0, _LDR, 0, [_MR, _NT], [1, 0]);
export var ListDomainsResponse = struct(n0, _LDRi, 0, [_DSom, _NT], [[() => DomainSummaries, 0], 0]);
export var OutputDataConfig = struct(n0, _ODC, 0, [_SU, _KKI], [0, 0]);
export var RegistrationConfig = struct(n0, _RC, 0, [_DRA, _FST, _WIa], [0, 1, 64 | 0]);
export var ServerSideEncryptionConfiguration = struct(n0, _SSEC, 0, [_KKI], [0]);
export var ServerSideEncryptionUpdateDetails = struct(n0, _SSEUD, 0, [_OKKI, _US, _M], [0, 0, 0]);
export var SpeakerEnrollmentJob = struct(
  n0,
  _SEJ,
  0,
  [_JN, _JI, _JS, _DI, _DARA, _EC, _IDC, _ODC, _CA, _EA, _FD, _JP],
  [
    [() => JobName, 0],
    0,
    0,
    0,
    0,
    () => EnrollmentConfig,
    () => InputDataConfig,
    () => OutputDataConfig,
    4,
    4,
    () => FailureDetails,
    () => JobProgress,
  ]
);
export var StartFraudsterRegistrationJobRequest = struct(
  n0,
  _SFRJR,
  0,
  [_CTl, _JN, _DI, _DARA, _RC, _IDC, _ODC],
  [[0, 4], [() => JobName, 0], 0, 0, () => RegistrationConfig, () => InputDataConfig, () => OutputDataConfig]
);
export var StartFraudsterRegistrationJobResponse = struct(n0, _SFRJRt, 0, [_J], [[() => FraudsterRegistrationJob, 0]]);
export var StartSpeakerEnrollmentJobRequest = struct(
  n0,
  _SSEJR,
  0,
  [_CTl, _JN, _DI, _DARA, _EC, _IDC, _ODC],
  [[0, 4], [() => JobName, 0], 0, 0, () => EnrollmentConfig, () => InputDataConfig, () => OutputDataConfig]
);
export var StartSpeakerEnrollmentJobResponse = struct(n0, _SSEJRt, 0, [_J], [[() => SpeakerEnrollmentJob, 0]]);
export var UpdateDomainRequest = struct(
  n0,
  _UDR,
  0,
  [_DI, _N, _D, _SSEC],
  [0, [() => DomainName, 0], [() => Description, 0], () => ServerSideEncryptionConfiguration]
);
export var UpdateDomainResponse = struct(n0, _UDRp, 0, [_Do], [[() => Domain, 0]]);
export var WatchlistDetails = struct(n0, _WDa, 0, [_DWI], [0]);
export var DomainSummaries = list(n0, _DSom, 0, [() => DomainSummary, 0]);
export var EnrollmentJobFraudDetectionConfigWatchlistIds = 64 | 0;

export var RegistrationConfigWatchlistIds = 64 | 0;

export var CreateDomain = op(
  n0,
  _CD,
  2,
  () => CreateDomainRequest,
  () => CreateDomainResponse
);
export var DescribeDomain = op(
  n0,
  _DDe,
  0,
  () => DescribeDomainRequest,
  () => DescribeDomainResponse
);
export var DescribeFraudsterRegistrationJob = op(
  n0,
  _DFRJ,
  0,
  () => DescribeFraudsterRegistrationJobRequest,
  () => DescribeFraudsterRegistrationJobResponse
);
export var DescribeSpeakerEnrollmentJob = op(
  n0,
  _DSEJ,
  0,
  () => DescribeSpeakerEnrollmentJobRequest,
  () => DescribeSpeakerEnrollmentJobResponse
);
export var ListDomains = op(
  n0,
  _LD,
  0,
  () => ListDomainsRequest,
  () => ListDomainsResponse
);
export var StartFraudsterRegistrationJob = op(
  n0,
  _SFRJ,
  2,
  () => StartFraudsterRegistrationJobRequest,
  () => StartFraudsterRegistrationJobResponse
);
export var StartSpeakerEnrollmentJob = op(
  n0,
  _SSEJ,
  2,
  () => StartSpeakerEnrollmentJobRequest,
  () => StartSpeakerEnrollmentJobResponse
);
export var UpdateDomain = op(
  n0,
  _UD,
  0,
  () => UpdateDomainRequest,
  () => UpdateDomainResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AD,
  _AIc,
  _Ap,
  _ARw,
  _BP,
  _BPe,
  _BS,
  _CI,
  _CPV,
  _CRM,
  _CRMo,
  _CRT,
  _CT,
  _CW,
  _CWI,
  _CWO,
  _D,
  _DC,
  _E,
  _F,
  _GCR,
  _GCRI,
  _GCRO,
  _GM,
  _GMI,
  _GMO,
  _GW,
  _GWI,
  _GWO,
  _h,
  _hQ,
  _IMS,
  _IMT,
  _In,
  _IROUA,
  _ISmpr,
  _ISR,
  _IT,
  _JC,
  _JPK,
  _L,
  _LAC,
  _LAe,
  _LM,
  _LMe,
  _LMI,
  _LMi,
  _LMO,
  _LN,
  _LNP,
  _LPN,
  _LPNI,
  _LPNO,
  _LPV,
  _LSI,
  _LSII,
  _LSIO,
  _LW,
  _LWI,
  _LWO,
  _Me,
  _Mi,
  _MN,
  _MNi,
  _MR,
  _MS,
  _MSi,
  _MT,
  _N,
  _NAR,
  _NS,
  _NT,
  _O,
  _PA,
  _PAr,
  _PI,
  _Pi,
  _PM,
  _PMi,
  _PN,
  _PNP,
  _PNS,
  _PNSr,
  _PP,
  _PRC,
  _Pro,
  _PT,
  _Q,
  _QI,
  _QM,
  _QMu,
  _R,
  _RAe,
  _RC,
  _RO,
  _RRD,
  _RTA,
  _SB,
  _SI,
  _SII,
  _SIS,
  _SISh,
  _SM,
  _SRT,
  _St,
  _SW,
  _T,
  _TA,
  _Ta,
  _TAIS,
  _TN,
  _TNP,
  _UA,
  _UW,
  _UWI,
  _UWO,
  _UWS,
  _UWSI,
  _UWSO,
  _W,
  _WA,
  _WDC,
  _WI,
  _WJCI,
  _WJCO,
  _WN,
  _WNP,
  _WRD,
  _WS,
  _WSo,
  _WSor,
  n0,
} from "./schemas_0";
import { WorkloadProfiles } from "./schemas_8_Get";

/* eslint no-var: 0 */

export var BestPractice = struct(n0, _BP, 0, [_CI, _CT], [0, 0]);
export var ConsolidatedReportMetric = struct(
  n0,
  _CRM,
  0,
  [_MT, _RC, _WI, _WN, _WA, _UA, _L, _LAC],
  [0, 128 | 1, 0, 0, 0, 4, () => LensMetrics, 1]
);
export var CreateWorkloadInput = struct(
  n0,
  _CWI,
  0,
  [_WN, _D, _E, _AIc, _ARw, _NAR, _PP, _AD, _RO, _IT, _In, _L, _N, _CRT, _Ta, _DC, _Ap, _PA, _RTA, _JC],
  [
    0,
    0,
    0,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    [0, 4],
    128 | 0,
    () => WorkloadDiscoveryConfig,
    64 | 0,
    64 | 0,
    64 | 0,
    () => WorkloadJiraConfigurationInput,
  ]
);
export var CreateWorkloadOutput = struct(n0, _CWO, 0, [_WI, _WA], [0, 0]);
export var GetConsolidatedReportInput = struct(
  n0,
  _GCRI,
  0,
  [_F, _ISR, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _F,
      },
    ],
    [
      2,
      {
        [_hQ]: _ISR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var GetConsolidatedReportOutput = struct(n0, _GCRO, 0, [_Me, _NT, _BS], [() => ConsolidatedReportMetrics, 0, 0]);
export var GetMilestoneInput = struct(
  n0,
  _GMI,
  0,
  [_WI, _MNi],
  [
    [0, 1],
    [1, 1],
  ]
);
export var GetMilestoneOutput = struct(n0, _GMO, 0, [_WI, _Mi], [0, () => Milestone]);
export var GetWorkloadInput = struct(n0, _GWI, 0, [_WI], [[0, 1]]);
export var GetWorkloadOutput = struct(n0, _GWO, 0, [_W], [() => Workload]);
export var LensMetric = struct(n0, _LM, 0, [_LAe, _Pi, _RC], [0, () => PillarMetrics, 128 | 1]);
export var ListMilestonesInput = struct(n0, _LMI, 0, [_WI, _NT, _MR], [[0, 1], 0, 1]);
export var ListMilestonesOutput = struct(n0, _LMO, 0, [_WI, _MS, _NT], [0, () => MilestoneSummaries, 0]);
export var ListProfileNotificationsInput = struct(
  n0,
  _LPNI,
  0,
  [_WI, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _WI,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListProfileNotificationsOutput = struct(n0, _LPNO, 0, [_NS, _NT], [() => ProfileNotificationSummaries, 0]);
export var ListShareInvitationsInput = struct(
  n0,
  _LSII,
  0,
  [_WNP, _LNP, _SRT, _NT, _MR, _PNP, _TNP],
  [
    [
      0,
      {
        [_hQ]: _WNP,
      },
    ],
    [
      0,
      {
        [_hQ]: _LNP,
      },
    ],
    [
      0,
      {
        [_hQ]: _SRT,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _PNP,
      },
    ],
    [
      0,
      {
        [_hQ]: _TNP,
      },
    ],
  ]
);
export var ListShareInvitationsOutput = struct(n0, _LSIO, 0, [_SIS, _NT], [() => ShareInvitationSummaries, 0]);
export var ListWorkloadsInput = struct(n0, _LWI, 0, [_WNP, _NT, _MR], [0, 0, 1]);
export var ListWorkloadsOutput = struct(n0, _LWO, 0, [_WS, _NT], [() => WorkloadSummaries, 0]);
export var Milestone = struct(n0, _Mi, 0, [_MNi, _MN, _RAe, _W], [1, 0, 4, () => Workload]);
export var MilestoneSummary = struct(n0, _MSi, 0, [_MNi, _MN, _RAe, _WSo], [1, 0, 4, () => WorkloadSummary]);
export var PillarMetric = struct(n0, _PM, 0, [_PI, _RC, _Q], [0, 128 | 1, () => QuestionMetrics]);
export var ProfileNotificationSummary = struct(
  n0,
  _PNS,
  0,
  [_CPV, _LPV, _T, _PAr, _PN, _WI, _WN],
  [0, 0, 0, 0, 0, 0, 0]
);
export var QuestionMetric = struct(n0, _QM, 0, [_QI, _R, _BPe], [0, 0, () => BestPractices]);
export var ShareInvitationSummary = struct(
  n0,
  _SISh,
  0,
  [_SII, _SB, _SW, _PT, _SRT, _WN, _WI, _LN, _LAe, _PN, _PAr, _TN, _TA],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var UpdateWorkloadInput = struct(
  n0,
  _UWI,
  0,
  [_WI, _WN, _D, _E, _AIc, _ARw, _NAR, _PP, _AD, _RO, _IROUA, _IT, _In, _N, _ISmpr, _DC, _Ap, _JC],
  [
    [0, 1],
    0,
    0,
    0,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    0,
    2,
    0,
    0,
    0,
    0,
    () => WorkloadDiscoveryConfig,
    64 | 0,
    () => WorkloadJiraConfigurationInput,
  ]
);
export var UpdateWorkloadOutput = struct(n0, _UWO, 0, [_W], [() => Workload]);
export var UpdateWorkloadShareInput = struct(n0, _UWSI, 0, [_SI, _WI, _PT], [[0, 1], [0, 1], 0]);
export var UpdateWorkloadShareOutput = struct(n0, _UWSO, 0, [_WI, _WSor], [0, () => WorkloadShare]);
export var Workload = struct(
  n0,
  _W,
  0,
  [
    _WI,
    _WA,
    _WN,
    _D,
    _E,
    _UA,
    _AIc,
    _ARw,
    _NAR,
    _AD,
    _RO,
    _RRD,
    _IROUA,
    _IT,
    _In,
    _N,
    _ISmpr,
    _RC,
    _PP,
    _L,
    _O,
    _SII,
    _Ta,
    _DC,
    _Ap,
    _Pro,
    _PRC,
    _JC,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    0,
    4,
    2,
    0,
    0,
    0,
    0,
    128 | 1,
    64 | 0,
    64 | 0,
    0,
    0,
    128 | 0,
    () => WorkloadDiscoveryConfig,
    64 | 0,
    () => WorkloadProfiles,
    128 | 1,
    () => WorkloadJiraConfigurationOutput,
  ]
);
export var WorkloadDiscoveryConfig = struct(n0, _WDC, 0, [_TAIS, _WRD], [0, 64 | 0]);
export var WorkloadJiraConfigurationInput = struct(n0, _WJCI, 0, [_IMS, _IMT, _JPK], [0, 0, 0]);
export var WorkloadJiraConfigurationOutput = struct(n0, _WJCO, 0, [_IMS, _IMT, _JPK, _SM], [0, 0, 0, 0]);
export var WorkloadShare = struct(n0, _WSor, 0, [_SI, _SB, _SW, _PT, _St, _WN, _WI], [0, 0, 0, 0, 0, 0, 0]);
export var WorkloadSummary = struct(
  n0,
  _WSo,
  0,
  [_WI, _WA, _WN, _O, _UA, _L, _RC, _ISmpr, _Pro, _PRC],
  [0, 0, 0, 0, 4, 64 | 0, 128 | 1, 0, () => WorkloadProfiles, 128 | 1]
);
export var BestPractices = list(n0, _BPe, 0, () => BestPractice);
export var ConsolidatedReportMetrics = list(n0, _CRMo, 0, () => ConsolidatedReportMetric);
export var LensMetrics = list(n0, _LMe, 0, () => LensMetric);
export var MilestoneSummaries = list(n0, _MS, 0, () => MilestoneSummary);
export var PillarMetrics = list(n0, _PMi, 0, () => PillarMetric);
export var ProfileNotificationSummaries = list(n0, _PNSr, 0, () => ProfileNotificationSummary);
export var QuestionMetrics = list(n0, _QMu, 0, () => QuestionMetric);
export var ReviewTemplateArns = 64 | 0;

export var ShareInvitationSummaries = list(n0, _SIS, 0, () => ShareInvitationSummary);
export var WorkloadAccountIds = 64 | 0;

export var WorkloadApplications = 64 | 0;

export var WorkloadAwsRegions = 64 | 0;

export var WorkloadLenses = 64 | 0;

export var WorkloadNonAwsRegions = 64 | 0;

export var WorkloadPillarPriorities = 64 | 0;

export var WorkloadProfileArns = 64 | 0;

export var WorkloadResourceDefinition = 64 | 0;

export var WorkloadSummaries = list(n0, _WS, 0, () => WorkloadSummary);
export var CreateWorkload = op(
  n0,
  _CW,
  {
    [_h]: ["POST", "/workloads", 200],
  },
  () => CreateWorkloadInput,
  () => CreateWorkloadOutput
);
export var GetConsolidatedReport = op(
  n0,
  _GCR,
  {
    [_h]: ["GET", "/consolidatedReport", 200],
  },
  () => GetConsolidatedReportInput,
  () => GetConsolidatedReportOutput
);
export var GetMilestone = op(
  n0,
  _GM,
  {
    [_h]: ["GET", "/workloads/{WorkloadId}/milestones/{MilestoneNumber}", 200],
  },
  () => GetMilestoneInput,
  () => GetMilestoneOutput
);
export var GetWorkload = op(
  n0,
  _GW,
  {
    [_h]: ["GET", "/workloads/{WorkloadId}", 200],
  },
  () => GetWorkloadInput,
  () => GetWorkloadOutput
);
export var ListMilestones = op(
  n0,
  _LMi,
  {
    [_h]: ["POST", "/workloads/{WorkloadId}/milestonesSummaries", 200],
  },
  () => ListMilestonesInput,
  () => ListMilestonesOutput
);
export var ListProfileNotifications = op(
  n0,
  _LPN,
  {
    [_h]: ["GET", "/profileNotifications", 200],
  },
  () => ListProfileNotificationsInput,
  () => ListProfileNotificationsOutput
);
export var ListShareInvitations = op(
  n0,
  _LSI,
  {
    [_h]: ["GET", "/shareInvitations", 200],
  },
  () => ListShareInvitationsInput,
  () => ListShareInvitationsOutput
);
export var ListWorkloads = op(
  n0,
  _LW,
  {
    [_h]: ["POST", "/workloadsSummaries", 200],
  },
  () => ListWorkloadsInput,
  () => ListWorkloadsOutput
);
export var UpdateWorkload = op(
  n0,
  _UW,
  {
    [_h]: ["PATCH", "/workloads/{WorkloadId}", 200],
  },
  () => UpdateWorkloadInput,
  () => UpdateWorkloadOutput
);
export var UpdateWorkloadShare = op(
  n0,
  _UWS,
  {
    [_h]: ["PATCH", "/workloads/{WorkloadId}/shares/{ShareId}", 200],
  },
  () => UpdateWorkloadShareInput,
  () => UpdateWorkloadShareOutput
);

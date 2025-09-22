// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _ADl,
  _AQIQS,
  _AQIQSCC,
  _AQIQSDC,
  _Ar,
  _ARA,
  _ASv,
  _AUA,
  _AUDEC,
  _AUDFC,
  _AUDVEC,
  _AUEEC,
  _AUGQAEC,
  _AUQSBEC,
  _AZ,
  _BC,
  _Boo,
  _CT,
  _Da,
  _DF,
  _DI,
  _DQA,
  _DQAC,
  _DR,
  _DS,
  _DSCat,
  _DV,
  _DVI,
  _DVPCCe,
  _DVPCCRes,
  _DVPCCResc,
  _EC,
  _EF,
  _EM,
  _En,
  _ES,
  _ESC,
  _EUm,
  _FC,
  _GA,
  _GAC,
  _GEUFAU,
  _GEUFAUR,
  _GEUFAURe,
  _GEUFRU,
  _GEUFRUR,
  _GEUFRURe,
  _GEUFRUWI,
  _GEUFRUWIR,
  _GEUFRUWIRe,
  _GQA,
  _h,
  _hQ,
  _IDI,
  _IDVI,
  _IPni,
  _ITI,
  _LUT,
  _LVPCC,
  _LVPCCR,
  _LVPCCRi,
  _MR,
  _mr,
  _N,
  _Na,
  _NI,
  _NIe,
  _NII,
  _NIL,
  _NT,
  _nt,
  _QSB,
  _QSC,
  _RA,
  _RI,
  _RSC,
  _RSec,
  _RUCFC,
  _RUDEC,
  _RUDFC,
  _RUDVEC,
  _RUEEC,
  _RUGQAEC,
  _RUQSBEC,
  _RUQSCEC,
  _SCch,
  _Sch,
  _SGI,
  _SIh,
  _SIub,
  _SLIM,
  _SPCt,
  _SPta,
  _St,
  _STe,
  _SV,
  _SVC,
  _TAC,
  _TAhr,
  _UAs,
  _VI,
  _VPCCI,
  _VPCCo,
  _VPCCS,
  _VPCCSL,
  _VPCCSo,
  _VPCI,
  n0,
} from "./schemas_0";
import { EmbeddingUrl } from "./schemas_29_Embed";
import { SessionTagList } from "./schemas_91_Set";

/* eslint no-var: 0 */

export var AmazonQInQuickSightConsoleConfigurations = struct(
  n0,
  _AQIQSCC,
  0,
  [_DQA, _GA, _ES, _DS],
  [
    () => DataQnAConfigurations,
    () => GenerativeAuthoringConfigurations,
    () => ExecutiveSummaryConfigurations,
    () => DataStoriesConfigurations,
  ]
);
export var AmazonQInQuickSightDashboardConfigurations = struct(
  n0,
  _AQIQSDC,
  0,
  [_ES],
  [() => ExecutiveSummaryConfigurations]
);
export var AnonymousUserDashboardEmbeddingConfiguration = struct(
  n0,
  _AUDEC,
  0,
  [_IDI, _EF, _DF, _FC],
  [0, 64 | 0, 64 | 0, () => AnonymousUserDashboardFeatureConfigurations]
);
export var AnonymousUserDashboardFeatureConfigurations = struct(n0, _AUDFC, 0, [_SV], [() => SharedViewConfigurations]);
export var AnonymousUserDashboardVisualEmbeddingConfiguration = struct(
  n0,
  _AUDVEC,
  0,
  [_IDVI],
  [() => DashboardVisualId]
);
export var AnonymousUserEmbeddingExperienceConfiguration = struct(
  n0,
  _AUEEC,
  0,
  [_Da, _DV, _QSB, _GQA],
  [
    () => AnonymousUserDashboardEmbeddingConfiguration,
    () => AnonymousUserDashboardVisualEmbeddingConfiguration,
    () => AnonymousUserQSearchBarEmbeddingConfiguration,
    () => AnonymousUserGenerativeQnAEmbeddingConfiguration,
  ]
);
export var AnonymousUserGenerativeQnAEmbeddingConfiguration = struct(n0, _AUGQAEC, 0, [_ITI], [0]);
export var AnonymousUserQSearchBarEmbeddingConfiguration = struct(n0, _AUQSBEC, 0, [_ITI], [0]);
export var BookmarksConfigurations = struct(n0, _BC, 0, [_En], [2]);
export var DashboardVisualId = struct(n0, _DVI, 0, [_DI, _SIh, _VI], [0, 0, 0]);
export var DataQnAConfigurations = struct(n0, _DQAC, 0, [_En], [2]);
export var DataStoriesConfigurations = struct(n0, _DSCat, 0, [_En], [2]);
export var DescribeVPCConnectionRequest = struct(
  n0,
  _DVPCCRes,
  0,
  [_AAI, _VPCCI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeVPCConnectionResponse = struct(n0, _DVPCCResc, 0, [_VPCCo, _RI, _St], [() => VPCConnection, 0, 1]);
export var ExecutiveSummaryConfigurations = struct(n0, _ESC, 0, [_En], [2]);
export var GenerateEmbedUrlForAnonymousUserRequest = struct(
  n0,
  _GEUFAUR,
  0,
  [_AAI, _SLIM, _Na, _STe, _ARA, _EC, _ADl],
  [[0, 1], 1, 0, [() => SessionTagList, 0], 64 | 0, () => AnonymousUserEmbeddingExperienceConfiguration, 64 | 0]
);
export var GenerateEmbedUrlForAnonymousUserResponse = struct(
  n0,
  _GEUFAURe,
  0,
  [_EUm, _St, _RI, _AUA],
  [[() => EmbeddingUrl, 0], [1, 32], 0, 0]
);
export var GenerateEmbedUrlForRegisteredUserRequest = struct(
  n0,
  _GEUFRUR,
  0,
  [_AAI, _SLIM, _UAs, _EC, _ADl],
  [[0, 1], 1, 0, () => RegisteredUserEmbeddingExperienceConfiguration, 64 | 0]
);
export var GenerateEmbedUrlForRegisteredUserResponse = struct(
  n0,
  _GEUFRURe,
  0,
  [_EUm, _St, _RI],
  [[() => EmbeddingUrl, 0], [1, 32], 0]
);
export var GenerateEmbedUrlForRegisteredUserWithIdentityRequest = struct(
  n0,
  _GEUFRUWIR,
  0,
  [_AAI, _SLIM, _EC, _ADl],
  [[0, 1], 1, () => RegisteredUserEmbeddingExperienceConfiguration, 64 | 0]
);
export var GenerateEmbedUrlForRegisteredUserWithIdentityResponse = struct(
  n0,
  _GEUFRUWIRe,
  0,
  [_EUm, _St, _RI],
  [[() => EmbeddingUrl, 0], [1, 32], 0]
);
export var GenerativeAuthoringConfigurations = struct(n0, _GAC, 0, [_En], [2]);
export var ListVPCConnectionsRequest = struct(
  n0,
  _LVPCCR,
  0,
  [_AAI, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListVPCConnectionsResponse = struct(
  n0,
  _LVPCCRi,
  0,
  [_VPCCS, _NT, _RI, _St],
  [() => VPCConnectionSummaryList, 0, 0, [1, 32]]
);
export var NetworkInterface = struct(n0, _NI, 0, [_SIub, _AZ, _EM, _St, _NII], [0, 0, 0, 0, 0]);
export var RecentSnapshotsConfigurations = struct(n0, _RSC, 0, [_En], [2]);
export var RegisteredUserConsoleFeatureConfigurations = struct(
  n0,
  _RUCFC,
  0,
  [_SPta, _SV, _AQIQS, _Sch, _RSec, _TAhr],
  [
    () => StatePersistenceConfigurations,
    () => SharedViewConfigurations,
    () => AmazonQInQuickSightConsoleConfigurations,
    () => SchedulesConfigurations,
    () => RecentSnapshotsConfigurations,
    () => ThresholdAlertsConfigurations,
  ]
);
export var RegisteredUserDashboardEmbeddingConfiguration = struct(
  n0,
  _RUDEC,
  0,
  [_IDI, _FC],
  [0, () => RegisteredUserDashboardFeatureConfigurations]
);
export var RegisteredUserDashboardFeatureConfigurations = struct(
  n0,
  _RUDFC,
  0,
  [_SPta, _SV, _Boo, _AQIQS, _Sch, _RSec, _TAhr],
  [
    () => StatePersistenceConfigurations,
    () => SharedViewConfigurations,
    () => BookmarksConfigurations,
    () => AmazonQInQuickSightDashboardConfigurations,
    () => SchedulesConfigurations,
    () => RecentSnapshotsConfigurations,
    () => ThresholdAlertsConfigurations,
  ]
);
export var RegisteredUserDashboardVisualEmbeddingConfiguration = struct(
  n0,
  _RUDVEC,
  0,
  [_IDVI],
  [() => DashboardVisualId]
);
export var RegisteredUserEmbeddingExperienceConfiguration = struct(
  n0,
  _RUEEC,
  0,
  [_Da, _QSC, _QSB, _DV, _GQA],
  [
    () => RegisteredUserDashboardEmbeddingConfiguration,
    () => RegisteredUserQuickSightConsoleEmbeddingConfiguration,
    () => RegisteredUserQSearchBarEmbeddingConfiguration,
    () => RegisteredUserDashboardVisualEmbeddingConfiguration,
    () => RegisteredUserGenerativeQnAEmbeddingConfiguration,
  ]
);
export var RegisteredUserGenerativeQnAEmbeddingConfiguration = struct(n0, _RUGQAEC, 0, [_ITI], [0]);
export var RegisteredUserQSearchBarEmbeddingConfiguration = struct(n0, _RUQSBEC, 0, [_ITI], [0]);
export var RegisteredUserQuickSightConsoleEmbeddingConfiguration = struct(
  n0,
  _RUQSCEC,
  0,
  [_IPni, _FC],
  [0, () => RegisteredUserConsoleFeatureConfigurations]
);
export var SchedulesConfigurations = struct(n0, _SCch, 0, [_En], [2]);
export var SharedViewConfigurations = struct(n0, _SVC, 0, [_En], [2]);
export var StatePersistenceConfigurations = struct(n0, _SPCt, 0, [_En], [2]);
export var ThresholdAlertsConfigurations = struct(n0, _TAC, 0, [_En], [2]);
export var VPCConnection = struct(
  n0,
  _VPCCo,
  0,
  [_VPCCI, _Ar, _N, _VPCI, _SGI, _DR, _St, _ASv, _NIe, _RA, _CT, _LUT],
  [0, 0, 0, 0, 64 | 0, 64 | 0, 0, 0, () => NetworkInterfaceList, 0, 4, 4]
);
export var VPCConnectionSummary = struct(
  n0,
  _VPCCSo,
  0,
  [_VPCCI, _Ar, _N, _VPCI, _SGI, _DR, _St, _ASv, _NIe, _RA, _CT, _LUT],
  [0, 0, 0, 0, 64 | 0, 64 | 0, 0, 0, () => NetworkInterfaceList, 0, 4, 4]
);
export var AnonymousUserDashboardEmbeddingConfigurationDisabledFeatures = 64 | 0;

export var AnonymousUserDashboardEmbeddingConfigurationEnabledFeatures = 64 | 0;

export var ArnList = 64 | 0;

export var NetworkInterfaceList = list(n0, _NIL, 0, () => NetworkInterface);
export var StringList = 64 | 0;

export var VPCConnectionSummaryList = list(n0, _VPCCSL, 0, () => VPCConnectionSummary);
export var DescribeVPCConnection = op(
  n0,
  _DVPCCe,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/vpc-connections/{VPCConnectionId}", 200],
  },
  () => DescribeVPCConnectionRequest,
  () => DescribeVPCConnectionResponse
);
export var GenerateEmbedUrlForAnonymousUser = op(
  n0,
  _GEUFAU,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/embed-url/anonymous-user", 200],
  },
  () => GenerateEmbedUrlForAnonymousUserRequest,
  () => GenerateEmbedUrlForAnonymousUserResponse
);
export var GenerateEmbedUrlForRegisteredUser = op(
  n0,
  _GEUFRU,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/embed-url/registered-user", 200],
  },
  () => GenerateEmbedUrlForRegisteredUserRequest,
  () => GenerateEmbedUrlForRegisteredUserResponse
);
export var GenerateEmbedUrlForRegisteredUserWithIdentity = op(
  n0,
  _GEUFRUWI,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/embed-url/registered-user-with-identity", 200],
  },
  () => GenerateEmbedUrlForRegisteredUserWithIdentityRequest,
  () => GenerateEmbedUrlForRegisteredUserWithIdentityResponse
);
export var ListVPCConnections = op(
  n0,
  _LVPCC,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/vpc-connections", 200],
  },
  () => ListVPCConnectionsRequest,
  () => ListVPCConnectionsResponse
);

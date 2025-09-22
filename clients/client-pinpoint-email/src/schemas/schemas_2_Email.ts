// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BOMF,
  _CI,
  _DDC,
  _DDCL,
  _DDCo,
  _DEI,
  _DEIR,
  _DEIRe,
  _DIP,
  _DIPo,
  _Do,
  _DR,
  _DV,
  _DVa,
  _E,
  _EDn,
  _EFE,
  _EI,
  _EIm,
  _FA,
  _FSDT,
  _GDDC,
  _GDDCR,
  _GDDCRe,
  _GDSR,
  _GDSRR,
  _GDSRRe,
  _h,
  _hQ,
  _IC,
  _II,
  _IIL,
  _IN,
  _INd,
  _IP,
  _IRC,
  _IT,
  _IU,
  _LDDC,
  _LDDCR,
  _LDDCRi,
  _LEI,
  _LEIR,
  _LEIRi,
  _LSDT,
  _MFD,
  _NT,
  _OV,
  _PEIDA,
  _PEIDAR,
  _PEIDARu,
  _PEIFA,
  _PEIFAR,
  _PEIFARu,
  _PEIMFA,
  _PEIMFAR,
  _PEIMFARu,
  _PI,
  _PS,
  _PSr,
  _PV,
  _RDR,
  _RR,
  _RRP,
  _S,
  _SC,
  _SD,
  _SDu,
  _SE,
  _SEe,
  _SI,
  _SP,
  _SRC,
  _VS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DailyVolume = struct(n0, _DV, 0, [_SD, _VS, _DIP], [4, () => VolumeStatistics, () => DomainIspPlacements]);
export var DeleteEmailIdentityRequest = struct(n0, _DEIR, 0, [_EI], [[0, 1]]);
export var DeleteEmailIdentityResponse = struct(n0, _DEIRe, 0, [], []);
export var DomainDeliverabilityCampaign = struct(
  n0,
  _DDC,
  0,
  [_CI, _IU, _S, _FA, _SI, _FSDT, _LSDT, _IC, _SC, _RR, _DR, _RDR, _PV, _E],
  [0, 0, 0, 0, 64 | 0, 4, 4, 1, 1, 1, 1, 1, 1, 64 | 0]
);
export var DomainIspPlacement = struct(n0, _DIPo, 0, [_IN, _IRC, _SRC, _IP, _SP], [0, 1, 1, 1, 1]);
export var GetDomainDeliverabilityCampaignRequest = struct(n0, _GDDCR, 0, [_CI], [[0, 1]]);
export var GetDomainDeliverabilityCampaignResponse = struct(
  n0,
  _GDDCRe,
  0,
  [_DDC],
  [() => DomainDeliverabilityCampaign]
);
export var GetDomainStatisticsReportRequest = struct(
  n0,
  _GDSRR,
  0,
  [_Do, _SD, _EDn],
  [
    [0, 1],
    [
      4,
      {
        [_hQ]: _SD,
      },
    ],
    [
      4,
      {
        [_hQ]: _EDn,
      },
    ],
  ]
);
export var GetDomainStatisticsReportResponse = struct(
  n0,
  _GDSRRe,
  0,
  [_OV, _DVa],
  [() => OverallVolume, () => DailyVolumes]
);
export var IdentityInfo = struct(n0, _II, 0, [_IT, _INd, _SEe], [0, 0, 2]);
export var ListDomainDeliverabilityCampaignsRequest = struct(
  n0,
  _LDDCR,
  0,
  [_SD, _EDn, _SDu, _NT, _PS],
  [
    [
      4,
      {
        [_hQ]: _SD,
      },
    ],
    [
      4,
      {
        [_hQ]: _EDn,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _PS,
      },
    ],
  ]
);
export var ListDomainDeliverabilityCampaignsResponse = struct(
  n0,
  _LDDCRi,
  0,
  [_DDCo, _NT],
  [() => DomainDeliverabilityCampaignList, 0]
);
export var ListEmailIdentitiesRequest = struct(
  n0,
  _LEIR,
  0,
  [_NT, _PS],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _PS,
      },
    ],
  ]
);
export var ListEmailIdentitiesResponse = struct(n0, _LEIRi, 0, [_EIm, _NT], [() => IdentityInfoList, 0]);
export var OverallVolume = struct(
  n0,
  _OV,
  0,
  [_VS, _RRP, _DIP],
  [() => VolumeStatistics, 1, () => DomainIspPlacements]
);
export var PutEmailIdentityDkimAttributesRequest = struct(n0, _PEIDAR, 0, [_EI, _SE], [[0, 1], 2]);
export var PutEmailIdentityDkimAttributesResponse = struct(n0, _PEIDARu, 0, [], []);
export var PutEmailIdentityFeedbackAttributesRequest = struct(n0, _PEIFAR, 0, [_EI, _EFE], [[0, 1], 2]);
export var PutEmailIdentityFeedbackAttributesResponse = struct(n0, _PEIFARu, 0, [], []);
export var PutEmailIdentityMailFromAttributesRequest = struct(n0, _PEIMFAR, 0, [_EI, _MFD, _BOMF], [[0, 1], 0, 0]);
export var PutEmailIdentityMailFromAttributesResponse = struct(n0, _PEIMFARu, 0, [], []);
export var VolumeStatistics = struct(n0, _VS, 0, [_IRC, _SRC, _PI, _PSr], [1, 1, 1, 1]);
export var DailyVolumes = list(n0, _DVa, 0, () => DailyVolume);
export var DomainDeliverabilityCampaignList = list(n0, _DDCL, 0, () => DomainDeliverabilityCampaign);
export var DomainIspPlacements = list(n0, _DIP, 0, () => DomainIspPlacement);
export var Esps = 64 | 0;

export var IdentityInfoList = list(n0, _IIL, 0, () => IdentityInfo);
export var IpList = 64 | 0;

export var DeleteEmailIdentity = op(
  n0,
  _DEI,
  {
    [_h]: ["DELETE", "/v1/email/identities/{EmailIdentity}", 200],
  },
  () => DeleteEmailIdentityRequest,
  () => DeleteEmailIdentityResponse
);
export var GetDomainDeliverabilityCampaign = op(
  n0,
  _GDDC,
  {
    [_h]: ["GET", "/v1/email/deliverability-dashboard/campaigns/{CampaignId}", 200],
  },
  () => GetDomainDeliverabilityCampaignRequest,
  () => GetDomainDeliverabilityCampaignResponse
);
export var GetDomainStatisticsReport = op(
  n0,
  _GDSR,
  {
    [_h]: ["GET", "/v1/email/deliverability-dashboard/statistics-report/{Domain}", 200],
  },
  () => GetDomainStatisticsReportRequest,
  () => GetDomainStatisticsReportResponse
);
export var ListDomainDeliverabilityCampaigns = op(
  n0,
  _LDDC,
  {
    [_h]: ["GET", "/v1/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns", 200],
  },
  () => ListDomainDeliverabilityCampaignsRequest,
  () => ListDomainDeliverabilityCampaignsResponse
);
export var ListEmailIdentities = op(
  n0,
  _LEI,
  {
    [_h]: ["GET", "/v1/email/identities", 200],
  },
  () => ListEmailIdentitiesRequest,
  () => ListEmailIdentitiesResponse
);
export var PutEmailIdentityDkimAttributes = op(
  n0,
  _PEIDA,
  {
    [_h]: ["PUT", "/v1/email/identities/{EmailIdentity}/dkim", 200],
  },
  () => PutEmailIdentityDkimAttributesRequest,
  () => PutEmailIdentityDkimAttributesResponse
);
export var PutEmailIdentityFeedbackAttributes = op(
  n0,
  _PEIFA,
  {
    [_h]: ["PUT", "/v1/email/identities/{EmailIdentity}/feedback", 200],
  },
  () => PutEmailIdentityFeedbackAttributesRequest,
  () => PutEmailIdentityFeedbackAttributesResponse
);
export var PutEmailIdentityMailFromAttributes = op(
  n0,
  _PEIMFA,
  {
    [_h]: ["PUT", "/v1/email/identities/{EmailIdentity}/mail-from", 200],
  },
  () => PutEmailIdentityMailFromAttributesRequest,
  () => PutEmailIdentityMailFromAttributesResponse
);

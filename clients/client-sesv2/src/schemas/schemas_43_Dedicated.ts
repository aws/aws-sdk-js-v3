// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CIa,
  _DDC,
  _DDCL,
  _DDCo,
  _DR,
  _ED,
  _Es,
  _FA,
  _FSDT,
  _GDDC,
  _GDDCR,
  _GDDCRe,
  _h,
  _hQ,
  _IC,
  _Ip,
  _IU,
  _LDDC,
  _LDDCR,
  _LDDCRi,
  _LSDT,
  _NT,
  _PDIWA,
  _PDIWAR,
  _PDIWARu,
  _PS,
  _PV,
  _RDR,
  _RR,
  _SC,
  _SD,
  _SDub,
  _SI,
  _Su,
  _WP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DomainDeliverabilityCampaign = struct(
  n0,
  _DDC,
  0,
  [_CIa, _IU, _Su, _FA, _SI, _FSDT, _LSDT, _IC, _SC, _RR, _DR, _RDR, _PV, _Es],
  [0, 0, 0, 0, 64 | 0, 4, 4, 1, 1, 1, 1, 1, 1, 64 | 0]
);
export var GetDomainDeliverabilityCampaignRequest = struct(n0, _GDDCR, 0, [_CIa], [[0, 1]]);
export var GetDomainDeliverabilityCampaignResponse = struct(
  n0,
  _GDDCRe,
  0,
  [_DDC],
  [() => DomainDeliverabilityCampaign]
);
export var ListDomainDeliverabilityCampaignsRequest = struct(
  n0,
  _LDDCR,
  0,
  [_SD, _ED, _SDub, _NT, _PS],
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
        [_hQ]: _ED,
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
export var PutDedicatedIpWarmupAttributesRequest = struct(n0, _PDIWAR, 0, [_Ip, _WP], [[0, 1], 1]);
export var PutDedicatedIpWarmupAttributesResponse = struct(n0, _PDIWARu, 0, [], []);
export var DomainDeliverabilityCampaignList = list(n0, _DDCL, 0, () => DomainDeliverabilityCampaign);
export var Esps = 64 | 0;

export var IpList = 64 | 0;

export var GetDomainDeliverabilityCampaign = op(
  n0,
  _GDDC,
  {
    [_h]: ["GET", "/v2/email/deliverability-dashboard/campaigns/{CampaignId}", 200],
  },
  () => GetDomainDeliverabilityCampaignRequest,
  () => GetDomainDeliverabilityCampaignResponse
);
export var ListDomainDeliverabilityCampaigns = op(
  n0,
  _LDDC,
  {
    [_h]: ["GET", "/v2/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns", 200],
  },
  () => ListDomainDeliverabilityCampaignsRequest,
  () => ListDomainDeliverabilityCampaignsResponse
);
export var PutDedicatedIpWarmupAttributes = op(
  n0,
  _PDIWA,
  {
    [_h]: ["PUT", "/v2/email/dedicated-ips/{Ip}/warmup", 200],
  },
  () => PutDedicatedIpWarmupAttributesRequest,
  () => PutDedicatedIpWarmupAttributesResponse
);

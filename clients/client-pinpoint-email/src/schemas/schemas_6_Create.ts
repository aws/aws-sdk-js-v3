// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BOMF,
  _C,
  _CCS,
  _CCSR,
  _CCSRr,
  _CDIP,
  _CDIPR,
  _CDIPRr,
  _CDTR,
  _CDTRR,
  _CDTRRr,
  _CEI,
  _CEIR,
  _CEIRr,
  _CRD,
  _CSN,
  _DA,
  _DO,
  _DP,
  _DTR,
  _DTS,
  _EI,
  _FEA,
  _FFS,
  _GCS,
  _GCSR,
  _GCSRe,
  _GDTR,
  _GDTRR,
  _GDTRRe,
  _GEI,
  _GEIR,
  _GEIRe,
  _h,
  _hQ,
  _IN,
  _IP,
  _IPs,
  _IPsp,
  _IT,
  _K,
  _LFS,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MFA,
  _MFD,
  _MFDS,
  _MP,
  _OP,
  _PN,
  _PSl,
  _RA,
  _RI,
  _RME,
  _RNe,
  _RO,
  _SE,
  _SEe,
  _SO,
  _SP,
  _SPN,
  _SPp,
  _St,
  _Ta,
  _Tag,
  _TK,
  _TL,
  _TO,
  _To,
  _TP,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _V,
  _VFSS,
  n0,
} from "./schemas_0";
import { EmailContent } from "./schemas_1_Create";
import { DeliverabilityTestReport } from "./schemas_3_Deliverability";

/* eslint no-var: 0 */

export var CreateConfigurationSetRequest = struct(
  n0,
  _CCSR,
  0,
  [_CSN, _TO, _DO, _RO, _SO, _Ta],
  [0, () => TrackingOptions, () => DeliveryOptions, () => ReputationOptions, () => SendingOptions, () => TagList]
);
export var CreateConfigurationSetResponse = struct(n0, _CCSRr, 0, [], []);
export var CreateDedicatedIpPoolRequest = struct(n0, _CDIPR, 0, [_PN, _Ta], [0, () => TagList]);
export var CreateDedicatedIpPoolResponse = struct(n0, _CDIPRr, 0, [], []);
export var CreateDeliverabilityTestReportRequest = struct(
  n0,
  _CDTRR,
  0,
  [_RNe, _FEA, _C, _Ta],
  [0, 0, () => EmailContent, () => TagList]
);
export var CreateDeliverabilityTestReportResponse = struct(n0, _CDTRRr, 0, [_RI, _DTS], [0, 0]);
export var CreateEmailIdentityRequest = struct(n0, _CEIR, 0, [_EI, _Ta], [0, () => TagList]);
export var CreateEmailIdentityResponse = struct(n0, _CEIRr, 0, [_IT, _VFSS, _DA], [0, 2, () => DkimAttributes]);
export var DeliveryOptions = struct(n0, _DO, 0, [_TP, _SPN], [0, 0]);
export var DkimAttributes = struct(n0, _DA, 0, [_SE, _St, _To], [2, 0, 64 | 0]);
export var GetConfigurationSetRequest = struct(n0, _GCSR, 0, [_CSN], [[0, 1]]);
export var GetConfigurationSetResponse = struct(
  n0,
  _GCSRe,
  0,
  [_CSN, _TO, _DO, _RO, _SO, _Ta],
  [0, () => TrackingOptions, () => DeliveryOptions, () => ReputationOptions, () => SendingOptions, () => TagList]
);
export var GetDeliverabilityTestReportRequest = struct(n0, _GDTRR, 0, [_RI], [[0, 1]]);
export var GetDeliverabilityTestReportResponse = struct(
  n0,
  _GDTRRe,
  0,
  [_DTR, _OP, _IPs, _M, _Ta],
  [() => DeliverabilityTestReport, () => PlacementStatistics, () => IspPlacements, 0, () => TagList]
);
export var GetEmailIdentityRequest = struct(n0, _GEIR, 0, [_EI], [[0, 1]]);
export var GetEmailIdentityResponse = struct(
  n0,
  _GEIRe,
  0,
  [_IT, _FFS, _VFSS, _DA, _MFA, _Ta],
  [0, 2, 2, () => DkimAttributes, () => MailFromAttributes, () => TagList]
);
export var IspPlacement = struct(n0, _IPsp, 0, [_IN, _PSl], [0, () => PlacementStatistics]);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_RA],
  [
    [
      0,
      {
        [_hQ]: _RA,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [() => TagList]);
export var MailFromAttributes = struct(n0, _MFA, 0, [_MFD, _MFDS, _BOMF], [0, 0, 0]);
export var PlacementStatistics = struct(n0, _PSl, 0, [_IP, _SP, _MP, _SPp, _DP], [1, 1, 1, 1, 1]);
export var ReputationOptions = struct(n0, _RO, 0, [_RME, _LFS], [2, 4]);
export var SendingOptions = struct(n0, _SO, 0, [_SEe], [2]);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TrackingOptions = struct(n0, _TO, 0, [_CRD], [0]);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RA, _TK],
  [
    [
      0,
      {
        [_hQ]: _RA,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _TK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var DnsTokenList = 64 | 0;

export var IspPlacements = list(n0, _IPs, 0, () => IspPlacement);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var CreateConfigurationSet = op(
  n0,
  _CCS,
  {
    [_h]: ["POST", "/v1/email/configuration-sets", 200],
  },
  () => CreateConfigurationSetRequest,
  () => CreateConfigurationSetResponse
);
export var CreateDedicatedIpPool = op(
  n0,
  _CDIP,
  {
    [_h]: ["POST", "/v1/email/dedicated-ip-pools", 200],
  },
  () => CreateDedicatedIpPoolRequest,
  () => CreateDedicatedIpPoolResponse
);
export var CreateDeliverabilityTestReport = op(
  n0,
  _CDTR,
  {
    [_h]: ["POST", "/v1/email/deliverability-dashboard/test", 200],
  },
  () => CreateDeliverabilityTestReportRequest,
  () => CreateDeliverabilityTestReportResponse
);
export var CreateEmailIdentity = op(
  n0,
  _CEI,
  {
    [_h]: ["POST", "/v1/email/identities", 200],
  },
  () => CreateEmailIdentityRequest,
  () => CreateEmailIdentityResponse
);
export var GetConfigurationSet = op(
  n0,
  _GCS,
  {
    [_h]: ["GET", "/v1/email/configuration-sets/{ConfigurationSetName}", 200],
  },
  () => GetConfigurationSetRequest,
  () => GetConfigurationSetResponse
);
export var GetDeliverabilityTestReport = op(
  n0,
  _GDTR,
  {
    [_h]: ["GET", "/v1/email/deliverability-dashboard/test-reports/{ReportId}", 200],
  },
  () => GetDeliverabilityTestReportRequest,
  () => GetDeliverabilityTestReportResponse
);
export var GetEmailIdentity = op(
  n0,
  _GEI,
  {
    [_h]: ["GET", "/v1/email/identities/{EmailIdentity}", 200],
  },
  () => GetEmailIdentityRequest,
  () => GetEmailIdentityResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/v1/email/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/v1/email/tags", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/v1/email/tags", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);

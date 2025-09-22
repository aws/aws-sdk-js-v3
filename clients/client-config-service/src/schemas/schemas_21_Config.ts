// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { NoSuchConfigRuleInConformancePackException as __NoSuchConfigRuleInConformancePackException } from "../models/index";
import {
  _AIc,
  _cl,
  _Co,
  _CPCF,
  _CPN,
  _CPRC,
  _CPRCL,
  _CRN,
  _CRNo,
  _CT,
  _D,
  _DCPC,
  _DCPCR,
  _DCPCRe,
  _DLDA,
  _DOCRe,
  _DOCRRe,
  _DOCRRes,
  _DOCRS,
  _DOCRSR,
  _DOCRSRe,
  _e,
  _EA,
  _ECr,
  _EMr,
  _F,
  _GOCRDS,
  _GOCRDSR,
  _GOCRDSRe,
  _IP,
  _L,
  _LUT,
  _m,
  _MARS,
  _MAS,
  _MEF,
  _NSCRICPE,
  _NT,
  _OCPRM,
  _OCPRMNP,
  _OCR,
  _OCRA,
  _OCRDS,
  _OCRM,
  _OCRN,
  _OCRNr,
  _OCRr,
  _OCRS,
  _OCRSr,
  _OCRTT,
  _OMRM,
  _ORS,
  _PR,
  _RIS,
  _RTS,
  _SDF,
  _TKS,
  _TVS,
  n0,
} from "./schemas_0";
import { OrganizationCustomRuleMetadata, OrganizationManagedRuleMetadata } from "./schemas_11_Config";

/* eslint no-var: 0 */

export var ConformancePackComplianceFilters = struct(n0, _CPCF, 0, [_CRNo, _CT], [64 | 0, 0]);
export var ConformancePackRuleCompliance = struct(n0, _CPRC, 0, [_CRN, _CT, _Co], [0, 0, 64 | 0]);
export var DescribeConformancePackComplianceRequest = struct(
  n0,
  _DCPCR,
  0,
  [_CPN, _F, _L, _NT],
  [0, () => ConformancePackComplianceFilters, 1, 0]
);
export var DescribeConformancePackComplianceResponse = struct(
  n0,
  _DCPCRe,
  0,
  [_CPN, _CPRCL, _NT],
  [0, () => ConformancePackRuleComplianceList, 0]
);
export var DescribeOrganizationConfigRulesRequest = struct(n0, _DOCRRe, 0, [_OCRNr, _L, _NT], [64 | 0, 1, 0]);
export var DescribeOrganizationConfigRulesResponse = struct(
  n0,
  _DOCRRes,
  0,
  [_OCR, _NT],
  [() => OrganizationConfigRules, 0]
);
export var DescribeOrganizationConfigRuleStatusesRequest = struct(n0, _DOCRSR, 0, [_OCRNr, _L, _NT], [64 | 0, 1, 0]);
export var DescribeOrganizationConfigRuleStatusesResponse = struct(
  n0,
  _DOCRSRe,
  0,
  [_OCRS, _NT],
  [() => OrganizationConfigRuleStatuses, 0]
);
export var GetOrganizationConfigRuleDetailedStatusRequest = struct(
  n0,
  _GOCRDSR,
  0,
  [_OCRN, _F, _L, _NT],
  [0, () => StatusDetailFilters, 1, 0]
);
export var GetOrganizationConfigRuleDetailedStatusResponse = struct(
  n0,
  _GOCRDSRe,
  0,
  [_OCRDS, _NT],
  [() => OrganizationConfigRuleDetailedStatus, 0]
);
export var MemberAccountStatus = struct(n0, _MAS, 0, [_AIc, _CRN, _MARS, _ECr, _EMr, _LUT], [0, 0, 0, 0, 0, 4]);
export var NoSuchConfigRuleInConformancePackException = error(
  n0,
  _NSCRICPE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __NoSuchConfigRuleInConformancePackException
);
export var OrganizationConfigRule = struct(
  n0,
  _OCRr,
  0,
  [_OCRN, _OCRA, _OMRM, _OCRM, _EA, _LUT, _OCPRM],
  [
    0,
    0,
    () => OrganizationManagedRuleMetadata,
    () => OrganizationCustomRuleMetadata,
    64 | 0,
    4,
    () => OrganizationCustomPolicyRuleMetadataNoPolicy,
  ]
);
export var OrganizationConfigRuleStatus = struct(n0, _OCRSr, 0, [_OCRN, _ORS, _ECr, _EMr, _LUT], [0, 0, 0, 0, 4]);
export var OrganizationCustomPolicyRuleMetadataNoPolicy = struct(
  n0,
  _OCPRMNP,
  0,
  [_D, _OCRTT, _IP, _MEF, _RTS, _RIS, _TKS, _TVS, _PR, _DLDA],
  [0, 64 | 0, 0, 0, 64 | 0, 0, 0, 0, 0, 64 | 0]
);
export var StatusDetailFilters = struct(n0, _SDF, 0, [_AIc, _MARS], [0, 0]);
export var ConformancePackConfigRuleNames = 64 | 0;

export var ConformancePackRuleComplianceList = list(n0, _CPRCL, 0, () => ConformancePackRuleCompliance);
export var ControlsList = 64 | 0;

export var OrganizationConfigRuleDetailedStatus = list(n0, _OCRDS, 0, () => MemberAccountStatus);
export var OrganizationConfigRuleNames = 64 | 0;

export var OrganizationConfigRules = list(n0, _OCR, 0, () => OrganizationConfigRule);
export var OrganizationConfigRuleStatuses = list(n0, _OCRS, 0, () => OrganizationConfigRuleStatus);
export var DescribeConformancePackCompliance = op(
  n0,
  _DCPC,
  0,
  () => DescribeConformancePackComplianceRequest,
  () => DescribeConformancePackComplianceResponse
);
export var DescribeOrganizationConfigRules = op(
  n0,
  _DOCRe,
  0,
  () => DescribeOrganizationConfigRulesRequest,
  () => DescribeOrganizationConfigRulesResponse
);
export var DescribeOrganizationConfigRuleStatuses = op(
  n0,
  _DOCRS,
  0,
  () => DescribeOrganizationConfigRuleStatusesRequest,
  () => DescribeOrganizationConfigRuleStatusesResponse
);
export var GetOrganizationConfigRuleDetailedStatus = op(
  n0,
  _GOCRDS,
  0,
  () => GetOrganizationConfigRuleDetailedStatusRequest,
  () => GetOrganizationConfigRuleDetailedStatusResponse
);

// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { NoSuchConformancePackException as __NoSuchConformancePackException } from "../models/index";
import {
  _ACBCP,
  _ACBCPg,
  _ACBCPL,
  _ACPC,
  _ACPCF,
  _AIc,
  _ARw,
  _C,
  _CAN,
  _CB,
  _cl,
  _CPA,
  _CPCS,
  _CPCSF,
  _CPCSL,
  _CPCSo,
  _CPCSon,
  _CPCSonf,
  _CPD,
  _CPDL,
  _CPDo,
  _CPI,
  _CPIP,
  _CPN,
  _CPNo,
  _CPS,
  _CPSD,
  _CPSDL,
  _CPSDo,
  _CPSR,
  _CRC,
  _CT,
  _DACBCP,
  _DACBCPR,
  _DACBCPRe,
  _DCPe,
  _DCPRe,
  _DCPRes,
  _DCPS,
  _DCPSR,
  _DCPSRe,
  _DN,
  _DSB,
  _DSKP,
  _DV,
  _e,
  _F,
  _GCPCS,
  _GCPCSR,
  _GCPCSRe,
  _L,
  _LCPCS,
  _LCPCSR,
  _LCPCSRi,
  _LUCT,
  _LURT,
  _LUTa,
  _m,
  _NCRC,
  _NSCPE,
  _NT,
  _SA,
  _SB,
  _Sc,
  _SO,
  _TRC,
  _TSSMDD,
  n0,
} from "./schemas_0";
import { ConformancePackInputParameters } from "./schemas_24_Conformance";

/* eslint no-var: 0 */

export var AggregateComplianceByConformancePack = struct(
  n0,
  _ACBCP,
  0,
  [_CPN, _C, _AIc, _ARw],
  [0, () => AggregateConformancePackCompliance, 0, 0]
);
export var AggregateConformancePackCompliance = struct(n0, _ACPC, 0, [_CT, _CRC, _NCRC, _TRC], [0, 1, 1, 1]);
export var AggregateConformancePackComplianceFilters = struct(n0, _ACPCF, 0, [_CPN, _CT, _AIc, _ARw], [0, 0, 0, 0]);
export var ConformancePackComplianceScore = struct(n0, _CPCS, 0, [_Sc, _CPN, _LUTa], [0, 0, 4]);
export var ConformancePackComplianceScoresFilters = struct(n0, _CPCSF, 0, [_CPNo], [64 | 0]);
export var ConformancePackComplianceSummary = struct(n0, _CPCSo, 0, [_CPN, _CPCSon], [0, 0]);
export var ConformancePackDetail = struct(
  n0,
  _CPD,
  0,
  [_CPN, _CPA, _CPI, _DSB, _DSKP, _CPIP, _LURT, _CB, _TSSMDD],
  [0, 0, 0, 0, 0, () => ConformancePackInputParameters, 4, 0, () => TemplateSSMDocumentDetails]
);
export var ConformancePackStatusDetail = struct(
  n0,
  _CPSD,
  0,
  [_CPN, _CPI, _CPA, _CPS, _SA, _CPSR, _LURT, _LUCT],
  [0, 0, 0, 0, 0, 0, 4, 4]
);
export var DescribeAggregateComplianceByConformancePacksRequest = struct(
  n0,
  _DACBCPR,
  0,
  [_CAN, _F, _L, _NT],
  [0, () => AggregateConformancePackComplianceFilters, 1, 0]
);
export var DescribeAggregateComplianceByConformancePacksResponse = struct(
  n0,
  _DACBCPRe,
  0,
  [_ACBCPg, _NT],
  [() => AggregateComplianceByConformancePackList, 0]
);
export var DescribeConformancePacksRequest = struct(n0, _DCPRe, 0, [_CPNo, _L, _NT], [64 | 0, 1, 0]);
export var DescribeConformancePacksResponse = struct(
  n0,
  _DCPRes,
  0,
  [_CPDo, _NT],
  [() => ConformancePackDetailList, 0]
);
export var DescribeConformancePackStatusRequest = struct(n0, _DCPSR, 0, [_CPNo, _L, _NT], [64 | 0, 1, 0]);
export var DescribeConformancePackStatusResponse = struct(
  n0,
  _DCPSRe,
  0,
  [_CPSDo, _NT],
  [() => ConformancePackStatusDetailsList, 0]
);
export var GetConformancePackComplianceSummaryRequest = struct(n0, _GCPCSR, 0, [_CPNo, _L, _NT], [64 | 0, 1, 0]);
export var GetConformancePackComplianceSummaryResponse = struct(
  n0,
  _GCPCSRe,
  0,
  [_CPCSL, _NT],
  [() => ConformancePackComplianceSummaryList, 0]
);
export var ListConformancePackComplianceScoresRequest = struct(
  n0,
  _LCPCSR,
  0,
  [_F, _SO, _SB, _L, _NT],
  [() => ConformancePackComplianceScoresFilters, 0, 0, 1, 0]
);
export var ListConformancePackComplianceScoresResponse = struct(
  n0,
  _LCPCSRi,
  0,
  [_NT, _CPCSonf],
  [0, () => ConformancePackComplianceScores]
);
export var NoSuchConformancePackException = error(
  n0,
  _NSCPE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __NoSuchConformancePackException
);
export var TemplateSSMDocumentDetails = struct(n0, _TSSMDD, 0, [_DN, _DV], [0, 0]);
export var AggregateComplianceByConformancePackList = list(n0, _ACBCPL, 0, () => AggregateComplianceByConformancePack);
export var ConformancePackComplianceScores = list(n0, _CPCSonf, 0, () => ConformancePackComplianceScore);
export var ConformancePackComplianceSummaryList = list(n0, _CPCSL, 0, () => ConformancePackComplianceSummary);
export var ConformancePackDetailList = list(n0, _CPDL, 0, () => ConformancePackDetail);
export var ConformancePackNameFilter = 64 | 0;

export var ConformancePackNamesList = 64 | 0;

export var ConformancePackNamesToSummarizeList = 64 | 0;

export var ConformancePackStatusDetailsList = list(n0, _CPSDL, 0, () => ConformancePackStatusDetail);
export var DescribeAggregateComplianceByConformancePacks = op(
  n0,
  _DACBCP,
  0,
  () => DescribeAggregateComplianceByConformancePacksRequest,
  () => DescribeAggregateComplianceByConformancePacksResponse
);
export var DescribeConformancePacks = op(
  n0,
  _DCPe,
  0,
  () => DescribeConformancePacksRequest,
  () => DescribeConformancePacksResponse
);
export var DescribeConformancePackStatus = op(
  n0,
  _DCPS,
  0,
  () => DescribeConformancePackStatusRequest,
  () => DescribeConformancePackStatusResponse
);
export var GetConformancePackComplianceSummary = op(
  n0,
  _GCPCS,
  0,
  () => GetConformancePackComplianceSummaryRequest,
  () => GetConformancePackComplianceSummaryResponse
);
export var ListConformancePackComplianceScores = op(
  n0,
  _LCPCS,
  0,
  () => ListConformancePackComplianceScoresRequest,
  () => ListConformancePackComplianceScoresResponse
);

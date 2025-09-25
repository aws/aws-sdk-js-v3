// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACC,
  _ACCg,
  _ACCL,
  _ACPCC,
  _ACPCS,
  _ACPCSF,
  _ACPCSg,
  _ACPCSL,
  _AIc,
  _ARw,
  _CAN,
  _CC,
  _CCC,
  _CCPC,
  _CE,
  _CRCo,
  _CRCSF,
  _CS,
  _CSBRT,
  _CSBRTo,
  _CST,
  _F,
  _GACPCS,
  _GACPCSR,
  _GACPCSRe,
  _GACRCS,
  _GACRCSR,
  _GACRCSRe,
  _GBK,
  _GCSBCR,
  _GCSBCRR,
  _GCSBRT,
  _GCSBRTR,
  _GCSBRTRe,
  _GN,
  _L,
  _NCCPC,
  _NCRCo,
  _NT,
  _RT,
  _RTe,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AggregateComplianceCount = struct(n0, _ACC, 0, [_GN, _CS], [0, () => ComplianceSummary]);
export var AggregateConformancePackComplianceCount = struct(n0, _ACPCC, 0, [_CCPC, _NCCPC], [1, 1]);
export var AggregateConformancePackComplianceSummary = struct(
  n0,
  _ACPCS,
  0,
  [_CS, _GN],
  [() => AggregateConformancePackComplianceCount, 0]
);
export var AggregateConformancePackComplianceSummaryFilters = struct(n0, _ACPCSF, 0, [_AIc, _ARw], [0, 0]);
export var ComplianceContributorCount = struct(n0, _CCC, 0, [_CC, _CE], [1, 2]);
export var ComplianceSummary = struct(
  n0,
  _CS,
  0,
  [_CRCo, _NCRCo, _CST],
  [() => ComplianceContributorCount, () => ComplianceContributorCount, 4]
);
export var ComplianceSummaryByResourceType = struct(n0, _CSBRT, 0, [_RT, _CS], [0, () => ComplianceSummary]);
export var ConfigRuleComplianceSummaryFilters = struct(n0, _CRCSF, 0, [_AIc, _ARw], [0, 0]);
export var GetAggregateConfigRuleComplianceSummaryRequest = struct(
  n0,
  _GACRCSR,
  0,
  [_CAN, _F, _GBK, _L, _NT],
  [0, () => ConfigRuleComplianceSummaryFilters, 0, 1, 0]
);
export var GetAggregateConfigRuleComplianceSummaryResponse = struct(
  n0,
  _GACRCSRe,
  0,
  [_GBK, _ACCg, _NT],
  [0, () => AggregateComplianceCountList, 0]
);
export var GetAggregateConformancePackComplianceSummaryRequest = struct(
  n0,
  _GACPCSR,
  0,
  [_CAN, _F, _GBK, _L, _NT],
  [0, () => AggregateConformancePackComplianceSummaryFilters, 0, 1, 0]
);
export var GetAggregateConformancePackComplianceSummaryResponse = struct(
  n0,
  _GACPCSRe,
  0,
  [_ACPCSg, _GBK, _NT],
  [() => AggregateConformancePackComplianceSummaryList, 0, 0]
);
export var GetComplianceSummaryByConfigRuleResponse = struct(n0, _GCSBCRR, 0, [_CS], [() => ComplianceSummary]);
export var GetComplianceSummaryByResourceTypeRequest = struct(n0, _GCSBRTR, 0, [_RTe], [64 | 0]);
export var GetComplianceSummaryByResourceTypeResponse = struct(
  n0,
  _GCSBRTRe,
  0,
  [_CSBRTo],
  [() => ComplianceSummariesByResourceType]
);
export var AggregateComplianceCountList = list(n0, _ACCL, 0, () => AggregateComplianceCount);
export var AggregateConformancePackComplianceSummaryList = list(
  n0,
  _ACPCSL,
  0,
  () => AggregateConformancePackComplianceSummary
);
export var ComplianceSummariesByResourceType = list(n0, _CSBRTo, 0, () => ComplianceSummaryByResourceType);
export var GetAggregateConfigRuleComplianceSummary = op(
  n0,
  _GACRCS,
  0,
  () => GetAggregateConfigRuleComplianceSummaryRequest,
  () => GetAggregateConfigRuleComplianceSummaryResponse
);
export var GetAggregateConformancePackComplianceSummary = op(
  n0,
  _GACPCS,
  0,
  () => GetAggregateConformancePackComplianceSummaryRequest,
  () => GetAggregateConformancePackComplianceSummaryResponse
);
export var GetComplianceSummaryByConfigRule = op(
  n0,
  _GCSBCR,
  0,
  () => Unit,
  () => GetComplianceSummaryByConfigRuleResponse
);
export var GetComplianceSummaryByResourceType = op(
  n0,
  _GCSBRT,
  0,
  () => GetComplianceSummaryByResourceTypeRequest,
  () => GetComplianceSummaryByResourceTypeResponse
);

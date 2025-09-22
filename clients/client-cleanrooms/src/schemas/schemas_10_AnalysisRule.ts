// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aA,
  _aAA,
  _aAl,
  _aAP,
  _AC,
  _aC,
  _ACg,
  _ACgg,
  _ACL,
  _agg,
  _aJO,
  _AR,
  _aR,
  _ARA,
  _ARC,
  _ARIMT,
  _ARL,
  _aRn,
  _ARP,
  _ARPV,
  _aRR,
  _BGSAR,
  _BGSARE,
  _BGSAREL,
  _BGSARI,
  _BGSARO,
  _cI,
  _cIo,
  _cN,
  _cNo,
  _co,
  _colu,
  _CP,
  _cP,
  _CPA,
  _CPC,
  _CPL,
  _cPo,
  _CPV,
  _cT,
  _cu,
  _dC,
  _dOC,
  _dP,
  _DPC,
  _DPCi,
  _DPCL,
  _er,
  _f,
  _GSAR,
  _GSARI,
  _GSARO,
  _h,
  _iMT,
  _jC,
  _jR,
  _lC,
  _li,
  _m,
  _mi,
  _n,
  _oC,
  _p,
  _QC,
  _qC,
  _QCL,
  _QCRO,
  _rO,
  _SARL,
  _SARR,
  _sARR,
  _SARRL,
  _sF,
  _t,
  _uT,
  _v_,
  n0,
} from "./schemas_0";
import { ConfiguredTableAssociationAnalysisRulePolicy } from "./schemas_25_AnalysisRule";

/* eslint no-var: 0 */

export var AggregateColumn = struct(n0, _AC, 0, [_cN, _f], [64 | 0, 0]);
export var AggregationConstraint = struct(n0, _ACg, 0, [_cNo, _mi, _t], [0, 1, 0]);
export var AnalysisRule = struct(
  n0,
  _AR,
  0,
  [_cI, _t, _n, _cT, _uT, _p, _cP, _cPo],
  [
    0,
    0,
    0,
    4,
    4,
    () => AnalysisRulePolicy,
    () => ConfiguredTableAssociationAnalysisRulePolicy,
    () => ConsolidatedPolicy,
  ]
);
export var AnalysisRuleAggregation = struct(
  n0,
  _ARA,
  0,
  [_aC, _jC, _jR, _aJO, _dC, _sF, _oC, _aA],
  [() => AggregateColumnList, 64 | 0, 0, 64 | 0, 64 | 0, 64 | 0, () => AggregationConstraints, 0]
);
export var AnalysisRuleCustom = struct(
  n0,
  _ARC,
  0,
  [_aAl, _aAP, _aA, _dOC, _dP],
  [64 | 0, 64 | 0, 0, 64 | 0, () => DifferentialPrivacyConfiguration]
);
export var AnalysisRuleIdMappingTable = struct(
  n0,
  _ARIMT,
  0,
  [_jC, _qC, _dC],
  [64 | 0, () => QueryConstraintList, 64 | 0]
);
export var AnalysisRuleList = struct(n0, _ARL, 0, [_jC, _aJO, _lC, _aA], [64 | 0, 64 | 0, 64 | 0, 0]);
export var BatchGetSchemaAnalysisRuleError = struct(n0, _BGSARE, 0, [_n, _t, _co, _m], [0, 0, 0, 0]);
export var BatchGetSchemaAnalysisRuleInput = struct(
  n0,
  _BGSARI,
  0,
  [_cIo, _sARR],
  [[0, 1], () => SchemaAnalysisRuleRequestList]
);
export var BatchGetSchemaAnalysisRuleOutput = struct(
  n0,
  _BGSARO,
  0,
  [_aR, _er],
  [() => SchemaAnalysisRuleList, () => BatchGetSchemaAnalysisRuleErrorList]
);
export var ConsolidatedPolicyAggregation = struct(
  n0,
  _CPA,
  0,
  [_aC, _jC, _jR, _aJO, _dC, _sF, _oC, _aA, _aRR, _aAA],
  [() => AggregateColumnList, 64 | 0, 0, 64 | 0, 64 | 0, 64 | 0, () => AggregationConstraints, 0, 64 | 0, 64 | 0]
);
export var ConsolidatedPolicyCustom = struct(
  n0,
  _CPC,
  0,
  [_aAl, _aAP, _aA, _dOC, _dP, _aRR, _aAA],
  [64 | 0, 64 | 0, 0, 64 | 0, () => DifferentialPrivacyConfiguration, 64 | 0, 64 | 0]
);
export var ConsolidatedPolicyList = struct(
  n0,
  _CPL,
  0,
  [_jC, _aJO, _lC, _aA, _aRR, _aAA],
  [64 | 0, 64 | 0, 64 | 0, 0, 64 | 0, 64 | 0]
);
export var DifferentialPrivacyColumn = struct(n0, _DPC, 0, [_n], [0]);
export var DifferentialPrivacyConfiguration = struct(n0, _DPCi, 0, [_colu], [() => DifferentialPrivacyColumnList]);
export var GetSchemaAnalysisRuleInput = struct(
  n0,
  _GSARI,
  0,
  [_cIo, _n, _t],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetSchemaAnalysisRuleOutput = struct(n0, _GSARO, 0, [_aRn], [() => AnalysisRule]);
export var QueryConstraintRequireOverlap = struct(n0, _QCRO, 0, [_colu], [64 | 0]);
export var SchemaAnalysisRuleRequest = struct(n0, _SARR, 0, [_n, _t], [0, 0]);
export var AggregateColumnList = list(n0, _ACL, 0, () => AggregateColumn);
export var AggregationConstraints = list(n0, _ACgg, 0, () => AggregationConstraint);
export var AllowedAnalysesList = 64 | 0;

export var AllowedAnalysisProviderList = 64 | 0;

export var AnalysisRuleColumnList = 64 | 0;

export var AnalysisRuleColumnNameList = 64 | 0;

export var BatchGetSchemaAnalysisRuleErrorList = list(n0, _BGSAREL, 0, () => BatchGetSchemaAnalysisRuleError);
export var DifferentialPrivacyColumnList = list(n0, _DPCL, 0, () => DifferentialPrivacyColumn);
export var JoinOperatorsList = 64 | 0;

export var QueryConstraintList = list(n0, _QCL, 0, () => QueryConstraint);
export var ScalarFunctionsList = 64 | 0;

export var SchemaAnalysisRuleList = list(n0, _SARL, 0, () => AnalysisRule);
export var SchemaAnalysisRuleRequestList = list(n0, _SARRL, 0, () => SchemaAnalysisRuleRequest);
export var AnalysisRulePolicy = uni(n0, _ARP, 0, [_v_], [() => AnalysisRulePolicyV1]);
export var AnalysisRulePolicyV1 = uni(
  n0,
  _ARPV,
  0,
  [_li, _agg, _cu, _iMT],
  [() => AnalysisRuleList, () => AnalysisRuleAggregation, () => AnalysisRuleCustom, () => AnalysisRuleIdMappingTable]
);
export var ConsolidatedPolicy = uni(n0, _CP, 0, [_v_], [() => ConsolidatedPolicyV1]);
export var ConsolidatedPolicyV1 = uni(
  n0,
  _CPV,
  0,
  [_li, _agg, _cu],
  [() => ConsolidatedPolicyList, () => ConsolidatedPolicyAggregation, () => ConsolidatedPolicyCustom]
);
export var QueryConstraint = uni(n0, _QC, 0, [_rO], [() => QueryConstraintRequireOverlap]);
export var BatchGetSchemaAnalysisRule = op(
  n0,
  _BGSAR,
  {
    [_h]: ["POST", "/collaborations/{collaborationIdentifier}/batch-schema-analysis-rule", 200],
  },
  () => BatchGetSchemaAnalysisRuleInput,
  () => BatchGetSchemaAnalysisRuleOutput
);
export var GetSchemaAnalysisRule = op(
  n0,
  _GSAR,
  {
    [_h]: ["GET", "/collaborations/{collaborationIdentifier}/schemas/{name}/analysisRule/{type}", 200],
  },
  () => GetSchemaAnalysisRuleInput,
  () => GetSchemaAnalysisRuleOutput
);

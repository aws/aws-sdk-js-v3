// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { NoSuchConfigRuleException as __NoSuchConfigRuleException } from "../models/index";
import {
  _C,
  _CBCR,
  _CBCRo,
  _cl,
  _CRAo,
  _CRES,
  _CRESL,
  _CRESo,
  _CRI,
  _CRN,
  _CRNo,
  _CTo,
  _DCBCR,
  _DCBCRR,
  _DCBCRRe,
  _DCRES,
  _DCRESR,
  _DCRESRe,
  _e,
  _FAT,
  _FES,
  _GCRP,
  _GCRPR,
  _GCRPRe,
  _L,
  _LDLDS,
  _LDLDSR,
  _LDLDT,
  _LDT,
  _LEC,
  _LEM,
  _LFET,
  _LFIT,
  _LSET,
  _LSIT,
  _m,
  _NSCRE,
  _NT,
  _PT,
  n0,
} from "./schemas_0";
import { Compliance } from "./schemas_32_Compliance";

/* eslint no-var: 0 */

export var ComplianceByConfigRule = struct(n0, _CBCR, 0, [_CRN, _C], [0, () => Compliance]);
export var ConfigRuleEvaluationStatus = struct(
  n0,
  _CRES,
  0,
  [_CRN, _CRAo, _CRI, _LSIT, _LFIT, _LSET, _LFET, _FAT, _LDT, _LEC, _LEM, _FES, _LDLDS, _LDLDSR, _LDLDT],
  [0, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 2, 0, 0, 4]
);
export var DescribeComplianceByConfigRuleRequest = struct(n0, _DCBCRR, 0, [_CRNo, _CTo, _NT], [64 | 0, 64 | 0, 0]);
export var DescribeComplianceByConfigRuleResponse = struct(
  n0,
  _DCBCRRe,
  0,
  [_CBCRo, _NT],
  [() => ComplianceByConfigRules, 0]
);
export var DescribeConfigRuleEvaluationStatusRequest = struct(n0, _DCRESR, 0, [_CRNo, _NT, _L], [64 | 0, 0, 1]);
export var DescribeConfigRuleEvaluationStatusResponse = struct(
  n0,
  _DCRESRe,
  0,
  [_CRESo, _NT],
  [() => ConfigRuleEvaluationStatusList, 0]
);
export var GetCustomRulePolicyRequest = struct(n0, _GCRPR, 0, [_CRN], [0]);
export var GetCustomRulePolicyResponse = struct(n0, _GCRPRe, 0, [_PT], [0]);
export var NoSuchConfigRuleException = error(
  n0,
  _NSCRE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __NoSuchConfigRuleException
);
export var ComplianceByConfigRules = list(n0, _CBCRo, 0, () => ComplianceByConfigRule);
export var ConfigRuleEvaluationStatusList = list(n0, _CRESL, 0, () => ConfigRuleEvaluationStatus);
export var DescribeComplianceByConfigRule = op(
  n0,
  _DCBCR,
  0,
  () => DescribeComplianceByConfigRuleRequest,
  () => DescribeComplianceByConfigRuleResponse
);
export var DescribeConfigRuleEvaluationStatus = op(
  n0,
  _DCRES,
  0,
  () => DescribeConfigRuleEvaluationStatusRequest,
  () => DescribeConfigRuleEvaluationStatusResponse
);
export var GetCustomRulePolicy = op(
  n0,
  _GCRP,
  0,
  () => GetCustomRulePolicyRequest,
  () => GetCustomRulePolicyResponse
);

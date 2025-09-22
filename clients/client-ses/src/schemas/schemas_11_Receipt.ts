// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidLambdaFunctionException as __InvalidLambdaFunctionException,
  InvalidS3ConfigurationException as __InvalidS3ConfigurationException,
  InvalidSnsTopicException as __InvalidSnsTopicException,
  RuleDoesNotExistException as __RuleDoesNotExistException,
  RuleSetDoesNotExistException as __RuleSetDoesNotExistException,
} from "../models/index";
import {
  _A,
  _aQE,
  _Bu,
  _c,
  _CRR,
  _CRRR,
  _CRRRr,
  _CRRS,
  _CRRSR,
  _CRRSRl,
  _DRR,
  _DRRe,
  _DRRR,
  _DRRRe,
  _DRRRes,
  _DRRResc,
  _DRRSe,
  _DRRSRes,
  _DRRSResc,
  _e,
  _FA,
  _hE,
  _ILFE,
  _ISCE,
  _ISTE,
  _m,
  _Me,
  _N,
  _ORSN,
  _RDNEE,
  _RN,
  _RNu,
  _RRRS,
  _RRRSR,
  _RRRSRe,
  _RSDNEE,
  _RSN,
  _Ru,
  _Rul,
  _SARRS,
  _SARRSR,
  _SARRSRe,
  _SRRP,
  _SRRPR,
  _SRRPRe,
  _To,
  _URR,
  _URRR,
  _URRRp,
  n0,
} from "./schemas_0";
import { ReceiptRule, ReceiptRulesList } from "./schemas_2_Receipt";
import { ReceiptRuleSetMetadata } from "./schemas_26_Receipt";

/* eslint no-var: 0 */

export var CloneReceiptRuleSetRequest = struct(n0, _CRRSR, 0, [_RSN, _ORSN], [0, 0]);
export var CloneReceiptRuleSetResponse = struct(n0, _CRRSRl, 0, [], []);
export var CreateReceiptRuleRequest = struct(n0, _CRRR, 0, [_RSN, _A, _Ru], [0, 0, () => ReceiptRule]);
export var CreateReceiptRuleResponse = struct(n0, _CRRRr, 0, [], []);
export var DeleteReceiptRuleRequest = struct(n0, _DRRR, 0, [_RSN, _RN], [0, 0]);
export var DeleteReceiptRuleResponse = struct(n0, _DRRRe, 0, [], []);
export var DescribeReceiptRuleRequest = struct(n0, _DRRRes, 0, [_RSN, _RN], [0, 0]);
export var DescribeReceiptRuleResponse = struct(n0, _DRRResc, 0, [_Ru], [() => ReceiptRule]);
export var DescribeReceiptRuleSetRequest = struct(n0, _DRRSRes, 0, [_RSN], [0]);
export var DescribeReceiptRuleSetResponse = struct(
  n0,
  _DRRSResc,
  0,
  [_Me, _Rul],
  [() => ReceiptRuleSetMetadata, () => ReceiptRulesList]
);
export var InvalidLambdaFunctionException = error(
  n0,
  _ILFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidLambdaFunction`, 400],
  },
  [_FA, _m],
  [0, 0],

  __InvalidLambdaFunctionException
);
export var InvalidS3ConfigurationException = error(
  n0,
  _ISCE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidS3Configuration`, 400],
  },
  [_Bu, _m],
  [0, 0],

  __InvalidS3ConfigurationException
);
export var InvalidSnsTopicException = error(
  n0,
  _ISTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSnsTopic`, 400],
  },
  [_To, _m],
  [0, 0],

  __InvalidSnsTopicException
);
export var ReorderReceiptRuleSetRequest = struct(n0, _RRRSR, 0, [_RSN, _RNu], [0, 64 | 0]);
export var ReorderReceiptRuleSetResponse = struct(n0, _RRRSRe, 0, [], []);
export var RuleDoesNotExistException = error(
  n0,
  _RDNEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`RuleDoesNotExist`, 400],
  },
  [_N, _m],
  [0, 0],

  __RuleDoesNotExistException
);
export var RuleSetDoesNotExistException = error(
  n0,
  _RSDNEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`RuleSetDoesNotExist`, 400],
  },
  [_N, _m],
  [0, 0],

  __RuleSetDoesNotExistException
);
export var SetActiveReceiptRuleSetRequest = struct(n0, _SARRSR, 0, [_RSN], [0]);
export var SetActiveReceiptRuleSetResponse = struct(n0, _SARRSRe, 0, [], []);
export var SetReceiptRulePositionRequest = struct(n0, _SRRPR, 0, [_RSN, _RN, _A], [0, 0, 0]);
export var SetReceiptRulePositionResponse = struct(n0, _SRRPRe, 0, [], []);
export var UpdateReceiptRuleRequest = struct(n0, _URRR, 0, [_RSN, _Ru], [0, () => ReceiptRule]);
export var UpdateReceiptRuleResponse = struct(n0, _URRRp, 0, [], []);
export var ReceiptRuleNamesList = 64 | 0;

export var CloneReceiptRuleSet = op(
  n0,
  _CRRS,
  0,
  () => CloneReceiptRuleSetRequest,
  () => CloneReceiptRuleSetResponse
);
export var CreateReceiptRule = op(
  n0,
  _CRR,
  0,
  () => CreateReceiptRuleRequest,
  () => CreateReceiptRuleResponse
);
export var DeleteReceiptRule = op(
  n0,
  _DRR,
  0,
  () => DeleteReceiptRuleRequest,
  () => DeleteReceiptRuleResponse
);
export var DescribeReceiptRule = op(
  n0,
  _DRRe,
  0,
  () => DescribeReceiptRuleRequest,
  () => DescribeReceiptRuleResponse
);
export var DescribeReceiptRuleSet = op(
  n0,
  _DRRSe,
  0,
  () => DescribeReceiptRuleSetRequest,
  () => DescribeReceiptRuleSetResponse
);
export var ReorderReceiptRuleSet = op(
  n0,
  _RRRS,
  0,
  () => ReorderReceiptRuleSetRequest,
  () => ReorderReceiptRuleSetResponse
);
export var SetActiveReceiptRuleSet = op(
  n0,
  _SARRS,
  0,
  () => SetActiveReceiptRuleSetRequest,
  () => SetActiveReceiptRuleSetResponse
);
export var SetReceiptRulePosition = op(
  n0,
  _SRRP,
  0,
  () => SetReceiptRulePositionRequest,
  () => SetReceiptRulePositionResponse
);
export var UpdateReceiptRule = op(
  n0,
  _URR,
  0,
  () => UpdateReceiptRuleRequest,
  () => UpdateReceiptRuleResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACBCR,
  _ACBCRg,
  _ACBCRL,
  _AIc,
  _ARw,
  _C,
  _CAN,
  _CCC,
  _CRCF,
  _CRN,
  _CT,
  _DACBCR,
  _DACBCRR,
  _DACBCRRe,
  _F,
  _L,
  _NT,
  n0,
} from "./schemas_0";
import { ComplianceContributorCount } from "./schemas_2_Compliance";

/* eslint no-var: 0 */

export var AggregateComplianceByConfigRule = struct(n0, _ACBCR, 0, [_CRN, _C, _AIc, _ARw], [0, () => Compliance, 0, 0]);
export var Compliance = struct(n0, _C, 0, [_CT, _CCC], [0, () => ComplianceContributorCount]);
export var ConfigRuleComplianceFilters = struct(n0, _CRCF, 0, [_CRN, _CT, _AIc, _ARw], [0, 0, 0, 0]);
export var DescribeAggregateComplianceByConfigRulesRequest = struct(
  n0,
  _DACBCRR,
  0,
  [_CAN, _F, _L, _NT],
  [0, () => ConfigRuleComplianceFilters, 1, 0]
);
export var DescribeAggregateComplianceByConfigRulesResponse = struct(
  n0,
  _DACBCRRe,
  0,
  [_ACBCRg, _NT],
  [() => AggregateComplianceByConfigRuleList, 0]
);
export var AggregateComplianceByConfigRuleList = list(n0, _ACBCRL, 0, () => AggregateComplianceByConfigRule);
export var ComplianceTypes = 64 | 0;

export var DescribeAggregateComplianceByConfigRules = op(
  n0,
  _DACBCR,
  0,
  () => DescribeAggregateComplianceByConfigRulesRequest,
  () => DescribeAggregateComplianceByConfigRulesResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAT,
  _CCD,
  _CCDL,
  _CCo,
  _De,
  _F,
  _FL,
  _h,
  _I,
  _LCCD,
  _LCCDI,
  _LCCDO,
  _LSCR,
  _LSCRI,
  _LSCRO,
  _LSCRR,
  _LSCRRI,
  _LSCRRO,
  _M,
  _Me,
  _MR,
  _N,
  _NT,
  _O,
  _OI,
  _Ref,
  _RR,
  _RRL,
  _RRu,
  _S,
  _SCR,
  _SCRI,
  _SCRL,
  _SCRu,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConfigurationCheckDefinition = struct(n0, _CCD, 0, [_I, _N, _De, _AAT], [0, 0, 0, 64 | 0]);
export var Filter = struct(n0, _F, 0, [_N, _V, _O], [0, 0, 0]);
export var ListConfigurationCheckDefinitionsInput = struct(n0, _LCCDI, 0, [_MR, _NT], [1, 0]);
export var ListConfigurationCheckDefinitionsOutput = struct(
  n0,
  _LCCDO,
  0,
  [_CCo, _NT],
  [() => ConfigurationCheckDefinitionList, 0]
);
export var ListSubCheckResultsInput = struct(n0, _LSCRI, 0, [_OI, _MR, _NT], [0, 1, 0]);
export var ListSubCheckResultsOutput = struct(n0, _LSCRO, 0, [_SCR, _NT], [() => SubCheckResultList, 0]);
export var ListSubCheckRuleResultsInput = struct(n0, _LSCRRI, 0, [_SCRI, _MR, _NT], [0, 1, 0]);
export var ListSubCheckRuleResultsOutput = struct(n0, _LSCRRO, 0, [_RR, _NT], [() => RuleResultList, 0]);
export var RuleResult = struct(n0, _RRu, 0, [_I, _De, _S, _M, _Me], [0, 0, 0, 0, 128 | 0]);
export var SubCheckResult = struct(n0, _SCRu, 0, [_I, _N, _De, _Ref], [0, 0, 0, 64 | 0]);
export var ApplicationTypeList = 64 | 0;

export var ConfigurationCheckDefinitionList = list(n0, _CCDL, 0, () => ConfigurationCheckDefinition);
export var FilterList = list(n0, _FL, 0, () => Filter);
export var RuleResultList = list(n0, _RRL, 0, () => RuleResult);
export var SubCheckReferencesList = 64 | 0;

export var SubCheckResultList = list(n0, _SCRL, 0, () => SubCheckResult);
export var RuleResultMetadata = 128 | 0;

export var ListConfigurationCheckDefinitions = op(
  n0,
  _LCCD,
  {
    [_h]: ["POST", "/list-configuration-check-definitions", 200],
  },
  () => ListConfigurationCheckDefinitionsInput,
  () => ListConfigurationCheckDefinitionsOutput
);
export var ListSubCheckResults = op(
  n0,
  _LSCR,
  {
    [_h]: ["POST", "/list-sub-check-results", 200],
  },
  () => ListSubCheckResultsInput,
  () => ListSubCheckResultsOutput
);
export var ListSubCheckRuleResults = op(
  n0,
  _LSCRR,
  {
    [_h]: ["POST", "/list-sub-check-rule-results", 200],
  },
  () => ListSubCheckRuleResultsInput,
  () => ListSubCheckRuleResultsOutput
);

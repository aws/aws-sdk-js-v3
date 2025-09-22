// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _AR,
  _c,
  _CAI,
  _CCRFO,
  _CCRFOI,
  _CCRFOO,
  _CE,
  _CR,
  _CRr,
  _CRSe,
  _CRSen,
  _CTS,
  _DAI,
  _DR,
  _e,
  _FR,
  _GCRFO,
  _GCRFOI,
  _GCRFOO,
  _h,
  _hE,
  _LCRFO,
  _LCRFOI,
  _LCRFOO,
  _LUTS,
  _M,
  _MR,
  _NT,
  _RA,
  _RH,
  _RI,
  _RN,
  _RNP,
  _Ru,
  _T,
  n0,
} from "./schemas_0";
import { CentralizationRule } from "./schemas_5_Organization";

/* eslint no-var: 0 */

export var CentralizationRuleSummary = struct(
  n0,
  _CRSe,
  0,
  [_RN, _RA, _CAI, _CTS, _CRr, _LUTS, _RH, _FR, _DAI, _DR],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 0]
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var CreateCentralizationRuleForOrganizationInput = struct(
  n0,
  _CCRFOI,
  0,
  [_RN, _Ru, _T],
  [0, () => CentralizationRule, 128 | 0]
);
export var CreateCentralizationRuleForOrganizationOutput = struct(n0, _CCRFOO, 0, [_RA], [0]);
export var GetCentralizationRuleForOrganizationInput = struct(n0, _GCRFOI, 0, [_RI], [0]);
export var GetCentralizationRuleForOrganizationOutput = struct(
  n0,
  _GCRFOO,
  0,
  [_RN, _RA, _CAI, _CTS, _CRr, _LUTS, _RH, _FR, _CR],
  [0, 0, 0, 1, 0, 1, 0, 0, () => CentralizationRule]
);
export var ListCentralizationRulesForOrganizationInput = struct(n0, _LCRFOI, 0, [_RNP, _AR, _MR, _NT], [0, 2, 1, 0]);
export var ListCentralizationRulesForOrganizationOutput = struct(
  n0,
  _LCRFOO,
  0,
  [_CRSen, _NT],
  [() => CentralizationRuleSummaries, 0]
);
export var CentralizationRuleSummaries = list(n0, _CRSen, 0, () => CentralizationRuleSummary);
export var CreateCentralizationRuleForOrganization = op(
  n0,
  _CCRFO,
  {
    [_h]: ["POST", "/CreateCentralizationRuleForOrganization", 200],
  },
  () => CreateCentralizationRuleForOrganizationInput,
  () => CreateCentralizationRuleForOrganizationOutput
);
export var GetCentralizationRuleForOrganization = op(
  n0,
  _GCRFO,
  {
    [_h]: ["POST", "/GetCentralizationRuleForOrganization", 200],
  },
  () => GetCentralizationRuleForOrganizationInput,
  () => GetCentralizationRuleForOrganizationOutput
);
export var ListCentralizationRulesForOrganization = op(
  n0,
  _LCRFO,
  {
    [_h]: ["POST", "/ListCentralizationRulesForOrganization", 200],
  },
  () => ListCentralizationRulesForOrganizationInput,
  () => ListCentralizationRulesForOrganizationOutput
);

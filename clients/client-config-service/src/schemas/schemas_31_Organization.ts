// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { NoSuchOrganizationConfigRuleException as __NoSuchOrganizationConfigRuleException } from "../models/index";
import { _cl, _e, _GOCRP, _GOCRPR, _GOCRPRe, _m, _NSOCRE, _OCRN, _PT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetOrganizationCustomRulePolicyRequest = struct(n0, _GOCRPR, 0, [_OCRN], [0]);
export var GetOrganizationCustomRulePolicyResponse = struct(n0, _GOCRPRe, 0, [_PT], [0]);
export var NoSuchOrganizationConfigRuleException = error(
  n0,
  _NSOCRE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __NoSuchOrganizationConfigRuleException
);
export var GetOrganizationCustomRulePolicy = op(
  n0,
  _GOCRP,
  0,
  () => GetOrganizationCustomRulePolicyRequest,
  () => GetOrganizationCustomRulePolicyResponse
);

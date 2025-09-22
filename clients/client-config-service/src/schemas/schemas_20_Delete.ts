// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceInUseException as __ResourceInUseException } from "../models/index";
import {
  _cl,
  _CPN,
  _CRN,
  _CRNo,
  _DCP,
  _DCPR,
  _DCR,
  _DCRR,
  _DER,
  _DERR,
  _DERRe,
  _DOCP,
  _DOCPR,
  _DOCR,
  _DOCRR,
  _e,
  _m,
  _OCPN,
  _OCRN,
  _RIUE,
  _SCRE,
  _SCRER,
  _SCRERt,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConfigRuleRequest = struct(n0, _DCRR, 0, [_CRN], [0]);
export var DeleteConformancePackRequest = struct(n0, _DCPR, 0, [_CPN], [0]);
export var DeleteEvaluationResultsRequest = struct(n0, _DERR, 0, [_CRN], [0]);
export var DeleteEvaluationResultsResponse = struct(n0, _DERRe, 0, [], []);
export var DeleteOrganizationConfigRuleRequest = struct(n0, _DOCRR, 0, [_OCRN], [0]);
export var DeleteOrganizationConformancePackRequest = struct(n0, _DOCPR, 0, [_OCPN], [0]);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __ResourceInUseException
);
export var StartConfigRulesEvaluationRequest = struct(n0, _SCRER, 0, [_CRNo], [64 | 0]);
export var StartConfigRulesEvaluationResponse = struct(n0, _SCRERt, 0, [], []);
export var ReevaluateConfigRuleNames = 64 | 0;

export var DeleteConfigRule = op(
  n0,
  _DCR,
  0,
  () => DeleteConfigRuleRequest,
  () => Unit
);
export var DeleteConformancePack = op(
  n0,
  _DCP,
  0,
  () => DeleteConformancePackRequest,
  () => Unit
);
export var DeleteEvaluationResults = op(
  n0,
  _DER,
  0,
  () => DeleteEvaluationResultsRequest,
  () => DeleteEvaluationResultsResponse
);
export var DeleteOrganizationConfigRule = op(
  n0,
  _DOCR,
  0,
  () => DeleteOrganizationConfigRuleRequest,
  () => Unit
);
export var DeleteOrganizationConformancePack = op(
  n0,
  _DOCP,
  0,
  () => DeleteOrganizationConformancePackRequest,
  () => Unit
);
export var StartConfigRulesEvaluation = op(
  n0,
  _SCRE,
  0,
  () => StartConfigRulesEvaluationRequest,
  () => StartConfigRulesEvaluationResponse
);

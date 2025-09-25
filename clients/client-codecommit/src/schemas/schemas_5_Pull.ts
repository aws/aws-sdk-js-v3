// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidRevisionIdException as __InvalidRevisionIdException,
  RevisionIdRequiredException as __RevisionIdRequiredException,
  RevisionNotCurrentException as __RevisionNotCurrentException,
} from "../models/index";
import {
  _A,
  _AL,
  _ap,
  _app,
  _aRNS,
  _aRS,
  _aS,
  _c,
  _E,
  _e,
  _EPRAR,
  _EPRARI,
  _EPRARO,
  _ev,
  _GPRAS,
  _GPRASI,
  _GPRASO,
  _GPROS,
  _GPROSI,
  _GPROSO,
  _IRIE,
  _m,
  _o,
  _ov,
  _pRI,
  _rI,
  _RIRE,
  _RNCE,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Approval = struct(n0, _A, 0, [_uA, _aS], [0, 0]);
export var EvaluatePullRequestApprovalRulesInput = struct(n0, _EPRARI, 0, [_pRI, _rI], [0, 0]);
export var EvaluatePullRequestApprovalRulesOutput = struct(n0, _EPRARO, 0, [_ev], [() => Evaluation]);
export var Evaluation = struct(n0, _E, 0, [_ap, _o, _aRS, _aRNS], [2, 2, 64 | 0, 64 | 0]);
export var GetPullRequestApprovalStatesInput = struct(n0, _GPRASI, 0, [_pRI, _rI], [0, 0]);
export var GetPullRequestApprovalStatesOutput = struct(n0, _GPRASO, 0, [_app], [() => ApprovalList]);
export var GetPullRequestOverrideStateInput = struct(n0, _GPROSI, 0, [_pRI, _rI], [0, 0]);
export var GetPullRequestOverrideStateOutput = struct(n0, _GPROSO, 0, [_o, _ov], [2, 0]);
export var InvalidRevisionIdException = error(
  n0,
  _IRIE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidRevisionIdException
);
export var RevisionIdRequiredException = error(
  n0,
  _RIRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RevisionIdRequiredException
);
export var RevisionNotCurrentException = error(
  n0,
  _RNCE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RevisionNotCurrentException
);
export var ApprovalList = list(n0, _AL, 0, () => Approval);
export var ApprovalRulesNotSatisfiedList = 64 | 0;

export var ApprovalRulesSatisfiedList = 64 | 0;

export var EvaluatePullRequestApprovalRules = op(
  n0,
  _EPRAR,
  0,
  () => EvaluatePullRequestApprovalRulesInput,
  () => EvaluatePullRequestApprovalRulesOutput
);
export var GetPullRequestApprovalStates = op(
  n0,
  _GPRAS,
  0,
  () => GetPullRequestApprovalStatesInput,
  () => GetPullRequestApprovalStatesOutput
);
export var GetPullRequestOverrideState = op(
  n0,
  _GPROS,
  0,
  () => GetPullRequestOverrideStateInput,
  () => GetPullRequestOverrideStateOutput
);

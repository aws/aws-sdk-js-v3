// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ApprovalRuleNameRequiredException as __ApprovalRuleNameRequiredException,
  ApprovalStateRequiredException as __ApprovalStateRequiredException,
  CannotDeleteApprovalRuleFromTemplateException as __CannotDeleteApprovalRuleFromTemplateException,
  InvalidApprovalRuleNameException as __InvalidApprovalRuleNameException,
  InvalidApprovalStateException as __InvalidApprovalStateException,
  InvalidOverrideStatusException as __InvalidOverrideStatusException,
  MaximumNumberOfApprovalsExceededException as __MaximumNumberOfApprovalsExceededException,
  OverrideAlreadySetException as __OverrideAlreadySetException,
  OverrideStatusRequiredException as __OverrideStatusRequiredException,
  PullRequestAlreadyClosedException as __PullRequestAlreadyClosedException,
  PullRequestCannotBeApprovedByAuthorException as __PullRequestCannotBeApprovedByAuthorException,
} from "../models/index";
import {
  _aRI,
  _aRN,
  _ARNRE,
  _aS,
  _ASRE,
  _c,
  _CDARFTE,
  _DPRAR,
  _DPRARI,
  _DPRARO,
  _e,
  _IARNE,
  _IASE,
  _IOSE,
  _m,
  _MNOAEE,
  _OASE,
  _OPRAR,
  _OPRARI,
  _oS,
  _OSRE,
  _PRACE,
  _PRCBABAE,
  _pRI,
  _rI,
  _UPRAS,
  _UPRASI,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApprovalRuleNameRequiredException = error(
  n0,
  _ARNRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ApprovalRuleNameRequiredException
);
export var ApprovalStateRequiredException = error(
  n0,
  _ASRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ApprovalStateRequiredException
);
export var CannotDeleteApprovalRuleFromTemplateException = error(
  n0,
  _CDARFTE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CannotDeleteApprovalRuleFromTemplateException
);
export var DeletePullRequestApprovalRuleInput = struct(n0, _DPRARI, 0, [_pRI, _aRN], [0, 0]);
export var DeletePullRequestApprovalRuleOutput = struct(n0, _DPRARO, 0, [_aRI], [0]);
export var InvalidApprovalRuleNameException = error(
  n0,
  _IARNE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidApprovalRuleNameException
);
export var InvalidApprovalStateException = error(
  n0,
  _IASE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidApprovalStateException
);
export var InvalidOverrideStatusException = error(
  n0,
  _IOSE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidOverrideStatusException
);
export var MaximumNumberOfApprovalsExceededException = error(
  n0,
  _MNOAEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MaximumNumberOfApprovalsExceededException
);
export var OverrideAlreadySetException = error(
  n0,
  _OASE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __OverrideAlreadySetException
);
export var OverridePullRequestApprovalRulesInput = struct(n0, _OPRARI, 0, [_pRI, _rI, _oS], [0, 0, 0]);
export var OverrideStatusRequiredException = error(
  n0,
  _OSRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __OverrideStatusRequiredException
);
export var PullRequestAlreadyClosedException = error(
  n0,
  _PRACE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __PullRequestAlreadyClosedException
);
export var PullRequestCannotBeApprovedByAuthorException = error(
  n0,
  _PRCBABAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __PullRequestCannotBeApprovedByAuthorException
);
export var UpdatePullRequestApprovalStateInput = struct(n0, _UPRASI, 0, [_pRI, _rI, _aS], [0, 0, 0]);
export var DeletePullRequestApprovalRule = op(
  n0,
  _DPRAR,
  0,
  () => DeletePullRequestApprovalRuleInput,
  () => DeletePullRequestApprovalRuleOutput
);
export var OverridePullRequestApprovalRules = op(
  n0,
  _OPRAR,
  0,
  () => OverridePullRequestApprovalRulesInput,
  () => Unit
);
export var UpdatePullRequestApprovalState = op(
  n0,
  _UPRAS,
  0,
  () => UpdatePullRequestApprovalStateInput,
  () => Unit
);

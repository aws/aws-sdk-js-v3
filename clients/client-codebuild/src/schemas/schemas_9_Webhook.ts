// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { OAuthProviderException as __OAuthProviderException } from "../models/index";
import {
  _aR,
  _bF,
  _bT,
  _c,
  _CW,
  _CWI,
  _CWO,
  _do,
  _DW,
  _DWI,
  _DWO,
  _e,
  _eMP,
  _FG,
  _fG,
  _FGi,
  _lMS,
  _m,
  _mC,
  _na,
  _OAPE,
  _pat,
  _pN,
  _PRBP,
  _pRBP,
  _pU,
  _rCA,
  _rS,
  _SC,
  _sc,
  _sCco,
  _se,
  _sM,
  _st,
  _t,
  _ur,
  _UW,
  _UWI,
  _UWO,
  _W,
  _w,
  _WF,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateWebhookInput = struct(
  n0,
  _CWI,
  0,
  [_pN, _bF, _fG, _bT, _mC, _sCco, _pRBP],
  [0, 0, () => FilterGroups, 0, 2, () => ScopeConfiguration, () => PullRequestBuildPolicy]
);
export var CreateWebhookOutput = struct(n0, _CWO, 0, [_w], [() => Webhook]);
export var DeleteWebhookInput = struct(n0, _DWI, 0, [_pN], [0]);
export var DeleteWebhookOutput = struct(n0, _DWO, 0, [], []);
export var OAuthProviderException = error(
  n0,
  _OAPE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __OAuthProviderException
);
export var PullRequestBuildPolicy = struct(n0, _PRBP, 0, [_rCA, _aR], [0, 64 | 0]);
export var ScopeConfiguration = struct(n0, _SC, 0, [_na, _do, _sc], [0, 0, 0]);
export var UpdateWebhookInput = struct(
  n0,
  _UWI,
  0,
  [_pN, _bF, _rS, _fG, _bT, _pRBP],
  [0, 0, 2, () => FilterGroups, 0, () => PullRequestBuildPolicy]
);
export var UpdateWebhookOutput = struct(n0, _UWO, 0, [_w], [() => Webhook]);
export var Webhook = struct(
  n0,
  _W,
  0,
  [_ur, _pU, _se, _bF, _fG, _bT, _mC, _lMS, _sCco, _st, _sM, _pRBP],
  [0, 0, 0, 0, () => FilterGroups, 0, 2, 4, () => ScopeConfiguration, 0, 0, () => PullRequestBuildPolicy]
);
export var WebhookFilter = struct(n0, _WF, 0, [_t, _pat, _eMP], [0, 0, 2]);
export var FilterGroup = list(n0, _FGi, 0, () => WebhookFilter);
export var FilterGroups = list(n0, _FG, 0, () => FilterGroup);
export var PullRequestBuildApproverRoles = 64 | 0;

export var CreateWebhook = op(
  n0,
  _CW,
  0,
  () => CreateWebhookInput,
  () => CreateWebhookOutput
);
export var DeleteWebhook = op(
  n0,
  _DW,
  0,
  () => DeleteWebhookInput,
  () => DeleteWebhookOutput
);
export var UpdateWebhook = op(
  n0,
  _UW,
  0,
  () => UpdateWebhookInput,
  () => UpdateWebhookOutput
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cAr,
  _DTRel,
  _DTRi,
  _DTRR,
  _DTRRi,
  _ETR,
  _ETRR,
  _h,
  _hQ,
  _LTRis,
  _LTRR,
  _LTRRi,
  _mR,
  _nT,
  _rAu,
  _rD,
  _rN,
  _rul,
  _to,
  _tPo,
  _TRL,
  _TRLI,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTopicRuleRequest = struct(n0, _DTRR, 0, [_rN], [[0, 1]]);
export var DisableTopicRuleRequest = struct(n0, _DTRRi, 0, [_rN], [[0, 1]]);
export var EnableTopicRuleRequest = struct(n0, _ETRR, 0, [_rN], [[0, 1]]);
export var ListTopicRulesRequest = struct(
  n0,
  _LTRR,
  0,
  [_to, _mR, _nT, _rD],
  [
    [
      0,
      {
        [_hQ]: _to,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      2,
      {
        [_hQ]: _rD,
      },
    ],
  ]
);
export var ListTopicRulesResponse = struct(n0, _LTRRi, 0, [_rul, _nT], [() => TopicRuleList, 0]);
export var TopicRuleListItem = struct(n0, _TRLI, 0, [_rAu, _rN, _tPo, _cAr, _rD], [0, 0, 0, 4, 2]);
export var TopicRuleList = list(n0, _TRL, 0, () => TopicRuleListItem);
export var DeleteTopicRule = op(
  n0,
  _DTRel,
  {
    [_h]: ["DELETE", "/rules/{ruleName}", 200],
  },
  () => DeleteTopicRuleRequest,
  () => Unit
);
export var DisableTopicRule = op(
  n0,
  _DTRi,
  {
    [_h]: ["POST", "/rules/{ruleName}/disable", 200],
  },
  () => DisableTopicRuleRequest,
  () => Unit
);
export var EnableTopicRule = op(
  n0,
  _ETR,
  {
    [_h]: ["POST", "/rules/{ruleName}/enable", 200],
  },
  () => EnableTopicRuleRequest,
  () => Unit
);
export var ListTopicRules = op(
  n0,
  _LTRis,
  {
    [_h]: ["GET", "/rules", 200],
  },
  () => ListTopicRulesRequest,
  () => ListTopicRulesResponse
);

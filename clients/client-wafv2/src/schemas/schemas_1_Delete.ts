// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  WAFAssociatedItemException as __WAFAssociatedItemException,
  WAFTagOperationException as __WAFTagOperationException,
  WAFTagOperationInternalErrorException as __WAFTagOperationInternalErrorException,
} from "../models/index";
import {
  _Ad,
  _c,
  _CIPS,
  _CIPSR,
  _CIPSRr,
  _D,
  _DIPS,
  _DIPSR,
  _DIPSRe,
  _DRG,
  _DRGR,
  _DRGRe,
  _DRPS,
  _DRPSR,
  _DRPSRe,
  _DWACL,
  _DWACLR,
  _DWACLRe,
  _e,
  _Id,
  _IPAV,
  _LT,
  _Me,
  _N,
  _RARN,
  _s,
  _Sc,
  _Su,
  _T,
  _TK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _WAFAIE,
  _WAFTOE,
  _WAFTOIEE,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_22_Create";
import { IPSetSummary } from "./schemas_25_IPSet";

/* eslint no-var: 0 */

export var CreateIPSetRequest = struct(
  n0,
  _CIPSR,
  0,
  [_N, _Sc, _D, _IPAV, _Ad, _T],
  [0, 0, 0, 0, 64 | 0, () => TagList]
);
export var CreateIPSetResponse = struct(n0, _CIPSRr, 0, [_Su], [() => IPSetSummary]);
export var DeleteIPSetRequest = struct(n0, _DIPSR, 0, [_N, _Sc, _Id, _LT], [0, 0, 0, 0]);
export var DeleteIPSetResponse = struct(n0, _DIPSRe, 0, [], []);
export var DeleteRegexPatternSetRequest = struct(n0, _DRPSR, 0, [_N, _Sc, _Id, _LT], [0, 0, 0, 0]);
export var DeleteRegexPatternSetResponse = struct(n0, _DRPSRe, 0, [], []);
export var DeleteRuleGroupRequest = struct(n0, _DRGR, 0, [_N, _Sc, _Id, _LT], [0, 0, 0, 0]);
export var DeleteRuleGroupResponse = struct(n0, _DRGRe, 0, [], []);
export var DeleteWebACLRequest = struct(n0, _DWACLR, 0, [_N, _Sc, _Id, _LT], [0, 0, 0, 0]);
export var DeleteWebACLResponse = struct(n0, _DWACLRe, 0, [], []);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _T], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var WAFAssociatedItemException = error(
  n0,
  _WAFAIE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __WAFAssociatedItemException
);
export var WAFTagOperationException = error(
  n0,
  _WAFTOE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __WAFTagOperationException
);
export var WAFTagOperationInternalErrorException = error(
  n0,
  _WAFTOIEE,
  {
    [_e]: _s,
  },
  [_Me],
  [0],

  __WAFTagOperationInternalErrorException
);
export var TagKeyList = 64 | 0;

export var CreateIPSet = op(
  n0,
  _CIPS,
  0,
  () => CreateIPSetRequest,
  () => CreateIPSetResponse
);
export var DeleteIPSet = op(
  n0,
  _DIPS,
  0,
  () => DeleteIPSetRequest,
  () => DeleteIPSetResponse
);
export var DeleteRegexPatternSet = op(
  n0,
  _DRPS,
  0,
  () => DeleteRegexPatternSetRequest,
  () => DeleteRegexPatternSetResponse
);
export var DeleteRuleGroup = op(
  n0,
  _DRG,
  0,
  () => DeleteRuleGroupRequest,
  () => DeleteRuleGroupResponse
);
export var DeleteWebACL = op(
  n0,
  _DWACL,
  0,
  () => DeleteWebACLRequest,
  () => DeleteWebACLResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);

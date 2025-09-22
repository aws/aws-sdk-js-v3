// smithy-typescript generated code
import { list, struct, struct as uni } from "@smithy/core/schema";

import { _f, _FA, _FRA, _fRi, _RAu, _sCt, _tG, _tGI, _w, _WTG, _WTGL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var FixedResponseAction = struct(n0, _FRA, 0, [_sCt], [1]);
export var ForwardAction = struct(n0, _FA, 0, [_tG], [() => WeightedTargetGroupList]);
export var WeightedTargetGroup = struct(n0, _WTG, 0, [_tGI, _w], [0, 1]);
export var WeightedTargetGroupList = list(n0, _WTGL, 0, () => WeightedTargetGroup);
export var RuleAction = uni(n0, _RAu, 0, [_f, _fRi], [() => ForwardAction, () => FixedResponseAction]);

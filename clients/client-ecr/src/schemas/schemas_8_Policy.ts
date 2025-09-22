// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  LifecyclePolicyNotFoundException as __LifecyclePolicyNotFoundException,
  LifecyclePolicyPreviewInProgressException as __LifecyclePolicyPreviewInProgressException,
} from "../models/index";
import {
  _c,
  _DLP,
  _DLPR,
  _DLPRe,
  _e,
  _GLP,
  _GLPR,
  _GLPRe,
  _lEA,
  _LPNFE,
  _LPPIPE,
  _lPT,
  _me,
  _PLP,
  _PLPR,
  _PLPRu,
  _rI,
  _rN,
  _SLPP,
  _SLPPR,
  _SLPPRt,
  _st,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLifecyclePolicyRequest = struct(n0, _DLPR, 0, [_rI, _rN], [0, 0]);
export var DeleteLifecyclePolicyResponse = struct(n0, _DLPRe, 0, [_rI, _rN, _lPT, _lEA], [0, 0, 0, 4]);
export var GetLifecyclePolicyRequest = struct(n0, _GLPR, 0, [_rI, _rN], [0, 0]);
export var GetLifecyclePolicyResponse = struct(n0, _GLPRe, 0, [_rI, _rN, _lPT, _lEA], [0, 0, 0, 4]);
export var LifecyclePolicyNotFoundException = error(
  n0,
  _LPNFE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __LifecyclePolicyNotFoundException
);
export var LifecyclePolicyPreviewInProgressException = error(
  n0,
  _LPPIPE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __LifecyclePolicyPreviewInProgressException
);
export var PutLifecyclePolicyRequest = struct(n0, _PLPR, 0, [_rI, _rN, _lPT], [0, 0, 0]);
export var PutLifecyclePolicyResponse = struct(n0, _PLPRu, 0, [_rI, _rN, _lPT], [0, 0, 0]);
export var StartLifecyclePolicyPreviewRequest = struct(n0, _SLPPR, 0, [_rI, _rN, _lPT], [0, 0, 0]);
export var StartLifecyclePolicyPreviewResponse = struct(n0, _SLPPRt, 0, [_rI, _rN, _lPT, _st], [0, 0, 0, 0]);
export var DeleteLifecyclePolicy = op(
  n0,
  _DLP,
  0,
  () => DeleteLifecyclePolicyRequest,
  () => DeleteLifecyclePolicyResponse
);
export var GetLifecyclePolicy = op(
  n0,
  _GLP,
  0,
  () => GetLifecyclePolicyRequest,
  () => GetLifecyclePolicyResponse
);
export var PutLifecyclePolicy = op(
  n0,
  _PLP,
  0,
  () => PutLifecyclePolicyRequest,
  () => PutLifecyclePolicyResponse
);
export var StartLifecyclePolicyPreview = op(
  n0,
  _SLPP,
  0,
  () => StartLifecyclePolicyPreviewRequest,
  () => StartLifecyclePolicyPreviewResponse
);

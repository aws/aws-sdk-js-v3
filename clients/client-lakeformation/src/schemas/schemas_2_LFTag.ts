// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ALFTTR,
  _ALFTTRR,
  _ALFTTRRd,
  _CI,
  _CLFTE,
  _CLFTER,
  _CLFTERr,
  _D,
  _EC,
  _ED,
  _EM,
  _Er,
  _Ex,
  _F,
  _GLFTE,
  _GLFTER,
  _GLFTERe,
  _h,
  _LFT,
  _LFTa,
  _LFTE,
  _LFTEagr,
  _N,
  _R,
  _RLFTFR,
  _RLFTFRR,
  _RLFTFRRe,
  _ULFTE,
  _ULFTER,
  _ULFTERp,
  Expression,
  n0,
} from "./schemas_0";
import { LFTagPair, LFTagsList } from "./schemas_13_LFTags";
import { Resource } from "./schemas_14_Permissions";

/* eslint no-var: 0 */

export var AddLFTagsToResourceRequest = struct(n0, _ALFTTRR, 0, [_CI, _R, _LFT], [0, () => Resource, () => LFTagsList]);
export var AddLFTagsToResourceResponse = struct(n0, _ALFTTRRd, 0, [_F], [() => LFTagErrors]);
export var CreateLFTagExpressionRequest = struct(n0, _CLFTER, 0, [_N, _D, _CI, _Ex], [0, 0, 0, () => Expression]);
export var CreateLFTagExpressionResponse = struct(n0, _CLFTERr, 0, [], []);
export var ErrorDetail = struct(n0, _ED, 0, [_EC, _EM], [0, 0]);
export var GetLFTagExpressionRequest = struct(n0, _GLFTER, 0, [_N, _CI], [0, 0]);
export var GetLFTagExpressionResponse = struct(n0, _GLFTERe, 0, [_N, _D, _CI, _Ex], [0, 0, 0, () => Expression]);
export var LFTagError = struct(n0, _LFTE, 0, [_LFTa, _Er], [() => LFTagPair, () => ErrorDetail]);
export var RemoveLFTagsFromResourceRequest = struct(
  n0,
  _RLFTFRR,
  0,
  [_CI, _R, _LFT],
  [0, () => Resource, () => LFTagsList]
);
export var RemoveLFTagsFromResourceResponse = struct(n0, _RLFTFRRe, 0, [_F], [() => LFTagErrors]);
export var UpdateLFTagExpressionRequest = struct(n0, _ULFTER, 0, [_N, _D, _CI, _Ex], [0, 0, 0, () => Expression]);
export var UpdateLFTagExpressionResponse = struct(n0, _ULFTERp, 0, [], []);
export var LFTagErrors = list(n0, _LFTEagr, 0, () => LFTagError);
export var AddLFTagsToResource = op(
  n0,
  _ALFTTR,
  {
    [_h]: ["POST", "/AddLFTagsToResource", 200],
  },
  () => AddLFTagsToResourceRequest,
  () => AddLFTagsToResourceResponse
);
export var CreateLFTagExpression = op(
  n0,
  _CLFTE,
  {
    [_h]: ["POST", "/CreateLFTagExpression", 200],
  },
  () => CreateLFTagExpressionRequest,
  () => CreateLFTagExpressionResponse
);
export var GetLFTagExpression = op(
  n0,
  _GLFTE,
  {
    [_h]: ["POST", "/GetLFTagExpression", 200],
  },
  () => GetLFTagExpressionRequest,
  () => GetLFTagExpressionResponse
);
export var RemoveLFTagsFromResource = op(
  n0,
  _RLFTFR,
  {
    [_h]: ["POST", "/RemoveLFTagsFromResource", 200],
  },
  () => RemoveLFTagsFromResourceRequest,
  () => RemoveLFTagsFromResourceResponse
);
export var UpdateLFTagExpression = op(
  n0,
  _ULFTE,
  {
    [_h]: ["POST", "/UpdateLFTagExpression", 200],
  },
  () => UpdateLFTagExpressionRequest,
  () => UpdateLFTagExpressionResponse
);

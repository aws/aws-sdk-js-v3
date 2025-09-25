// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aNt, _at, _aV, _cl, _LA, _LAR, _LARi, _mRa, _nT, _tT, n0 } from "./schemas_0";
import { Attributes } from "./schemas_26_Container";

/* eslint no-var: 0 */

export var ListAttributesRequest = struct(n0, _LAR, 0, [_cl, _tT, _aNt, _aV, _nT, _mRa], [0, 0, 0, 0, 0, 1]);
export var ListAttributesResponse = struct(n0, _LARi, 0, [_at, _nT], [() => Attributes, 0]);
export var ListAttributes = op(
  n0,
  _LA,
  0,
  () => ListAttributesRequest,
  () => ListAttributesResponse
);

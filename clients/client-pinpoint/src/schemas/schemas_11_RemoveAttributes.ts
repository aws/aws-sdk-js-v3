// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _ARt, _AT, _At, _Bl, _h, _RAem, _RAR, _RARe, _UAR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AttributesResource = struct(n0, _ARt, 0, [_AI, _AT, _At], [0, 0, 64 | 0]);
export var RemoveAttributesRequest = struct(
  n0,
  _RAR,
  0,
  [_AI, _AT, _UAR],
  [
    [0, 1],
    [0, 1],
    [() => UpdateAttributesRequest, 16],
  ]
);
export var RemoveAttributesResponse = struct(n0, _RARe, 0, [_ARt], [[() => AttributesResource, 16]]);
export var UpdateAttributesRequest = struct(n0, _UAR, 0, [_Bl], [64 | 0]);
export var RemoveAttributes = op(
  n0,
  _RAem,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/attributes/{AttributeType}", 200],
  },
  () => RemoveAttributesRequest,
  () => RemoveAttributesResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AVA, _DAV, _DAVR, _DAVRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAggregatorV2Request = struct(n0, _DAVR, 0, [_AVA], [[0, 1]]);
export var DeleteAggregatorV2Response = struct(n0, _DAVRe, 0, [], []);
export var DeleteAggregatorV2 = op(
  n0,
  _DAV,
  {
    [_h]: ["DELETE", "/aggregatorv2/delete/{AggregatorV2Arn+}", 200],
  },
  () => DeleteAggregatorV2Request,
  () => DeleteAggregatorV2Response
);

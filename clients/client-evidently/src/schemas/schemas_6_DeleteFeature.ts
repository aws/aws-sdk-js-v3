// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DF, _DFR, _DFRe, _f, _h, _p, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFeatureRequest = struct(
  n0,
  _DFR,
  0,
  [_p, _f],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteFeatureResponse = struct(n0, _DFRe, 0, [], []);
export var DeleteFeature = op(
  n0,
  _DF,
  {
    [_h]: ["DELETE", "/projects/{project}/features/{feature}", 200],
  },
  () => DeleteFeatureRequest,
  () => DeleteFeatureResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVS, _DVSR, _DVSRe, _h, _SLN, _VSN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVodSourceRequest = struct(
  n0,
  _DVSR,
  0,
  [_SLN, _VSN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteVodSourceResponse = struct(n0, _DVSRe, 0, [], []);
export var DeleteVodSource = op(
  n0,
  _DVS,
  {
    [_h]: ["DELETE", "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}", 200],
  },
  () => DeleteVodSourceRequest,
  () => DeleteVodSourceResponse
);

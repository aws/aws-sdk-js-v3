// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIr, _aU, _GAU, _GAUR, _GAURe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetArtifactUrlRequest = struct(n0, _GAUR, 0, [_aIr], [[0, 1]]);
export var GetArtifactUrlResult = struct(n0, _GAURe, 0, [_aIr, _aU], [0, 0]);
export var GetArtifactUrl = op(
  n0,
  _GAU,
  {
    [_h]: ["GET", "/artifacts/{artifactId}", 200],
  },
  () => GetArtifactUrlRequest,
  () => GetArtifactUrlResult
);

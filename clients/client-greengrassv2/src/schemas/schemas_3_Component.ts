// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _aN, _GCVA, _GCVAR, _GCVARe, _h, _hH, _hQ, _iET, _pSU, _sET, _xaiet, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetComponentVersionArtifactRequest = struct(
  n0,
  _GCVAR,
  0,
  [_a, _aN, _sET, _iET],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _sET,
      },
    ],
    [
      0,
      {
        [_hH]: _xaiet,
      },
    ],
  ]
);
export var GetComponentVersionArtifactResponse = struct(n0, _GCVARe, 0, [_pSU], [0]);
export var GetComponentVersionArtifact = op(
  n0,
  _GCVA,
  {
    [_h]: ["GET", "/greengrass/v2/components/{arn}/artifacts/{artifactName+}", 200],
  },
  () => GetComponentVersionArtifactRequest,
  () => GetComponentVersionArtifactResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _eQN, _HE, _HPRHL, _HT, _IMT, _MIMD, _MIMDR, _MIMDRo, _R, _r, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyInstanceMetadataDefaultsRequest = struct(
  n0,
  _MIMDR,
  0,
  [_HT, _HPRHL, _HE, _IMT, _DR],
  [0, 1, 0, 0, 2]
);
export var ModifyInstanceMetadataDefaultsResult = struct(
  n0,
  _MIMDRo,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var ModifyInstanceMetadataDefaults = op(
  n0,
  _MIMD,
  0,
  () => ModifyInstanceMetadataDefaultsRequest,
  () => ModifyInstanceMetadataDefaultsResult
);

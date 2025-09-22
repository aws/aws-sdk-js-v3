// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bP, _DBPM, _DBPMR, _dN, _dNI, _hQ, _ht, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBasePathMappingRequest = struct(
  n0,
  _DBPMR,
  0,
  [_dN, _dNI, _bP],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dNI,
      },
    ],
    [0, 1],
  ]
);
export var DeleteBasePathMapping = op(
  n0,
  _DBPM,
  {
    [_ht]: ["DELETE", "/domainnames/{domainName}/basepathmappings/{basePath}", 202],
  },
  () => DeleteBasePathMappingRequest,
  () => Unit
);

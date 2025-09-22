// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _eQN, _ETGR, _ETGRR, _ETGRRx, _Fi, _Fil, _SB, _sL, _SLo, _TGRTI, _xN, FilterList, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExportTransitGatewayRoutesRequest = struct(
  n0,
  _ETGRR,
  0,
  [_TGRTI, _Fi, _SB, _DR],
  [
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    0,
    2,
  ]
);
export var ExportTransitGatewayRoutesResult = struct(
  n0,
  _ETGRRx,
  0,
  [_SLo],
  [
    [
      0,
      {
        [_eQN]: `S3Location`,
        [_xN]: _sL,
      },
    ],
  ]
);
export var ExportTransitGatewayRoutes = op(
  n0,
  _ETGR,
  0,
  () => ExportTransitGatewayRoutesRequest,
  () => ExportTransitGatewayRoutesResult
);

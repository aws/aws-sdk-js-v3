// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CSIR,
  _CSIRa,
  _CSIRan,
  _CSIRL,
  _CSIRR,
  _CSIRRa,
  _DR,
  _dR,
  _eQN,
  _it,
  _SIRI,
  _sIRI,
  _SIRIL,
  _SIRIp,
  _sIRS,
  _St,
  _st,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelledSpotInstanceRequest = struct(
  n0,
  _CSIR,
  0,
  [_SIRI, _St],
  [
    [
      0,
      {
        [_eQN]: `SpotInstanceRequestId`,
        [_xN]: _sIRI,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var CancelSpotInstanceRequestsRequest = struct(
  n0,
  _CSIRR,
  0,
  [_DR, _SIRIp],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => SpotInstanceRequestIdList,
      {
        [_xN]: _SIRI,
      },
    ],
  ]
);
export var CancelSpotInstanceRequestsResult = struct(
  n0,
  _CSIRRa,
  0,
  [_CSIRa],
  [
    [
      () => CancelledSpotInstanceRequestList,
      {
        [_eQN]: `SpotInstanceRequestSet`,
        [_xN]: _sIRS,
      },
    ],
  ]
);
export var CancelledSpotInstanceRequestList = list(n0, _CSIRL, 0, [
  () => CancelledSpotInstanceRequest,
  {
    [_xN]: _it,
  },
]);
export var SpotInstanceRequestIdList = list(n0, _SIRIL, 0, [
  0,
  {
    [_xN]: _SIRI,
  },
]);
export var CancelSpotInstanceRequests = op(
  n0,
  _CSIRan,
  0,
  () => CancelSpotInstanceRequestsRequest,
  () => CancelSpotInstanceRequestsResult
);

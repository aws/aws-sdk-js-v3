// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _cB,
  _end,
  _fI,
  _fIl,
  _GQFA,
  _GQFAR,
  _GQFARe,
  _h,
  _hQ,
  _LQFA,
  _LQFAR,
  _LQFARi,
  _mR,
  _nT,
  _qFA,
  _QFAS,
  _QFASu,
  _qI,
  _st,
  _uA,
  _uB,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetQueueFleetAssociationRequest = struct(
  n0,
  _GQFAR,
  0,
  [_fI, _qI, _fIl],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetQueueFleetAssociationResponse = struct(
  n0,
  _GQFARe,
  0,
  [_qI, _fIl, _st, _cA, _cB, _uA, _uB],
  [0, 0, 0, 5, 0, 5, 0]
);
export var ListQueueFleetAssociationsRequest = struct(
  n0,
  _LQFAR,
  0,
  [_fI, _qI, _fIl, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _qI,
      },
    ],
    [
      0,
      {
        [_hQ]: _fIl,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListQueueFleetAssociationsResponse = struct(
  n0,
  _LQFARi,
  0,
  [_qFA, _nT],
  [() => QueueFleetAssociationSummaries, 0]
);
export var QueueFleetAssociationSummary = struct(
  n0,
  _QFAS,
  0,
  [_qI, _fIl, _st, _cA, _cB, _uA, _uB],
  [0, 0, 0, 5, 0, 5, 0]
);
export var QueueFleetAssociationSummaries = list(n0, _QFASu, 0, () => QueueFleetAssociationSummary);
export var GetQueueFleetAssociation = op(
  n0,
  _GQFA,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}", 200],
  },
  () => GetQueueFleetAssociationRequest,
  () => GetQueueFleetAssociationResponse
);
export var ListQueueFleetAssociations = op(
  n0,
  _LQFA,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queue-fleet-associations", 200],
  },
  () => ListQueueFleetAssociationsRequest,
  () => ListQueueFleetAssociationsResponse
);

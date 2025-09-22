// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DQFA, _DQFAR, _DQFARe, _end, _fI, _fIl, _h, _qI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteQueueFleetAssociationRequest = struct(
  n0,
  _DQFAR,
  0,
  [_fI, _qI, _fIl],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteQueueFleetAssociationResponse = struct(n0, _DQFARe, 0, [], []);
export var DeleteQueueFleetAssociation = op(
  n0,
  _DQFA,
  {
    [_h]: ["DELETE", "/2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}", 200],
    [_end]: ["management."],
  },
  () => DeleteQueueFleetAssociationRequest,
  () => DeleteQueueFleetAssociationResponse
);

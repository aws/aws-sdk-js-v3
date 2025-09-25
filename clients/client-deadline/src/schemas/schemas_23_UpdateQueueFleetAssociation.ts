// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _end, _fI, _fIl, _h, _qI, _st, _UQFA, _UQFAR, _UQFARp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateQueueFleetAssociationRequest = struct(
  n0,
  _UQFAR,
  0,
  [_fI, _qI, _fIl, _st],
  [[0, 1], [0, 1], [0, 1], 0]
);
export var UpdateQueueFleetAssociationResponse = struct(n0, _UQFARp, 0, [], []);
export var UpdateQueueFleetAssociation = op(
  n0,
  _UQFA,
  {
    [_h]: ["PATCH", "/2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}", 200],
    [_end]: ["management."],
  },
  () => UpdateQueueFleetAssociationRequest,
  () => UpdateQueueFleetAssociationResponse
);

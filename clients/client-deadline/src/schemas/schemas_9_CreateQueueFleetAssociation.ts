// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CQFA, _CQFAR, _CQFARr, _end, _fI, _fIl, _h, _qI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateQueueFleetAssociationRequest = struct(n0, _CQFAR, 0, [_fI, _qI, _fIl], [[0, 1], 0, 0]);
export var CreateQueueFleetAssociationResponse = struct(n0, _CQFARr, 0, [], []);
export var CreateQueueFleetAssociation = op(
  n0,
  _CQFA,
  {
    [_h]: ["PUT", "/2023-10-12/farms/{farmId}/queue-fleet-associations", 200],
    [_end]: ["management."],
  },
  () => CreateQueueFleetAssociationRequest,
  () => CreateQueueFleetAssociationResponse
);

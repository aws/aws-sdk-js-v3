// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cIo, _DC, _DCI, _DCO, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCollaborationInput = struct(n0, _DCI, 0, [_cIo], [[0, 1]]);
export var DeleteCollaborationOutput = struct(n0, _DCO, 0, [], []);
export var DeleteCollaboration = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/collaborations/{collaborationIdentifier}", 204],
  },
  () => DeleteCollaborationInput,
  () => DeleteCollaborationOutput
);

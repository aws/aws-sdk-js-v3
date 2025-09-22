// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _cIo, _DM, _DMI, _DMO, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMemberInput = struct(
  n0,
  _DMI,
  0,
  [_cIo, _aI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteMemberOutput = struct(n0, _DMO, 0, [], []);
export var DeleteMember = op(
  n0,
  _DM,
  {
    [_h]: ["DELETE", "/collaborations/{collaborationIdentifier}/member/{accountId}", 204],
  },
  () => DeleteMemberInput,
  () => DeleteMemberOutput
);

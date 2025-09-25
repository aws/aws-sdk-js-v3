// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cIo, _d, _DCel, _DCRe, _DCRel, _dep, _dN, _h, _lUA, _sCt, _UCp, _UCRp, _UCRpd, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCommandRequest = struct(n0, _DCRe, 0, [_cIo], [[0, 1]]);
export var DeleteCommandResponse = struct(n0, _DCRel, 0, [_sCt], [[1, 32]]);
export var UpdateCommandRequest = struct(n0, _UCRp, 0, [_cIo, _dN, _d, _dep], [[0, 1], 0, 0, 2]);
export var UpdateCommandResponse = struct(n0, _UCRpd, 0, [_cIo, _dN, _d, _dep, _lUA], [0, 0, 0, 2, 4]);
export var DeleteCommand = op(
  n0,
  _DCel,
  {
    [_h]: ["DELETE", "/commands/{commandId}", 200],
  },
  () => DeleteCommandRequest,
  () => DeleteCommandResponse
);
export var UpdateCommand = op(
  n0,
  _UCp,
  {
    [_h]: ["PATCH", "/commands/{commandId}", 200],
  },
  () => UpdateCommandRequest,
  () => UpdateCommandResponse
);

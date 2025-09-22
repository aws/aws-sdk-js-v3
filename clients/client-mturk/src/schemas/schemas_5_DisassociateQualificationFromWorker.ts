// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DQFW, _DQFWR, _DQFWRi, _QTI, _R, _WI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateQualificationFromWorkerRequest = struct(n0, _DQFWR, 0, [_WI, _QTI, _R], [0, 0, 0]);
export var DisassociateQualificationFromWorkerResponse = struct(n0, _DQFWRi, 0, [], []);
export var DisassociateQualificationFromWorker = op(
  n0,
  _DQFW,
  0,
  () => DisassociateQualificationFromWorkerRequest,
  () => DisassociateQualificationFromWorkerResponse
);

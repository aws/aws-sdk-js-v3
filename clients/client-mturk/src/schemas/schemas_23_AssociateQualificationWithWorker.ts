// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AQWW, _AQWWR, _AQWWRs, _IV, _QTI, _SN, _WI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateQualificationWithWorkerRequest = struct(n0, _AQWWR, 0, [_QTI, _WI, _IV, _SN], [0, 0, 1, 2]);
export var AssociateQualificationWithWorkerResponse = struct(n0, _AQWWRs, 0, [], []);
export var AssociateQualificationWithWorker = op(
  n0,
  _AQWW,
  0,
  () => AssociateQualificationWithWorkerRequest,
  () => AssociateQualificationWithWorkerResponse
);

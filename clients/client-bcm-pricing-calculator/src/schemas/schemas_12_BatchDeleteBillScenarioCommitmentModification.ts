// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _BDBSCM, _BDBSCME, _BDBSCMEa, _BDBSCMR, _BDBSCMRa, _bSI, _eC, _eM, _er, _i, _id, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeleteBillScenarioCommitmentModificationError = struct(n0, _BDBSCME, 0, [_i, _eC, _eM], [0, 0, 0]);
export var BatchDeleteBillScenarioCommitmentModificationRequest = struct(n0, _BDBSCMR, 0, [_bSI, _id], [0, 64 | 0]);
export var BatchDeleteBillScenarioCommitmentModificationResponse = struct(
  n0,
  _BDBSCMRa,
  0,
  [_er],
  [() => BatchDeleteBillScenarioCommitmentModificationErrors]
);
export var BatchDeleteBillScenarioCommitmentModificationEntries = 64 | 0;

export var BatchDeleteBillScenarioCommitmentModificationErrors = list(
  n0,
  _BDBSCMEa,
  0,
  () => BatchDeleteBillScenarioCommitmentModificationError
);
export var BatchDeleteBillScenarioCommitmentModification = op(
  n0,
  _BDBSCM,
  2,
  () => BatchDeleteBillScenarioCommitmentModificationRequest,
  () => BatchDeleteBillScenarioCommitmentModificationResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ac, _aI, _CTMIJ, _CTMIJR, _ht, _IOC, _IRM, _IRMn, _mem, _mI, _tMIJA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelTrainedModelInferenceJobRequest = struct(
  n0,
  _CTMIJR,
  0,
  [_mI, _tMIJA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var InferenceOutputConfiguration = struct(n0, _IOC, 0, [_ac, _mem], [0, () => InferenceReceiverMembers]);
export var InferenceReceiverMember = struct(n0, _IRM, 0, [_aI], [0]);
export var InferenceReceiverMembers = list(n0, _IRMn, 0, () => InferenceReceiverMember);
export var CancelTrainedModelInferenceJob = op(
  n0,
  _CTMIJ,
  {
    [_ht]: [
      "PATCH",
      "/memberships/{membershipIdentifier}/trained-model-inference-jobs/{trainedModelInferenceJobArn}",
      200,
    ],
  },
  () => CancelTrainedModelInferenceJobRequest,
  () => Unit
);

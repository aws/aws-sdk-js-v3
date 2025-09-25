// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BDEJ,
  _BDEJE,
  _BDEJEa,
  _BDEJI,
  _BDEJIa,
  _BDEJR,
  _BDEJRa,
  _cod,
  _eJ,
  _EJIv,
  _er,
  _ht,
  _jI,
  _jIo,
  _jS,
  _m,
  n0,
} from "./schemas_0";
import { EvaluationJobIdentifier } from "./schemas_29_Evaluation";

/* eslint no-var: 0 */

export var BatchDeleteEvaluationJobError = struct(
  n0,
  _BDEJE,
  0,
  [_jI, _cod, _m],
  [[() => EvaluationJobIdentifier, 0], 0, 0]
);
export var BatchDeleteEvaluationJobItem = struct(n0, _BDEJI, 0, [_jI, _jS], [[() => EvaluationJobIdentifier, 0], 0]);
export var BatchDeleteEvaluationJobRequest = struct(n0, _BDEJR, 0, [_jIo], [[() => EvaluationJobIdentifiers, 0]]);
export var BatchDeleteEvaluationJobResponse = struct(
  n0,
  _BDEJRa,
  0,
  [_er, _eJ],
  [
    [() => BatchDeleteEvaluationJobErrors, 0],
    [() => BatchDeleteEvaluationJobItems, 0],
  ]
);
export var BatchDeleteEvaluationJobErrors = list(n0, _BDEJEa, 0, [() => BatchDeleteEvaluationJobError, 0]);
export var BatchDeleteEvaluationJobItems = list(n0, _BDEJIa, 0, [() => BatchDeleteEvaluationJobItem, 0]);
export var EvaluationJobIdentifiers = list(n0, _EJIv, 0, [() => EvaluationJobIdentifier, 0]);
export var BatchDeleteEvaluationJob = op(
  n0,
  _BDEJ,
  {
    [_ht]: ["POST", "/evaluation-jobs/batch-delete", 202],
  },
  () => BatchDeleteEvaluationJobRequest,
  () => BatchDeleteEvaluationJobResponse
);

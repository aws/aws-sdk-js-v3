// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BSJR,
  _BSJRE,
  _BSJREL,
  _BSJRR,
  _BSJRRa,
  _BSJRSS,
  _BSJRSSL,
  _E,
  _ED,
  _JN,
  _JRI,
  _JRIo,
  _SS,
  ErrorDetail,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchStopJobRunError = struct(n0, _BSJRE, 0, [_JN, _JRI, _ED], [0, 0, () => ErrorDetail]);
export var BatchStopJobRunRequest = struct(n0, _BSJRR, 0, [_JN, _JRIo], [0, 64 | 0]);
export var BatchStopJobRunResponse = struct(
  n0,
  _BSJRRa,
  0,
  [_SS, _E],
  [() => BatchStopJobRunSuccessfulSubmissionList, () => BatchStopJobRunErrorList]
);
export var BatchStopJobRunSuccessfulSubmission = struct(n0, _BSJRSS, 0, [_JN, _JRI], [0, 0]);
export var BatchStopJobRunErrorList = list(n0, _BSJREL, 0, () => BatchStopJobRunError);
export var BatchStopJobRunJobRunIdList = 64 | 0;

export var BatchStopJobRunSuccessfulSubmissionList = list(n0, _BSJRSSL, 0, () => BatchStopJobRunSuccessfulSubmission);
export var BatchStopJobRun = op(
  n0,
  _BSJR,
  0,
  () => BatchStopJobRunRequest,
  () => BatchStopJobRunResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DQT, _DQTR, _DQTRe, _QTI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteQualificationTypeRequest = struct(n0, _DQTR, 0, [_QTI], [0]);
export var DeleteQualificationTypeResponse = struct(n0, _DQTRe, 0, [], []);
export var DeleteQualificationType = op(
  n0,
  _DQT,
  2,
  () => DeleteQualificationTypeRequest,
  () => DeleteQualificationTypeResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _IMT, _IMTR, _IMTRm, _MTN, _PUS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ImportMigrationTaskRequest = struct(n0, _IMTR, 0, [_PUS, _MTN, _DR], [0, 0, 2]);
export var ImportMigrationTaskResult = struct(n0, _IMTRm, 0, [], []);
export var ImportMigrationTask = op(
  n0,
  _IMT,
  0,
  () => ImportMigrationTaskRequest,
  () => ImportMigrationTaskResult
);

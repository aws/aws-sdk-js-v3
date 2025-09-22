// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GARN, _RTA, _RTAI, _RTAO, _TARN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RetrieveTapeArchiveInput = struct(n0, _RTAI, 0, [_TARN, _GARN], [0, 0]);
export var RetrieveTapeArchiveOutput = struct(n0, _RTAO, 0, [_TARN], [0]);
export var RetrieveTapeArchive = op(
  n0,
  _RTA,
  0,
  () => RetrieveTapeArchiveInput,
  () => RetrieveTapeArchiveOutput
);

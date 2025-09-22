// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _At,
  _GJB,
  _GJBR,
  _GJBRe,
  _JB,
  _JBEo,
  _JN,
  _PRI,
  _RIu,
  _RJB,
  _RJBR,
  _RJBRe,
  _Run,
  _Ver,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetJobBookmarkRequest = struct(n0, _GJBR, 0, [_JN, _RIu], [0, 0]);
export var GetJobBookmarkResponse = struct(n0, _GJBRe, 0, [_JBEo], [() => JobBookmarkEntry]);
export var JobBookmarkEntry = struct(n0, _JBEo, 0, [_JN, _Ver, _Run, _At, _PRI, _RIu, _JB], [0, 1, 1, 1, 0, 0, 0]);
export var ResetJobBookmarkRequest = struct(n0, _RJBR, 0, [_JN, _RIu], [0, 0]);
export var ResetJobBookmarkResponse = struct(n0, _RJBRe, 0, [_JBEo], [() => JobBookmarkEntry]);
export var GetJobBookmark = op(
  n0,
  _GJB,
  0,
  () => GetJobBookmarkRequest,
  () => GetJobBookmarkResponse
);
export var ResetJobBookmark = op(
  n0,
  _RJB,
  0,
  () => ResetJobBookmarkRequest,
  () => ResetJobBookmarkResponse
);

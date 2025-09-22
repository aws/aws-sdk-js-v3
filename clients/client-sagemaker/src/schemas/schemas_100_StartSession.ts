// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _RIes, _SIe, _SSR, _SSRt, _SSta, _SUt, _TV, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartSessionRequest = struct(n0, _SSR, 0, [_RIes], [0]);
export var StartSessionResponse = struct(n0, _SSRt, 0, [_SIe, _SUt, _TV], [0, 0, 0]);
export var StartSession = op(
  n0,
  _SSta,
  0,
  () => StartSessionRequest,
  () => StartSessionResponse
);

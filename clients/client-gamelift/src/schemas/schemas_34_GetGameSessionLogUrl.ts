// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GGSLU, _GGSLUI, _GGSLUO, _GSIa, _PSU, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetGameSessionLogUrlInput = struct(n0, _GGSLUI, 0, [_GSIa], [0]);
export var GetGameSessionLogUrlOutput = struct(n0, _GGSLUO, 0, [_PSU], [0]);
export var GetGameSessionLogUrl = op(
  n0,
  _GGSLU,
  0,
  () => GetGameSessionLogUrlInput,
  () => GetGameSessionLogUrlOutput
);

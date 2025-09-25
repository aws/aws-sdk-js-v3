// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _bM,
  _bMe,
  _com,
  _cou,
  _CSou,
  _env,
  _eT,
  _fa,
  _GRS,
  _GRSI,
  _GRSO,
  _pi,
  _RCS,
  _se,
  _sIe,
  _sT,
  _to,
  _uTD,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CountsSummary = struct(
  n0,
  _CSou,
  0,
  [_com, _env, _eT, _sIe, _se, _sT, _pi],
  [
    () => ResourceCountsSummary,
    () => ResourceCountsSummary,
    () => ResourceCountsSummary,
    () => ResourceCountsSummary,
    () => ResourceCountsSummary,
    () => ResourceCountsSummary,
    () => ResourceCountsSummary,
  ]
);
export var GetResourcesSummaryInput = struct(n0, _GRSI, 0, [], []);
export var GetResourcesSummaryOutput = struct(n0, _GRSO, 0, [_cou], [() => CountsSummary]);
export var ResourceCountsSummary = struct(n0, _RCS, 0, [_to, _fa, _uTD, _bM, _bMe], [1, 1, 1, 1, 1]);
export var GetResourcesSummary = op(
  n0,
  _GRS,
  0,
  () => GetResourcesSummaryInput,
  () => GetResourcesSummaryOutput
);

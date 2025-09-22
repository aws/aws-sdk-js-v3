// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EERA, _GSS, _GSSO, _h, _SSe, _USS, _USSI, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Configuration";

/* eslint no-var: 0 */

export var GetServiceSettingsOutput = struct(n0, _GSSO, 0, [_SSe], [() => ServiceSettings]);
export var ServiceSettings = struct(n0, _SSe, 0, [_EERA], [0]);
export var UpdateServiceSettingsInput = struct(n0, _USSI, 0, [_EERA], [0]);
export var GetServiceSettings = op(
  n0,
  _GSS,
  {
    [_h]: ["GET", "/serviceSettings", 200],
  },
  () => Unit,
  () => GetServiceSettingsOutput
);
export var UpdateServiceSettings = op(
  n0,
  _USS,
  {
    [_h]: ["PUT", "/serviceSettings", 200],
  },
  () => UpdateServiceSettingsInput,
  () => Unit
);

// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  IncompatibleSettingsException as __IncompatibleSettingsException,
  UnsupportedSettingsException as __UnsupportedSettingsException,
} from "../models/index";
import { _c, _DI, _e, _ISE, _M, _Na, _RI, _Se, _Set, _US, _USE, _USR, _USRp, _Val, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var IncompatibleSettingsException = error(
  n0,
  _ISE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __IncompatibleSettingsException
);
export var Setting = struct(n0, _Se, 0, [_Na, _Val], [0, 0]);
export var UnsupportedSettingsException = error(
  n0,
  _USE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __UnsupportedSettingsException
);
export var UpdateSettingsRequest = struct(n0, _USR, 0, [_DI, _Set], [0, () => Settings]);
export var UpdateSettingsResult = struct(n0, _USRp, 0, [_DI], [0]);
export var Settings = list(n0, _Set, 0, () => Setting);
export var UpdateSettings = op(
  n0,
  _US,
  0,
  () => UpdateSettingsRequest,
  () => UpdateSettingsResult
);

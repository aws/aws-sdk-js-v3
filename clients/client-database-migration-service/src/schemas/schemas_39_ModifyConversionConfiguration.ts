// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CCo, _MCC, _MCCM, _MCCR, _MPI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyConversionConfigurationMessage = struct(n0, _MCCM, 0, [_MPI, _CCo], [0, 0]);
export var ModifyConversionConfigurationResponse = struct(n0, _MCCR, 0, [_MPI], [0]);
export var ModifyConversionConfiguration = op(
  n0,
  _MCC,
  0,
  () => ModifyConversionConfigurationMessage,
  () => ModifyConversionConfigurationResponse
);

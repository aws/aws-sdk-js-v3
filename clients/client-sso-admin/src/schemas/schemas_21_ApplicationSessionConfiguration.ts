// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAp, _GASC, _GASCR, _GASCRe, _PASC, _PASCR, _PASCRu, _UBSAS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetApplicationSessionConfigurationRequest = struct(n0, _GASCR, 0, [_AAp], [0]);
export var GetApplicationSessionConfigurationResponse = struct(n0, _GASCRe, 0, [_UBSAS], [0]);
export var PutApplicationSessionConfigurationRequest = struct(n0, _PASCR, 0, [_AAp, _UBSAS], [0, 0]);
export var PutApplicationSessionConfigurationResponse = struct(n0, _PASCRu, 0, [], []);
export var GetApplicationSessionConfiguration = op(
  n0,
  _GASC,
  0,
  () => GetApplicationSessionConfigurationRequest,
  () => GetApplicationSessionConfigurationResponse
);
export var PutApplicationSessionConfiguration = op(
  n0,
  _PASC,
  2,
  () => PutApplicationSessionConfigurationRequest,
  () => PutApplicationSessionConfigurationResponse
);

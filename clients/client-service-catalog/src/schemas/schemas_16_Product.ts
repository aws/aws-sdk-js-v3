// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _APl,
  _AV,
  _CDon,
  _D,
  _DVe,
  _INE,
  _K,
  _ML,
  _MLi,
  _MV,
  _MVi,
  _PAP,
  _PAPro,
  _PC,
  _PK,
  _PTar,
  _UPP,
  _UPPpd,
  _UPV,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ParameterConstraints = struct(
  n0,
  _PC,
  0,
  [_AV, _APl, _CDon, _ML, _MLi, _MV, _MVi],
  [64 | 0, 0, 0, 0, 0, 0, 0]
);
export var ProvisioningArtifactParameter = struct(
  n0,
  _PAPro,
  0,
  [_PK, _DVe, _PTar, _INE, _D, _PC],
  [0, 0, 0, 2, 0, () => ParameterConstraints]
);
export var UpdateProvisioningParameter = struct(n0, _UPP, 0, [_K, _V, _UPV], [0, 0, 2]);
export var AllowedValues = 64 | 0;

export var NotificationArns = 64 | 0;

export var ProvisioningArtifactParameters = list(n0, _PAP, 0, () => ProvisioningArtifactParameter);
export var UpdateProvisioningParameters = list(n0, _UPPpd, 0, () => UpdateProvisioningParameter);

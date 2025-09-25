// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Comp,
  _CSI,
  _CSre,
  _CSRr,
  _D,
  _DF,
  _DR,
  _DRI,
  _DRR,
  _LSV,
  _NSV,
  _RAeg,
  _RIe,
  _RN,
  _SAc,
  _SCc,
  _SD,
  _SN,
  _SSc,
  _St,
  _SVI,
  _SVS,
  _Tag,
  _URI,
  _URp,
  _URRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSchemaInput = struct(
  n0,
  _CSI,
  0,
  [_RIe, _SN, _DF, _Comp, _D, _Tag, _SD],
  [() => RegistryId, 0, 0, 0, 0, 128 | 0, 0]
);
export var CreateSchemaResponse = struct(
  n0,
  _CSRr,
  0,
  [_RN, _RAeg, _SN, _SAc, _D, _DF, _Comp, _SCc, _LSV, _NSV, _SSc, _Tag, _SVI, _SVS],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 128 | 0, 0, 0]
);
export var DeleteRegistryInput = struct(n0, _DRI, 0, [_RIe], [() => RegistryId]);
export var DeleteRegistryResponse = struct(n0, _DRR, 0, [_RN, _RAeg, _St], [0, 0, 0]);
export var RegistryId = struct(n0, _RIe, 0, [_RN, _RAeg], [0, 0]);
export var UpdateRegistryInput = struct(n0, _URI, 0, [_RIe, _D], [() => RegistryId, 0]);
export var UpdateRegistryResponse = struct(n0, _URRp, 0, [_RN, _RAeg], [0, 0]);
export var CreateSchema = op(
  n0,
  _CSre,
  0,
  () => CreateSchemaInput,
  () => CreateSchemaResponse
);
export var DeleteRegistry = op(
  n0,
  _DR,
  0,
  () => DeleteRegistryInput,
  () => DeleteRegistryResponse
);
export var UpdateRegistry = op(
  n0,
  _URp,
  0,
  () => UpdateRegistryInput,
  () => UpdateRegistryResponse
);

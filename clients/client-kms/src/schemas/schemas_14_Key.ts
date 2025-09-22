// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ExpiredImportTokenException as __ExpiredImportTokenException,
  IncorrectKeyMaterialException as __IncorrectKeyMaterialException,
  InvalidImportTokenException as __InvalidImportTokenException,
} from "../models/index";
import {
  _aQE,
  _c,
  _e,
  _EITE,
  _EKM,
  _EM,
  _hE,
  _IITE,
  _IKME,
  _IKMm,
  _IKMR,
  _IKMRm,
  _IT,
  _ITm,
  _KI,
  _KMD,
  _KMI,
  _m,
  _VT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ExpiredImportTokenException = error(
  n0,
  _EITE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ExpiredImportTokenException`, 400],
  },
  [_m],
  [0],

  __ExpiredImportTokenException
);
export var ImportKeyMaterialRequest = struct(
  n0,
  _IKMR,
  0,
  [_KI, _IT, _EKM, _VT, _EM, _ITm, _KMD, _KMI],
  [0, 21, 21, 4, 0, 0, 0, 0]
);
export var ImportKeyMaterialResponse = struct(n0, _IKMRm, 0, [_KI, _KMI], [0, 0]);
export var IncorrectKeyMaterialException = error(
  n0,
  _IKME,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`IncorrectKeyMaterialException`, 400],
  },
  [_m],
  [0],

  __IncorrectKeyMaterialException
);
export var InvalidImportTokenException = error(
  n0,
  _IITE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidImportTokenException`, 400],
  },
  [_m],
  [0],

  __InvalidImportTokenException
);
export var ImportKeyMaterial = op(
  n0,
  _IKMm,
  0,
  () => ImportKeyMaterialRequest,
  () => ImportKeyMaterialResponse
);

// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { RepositoryCatalogDataNotFoundException as __RepositoryCatalogDataNotFoundException } from "../models/index";
import {
  _ar,
  _aTb,
  _c,
  _cD,
  _d,
  _e,
  _GRCDe,
  _GRCDRet,
  _GRCDRete,
  _lIB,
  _lU,
  _m,
  _mC,
  _oS,
  _PRCDRut,
  _PRCDRute,
  _PRCDu,
  _RCDe,
  _RCDI,
  _RCDNFE,
  _rI,
  _rN,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetRepositoryCatalogDataRequest = struct(n0, _GRCDRet, 0, [_rI, _rN], [0, 0]);
export var GetRepositoryCatalogDataResponse = struct(n0, _GRCDRete, 0, [_cD], [() => RepositoryCatalogData]);
export var PutRepositoryCatalogDataRequest = struct(
  n0,
  _PRCDRut,
  0,
  [_rI, _rN, _cD],
  [0, 0, () => RepositoryCatalogDataInput]
);
export var PutRepositoryCatalogDataResponse = struct(n0, _PRCDRute, 0, [_cD], [() => RepositoryCatalogData]);
export var RepositoryCatalogData = struct(
  n0,
  _RCDe,
  0,
  [_d, _ar, _oS, _lU, _aTb, _uT, _mC],
  [0, 64 | 0, 64 | 0, 0, 0, 0, 2]
);
export var RepositoryCatalogDataInput = struct(
  n0,
  _RCDI,
  0,
  [_d, _ar, _oS, _lIB, _aTb, _uT],
  [0, 64 | 0, 64 | 0, 21, 0, 0]
);
export var RepositoryCatalogDataNotFoundException = error(
  n0,
  _RCDNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RepositoryCatalogDataNotFoundException
);
export var ArchitectureList = 64 | 0;

export var OperatingSystemList = 64 | 0;

export var GetRepositoryCatalogData = op(
  n0,
  _GRCDe,
  0,
  () => GetRepositoryCatalogDataRequest,
  () => GetRepositoryCatalogDataResponse
);
export var PutRepositoryCatalogData = op(
  n0,
  _PRCDu,
  0,
  () => PutRepositoryCatalogDataRequest,
  () => PutRepositoryCatalogDataResponse
);

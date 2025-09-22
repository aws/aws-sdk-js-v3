// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _a,
  _c,
  _CSFP,
  _CSFPI,
  _CSFPO,
  _CSNP,
  _CSNPI,
  _CSNPO,
  _e,
  _h,
  _hE,
  _i,
  _m,
  _nOS,
  _nOSs,
  _nUS,
  _oS,
  _oSp,
  _SQEE,
  _t,
  _uS,
  n0,
  TagMap,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSolFunctionPackageInput = struct(n0, _CSFPI, 0, [_t], [[() => TagMap, 0]]);
export var CreateSolFunctionPackageOutput = struct(
  n0,
  _CSFPO,
  0,
  [_i, _a, _oS, _oSp, _uS, _t],
  [0, 0, 0, 0, 0, [() => TagMap, 0]]
);
export var CreateSolNetworkPackageInput = struct(n0, _CSNPI, 0, [_t], [[() => TagMap, 0]]);
export var CreateSolNetworkPackageOutput = struct(
  n0,
  _CSNPO,
  0,
  [_i, _a, _nOS, _nOSs, _nUS, _t],
  [0, 0, 0, 0, 0, [() => TagMap, 0]]
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var CreateSolFunctionPackage = op(
  n0,
  _CSFP,
  {
    [_h]: ["POST", "/sol/vnfpkgm/v1/vnf_packages", 201],
  },
  () => CreateSolFunctionPackageInput,
  () => CreateSolFunctionPackageOutput
);
export var CreateSolNetworkPackage = op(
  n0,
  _CSNP,
  {
    [_h]: ["POST", "/sol/nsd/v1/ns_descriptors", 201],
  },
  () => CreateSolNetworkPackageInput,
  () => CreateSolNetworkPackageOutput
);

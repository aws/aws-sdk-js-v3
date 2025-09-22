// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _aB,
  _aBI,
  _c,
  _CAB,
  _CABR,
  _CABRr,
  _CE,
  _cMKI,
  _cT,
  _DAB,
  _DABR,
  _DABRe,
  _e,
  _h,
  _hE,
  _iI,
  _m,
  _qC,
  _rI,
  _rT,
  _sC,
  _SI,
  _SIR,
  _SIRt,
  _SIRto,
  _SIRtop,
  _SIt,
  _SQEE,
  _ta,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_5_Create";
import { AppBundle } from "./schemas_7_App";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ConflictException
);
export var CreateAppBundleRequest = struct(n0, _CABR, 0, [_cT, _cMKI, _ta], [[0, 4], 0, () => TagList]);
export var CreateAppBundleResponse = struct(n0, _CABRr, 0, [_aB], [() => AppBundle]);
export var DeleteAppBundleRequest = struct(n0, _DABR, 0, [_aBI], [[0, 1]]);
export var DeleteAppBundleResponse = struct(n0, _DABRe, 0, [], []);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var StartIngestionRequest = struct(
  n0,
  _SIR,
  0,
  [_iI, _aBI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var StartIngestionResponse = struct(n0, _SIRt, 0, [], []);
export var StopIngestionRequest = struct(
  n0,
  _SIRto,
  0,
  [_iI, _aBI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var StopIngestionResponse = struct(n0, _SIRtop, 0, [], []);
export var CreateAppBundle = op(
  n0,
  _CAB,
  {
    [_h]: ["POST", "/appbundles", 201],
  },
  () => CreateAppBundleRequest,
  () => CreateAppBundleResponse
);
export var DeleteAppBundle = op(
  n0,
  _DAB,
  {
    [_h]: ["DELETE", "/appbundles/{appBundleIdentifier}", 204],
  },
  () => DeleteAppBundleRequest,
  () => DeleteAppBundleResponse
);
export var StartIngestion = op(
  n0,
  _SI,
  {
    [_h]: ["POST", "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/start", 200],
  },
  () => StartIngestionRequest,
  () => StartIngestionResponse
);
export var StopIngestion = op(
  n0,
  _SIt,
  {
    [_h]: ["POST", "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/stop", 200],
  },
  () => StopIngestionRequest,
  () => StopIngestionResponse
);

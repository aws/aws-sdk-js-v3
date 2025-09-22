// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { UnauthorizedException as __UnauthorizedException } from "../models/index";
import {
  _aI,
  _bo,
  _cli,
  _eN,
  _er,
  _fe,
  _fN,
  _GM,
  _GMR,
  _GMRe,
  _h,
  _hE,
  _me,
  _nVe,
  _PMF,
  _PMFB,
  _PMFR,
  _UE,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_1_Form";

/* eslint no-var: 0 */

export var GetMetadataRequest = struct(
  n0,
  _GMR,
  0,
  [_aI, _eN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetMetadataResponse = struct(n0, _GMRe, 0, [_fe], [128 | 0]);
export var PutMetadataFlagBody = struct(n0, _PMFB, 0, [_nVe], [0]);
export var PutMetadataFlagRequest = struct(
  n0,
  _PMFR,
  0,
  [_aI, _eN, _fN, _bo],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [() => PutMetadataFlagBody, 16],
  ]
);
export var UnauthorizedException = error(
  n0,
  _UE,
  {
    [_er]: _cli,
    [_hE]: 401,
  },
  [_me],
  [0],

  __UnauthorizedException
);
export var FeaturesMap = 128 | 0;

export var GetMetadata = op(
  n0,
  _GM,
  {
    [_h]: ["GET", "/app/{appId}/environment/{environmentName}/metadata", 200],
  },
  () => GetMetadataRequest,
  () => GetMetadataResponse
);
export var PutMetadataFlag = op(
  n0,
  _PMF,
  {
    [_h]: ["PUT", "/app/{appId}/environment/{environmentName}/metadata/features/{featureName}", 200],
  },
  () => PutMetadataFlagRequest,
  () => Unit
);

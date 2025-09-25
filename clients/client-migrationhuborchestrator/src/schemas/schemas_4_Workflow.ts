// smithy-typescript generated code
import { error, op, struct, struct as uni } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _c,
  _CE,
  _CT,
  _cTl,
  _CTR,
  _CTRr,
  _e,
  _hE,
  _ht,
  _m,
  _t,
  _tA,
  _tD,
  _tI,
  _tN,
  _tS,
  _TSe,
  _wIo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateTemplateRequest = struct(
  n0,
  _CTR,
  0,
  [_tN, _tD, _tS, _cTl, _t],
  [0, 0, () => TemplateSource, [0, 4], 128 | 0]
);
export var CreateTemplateResponse = struct(n0, _CTRr, 0, [_tI, _tA, _t], [0, 0, 128 | 0]);
export var StringMap = 128 | 0;

export var TemplateSource = uni(n0, _TSe, 0, [_wIo], [0]);
export var CreateTemplate = op(
  n0,
  _CT,
  {
    [_ht]: ["POST", "/template", 200],
  },
  () => CreateTemplateRequest,
  () => CreateTemplateResponse
);

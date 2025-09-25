// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceAlreadyExistsException as __ResourceAlreadyExistsException } from "../models/index";
import {
  _a,
  _ar,
  _c,
  _cA,
  _CRR,
  _CRr,
  _CRRr,
  _cRT,
  _CWT,
  _CWTR,
  _CWTRr,
  _e,
  _gGI,
  _h,
  _hE,
  _m,
  _n,
  _RAEE,
  _t,
  _tB,
  _tL,
  n0,
} from "./schemas_0";
import { TemplateLocation } from "./schemas_17_World";

/* eslint no-var: 0 */

export var CreateRobotRequest = struct(n0, _CRR, 0, [_n, _ar, _gGI, _t], [0, 0, 0, 128 | 0]);
export var CreateRobotResponse = struct(n0, _CRRr, 0, [_a, _n, _cA, _gGI, _ar, _t], [0, 0, 4, 0, 0, 128 | 0]);
export var CreateWorldTemplateRequest = struct(
  n0,
  _CWTR,
  0,
  [_cRT, _n, _tB, _tL, _t],
  [0, 0, 0, () => TemplateLocation, 128 | 0]
);
export var CreateWorldTemplateResponse = struct(n0, _CWTRr, 0, [_a, _cRT, _cA, _n, _t], [0, 0, 4, 0, 128 | 0]);
export var ResourceAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ResourceAlreadyExistsException
);
export var CreateRobot = op(
  n0,
  _CRr,
  {
    [_h]: ["POST", "/createRobot", 200],
  },
  () => CreateRobotRequest,
  () => CreateRobotResponse
);
export var CreateWorldTemplate = op(
  n0,
  _CWT,
  {
    [_h]: ["POST", "/createWorldTemplate", 200],
  },
  () => CreateWorldTemplateRequest,
  () => CreateWorldTemplateResponse
);

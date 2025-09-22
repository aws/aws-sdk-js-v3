// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ResourceAlreadyExistsException as __ResourceAlreadyExistsException } from "../models/index";
import {
  _At,
  _at,
  _Att,
  _CI,
  _CIR,
  _CIRr,
  _cl,
  _cTr,
  _DIe,
  _DIRes,
  _DIResc,
  _er,
  _h,
  _hE,
  _I,
  _i,
  _iA,
  _ICn,
  _iCn,
  _ID,
  _iD,
  _iDn,
  _iN,
  _jP,
  _lUT,
  _m,
  _rAe,
  _RAEE,
  _rI,
  _st,
  _ta,
  _UI,
  _UIR,
  _UIRp,
  n0,
} from "./schemas_0";
import { Tags } from "./schemas_3_Create";

/* eslint no-var: 0 */

export var Attribute = struct(n0, _At, 0, [_jP], [0]);
export var CreateInputRequest = struct(n0, _CIR, 0, [_iN, _iD, _iDn, _ta], [0, 0, () => InputDefinition, () => Tags]);
export var CreateInputResponse = struct(n0, _CIRr, 0, [_iCn], [() => InputConfiguration]);
export var DescribeInputRequest = struct(n0, _DIRes, 0, [_iN], [[0, 1]]);
export var DescribeInputResponse = struct(n0, _DIResc, 0, [_i], [() => Input]);
export var Input = struct(n0, _I, 0, [_iCn, _iDn], [() => InputConfiguration, () => InputDefinition]);
export var InputConfiguration = struct(n0, _ICn, 0, [_iN, _iD, _iA, _cTr, _lUT, _st], [0, 0, 0, 4, 4, 0]);
export var InputDefinition = struct(n0, _ID, 0, [_at], [() => Attributes]);
export var ResourceAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_er]: _cl,
    [_hE]: 409,
  },
  [_m, _rI, _rAe],
  [0, 0, 0],

  __ResourceAlreadyExistsException
);
export var UpdateInputRequest = struct(n0, _UIR, 0, [_iN, _iD, _iDn], [[0, 1], 0, () => InputDefinition]);
export var UpdateInputResponse = struct(n0, _UIRp, 0, [_iCn], [() => InputConfiguration]);
export var Attributes = list(n0, _Att, 0, () => Attribute);
export var CreateInput = op(
  n0,
  _CI,
  {
    [_h]: ["POST", "/inputs", 201],
  },
  () => CreateInputRequest,
  () => CreateInputResponse
);
export var DescribeInput = op(
  n0,
  _DIe,
  {
    [_h]: ["GET", "/inputs/{inputName}", 200],
  },
  () => DescribeInputRequest,
  () => DescribeInputResponse
);
export var UpdateInput = op(
  n0,
  _UI,
  {
    [_h]: ["PUT", "/inputs/{inputName}", 200],
  },
  () => UpdateInputRequest,
  () => UpdateInputResponse
);

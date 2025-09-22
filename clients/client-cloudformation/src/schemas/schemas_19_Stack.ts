// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TokenAlreadyExistsException as __TokenAlreadyExistsException } from "../models/index";
import {
  _aQE,
  _c,
  _CRT,
  _CSN,
  _CUS,
  _CUSI,
  _DR,
  _e,
  _ECS,
  _ECSI,
  _ECSO,
  _hE,
  _M,
  _REOC,
  _SN,
  _TAEE,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelUpdateStackInput = struct(n0, _CUSI, 0, [_SN, _CRT], [0, 0]);
export var ExecuteChangeSetInput = struct(n0, _ECSI, 0, [_CSN, _SN, _CRT, _DR, _REOC], [0, 0, 0, 2, 2]);
export var ExecuteChangeSetOutput = struct(n0, _ECSO, 0, [], []);
export var TokenAlreadyExistsException = error(
  n0,
  _TAEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TokenAlreadyExistsException`, 400],
  },
  [_M],
  [0],

  __TokenAlreadyExistsException
);
export var CancelUpdateStack = op(
  n0,
  _CUS,
  0,
  () => CancelUpdateStackInput,
  () => Unit
);
export var ExecuteChangeSet = op(
  n0,
  _ECS,
  0,
  () => ExecuteChangeSetInput,
  () => ExecuteChangeSetOutput
);

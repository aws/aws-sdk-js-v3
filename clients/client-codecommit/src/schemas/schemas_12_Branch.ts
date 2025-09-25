// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  BranchDoesNotExistException as __BranchDoesNotExistException,
  BranchNameExistsException as __BranchNameExistsException,
  BranchNameIsTagNameException as __BranchNameIsTagNameException,
  BranchNameRequiredException as __BranchNameRequiredException,
  DefaultBranchCannotBeDeletedException as __DefaultBranchCannotBeDeletedException,
  InvalidBranchNameException as __InvalidBranchNameException,
} from "../models/index";
import {
  _BDNEE,
  _BI,
  _bN,
  _BNEE,
  _BNITNE,
  _BNRE,
  _br,
  _c,
  _CB,
  _CBI,
  _cI,
  _DB,
  _dB,
  _DBCBDE,
  _DBI,
  _dBN,
  _DBO,
  _e,
  _GBe,
  _GBIe,
  _GBOe,
  _IBNE,
  _m,
  _rN,
  _UDB,
  _UDBI,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BranchDoesNotExistException = error(
  n0,
  _BDNEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __BranchDoesNotExistException
);
export var BranchInfo = struct(n0, _BI, 0, [_bN, _cI], [0, 0]);
export var BranchNameExistsException = error(
  n0,
  _BNEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __BranchNameExistsException
);
export var BranchNameIsTagNameException = error(
  n0,
  _BNITNE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __BranchNameIsTagNameException
);
export var BranchNameRequiredException = error(
  n0,
  _BNRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __BranchNameRequiredException
);
export var CreateBranchInput = struct(n0, _CBI, 0, [_rN, _bN, _cI], [0, 0, 0]);
export var DefaultBranchCannotBeDeletedException = error(
  n0,
  _DBCBDE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __DefaultBranchCannotBeDeletedException
);
export var DeleteBranchInput = struct(n0, _DBI, 0, [_rN, _bN], [0, 0]);
export var DeleteBranchOutput = struct(n0, _DBO, 0, [_dB], [() => BranchInfo]);
export var GetBranchInput = struct(n0, _GBIe, 0, [_rN, _bN], [0, 0]);
export var GetBranchOutput = struct(n0, _GBOe, 0, [_br], [() => BranchInfo]);
export var InvalidBranchNameException = error(
  n0,
  _IBNE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidBranchNameException
);
export var UpdateDefaultBranchInput = struct(n0, _UDBI, 0, [_rN, _dBN], [0, 0]);
export var CreateBranch = op(
  n0,
  _CB,
  0,
  () => CreateBranchInput,
  () => Unit
);
export var DeleteBranch = op(
  n0,
  _DB,
  0,
  () => DeleteBranchInput,
  () => DeleteBranchOutput
);
export var GetBranch = op(
  n0,
  _GBe,
  0,
  () => GetBranchInput,
  () => GetBranchOutput
);
export var UpdateDefaultBranch = op(
  n0,
  _UDB,
  0,
  () => UpdateDefaultBranchInput,
  () => Unit
);

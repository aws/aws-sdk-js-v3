// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceInUseException as __ResourceInUseException } from "../models/index";
import {
  _bN,
  _c,
  _cD,
  _DB,
  _DBA,
  _DBAR,
  _DBR,
  _DBV,
  _DBVR,
  _DST,
  _DSTR,
  _DSTV,
  _DSTVR,
  _e,
  _eR,
  _eS,
  _eT,
  _fR,
  _GE,
  _GER,
  _GERe,
  _GI,
  _GIR,
  _GIRe,
  _h,
  _hE,
  _hQ,
  _iI,
  _iS,
  _mS,
  _n,
  _pay,
  _RIUE,
  _RR,
  _rT,
  _rTe,
  _SI,
  _SIR,
  _SIRt,
  _ta,
  _ur,
  _v,
  n0,
  Unit,
} from "./schemas_0";
import { TagList } from "./schemas_3_Resource";

/* eslint no-var: 0 */

export var DeleteBotAliasRequest = struct(
  n0,
  _DBAR,
  0,
  [_n, _bN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteBotRequest = struct(n0, _DBR, 0, [_n], [[0, 1]]);
export var DeleteBotVersionRequest = struct(
  n0,
  _DBVR,
  0,
  [_n, _v],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteSlotTypeRequest = struct(n0, _DSTR, 0, [_n], [[0, 1]]);
export var DeleteSlotTypeVersionRequest = struct(
  n0,
  _DSTVR,
  0,
  [_n, _v],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetExportRequest = struct(
  n0,
  _GER,
  0,
  [_n, _v, _rT, _eT],
  [
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _v,
      },
    ],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    [
      0,
      {
        [_hQ]: _eT,
      },
    ],
  ]
);
export var GetExportResponse = struct(n0, _GERe, 0, [_n, _v, _rT, _eT, _eS, _fR, _ur], [0, 0, 0, 0, 0, 0, 0]);
export var GetImportRequest = struct(n0, _GIR, 0, [_iI], [[0, 1]]);
export var GetImportResponse = struct(n0, _GIRe, 0, [_n, _rT, _mS, _iI, _iS, _fR, _cD], [0, 0, 0, 0, 0, 64 | 0, 4]);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_rTe, _eR],
  [0, () => ResourceReference],

  __ResourceInUseException
);
export var ResourceReference = struct(n0, _RR, 0, [_n, _v], [0, 0]);
export var StartImportRequest = struct(n0, _SIR, 0, [_pay, _rT, _mS, _ta], [21, 0, 0, () => TagList]);
export var StartImportResponse = struct(
  n0,
  _SIRt,
  0,
  [_n, _rT, _mS, _iI, _iS, _ta, _cD],
  [0, 0, 0, 0, 0, () => TagList, 4]
);
export var StringList = 64 | 0;

export var DeleteBot = op(
  n0,
  _DB,
  {
    [_h]: ["DELETE", "/bots/{name}", 204],
  },
  () => DeleteBotRequest,
  () => Unit
);
export var DeleteBotAlias = op(
  n0,
  _DBA,
  {
    [_h]: ["DELETE", "/bots/{botName}/aliases/{name}", 204],
  },
  () => DeleteBotAliasRequest,
  () => Unit
);
export var DeleteBotVersion = op(
  n0,
  _DBV,
  {
    [_h]: ["DELETE", "/bots/{name}/versions/{version}", 204],
  },
  () => DeleteBotVersionRequest,
  () => Unit
);
export var DeleteSlotType = op(
  n0,
  _DST,
  {
    [_h]: ["DELETE", "/slottypes/{name}", 204],
  },
  () => DeleteSlotTypeRequest,
  () => Unit
);
export var DeleteSlotTypeVersion = op(
  n0,
  _DSTV,
  {
    [_h]: ["DELETE", "/slottypes/{name}/version/{version}", 204],
  },
  () => DeleteSlotTypeVersionRequest,
  () => Unit
);
export var GetExport = op(
  n0,
  _GE,
  {
    [_h]: ["GET", "/exports", 200],
  },
  () => GetExportRequest,
  () => GetExportResponse
);
export var GetImport = op(
  n0,
  _GI,
  {
    [_h]: ["GET", "/imports/{importId}", 200],
  },
  () => GetImportRequest,
  () => GetImportResponse
);
export var StartImport = op(
  n0,
  _SI,
  {
    [_h]: ["POST", "/imports", 201],
  },
  () => StartImportRequest,
  () => StartImportResponse
);

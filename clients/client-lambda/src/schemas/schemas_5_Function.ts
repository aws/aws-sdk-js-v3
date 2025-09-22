// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACl,
  _AH,
  _AM,
  _AO,
  _AT,
  _CFUC,
  _CFUCR,
  _CFUCRr,
  _Co,
  _CT,
  _EH,
  _FA,
  _FN,
  _FU,
  _FUC,
  _FUCL,
  _FUCu,
  _GFUC,
  _GFUCR,
  _GFUCRe,
  _h,
  _hQ,
  _IM,
  _LFUC,
  _LFUCR,
  _LFUCRi,
  _LMT,
  _MA,
  _Ma,
  _MI,
  _NM,
  _Q,
  _UFUC,
  _UFUCR,
  _UFUCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Cors = struct(n0, _Co, 0, [_ACl, _AH, _AM, _AO, _EH, _MA], [2, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 1]);
export var CreateFunctionUrlConfigRequest = struct(
  n0,
  _CFUCR,
  0,
  [_FN, _Q, _AT, _Co, _IM],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
    0,
    () => Cors,
    0,
  ]
);
export var CreateFunctionUrlConfigResponse = struct(
  n0,
  _CFUCRr,
  0,
  [_FU, _FA, _AT, _Co, _CT, _IM],
  [0, 0, 0, () => Cors, 0, 0]
);
export var FunctionUrlConfig = struct(
  n0,
  _FUC,
  0,
  [_FU, _FA, _CT, _LMT, _Co, _AT, _IM],
  [0, 0, 0, 0, () => Cors, 0, 0]
);
export var GetFunctionUrlConfigRequest = struct(
  n0,
  _GFUCR,
  0,
  [_FN, _Q],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
  ]
);
export var GetFunctionUrlConfigResponse = struct(
  n0,
  _GFUCRe,
  0,
  [_FU, _FA, _AT, _Co, _CT, _LMT, _IM],
  [0, 0, 0, () => Cors, 0, 0, 0]
);
export var ListFunctionUrlConfigsRequest = struct(
  n0,
  _LFUCR,
  0,
  [_FN, _Ma, _MI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListFunctionUrlConfigsResponse = struct(n0, _LFUCRi, 0, [_FUCu, _NM], [() => FunctionUrlConfigList, 0]);
export var UpdateFunctionUrlConfigRequest = struct(
  n0,
  _UFUCR,
  0,
  [_FN, _Q, _AT, _Co, _IM],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
    0,
    () => Cors,
    0,
  ]
);
export var UpdateFunctionUrlConfigResponse = struct(
  n0,
  _UFUCRp,
  0,
  [_FU, _FA, _AT, _Co, _CT, _LMT, _IM],
  [0, 0, 0, () => Cors, 0, 0, 0]
);
export var AllowMethodsList = 64 | 0;

export var AllowOriginsList = 64 | 0;

export var FunctionUrlConfigList = list(n0, _FUCL, 0, () => FunctionUrlConfig);
export var HeadersList = 64 | 0;

export var CreateFunctionUrlConfig = op(
  n0,
  _CFUC,
  {
    [_h]: ["POST", "/2021-10-31/functions/{FunctionName}/url", 201],
  },
  () => CreateFunctionUrlConfigRequest,
  () => CreateFunctionUrlConfigResponse
);
export var GetFunctionUrlConfig = op(
  n0,
  _GFUC,
  {
    [_h]: ["GET", "/2021-10-31/functions/{FunctionName}/url", 200],
  },
  () => GetFunctionUrlConfigRequest,
  () => GetFunctionUrlConfigResponse
);
export var ListFunctionUrlConfigs = op(
  n0,
  _LFUC,
  {
    [_h]: ["GET", "/2021-10-31/functions/{FunctionName}/urls", 200],
  },
  () => ListFunctionUrlConfigsRequest,
  () => ListFunctionUrlConfigsResponse
);
export var UpdateFunctionUrlConfig = op(
  n0,
  _UFUC,
  {
    [_h]: ["PUT", "/2021-10-31/functions/{FunctionName}/url", 200],
  },
  () => UpdateFunctionUrlConfigRequest,
  () => UpdateFunctionUrlConfigResponse
);

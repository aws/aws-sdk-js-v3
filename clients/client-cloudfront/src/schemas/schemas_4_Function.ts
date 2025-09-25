// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  FunctionAlreadyExists as __FunctionAlreadyExists,
  FunctionInUse as __FunctionInUse,
  FunctionSizeLimitExceeded as __FunctionSizeLimitExceeded,
  NoSuchFunctionExists as __NoSuchFunctionExists,
  TestFunctionFailed as __TestFunctionFailed,
  TooManyFunctions as __TooManyFunctions,
} from "../models/index";
import {
  _c,
  _CF,
  _CFR,
  _CFRr,
  _Co,
  _CT_,
  _CTo,
  _CTr,
  _CU,
  _DF,
  _DFe,
  _DFR,
  _DFRe,
  _DFRes,
  _e,
  _EO,
  _ET,
  _ETt,
  _FAE,
  _FARN,
  _FB,
  _FC,
  _FCu,
  _FEL,
  _FELL,
  _FEM,
  _FEO,
  _FIU,
  _FL,
  _FM,
  _FOu,
  _FS,
  _FSL,
  _FSLE,
  _GF,
  _GFR,
  _GFRe,
  _h,
  _hE,
  _hH,
  _hQ,
  _I,
  _IM,
  _IM_,
  _KVSA,
  _KVSAe,
  _KVSAL,
  _KVSARN,
  _L,
  _LF,
  _LFR,
  _LFRi,
  _LMT,
  _M,
  _Ma,
  _MI,
  _N,
  _NM,
  _NSFE,
  _PFR,
  _PFRu,
  _PFu,
  _Q,
  _Ru,
  _S,
  _s,
  _Sta,
  _TF,
  _TFF,
  _TFR,
  _TFRe,
  _TMF,
  _TR,
  _UF,
  _UFR,
  _UFRp,
  _xN,
  n0,
  sensitiveStringType,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FunctionBlob = sim(n0, _FB, 21, 8);
export var FunctionEventObject = sim(n0, _FEO, 21, 8);
export var CreateFunctionRequest = struct(
  n0,
  _CFR,
  0,
  [_N, _FC, _FCu],
  [0, [() => FunctionConfig, 0], [() => FunctionBlob, 0]]
);
export var CreateFunctionResult = struct(
  n0,
  _CFRr,
  0,
  [_FS, _L, _ET],
  [
    [() => FunctionSummary, 16],
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var DeleteFunctionRequest = struct(
  n0,
  _DFR,
  0,
  [_N, _IM],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var DescribeFunctionRequest = struct(
  n0,
  _DFRe,
  0,
  [_N, _Sta],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Sta,
      },
    ],
  ]
);
export var DescribeFunctionResult = struct(
  n0,
  _DFRes,
  0,
  [_FS, _ET],
  [
    [() => FunctionSummary, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var FunctionAlreadyExists = error(
  n0,
  _FAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __FunctionAlreadyExists
);
export var FunctionConfig = struct(n0, _FC, 0, [_Co, _Ru, _KVSA], [0, 0, [() => KeyValueStoreAssociations, 0]]);
export var FunctionInUse = error(
  n0,
  _FIU,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __FunctionInUse
);
export var FunctionList = struct(n0, _FL, 0, [_NM, _MI, _Q, _I], [0, 1, 1, [() => FunctionSummaryList, 0]]);
export var FunctionMetadata = struct(n0, _FM, 0, [_FARN, _Sta, _CTr, _LMT], [0, 0, 4, 4]);
export var FunctionSizeLimitExceeded = error(
  n0,
  _FSLE,
  {
    [_e]: _c,
    [_hE]: 413,
  },
  [_M],
  [0],

  __FunctionSizeLimitExceeded
);
export var FunctionSummary = struct(
  n0,
  _FS,
  0,
  [_N, _S, _FC, _FM],
  [0, 0, [() => FunctionConfig, 0], () => FunctionMetadata]
);
export var GetFunctionRequest = struct(
  n0,
  _GFR,
  0,
  [_N, _Sta],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Sta,
      },
    ],
  ]
);
export var GetFunctionResult = struct(
  n0,
  _GFRe,
  0,
  [_FCu, _ET, _CTo],
  [
    [() => FunctionBlob, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
  ]
);
export var KeyValueStoreAssociation = struct(n0, _KVSAe, 0, [_KVSARN], [0]);
export var KeyValueStoreAssociations = struct(n0, _KVSA, 0, [_Q, _I], [1, [() => KeyValueStoreAssociationList, 0]]);
export var ListFunctionsRequest = struct(
  n0,
  _LFR,
  0,
  [_Ma, _MI, _Sta],
  [
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
    [
      0,
      {
        [_hQ]: _Sta,
      },
    ],
  ]
);
export var ListFunctionsResult = struct(n0, _LFRi, 0, [_FL], [[() => FunctionList, 16]]);
export var NoSuchFunctionExists = error(
  n0,
  _NSFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchFunctionExists
);
export var PublishFunctionRequest = struct(
  n0,
  _PFR,
  0,
  [_N, _IM],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var PublishFunctionResult = struct(n0, _PFRu, 0, [_FS], [[() => FunctionSummary, 16]]);
export var TestFunctionFailed = error(
  n0,
  _TFF,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __TestFunctionFailed
);
export var TestFunctionRequest = struct(
  n0,
  _TFR,
  0,
  [_N, _IM, _Sta, _EO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
    0,
    [() => FunctionEventObject, 0],
  ]
);
export var TestFunctionResult = struct(n0, _TFRe, 0, [_TR], [[() => TestResult, 16]]);
export var TestResult = struct(
  n0,
  _TR,
  0,
  [_FS, _CU, _FEL, _FEM, _FOu],
  [
    [() => FunctionSummary, 0],
    0,
    [() => FunctionExecutionLogList, 0],
    [() => sensitiveStringType, 0],
    [() => sensitiveStringType, 0],
  ]
);
export var TooManyFunctions = error(
  n0,
  _TMF,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyFunctions
);
export var UpdateFunctionRequest = struct(
  n0,
  _UFR,
  0,
  [_N, _IM, _FC, _FCu],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
    [() => FunctionConfig, 0],
    [() => FunctionBlob, 0],
  ]
);
export var UpdateFunctionResult = struct(
  n0,
  _UFRp,
  0,
  [_FS, _ET],
  [
    [() => FunctionSummary, 16],
    [
      0,
      {
        [_hH]: _ETt,
      },
    ],
  ]
);
export var FunctionExecutionLogList = list(n0, _FELL, 8, 0);
export var FunctionSummaryList = list(n0, _FSL, 0, [
  () => FunctionSummary,
  {
    [_xN]: _FS,
  },
]);
export var KeyValueStoreAssociationList = list(n0, _KVSAL, 0, [
  () => KeyValueStoreAssociation,
  {
    [_xN]: _KVSAe,
  },
]);
export var CreateFunction = op(
  n0,
  _CF,
  {
    [_h]: ["POST", "/2020-05-31/function", 201],
  },
  () => CreateFunctionRequest,
  () => CreateFunctionResult
);
export var DeleteFunction = op(
  n0,
  _DF,
  {
    [_h]: ["DELETE", "/2020-05-31/function/{Name}", 204],
  },
  () => DeleteFunctionRequest,
  () => Unit
);
export var DescribeFunction = op(
  n0,
  _DFe,
  {
    [_h]: ["GET", "/2020-05-31/function/{Name}/describe", 200],
  },
  () => DescribeFunctionRequest,
  () => DescribeFunctionResult
);
export var GetFunction = op(
  n0,
  _GF,
  {
    [_h]: ["GET", "/2020-05-31/function/{Name}", 200],
  },
  () => GetFunctionRequest,
  () => GetFunctionResult
);
export var ListFunctions = op(
  n0,
  _LF,
  {
    [_h]: ["GET", "/2020-05-31/function", 200],
  },
  () => ListFunctionsRequest,
  () => ListFunctionsResult
);
export var PublishFunction = op(
  n0,
  _PFu,
  {
    [_h]: ["POST", "/2020-05-31/function/{Name}/publish", 200],
  },
  () => PublishFunctionRequest,
  () => PublishFunctionResult
);
export var TestFunction = op(
  n0,
  _TF,
  {
    [_h]: ["POST", "/2020-05-31/function/{Name}/test", 200],
  },
  () => TestFunctionRequest,
  () => TestFunctionResult
);
export var UpdateFunction = op(
  n0,
  _UF,
  {
    [_h]: ["PUT", "/2020-05-31/function/{Name}", 200],
  },
  () => UpdateFunctionRequest,
  () => UpdateFunctionResult
);

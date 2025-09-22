// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CI,
  _CNl,
  _CTr,
  _CUDF,
  _CUDFR,
  _CUDFRr,
  _DN,
  _FI,
  _FNu,
  _GUDF,
  _GUDFe,
  _GUDFR,
  _GUDFRe,
  _GUDFRet,
  _GUDFRets,
  _MRax,
  _NTe,
  _ON,
  _OT,
  _Patt,
  _RTes,
  _RUe,
  _RUes,
  _RUL,
  _UDF,
  _UDFI,
  _UDFL,
  _UDFs,
  _Ur,
  _UUDF,
  _UUDFR,
  _UUDFRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateUserDefinedFunctionRequest = struct(
  n0,
  _CUDFR,
  0,
  [_CI, _DN, _FI],
  [0, 0, () => UserDefinedFunctionInput]
);
export var CreateUserDefinedFunctionResponse = struct(n0, _CUDFRr, 0, [], []);
export var GetUserDefinedFunctionRequest = struct(n0, _GUDFR, 0, [_CI, _DN, _FNu], [0, 0, 0]);
export var GetUserDefinedFunctionResponse = struct(n0, _GUDFRe, 0, [_UDF], [() => UserDefinedFunction]);
export var GetUserDefinedFunctionsRequest = struct(n0, _GUDFRet, 0, [_CI, _DN, _Patt, _NTe, _MRax], [0, 0, 0, 0, 1]);
export var GetUserDefinedFunctionsResponse = struct(
  n0,
  _GUDFRets,
  0,
  [_UDFs, _NTe],
  [() => UserDefinedFunctionList, 0]
);
export var ResourceUri = struct(n0, _RUe, 0, [_RTes, _Ur], [0, 0]);
export var UpdateUserDefinedFunctionRequest = struct(
  n0,
  _UUDFR,
  0,
  [_CI, _DN, _FNu, _FI],
  [0, 0, 0, () => UserDefinedFunctionInput]
);
export var UpdateUserDefinedFunctionResponse = struct(n0, _UUDFRp, 0, [], []);
export var UserDefinedFunction = struct(
  n0,
  _UDF,
  0,
  [_FNu, _DN, _CNl, _ON, _OT, _CTr, _RUes, _CI],
  [0, 0, 0, 0, 0, 4, () => ResourceUriList, 0]
);
export var UserDefinedFunctionInput = struct(
  n0,
  _UDFI,
  0,
  [_FNu, _CNl, _ON, _OT, _RUes],
  [0, 0, 0, 0, () => ResourceUriList]
);
export var ResourceUriList = list(n0, _RUL, 0, () => ResourceUri);
export var UserDefinedFunctionList = list(n0, _UDFL, 0, () => UserDefinedFunction);
export var CreateUserDefinedFunction = op(
  n0,
  _CUDF,
  0,
  () => CreateUserDefinedFunctionRequest,
  () => CreateUserDefinedFunctionResponse
);
export var GetUserDefinedFunction = op(
  n0,
  _GUDF,
  0,
  () => GetUserDefinedFunctionRequest,
  () => GetUserDefinedFunctionResponse
);
export var GetUserDefinedFunctions = op(
  n0,
  _GUDFe,
  0,
  () => GetUserDefinedFunctionsRequest,
  () => GetUserDefinedFunctionsResponse
);
export var UpdateUserDefinedFunction = op(
  n0,
  _UUDF,
  0,
  () => UpdateUserDefinedFunctionRequest,
  () => UpdateUserDefinedFunctionResponse
);

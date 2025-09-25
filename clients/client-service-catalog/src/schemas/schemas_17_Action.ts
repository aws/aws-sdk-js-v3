// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AL, _DSAEP, _DSAEPI, _DSAEPO, _DV, _EP, _EPx, _N, _PPIr, _SAI, _SAP, _T, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeServiceActionExecutionParametersInput = struct(n0, _DSAEPI, 0, [_PPIr, _SAI, _AL], [0, 0, 0]);
export var DescribeServiceActionExecutionParametersOutput = struct(n0, _DSAEPO, 0, [_SAP], [() => ExecutionParameters]);
export var ExecutionParameter = struct(n0, _EP, 0, [_N, _T, _DV], [0, 0, 64 | 0]);
export var ExecutionParameters = list(n0, _EPx, 0, () => ExecutionParameter);
export var ExecutionParameterValueList = 64 | 0;

export var DescribeServiceActionExecutionParameters = op(
  n0,
  _DSAEP,
  0,
  () => DescribeServiceActionExecutionParametersInput,
  () => DescribeServiceActionExecutionParametersOutput
);

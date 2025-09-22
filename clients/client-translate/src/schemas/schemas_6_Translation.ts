// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CPD, _CPDR, _CPDRr, _CT, _D, _EK, _I, _N, _PDC, _S, _Ta, _Ty, n0 } from "./schemas_0";
import { ParallelDataConfig } from "./schemas_2_ParallelData";
import { TagList } from "./schemas_8_Resource";

/* eslint no-var: 0 */

export var CreateParallelDataRequest = struct(
  n0,
  _CPDR,
  0,
  [_N, _D, _PDC, _EK, _CT, _Ta],
  [0, 0, () => ParallelDataConfig, () => EncryptionKey, [0, 4], () => TagList]
);
export var CreateParallelDataResponse = struct(n0, _CPDRr, 0, [_N, _S], [0, 0]);
export var EncryptionKey = struct(n0, _EK, 0, [_Ty, _I], [0, 0]);
export var CreateParallelData = op(
  n0,
  _CPD,
  0,
  () => CreateParallelDataRequest,
  () => CreateParallelDataResponse
);

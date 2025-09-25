// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CT, _D, _LUAA, _LUAS, _N, _PDC, _S, _UPD, _UPDR, _UPDRp, n0 } from "./schemas_0";
import { ParallelDataConfig } from "./schemas_2_ParallelData";

/* eslint no-var: 0 */

export var UpdateParallelDataRequest = struct(
  n0,
  _UPDR,
  0,
  [_N, _D, _PDC, _CT],
  [0, 0, () => ParallelDataConfig, [0, 4]]
);
export var UpdateParallelDataResponse = struct(n0, _UPDRp, 0, [_N, _S, _LUAS, _LUAA], [0, 0, 0, 4]);
export var UpdateParallelData = op(
  n0,
  _UPD,
  0,
  () => UpdateParallelDataRequest,
  () => UpdateParallelDataResponse
);

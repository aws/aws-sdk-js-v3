// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _dN, _h, _LW, _LWI, _LWO, _mR, _nT, _WDS, _WDSL, _wN, _wo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListWorkloadsInput = struct(n0, _LWI, 0, [_mR, _nT], [1, 0]);
export var ListWorkloadsOutput = struct(n0, _LWO, 0, [_wo, _nT], [() => WorkloadDataSummaryList, 0]);
export var WorkloadDataSummary = struct(n0, _WDS, 0, [_wN, _dN], [0, 0]);
export var WorkloadDataSummaryList = list(n0, _WDSL, 0, () => WorkloadDataSummary);
export var ListWorkloads = op(
  n0,
  _LW,
  {
    [_h]: ["POST", "/listWorkloads", 200],
  },
  () => ListWorkloadsInput,
  () => ListWorkloadsOutput
);

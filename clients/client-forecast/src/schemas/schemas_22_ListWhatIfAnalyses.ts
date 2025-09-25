// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _FA,
  _Fil,
  _LMT,
  _LWIA,
  _LWIAR,
  _LWIARi,
  _M,
  _MR,
  _NT,
  _St,
  _WIA,
  _WIAA,
  _WIAN,
  _WIAS,
  n0,
} from "./schemas_0";
import { Filters } from "./schemas_30_List";

/* eslint no-var: 0 */

export var ListWhatIfAnalysesRequest = struct(n0, _LWIAR, 0, [_NT, _MR, _Fil], [0, 1, () => Filters]);
export var ListWhatIfAnalysesResponse = struct(n0, _LWIARi, 0, [_WIA, _NT], [() => WhatIfAnalyses, 0]);
export var WhatIfAnalysisSummary = struct(n0, _WIAS, 0, [_WIAA, _WIAN, _FA, _St, _M, _CT, _LMT], [0, 0, 0, 0, 0, 4, 4]);
export var WhatIfAnalyses = list(n0, _WIA, 0, () => WhatIfAnalysisSummary);
export var ListWhatIfAnalyses = op(
  n0,
  _LWIA,
  2,
  () => ListWhatIfAnalysesRequest,
  () => ListWhatIfAnalysesResponse
);

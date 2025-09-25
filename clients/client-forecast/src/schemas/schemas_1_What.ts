// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _CWIFE,
  _CWIFER,
  _CWIFERr,
  _De,
  _DWIF,
  _DWIFE,
  _DWIFER,
  _DWIFR,
  _F,
  _Fil,
  _LMT,
  _LWIF,
  _LWIFE,
  _LWIFER,
  _LWIFERi,
  _LWIFR,
  _LWIFRi,
  _M,
  _MR,
  _NT,
  _St,
  _Ta,
  _WIAA,
  _WIF,
  _WIFA,
  _WIFAh,
  _WIFE,
  _WIFEA,
  _WIFEN,
  _WIFES,
  _WIFN,
  _WIFS,
  n0,
  Tags,
  Unit,
} from "./schemas_0";
import { Filters } from "./schemas_30_List";
import { DataDestination } from "./schemas_44_Export";

/* eslint no-var: 0 */

export var CreateWhatIfForecastExportRequest = struct(
  n0,
  _CWIFER,
  0,
  [_WIFEN, _WIFA, _De, _Ta, _F],
  [0, 64 | 0, () => DataDestination, [() => Tags, 0], 0]
);
export var CreateWhatIfForecastExportResponse = struct(n0, _CWIFERr, 0, [_WIFEA], [0]);
export var DeleteWhatIfForecastExportRequest = struct(n0, _DWIFER, 0, [_WIFEA], [0]);
export var DeleteWhatIfForecastRequest = struct(n0, _DWIFR, 0, [_WIFAh], [0]);
export var ListWhatIfForecastExportsRequest = struct(n0, _LWIFER, 0, [_NT, _MR, _Fil], [0, 1, () => Filters]);
export var ListWhatIfForecastExportsResponse = struct(n0, _LWIFERi, 0, [_WIFE, _NT], [() => WhatIfForecastExports, 0]);
export var ListWhatIfForecastsRequest = struct(n0, _LWIFR, 0, [_NT, _MR, _Fil], [0, 1, () => Filters]);
export var ListWhatIfForecastsResponse = struct(n0, _LWIFRi, 0, [_WIF, _NT], [() => WhatIfForecasts, 0]);
export var WhatIfForecastExportSummary = struct(
  n0,
  _WIFES,
  0,
  [_WIFEA, _WIFA, _WIFEN, _De, _St, _M, _CT, _LMT],
  [0, 64 | 0, 0, () => DataDestination, 0, 0, 4, 4]
);
export var WhatIfForecastSummary = struct(
  n0,
  _WIFS,
  0,
  [_WIFAh, _WIFN, _WIAA, _St, _M, _CT, _LMT],
  [0, 0, 0, 0, 0, 4, 4]
);
export var WhatIfForecastArnListForExport = 64 | 0;

export var WhatIfForecastExports = list(n0, _WIFE, 0, () => WhatIfForecastExportSummary);
export var WhatIfForecasts = list(n0, _WIF, 0, () => WhatIfForecastSummary);
export var CreateWhatIfForecastExport = op(
  n0,
  _CWIFE,
  0,
  () => CreateWhatIfForecastExportRequest,
  () => CreateWhatIfForecastExportResponse
);
export var DeleteWhatIfForecast = op(
  n0,
  _DWIF,
  2,
  () => DeleteWhatIfForecastRequest,
  () => Unit
);
export var DeleteWhatIfForecastExport = op(
  n0,
  _DWIFE,
  2,
  () => DeleteWhatIfForecastExportRequest,
  () => Unit
);
export var ListWhatIfForecastExports = op(
  n0,
  _LWIFE,
  2,
  () => ListWhatIfForecastExportsRequest,
  () => ListWhatIfForecastExportsResponse
);
export var ListWhatIfForecasts = op(
  n0,
  _LWIF,
  2,
  () => ListWhatIfForecastsRequest,
  () => ListWhatIfForecastsResponse
);

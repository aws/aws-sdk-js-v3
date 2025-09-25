// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CS,
  _GWGS,
  _GWGSR,
  _GWGSRe,
  _GWGT,
  _GWGTR,
  _GWGTRe,
  _h,
  _I,
  _LURA,
  _St,
  _TCA,
  _WGI,
  _WGTDI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetWirelessGatewayStatisticsRequest = struct(n0, _GWGSR, 0, [_WGI], [[0, 1]]);
export var GetWirelessGatewayStatisticsResponse = struct(n0, _GWGSRe, 0, [_WGI, _LURA, _CS], [0, 0, 0]);
export var GetWirelessGatewayTaskRequest = struct(n0, _GWGTR, 0, [_I], [[0, 1]]);
export var GetWirelessGatewayTaskResponse = struct(n0, _GWGTRe, 0, [_WGI, _WGTDI, _LURA, _TCA, _St], [0, 0, 0, 0, 0]);
export var GetWirelessGatewayStatistics = op(
  n0,
  _GWGS,
  {
    [_h]: ["GET", "/wireless-gateways/{WirelessGatewayId}/statistics", 200],
  },
  () => GetWirelessGatewayStatisticsRequest,
  () => GetWirelessGatewayStatisticsResponse
);
export var GetWirelessGatewayTask = op(
  n0,
  _GWGT,
  {
    [_h]: ["GET", "/wireless-gateways/{Id}/tasks", 200],
  },
  () => GetWirelessGatewayTaskRequest,
  () => GetWirelessGatewayTaskResponse
);

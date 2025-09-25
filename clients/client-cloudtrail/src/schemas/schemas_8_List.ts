// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AESd,
  _C,
  _CA,
  _Ch,
  _CT,
  _DA,
  _Da,
  _DD,
  _Des,
  _EDS,
  _EDSA,
  _EDSv,
  _LC,
  _LCR,
  _LCRi,
  _LD,
  _LDR,
  _LDRi,
  _LEDS,
  _LEDSR,
  _LEDSRi,
  _MR,
  _MRE,
  _N,
  _NP,
  _NT,
  _OE,
  _Rel,
  _RP,
  _SP,
  _SQL,
  _SR,
  _SSQ,
  _SSQR,
  _SSQRe,
  _SSQSR,
  _SSQSRe,
  _St,
  _T,
  _TPE,
  _UT,
  n0,
} from "./schemas_0";
import { AdvancedEventSelectors } from "./schemas_13_Event";

/* eslint no-var: 0 */

export var Channel = struct(n0, _C, 0, [_CA, _N], [0, 0]);
export var DashboardDetail = struct(n0, _DD, 0, [_DA, _T], [0, 0]);
export var EventDataStore = struct(
  n0,
  _EDS,
  0,
  [_EDSA, _N, _TPE, _St, _AESd, _MRE, _OE, _RP, _CT, _UT],
  [0, 0, 2, 0, () => AdvancedEventSelectors, 2, 2, 1, 4, 4]
);
export var ListChannelsRequest = struct(n0, _LCR, 0, [_MR, _NT], [1, 0]);
export var ListChannelsResponse = struct(n0, _LCRi, 0, [_Ch, _NT], [() => Channels, 0]);
export var ListDashboardsRequest = struct(n0, _LDR, 0, [_NP, _T, _NT, _MR], [0, 0, 0, 1]);
export var ListDashboardsResponse = struct(n0, _LDRi, 0, [_Da, _NT], [() => Dashboards, 0]);
export var ListEventDataStoresRequest = struct(n0, _LEDSR, 0, [_NT, _MR], [0, 1]);
export var ListEventDataStoresResponse = struct(n0, _LEDSRi, 0, [_EDSv, _NT], [() => EventDataStores, 0]);
export var SearchSampleQueriesRequest = struct(n0, _SSQR, 0, [_SP, _MR, _NT], [0, 1, 0]);
export var SearchSampleQueriesResponse = struct(n0, _SSQRe, 0, [_SR, _NT], [() => SearchSampleQueriesSearchResults, 0]);
export var SearchSampleQueriesSearchResult = struct(n0, _SSQSR, 0, [_N, _Des, _SQL, _Rel], [0, 0, 0, 1]);
export var Channels = list(n0, _Ch, 0, () => Channel);
export var Dashboards = list(n0, _Da, 0, () => DashboardDetail);
export var EventDataStores = list(n0, _EDSv, 0, () => EventDataStore);
export var SearchSampleQueriesSearchResults = list(n0, _SSQSRe, 0, () => SearchSampleQueriesSearchResult);
export var ListChannels = op(
  n0,
  _LC,
  2,
  () => ListChannelsRequest,
  () => ListChannelsResponse
);
export var ListDashboards = op(
  n0,
  _LD,
  2,
  () => ListDashboardsRequest,
  () => ListDashboardsResponse
);
export var ListEventDataStores = op(
  n0,
  _LEDS,
  2,
  () => ListEventDataStoresRequest,
  () => ListEventDataStoresResponse
);
export var SearchSampleQueries = op(
  n0,
  _SSQ,
  2,
  () => SearchSampleQueriesRequest,
  () => SearchSampleQueriesResponse
);

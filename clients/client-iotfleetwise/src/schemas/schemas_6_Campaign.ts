// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _ca,
  _cN,
  _CS,
  _cSa,
  _cT,
  _d,
  _DC,
  _DCR,
  _DCRe,
  _GVS,
  _GVSR,
  _GVSRe,
  _hQ,
  _ht,
  _LC,
  _LCR,
  _LCRi,
  _lMT,
  _lRS,
  _mR,
  _n,
  _nT,
  _s,
  _sCA,
  _tA,
  _vN,
  _VS,
  _VSL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CampaignSummary = struct(n0, _CS, 0, [_a, _n, _d, _sCA, _tA, _s, _cT, _lMT], [0, 0, 0, 0, 0, 0, 4, 4]);
export var DeleteCampaignRequest = struct(n0, _DCR, 0, [_n], [[0, 1]]);
export var DeleteCampaignResponse = struct(n0, _DCRe, 0, [_n, _a], [0, 0]);
export var GetVehicleStatusRequest = struct(
  n0,
  _GVSR,
  0,
  [_nT, _mR, _vN],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
  ]
);
export var GetVehicleStatusResponse = struct(n0, _GVSRe, 0, [_ca, _nT], [() => VehicleStatusList, 0]);
export var ListCampaignsRequest = struct(
  n0,
  _LCR,
  0,
  [_nT, _mR, _s, _lRS],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _lRS,
      },
    ],
  ]
);
export var ListCampaignsResponse = struct(n0, _LCRi, 0, [_cSa, _nT], [() => campaignSummaries, 0]);
export var VehicleStatus = struct(n0, _VS, 0, [_cN, _vN, _s], [0, 0, 0]);
export var campaignSummaries = list(n0, _cSa, 0, () => CampaignSummary);
export var VehicleStatusList = list(n0, _VSL, 0, () => VehicleStatus);
export var DeleteCampaign = op(
  n0,
  _DC,
  {
    [_ht]: ["DELETE", "/campaigns/{name}", 204],
  },
  () => DeleteCampaignRequest,
  () => DeleteCampaignResponse
);
export var GetVehicleStatus = op(
  n0,
  _GVS,
  {
    [_ht]: ["GET", "/vehicles/{vehicleName}/status", 200],
  },
  () => GetVehicleStatusRequest,
  () => GetVehicleStatusResponse
);
export var ListCampaigns = op(
  n0,
  _LC,
  {
    [_ht]: ["GET", "/campaigns", 200],
  },
  () => ListCampaignsRequest,
  () => ListCampaignsResponse
);

// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { MarketplaceCommerceAnalyticsException as __MarketplaceCommerceAnalyticsException } from "../models/index";
import {
  _cDV,
  _dSBN,
  _dSP,
  _dSPD,
  _dSRI,
  _dST,
  _e,
  _fD,
  _GDS,
  _GDSR,
  _GDSRe,
  _m,
  _MCAE,
  _rNA,
  _s,
  _SSDE,
  _SSDER,
  _SSDERt,
  _sTA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GenerateDataSetRequest = struct(
  n0,
  _GDSR,
  0,
  [_dST, _dSPD, _rNA, _dSBN, _dSP, _sTA, _cDV],
  [0, 4, 0, 0, 0, 0, 128 | 0]
);
export var GenerateDataSetResult = struct(n0, _GDSRe, 0, [_dSRI], [0]);
export var MarketplaceCommerceAnalyticsException = error(
  n0,
  _MCAE,
  {
    [_e]: _s,
  },
  [_m],
  [0],

  __MarketplaceCommerceAnalyticsException
);
export var StartSupportDataExportRequest = struct(
  n0,
  _SSDER,
  0,
  [_dST, _fD, _rNA, _dSBN, _dSP, _sTA, _cDV],
  [0, 4, 0, 0, 0, 0, 128 | 0]
);
export var StartSupportDataExportResult = struct(n0, _SSDERt, 0, [_dSRI], [0]);
export var Unit = "unit" as const;

export var CustomerDefinedValues = 128 | 0;

export var GenerateDataSet = op(
  n0,
  _GDS,
  0,
  () => GenerateDataSetRequest,
  () => GenerateDataSetResult
);
export var StartSupportDataExport = op(
  n0,
  _SSDE,
  0,
  () => StartSupportDataExportRequest,
  () => StartSupportDataExportResult
);

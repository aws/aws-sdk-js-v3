// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _bS, _bSA, _BSL, _BSS, _h, _hQ, _LBS, _LBSR, _LBSRi, _mR, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BrowserSettingsSummary = struct(n0, _BSS, 0, [_bSA], [0]);
export var ListBrowserSettingsRequest = struct(
  n0,
  _LBSR,
  0,
  [_nT, _mR],
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
  ]
);
export var ListBrowserSettingsResponse = struct(n0, _LBSRi, 0, [_bS, _nT], [() => BrowserSettingsList, 0]);
export var BrowserSettingsList = list(n0, _BSL, 0, () => BrowserSettingsSummary);
export var ListBrowserSettings = op(
  n0,
  _LBS,
  {
    [_h]: ["GET", "/browserSettings", 200],
  },
  () => ListBrowserSettingsRequest,
  () => ListBrowserSettingsResponse
);

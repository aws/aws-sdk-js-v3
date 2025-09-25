// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cD,
  _DOTAU,
  _DOTAUR,
  _DOTAURe,
  _dSe,
  _fDAWSJ,
  _h,
  _hQ,
  _LOTAU,
  _LOTAUR,
  _LOTAURi,
  _mR,
  _nT,
  _OTAUS,
  _OTAUSp,
  _oU,
  _oUA,
  _oUI,
  _oUS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteOTAUpdateRequest = struct(
  n0,
  _DOTAUR,
  0,
  [_oUI, _dSe, _fDAWSJ],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _dSe,
      },
    ],
    [
      2,
      {
        [_hQ]: _fDAWSJ,
      },
    ],
  ]
);
export var DeleteOTAUpdateResponse = struct(n0, _DOTAURe, 0, [], []);
export var ListOTAUpdatesRequest = struct(
  n0,
  _LOTAUR,
  0,
  [_mR, _nT, _oUS],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _oUS,
      },
    ],
  ]
);
export var ListOTAUpdatesResponse = struct(n0, _LOTAURi, 0, [_oU, _nT], [() => OTAUpdatesSummary, 0]);
export var OTAUpdateSummary = struct(n0, _OTAUS, 0, [_oUI, _oUA, _cD], [0, 0, 4]);
export var OTAUpdatesSummary = list(n0, _OTAUSp, 0, () => OTAUpdateSummary);
export var DeleteOTAUpdate = op(
  n0,
  _DOTAU,
  {
    [_h]: ["DELETE", "/otaUpdates/{otaUpdateId}", 200],
  },
  () => DeleteOTAUpdateRequest,
  () => DeleteOTAUpdateResponse
);
export var ListOTAUpdates = op(
  n0,
  _LOTAU,
  {
    [_h]: ["GET", "/otaUpdates", 200],
  },
  () => ListOTAUpdatesRequest,
  () => ListOTAUpdatesResponse
);

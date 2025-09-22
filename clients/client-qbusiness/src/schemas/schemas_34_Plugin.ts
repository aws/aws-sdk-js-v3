// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ca,
  _d,
  _hQ,
  _ht,
  _it,
  _LPTA,
  _LPTAR,
  _LPTARi,
  _LPTM,
  _LPTMR,
  _LPTMRi,
  _LPTMS,
  _mRa,
  _nT,
  _pT,
  _PTMS,
  _t,
  n0,
} from "./schemas_0";
import { Actions } from "./schemas_39_ListPlugin";

/* eslint no-var: 0 */

export var ListPluginTypeActionsRequest = struct(
  n0,
  _LPTAR,
  0,
  [_pT, _nT, _mRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListPluginTypeActionsResponse = struct(n0, _LPTARi, 0, [_nT, _it], [0, () => Actions]);
export var ListPluginTypeMetadataRequest = struct(
  n0,
  _LPTMR,
  0,
  [_nT, _mRa],
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
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListPluginTypeMetadataResponse = struct(
  n0,
  _LPTMRi,
  0,
  [_nT, _it],
  [0, () => ListPluginTypeMetadataSummaries]
);
export var PluginTypeMetadataSummary = struct(n0, _PTMS, 0, [_t, _ca, _d], [0, 0, 0]);
export var ListPluginTypeMetadataSummaries = list(n0, _LPTMS, 0, () => PluginTypeMetadataSummary);
export var ListPluginTypeActions = op(
  n0,
  _LPTA,
  {
    [_ht]: ["GET", "/pluginTypes/{pluginType}/actions", 200],
  },
  () => ListPluginTypeActionsRequest,
  () => ListPluginTypeActionsResponse
);
export var ListPluginTypeMetadata = op(
  n0,
  _LPTM,
  {
    [_ht]: ["GET", "/pluginTypeMetadata", 200],
  },
  () => ListPluginTypeMetadataRequest,
  () => ListPluginTypeMetadataResponse
);

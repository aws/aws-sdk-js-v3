// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cAo,
  _cIo,
  _CIR,
  _CL,
  _cL,
  _CLI,
  _cTo,
  _DCel,
  _DCR,
  _h,
  _hQ,
  _LC,
  _LCR,
  _LCRi,
  _mR,
  _n,
  _nT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConfigIdResponse = struct(n0, _CIR, 0, [_cIo, _cTo, _cAo], [0, 0, 0]);
export var ConfigListItem = struct(n0, _CLI, 0, [_cIo, _cTo, _cAo, _n], [0, 0, 0, 0]);
export var DeleteConfigRequest = struct(
  n0,
  _DCR,
  0,
  [_cIo, _cTo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var ListConfigsRequest = struct(
  n0,
  _LCR,
  0,
  [_mR, _nT],
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
  ]
);
export var ListConfigsResponse = struct(n0, _LCRi, 0, [_nT, _cL], [0, () => ConfigList]);
export var ConfigList = list(n0, _CL, 0, () => ConfigListItem);
export var DeleteConfig = op(
  n0,
  _DCel,
  {
    [_h]: ["DELETE", "/config/{configType}/{configId}", 200],
  },
  () => DeleteConfigRequest,
  () => ConfigIdResponse
);
export var ListConfigs = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/config", 200],
  },
  () => ListConfigsRequest,
  () => ListConfigsResponse
);

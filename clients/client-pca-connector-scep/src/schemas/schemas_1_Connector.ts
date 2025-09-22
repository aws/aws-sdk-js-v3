// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _A,
  _AAI,
  _Au,
  _CAA,
  _CAr,
  _CL,
  _Con,
  _CS,
  _D,
  _E,
  _h,
  _hQ,
  _I,
  _IC,
  _In,
  _LC,
  _LCR,
  _LCRi,
  _MDM,
  _MR,
  _NT,
  _OIC,
  _S,
  _SR,
  _Su,
  _T,
  _UA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectorSummary = struct(
  n0,
  _CS,
  0,
  [_A, _CAA, _T, _MDM, _OIC, _S, _SR, _E, _CAr, _UA],
  [0, 0, 0, () => MobileDeviceManagement, () => OpenIdConfiguration, 0, 0, 0, 4, 4]
);
export var IntuneConfiguration = struct(n0, _IC, 0, [_AAI, _D], [0, 0]);
export var ListConnectorsRequest = struct(
  n0,
  _LCR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListConnectorsResponse = struct(n0, _LCRi, 0, [_Con, _NT], [() => ConnectorList, 0]);
export var OpenIdConfiguration = struct(n0, _OIC, 0, [_I, _Su, _Au], [0, 0, 0]);
export var ConnectorList = list(n0, _CL, 0, () => ConnectorSummary);
export var MobileDeviceManagement = uni(n0, _MDM, 0, [_In], [() => IntuneConfiguration]);
export var ListConnectors = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/connectors", 200],
  },
  () => ListConnectorsRequest,
  () => ListConnectorsResponse
);

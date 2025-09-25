// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIL,
  _AIs,
  _CII,
  _CO,
  _COI,
  _COO,
  _GO,
  _GOI,
  _GOO,
  _h,
  _LI,
  _LIAI,
  _LIAIL,
  _LII,
  _LIi,
  _LILD,
  _MAL,
  _O,
  _OFD,
  _OIr,
  _OIu,
  _OSD,
  _OT,
  _PLII,
  _PO,
  _POI,
  _PT,
  _Q,
  _SC,
  _SIh,
  _St,
  _STN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelOrderInput = struct(n0, _COI, 0, [_OIr], [[0, 1]]);
export var CancelOrderOutput = struct(n0, _COO, 0, [], []);
export var GetOrderInput = struct(n0, _GOI, 0, [_OIr], [[0, 1]]);
export var GetOrderOutput = struct(n0, _GOO, 0, [_O], [() => Order]);
export var LineItem = struct(
  n0,
  _LIi,
  0,
  [_CII, _LII, _Q, _St, _SIh, _AIL, _PLII, _POI],
  [0, 0, 1, 0, () => ShipmentInformation, () => LineItemAssetInformationList, 0, 0]
);
export var LineItemAssetInformation = struct(n0, _LIAI, 0, [_AIs, _MAL], [0, 64 | 0]);
export var Order = struct(
  n0,
  _O,
  0,
  [_OIu, _OIr, _St, _LI, _PO, _OSD, _OFD, _PT, _OT],
  [0, 0, 0, () => LineItemListDefinition, 0, 4, 4, 0, 0]
);
export var ShipmentInformation = struct(n0, _SIh, 0, [_STN, _SC], [0, 0]);
export var LineItemAssetInformationList = list(n0, _LIAIL, 0, () => LineItemAssetInformation);
export var LineItemListDefinition = list(n0, _LILD, 0, () => LineItem);
export var MacAddressList = 64 | 0;

export var CancelOrder = op(
  n0,
  _CO,
  {
    [_h]: ["POST", "/orders/{OrderId}/cancel", 200],
  },
  () => CancelOrderInput,
  () => CancelOrderOutput
);
export var GetOrder = op(
  n0,
  _GO,
  {
    [_h]: ["GET", "/orders/{OrderId}", 200],
  },
  () => GetOrderInput,
  () => GetOrderOutput
);

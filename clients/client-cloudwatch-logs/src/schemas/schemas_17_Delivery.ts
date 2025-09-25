// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ar,
  _D,
  _dDA,
  _dDT,
  _de,
  _dSN,
  _eHCP,
  _fD,
  _GD,
  _GDR,
  _GDRe,
  _i,
  _rF,
  _SDC,
  _sDC,
  _sP,
  _ta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Delivery = struct(
  n0,
  _D,
  0,
  [_i, _ar, _dSN, _dDA, _dDT, _rF, _fD, _sDC, _ta],
  [0, 0, 0, 0, 0, 64 | 0, 0, () => S3DeliveryConfiguration, 128 | 0]
);
export var GetDeliveryRequest = struct(n0, _GDR, 0, [_i], [0]);
export var GetDeliveryResponse = struct(n0, _GDRe, 0, [_de], [() => Delivery]);
export var S3DeliveryConfiguration = struct(n0, _SDC, 0, [_sP, _eHCP], [0, 2]);
export var RecordFields = 64 | 0;

export var GetDelivery = op(
  n0,
  _GD,
  0,
  () => GetDeliveryRequest,
  () => GetDeliveryResponse
);

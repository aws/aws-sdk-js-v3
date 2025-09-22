// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ca,
  _cC,
  _d,
  _eD,
  _GR,
  _GRO,
  _GROR,
  _GRORe,
  _GRR,
  _GRRe,
  _hC,
  _o,
  _oI,
  _oT,
  _R,
  _r,
  _rAes,
  _rI,
  _RO,
  _rO,
  _sD,
  _st,
  _uC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetReservationOfferingRequest = struct(n0, _GROR, 0, [_oI], [0]);
export var GetReservationOfferingResponse = struct(n0, _GRORe, 0, [_rO], [() => ReservationOffering]);
export var GetReservationRequest = struct(n0, _GRR, 0, [_rI], [0]);
export var GetReservationResponse = struct(n0, _GRRe, 0, [_r], [() => Reservation]);
export var Reservation = struct(
  n0,
  _R,
  0,
  [_rI, _rAes, _sD, _eD, _ca, _o, _st],
  [0, 0, 5, 5, 1, () => ReservationOffering, 0]
);
export var ReservationOffering = struct(n0, _RO, 0, [_oI, _d, _uC, _hC, _cC, _oT], [0, 1, 1, 1, 0, 0]);
export var GetReservation = op(
  n0,
  _GR,
  0,
  () => GetReservationRequest,
  () => GetReservationResponse
);
export var GetReservationOffering = op(
  n0,
  _GRO,
  0,
  () => GetReservationOfferingRequest,
  () => GetReservationOfferingResponse
);

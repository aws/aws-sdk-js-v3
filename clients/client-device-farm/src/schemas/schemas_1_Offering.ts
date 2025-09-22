// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { NotEligibleException as __NotEligibleException } from "../models/index";
import {
  _am,
  _c,
  _cC,
  _cO,
  _cos,
  _cu,
  _d,
  _e,
  _eO,
  _fr,
  _GOS,
  _GOSR,
  _GOSRe,
  _id,
  _LO,
  _LOP,
  _LOPR,
  _LOPRi,
  _LOR,
  _LORi,
  _LOT,
  _LOTR,
  _LOTRi,
  _m,
  _MA,
  _NEE,
  _nPe,
  _nT,
  _O,
  _Of,
  _of,
  _off,
  _oI,
  _OP,
  _oP,
  _OPf,
  _oPI,
  _OS,
  _oS,
  _OSM,
  _OT,
  _oT,
  _OTf,
  _oTf,
  _pl,
  _PO,
  _POR,
  _PORu,
  _q,
  _RC,
  _rC,
  _RCe,
  _RO,
  _ROR,
  _RORe,
  _t,
  _tI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetOfferingStatusRequest = struct(n0, _GOSR, 0, [_nT], [0]);
export var GetOfferingStatusResult = struct(
  n0,
  _GOSRe,
  0,
  [_cu, _nPe, _nT],
  [() => OfferingStatusMap, () => OfferingStatusMap, 0]
);
export var ListOfferingPromotionsRequest = struct(n0, _LOPR, 0, [_nT], [0]);
export var ListOfferingPromotionsResult = struct(n0, _LOPRi, 0, [_oP, _nT], [() => OfferingPromotions, 0]);
export var ListOfferingsRequest = struct(n0, _LOR, 0, [_nT], [0]);
export var ListOfferingsResult = struct(n0, _LORi, 0, [_of, _nT], [() => Offerings, 0]);
export var ListOfferingTransactionsRequest = struct(n0, _LOTR, 0, [_nT], [0]);
export var ListOfferingTransactionsResult = struct(n0, _LOTRi, 0, [_oT, _nT], [() => OfferingTransactions, 0]);
export var MonetaryAmount = struct(n0, _MA, 0, [_am, _cC], [1, 0]);
export var NotEligibleException = error(
  n0,
  _NEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __NotEligibleException
);
export var Offering = struct(n0, _O, 0, [_id, _d, _t, _pl, _rC], [0, 0, 0, 0, () => RecurringCharges]);
export var OfferingPromotion = struct(n0, _OP, 0, [_id, _d], [0, 0]);
export var OfferingStatus = struct(n0, _OS, 0, [_t, _off, _q, _eO], [0, () => Offering, 1, 4]);
export var OfferingTransaction = struct(
  n0,
  _OT,
  0,
  [_oS, _tI, _oPI, _cO, _cos],
  [() => OfferingStatus, 0, 0, 4, () => MonetaryAmount]
);
export var PurchaseOfferingRequest = struct(n0, _POR, 0, [_oI, _q, _oPI], [0, 1, 0]);
export var PurchaseOfferingResult = struct(n0, _PORu, 0, [_oTf], [() => OfferingTransaction]);
export var RecurringCharge = struct(n0, _RC, 0, [_cos, _fr], [() => MonetaryAmount, 0]);
export var RenewOfferingRequest = struct(n0, _ROR, 0, [_oI, _q], [0, 1]);
export var RenewOfferingResult = struct(n0, _RORe, 0, [_oTf], [() => OfferingTransaction]);
export var OfferingPromotions = list(n0, _OPf, 0, () => OfferingPromotion);
export var Offerings = list(n0, _Of, 0, () => Offering);
export var OfferingTransactions = list(n0, _OTf, 0, () => OfferingTransaction);
export var RecurringCharges = list(n0, _RCe, 0, () => RecurringCharge);
export var OfferingStatusMap = map(n0, _OSM, 0, 0, () => OfferingStatus);
export var GetOfferingStatus = op(
  n0,
  _GOS,
  0,
  () => GetOfferingStatusRequest,
  () => GetOfferingStatusResult
);
export var ListOfferingPromotions = op(
  n0,
  _LOP,
  0,
  () => ListOfferingPromotionsRequest,
  () => ListOfferingPromotionsResult
);
export var ListOfferings = op(
  n0,
  _LO,
  0,
  () => ListOfferingsRequest,
  () => ListOfferingsResult
);
export var ListOfferingTransactions = op(
  n0,
  _LOT,
  0,
  () => ListOfferingTransactionsRequest,
  () => ListOfferingTransactionsResult
);
export var PurchaseOffering = op(
  n0,
  _PO,
  0,
  () => PurchaseOfferingRequest,
  () => PurchaseOfferingResult
);
export var RenewOffering = op(
  n0,
  _RO,
  0,
  () => RenewOfferingRequest,
  () => RenewOfferingResult
);

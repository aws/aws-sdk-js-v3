// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ANL,
  _ANS,
  _CTre,
  _h,
  _hQ,
  _I,
  _IAn,
  _IAU,
  _ICE,
  _II,
  _IMT,
  _ISL,
  _ISn,
  _ISns,
  _LIi,
  _LIR,
  _LIRi,
  _mR,
  _MRa,
  _NT,
  _nT,
  _OCE,
  _PN,
  _PNCC,
  _PNP,
  _PNT,
  _SAPN,
  _SAPNR,
  _SAPNRe,
  _SR,
  _TA,
  n0,
} from "./schemas_0";
import { DirectoryAlias } from "./schemas_55_Instance";

/* eslint no-var: 0 */

export var AvailableNumberSummary = struct(n0, _ANS, 0, [_PN, _PNCC, _PNT], [0, 0, 0]);
export var InstanceSummary = struct(
  n0,
  _ISns,
  0,
  [_I, _A, _IMT, _IAn, _CTre, _SR, _ISn, _ICE, _OCE, _IAU],
  [0, 0, 0, [() => DirectoryAlias, 0], 4, 0, 0, 2, 2, 0]
);
export var ListInstancesRequest = struct(
  n0,
  _LIR,
  0,
  [_NT, _MRa],
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
export var ListInstancesResponse = struct(n0, _LIRi, 0, [_ISL, _NT], [[() => InstanceSummaryList, 0], 0]);
export var SearchAvailablePhoneNumbersRequest = struct(
  n0,
  _SAPNR,
  0,
  [_TA, _II, _PNCC, _PNT, _PNP, _MRa, _NT],
  [0, 0, 0, 0, 0, 1, 0]
);
export var SearchAvailablePhoneNumbersResponse = struct(n0, _SAPNRe, 0, [_NT, _ANL], [0, () => AvailableNumbersList]);
export var AvailableNumbersList = list(n0, _ANL, 0, () => AvailableNumberSummary);
export var InstanceSummaryList = list(n0, _ISL, 0, [() => InstanceSummary, 0]);
export var ListInstances = op(
  n0,
  _LIi,
  {
    [_h]: ["GET", "/instance", 200],
  },
  () => ListInstancesRequest,
  () => ListInstancesResponse
);
export var SearchAvailablePhoneNumbers = op(
  n0,
  _SAPN,
  {
    [_h]: ["POST", "/phone-number/search-available", 200],
  },
  () => SearchAvailablePhoneNumbersRequest,
  () => SearchAvailablePhoneNumbersResponse
);

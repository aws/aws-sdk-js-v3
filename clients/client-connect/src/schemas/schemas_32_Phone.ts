// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _h,
  _hQ,
  _I,
  _II,
  _LPN,
  _LPNR,
  _LPNRi,
  _mR,
  _MRa,
  _NT,
  _nT,
  _PN,
  _PNCC,
  _pNCC,
  _PNCCh,
  _PNSh,
  _PNSL,
  _PNT,
  _pNT,
  _PNTh,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListPhoneNumbersRequest = struct(
  n0,
  _LPNR,
  0,
  [_II, _PNTh, _PNCCh, _NT, _MRa],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _pNT,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _pNCC,
      },
    ],
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
export var ListPhoneNumbersResponse = struct(n0, _LPNRi, 0, [_PNSL, _NT], [() => PhoneNumberSummaryList, 0]);
export var PhoneNumberSummary = struct(n0, _PNSh, 0, [_I, _A, _PN, _PNT, _PNCC], [0, 0, 0, 0, 0]);
export var PhoneNumberCountryCodes = 64 | 0;

export var PhoneNumberSummaryList = list(n0, _PNSL, 0, () => PhoneNumberSummary);
export var PhoneNumberTypes = 64 | 0;

export var ListPhoneNumbers = op(
  n0,
  _LPN,
  {
    [_h]: ["GET", "/phone-numbers-summary/{InstanceId}", 200],
  },
  () => ListPhoneNumbersRequest,
  () => ListPhoneNumbersResponse
);

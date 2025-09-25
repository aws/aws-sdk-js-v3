// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BUPN,
  _BUPNR,
  _BUPNRa,
  _CC,
  _CN,
  _h,
  _hQ,
  _LSPNC,
  _LSPNCR,
  _LSPNCRi,
  _PNC,
  _PNCho,
  _PNCL,
  _PNE,
  _PNIh,
  _PT,
  _pt,
  _SPNT,
  _UPNRI,
  _UPNRIL,
  _UPNRIp,
  n0,
} from "./schemas_0";
import { CallingName } from "./schemas_7_Phone";
import { PhoneNumberErrorList } from "./schemas_13_Number";

/* eslint no-var: 0 */

export var BatchUpdatePhoneNumberRequest = struct(
  n0,
  _BUPNR,
  0,
  [_UPNRI],
  [[() => UpdatePhoneNumberRequestItemList, 0]]
);
export var BatchUpdatePhoneNumberResponse = struct(n0, _BUPNRa, 0, [_PNE], [() => PhoneNumberErrorList]);
export var ListSupportedPhoneNumberCountriesRequest = struct(
  n0,
  _LSPNCR,
  0,
  [_PT],
  [
    [
      0,
      {
        [_hQ]: _pt,
      },
    ],
  ]
);
export var ListSupportedPhoneNumberCountriesResponse = struct(
  n0,
  _LSPNCRi,
  0,
  [_PNC],
  [() => PhoneNumberCountriesList]
);
export var PhoneNumberCountry = struct(n0, _PNCho, 0, [_CC, _SPNT], [0, 64 | 0]);
export var UpdatePhoneNumberRequestItem = struct(n0, _UPNRIp, 0, [_PNIh, _PT, _CN], [0, 0, [() => CallingName, 0]]);
export var PhoneNumberCountriesList = list(n0, _PNCL, 0, () => PhoneNumberCountry);
export var PhoneNumberTypeList = 64 | 0;

export var UpdatePhoneNumberRequestItemList = list(n0, _UPNRIL, 0, [() => UpdatePhoneNumberRequestItem, 0]);
export var BatchUpdatePhoneNumber = op(
  n0,
  _BUPN,
  {
    [_h]: ["POST", "/phone-numbers?operation=batch-update", 200],
  },
  () => BatchUpdatePhoneNumberRequest,
  () => BatchUpdatePhoneNumberResponse
);
export var ListSupportedPhoneNumberCountries = op(
  n0,
  _LSPNC,
  {
    [_h]: ["GET", "/phone-number-countries", 200],
  },
  () => ListSupportedPhoneNumberCountriesRequest,
  () => ListSupportedPhoneNumberCountriesResponse
);

// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { AccessDeniedByMetaException as __AccessDeniedByMetaException } from "../models/index";
import {
  _a,
  _ADBME,
  _ar,
  _c,
  _dLR,
  _dPN,
  _dPNN,
  _DWAMM,
  _DWAMMI,
  _DWAMMO,
  _e,
  _eD,
  _GLWABA,
  _GLWABAI,
  _GLWABAO,
  _GLWABAPN,
  _GLWABAPNI,
  _GLWABAPNO,
  _hE,
  _hQ,
  _ht,
  _i,
  _lD,
  _LWABA,
  _lWABAI,
  _m,
  _mI,
  _mPNI,
  _oPNI,
  _pN,
  _pNh,
  _pNI,
  _qR,
  _rS,
  _s,
  _WAPND,
  _WAPNS,
  _WAPNSL,
  _wI,
  _wN,
  n0,
} from "./schemas_0";
import { WhatsAppBusinessAccountEventDestinations } from "./schemas_5_App";

/* eslint no-var: 0 */

export var AccessDeniedByMetaException = error(
  n0,
  _ADBME,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedByMetaException
);
export var DeleteWhatsAppMessageMediaInput = struct(
  n0,
  _DWAMMI,
  0,
  [_mI, _oPNI],
  [
    [
      0,
      {
        [_hQ]: _mI,
      },
    ],
    [
      0,
      {
        [_hQ]: _oPNI,
      },
    ],
  ]
);
export var DeleteWhatsAppMessageMediaOutput = struct(n0, _DWAMMO, 0, [_s], [2]);
export var GetLinkedWhatsAppBusinessAccountInput = struct(
  n0,
  _GLWABAI,
  0,
  [_i],
  [
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
  ]
);
export var GetLinkedWhatsAppBusinessAccountOutput = struct(
  n0,
  _GLWABAO,
  0,
  [_a],
  [() => LinkedWhatsAppBusinessAccount]
);
export var GetLinkedWhatsAppBusinessAccountPhoneNumberInput = struct(
  n0,
  _GLWABAPNI,
  0,
  [_i],
  [
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
  ]
);
export var GetLinkedWhatsAppBusinessAccountPhoneNumberOutput = struct(
  n0,
  _GLWABAPNO,
  0,
  [_pN, _lWABAI],
  [() => WhatsAppPhoneNumberDetail, 0]
);
export var LinkedWhatsAppBusinessAccount = struct(
  n0,
  _LWABA,
  0,
  [_ar, _i, _wI, _rS, _lD, _wN, _eD, _pNh],
  [0, 0, 0, 0, 4, 0, () => WhatsAppBusinessAccountEventDestinations, () => WhatsAppPhoneNumberSummaryList]
);
export var WhatsAppPhoneNumberDetail = struct(
  n0,
  _WAPND,
  0,
  [_ar, _pN, _pNI, _mPNI, _dPNN, _dPN, _qR, _dLR],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
export var WhatsAppPhoneNumberSummary = struct(
  n0,
  _WAPNS,
  0,
  [_ar, _pN, _pNI, _mPNI, _dPNN, _dPN, _qR, _dLR],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
export var WhatsAppPhoneNumberSummaryList = list(n0, _WAPNSL, 0, () => WhatsAppPhoneNumberSummary);
export var DeleteWhatsAppMessageMedia = op(
  n0,
  _DWAMM,
  {
    [_ht]: ["DELETE", "/v1/whatsapp/media", 200],
  },
  () => DeleteWhatsAppMessageMediaInput,
  () => DeleteWhatsAppMessageMediaOutput
);
export var GetLinkedWhatsAppBusinessAccount = op(
  n0,
  _GLWABA,
  {
    [_ht]: ["GET", "/v1/whatsapp/waba/details", 200],
  },
  () => GetLinkedWhatsAppBusinessAccountInput,
  () => GetLinkedWhatsAppBusinessAccountOutput
);
export var GetLinkedWhatsAppBusinessAccountPhoneNumber = op(
  n0,
  _GLWABAPN,
  {
    [_ht]: ["GET", "/v1/whatsapp/waba/phone/details", 200],
  },
  () => GetLinkedWhatsAppBusinessAccountPhoneNumberInput,
  () => GetLinkedWhatsAppBusinessAccountPhoneNumberOutput
);

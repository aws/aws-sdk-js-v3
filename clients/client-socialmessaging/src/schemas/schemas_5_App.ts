// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _eD,
  _eDA,
  _hQ,
  _ht,
  _i,
  _lA,
  _lD,
  _LLWABA,
  _LLWABAI,
  _LLWABAO,
  _LWABAS,
  _LWABASL,
  _mR,
  _nT,
  _PWABAED,
  _PWABAEDI,
  _PWABAEDO,
  _rAo,
  _rS,
  _WABAED,
  _WABAEDh,
  _wI,
  _wN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var LinkedWhatsAppBusinessAccountSummary = struct(
  n0,
  _LWABAS,
  0,
  [_ar, _i, _wI, _rS, _lD, _wN, _eD],
  [0, 0, 0, 0, 4, 0, () => WhatsAppBusinessAccountEventDestinations]
);
export var ListLinkedWhatsAppBusinessAccountsInput = struct(
  n0,
  _LLWABAI,
  0,
  [_nT, _mR],
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
export var ListLinkedWhatsAppBusinessAccountsOutput = struct(
  n0,
  _LLWABAO,
  0,
  [_lA, _nT],
  [() => LinkedWhatsAppBusinessAccountSummaryList, 0]
);
export var PutWhatsAppBusinessAccountEventDestinationsInput = struct(
  n0,
  _PWABAEDI,
  0,
  [_i, _eD],
  [0, () => WhatsAppBusinessAccountEventDestinations]
);
export var PutWhatsAppBusinessAccountEventDestinationsOutput = struct(n0, _PWABAEDO, 0, [], []);
export var WhatsAppBusinessAccountEventDestination = struct(n0, _WABAED, 0, [_eDA, _rAo], [0, 0]);
export var Unit = "unit" as const;

export var LinkedWhatsAppBusinessAccountSummaryList = list(n0, _LWABASL, 0, () => LinkedWhatsAppBusinessAccountSummary);
export var WhatsAppBusinessAccountEventDestinations = list(
  n0,
  _WABAEDh,
  0,
  () => WhatsAppBusinessAccountEventDestination
);
export var ListLinkedWhatsAppBusinessAccounts = op(
  n0,
  _LLWABA,
  {
    [_ht]: ["GET", "/v1/whatsapp/waba/list", 200],
  },
  () => ListLinkedWhatsAppBusinessAccountsInput,
  () => ListLinkedWhatsAppBusinessAccountsOutput
);
export var PutWhatsAppBusinessAccountEventDestinations = op(
  n0,
  _PWABAED,
  {
    [_ht]: ["PUT", "/v1/whatsapp/waba/eventdestinations", 200],
  },
  () => PutWhatsAppBusinessAccountEventDestinationsInput,
  () => PutWhatsAppBusinessAccountEventDestinationsOutput
);

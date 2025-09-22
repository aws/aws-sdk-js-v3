// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CLN, _CLo, _CLon, _h, _hQ, _LCL, _LCLR, _LCLRi, _LOCL, _LUT, _NT, _PS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ContactList = struct(n0, _CLo, 0, [_CLN, _LUT], [0, 4]);
export var ListContactListsRequest = struct(
  n0,
  _LCLR,
  0,
  [_PS, _NT],
  [
    [
      1,
      {
        [_hQ]: _PS,
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
export var ListContactListsResponse = struct(n0, _LCLRi, 0, [_CLon, _NT], [() => ListOfContactLists, 0]);
export var ListOfContactLists = list(n0, _LOCL, 0, () => ContactList);
export var ListContactLists = op(
  n0,
  _LCL,
  {
    [_h]: ["GET", "/v2/email/contact-lists", 200],
  },
  () => ListContactListsRequest,
  () => ListContactListsResponse
);

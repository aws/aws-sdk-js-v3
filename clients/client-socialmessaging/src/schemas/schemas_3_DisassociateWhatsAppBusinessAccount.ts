// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWABA, _DWABAI, _DWABAO, _hQ, _ht, _i, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateWhatsAppBusinessAccountInput = struct(
  n0,
  _DWABAI,
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
export var DisassociateWhatsAppBusinessAccountOutput = struct(n0, _DWABAO, 0, [], []);
export var DisassociateWhatsAppBusinessAccount = op(
  n0,
  _DWABA,
  {
    [_ht]: ["DELETE", "/v1/whatsapp/waba/disassociate", 200],
  },
  () => DisassociateWhatsAppBusinessAccountInput,
  () => DisassociateWhatsAppBusinessAccountOutput
);

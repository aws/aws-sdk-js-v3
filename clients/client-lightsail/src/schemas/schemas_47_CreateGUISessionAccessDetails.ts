// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _CGUISAD,
  _CGUISADR,
  _CGUISADRr,
  _fR,
  _ht,
  _iPsr,
  _n,
  _pC,
  _rN,
  _S,
  _s,
  _Se,
  _se,
  _SNES,
  _ur,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveNonEmptyString = sim(n0, _SNES, 0, 8);
export var CreateGUISessionAccessDetailsRequest = struct(n0, _CGUISADR, 0, [_rN], [0]);
export var CreateGUISessionAccessDetailsResult = struct(
  n0,
  _CGUISADRr,
  0,
  [_rN, _s, _pC, _fR, _se],
  [0, 0, 1, 0, [() => Sessions, 0]]
);
export var Session = struct(n0, _S, 0, [_n, _ur, _iPsr], [0, [() => SensitiveNonEmptyString, 0], 2]);
export var Sessions = list(n0, _Se, 0, [() => Session, 0]);
export var CreateGUISessionAccessDetails = op(
  n0,
  _CGUISAD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/create-gui-session-access-details", 200],
  },
  () => CreateGUISessionAccessDetailsRequest,
  () => CreateGUISessionAccessDetailsResult
);

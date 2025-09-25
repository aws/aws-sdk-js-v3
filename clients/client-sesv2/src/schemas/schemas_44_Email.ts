// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  MailFromDomainNotVerifiedException as __MailFromDomainNotVerifiedException,
  MessageRejected as __MessageRejected,
  SendingPausedException as __SendingPausedException,
} from "../models/index";
import { _c, _e, _hE, _m, _MFDNVE, _MRe, _SPE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var MailFromDomainNotVerifiedException = error(
  n0,
  _MFDNVE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __MailFromDomainNotVerifiedException
);
export var MessageRejected = error(
  n0,
  _MRe,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __MessageRejected
);
export var SendingPausedException = error(
  n0,
  _SPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __SendingPausedException
);

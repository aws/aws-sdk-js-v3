// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { InvalidCiphertextException as __InvalidCiphertextException } from "../models/index";
import { _aQE, _c, _e, _hE, _ICE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidCiphertextException = error(
  n0,
  _ICE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidCiphertext`, 400],
  },
  [_m],
  [0],

  __InvalidCiphertextException
);

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  KMSAccessDeniedFault as __KMSAccessDeniedFault,
  KMSDisabledFault as __KMSDisabledFault,
  KMSInvalidStateFault as __KMSInvalidStateFault,
  KMSNotFoundFault as __KMSNotFoundFault,
} from "../models/index";
import { _c, _e, _KMSADF, _KMSDF, _KMSISF, _KMSNFF, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var KMSAccessDeniedFault = error(
  n0,
  _KMSADF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __KMSAccessDeniedFault
);
export var KMSDisabledFault = error(
  n0,
  _KMSDF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __KMSDisabledFault
);
export var KMSInvalidStateFault = error(
  n0,
  _KMSISF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __KMSInvalidStateFault
);
export var KMSNotFoundFault = error(
  n0,
  _KMSNFF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __KMSNotFoundFault
);

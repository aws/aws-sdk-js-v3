// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  AcceleratorNotDisabledException as __AcceleratorNotDisabledException,
  AssociatedListenerFoundException as __AssociatedListenerFoundException,
} from "../models/index";
import { _AA, _ALFE, _ANDE, _c, _DAel, _DAR, _DCRA, _DCRAR, _e, _hE, _M, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AcceleratorNotDisabledException = error(
  n0,
  _ANDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __AcceleratorNotDisabledException
);
export var AssociatedListenerFoundException = error(
  n0,
  _ALFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __AssociatedListenerFoundException
);
export var DeleteAcceleratorRequest = struct(n0, _DAR, 0, [_AA], [0]);
export var DeleteCustomRoutingAcceleratorRequest = struct(n0, _DCRAR, 0, [_AA], [0]);
export var DeleteAccelerator = op(
  n0,
  _DAel,
  0,
  () => DeleteAcceleratorRequest,
  () => Unit
);
export var DeleteCustomRoutingAccelerator = op(
  n0,
  _DCRA,
  0,
  () => DeleteCustomRoutingAcceleratorRequest,
  () => Unit
);

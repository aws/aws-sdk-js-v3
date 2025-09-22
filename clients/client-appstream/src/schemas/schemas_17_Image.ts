// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { IncompatibleImageException as __IncompatibleImageException } from "../models/index";
import { _AF, _AFR, _AFRs, _c, _er, _FN, _hE, _IIE, _M, _SN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateFleetRequest = struct(n0, _AFR, 0, [_FN, _SN], [0, 0]);
export var AssociateFleetResult = struct(n0, _AFRs, 0, [], []);
export var IncompatibleImageException = error(
  n0,
  _IIE,
  {
    [_er]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __IncompatibleImageException
);
export var AssociateFleet = op(
  n0,
  _AF,
  0,
  () => AssociateFleetRequest,
  () => AssociateFleetResult
);

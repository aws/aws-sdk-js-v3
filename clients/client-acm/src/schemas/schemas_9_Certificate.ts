// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidDomainValidationOptionsException as __InvalidDomainValidationOptionsException } from "../models/index";
import { _c, _CA, _D, _e, _IDVOE, _m, _RVE, _RVER, _VD, n0 } from "./schemas_0";
import { Unit } from "./schemas_3_Certificate";

/* eslint no-var: 0 */

export var InvalidDomainValidationOptionsException = error(
  n0,
  _IDVOE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidDomainValidationOptionsException
);
export var ResendValidationEmailRequest = struct(n0, _RVER, 0, [_CA, _D, _VD], [0, 0, 0]);
export var ResendValidationEmail = op(
  n0,
  _RVE,
  0,
  () => ResendValidationEmailRequest,
  () => Unit
);

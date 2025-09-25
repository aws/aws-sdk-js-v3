// smithy-typescript generated code
import { error, op } from "@smithy/core/schema";

import { OrganizationNotEmptyException as __OrganizationNotEmptyException } from "../models/index";
import { _c, _DO, _e, _hE, _M, _ONEE, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var OrganizationNotEmptyException = error(
  n0,
  _ONEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __OrganizationNotEmptyException
);
export var DeleteOrganization = op(
  n0,
  _DO,
  0,
  () => Unit,
  () => Unit
);

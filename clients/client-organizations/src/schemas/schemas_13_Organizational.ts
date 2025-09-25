// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DuplicateOrganizationalUnitException as __DuplicateOrganizationalUnitException,
  OrganizationalUnitNotEmptyException as __OrganizationalUnitNotEmptyException,
  OrganizationalUnitNotFoundException as __OrganizationalUnitNotFoundException,
} from "../models/index";
import {
  _Ar,
  _c,
  _DOU,
  _DOUE,
  _DOUe,
  _DOUR,
  _DOURe,
  _DOURes,
  _e,
  _hE,
  _I,
  _M,
  _N,
  _OU,
  _OUI,
  _OUNEE,
  _OUNFE,
  _UOU,
  _UOUR,
  _UOURp,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteOrganizationalUnitRequest = struct(n0, _DOUR, 0, [_OUI], [0]);
export var DescribeOrganizationalUnitRequest = struct(n0, _DOURe, 0, [_OUI], [0]);
export var DescribeOrganizationalUnitResponse = struct(n0, _DOURes, 0, [_OU], [() => OrganizationalUnit]);
export var DuplicateOrganizationalUnitException = error(
  n0,
  _DOUE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __DuplicateOrganizationalUnitException
);
export var OrganizationalUnit = struct(n0, _OU, 0, [_I, _Ar, _N], [0, 0, 0]);
export var OrganizationalUnitNotEmptyException = error(
  n0,
  _OUNEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __OrganizationalUnitNotEmptyException
);
export var OrganizationalUnitNotFoundException = error(
  n0,
  _OUNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __OrganizationalUnitNotFoundException
);
export var UpdateOrganizationalUnitRequest = struct(n0, _UOUR, 0, [_OUI, _N], [0, 0]);
export var UpdateOrganizationalUnitResponse = struct(n0, _UOURp, 0, [_OU], [() => OrganizationalUnit]);
export var DeleteOrganizationalUnit = op(
  n0,
  _DOU,
  0,
  () => DeleteOrganizationalUnitRequest,
  () => Unit
);
export var DescribeOrganizationalUnit = op(
  n0,
  _DOUe,
  0,
  () => DescribeOrganizationalUnitRequest,
  () => DescribeOrganizationalUnitResponse
);
export var UpdateOrganizationalUnit = op(
  n0,
  _UOU,
  0,
  () => UpdateOrganizationalUnitRequest,
  () => UpdateOrganizationalUnitResponse
);

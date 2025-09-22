// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  InvalidResourceStateException as __InvalidResourceStateException,
  LicenseUsageException as __LicenseUsageException,
} from "../models/index";
import {
  _ALS,
  _aQE,
  _B,
  _c,
  _CE,
  _CIL,
  _CILR,
  _CILRh,
  _e,
  _hE,
  _IRSE,
  _LCT,
  _LUE,
  _M,
  _RA,
  _RLS,
  _ULSFR,
  _ULSFRR,
  _ULSFRRp,
  n0,
} from "./schemas_0";
import { LicenseSpecifications } from "./schemas_17_Specifications";

/* eslint no-var: 0 */

export var CheckInLicenseRequest = struct(n0, _CILR, 0, [_LCT, _B], [0, 0]);
export var CheckInLicenseResponse = struct(n0, _CILRh, 0, [], []);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`ConflictException`, 409],
  },
  [_M],
  [0],

  __ConflictException
);
export var InvalidResourceStateException = error(
  n0,
  _IRSE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidResourceState`, 400],
  },
  [_M],
  [0],

  __InvalidResourceStateException
);
export var LicenseUsageException = error(
  n0,
  _LUE,
  {
    [_e]: _c,
    [_hE]: 412,
    [_aQE]: [`LicenseUsageFailure`, 412],
  },
  [_M],
  [0],

  __LicenseUsageException
);
export var UpdateLicenseSpecificationsForResourceRequest = struct(
  n0,
  _ULSFRR,
  0,
  [_RA, _ALS, _RLS],
  [0, () => LicenseSpecifications, () => LicenseSpecifications]
);
export var UpdateLicenseSpecificationsForResourceResponse = struct(n0, _ULSFRRp, 0, [], []);
export var CheckInLicense = op(
  n0,
  _CIL,
  0,
  () => CheckInLicenseRequest,
  () => CheckInLicenseResponse
);
export var UpdateLicenseSpecificationsForResource = op(
  n0,
  _ULSFR,
  0,
  () => UpdateLicenseSpecificationsForResourceRequest,
  () => UpdateLicenseSpecificationsForResourceResponse
);

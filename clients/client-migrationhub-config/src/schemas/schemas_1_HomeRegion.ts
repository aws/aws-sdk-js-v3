// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  DryRunOperation as __DryRunOperation,
  InternalServerError as __InternalServerError,
  InvalidInputException as __InvalidInputException,
  ServiceUnavailableException as __ServiceUnavailableException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _ADE,
  _c,
  _CHRC,
  _CHRCR,
  _CHRCRr,
  _CI,
  _DHRC,
  _DHRCe,
  _DHRCR,
  _DHRCRe,
  _DHRCRes,
  _DHRCResc,
  _DR,
  _DRO,
  _e,
  _GHR,
  _GHRR,
  _GHRRe,
  _hE,
  _hH,
  _HR,
  _HRC,
  _HRCo,
  _I,
  _IIE,
  _ISE,
  _M,
  _MR,
  _NT,
  _RA,
  _RAS,
  _RT,
  _s,
  _SUE,
  _T,
  _TE,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var CreateHomeRegionControlRequest = struct(n0, _CHRCR, 0, [_HR, _T, _DR], [0, () => Target, 2]);
export var CreateHomeRegionControlResult = struct(n0, _CHRCRr, 0, [_HRC], [() => HomeRegionControl]);
export var DeleteHomeRegionControlRequest = struct(n0, _DHRCR, 0, [_CI], [0]);
export var DeleteHomeRegionControlResult = struct(n0, _DHRCRe, 0, [], []);
export var DescribeHomeRegionControlsRequest = struct(
  n0,
  _DHRCRes,
  0,
  [_CI, _HR, _T, _MR, _NT],
  [0, 0, () => Target, 1, 0]
);
export var DescribeHomeRegionControlsResult = struct(n0, _DHRCResc, 0, [_HRCo, _NT], [() => HomeRegionControls, 0]);
export var DryRunOperation = error(
  n0,
  _DRO,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __DryRunOperation
);
export var GetHomeRegionRequest = struct(n0, _GHRR, 0, [], []);
export var GetHomeRegionResult = struct(n0, _GHRRe, 0, [_HR], [0]);
export var HomeRegionControl = struct(n0, _HRC, 0, [_CI, _HR, _T, _RT], [0, 0, () => Target, 4]);
export var InternalServerError = error(
  n0,
  _ISE,
  {
    [_e]: _s,
  },
  [_M],
  [0],

  __InternalServerError
);
export var InvalidInputException = error(
  n0,
  _IIE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidInputException
);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _s,
  },
  [_M],
  [0],

  __ServiceUnavailableException
);
export var Target = struct(n0, _T, 0, [_Ty, _I], [0, 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M, _RAS],
  [
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __ThrottlingException
);
export var Unit = "unit" as const;

export var HomeRegionControls = list(n0, _HRCo, 0, () => HomeRegionControl);
export var CreateHomeRegionControl = op(
  n0,
  _CHRC,
  0,
  () => CreateHomeRegionControlRequest,
  () => CreateHomeRegionControlResult
);
export var DeleteHomeRegionControl = op(
  n0,
  _DHRC,
  0,
  () => DeleteHomeRegionControlRequest,
  () => DeleteHomeRegionControlResult
);
export var DescribeHomeRegionControls = op(
  n0,
  _DHRCe,
  0,
  () => DescribeHomeRegionControlsRequest,
  () => DescribeHomeRegionControlsResult
);
export var GetHomeRegion = op(
  n0,
  _GHR,
  0,
  () => GetHomeRegionRequest,
  () => GetHomeRegionResult
);

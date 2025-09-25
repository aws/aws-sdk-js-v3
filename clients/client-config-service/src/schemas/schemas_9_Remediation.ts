// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { NoSuchRemediationExceptionException as __NoSuchRemediationExceptionException } from "../models/index";
import {
  _Ar,
  _Au,
  _CBS,
  _CERP,
  _cl,
  _CRN,
  _CRNo,
  _DRCes,
  _DRCRes,
  _DRCResc,
  _DRE,
  _DREe,
  _DRER,
  _DRERe,
  _DRERes,
  _DREResc,
  _e,
  _ECx,
  _EP,
  _ET,
  _FB,
  _FDREB,
  _FDREBa,
  _FI,
  _FM,
  _L,
  _m,
  _MAA,
  _Me,
  _NSREE,
  _NT,
  _P,
  _RAS,
  _RC,
  _RCem,
  _RE,
  _REem,
  _RERK,
  _RERKe,
  _RI,
  _RK,
  _RP,
  _RPV,
  _RT,
  _RV,
  _SC,
  _SV,
  _TI,
  _TT,
  _TV,
  _V,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRemediationExceptionsRequest = struct(
  n0,
  _DRER,
  0,
  [_CRN, _RK],
  [0, () => RemediationExceptionResourceKeys]
);
export var DeleteRemediationExceptionsResponse = struct(
  n0,
  _DRERe,
  0,
  [_FB],
  [() => FailedDeleteRemediationExceptionsBatches]
);
export var DescribeRemediationConfigurationsRequest = struct(n0, _DRCRes, 0, [_CRNo], [64 | 0]);
export var DescribeRemediationConfigurationsResponse = struct(
  n0,
  _DRCResc,
  0,
  [_RC],
  [() => RemediationConfigurations]
);
export var DescribeRemediationExceptionsRequest = struct(
  n0,
  _DRERes,
  0,
  [_CRN, _RK, _L, _NT],
  [0, () => RemediationExceptionResourceKeys, 1, 0]
);
export var DescribeRemediationExceptionsResponse = struct(
  n0,
  _DREResc,
  0,
  [_RE, _NT],
  [() => RemediationExceptions, 0]
);
export var ExecutionControls = struct(n0, _ECx, 0, [_SC], [() => SsmControls]);
export var FailedDeleteRemediationExceptionsBatch = struct(
  n0,
  _FDREB,
  0,
  [_FM, _FI],
  [0, () => RemediationExceptionResourceKeys]
);
export var NoSuchRemediationExceptionException = error(
  n0,
  _NSREE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __NoSuchRemediationExceptionException
);
export var RemediationConfiguration = struct(
  n0,
  _RCem,
  0,
  [_CRN, _TT, _TI, _TV, _P, _RT, _Au, _ECx, _MAA, _RAS, _Ar, _CBS],
  [0, 0, 0, 0, () => RemediationParameters, 0, 2, () => ExecutionControls, 1, 1, 0, 0]
);
export var RemediationException = struct(n0, _REem, 0, [_CRN, _RT, _RI, _Me, _ET], [0, 0, 0, 0, 4]);
export var RemediationExceptionResourceKey = struct(n0, _RERK, 0, [_RT, _RI], [0, 0]);
export var RemediationParameterValue = struct(n0, _RPV, 0, [_RV, _SV], [() => ResourceValue, () => StaticValue]);
export var ResourceValue = struct(n0, _RV, 0, [_V], [0]);
export var SsmControls = struct(n0, _SC, 0, [_CERP, _EP], [1, 1]);
export var StaticValue = struct(n0, _SV, 0, [_Va], [64 | 0]);
export var FailedDeleteRemediationExceptionsBatches = list(
  n0,
  _FDREBa,
  0,
  () => FailedDeleteRemediationExceptionsBatch
);
export var RemediationConfigurations = list(n0, _RC, 0, () => RemediationConfiguration);
export var RemediationExceptionResourceKeys = list(n0, _RERKe, 0, () => RemediationExceptionResourceKey);
export var RemediationExceptions = list(n0, _RE, 0, () => RemediationException);
export var StaticParameterValues = 64 | 0;

export var RemediationParameters = map(n0, _RP, 0, 0, () => RemediationParameterValue);
export var DeleteRemediationExceptions = op(
  n0,
  _DRE,
  0,
  () => DeleteRemediationExceptionsRequest,
  () => DeleteRemediationExceptionsResponse
);
export var DescribeRemediationConfigurations = op(
  n0,
  _DRCes,
  0,
  () => DescribeRemediationConfigurationsRequest,
  () => DescribeRemediationConfigurationsResponse
);
export var DescribeRemediationExceptions = op(
  n0,
  _DREe,
  0,
  () => DescribeRemediationExceptionsRequest,
  () => DescribeRemediationExceptionsResponse
);

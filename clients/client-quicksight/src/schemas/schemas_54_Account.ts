// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _ADN,
  _AG,
  _AGu,
  _AI,
  _AM,
  _AN,
  _aN,
  _APG,
  _APGu,
  _AS,
  _ASS,
  _AT,
  _CAS,
  _CASR,
  _CASRr,
  _CNon,
  _DASe,
  _DASes,
  _DASRes,
  _DASResc,
  _DASRescr,
  _DASRescri,
  _DIi,
  _DN,
  _dT,
  _EA,
  _Ed,
  _FNi,
  _h,
  _IAMICIA,
  _IAMU,
  _LN,
  _NE,
  _PSE,
  _Re,
  _RG,
  _RI,
  _RPG,
  _SRi,
  _St,
  _TPE,
  _uLN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountInfo = struct(n0, _AI, 0, [_AN, _Ed, _NE, _AT, _ASS, _IAMICIA], [0, 0, 0, 0, 0, 0]);
export var AccountSettings = struct(n0, _AS, 0, [_AN, _Ed, _DN, _NE, _PSE, _TPE], [0, 0, 0, 0, 2, 2]);
export var CreateAccountSubscriptionRequest = struct(
  n0,
  _CASR,
  0,
  [_Ed, _AM, _AAI, _AN, _NE, _ADN, _Re, _DIi, _AG, _AGu, _RG, _APG, _APGu, _RPG, _FNi, _LN, _EA, _CNon, _IAMICIA],
  [0, 0, [0, 1], 0, 0, 0, 0, 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 0, 0, 0, 0, 0]
);
export var CreateAccountSubscriptionResponse = struct(
  n0,
  _CASRr,
  0,
  [_SRi, _St, _RI],
  [() => SignupResponse, [1, 32], 0]
);
export var DescribeAccountSettingsRequest = struct(n0, _DASRes, 0, [_AAI], [[0, 1]]);
export var DescribeAccountSettingsResponse = struct(
  n0,
  _DASResc,
  0,
  [_AS, _RI, _St],
  [() => AccountSettings, 0, [1, 32]]
);
export var DescribeAccountSubscriptionRequest = struct(n0, _DASRescr, 0, [_AAI], [[0, 1]]);
export var DescribeAccountSubscriptionResponse = struct(
  n0,
  _DASRescri,
  0,
  [_AI, _St, _RI],
  [() => AccountInfo, [1, 32], 0]
);
export var SignupResponse = struct(n0, _SRi, 0, [_IAMU, _uLN, _aN, _dT], [2, 0, 0, 0]);
export var CreateAccountSubscription = op(
  n0,
  _CAS,
  {
    [_h]: ["POST", "/account/{AwsAccountId}", 200],
  },
  () => CreateAccountSubscriptionRequest,
  () => CreateAccountSubscriptionResponse
);
export var DescribeAccountSettings = op(
  n0,
  _DASe,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/settings", 200],
  },
  () => DescribeAccountSettingsRequest,
  () => DescribeAccountSettingsResponse
);
export var DescribeAccountSubscription = op(
  n0,
  _DASes,
  {
    [_h]: ["GET", "/account/{AwsAccountId}", 200],
  },
  () => DescribeAccountSubscriptionRequest,
  () => DescribeAccountSubscriptionResponse
);

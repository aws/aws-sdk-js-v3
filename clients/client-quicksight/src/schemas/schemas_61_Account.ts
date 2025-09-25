// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _AC,
  _Ar,
  _CAC,
  _CACR,
  _CACRr,
  _DACe,
  _DACRes,
  _DACResc,
  _DECT,
  _DT,
  _h,
  _hQ,
  _n,
  _Na,
  _r,
  _Res,
  _RI,
  _St,
  _Ta,
  _UAC,
  _UACR,
  _UACRp,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountCustomization = struct(n0, _AC, 0, [_DT, _DECT], [0, 0]);
export var CreateAccountCustomizationRequest = struct(
  n0,
  _CACR,
  0,
  [_AAI, _Na, _AC, _Ta],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    () => AccountCustomization,
    () => TagList,
  ]
);
export var CreateAccountCustomizationResponse = struct(
  n0,
  _CACRr,
  0,
  [_Ar, _AAI, _Na, _AC, _RI, _St],
  [0, 0, 0, () => AccountCustomization, 0, [1, 32]]
);
export var DescribeAccountCustomizationRequest = struct(
  n0,
  _DACRes,
  0,
  [_AAI, _Na, _Res],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      2,
      {
        [_hQ]: _r,
      },
    ],
  ]
);
export var DescribeAccountCustomizationResponse = struct(
  n0,
  _DACResc,
  0,
  [_Ar, _AAI, _Na, _AC, _RI, _St],
  [0, 0, 0, () => AccountCustomization, 0, [1, 32]]
);
export var UpdateAccountCustomizationRequest = struct(
  n0,
  _UACR,
  0,
  [_AAI, _Na, _AC],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    () => AccountCustomization,
  ]
);
export var UpdateAccountCustomizationResponse = struct(
  n0,
  _UACRp,
  0,
  [_Ar, _AAI, _Na, _AC, _RI, _St],
  [0, 0, 0, () => AccountCustomization, 0, [1, 32]]
);
export var CreateAccountCustomization = op(
  n0,
  _CAC,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/customizations", 200],
  },
  () => CreateAccountCustomizationRequest,
  () => CreateAccountCustomizationResponse
);
export var DescribeAccountCustomization = op(
  n0,
  _DACe,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/customizations", 200],
  },
  () => DescribeAccountCustomizationRequest,
  () => DescribeAccountCustomizationResponse
);
export var UpdateAccountCustomization = op(
  n0,
  _UAC,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/customizations", 200],
  },
  () => UpdateAccountCustomizationRequest,
  () => UpdateAccountCustomizationResponse
);

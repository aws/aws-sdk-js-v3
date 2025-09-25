// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _AACHGI,
  _AACT,
  _App,
  _CSP,
  _CSPR,
  _CSPRr,
  _D,
  _DSPe,
  _DSPRe,
  _DSPRes,
  _h,
  _HRR,
  _I,
  _II,
  _LMR,
  _LMT,
  _ORI,
  _Pe,
  _SP,
  _SPA,
  _SPI,
  _SPN,
  _Ta,
  _TRR,
  _USP,
  _USPR,
  n0,
  Unit,
} from "./schemas_0";
import { Applications } from "./schemas_80_SecurityProfile";

/* eslint no-var: 0 */

export var CreateSecurityProfileRequest = struct(
  n0,
  _CSPR,
  0,
  [_SPN, _D, _Pe, _II, _Ta, _AACT, _TRR, _App, _HRR, _AACHGI],
  [0, 0, 64 | 0, [0, 1], 128 | 0, 128 | 0, 64 | 0, () => Applications, 64 | 0, 0]
);
export var CreateSecurityProfileResponse = struct(n0, _CSPRr, 0, [_SPI, _SPA], [0, 0]);
export var DescribeSecurityProfileRequest = struct(
  n0,
  _DSPRe,
  0,
  [_SPI, _II],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeSecurityProfileResponse = struct(n0, _DSPRes, 0, [_SP], [() => SecurityProfile]);
export var SecurityProfile = struct(
  n0,
  _SP,
  0,
  [_I, _ORI, _A, _SPN, _D, _Ta, _AACT, _TRR, _LMT, _LMR, _HRR, _AACHGI],
  [0, 0, 0, 0, 0, 128 | 0, 128 | 0, 64 | 0, 4, 0, 64 | 0, 0]
);
export var UpdateSecurityProfileRequest = struct(
  n0,
  _USPR,
  0,
  [_D, _Pe, _SPI, _II, _AACT, _TRR, _App, _HRR, _AACHGI],
  [0, 64 | 0, [0, 1], [0, 1], 128 | 0, 64 | 0, () => Applications, 64 | 0, 0]
);
export var HierarchyRestrictedResourceList = 64 | 0;

export var TagRestrictedResourceList = 64 | 0;

export var AllowedAccessControlTags = 128 | 0;

export var CreateSecurityProfile = op(
  n0,
  _CSP,
  {
    [_h]: ["PUT", "/security-profiles/{InstanceId}", 200],
  },
  () => CreateSecurityProfileRequest,
  () => CreateSecurityProfileResponse
);
export var DescribeSecurityProfile = op(
  n0,
  _DSPe,
  {
    [_h]: ["GET", "/security-profiles/{InstanceId}/{SecurityProfileId}", 200],
  },
  () => DescribeSecurityProfileRequest,
  () => DescribeSecurityProfileResponse
);
export var UpdateSecurityProfile = op(
  n0,
  _USP,
  {
    [_h]: ["POST", "/security-profiles/{InstanceId}/{SecurityProfileId}", 200],
  },
  () => UpdateSecurityProfileRequest,
  () => Unit
);

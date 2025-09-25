// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _aAI,
  _aI,
  _AIl,
  _ASw,
  _aSw,
  _CAU,
  _CAUo,
  _CAUS,
  _cAUS,
  _CCC,
  _CCCR,
  _CCCRr,
  _CCo,
  _cCoi,
  _Ci,
  _ci,
  _CIop,
  _cIop,
  _CPI,
  _cPI,
  _DCC,
  _DCCR,
  _DCCRe,
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _GCPU,
  _GCPUR,
  _GCPURe,
  _it,
  _LGRTI,
  _lGRTI,
  _MR,
  _NTe,
  _nTe,
  _PIo,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CoipAddressUsage = struct(
  n0,
  _CAU,
  0,
  [_AIl, _AAI, _ASw, _CIop],
  [
    [
      0,
      {
        [_eQN]: `AllocationId`,
        [_xN]: _aI,
      },
    ],
    [
      0,
      {
        [_eQN]: `AwsAccountId`,
        [_xN]: _aAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `AwsService`,
        [_xN]: _aSw,
      },
    ],
    [
      0,
      {
        [_eQN]: `CoIp`,
        [_xN]: _cIop,
      },
    ],
  ]
);
export var CoipCidr = struct(
  n0,
  _CCo,
  0,
  [_Ci, _CPI, _LGRTI],
  [
    [
      0,
      {
        [_eQN]: `Cidr`,
        [_xN]: _ci,
      },
    ],
    [
      0,
      {
        [_eQN]: `CoipPoolId`,
        [_xN]: _cPI,
      },
    ],
    [
      0,
      {
        [_eQN]: `LocalGatewayRouteTableId`,
        [_xN]: _lGRTI,
      },
    ],
  ]
);
export var CreateCoipCidrRequest = struct(n0, _CCCR, 0, [_Ci, _CPI, _DR], [0, 0, 2]);
export var CreateCoipCidrResult = struct(
  n0,
  _CCCRr,
  0,
  [_CCo],
  [
    [
      () => CoipCidr,
      {
        [_eQN]: `CoipCidr`,
        [_xN]: _cCoi,
      },
    ],
  ]
);
export var DeleteCoipCidrRequest = struct(n0, _DCCR, 0, [_Ci, _CPI, _DR], [0, 0, 2]);
export var DeleteCoipCidrResult = struct(
  n0,
  _DCCRe,
  0,
  [_CCo],
  [
    [
      () => CoipCidr,
      {
        [_eQN]: `CoipCidr`,
        [_xN]: _cCoi,
      },
    ],
  ]
);
export var GetCoipPoolUsageRequest = struct(
  n0,
  _GCPUR,
  0,
  [_PIo, _Fi, _MR, _NTe, _DR],
  [
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
    2,
  ]
);
export var GetCoipPoolUsageResult = struct(
  n0,
  _GCPURe,
  0,
  [_CPI, _CAUo, _LGRTI, _NTe],
  [
    [
      0,
      {
        [_eQN]: `CoipPoolId`,
        [_xN]: _cPI,
      },
    ],
    [
      () => CoipAddressUsageSet,
      {
        [_eQN]: `CoipAddressUsageSet`,
        [_xN]: _cAUS,
      },
    ],
    [
      0,
      {
        [_eQN]: `LocalGatewayRouteTableId`,
        [_xN]: _lGRTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var CoipAddressUsageSet = list(n0, _CAUS, 0, [
  () => CoipAddressUsage,
  {
    [_xN]: _it,
  },
]);
export var CreateCoipCidr = op(
  n0,
  _CCC,
  0,
  () => CreateCoipCidrRequest,
  () => CreateCoipCidrResult
);
export var DeleteCoipCidr = op(
  n0,
  _DCC,
  0,
  () => DeleteCoipCidrRequest,
  () => DeleteCoipCidrResult
);
export var GetCoipPoolUsage = op(
  n0,
  _GCPU,
  0,
  () => GetCoipPoolUsageRequest,
  () => GetCoipPoolUsageResult
);

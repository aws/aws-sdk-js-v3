// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAc,
  _aAc,
  _AAG,
  _ACVI,
  _ACVIR,
  _ACVIRu,
  _AGI,
  _ARSu,
  _ARu,
  _aRu,
  _ARut,
  _Co,
  _co,
  _CT,
  _CVARS,
  _CVEI,
  _cVEI,
  _dC,
  _DCe,
  _DCVAR,
  _DCVARR,
  _DCVARRe,
  _De,
  _de,
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _GIr,
  _gIr,
  _it,
  _Me,
  _me,
  _MR,
  _NTe,
  _nTe,
  _RAG,
  _RCVI,
  _RCVIR,
  _RCVIRe,
  _Sta,
  _sta,
  _TNC,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AuthorizationRule = struct(
  n0,
  _ARu,
  0,
  [_CVEI, _De, _GIr, _AAc, _DCe, _Sta],
  [
    [
      0,
      {
        [_eQN]: `ClientVpnEndpointId`,
        [_xN]: _cVEI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupId`,
        [_xN]: _gIr,
      },
    ],
    [
      2,
      {
        [_eQN]: `AccessAll`,
        [_xN]: _aAc,
      },
    ],
    [
      0,
      {
        [_eQN]: `DestinationCidr`,
        [_xN]: _dC,
      },
    ],
    [
      () => ClientVpnAuthorizationRuleStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var AuthorizeClientVpnIngressRequest = struct(
  n0,
  _ACVIR,
  0,
  [_CVEI, _TNC, _AGI, _AAG, _De, _CT, _DR],
  [0, 0, 0, 2, 0, [0, 4], 2]
);
export var AuthorizeClientVpnIngressResult = struct(
  n0,
  _ACVIRu,
  0,
  [_Sta],
  [
    [
      () => ClientVpnAuthorizationRuleStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var ClientVpnAuthorizationRuleStatus = struct(
  n0,
  _CVARS,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var DescribeClientVpnAuthorizationRulesRequest = struct(
  n0,
  _DCVARR,
  0,
  [_CVEI, _DR, _NTe, _Fi, _MR],
  [
    0,
    2,
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
  ]
);
export var DescribeClientVpnAuthorizationRulesResult = struct(
  n0,
  _DCVARRe,
  0,
  [_ARut, _NTe],
  [
    [
      () => AuthorizationRuleSet,
      {
        [_eQN]: `AuthorizationRule`,
        [_xN]: _aRu,
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
export var RevokeClientVpnIngressRequest = struct(n0, _RCVIR, 0, [_CVEI, _TNC, _AGI, _RAG, _DR], [0, 0, 0, 2, 2]);
export var RevokeClientVpnIngressResult = struct(
  n0,
  _RCVIRe,
  0,
  [_Sta],
  [
    [
      () => ClientVpnAuthorizationRuleStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var AuthorizationRuleSet = list(n0, _ARSu, 0, [
  () => AuthorizationRule,
  {
    [_xN]: _it,
  },
]);
export var AuthorizeClientVpnIngress = op(
  n0,
  _ACVI,
  0,
  () => AuthorizeClientVpnIngressRequest,
  () => AuthorizeClientVpnIngressResult
);
export var DescribeClientVpnAuthorizationRules = op(
  n0,
  _DCVAR,
  0,
  () => DescribeClientVpnAuthorizationRulesRequest,
  () => DescribeClientVpnAuthorizationRulesResult
);
export var RevokeClientVpnIngress = op(
  n0,
  _RCVI,
  0,
  () => RevokeClientVpnIngressRequest,
  () => RevokeClientVpnIngressResult
);

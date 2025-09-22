// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DR,
  _DSGRescr,
  _DSGRR,
  _DSGRRe,
  _eQN,
  _GIr,
  _gIr,
  _GIro,
  _it,
  _RVI,
  _rVI,
  _SGRec,
  _SGRecu,
  _SGRSe,
  _sGRSe,
  _TGI,
  _tGI,
  _VPCI,
  _vPCI,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeSecurityGroupReferencesRequest = struct(n0, _DSGRR, 0, [_DR, _GIr], [2, [() => GroupIds, 0]]);
export var DescribeSecurityGroupReferencesResult = struct(
  n0,
  _DSGRRe,
  0,
  [_SGRSe],
  [
    [
      () => SecurityGroupReferences,
      {
        [_eQN]: `SecurityGroupReferenceSet`,
        [_xN]: _sGRSe,
      },
    ],
  ]
);
export var SecurityGroupReference = struct(
  n0,
  _SGRec,
  0,
  [_GIr, _RVI, _VPCI, _TGI],
  [
    [
      0,
      {
        [_eQN]: `GroupId`,
        [_xN]: _gIr,
      },
    ],
    [
      0,
      {
        [_eQN]: `ReferencingVpcId`,
        [_xN]: _rVI,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcPeeringConnectionId`,
        [_xN]: _vPCI,
      },
    ],
    [
      0,
      {
        [_eQN]: `TransitGatewayId`,
        [_xN]: _tGI,
      },
    ],
  ]
);
export var GroupIds = list(n0, _GIro, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var SecurityGroupReferences = list(n0, _SGRecu, 0, [
  () => SecurityGroupReference,
  {
    [_xN]: _it,
  },
]);
export var DescribeSecurityGroupReferences = op(
  n0,
  _DSGRescr,
  0,
  () => DescribeSecurityGroupReferencesRequest,
  () => DescribeSecurityGroupReferencesResult
);

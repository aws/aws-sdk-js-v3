// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _CVPA,
  _CVPAI,
  _CVPAO,
  _DVPAe,
  _DVPAIe,
  _DVPAOe,
  _ETxp,
  _GLAAI,
  _PVAAI,
  _PVI,
  _VPA,
  _VPAL,
  _VPAp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateVpcPeeringAuthorizationInput = struct(n0, _CVPAI, 0, [_GLAAI, _PVI], [0, 0]);
export var CreateVpcPeeringAuthorizationOutput = struct(n0, _CVPAO, 0, [_VPA], [() => VpcPeeringAuthorization]);
export var DescribeVpcPeeringAuthorizationsInput = struct(n0, _DVPAIe, 0, [], []);
export var DescribeVpcPeeringAuthorizationsOutput = struct(
  n0,
  _DVPAOe,
  0,
  [_VPAp],
  [() => VpcPeeringAuthorizationList]
);
export var VpcPeeringAuthorization = struct(n0, _VPA, 0, [_GLAAI, _PVAAI, _PVI, _CT, _ETxp], [0, 0, 0, 4, 4]);
export var VpcPeeringAuthorizationList = list(n0, _VPAL, 0, () => VpcPeeringAuthorization);
export var CreateVpcPeeringAuthorization = op(
  n0,
  _CVPA,
  0,
  () => CreateVpcPeeringAuthorizationInput,
  () => CreateVpcPeeringAuthorizationOutput
);
export var DescribeVpcPeeringAuthorizations = op(
  n0,
  _DVPAe,
  0,
  () => DescribeVpcPeeringAuthorizationsInput,
  () => DescribeVpcPeeringAuthorizationsOutput
);

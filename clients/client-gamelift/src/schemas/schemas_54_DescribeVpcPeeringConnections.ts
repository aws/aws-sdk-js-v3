// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Cod,
  _DVPCe,
  _DVPCIe,
  _DVPCOe,
  _FA,
  _FI,
  _GLVI,
  _IVCB,
  _M,
  _PVI,
  _St,
  _VPC,
  _VPCI,
  _VPCL,
  _VPCp,
  _VPCS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeVpcPeeringConnectionsInput = struct(n0, _DVPCIe, 0, [_FI], [0]);
export var DescribeVpcPeeringConnectionsOutput = struct(n0, _DVPCOe, 0, [_VPC], [() => VpcPeeringConnectionList]);
export var VpcPeeringConnection = struct(
  n0,
  _VPCp,
  0,
  [_FI, _FA, _IVCB, _VPCI, _St, _PVI, _GLVI],
  [0, 0, 0, 0, () => VpcPeeringConnectionStatus, 0, 0]
);
export var VpcPeeringConnectionStatus = struct(n0, _VPCS, 0, [_Cod, _M], [0, 0]);
export var VpcPeeringConnectionList = list(n0, _VPCL, 0, () => VpcPeeringConnection);
export var DescribeVpcPeeringConnections = op(
  n0,
  _DVPCe,
  0,
  () => DescribeVpcPeeringConnectionsInput,
  () => DescribeVpcPeeringConnectionsOutput
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CAr,
  _DA,
  _DVC,
  _DVCe,
  _DVCR,
  _DVCRe,
  _DVCRes,
  _DVCResc,
  _S,
  _SG,
  _Su,
  _VC,
  _VCA,
  _VCN,
  _VCR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVpcConnectorRequest = struct(n0, _DVCR, 0, [_VCA], [0]);
export var DeleteVpcConnectorResponse = struct(n0, _DVCRe, 0, [_VC], [() => VpcConnector]);
export var DescribeVpcConnectorRequest = struct(n0, _DVCRes, 0, [_VCA], [0]);
export var DescribeVpcConnectorResponse = struct(n0, _DVCResc, 0, [_VC], [() => VpcConnector]);
export var VpcConnector = struct(
  n0,
  _VC,
  0,
  [_VCN, _VCA, _VCR, _Su, _SG, _S, _CAr, _DA],
  [0, 0, 1, 64 | 0, 64 | 0, 0, 4, 4]
);
export var StringList = 64 | 0;

export var DeleteVpcConnector = op(
  n0,
  _DVC,
  0,
  () => DeleteVpcConnectorRequest,
  () => DeleteVpcConnectorResponse
);
export var DescribeVpcConnector = op(
  n0,
  _DVCe,
  0,
  () => DescribeVpcConnectorRequest,
  () => DescribeVpcConnectorResponse
);

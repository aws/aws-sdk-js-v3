// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FA, _fA, _h, _jN, _NDNII, _nDNII, _RFVI, _RFVIR, _RFVIRe, _VIN, _vIN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveFlowVpcInterfaceRequest = struct(
  n0,
  _RFVIR,
  0,
  [_FA, _VIN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var RemoveFlowVpcInterfaceResponse = struct(
  n0,
  _RFVIRe,
  0,
  [_FA, _NDNII, _VIN],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _nDNII,
      },
    ],
    [
      0,
      {
        [_jN]: _vIN,
      },
    ],
  ]
);
export var RemoveFlowVpcInterface = op(
  n0,
  _RFVI,
  {
    [_h]: ["DELETE", "/v1/flows/{FlowArn}/vpcInterfaces/{VpcInterfaceName}", 200],
  },
  () => RemoveFlowVpcInterfaceRequest,
  () => RemoveFlowVpcInterfaceResponse
);

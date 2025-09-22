// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AFVI,
  _AFVIR,
  _AFVIRd,
  _FA,
  _fA,
  _h,
  _jN,
  _lOVI,
  _lOVIR,
  _N,
  _n,
  _NII,
  _nII,
  _NIT,
  _nIT,
  _rA,
  _RAo,
  _SGI,
  _sGI,
  _SIu,
  _sIu,
  _VI,
  _vI,
  _VIp,
  _VIR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddFlowVpcInterfacesRequest = struct(
  n0,
  _AFVIR,
  0,
  [_FA, _VI],
  [
    [0, 1],
    [
      () => __listOfVpcInterfaceRequest,
      {
        [_jN]: _vI,
      },
    ],
  ]
);
export var AddFlowVpcInterfacesResponse = struct(
  n0,
  _AFVIRd,
  0,
  [_FA, _VI],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      () => __listOfVpcInterface,
      {
        [_jN]: _vI,
      },
    ],
  ]
);
export var VpcInterface = struct(
  n0,
  _VIp,
  0,
  [_N, _NII, _NIT, _RAo, _SGI, _SIu],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _nII,
      },
    ],
    [
      0,
      {
        [_jN]: _nIT,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sGI,
      },
    ],
    [
      0,
      {
        [_jN]: _sIu,
      },
    ],
  ]
);
export var VpcInterfaceRequest = struct(
  n0,
  _VIR,
  0,
  [_N, _NIT, _RAo, _SGI, _SIu],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _nIT,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sGI,
      },
    ],
    [
      0,
      {
        [_jN]: _sIu,
      },
    ],
  ]
);
export var __listOfVpcInterface = list(n0, _lOVI, 0, [() => VpcInterface, 0]);
export var __listOfVpcInterfaceRequest = list(n0, _lOVIR, 0, [() => VpcInterfaceRequest, 0]);
export var AddFlowVpcInterfaces = op(
  n0,
  _AFVI,
  {
    [_h]: ["POST", "/v1/flows/{FlowArn}/vpcInterfaces", 201],
  },
  () => AddFlowVpcInterfacesRequest,
  () => AddFlowVpcInterfacesResponse
);

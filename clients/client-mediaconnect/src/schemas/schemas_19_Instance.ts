// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _BP,
  _bP,
  _DGI,
  _DGIR,
  _DGIRe,
  _Fo,
  _fo,
  _GIA,
  _gIA,
  _h,
  _hQ,
  _IS,
  _iS,
  _jN,
  _UGI,
  _UGIR,
  _UGIRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterGatewayInstanceRequest = struct(
  n0,
  _DGIR,
  0,
  [_Fo, _GIA],
  [
    [
      2,
      {
        [_hQ]: _fo,
      },
    ],
    [0, 1],
  ]
);
export var DeregisterGatewayInstanceResponse = struct(
  n0,
  _DGIRe,
  0,
  [_GIA, _IS],
  [
    [
      0,
      {
        [_jN]: _gIA,
      },
    ],
    [
      0,
      {
        [_jN]: _iS,
      },
    ],
  ]
);
export var UpdateGatewayInstanceRequest = struct(
  n0,
  _UGIR,
  0,
  [_BP, _GIA],
  [
    [
      0,
      {
        [_jN]: _bP,
      },
    ],
    [0, 1],
  ]
);
export var UpdateGatewayInstanceResponse = struct(
  n0,
  _UGIRp,
  0,
  [_BP, _GIA],
  [
    [
      0,
      {
        [_jN]: _bP,
      },
    ],
    [
      0,
      {
        [_jN]: _gIA,
      },
    ],
  ]
);
export var DeregisterGatewayInstance = op(
  n0,
  _DGI,
  {
    [_h]: ["DELETE", "/v1/gateway-instances/{GatewayInstanceArn}", 202],
  },
  () => DeregisterGatewayInstanceRequest,
  () => DeregisterGatewayInstanceResponse
);
export var UpdateGatewayInstance = op(
  n0,
  _UGI,
  {
    [_h]: ["PUT", "/v1/gateway-instances/{GatewayInstanceArn}", 200],
  },
  () => UpdateGatewayInstanceRequest,
  () => UpdateGatewayInstanceResponse
);

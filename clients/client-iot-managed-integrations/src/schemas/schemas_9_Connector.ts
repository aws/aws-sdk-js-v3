// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _CCC,
  _CCCR,
  _CCCRr,
  _CIo,
  _CL,
  _CT,
  _D,
  _DCC,
  _DCCR,
  _EC,
  _ET,
  _GCC,
  _GCCR,
  _GCCRe,
  _h,
  _hQ,
  _I,
  _Id,
  _It,
  _l,
  _LA,
  _LC,
  _LCC,
  _LCCR,
  _LCCRi,
  _MR,
  _N,
  _NT,
  _T,
  _UCC,
  _UCCR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectorItem = struct(n0, _CIo, 0, [_N, _EC, _D, _ET, _I, _T], [0, () => EndpointConfig, 0, 0, 0, 0]);
export var CreateCloudConnectorRequest = struct(
  n0,
  _CCCR,
  0,
  [_N, _EC, _D, _ET, _CT],
  [0, () => EndpointConfig, 0, 0, [0, 4]]
);
export var CreateCloudConnectorResponse = struct(n0, _CCCRr, 0, [_I], [0]);
export var DeleteCloudConnectorRequest = struct(n0, _DCCR, 0, [_Id], [[0, 1]]);
export var EndpointConfig = struct(n0, _EC, 0, [_l], [() => LambdaConfig]);
export var GetCloudConnectorRequest = struct(n0, _GCCR, 0, [_Id], [[0, 1]]);
export var GetCloudConnectorResponse = struct(
  n0,
  _GCCRe,
  0,
  [_N, _EC, _D, _ET, _I, _T],
  [0, () => EndpointConfig, 0, 0, 0, 0]
);
export var LambdaConfig = struct(n0, _LC, 0, [_ar], [0]);
export var ListCloudConnectorsRequest = struct(
  n0,
  _LCCR,
  0,
  [_T, _LA, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _T,
      },
    ],
    [
      0,
      {
        [_hQ]: _LA,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListCloudConnectorsResponse = struct(n0, _LCCRi, 0, [_It, _NT], [() => ConnectorList, 0]);
export var UpdateCloudConnectorRequest = struct(n0, _UCCR, 0, [_Id, _N, _D], [[0, 1], 0, 0]);
export var ConnectorList = list(n0, _CL, 0, () => ConnectorItem);
export var CreateCloudConnector = op(
  n0,
  _CCC,
  {
    [_h]: ["POST", "/cloud-connectors", 201],
  },
  () => CreateCloudConnectorRequest,
  () => CreateCloudConnectorResponse
);
export var DeleteCloudConnector = op(
  n0,
  _DCC,
  {
    [_h]: ["DELETE", "/cloud-connectors/{Identifier}", 200],
  },
  () => DeleteCloudConnectorRequest,
  () => Unit
);
export var GetCloudConnector = op(
  n0,
  _GCC,
  {
    [_h]: ["GET", "/cloud-connectors/{Identifier}", 200],
  },
  () => GetCloudConnectorRequest,
  () => GetCloudConnectorResponse
);
export var ListCloudConnectors = op(
  n0,
  _LCC,
  {
    [_h]: ["GET", "/cloud-connectors", 200],
  },
  () => ListCloudConnectorsRequest,
  () => ListCloudConnectorsResponse
);
export var UpdateCloudConnector = op(
  n0,
  _UCC,
  {
    [_h]: ["PUT", "/cloud-connectors/{Identifier}", 200],
  },
  () => UpdateCloudConnectorRequest,
  () => Unit
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ARSR,
  _ARSRs,
  _ARSs,
  _DR,
  _DRSi,
  _DRSRi,
  _DRSRis,
  _eQN,
  _GRSA,
  _GRSAR,
  _GRSARe,
  _it,
  _RSA,
  _rSA,
  _RSAL,
  _RSAo,
  _rSAS,
  _RSI,
  _rSI,
  _St,
  _st,
  _VI,
  _vI,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateRouteServerRequest = struct(n0, _ARSR, 0, [_RSI, _VI, _DR], [0, 0, 2]);
export var AssociateRouteServerResult = struct(
  n0,
  _ARSRs,
  0,
  [_RSA],
  [
    [
      () => RouteServerAssociation,
      {
        [_eQN]: `RouteServerAssociation`,
        [_xN]: _rSA,
      },
    ],
  ]
);
export var DisassociateRouteServerRequest = struct(n0, _DRSRi, 0, [_RSI, _VI, _DR], [0, 0, 2]);
export var DisassociateRouteServerResult = struct(
  n0,
  _DRSRis,
  0,
  [_RSA],
  [
    [
      () => RouteServerAssociation,
      {
        [_eQN]: `RouteServerAssociation`,
        [_xN]: _rSA,
      },
    ],
  ]
);
export var GetRouteServerAssociationsRequest = struct(n0, _GRSAR, 0, [_RSI, _DR], [0, 2]);
export var GetRouteServerAssociationsResult = struct(
  n0,
  _GRSARe,
  0,
  [_RSAo],
  [
    [
      () => RouteServerAssociationsList,
      {
        [_eQN]: `RouteServerAssociationSet`,
        [_xN]: _rSAS,
      },
    ],
  ]
);
export var RouteServerAssociation = struct(
  n0,
  _RSA,
  0,
  [_RSI, _VI, _St],
  [
    [
      0,
      {
        [_eQN]: `RouteServerId`,
        [_xN]: _rSI,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var RouteServerAssociationsList = list(n0, _RSAL, 0, [
  () => RouteServerAssociation,
  {
    [_xN]: _it,
  },
]);
export var AssociateRouteServer = op(
  n0,
  _ARSs,
  0,
  () => AssociateRouteServerRequest,
  () => AssociateRouteServerResult
);
export var DisassociateRouteServer = op(
  n0,
  _DRSi,
  0,
  () => DisassociateRouteServerRequest,
  () => DisassociateRouteServerResult
);
export var GetRouteServerAssociations = op(
  n0,
  _GRSA,
  0,
  () => GetRouteServerAssociationsRequest,
  () => GetRouteServerAssociationsResult
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACG,
  _ACGR,
  _ACGRs,
  _CGA,
  _cGA,
  _CGAL,
  _CGAu,
  _CGAus,
  _CGAust,
  _DCG,
  _DCGR,
  _DCGRi,
  _DI,
  _GCGA,
  _GCGAR,
  _GCGARe,
  _GNI,
  _h,
  _hQ,
  _LI,
  _MR,
  _mR,
  _NT,
  _nT,
  _S,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateCustomerGatewayRequest = struct(n0, _ACGR, 0, [_CGA, _GNI, _DI, _LI], [0, [0, 1], 0, 0]);
export var AssociateCustomerGatewayResponse = struct(n0, _ACGRs, 0, [_CGAu], [() => CustomerGatewayAssociation]);
export var CustomerGatewayAssociation = struct(n0, _CGAu, 0, [_CGA, _GNI, _DI, _LI, _S], [0, 0, 0, 0, 0]);
export var DisassociateCustomerGatewayRequest = struct(
  n0,
  _DCGR,
  0,
  [_GNI, _CGA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateCustomerGatewayResponse = struct(n0, _DCGRi, 0, [_CGAu], [() => CustomerGatewayAssociation]);
export var GetCustomerGatewayAssociationsRequest = struct(
  n0,
  _GCGAR,
  0,
  [_GNI, _CGAus, _MR, _NT],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _cGA,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var GetCustomerGatewayAssociationsResponse = struct(
  n0,
  _GCGARe,
  0,
  [_CGAust, _NT],
  [() => CustomerGatewayAssociationList, 0]
);
export var CustomerGatewayArnList = 64 | 0;

export var CustomerGatewayAssociationList = list(n0, _CGAL, 0, () => CustomerGatewayAssociation);
export var AssociateCustomerGateway = op(
  n0,
  _ACG,
  {
    [_h]: ["POST", "/global-networks/{GlobalNetworkId}/customer-gateway-associations", 200],
  },
  () => AssociateCustomerGatewayRequest,
  () => AssociateCustomerGatewayResponse
);
export var DisassociateCustomerGateway = op(
  n0,
  _DCG,
  {
    [_h]: ["DELETE", "/global-networks/{GlobalNetworkId}/customer-gateway-associations/{CustomerGatewayArn}", 200],
  },
  () => DisassociateCustomerGatewayRequest,
  () => DisassociateCustomerGatewayResponse
);
export var GetCustomerGatewayAssociations = op(
  n0,
  _GCGA,
  {
    [_h]: ["GET", "/global-networks/{GlobalNetworkId}/customer-gateway-associations", 200],
  },
  () => GetCustomerGatewayAssociationsRequest,
  () => GetCustomerGatewayAssociationsResponse
);

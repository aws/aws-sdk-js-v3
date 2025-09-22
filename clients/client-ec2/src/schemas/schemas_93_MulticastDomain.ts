// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _As,
  _ATGMD,
  _ATGMDA,
  _ATGMDAR,
  _ATGMDARc,
  _ATGMDR,
  _ATGMDRs,
  _DR,
  _DTGMDi,
  _DTGMDRi,
  _DTGMDRis,
  _eQN,
  _Fi,
  _Fil,
  _GTGMDA,
  _GTGMDAR,
  _GTGMDARe,
  _it,
  _MDA,
  _mDA,
  _MR,
  _NTe,
  _nTe,
  _rIe,
  _RIes,
  _ROI,
  _rOI,
  _RTe,
  _rTe,
  _RTGMDA,
  _RTGMDAR,
  _RTGMDARe,
  _SAL,
  _SAubn,
  _SI,
  _SIu,
  _sIu,
  _St,
  _st,
  _Su,
  _su,
  _sub,
  _Subn,
  _TGAI,
  _tGAI,
  _TGMDAL,
  _TGMDAr,
  _TGMDAra,
  _TGMDI,
  _tGMDI,
  _xN,
  FilterList,
  n0,
  ValueStringList,
} from "./schemas_0";
import { TransitGatewaySubnetIdList } from "./schemas_319_Transit";

/* eslint no-var: 0 */

export var AcceptTransitGatewayMulticastDomainAssociationsRequest = struct(
  n0,
  _ATGMDAR,
  0,
  [_TGMDI, _TGAI, _SI, _DR],
  [0, 0, [() => ValueStringList, 0], 2]
);
export var AcceptTransitGatewayMulticastDomainAssociationsResult = struct(
  n0,
  _ATGMDARc,
  0,
  [_As],
  [
    [
      () => TransitGatewayMulticastDomainAssociations,
      {
        [_eQN]: `Associations`,
        [_xN]: _a,
      },
    ],
  ]
);
export var AssociateTransitGatewayMulticastDomainRequest = struct(
  n0,
  _ATGMDR,
  0,
  [_TGMDI, _TGAI, _SI, _DR],
  [0, 0, [() => TransitGatewaySubnetIdList, 0], 2]
);
export var AssociateTransitGatewayMulticastDomainResult = struct(
  n0,
  _ATGMDRs,
  0,
  [_As],
  [
    [
      () => TransitGatewayMulticastDomainAssociations,
      {
        [_eQN]: `Associations`,
        [_xN]: _a,
      },
    ],
  ]
);
export var DisassociateTransitGatewayMulticastDomainRequest = struct(
  n0,
  _DTGMDRi,
  0,
  [_TGMDI, _TGAI, _SI, _DR],
  [0, 0, [() => TransitGatewaySubnetIdList, 0], 2]
);
export var DisassociateTransitGatewayMulticastDomainResult = struct(
  n0,
  _DTGMDRis,
  0,
  [_As],
  [
    [
      () => TransitGatewayMulticastDomainAssociations,
      {
        [_eQN]: `Associations`,
        [_xN]: _a,
      },
    ],
  ]
);
export var GetTransitGatewayMulticastDomainAssociationsRequest = struct(
  n0,
  _GTGMDAR,
  0,
  [_TGMDI, _Fi, _MR, _NTe, _DR],
  [
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
    2,
  ]
);
export var GetTransitGatewayMulticastDomainAssociationsResult = struct(
  n0,
  _GTGMDARe,
  0,
  [_MDA, _NTe],
  [
    [
      () => TransitGatewayMulticastDomainAssociationList,
      {
        [_eQN]: `MulticastDomainAssociations`,
        [_xN]: _mDA,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var RejectTransitGatewayMulticastDomainAssociationsRequest = struct(
  n0,
  _RTGMDAR,
  0,
  [_TGMDI, _TGAI, _SI, _DR],
  [0, 0, [() => ValueStringList, 0], 2]
);
export var RejectTransitGatewayMulticastDomainAssociationsResult = struct(
  n0,
  _RTGMDARe,
  0,
  [_As],
  [
    [
      () => TransitGatewayMulticastDomainAssociations,
      {
        [_eQN]: `Associations`,
        [_xN]: _a,
      },
    ],
  ]
);
export var SubnetAssociation = struct(
  n0,
  _SAubn,
  0,
  [_SIu, _St],
  [
    [
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
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
export var TransitGatewayMulticastDomainAssociation = struct(
  n0,
  _TGMDAr,
  0,
  [_TGAI, _RIes, _RTe, _ROI, _Su],
  [
    [
      0,
      {
        [_eQN]: `TransitGatewayAttachmentId`,
        [_xN]: _tGAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceId`,
        [_xN]: _rIe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceOwnerId`,
        [_xN]: _rOI,
      },
    ],
    [
      () => SubnetAssociation,
      {
        [_eQN]: `Subnet`,
        [_xN]: _su,
      },
    ],
  ]
);
export var TransitGatewayMulticastDomainAssociations = struct(
  n0,
  _TGMDAra,
  0,
  [_TGMDI, _TGAI, _RIes, _RTe, _ROI, _Subn],
  [
    [
      0,
      {
        [_eQN]: `TransitGatewayMulticastDomainId`,
        [_xN]: _tGMDI,
      },
    ],
    [
      0,
      {
        [_eQN]: `TransitGatewayAttachmentId`,
        [_xN]: _tGAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceId`,
        [_xN]: _rIe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceOwnerId`,
        [_xN]: _rOI,
      },
    ],
    [
      () => SubnetAssociationList,
      {
        [_eQN]: `Subnets`,
        [_xN]: _sub,
      },
    ],
  ]
);
export var SubnetAssociationList = list(n0, _SAL, 0, [
  () => SubnetAssociation,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayMulticastDomainAssociationList = list(n0, _TGMDAL, 0, [
  () => TransitGatewayMulticastDomainAssociation,
  {
    [_xN]: _it,
  },
]);
export var AcceptTransitGatewayMulticastDomainAssociations = op(
  n0,
  _ATGMDA,
  0,
  () => AcceptTransitGatewayMulticastDomainAssociationsRequest,
  () => AcceptTransitGatewayMulticastDomainAssociationsResult
);
export var AssociateTransitGatewayMulticastDomain = op(
  n0,
  _ATGMD,
  0,
  () => AssociateTransitGatewayMulticastDomainRequest,
  () => AssociateTransitGatewayMulticastDomainResult
);
export var DisassociateTransitGatewayMulticastDomain = op(
  n0,
  _DTGMDi,
  0,
  () => DisassociateTransitGatewayMulticastDomainRequest,
  () => DisassociateTransitGatewayMulticastDomainResult
);
export var GetTransitGatewayMulticastDomainAssociations = op(
  n0,
  _GTGMDA,
  0,
  () => GetTransitGatewayMulticastDomainAssociationsRequest,
  () => GetTransitGatewayMulticastDomainAssociationsResult
);
export var RejectTransitGatewayMulticastDomainAssociations = op(
  n0,
  _RTGMDA,
  0,
  () => RejectTransitGatewayMulticastDomainAssociationsRequest,
  () => RejectTransitGatewayMulticastDomainAssociationsResult
);

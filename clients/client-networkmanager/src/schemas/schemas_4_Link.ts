// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ALR,
  _ALRs,
  _ALs,
  _DI,
  _dI,
  _DLi,
  _DLRi,
  _DLRis,
  _GLA,
  _GLAR,
  _GLARe,
  _GNI,
  _h,
  _hQ,
  _LA,
  _LAi,
  _LAL,
  _LAS,
  _LI,
  _lI,
  _MR,
  _mR,
  _NT,
  _nT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateLinkRequest = struct(n0, _ALR, 0, [_GNI, _DI, _LI], [[0, 1], 0, 0]);
export var AssociateLinkResponse = struct(n0, _ALRs, 0, [_LA], [() => LinkAssociation]);
export var DisassociateLinkRequest = struct(
  n0,
  _DLRi,
  0,
  [_GNI, _DI, _LI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dI,
      },
    ],
    [
      0,
      {
        [_hQ]: _lI,
      },
    ],
  ]
);
export var DisassociateLinkResponse = struct(n0, _DLRis, 0, [_LA], [() => LinkAssociation]);
export var GetLinkAssociationsRequest = struct(
  n0,
  _GLAR,
  0,
  [_GNI, _DI, _LI, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dI,
      },
    ],
    [
      0,
      {
        [_hQ]: _lI,
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
export var GetLinkAssociationsResponse = struct(n0, _GLARe, 0, [_LAi, _NT], [() => LinkAssociationList, 0]);
export var LinkAssociation = struct(n0, _LA, 0, [_GNI, _DI, _LI, _LAS], [0, 0, 0, 0]);
export var LinkAssociationList = list(n0, _LAL, 0, () => LinkAssociation);
export var AssociateLink = op(
  n0,
  _ALs,
  {
    [_h]: ["POST", "/global-networks/{GlobalNetworkId}/link-associations", 200],
  },
  () => AssociateLinkRequest,
  () => AssociateLinkResponse
);
export var DisassociateLink = op(
  n0,
  _DLi,
  {
    [_h]: ["DELETE", "/global-networks/{GlobalNetworkId}/link-associations", 200],
  },
  () => DisassociateLinkRequest,
  () => DisassociateLinkResponse
);
export var GetLinkAssociations = op(
  n0,
  _GLA,
  {
    [_h]: ["GET", "/global-networks/{GlobalNetworkId}/link-associations", 200],
  },
  () => GetLinkAssociationsRequest,
  () => GetLinkAssociationsResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _AIc,
  _AR,
  _aR,
  _CNI,
  _cNI,
  _F,
  _GNI,
  _GNRRetet,
  _GNRRR,
  _GNRRRe,
  _h,
  _hQ,
  _MR,
  _mR,
  _NT,
  _nT,
  _R,
  _RA,
  _rA,
  _Rel,
  _RGA,
  _rGA,
  _RL,
  _RT,
  _rT,
  _To,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetNetworkResourceRelationshipsRequest = struct(
  n0,
  _GNRRR,
  0,
  [_GNI, _CNI, _RGA, _AR, _AIc, _RT, _RA, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cNI,
      },
    ],
    [
      0,
      {
        [_hQ]: _rGA,
      },
    ],
    [
      0,
      {
        [_hQ]: _aR,
      },
    ],
    [
      0,
      {
        [_hQ]: _aI,
      },
    ],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    [
      0,
      {
        [_hQ]: _rA,
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
export var GetNetworkResourceRelationshipsResponse = struct(n0, _GNRRRe, 0, [_R, _NT], [() => RelationshipList, 0]);
export var Relationship = struct(n0, _Rel, 0, [_F, _To], [0, 0]);
export var RelationshipList = list(n0, _RL, 0, () => Relationship);
export var GetNetworkResourceRelationships = op(
  n0,
  _GNRRetet,
  {
    [_h]: ["GET", "/global-networks/{GlobalNetworkId}/network-resource-relationships", 200],
  },
  () => GetNetworkResourceRelationshipsRequest,
  () => GetNetworkResourceRelationshipsResponse
);

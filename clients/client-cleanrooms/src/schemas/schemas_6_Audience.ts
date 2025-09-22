// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _cAI,
  _CAMA,
  _cAMA,
  _cAMAI,
  _cAMAo,
  _CCAMA,
  _cCAMA,
  _CCAMAS,
  _cCAMAS,
  _CCAMASL,
  _cI,
  _cIo,
  _cT,
  _d,
  _DCAMA,
  _DCAMAI,
  _DCAMAO,
  _GCAMA,
  _GCAMAI,
  _GCAMAO,
  _GCCAMA,
  _GCCAMAI,
  _GCCAMAO,
  _h,
  _hQ,
  _i,
  _LCCAMA,
  _LCCAMAI,
  _LCCAMAO,
  _mA,
  _mI,
  _mIe,
  _mR,
  _mRP,
  _n,
  _nT,
  _UCAMA,
  _UCAMAI,
  _UCAMAO,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CollaborationConfiguredAudienceModelAssociation = struct(
  n0,
  _CCAMA,
  0,
  [_i, _a, _cI, _cA, _cAMA, _n, _d, _cAI, _cT, _uT],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, 4]
);
export var CollaborationConfiguredAudienceModelAssociationSummary = struct(
  n0,
  _CCAMAS,
  0,
  [_a, _cT, _i, _n, _uT, _cA, _cI, _cAI, _d],
  [0, 4, 0, 0, 4, 0, 0, 0, 0]
);
export var ConfiguredAudienceModelAssociation = struct(
  n0,
  _CAMA,
  0,
  [_i, _a, _cAMA, _mI, _mA, _cI, _cA, _n, _mRP, _d, _cT, _uT],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 4]
);
export var DeleteConfiguredAudienceModelAssociationInput = struct(
  n0,
  _DCAMAI,
  0,
  [_cAMAI, _mIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteConfiguredAudienceModelAssociationOutput = struct(n0, _DCAMAO, 0, [], []);
export var GetCollaborationConfiguredAudienceModelAssociationInput = struct(
  n0,
  _GCCAMAI,
  0,
  [_cIo, _cAMAI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetCollaborationConfiguredAudienceModelAssociationOutput = struct(
  n0,
  _GCCAMAO,
  0,
  [_cCAMA],
  [() => CollaborationConfiguredAudienceModelAssociation]
);
export var GetConfiguredAudienceModelAssociationInput = struct(
  n0,
  _GCAMAI,
  0,
  [_cAMAI, _mIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetConfiguredAudienceModelAssociationOutput = struct(
  n0,
  _GCAMAO,
  0,
  [_cAMAo],
  [() => ConfiguredAudienceModelAssociation]
);
export var ListCollaborationConfiguredAudienceModelAssociationsInput = struct(
  n0,
  _LCCAMAI,
  0,
  [_cIo, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListCollaborationConfiguredAudienceModelAssociationsOutput = struct(
  n0,
  _LCCAMAO,
  0,
  [_cCAMAS, _nT],
  [() => CollaborationConfiguredAudienceModelAssociationSummaryList, 0]
);
export var UpdateConfiguredAudienceModelAssociationInput = struct(
  n0,
  _UCAMAI,
  0,
  [_cAMAI, _mIe, _d, _n],
  [[0, 1], [0, 1], 0, 0]
);
export var UpdateConfiguredAudienceModelAssociationOutput = struct(
  n0,
  _UCAMAO,
  0,
  [_cAMAo],
  [() => ConfiguredAudienceModelAssociation]
);
export var CollaborationConfiguredAudienceModelAssociationSummaryList = list(
  n0,
  _CCAMASL,
  0,
  () => CollaborationConfiguredAudienceModelAssociationSummary
);
export var DeleteConfiguredAudienceModelAssociation = op(
  n0,
  _DCAMA,
  {
    [_h]: [
      "DELETE",
      "/memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}",
      204,
    ],
  },
  () => DeleteConfiguredAudienceModelAssociationInput,
  () => DeleteConfiguredAudienceModelAssociationOutput
);
export var GetCollaborationConfiguredAudienceModelAssociation = op(
  n0,
  _GCCAMA,
  {
    [_h]: [
      "GET",
      "/collaborations/{collaborationIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}",
      200,
    ],
  },
  () => GetCollaborationConfiguredAudienceModelAssociationInput,
  () => GetCollaborationConfiguredAudienceModelAssociationOutput
);
export var GetConfiguredAudienceModelAssociation = op(
  n0,
  _GCAMA,
  {
    [_h]: [
      "GET",
      "/memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}",
      200,
    ],
  },
  () => GetConfiguredAudienceModelAssociationInput,
  () => GetConfiguredAudienceModelAssociationOutput
);
export var ListCollaborationConfiguredAudienceModelAssociations = op(
  n0,
  _LCCAMA,
  {
    [_h]: ["GET", "/collaborations/{collaborationIdentifier}/configuredaudiencemodelassociations", 200],
  },
  () => ListCollaborationConfiguredAudienceModelAssociationsInput,
  () => ListCollaborationConfiguredAudienceModelAssociationsOutput
);
export var UpdateConfiguredAudienceModelAssociation = op(
  n0,
  _UCAMA,
  {
    [_h]: [
      "PATCH",
      "/memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}",
      200,
    ],
  },
  () => UpdateConfiguredAudienceModelAssociationInput,
  () => UpdateConfiguredAudienceModelAssociationOutput
);

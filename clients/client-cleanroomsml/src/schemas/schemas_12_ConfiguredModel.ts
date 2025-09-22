// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aAI,
  _cAI,
  _cCMAA,
  _CCMAAL,
  _CCMAAS,
  _cDI,
  _CEC,
  _cEC,
  _cIo,
  _cL,
  _cM,
  _cMA,
  _cMAA,
  _cMAAA,
  _CMAAL,
  _cMAAo,
  _CMAAS,
  _CMAL,
  _CMAS,
  _cT,
  _d,
  _DCMA,
  _DCMAR,
  _eTR,
  _fP,
  _fTE,
  _GCCMAA,
  _GCCMAAR,
  _GCCMAARe,
  _GCMAA,
  _GCMAAR,
  _GCMAARe,
  _hQ,
  _ht,
  _LCCMAA,
  _LCCMAAR,
  _LCCMAARi,
  _LCMA,
  _LCMAA,
  _LCMAAR,
  _LCMAARi,
  _LCMAR,
  _LCMARi,
  _LCP,
  _LCPL,
  _LRC,
  _lRC,
  _lT,
  _mAS,
  _MCP,
  _mI,
  _mOS,
  _mR,
  _mSa,
  _n,
  _nL,
  _nT,
  _p,
  _PC,
  _pC,
  _PCP,
  _ta,
  _tM,
  _TMAMS,
  _TMCP,
  _tME,
  _TMECP,
  _TMEMS,
  _tMIJ,
  _TMIJCP,
  _TMIMOS,
  _u,
  _uT,
  _v,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CollaborationConfiguredModelAlgorithmAssociationSummary = struct(
  n0,
  _CCMAAS,
  0,
  [_cT, _uT, _cMAAA, _n, _d, _mI, _cIo, _cMAA, _cAI],
  [5, 5, 0, 0, 0, 0, 0, 0, 0]
);
export var ConfiguredModelAlgorithmAssociationSummary = struct(
  n0,
  _CMAAS,
  0,
  [_cT, _uT, _cMAAA, _cMAA, _n, _d, _mI, _cIo],
  [5, 5, 0, 0, 0, 0, 0, 0]
);
export var ConfiguredModelAlgorithmSummary = struct(n0, _CMAS, 0, [_cT, _uT, _cMAA, _n, _d], [5, 5, 0, 0, 0]);
export var CustomEntityConfig = struct(n0, _CEC, 0, [_cDI], [64 | 0]);
export var DeleteConfiguredModelAlgorithmRequest = struct(n0, _DCMAR, 0, [_cMAA], [[0, 1]]);
export var GetCollaborationConfiguredModelAlgorithmAssociationRequest = struct(
  n0,
  _GCCMAAR,
  0,
  [_cMAAA, _cIo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetCollaborationConfiguredModelAlgorithmAssociationResponse = struct(
  n0,
  _GCCMAARe,
  0,
  [_cT, _uT, _cMAAA, _mI, _cIo, _cMAA, _n, _d, _cAI, _pC],
  [5, 5, 0, 0, 0, 0, 0, 0, 0, () => PrivacyConfiguration]
);
export var GetConfiguredModelAlgorithmAssociationRequest = struct(
  n0,
  _GCMAAR,
  0,
  [_cMAAA, _mI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetConfiguredModelAlgorithmAssociationResponse = struct(
  n0,
  _GCMAARe,
  0,
  [_cT, _uT, _cMAAA, _mI, _cIo, _cMAA, _n, _pC, _d, _ta],
  [5, 5, 0, 0, 0, 0, 0, () => PrivacyConfiguration, 0, 128 | 0]
);
export var ListCollaborationConfiguredModelAlgorithmAssociationsRequest = struct(
  n0,
  _LCCMAAR,
  0,
  [_nT, _mR, _cIo],
  [
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
    [0, 1],
  ]
);
export var ListCollaborationConfiguredModelAlgorithmAssociationsResponse = struct(
  n0,
  _LCCMAARi,
  0,
  [_nT, _cCMAA],
  [0, () => CollaborationConfiguredModelAlgorithmAssociationList]
);
export var ListConfiguredModelAlgorithmAssociationsRequest = struct(
  n0,
  _LCMAAR,
  0,
  [_nT, _mR, _mI],
  [
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
    [0, 1],
  ]
);
export var ListConfiguredModelAlgorithmAssociationsResponse = struct(
  n0,
  _LCMAARi,
  0,
  [_nT, _cMAAo],
  [0, () => ConfiguredModelAlgorithmAssociationList]
);
export var ListConfiguredModelAlgorithmsRequest = struct(
  n0,
  _LCMAR,
  0,
  [_nT, _mR],
  [
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
export var ListConfiguredModelAlgorithmsResponse = struct(
  n0,
  _LCMARi,
  0,
  [_nT, _cMA],
  [0, () => ConfiguredModelAlgorithmList]
);
export var LogRedactionConfiguration = struct(n0, _LRC, 0, [_eTR, _cEC], [64 | 0, () => CustomEntityConfig]);
export var LogsConfigurationPolicy = struct(
  n0,
  _LCP,
  0,
  [_aAI, _fP, _lT, _lRC],
  [64 | 0, 0, 0, () => LogRedactionConfiguration]
);
export var MetricsConfigurationPolicy = struct(n0, _MCP, 0, [_nL], [0]);
export var PrivacyConfiguration = struct(n0, _PC, 0, [_p], [() => PrivacyConfigurationPolicies]);
export var PrivacyConfigurationPolicies = struct(
  n0,
  _PCP,
  0,
  [_tM, _tME, _tMIJ],
  [
    () => TrainedModelsConfigurationPolicy,
    () => TrainedModelExportsConfigurationPolicy,
    () => TrainedModelInferenceJobsConfigurationPolicy,
  ]
);
export var TrainedModelArtifactMaxSize = struct(n0, _TMAMS, 0, [_u, _v], [0, 1]);
export var TrainedModelExportsConfigurationPolicy = struct(
  n0,
  _TMECP,
  0,
  [_mSa, _fTE],
  [() => TrainedModelExportsMaxSize, 64 | 0]
);
export var TrainedModelExportsMaxSize = struct(n0, _TMEMS, 0, [_u, _v], [0, 1]);
export var TrainedModelInferenceJobsConfigurationPolicy = struct(
  n0,
  _TMIJCP,
  0,
  [_cL, _mOS],
  [() => LogsConfigurationPolicyList, () => TrainedModelInferenceMaxOutputSize]
);
export var TrainedModelInferenceMaxOutputSize = struct(n0, _TMIMOS, 0, [_u, _v], [0, 1]);
export var TrainedModelsConfigurationPolicy = struct(
  n0,
  _TMCP,
  0,
  [_cL, _cM, _mAS],
  [() => LogsConfigurationPolicyList, () => MetricsConfigurationPolicy, () => TrainedModelArtifactMaxSize]
);
export var AccountIdList = 64 | 0;

export var CollaborationConfiguredModelAlgorithmAssociationList = list(
  n0,
  _CCMAAL,
  0,
  () => CollaborationConfiguredModelAlgorithmAssociationSummary
);
export var ConfiguredModelAlgorithmAssociationList = list(
  n0,
  _CMAAL,
  0,
  () => ConfiguredModelAlgorithmAssociationSummary
);
export var ConfiguredModelAlgorithmList = list(n0, _CMAL, 0, () => ConfiguredModelAlgorithmSummary);
export var CustomDataIdentifierList = 64 | 0;

export var EntityTypeList = 64 | 0;

export var LogsConfigurationPolicyList = list(n0, _LCPL, 0, () => LogsConfigurationPolicy);
export var TrainedModelExportFileTypeList = 64 | 0;

export var DeleteConfiguredModelAlgorithm = op(
  n0,
  _DCMA,
  {
    [_ht]: ["DELETE", "/configured-model-algorithms/{configuredModelAlgorithmArn}", 200],
  },
  () => DeleteConfiguredModelAlgorithmRequest,
  () => Unit
);
export var GetCollaborationConfiguredModelAlgorithmAssociation = op(
  n0,
  _GCCMAA,
  {
    [_ht]: [
      "GET",
      "/collaborations/{collaborationIdentifier}/configured-model-algorithm-associations/{configuredModelAlgorithmAssociationArn}",
      200,
    ],
  },
  () => GetCollaborationConfiguredModelAlgorithmAssociationRequest,
  () => GetCollaborationConfiguredModelAlgorithmAssociationResponse
);
export var GetConfiguredModelAlgorithmAssociation = op(
  n0,
  _GCMAA,
  {
    [_ht]: [
      "GET",
      "/memberships/{membershipIdentifier}/configured-model-algorithm-associations/{configuredModelAlgorithmAssociationArn}",
      200,
    ],
  },
  () => GetConfiguredModelAlgorithmAssociationRequest,
  () => GetConfiguredModelAlgorithmAssociationResponse
);
export var ListCollaborationConfiguredModelAlgorithmAssociations = op(
  n0,
  _LCCMAA,
  {
    [_ht]: ["GET", "/collaborations/{collaborationIdentifier}/configured-model-algorithm-associations", 200],
  },
  () => ListCollaborationConfiguredModelAlgorithmAssociationsRequest,
  () => ListCollaborationConfiguredModelAlgorithmAssociationsResponse
);
export var ListConfiguredModelAlgorithmAssociations = op(
  n0,
  _LCMAA,
  {
    [_ht]: ["GET", "/memberships/{membershipIdentifier}/configured-model-algorithm-associations", 200],
  },
  () => ListConfiguredModelAlgorithmAssociationsRequest,
  () => ListConfiguredModelAlgorithmAssociationsResponse
);
export var ListConfiguredModelAlgorithms = op(
  n0,
  _LCMA,
  {
    [_ht]: ["GET", "/configured-model-algorithms", 200],
  },
  () => ListConfiguredModelAlgorithmsRequest,
  () => ListConfiguredModelAlgorithmsResponse
);

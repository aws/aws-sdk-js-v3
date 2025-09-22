// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { PreconditionFailedException as __PreconditionFailedException } from "../models/index";
import {
  _aMA,
  _aMCD,
  _AMCM,
  _aMCM,
  _aMCMD,
  _aMCMEI,
  _aMCMI,
  _aMCMN,
  _aMCMP,
  _aMCMPs,
  _AMCMs,
  _aMCMS,
  _aMCMT,
  _aMD,
  _aMEI,
  _AMH,
  _aMH,
  _AMHs,
  _aMI,
  _aMLUD,
  _aMN,
  _AMPD,
  _AMPDs,
  _aMPs,
  _AMS,
  _aMS,
  _AMSs,
  _aMSs,
  _AMSss,
  _aMT,
  _aMTs,
  _aMV,
  _ar,
  _c,
  _CAMCM,
  _CAMCMR,
  _CAMCMRr,
  _cAMI,
  _cAMIo,
  _cD,
  _cMP,
  _cT,
  _d,
  _DAM,
  _DAMCM,
  _DAMCMR,
  _DAMCMRe,
  _DAMe,
  _DAMIR,
  _DAMIRR,
  _DAMIRRe,
  _DAMR,
  _DAMRe,
  _DAMRes,
  _DAMResc,
  _dT,
  _dTS,
  _e,
  _eI,
  _end,
  _eP,
  _ET,
  _eTa,
  _hE,
  _hH,
  _hQ,
  _ht,
  _i,
  _iAMI,
  _ID,
  _iD,
  _IM,
  _iM,
  _INM,
  _iNM,
  _IR,
  _iT,
  _LAM,
  _LAMR,
  _LAMRi,
  _lUD,
  _m,
  _mBPN,
  _MFVT,
  _mFVT,
  _mR,
  _n,
  _nT,
  _o,
  _pAMCMI,
  _PAMIR,
  _PAMIRR,
  _PAMIRRu,
  _PFE,
  _PMC,
  _pMC,
  _pr,
  _rA,
  _rI,
  _st,
  _sta,
  _ty,
  _u,
  _UAM,
  _UAMCM,
  _UAMCMR,
  _UAMCMRp,
  _UAMR,
  _UAMRp,
  _ve,
  ErrorDetails,
  n0,
} from "./schemas_0";
import { AssetModelProperties, PropertyType } from "./schemas_1_Asset";
import { PropertyMappings } from "./schemas_26_InterfaceRelationship";
import { AssetModelCompositeModelPath, AssetModelCompositeModelSummaries } from "./schemas_30_Model";

/* eslint no-var: 0 */

export var AssetModelCompositeModel = struct(
  n0,
  _AMCM,
  0,
  [_n, _d, _ty, _pr, _i, _eI],
  [0, 0, 0, () => AssetModelProperties, 0, 0]
);
export var AssetModelHierarchy = struct(n0, _AMH, 0, [_i, _eI, _n, _cAMI], [0, 0, 0, 0]);
export var AssetModelPropertyDefinition = struct(
  n0,
  _AMPD,
  0,
  [_i, _eI, _n, _dT, _dTS, _u, _ty],
  [0, 0, 0, 0, 0, 0, () => PropertyType]
);
export var AssetModelStatus = struct(n0, _AMS, 0, [_st, _e], [0, () => ErrorDetails]);
export var AssetModelSummary = struct(
  n0,
  _AMSs,
  0,
  [_i, _eI, _ar, _n, _aMT, _d, _cD, _lUD, _sta, _ve],
  [0, 0, 0, 0, 0, 0, 4, 4, () => AssetModelStatus, 0]
);
export var CreateAssetModelCompositeModelRequest = struct(
  n0,
  _CAMCMR,
  0,
  [_aMI, _aMCMEI, _pAMCMI, _aMCMI, _aMCMD, _aMCMN, _aMCMT, _cT, _cAMIo, _aMCMP, _iM, _iNM, _mFVT],
  [
    [0, 1],
    0,
    0,
    0,
    0,
    0,
    0,
    [0, 4],
    0,
    () => AssetModelPropertyDefinitions,
    [
      0,
      {
        [_hH]: _IM,
      },
    ],
    [
      0,
      {
        [_hH]: _INM,
      },
    ],
    [
      0,
      {
        [_hH]: _MFVT,
      },
    ],
  ]
);
export var CreateAssetModelCompositeModelResponse = struct(
  n0,
  _CAMCMRr,
  0,
  [_aMCMI, _aMCMPs, _aMS],
  [0, () => AssetModelCompositeModelPath, () => AssetModelStatus]
);
export var DeleteAssetModelCompositeModelRequest = struct(
  n0,
  _DAMCMR,
  0,
  [_aMI, _aMCMI, _cT, _iM, _iNM, _mFVT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
    [
      0,
      {
        [_hH]: _IM,
      },
    ],
    [
      0,
      {
        [_hH]: _INM,
      },
    ],
    [
      0,
      {
        [_hH]: _MFVT,
      },
    ],
  ]
);
export var DeleteAssetModelCompositeModelResponse = struct(n0, _DAMCMRe, 0, [_aMS], [() => AssetModelStatus]);
export var DeleteAssetModelInterfaceRelationshipRequest = struct(
  n0,
  _DAMIRR,
  0,
  [_aMI, _iAMI, _cT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteAssetModelInterfaceRelationshipResponse = struct(
  n0,
  _DAMIRRe,
  0,
  [_aMI, _iAMI, _aMA, _aMS],
  [0, 0, 0, () => AssetModelStatus]
);
export var DeleteAssetModelRequest = struct(
  n0,
  _DAMR,
  0,
  [_aMI, _cT, _iM, _iNM, _mFVT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
    [
      0,
      {
        [_hH]: _IM,
      },
    ],
    [
      0,
      {
        [_hH]: _INM,
      },
    ],
    [
      0,
      {
        [_hH]: _MFVT,
      },
    ],
  ]
);
export var DeleteAssetModelResponse = struct(n0, _DAMRe, 0, [_aMS], [() => AssetModelStatus]);
export var DescribeAssetModelRequest = struct(
  n0,
  _DAMRes,
  0,
  [_aMI, _eP, _aMV],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _eP,
      },
    ],
    [
      0,
      {
        [_hQ]: _aMV,
      },
    ],
  ]
);
export var DescribeAssetModelResponse = struct(
  n0,
  _DAMResc,
  0,
  [_aMI, _aMEI, _aMA, _aMN, _aMT, _aMD, _aMPs, _aMH, _aMCM, _aMCMS, _aMCD, _aMLUD, _aMS, _aMV, _iD, _eTa],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => AssetModelProperties,
    () => AssetModelHierarchies,
    () => AssetModelCompositeModels,
    () => AssetModelCompositeModelSummaries,
    4,
    4,
    () => AssetModelStatus,
    0,
    () => InterfaceDetails,
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var InterfaceRelationship = struct(n0, _IR, 0, [_i], [0]);
export var ListAssetModelsRequest = struct(
  n0,
  _LAMR,
  0,
  [_aMTs, _nT, _mR, _aMV],
  [
    [
      64 | 0,
      {
        [_hQ]: _aMTs,
      },
    ],
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
    [
      0,
      {
        [_hQ]: _aMV,
      },
    ],
  ]
);
export var ListAssetModelsResponse = struct(n0, _LAMRi, 0, [_aMSs, _nT], [() => AssetModelSummaries, 0]);
export var PreconditionFailedException = error(
  n0,
  _PFE,
  {
    [_e]: _c,
    [_hE]: 412,
  },
  [_m, _rI, _rA],
  [0, 0, 0],

  __PreconditionFailedException
);
export var PropertyMappingConfiguration = struct(n0, _PMC, 0, [_mBPN, _cMP, _o], [2, 2, () => PropertyMappings]);
export var PutAssetModelInterfaceRelationshipRequest = struct(
  n0,
  _PAMIRR,
  0,
  [_aMI, _iAMI, _pMC, _cT],
  [[0, 1], [0, 1], () => PropertyMappingConfiguration, [0, 4]]
);
export var PutAssetModelInterfaceRelationshipResponse = struct(
  n0,
  _PAMIRRu,
  0,
  [_aMI, _iAMI, _aMA, _aMS],
  [0, 0, 0, () => AssetModelStatus]
);
export var UpdateAssetModelCompositeModelRequest = struct(
  n0,
  _UAMCMR,
  0,
  [_aMI, _aMCMI, _aMCMEI, _aMCMD, _aMCMN, _cT, _aMCMP, _iM, _iNM, _mFVT],
  [
    [0, 1],
    [0, 1],
    0,
    0,
    0,
    [0, 4],
    () => AssetModelProperties,
    [
      0,
      {
        [_hH]: _IM,
      },
    ],
    [
      0,
      {
        [_hH]: _INM,
      },
    ],
    [
      0,
      {
        [_hH]: _MFVT,
      },
    ],
  ]
);
export var UpdateAssetModelCompositeModelResponse = struct(
  n0,
  _UAMCMRp,
  0,
  [_aMCMPs, _aMS],
  [() => AssetModelCompositeModelPath, () => AssetModelStatus]
);
export var UpdateAssetModelRequest = struct(
  n0,
  _UAMR,
  0,
  [_aMI, _aMEI, _aMN, _aMD, _aMPs, _aMH, _aMCM, _cT, _iM, _iNM, _mFVT],
  [
    [0, 1],
    0,
    0,
    0,
    () => AssetModelProperties,
    () => AssetModelHierarchies,
    () => AssetModelCompositeModels,
    [0, 4],
    [
      0,
      {
        [_hH]: _IM,
      },
    ],
    [
      0,
      {
        [_hH]: _INM,
      },
    ],
    [
      0,
      {
        [_hH]: _MFVT,
      },
    ],
  ]
);
export var UpdateAssetModelResponse = struct(n0, _UAMRp, 0, [_aMS], [() => AssetModelStatus]);
export var AssetModelCompositeModels = list(n0, _AMCMs, 0, () => AssetModelCompositeModel);
export var AssetModelHierarchies = list(n0, _AMHs, 0, () => AssetModelHierarchy);
export var AssetModelPropertyDefinitions = list(n0, _AMPDs, 0, () => AssetModelPropertyDefinition);
export var AssetModelSummaries = list(n0, _AMSss, 0, () => AssetModelSummary);
export var InterfaceDetails = list(n0, _ID, 0, () => InterfaceRelationship);
export var ListAssetModelsTypeFilter = 64 | 0;

export var CreateAssetModelCompositeModel = op(
  n0,
  _CAMCM,
  {
    [_ht]: ["POST", "/asset-models/{assetModelId}/composite-models", 202],
    [_end]: ["api."],
  },
  () => CreateAssetModelCompositeModelRequest,
  () => CreateAssetModelCompositeModelResponse
);
export var DeleteAssetModel = op(
  n0,
  _DAM,
  {
    [_ht]: ["DELETE", "/asset-models/{assetModelId}", 202],
    [_end]: ["api."],
  },
  () => DeleteAssetModelRequest,
  () => DeleteAssetModelResponse
);
export var DeleteAssetModelCompositeModel = op(
  n0,
  _DAMCM,
  {
    [_ht]: ["DELETE", "/asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}", 202],
    [_end]: ["api."],
  },
  () => DeleteAssetModelCompositeModelRequest,
  () => DeleteAssetModelCompositeModelResponse
);
export var DeleteAssetModelInterfaceRelationship = op(
  n0,
  _DAMIR,
  {
    [_ht]: [
      "DELETE",
      "/asset-models/{assetModelId}/interface/{interfaceAssetModelId}/asset-model-interface-relationship",
      202,
    ],
    [_end]: ["api."],
  },
  () => DeleteAssetModelInterfaceRelationshipRequest,
  () => DeleteAssetModelInterfaceRelationshipResponse
);
export var DescribeAssetModel = op(
  n0,
  _DAMe,
  {
    [_ht]: ["GET", "/asset-models/{assetModelId}", 200],
    [_end]: ["api."],
  },
  () => DescribeAssetModelRequest,
  () => DescribeAssetModelResponse
);
export var ListAssetModels = op(
  n0,
  _LAM,
  {
    [_ht]: ["GET", "/asset-models", 200],
    [_end]: ["api."],
  },
  () => ListAssetModelsRequest,
  () => ListAssetModelsResponse
);
export var PutAssetModelInterfaceRelationship = op(
  n0,
  _PAMIR,
  {
    [_ht]: [
      "PUT",
      "/asset-models/{assetModelId}/interface/{interfaceAssetModelId}/asset-model-interface-relationship",
      202,
    ],
    [_end]: ["api."],
  },
  () => PutAssetModelInterfaceRelationshipRequest,
  () => PutAssetModelInterfaceRelationshipResponse
);
export var UpdateAssetModel = op(
  n0,
  _UAM,
  {
    [_ht]: ["PUT", "/asset-models/{assetModelId}", 202],
    [_end]: ["api."],
  },
  () => UpdateAssetModelRequest,
  () => UpdateAssetModelResponse
);
export var UpdateAssetModelCompositeModel = op(
  n0,
  _UAMCM,
  {
    [_ht]: ["PUT", "/asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}", 202],
    [_end]: ["api."],
  },
  () => UpdateAssetModelCompositeModelRequest,
  () => UpdateAssetModelCompositeModelResponse
);

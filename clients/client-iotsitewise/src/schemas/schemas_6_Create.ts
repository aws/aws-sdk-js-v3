// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { TooManyTagsException as __TooManyTagsException } from "../models/index";
import {
  _aA,
  _aDs,
  _aEI,
  _aIs,
  _ala,
  _aMA,
  _aMCM,
  _AMCMD,
  _AMCMDs,
  _aMD,
  _aMEI,
  _aMH,
  _AMHD,
  _AMHDs,
  _aMI,
  _aMN,
  _aMPs,
  _aMS,
  _aMT,
  _aNs,
  _aPA,
  _aPI,
  _aPIc,
  _aPP,
  _aPR,
  _aS,
  _c,
  _CA,
  _CAM,
  _cAMI,
  _CAMR,
  _CAMRr,
  _CAP,
  _CAPR,
  _CAPRr,
  _CAR,
  _CARr,
  _CCM,
  _CCMR,
  _CCMRr,
  _CDR,
  _CDr,
  _CDre,
  _CDRr,
  _CDRre,
  _CDRrea,
  _CG,
  _CGR,
  _CGRr,
  _cMA,
  _cMC,
  _cMD,
  _cMDB,
  _cMIo,
  _cMN,
  _cMS,
  _CP,
  _CPR,
  _CPr,
  _CPRr,
  _CPRre,
  _CPRrea,
  _cT,
  _d,
  _dA,
  _dAa,
  _dD,
  _dDa,
  _dDat,
  _dI,
  _dIa,
  _dN,
  _dNa,
  _dS,
  _dSa,
  _e,
  _eI,
  _end,
  _gA,
  _gI,
  _gN,
  _gP,
  _gV,
  _hE,
  _hQ,
  _ht,
  _i,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _n,
  _nSE,
  _pAM,
  _pAo,
  _pAr,
  _pCE,
  _pD,
  _pDr,
  _pIo,
  _pIr,
  _pLIF,
  _pN,
  _pNr,
  _pr,
  _pS,
  _pSU,
  _pT,
  _pTC,
  _rA,
  _rAo,
  _rN,
  _sAI,
  _ta,
  _TMTE,
  _TRa,
  _TRR,
  _TRRa,
  _ty,
  n0,
} from "./schemas_0";
import { ComputationModelConfiguration, ComputationModelDataBinding, DatasetSource } from "./schemas_2_Computation";
import { AssetModelPropertyDefinitions, AssetModelStatus } from "./schemas_5_Asset";
import { Alarms, Email, Identity, ImageFile, PortalTypeConfiguration, Resource } from "./schemas_10_Access";
import { PortalStatus } from "./schemas_11_Portal";
import { AssetStatus } from "./schemas_18_Asset";
import { DatasetStatus } from "./schemas_24_Dataset";
import { GatewayPlatform } from "./schemas_25_Gateway";
import { ComputationModelStatus } from "./schemas_35_Computation";

/* eslint no-var: 0 */

export var AssetModelCompositeModelDefinition = struct(
  n0,
  _AMCMD,
  0,
  [_i, _eI, _n, _d, _ty, _pr],
  [0, 0, 0, 0, 0, () => AssetModelPropertyDefinitions]
);
export var AssetModelHierarchyDefinition = struct(n0, _AMHD, 0, [_i, _eI, _n, _cAMI], [0, 0, 0, 0]);
export var CreateAccessPolicyRequest = struct(
  n0,
  _CAPR,
  0,
  [_aPI, _aPR, _aPP, _cT, _ta],
  [() => Identity, () => Resource, 0, [0, 4], 128 | 0]
);
export var CreateAccessPolicyResponse = struct(n0, _CAPRr, 0, [_aPIc, _aPA], [0, 0]);
export var CreateAssetModelRequest = struct(
  n0,
  _CAMR,
  0,
  [_aMN, _aMT, _aMI, _aMEI, _aMD, _aMPs, _aMH, _aMCM, _cT, _ta],
  [
    0,
    0,
    0,
    0,
    0,
    () => AssetModelPropertyDefinitions,
    () => AssetModelHierarchyDefinitions,
    () => AssetModelCompositeModelDefinitions,
    [0, 4],
    128 | 0,
  ]
);
export var CreateAssetModelResponse = struct(n0, _CAMRr, 0, [_aMI, _aMA, _aMS], [0, 0, () => AssetModelStatus]);
export var CreateAssetRequest = struct(
  n0,
  _CAR,
  0,
  [_aNs, _aMI, _aIs, _aEI, _cT, _ta, _aDs],
  [0, 0, 0, 0, [0, 4], 128 | 0, 0]
);
export var CreateAssetResponse = struct(n0, _CARr, 0, [_aIs, _aA, _aS], [0, 0, () => AssetStatus]);
export var CreateComputationModelRequest = struct(
  n0,
  _CCMR,
  0,
  [_cMN, _cMD, _cMC, _cMDB, _cT, _ta],
  [0, 0, () => ComputationModelConfiguration, () => ComputationModelDataBinding, [0, 4], 128 | 0]
);
export var CreateComputationModelResponse = struct(
  n0,
  _CCMRr,
  0,
  [_cMIo, _cMA, _cMS],
  [0, 0, () => ComputationModelStatus]
);
export var CreateDashboardRequest = struct(
  n0,
  _CDR,
  0,
  [_pIr, _dN, _dD, _dDa, _cT, _ta],
  [0, 0, 0, 0, [0, 4], 128 | 0]
);
export var CreateDashboardResponse = struct(n0, _CDRr, 0, [_dI, _dA], [0, 0]);
export var CreateDatasetRequest = struct(
  n0,
  _CDRre,
  0,
  [_dIa, _dNa, _dDat, _dS, _cT, _ta],
  [0, 0, 0, () => DatasetSource, [0, 4], 128 | 0]
);
export var CreateDatasetResponse = struct(n0, _CDRrea, 0, [_dIa, _dAa, _dSa], [0, 0, () => DatasetStatus]);
export var CreateGatewayRequest = struct(n0, _CGR, 0, [_gN, _gP, _gV, _ta], [0, () => GatewayPlatform, 0, 128 | 0]);
export var CreateGatewayResponse = struct(n0, _CGRr, 0, [_gI, _gA], [0, 0]);
export var CreatePortalRequest = struct(
  n0,
  _CPR,
  0,
  [_pN, _pD, _pCE, _cT, _pLIF, _rAo, _ta, _pAM, _nSE, _ala, _pT, _pTC],
  [
    0,
    0,
    [() => Email, 0],
    [0, 4],
    () => ImageFile,
    0,
    128 | 0,
    0,
    [() => Email, 0],
    () => Alarms,
    0,
    () => PortalTypeConfiguration,
  ]
);
export var CreatePortalResponse = struct(n0, _CPRr, 0, [_pIo, _pAo, _pSU, _pS, _sAI], [0, 0, 0, () => PortalStatus, 0]);
export var CreateProjectRequest = struct(n0, _CPRre, 0, [_pIo, _pNr, _pDr, _cT, _ta], [0, 0, 0, [0, 4], 128 | 0]);
export var CreateProjectResponse = struct(n0, _CPRrea, 0, [_pIr, _pAr], [0, 0]);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_rA],
  [
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [128 | 0]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_rA, _ta],
  [
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
    128 | 0,
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _rN],
  [0, 0],

  __TooManyTagsException
);
export var AssetModelCompositeModelDefinitions = list(n0, _AMCMDs, 0, () => AssetModelCompositeModelDefinition);
export var AssetModelHierarchyDefinitions = list(n0, _AMHDs, 0, () => AssetModelHierarchyDefinition);
export var TagMap = 128 | 0;

export var CreateAccessPolicy = op(
  n0,
  _CAP,
  {
    [_ht]: ["POST", "/access-policies", 201],
    [_end]: ["monitor."],
  },
  () => CreateAccessPolicyRequest,
  () => CreateAccessPolicyResponse
);
export var CreateAsset = op(
  n0,
  _CA,
  {
    [_ht]: ["POST", "/assets", 202],
    [_end]: ["api."],
  },
  () => CreateAssetRequest,
  () => CreateAssetResponse
);
export var CreateAssetModel = op(
  n0,
  _CAM,
  {
    [_ht]: ["POST", "/asset-models", 202],
    [_end]: ["api."],
  },
  () => CreateAssetModelRequest,
  () => CreateAssetModelResponse
);
export var CreateComputationModel = op(
  n0,
  _CCM,
  {
    [_ht]: ["POST", "/computation-models", 202],
    [_end]: ["api."],
  },
  () => CreateComputationModelRequest,
  () => CreateComputationModelResponse
);
export var CreateDashboard = op(
  n0,
  _CDr,
  {
    [_ht]: ["POST", "/dashboards", 201],
    [_end]: ["monitor."],
  },
  () => CreateDashboardRequest,
  () => CreateDashboardResponse
);
export var CreateDataset = op(
  n0,
  _CDre,
  {
    [_ht]: ["POST", "/datasets", 202],
    [_end]: ["api."],
  },
  () => CreateDatasetRequest,
  () => CreateDatasetResponse
);
export var CreateGateway = op(
  n0,
  _CG,
  {
    [_ht]: ["POST", "/20200301/gateways", 201],
    [_end]: ["api."],
  },
  () => CreateGatewayRequest,
  () => CreateGatewayResponse
);
export var CreatePortal = op(
  n0,
  _CP,
  {
    [_ht]: ["POST", "/portals", 202],
    [_end]: ["monitor."],
  },
  () => CreatePortalRequest,
  () => CreatePortalResponse
);
export var CreateProject = op(
  n0,
  _CPr,
  {
    [_ht]: ["POST", "/projects", 201],
    [_end]: ["monitor."],
  },
  () => CreateProjectRequest,
  () => CreateProjectResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_ht]: ["GET", "/tags", 200],
    [_end]: ["api."],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_ht]: ["POST", "/tags", 200],
    [_end]: ["api."],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);

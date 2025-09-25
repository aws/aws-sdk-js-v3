// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ResourceLimitExceededException as __ResourceLimitExceededException,
  ResourcePropagationDelayException as __ResourcePropagationDelayException,
  UnsupportedAvailabilityZoneException as __UnsupportedAvailabilityZoneException,
} from "../models/index";
import {
  _aC,
  _aEc,
  _aM,
  _aR,
  _as,
  _aT,
  _bCCAP,
  _bSMA,
  _c,
  _CACR,
  _CAE,
  _CAER,
  _CAERr,
  _CC,
  _cC,
  _cCo,
  _CCRon,
  _CCRr,
  _CCRre,
  _CEAS,
  _CEASR,
  _CEASRr,
  _CFP,
  _CFPR,
  _CFPRr,
  _cl,
  _CN,
  _cN,
  _CNR,
  _CNRr,
  _CPIA,
  _CPIAR,
  _CPIARr,
  _cPIT,
  _cPP,
  _CPPR,
  _cRT,
  _cTa,
  _dP,
  _dS,
  _dST,
  _e,
  _eC,
  _fP,
  _fPN,
  _gN,
  _hE,
  _ht,
  _iT,
  _kG,
  _kNC,
  _l,
  _la,
  _lQ,
  _lT,
  _lTa,
  _m,
  _n,
  _nam,
  _nN,
  _no,
  _nR,
  _nRC,
  _oA,
  _oC,
  _OCR,
  _pA,
  _pERA,
  _pr,
  _rA,
  _rAe,
  _RC,
  _RCR,
  _RCRe,
  _RLEE,
  _rNC,
  _RPDE,
  _rV,
  _rVC,
  _sA,
  _sC,
  _sCc,
  _se,
  _sI,
  _su,
  _sub,
  _t,
  _ta,
  _te,
  _tRA,
  _ty,
  _u,
  _UAZE,
  _uC,
  _uP,
  _v,
  _vZ,
  _zSC,
  n0,
} from "./schemas_0";
import {
  Cluster,
  ComputeConfigRequest,
  KubernetesNetworkConfigRequest,
  Logging,
  RemoteNetworkConfigRequest,
  StorageConfigRequest,
  UpgradePolicyRequest,
  VpcConfigRequest,
  ZonalShiftConfigRequest,
} from "./schemas_2_Cluster";
import {
  Nodegroup,
  NodegroupScalingConfig,
  NodegroupUpdateConfig,
  NodeRepairConfig,
  RemoteAccessConfig,
  taintsList,
} from "./schemas_4_Nodegroup";
import { EksAnywhereSubscription, EksAnywhereSubscriptionTerm } from "./schemas_5_Anywhere";
import { FargateProfile, FargateProfileSelectors } from "./schemas_18_Fargate";
import { AccessEntry } from "./schemas_22_AccessEntry";
import { LaunchTemplateSpecification } from "./schemas_24_Nodegroup";
import { PodIdentityAssociation } from "./schemas_28_Association";
import { EncryptionConfigList } from "./schemas_29_Cluster";

/* eslint no-var: 0 */

export var ConnectorConfigRequest = struct(n0, _CCRon, 0, [_rA, _pr], [0, 0]);
export var ControlPlanePlacementRequest = struct(n0, _CPPR, 0, [_gN], [0]);
export var CreateAccessConfigRequest = struct(n0, _CACR, 0, [_bCCAP, _aM], [2, 0]);
export var CreateAccessEntryRequest = struct(
  n0,
  _CAER,
  0,
  [_cN, _pA, _kG, _t, _cRT, _u, _ty],
  [[0, 1], 0, 64 | 0, 128 | 0, [0, 4], 0, 0]
);
export var CreateAccessEntryResponse = struct(n0, _CAERr, 0, [_aEc], [() => AccessEntry]);
export var CreateClusterRequest = struct(
  n0,
  _CCRr,
  0,
  [_n, _v, _rA, _rVC, _kNC, _l, _cRT, _t, _eC, _oC, _aC, _bSMA, _uP, _zSC, _rNC, _cCo, _sC, _dP],
  [
    0,
    0,
    0,
    () => VpcConfigRequest,
    () => KubernetesNetworkConfigRequest,
    () => Logging,
    [0, 4],
    128 | 0,
    () => EncryptionConfigList,
    () => OutpostConfigRequest,
    () => CreateAccessConfigRequest,
    2,
    () => UpgradePolicyRequest,
    () => ZonalShiftConfigRequest,
    () => RemoteNetworkConfigRequest,
    () => ComputeConfigRequest,
    () => StorageConfigRequest,
    2,
  ]
);
export var CreateClusterResponse = struct(n0, _CCRre, 0, [_cl], [() => Cluster]);
export var CreateEksAnywhereSubscriptionRequest = struct(
  n0,
  _CEASR,
  0,
  [_n, _te, _lQ, _lT, _aR, _cRT, _t],
  [0, () => EksAnywhereSubscriptionTerm, 1, 0, 2, [0, 4], 128 | 0]
);
export var CreateEksAnywhereSubscriptionResponse = struct(n0, _CEASRr, 0, [_su], [() => EksAnywhereSubscription]);
export var CreateFargateProfileRequest = struct(
  n0,
  _CFPR,
  0,
  [_fPN, _cN, _pERA, _sub, _se, _cRT, _t],
  [0, [0, 1], 0, 64 | 0, () => FargateProfileSelectors, [0, 4], 128 | 0]
);
export var CreateFargateProfileResponse = struct(n0, _CFPRr, 0, [_fP], [() => FargateProfile]);
export var CreateNodegroupRequest = struct(
  n0,
  _CNR,
  0,
  [_cN, _nN, _sCc, _dS, _sub, _iT, _aT, _rAe, _nR, _la, _ta, _t, _cRT, _lTa, _uC, _nRC, _cTa, _v, _rV],
  [
    [0, 1],
    0,
    () => NodegroupScalingConfig,
    1,
    64 | 0,
    64 | 0,
    0,
    () => RemoteAccessConfig,
    0,
    128 | 0,
    () => taintsList,
    128 | 0,
    [0, 4],
    () => LaunchTemplateSpecification,
    () => NodegroupUpdateConfig,
    () => NodeRepairConfig,
    0,
    0,
    0,
  ]
);
export var CreateNodegroupResponse = struct(n0, _CNRr, 0, [_no], [() => Nodegroup]);
export var CreatePodIdentityAssociationRequest = struct(
  n0,
  _CPIAR,
  0,
  [_cN, _nam, _sA, _rA, _cRT, _t, _dST, _tRA],
  [[0, 1], 0, 0, 0, [0, 4], 128 | 0, 2, 0]
);
export var CreatePodIdentityAssociationResponse = struct(n0, _CPIARr, 0, [_as], [() => PodIdentityAssociation]);
export var OutpostConfigRequest = struct(
  n0,
  _OCR,
  0,
  [_oA, _cPIT, _cPP],
  [64 | 0, 0, () => ControlPlanePlacementRequest]
);
export var RegisterClusterRequest = struct(
  n0,
  _RCR,
  0,
  [_n, _cC, _cRT, _t],
  [0, () => ConnectorConfigRequest, [0, 4], 128 | 0]
);
export var RegisterClusterResponse = struct(n0, _RCRe, 0, [_cl], [() => Cluster]);
export var ResourceLimitExceededException = error(
  n0,
  _RLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_cN, _nN, _sI, _m],
  [0, 0, 0, 0],

  __ResourceLimitExceededException
);
export var ResourcePropagationDelayException = error(
  n0,
  _RPDE,
  {
    [_e]: _c,
    [_hE]: 428,
  },
  [_m],
  [0],

  __ResourcePropagationDelayException
);
export var UnsupportedAvailabilityZoneException = error(
  n0,
  _UAZE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _cN, _nN, _vZ],
  [0, 0, 0, 64 | 0],

  __UnsupportedAvailabilityZoneException
);
export var CreateAccessEntry = op(
  n0,
  _CAE,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/access-entries", 200],
  },
  () => CreateAccessEntryRequest,
  () => CreateAccessEntryResponse
);
export var CreateCluster = op(
  n0,
  _CC,
  {
    [_ht]: ["POST", "/clusters", 200],
  },
  () => CreateClusterRequest,
  () => CreateClusterResponse
);
export var CreateEksAnywhereSubscription = op(
  n0,
  _CEAS,
  {
    [_ht]: ["POST", "/eks-anywhere-subscriptions", 200],
  },
  () => CreateEksAnywhereSubscriptionRequest,
  () => CreateEksAnywhereSubscriptionResponse
);
export var CreateFargateProfile = op(
  n0,
  _CFP,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/fargate-profiles", 200],
  },
  () => CreateFargateProfileRequest,
  () => CreateFargateProfileResponse
);
export var CreateNodegroup = op(
  n0,
  _CN,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/node-groups", 200],
  },
  () => CreateNodegroupRequest,
  () => CreateNodegroupResponse
);
export var CreatePodIdentityAssociation = op(
  n0,
  _CPIA,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/pod-identity-associations", 200],
  },
  () => CreatePodIdentityAssociationRequest,
  () => CreatePodIdentityAssociationResponse
);
export var RegisterCluster = op(
  n0,
  _RC,
  {
    [_ht]: ["POST", "/cluster-registrations", 200],
  },
  () => RegisterClusterRequest,
  () => RegisterClusterResponse
);

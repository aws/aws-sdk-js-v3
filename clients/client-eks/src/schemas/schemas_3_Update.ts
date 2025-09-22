// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidStateException as __InvalidStateException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _aC,
  _AEC,
  _AECR,
  _AECRs,
  _AIPC,
  _AIPCR,
  _AIPCRs,
  _aM,
  _aN,
  _aOUL,
  _aOUT,
  _aV,
  _c,
  _cA,
  _cCo,
  _cI,
  _cN,
  _cRT,
  _cV,
  _DIPCi,
  _DIPCRi,
  _DIPCRis,
  _dP,
  _DU,
  _DUR,
  _DURe,
  _e,
  _eC,
  _eCr,
  _ED,
  _EDr,
  _eM,
  _er,
  _fo,
  _gC,
  _gP,
  _hE,
  _hQ,
  _ht,
  _id_,
  _iPC,
  _iPCN,
  _ISE,
  _iU,
  _kNC,
  _l,
  _la,
  _lTa,
  _m,
  _n,
  _nN,
  _nRC,
  _oi,
  _OIPCR,
  _pa,
  _pIA,
  _rCe,
  _rCeq,
  _rI,
  _rL,
  _rNC,
  _rT,
  _rV,
  _rVC,
  _s,
  _sARA,
  _sC,
  _sCc,
  _t,
  _ta,
  _TE,
  _ty,
  _U,
  _UA,
  _UACR,
  _UAR,
  _UARp,
  _uC,
  _UCC,
  _UCCR,
  _UCCRp,
  _uCs,
  _UCV,
  _UCVR,
  _UCVRp,
  _uI,
  _ULP,
  _UNC,
  _UNCR,
  _UNCRp,
  _UNV,
  _UNVR,
  _UNVRp,
  _UP,
  _uP,
  _up,
  _UPp,
  _uPs,
  _UTP,
  _v,
  _va,
  _zSC,
  n0,
} from "./schemas_0";
import { AddonPodIdentityAssociationsList } from "./schemas_1_Addon";
import {
  ComputeConfigRequest,
  KubernetesNetworkConfigRequest,
  Logging,
  RemoteNetworkConfigRequest,
  StorageConfigRequest,
  UpgradePolicyRequest,
  VpcConfigRequest,
  ZonalShiftConfigRequest,
} from "./schemas_2_Cluster";
import { NodegroupScalingConfig, NodegroupUpdateConfig, NodeRepairConfig, taintsList } from "./schemas_4_Nodegroup";
import { IdentityProviderConfig } from "./schemas_11_IdentityProvider";
import { LaunchTemplateSpecification } from "./schemas_24_Nodegroup";
import { EncryptionConfigList } from "./schemas_29_Cluster";

/* eslint no-var: 0 */

export var AssociateEncryptionConfigRequest = struct(
  n0,
  _AECR,
  0,
  [_cN, _eC, _cRT],
  [[0, 1], () => EncryptionConfigList, [0, 4]]
);
export var AssociateEncryptionConfigResponse = struct(n0, _AECRs, 0, [_up], [() => Update]);
export var AssociateIdentityProviderConfigRequest = struct(
  n0,
  _AIPCR,
  0,
  [_cN, _oi, _t, _cRT],
  [[0, 1], () => OidcIdentityProviderConfigRequest, 128 | 0, [0, 4]]
);
export var AssociateIdentityProviderConfigResponse = struct(n0, _AIPCRs, 0, [_up, _t], [() => Update, 128 | 0]);
export var DescribeUpdateRequest = struct(
  n0,
  _DUR,
  0,
  [_n, _uI, _nN, _aN],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nN,
      },
    ],
    [
      0,
      {
        [_hQ]: _aN,
      },
    ],
  ]
);
export var DescribeUpdateResponse = struct(n0, _DURe, 0, [_up], [() => Update]);
export var DisassociateIdentityProviderConfigRequest = struct(
  n0,
  _DIPCRi,
  0,
  [_cN, _iPC, _cRT],
  [[0, 1], () => IdentityProviderConfig, [0, 4]]
);
export var DisassociateIdentityProviderConfigResponse = struct(n0, _DIPCRis, 0, [_up], [() => Update]);
export var ErrorDetail = struct(n0, _ED, 0, [_eCr, _eM, _rI], [0, 0, 64 | 0]);
export var InvalidStateException = error(
  n0,
  _ISE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_cN, _m],
  [0, 0],

  __InvalidStateException
);
export var OidcIdentityProviderConfigRequest = struct(
  n0,
  _OIPCR,
  0,
  [_iPCN, _iU, _cI, _uCs, _uPs, _gC, _gP, _rCeq],
  [0, 0, 0, 0, 0, 0, 0, 128 | 0]
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_cN, _m],
  [0, 0],

  __ThrottlingException
);
export var Update = struct(
  n0,
  _U,
  0,
  [_id_, _s, _ty, _pa, _cA, _er],
  [0, 0, 0, () => UpdateParams, 4, () => ErrorDetails]
);
export var UpdateAccessConfigRequest = struct(n0, _UACR, 0, [_aM], [0]);
export var UpdateAddonRequest = struct(
  n0,
  _UAR,
  0,
  [_cN, _aN, _aV, _sARA, _rCe, _cRT, _cV, _pIA],
  [[0, 1], [0, 1], 0, 0, 0, [0, 4], 0, () => AddonPodIdentityAssociationsList]
);
export var UpdateAddonResponse = struct(n0, _UARp, 0, [_up], [() => Update]);
export var UpdateClusterConfigRequest = struct(
  n0,
  _UCCR,
  0,
  [_n, _rVC, _l, _cRT, _aC, _uP, _zSC, _cCo, _kNC, _sC, _rNC, _dP],
  [
    [0, 1],
    () => VpcConfigRequest,
    () => Logging,
    [0, 4],
    () => UpdateAccessConfigRequest,
    () => UpgradePolicyRequest,
    () => ZonalShiftConfigRequest,
    () => ComputeConfigRequest,
    () => KubernetesNetworkConfigRequest,
    () => StorageConfigRequest,
    () => RemoteNetworkConfigRequest,
    2,
  ]
);
export var UpdateClusterConfigResponse = struct(n0, _UCCRp, 0, [_up], [() => Update]);
export var UpdateClusterVersionRequest = struct(n0, _UCVR, 0, [_n, _v, _cRT, _fo], [[0, 1], 0, [0, 4], 2]);
export var UpdateClusterVersionResponse = struct(n0, _UCVRp, 0, [_up], [() => Update]);
export var UpdateLabelsPayload = struct(n0, _ULP, 0, [_aOUL, _rL], [128 | 0, 64 | 0]);
export var UpdateNodegroupConfigRequest = struct(
  n0,
  _UNCR,
  0,
  [_cN, _nN, _la, _ta, _sCc, _uC, _nRC, _cRT],
  [
    [0, 1],
    [0, 1],
    () => UpdateLabelsPayload,
    () => UpdateTaintsPayload,
    () => NodegroupScalingConfig,
    () => NodegroupUpdateConfig,
    () => NodeRepairConfig,
    [0, 4],
  ]
);
export var UpdateNodegroupConfigResponse = struct(n0, _UNCRp, 0, [_up], [() => Update]);
export var UpdateNodegroupVersionRequest = struct(
  n0,
  _UNVR,
  0,
  [_cN, _nN, _v, _rV, _lTa, _fo, _cRT],
  [[0, 1], [0, 1], 0, 0, () => LaunchTemplateSpecification, 2, [0, 4]]
);
export var UpdateNodegroupVersionResponse = struct(n0, _UNVRp, 0, [_up], [() => Update]);
export var UpdateParam = struct(n0, _UP, 0, [_ty, _va], [0, 0]);
export var UpdateTaintsPayload = struct(n0, _UTP, 0, [_aOUT, _rT], [() => taintsList, () => taintsList]);
export var ErrorDetails = list(n0, _EDr, 0, () => ErrorDetail);
export var labelsKeyList = 64 | 0;

export var UpdateParams = list(n0, _UPp, 0, () => UpdateParam);
export var AssociateEncryptionConfig = op(
  n0,
  _AEC,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/encryption-config/associate", 200],
  },
  () => AssociateEncryptionConfigRequest,
  () => AssociateEncryptionConfigResponse
);
export var AssociateIdentityProviderConfig = op(
  n0,
  _AIPC,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/identity-provider-configs/associate", 200],
  },
  () => AssociateIdentityProviderConfigRequest,
  () => AssociateIdentityProviderConfigResponse
);
export var DescribeUpdate = op(
  n0,
  _DU,
  {
    [_ht]: ["GET", "/clusters/{name}/updates/{updateId}", 200],
  },
  () => DescribeUpdateRequest,
  () => DescribeUpdateResponse
);
export var DisassociateIdentityProviderConfig = op(
  n0,
  _DIPCi,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/identity-provider-configs/disassociate", 200],
  },
  () => DisassociateIdentityProviderConfigRequest,
  () => DisassociateIdentityProviderConfigResponse
);
export var UpdateAddon = op(
  n0,
  _UA,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/addons/{addonName}/update", 200],
  },
  () => UpdateAddonRequest,
  () => UpdateAddonResponse
);
export var UpdateClusterConfig = op(
  n0,
  _UCC,
  {
    [_ht]: ["POST", "/clusters/{name}/update-config", 200],
  },
  () => UpdateClusterConfigRequest,
  () => UpdateClusterConfigResponse
);
export var UpdateClusterVersion = op(
  n0,
  _UCV,
  {
    [_ht]: ["POST", "/clusters/{name}/updates", 200],
  },
  () => UpdateClusterVersionRequest,
  () => UpdateClusterVersionResponse
);
export var UpdateNodegroupConfig = op(
  n0,
  _UNC,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/node-groups/{nodegroupName}/update-config", 200],
  },
  () => UpdateNodegroupConfigRequest,
  () => UpdateNodegroupConfigResponse
);
export var UpdateNodegroupVersion = op(
  n0,
  _UNV,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/node-groups/{nodegroupName}/update-version", 200],
  },
  () => UpdateNodegroupVersionRequest,
  () => UpdateNodegroupVersionResponse
);

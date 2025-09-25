// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { AccessDeniedException as __AccessDeniedException } from "../models/index";
import {
  _a,
  _aC,
  _aCc,
  _ACR,
  _ADE,
  _aE,
  _aI,
  _aM,
  _bCCAP,
  _BS,
  _bS,
  _C,
  _c,
  _cA,
  _cAe,
  _cC,
  _cCo,
  _CCR,
  _CCRo,
  _CCRonn,
  _CH,
  _CI,
  _ci,
  _CIL,
  _Cl,
  _cL,
  _cl,
  _co,
  _cPIT,
  _cPP,
  _CPPRo,
  _cRT,
  _cSGI,
  _d,
  _DC,
  _DCe,
  _DCes,
  _DCR,
  _DCRe,
  _DCRer,
  _DCRere,
  _DCRes,
  _DCResc,
  _dP,
  _e,
  _eC,
  _ELB,
  _eLB,
  _en,
  _end,
  _ePA,
  _ePAn,
  _gN,
  _h,
  _hE,
  _ht,
  _I,
  _i,
  _id,
  _id_,
  _iF,
  _is,
  _kNC,
  _KNCR,
  _KNCRu,
  _l,
  _Lo,
  _LS,
  _LSo,
  _m,
  _n,
  _nP,
  _nRA,
  _oA,
  _oC,
  _OCRu,
  _oi,
  _OIDC,
  _pAC,
  _pr,
  _pV,
  _rA,
  _rI,
  _rNC,
  _RNCR,
  _RNCRe,
  _RNN,
  _rNN,
  _RNNL,
  _RPN,
  _rPN,
  _RPNL,
  _rVC,
  _s,
  _sC,
  _SCR,
  _SCRt,
  _sGI,
  _sIC,
  _sICe,
  _sIu,
  _sT,
  _t,
  _typ,
  _uP,
  _UPR,
  _UPRp,
  _v,
  _VCR,
  _VCRp,
  _vI,
  _zSC,
  _ZSCR,
  _ZSCRo,
  n0,
} from "./schemas_0";
import { EncryptionConfigList } from "./schemas_29_Cluster";

/* eslint no-var: 0 */

export var AccessConfigResponse = struct(n0, _ACR, 0, [_bCCAP, _aM], [2, 0]);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var BlockStorage = struct(n0, _BS, 0, [_en], [2]);
export var Certificate = struct(n0, _C, 0, [_d], [0]);
export var Cluster = struct(
  n0,
  _Cl,
  0,
  [
    _n,
    _a,
    _cA,
    _v,
    _end,
    _rA,
    _rVC,
    _kNC,
    _l,
    _id,
    _s,
    _cAe,
    _cRT,
    _pV,
    _t,
    _eC,
    _cC,
    _id_,
    _h,
    _oC,
    _aC,
    _uP,
    _zSC,
    _rNC,
    _cCo,
    _sC,
    _dP,
  ],
  [
    0,
    0,
    4,
    0,
    0,
    0,
    () => VpcConfigResponse,
    () => KubernetesNetworkConfigResponse,
    () => Logging,
    () => Identity,
    0,
    () => Certificate,
    0,
    0,
    128 | 0,
    () => EncryptionConfigList,
    () => ConnectorConfigResponse,
    0,
    () => ClusterHealth,
    () => OutpostConfigResponse,
    () => AccessConfigResponse,
    () => UpgradePolicyResponse,
    () => ZonalShiftConfigResponse,
    () => RemoteNetworkConfigResponse,
    () => ComputeConfigResponse,
    () => StorageConfigResponse,
    2,
  ]
);
export var ClusterHealth = struct(n0, _CH, 0, [_i], [() => ClusterIssueList]);
export var ClusterIssue = struct(n0, _CI, 0, [_co, _m, _rI], [0, 0, 64 | 0]);
export var ComputeConfigRequest = struct(n0, _CCR, 0, [_en, _nP, _nRA], [2, 64 | 0, 0]);
export var ComputeConfigResponse = struct(n0, _CCRo, 0, [_en, _nP, _nRA], [2, 64 | 0, 0]);
export var ConnectorConfigResponse = struct(n0, _CCRonn, 0, [_aI, _aCc, _aE, _pr, _rA], [0, 0, 4, 0, 0]);
export var ControlPlanePlacementResponse = struct(n0, _CPPRo, 0, [_gN], [0]);
export var DeleteClusterRequest = struct(n0, _DCR, 0, [_n], [[0, 1]]);
export var DeleteClusterResponse = struct(n0, _DCRe, 0, [_cl], [() => Cluster]);
export var DeregisterClusterRequest = struct(n0, _DCRer, 0, [_n], [[0, 1]]);
export var DeregisterClusterResponse = struct(n0, _DCRere, 0, [_cl], [() => Cluster]);
export var DescribeClusterRequest = struct(n0, _DCRes, 0, [_n], [[0, 1]]);
export var DescribeClusterResponse = struct(n0, _DCResc, 0, [_cl], [() => Cluster]);
export var ElasticLoadBalancing = struct(n0, _ELB, 0, [_en], [2]);
export var Identity = struct(n0, _I, 0, [_oi], [() => OIDC]);
export var KubernetesNetworkConfigRequest = struct(n0, _KNCR, 0, [_sIC, _iF, _eLB], [0, 0, () => ElasticLoadBalancing]);
export var KubernetesNetworkConfigResponse = struct(
  n0,
  _KNCRu,
  0,
  [_sIC, _sICe, _iF, _eLB],
  [0, 0, 0, () => ElasticLoadBalancing]
);
export var Logging = struct(n0, _Lo, 0, [_cL], [() => LogSetups]);
export var LogSetup = struct(n0, _LS, 0, [_typ, _en], [64 | 0, 2]);
export var OIDC = struct(n0, _OIDC, 0, [_is], [0]);
export var OutpostConfigResponse = struct(
  n0,
  _OCRu,
  0,
  [_oA, _cPIT, _cPP],
  [64 | 0, 0, () => ControlPlanePlacementResponse]
);
export var RemoteNetworkConfigRequest = struct(
  n0,
  _RNCR,
  0,
  [_rNN, _rPN],
  [() => RemoteNodeNetworkList, () => RemotePodNetworkList]
);
export var RemoteNetworkConfigResponse = struct(
  n0,
  _RNCRe,
  0,
  [_rNN, _rPN],
  [() => RemoteNodeNetworkList, () => RemotePodNetworkList]
);
export var RemoteNodeNetwork = struct(n0, _RNN, 0, [_ci], [64 | 0]);
export var RemotePodNetwork = struct(n0, _RPN, 0, [_ci], [64 | 0]);
export var StorageConfigRequest = struct(n0, _SCR, 0, [_bS], [() => BlockStorage]);
export var StorageConfigResponse = struct(n0, _SCRt, 0, [_bS], [() => BlockStorage]);
export var UpgradePolicyRequest = struct(n0, _UPR, 0, [_sT], [0]);
export var UpgradePolicyResponse = struct(n0, _UPRp, 0, [_sT], [0]);
export var VpcConfigRequest = struct(n0, _VCR, 0, [_sIu, _sGI, _ePA, _ePAn, _pAC], [64 | 0, 64 | 0, 2, 2, 64 | 0]);
export var VpcConfigResponse = struct(
  n0,
  _VCRp,
  0,
  [_sIu, _sGI, _cSGI, _vI, _ePA, _ePAn, _pAC],
  [64 | 0, 64 | 0, 0, 0, 2, 2, 64 | 0]
);
export var ZonalShiftConfigRequest = struct(n0, _ZSCR, 0, [_en], [2]);
export var ZonalShiftConfigResponse = struct(n0, _ZSCRo, 0, [_en], [2]);
export var ClusterIssueList = list(n0, _CIL, 0, () => ClusterIssue);
export var LogSetups = list(n0, _LSo, 0, () => LogSetup);
export var LogTypes = 64 | 0;

export var RemoteNodeNetworkList = list(n0, _RNNL, 0, () => RemoteNodeNetwork);
export var RemotePodNetworkList = list(n0, _RPNL, 0, () => RemotePodNetwork);
export var DeleteCluster = op(
  n0,
  _DC,
  {
    [_ht]: ["DELETE", "/clusters/{name}", 200],
  },
  () => DeleteClusterRequest,
  () => DeleteClusterResponse
);
export var DeregisterCluster = op(
  n0,
  _DCe,
  {
    [_ht]: ["DELETE", "/cluster-registrations/{name}", 200],
  },
  () => DeregisterClusterRequest,
  () => DeregisterClusterResponse
);
export var DescribeCluster = op(
  n0,
  _DCes,
  {
    [_ht]: ["GET", "/clusters/{name}", 200],
  },
  () => DescribeClusterRequest,
  () => DescribeClusterResponse
);

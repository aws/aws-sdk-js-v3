// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ClusterContainsContainerInstancesException as __ClusterContainsContainerInstancesException,
  ClusterContainsServicesException as __ClusterContainsServicesException,
  ClusterContainsTasksException as __ClusterContainsTasksException,
  ResourceInUseException as __ResourceInUseException,
} from "../models/index";
import {
  _a,
  _aS,
  _aSC,
  _C,
  _c,
  _cA,
  _CC,
  _CCCIE,
  _CCR,
  _CCr,
  _CCRr,
  _CCSE,
  _CCTE,
  _Cl,
  _cl,
  _clu,
  _cN,
  _co,
  _cPa,
  _CS,
  _CSCD,
  _CSCDR,
  _CSl,
  _cWEE,
  _cWLGN,
  _DCel,
  _DCes,
  _dCPS,
  _DCR,
  _DCRe,
  _DCRes,
  _DCResc,
  _e,
  _ECC,
  _eCC,
  _ECLC,
  _fa,
  _fESKKI,
  _inc,
  _kKI,
  _lC,
  _lo,
  _m,
  _MSC,
  _mSC,
  _n,
  _na,
  _PCCP,
  _PCCPR,
  _PCCPRu,
  _pTC,
  _rCIC,
  _RIUE,
  _rTC,
  _s,
  _sBN,
  _sCD,
  _se,
  _sEE,
  _sKP,
  _St,
  _st,
  _ta,
  _UC,
  _UCR,
  _UCRp,
  _UCS,
  _UCSR,
  _UCSRp,
  _v,
  Attachments,
  CapacityProviderStrategy,
  Failures,
  KeyValuePair,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Cluster = struct(
  n0,
  _C,
  0,
  [_cA, _cN, _co, _s, _rCIC, _rTC, _pTC, _aSC, _st, _ta, _se, _cPa, _dCPS, _a, _aS, _sCD],
  [
    0,
    0,
    () => ClusterConfiguration,
    0,
    1,
    1,
    1,
    1,
    () => Statistics,
    () => Tags,
    () => ClusterSettings,
    64 | 0,
    () => CapacityProviderStrategy,
    () => Attachments,
    0,
    () => ClusterServiceConnectDefaults,
  ]
);
export var ClusterConfiguration = struct(
  n0,
  _CC,
  0,
  [_eCC, _mSC],
  [() => ExecuteCommandConfiguration, () => ManagedStorageConfiguration]
);
export var ClusterContainsContainerInstancesException = error(
  n0,
  _CCCIE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ClusterContainsContainerInstancesException
);
export var ClusterContainsServicesException = error(
  n0,
  _CCSE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ClusterContainsServicesException
);
export var ClusterContainsTasksException = error(
  n0,
  _CCTE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ClusterContainsTasksException
);
export var ClusterServiceConnectDefaults = struct(n0, _CSCD, 0, [_na], [0]);
export var ClusterServiceConnectDefaultsRequest = struct(n0, _CSCDR, 0, [_na], [0]);
export var ClusterSetting = struct(n0, _CS, 0, [_n, _v], [0, 0]);
export var CreateClusterRequest = struct(
  n0,
  _CCR,
  0,
  [_cN, _ta, _se, _co, _cPa, _dCPS, _sCD],
  [
    0,
    () => Tags,
    () => ClusterSettings,
    () => ClusterConfiguration,
    64 | 0,
    () => CapacityProviderStrategy,
    () => ClusterServiceConnectDefaultsRequest,
  ]
);
export var CreateClusterResponse = struct(n0, _CCRr, 0, [_cl], [() => Cluster]);
export var DeleteClusterRequest = struct(n0, _DCR, 0, [_cl], [0]);
export var DeleteClusterResponse = struct(n0, _DCRe, 0, [_cl], [() => Cluster]);
export var DescribeClustersRequest = struct(n0, _DCRes, 0, [_clu, _inc], [64 | 0, 64 | 0]);
export var DescribeClustersResponse = struct(n0, _DCResc, 0, [_clu, _fa], [() => Clusters, () => Failures]);
export var ExecuteCommandConfiguration = struct(
  n0,
  _ECC,
  0,
  [_kKI, _lo, _lC],
  [0, 0, () => ExecuteCommandLogConfiguration]
);
export var ExecuteCommandLogConfiguration = struct(n0, _ECLC, 0, [_cWLGN, _cWEE, _sBN, _sEE, _sKP], [0, 2, 0, 2, 0]);
export var ManagedStorageConfiguration = struct(n0, _MSC, 0, [_kKI, _fESKKI], [0, 0]);
export var PutClusterCapacityProvidersRequest = struct(
  n0,
  _PCCPR,
  0,
  [_cl, _cPa, _dCPS],
  [0, 64 | 0, () => CapacityProviderStrategy]
);
export var PutClusterCapacityProvidersResponse = struct(n0, _PCCPRu, 0, [_cl], [() => Cluster]);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ResourceInUseException
);
export var UpdateClusterRequest = struct(
  n0,
  _UCR,
  0,
  [_cl, _se, _co, _sCD],
  [0, () => ClusterSettings, () => ClusterConfiguration, () => ClusterServiceConnectDefaultsRequest]
);
export var UpdateClusterResponse = struct(n0, _UCRp, 0, [_cl], [() => Cluster]);
export var UpdateClusterSettingsRequest = struct(n0, _UCSR, 0, [_cl, _se], [0, () => ClusterSettings]);
export var UpdateClusterSettingsResponse = struct(n0, _UCSRp, 0, [_cl], [() => Cluster]);
export var ClusterFieldList = 64 | 0;

export var Clusters = list(n0, _Cl, 0, () => Cluster);
export var ClusterSettings = list(n0, _CSl, 0, () => ClusterSetting);
export var Statistics = list(n0, _St, 0, () => KeyValuePair);
export var CreateCluster = op(
  n0,
  _CCr,
  0,
  () => CreateClusterRequest,
  () => CreateClusterResponse
);
export var DeleteCluster = op(
  n0,
  _DCel,
  0,
  () => DeleteClusterRequest,
  () => DeleteClusterResponse
);
export var DescribeClusters = op(
  n0,
  _DCes,
  0,
  () => DescribeClustersRequest,
  () => DescribeClustersResponse
);
export var PutClusterCapacityProviders = op(
  n0,
  _PCCP,
  0,
  () => PutClusterCapacityProvidersRequest,
  () => PutClusterCapacityProvidersResponse
);
export var UpdateCluster = op(
  n0,
  _UC,
  0,
  () => UpdateClusterRequest,
  () => UpdateClusterResponse
);
export var UpdateClusterSettings = op(
  n0,
  _UCS,
  0,
  () => UpdateClusterSettingsRequest,
  () => UpdateClusterSettingsResponse
);

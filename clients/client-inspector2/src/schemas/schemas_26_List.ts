// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AEMD,
  _aEMD,
  _AEMDw,
  _aEMDw,
  _AEWI,
  _AEWIL,
  _cA,
  _CDL,
  _CDl,
  _cDl,
  _CFIFC,
  _CI,
  _CIL,
  _cl,
  _CM,
  _cM,
  _dG,
  _f,
  _GCFI,
  _GCFIR,
  _GCFIRe,
  _ht,
  _lIU,
  _mR,
  _n,
  _na,
  _nT,
  _rIe,
  _rUC,
  _sUC,
  _tDA,
  _ty,
  _wIL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AwsEcsMetadataDetails = struct(n0, _AEMD, 0, [_dG, _tDA], [0, 0]);
export var AwsEksMetadataDetails = struct(n0, _AEMDw, 0, [_n, _wIL], [0, () => AwsEksWorkloadInfoList]);
export var AwsEksWorkloadInfo = struct(n0, _AEWI, 0, [_na, _ty], [0, 0]);
export var ClusterDetails = struct(n0, _CDl, 0, [_lIU, _rUC, _sUC, _cM], [4, 1, 1, () => ClusterMetadata]);
export var ClusterForImageFilterCriteria = struct(n0, _CFIFC, 0, [_rIe], [0]);
export var ClusterInformation = struct(n0, _CI, 0, [_cA, _cDl], [0, () => ClusterDetailsList]);
export var GetClustersForImageRequest = struct(
  n0,
  _GCFIR,
  0,
  [_f, _mR, _nT],
  [() => ClusterForImageFilterCriteria, 1, 0]
);
export var GetClustersForImageResponse = struct(n0, _GCFIRe, 0, [_cl, _nT], [() => ClusterInformationList, 0]);
export var AwsEksWorkloadInfoList = list(n0, _AEWIL, 0, () => AwsEksWorkloadInfo);
export var ClusterDetailsList = list(n0, _CDL, 0, () => ClusterDetails);
export var ClusterInformationList = list(n0, _CIL, 0, () => ClusterInformation);
export var ClusterMetadata = uni(
  n0,
  _CM,
  0,
  [_aEMD, _aEMDw],
  [() => AwsEcsMetadataDetails, () => AwsEksMetadataDetails]
);
export var GetClustersForImage = op(
  n0,
  _GCFI,
  {
    [_ht]: ["POST", "/cluster/get", 200],
  },
  () => GetClustersForImageRequest,
  () => GetClustersForImageResponse
);

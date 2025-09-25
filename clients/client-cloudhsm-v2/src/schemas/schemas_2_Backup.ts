// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { CloudHsmResourceLimitExceededException as __CloudHsmResourceLimitExceededException } from "../models/index";
import {
  _AHC,
  _B,
  _BA,
  _Ba,
  _BI,
  _BP,
  _BRP,
  _BS,
  _C,
  _c,
  _CBTR,
  _CBTRR,
  _CBTRRo,
  _CC,
  _CCl,
  _CCR,
  _CCr,
  _CCRr,
  _CHRLEE,
  _CI,
  _Cl,
  _Clu,
  _CT,
  _CTo,
  _DB,
  _DBe,
  _DBes,
  _DBR,
  _DBRe,
  _DBRes,
  _DBResc,
  _DC,
  _DCe,
  _DCR,
  _DCRe,
  _DCRes,
  _DCResc,
  _DR,
  _DT,
  _e,
  _F,
  _H,
  _HC,
  _HT,
  _HTRE,
  _K,
  _LT,
  _LTR,
  _LTRi,
  _M,
  _MBA,
  _MBAR,
  _MBARo,
  _MC,
  _MCR,
  _MCRo,
  _Me,
  _MHC,
  _MR,
  _NE,
  _NT,
  _NTe,
  _PCP,
  _RB,
  _RBR,
  _RBRe,
  _RI,
  _S,
  _SA,
  _SB,
  _SBI,
  _SC,
  _SG,
  _Sh,
  _SI,
  _SM,
  _SMu,
  _SR,
  _T,
  _Ta,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _V,
  _VI,
  n0,
} from "./schemas_0";
import { Hsm } from "./schemas_5_Cluster";

/* eslint no-var: 0 */

export var Backup = struct(
  n0,
  _B,
  0,
  [_BI, _BA, _BS, _CI, _CT, _CTo, _NE, _SR, _SB, _SC, _DT, _TL, _HT, _M],
  [0, 0, 0, 0, 4, 4, 2, 0, 0, 0, 4, () => TagList, 0, 0]
);
export var BackupRetentionPolicy = struct(n0, _BRP, 0, [_T, _V], [0, 0]);
export var Certificates = struct(n0, _C, 0, [_CC, _HC, _AHC, _MHC, _CCl], [0, 0, 0, 0, 0]);
export var CloudHsmResourceLimitExceededException = error(
  n0,
  _CHRLEE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __CloudHsmResourceLimitExceededException
);
export var Cluster = struct(
  n0,
  _Cl,
  0,
  [_BP, _BRP, _CI, _CT, _H, _HT, _HTRE, _PCP, _SG, _SBI, _S, _SM, _SMu, _VI, _NT, _C, _TL, _M],
  [
    0,
    () => BackupRetentionPolicy,
    0,
    4,
    () => Hsms,
    0,
    4,
    0,
    0,
    0,
    0,
    0,
    128 | 0,
    0,
    0,
    () => Certificates,
    () => TagList,
    0,
  ]
);
export var CopyBackupToRegionRequest = struct(n0, _CBTRR, 0, [_DR, _BI, _TL], [0, 0, () => TagList]);
export var CopyBackupToRegionResponse = struct(n0, _CBTRRo, 0, [_DB], [() => DestinationBackup]);
export var CreateClusterRequest = struct(
  n0,
  _CCR,
  0,
  [_BRP, _HT, _SBI, _SI, _NT, _TL, _M],
  [() => BackupRetentionPolicy, 0, 0, 64 | 0, 0, () => TagList, 0]
);
export var CreateClusterResponse = struct(n0, _CCRr, 0, [_Cl], [() => Cluster]);
export var DeleteBackupRequest = struct(n0, _DBR, 0, [_BI], [0]);
export var DeleteBackupResponse = struct(n0, _DBRe, 0, [_B], [() => Backup]);
export var DeleteClusterRequest = struct(n0, _DCR, 0, [_CI], [0]);
export var DeleteClusterResponse = struct(n0, _DCRe, 0, [_Cl], [() => Cluster]);
export var DescribeBackupsRequest = struct(
  n0,
  _DBRes,
  0,
  [_NTe, _MR, _F, _Sh, _SA],
  [0, 1, map(n0, _F, 0, 0, 64 | 0), 2, 2]
);
export var DescribeBackupsResponse = struct(n0, _DBResc, 0, [_Ba, _NTe], [() => Backups, 0]);
export var DescribeClustersRequest = struct(n0, _DCRes, 0, [_F, _NTe, _MR], [map(n0, _F, 0, 0, 64 | 0), 0, 1]);
export var DescribeClustersResponse = struct(n0, _DCResc, 0, [_Clu, _NTe], [() => Clusters, 0]);
export var DestinationBackup = struct(n0, _DB, 0, [_CT, _SR, _SB, _SC], [4, 0, 0, 0]);
export var ListTagsRequest = struct(n0, _LTR, 0, [_RI, _NTe, _MR], [0, 0, 1]);
export var ListTagsResponse = struct(n0, _LTRi, 0, [_TL, _NTe], [() => TagList, 0]);
export var ModifyBackupAttributesRequest = struct(n0, _MBAR, 0, [_BI, _NE], [0, 2]);
export var ModifyBackupAttributesResponse = struct(n0, _MBARo, 0, [_B], [() => Backup]);
export var ModifyClusterRequest = struct(n0, _MCR, 0, [_HT, _BRP, _CI], [0, () => BackupRetentionPolicy, 0]);
export var ModifyClusterResponse = struct(n0, _MCRo, 0, [_Cl], [() => Cluster]);
export var RestoreBackupRequest = struct(n0, _RBR, 0, [_BI], [0]);
export var RestoreBackupResponse = struct(n0, _RBRe, 0, [_B], [() => Backup]);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RI, _TL], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var Backups = list(n0, _Ba, 0, () => Backup);
export var Clusters = list(n0, _Clu, 0, () => Cluster);
export var Hsms = list(n0, _H, 0, () => Hsm);
export var Strings = 64 | 0;

export var SubnetIds = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var ExternalSubnetMapping = 128 | 0;

export var Filters = map(n0, _F, 0, 0, 64 | 0);
export var CopyBackupToRegion = op(
  n0,
  _CBTR,
  0,
  () => CopyBackupToRegionRequest,
  () => CopyBackupToRegionResponse
);
export var CreateCluster = op(
  n0,
  _CCr,
  0,
  () => CreateClusterRequest,
  () => CreateClusterResponse
);
export var DeleteBackup = op(
  n0,
  _DBe,
  0,
  () => DeleteBackupRequest,
  () => DeleteBackupResponse
);
export var DeleteCluster = op(
  n0,
  _DC,
  0,
  () => DeleteClusterRequest,
  () => DeleteClusterResponse
);
export var DescribeBackups = op(
  n0,
  _DBes,
  0,
  () => DescribeBackupsRequest,
  () => DescribeBackupsResponse
);
export var DescribeClusters = op(
  n0,
  _DCe,
  0,
  () => DescribeClustersRequest,
  () => DescribeClustersResponse
);
export var ListTags = op(
  n0,
  _LT,
  0,
  () => ListTagsRequest,
  () => ListTagsResponse
);
export var ModifyBackupAttributes = op(
  n0,
  _MBA,
  0,
  () => ModifyBackupAttributesRequest,
  () => ModifyBackupAttributesResponse
);
export var ModifyCluster = op(
  n0,
  _MC,
  0,
  () => ModifyClusterRequest,
  () => ModifyClusterResponse
);
export var RestoreBackup = op(
  n0,
  _RB,
  0,
  () => RestoreBackupRequest,
  () => RestoreBackupResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);

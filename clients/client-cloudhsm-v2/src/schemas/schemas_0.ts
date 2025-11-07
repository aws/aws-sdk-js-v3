export const _AHC = "AwsHardwareCertificate";
export const _AZ = "AvailabilityZone";
export const _B = "Backup";
export const _BA = "BackupArn";
export const _BI = "BackupId";
export const _BP = "BackupPolicy";
export const _BRP = "BackupRetentionPolicy";
export const _BS = "BackupState";
export const _Ba = "Backups";
export const _C = "Certificates";
export const _CBTR = "CopyBackupToRegion";
export const _CBTRR = "CopyBackupToRegionRequest";
export const _CBTRRo = "CopyBackupToRegionResponse";
export const _CC = "ClusterCsr";
export const _CCR = "CreateClusterRequest";
export const _CCRr = "CreateClusterResponse";
export const _CCl = "ClusterCertificate";
export const _CCr = "CreateCluster";
export const _CH = "CreateHsm";
export const _CHADE = "CloudHsmAccessDeniedException";
export const _CHIFE = "CloudHsmInternalFailureException";
export const _CHIRE = "CloudHsmInvalidRequestException";
export const _CHR = "CreateHsmRequest";
export const _CHRLEE = "CloudHsmResourceLimitExceededException";
export const _CHRNFE = "CloudHsmResourceNotFoundException";
export const _CHRr = "CreateHsmResponse";
export const _CHSE = "CloudHsmServiceException";
export const _CHTE = "CloudHsmTagException";
export const _CI = "ClusterId";
export const _CT = "CreateTimestamp";
export const _CTo = "CopyTimestamp";
export const _Cl = "Cluster";
export const _Clu = "Clusters";
export const _DB = "DestinationBackup";
export const _DBR = "DeleteBackupRequest";
export const _DBRe = "DeleteBackupResponse";
export const _DBRes = "DescribeBackupsRequest";
export const _DBResc = "DescribeBackupsResponse";
export const _DBe = "DeleteBackup";
export const _DBes = "DescribeBackups";
export const _DC = "DeleteCluster";
export const _DCR = "DeleteClusterRequest";
export const _DCRe = "DeleteClusterResponse";
export const _DCRes = "DescribeClustersRequest";
export const _DCResc = "DescribeClustersResponse";
export const _DCe = "DescribeClusters";
export const _DH = "DeleteHsm";
export const _DHR = "DeleteHsmRequest";
export const _DHRe = "DeleteHsmResponse";
export const _DR = "DestinationRegion";
export const _DRP = "DeleteResourcePolicy";
export const _DRPR = "DeleteResourcePolicyRequest";
export const _DRPRe = "DeleteResourcePolicyResponse";
export const _DT = "DeleteTimestamp";
export const _EI = "EniId";
export const _EIV = "EniIpV6";
export const _EIn = "EniIp";
export const _F = "Filters";
export const _GRP = "GetResourcePolicy";
export const _GRPR = "GetResourcePolicyRequest";
export const _GRPRe = "GetResourcePolicyResponse";
export const _H = "Hsms";
export const _HC = "HsmCertificate";
export const _HI = "HsmId";
export const _HT = "HsmType";
export const _HTRE = "HsmTypeRollbackExpiration";
export const _Hs = "Hsm";
export const _IA = "IpAddress";
export const _IC = "InitializeCluster";
export const _ICR = "InitializeClusterRequest";
export const _ICRn = "InitializeClusterResponse";
export const _K = "Key";
export const _LT = "ListTags";
export const _LTR = "ListTagsRequest";
export const _LTRi = "ListTagsResponse";
export const _M = "Mode";
export const _MBA = "ModifyBackupAttributes";
export const _MBAR = "ModifyBackupAttributesRequest";
export const _MBARo = "ModifyBackupAttributesResponse";
export const _MC = "ModifyCluster";
export const _MCR = "ModifyClusterRequest";
export const _MCRo = "ModifyClusterResponse";
export const _MHC = "ManufacturerHardwareCertificate";
export const _MR = "MaxResults";
export const _Me = "Message";
export const _NE = "NeverExpires";
export const _NT = "NetworkType";
export const _NTe = "NextToken";
export const _P = "Policy";
export const _PCP = "PreCoPassword";
export const _PRP = "PutResourcePolicy";
export const _PRPR = "PutResourcePolicyRequest";
export const _PRPRu = "PutResourcePolicyResponse";
export const _RA = "ResourceArn";
export const _RB = "RestoreBackup";
export const _RBR = "RestoreBackupRequest";
export const _RBRe = "RestoreBackupResponse";
export const _RI = "ResourceId";
export const _S = "State";
export const _SA = "SortAscending";
export const _SB = "SourceBackup";
export const _SBI = "SourceBackupId";
export const _SC = "SourceCluster";
export const _SCi = "SignedCert";
export const _SG = "SecurityGroup";
export const _SI = "SubnetIds";
export const _SIu = "SubnetId";
export const _SM = "StateMessage";
export const _SMu = "SubnetMapping";
export const _SR = "SourceRegion";
export const _Sh = "Shared";
export const _T = "Type";
export const _TA = "TrustAnchor";
export const _TKL = "TagKeyList";
export const _TL = "TagList";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _Ta = "Tag";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _V = "Value";
export const _VI = "VpcId";
export const _c = "client";
export const _e = "error";
export const _s = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.cloudhsmv2";
export const n0 = "com.amazonaws.cloudhsmv2";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { CloudHSMV2ServiceException as __CloudHSMV2ServiceException } from "../models/CloudHSMV2ServiceException";
import {
  CloudHsmAccessDeniedException as __CloudHsmAccessDeniedException,
  CloudHsmInternalFailureException as __CloudHsmInternalFailureException,
  CloudHsmInvalidRequestException as __CloudHsmInvalidRequestException,
  CloudHsmResourceLimitExceededException as __CloudHsmResourceLimitExceededException,
  CloudHsmResourceNotFoundException as __CloudHsmResourceNotFoundException,
  CloudHsmServiceException as __CloudHsmServiceException,
  CloudHsmTagException as __CloudHsmTagException,
} from "../models/index";

/* eslint no-var: 0 */

export var Backup: StaticStructureSchema = [
  3,
  n0,
  _B,
  0,
  [_BI, _BA, _BS, _CI, _CT, _CTo, _NE, _SR, _SB, _SC, _DT, _TL, _HT, _M],
  [0, 0, 0, 0, 4, 4, 2, 0, 0, 0, 4, () => TagList, 0, 0],
];
export var BackupRetentionPolicy: StaticStructureSchema = [3, n0, _BRP, 0, [_T, _V], [0, 0]];
export var Certificates: StaticStructureSchema = [3, n0, _C, 0, [_CC, _HC, _AHC, _MHC, _CCl], [0, 0, 0, 0, 0]];
export var CloudHsmAccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _CHADE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],
];
TypeRegistry.for(n0).registerError(CloudHsmAccessDeniedException, __CloudHsmAccessDeniedException);

export var CloudHsmInternalFailureException: StaticErrorSchema = [
  -3,
  n0,
  _CHIFE,
  {
    [_e]: _s,
  },
  [_Me],
  [0],
];
TypeRegistry.for(n0).registerError(CloudHsmInternalFailureException, __CloudHsmInternalFailureException);

export var CloudHsmInvalidRequestException: StaticErrorSchema = [
  -3,
  n0,
  _CHIRE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],
];
TypeRegistry.for(n0).registerError(CloudHsmInvalidRequestException, __CloudHsmInvalidRequestException);

export var CloudHsmResourceLimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _CHRLEE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],
];
TypeRegistry.for(n0).registerError(CloudHsmResourceLimitExceededException, __CloudHsmResourceLimitExceededException);

export var CloudHsmResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _CHRNFE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],
];
TypeRegistry.for(n0).registerError(CloudHsmResourceNotFoundException, __CloudHsmResourceNotFoundException);

export var CloudHsmServiceException: StaticErrorSchema = [
  -3,
  n0,
  _CHSE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],
];
TypeRegistry.for(n0).registerError(CloudHsmServiceException, __CloudHsmServiceException);

export var CloudHsmTagException: StaticErrorSchema = [
  -3,
  n0,
  _CHTE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],
];
TypeRegistry.for(n0).registerError(CloudHsmTagException, __CloudHsmTagException);

export var Cluster: StaticStructureSchema = [
  3,
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
  ],
];
export var CopyBackupToRegionRequest: StaticStructureSchema = [
  3,
  n0,
  _CBTRR,
  0,
  [_DR, _BI, _TL],
  [0, 0, () => TagList],
];
export var CopyBackupToRegionResponse: StaticStructureSchema = [3, n0, _CBTRRo, 0, [_DB], [() => DestinationBackup]];
export var CreateClusterRequest: StaticStructureSchema = [
  3,
  n0,
  _CCR,
  0,
  [_BRP, _HT, _SBI, _SI, _NT, _TL, _M],
  [() => BackupRetentionPolicy, 0, 0, 64 | 0, 0, () => TagList, 0],
];
export var CreateClusterResponse: StaticStructureSchema = [3, n0, _CCRr, 0, [_Cl], [() => Cluster]];
export var CreateHsmRequest: StaticStructureSchema = [3, n0, _CHR, 0, [_CI, _AZ, _IA], [0, 0, 0]];
export var CreateHsmResponse: StaticStructureSchema = [3, n0, _CHRr, 0, [_Hs], [() => Hsm]];
export var DeleteBackupRequest: StaticStructureSchema = [3, n0, _DBR, 0, [_BI], [0]];
export var DeleteBackupResponse: StaticStructureSchema = [3, n0, _DBRe, 0, [_B], [() => Backup]];
export var DeleteClusterRequest: StaticStructureSchema = [3, n0, _DCR, 0, [_CI], [0]];
export var DeleteClusterResponse: StaticStructureSchema = [3, n0, _DCRe, 0, [_Cl], [() => Cluster]];
export var DeleteHsmRequest: StaticStructureSchema = [3, n0, _DHR, 0, [_CI, _HI, _EI, _EIn], [0, 0, 0, 0]];
export var DeleteHsmResponse: StaticStructureSchema = [3, n0, _DHRe, 0, [_HI], [0]];
export var DeleteResourcePolicyRequest: StaticStructureSchema = [3, n0, _DRPR, 0, [_RA], [0]];
export var DeleteResourcePolicyResponse: StaticStructureSchema = [3, n0, _DRPRe, 0, [_RA, _P], [0, 0]];
export var DescribeBackupsRequest: StaticStructureSchema = [
  3,
  n0,
  _DBRes,
  0,
  [_NTe, _MR, _F, _Sh, _SA],
  [0, 1, [2, n0, _F, 0, 0, 64 | 0], 2, 2],
];
export var DescribeBackupsResponse: StaticStructureSchema = [3, n0, _DBResc, 0, [_Ba, _NTe], [() => Backups, 0]];
export var DescribeClustersRequest: StaticStructureSchema = [
  3,
  n0,
  _DCRes,
  0,
  [_F, _NTe, _MR],
  [[2, n0, _F, 0, 0, 64 | 0], 0, 1],
];
export var DescribeClustersResponse: StaticStructureSchema = [3, n0, _DCResc, 0, [_Clu, _NTe], [() => Clusters, 0]];
export var DestinationBackup: StaticStructureSchema = [3, n0, _DB, 0, [_CT, _SR, _SB, _SC], [4, 0, 0, 0]];
export var GetResourcePolicyRequest: StaticStructureSchema = [3, n0, _GRPR, 0, [_RA], [0]];
export var GetResourcePolicyResponse: StaticStructureSchema = [3, n0, _GRPRe, 0, [_P], [0]];
export var Hsm: StaticStructureSchema = [
  3,
  n0,
  _Hs,
  0,
  [_AZ, _CI, _SIu, _EI, _EIn, _EIV, _HI, _HT, _S, _SM],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
export var InitializeClusterRequest: StaticStructureSchema = [3, n0, _ICR, 0, [_CI, _SCi, _TA], [0, 0, 0]];
export var InitializeClusterResponse: StaticStructureSchema = [3, n0, _ICRn, 0, [_S, _SM], [0, 0]];
export var ListTagsRequest: StaticStructureSchema = [3, n0, _LTR, 0, [_RI, _NTe, _MR], [0, 0, 1]];
export var ListTagsResponse: StaticStructureSchema = [3, n0, _LTRi, 0, [_TL, _NTe], [() => TagList, 0]];
export var ModifyBackupAttributesRequest: StaticStructureSchema = [3, n0, _MBAR, 0, [_BI, _NE], [0, 2]];
export var ModifyBackupAttributesResponse: StaticStructureSchema = [3, n0, _MBARo, 0, [_B], [() => Backup]];
export var ModifyClusterRequest: StaticStructureSchema = [
  3,
  n0,
  _MCR,
  0,
  [_HT, _BRP, _CI],
  [0, () => BackupRetentionPolicy, 0],
];
export var ModifyClusterResponse: StaticStructureSchema = [3, n0, _MCRo, 0, [_Cl], [() => Cluster]];
export var PutResourcePolicyRequest: StaticStructureSchema = [3, n0, _PRPR, 0, [_RA, _P], [0, 0]];
export var PutResourcePolicyResponse: StaticStructureSchema = [3, n0, _PRPRu, 0, [_RA, _P], [0, 0]];
export var RestoreBackupRequest: StaticStructureSchema = [3, n0, _RBR, 0, [_BI], [0]];
export var RestoreBackupResponse: StaticStructureSchema = [3, n0, _RBRe, 0, [_B], [() => Backup]];
export var Tag: StaticStructureSchema = [3, n0, _Ta, 0, [_K, _V], [0, 0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_RI, _TL], [0, () => TagList]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_RI, _TKL], [0, 64 | 0]];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var __Unit = "unit" as const;

export var CloudHSMV2ServiceException: StaticErrorSchema = [-3, _sm, "CloudHSMV2ServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(CloudHSMV2ServiceException, __CloudHSMV2ServiceException);

export var Backups: StaticListSchema = [1, n0, _Ba, 0, () => Backup];
export var Clusters: StaticListSchema = [1, n0, _Clu, 0, () => Cluster];
export var Hsms: StaticListSchema = [1, n0, _H, 0, () => Hsm];
export var Strings = 64 | 0;

export var SubnetIds = 64 | 0;

export var TagKeyList = 64 | 0;

export var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag];
export var ExternalSubnetMapping = 128 | 0;

export var Filters: StaticMapSchema = [2, n0, _F, 0, 0, 64 | 0];
export var CopyBackupToRegion: StaticOperationSchema = [
  9,
  n0,
  _CBTR,
  0,
  () => CopyBackupToRegionRequest,
  () => CopyBackupToRegionResponse,
];
export var CreateCluster: StaticOperationSchema = [
  9,
  n0,
  _CCr,
  0,
  () => CreateClusterRequest,
  () => CreateClusterResponse,
];
export var CreateHsm: StaticOperationSchema = [9, n0, _CH, 0, () => CreateHsmRequest, () => CreateHsmResponse];
export var DeleteBackup: StaticOperationSchema = [
  9,
  n0,
  _DBe,
  0,
  () => DeleteBackupRequest,
  () => DeleteBackupResponse,
];
export var DeleteCluster: StaticOperationSchema = [
  9,
  n0,
  _DC,
  0,
  () => DeleteClusterRequest,
  () => DeleteClusterResponse,
];
export var DeleteHsm: StaticOperationSchema = [9, n0, _DH, 0, () => DeleteHsmRequest, () => DeleteHsmResponse];
export var DeleteResourcePolicy: StaticOperationSchema = [
  9,
  n0,
  _DRP,
  0,
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResponse,
];
export var DescribeBackups: StaticOperationSchema = [
  9,
  n0,
  _DBes,
  0,
  () => DescribeBackupsRequest,
  () => DescribeBackupsResponse,
];
export var DescribeClusters: StaticOperationSchema = [
  9,
  n0,
  _DCe,
  0,
  () => DescribeClustersRequest,
  () => DescribeClustersResponse,
];
export var GetResourcePolicy: StaticOperationSchema = [
  9,
  n0,
  _GRP,
  0,
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse,
];
export var InitializeCluster: StaticOperationSchema = [
  9,
  n0,
  _IC,
  0,
  () => InitializeClusterRequest,
  () => InitializeClusterResponse,
];
export var ListTags: StaticOperationSchema = [9, n0, _LT, 0, () => ListTagsRequest, () => ListTagsResponse];
export var ModifyBackupAttributes: StaticOperationSchema = [
  9,
  n0,
  _MBA,
  0,
  () => ModifyBackupAttributesRequest,
  () => ModifyBackupAttributesResponse,
];
export var ModifyCluster: StaticOperationSchema = [
  9,
  n0,
  _MC,
  0,
  () => ModifyClusterRequest,
  () => ModifyClusterResponse,
];
export var PutResourcePolicy: StaticOperationSchema = [
  9,
  n0,
  _PRP,
  0,
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse,
];
export var RestoreBackup: StaticOperationSchema = [
  9,
  n0,
  _RB,
  0,
  () => RestoreBackupRequest,
  () => RestoreBackupResponse,
];
export var TagResource: StaticOperationSchema = [9, n0, _TR, 0, () => TagResourceRequest, () => TagResourceResponse];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];

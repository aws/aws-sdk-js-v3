const _AHC = "AwsHardwareCertificate";
const _AZ = "AvailabilityZone";
const _B = "Backup";
const _BA = "BackupArn";
const _BI = "BackupId";
const _BP = "BackupPolicy";
const _BRP = "BackupRetentionPolicy";
const _BS = "BackupState";
const _Ba = "Backups";
const _C = "Certificates";
const _CBTR = "CopyBackupToRegion";
const _CBTRR = "CopyBackupToRegionRequest";
const _CBTRRo = "CopyBackupToRegionResponse";
const _CC = "ClusterCsr";
const _CCR = "CreateClusterRequest";
const _CCRr = "CreateClusterResponse";
const _CCl = "ClusterCertificate";
const _CCr = "CreateCluster";
const _CH = "CreateHsm";
const _CHADE = "CloudHsmAccessDeniedException";
const _CHIFE = "CloudHsmInternalFailureException";
const _CHIRE = "CloudHsmInvalidRequestException";
const _CHR = "CreateHsmRequest";
const _CHRLEE = "CloudHsmResourceLimitExceededException";
const _CHRNFE = "CloudHsmResourceNotFoundException";
const _CHRr = "CreateHsmResponse";
const _CHSE = "CloudHsmServiceException";
const _CHTE = "CloudHsmTagException";
const _CI = "ClusterId";
const _CT = "CreateTimestamp";
const _CTo = "CopyTimestamp";
const _Cl = "Cluster";
const _Clu = "Clusters";
const _DB = "DestinationBackup";
const _DBR = "DeleteBackupRequest";
const _DBRe = "DeleteBackupResponse";
const _DBRes = "DescribeBackupsRequest";
const _DBResc = "DescribeBackupsResponse";
const _DBe = "DeleteBackup";
const _DBes = "DescribeBackups";
const _DC = "DeleteCluster";
const _DCR = "DeleteClusterRequest";
const _DCRe = "DeleteClusterResponse";
const _DCRes = "DescribeClustersRequest";
const _DCResc = "DescribeClustersResponse";
const _DCe = "DescribeClusters";
const _DH = "DeleteHsm";
const _DHR = "DeleteHsmRequest";
const _DHRe = "DeleteHsmResponse";
const _DR = "DestinationRegion";
const _DRP = "DeleteResourcePolicy";
const _DRPR = "DeleteResourcePolicyRequest";
const _DRPRe = "DeleteResourcePolicyResponse";
const _DT = "DeleteTimestamp";
const _EI = "EniId";
const _EIV = "EniIpV6";
const _EIn = "EniIp";
const _F = "Filters";
const _GRP = "GetResourcePolicy";
const _GRPR = "GetResourcePolicyRequest";
const _GRPRe = "GetResourcePolicyResponse";
const _H = "Hsms";
const _HC = "HsmCertificate";
const _HI = "HsmId";
const _HT = "HsmType";
const _HTRE = "HsmTypeRollbackExpiration";
const _Hs = "Hsm";
const _IA = "IpAddress";
const _IC = "InitializeCluster";
const _ICR = "InitializeClusterRequest";
const _ICRn = "InitializeClusterResponse";
const _K = "Key";
const _LT = "ListTags";
const _LTR = "ListTagsRequest";
const _LTRi = "ListTagsResponse";
const _M = "Mode";
const _MBA = "ModifyBackupAttributes";
const _MBAR = "ModifyBackupAttributesRequest";
const _MBARo = "ModifyBackupAttributesResponse";
const _MC = "ModifyCluster";
const _MCR = "ModifyClusterRequest";
const _MCRo = "ModifyClusterResponse";
const _MHC = "ManufacturerHardwareCertificate";
const _MR = "MaxResults";
const _Me = "Message";
const _NE = "NeverExpires";
const _NT = "NetworkType";
const _NTe = "NextToken";
const _P = "Policy";
const _PCP = "PreCoPassword";
const _PRP = "PutResourcePolicy";
const _PRPR = "PutResourcePolicyRequest";
const _PRPRu = "PutResourcePolicyResponse";
const _RA = "ResourceArn";
const _RB = "RestoreBackup";
const _RBR = "RestoreBackupRequest";
const _RBRe = "RestoreBackupResponse";
const _RI = "ResourceId";
const _S = "State";
const _SA = "SortAscending";
const _SB = "SourceBackup";
const _SBI = "SourceBackupId";
const _SC = "SourceCluster";
const _SCi = "SignedCert";
const _SG = "SecurityGroup";
const _SI = "SubnetIds";
const _SIu = "SubnetId";
const _SM = "StateMessage";
const _SMu = "SubnetMapping";
const _SR = "SourceRegion";
const _Sh = "Shared";
const _T = "Type";
const _TA = "TrustAnchor";
const _TKL = "TagKeyList";
const _TL = "TagList";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _Ta = "Tag";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _V = "Value";
const _VI = "VpcId";
const _c = "client";
const _e = "error";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.cloudhsmv2";
const n0 = "com.amazonaws.cloudhsmv2";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { CloudHSMV2ServiceException } from "../models/CloudHSMV2ServiceException";
import {
  CloudHsmAccessDeniedException,
  CloudHsmInternalFailureException,
  CloudHsmInvalidRequestException,
  CloudHsmResourceLimitExceededException,
  CloudHsmResourceNotFoundException,
  CloudHsmServiceException,
  CloudHsmTagException,
} from "../models/errors";

/* eslint no-var: 0 */
export var Backup$: StaticStructureSchema = [
  3,
  n0,
  _B,
  0,
  [_BI, _BA, _BS, _CI, _CT, _CTo, _NE, _SR, _SB, _SC, _DT, _TL, _HT, _M],
  [0, 0, 0, 0, 4, 4, 2, 0, 0, 0, 4, () => TagList, 0, 0],
];
export var BackupRetentionPolicy$: StaticStructureSchema = [3, n0, _BRP, 0, [_T, _V], [0, 0]];
export var Certificates$: StaticStructureSchema = [3, n0, _C, 0, [_CC, _HC, _AHC, _MHC, _CCl], [0, 0, 0, 0, 0]];
export var CloudHsmAccessDeniedException$: StaticErrorSchema = [-3, n0, _CHADE, { [_e]: _c }, [_Me], [0]];
TypeRegistry.for(n0).registerError(CloudHsmAccessDeniedException$, CloudHsmAccessDeniedException);
export var CloudHsmInternalFailureException$: StaticErrorSchema = [-3, n0, _CHIFE, { [_e]: _s }, [_Me], [0]];
TypeRegistry.for(n0).registerError(CloudHsmInternalFailureException$, CloudHsmInternalFailureException);
export var CloudHsmInvalidRequestException$: StaticErrorSchema = [-3, n0, _CHIRE, { [_e]: _c }, [_Me], [0]];
TypeRegistry.for(n0).registerError(CloudHsmInvalidRequestException$, CloudHsmInvalidRequestException);
export var CloudHsmResourceLimitExceededException$: StaticErrorSchema = [-3, n0, _CHRLEE, { [_e]: _c }, [_Me], [0]];
TypeRegistry.for(n0).registerError(CloudHsmResourceLimitExceededException$, CloudHsmResourceLimitExceededException);
export var CloudHsmResourceNotFoundException$: StaticErrorSchema = [-3, n0, _CHRNFE, { [_e]: _c }, [_Me], [0]];
TypeRegistry.for(n0).registerError(CloudHsmResourceNotFoundException$, CloudHsmResourceNotFoundException);
export var CloudHsmServiceException$: StaticErrorSchema = [-3, n0, _CHSE, { [_e]: _c }, [_Me], [0]];
TypeRegistry.for(n0).registerError(CloudHsmServiceException$, CloudHsmServiceException);
export var CloudHsmTagException$: StaticErrorSchema = [-3, n0, _CHTE, { [_e]: _c }, [_Me], [0]];
TypeRegistry.for(n0).registerError(CloudHsmTagException$, CloudHsmTagException);
export var Cluster$: StaticStructureSchema = [
  3,
  n0,
  _Cl,
  0,
  [_BP, _BRP, _CI, _CT, _H, _HT, _HTRE, _PCP, _SG, _SBI, _S, _SM, _SMu, _VI, _NT, _C, _TL, _M],
  [
    0,
    () => BackupRetentionPolicy$,
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
    () => Certificates$,
    () => TagList,
    0,
  ],
];
export var CopyBackupToRegionRequest$: StaticStructureSchema = [
  3,
  n0,
  _CBTRR,
  0,
  [_DR, _BI, _TL],
  [0, 0, () => TagList],
];
export var CopyBackupToRegionResponse$: StaticStructureSchema = [3, n0, _CBTRRo, 0, [_DB], [() => DestinationBackup$]];
export var CreateClusterRequest$: StaticStructureSchema = [
  3,
  n0,
  _CCR,
  0,
  [_BRP, _HT, _SBI, _SI, _NT, _TL, _M],
  [() => BackupRetentionPolicy$, 0, 0, 64 | 0, 0, () => TagList, 0],
];
export var CreateClusterResponse$: StaticStructureSchema = [3, n0, _CCRr, 0, [_Cl], [() => Cluster$]];
export var CreateHsmRequest$: StaticStructureSchema = [3, n0, _CHR, 0, [_CI, _AZ, _IA], [0, 0, 0]];
export var CreateHsmResponse$: StaticStructureSchema = [3, n0, _CHRr, 0, [_Hs], [() => Hsm$]];
export var DeleteBackupRequest$: StaticStructureSchema = [3, n0, _DBR, 0, [_BI], [0]];
export var DeleteBackupResponse$: StaticStructureSchema = [3, n0, _DBRe, 0, [_B], [() => Backup$]];
export var DeleteClusterRequest$: StaticStructureSchema = [3, n0, _DCR, 0, [_CI], [0]];
export var DeleteClusterResponse$: StaticStructureSchema = [3, n0, _DCRe, 0, [_Cl], [() => Cluster$]];
export var DeleteHsmRequest$: StaticStructureSchema = [3, n0, _DHR, 0, [_CI, _HI, _EI, _EIn], [0, 0, 0, 0]];
export var DeleteHsmResponse$: StaticStructureSchema = [3, n0, _DHRe, 0, [_HI], [0]];
export var DeleteResourcePolicyRequest$: StaticStructureSchema = [3, n0, _DRPR, 0, [_RA], [0]];
export var DeleteResourcePolicyResponse$: StaticStructureSchema = [3, n0, _DRPRe, 0, [_RA, _P], [0, 0]];
export var DescribeBackupsRequest$: StaticStructureSchema = [
  3,
  n0,
  _DBRes,
  0,
  [_NTe, _MR, _F, _Sh, _SA],
  [0, 1, [2, n0, _F, 0, 0, 64 | 0], 2, 2],
];
export var DescribeBackupsResponse$: StaticStructureSchema = [3, n0, _DBResc, 0, [_Ba, _NTe], [() => Backups, 0]];
export var DescribeClustersRequest$: StaticStructureSchema = [
  3,
  n0,
  _DCRes,
  0,
  [_F, _NTe, _MR],
  [[2, n0, _F, 0, 0, 64 | 0], 0, 1],
];
export var DescribeClustersResponse$: StaticStructureSchema = [3, n0, _DCResc, 0, [_Clu, _NTe], [() => Clusters, 0]];
export var DestinationBackup$: StaticStructureSchema = [3, n0, _DB, 0, [_CT, _SR, _SB, _SC], [4, 0, 0, 0]];
export var GetResourcePolicyRequest$: StaticStructureSchema = [3, n0, _GRPR, 0, [_RA], [0]];
export var GetResourcePolicyResponse$: StaticStructureSchema = [3, n0, _GRPRe, 0, [_P], [0]];
export var Hsm$: StaticStructureSchema = [
  3,
  n0,
  _Hs,
  0,
  [_AZ, _CI, _SIu, _EI, _EIn, _EIV, _HI, _HT, _S, _SM],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
export var InitializeClusterRequest$: StaticStructureSchema = [3, n0, _ICR, 0, [_CI, _SCi, _TA], [0, 0, 0]];
export var InitializeClusterResponse$: StaticStructureSchema = [3, n0, _ICRn, 0, [_S, _SM], [0, 0]];
export var ListTagsRequest$: StaticStructureSchema = [3, n0, _LTR, 0, [_RI, _NTe, _MR], [0, 0, 1]];
export var ListTagsResponse$: StaticStructureSchema = [3, n0, _LTRi, 0, [_TL, _NTe], [() => TagList, 0]];
export var ModifyBackupAttributesRequest$: StaticStructureSchema = [3, n0, _MBAR, 0, [_BI, _NE], [0, 2]];
export var ModifyBackupAttributesResponse$: StaticStructureSchema = [3, n0, _MBARo, 0, [_B], [() => Backup$]];
export var ModifyClusterRequest$: StaticStructureSchema = [
  3,
  n0,
  _MCR,
  0,
  [_HT, _BRP, _CI],
  [0, () => BackupRetentionPolicy$, 0],
];
export var ModifyClusterResponse$: StaticStructureSchema = [3, n0, _MCRo, 0, [_Cl], [() => Cluster$]];
export var PutResourcePolicyRequest$: StaticStructureSchema = [3, n0, _PRPR, 0, [_RA, _P], [0, 0]];
export var PutResourcePolicyResponse$: StaticStructureSchema = [3, n0, _PRPRu, 0, [_RA, _P], [0, 0]];
export var RestoreBackupRequest$: StaticStructureSchema = [3, n0, _RBR, 0, [_BI], [0]];
export var RestoreBackupResponse$: StaticStructureSchema = [3, n0, _RBRe, 0, [_B], [() => Backup$]];
export var Tag$: StaticStructureSchema = [3, n0, _Ta, 0, [_K, _V], [0, 0]];
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR, 0, [_RI, _TL], [0, () => TagList]];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var UntagResourceRequest$: StaticStructureSchema = [3, n0, _URR, 0, [_RI, _TKL], [0, 64 | 0]];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var CloudHSMV2ServiceException$: StaticErrorSchema = [-3, _sm, "CloudHSMV2ServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(CloudHSMV2ServiceException$, CloudHSMV2ServiceException);
var Backups: StaticListSchema = [1, n0, _Ba, 0, () => Backup$];
var Clusters: StaticListSchema = [1, n0, _Clu, 0, () => Cluster$];
var Hsms: StaticListSchema = [1, n0, _H, 0, () => Hsm$];
var Strings = 64 | 0;
var SubnetIds = 64 | 0;
var TagKeyList = 64 | 0;
var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag$];
var ExternalSubnetMapping = 128 | 0;
var Filters: StaticMapSchema = [2, n0, _F, 0, 0, 64 | 0];
export var CopyBackupToRegion$: StaticOperationSchema = [
  9,
  n0,
  _CBTR,
  0,
  () => CopyBackupToRegionRequest$,
  () => CopyBackupToRegionResponse$,
];
export var CreateCluster$: StaticOperationSchema = [
  9,
  n0,
  _CCr,
  0,
  () => CreateClusterRequest$,
  () => CreateClusterResponse$,
];
export var CreateHsm$: StaticOperationSchema = [9, n0, _CH, 0, () => CreateHsmRequest$, () => CreateHsmResponse$];
export var DeleteBackup$: StaticOperationSchema = [
  9,
  n0,
  _DBe,
  0,
  () => DeleteBackupRequest$,
  () => DeleteBackupResponse$,
];
export var DeleteCluster$: StaticOperationSchema = [
  9,
  n0,
  _DC,
  0,
  () => DeleteClusterRequest$,
  () => DeleteClusterResponse$,
];
export var DeleteHsm$: StaticOperationSchema = [9, n0, _DH, 0, () => DeleteHsmRequest$, () => DeleteHsmResponse$];
export var DeleteResourcePolicy$: StaticOperationSchema = [
  9,
  n0,
  _DRP,
  0,
  () => DeleteResourcePolicyRequest$,
  () => DeleteResourcePolicyResponse$,
];
export var DescribeBackups$: StaticOperationSchema = [
  9,
  n0,
  _DBes,
  0,
  () => DescribeBackupsRequest$,
  () => DescribeBackupsResponse$,
];
export var DescribeClusters$: StaticOperationSchema = [
  9,
  n0,
  _DCe,
  0,
  () => DescribeClustersRequest$,
  () => DescribeClustersResponse$,
];
export var GetResourcePolicy$: StaticOperationSchema = [
  9,
  n0,
  _GRP,
  0,
  () => GetResourcePolicyRequest$,
  () => GetResourcePolicyResponse$,
];
export var InitializeCluster$: StaticOperationSchema = [
  9,
  n0,
  _IC,
  0,
  () => InitializeClusterRequest$,
  () => InitializeClusterResponse$,
];
export var ListTags$: StaticOperationSchema = [9, n0, _LT, 0, () => ListTagsRequest$, () => ListTagsResponse$];
export var ModifyBackupAttributes$: StaticOperationSchema = [
  9,
  n0,
  _MBA,
  0,
  () => ModifyBackupAttributesRequest$,
  () => ModifyBackupAttributesResponse$,
];
export var ModifyCluster$: StaticOperationSchema = [
  9,
  n0,
  _MC,
  0,
  () => ModifyClusterRequest$,
  () => ModifyClusterResponse$,
];
export var PutResourcePolicy$: StaticOperationSchema = [
  9,
  n0,
  _PRP,
  0,
  () => PutResourcePolicyRequest$,
  () => PutResourcePolicyResponse$,
];
export var RestoreBackup$: StaticOperationSchema = [
  9,
  n0,
  _RB,
  0,
  () => RestoreBackupRequest$,
  () => RestoreBackupResponse$,
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR, 0, () => TagResourceRequest$, () => TagResourceResponse$];
export var UntagResource$: StaticOperationSchema = [
  9,
  n0,
  _UR,
  0,
  () => UntagResourceRequest$,
  () => UntagResourceResponse$,
];

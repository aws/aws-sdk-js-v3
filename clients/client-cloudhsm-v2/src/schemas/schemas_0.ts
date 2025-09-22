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
export const n0 = "com.amazonaws.cloudhsmv2";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { CloudHSMV2ServiceException as __CloudHSMV2ServiceException } from "../models/CloudHSMV2ServiceException";
import {
  CloudHsmAccessDeniedException as __CloudHsmAccessDeniedException,
  CloudHsmInternalFailureException as __CloudHsmInternalFailureException,
  CloudHsmInvalidRequestException as __CloudHsmInvalidRequestException,
  CloudHsmResourceNotFoundException as __CloudHsmResourceNotFoundException,
  CloudHsmServiceException as __CloudHsmServiceException,
} from "../models/index";

/* eslint no-var: 0 */

export var CloudHsmAccessDeniedException = error(
  n0,
  _CHADE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __CloudHsmAccessDeniedException
);
export var CloudHsmInternalFailureException = error(
  n0,
  _CHIFE,
  {
    [_e]: _s,
  },
  [_Me],
  [0],

  __CloudHsmInternalFailureException
);
export var CloudHsmInvalidRequestException = error(
  n0,
  _CHIRE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __CloudHsmInvalidRequestException
);
export var CloudHsmResourceNotFoundException = error(
  n0,
  _CHRNFE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __CloudHsmResourceNotFoundException
);
export var CloudHsmServiceException = error(
  n0,
  _CHSE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __CloudHsmServiceException
);
export var CloudHSMV2ServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.cloudhsmv2",
  "CloudHSMV2ServiceException",
  0,
  [],
  [],
  __CloudHSMV2ServiceException
);

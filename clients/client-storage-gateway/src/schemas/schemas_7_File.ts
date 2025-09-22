// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ABE,
  _ADARN,
  _AFS,
  _AFSI,
  _AFSO,
  _AUL,
  _BR,
  _CA,
  _CL,
  _CNFSFS,
  _CNFSFSI,
  _CNFSFSO,
  _CSa,
  _CSMBFS,
  _CSMBFSI,
  _CSMBFSO,
  _CSTIS,
  _CT,
  _DFSA,
  _DFSAI,
  _DFSAO,
  _DM,
  _DNFSFS,
  _DNFSFSI,
  _DNFSFSO,
  _DSC,
  _DSMBFS,
  _DSMBFSI,
  _DSMBFSO,
  _EC,
  _ENC,
  _ETn,
  _FM,
  _FSAARN,
  _FSAARNL,
  _FSAI,
  _FSAIL,
  _FSARN,
  _FSARNL,
  _FSAS,
  _FSASD,
  _FSASDi,
  _FSIi,
  _FSN,
  _FSS,
  _GARN,
  _GIr,
  _GMIMETE,
  _IA,
  _IUL,
  _KMSE,
  _KMSK,
  _LARN,
  _NFSFSD,
  _NFSFSI,
  _NFSFSIL,
  _NP,
  _OACL,
  _OE,
  _OI,
  _P,
  _Pa,
  _R,
  _RO,
  _RP,
  _S,
  _SMBACLE,
  _SMBFSI,
  _SMBFSIL,
  _T,
  _UFSA,
  _UFSAI,
  _UFSAO,
  _UN,
  _UNFSFS,
  _UNFSFSI,
  _UNFSFSO,
  _USMBFS,
  _USMBFSI,
  _USMBFSO,
  _VPCEDNSN,
  _VUL,
  n0,
  Tags,
} from "./schemas_0";
import { DomainUserPassword } from "./schemas_20_FileSystem";

/* eslint no-var: 0 */

export var AssociateFileSystemInput = struct(
  n0,
  _AFSI,
  0,
  [_UN, _P, _CT, _GARN, _LARN, _T, _ADARN, _CA, _ENC],
  [0, [() => DomainUserPassword, 0], 0, 0, 0, () => Tags, 0, () => CacheAttributes, () => EndpointNetworkConfiguration]
);
export var AssociateFileSystemOutput = struct(n0, _AFSO, 0, [_FSAARN], [0]);
export var CacheAttributes = struct(n0, _CA, 0, [_CSTIS], [1]);
export var CreateNFSFileShareInput = struct(
  n0,
  _CNFSFSI,
  0,
  [
    _CT,
    _NFSFSD,
    _GARN,
    _ETn,
    _KMSE,
    _KMSK,
    _R,
    _LARN,
    _DSC,
    _OACL,
    _CL,
    _S,
    _RO,
    _GMIMETE,
    _RP,
    _T,
    _FSN,
    _CA,
    _NP,
    _VPCEDNSN,
    _BR,
    _ADARN,
  ],
  [
    0,
    () => NFSFileShareDefaults,
    0,
    0,
    2,
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    2,
    2,
    2,
    () => Tags,
    0,
    () => CacheAttributes,
    0,
    0,
    0,
    0,
  ]
);
export var CreateNFSFileShareOutput = struct(n0, _CNFSFSO, 0, [_FSARN], [0]);
export var CreateSMBFileShareInput = struct(
  n0,
  _CSMBFSI,
  0,
  [
    _CT,
    _GARN,
    _ETn,
    _KMSE,
    _KMSK,
    _R,
    _LARN,
    _DSC,
    _OACL,
    _RO,
    _GMIMETE,
    _RP,
    _SMBACLE,
    _ABE,
    _AUL,
    _VUL,
    _IUL,
    _ADARN,
    _A,
    _CSa,
    _T,
    _FSN,
    _CA,
    _NP,
    _VPCEDNSN,
    _BR,
    _OE,
  ],
  [
    0,
    0,
    0,
    2,
    0,
    0,
    0,
    0,
    0,
    2,
    2,
    2,
    2,
    2,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    0,
    0,
    () => Tags,
    0,
    () => CacheAttributes,
    0,
    0,
    0,
    2,
  ]
);
export var CreateSMBFileShareOutput = struct(n0, _CSMBFSO, 0, [_FSARN], [0]);
export var DescribeFileSystemAssociationsInput = struct(n0, _DFSAI, 0, [_FSAARNL], [64 | 0]);
export var DescribeFileSystemAssociationsOutput = struct(
  n0,
  _DFSAO,
  0,
  [_FSAIL],
  [() => FileSystemAssociationInfoList]
);
export var DescribeNFSFileSharesInput = struct(n0, _DNFSFSI, 0, [_FSARNL], [64 | 0]);
export var DescribeNFSFileSharesOutput = struct(n0, _DNFSFSO, 0, [_NFSFSIL], [() => NFSFileShareInfoList]);
export var DescribeSMBFileSharesInput = struct(n0, _DSMBFSI, 0, [_FSARNL], [64 | 0]);
export var DescribeSMBFileSharesOutput = struct(n0, _DSMBFSO, 0, [_SMBFSIL], [() => SMBFileShareInfoList]);
export var EndpointNetworkConfiguration = struct(n0, _ENC, 0, [_IA], [64 | 0]);
export var FileSystemAssociationInfo = struct(
  n0,
  _FSAI,
  0,
  [_FSAARN, _LARN, _FSAS, _ADARN, _GARN, _T, _CA, _ENC, _FSASD],
  [
    0,
    0,
    0,
    0,
    0,
    () => Tags,
    () => CacheAttributes,
    () => EndpointNetworkConfiguration,
    () => FileSystemAssociationStatusDetails,
  ]
);
export var FileSystemAssociationStatusDetail = struct(n0, _FSASDi, 0, [_EC], [0]);
export var NFSFileShareDefaults = struct(n0, _NFSFSD, 0, [_FM, _DM, _GIr, _OI], [0, 0, 1, 1]);
export var NFSFileShareInfo = struct(
  n0,
  _NFSFSI,
  0,
  [
    _NFSFSD,
    _FSARN,
    _FSIi,
    _FSS,
    _GARN,
    _ETn,
    _KMSE,
    _KMSK,
    _Pa,
    _R,
    _LARN,
    _DSC,
    _OACL,
    _CL,
    _S,
    _RO,
    _GMIMETE,
    _RP,
    _T,
    _FSN,
    _CA,
    _NP,
    _VPCEDNSN,
    _BR,
    _ADARN,
  ],
  [
    () => NFSFileShareDefaults,
    0,
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    2,
    2,
    2,
    () => Tags,
    0,
    () => CacheAttributes,
    0,
    0,
    0,
    0,
  ]
);
export var SMBFileShareInfo = struct(
  n0,
  _SMBFSI,
  0,
  [
    _FSARN,
    _FSIi,
    _FSS,
    _GARN,
    _ETn,
    _KMSE,
    _KMSK,
    _Pa,
    _R,
    _LARN,
    _DSC,
    _OACL,
    _RO,
    _GMIMETE,
    _RP,
    _SMBACLE,
    _ABE,
    _AUL,
    _VUL,
    _IUL,
    _ADARN,
    _A,
    _CSa,
    _T,
    _FSN,
    _CA,
    _NP,
    _VPCEDNSN,
    _BR,
    _OE,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    2,
    2,
    2,
    2,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    0,
    0,
    () => Tags,
    0,
    () => CacheAttributes,
    0,
    0,
    0,
    2,
  ]
);
export var UpdateFileSystemAssociationInput = struct(
  n0,
  _UFSAI,
  0,
  [_FSAARN, _UN, _P, _ADARN, _CA],
  [0, 0, [() => DomainUserPassword, 0], 0, () => CacheAttributes]
);
export var UpdateFileSystemAssociationOutput = struct(n0, _UFSAO, 0, [_FSAARN], [0]);
export var UpdateNFSFileShareInput = struct(
  n0,
  _UNFSFSI,
  0,
  [_FSARN, _ETn, _KMSE, _KMSK, _NFSFSD, _DSC, _OACL, _CL, _S, _RO, _GMIMETE, _RP, _FSN, _CA, _NP, _ADARN],
  [0, 0, 2, 0, () => NFSFileShareDefaults, 0, 0, 64 | 0, 0, 2, 2, 2, 0, () => CacheAttributes, 0, 0]
);
export var UpdateNFSFileShareOutput = struct(n0, _UNFSFSO, 0, [_FSARN], [0]);
export var UpdateSMBFileShareInput = struct(
  n0,
  _USMBFSI,
  0,
  [
    _FSARN,
    _ETn,
    _KMSE,
    _KMSK,
    _DSC,
    _OACL,
    _RO,
    _GMIMETE,
    _RP,
    _SMBACLE,
    _ABE,
    _AUL,
    _VUL,
    _IUL,
    _ADARN,
    _CSa,
    _FSN,
    _CA,
    _NP,
    _OE,
  ],
  [0, 0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 64 | 0, 64 | 0, 64 | 0, 0, 0, 0, () => CacheAttributes, 0, 2]
);
export var UpdateSMBFileShareOutput = struct(n0, _USMBFSO, 0, [_FSARN], [0]);
export var FileShareARNList = 64 | 0;

export var FileShareClientList = 64 | 0;

export var FileSystemAssociationARNList = 64 | 0;

export var FileSystemAssociationInfoList = list(n0, _FSAIL, 0, () => FileSystemAssociationInfo);
export var FileSystemAssociationStatusDetails = list(n0, _FSASD, 0, () => FileSystemAssociationStatusDetail);
export var IpAddressList = 64 | 0;

export var NFSFileShareInfoList = list(n0, _NFSFSIL, 0, () => NFSFileShareInfo);
export var SMBFileShareInfoList = list(n0, _SMBFSIL, 0, () => SMBFileShareInfo);
export var AssociateFileSystem = op(
  n0,
  _AFS,
  0,
  () => AssociateFileSystemInput,
  () => AssociateFileSystemOutput
);
export var CreateNFSFileShare = op(
  n0,
  _CNFSFS,
  0,
  () => CreateNFSFileShareInput,
  () => CreateNFSFileShareOutput
);
export var CreateSMBFileShare = op(
  n0,
  _CSMBFS,
  0,
  () => CreateSMBFileShareInput,
  () => CreateSMBFileShareOutput
);
export var DescribeFileSystemAssociations = op(
  n0,
  _DFSA,
  0,
  () => DescribeFileSystemAssociationsInput,
  () => DescribeFileSystemAssociationsOutput
);
export var DescribeNFSFileShares = op(
  n0,
  _DNFSFS,
  0,
  () => DescribeNFSFileSharesInput,
  () => DescribeNFSFileSharesOutput
);
export var DescribeSMBFileShares = op(
  n0,
  _DSMBFS,
  0,
  () => DescribeSMBFileSharesInput,
  () => DescribeSMBFileSharesOutput
);
export var UpdateFileSystemAssociation = op(
  n0,
  _UFSA,
  0,
  () => UpdateFileSystemAssociationInput,
  () => UpdateFileSystemAssociationOutput
);
export var UpdateNFSFileShare = op(
  n0,
  _UNFSFS,
  0,
  () => UpdateNFSFileShareInput,
  () => UpdateNFSFileShareOutput
);
export var UpdateSMBFileShare = op(
  n0,
  _USMBFS,
  0,
  () => UpdateSMBFileShareInput,
  () => UpdateSMBFileShareOutput
);

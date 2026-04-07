const _AP = "AccessPoints";
const _CAP = "CreateAccessPoint";
const _CAPR = "CreateAccessPointRequest";
const _CAPRr = "CreateAccessPointResponse";
const _CE = "ConflictException";
const _CFS = "CreateFileSystem";
const _CFSR = "CreateFileSystemRequest";
const _CFSRr = "CreateFileSystemResponse";
const _CMT = "CreateMountTarget";
const _CMTR = "CreateMountTargetRequest";
const _CMTRr = "CreateMountTargetResponse";
const _CP = "CreationPermissions";
const _DAP = "DeleteAccessPoint";
const _DAPR = "DeleteAccessPointRequest";
const _DFS = "DeleteFileSystem";
const _DFSP = "DeleteFileSystemPolicy";
const _DFSPR = "DeleteFileSystemPolicyRequest";
const _DFSR = "DeleteFileSystemRequest";
const _DMT = "DeleteMountTarget";
const _DMTR = "DeleteMountTargetRequest";
const _EDR = "ExpirationDataRule";
const _EDRL = "ExpirationDataRuleList";
const _FS = "FileSystems";
const _GAP = "GetAccessPoint";
const _GAPR = "GetAccessPointRequest";
const _GAPRe = "GetAccessPointResponse";
const _GFS = "GetFileSystem";
const _GFSP = "GetFileSystemPolicy";
const _GFSPR = "GetFileSystemPolicyRequest";
const _GFSPRe = "GetFileSystemPolicyResponse";
const _GFSR = "GetFileSystemRequest";
const _GFSRe = "GetFileSystemResponse";
const _GMT = "GetMountTarget";
const _GMTR = "GetMountTargetRequest";
const _GMTRe = "GetMountTargetResponse";
const _GSC = "GetSynchronizationConfiguration";
const _GSCR = "GetSynchronizationConfigurationRequest";
const _GSCRe = "GetSynchronizationConfigurationResponse";
const _IDR = "ImportDataRule";
const _IDRL = "ImportDataRuleList";
const _ISE = "InternalServerException";
const _LAP = "ListAccessPoints";
const _LAPD = "ListAccessPointsDescription";
const _LAPR = "ListAccessPointsRequest";
const _LAPRi = "ListAccessPointsResponse";
const _LFS = "ListFileSystems";
const _LFSD = "ListFileSystemsDescription";
const _LFSR = "ListFileSystemsRequest";
const _LFSRi = "ListFileSystemsResponse";
const _LMT = "ListMountTargets";
const _LMTD = "ListMountTargetsDescription";
const _LMTR = "ListMountTargetsRequest";
const _LMTRi = "ListMountTargetsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _MR = "MaxResults";
const _MT = "MountTargets";
const _NT = "NextToken";
const _PFSP = "PutFileSystemPolicy";
const _PFSPR = "PutFileSystemPolicyRequest";
const _PFSPRu = "PutFileSystemPolicyResponse";
const _PSC = "PutSynchronizationConfiguration";
const _PSCR = "PutSynchronizationConfigurationRequest";
const _PSCRu = "PutSynchronizationConfigurationResponse";
const _PU = "PosixUser";
const _RD = "RootDirectory";
const _RNFE = "ResourceNotFoundException";
const _SQEE = "ServiceQuotaExceededException";
const _T = "Tag";
const _TE = "ThrottlingException";
const _TL = "TagList";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _UMT = "UpdateMountTarget";
const _UMTR = "UpdateMountTargetRequest";
const _UMTRp = "UpdateMountTargetResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _VE = "ValidationException";
const _aBW = "acceptBucketWarning";
const _aP = "accessPoints";
const _aPA = "accessPointArn";
const _aPI = "accessPointId";
const _aZI = "availabilityZoneId";
const _b = "bucket";
const _c = "client";
const _cP = "creationPermissions";
const _cT = "clientToken";
const _cTr = "creationTime";
const _dALA = "daysAfterLastAccess";
const _e = "error";
const _eC = "errorCode";
const _eDR = "expirationDataRules";
const _fD = "forceDelete";
const _fS = "fileSystems";
const _fSA = "fileSystemArn";
const _fSI = "fileSystemId";
const _g = "gid";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _iA = "ipv4Address";
const _iAT = "ipAddressType";
const _iAp = "ipv6Address";
const _iDR = "importDataRules";
const _jN = "jsonName";
const _k = "key";
const _kKI = "kmsKeyId";
const _lVN = "latestVersionNumber";
const _m = "message";
const _mR = "maxResults";
const _mT = "mountTargets";
const _mTI = "mountTargetId";
const _n = "name";
const _nII = "networkInterfaceId";
const _nT = "nextToken";
const _oG = "ownerGid";
const _oI = "ownerId";
const _oU = "ownerUid";
const _p = "prefix";
const _pU = "posixUser";
const _pa = "path";
const _pe = "permissions";
const _po = "policy";
const _rA = "roleArn";
const _rD = "rootDirectory";
const _rI = "resourceId";
const _rT = "resourceType";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.s3files";
const _sG = "securityGroups";
const _sGe = "secondaryGids";
const _sI = "subnetId";
const _sLT = "sizeLessThan";
const _sM = "statusMessage";
const _se = "server";
const _st = "status";
const _t = "tags";
const _tK = "tagKeys";
const _tr = "trigger";
const _u = "uid";
const _v = "value";
const _vI = "vpcId";
const n0 = "com.amazonaws.s3files";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { S3FilesServiceException } from "../models/S3FilesServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var S3FilesServiceException$: StaticErrorSchema = [-3, _s, "S3FilesServiceException", 0, [], []];
_s_registry.registerError(S3FilesServiceException$, S3FilesServiceException);
const n0_registry = TypeRegistry.for(n0);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_eC, _m, _rI, _rT],
  [0, 0, 0, 0], 1
];
n0_registry.registerError(ConflictException$, ConflictException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_eC, _m],
  [0, 0], 1
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_eC, _m],
  [0, 0], 1
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_eC, _m],
  [0, 0], 1
];
n0_registry.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_eC, _m],
  [0, 0], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_eC, _m],
  [0, 0], 1
];
n0_registry.registerError(ValidationException$, ValidationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var CreateAccessPointRequest$: StaticStructureSchema = [3, n0, _CAPR,
  0,
  [_fSI, _cT, _t, _pU, _rD],
  [0, [0, 4], () => TagList, () => PosixUser$, () => RootDirectory$], 1
];
export var CreateAccessPointResponse$: StaticStructureSchema = [3, n0, _CAPRr,
  0,
  [_aPA, _aPI, _cT, _fSI, _st, _oI, _pU, _rD, _t, _n],
  [0, 0, 0, 0, 0, 0, () => PosixUser$, () => RootDirectory$, () => TagList, 0], 6
];
export var CreateFileSystemRequest$: StaticStructureSchema = [3, n0, _CFSR,
  0,
  [_b, _rA, _p, _cT, _kKI, _t, _aBW],
  [0, 0, 0, [0, 4], 0, () => TagList, 2], 2
];
export var CreateFileSystemResponse$: StaticStructureSchema = [3, n0, _CFSRr,
  0,
  [_cTr, _fSA, _fSI, _b, _p, _cT, _kKI, _st, _sM, _rA, _oI, _t, _n],
  [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => TagList, 0]
];
export var CreateMountTargetRequest$: StaticStructureSchema = [3, n0, _CMTR,
  0,
  [_fSI, _sI, _iA, _iAp, _iAT, _sG],
  [0, 0, 0, 0, 0, 64 | 0], 2
];
export var CreateMountTargetResponse$: StaticStructureSchema = [3, n0, _CMTRr,
  0,
  [_oI, _mTI, _sI, _aZI, _fSI, _iA, _iAp, _nII, _vI, _sG, _st, _sM],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0, 0, 0], 3
];
export var CreationPermissions$: StaticStructureSchema = [3, n0, _CP,
  0,
  [_oU, _oG, _pe],
  [1, 1, 0], 3
];
export var DeleteAccessPointRequest$: StaticStructureSchema = [3, n0, _DAPR,
  0,
  [_aPI],
  [[0, 1]], 1
];
export var DeleteFileSystemPolicyRequest$: StaticStructureSchema = [3, n0, _DFSPR,
  0,
  [_fSI],
  [[0, 1]], 1
];
export var DeleteFileSystemRequest$: StaticStructureSchema = [3, n0, _DFSR,
  0,
  [_fSI, _fD],
  [[0, 1], [2, { [_hQ]: _fD }]], 1
];
export var DeleteMountTargetRequest$: StaticStructureSchema = [3, n0, _DMTR,
  0,
  [_mTI],
  [[0, 1]], 1
];
export var ExpirationDataRule$: StaticStructureSchema = [3, n0, _EDR,
  0,
  [_dALA],
  [[1, { [_jN]: _dALA }]], 1
];
export var GetAccessPointRequest$: StaticStructureSchema = [3, n0, _GAPR,
  0,
  [_aPI],
  [[0, 1]], 1
];
export var GetAccessPointResponse$: StaticStructureSchema = [3, n0, _GAPRe,
  0,
  [_aPA, _aPI, _cT, _fSI, _st, _oI, _pU, _rD, _t, _n],
  [0, 0, 0, 0, 0, 0, () => PosixUser$, () => RootDirectory$, () => TagList, 0], 6
];
export var GetFileSystemPolicyRequest$: StaticStructureSchema = [3, n0, _GFSPR,
  0,
  [_fSI],
  [[0, 1]], 1
];
export var GetFileSystemPolicyResponse$: StaticStructureSchema = [3, n0, _GFSPRe,
  0,
  [_fSI, _po],
  [0, [0, { [_jN]: _po }]], 2
];
export var GetFileSystemRequest$: StaticStructureSchema = [3, n0, _GFSR,
  0,
  [_fSI],
  [[0, 1]], 1
];
export var GetFileSystemResponse$: StaticStructureSchema = [3, n0, _GFSRe,
  0,
  [_cTr, _fSA, _fSI, _b, _p, _cT, _kKI, _st, _sM, _rA, _oI, _t, _n],
  [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => TagList, 0]
];
export var GetMountTargetRequest$: StaticStructureSchema = [3, n0, _GMTR,
  0,
  [_mTI],
  [[0, 1]], 1
];
export var GetMountTargetResponse$: StaticStructureSchema = [3, n0, _GMTRe,
  0,
  [_oI, _mTI, _sI, _aZI, _fSI, _iA, _iAp, _nII, _vI, _sG, _st, _sM],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0, 0, 0], 3
];
export var GetSynchronizationConfigurationRequest$: StaticStructureSchema = [3, n0, _GSCR,
  0,
  [_fSI],
  [[0, 1]], 1
];
export var GetSynchronizationConfigurationResponse$: StaticStructureSchema = [3, n0, _GSCRe,
  0,
  [_iDR, _eDR, _lVN],
  [[() => ImportDataRuleList, { [_jN]: _iDR }], [() => ExpirationDataRuleList, { [_jN]: _eDR }], [1, { [_jN]: _lVN }]], 2
];
export var ImportDataRule$: StaticStructureSchema = [3, n0, _IDR,
  0,
  [_p, _tr, _sLT],
  [[0, { [_jN]: _p }], [0, { [_jN]: _tr }], [1, { [_jN]: _sLT }]], 3
];
export var ListAccessPointsDescription$: StaticStructureSchema = [3, n0, _LAPD,
  0,
  [_aPA, _aPI, _fSI, _st, _oI, _pU, _rD, _n],
  [0, 0, 0, 0, 0, () => PosixUser$, () => RootDirectory$, 0], 5
];
export var ListAccessPointsRequest$: StaticStructureSchema = [3, n0, _LAPR,
  0,
  [_fSI, _mR, _nT],
  [[0, { [_hQ]: _fSI }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }]], 1
];
export var ListAccessPointsResponse$: StaticStructureSchema = [3, n0, _LAPRi,
  0,
  [_aP, _nT],
  [() => AccessPoints, 0], 1
];
export var ListFileSystemsDescription$: StaticStructureSchema = [3, n0, _LFSD,
  0,
  [_cTr, _fSA, _fSI, _b, _st, _rA, _oI, _n, _sM],
  [4, 0, 0, 0, 0, 0, 0, 0, 0], 7
];
export var ListFileSystemsRequest$: StaticStructureSchema = [3, n0, _LFSR,
  0,
  [_b, _mR, _nT],
  [[0, { [_hQ]: _b }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }]]
];
export var ListFileSystemsResponse$: StaticStructureSchema = [3, n0, _LFSRi,
  0,
  [_fS, _nT],
  [() => FileSystems, 0], 1
];
export var ListMountTargetsDescription$: StaticStructureSchema = [3, n0, _LMTD,
  0,
  [_mTI, _oI, _sI, _aZI, _fSI, _iA, _iAp, _st, _sM, _nII, _vI],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 3
];
export var ListMountTargetsRequest$: StaticStructureSchema = [3, n0, _LMTR,
  0,
  [_fSI, _aPI, _mR, _nT],
  [[0, { [_hQ]: _fSI }], [0, { [_hQ]: _aPI }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }]]
];
export var ListMountTargetsResponse$: StaticStructureSchema = [3, n0, _LMTRi,
  0,
  [_mT, _nT],
  [() => MountTargets, 0], 1
];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR,
  0,
  [_rI, _mR, _nT],
  [[0, 1], [1, { [_hQ]: _MR }], [0, { [_hQ]: _NT }]], 1
];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi,
  0,
  [_t, _nT],
  [() => TagList, 0]
];
export var PosixUser$: StaticStructureSchema = [3, n0, _PU,
  0,
  [_u, _g, _sGe],
  [1, 1, 64 | 1], 2
];
export var PutFileSystemPolicyRequest$: StaticStructureSchema = [3, n0, _PFSPR,
  0,
  [_fSI, _po],
  [[0, 1], [0, { [_jN]: _po }]], 2
];
export var PutFileSystemPolicyResponse$: StaticStructureSchema = [3, n0, _PFSPRu,
  0,
  [],
  []
];
export var PutSynchronizationConfigurationRequest$: StaticStructureSchema = [3, n0, _PSCR,
  0,
  [_fSI, _iDR, _eDR, _lVN],
  [[0, 1], [() => ImportDataRuleList, { [_jN]: _iDR }], [() => ExpirationDataRuleList, { [_jN]: _eDR }], [1, { [_jN]: _lVN }]], 3
];
export var PutSynchronizationConfigurationResponse$: StaticStructureSchema = [3, n0, _PSCRu,
  0,
  [],
  []
];
export var RootDirectory$: StaticStructureSchema = [3, n0, _RD,
  0,
  [_pa, _cP],
  [0, () => CreationPermissions$]
];
export var Tag$: StaticStructureSchema = [3, n0, _T,
  0,
  [_k, _v],
  [0, 0], 2
];
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR,
  0,
  [_rI, _t],
  [[0, 1], () => TagList], 2
];
export var UntagResourceRequest$: StaticStructureSchema = [3, n0, _URR,
  0,
  [_rI, _tK],
  [[0, 1], [64 | 0, { [_hQ]: _tK }]], 2
];
export var UpdateMountTargetRequest$: StaticStructureSchema = [3, n0, _UMTR,
  0,
  [_mTI, _sG],
  [[0, 1], 64 | 0], 2
];
export var UpdateMountTargetResponse$: StaticStructureSchema = [3, n0, _UMTRp,
  0,
  [_oI, _mTI, _sI, _aZI, _fSI, _iA, _iAp, _nII, _vI, _sG, _st, _sM],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0, 0, 0], 3
];
var __Unit = "unit" as const;
var AccessPoints: StaticListSchema = [1, n0, _AP,
  0, () => ListAccessPointsDescription$
];
var ExpirationDataRuleList: StaticListSchema = [1, n0, _EDRL,
  0, [() => ExpirationDataRule$,
    0]
];
var FileSystems: StaticListSchema = [1, n0, _FS,
  0, () => ListFileSystemsDescription$
];
var ImportDataRuleList: StaticListSchema = [1, n0, _IDRL,
  0, [() => ImportDataRule$,
    0]
];
var MountTargets: StaticListSchema = [1, n0, _MT,
  0, () => ListMountTargetsDescription$
];
var SecondaryGids = 64 | 1;
var SecurityGroups = 64 | 0;
var TagKeys = 64 | 0;
var TagList: StaticListSchema = [1, n0, _TL,
  0, () => Tag$
];
export var CreateAccessPoint$: StaticOperationSchema = [9, n0, _CAP,
  { [_h]: ["PUT", "/access-points", 200] }, () => CreateAccessPointRequest$, () => CreateAccessPointResponse$
];
export var CreateFileSystem$: StaticOperationSchema = [9, n0, _CFS,
  { [_h]: ["PUT", "/file-systems", 201] }, () => CreateFileSystemRequest$, () => CreateFileSystemResponse$
];
export var CreateMountTarget$: StaticOperationSchema = [9, n0, _CMT,
  { [_h]: ["PUT", "/mount-targets", 200] }, () => CreateMountTargetRequest$, () => CreateMountTargetResponse$
];
export var DeleteAccessPoint$: StaticOperationSchema = [9, n0, _DAP,
  { [_h]: ["DELETE", "/access-points/{accessPointId}", 204] }, () => DeleteAccessPointRequest$, () => __Unit
];
export var DeleteFileSystem$: StaticOperationSchema = [9, n0, _DFS,
  { [_h]: ["DELETE", "/file-systems/{fileSystemId}", 204] }, () => DeleteFileSystemRequest$, () => __Unit
];
export var DeleteFileSystemPolicy$: StaticOperationSchema = [9, n0, _DFSP,
  { [_h]: ["DELETE", "/file-systems/{fileSystemId}/policy", 204] }, () => DeleteFileSystemPolicyRequest$, () => __Unit
];
export var DeleteMountTarget$: StaticOperationSchema = [9, n0, _DMT,
  { [_h]: ["DELETE", "/mount-targets/{mountTargetId}", 204] }, () => DeleteMountTargetRequest$, () => __Unit
];
export var GetAccessPoint$: StaticOperationSchema = [9, n0, _GAP,
  { [_h]: ["GET", "/access-points/{accessPointId}", 200] }, () => GetAccessPointRequest$, () => GetAccessPointResponse$
];
export var GetFileSystem$: StaticOperationSchema = [9, n0, _GFS,
  { [_h]: ["GET", "/file-systems/{fileSystemId}", 200] }, () => GetFileSystemRequest$, () => GetFileSystemResponse$
];
export var GetFileSystemPolicy$: StaticOperationSchema = [9, n0, _GFSP,
  { [_h]: ["GET", "/file-systems/{fileSystemId}/policy", 200] }, () => GetFileSystemPolicyRequest$, () => GetFileSystemPolicyResponse$
];
export var GetMountTarget$: StaticOperationSchema = [9, n0, _GMT,
  { [_h]: ["GET", "/mount-targets/{mountTargetId}", 200] }, () => GetMountTargetRequest$, () => GetMountTargetResponse$
];
export var GetSynchronizationConfiguration$: StaticOperationSchema = [9, n0, _GSC,
  { [_h]: ["GET", "/file-systems/{fileSystemId}/synchronization-configuration", 200] }, () => GetSynchronizationConfigurationRequest$, () => GetSynchronizationConfigurationResponse$
];
export var ListAccessPoints$: StaticOperationSchema = [9, n0, _LAP,
  { [_h]: ["GET", "/access-points", 200] }, () => ListAccessPointsRequest$, () => ListAccessPointsResponse$
];
export var ListFileSystems$: StaticOperationSchema = [9, n0, _LFS,
  { [_h]: ["GET", "/file-systems", 200] }, () => ListFileSystemsRequest$, () => ListFileSystemsResponse$
];
export var ListMountTargets$: StaticOperationSchema = [9, n0, _LMT,
  { [_h]: ["GET", "/mount-targets", 200] }, () => ListMountTargetsRequest$, () => ListMountTargetsResponse$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  { [_h]: ["GET", "/resource-tags/{resourceId}", 200] }, () => ListTagsForResourceRequest$, () => ListTagsForResourceResponse$
];
export var PutFileSystemPolicy$: StaticOperationSchema = [9, n0, _PFSP,
  { [_h]: ["PUT", "/file-systems/{fileSystemId}/policy", 200] }, () => PutFileSystemPolicyRequest$, () => PutFileSystemPolicyResponse$
];
export var PutSynchronizationConfiguration$: StaticOperationSchema = [9, n0, _PSC,
  { [_h]: ["PUT", "/file-systems/{fileSystemId}/synchronization-configuration", 200] }, () => PutSynchronizationConfigurationRequest$, () => PutSynchronizationConfigurationResponse$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  { [_h]: ["POST", "/resource-tags/{resourceId}", 200] }, () => TagResourceRequest$, () => __Unit
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  { [_h]: ["DELETE", "/resource-tags/{resourceId}", 200] }, () => UntagResourceRequest$, () => __Unit
];
export var UpdateMountTarget$: StaticOperationSchema = [9, n0, _UMT,
  { [_h]: ["PUT", "/mount-targets/{mountTargetId}", 200] }, () => UpdateMountTargetRequest$, () => UpdateMountTargetResponse$
];

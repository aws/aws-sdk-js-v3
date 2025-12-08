const _A = "Asset";
const _ADE = "AccessDeniedException";
const _AEC = "AssociateExternalConnection";
const _AECR = "AssociateExternalConnectionRequest";
const _AECRs = "AssociateExternalConnectionResult";
const _AP = "AssociatedPackage";
const _APL = "AssociatedPackageList";
const _AS = "AssetSummary";
const _ASL = "AssetSummaryList";
const _CD = "CreateDomain";
const _CDR = "CreateDomainRequest";
const _CDRr = "CreateDomainResult";
const _CE = "ConflictException";
const _CPG = "CreatePackageGroup";
const _CPGR = "CreatePackageGroupRequest";
const _CPGRr = "CreatePackageGroupResult";
const _CPV = "CopyPackageVersions";
const _CPVR = "CopyPackageVersionsRequest";
const _CPVRo = "CopyPackageVersionsResult";
const _CR = "CreateRepository";
const _CRR = "CreateRepositoryRequest";
const _CRRr = "CreateRepositoryResult";
const _DD = "DomainDescription";
const _DDPP = "DeleteDomainPermissionsPolicy";
const _DDPPR = "DeleteDomainPermissionsPolicyRequest";
const _DDPPRe = "DeleteDomainPermissionsPolicyResult";
const _DDR = "DeleteDomainRequest";
const _DDRe = "DeleteDomainResult";
const _DDRes = "DescribeDomainRequest";
const _DDResc = "DescribeDomainResult";
const _DDe = "DeleteDomain";
const _DDes = "DescribeDomain";
const _DEC = "DisassociateExternalConnection";
const _DECR = "DisassociateExternalConnectionRequest";
const _DECRi = "DisassociateExternalConnectionResult";
const _DEP = "DomainEntryPoint";
const _DP = "DeletePackage";
const _DPG = "DeletePackageGroup";
const _DPGR = "DeletePackageGroupRequest";
const _DPGRe = "DeletePackageGroupResult";
const _DPGRes = "DescribePackageGroupRequest";
const _DPGResc = "DescribePackageGroupResult";
const _DPGe = "DescribePackageGroup";
const _DPR = "DeletePackageRequest";
const _DPRe = "DeletePackageResult";
const _DPRes = "DescribePackageRequest";
const _DPResc = "DescribePackageResult";
const _DPV = "DeletePackageVersions";
const _DPVR = "DeletePackageVersionsRequest";
const _DPVRe = "DeletePackageVersionsResult";
const _DPVRes = "DescribePackageVersionRequest";
const _DPVResc = "DescribePackageVersionResult";
const _DPVRi = "DisposePackageVersionsRequest";
const _DPVRis = "DisposePackageVersionsResult";
const _DPVe = "DescribePackageVersion";
const _DPVi = "DisposePackageVersions";
const _DPe = "DescribePackage";
const _DR = "DeleteRepository";
const _DRPP = "DeleteRepositoryPermissionsPolicy";
const _DRPPR = "DeleteRepositoryPermissionsPolicyRequest";
const _DRPPRe = "DeleteRepositoryPermissionsPolicyResult";
const _DRR = "DeleteRepositoryRequest";
const _DRRe = "DeleteRepositoryResult";
const _DRRes = "DescribeRepositoryRequest";
const _DRResc = "DescribeRepositoryResult";
const _DRe = "DescribeRepository";
const _DS = "DomainSummary";
const _DSL = "DomainSummaryList";
const _GAPG = "GetAssociatedPackageGroup";
const _GAPGR = "GetAssociatedPackageGroupRequest";
const _GAPGRe = "GetAssociatedPackageGroupResult";
const _GAT = "GetAuthorizationToken";
const _GATR = "GetAuthorizationTokenRequest";
const _GATRe = "GetAuthorizationTokenResult";
const _GDPP = "GetDomainPermissionsPolicy";
const _GDPPR = "GetDomainPermissionsPolicyRequest";
const _GDPPRe = "GetDomainPermissionsPolicyResult";
const _GPVA = "GetPackageVersionAsset";
const _GPVAR = "GetPackageVersionAssetRequest";
const _GPVARe = "GetPackageVersionAssetResult";
const _GPVR = "GetPackageVersionReadme";
const _GPVRR = "GetPackageVersionReadmeRequest";
const _GPVRRe = "GetPackageVersionReadmeResult";
const _GRE = "GetRepositoryEndpoint";
const _GRER = "GetRepositoryEndpointRequest";
const _GRERe = "GetRepositoryEndpointResult";
const _GRPP = "GetRepositoryPermissionsPolicy";
const _GRPPR = "GetRepositoryPermissionsPolicyRequest";
const _GRPPRe = "GetRepositoryPermissionsPolicyResult";
const _ISE = "InternalServerException";
const _LAP = "ListAssociatedPackages";
const _LAPR = "ListAssociatedPackagesRequest";
const _LAPRi = "ListAssociatedPackagesResult";
const _LARFG = "ListAllowedRepositoriesForGroup";
const _LARFGR = "ListAllowedRepositoriesForGroupRequest";
const _LARFGRi = "ListAllowedRepositoriesForGroupResult";
const _LD = "ListDomains";
const _LDR = "ListDomainsRequest";
const _LDRi = "ListDomainsResult";
const _LI = "LicenseInfo";
const _LIL = "LicenseInfoList";
const _LP = "ListPackages";
const _LPG = "ListPackageGroups";
const _LPGR = "ListPackageGroupsRequest";
const _LPGRi = "ListPackageGroupsResult";
const _LPR = "ListPackagesRequest";
const _LPRi = "ListPackagesResult";
const _LPV = "ListPackageVersions";
const _LPVA = "ListPackageVersionAssets";
const _LPVAR = "ListPackageVersionAssetsRequest";
const _LPVARi = "ListPackageVersionAssetsResult";
const _LPVD = "ListPackageVersionDependencies";
const _LPVDR = "ListPackageVersionDependenciesRequest";
const _LPVDRi = "ListPackageVersionDependenciesResult";
const _LPVR = "ListPackageVersionsRequest";
const _LPVRi = "ListPackageVersionsResult";
const _LR = "ListRepositories";
const _LRID = "ListRepositoriesInDomain";
const _LRIDR = "ListRepositoriesInDomainRequest";
const _LRIDRi = "ListRepositoriesInDomainResult";
const _LRR = "ListRepositoriesRequest";
const _LRRi = "ListRepositoriesResult";
const _LSPG = "ListSubPackageGroups";
const _LSPGR = "ListSubPackageGroupsRequest";
const _LSPGRi = "ListSubPackageGroupsResult";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResult";
const _PD = "PackageDependency";
const _PDL = "PackageDependencyList";
const _PDPP = "PutDomainPermissionsPolicy";
const _PDPPR = "PutDomainPermissionsPolicyRequest";
const _PDPPRu = "PutDomainPermissionsPolicyResult";
const _PDa = "PackageDescription";
const _PGAR = "PackageGroupAllowedRepository";
const _PGARL = "PackageGroupAllowedRepositoryList";
const _PGARU = "PackageGroupAllowedRepositoryUpdates";
const _PGARUa = "PackageGroupAllowedRepositoryUpdate";
const _PGD = "PackageGroupDescription";
const _PGOC = "PackageGroupOriginConfiguration";
const _PGOR = "PackageGroupOriginRestriction";
const _PGORa = "PackageGroupOriginRestrictions";
const _PGR = "PackageGroupReference";
const _PGS = "PackageGroupSummary";
const _PGSL = "PackageGroupSummaryList";
const _POC = "PackageOriginConfiguration";
const _POR = "PackageOriginRestrictions";
const _PPOC = "PutPackageOriginConfiguration";
const _PPOCR = "PutPackageOriginConfigurationRequest";
const _PPOCRu = "PutPackageOriginConfigurationResult";
const _PPV = "PublishPackageVersion";
const _PPVR = "PublishPackageVersionRequest";
const _PPVRu = "PublishPackageVersionResult";
const _PRPP = "PutRepositoryPermissionsPolicy";
const _PRPPR = "PutRepositoryPermissionsPolicyRequest";
const _PRPPRu = "PutRepositoryPermissionsPolicyResult";
const _PS = "PackageSummary";
const _PSL = "PackageSummaryList";
const _PVD = "PackageVersionDescription";
const _PVE = "PackageVersionError";
const _PVEM = "PackageVersionErrorMap";
const _PVO = "PackageVersionOrigin";
const _PVS = "PackageVersionSummary";
const _PVSL = "PackageVersionSummaryList";
const _RA = "Retry-After";
const _RD = "RepositoryDescription";
const _RECI = "RepositoryExternalConnectionInfo";
const _RECIL = "RepositoryExternalConnectionInfoList";
const _RNFE = "ResourceNotFoundException";
const _RP = "ResourcePolicy";
const _RS = "RepositorySummary";
const _RSL = "RepositorySummaryList";
const _SPVI = "SuccessfulPackageVersionInfo";
const _SPVIM = "SuccessfulPackageVersionInfoMap";
const _SQEE = "ServiceQuotaExceededException";
const _T = "Tag";
const _TE = "ThrottlingException";
const _TL = "TagList";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResult";
const _UPG = "UpdatePackageGroup";
const _UPGOC = "UpdatePackageGroupOriginConfiguration";
const _UPGOCR = "UpdatePackageGroupOriginConfigurationRequest";
const _UPGOCRp = "UpdatePackageGroupOriginConfigurationResult";
const _UPGR = "UpdatePackageGroupRequest";
const _UPGRp = "UpdatePackageGroupResult";
const _UPVS = "UpdatePackageVersionsStatus";
const _UPVSR = "UpdatePackageVersionsStatusRequest";
const _UPVSRp = "UpdatePackageVersionsStatusResult";
const _UR = "UpstreamRepository";
const _URI = "UpstreamRepositoryInfo";
const _URIL = "UpstreamRepositoryInfoList";
const _URL = "UpstreamRepositoryList";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResult";
const _URRp = "UpdateRepositoryRequest";
const _URRpd = "UpdateRepositoryResult";
const _URn = "UntagResource";
const _URp = "UpdateRepository";
const _VE = "ValidationException";
const _XA = "X-AssetName";
const _XP = "X-PackageVersion";
const _XP_ = "X-PackageVersionRevision";
const _a = "arn";
const _aA = "administratorAccount";
const _aAR = "addAllowedRepositories";
const _aC = "assetContent";
const _aN = "assetName";
const _aO = "allowOverwrite";
const _aR = "allowedRepositories";
const _aRU = "allowedRepositoryUpdates";
const _aSB = "assetSizeBytes";
const _aSHA = "assetSHA256";
const _aT = "associationType";
const _aTu = "authorizationToken";
const _aa = "administrator-account";
const _as = "asset";
const _ass = "assets";
const _c = "client";
const _cI = "contactInfo";
const _cT = "createdTime";
const _d = "domain";
const _dDV = "defaultDisplayVersion";
const _dEP = "domainEntryPoint";
const _dN = "domainName";
const _dNi = "displayName";
const _dO = "domainOwner";
const _dP = "deletedPackage";
const _dR = "destinationRepository";
const _dS = "durationSeconds";
const _dT = "dependencyType";
const _de = "description";
const _dep = "dependencies";
const _do = "domain-owner";
const _doc = "document";
const _dom = "domains";
const _dr = "destination-repository";
const _du = "duration";
const _e = "error";
const _eC = "externalConnection";
const _eCN = "externalConnectionName";
const _eCr = "errorCode";
const _eCx = "externalConnections";
const _eK = "encryptionKey";
const _eM = "effectiveMode";
const _eMr = "errorMessage";
const _eS = "expectedStatus";
const _eT = "endpointType";
const _ec = "external-connection";
const _ex = "expiration";
const _f = "format";
const _fV = "failedVersions";
const _h = "hashes";
const _hE = "httpError";
const _hH = "httpHeader";
const _hP = "homePage";
const _hQ = "httpQuery";
const _ht = "http";
const _iF = "inheritedFrom";
const _iFU = "includeFromUpstream";
const _k = "key";
const _l = "licenses";
const _m = "message";
const _mR = "maxResults";
const _mo = "mode";
const _mr = "max-results";
const _n = "name";
const _nT = "nextToken";
const _na = "namespace";
const _nt = "next-token";
const _o = "owner";
const _oC = "originConfiguration";
const _oRT = "originRestrictionType";
const _oT = "originType";
const _or = "origin";
const _p = "package";
const _pD = "policyDocument";
const _pF = "packageFormat";
const _pG = "packageGroup";
const _pGa = "packageGroups";
const _pN = "packageName";
const _pP = "packagePrefix";
const _pR = "policyRevision";
const _pT = "publishedTime";
const _pV = "packageVersion";
const _pVR = "packageVersionRevision";
const _pa = "packages";
const _par = "parent";
const _pat = "pattern";
const _pg = "package-group";
const _po = "policy";
const _pp = "package-prefix";
const _pr = "policy-revision";
const _pre = "preview";
const _pref = "prefix";
const _pu = "publish";
const _r = "repository";
const _rA = "resourceArn";
const _rAR = "removeAllowedRepositories";
const _rAS = "retryAfterSeconds";
const _rC = "repositoryCount";
const _rCe = "repositoriesCount";
const _rE = "repositoryEndpoint";
const _rI = "resourceId";
const _rN = "repositoryName";
const _rP = "repositoryPrefix";
const _rT = "resourceType";
const _re = "revision";
const _rea = "readme";
const _reas = "reason";
const _rep = "repositories";
const _res = "restrictions";
const _rp = "repository-prefix";
const _s = "streaming";
const _sB = "sortBy";
const _sBA = "s3BucketArn";
const _sCR = "sourceCodeRepository";
const _sR = "sourceRepository";
const _sV = "successfulVersions";
const _se = "server";
const _si = "size";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.codeartifact";
const _sr = "source-repository";
const _st = "status";
const _su = "summary";
const _t = "tags";
const _tK = "tagKeys";
const _tS = "targetStatus";
const _u = "upstreams";
const _un = "unfinished";
const _up = "upstream";
const _ur = "url";
const _v = "versions";
const _vR = "versionRevisions";
const _vRe = "versionRevision";
const _vRer = "versionRequirement";
const _va = "value";
const _ve = "version";
const _xacs = "x-amz-content-sha256";
const n0 = "com.amazonaws.codeartifact";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { CodeartifactServiceException as __CodeartifactServiceException } from "../models/CodeartifactServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
export var Asset: StaticSimpleSchema = [0, n0, _A, { [_s]: 1 }, 42];
export var AccessDeniedException: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);
export var AssetSummary: StaticStructureSchema = [3, n0, _AS, 0, [_n, _si, _h], [0, 1, 128 | 0]];
export var AssociatedPackage: StaticStructureSchema = [3, n0, _AP, 0, [_f, _na, _p, _aT], [0, 0, 0, 0]];
export var AssociateExternalConnectionRequest: StaticStructureSchema = [
  3,
  n0,
  _AECR,
  0,
  [_d, _dO, _r, _eC],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _ec }],
  ],
];
export var AssociateExternalConnectionResult: StaticStructureSchema = [
  3,
  n0,
  _AECRs,
  0,
  [_r],
  [() => RepositoryDescription],
];
export var ConflictException: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_m, _rI, _rT], [0, 0, 0]];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);
export var CopyPackageVersionsRequest: StaticStructureSchema = [
  3,
  n0,
  _CPVR,
  0,
  [_d, _dO, _sR, _dR, _f, _na, _p, _v, _vR, _aO, _iFU],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _sr }],
    [0, { [_hQ]: _dr }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _na }],
    [0, { [_hQ]: _p }],
    64 | 0,
    128 | 0,
    2,
    2,
  ],
];
export var CopyPackageVersionsResult: StaticStructureSchema = [
  3,
  n0,
  _CPVRo,
  0,
  [_sV, _fV],
  [() => SuccessfulPackageVersionInfoMap, () => PackageVersionErrorMap],
];
export var CreateDomainRequest: StaticStructureSchema = [
  3,
  n0,
  _CDR,
  0,
  [_d, _eK, _t],
  [[0, { [_hQ]: _d }], 0, () => TagList],
];
export var CreateDomainResult: StaticStructureSchema = [3, n0, _CDRr, 0, [_d], [() => DomainDescription]];
export var CreatePackageGroupRequest: StaticStructureSchema = [
  3,
  n0,
  _CPGR,
  0,
  [_d, _dO, _pG, _cI, _de, _t],
  [[0, { [_hQ]: _d }], [0, { [_hQ]: _do }], 0, 0, 0, () => TagList],
];
export var CreatePackageGroupResult: StaticStructureSchema = [3, n0, _CPGRr, 0, [_pG], [() => PackageGroupDescription]];
export var CreateRepositoryRequest: StaticStructureSchema = [
  3,
  n0,
  _CRR,
  0,
  [_d, _dO, _r, _de, _u, _t],
  [[0, { [_hQ]: _d }], [0, { [_hQ]: _do }], [0, { [_hQ]: _r }], 0, () => UpstreamRepositoryList, () => TagList],
];
export var CreateRepositoryResult: StaticStructureSchema = [3, n0, _CRRr, 0, [_r], [() => RepositoryDescription]];
export var DeleteDomainPermissionsPolicyRequest: StaticStructureSchema = [
  3,
  n0,
  _DDPPR,
  0,
  [_d, _dO, _pR],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _pr }],
  ],
];
export var DeleteDomainPermissionsPolicyResult: StaticStructureSchema = [
  3,
  n0,
  _DDPPRe,
  0,
  [_po],
  [() => ResourcePolicy],
];
export var DeleteDomainRequest: StaticStructureSchema = [
  3,
  n0,
  _DDR,
  0,
  [_d, _dO],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
  ],
];
export var DeleteDomainResult: StaticStructureSchema = [3, n0, _DDRe, 0, [_d], [() => DomainDescription]];
export var DeletePackageGroupRequest: StaticStructureSchema = [
  3,
  n0,
  _DPGR,
  0,
  [_d, _dO, _pG],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _pg }],
  ],
];
export var DeletePackageGroupResult: StaticStructureSchema = [3, n0, _DPGRe, 0, [_pG], [() => PackageGroupDescription]];
export var DeletePackageRequest: StaticStructureSchema = [
  3,
  n0,
  _DPR,
  0,
  [_d, _dO, _r, _f, _na, _p],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _na }],
    [0, { [_hQ]: _p }],
  ],
];
export var DeletePackageResult: StaticStructureSchema = [3, n0, _DPRe, 0, [_dP], [() => PackageSummary]];
export var DeletePackageVersionsRequest: StaticStructureSchema = [
  3,
  n0,
  _DPVR,
  0,
  [_d, _dO, _r, _f, _na, _p, _v, _eS],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _na }],
    [0, { [_hQ]: _p }],
    64 | 0,
    0,
  ],
];
export var DeletePackageVersionsResult: StaticStructureSchema = [
  3,
  n0,
  _DPVRe,
  0,
  [_sV, _fV],
  [() => SuccessfulPackageVersionInfoMap, () => PackageVersionErrorMap],
];
export var DeleteRepositoryPermissionsPolicyRequest: StaticStructureSchema = [
  3,
  n0,
  _DRPPR,
  0,
  [_d, _dO, _r, _pR],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _pr }],
  ],
];
export var DeleteRepositoryPermissionsPolicyResult: StaticStructureSchema = [
  3,
  n0,
  _DRPPRe,
  0,
  [_po],
  [() => ResourcePolicy],
];
export var DeleteRepositoryRequest: StaticStructureSchema = [
  3,
  n0,
  _DRR,
  0,
  [_d, _dO, _r],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
  ],
];
export var DeleteRepositoryResult: StaticStructureSchema = [3, n0, _DRRe, 0, [_r], [() => RepositoryDescription]];
export var DescribeDomainRequest: StaticStructureSchema = [
  3,
  n0,
  _DDRes,
  0,
  [_d, _dO],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
  ],
];
export var DescribeDomainResult: StaticStructureSchema = [3, n0, _DDResc, 0, [_d], [() => DomainDescription]];
export var DescribePackageGroupRequest: StaticStructureSchema = [
  3,
  n0,
  _DPGRes,
  0,
  [_d, _dO, _pG],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _pg }],
  ],
];
export var DescribePackageGroupResult: StaticStructureSchema = [
  3,
  n0,
  _DPGResc,
  0,
  [_pG],
  [() => PackageGroupDescription],
];
export var DescribePackageRequest: StaticStructureSchema = [
  3,
  n0,
  _DPRes,
  0,
  [_d, _dO, _r, _f, _na, _p],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _na }],
    [0, { [_hQ]: _p }],
  ],
];
export var DescribePackageResult: StaticStructureSchema = [3, n0, _DPResc, 0, [_p], [() => PackageDescription]];
export var DescribePackageVersionRequest: StaticStructureSchema = [
  3,
  n0,
  _DPVRes,
  0,
  [_d, _dO, _r, _f, _na, _p, _pV],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _na }],
    [0, { [_hQ]: _p }],
    [0, { [_hQ]: _ve }],
  ],
];
export var DescribePackageVersionResult: StaticStructureSchema = [
  3,
  n0,
  _DPVResc,
  0,
  [_pV],
  [() => PackageVersionDescription],
];
export var DescribeRepositoryRequest: StaticStructureSchema = [
  3,
  n0,
  _DRRes,
  0,
  [_d, _dO, _r],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
  ],
];
export var DescribeRepositoryResult: StaticStructureSchema = [3, n0, _DRResc, 0, [_r], [() => RepositoryDescription]];
export var DisassociateExternalConnectionRequest: StaticStructureSchema = [
  3,
  n0,
  _DECR,
  0,
  [_d, _dO, _r, _eC],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _ec }],
  ],
];
export var DisassociateExternalConnectionResult: StaticStructureSchema = [
  3,
  n0,
  _DECRi,
  0,
  [_r],
  [() => RepositoryDescription],
];
export var DisposePackageVersionsRequest: StaticStructureSchema = [
  3,
  n0,
  _DPVRi,
  0,
  [_d, _dO, _r, _f, _na, _p, _v, _vR, _eS],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _na }],
    [0, { [_hQ]: _p }],
    64 | 0,
    128 | 0,
    0,
  ],
];
export var DisposePackageVersionsResult: StaticStructureSchema = [
  3,
  n0,
  _DPVRis,
  0,
  [_sV, _fV],
  [() => SuccessfulPackageVersionInfoMap, () => PackageVersionErrorMap],
];
export var DomainDescription: StaticStructureSchema = [
  3,
  n0,
  _DD,
  0,
  [_n, _o, _a, _st, _cT, _eK, _rC, _aSB, _sBA],
  [0, 0, 0, 0, 4, 0, 1, 1, 0],
];
export var DomainEntryPoint: StaticStructureSchema = [3, n0, _DEP, 0, [_rN, _eCN], [0, 0]];
export var DomainSummary: StaticStructureSchema = [3, n0, _DS, 0, [_n, _o, _a, _st, _cT, _eK], [0, 0, 0, 0, 4, 0]];
export var GetAssociatedPackageGroupRequest: StaticStructureSchema = [
  3,
  n0,
  _GAPGR,
  0,
  [_d, _dO, _f, _na, _p],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _na }],
    [0, { [_hQ]: _p }],
  ],
];
export var GetAssociatedPackageGroupResult: StaticStructureSchema = [
  3,
  n0,
  _GAPGRe,
  0,
  [_pG, _aT],
  [() => PackageGroupDescription, 0],
];
export var GetAuthorizationTokenRequest: StaticStructureSchema = [
  3,
  n0,
  _GATR,
  0,
  [_d, _dO, _dS],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [1, { [_hQ]: _du }],
  ],
];
export var GetAuthorizationTokenResult: StaticStructureSchema = [3, n0, _GATRe, 8, [_aTu, _ex], [0, 4]];
export var GetDomainPermissionsPolicyRequest: StaticStructureSchema = [
  3,
  n0,
  _GDPPR,
  0,
  [_d, _dO],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
  ],
];
export var GetDomainPermissionsPolicyResult: StaticStructureSchema = [3, n0, _GDPPRe, 0, [_po], [() => ResourcePolicy]];
export var GetPackageVersionAssetRequest: StaticStructureSchema = [
  3,
  n0,
  _GPVAR,
  0,
  [_d, _dO, _r, _f, _na, _p, _pV, _as, _pVR],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _na }],
    [0, { [_hQ]: _p }],
    [0, { [_hQ]: _ve }],
    [0, { [_hQ]: _as }],
    [0, { [_hQ]: _re }],
  ],
];
export var GetPackageVersionAssetResult: StaticStructureSchema = [
  3,
  n0,
  _GPVARe,
  0,
  [_as, _aN, _pV, _pVR],
  [
    [() => Asset, 16],
    [0, { [_hH]: _XA }],
    [0, { [_hH]: _XP }],
    [0, { [_hH]: _XP_ }],
  ],
];
export var GetPackageVersionReadmeRequest: StaticStructureSchema = [
  3,
  n0,
  _GPVRR,
  0,
  [_d, _dO, _r, _f, _na, _p, _pV],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _na }],
    [0, { [_hQ]: _p }],
    [0, { [_hQ]: _ve }],
  ],
];
export var GetPackageVersionReadmeResult: StaticStructureSchema = [
  3,
  n0,
  _GPVRRe,
  0,
  [_f, _na, _p, _ve, _vRe, _rea],
  [0, 0, 0, 0, 0, 0],
];
export var GetRepositoryEndpointRequest: StaticStructureSchema = [
  3,
  n0,
  _GRER,
  0,
  [_d, _dO, _r, _f, _eT],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _eT }],
  ],
];
export var GetRepositoryEndpointResult: StaticStructureSchema = [3, n0, _GRERe, 0, [_rE], [0]];
export var GetRepositoryPermissionsPolicyRequest: StaticStructureSchema = [
  3,
  n0,
  _GRPPR,
  0,
  [_d, _dO, _r],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
  ],
];
export var GetRepositoryPermissionsPolicyResult: StaticStructureSchema = [
  3,
  n0,
  _GRPPRe,
  0,
  [_po],
  [() => ResourcePolicy],
];
export var InternalServerException: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _se, [_hE]: 500 }, [_m], [0]];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);
export var LicenseInfo: StaticStructureSchema = [3, n0, _LI, 0, [_n, _ur], [0, 0]];
export var ListAllowedRepositoriesForGroupRequest: StaticStructureSchema = [
  3,
  n0,
  _LARFGR,
  0,
  [_d, _dO, _pG, _oRT, _mR, _nT],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _pg }],
    [0, { [_hQ]: _oRT }],
    [1, { [_hQ]: _mr }],
    [0, { [_hQ]: _nt }],
  ],
];
export var ListAllowedRepositoriesForGroupResult: StaticStructureSchema = [3, n0, _LARFGRi, 0, [_aR, _nT], [64 | 0, 0]];
export var ListAssociatedPackagesRequest: StaticStructureSchema = [
  3,
  n0,
  _LAPR,
  0,
  [_d, _dO, _pG, _mR, _nT, _pre],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _pg }],
    [1, { [_hQ]: _mr }],
    [0, { [_hQ]: _nt }],
    [2, { [_hQ]: _pre }],
  ],
];
export var ListAssociatedPackagesResult: StaticStructureSchema = [
  3,
  n0,
  _LAPRi,
  0,
  [_pa, _nT],
  [() => AssociatedPackageList, 0],
];
export var ListDomainsRequest: StaticStructureSchema = [3, n0, _LDR, 0, [_mR, _nT], [1, 0]];
export var ListDomainsResult: StaticStructureSchema = [3, n0, _LDRi, 0, [_dom, _nT], [() => DomainSummaryList, 0]];
export var ListPackageGroupsRequest: StaticStructureSchema = [
  3,
  n0,
  _LPGR,
  0,
  [_d, _dO, _mR, _nT, _pref],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [1, { [_hQ]: _mr }],
    [0, { [_hQ]: _nt }],
    [0, { [_hQ]: _pref }],
  ],
];
export var ListPackageGroupsResult: StaticStructureSchema = [
  3,
  n0,
  _LPGRi,
  0,
  [_pGa, _nT],
  [() => PackageGroupSummaryList, 0],
];
export var ListPackagesRequest: StaticStructureSchema = [
  3,
  n0,
  _LPR,
  0,
  [_d, _dO, _r, _f, _na, _pP, _mR, _nT, _pu, _up],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _na }],
    [0, { [_hQ]: _pp }],
    [1, { [_hQ]: _mr }],
    [0, { [_hQ]: _nt }],
    [0, { [_hQ]: _pu }],
    [0, { [_hQ]: _up }],
  ],
];
export var ListPackagesResult: StaticStructureSchema = [3, n0, _LPRi, 0, [_pa, _nT], [() => PackageSummaryList, 0]];
export var ListPackageVersionAssetsRequest: StaticStructureSchema = [
  3,
  n0,
  _LPVAR,
  0,
  [_d, _dO, _r, _f, _na, _p, _pV, _mR, _nT],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _na }],
    [0, { [_hQ]: _p }],
    [0, { [_hQ]: _ve }],
    [1, { [_hQ]: _mr }],
    [0, { [_hQ]: _nt }],
  ],
];
export var ListPackageVersionAssetsResult: StaticStructureSchema = [
  3,
  n0,
  _LPVARi,
  0,
  [_f, _na, _p, _ve, _vRe, _nT, _ass],
  [0, 0, 0, 0, 0, 0, () => AssetSummaryList],
];
export var ListPackageVersionDependenciesRequest: StaticStructureSchema = [
  3,
  n0,
  _LPVDR,
  0,
  [_d, _dO, _r, _f, _na, _p, _pV, _nT],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _na }],
    [0, { [_hQ]: _p }],
    [0, { [_hQ]: _ve }],
    [0, { [_hQ]: _nt }],
  ],
];
export var ListPackageVersionDependenciesResult: StaticStructureSchema = [
  3,
  n0,
  _LPVDRi,
  0,
  [_f, _na, _p, _ve, _vRe, _nT, _dep],
  [0, 0, 0, 0, 0, 0, () => PackageDependencyList],
];
export var ListPackageVersionsRequest: StaticStructureSchema = [
  3,
  n0,
  _LPVR,
  0,
  [_d, _dO, _r, _f, _na, _p, _st, _sB, _mR, _nT, _oT],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _na }],
    [0, { [_hQ]: _p }],
    [0, { [_hQ]: _st }],
    [0, { [_hQ]: _sB }],
    [1, { [_hQ]: _mr }],
    [0, { [_hQ]: _nt }],
    [0, { [_hQ]: _oT }],
  ],
];
export var ListPackageVersionsResult: StaticStructureSchema = [
  3,
  n0,
  _LPVRi,
  0,
  [_dDV, _f, _na, _p, _v, _nT],
  [0, 0, 0, 0, () => PackageVersionSummaryList, 0],
];
export var ListRepositoriesInDomainRequest: StaticStructureSchema = [
  3,
  n0,
  _LRIDR,
  0,
  [_d, _dO, _aA, _rP, _mR, _nT],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _aa }],
    [0, { [_hQ]: _rp }],
    [1, { [_hQ]: _mr }],
    [0, { [_hQ]: _nt }],
  ],
];
export var ListRepositoriesInDomainResult: StaticStructureSchema = [
  3,
  n0,
  _LRIDRi,
  0,
  [_rep, _nT],
  [() => RepositorySummaryList, 0],
];
export var ListRepositoriesRequest: StaticStructureSchema = [
  3,
  n0,
  _LRR,
  0,
  [_rP, _mR, _nT],
  [
    [0, { [_hQ]: _rp }],
    [1, { [_hQ]: _mr }],
    [0, { [_hQ]: _nt }],
  ],
];
export var ListRepositoriesResult: StaticStructureSchema = [
  3,
  n0,
  _LRRi,
  0,
  [_rep, _nT],
  [() => RepositorySummaryList, 0],
];
export var ListSubPackageGroupsRequest: StaticStructureSchema = [
  3,
  n0,
  _LSPGR,
  0,
  [_d, _dO, _pG, _mR, _nT],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _pg }],
    [1, { [_hQ]: _mr }],
    [0, { [_hQ]: _nt }],
  ],
];
export var ListSubPackageGroupsResult: StaticStructureSchema = [
  3,
  n0,
  _LSPGRi,
  0,
  [_pGa, _nT],
  [() => PackageGroupSummaryList, 0],
];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rA], [[0, { [_hQ]: _rA }]]];
export var ListTagsForResourceResult: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_t], [() => TagList]];
export var PackageDependency: StaticStructureSchema = [3, n0, _PD, 0, [_na, _p, _dT, _vRer], [0, 0, 0, 0]];
export var PackageDescription: StaticStructureSchema = [
  3,
  n0,
  _PDa,
  0,
  [_f, _na, _n, _oC],
  [0, 0, 0, () => PackageOriginConfiguration],
];
export var PackageGroupAllowedRepository: StaticStructureSchema = [3, n0, _PGAR, 0, [_rN, _oRT], [0, 0]];
export var PackageGroupDescription: StaticStructureSchema = [
  3,
  n0,
  _PGD,
  0,
  [_a, _pat, _dN, _dO, _cT, _cI, _de, _oC, _par],
  [0, 0, 0, 0, 4, 0, 0, () => PackageGroupOriginConfiguration, () => PackageGroupReference],
];
export var PackageGroupOriginConfiguration: StaticStructureSchema = [
  3,
  n0,
  _PGOC,
  0,
  [_res],
  [() => PackageGroupOriginRestrictions],
];
export var PackageGroupOriginRestriction: StaticStructureSchema = [
  3,
  n0,
  _PGOR,
  0,
  [_mo, _eM, _iF, _rCe],
  [0, 0, () => PackageGroupReference, 1],
];
export var PackageGroupReference: StaticStructureSchema = [3, n0, _PGR, 0, [_a, _pat], [0, 0]];
export var PackageGroupSummary: StaticStructureSchema = [
  3,
  n0,
  _PGS,
  0,
  [_a, _pat, _dN, _dO, _cT, _cI, _de, _oC, _par],
  [0, 0, 0, 0, 4, 0, 0, () => PackageGroupOriginConfiguration, () => PackageGroupReference],
];
export var PackageOriginConfiguration: StaticStructureSchema = [
  3,
  n0,
  _POC,
  0,
  [_res],
  [() => PackageOriginRestrictions],
];
export var PackageOriginRestrictions: StaticStructureSchema = [3, n0, _POR, 0, [_pu, _up], [0, 0]];
export var PackageSummary: StaticStructureSchema = [
  3,
  n0,
  _PS,
  0,
  [_f, _na, _p, _oC],
  [0, 0, 0, () => PackageOriginConfiguration],
];
export var PackageVersionDescription: StaticStructureSchema = [
  3,
  n0,
  _PVD,
  0,
  [_f, _na, _pN, _dNi, _ve, _su, _hP, _sCR, _pT, _l, _re, _st, _or],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, () => LicenseInfoList, 0, 0, () => PackageVersionOrigin],
];
export var PackageVersionError: StaticStructureSchema = [3, n0, _PVE, 0, [_eCr, _eMr], [0, 0]];
export var PackageVersionOrigin: StaticStructureSchema = [3, n0, _PVO, 0, [_dEP, _oT], [() => DomainEntryPoint, 0]];
export var PackageVersionSummary: StaticStructureSchema = [
  3,
  n0,
  _PVS,
  0,
  [_ve, _re, _st, _or],
  [0, 0, 0, () => PackageVersionOrigin],
];
export var PublishPackageVersionRequest: StaticStructureSchema = [
  3,
  n0,
  _PPVR,
  0,
  [_d, _dO, _r, _f, _na, _p, _pV, _aC, _aN, _aSHA, _un],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _na }],
    [0, { [_hQ]: _p }],
    [0, { [_hQ]: _ve }],
    [() => Asset, 16],
    [0, { [_hQ]: _as }],
    [0, { [_hH]: _xacs }],
    [2, { [_hQ]: _un }],
  ],
];
export var PublishPackageVersionResult: StaticStructureSchema = [
  3,
  n0,
  _PPVRu,
  0,
  [_f, _na, _p, _ve, _vRe, _st, _as],
  [0, 0, 0, 0, 0, 0, () => AssetSummary],
];
export var PutDomainPermissionsPolicyRequest: StaticStructureSchema = [
  3,
  n0,
  _PDPPR,
  0,
  [_d, _dO, _pR, _pD],
  [0, 0, 0, 0],
];
export var PutDomainPermissionsPolicyResult: StaticStructureSchema = [3, n0, _PDPPRu, 0, [_po], [() => ResourcePolicy]];
export var PutPackageOriginConfigurationRequest: StaticStructureSchema = [
  3,
  n0,
  _PPOCR,
  0,
  [_d, _dO, _r, _f, _na, _p, _res],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _na }],
    [0, { [_hQ]: _p }],
    () => PackageOriginRestrictions,
  ],
];
export var PutPackageOriginConfigurationResult: StaticStructureSchema = [
  3,
  n0,
  _PPOCRu,
  0,
  [_oC],
  [() => PackageOriginConfiguration],
];
export var PutRepositoryPermissionsPolicyRequest: StaticStructureSchema = [
  3,
  n0,
  _PRPPR,
  0,
  [_d, _dO, _r, _pR, _pD],
  [[0, { [_hQ]: _d }], [0, { [_hQ]: _do }], [0, { [_hQ]: _r }], 0, 0],
];
export var PutRepositoryPermissionsPolicyResult: StaticStructureSchema = [
  3,
  n0,
  _PRPPRu,
  0,
  [_po],
  [() => ResourcePolicy],
];
export var RepositoryDescription: StaticStructureSchema = [
  3,
  n0,
  _RD,
  0,
  [_n, _aA, _dN, _dO, _a, _de, _u, _eCx, _cT],
  [0, 0, 0, 0, 0, 0, () => UpstreamRepositoryInfoList, () => RepositoryExternalConnectionInfoList, 4],
];
export var RepositoryExternalConnectionInfo: StaticStructureSchema = [3, n0, _RECI, 0, [_eCN, _pF, _st], [0, 0, 0]];
export var RepositorySummary: StaticStructureSchema = [
  3,
  n0,
  _RS,
  0,
  [_n, _aA, _dN, _dO, _a, _de, _cT],
  [0, 0, 0, 0, 0, 0, 4],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);
export var ResourcePolicy: StaticStructureSchema = [3, n0, _RP, 0, [_rA, _re, _doc], [0, 0, 0]];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);
export var SuccessfulPackageVersionInfo: StaticStructureSchema = [3, n0, _SPVI, 0, [_re, _st], [0, 0]];
export var Tag: StaticStructureSchema = [3, n0, _T, 0, [_k, _va], [0, 0]];
export var TagResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _TRR,
  0,
  [_rA, _t],
  [[0, { [_hQ]: _rA }], () => TagList],
];
export var TagResourceResult: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _rAS],
  [0, [1, { [_hH]: _RA }]],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);
export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_rA, _tK], [[0, { [_hQ]: _rA }], 64 | 0]];
export var UntagResourceResult: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdatePackageGroupOriginConfigurationRequest: StaticStructureSchema = [
  3,
  n0,
  _UPGOCR,
  0,
  [_d, _dO, _pG, _res, _aAR, _rAR],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _pg }],
    128 | 0,
    () => PackageGroupAllowedRepositoryList,
    () => PackageGroupAllowedRepositoryList,
  ],
];
export var UpdatePackageGroupOriginConfigurationResult: StaticStructureSchema = [
  3,
  n0,
  _UPGOCRp,
  0,
  [_pG, _aRU],
  [() => PackageGroupDescription, [2, n0, _PGARU, 0, 0, [2, n0, _PGARUa, 0, 0, 64 | 0]]],
];
export var UpdatePackageGroupRequest: StaticStructureSchema = [
  3,
  n0,
  _UPGR,
  0,
  [_d, _dO, _pG, _cI, _de],
  [[0, { [_hQ]: _d }], [0, { [_hQ]: _do }], 0, 0, 0],
];
export var UpdatePackageGroupResult: StaticStructureSchema = [3, n0, _UPGRp, 0, [_pG], [() => PackageGroupDescription]];
export var UpdatePackageVersionsStatusRequest: StaticStructureSchema = [
  3,
  n0,
  _UPVSR,
  0,
  [_d, _dO, _r, _f, _na, _p, _v, _vR, _eS, _tS],
  [
    [0, { [_hQ]: _d }],
    [0, { [_hQ]: _do }],
    [0, { [_hQ]: _r }],
    [0, { [_hQ]: _f }],
    [0, { [_hQ]: _na }],
    [0, { [_hQ]: _p }],
    64 | 0,
    128 | 0,
    0,
    0,
  ],
];
export var UpdatePackageVersionsStatusResult: StaticStructureSchema = [
  3,
  n0,
  _UPVSRp,
  0,
  [_sV, _fV],
  [() => SuccessfulPackageVersionInfoMap, () => PackageVersionErrorMap],
];
export var UpdateRepositoryRequest: StaticStructureSchema = [
  3,
  n0,
  _URRp,
  0,
  [_d, _dO, _r, _de, _u],
  [[0, { [_hQ]: _d }], [0, { [_hQ]: _do }], [0, { [_hQ]: _r }], 0, () => UpstreamRepositoryList],
];
export var UpdateRepositoryResult: StaticStructureSchema = [3, n0, _URRpd, 0, [_r], [() => RepositoryDescription]];
export var UpstreamRepository: StaticStructureSchema = [3, n0, _UR, 0, [_rN], [0]];
export var UpstreamRepositoryInfo: StaticStructureSchema = [3, n0, _URI, 0, [_rN], [0]];
export var ValidationException: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_m, _reas], [0, 0]];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);
export var CodeartifactServiceException: StaticErrorSchema = [-3, _sm, "CodeartifactServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(CodeartifactServiceException, __CodeartifactServiceException);
export var AssetSummaryList: StaticListSchema = [1, n0, _ASL, 0, () => AssetSummary];
export var AssociatedPackageList: StaticListSchema = [1, n0, _APL, 0, () => AssociatedPackage];
export var DomainSummaryList: StaticListSchema = [1, n0, _DSL, 0, () => DomainSummary];
export var LicenseInfoList: StaticListSchema = [1, n0, _LIL, 0, () => LicenseInfo];
export var PackageDependencyList: StaticListSchema = [1, n0, _PDL, 0, () => PackageDependency];
export var PackageGroupAllowedRepositoryList: StaticListSchema = [
  1,
  n0,
  _PGARL,
  0,
  () => PackageGroupAllowedRepository,
];
export var PackageGroupSummaryList: StaticListSchema = [1, n0, _PGSL, 0, () => PackageGroupSummary];
export var PackageSummaryList: StaticListSchema = [1, n0, _PSL, 0, () => PackageSummary];
export var PackageVersionList = 64 | 0;
export var PackageVersionSummaryList: StaticListSchema = [1, n0, _PVSL, 0, () => PackageVersionSummary];
export var RepositoryExternalConnectionInfoList: StaticListSchema = [
  1,
  n0,
  _RECIL,
  0,
  () => RepositoryExternalConnectionInfo,
];
export var RepositoryNameList = 64 | 0;
export var RepositorySummaryList: StaticListSchema = [1, n0, _RSL, 0, () => RepositorySummary];
export var TagKeyList = 64 | 0;
export var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag];
export var UpstreamRepositoryInfoList: StaticListSchema = [1, n0, _URIL, 0, () => UpstreamRepositoryInfo];
export var UpstreamRepositoryList: StaticListSchema = [1, n0, _URL, 0, () => UpstreamRepository];
export var AssetHashes = 128 | 0;
export var OriginRestrictions = 128 | 0;
export var PackageGroupAllowedRepositoryUpdate: StaticMapSchema = [2, n0, _PGARUa, 0, 0, 64 | 0];
export var PackageGroupAllowedRepositoryUpdates: StaticMapSchema = [
  2,
  n0,
  _PGARU,
  0,
  0,
  [2, n0, _PGARUa, 0, 0, 64 | 0],
];
export var PackageGroupOriginRestrictions: StaticMapSchema = [2, n0, _PGORa, 0, 0, () => PackageGroupOriginRestriction];
export var PackageVersionErrorMap: StaticMapSchema = [2, n0, _PVEM, 0, 0, () => PackageVersionError];
export var PackageVersionRevisionMap = 128 | 0;
export var SuccessfulPackageVersionInfoMap: StaticMapSchema = [2, n0, _SPVIM, 0, 0, () => SuccessfulPackageVersionInfo];
export var AssociateExternalConnection: StaticOperationSchema = [
  9,
  n0,
  _AEC,
  { [_ht]: ["POST", "/v1/repository/external-connection", 200] },
  () => AssociateExternalConnectionRequest,
  () => AssociateExternalConnectionResult,
];
export var CopyPackageVersions: StaticOperationSchema = [
  9,
  n0,
  _CPV,
  { [_ht]: ["POST", "/v1/package/versions/copy", 200] },
  () => CopyPackageVersionsRequest,
  () => CopyPackageVersionsResult,
];
export var CreateDomain: StaticOperationSchema = [
  9,
  n0,
  _CD,
  { [_ht]: ["POST", "/v1/domain", 200] },
  () => CreateDomainRequest,
  () => CreateDomainResult,
];
export var CreatePackageGroup: StaticOperationSchema = [
  9,
  n0,
  _CPG,
  { [_ht]: ["POST", "/v1/package-group", 200] },
  () => CreatePackageGroupRequest,
  () => CreatePackageGroupResult,
];
export var CreateRepository: StaticOperationSchema = [
  9,
  n0,
  _CR,
  { [_ht]: ["POST", "/v1/repository", 200] },
  () => CreateRepositoryRequest,
  () => CreateRepositoryResult,
];
export var DeleteDomain: StaticOperationSchema = [
  9,
  n0,
  _DDe,
  { [_ht]: ["DELETE", "/v1/domain", 200] },
  () => DeleteDomainRequest,
  () => DeleteDomainResult,
];
export var DeleteDomainPermissionsPolicy: StaticOperationSchema = [
  9,
  n0,
  _DDPP,
  { [_ht]: ["DELETE", "/v1/domain/permissions/policy", 200] },
  () => DeleteDomainPermissionsPolicyRequest,
  () => DeleteDomainPermissionsPolicyResult,
];
export var DeletePackage: StaticOperationSchema = [
  9,
  n0,
  _DP,
  { [_ht]: ["DELETE", "/v1/package", 200] },
  () => DeletePackageRequest,
  () => DeletePackageResult,
];
export var DeletePackageGroup: StaticOperationSchema = [
  9,
  n0,
  _DPG,
  { [_ht]: ["DELETE", "/v1/package-group", 200] },
  () => DeletePackageGroupRequest,
  () => DeletePackageGroupResult,
];
export var DeletePackageVersions: StaticOperationSchema = [
  9,
  n0,
  _DPV,
  { [_ht]: ["POST", "/v1/package/versions/delete", 200] },
  () => DeletePackageVersionsRequest,
  () => DeletePackageVersionsResult,
];
export var DeleteRepository: StaticOperationSchema = [
  9,
  n0,
  _DR,
  { [_ht]: ["DELETE", "/v1/repository", 200] },
  () => DeleteRepositoryRequest,
  () => DeleteRepositoryResult,
];
export var DeleteRepositoryPermissionsPolicy: StaticOperationSchema = [
  9,
  n0,
  _DRPP,
  { [_ht]: ["DELETE", "/v1/repository/permissions/policies", 200] },
  () => DeleteRepositoryPermissionsPolicyRequest,
  () => DeleteRepositoryPermissionsPolicyResult,
];
export var DescribeDomain: StaticOperationSchema = [
  9,
  n0,
  _DDes,
  { [_ht]: ["GET", "/v1/domain", 200] },
  () => DescribeDomainRequest,
  () => DescribeDomainResult,
];
export var DescribePackage: StaticOperationSchema = [
  9,
  n0,
  _DPe,
  { [_ht]: ["GET", "/v1/package", 200] },
  () => DescribePackageRequest,
  () => DescribePackageResult,
];
export var DescribePackageGroup: StaticOperationSchema = [
  9,
  n0,
  _DPGe,
  { [_ht]: ["GET", "/v1/package-group", 200] },
  () => DescribePackageGroupRequest,
  () => DescribePackageGroupResult,
];
export var DescribePackageVersion: StaticOperationSchema = [
  9,
  n0,
  _DPVe,
  { [_ht]: ["GET", "/v1/package/version", 200] },
  () => DescribePackageVersionRequest,
  () => DescribePackageVersionResult,
];
export var DescribeRepository: StaticOperationSchema = [
  9,
  n0,
  _DRe,
  { [_ht]: ["GET", "/v1/repository", 200] },
  () => DescribeRepositoryRequest,
  () => DescribeRepositoryResult,
];
export var DisassociateExternalConnection: StaticOperationSchema = [
  9,
  n0,
  _DEC,
  { [_ht]: ["DELETE", "/v1/repository/external-connection", 200] },
  () => DisassociateExternalConnectionRequest,
  () => DisassociateExternalConnectionResult,
];
export var DisposePackageVersions: StaticOperationSchema = [
  9,
  n0,
  _DPVi,
  { [_ht]: ["POST", "/v1/package/versions/dispose", 200] },
  () => DisposePackageVersionsRequest,
  () => DisposePackageVersionsResult,
];
export var GetAssociatedPackageGroup: StaticOperationSchema = [
  9,
  n0,
  _GAPG,
  { [_ht]: ["GET", "/v1/get-associated-package-group", 200] },
  () => GetAssociatedPackageGroupRequest,
  () => GetAssociatedPackageGroupResult,
];
export var GetAuthorizationToken: StaticOperationSchema = [
  9,
  n0,
  _GAT,
  { [_ht]: ["POST", "/v1/authorization-token", 200] },
  () => GetAuthorizationTokenRequest,
  () => GetAuthorizationTokenResult,
];
export var GetDomainPermissionsPolicy: StaticOperationSchema = [
  9,
  n0,
  _GDPP,
  { [_ht]: ["GET", "/v1/domain/permissions/policy", 200] },
  () => GetDomainPermissionsPolicyRequest,
  () => GetDomainPermissionsPolicyResult,
];
export var GetPackageVersionAsset: StaticOperationSchema = [
  9,
  n0,
  _GPVA,
  { [_ht]: ["GET", "/v1/package/version/asset", 200] },
  () => GetPackageVersionAssetRequest,
  () => GetPackageVersionAssetResult,
];
export var GetPackageVersionReadme: StaticOperationSchema = [
  9,
  n0,
  _GPVR,
  { [_ht]: ["GET", "/v1/package/version/readme", 200] },
  () => GetPackageVersionReadmeRequest,
  () => GetPackageVersionReadmeResult,
];
export var GetRepositoryEndpoint: StaticOperationSchema = [
  9,
  n0,
  _GRE,
  { [_ht]: ["GET", "/v1/repository/endpoint", 200] },
  () => GetRepositoryEndpointRequest,
  () => GetRepositoryEndpointResult,
];
export var GetRepositoryPermissionsPolicy: StaticOperationSchema = [
  9,
  n0,
  _GRPP,
  { [_ht]: ["GET", "/v1/repository/permissions/policy", 200] },
  () => GetRepositoryPermissionsPolicyRequest,
  () => GetRepositoryPermissionsPolicyResult,
];
export var ListAllowedRepositoriesForGroup: StaticOperationSchema = [
  9,
  n0,
  _LARFG,
  { [_ht]: ["GET", "/v1/package-group-allowed-repositories", 200] },
  () => ListAllowedRepositoriesForGroupRequest,
  () => ListAllowedRepositoriesForGroupResult,
];
export var ListAssociatedPackages: StaticOperationSchema = [
  9,
  n0,
  _LAP,
  { [_ht]: ["GET", "/v1/list-associated-packages", 200] },
  () => ListAssociatedPackagesRequest,
  () => ListAssociatedPackagesResult,
];
export var ListDomains: StaticOperationSchema = [
  9,
  n0,
  _LD,
  { [_ht]: ["POST", "/v1/domains", 200] },
  () => ListDomainsRequest,
  () => ListDomainsResult,
];
export var ListPackageGroups: StaticOperationSchema = [
  9,
  n0,
  _LPG,
  { [_ht]: ["POST", "/v1/package-groups", 200] },
  () => ListPackageGroupsRequest,
  () => ListPackageGroupsResult,
];
export var ListPackages: StaticOperationSchema = [
  9,
  n0,
  _LP,
  { [_ht]: ["POST", "/v1/packages", 200] },
  () => ListPackagesRequest,
  () => ListPackagesResult,
];
export var ListPackageVersionAssets: StaticOperationSchema = [
  9,
  n0,
  _LPVA,
  { [_ht]: ["POST", "/v1/package/version/assets", 200] },
  () => ListPackageVersionAssetsRequest,
  () => ListPackageVersionAssetsResult,
];
export var ListPackageVersionDependencies: StaticOperationSchema = [
  9,
  n0,
  _LPVD,
  { [_ht]: ["POST", "/v1/package/version/dependencies", 200] },
  () => ListPackageVersionDependenciesRequest,
  () => ListPackageVersionDependenciesResult,
];
export var ListPackageVersions: StaticOperationSchema = [
  9,
  n0,
  _LPV,
  { [_ht]: ["POST", "/v1/package/versions", 200] },
  () => ListPackageVersionsRequest,
  () => ListPackageVersionsResult,
];
export var ListRepositories: StaticOperationSchema = [
  9,
  n0,
  _LR,
  { [_ht]: ["POST", "/v1/repositories", 200] },
  () => ListRepositoriesRequest,
  () => ListRepositoriesResult,
];
export var ListRepositoriesInDomain: StaticOperationSchema = [
  9,
  n0,
  _LRID,
  { [_ht]: ["POST", "/v1/domain/repositories", 200] },
  () => ListRepositoriesInDomainRequest,
  () => ListRepositoriesInDomainResult,
];
export var ListSubPackageGroups: StaticOperationSchema = [
  9,
  n0,
  _LSPG,
  { [_ht]: ["POST", "/v1/package-groups/sub-groups", 200] },
  () => ListSubPackageGroupsRequest,
  () => ListSubPackageGroupsResult,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_ht]: ["POST", "/v1/tags", 200] },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResult,
];
export var PublishPackageVersion: StaticOperationSchema = [
  9,
  n0,
  _PPV,
  { [_ht]: ["POST", "/v1/package/version/publish", 200] },
  () => PublishPackageVersionRequest,
  () => PublishPackageVersionResult,
];
export var PutDomainPermissionsPolicy: StaticOperationSchema = [
  9,
  n0,
  _PDPP,
  { [_ht]: ["PUT", "/v1/domain/permissions/policy", 200] },
  () => PutDomainPermissionsPolicyRequest,
  () => PutDomainPermissionsPolicyResult,
];
export var PutPackageOriginConfiguration: StaticOperationSchema = [
  9,
  n0,
  _PPOC,
  { [_ht]: ["POST", "/v1/package", 200] },
  () => PutPackageOriginConfigurationRequest,
  () => PutPackageOriginConfigurationResult,
];
export var PutRepositoryPermissionsPolicy: StaticOperationSchema = [
  9,
  n0,
  _PRPP,
  { [_ht]: ["PUT", "/v1/repository/permissions/policy", 200] },
  () => PutRepositoryPermissionsPolicyRequest,
  () => PutRepositoryPermissionsPolicyResult,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_ht]: ["POST", "/v1/tag", 200] },
  () => TagResourceRequest,
  () => TagResourceResult,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _URn,
  { [_ht]: ["POST", "/v1/untag", 200] },
  () => UntagResourceRequest,
  () => UntagResourceResult,
];
export var UpdatePackageGroup: StaticOperationSchema = [
  9,
  n0,
  _UPG,
  { [_ht]: ["PUT", "/v1/package-group", 200] },
  () => UpdatePackageGroupRequest,
  () => UpdatePackageGroupResult,
];
export var UpdatePackageGroupOriginConfiguration: StaticOperationSchema = [
  9,
  n0,
  _UPGOC,
  { [_ht]: ["PUT", "/v1/package-group-origin-configuration", 200] },
  () => UpdatePackageGroupOriginConfigurationRequest,
  () => UpdatePackageGroupOriginConfigurationResult,
];
export var UpdatePackageVersionsStatus: StaticOperationSchema = [
  9,
  n0,
  _UPVS,
  { [_ht]: ["POST", "/v1/package/versions/update_status", 200] },
  () => UpdatePackageVersionsStatusRequest,
  () => UpdatePackageVersionsStatusResult,
];
export var UpdateRepository: StaticOperationSchema = [
  9,
  n0,
  _URp,
  { [_ht]: ["PUT", "/v1/repository", 200] },
  () => UpdateRepositoryRequest,
  () => UpdateRepositoryResult,
];

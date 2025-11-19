const _A = "Actions";
const _ADS = "ApplicationDependencySummary";
const _AI = "ApplicationId";
const _AP = "AllowedPattern";
const _APS = "ApplicationPolicyStatement";
const _AS = "ApplicationSummary";
const _AV = "AllowedValues";
const _Ap = "Applications";
const _Ar = "Arn";
const _Au = "Author";
const _BRE = "BadRequestException";
const _C = "Capabilities";
const _CA = "CreateApplication";
const _CAR = "CreateApplicationRequest";
const _CARr = "CreateApplicationResponse";
const _CAV = "CreateApplicationVersion";
const _CAVR = "CreateApplicationVersionRequest";
const _CAVRr = "CreateApplicationVersionResponse";
const _CCFCS = "CreateCloudFormationChangeSet";
const _CCFCSR = "CreateCloudFormationChangeSetRequest";
const _CCFCSRr = "CreateCloudFormationChangeSetResponse";
const _CCFT = "CreateCloudFormationTemplate";
const _CCFTR = "CreateCloudFormationTemplateRequest";
const _CCFTRr = "CreateCloudFormationTemplateResponse";
const _CD = "ConstraintDescription";
const _CE = "ConflictException";
const _CSI = "ChangeSetId";
const _CSN = "ChangeSetName";
const _CT = "CreationTime";
const _CTl = "ClientToken";
const _D = "Description";
const _DA = "DeleteApplication";
const _DAR = "DeleteApplicationRequest";
const _DV = "DefaultValue";
const _De = "Dependencies";
const _EC = "ErrorCode";
const _ET = "ExpirationTime";
const _FE = "ForbiddenException";
const _GA = "GetApplication";
const _GAP = "GetApplicationPolicy";
const _GAPR = "GetApplicationPolicyRequest";
const _GAPRe = "GetApplicationPolicyResponse";
const _GAR = "GetApplicationRequest";
const _GARe = "GetApplicationResponse";
const _GCFT = "GetCloudFormationTemplate";
const _GCFTR = "GetCloudFormationTemplateRequest";
const _GCFTRe = "GetCloudFormationTemplateResponse";
const _HPU = "HomePageUrl";
const _ISEE = "InternalServerErrorException";
const _IVA = "IsVerifiedAuthor";
const _K = "Key";
const _L = "Labels";
const _LA = "ListApplications";
const _LAD = "ListApplicationDependencies";
const _LADR = "ListApplicationDependenciesRequest";
const _LADRi = "ListApplicationDependenciesResponse";
const _LAR = "ListApplicationsRequest";
const _LARi = "ListApplicationsResponse";
const _LAV = "ListApplicationVersions";
const _LAVR = "ListApplicationVersionsRequest";
const _LAVRi = "ListApplicationVersionsResponse";
const _LB = "LicenseBody";
const _LU = "LicenseUrl";
const _M = "Message";
const _MI = "MaxItems";
const _ML = "MaxLength";
const _MLi = "MinLength";
const _MTIM = "MonitoringTimeInMinutes";
const _MV = "MaxValue";
const _MVi = "MinValue";
const _N = "Name";
const _NA = "NotificationArns";
const _NE = "NoEcho";
const _NFE = "NotFoundException";
const _NT = "NextToken";
const _OI = "OrganizationId";
const _P = "Principals";
const _PAP = "PutApplicationPolicy";
const _PAPR = "PutApplicationPolicyRequest";
const _PAPRu = "PutApplicationPolicyResponse";
const _PD = "ParameterDefinitions";
const _PDa = "ParameterDefinition";
const _PO = "ParameterOverrides";
const _POID = "PrincipalOrgIDs";
const _PV = "ParameterValue";
const _RB = "ReadmeBody";
const _RBR = "ReferencedByResources";
const _RC = "RequiredCapabilities";
const _RCo = "RollbackConfiguration";
const _RS = "ResourcesSupported";
const _RT = "ResourceTypes";
const _RTo = "RollbackTriggers";
const _RTol = "RollbackTrigger";
const _RU = "ReadmeUrl";
const _S = "Status";
const _SCAU = "SourceCodeArchiveUrl";
const _SCU = "SourceCodeUrl";
const _SI = "StatementId";
const _SIt = "StackId";
const _SLI = "SpdxLicenseId";
const _SN = "StackName";
const _SV = "SemanticVersion";
const _St = "Statements";
const _T = "Tags";
const _TB = "TemplateBody";
const _TI = "TemplateId";
const _TMRE = "TooManyRequestsException";
const _TU = "TemplateUrl";
const _Ta = "Tag";
const _Ty = "Type";
const _UA = "UnshareApplication";
const _UAR = "UnshareApplicationRequest";
const _UARp = "UpdateApplicationRequest";
const _UARpd = "UpdateApplicationResponse";
const _UAp = "UpdateApplication";
const _V = "Version";
const _VAU = "VerifiedAuthorUrl";
const _VS = "VersionSummary";
const _Va = "Value";
const _Ve = "Versions";
const _a = "actions";
const _aI = "applicationId";
const _aP = "allowedPattern";
const _aV = "allowedValues";
const _ap = "applications";
const _ar = "arn";
const _au = "author";
const _c = "client";
const _cD = "constraintDescription";
const _cSI = "changeSetId";
const _cSN = "changeSetName";
const _cT = "creationTime";
const _cTl = "clientToken";
const _ca = "capabilities";
const _d = "description";
const _dV = "defaultValue";
const _de = "dependencies";
const _e = "error";
const _eC = "errorCode";
const _eT = "expirationTime";
const _h = "http";
const _hE = "httpError";
const _hPU = "homePageUrl";
const _hQ = "httpQuery";
const _iVA = "isVerifiedAuthor";
const _jN = "jsonName";
const _k = "key";
const _l = "labels";
const _lB = "licenseBody";
const _lOADS = "__listOfApplicationDependencySummary";
const _lOAPS = "__listOfApplicationPolicyStatement";
const _lOAS = "__listOfApplicationSummary";
const _lOPD = "__listOfParameterDefinition";
const _lOPV = "__listOfParameterValue";
const _lORT = "__listOfRollbackTrigger";
const _lOT = "__listOfTag";
const _lOVS = "__listOfVersionSummary";
const _lU = "licenseUrl";
const _m = "message";
const _mI = "maxItems";
const _mL = "maxLength";
const _mLi = "minLength";
const _mTIM = "monitoringTimeInMinutes";
const _mV = "maxValue";
const _mVi = "minValue";
const _n = "name";
const _nA = "notificationArns";
const _nE = "noEcho";
const _nT = "nextToken";
const _oI = "organizationId";
const _p = "principals";
const _pD = "parameterDefinitions";
const _pO = "parameterOverrides";
const _pOID = "principalOrgIDs";
const _rB = "readmeBody";
const _rBR = "referencedByResources";
const _rC = "requiredCapabilities";
const _rCo = "rollbackConfiguration";
const _rS = "resourcesSupported";
const _rT = "resourceTypes";
const _rTo = "rollbackTriggers";
const _rU = "readmeUrl";
const _s = "status";
const _sCAU = "sourceCodeArchiveUrl";
const _sCU = "sourceCodeUrl";
const _sI = "statementId";
const _sIt = "stackId";
const _sLI = "spdxLicenseId";
const _sN = "stackName";
const _sV = "semanticVersion";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.serverlessapplicationrepository";
const _st = "statements";
const _t = "tags";
const _tB = "templateBody";
const _tI = "templateId";
const _tU = "templateUrl";
const _ty = "type";
const _v = "version";
const _vAU = "verifiedAuthorUrl";
const _va = "value";
const _ve = "versions";
const n0 = "com.amazonaws.serverlessapplicationrepository";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  BadRequestException as __BadRequestException,
  ConflictException as __ConflictException,
  ForbiddenException as __ForbiddenException,
  InternalServerErrorException as __InternalServerErrorException,
  NotFoundException as __NotFoundException,
  TooManyRequestsException as __TooManyRequestsException,
} from "../models/errors";
import { ServerlessApplicationRepositoryServiceException as __ServerlessApplicationRepositoryServiceException } from "../models/ServerlessApplicationRepositoryServiceException";

/* eslint no-var: 0 */

export var ApplicationDependencySummary: StaticStructureSchema = [
  3,
  n0,
  _ADS,
  0,
  [_AI, _SV],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
  ],
];
export var ApplicationPolicyStatement: StaticStructureSchema = [
  3,
  n0,
  _APS,
  0,
  [_A, _POID, _P, _SI],
  [
    [
      64 | 0,
      {
        [_jN]: _a,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _pOID,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _p,
      },
    ],
    [
      0,
      {
        [_jN]: _sI,
      },
    ],
  ],
];
export var ApplicationSummary: StaticStructureSchema = [
  3,
  n0,
  _AS,
  0,
  [_AI, _Au, _CT, _D, _HPU, _L, _N, _SLI],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _hPU,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _l,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _sLI,
      },
    ],
  ],
];
export var BadRequestException: StaticErrorSchema = [
  -3,
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_EC, _M],
  [
    [
      0,
      {
        [_jN]: _eC,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(BadRequestException, __BadRequestException);

export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_EC, _M],
  [
    [
      0,
      {
        [_jN]: _eC,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CreateApplicationRequest: StaticStructureSchema = [
  3,
  n0,
  _CAR,
  0,
  [_Au, _D, _HPU, _L, _LB, _LU, _N, _RB, _RU, _SV, _SCAU, _SCU, _SLI, _TB, _TU],
  [
    [
      0,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _hPU,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _l,
      },
    ],
    [
      0,
      {
        [_jN]: _lB,
      },
    ],
    [
      0,
      {
        [_jN]: _lU,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _rB,
      },
    ],
    [
      0,
      {
        [_jN]: _rU,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      0,
      {
        [_jN]: _sCAU,
      },
    ],
    [
      0,
      {
        [_jN]: _sCU,
      },
    ],
    [
      0,
      {
        [_jN]: _sLI,
      },
    ],
    [
      0,
      {
        [_jN]: _tB,
      },
    ],
    [
      0,
      {
        [_jN]: _tU,
      },
    ],
  ],
];
export var CreateApplicationResponse: StaticStructureSchema = [
  3,
  n0,
  _CARr,
  0,
  [_AI, _Au, _CT, _D, _HPU, _IVA, _L, _LU, _N, _RU, _SLI, _VAU, _V],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _hPU,
      },
    ],
    [
      2,
      {
        [_jN]: _iVA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _l,
      },
    ],
    [
      0,
      {
        [_jN]: _lU,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _rU,
      },
    ],
    [
      0,
      {
        [_jN]: _sLI,
      },
    ],
    [
      0,
      {
        [_jN]: _vAU,
      },
    ],
    [
      () => Version,
      {
        [_jN]: _v,
      },
    ],
  ],
];
export var CreateApplicationVersionRequest: StaticStructureSchema = [
  3,
  n0,
  _CAVR,
  0,
  [_AI, _SV, _SCAU, _SCU, _TB, _TU],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _sCAU,
      },
    ],
    [
      0,
      {
        [_jN]: _sCU,
      },
    ],
    [
      0,
      {
        [_jN]: _tB,
      },
    ],
    [
      0,
      {
        [_jN]: _tU,
      },
    ],
  ],
];
export var CreateApplicationVersionResponse: StaticStructureSchema = [
  3,
  n0,
  _CAVRr,
  0,
  [_AI, _CT, _PD, _RC, _RS, _SV, _SCAU, _SCU, _TU],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      () => __listOfParameterDefinition,
      {
        [_jN]: _pD,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _rC,
      },
    ],
    [
      2,
      {
        [_jN]: _rS,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      0,
      {
        [_jN]: _sCAU,
      },
    ],
    [
      0,
      {
        [_jN]: _sCU,
      },
    ],
    [
      0,
      {
        [_jN]: _tU,
      },
    ],
  ],
];
export var CreateCloudFormationChangeSetRequest: StaticStructureSchema = [
  3,
  n0,
  _CCFCSR,
  0,
  [_AI, _C, _CSN, _CTl, _D, _NA, _PO, _RT, _RCo, _SV, _SN, _T, _TI],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_jN]: _ca,
      },
    ],
    [
      0,
      {
        [_jN]: _cSN,
      },
    ],
    [
      0,
      {
        [_jN]: _cTl,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _nA,
      },
    ],
    [
      () => __listOfParameterValue,
      {
        [_jN]: _pO,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _rT,
      },
    ],
    [
      () => RollbackConfiguration,
      {
        [_jN]: _rCo,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      0,
      {
        [_jN]: _sN,
      },
    ],
    [
      () => __listOfTag,
      {
        [_jN]: _t,
      },
    ],
    [
      0,
      {
        [_jN]: _tI,
      },
    ],
  ],
];
export var CreateCloudFormationChangeSetResponse: StaticStructureSchema = [
  3,
  n0,
  _CCFCSRr,
  0,
  [_AI, _CSI, _SV, _SIt],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _cSI,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      0,
      {
        [_jN]: _sIt,
      },
    ],
  ],
];
export var CreateCloudFormationTemplateRequest: StaticStructureSchema = [
  3,
  n0,
  _CCFTR,
  0,
  [_AI, _SV],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
  ],
];
export var CreateCloudFormationTemplateResponse: StaticStructureSchema = [
  3,
  n0,
  _CCFTRr,
  0,
  [_AI, _CT, _ET, _SV, _S, _TI, _TU],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
    [
      0,
      {
        [_jN]: _tI,
      },
    ],
    [
      0,
      {
        [_jN]: _tU,
      },
    ],
  ],
];
export var DeleteApplicationRequest: StaticStructureSchema = [3, n0, _DAR, 0, [_AI], [[0, 1]]];
export var ForbiddenException: StaticErrorSchema = [
  -3,
  n0,
  _FE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_EC, _M],
  [
    [
      0,
      {
        [_jN]: _eC,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(ForbiddenException, __ForbiddenException);

export var GetApplicationPolicyRequest: StaticStructureSchema = [3, n0, _GAPR, 0, [_AI], [[0, 1]]];
export var GetApplicationPolicyResponse: StaticStructureSchema = [
  3,
  n0,
  _GAPRe,
  0,
  [_St],
  [
    [
      () => __listOfApplicationPolicyStatement,
      {
        [_jN]: _st,
      },
    ],
  ],
];
export var GetApplicationRequest: StaticStructureSchema = [
  3,
  n0,
  _GAR,
  0,
  [_AI, _SV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sV,
      },
    ],
  ],
];
export var GetApplicationResponse: StaticStructureSchema = [
  3,
  n0,
  _GARe,
  0,
  [_AI, _Au, _CT, _D, _HPU, _IVA, _L, _LU, _N, _RU, _SLI, _VAU, _V],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _hPU,
      },
    ],
    [
      2,
      {
        [_jN]: _iVA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _l,
      },
    ],
    [
      0,
      {
        [_jN]: _lU,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _rU,
      },
    ],
    [
      0,
      {
        [_jN]: _sLI,
      },
    ],
    [
      0,
      {
        [_jN]: _vAU,
      },
    ],
    [
      () => Version,
      {
        [_jN]: _v,
      },
    ],
  ],
];
export var GetCloudFormationTemplateRequest: StaticStructureSchema = [
  3,
  n0,
  _GCFTR,
  0,
  [_AI, _TI],
  [
    [0, 1],
    [0, 1],
  ],
];
export var GetCloudFormationTemplateResponse: StaticStructureSchema = [
  3,
  n0,
  _GCFTRe,
  0,
  [_AI, _CT, _ET, _SV, _S, _TI, _TU],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
    [
      0,
      {
        [_jN]: _tI,
      },
    ],
    [
      0,
      {
        [_jN]: _tU,
      },
    ],
  ],
];
export var InternalServerErrorException: StaticErrorSchema = [
  -3,
  n0,
  _ISEE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_EC, _M],
  [
    [
      0,
      {
        [_jN]: _eC,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(InternalServerErrorException, __InternalServerErrorException);

export var ListApplicationDependenciesRequest: StaticStructureSchema = [
  3,
  n0,
  _LADR,
  0,
  [_AI, _MI, _NT, _SV],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _sV,
      },
    ],
  ],
];
export var ListApplicationDependenciesResponse: StaticStructureSchema = [
  3,
  n0,
  _LADRi,
  0,
  [_De, _NT],
  [
    [
      () => __listOfApplicationDependencySummary,
      {
        [_jN]: _de,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ],
];
export var ListApplicationsRequest: StaticStructureSchema = [
  3,
  n0,
  _LAR,
  0,
  [_MI, _NT],
  [
    [
      1,
      {
        [_hQ]: _mI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ],
];
export var ListApplicationsResponse: StaticStructureSchema = [
  3,
  n0,
  _LARi,
  0,
  [_Ap, _NT],
  [
    [
      () => __listOfApplicationSummary,
      {
        [_jN]: _ap,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ],
];
export var ListApplicationVersionsRequest: StaticStructureSchema = [
  3,
  n0,
  _LAVR,
  0,
  [_AI, _MI, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ],
];
export var ListApplicationVersionsResponse: StaticStructureSchema = [
  3,
  n0,
  _LAVRi,
  0,
  [_NT, _Ve],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfVersionSummary,
      {
        [_jN]: _ve,
      },
    ],
  ],
];
export var NotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_EC, _M],
  [
    [
      0,
      {
        [_jN]: _eC,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(NotFoundException, __NotFoundException);

export var ParameterDefinition: StaticStructureSchema = [
  3,
  n0,
  _PDa,
  0,
  [_AP, _AV, _CD, _DV, _D, _ML, _MV, _MLi, _MVi, _N, _NE, _RBR, _Ty],
  [
    [
      0,
      {
        [_jN]: _aP,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aV,
      },
    ],
    [
      0,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _dV,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      1,
      {
        [_jN]: _mL,
      },
    ],
    [
      1,
      {
        [_jN]: _mV,
      },
    ],
    [
      1,
      {
        [_jN]: _mLi,
      },
    ],
    [
      1,
      {
        [_jN]: _mVi,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      2,
      {
        [_jN]: _nE,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _rBR,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ],
];
export var ParameterValue: StaticStructureSchema = [
  3,
  n0,
  _PV,
  0,
  [_N, _Va],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _va,
      },
    ],
  ],
];
export var PutApplicationPolicyRequest: StaticStructureSchema = [
  3,
  n0,
  _PAPR,
  0,
  [_AI, _St],
  [
    [0, 1],
    [
      () => __listOfApplicationPolicyStatement,
      {
        [_jN]: _st,
      },
    ],
  ],
];
export var PutApplicationPolicyResponse: StaticStructureSchema = [
  3,
  n0,
  _PAPRu,
  0,
  [_St],
  [
    [
      () => __listOfApplicationPolicyStatement,
      {
        [_jN]: _st,
      },
    ],
  ],
];
export var RollbackConfiguration: StaticStructureSchema = [
  3,
  n0,
  _RCo,
  0,
  [_MTIM, _RTo],
  [
    [
      1,
      {
        [_jN]: _mTIM,
      },
    ],
    [
      () => __listOfRollbackTrigger,
      {
        [_jN]: _rTo,
      },
    ],
  ],
];
export var RollbackTrigger: StaticStructureSchema = [
  3,
  n0,
  _RTol,
  0,
  [_Ar, _Ty],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ],
];
export var Tag: StaticStructureSchema = [
  3,
  n0,
  _Ta,
  0,
  [_K, _Va],
  [
    [
      0,
      {
        [_jN]: _k,
      },
    ],
    [
      0,
      {
        [_jN]: _va,
      },
    ],
  ],
];
export var TooManyRequestsException: StaticErrorSchema = [
  -3,
  n0,
  _TMRE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_EC, _M],
  [
    [
      0,
      {
        [_jN]: _eC,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(TooManyRequestsException, __TooManyRequestsException);

export var UnshareApplicationRequest: StaticStructureSchema = [
  3,
  n0,
  _UAR,
  0,
  [_AI, _OI],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _oI,
      },
    ],
  ],
];
export var UpdateApplicationRequest: StaticStructureSchema = [
  3,
  n0,
  _UARp,
  0,
  [_AI, _Au, _D, _HPU, _L, _RB, _RU],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _hPU,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _l,
      },
    ],
    [
      0,
      {
        [_jN]: _rB,
      },
    ],
    [
      0,
      {
        [_jN]: _rU,
      },
    ],
  ],
];
export var UpdateApplicationResponse: StaticStructureSchema = [
  3,
  n0,
  _UARpd,
  0,
  [_AI, _Au, _CT, _D, _HPU, _IVA, _L, _LU, _N, _RU, _SLI, _VAU, _V],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _hPU,
      },
    ],
    [
      2,
      {
        [_jN]: _iVA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _l,
      },
    ],
    [
      0,
      {
        [_jN]: _lU,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _rU,
      },
    ],
    [
      0,
      {
        [_jN]: _sLI,
      },
    ],
    [
      0,
      {
        [_jN]: _vAU,
      },
    ],
    [
      () => Version,
      {
        [_jN]: _v,
      },
    ],
  ],
];
export var Version: StaticStructureSchema = [
  3,
  n0,
  _V,
  0,
  [_AI, _CT, _PD, _RC, _RS, _SV, _SCAU, _SCU, _TU],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      () => __listOfParameterDefinition,
      {
        [_jN]: _pD,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _rC,
      },
    ],
    [
      2,
      {
        [_jN]: _rS,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      0,
      {
        [_jN]: _sCAU,
      },
    ],
    [
      0,
      {
        [_jN]: _sCU,
      },
    ],
    [
      0,
      {
        [_jN]: _tU,
      },
    ],
  ],
];
export var VersionSummary: StaticStructureSchema = [
  3,
  n0,
  _VS,
  0,
  [_AI, _CT, _SV, _SCU],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      0,
      {
        [_jN]: _sCU,
      },
    ],
  ],
];
export var __Unit = "unit" as const;

export var ServerlessApplicationRepositoryServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "ServerlessApplicationRepositoryServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(
  ServerlessApplicationRepositoryServiceException,
  __ServerlessApplicationRepositoryServiceException
);

export var __listOf__string = 64 | 0;

export var __listOfApplicationDependencySummary: StaticListSchema = [
  1,
  n0,
  _lOADS,
  0,
  [() => ApplicationDependencySummary, 0],
];
export var __listOfApplicationPolicyStatement: StaticListSchema = [
  1,
  n0,
  _lOAPS,
  0,
  [() => ApplicationPolicyStatement, 0],
];
export var __listOfApplicationSummary: StaticListSchema = [1, n0, _lOAS, 0, [() => ApplicationSummary, 0]];
export var __listOfCapability = 64 | 0;

export var __listOfParameterDefinition: StaticListSchema = [1, n0, _lOPD, 0, [() => ParameterDefinition, 0]];
export var __listOfParameterValue: StaticListSchema = [1, n0, _lOPV, 0, [() => ParameterValue, 0]];
export var __listOfRollbackTrigger: StaticListSchema = [1, n0, _lORT, 0, [() => RollbackTrigger, 0]];
export var __listOfTag: StaticListSchema = [1, n0, _lOT, 0, [() => Tag, 0]];
export var __listOfVersionSummary: StaticListSchema = [1, n0, _lOVS, 0, [() => VersionSummary, 0]];
export var CreateApplication: StaticOperationSchema = [
  9,
  n0,
  _CA,
  {
    [_h]: ["POST", "/applications", 201],
  },
  () => CreateApplicationRequest,
  () => CreateApplicationResponse,
];
export var CreateApplicationVersion: StaticOperationSchema = [
  9,
  n0,
  _CAV,
  {
    [_h]: ["PUT", "/applications/{ApplicationId}/versions/{SemanticVersion}", 201],
  },
  () => CreateApplicationVersionRequest,
  () => CreateApplicationVersionResponse,
];
export var CreateCloudFormationChangeSet: StaticOperationSchema = [
  9,
  n0,
  _CCFCS,
  {
    [_h]: ["POST", "/applications/{ApplicationId}/changesets", 201],
  },
  () => CreateCloudFormationChangeSetRequest,
  () => CreateCloudFormationChangeSetResponse,
];
export var CreateCloudFormationTemplate: StaticOperationSchema = [
  9,
  n0,
  _CCFT,
  {
    [_h]: ["POST", "/applications/{ApplicationId}/templates", 201],
  },
  () => CreateCloudFormationTemplateRequest,
  () => CreateCloudFormationTemplateResponse,
];
export var DeleteApplication: StaticOperationSchema = [
  9,
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/applications/{ApplicationId}", 204],
  },
  () => DeleteApplicationRequest,
  () => __Unit,
];
export var GetApplication: StaticOperationSchema = [
  9,
  n0,
  _GA,
  {
    [_h]: ["GET", "/applications/{ApplicationId}", 200],
  },
  () => GetApplicationRequest,
  () => GetApplicationResponse,
];
export var GetApplicationPolicy: StaticOperationSchema = [
  9,
  n0,
  _GAP,
  {
    [_h]: ["GET", "/applications/{ApplicationId}/policy", 200],
  },
  () => GetApplicationPolicyRequest,
  () => GetApplicationPolicyResponse,
];
export var GetCloudFormationTemplate: StaticOperationSchema = [
  9,
  n0,
  _GCFT,
  {
    [_h]: ["GET", "/applications/{ApplicationId}/templates/{TemplateId}", 200],
  },
  () => GetCloudFormationTemplateRequest,
  () => GetCloudFormationTemplateResponse,
];
export var ListApplicationDependencies: StaticOperationSchema = [
  9,
  n0,
  _LAD,
  {
    [_h]: ["GET", "/applications/{ApplicationId}/dependencies", 200],
  },
  () => ListApplicationDependenciesRequest,
  () => ListApplicationDependenciesResponse,
];
export var ListApplications: StaticOperationSchema = [
  9,
  n0,
  _LA,
  {
    [_h]: ["GET", "/applications", 200],
  },
  () => ListApplicationsRequest,
  () => ListApplicationsResponse,
];
export var ListApplicationVersions: StaticOperationSchema = [
  9,
  n0,
  _LAV,
  {
    [_h]: ["GET", "/applications/{ApplicationId}/versions", 200],
  },
  () => ListApplicationVersionsRequest,
  () => ListApplicationVersionsResponse,
];
export var PutApplicationPolicy: StaticOperationSchema = [
  9,
  n0,
  _PAP,
  {
    [_h]: ["PUT", "/applications/{ApplicationId}/policy", 200],
  },
  () => PutApplicationPolicyRequest,
  () => PutApplicationPolicyResponse,
];
export var UnshareApplication: StaticOperationSchema = [
  9,
  n0,
  _UA,
  {
    [_h]: ["POST", "/applications/{ApplicationId}/unshare", 204],
  },
  () => UnshareApplicationRequest,
  () => __Unit,
];
export var UpdateApplication: StaticOperationSchema = [
  9,
  n0,
  _UAp,
  {
    [_h]: ["PATCH", "/applications/{ApplicationId}", 200],
  },
  () => UpdateApplicationRequest,
  () => UpdateApplicationResponse,
];

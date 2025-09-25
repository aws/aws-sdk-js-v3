// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  DistributionAlreadyExists as __DistributionAlreadyExists,
  IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior as __IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior,
  IllegalOriginAccessConfiguration as __IllegalOriginAccessConfiguration,
  InvalidAssociation as __InvalidAssociation,
  InvalidDefaultRootObject as __InvalidDefaultRootObject,
  InvalidDomainNameForOriginAccessControl as __InvalidDomainNameForOriginAccessControl,
  InvalidErrorCode as __InvalidErrorCode,
  InvalidForwardCookies as __InvalidForwardCookies,
  InvalidFunctionAssociation as __InvalidFunctionAssociation,
  InvalidGeoRestrictionParameter as __InvalidGeoRestrictionParameter,
  InvalidHeadersForS3Origin as __InvalidHeadersForS3Origin,
  InvalidLambdaFunctionAssociation as __InvalidLambdaFunctionAssociation,
  InvalidLocationCode as __InvalidLocationCode,
  InvalidMinimumProtocolVersion as __InvalidMinimumProtocolVersion,
  InvalidOriginKeepaliveTimeout as __InvalidOriginKeepaliveTimeout,
  InvalidOriginReadTimeout as __InvalidOriginReadTimeout,
  InvalidProtocolSettings as __InvalidProtocolSettings,
  InvalidQueryStringParameters as __InvalidQueryStringParameters,
  InvalidRelativePath as __InvalidRelativePath,
  InvalidRequiredProtocol as __InvalidRequiredProtocol,
  InvalidResponseCode as __InvalidResponseCode,
  InvalidTTLOrder as __InvalidTTLOrder,
  InvalidViewerCertificate as __InvalidViewerCertificate,
  NoSuchOrigin as __NoSuchOrigin,
  RealtimeLogConfigOwnerMismatch as __RealtimeLogConfigOwnerMismatch,
  TooManyCacheBehaviors as __TooManyCacheBehaviors,
  TooManyCertificates as __TooManyCertificates,
  TooManyCookieNamesInWhiteList as __TooManyCookieNamesInWhiteList,
  TooManyDistributions as __TooManyDistributions,
  TooManyDistributionsAssociatedToCachePolicy as __TooManyDistributionsAssociatedToCachePolicy,
  TooManyDistributionsAssociatedToFieldLevelEncryptionConfig as __TooManyDistributionsAssociatedToFieldLevelEncryptionConfig,
  TooManyDistributionsAssociatedToKeyGroup as __TooManyDistributionsAssociatedToKeyGroup,
  TooManyDistributionsAssociatedToOriginAccessControl as __TooManyDistributionsAssociatedToOriginAccessControl,
  TooManyDistributionsAssociatedToOriginRequestPolicy as __TooManyDistributionsAssociatedToOriginRequestPolicy,
  TooManyDistributionsAssociatedToResponseHeadersPolicy as __TooManyDistributionsAssociatedToResponseHeadersPolicy,
  TooManyDistributionsWithFunctionAssociations as __TooManyDistributionsWithFunctionAssociations,
  TooManyDistributionsWithLambdaAssociations as __TooManyDistributionsWithLambdaAssociations,
  TooManyDistributionsWithSingleFunctionARN as __TooManyDistributionsWithSingleFunctionARN,
  TooManyFunctionAssociations as __TooManyFunctionAssociations,
  TooManyHeadersInForwardedValues as __TooManyHeadersInForwardedValues,
  TooManyKeyGroupsAssociatedToDistribution as __TooManyKeyGroupsAssociatedToDistribution,
  TooManyLambdaFunctionAssociations as __TooManyLambdaFunctionAssociations,
  TooManyOriginCustomHeaders as __TooManyOriginCustomHeaders,
  TooManyOriginGroupsPerDistribution as __TooManyOriginGroupsPerDistribution,
  TooManyOrigins as __TooManyOrigins,
  TooManyQueryStringParameters as __TooManyQueryStringParameters,
  TrustedKeyGroupDoesNotExist as __TrustedKeyGroupDoesNotExist,
} from "../models/index";
import {
  _A,
  _AICPRl,
  _AILI,
  _Ar,
  _ARN,
  _ATKG,
  _ATS,
  _B,
  _c,
  _CBa,
  _CD,
  _CDPI,
  _CDR,
  _CDr,
  _CDRo,
  _CDRr,
  _CDRre,
  _CDT,
  _CDTR,
  _CDTRr,
  _CDWT,
  _CDWTR,
  _CDWTRr,
  _CERu,
  _CGI,
  _CMo,
  _Co,
  _CR,
  _CT,
  _CTLP,
  _CTr,
  _Cu,
  _D,
  _d,
  _DAE,
  _DC,
  _DCB,
  _DCWT,
  _Def,
  _DI,
  _DIo,
  _DLo,
  _DN,
  _Do,
  _Dom,
  _DRO,
  _DT,
  _DV,
  _E,
  _e,
  _ET,
  _GD,
  _GDC,
  _GDCR,
  _GDCRe,
  _GDR,
  _GDRe,
  _GDT,
  _GDTBD,
  _GDTBDR,
  _GDTBDRe,
  _GDTR,
  _GDTRe,
  _h,
  _hE,
  _hH,
  _hP,
  _hQ,
  _HV,
  _I,
  _IAn,
  _ICn,
  _Id,
  _Ide,
  _IDNFOAC,
  _IDRO,
  _IEC,
  _IFA,
  _IFC,
  _IFLECAWCB,
  _IGRP,
  _IHFSO,
  _IIPVE,
  _ILC,
  _ILFA,
  _IM,
  _IM_,
  _IMPV,
  _IOAC,
  _IOKT,
  _IORT,
  _IPIB,
  _IPS,
  _IQSP,
  _IRC,
  _IRP,
  _IRPn,
  _ITTLO,
  _IVC,
  _KG,
  _KGI,
  _KGKPI,
  _KGKPIL,
  _KPI,
  _L,
  _LC,
  _LMT,
  _Lo,
  _M,
  _MCR,
  _N,
  _NSO,
  _O,
  _OG,
  _P,
  _Par,
  _PC,
  _PD,
  _PDa,
  _PDI,
  _PDN,
  _PDS,
  _Pr,
  _Q,
  _R,
  _Req,
  _RLCOM,
  _S,
  _SDI,
  _SSCt,
  _SSt,
  _St,
  _Ta,
  _TCe,
  _TKGDNE,
  _TMC,
  _TMCB,
  _TMCNIWL,
  _TMD,
  _TMDATCP,
  _TMDATFLEC,
  _TMDATKG,
  _TMDATOAC,
  _TMDATORP,
  _TMDATRHP,
  _TMDWFA,
  _TMDWLA,
  _TMDWSFARN,
  _TMFA,
  _TMHIFV,
  _TMKGATD,
  _TMLFA,
  _TMO,
  _TMOCH,
  _TMOGPD,
  _TMQSP,
  _UD,
  _UDR,
  _UDRp,
  _UDT,
  _UDTR,
  _UDTRp,
  _UDWSC,
  _UDWSCR,
  _UDWSCRp,
  _V,
  _VC,
  _VTH,
  _WACLI,
  _xN,
  Aliases,
  n0,
  sensitiveStringType,
  Tags,
} from "./schemas_0";
import {
  CacheBehaviors,
  CustomErrorResponses,
  DefaultCacheBehavior,
  OriginGroups,
  Origins,
  Restrictions,
  ViewerCertificate,
} from "./schemas_7_Distribution";
import { AliasICPRecordals } from "./schemas_14_Distribution";
import { ActiveTrustedSigners, KeyPairIds } from "./schemas_18_Distribution";
import { Customizations, DomainResultList } from "./schemas_41_Distribution";

/* eslint no-var: 0 */

export var CommentType = sim(n0, _CT, 0, 8);
export var ActiveTrustedKeyGroups = struct(n0, _ATKG, 0, [_E, _Q, _I], [2, 1, [() => KGKeyPairIdsList, 0]]);
export var CopyDistributionRequest = struct(
  n0,
  _CDR,
  0,
  [_PDI, _St, _IM, _CR, _E],
  [
    [0, 1],
    [
      2,
      {
        [_hH]: _St,
      },
    ],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
    0,
    2,
  ]
);
export var CopyDistributionResult = struct(
  n0,
  _CDRo,
  0,
  [_D, _L, _ET],
  [
    [() => Distribution, 16],
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var CreateDistributionRequest = struct(
  n0,
  _CDRr,
  0,
  [_DC],
  [
    [
      () => DistributionConfig,
      {
        [_xN]: _DC,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreateDistributionResult = struct(
  n0,
  _CDRre,
  0,
  [_D, _L, _ET],
  [
    [() => Distribution, 16],
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var CreateDistributionTenantRequest = struct(
  n0,
  _CDTR,
  0,
  [_DI, _N, _Do, _Ta, _Cu, _P, _CGI, _MCR, _E],
  [
    0,
    0,
    () => DomainList,
    [() => Tags, 0],
    [() => Customizations, 0],
    () => _Parameters,
    0,
    () => ManagedCertificateRequest,
    2,
  ]
);
export var CreateDistributionTenantResult = struct(
  n0,
  _CDTRr,
  0,
  [_DT, _ET],
  [
    [() => DistributionTenant, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var CreateDistributionWithTagsRequest = struct(
  n0,
  _CDWTR,
  0,
  [_DCWT],
  [
    [
      () => DistributionConfigWithTags,
      {
        [_xN]: _DCWT,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreateDistributionWithTagsResult = struct(
  n0,
  _CDWTRr,
  0,
  [_D, _L, _ET],
  [
    [() => Distribution, 16],
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var Distribution = struct(
  n0,
  _D,
  0,
  [_Id, _ARN, _S, _LMT, _IPIB, _DN, _ATS, _ATKG, _DC, _AICPRl],
  [
    0,
    0,
    0,
    4,
    1,
    0,
    [() => ActiveTrustedSigners, 0],
    [() => ActiveTrustedKeyGroups, 0],
    [() => DistributionConfig, 0],
    [() => AliasICPRecordals, 0],
  ]
);
export var DistributionAlreadyExists = error(
  n0,
  _DAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __DistributionAlreadyExists
);
export var DistributionConfig = struct(
  n0,
  _DC,
  0,
  [
    _CR,
    _A,
    _DRO,
    _O,
    _OG,
    _DCB,
    _CBa,
    _CERu,
    _Co,
    _Lo,
    _PC,
    _E,
    _VC,
    _R,
    _WACLI,
    _HV,
    _IIPVE,
    _CDPI,
    _St,
    _AILI,
    _TCe,
    _CMo,
  ],
  [
    0,
    [() => Aliases, 0],
    0,
    [() => Origins, 0],
    [() => OriginGroups, 0],
    [() => DefaultCacheBehavior, 0],
    [() => CacheBehaviors, 0],
    [() => CustomErrorResponses, 0],
    [() => CommentType, 0],
    () => LoggingConfig,
    0,
    2,
    () => ViewerCertificate,
    [() => Restrictions, 0],
    0,
    0,
    2,
    0,
    2,
    0,
    [() => TenantConfig, 0],
    0,
  ]
);
export var DistributionConfigWithTags = struct(
  n0,
  _DCWT,
  0,
  [_DC, _Ta],
  [
    [() => DistributionConfig, 0],
    [() => Tags, 0],
  ]
);
export var DistributionTenant = struct(
  n0,
  _DT,
  0,
  [_Id, _DI, _N, _Ar, _Do, _Ta, _Cu, _P, _CGI, _CTr, _LMT, _E, _S],
  [0, 0, 0, 0, () => DomainResultList, [() => Tags, 0], [() => Customizations, 0], () => _Parameters, 0, 4, 4, 2, 0]
);
export var DomainItem = struct(n0, _DIo, 0, [_Dom], [0]);
export var GetDistributionConfigRequest = struct(n0, _GDCR, 0, [_Id], [[0, 1]]);
export var GetDistributionConfigResult = struct(
  n0,
  _GDCRe,
  0,
  [_DC, _ET],
  [
    [() => DistributionConfig, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetDistributionRequest = struct(n0, _GDR, 0, [_Id], [[0, 1]]);
export var GetDistributionResult = struct(
  n0,
  _GDRe,
  0,
  [_D, _ET],
  [
    [() => Distribution, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetDistributionTenantByDomainRequest = struct(
  n0,
  _GDTBDR,
  0,
  [_Dom],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
  ]
);
export var GetDistributionTenantByDomainResult = struct(
  n0,
  _GDTBDRe,
  0,
  [_DT, _ET],
  [
    [() => DistributionTenant, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetDistributionTenantRequest = struct(n0, _GDTR, 0, [_Ide], [[0, 1]]);
export var GetDistributionTenantResult = struct(
  n0,
  _GDTRe,
  0,
  [_DT, _ET],
  [
    [() => DistributionTenant, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior = error(
  n0,
  _IFLECAWCB,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
);
export var IllegalOriginAccessConfiguration = error(
  n0,
  _IOAC,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __IllegalOriginAccessConfiguration
);
export var InvalidAssociation = error(
  n0,
  _IAn,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __InvalidAssociation
);
export var InvalidDefaultRootObject = error(
  n0,
  _IDRO,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidDefaultRootObject
);
export var InvalidDomainNameForOriginAccessControl = error(
  n0,
  _IDNFOAC,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidDomainNameForOriginAccessControl
);
export var InvalidErrorCode = error(
  n0,
  _IEC,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidErrorCode
);
export var InvalidForwardCookies = error(
  n0,
  _IFC,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidForwardCookies
);
export var InvalidFunctionAssociation = error(
  n0,
  _IFA,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidFunctionAssociation
);
export var InvalidGeoRestrictionParameter = error(
  n0,
  _IGRP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidGeoRestrictionParameter
);
export var InvalidHeadersForS3Origin = error(
  n0,
  _IHFSO,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidHeadersForS3Origin
);
export var InvalidLambdaFunctionAssociation = error(
  n0,
  _ILFA,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidLambdaFunctionAssociation
);
export var InvalidLocationCode = error(
  n0,
  _ILC,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidLocationCode
);
export var InvalidMinimumProtocolVersion = error(
  n0,
  _IMPV,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidMinimumProtocolVersion
);
export var InvalidOriginKeepaliveTimeout = error(
  n0,
  _IOKT,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidOriginKeepaliveTimeout
);
export var InvalidOriginReadTimeout = error(
  n0,
  _IORT,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidOriginReadTimeout
);
export var InvalidProtocolSettings = error(
  n0,
  _IPS,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidProtocolSettings
);
export var InvalidQueryStringParameters = error(
  n0,
  _IQSP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidQueryStringParameters
);
export var InvalidRelativePath = error(
  n0,
  _IRP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidRelativePath
);
export var InvalidRequiredProtocol = error(
  n0,
  _IRPn,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidRequiredProtocol
);
export var InvalidResponseCode = error(
  n0,
  _IRC,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidResponseCode
);
export var InvalidTTLOrder = error(
  n0,
  _ITTLO,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidTTLOrder
);
export var InvalidViewerCertificate = error(
  n0,
  _IVC,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidViewerCertificate
);
export var KGKeyPairIds = struct(n0, _KGKPI, 0, [_KGI, _KPI], [0, [() => KeyPairIds, 0]]);
export var LoggingConfig = struct(n0, _LC, 0, [_E, _ICn, _B, _Pr], [2, 2, 0, 0]);
export var ManagedCertificateRequest = struct(n0, _MCR, 0, [_VTH, _PDN, _CTLP], [0, 0, 0]);
export var NoSuchOrigin = error(
  n0,
  _NSO,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchOrigin
);
export var Parameter = struct(n0, _Par, 0, [_N, _V], [0, 0]);
export var ParameterDefinition = struct(n0, _PD, 0, [_N, _Def], [0, [() => ParameterDefinitionSchema, 0]]);
export var ParameterDefinitionSchema = struct(n0, _PDS, 0, [_SSt], [[() => StringSchemaConfig, 0]]);
export var RealtimeLogConfigOwnerMismatch = error(
  n0,
  _RLCOM,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_M],
  [0],

  __RealtimeLogConfigOwnerMismatch
);
export var StringSchemaConfig = struct(n0, _SSCt, 0, [_Co, _DV, _Req], [[() => sensitiveStringType, 0], 0, 2]);
export var TenantConfig = struct(n0, _TCe, 0, [_PDa], [[() => ParameterDefinitions, 0]]);
export var TooManyCacheBehaviors = error(
  n0,
  _TMCB,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyCacheBehaviors
);
export var TooManyCertificates = error(
  n0,
  _TMC,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyCertificates
);
export var TooManyCookieNamesInWhiteList = error(
  n0,
  _TMCNIWL,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyCookieNamesInWhiteList
);
export var TooManyDistributions = error(
  n0,
  _TMD,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyDistributions
);
export var TooManyDistributionsAssociatedToCachePolicy = error(
  n0,
  _TMDATCP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyDistributionsAssociatedToCachePolicy
);
export var TooManyDistributionsAssociatedToFieldLevelEncryptionConfig = error(
  n0,
  _TMDATFLEC,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
);
export var TooManyDistributionsAssociatedToKeyGroup = error(
  n0,
  _TMDATKG,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyDistributionsAssociatedToKeyGroup
);
export var TooManyDistributionsAssociatedToOriginAccessControl = error(
  n0,
  _TMDATOAC,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyDistributionsAssociatedToOriginAccessControl
);
export var TooManyDistributionsAssociatedToOriginRequestPolicy = error(
  n0,
  _TMDATORP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyDistributionsAssociatedToOriginRequestPolicy
);
export var TooManyDistributionsAssociatedToResponseHeadersPolicy = error(
  n0,
  _TMDATRHP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyDistributionsAssociatedToResponseHeadersPolicy
);
export var TooManyDistributionsWithFunctionAssociations = error(
  n0,
  _TMDWFA,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyDistributionsWithFunctionAssociations
);
export var TooManyDistributionsWithLambdaAssociations = error(
  n0,
  _TMDWLA,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyDistributionsWithLambdaAssociations
);
export var TooManyDistributionsWithSingleFunctionARN = error(
  n0,
  _TMDWSFARN,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyDistributionsWithSingleFunctionARN
);
export var TooManyFunctionAssociations = error(
  n0,
  _TMFA,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyFunctionAssociations
);
export var TooManyHeadersInForwardedValues = error(
  n0,
  _TMHIFV,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyHeadersInForwardedValues
);
export var TooManyKeyGroupsAssociatedToDistribution = error(
  n0,
  _TMKGATD,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyKeyGroupsAssociatedToDistribution
);
export var TooManyLambdaFunctionAssociations = error(
  n0,
  _TMLFA,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyLambdaFunctionAssociations
);
export var TooManyOriginCustomHeaders = error(
  n0,
  _TMOCH,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyOriginCustomHeaders
);
export var TooManyOriginGroupsPerDistribution = error(
  n0,
  _TMOGPD,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyOriginGroupsPerDistribution
);
export var TooManyOrigins = error(
  n0,
  _TMO,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyOrigins
);
export var TooManyQueryStringParameters = error(
  n0,
  _TMQSP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyQueryStringParameters
);
export var TrustedKeyGroupDoesNotExist = error(
  n0,
  _TKGDNE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TrustedKeyGroupDoesNotExist
);
export var UpdateDistributionRequest = struct(
  n0,
  _UDR,
  0,
  [_DC, _Id, _IM],
  [
    [
      () => DistributionConfig,
      {
        [_xN]: _DC,
        [_hP]: 1,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var UpdateDistributionResult = struct(
  n0,
  _UDRp,
  0,
  [_D, _ET],
  [
    [() => Distribution, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var UpdateDistributionTenantRequest = struct(
  n0,
  _UDTR,
  0,
  [_Id, _DI, _Do, _Cu, _P, _CGI, _IM, _MCR, _E],
  [
    [0, 1],
    0,
    () => DomainList,
    [() => Customizations, 0],
    () => _Parameters,
    0,
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
    () => ManagedCertificateRequest,
    2,
  ]
);
export var UpdateDistributionTenantResult = struct(
  n0,
  _UDTRp,
  0,
  [_DT, _ET],
  [
    [() => DistributionTenant, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var UpdateDistributionWithStagingConfigRequest = struct(
  n0,
  _UDWSCR,
  0,
  [_Id, _SDI, _IM],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _SDI,
      },
    ],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var UpdateDistributionWithStagingConfigResult = struct(
  n0,
  _UDWSCRp,
  0,
  [_D, _ET],
  [
    [() => Distribution, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var DomainList = list(n0, _DLo, 0, () => DomainItem);
export var KGKeyPairIdsList = list(n0, _KGKPIL, 0, [
  () => KGKeyPairIds,
  {
    [_xN]: _KG,
  },
]);
export var ParameterDefinitions = list(n0, _PDa, 0, [() => ParameterDefinition, 0]);
export var _Parameters = list(n0, _P, 0, () => Parameter);
export var CopyDistribution = op(
  n0,
  _CD,
  {
    [_h]: ["POST", "/2020-05-31/distribution/{PrimaryDistributionId}/copy", 201],
  },
  () => CopyDistributionRequest,
  () => CopyDistributionResult
);
export var CreateDistribution = op(
  n0,
  _CDr,
  {
    [_h]: ["POST", "/2020-05-31/distribution", 201],
  },
  () => CreateDistributionRequest,
  () => CreateDistributionResult
);
export var CreateDistributionTenant = op(
  n0,
  _CDT,
  {
    [_h]: ["POST", "/2020-05-31/distribution-tenant", 201],
  },
  () => CreateDistributionTenantRequest,
  () => CreateDistributionTenantResult
);
export var CreateDistributionWithTags = op(
  n0,
  _CDWT,
  {
    [_h]: ["POST", "/2020-05-31/distribution?WithTags", 201],
  },
  () => CreateDistributionWithTagsRequest,
  () => CreateDistributionWithTagsResult
);
export var GetDistribution = op(
  n0,
  _GD,
  {
    [_h]: ["GET", "/2020-05-31/distribution/{Id}", 200],
  },
  () => GetDistributionRequest,
  () => GetDistributionResult
);
export var GetDistributionConfig = op(
  n0,
  _GDC,
  {
    [_h]: ["GET", "/2020-05-31/distribution/{Id}/config", 200],
  },
  () => GetDistributionConfigRequest,
  () => GetDistributionConfigResult
);
export var GetDistributionTenant = op(
  n0,
  _GDT,
  {
    [_h]: ["GET", "/2020-05-31/distribution-tenant/{Identifier}", 200],
  },
  () => GetDistributionTenantRequest,
  () => GetDistributionTenantResult
);
export var GetDistributionTenantByDomain = op(
  n0,
  _GDTBD,
  {
    [_h]: ["GET", "/2020-05-31/distribution-tenant", 200],
  },
  () => GetDistributionTenantByDomainRequest,
  () => GetDistributionTenantByDomainResult
);
export var UpdateDistribution = op(
  n0,
  _UD,
  {
    [_h]: ["PUT", "/2020-05-31/distribution/{Id}/config", 200],
  },
  () => UpdateDistributionRequest,
  () => UpdateDistributionResult
);
export var UpdateDistributionTenant = op(
  n0,
  _UDT,
  {
    [_h]: ["PUT", "/2020-05-31/distribution-tenant/{Id}", 200],
  },
  () => UpdateDistributionTenantRequest,
  () => UpdateDistributionTenantResult
);
export var UpdateDistributionWithStagingConfig = op(
  n0,
  _UDWSC,
  {
    [_h]: ["PUT", "/2020-05-31/distribution/{Id}/promote-staging-config", 200],
  },
  () => UpdateDistributionWithStagingConfigRequest,
  () => UpdateDistributionWithStagingConfigResult
);

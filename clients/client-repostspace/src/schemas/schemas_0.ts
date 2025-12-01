const _ADE = "AccessDeniedException";
const _ADL = "AllowedDomainsList";
const _BACRTA = "BatchAddChannelRoleToAccessors";
const _BACRTAI = "BatchAddChannelRoleToAccessorsInput";
const _BACRTAO = "BatchAddChannelRoleToAccessorsOutput";
const _BAR = "BatchAddRole";
const _BARI = "BatchAddRoleInput";
const _BARO = "BatchAddRoleOutput";
const _BE = "BatchError";
const _BEL = "BatchErrorList";
const _BRCRFA = "BatchRemoveChannelRoleFromAccessors";
const _BRCRFAI = "BatchRemoveChannelRoleFromAccessorsInput";
const _BRCRFAO = "BatchRemoveChannelRoleFromAccessorsOutput";
const _BRR = "BatchRemoveRole";
const _BRRI = "BatchRemoveRoleInput";
const _BRRO = "BatchRemoveRoleOutput";
const _CC = "CreateChannel";
const _CCI = "CreateChannelInput";
const _CCO = "CreateChannelOutput";
const _CD = "ChannelDescription";
const _CDh = "ChannelData";
const _CE = "ConflictException";
const _CL = "ChannelsList";
const _CN = "ChannelName";
const _CR = "ChannelRoles";
const _CS = "CreateSpace";
const _CSI = "CreateSpaceInput";
const _CSO = "CreateSpaceOutput";
const _DA = "DeregisterAdmin";
const _DAI = "DeregisterAdminInput";
const _DS = "DeleteSpace";
const _DSI = "DeleteSpaceInput";
const _ED = "EmailDomain";
const _GC = "GetChannel";
const _GCI = "GetChannelInput";
const _GCO = "GetChannelOutput";
const _GS = "GetSpace";
const _GSI = "GetSpaceInput";
const _GSO = "GetSpaceOutput";
const _IB = "InviteBody";
const _ISE = "InternalServerException";
const _IT = "InviteTitle";
const _LC = "ListChannels";
const _LCI = "ListChannelsInput";
const _LCO = "ListChannelsOutput";
const _LS = "ListSpaces";
const _LSI = "ListSpacesInput";
const _LSO = "ListSpacesOutput";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _R = "Roles";
const _RA = "Retry-After";
const _RAI = "RegisterAdminInput";
const _RAe = "RegisterAdmin";
const _RNFE = "ResourceNotFoundException";
const _SD = "SpaceDescription";
const _SDp = "SpaceData";
const _SEDP = "SupportedEmailDomainsParameters";
const _SEDS = "SupportedEmailDomainsStatus";
const _SI = "SendInvites";
const _SII = "SendInvitesInput";
const _SL = "SpacesList";
const _SN = "SpaceName";
const _SQEE = "ServiceQuotaExceededException";
const _T = "Tags";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _UC = "UpdateChannel";
const _UCI = "UpdateChannelInput";
const _UCO = "UpdateChannelOutput";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _US = "UpdateSpace";
const _USI = "UpdateSpaceInput";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _a = "arn";
const _aA = "applicationArn";
const _aAI = "addedAccessorIds";
const _aD = "allowedDomains";
const _aI = "accessorIds";
const _aIc = "accessorId";
const _aId = "adminId";
const _b = "body";
const _c = "client";
const _cD = "channelDescription";
const _cDT = "createDateTime";
const _cI = "channelId";
const _cIl = "clientId";
const _cN = "channelName";
const _cR = "channelRole";
const _cRA = "customerRoleArn";
const _cRh = "channelRoles";
const _cS = "channelStatus";
const _cSo = "configurationStatus";
const _cSon = "contentSize";
const _ch = "channels";
const _d = "description";
const _dDT = "deleteDateTime";
const _e = "error";
const _en = "enabled";
const _er = "errors";
const _fL = "fieldList";
const _gA = "groupAdmins";
const _gC = "groupCount";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _iSI = "identityStoreId";
const _m = "message";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _qC = "quotaCode";
const _r = "role";
const _rA = "roleArn";
const _rAI = "removedAccessorIds";
const _rAS = "retryAfterSeconds";
const _rAe = "resourceArn";
const _rD = "randomDomain";
const _rI = "resourceId";
const _rT = "resourceType";
const _re = "reason";
const _ro = "roles";
const _s = "subdomain";
const _sC = "serviceCode";
const _sED = "supportedEmailDomains";
const _sI = "spaceId";
const _sL = "storageLimit";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.repostspace";
const _sp = "spaces";
const _st = "status";
const _t = "tier";
const _tK = "tagKeys";
const _ta = "tags";
const _ti = "title";
const _uA = "userAdmins";
const _uC = "userCount";
const _uKMSK = "userKMSKey";
const _vD = "vanityDomain";
const _vDS = "vanityDomainStatus";
const n0 = "com.amazonaws.repostspace";

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

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { RepostspaceServiceException as __RepostspaceServiceException } from "../models/RepostspaceServiceException";

/* eslint no-var: 0 */

export var ChannelDescription: StaticSimpleSchema = [0, n0, _CD, 8, 0];
export var ChannelName: StaticSimpleSchema = [0, n0, _CN, 8, 0];
export var EmailDomain: StaticSimpleSchema = [0, n0, _ED, 8, 0];
export var InviteBody: StaticSimpleSchema = [0, n0, _IB, 8, 0];
export var InviteTitle: StaticSimpleSchema = [0, n0, _IT, 8, 0];
export var SpaceDescription: StaticSimpleSchema = [0, n0, _SD, 8, 0];
export var SpaceName: StaticSimpleSchema = [0, n0, _SN, 8, 0];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var BatchAddChannelRoleToAccessorsInput: StaticStructureSchema = [
  3,
  n0,
  _BACRTAI,
  0,
  [_sI, _cI, _aI, _cR],
  [[0, 1], [0, 1], 64 | 0, 0],
];
export var BatchAddChannelRoleToAccessorsOutput: StaticStructureSchema = [
  3,
  n0,
  _BACRTAO,
  0,
  [_aAI, _er],
  [64 | 0, () => BatchErrorList],
];
export var BatchAddRoleInput: StaticStructureSchema = [3, n0, _BARI, 0, [_sI, _aI, _r], [[0, 1], 64 | 0, 0]];
export var BatchAddRoleOutput: StaticStructureSchema = [3, n0, _BARO, 0, [_aAI, _er], [64 | 0, () => BatchErrorList]];
export var BatchError: StaticStructureSchema = [3, n0, _BE, 0, [_aIc, _e, _m], [0, 1, 0]];
export var BatchRemoveChannelRoleFromAccessorsInput: StaticStructureSchema = [
  3,
  n0,
  _BRCRFAI,
  0,
  [_sI, _cI, _aI, _cR],
  [[0, 1], [0, 1], 64 | 0, 0],
];
export var BatchRemoveChannelRoleFromAccessorsOutput: StaticStructureSchema = [
  3,
  n0,
  _BRCRFAO,
  0,
  [_rAI, _er],
  [64 | 0, () => BatchErrorList],
];
export var BatchRemoveRoleInput: StaticStructureSchema = [3, n0, _BRRI, 0, [_sI, _aI, _r], [[0, 1], 64 | 0, 0]];
export var BatchRemoveRoleOutput: StaticStructureSchema = [
  3,
  n0,
  _BRRO,
  0,
  [_rAI, _er],
  [64 | 0, () => BatchErrorList],
];
export var ChannelData: StaticStructureSchema = [
  3,
  n0,
  _CDh,
  0,
  [_sI, _cI, _cN, _cD, _cDT, _dDT, _cS, _uC, _gC],
  [0, 0, [() => ChannelName, 0], [() => ChannelDescription, 0], 5, 5, 0, 1, 1],
];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CreateChannelInput: StaticStructureSchema = [
  3,
  n0,
  _CCI,
  0,
  [_sI, _cN, _cD],
  [
    [0, 1],
    [() => ChannelName, 0],
    [() => ChannelDescription, 0],
  ],
];
export var CreateChannelOutput: StaticStructureSchema = [3, n0, _CCO, 0, [_cI], [0]];
export var CreateSpaceInput: StaticStructureSchema = [
  3,
  n0,
  _CSI,
  0,
  [_n, _s, _t, _d, _uKMSK, _ta, _rA, _sED],
  [
    [() => SpaceName, 0],
    0,
    0,
    [() => SpaceDescription, 0],
    0,
    [() => Tags, 0],
    0,
    [() => SupportedEmailDomainsParameters, 0],
  ],
];
export var CreateSpaceOutput: StaticStructureSchema = [3, n0, _CSO, 0, [_sI], [0]];
export var DeleteSpaceInput: StaticStructureSchema = [3, n0, _DSI, 0, [_sI], [[0, 1]]];
export var DeregisterAdminInput: StaticStructureSchema = [
  3,
  n0,
  _DAI,
  0,
  [_sI, _aId],
  [
    [0, 1],
    [0, 1],
  ],
];
export var GetChannelInput: StaticStructureSchema = [
  3,
  n0,
  _GCI,
  0,
  [_sI, _cI],
  [
    [0, 1],
    [0, 1],
  ],
];
export var GetChannelOutput: StaticStructureSchema = [
  3,
  n0,
  _GCO,
  0,
  [_sI, _cI, _cN, _cD, _cDT, _dDT, _cRh, _cS],
  [0, 0, [() => ChannelName, 0], [() => ChannelDescription, 0], 5, 5, [2, n0, _CR, 0, 0, 64 | 0], 0],
];
export var GetSpaceInput: StaticStructureSchema = [3, n0, _GSI, 0, [_sI], [[0, 1]]];
export var GetSpaceOutput: StaticStructureSchema = [
  3,
  n0,
  _GSO,
  0,
  [
    _sI,
    _a,
    _n,
    _st,
    _cSo,
    _cIl,
    _iSI,
    _aA,
    _d,
    _vDS,
    _vD,
    _rD,
    _cRA,
    _cDT,
    _dDT,
    _t,
    _sL,
    _uA,
    _gA,
    _ro,
    _uKMSK,
    _uC,
    _cSon,
    _sED,
  ],
  [
    0,
    0,
    [() => SpaceName, 0],
    0,
    0,
    0,
    0,
    0,
    [() => SpaceDescription, 0],
    0,
    0,
    0,
    0,
    5,
    5,
    0,
    1,
    64 | 0,
    64 | 0,
    [2, n0, _R, 0, 0, 64 | 0],
    0,
    1,
    1,
    [() => SupportedEmailDomainsStatus, 0],
  ],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m, _rAS],
  [
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ListChannelsInput: StaticStructureSchema = [
  3,
  n0,
  _LCI,
  0,
  [_sI, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ],
];
export var ListChannelsOutput: StaticStructureSchema = [3, n0, _LCO, 0, [_ch, _nT], [[() => ChannelsList, 0], 0]];
export var ListSpacesInput: StaticStructureSchema = [
  3,
  n0,
  _LSI,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ],
];
export var ListSpacesOutput: StaticStructureSchema = [3, n0, _LSO, 0, [_sp, _nT], [[() => SpacesList, 0], 0]];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rAe], [[0, 1]]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_ta], [[() => Tags, 0]]];
export var RegisterAdminInput: StaticStructureSchema = [
  3,
  n0,
  _RAI,
  0,
  [_sI, _aId],
  [
    [0, 1],
    [0, 1],
  ],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var SendInvitesInput: StaticStructureSchema = [
  3,
  n0,
  _SII,
  0,
  [_sI, _aI, _ti, _b],
  [[0, 1], 64 | 0, [() => InviteTitle, 0], [() => InviteBody, 0]],
];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var SpaceData: StaticStructureSchema = [
  3,
  n0,
  _SDp,
  0,
  [_sI, _a, _n, _d, _st, _cSo, _vDS, _vD, _rD, _t, _sL, _cDT, _dDT, _uKMSK, _uC, _cSon, _sED],
  [
    0,
    0,
    [() => SpaceName, 0],
    [() => SpaceDescription, 0],
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    5,
    5,
    0,
    1,
    1,
    [() => SupportedEmailDomainsStatus, 0],
  ],
];
export var SupportedEmailDomainsParameters: StaticStructureSchema = [
  3,
  n0,
  _SEDP,
  0,
  [_en, _aD],
  [0, [() => AllowedDomainsList, 0]],
];
export var SupportedEmailDomainsStatus: StaticStructureSchema = [
  3,
  n0,
  _SEDS,
  0,
  [_en, _aD],
  [0, [() => AllowedDomainsList, 0]],
];
export var TagResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _TRR,
  0,
  [_rAe, _ta],
  [
    [0, 1],
    [() => Tags, 0],
  ],
];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _sC, _qC, _rAS],
  [
    0,
    0,
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UntagResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_rAe, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ],
];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateChannelInput: StaticStructureSchema = [
  3,
  n0,
  _UCI,
  0,
  [_sI, _cI, _cN, _cD],
  [
    [0, 1],
    [0, 1],
    [() => ChannelName, 0],
    [() => ChannelDescription, 0],
  ],
];
export var UpdateChannelOutput: StaticStructureSchema = [3, n0, _UCO, 0, [], []];
export var UpdateSpaceInput: StaticStructureSchema = [
  3,
  n0,
  _USI,
  0,
  [_sI, _d, _t, _rA, _sED],
  [[0, 1], [() => SpaceDescription, 0], 0, 0, [() => SupportedEmailDomainsParameters, 0]],
];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _re, _fL],
  [0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_n, _m], [0, 0]];
export var __Unit = "unit" as const;

export var RepostspaceServiceException: StaticErrorSchema = [-3, _sm, "RepostspaceServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(RepostspaceServiceException, __RepostspaceServiceException);

export var AccessorIdList = 64 | 0;

export var AllowedDomainsList: StaticListSchema = [1, n0, _ADL, 0, [() => EmailDomain, 0]];
export var BatchErrorList: StaticListSchema = [1, n0, _BEL, 0, () => BatchError];
export var ChannelRoleList = 64 | 0;

export var ChannelsList: StaticListSchema = [1, n0, _CL, 0, [() => ChannelData, 0]];
export var GroupAdmins = 64 | 0;

export var RoleList = 64 | 0;

export var SpacesList: StaticListSchema = [1, n0, _SL, 0, [() => SpaceData, 0]];
export var TagKeyList = 64 | 0;

export var UserAdmins = 64 | 0;

export var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField];
export var ChannelRoles: StaticMapSchema = [2, n0, _CR, 0, 0, 64 | 0];
export var Roles: StaticMapSchema = [2, n0, _R, 0, 0, 64 | 0];
export var Tags: StaticMapSchema = [2, n0, _T, 8, 0, 0];
export var BatchAddChannelRoleToAccessors: StaticOperationSchema = [
  9,
  n0,
  _BACRTA,
  {
    [_h]: ["POST", "/spaces/{spaceId}/channels/{channelId}/roles", 200],
  },
  () => BatchAddChannelRoleToAccessorsInput,
  () => BatchAddChannelRoleToAccessorsOutput,
];
export var BatchAddRole: StaticOperationSchema = [
  9,
  n0,
  _BAR,
  {
    [_h]: ["POST", "/spaces/{spaceId}/roles", 200],
  },
  () => BatchAddRoleInput,
  () => BatchAddRoleOutput,
];
export var BatchRemoveChannelRoleFromAccessors: StaticOperationSchema = [
  9,
  n0,
  _BRCRFA,
  {
    [_h]: ["PATCH", "/spaces/{spaceId}/channels/{channelId}/roles", 200],
  },
  () => BatchRemoveChannelRoleFromAccessorsInput,
  () => BatchRemoveChannelRoleFromAccessorsOutput,
];
export var BatchRemoveRole: StaticOperationSchema = [
  9,
  n0,
  _BRR,
  {
    [_h]: ["PATCH", "/spaces/{spaceId}/roles", 200],
  },
  () => BatchRemoveRoleInput,
  () => BatchRemoveRoleOutput,
];
export var CreateChannel: StaticOperationSchema = [
  9,
  n0,
  _CC,
  {
    [_h]: ["POST", "/spaces/{spaceId}/channels", 200],
  },
  () => CreateChannelInput,
  () => CreateChannelOutput,
];
export var CreateSpace: StaticOperationSchema = [
  9,
  n0,
  _CS,
  {
    [_h]: ["POST", "/spaces", 200],
  },
  () => CreateSpaceInput,
  () => CreateSpaceOutput,
];
export var DeleteSpace: StaticOperationSchema = [
  9,
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/spaces/{spaceId}", 200],
  },
  () => DeleteSpaceInput,
  () => __Unit,
];
export var DeregisterAdmin: StaticOperationSchema = [
  9,
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/spaces/{spaceId}/admins/{adminId}", 200],
  },
  () => DeregisterAdminInput,
  () => __Unit,
];
export var GetChannel: StaticOperationSchema = [
  9,
  n0,
  _GC,
  {
    [_h]: ["GET", "/spaces/{spaceId}/channels/{channelId}", 200],
  },
  () => GetChannelInput,
  () => GetChannelOutput,
];
export var GetSpace: StaticOperationSchema = [
  9,
  n0,
  _GS,
  {
    [_h]: ["GET", "/spaces/{spaceId}", 200],
  },
  () => GetSpaceInput,
  () => GetSpaceOutput,
];
export var ListChannels: StaticOperationSchema = [
  9,
  n0,
  _LC,
  {
    [_h]: ["GET", "/spaces/{spaceId}/channels", 200],
  },
  () => ListChannelsInput,
  () => ListChannelsOutput,
];
export var ListSpaces: StaticOperationSchema = [
  9,
  n0,
  _LS,
  {
    [_h]: ["GET", "/spaces", 200],
  },
  () => ListSpacesInput,
  () => ListSpacesOutput,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var RegisterAdmin: StaticOperationSchema = [
  9,
  n0,
  _RAe,
  {
    [_h]: ["POST", "/spaces/{spaceId}/admins/{adminId}", 200],
  },
  () => RegisterAdminInput,
  () => __Unit,
];
export var SendInvites: StaticOperationSchema = [
  9,
  n0,
  _SI,
  {
    [_h]: ["POST", "/spaces/{spaceId}/invite", 200],
  },
  () => SendInvitesInput,
  () => __Unit,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateChannel: StaticOperationSchema = [
  9,
  n0,
  _UC,
  {
    [_h]: ["PUT", "/spaces/{spaceId}/channels/{channelId}", 200],
  },
  () => UpdateChannelInput,
  () => UpdateChannelOutput,
];
export var UpdateSpace: StaticOperationSchema = [
  9,
  n0,
  _US,
  {
    [_h]: ["PUT", "/spaces/{spaceId}", 200],
  },
  () => UpdateSpaceInput,
  () => __Unit,
];

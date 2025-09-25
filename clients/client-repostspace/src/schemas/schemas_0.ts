export const _ADE = "AccessDeniedException";
export const _ADL = "AllowedDomainsList";
export const _BACRTA = "BatchAddChannelRoleToAccessors";
export const _BACRTAI = "BatchAddChannelRoleToAccessorsInput";
export const _BACRTAO = "BatchAddChannelRoleToAccessorsOutput";
export const _BAR = "BatchAddRole";
export const _BARI = "BatchAddRoleInput";
export const _BARO = "BatchAddRoleOutput";
export const _BE = "BatchError";
export const _BEL = "BatchErrorList";
export const _BRCRFA = "BatchRemoveChannelRoleFromAccessors";
export const _BRCRFAI = "BatchRemoveChannelRoleFromAccessorsInput";
export const _BRCRFAO = "BatchRemoveChannelRoleFromAccessorsOutput";
export const _BRR = "BatchRemoveRole";
export const _BRRI = "BatchRemoveRoleInput";
export const _BRRO = "BatchRemoveRoleOutput";
export const _CC = "CreateChannel";
export const _CCI = "CreateChannelInput";
export const _CCO = "CreateChannelOutput";
export const _CD = "ChannelDescription";
export const _CDh = "ChannelData";
export const _CE = "ConflictException";
export const _CL = "ChannelsList";
export const _CN = "ChannelName";
export const _CR = "ChannelRoles";
export const _CS = "CreateSpace";
export const _CSI = "CreateSpaceInput";
export const _CSO = "CreateSpaceOutput";
export const _DA = "DeregisterAdmin";
export const _DAI = "DeregisterAdminInput";
export const _DS = "DeleteSpace";
export const _DSI = "DeleteSpaceInput";
export const _ED = "EmailDomain";
export const _GC = "GetChannel";
export const _GCI = "GetChannelInput";
export const _GCO = "GetChannelOutput";
export const _GS = "GetSpace";
export const _GSI = "GetSpaceInput";
export const _GSO = "GetSpaceOutput";
export const _IB = "InviteBody";
export const _ISE = "InternalServerException";
export const _IT = "InviteTitle";
export const _LC = "ListChannels";
export const _LCI = "ListChannelsInput";
export const _LCO = "ListChannelsOutput";
export const _LS = "ListSpaces";
export const _LSI = "ListSpacesInput";
export const _LSO = "ListSpacesOutput";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _R = "Roles";
export const _RA = "Retry-After";
export const _RAI = "RegisterAdminInput";
export const _RAe = "RegisterAdmin";
export const _RNFE = "ResourceNotFoundException";
export const _SD = "SpaceDescription";
export const _SDp = "SpaceData";
export const _SEDP = "SupportedEmailDomainsParameters";
export const _SEDS = "SupportedEmailDomainsStatus";
export const _SI = "SendInvites";
export const _SII = "SendInvitesInput";
export const _SL = "SpacesList";
export const _SN = "SpaceName";
export const _SQEE = "ServiceQuotaExceededException";
export const _T = "Tags";
export const _TE = "ThrottlingException";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _UC = "UpdateChannel";
export const _UCI = "UpdateChannelInput";
export const _UCO = "UpdateChannelOutput";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _US = "UpdateSpace";
export const _USI = "UpdateSpaceInput";
export const _VE = "ValidationException";
export const _VEF = "ValidationExceptionField";
export const _VEFL = "ValidationExceptionFieldList";
export const _a = "arn";
export const _aA = "applicationArn";
export const _aAI = "addedAccessorIds";
export const _aD = "allowedDomains";
export const _aI = "accessorIds";
export const _aIc = "accessorId";
export const _aId = "adminId";
export const _b = "body";
export const _c = "client";
export const _cD = "channelDescription";
export const _cDT = "createDateTime";
export const _cI = "channelId";
export const _cIl = "clientId";
export const _cN = "channelName";
export const _cR = "channelRole";
export const _cRA = "customerRoleArn";
export const _cRh = "channelRoles";
export const _cS = "channelStatus";
export const _cSo = "configurationStatus";
export const _cSon = "contentSize";
export const _ch = "channels";
export const _d = "description";
export const _dDT = "deleteDateTime";
export const _e = "error";
export const _en = "enabled";
export const _er = "errors";
export const _fL = "fieldList";
export const _gA = "groupAdmins";
export const _gC = "groupCount";
export const _h = "http";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _hQ = "httpQuery";
export const _iSI = "identityStoreId";
export const _m = "message";
export const _mR = "maxResults";
export const _n = "name";
export const _nT = "nextToken";
export const _qC = "quotaCode";
export const _r = "role";
export const _rA = "roleArn";
export const _rAI = "removedAccessorIds";
export const _rAS = "retryAfterSeconds";
export const _rAe = "resourceArn";
export const _rD = "randomDomain";
export const _rI = "resourceId";
export const _rT = "resourceType";
export const _re = "reason";
export const _ro = "roles";
export const _s = "subdomain";
export const _sC = "serviceCode";
export const _sED = "supportedEmailDomains";
export const _sI = "spaceId";
export const _sL = "storageLimit";
export const _se = "server";
export const _sp = "spaces";
export const _st = "status";
export const _t = "tier";
export const _tK = "tagKeys";
export const _ta = "tags";
export const _ti = "title";
export const _uA = "userAdmins";
export const _uC = "userCount";
export const _uKMSK = "userKMSKey";
export const _vD = "vanityDomain";
export const _vDS = "vanityDomainStatus";
export const n0 = "com.amazonaws.repostspace";

// smithy-typescript generated code
import { error, list, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import { RepostspaceServiceException as __RepostspaceServiceException } from "../models/RepostspaceServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var InternalServerException = error(
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

  __InternalServerException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var ThrottlingException = error(
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

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _re, _fL],
  [0, 0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_n, _m], [0, 0]);
export var Unit = "unit" as const;

export var RepostspaceServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.repostspace",
  "RepostspaceServiceException",
  0,
  [],
  [],
  __RepostspaceServiceException
);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);

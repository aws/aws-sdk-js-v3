export const _A = "Arn";
export const _ADE = "AccessDeniedException";
export const _AP = "AssociateProfile";
export const _APR = "AssociateProfileRequest";
export const _APRs = "AssociateProfileResponse";
export const _ARTP = "AssociateResourceToProfile";
export const _ARTPR = "AssociateResourceToProfileRequest";
export const _ARTPRs = "AssociateResourceToProfileResponse";
export const _CE = "ConflictException";
export const _CP = "CreateProfile";
export const _CPR = "CreateProfileRequest";
export const _CPRr = "CreateProfileResponse";
export const _CT = "ClientToken";
export const _CTr = "CreationTime";
export const _DP = "DeleteProfile";
export const _DPR = "DeleteProfileRequest";
export const _DPRe = "DeleteProfileResponse";
export const _DPRi = "DisassociateProfileRequest";
export const _DPRis = "DisassociateProfileResponse";
export const _DPi = "DisassociateProfile";
export const _DRFP = "DisassociateResourceFromProfile";
export const _DRFPR = "DisassociateResourceFromProfileRequest";
export const _DRFPRi = "DisassociateResourceFromProfileResponse";
export const _FN = "FieldName";
export const _GP = "GetProfile";
export const _GPA = "GetProfileAssociation";
export const _GPAR = "GetProfileAssociationRequest";
export const _GPARe = "GetProfileAssociationResponse";
export const _GPR = "GetProfileRequest";
export const _GPRA = "GetProfileResourceAssociation";
export const _GPRAR = "GetProfileResourceAssociationRequest";
export const _GPRARe = "GetProfileResourceAssociationResponse";
export const _GPRe = "GetProfileResponse";
export const _I = "Id";
export const _INTE = "InvalidNextTokenException";
export const _IPE = "InvalidParameterException";
export const _ISEE = "InternalServiceErrorException";
export const _K = "Key";
export const _LEE = "LimitExceededException";
export const _LP = "ListProfiles";
export const _LPA = "ListProfileAssociations";
export const _LPAR = "ListProfileAssociationsRequest";
export const _LPARi = "ListProfileAssociationsResponse";
export const _LPR = "ListProfilesRequest";
export const _LPRA = "ListProfileResourceAssociations";
export const _LPRAR = "ListProfileResourceAssociationsRequest";
export const _LPRARi = "ListProfileResourceAssociationsResponse";
export const _LPRi = "ListProfilesResponse";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _M = "Message";
export const _MR = "MaxResults";
export const _MT = "ModificationTime";
export const _N = "Name";
export const _NT = "NextToken";
export const _OI = "OwnerId";
export const _P = "Profile";
export const _PA = "ProfileAssociation";
export const _PAI = "ProfileAssociationId";
export const _PAr = "ProfileAssociations";
export const _PI = "ProfileId";
export const _PRA = "ProfileResourceAssociation";
export const _PRAI = "ProfileResourceAssociationId";
export const _PRAr = "ProfileResourceAssociations";
export const _PS = "ProfileSummaries";
export const _PSL = "ProfileSummaryList";
export const _PSr = "ProfileSummary";
export const _RA = "ResourceArn";
export const _REE = "ResourceExistsException";
export const _RI = "ResourceId";
export const _RNFE = "ResourceNotFoundException";
export const _RP = "ResourceProperties";
export const _RT = "ResourceType";
export const _S = "Status";
export const _SM = "StatusMessage";
export const _SS = "ShareStatus";
export const _T = "Tags";
export const _TE = "ThrottlingException";
export const _TK = "TagKeys";
export const _TL = "TagList";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _Ta = "Tag";
export const _UPRA = "UpdateProfileResourceAssociation";
export const _UPRAR = "UpdateProfileResourceAssociationRequest";
export const _UPRARp = "UpdateProfileResourceAssociationResponse";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _V = "Value";
export const _VE = "ValidationException";
export const _c = "client";
export const _e = "error";
export const _h = "http";
export const _hQ = "httpQuery";
export const _mR = "maxResults";
export const _nT = "nextToken";
export const _pI = "profileId";
export const _rI = "resourceId";
export const _rT = "resourceType";
export const _tK = "tagKeys";
export const n0 = "com.amazonaws.route53profiles";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import { Route53ProfilesServiceException as __Route53ProfilesServiceException } from "../models/Route53ProfilesServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
  },
  [_M, _RT],
  [0, 0],

  __ResourceNotFoundException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ValidationException
);
export var Unit = "unit" as const;

export var Route53ProfilesServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.route53profiles",
  "Route53ProfilesServiceException",
  0,
  [],
  [],
  __Route53ProfilesServiceException
);

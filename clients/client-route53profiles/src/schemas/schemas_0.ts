const _A = "Arn";
const _ADE = "AccessDeniedException";
const _AP = "AssociateProfile";
const _APR = "AssociateProfileRequest";
const _APRs = "AssociateProfileResponse";
const _ARTP = "AssociateResourceToProfile";
const _ARTPR = "AssociateResourceToProfileRequest";
const _ARTPRs = "AssociateResourceToProfileResponse";
const _CE = "ConflictException";
const _CP = "CreateProfile";
const _CPR = "CreateProfileRequest";
const _CPRr = "CreateProfileResponse";
const _CT = "ClientToken";
const _CTr = "CreationTime";
const _DP = "DeleteProfile";
const _DPR = "DeleteProfileRequest";
const _DPRe = "DeleteProfileResponse";
const _DPRi = "DisassociateProfileRequest";
const _DPRis = "DisassociateProfileResponse";
const _DPi = "DisassociateProfile";
const _DRFP = "DisassociateResourceFromProfile";
const _DRFPR = "DisassociateResourceFromProfileRequest";
const _DRFPRi = "DisassociateResourceFromProfileResponse";
const _FN = "FieldName";
const _GP = "GetProfile";
const _GPA = "GetProfileAssociation";
const _GPAR = "GetProfileAssociationRequest";
const _GPARe = "GetProfileAssociationResponse";
const _GPR = "GetProfileRequest";
const _GPRA = "GetProfileResourceAssociation";
const _GPRAR = "GetProfileResourceAssociationRequest";
const _GPRARe = "GetProfileResourceAssociationResponse";
const _GPRe = "GetProfileResponse";
const _I = "Id";
const _INTE = "InvalidNextTokenException";
const _IPE = "InvalidParameterException";
const _ISEE = "InternalServiceErrorException";
const _K = "Key";
const _LEE = "LimitExceededException";
const _LP = "ListProfiles";
const _LPA = "ListProfileAssociations";
const _LPAR = "ListProfileAssociationsRequest";
const _LPARi = "ListProfileAssociationsResponse";
const _LPR = "ListProfilesRequest";
const _LPRA = "ListProfileResourceAssociations";
const _LPRAR = "ListProfileResourceAssociationsRequest";
const _LPRARi = "ListProfileResourceAssociationsResponse";
const _LPRi = "ListProfilesResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _M = "Message";
const _MR = "MaxResults";
const _MT = "ModificationTime";
const _N = "Name";
const _NT = "NextToken";
const _OI = "OwnerId";
const _P = "Profile";
const _PA = "ProfileAssociation";
const _PAI = "ProfileAssociationId";
const _PAr = "ProfileAssociations";
const _PI = "ProfileId";
const _PRA = "ProfileResourceAssociation";
const _PRAI = "ProfileResourceAssociationId";
const _PRAr = "ProfileResourceAssociations";
const _PS = "ProfileSummaries";
const _PSL = "ProfileSummaryList";
const _PSr = "ProfileSummary";
const _RA = "ResourceArn";
const _REE = "ResourceExistsException";
const _RI = "ResourceId";
const _RNFE = "ResourceNotFoundException";
const _RP = "ResourceProperties";
const _RT = "ResourceType";
const _S = "Status";
const _SM = "StatusMessage";
const _SS = "ShareStatus";
const _T = "Tags";
const _TE = "ThrottlingException";
const _TK = "TagKeys";
const _TL = "TagList";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _Ta = "Tag";
const _UPRA = "UpdateProfileResourceAssociation";
const _UPRAR = "UpdateProfileResourceAssociationRequest";
const _UPRARp = "UpdateProfileResourceAssociationResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _V = "Value";
const _VE = "ValidationException";
const _c = "client";
const _e = "error";
const _h = "http";
const _hQ = "httpQuery";
const _mR = "maxResults";
const _nT = "nextToken";
const _pI = "profileId";
const _rI = "resourceId";
const _rT = "resourceType";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.route53profiles";
const _tK = "tagKeys";
const n0 = "com.amazonaws.route53profiles";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  ConflictException,
  InternalServiceErrorException,
  InvalidNextTokenException,
  InvalidParameterException,
  LimitExceededException,
  ResourceExistsException,
  ResourceNotFoundException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { Route53ProfilesServiceException } from "../models/Route53ProfilesServiceException";

/* eslint no-var: 0 */
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var AssociateProfileRequest$: StaticStructureSchema = [3, n0, _APR,
  0,
  [_PI, _RI, _N, _T],
  [0, 0, 0, () => TagList]
];
export var AssociateProfileResponse$: StaticStructureSchema = [3, n0, _APRs,
  0,
  [_PA],
  [() => ProfileAssociation$]
];
export var AssociateResourceToProfileRequest$: StaticStructureSchema = [3, n0, _ARTPR,
  0,
  [_PI, _RA, _N, _RP],
  [0, 0, 0, 0]
];
export var AssociateResourceToProfileResponse$: StaticStructureSchema = [3, n0, _ARTPRs,
  0,
  [_PRA],
  [() => ProfileResourceAssociation$]
];
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var CreateProfileRequest$: StaticStructureSchema = [3, n0, _CPR,
  0,
  [_N, _CT, _T],
  [0, [0, 4], () => TagList]
];
export var CreateProfileResponse$: StaticStructureSchema = [3, n0, _CPRr,
  0,
  [_P],
  [() => Profile$]
];
export var DeleteProfileRequest$: StaticStructureSchema = [3, n0, _DPR,
  0,
  [_PI],
  [[0, 1]]
];
export var DeleteProfileResponse$: StaticStructureSchema = [3, n0, _DPRe,
  0,
  [_P],
  [() => Profile$]
];
export var DisassociateProfileRequest$: StaticStructureSchema = [3, n0, _DPRi,
  0,
  [_PI, _RI],
  [[0, 1], [0, 1]]
];
export var DisassociateProfileResponse$: StaticStructureSchema = [3, n0, _DPRis,
  0,
  [_PA],
  [() => ProfileAssociation$]
];
export var DisassociateResourceFromProfileRequest$: StaticStructureSchema = [3, n0, _DRFPR,
  0,
  [_PI, _RA],
  [[0, 1], [0, 1]]
];
export var DisassociateResourceFromProfileResponse$: StaticStructureSchema = [3, n0, _DRFPRi,
  0,
  [_PRA],
  [() => ProfileResourceAssociation$]
];
export var GetProfileAssociationRequest$: StaticStructureSchema = [3, n0, _GPAR,
  0,
  [_PAI],
  [[0, 1]]
];
export var GetProfileAssociationResponse$: StaticStructureSchema = [3, n0, _GPARe,
  0,
  [_PA],
  [() => ProfileAssociation$]
];
export var GetProfileRequest$: StaticStructureSchema = [3, n0, _GPR,
  0,
  [_PI],
  [[0, 1]]
];
export var GetProfileResourceAssociationRequest$: StaticStructureSchema = [3, n0, _GPRAR,
  0,
  [_PRAI],
  [[0, 1]]
];
export var GetProfileResourceAssociationResponse$: StaticStructureSchema = [3, n0, _GPRARe,
  0,
  [_PRA],
  [() => ProfileResourceAssociation$]
];
export var GetProfileResponse$: StaticStructureSchema = [3, n0, _GPRe,
  0,
  [_P],
  [() => Profile$]
];
export var InternalServiceErrorException$: StaticErrorSchema = [-3, n0, _ISEE,
  { [_e]: _c },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(InternalServiceErrorException$, InternalServiceErrorException);
export var InvalidNextTokenException$: StaticErrorSchema = [-3, n0, _INTE,
  { [_e]: _c },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(InvalidNextTokenException$, InvalidNextTokenException);
export var InvalidParameterException$: StaticErrorSchema = [-3, n0, _IPE,
  { [_e]: _c },
  [_M, _FN],
  [0, 0]
];
TypeRegistry.for(n0).registerError(InvalidParameterException$, InvalidParameterException);
export var LimitExceededException$: StaticErrorSchema = [-3, n0, _LEE,
  { [_e]: _c },
  [_M, _RT],
  [0, 0]
];
TypeRegistry.for(n0).registerError(LimitExceededException$, LimitExceededException);
export var ListProfileAssociationsRequest$: StaticStructureSchema = [3, n0, _LPAR,
  0,
  [_RI, _PI, _MR, _NT],
  [[0, { [_hQ]: _rI }], [0, { [_hQ]: _pI }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }]]
];
export var ListProfileAssociationsResponse$: StaticStructureSchema = [3, n0, _LPARi,
  0,
  [_PAr, _NT],
  [() => ProfileAssociations, 0]
];
export var ListProfileResourceAssociationsRequest$: StaticStructureSchema = [3, n0, _LPRAR,
  0,
  [_PI, _RT, _MR, _NT],
  [[0, 1], [0, { [_hQ]: _rT }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }]]
];
export var ListProfileResourceAssociationsResponse$: StaticStructureSchema = [3, n0, _LPRARi,
  0,
  [_PRAr, _NT],
  [() => ProfileResourceAssociations, 0]
];
export var ListProfilesRequest$: StaticStructureSchema = [3, n0, _LPR,
  0,
  [_MR, _NT],
  [[1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }]]
];
export var ListProfilesResponse$: StaticStructureSchema = [3, n0, _LPRi,
  0,
  [_PS, _NT],
  [() => ProfileSummaryList, 0]
];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR,
  0,
  [_RA],
  [[0, 1]]
];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi,
  0,
  [_T],
  [128 | 0]
];
export var Profile$: StaticStructureSchema = [3, n0, _P,
  0,
  [_I, _A, _N, _OI, _S, _SM, _SS, _CTr, _MT, _CT],
  [0, 0, 0, 0, 0, 0, 0, 4, 4, 0]
];
export var ProfileAssociation$: StaticStructureSchema = [3, n0, _PA,
  0,
  [_I, _N, _OI, _PI, _RI, _S, _SM, _CTr, _MT],
  [0, 0, 0, 0, 0, 0, 0, 4, 4]
];
export var ProfileResourceAssociation$: StaticStructureSchema = [3, n0, _PRA,
  0,
  [_I, _N, _OI, _PI, _RA, _RT, _RP, _S, _SM, _CTr, _MT],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4]
];
export var ProfileSummary$: StaticStructureSchema = [3, n0, _PSr,
  0,
  [_I, _A, _N, _SS],
  [0, 0, 0, 0]
];
export var ResourceExistsException$: StaticErrorSchema = [-3, n0, _REE,
  { [_e]: _c },
  [_M, _RT],
  [0, 0]
];
TypeRegistry.for(n0).registerError(ResourceExistsException$, ResourceExistsException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c },
  [_M, _RT],
  [0, 0]
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var Tag$: StaticStructureSchema = [3, n0, _Ta,
  0,
  [_K, _V],
  [0, 0]
];
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR,
  0,
  [_RA, _T],
  [[0, 1], 128 | 0]
];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa,
  0,
  [],
  []
];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var UntagResourceRequest$: StaticStructureSchema = [3, n0, _URR,
  0,
  [_RA, _TK],
  [[0, 1], [64 | 0, { [_hQ]: _tK }]]
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn,
  0,
  [],
  []
];
export var UpdateProfileResourceAssociationRequest$: StaticStructureSchema = [3, n0, _UPRAR,
  0,
  [_PRAI, _N, _RP],
  [[0, 1], 0, 0]
];
export var UpdateProfileResourceAssociationResponse$: StaticStructureSchema = [3, n0, _UPRARp,
  0,
  [_PRA],
  [() => ProfileResourceAssociation$]
];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var Route53ProfilesServiceException$: StaticErrorSchema = [-3, _s, "Route53ProfilesServiceException", 0, [], []];
TypeRegistry.for(_s).registerError(Route53ProfilesServiceException$, Route53ProfilesServiceException);
var ProfileAssociations: StaticListSchema = [1, n0, _PAr,
  0, () => ProfileAssociation$
];
var ProfileResourceAssociations: StaticListSchema = [1, n0, _PRAr,
  0, () => ProfileResourceAssociation$
];
var ProfileSummaryList: StaticListSchema = [1, n0, _PSL,
  0, () => ProfileSummary$
];
var TagKeyList = 64 | 0;
var TagList: StaticListSchema = [1, n0, _TL,
  0, () => Tag$
];
var TagMap = 128 | 0;
export var AssociateProfile$: StaticOperationSchema = [9, n0, _AP,
  { [_h]: ["POST", "/profileassociation", 200] }, () => AssociateProfileRequest$, () => AssociateProfileResponse$
];
export var AssociateResourceToProfile$: StaticOperationSchema = [9, n0, _ARTP,
  { [_h]: ["POST", "/profileresourceassociation", 200] }, () => AssociateResourceToProfileRequest$, () => AssociateResourceToProfileResponse$
];
export var CreateProfile$: StaticOperationSchema = [9, n0, _CP,
  { [_h]: ["POST", "/profile", 200] }, () => CreateProfileRequest$, () => CreateProfileResponse$
];
export var DeleteProfile$: StaticOperationSchema = [9, n0, _DP,
  { [_h]: ["DELETE", "/profile/{ProfileId}", 200] }, () => DeleteProfileRequest$, () => DeleteProfileResponse$
];
export var DisassociateProfile$: StaticOperationSchema = [9, n0, _DPi,
  { [_h]: ["DELETE", "/profileassociation/Profileid/{ProfileId}/resourceid/{ResourceId}", 200] }, () => DisassociateProfileRequest$, () => DisassociateProfileResponse$
];
export var DisassociateResourceFromProfile$: StaticOperationSchema = [9, n0, _DRFP,
  { [_h]: ["DELETE", "/profileresourceassociation/profileid/{ProfileId}/resourcearn/{ResourceArn}", 200] }, () => DisassociateResourceFromProfileRequest$, () => DisassociateResourceFromProfileResponse$
];
export var GetProfile$: StaticOperationSchema = [9, n0, _GP,
  { [_h]: ["GET", "/profile/{ProfileId}", 200] }, () => GetProfileRequest$, () => GetProfileResponse$
];
export var GetProfileAssociation$: StaticOperationSchema = [9, n0, _GPA,
  { [_h]: ["GET", "/profileassociation/{ProfileAssociationId}", 200] }, () => GetProfileAssociationRequest$, () => GetProfileAssociationResponse$
];
export var GetProfileResourceAssociation$: StaticOperationSchema = [9, n0, _GPRA,
  { [_h]: ["GET", "/profileresourceassociation/{ProfileResourceAssociationId}", 200] }, () => GetProfileResourceAssociationRequest$, () => GetProfileResourceAssociationResponse$
];
export var ListProfileAssociations$: StaticOperationSchema = [9, n0, _LPA,
  { [_h]: ["GET", "/profileassociations", 200] }, () => ListProfileAssociationsRequest$, () => ListProfileAssociationsResponse$
];
export var ListProfileResourceAssociations$: StaticOperationSchema = [9, n0, _LPRA,
  { [_h]: ["GET", "/profileresourceassociations/profileid/{ProfileId}", 200] }, () => ListProfileResourceAssociationsRequest$, () => ListProfileResourceAssociationsResponse$
];
export var ListProfiles$: StaticOperationSchema = [9, n0, _LP,
  { [_h]: ["GET", "/profiles", 200] }, () => ListProfilesRequest$, () => ListProfilesResponse$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  { [_h]: ["GET", "/tags/{ResourceArn}", 200] }, () => ListTagsForResourceRequest$, () => ListTagsForResourceResponse$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  { [_h]: ["POST", "/tags/{ResourceArn}", 204] }, () => TagResourceRequest$, () => TagResourceResponse$
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  { [_h]: ["DELETE", "/tags/{ResourceArn}", 204] }, () => UntagResourceRequest$, () => UntagResourceResponse$
];
export var UpdateProfileResourceAssociation$: StaticOperationSchema = [9, n0, _UPRA,
  { [_h]: ["PATCH", "/profileresourceassociation/{ProfileResourceAssociationId}", 200] }, () => UpdateProfileResourceAssociationRequest$, () => UpdateProfileResourceAssociationResponse$
];

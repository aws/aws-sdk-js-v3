// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InternalServiceErrorException as __InternalServiceErrorException,
  InvalidNextTokenException as __InvalidNextTokenException,
  InvalidParameterException as __InvalidParameterException,
  LimitExceededException as __LimitExceededException,
  ResourceExistsException as __ResourceExistsException,
} from "../models/index";
import {
  _A,
  _AP,
  _APR,
  _APRs,
  _ARTP,
  _ARTPR,
  _ARTPRs,
  _c,
  _CP,
  _CPR,
  _CPRr,
  _CT,
  _CTr,
  _DPi,
  _DPRi,
  _DPRis,
  _DRFP,
  _DRFPR,
  _DRFPRi,
  _e,
  _FN,
  _GPRA,
  _GPRAR,
  _GPRARe,
  _h,
  _hQ,
  _I,
  _INTE,
  _IPE,
  _ISEE,
  _K,
  _LEE,
  _LP,
  _LPA,
  _LPAR,
  _LPARi,
  _LPR,
  _LPRA,
  _LPRAR,
  _LPRARi,
  _LPRi,
  _M,
  _MR,
  _mR,
  _MT,
  _N,
  _NT,
  _nT,
  _OI,
  _P,
  _PA,
  _PAr,
  _PI,
  _pI,
  _PRA,
  _PRAI,
  _PRAr,
  _PS,
  _PSL,
  _PSr,
  _RA,
  _REE,
  _RI,
  _rI,
  _RP,
  _RT,
  _rT,
  _S,
  _SM,
  _SS,
  _T,
  _Ta,
  _TL,
  _UPRA,
  _UPRAR,
  _UPRARp,
  _V,
  n0,
} from "./schemas_0";
import { Profile } from "./schemas_4_Profile";
import { ProfileAssociation } from "./schemas_5_Profile";

/* eslint no-var: 0 */

export var AssociateProfileRequest = struct(n0, _APR, 0, [_PI, _RI, _N, _T], [0, 0, 0, () => TagList]);
export var AssociateProfileResponse = struct(n0, _APRs, 0, [_PA], [() => ProfileAssociation]);
export var AssociateResourceToProfileRequest = struct(n0, _ARTPR, 0, [_PI, _RA, _N, _RP], [0, 0, 0, 0]);
export var AssociateResourceToProfileResponse = struct(n0, _ARTPRs, 0, [_PRA], [() => ProfileResourceAssociation]);
export var CreateProfileRequest = struct(n0, _CPR, 0, [_N, _CT, _T], [0, [0, 4], () => TagList]);
export var CreateProfileResponse = struct(n0, _CPRr, 0, [_P], [() => Profile]);
export var DisassociateProfileRequest = struct(
  n0,
  _DPRi,
  0,
  [_PI, _RI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateProfileResponse = struct(n0, _DPRis, 0, [_PA], [() => ProfileAssociation]);
export var DisassociateResourceFromProfileRequest = struct(
  n0,
  _DRFPR,
  0,
  [_PI, _RA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateResourceFromProfileResponse = struct(n0, _DRFPRi, 0, [_PRA], [() => ProfileResourceAssociation]);
export var GetProfileResourceAssociationRequest = struct(n0, _GPRAR, 0, [_PRAI], [[0, 1]]);
export var GetProfileResourceAssociationResponse = struct(n0, _GPRARe, 0, [_PRA], [() => ProfileResourceAssociation]);
export var InternalServiceErrorException = error(
  n0,
  _ISEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InternalServiceErrorException
);
export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidNextTokenException
);
export var InvalidParameterException = error(
  n0,
  _IPE,
  {
    [_e]: _c,
  },
  [_M, _FN],
  [0, 0],

  __InvalidParameterException
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_M, _RT],
  [0, 0],

  __LimitExceededException
);
export var ListProfileAssociationsRequest = struct(
  n0,
  _LPAR,
  0,
  [_RI, _PI, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _rI,
      },
    ],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListProfileAssociationsResponse = struct(n0, _LPARi, 0, [_PAr, _NT], [() => ProfileAssociations, 0]);
export var ListProfileResourceAssociationsRequest = struct(
  n0,
  _LPRAR,
  0,
  [_PI, _RT, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListProfileResourceAssociationsResponse = struct(
  n0,
  _LPRARi,
  0,
  [_PRAr, _NT],
  [() => ProfileResourceAssociations, 0]
);
export var ListProfilesRequest = struct(
  n0,
  _LPR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListProfilesResponse = struct(n0, _LPRi, 0, [_PS, _NT], [() => ProfileSummaryList, 0]);
export var ProfileResourceAssociation = struct(
  n0,
  _PRA,
  0,
  [_I, _N, _OI, _PI, _RA, _RT, _RP, _S, _SM, _CTr, _MT],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4]
);
export var ProfileSummary = struct(n0, _PSr, 0, [_I, _A, _N, _SS], [0, 0, 0, 0]);
export var ResourceExistsException = error(
  n0,
  _REE,
  {
    [_e]: _c,
  },
  [_M, _RT],
  [0, 0],

  __ResourceExistsException
);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var UpdateProfileResourceAssociationRequest = struct(n0, _UPRAR, 0, [_PRAI, _N, _RP], [[0, 1], 0, 0]);
export var UpdateProfileResourceAssociationResponse = struct(
  n0,
  _UPRARp,
  0,
  [_PRA],
  [() => ProfileResourceAssociation]
);
export var ProfileAssociations = list(n0, _PAr, 0, () => ProfileAssociation);
export var ProfileResourceAssociations = list(n0, _PRAr, 0, () => ProfileResourceAssociation);
export var ProfileSummaryList = list(n0, _PSL, 0, () => ProfileSummary);
export var TagList = list(n0, _TL, 0, () => Tag);
export var AssociateProfile = op(
  n0,
  _AP,
  {
    [_h]: ["POST", "/profileassociation", 200],
  },
  () => AssociateProfileRequest,
  () => AssociateProfileResponse
);
export var AssociateResourceToProfile = op(
  n0,
  _ARTP,
  {
    [_h]: ["POST", "/profileresourceassociation", 200],
  },
  () => AssociateResourceToProfileRequest,
  () => AssociateResourceToProfileResponse
);
export var CreateProfile = op(
  n0,
  _CP,
  {
    [_h]: ["POST", "/profile", 200],
  },
  () => CreateProfileRequest,
  () => CreateProfileResponse
);
export var DisassociateProfile = op(
  n0,
  _DPi,
  {
    [_h]: ["DELETE", "/profileassociation/Profileid/{ProfileId}/resourceid/{ResourceId}", 200],
  },
  () => DisassociateProfileRequest,
  () => DisassociateProfileResponse
);
export var DisassociateResourceFromProfile = op(
  n0,
  _DRFP,
  {
    [_h]: ["DELETE", "/profileresourceassociation/profileid/{ProfileId}/resourcearn/{ResourceArn}", 200],
  },
  () => DisassociateResourceFromProfileRequest,
  () => DisassociateResourceFromProfileResponse
);
export var GetProfileResourceAssociation = op(
  n0,
  _GPRA,
  {
    [_h]: ["GET", "/profileresourceassociation/{ProfileResourceAssociationId}", 200],
  },
  () => GetProfileResourceAssociationRequest,
  () => GetProfileResourceAssociationResponse
);
export var ListProfileAssociations = op(
  n0,
  _LPA,
  {
    [_h]: ["GET", "/profileassociations", 200],
  },
  () => ListProfileAssociationsRequest,
  () => ListProfileAssociationsResponse
);
export var ListProfileResourceAssociations = op(
  n0,
  _LPRA,
  {
    [_h]: ["GET", "/profileresourceassociations/profileid/{ProfileId}", 200],
  },
  () => ListProfileResourceAssociationsRequest,
  () => ListProfileResourceAssociationsResponse
);
export var ListProfiles = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/profiles", 200],
  },
  () => ListProfilesRequest,
  () => ListProfilesResponse
);
export var UpdateProfileResourceAssociation = op(
  n0,
  _UPRA,
  {
    [_h]: ["PATCH", "/profileresourceassociation/{ProfileResourceAssociationId}", 200],
  },
  () => UpdateProfileResourceAssociationRequest,
  () => UpdateProfileResourceAssociationResponse
);

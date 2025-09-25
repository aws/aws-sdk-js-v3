// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ADUGF,
  _aDUGF,
  _AEO,
  _AEOI,
  _AEOO,
  _APG,
  _APGI,
  _APGO,
  _aTPMP,
  _ATPMPPGD,
  _AUGF,
  _aUGF,
  _cA,
  _cAT,
  _CATPGD,
  _cB,
  _cDU,
  _CDUPGD,
  _cEFB,
  _cEP,
  _CEPPGD,
  _cEr,
  _cFT,
  _CFTPGD,
  _cG,
  _CGPGD,
  _cPFPP,
  _CPFPPPGD,
  _CPPGD,
  _cPr,
  _cT,
  _CUP,
  _CUPI,
  _CUPO,
  _d,
  _dCEP,
  _det,
  _dI,
  _dIo,
  _dU,
  _dUD,
  _dUF,
  _DUFFP,
  _DUGF,
  _dUGF,
  _dUI,
  _dUIo,
  _DUPGP,
  _eI,
  _eT,
  _g,
  _gI,
  _gIr,
  _gIra,
  _gL,
  _GPGP,
  _GUP,
  _GUPI,
  _GUPO,
  _hQ,
  _ht,
  _iCDU,
  _id,
  _LPG,
  _LPGI,
  _LPGO,
  _mRa,
  _nT,
  _o,
  _oDUO,
  _ODUOPGD,
  _OGP,
  _OP,
  _oPO,
  _OPOPGD,
  _OUP,
  _p,
  _pD,
  _PGD,
  _PGF,
  _pGF,
  _PGL,
  _PGM,
  _PGP,
  _pIr,
  _PPGP,
  _pPr,
  _proj,
  _pTo,
  _REO,
  _REOI,
  _REOO,
  _RPG,
  _RPGI,
  _RPGO,
  _s,
  _ty,
  _U,
  _uAT,
  _UATPGD,
  _uI,
  _UPGP,
  _use,
  _uT,
  _UUP,
  _UUPI,
  _UUPO,
  n0,
} from "./schemas_0";
import { UserProfileDetails } from "./schemas_44_User";

/* eslint no-var: 0 */

export var AddEntityOwnerInput = struct(
  n0,
  _AEOI,
  0,
  [_dI, _eT, _eI, _o, _cT],
  [[0, 1], [0, 1], [0, 1], () => OwnerProperties, [0, 4]]
);
export var AddEntityOwnerOutput = struct(n0, _AEOO, 0, [], []);
export var AddPolicyGrantInput = struct(
  n0,
  _APGI,
  0,
  [_dI, _eT, _eI, _pTo, _p, _d, _cT],
  [[0, 1], [0, 1], [0, 1], 0, () => PolicyGrantPrincipal, () => PolicyGrantDetail, [0, 4]]
);
export var AddPolicyGrantOutput = struct(n0, _APGO, 0, [_gI], [0]);
export var AddToProjectMemberPoolPolicyGrantDetail = struct(n0, _ATPMPPGD, 0, [_iCDU], [2]);
export var AllDomainUnitsGrantFilter = struct(n0, _ADUGF, 0, [], []);
export var AllUsersGrantFilter = struct(n0, _AUGF, 0, [], []);
export var CreateAssetTypePolicyGrantDetail = struct(n0, _CATPGD, 0, [_iCDU], [2]);
export var CreateDomainUnitPolicyGrantDetail = struct(n0, _CDUPGD, 0, [_iCDU], [2]);
export var CreateEnvironmentProfilePolicyGrantDetail = struct(n0, _CEPPGD, 0, [_dUI], [0]);
export var CreateFormTypePolicyGrantDetail = struct(n0, _CFTPGD, 0, [_iCDU], [2]);
export var CreateGlossaryPolicyGrantDetail = struct(n0, _CGPGD, 0, [_iCDU], [2]);
export var CreateProjectFromProjectProfilePolicyGrantDetail = struct(n0, _CPFPPPGD, 0, [_iCDU, _pPr], [2, 64 | 0]);
export var CreateProjectPolicyGrantDetail = struct(n0, _CPPGD, 0, [_iCDU], [2]);
export var CreateUserProfileInput = struct(n0, _CUPI, 0, [_dI, _uI, _uT, _cT], [[0, 1], 0, 0, [0, 4]]);
export var CreateUserProfileOutput = struct(
  n0,
  _CUPO,
  0,
  [_dIo, _id, _ty, _s, _det],
  [0, 0, 0, 0, [() => UserProfileDetails, 0]]
);
export var DomainUnitFilterForProject = struct(n0, _DUFFP, 0, [_dU, _iCDU], [0, 2]);
export var DomainUnitPolicyGrantPrincipal = struct(
  n0,
  _DUPGP,
  0,
  [_dUD, _dUIo, _dUGF],
  [0, 0, () => DomainUnitGrantFilter]
);
export var GetUserProfileInput = struct(
  n0,
  _GUPI,
  0,
  [_dI, _uI, _ty],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _ty,
      },
    ],
  ]
);
export var GetUserProfileOutput = struct(
  n0,
  _GUPO,
  0,
  [_dIo, _id, _ty, _s, _det],
  [0, 0, 0, 0, [() => UserProfileDetails, 0]]
);
export var ListPolicyGrantsInput = struct(
  n0,
  _LPGI,
  0,
  [_dI, _eT, _eI, _pTo, _mRa, _nT],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _pTo,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
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
export var ListPolicyGrantsOutput = struct(n0, _LPGO, 0, [_gL, _nT], [() => PolicyGrantList, 0]);
export var OverrideDomainUnitOwnersPolicyGrantDetail = struct(n0, _ODUOPGD, 0, [_iCDU], [2]);
export var OverrideProjectOwnersPolicyGrantDetail = struct(n0, _OPOPGD, 0, [_iCDU], [2]);
export var OwnerGroupProperties = struct(n0, _OGP, 0, [_gIr], [0]);
export var OwnerUserProperties = struct(n0, _OUP, 0, [_uI], [0]);
export var PolicyGrantMember = struct(
  n0,
  _PGM,
  0,
  [_p, _d, _cA, _cB, _gI],
  [() => PolicyGrantPrincipal, () => PolicyGrantDetail, 4, 0, 0]
);
export var ProjectPolicyGrantPrincipal = struct(n0, _PPGP, 0, [_pD, _pIr, _pGF], [0, 0, () => ProjectGrantFilter]);
export var RemoveEntityOwnerInput = struct(
  n0,
  _REOI,
  0,
  [_dI, _eT, _eI, _o, _cT],
  [[0, 1], [0, 1], [0, 1], () => OwnerProperties, [0, 4]]
);
export var RemoveEntityOwnerOutput = struct(n0, _REOO, 0, [], []);
export var RemovePolicyGrantInput = struct(
  n0,
  _RPGI,
  0,
  [_dI, _eT, _eI, _pTo, _p, _gIra, _cT],
  [[0, 1], [0, 1], [0, 1], 0, () => PolicyGrantPrincipal, 0, [0, 4]]
);
export var RemovePolicyGrantOutput = struct(n0, _RPGO, 0, [], []);
export var Unit_n0 = struct(n0, _U, 0, [], []);
export var UpdateUserProfileInput = struct(n0, _UUPI, 0, [_dI, _uI, _ty, _s], [[0, 1], [0, 1], 0, 0]);
export var UpdateUserProfileOutput = struct(
  n0,
  _UUPO,
  0,
  [_dIo, _id, _ty, _s, _det],
  [0, 0, 0, 0, [() => UserProfileDetails, 0]]
);
export var UseAssetTypePolicyGrantDetail = struct(n0, _UATPGD, 0, [_dUI], [0]);
export var PolicyGrantList = list(n0, _PGL, 0, () => PolicyGrantMember);
export var ProjectProfileList = 64 | 0;

export var DomainUnitGrantFilter = uni(n0, _DUGF, 0, [_aDUGF], [() => AllDomainUnitsGrantFilter]);
export var GroupPolicyGrantPrincipal = uni(n0, _GPGP, 0, [_gIr], [0]);
export var OwnerProperties = uni(n0, _OP, 0, [_use, _g], [() => OwnerUserProperties, () => OwnerGroupProperties]);
export var PolicyGrantDetail = uni(
  n0,
  _PGD,
  0,
  [_cDU, _oDUO, _aTPMP, _oPO, _cG, _cFT, _cAT, _cPr, _cEP, _dCEP, _cEr, _cEFB, _cPFPP, _uAT],
  [
    () => CreateDomainUnitPolicyGrantDetail,
    () => OverrideDomainUnitOwnersPolicyGrantDetail,
    () => AddToProjectMemberPoolPolicyGrantDetail,
    () => OverrideProjectOwnersPolicyGrantDetail,
    () => CreateGlossaryPolicyGrantDetail,
    () => CreateFormTypePolicyGrantDetail,
    () => CreateAssetTypePolicyGrantDetail,
    () => CreateProjectPolicyGrantDetail,
    () => CreateEnvironmentProfilePolicyGrantDetail,
    () => Unit_n0,
    () => Unit_n0,
    () => Unit_n0,
    () => CreateProjectFromProjectProfilePolicyGrantDetail,
    () => UseAssetTypePolicyGrantDetail,
  ]
);
export var PolicyGrantPrincipal = uni(
  n0,
  _PGP,
  0,
  [_use, _g, _proj, _dU],
  [
    () => UserPolicyGrantPrincipal,
    () => GroupPolicyGrantPrincipal,
    () => ProjectPolicyGrantPrincipal,
    () => DomainUnitPolicyGrantPrincipal,
  ]
);
export var ProjectGrantFilter = uni(n0, _PGF, 0, [_dUF], [() => DomainUnitFilterForProject]);
export var UserPolicyGrantPrincipal = uni(n0, _UPGP, 0, [_uI, _aUGF], [0, () => AllUsersGrantFilter]);
export var AddEntityOwner = op(
  n0,
  _AEO,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/addOwner", 201],
  },
  () => AddEntityOwnerInput,
  () => AddEntityOwnerOutput
);
export var AddPolicyGrant = op(
  n0,
  _APG,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/policies/managed/{entityType}/{entityIdentifier}/addGrant", 201],
  },
  () => AddPolicyGrantInput,
  () => AddPolicyGrantOutput
);
export var CreateUserProfile = op(
  n0,
  _CUP,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/user-profiles", 201],
  },
  () => CreateUserProfileInput,
  () => CreateUserProfileOutput
);
export var GetUserProfile = op(
  n0,
  _GUP,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/user-profiles/{userIdentifier}", 200],
  },
  () => GetUserProfileInput,
  () => GetUserProfileOutput
);
export var ListPolicyGrants = op(
  n0,
  _LPG,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/policies/managed/{entityType}/{entityIdentifier}/grants", 200],
  },
  () => ListPolicyGrantsInput,
  () => ListPolicyGrantsOutput
);
export var RemoveEntityOwner = op(
  n0,
  _REO,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/removeOwner", 204],
  },
  () => RemoveEntityOwnerInput,
  () => RemoveEntityOwnerOutput
);
export var RemovePolicyGrant = op(
  n0,
  _RPG,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/policies/managed/{entityType}/{entityIdentifier}/removeGrant", 204],
  },
  () => RemovePolicyGrantInput,
  () => RemovePolicyGrantOutput
);
export var UpdateUserProfile = op(
  n0,
  _UUP,
  {
    [_ht]: ["PUT", "/v2/domains/{domainIdentifier}/user-profiles/{userIdentifier}", 200],
  },
  () => UpdateUserProfileInput,
  () => UpdateUserProfileOutput
);

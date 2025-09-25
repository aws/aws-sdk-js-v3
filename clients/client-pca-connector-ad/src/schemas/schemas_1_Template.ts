// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ACE,
  _ACEc,
  _ACEL,
  _ACES,
  _AE,
  _AEu,
  _Al,
  _AP,
  _APL,
  _APp,
  _AR,
  _C,
  _CA,
  _CP,
  _CT,
  _CTGACE,
  _CTGACER,
  _CV,
  _CVl,
  _D,
  _DE,
  _De,
  _DS,
  _DT,
  _DTGACE,
  _DTGACER,
  _DTR,
  _E,
  _EF,
  _EFV,
  _EFVn,
  _EFVnr,
  _EK,
  _EKRONTKSF,
  _EV,
  _EVx,
  _EVxt,
  _Ex,
  _GDN,
  _GF,
  _GFV,
  _GFVe,
  _GFVen,
  _GSI,
  _GTGACE,
  _GTGACER,
  _GTGACERe,
  _h,
  _HA,
  _hQ,
  _ISA,
  _KA,
  _KE,
  _KS,
  _KU,
  _KUF,
  _KUP,
  _KUPF,
  _LTGACE,
  _LTGACER,
  _LTGACERi,
  _MKL,
  _MR,
  _MT,
  _NR,
  _NSE,
  _NT,
  _P,
  _Pe,
  _PF,
  _PKA,
  _PKAV,
  _PKAVr,
  _PKAVri,
  _PKF,
  _PKFV,
  _PKFVr,
  _PKFVri,
  _POI,
  _PT,
  _PTo,
  _PTr,
  _RACH,
  _RASA,
  _RCN,
  _RDAC,
  _RDP,
  _RE,
  _RICFPS,
  _RP,
  _RSKR,
  _Si,
  _SKPR,
  _SNF,
  _SNFV,
  _SNFVu,
  _SNFVub,
  _SRD,
  _SRDD,
  _SRDG,
  _SRE,
  _SRS,
  _SRU,
  _ST,
  _TA,
  _TD,
  _TV,
  _TVe,
  _TVem,
  _UA,
  _UF,
  _UIR,
  _ULP,
  _UT,
  _UTGACE,
  _UTGACER,
  _UTR,
  _VP,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessControlEntry = struct(
  n0,
  _ACE,
  0,
  [_GDN, _GSI, _AR, _TA, _CA, _UA],
  [0, 0, () => AccessRights, 0, 4, 4]
);
export var AccessControlEntrySummary = struct(
  n0,
  _ACES,
  0,
  [_GDN, _GSI, _AR, _TA, _CA, _UA],
  [0, 0, () => AccessRights, 0, 4, 4]
);
export var AccessRights = struct(n0, _AR, 0, [_E, _AE], [0, 0]);
export var ApplicationPolicies = struct(n0, _AP, 0, [_C, _P], [2, () => ApplicationPolicyList]);
export var CertificateValidity = struct(n0, _CV, 0, [_VP, _RP], [() => ValidityPeriod, () => ValidityPeriod]);
export var CreateTemplateGroupAccessControlEntryRequest = struct(
  n0,
  _CTGACER,
  0,
  [_TA, _GSI, _GDN, _AR, _CT],
  [[0, 1], 0, 0, () => AccessRights, [0, 4]]
);
export var DeleteTemplateGroupAccessControlEntryRequest = struct(
  n0,
  _DTGACER,
  0,
  [_TA, _GSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteTemplateRequest = struct(n0, _DTR, 0, [_TA], [[0, 1]]);
export var EnrollmentFlagsV2 = struct(n0, _EFV, 0, [_ISA, _UIR, _RICFPS, _NSE, _EKRONTKSF], [2, 2, 2, 2, 2]);
export var EnrollmentFlagsV3 = struct(n0, _EFVn, 0, [_ISA, _UIR, _RICFPS, _NSE, _EKRONTKSF], [2, 2, 2, 2, 2]);
export var EnrollmentFlagsV4 = struct(n0, _EFVnr, 0, [_ISA, _UIR, _RICFPS, _NSE, _EKRONTKSF], [2, 2, 2, 2, 2]);
export var ExtensionsV2 = struct(n0, _EV, 0, [_KU, _AP], [() => KeyUsage, () => ApplicationPolicies]);
export var ExtensionsV3 = struct(n0, _EVx, 0, [_KU, _AP], [() => KeyUsage, () => ApplicationPolicies]);
export var ExtensionsV4 = struct(n0, _EVxt, 0, [_KU, _AP], [() => KeyUsage, () => ApplicationPolicies]);
export var GeneralFlagsV2 = struct(n0, _GFV, 0, [_AEu, _MT], [2, 2]);
export var GeneralFlagsV3 = struct(n0, _GFVe, 0, [_AEu, _MT], [2, 2]);
export var GeneralFlagsV4 = struct(n0, _GFVen, 0, [_AEu, _MT], [2, 2]);
export var GetTemplateGroupAccessControlEntryRequest = struct(
  n0,
  _GTGACER,
  0,
  [_TA, _GSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetTemplateGroupAccessControlEntryResponse = struct(n0, _GTGACERe, 0, [_ACE], [() => AccessControlEntry]);
export var KeyUsage = struct(n0, _KU, 0, [_C, _UF], [2, () => KeyUsageFlags]);
export var KeyUsageFlags = struct(n0, _KUF, 0, [_DS, _NR, _KE, _DE, _KA], [2, 2, 2, 2, 2]);
export var KeyUsagePropertyFlags = struct(n0, _KUPF, 0, [_De, _KA, _Si], [2, 2, 2]);
export var ListTemplateGroupAccessControlEntriesRequest = struct(
  n0,
  _LTGACER,
  0,
  [_MR, _NT, _TA],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [0, 1],
  ]
);
export var ListTemplateGroupAccessControlEntriesResponse = struct(
  n0,
  _LTGACERi,
  0,
  [_ACEc, _NT],
  [() => AccessControlEntryList, 0]
);
export var PrivateKeyAttributesV2 = struct(n0, _PKAV, 0, [_MKL, _KS, _CP], [1, 0, 64 | 0]);
export var PrivateKeyAttributesV3 = struct(
  n0,
  _PKAVr,
  0,
  [_MKL, _KS, _CP, _KUP, _Al],
  [1, 0, 64 | 0, () => KeyUsageProperty, 0]
);
export var PrivateKeyAttributesV4 = struct(
  n0,
  _PKAVri,
  0,
  [_MKL, _KS, _CP, _KUP, _Al],
  [1, 0, 64 | 0, () => KeyUsageProperty, 0]
);
export var PrivateKeyFlagsV2 = struct(n0, _PKFV, 0, [_EK, _SKPR, _CVl], [2, 2, 0]);
export var PrivateKeyFlagsV3 = struct(n0, _PKFVr, 0, [_EK, _SKPR, _RASA, _CVl], [2, 2, 2, 0]);
export var PrivateKeyFlagsV4 = struct(n0, _PKFVri, 0, [_EK, _SKPR, _RASA, _RSKR, _ULP, _CVl], [2, 2, 2, 2, 2, 0]);
export var SubjectNameFlagsV2 = struct(
  n0,
  _SNFV,
  0,
  [_SRDD, _SRS, _SRDG, _SRU, _SRE, _SRD, _RDAC, _RE, _RCN, _RDP],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
);
export var SubjectNameFlagsV3 = struct(
  n0,
  _SNFVu,
  0,
  [_SRDD, _SRS, _SRDG, _SRU, _SRE, _SRD, _RDAC, _RE, _RCN, _RDP],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
);
export var SubjectNameFlagsV4 = struct(
  n0,
  _SNFVub,
  0,
  [_SRDD, _SRS, _SRDG, _SRU, _SRE, _SRD, _RDAC, _RE, _RCN, _RDP],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
);
export var TemplateV2 = struct(
  n0,
  _TV,
  0,
  [_CV, _ST, _PKA, _PKF, _EF, _SNF, _GF, _Ex],
  [
    () => CertificateValidity,
    64 | 0,
    () => PrivateKeyAttributesV2,
    () => PrivateKeyFlagsV2,
    () => EnrollmentFlagsV2,
    () => SubjectNameFlagsV2,
    () => GeneralFlagsV2,
    () => ExtensionsV2,
  ]
);
export var TemplateV3 = struct(
  n0,
  _TVe,
  0,
  [_CV, _ST, _PKA, _PKF, _EF, _SNF, _GF, _HA, _Ex],
  [
    () => CertificateValidity,
    64 | 0,
    () => PrivateKeyAttributesV3,
    () => PrivateKeyFlagsV3,
    () => EnrollmentFlagsV3,
    () => SubjectNameFlagsV3,
    () => GeneralFlagsV3,
    0,
    () => ExtensionsV3,
  ]
);
export var TemplateV4 = struct(
  n0,
  _TVem,
  0,
  [_CV, _ST, _PKA, _PKF, _EF, _SNF, _GF, _HA, _Ex],
  [
    () => CertificateValidity,
    64 | 0,
    () => PrivateKeyAttributesV4,
    () => PrivateKeyFlagsV4,
    () => EnrollmentFlagsV4,
    () => SubjectNameFlagsV4,
    () => GeneralFlagsV4,
    0,
    () => ExtensionsV4,
  ]
);
export var UpdateTemplateGroupAccessControlEntryRequest = struct(
  n0,
  _UTGACER,
  0,
  [_TA, _GSI, _GDN, _AR],
  [[0, 1], [0, 1], 0, () => AccessRights]
);
export var UpdateTemplateRequest = struct(n0, _UTR, 0, [_TA, _D, _RACH], [[0, 1], () => TemplateDefinition, 2]);
export var ValidityPeriod = struct(n0, _VP, 0, [_PT, _Pe], [0, 1]);
export var AccessControlEntryList = list(n0, _ACEL, 0, () => AccessControlEntrySummary);
export var ApplicationPolicyList = list(n0, _APL, 0, () => ApplicationPolicy);
export var CryptoProvidersList = 64 | 0;

export var TemplateNameList = 64 | 0;

export var ApplicationPolicy = uni(n0, _APp, 0, [_PTo, _POI], [0, 0]);
export var KeyUsageProperty = uni(n0, _KUP, 0, [_PTr, _PF], [0, () => KeyUsagePropertyFlags]);
export var TemplateDefinition = uni(
  n0,
  _TD,
  0,
  [_TV, _TVe, _TVem],
  [() => TemplateV2, () => TemplateV3, () => TemplateV4]
);
export var CreateTemplateGroupAccessControlEntry = op(
  n0,
  _CTGACE,
  {
    [_h]: ["POST", "/templates/{TemplateArn}/accessControlEntries", 200],
  },
  () => CreateTemplateGroupAccessControlEntryRequest,
  () => Unit
);
export var DeleteTemplate = op(
  n0,
  _DT,
  {
    [_h]: ["DELETE", "/templates/{TemplateArn}", 202],
  },
  () => DeleteTemplateRequest,
  () => Unit
);
export var DeleteTemplateGroupAccessControlEntry = op(
  n0,
  _DTGACE,
  {
    [_h]: ["DELETE", "/templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}", 200],
  },
  () => DeleteTemplateGroupAccessControlEntryRequest,
  () => Unit
);
export var GetTemplateGroupAccessControlEntry = op(
  n0,
  _GTGACE,
  {
    [_h]: ["GET", "/templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}", 200],
  },
  () => GetTemplateGroupAccessControlEntryRequest,
  () => GetTemplateGroupAccessControlEntryResponse
);
export var ListTemplateGroupAccessControlEntries = op(
  n0,
  _LTGACE,
  {
    [_h]: ["GET", "/templates/{TemplateArn}/accessControlEntries", 200],
  },
  () => ListTemplateGroupAccessControlEntriesRequest,
  () => ListTemplateGroupAccessControlEntriesResponse
);
export var UpdateTemplate = op(
  n0,
  _UT,
  {
    [_h]: ["PATCH", "/templates/{TemplateArn}", 200],
  },
  () => UpdateTemplateRequest,
  () => Unit
);
export var UpdateTemplateGroupAccessControlEntry = op(
  n0,
  _UTGACE,
  {
    [_h]: ["PATCH", "/templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}", 200],
  },
  () => UpdateTemplateGroupAccessControlEntryRequest,
  () => Unit
);

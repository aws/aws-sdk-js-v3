// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidArgsException as __InvalidArgsException,
  InvalidNextTokenException as __InvalidNextTokenException,
  LimitExceededException as __LimitExceededException,
  MalformedCSRException as __MalformedCSRException,
  PermissionAlreadyExistsException as __PermissionAlreadyExistsException,
  RequestAlreadyProcessedException as __RequestAlreadyProcessedException,
} from "../models/index";
import {
  _A,
  _Ac,
  _AD,
  _ADL,
  _AL,
  _AM,
  _AMT,
  _AP,
  _ARI,
  _ARRF,
  _ARS,
  _ASNS,
  _C,
  _c,
  _CA,
  _CAA,
  _CAC,
  _CAe,
  _CAer,
  _CAert,
  _CAL,
  _CAr,
  _CAT,
  _CAu,
  _CC,
  _CCA,
  _CCAAR,
  _CCAARR,
  _CCAARRr,
  _CCAR,
  _CCARr,
  _CCu,
  _CDPEC,
  _CE,
  _CEL,
  _CEu,
  _CEus,
  _CN,
  _COI,
  _CP,
  _CPe,
  _CPI,
  _CPL,
  _CPR,
  _CPr,
  _Cr,
  _CRLS,
  _CS,
  _Cs,
  _CT,
  _CU,
  _DCAAR,
  _DCAARR,
  _DCAARRe,
  _DCAe,
  _DCARe,
  _DCARes,
  _DE,
  _DN,
  _DNi,
  _DNQ,
  _DO,
  _DS,
  _E,
  _e,
  _EID,
  _EKU,
  _EKUL,
  _EKUOI,
  _EKUT,
  _En,
  _EO,
  _EPN,
  _FR,
  _GN,
  _GNe,
  _GNL,
  _GQ,
  _I,
  _IA,
  _IAE,
  _IC,
  _ICR,
  _ICRs,
  _INTE,
  _IT,
  _KA,
  _KAe,
  _KCS,
  _KE,
  _KSSS,
  _KU,
  _L,
  _LCA,
  _LCAR,
  _LCARi,
  _LEE,
  _LP,
  _LPR,
  _LPRi,
  _LSCA,
  _m,
  _MCSRE,
  _MR,
  _NA,
  _NAa,
  _NB,
  _NR,
  _NT,
  _O,
  _OA,
  _OC,
  _OCC,
  _OE,
  _OI,
  _ON,
  _OU,
  _P,
  _PAEE,
  _Pe,
  _Per,
  _PI,
  _PL,
  _PN,
  _Po,
  _PQ,
  _PQI,
  _PQIL,
  _PQIo,
  _Pr,
  _Q,
  _RAPE,
  _RC,
  _RCe,
  _RCR,
  _RI,
  _RN,
  _RO,
  _RR,
  _RU,
  _S,
  _SA,
  _SAN,
  _SAo,
  _SBN,
  _Se,
  _SIA,
  _SK,
  _SN,
  _SOA,
  _St,
  _Sta,
  _Su,
  _T,
  _TA,
  _Ta,
  _TI,
  _Ty,
  _UCAp,
  _UCARp,
  _UM,
  _URI,
  _V,
  _Va,
  _VNB,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_1_Authority";

/* eslint no-var: 0 */

export var AccessDescription = struct(n0, _AD, 0, [_AM, _AL], [() => AccessMethod, () => GeneralName]);
export var AccessMethod = struct(n0, _AM, 0, [_COI, _AMT], [0, 0]);
export var ApiPassthrough = struct(n0, _AP, 0, [_E, _S], [() => Extensions, () => ASN1Subject]);
export var ASN1Subject = struct(
  n0,
  _ASNS,
  0,
  [_C, _O, _OU, _DNQ, _St, _CN, _SN, _L, _T, _Su, _GN, _I, _P, _GQ, _CA],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => CustomAttributeList]
);
export var CertificateAuthority = struct(
  n0,
  _CAe,
  0,
  [_A, _OA, _CAr, _LSCA, _Ty, _Se, _Sta, _NB, _NA, _FR, _CAC, _RC, _RU, _KSSS, _UM],
  [0, 0, 4, 4, 0, 0, 0, 4, 4, 0, () => CertificateAuthorityConfiguration, () => RevocationConfiguration, 4, 0, 0]
);
export var CertificateAuthorityConfiguration = struct(
  n0,
  _CAC,
  0,
  [_KA, _SA, _S, _CE],
  [0, 0, () => ASN1Subject, () => CsrExtensions]
);
export var CreateCertificateAuthorityAuditReportRequest = struct(n0, _CCAARR, 0, [_CAA, _SBN, _ARRF], [0, 0, 0]);
export var CreateCertificateAuthorityAuditReportResponse = struct(n0, _CCAARRr, 0, [_ARI, _SK], [0, 0]);
export var CreateCertificateAuthorityRequest = struct(
  n0,
  _CCAR,
  0,
  [_CAC, _RC, _CAT, _IT, _KSSS, _Ta, _UM],
  [() => CertificateAuthorityConfiguration, () => RevocationConfiguration, 0, 0, 0, () => TagList, 0]
);
export var CreateCertificateAuthorityResponse = struct(n0, _CCARr, 0, [_CAA], [0]);
export var CreatePermissionRequest = struct(n0, _CPR, 0, [_CAA, _Pr, _SAo, _Ac], [0, 0, 0, 64 | 0]);
export var CrlConfiguration = struct(
  n0,
  _CC,
  0,
  [_En, _EID, _CCu, _SBN, _SOA, _CDPEC, _CT, _CP],
  [2, 1, 0, 0, 0, () => CrlDistributionPointExtensionConfiguration, 0, 0]
);
export var CrlDistributionPointExtensionConfiguration = struct(n0, _CDPEC, 0, [_OE], [2]);
export var CsrExtensions = struct(n0, _CE, 0, [_KU, _SIA], [() => KeyUsage, () => AccessDescriptionList]);
export var CustomAttribute = struct(n0, _CAu, 0, [_OI, _V], [0, 0]);
export var CustomExtension = struct(n0, _CEu, 0, [_OI, _V, _Cr], [0, 0, 2]);
export var DescribeCertificateAuthorityAuditReportRequest = struct(n0, _DCAARR, 0, [_CAA, _ARI], [0, 0]);
export var DescribeCertificateAuthorityAuditReportResponse = struct(
  n0,
  _DCAARRe,
  0,
  [_ARS, _SBN, _SK, _CAr],
  [0, 0, 0, 4]
);
export var DescribeCertificateAuthorityRequest = struct(n0, _DCARe, 0, [_CAA], [0]);
export var DescribeCertificateAuthorityResponse = struct(n0, _DCARes, 0, [_CAe], [() => CertificateAuthority]);
export var EdiPartyName = struct(n0, _EPN, 0, [_PN, _NAa], [0, 0]);
export var ExtendedKeyUsage = struct(n0, _EKU, 0, [_EKUT, _EKUOI], [0, 0]);
export var Extensions = struct(
  n0,
  _E,
  0,
  [_CPe, _EKU, _KU, _SAN, _CEus],
  [
    () => CertificatePolicyList,
    () => ExtendedKeyUsageList,
    () => KeyUsage,
    () => GeneralNameList,
    () => CustomExtensionList,
  ]
);
export var GeneralName = struct(
  n0,
  _GNe,
  0,
  [_ON, _RN, _DN, _DNi, _EPN, _URI, _IA, _RI],
  [() => OtherName, 0, 0, () => ASN1Subject, () => EdiPartyName, 0, 0, 0]
);
export var InvalidArgsException = error(
  n0,
  _IAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidArgsException
);
export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidNextTokenException
);
export var IssueCertificateRequest = struct(
  n0,
  _ICR,
  0,
  [_AP, _CAA, _Cs, _SA, _TA, _Va, _VNB, _IT],
  [() => ApiPassthrough, 0, 21, 0, 0, () => Validity, () => Validity, 0]
);
export var IssueCertificateResponse = struct(n0, _ICRs, 0, [_CAer], [0]);
export var KeyUsage = struct(
  n0,
  _KU,
  0,
  [_DS, _NR, _KE, _DE, _KAe, _KCS, _CRLS, _EO, _DO],
  [2, 2, 2, 2, 2, 2, 2, 2, 2]
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __LimitExceededException
);
export var ListCertificateAuthoritiesRequest = struct(n0, _LCAR, 0, [_MR, _NT, _RO], [1, 0, 0]);
export var ListCertificateAuthoritiesResponse = struct(n0, _LCARi, 0, [_NT, _CAert], [0, () => CertificateAuthorities]);
export var ListPermissionsRequest = struct(n0, _LPR, 0, [_MR, _NT, _CAA], [1, 0, 0]);
export var ListPermissionsResponse = struct(n0, _LPRi, 0, [_NT, _Pe], [0, () => PermissionList]);
export var MalformedCSRException = error(
  n0,
  _MCSRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MalformedCSRException
);
export var OcspConfiguration = struct(n0, _OC, 0, [_En, _OCC], [2, 0]);
export var OtherName = struct(n0, _ON, 0, [_TI, _V], [0, 0]);
export var Permission = struct(n0, _Per, 0, [_CAA, _CAr, _Pr, _SAo, _Ac, _Po], [0, 4, 0, 0, 64 | 0, 0]);
export var PermissionAlreadyExistsException = error(
  n0,
  _PAEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __PermissionAlreadyExistsException
);
export var PolicyInformation = struct(n0, _PI, 0, [_CPI, _PQ], [0, () => PolicyQualifierInfoList]);
export var PolicyQualifierInfo = struct(n0, _PQI, 0, [_PQIo, _Q], [0, () => Qualifier]);
export var Qualifier = struct(n0, _Q, 0, [_CU], [0]);
export var RequestAlreadyProcessedException = error(
  n0,
  _RAPE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RequestAlreadyProcessedException
);
export var RevocationConfiguration = struct(n0, _RC, 0, [_CC, _OC], [() => CrlConfiguration, () => OcspConfiguration]);
export var RevokeCertificateRequest = struct(n0, _RCR, 0, [_CAA, _CS, _RR], [0, 0, 0]);
export var UpdateCertificateAuthorityRequest = struct(
  n0,
  _UCARp,
  0,
  [_CAA, _RC, _Sta],
  [0, () => RevocationConfiguration, 0]
);
export var Validity = struct(n0, _Va, 0, [_V, _Ty], [1, 0]);
export var Unit = "unit" as const;

export var AccessDescriptionList = list(n0, _ADL, 0, () => AccessDescription);
export var ActionList = 64 | 0;

export var CertificateAuthorities = list(n0, _CAert, 0, () => CertificateAuthority);
export var CertificatePolicyList = list(n0, _CPL, 0, () => PolicyInformation);
export var CustomAttributeList = list(n0, _CAL, 0, () => CustomAttribute);
export var CustomExtensionList = list(n0, _CEL, 0, () => CustomExtension);
export var ExtendedKeyUsageList = list(n0, _EKUL, 0, () => ExtendedKeyUsage);
export var GeneralNameList = list(n0, _GNL, 0, () => GeneralName);
export var PermissionList = list(n0, _PL, 0, () => Permission);
export var PolicyQualifierInfoList = list(n0, _PQIL, 0, () => PolicyQualifierInfo);
export var CreateCertificateAuthority = op(
  n0,
  _CCA,
  2,
  () => CreateCertificateAuthorityRequest,
  () => CreateCertificateAuthorityResponse
);
export var CreateCertificateAuthorityAuditReport = op(
  n0,
  _CCAAR,
  2,
  () => CreateCertificateAuthorityAuditReportRequest,
  () => CreateCertificateAuthorityAuditReportResponse
);
export var CreatePermission = op(
  n0,
  _CPr,
  0,
  () => CreatePermissionRequest,
  () => Unit
);
export var DescribeCertificateAuthority = op(
  n0,
  _DCAe,
  0,
  () => DescribeCertificateAuthorityRequest,
  () => DescribeCertificateAuthorityResponse
);
export var DescribeCertificateAuthorityAuditReport = op(
  n0,
  _DCAAR,
  0,
  () => DescribeCertificateAuthorityAuditReportRequest,
  () => DescribeCertificateAuthorityAuditReportResponse
);
export var IssueCertificate = op(
  n0,
  _IC,
  2,
  () => IssueCertificateRequest,
  () => IssueCertificateResponse
);
export var ListCertificateAuthorities = op(
  n0,
  _LCA,
  0,
  () => ListCertificateAuthoritiesRequest,
  () => ListCertificateAuthoritiesResponse
);
export var ListPermissions = op(
  n0,
  _LP,
  0,
  () => ListPermissionsRequest,
  () => ListPermissionsResponse
);
export var RevokeCertificate = op(
  n0,
  _RCe,
  0,
  () => RevokeCertificateRequest,
  () => Unit
);
export var UpdateCertificateAuthority = op(
  n0,
  _UCAp,
  0,
  () => UpdateCertificateAuthorityRequest,
  () => Unit
);

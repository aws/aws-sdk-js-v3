// smithy-typescript generated code
import { map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _AKRR,
  _AKRRI,
  _AKRRO,
  _C,
  _CAPKI,
  _CN,
  _Co,
  _CS,
  _CSR,
  _CSRT,
  _CST,
  _DD,
  _DHDD,
  _DHTKB,
  _DKA,
  _DKe,
  _DKI,
  _DKID,
  _DKO,
  _E,
  _EA,
  _EAx,
  _EDHTKB,
  _EDIK,
  _EK,
  _EKC,
  _EKI,
  _EKIx,
  _EKM,
  _EKO,
  _En,
  _ET,
  _ETKB,
  _ETKBx,
  _GCSR,
  _GCSRI,
  _GCSRO,
  _GK,
  _GKI,
  _GKO,
  _GPKC,
  _GPKCI,
  _GPKCO,
  _IDHTKB,
  _IK,
  _IKC,
  _IKI,
  _IKM,
  _IKO,
  _IT,
  _ITKB,
  _ITKBm,
  _K,
  _KAe,
  _KBF,
  _KBH,
  _KC,
  _KCC,
  _KCey,
  _KCV,
  _KCVA,
  _KDF,
  _KDHA,
  _KE,
  _KI,
  _KM,
  _KMOU,
  _KSN,
  _KV,
  _O,
  _OB,
  _OBI,
  _OBV,
  _OU,
  _PKC,
  _PKI,
  _RCPK,
  _RK,
  _RKI,
  _RKO,
  _RKRR,
  _RKRRI,
  _RKRRO,
  _RN,
  _RR,
  _SA,
  _SI,
  _SKC,
  _SKI,
  _SKU,
  _SKUI,
  _SKUIt,
  _SKUO,
  _SKUOt,
  _SKUt,
  _SOP,
  _T,
  _TCPK,
  _TKB,
  _TKBr,
  _TWKB,
  _TWKBr,
  _WK,
  _WKAr,
  _WKB,
  _WKC,
  _WKCr,
  _WKI,
  _WKMF,
  _WS,
  n0,
} from "./schemas_0";
import { Key, KeyAttributes, KeyModesOfUse } from "./schemas_2_Key";
import { Tags } from "./schemas_4_Resource";

/* eslint no-var: 0 */

export var CertificateSigningRequestType = sim(n0, _CSRT, 0, 8);
export var KeyMaterial = sim(n0, _KM, 0, 8);
export var OptionalBlockId = sim(n0, _OBI, 0, 8);
export var OptionalBlockValue = sim(n0, _OBV, 0, 8);
export var Tr31WrappedKeyBlock = sim(n0, _TWKB, 0, 8);
export var Tr34WrappedKeyBlock = sim(n0, _TWKBr, 0, 8);
export var WrappedKeyCryptogram = sim(n0, _WKC, 0, 8);
export var AddKeyReplicationRegionsInput = struct(n0, _AKRRI, 0, [_KI, _RR], [0, 64 | 0]);
export var AddKeyReplicationRegionsOutput = struct(n0, _AKRRO, 0, [_K], [() => Key]);
export var CertificateSubjectType = struct(n0, _CST, 0, [_CN, _OU, _O, _C, _Co, _SOP, _EA], [0, 0, 0, 0, 0, 0, 0]);
export var DeleteKeyInput = struct(n0, _DKI, 0, [_KI, _DKID], [0, 1]);
export var DeleteKeyOutput = struct(n0, _DKO, 0, [_K], [() => Key]);
export var ExportAttributes = struct(n0, _EAx, 0, [_EDIK, _KCVA], [() => ExportDukptInitialKey, 0]);
export var ExportDiffieHellmanTr31KeyBlock = struct(
  n0,
  _EDHTKB,
  0,
  [_PKI, _CAPKI, _PKC, _DKA, _KDF, _KDHA, _DD, _KBH],
  [0, 0, 0, 0, 0, 0, () => DiffieHellmanDerivationData, [() => KeyBlockHeaders, 0]]
);
export var ExportDukptInitialKey = struct(n0, _EDIK, 0, [_KSN], [0]);
export var ExportKeyCryptogram = struct(n0, _EKC, 0, [_CAPKI, _WKCr, _WS], [0, 0, 0]);
export var ExportKeyInput = struct(
  n0,
  _EKI,
  0,
  [_KM, _EKIx, _EAx],
  [[() => ExportKeyMaterial, 0], 0, () => ExportAttributes]
);
export var ExportKeyOutput = struct(n0, _EKO, 0, [_WK], [[() => WrappedKey, 0]]);
export var ExportTr31KeyBlock = struct(n0, _ETKB, 0, [_WKI, _KBH], [0, [() => KeyBlockHeaders, 0]]);
export var ExportTr34KeyBlock = struct(
  n0,
  _ETKBx,
  0,
  [_CAPKI, _WKCr, _ET, _SKI, _SKC, _KBF, _RN, _KBH],
  [0, 0, 0, 0, 0, 0, 0, [() => KeyBlockHeaders, 0]]
);
export var GetCertificateSigningRequestInput = struct(
  n0,
  _GCSRI,
  0,
  [_KI, _SA, _CS],
  [0, 0, () => CertificateSubjectType]
);
export var GetCertificateSigningRequestOutput = struct(
  n0,
  _GCSRO,
  0,
  [_CSR],
  [[() => CertificateSigningRequestType, 0]]
);
export var GetKeyInput = struct(n0, _GKI, 0, [_KI], [0]);
export var GetKeyOutput = struct(n0, _GKO, 0, [_K], [() => Key]);
export var GetPublicKeyCertificateInput = struct(n0, _GPKCI, 0, [_KI], [0]);
export var GetPublicKeyCertificateOutput = struct(n0, _GPKCO, 0, [_KC, _KCC], [0, 0]);
export var ImportDiffieHellmanTr31KeyBlock = struct(
  n0,
  _IDHTKB,
  0,
  [_PKI, _CAPKI, _PKC, _DKA, _KDF, _KDHA, _DD, _WKB],
  [0, 0, 0, 0, 0, 0, () => DiffieHellmanDerivationData, [() => Tr31WrappedKeyBlock, 0]]
);
export var ImportKeyCryptogram = struct(
  n0,
  _IKC,
  0,
  [_KAe, _E, _WKC, _IT, _WS],
  [() => KeyAttributes, 2, [() => WrappedKeyCryptogram, 0], 0, 0]
);
export var ImportKeyInput = struct(
  n0,
  _IKI,
  0,
  [_KM, _KCVA, _En, _T, _RR],
  [[() => ImportKeyMaterial, 0], 0, 2, () => Tags, 64 | 0]
);
export var ImportKeyOutput = struct(n0, _IKO, 0, [_K], [() => Key]);
export var ImportTr31KeyBlock = struct(n0, _ITKB, 0, [_WKI, _WKB], [0, [() => Tr31WrappedKeyBlock, 0]]);
export var ImportTr34KeyBlock = struct(
  n0,
  _ITKBm,
  0,
  [_CAPKI, _SKC, _IT, _WKI, _WKCr, _WKB, _KBF, _RN],
  [0, 0, 0, 0, 0, [() => Tr34WrappedKeyBlock, 0], 0, 0]
);
export var KeyBlockHeaders = struct(
  n0,
  _KBH,
  0,
  [_KMOU, _KE, _KV, _OB],
  [() => KeyModesOfUse, 0, 0, [() => OptionalBlocks, 0]]
);
export var RemoveKeyReplicationRegionsInput = struct(n0, _RKRRI, 0, [_KI, _RR], [0, 64 | 0]);
export var RemoveKeyReplicationRegionsOutput = struct(n0, _RKRRO, 0, [_K], [() => Key]);
export var RestoreKeyInput = struct(n0, _RKI, 0, [_KI], [0]);
export var RestoreKeyOutput = struct(n0, _RKO, 0, [_K], [() => Key]);
export var RootCertificatePublicKey = struct(n0, _RCPK, 0, [_KAe, _PKC], [() => KeyAttributes, 0]);
export var StartKeyUsageInput = struct(n0, _SKUI, 0, [_KI], [0]);
export var StartKeyUsageOutput = struct(n0, _SKUO, 0, [_K], [() => Key]);
export var StopKeyUsageInput = struct(n0, _SKUIt, 0, [_KI], [0]);
export var StopKeyUsageOutput = struct(n0, _SKUOt, 0, [_K], [() => Key]);
export var TrustedCertificatePublicKey = struct(n0, _TCPK, 0, [_KAe, _PKC, _CAPKI], [() => KeyAttributes, 0, 0]);
export var WrappedKey = struct(n0, _WK, 0, [_WKAr, _WKMF, _KM, _KCV, _KCVA], [0, 0, [() => KeyMaterial, 0], 0, 0]);
export var Unit = "unit" as const;

export var OptionalBlocks = map(n0, _OB, 0, [() => OptionalBlockId, 0], [() => OptionalBlockValue, 0]);
export var DiffieHellmanDerivationData = uni(n0, _DHDD, 0, [_SI], [0]);
export var ExportKeyMaterial = uni(
  n0,
  _EKM,
  0,
  [_TKB, _TKBr, _KCey, _DHTKB],
  [
    [() => ExportTr31KeyBlock, 0],
    [() => ExportTr34KeyBlock, 0],
    () => ExportKeyCryptogram,
    [() => ExportDiffieHellmanTr31KeyBlock, 0],
  ]
);
export var ImportKeyMaterial = uni(
  n0,
  _IKM,
  0,
  [_RCPK, _TCPK, _TKB, _TKBr, _KCey, _DHTKB],
  [
    () => RootCertificatePublicKey,
    () => TrustedCertificatePublicKey,
    [() => ImportTr31KeyBlock, 0],
    [() => ImportTr34KeyBlock, 0],
    [() => ImportKeyCryptogram, 0],
    [() => ImportDiffieHellmanTr31KeyBlock, 0],
  ]
);
export var AddKeyReplicationRegions = op(
  n0,
  _AKRR,
  0,
  () => AddKeyReplicationRegionsInput,
  () => AddKeyReplicationRegionsOutput
);
export var DeleteKey = op(
  n0,
  _DKe,
  2,
  () => DeleteKeyInput,
  () => DeleteKeyOutput
);
export var ExportKey = op(
  n0,
  _EK,
  0,
  () => ExportKeyInput,
  () => ExportKeyOutput
);
export var GetCertificateSigningRequest = op(
  n0,
  _GCSR,
  0,
  () => GetCertificateSigningRequestInput,
  () => GetCertificateSigningRequestOutput
);
export var GetKey = op(
  n0,
  _GK,
  0,
  () => GetKeyInput,
  () => GetKeyOutput
);
export var GetPublicKeyCertificate = op(
  n0,
  _GPKC,
  0,
  () => GetPublicKeyCertificateInput,
  () => GetPublicKeyCertificateOutput
);
export var ImportKey = op(
  n0,
  _IK,
  0,
  () => ImportKeyInput,
  () => ImportKeyOutput
);
export var RemoveKeyReplicationRegions = op(
  n0,
  _RKRR,
  0,
  () => RemoveKeyReplicationRegionsInput,
  () => RemoveKeyReplicationRegionsOutput
);
export var RestoreKey = op(
  n0,
  _RK,
  0,
  () => RestoreKeyInput,
  () => RestoreKeyOutput
);
export var StartKeyUsage = op(
  n0,
  _SKU,
  0,
  () => StartKeyUsageInput,
  () => StartKeyUsageOutput
);
export var StopKeyUsage = op(
  n0,
  _SKUt,
  0,
  () => StopKeyUsageInput,
  () => StopKeyUsageOutput
);

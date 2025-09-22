// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  KMSInvalidMacException as __KMSInvalidMacException,
  KMSInvalidSignatureException as __KMSInvalidSignatureException,
} from "../models/index";
import {
  _AD,
  _aQE,
  _c,
  _CB,
  _CFR,
  _CKSI,
  _De,
  _DR,
  _DRe,
  _DRec,
  _DSS,
  _DSSR,
  _DSSRe,
  _e,
  _EA,
  _EC,
  _En,
  _ER,
  _ERn,
  _GDK,
  _GDKP,
  _GDKPR,
  _GDKPRe,
  _GDKR,
  _GDKRe,
  _GM,
  _GMR,
  _GMRe,
  _GPFI,
  _GPFIR,
  _GPFIRe,
  _GR,
  _GRR,
  _GRRe,
  _GT,
  _hE,
  _IT,
  _KAA,
  _KEA,
  _KI,
  _KMI,
  _KMSIME,
  _KMSISE,
  _KO,
  _KPS,
  _KS,
  _m,
  _MA,
  _Ma,
  _Me,
  _MT,
  _MV,
  _NOB,
  _PK,
  _PKCB,
  _PKP,
  _Pl,
  _PT,
  _PVT,
  _R,
  _RI,
  _S,
  _SAi,
  _Si,
  _SR,
  _SRi,
  _SS,
  _SV,
  _V,
  _VM,
  _VMR,
  _VMRe,
  _VR,
  _VRe,
  _WA,
  _WKS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var PlaintextType = sim(n0, _PT, 21, 8);
export var DecryptRequest = struct(
  n0,
  _DRe,
  0,
  [_CB, _EC, _GT, _KI, _EA, _R, _DR],
  [21, 128 | 0, 64 | 0, 0, 0, () => RecipientInfo, 2]
);
export var DecryptResponse = struct(n0, _DRec, 0, [_KI, _Pl, _EA, _CFR, _KMI], [0, [() => PlaintextType, 0], 0, 21, 0]);
export var DeriveSharedSecretRequest = struct(
  n0,
  _DSSR,
  0,
  [_KI, _KAA, _PK, _GT, _DR, _R],
  [0, 0, 21, 64 | 0, 2, () => RecipientInfo]
);
export var DeriveSharedSecretResponse = struct(
  n0,
  _DSSRe,
  0,
  [_KI, _SS, _CFR, _KAA, _KO],
  [0, [() => PlaintextType, 0], 21, 0, 0]
);
export var EncryptRequest = struct(
  n0,
  _ER,
  0,
  [_KI, _Pl, _EC, _GT, _EA, _DR],
  [0, [() => PlaintextType, 0], 128 | 0, 64 | 0, 0, 2]
);
export var EncryptResponse = struct(n0, _ERn, 0, [_CB, _KI, _EA], [21, 0, 0]);
export var GenerateDataKeyPairRequest = struct(
  n0,
  _GDKPR,
  0,
  [_EC, _KI, _KPS, _GT, _R, _DR],
  [128 | 0, 0, 0, 64 | 0, () => RecipientInfo, 2]
);
export var GenerateDataKeyPairResponse = struct(
  n0,
  _GDKPRe,
  0,
  [_PKCB, _PKP, _PK, _KI, _KPS, _CFR, _KMI],
  [21, [() => PlaintextType, 0], 21, 0, 0, 21, 0]
);
export var GenerateDataKeyRequest = struct(
  n0,
  _GDKR,
  0,
  [_KI, _EC, _NOB, _KS, _GT, _R, _DR],
  [0, 128 | 0, 1, 0, 64 | 0, () => RecipientInfo, 2]
);
export var GenerateDataKeyResponse = struct(
  n0,
  _GDKRe,
  0,
  [_CB, _Pl, _KI, _CFR, _KMI],
  [21, [() => PlaintextType, 0], 0, 21, 0]
);
export var GenerateMacRequest = struct(
  n0,
  _GMR,
  0,
  [_Me, _KI, _MA, _GT, _DR],
  [[() => PlaintextType, 0], 0, 0, 64 | 0, 2]
);
export var GenerateMacResponse = struct(n0, _GMRe, 0, [_Ma, _MA, _KI], [21, 0, 0]);
export var GenerateRandomRequest = struct(n0, _GRR, 0, [_NOB, _CKSI, _R], [1, 0, () => RecipientInfo]);
export var GenerateRandomResponse = struct(n0, _GRRe, 0, [_Pl, _CFR], [[() => PlaintextType, 0], 21]);
export var GetParametersForImportRequest = struct(n0, _GPFIR, 0, [_KI, _WA, _WKS], [0, 0, 0]);
export var GetParametersForImportResponse = struct(
  n0,
  _GPFIRe,
  0,
  [_KI, _IT, _PK, _PVT],
  [0, 21, [() => PlaintextType, 0], 4]
);
export var KMSInvalidMacException = error(
  n0,
  _KMSIME,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KMSInvalidMac`, 400],
  },
  [_m],
  [0],

  __KMSInvalidMacException
);
export var KMSInvalidSignatureException = error(
  n0,
  _KMSISE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KMSInvalidSignature`, 400],
  },
  [_m],
  [0],

  __KMSInvalidSignatureException
);
export var RecipientInfo = struct(n0, _RI, 0, [_KEA, _AD], [0, 21]);
export var SignRequest = struct(
  n0,
  _SR,
  0,
  [_KI, _Me, _MT, _GT, _SAi, _DR],
  [0, [() => PlaintextType, 0], 0, 64 | 0, 0, 2]
);
export var SignResponse = struct(n0, _SRi, 0, [_KI, _S, _SAi], [0, 21, 0]);
export var VerifyMacRequest = struct(
  n0,
  _VMR,
  0,
  [_Me, _KI, _MA, _Ma, _GT, _DR],
  [[() => PlaintextType, 0], 0, 0, 21, 64 | 0, 2]
);
export var VerifyMacResponse = struct(n0, _VMRe, 0, [_KI, _MV, _MA], [0, 2, 0]);
export var VerifyRequest = struct(
  n0,
  _VR,
  0,
  [_KI, _Me, _MT, _S, _SAi, _GT, _DR],
  [0, [() => PlaintextType, 0], 0, 21, 0, 64 | 0, 2]
);
export var VerifyResponse = struct(n0, _VRe, 0, [_KI, _SV, _SAi], [0, 2, 0]);
export var Decrypt = op(
  n0,
  _De,
  0,
  () => DecryptRequest,
  () => DecryptResponse
);
export var DeriveSharedSecret = op(
  n0,
  _DSS,
  0,
  () => DeriveSharedSecretRequest,
  () => DeriveSharedSecretResponse
);
export var Encrypt = op(
  n0,
  _En,
  0,
  () => EncryptRequest,
  () => EncryptResponse
);
export var GenerateDataKey = op(
  n0,
  _GDK,
  0,
  () => GenerateDataKeyRequest,
  () => GenerateDataKeyResponse
);
export var GenerateDataKeyPair = op(
  n0,
  _GDKP,
  0,
  () => GenerateDataKeyPairRequest,
  () => GenerateDataKeyPairResponse
);
export var GenerateMac = op(
  n0,
  _GM,
  0,
  () => GenerateMacRequest,
  () => GenerateMacResponse
);
export var GenerateRandom = op(
  n0,
  _GR,
  0,
  () => GenerateRandomRequest,
  () => GenerateRandomResponse
);
export var GetParametersForImport = op(
  n0,
  _GPFI,
  0,
  () => GetParametersForImportRequest,
  () => GetParametersForImportResponse
);
export var Sign = op(
  n0,
  _Si,
  0,
  () => SignRequest,
  () => SignResponse
);
export var Verify = op(
  n0,
  _V,
  0,
  () => VerifyRequest,
  () => VerifyResponse
);
export var VerifyMac = op(
  n0,
  _VM,
  0,
  () => VerifyMacRequest,
  () => VerifyMacResponse
);

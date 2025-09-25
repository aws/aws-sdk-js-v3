// smithy-typescript generated code
import { op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _CAPKI,
  _CT,
  _CTi,
  _CTT,
  _D,
  _DEA,
  _DHSK,
  _DKDT,
  _DKV,
  _EDA,
  _h,
  _IEA,
  _IKI,
  _IV,
  _IVT,
  _IWK,
  _KA,
  _KAe,
  _KCV,
  _KCVA,
  _KDF,
  _KDHA,
  _KSN,
  _Mo,
  _OEA,
  _OKI,
  _OWK,
  _PKC,
  _PT,
  _REA,
  _RED,
  _REDI,
  _REDO,
  _S,
  _SEA,
  _SI,
  _TKB,
  _TWKB,
  _WK,
  _WKM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CertificateType = sim(n0, _CT, 0, 8);
export var CipherTextType = sim(n0, _CTT, 0, 8);
export var InitializationVectorType = sim(n0, _IVT, 0, 8);
export var Tr31WrappedKeyBlock = sim(n0, _TWKB, 0, 8);
export var DukptEncryptionAttributes = struct(
  n0,
  _DEA,
  0,
  [_KSN, _Mo, _DKDT, _DKV, _IV],
  [0, 0, 0, 0, [() => InitializationVectorType, 0]]
);
export var EcdhDerivationAttributes = struct(
  n0,
  _EDA,
  0,
  [_CAPKI, _PKC, _KAe, _KDF, _KDHA, _SI],
  [0, [() => CertificateType, 0], 0, 0, 0, 0]
);
export var ReEncryptDataInput = struct(
  n0,
  _REDI,
  0,
  [_IKI, _OKI, _CTi, _IEA, _OEA, _IWK, _OWK],
  [
    [0, 1],
    0,
    [() => CipherTextType, 0],
    [() => ReEncryptionAttributes, 0],
    [() => ReEncryptionAttributes, 0],
    [() => WrappedKey, 0],
    [() => WrappedKey, 0],
  ]
);
export var ReEncryptDataOutput = struct(n0, _REDO, 0, [_KA, _KCV, _CTi], [0, 0, [() => CipherTextType, 0]]);
export var SymmetricEncryptionAttributes = struct(
  n0,
  _SEA,
  0,
  [_Mo, _IV, _PT],
  [0, [() => InitializationVectorType, 0], 0]
);
export var WrappedKey = struct(n0, _WK, 0, [_WKM, _KCVA], [[() => WrappedKeyMaterial, 0], 0]);
export var Unit = "unit" as const;

export var ReEncryptionAttributes = uni(
  n0,
  _REA,
  0,
  [_S, _D],
  [
    [() => SymmetricEncryptionAttributes, 0],
    [() => DukptEncryptionAttributes, 0],
  ]
);
export var WrappedKeyMaterial = uni(
  n0,
  _WKM,
  0,
  [_TKB, _DHSK],
  [
    [() => Tr31WrappedKeyBlock, 0],
    [() => EcdhDerivationAttributes, 0],
  ]
);
export var ReEncryptData = op(
  n0,
  _RED,
  {
    [_h]: ["POST", "/keys/{IncomingKeyIdentifier}/reencrypt", 200],
  },
  () => ReEncryptDataInput,
  () => ReEncryptDataOutput
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAe,
  _CAer,
  _Ce,
  _CS,
  _De,
  _DTLSIC,
  _DTLSICR,
  _DTLSICRe,
  _EC,
  _LMT,
  _NOA,
  _S,
  _SMt,
  _T,
  _TCD,
  _TLSICA,
  _TLSICI,
  _TLSICN,
  _TLSICR,
  _TLSICS,
  EncryptionConfiguration,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTLSInspectionConfigurationRequest = struct(n0, _DTLSICR, 0, [_TLSICA, _TLSICN], [0, 0]);
export var DeleteTLSInspectionConfigurationResponse = struct(
  n0,
  _DTLSICRe,
  0,
  [_TLSICR],
  [() => TLSInspectionConfigurationResponse]
);
export var TlsCertificateData = struct(n0, _TCD, 0, [_CAe, _CS, _S, _SMt], [0, 0, 0, 0]);
export var TLSInspectionConfigurationResponse = struct(
  n0,
  _TLSICR,
  0,
  [_TLSICA, _TLSICN, _TLSICI, _TLSICS, _De, _T, _LMT, _NOA, _EC, _Ce, _CAer],
  [0, 0, 0, 0, 0, () => TagList, 4, 1, () => EncryptionConfiguration, () => Certificates, () => TlsCertificateData]
);
export var Certificates = list(n0, _Ce, 0, () => TlsCertificateData);
export var DeleteTLSInspectionConfiguration = op(
  n0,
  _DTLSIC,
  0,
  () => DeleteTLSInspectionConfigurationRequest,
  () => DeleteTLSInspectionConfigurationResponse
);

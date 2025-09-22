// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import {
  _ADC,
  _CT,
  _DNSN,
  _End,
  _FSI,
  _IA,
  _Is,
  _L,
  _LTR,
  _Ma,
  _N,
  _NBN,
  _Nf,
  _RARN,
  _RVSS,
  _SADC,
  _SE,
  _SEv,
  _Sm,
  _SMADC,
  _Su,
  _SVM,
  _SVMI,
  _Ta,
  _UUID,
  LifecycleTransitionReason,
  n0,
  SelfManagedActiveDirectoryAttributes,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var StorageVirtualMachine = struct(
  n0,
  _SVM,
  0,
  [_ADC, _CT, _End, _FSI, _L, _N, _RARN, _SVMI, _Su, _UUID, _Ta, _LTR, _RVSS],
  [
    () => SvmActiveDirectoryConfiguration,
    4,
    () => SvmEndpoints,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => Tags,
    () => LifecycleTransitionReason,
    0,
  ]
);
export var SvmActiveDirectoryConfiguration = struct(
  n0,
  _SADC,
  0,
  [_NBN, _SMADC],
  [0, () => SelfManagedActiveDirectoryAttributes]
);
export var SvmEndpoint = struct(n0, _SE, 0, [_DNSN, _IA], [0, 64 | 0]);
export var SvmEndpoints = struct(
  n0,
  _SEv,
  0,
  [_Is, _Ma, _Nf, _Sm],
  [() => SvmEndpoint, () => SvmEndpoint, () => SvmEndpoint, () => SvmEndpoint]
);

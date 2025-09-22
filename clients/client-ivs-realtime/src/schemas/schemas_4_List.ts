// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _comp,
  _CS,
  _CSL,
  _d,
  _DS,
  _DSL,
  _eCn,
  _ECS,
  _ECSL,
  _eT,
  _fBECA,
  _fBSA,
  _ht,
  _i,
  _LCi,
  _LCR,
  _LCRi,
  _LEC,
  _LECR,
  _LECRi,
  _LPK,
  _LPKR,
  _LPKRi,
  _LSC,
  _LSCR,
  _LSCRi,
  _mR,
  _n,
  _nT,
  _PKL,
  _PKS,
  _pKu,
  _s,
  _s_,
  _sA,
  _SCS,
  _SCSL,
  _sCt,
  _sT,
  _t,
  n0,
} from "./schemas_0";
import { S3StorageConfiguration } from "./schemas_1_Storage";

/* eslint no-var: 0 */

export var CompositionSummary = struct(
  n0,
  _CS,
  0,
  [_a, _sA, _d, _s, _t, _sT, _eT],
  [0, 0, () => DestinationSummaryList, 0, 128 | 0, 5, 5]
);
export var DestinationSummary = struct(n0, _DS, 0, [_i, _s, _sT, _eT], [0, 0, 5, 5]);
export var EncoderConfigurationSummary = struct(n0, _ECS, 0, [_a, _n, _t], [0, 0, 128 | 0]);
export var ListCompositionsRequest = struct(n0, _LCR, 0, [_fBSA, _fBECA, _nT, _mR], [0, 0, 0, 1]);
export var ListCompositionsResponse = struct(n0, _LCRi, 0, [_comp, _nT], [() => CompositionSummaryList, 0]);
export var ListEncoderConfigurationsRequest = struct(n0, _LECR, 0, [_nT, _mR], [0, 1]);
export var ListEncoderConfigurationsResponse = struct(
  n0,
  _LECRi,
  0,
  [_eCn, _nT],
  [() => EncoderConfigurationSummaryList, 0]
);
export var ListPublicKeysRequest = struct(n0, _LPKR, 0, [_nT, _mR], [0, 1]);
export var ListPublicKeysResponse = struct(n0, _LPKRi, 0, [_pKu, _nT], [() => PublicKeyList, 0]);
export var ListStorageConfigurationsRequest = struct(n0, _LSCR, 0, [_nT, _mR], [0, 1]);
export var ListStorageConfigurationsResponse = struct(
  n0,
  _LSCRi,
  0,
  [_sCt, _nT],
  [() => StorageConfigurationSummaryList, 0]
);
export var PublicKeySummary = struct(n0, _PKS, 0, [_a, _n, _t], [0, 0, 128 | 0]);
export var StorageConfigurationSummary = struct(
  n0,
  _SCS,
  0,
  [_a, _n, _s_, _t],
  [0, 0, () => S3StorageConfiguration, 128 | 0]
);
export var CompositionSummaryList = list(n0, _CSL, 0, () => CompositionSummary);
export var DestinationSummaryList = list(n0, _DSL, 0, () => DestinationSummary);
export var EncoderConfigurationSummaryList = list(n0, _ECSL, 0, () => EncoderConfigurationSummary);
export var PublicKeyList = list(n0, _PKL, 0, () => PublicKeySummary);
export var StorageConfigurationSummaryList = list(n0, _SCSL, 0, () => StorageConfigurationSummary);
export var ListCompositions = op(
  n0,
  _LCi,
  {
    [_ht]: ["POST", "/ListCompositions", 200],
  },
  () => ListCompositionsRequest,
  () => ListCompositionsResponse
);
export var ListEncoderConfigurations = op(
  n0,
  _LEC,
  {
    [_ht]: ["POST", "/ListEncoderConfigurations", 200],
  },
  () => ListEncoderConfigurationsRequest,
  () => ListEncoderConfigurationsResponse
);
export var ListPublicKeys = op(
  n0,
  _LPK,
  {
    [_ht]: ["POST", "/ListPublicKeys", 200],
  },
  () => ListPublicKeysRequest,
  () => ListPublicKeysResponse
);
export var ListStorageConfigurations = op(
  n0,
  _LSC,
  {
    [_ht]: ["POST", "/ListStorageConfigurations", 200],
  },
  () => ListStorageConfigurationsRequest,
  () => ListStorageConfigurationsResponse
);

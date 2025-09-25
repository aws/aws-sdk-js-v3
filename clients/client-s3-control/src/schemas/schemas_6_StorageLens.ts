// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACOM,
  _ADPM,
  _AI,
  _AL,
  _AM,
  _AOw,
  _Ar,
  _BL,
  _Bu,
  _CI,
  _CWM,
  _DE,
  _Del,
  _DSCM,
  _DSLC,
  _DSLCR,
  _DSLCT,
  _DSLCTR,
  _DSLCTRe,
  _Enc,
  _Ex,
  _F,
  _GSLC,
  _GSLCR,
  _GSLCRe,
  _GSLCT,
  _GSLCTR,
  _GSLCTRe,
  _h,
  _hH,
  _hL,
  _hQ,
  _HR,
  _I,
  _Id,
  _IE,
  _K,
  _KI,
  _LSLC,
  _LSLCE,
  _LSLCR,
  _LSLCRi,
  _LSLCRis,
  _MDa,
  _MSBP,
  _NT,
  _nT,
  _OSV,
  _PL,
  _PLSM,
  _Pre,
  _PSLC,
  _PSLCR,
  _PSLCT,
  _PSLCTR,
  _PSLCTRu,
  _Reg,
  _Regi,
  _SBD,
  _SCe,
  _SK,
  _SLA,
  _SLAO,
  _SLC,
  _SLCL,
  _SLDE,
  _SLDEE,
  _SLGL,
  _SLGLE,
  _SLGLI,
  _SLGLSC,
  _SLT,
  _SLTt,
  _SM,
  _SS,
  _SSEKMS,
  _SSES,
  _T,
  _Tag,
  _V,
  _xaai,
  _xF,
  _xN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountLevel = struct(
  n0,
  _AL,
  0,
  [_AM, _BL, _ACOM, _ADPM, _DSCM, _SLGL],
  [
    () => ActivityMetrics,
    () => BucketLevel,
    () => AdvancedCostOptimizationMetrics,
    () => AdvancedDataProtectionMetrics,
    () => DetailedStatusCodesMetrics,
    [() => StorageLensGroupLevel, 0],
  ]
);
export var ActivityMetrics = struct(n0, _AM, 0, [_IE], [2]);
export var AdvancedCostOptimizationMetrics = struct(n0, _ACOM, 0, [_IE], [2]);
export var AdvancedDataProtectionMetrics = struct(n0, _ADPM, 0, [_IE], [2]);
export var BucketLevel = struct(
  n0,
  _BL,
  0,
  [_AM, _PL, _ACOM, _ADPM, _DSCM],
  [
    () => ActivityMetrics,
    () => PrefixLevel,
    () => AdvancedCostOptimizationMetrics,
    () => AdvancedDataProtectionMetrics,
    () => DetailedStatusCodesMetrics,
  ]
);
export var CloudWatchMetrics = struct(n0, _CWM, 0, [_IE], [2]);
export var DeleteStorageLensConfigurationRequest = struct(
  n0,
  _DSLCR,
  0,
  [_CI, _AI],
  [
    [0, 1],
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
  ]
);
export var DeleteStorageLensConfigurationTaggingRequest = struct(
  n0,
  _DSLCTR,
  0,
  [_CI, _AI],
  [
    [0, 1],
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
  ]
);
export var DeleteStorageLensConfigurationTaggingResult = struct(n0, _DSLCTRe, 0, [], []);
export var DetailedStatusCodesMetrics = struct(n0, _DSCM, 0, [_IE], [2]);
export var _Exclude = struct(
  n0,
  _Ex,
  0,
  [_Bu, _Reg],
  [
    [() => Buckets, 0],
    [() => Regions, 0],
  ]
);
export var GetStorageLensConfigurationRequest = struct(
  n0,
  _GSLCR,
  0,
  [_CI, _AI],
  [
    [0, 1],
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
  ]
);
export var GetStorageLensConfigurationResult = struct(n0, _GSLCRe, 0, [_SLC], [[() => StorageLensConfiguration, 16]]);
export var GetStorageLensConfigurationTaggingRequest = struct(
  n0,
  _GSLCTR,
  0,
  [_CI, _AI],
  [
    [0, 1],
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
  ]
);
export var GetStorageLensConfigurationTaggingResult = struct(n0, _GSLCTRe, 0, [_T], [[() => StorageLensTags, 0]]);
export var Include = struct(
  n0,
  _I,
  0,
  [_Bu, _Reg],
  [
    [() => Buckets, 0],
    [() => Regions, 0],
  ]
);
export var ListStorageLensConfigurationEntry = struct(n0, _LSLCE, 0, [_Id, _SLA, _HR, _IE], [0, 0, 0, 2]);
export var ListStorageLensConfigurationsRequest = struct(
  n0,
  _LSLCR,
  0,
  [_AI, _NT],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
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
export var ListStorageLensConfigurationsResult = struct(
  n0,
  _LSLCRi,
  {
    [_xN]: _LSLCRis,
  },
  [_NT, _SLCL],
  [
    0,
    [
      () => StorageLensConfigurationList,
      {
        [_xN]: _SLC,
        [_xF]: 1,
      },
    ],
  ]
);
export var PrefixLevel = struct(n0, _PL, 0, [_SM], [() => PrefixLevelStorageMetrics]);
export var PrefixLevelStorageMetrics = struct(n0, _PLSM, 0, [_IE, _SCe], [2, () => SelectionCriteria]);
export var PutStorageLensConfigurationRequest = struct(
  n0,
  _PSLCR,
  0,
  [_CI, _AI, _SLC, _T],
  [
    [0, 1],
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [() => StorageLensConfiguration, 0],
    [() => StorageLensTags, 0],
  ]
);
export var PutStorageLensConfigurationTaggingRequest = struct(
  n0,
  _PSLCTR,
  0,
  [_CI, _AI, _T],
  [
    [0, 1],
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [() => StorageLensTags, 0],
  ]
);
export var PutStorageLensConfigurationTaggingResult = struct(n0, _PSLCTRu, 0, [], []);
export var S3BucketDestination = struct(
  n0,
  _SBD,
  0,
  [_F, _OSV, _AI, _Ar, _Pre, _Enc],
  [0, 0, 0, 0, 0, [() => StorageLensDataExportEncryption, 0]]
);
export var SelectionCriteria = struct(n0, _SCe, 0, [_Del, _MDa, _MSBP], [0, 1, 1]);
export var SSEKMS = struct(
  n0,
  _SSEKMS,
  {
    [_xN]: _SK,
  },
  [_KI],
  [0]
);
export var SSES3 = struct(
  n0,
  _SSES,
  {
    [_xN]: _SS,
  },
  [],
  []
);
export var StorageLensAwsOrg = struct(n0, _SLAO, 0, [_Ar], [0]);
export var StorageLensConfiguration = struct(
  n0,
  _SLC,
  0,
  [_Id, _AL, _I, _Ex, _DE, _IE, _AOw, _SLA],
  [
    0,
    [() => AccountLevel, 0],
    [() => Include, 0],
    [() => _Exclude, 0],
    [() => StorageLensDataExport, 0],
    2,
    () => StorageLensAwsOrg,
    0,
  ]
);
export var StorageLensDataExport = struct(
  n0,
  _SLDE,
  0,
  [_SBD, _CWM],
  [[() => S3BucketDestination, 0], () => CloudWatchMetrics]
);
export var StorageLensDataExportEncryption = struct(
  n0,
  _SLDEE,
  0,
  [_SSES, _SSEKMS],
  [
    [
      () => SSES3,
      {
        [_xN]: _SS,
      },
    ],
    [
      () => SSEKMS,
      {
        [_xN]: _SK,
      },
    ],
  ]
);
export var StorageLensGroupLevel = struct(n0, _SLGL, 0, [_SCe], [[() => StorageLensGroupLevelSelectionCriteria, 0]]);
export var StorageLensGroupLevelSelectionCriteria = struct(
  n0,
  _SLGLSC,
  0,
  [_I, _Ex],
  [
    [() => StorageLensGroupLevelInclude, 0],
    [() => StorageLensGroupLevelExclude, 0],
  ]
);
export var StorageLensTag = struct(n0, _SLT, 0, [_K, _V], [0, 0]);
export var Buckets = list(n0, _Bu, 0, [
  0,
  {
    [_xN]: _Ar,
  },
]);
export var Regions = list(n0, _Reg, 0, [
  0,
  {
    [_xN]: _Regi,
  },
]);
export var StorageLensConfigurationList = list(n0, _SLCL, 0, [
  () => ListStorageLensConfigurationEntry,
  {
    [_xN]: _SLC,
  },
]);
export var StorageLensGroupLevelExclude = list(n0, _SLGLE, 0, [
  0,
  {
    [_xN]: _Ar,
  },
]);
export var StorageLensGroupLevelInclude = list(n0, _SLGLI, 0, [
  0,
  {
    [_xN]: _Ar,
  },
]);
export var StorageLensTags = list(n0, _SLTt, 0, [
  () => StorageLensTag,
  {
    [_xN]: _Tag,
  },
]);
export var DeleteStorageLensConfiguration = op(
  n0,
  _DSLC,
  {
    [_h]: ["DELETE", "/v20180820/storagelens/{ConfigId}", 200],
  },
  () => DeleteStorageLensConfigurationRequest,
  () => Unit
);
export var DeleteStorageLensConfigurationTagging = op(
  n0,
  _DSLCT,
  {
    [_h]: ["DELETE", "/v20180820/storagelens/{ConfigId}/tagging", 200],
  },
  () => DeleteStorageLensConfigurationTaggingRequest,
  () => DeleteStorageLensConfigurationTaggingResult
);
export var GetStorageLensConfiguration = op(
  n0,
  _GSLC,
  {
    [_h]: ["GET", "/v20180820/storagelens/{ConfigId}", 200],
  },
  () => GetStorageLensConfigurationRequest,
  () => GetStorageLensConfigurationResult
);
export var GetStorageLensConfigurationTagging = op(
  n0,
  _GSLCT,
  {
    [_h]: ["GET", "/v20180820/storagelens/{ConfigId}/tagging", 200],
  },
  () => GetStorageLensConfigurationTaggingRequest,
  () => GetStorageLensConfigurationTaggingResult
);
export var ListStorageLensConfigurations = op(
  n0,
  _LSLC,
  {
    [_h]: ["GET", "/v20180820/storagelens", 200],
  },
  () => ListStorageLensConfigurationsRequest,
  () => ListStorageLensConfigurationsResult
);
export var PutStorageLensConfiguration = op(
  n0,
  _PSLC,
  {
    [_h]: ["PUT", "/v20180820/storagelens/{ConfigId}", 200],
  },
  () => PutStorageLensConfigurationRequest,
  () => Unit
);
export var PutStorageLensConfigurationTagging = op(
  n0,
  _PSLCT,
  {
    [_h]: ["PUT", "/v20180820/storagelens/{ConfigId}/tagging", 200],
  },
  () => PutStorageLensConfigurationTaggingRequest,
  () => PutStorageLensConfigurationTaggingResult
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CDCL,
  _CDCSP,
  _CDCST,
  _CDCSTt,
  _CDM,
  _CDMM,
  _CDMR,
  _CLE,
  _DDM,
  _DDMe,
  _DDMM,
  _DDMMe,
  _DDMR,
  _DDMRe,
  _DM,
  _DMA,
  _DMa,
  _DMCB,
  _DMCT,
  _DMET,
  _DMI,
  _DMN,
  _DMS,
  _DMSa,
  _DMSat,
  _DMST,
  _DMT,
  _ECL,
  _ETM,
  _F,
  _FLP,
  _LFM,
  _Ma,
  _MDM,
  _MDMM,
  _MDMR,
  _MPA,
  _MPI,
  _MR,
  _NOJ,
  _PIA,
  _PIAL,
  _SARA,
  _SDM,
  _SDMM,
  _SDMMt,
  _SDMR,
  _SDMRt,
  _SDMt,
  _SDS,
  _SDSo,
  _SNl,
  _SR,
  _SRt,
  _STt,
  _STta,
  _STto,
  _T,
  _TDS,
  _TDSa,
  _TE,
  _TL,
  _TLa,
  _TPM,
  _TQ,
  _WS,
  _WSi,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";
import { SecretString } from "./schemas_46_Data";

/* eslint no-var: 0 */

export var CreateDataMigrationMessage = struct(
  n0,
  _CDMM,
  0,
  [_DMN, _MPI, _DMT, _SARA, _ECL, _SDS, _TDS, _NOJ, _T, _SR],
  [0, 0, 0, 0, 2, () => SourceDataSettings, () => TargetDataSettings, 1, [() => TagList, 0], [() => SecretString, 0]]
);
export var CreateDataMigrationResponse = struct(n0, _CDMR, 0, [_DM], [[() => DataMigration, 0]]);
export var DataMigration = struct(
  n0,
  _DM,
  0,
  [_DMN, _DMA, _DMCT, _DMST, _DMET, _SARA, _MPA, _DMT, _DMS, _SDS, _TDS, _DMSa, _DMSat, _PIA, _DMCB, _LFM, _SRt],
  [
    0,
    0,
    5,
    5,
    5,
    0,
    0,
    0,
    [() => DataMigrationSettings, 0],
    () => SourceDataSettings,
    () => TargetDataSettings,
    () => DataMigrationStatistics,
    0,
    [() => PublicIpAddressList, 0],
    64 | 0,
    0,
    0,
  ]
);
export var DataMigrationSettings = struct(n0, _DMS, 0, [_NOJ, _CLE, _SR], [1, 2, [() => SecretString, 0]]);
export var DataMigrationStatistics = struct(
  n0,
  _DMSa,
  0,
  [_TL, _ETM, _TLa, _FLP, _CDCL, _TQ, _TE, _STt, _STto],
  [1, 1, 1, 1, 1, 1, 1, 5, 5]
);
export var DeleteDataMigrationMessage = struct(n0, _DDMM, 0, [_DMI], [0]);
export var DeleteDataMigrationResponse = struct(n0, _DDMR, 0, [_DM], [[() => DataMigration, 0]]);
export var DescribeDataMigrationsMessage = struct(
  n0,
  _DDMMe,
  0,
  [_F, _MR, _Ma, _WS, _WSi],
  [[() => FilterList, 0], 1, 0, 2, 2]
);
export var DescribeDataMigrationsResponse = struct(n0, _DDMRe, 0, [_DMa, _Ma], [[() => DataMigrations, 0], 0]);
export var ModifyDataMigrationMessage = struct(
  n0,
  _MDMM,
  0,
  [_DMI, _DMN, _ECL, _SARA, _DMT, _SDS, _TDS, _NOJ, _SR],
  [0, 0, 2, 0, 0, () => SourceDataSettings, () => TargetDataSettings, 1, [() => SecretString, 0]]
);
export var ModifyDataMigrationResponse = struct(n0, _MDMR, 0, [_DM], [[() => DataMigration, 0]]);
export var SourceDataSetting = struct(n0, _SDSo, 0, [_CDCSP, _CDCST, _CDCSTt, _SNl], [0, 5, 5, 0]);
export var StartDataMigrationMessage = struct(n0, _SDMM, 0, [_DMI, _STta], [0, 0]);
export var StartDataMigrationResponse = struct(n0, _SDMR, 0, [_DM], [[() => DataMigration, 0]]);
export var StopDataMigrationMessage = struct(n0, _SDMMt, 0, [_DMI], [0]);
export var StopDataMigrationResponse = struct(n0, _SDMRt, 0, [_DM], [[() => DataMigration, 0]]);
export var TargetDataSetting = struct(n0, _TDSa, 0, [_TPM], [0]);
export var DataMigrationCidrBlock = 64 | 0;

export var DataMigrations = list(n0, _DMa, 0, [() => DataMigration, 0]);
export var PublicIpAddressList = list(n0, _PIAL, 8, 0);
export var SourceDataSettings = list(n0, _SDS, 0, () => SourceDataSetting);
export var TargetDataSettings = list(n0, _TDS, 0, () => TargetDataSetting);
export var CreateDataMigration = op(
  n0,
  _CDM,
  0,
  () => CreateDataMigrationMessage,
  () => CreateDataMigrationResponse
);
export var DeleteDataMigration = op(
  n0,
  _DDM,
  0,
  () => DeleteDataMigrationMessage,
  () => DeleteDataMigrationResponse
);
export var DescribeDataMigrations = op(
  n0,
  _DDMe,
  0,
  () => DescribeDataMigrationsMessage,
  () => DescribeDataMigrationsResponse
);
export var ModifyDataMigration = op(
  n0,
  _MDM,
  0,
  () => ModifyDataMigrationMessage,
  () => ModifyDataMigrationResponse
);
export var StartDataMigration = op(
  n0,
  _SDM,
  0,
  () => StartDataMigrationMessage,
  () => StartDataMigrationResponse
);
export var StopDataMigration = op(
  n0,
  _SDMt,
  0,
  () => StopDataMigrationMessage,
  () => StopDataMigrationResponse
);

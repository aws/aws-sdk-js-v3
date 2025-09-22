// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  GlobalTableAlreadyExistsException as __GlobalTableAlreadyExistsException,
  InvalidRestoreTimeException as __InvalidRestoreTimeException,
  ReplicaAlreadyExistsException as __ReplicaAlreadyExistsException,
  TableAlreadyExistsException as __TableAlreadyExistsException,
} from "../models/index";
import {
  _ABA,
  _ADT,
  _ADt,
  _AR,
  _AS,
  _B,
  _BA,
  _BM,
  _BMO,
  _BMS,
  _c,
  _CDT,
  _CGSIA,
  _CGT,
  _CGTI,
  _CGTO,
  _CGTWGMA,
  _Cr,
  _CRA,
  _CRGMA,
  _CTI,
  _CTO,
  _CTr,
  _De,
  _DGSIA,
  _DGT,
  _DGTI,
  _DGTO,
  _DGTWGMA,
  _DPE,
  _DRA,
  _DRGMA,
  _DT,
  _DTe,
  _DTI,
  _DTIe,
  _DTO,
  _DTOe,
  _DTRAS,
  _DTRASI,
  _DTRASO,
  _e,
  _GSI,
  _GSIASU,
  _GSIASUL,
  _GSID,
  _GSIDL,
  _GSIO,
  _GSIU,
  _GSIUL,
  _GSIUl,
  _GSIWTD,
  _GTA,
  _GTAEE,
  _GTD,
  _GTN,
  _GTS,
  _GTV,
  _GTW,
  _GTWD,
  _GTWDL,
  _GTWGU,
  _GTWGUL,
  _GTWU,
  _IAn,
  _IC,
  _IN,
  _IRTE,
  _IS,
  _ISB,
  _KMSMKI,
  _KS,
  _LDDT,
  _LIDT,
  _LSA,
  _LSI,
  _LSID,
  _LSIDL,
  _LSIL,
  _LSIO,
  _LSIo,
  _LSL,
  _m,
  _MRC,
  _MRRU,
  _NODT,
  _ODT,
  _ODTO,
  _Pr,
  _PRCASS,
  _PRCASU,
  _PT,
  _PTD,
  _PTO,
  _PWCASS,
  _PWCASU,
  _RAEE,
  _RASD,
  _RASDL,
  _RASU,
  _RASUL,
  _RCU,
  _RD,
  _RDL,
  _RDT,
  _Rep,
  _RG,
  _RGSI,
  _RGSIASD,
  _RGSIASDL,
  _RGSIASU,
  _RGSIASUL,
  _RGSID,
  _RGSIDL,
  _RGSIL,
  _RGSIU,
  _RGU,
  _RGUL,
  _RIDT,
  _RIP,
  _RN,
  _RP,
  _RPRCASS,
  _RPRCASU,
  _RPWCASS,
  _RSD,
  _RSe,
  _RSes,
  _RSPP,
  _RTCS,
  _RTFB,
  _RTFBI,
  _RTFBO,
  _RTTPIT,
  _RTTPITI,
  _RTTPITO,
  _RU,
  _RUe,
  _RUL,
  _RUPS,
  _SBA,
  _SS,
  _SSED,
  _SSES,
  _SSESO,
  _STA,
  _Sta,
  _STN,
  _T,
  _TA,
  _Ta,
  _TAEE,
  _TASD,
  _TC,
  _TCO,
  _TCS,
  _TD,
  _TI,
  _TN,
  _TSa,
  _TSB,
  _TTN,
  _TWTD,
  _U,
  _UGSIA,
  _UGT,
  _UGTI,
  _UGTO,
  _ULRT,
  _URGMA,
  _UT,
  _UTI,
  _UTO,
  _UTRAS,
  _UTRASI,
  _UTRASO,
  _WCU,
  _WS,
  _WT,
  _WUPS,
  n0,
} from "./schemas_0";
import {
  KeySchema,
  OnDemandThroughput,
  Projection,
  ProvisionedThroughput,
  SSEDescription,
  StreamSpecification,
} from "./schemas_1_Table";
import { AutoScalingSettingsDescription, AutoScalingSettingsUpdate } from "./schemas_3_Table";
import { BillingModeSummary, TableClassSummary } from "./schemas_10_Table";
import { AttributeDefinitions, GlobalSecondaryIndexList, SSESpecification, WarmThroughput } from "./schemas_13_Table";
import { TagList } from "./schemas_24_Resource";
import { ReplicaList } from "./schemas_25_Global";

/* eslint no-var: 0 */

export var ArchivalSummary = struct(n0, _AS, 0, [_ADT, _AR, _ABA], [4, 0, 0]);
export var CreateGlobalSecondaryIndexAction = struct(
  n0,
  _CGSIA,
  0,
  [_IN, _KS, _Pr, _PT, _ODT, _WT],
  [0, () => KeySchema, () => Projection, () => ProvisionedThroughput, () => OnDemandThroughput, () => WarmThroughput]
);
export var CreateGlobalTableInput = struct(n0, _CGTI, 0, [_GTN, _RG], [0, () => ReplicaList]);
export var CreateGlobalTableOutput = struct(n0, _CGTO, 0, [_GTD], [() => GlobalTableDescription]);
export var CreateGlobalTableWitnessGroupMemberAction = struct(n0, _CGTWGMA, 0, [_RN], [0]);
export var CreateReplicaAction = struct(n0, _CRA, 0, [_RN], [0]);
export var CreateReplicationGroupMemberAction = struct(
  n0,
  _CRGMA,
  0,
  [_RN, _KMSMKI, _PTO, _ODTO, _GSI, _TCO],
  [
    0,
    0,
    () => ProvisionedThroughputOverride,
    () => OnDemandThroughputOverride,
    () => ReplicaGlobalSecondaryIndexList,
    0,
  ]
);
export var CreateTableInput = struct(
  n0,
  _CTI,
  0,
  [_ADt, _TN, _KS, _LSI, _GSI, _BM, _PT, _SS, _SSES, _Ta, _TC, _DPE, _WT, _RP, _ODT],
  [
    () => AttributeDefinitions,
    0,
    () => KeySchema,
    () => LocalSecondaryIndexList,
    () => GlobalSecondaryIndexList,
    0,
    () => ProvisionedThroughput,
    () => StreamSpecification,
    () => SSESpecification,
    () => TagList,
    0,
    2,
    () => WarmThroughput,
    0,
    () => OnDemandThroughput,
  ]
);
export var CreateTableOutput = struct(n0, _CTO, 0, [_TD], [() => TableDescription]);
export var DeleteGlobalSecondaryIndexAction = struct(n0, _DGSIA, 0, [_IN], [0]);
export var DeleteGlobalTableWitnessGroupMemberAction = struct(n0, _DGTWGMA, 0, [_RN], [0]);
export var DeleteReplicaAction = struct(n0, _DRA, 0, [_RN], [0]);
export var DeleteReplicationGroupMemberAction = struct(n0, _DRGMA, 0, [_RN], [0]);
export var DeleteTableInput = struct(n0, _DTI, 0, [_TN], [0]);
export var DeleteTableOutput = struct(n0, _DTO, 0, [_TD], [() => TableDescription]);
export var DescribeGlobalTableInput = struct(n0, _DGTI, 0, [_GTN], [0]);
export var DescribeGlobalTableOutput = struct(n0, _DGTO, 0, [_GTD], [() => GlobalTableDescription]);
export var DescribeTableInput = struct(n0, _DTIe, 0, [_TN], [0]);
export var DescribeTableOutput = struct(n0, _DTOe, 0, [_T], [() => TableDescription]);
export var DescribeTableReplicaAutoScalingInput = struct(n0, _DTRASI, 0, [_TN], [0]);
export var DescribeTableReplicaAutoScalingOutput = struct(n0, _DTRASO, 0, [_TASD], [() => TableAutoScalingDescription]);
export var GlobalSecondaryIndexAutoScalingUpdate = struct(
  n0,
  _GSIASU,
  0,
  [_IN, _PWCASU],
  [0, () => AutoScalingSettingsUpdate]
);
export var GlobalSecondaryIndexDescription = struct(
  n0,
  _GSID,
  0,
  [_IN, _KS, _Pr, _IS, _B, _PT, _ISB, _IC, _IAn, _ODT, _WT],
  [
    0,
    () => KeySchema,
    () => Projection,
    0,
    2,
    () => ProvisionedThroughputDescription,
    1,
    1,
    0,
    () => OnDemandThroughput,
    () => GlobalSecondaryIndexWarmThroughputDescription,
  ]
);
export var GlobalSecondaryIndexUpdate = struct(
  n0,
  _GSIU,
  0,
  [_U, _Cr, _De],
  [
    () => UpdateGlobalSecondaryIndexAction,
    () => CreateGlobalSecondaryIndexAction,
    () => DeleteGlobalSecondaryIndexAction,
  ]
);
export var GlobalSecondaryIndexWarmThroughputDescription = struct(n0, _GSIWTD, 0, [_RUPS, _WUPS, _Sta], [1, 1, 0]);
export var GlobalTableAlreadyExistsException = error(
  n0,
  _GTAEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __GlobalTableAlreadyExistsException
);
export var GlobalTableDescription = struct(
  n0,
  _GTD,
  0,
  [_RG, _GTA, _CDT, _GTS, _GTN],
  [() => ReplicaDescriptionList, 0, 4, 0, 0]
);
export var GlobalTableWitnessDescription = struct(n0, _GTWD, 0, [_RN, _WS], [0, 0]);
export var GlobalTableWitnessGroupUpdate = struct(
  n0,
  _GTWGU,
  0,
  [_Cr, _De],
  [() => CreateGlobalTableWitnessGroupMemberAction, () => DeleteGlobalTableWitnessGroupMemberAction]
);
export var InvalidRestoreTimeException = error(
  n0,
  _IRTE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidRestoreTimeException
);
export var LocalSecondaryIndex = struct(n0, _LSIo, 0, [_IN, _KS, _Pr], [0, () => KeySchema, () => Projection]);
export var LocalSecondaryIndexDescription = struct(
  n0,
  _LSID,
  0,
  [_IN, _KS, _Pr, _ISB, _IC, _IAn],
  [0, () => KeySchema, () => Projection, 1, 1, 0]
);
export var OnDemandThroughputOverride = struct(n0, _ODTO, 0, [_MRRU], [1]);
export var ProvisionedThroughputDescription = struct(n0, _PTD, 0, [_LIDT, _LDDT, _NODT, _RCU, _WCU], [4, 4, 1, 1, 1]);
export var ProvisionedThroughputOverride = struct(n0, _PTO, 0, [_RCU], [1]);
export var ReplicaAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ReplicaAlreadyExistsException
);
export var ReplicaAutoScalingDescription = struct(
  n0,
  _RASD,
  0,
  [_RN, _GSI, _RPRCASS, _RPWCASS, _RSe],
  [
    0,
    () => ReplicaGlobalSecondaryIndexAutoScalingDescriptionList,
    () => AutoScalingSettingsDescription,
    () => AutoScalingSettingsDescription,
    0,
  ]
);
export var ReplicaAutoScalingUpdate = struct(
  n0,
  _RASU,
  0,
  [_RN, _RGSIU, _RPRCASU],
  [0, () => ReplicaGlobalSecondaryIndexAutoScalingUpdateList, () => AutoScalingSettingsUpdate]
);
export var ReplicaDescription = struct(
  n0,
  _RD,
  0,
  [_RN, _RSe, _RSD, _RSPP, _KMSMKI, _PTO, _ODTO, _WT, _GSI, _RIDT, _RTCS],
  [
    0,
    0,
    0,
    0,
    0,
    () => ProvisionedThroughputOverride,
    () => OnDemandThroughputOverride,
    () => TableWarmThroughputDescription,
    () => ReplicaGlobalSecondaryIndexDescriptionList,
    4,
    () => TableClassSummary,
  ]
);
export var ReplicaGlobalSecondaryIndex = struct(
  n0,
  _RGSI,
  0,
  [_IN, _PTO, _ODTO],
  [0, () => ProvisionedThroughputOverride, () => OnDemandThroughputOverride]
);
export var ReplicaGlobalSecondaryIndexAutoScalingDescription = struct(
  n0,
  _RGSIASD,
  0,
  [_IN, _IS, _PRCASS, _PWCASS],
  [0, 0, () => AutoScalingSettingsDescription, () => AutoScalingSettingsDescription]
);
export var ReplicaGlobalSecondaryIndexAutoScalingUpdate = struct(
  n0,
  _RGSIASU,
  0,
  [_IN, _PRCASU],
  [0, () => AutoScalingSettingsUpdate]
);
export var ReplicaGlobalSecondaryIndexDescription = struct(
  n0,
  _RGSID,
  0,
  [_IN, _PTO, _ODTO, _WT],
  [
    0,
    () => ProvisionedThroughputOverride,
    () => OnDemandThroughputOverride,
    () => GlobalSecondaryIndexWarmThroughputDescription,
  ]
);
export var ReplicationGroupUpdate = struct(
  n0,
  _RGU,
  0,
  [_Cr, _U, _De],
  [
    () => CreateReplicationGroupMemberAction,
    () => UpdateReplicationGroupMemberAction,
    () => DeleteReplicationGroupMemberAction,
  ]
);
export var ReplicaUpdate = struct(n0, _RU, 0, [_Cr, _De], [() => CreateReplicaAction, () => DeleteReplicaAction]);
export var RestoreSummary = struct(n0, _RSes, 0, [_SBA, _STA, _RDT, _RIP], [0, 0, 4, 2]);
export var RestoreTableFromBackupInput = struct(
  n0,
  _RTFBI,
  0,
  [_TTN, _BA, _BMO, _GSIO, _LSIO, _PTO, _ODTO, _SSESO],
  [
    0,
    0,
    0,
    () => GlobalSecondaryIndexList,
    () => LocalSecondaryIndexList,
    () => ProvisionedThroughput,
    () => OnDemandThroughput,
    () => SSESpecification,
  ]
);
export var RestoreTableFromBackupOutput = struct(n0, _RTFBO, 0, [_TD], [() => TableDescription]);
export var RestoreTableToPointInTimeInput = struct(
  n0,
  _RTTPITI,
  0,
  [_STA, _STN, _TTN, _ULRT, _RDT, _BMO, _GSIO, _LSIO, _PTO, _ODTO, _SSESO],
  [
    0,
    0,
    0,
    2,
    4,
    0,
    () => GlobalSecondaryIndexList,
    () => LocalSecondaryIndexList,
    () => ProvisionedThroughput,
    () => OnDemandThroughput,
    () => SSESpecification,
  ]
);
export var RestoreTableToPointInTimeOutput = struct(n0, _RTTPITO, 0, [_TD], [() => TableDescription]);
export var TableAlreadyExistsException = error(
  n0,
  _TAEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TableAlreadyExistsException
);
export var TableAutoScalingDescription = struct(
  n0,
  _TASD,
  0,
  [_TN, _TSa, _Rep],
  [0, 0, () => ReplicaAutoScalingDescriptionList]
);
export var TableDescription = struct(
  n0,
  _TD,
  0,
  [
    _ADt,
    _TN,
    _KS,
    _TSa,
    _CDT,
    _PT,
    _TSB,
    _IC,
    _TA,
    _TI,
    _BMS,
    _LSI,
    _GSI,
    _SS,
    _LSL,
    _LSA,
    _GTV,
    _Rep,
    _GTW,
    _RSes,
    _SSED,
    _AS,
    _TCS,
    _DPE,
    _ODT,
    _WT,
    _MRC,
  ],
  [
    () => AttributeDefinitions,
    0,
    () => KeySchema,
    0,
    4,
    () => ProvisionedThroughputDescription,
    1,
    1,
    0,
    0,
    () => BillingModeSummary,
    () => LocalSecondaryIndexDescriptionList,
    () => GlobalSecondaryIndexDescriptionList,
    () => StreamSpecification,
    0,
    0,
    0,
    () => ReplicaDescriptionList,
    () => GlobalTableWitnessDescriptionList,
    () => RestoreSummary,
    () => SSEDescription,
    () => ArchivalSummary,
    () => TableClassSummary,
    2,
    () => OnDemandThroughput,
    () => TableWarmThroughputDescription,
    0,
  ]
);
export var TableWarmThroughputDescription = struct(n0, _TWTD, 0, [_RUPS, _WUPS, _Sta], [1, 1, 0]);
export var UpdateGlobalSecondaryIndexAction = struct(
  n0,
  _UGSIA,
  0,
  [_IN, _PT, _ODT, _WT],
  [0, () => ProvisionedThroughput, () => OnDemandThroughput, () => WarmThroughput]
);
export var UpdateGlobalTableInput = struct(n0, _UGTI, 0, [_GTN, _RUe], [0, () => ReplicaUpdateList]);
export var UpdateGlobalTableOutput = struct(n0, _UGTO, 0, [_GTD], [() => GlobalTableDescription]);
export var UpdateReplicationGroupMemberAction = struct(
  n0,
  _URGMA,
  0,
  [_RN, _KMSMKI, _PTO, _ODTO, _GSI, _TCO],
  [
    0,
    0,
    () => ProvisionedThroughputOverride,
    () => OnDemandThroughputOverride,
    () => ReplicaGlobalSecondaryIndexList,
    0,
  ]
);
export var UpdateTableInput = struct(
  n0,
  _UTI,
  0,
  [_ADt, _TN, _BM, _PT, _GSIUl, _SS, _SSES, _RUe, _TC, _DPE, _MRC, _GTWU, _ODT, _WT],
  [
    () => AttributeDefinitions,
    0,
    0,
    () => ProvisionedThroughput,
    () => GlobalSecondaryIndexUpdateList,
    () => StreamSpecification,
    () => SSESpecification,
    () => ReplicationGroupUpdateList,
    0,
    2,
    0,
    () => GlobalTableWitnessGroupUpdateList,
    () => OnDemandThroughput,
    () => WarmThroughput,
  ]
);
export var UpdateTableOutput = struct(n0, _UTO, 0, [_TD], [() => TableDescription]);
export var UpdateTableReplicaAutoScalingInput = struct(
  n0,
  _UTRASI,
  0,
  [_GSIUl, _TN, _PWCASU, _RUe],
  [
    () => GlobalSecondaryIndexAutoScalingUpdateList,
    0,
    () => AutoScalingSettingsUpdate,
    () => ReplicaAutoScalingUpdateList,
  ]
);
export var UpdateTableReplicaAutoScalingOutput = struct(n0, _UTRASO, 0, [_TASD], [() => TableAutoScalingDescription]);
export var GlobalSecondaryIndexAutoScalingUpdateList = list(
  n0,
  _GSIASUL,
  0,
  () => GlobalSecondaryIndexAutoScalingUpdate
);
export var GlobalSecondaryIndexDescriptionList = list(n0, _GSIDL, 0, () => GlobalSecondaryIndexDescription);
export var GlobalSecondaryIndexUpdateList = list(n0, _GSIUL, 0, () => GlobalSecondaryIndexUpdate);
export var GlobalTableWitnessDescriptionList = list(n0, _GTWDL, 0, () => GlobalTableWitnessDescription);
export var GlobalTableWitnessGroupUpdateList = list(n0, _GTWGUL, 0, () => GlobalTableWitnessGroupUpdate);
export var LocalSecondaryIndexDescriptionList = list(n0, _LSIDL, 0, () => LocalSecondaryIndexDescription);
export var LocalSecondaryIndexList = list(n0, _LSIL, 0, () => LocalSecondaryIndex);
export var ReplicaAutoScalingDescriptionList = list(n0, _RASDL, 0, () => ReplicaAutoScalingDescription);
export var ReplicaAutoScalingUpdateList = list(n0, _RASUL, 0, () => ReplicaAutoScalingUpdate);
export var ReplicaDescriptionList = list(n0, _RDL, 0, () => ReplicaDescription);
export var ReplicaGlobalSecondaryIndexAutoScalingDescriptionList = list(
  n0,
  _RGSIASDL,
  0,
  () => ReplicaGlobalSecondaryIndexAutoScalingDescription
);
export var ReplicaGlobalSecondaryIndexAutoScalingUpdateList = list(
  n0,
  _RGSIASUL,
  0,
  () => ReplicaGlobalSecondaryIndexAutoScalingUpdate
);
export var ReplicaGlobalSecondaryIndexDescriptionList = list(
  n0,
  _RGSIDL,
  0,
  () => ReplicaGlobalSecondaryIndexDescription
);
export var ReplicaGlobalSecondaryIndexList = list(n0, _RGSIL, 0, () => ReplicaGlobalSecondaryIndex);
export var ReplicationGroupUpdateList = list(n0, _RGUL, 0, () => ReplicationGroupUpdate);
export var ReplicaUpdateList = list(n0, _RUL, 0, () => ReplicaUpdate);
export var CreateGlobalTable = op(
  n0,
  _CGT,
  0,
  () => CreateGlobalTableInput,
  () => CreateGlobalTableOutput
);
export var CreateTable = op(
  n0,
  _CTr,
  0,
  () => CreateTableInput,
  () => CreateTableOutput
);
export var DeleteTable = op(
  n0,
  _DT,
  0,
  () => DeleteTableInput,
  () => DeleteTableOutput
);
export var DescribeGlobalTable = op(
  n0,
  _DGT,
  0,
  () => DescribeGlobalTableInput,
  () => DescribeGlobalTableOutput
);
export var DescribeTable = op(
  n0,
  _DTe,
  0,
  () => DescribeTableInput,
  () => DescribeTableOutput
);
export var DescribeTableReplicaAutoScaling = op(
  n0,
  _DTRAS,
  0,
  () => DescribeTableReplicaAutoScalingInput,
  () => DescribeTableReplicaAutoScalingOutput
);
export var RestoreTableFromBackup = op(
  n0,
  _RTFB,
  0,
  () => RestoreTableFromBackupInput,
  () => RestoreTableFromBackupOutput
);
export var RestoreTableToPointInTime = op(
  n0,
  _RTTPIT,
  0,
  () => RestoreTableToPointInTimeInput,
  () => RestoreTableToPointInTimeOutput
);
export var UpdateGlobalTable = op(
  n0,
  _UGT,
  0,
  () => UpdateGlobalTableInput,
  () => UpdateGlobalTableOutput
);
export var UpdateTable = op(
  n0,
  _UT,
  0,
  () => UpdateTableInput,
  () => UpdateTableOutput
);
export var UpdateTableReplicaAutoScaling = op(
  n0,
  _UTRAS,
  0,
  () => UpdateTableReplicaAutoScalingInput,
  () => UpdateTableReplicaAutoScalingOutput
);

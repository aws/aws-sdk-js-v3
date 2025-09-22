// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  GlobalTableNotFoundException as __GlobalTableNotFoundException,
  IndexNotFoundException as __IndexNotFoundException,
  ReplicaNotFoundException as __ReplicaNotFoundException,
} from "../models/index";
import {
  _BM,
  _BMS,
  _c,
  _DGTS,
  _DGTSI,
  _DGTSO,
  _e,
  _GTBM,
  _GTGSISU,
  _GTGSISUL,
  _GTN,
  _GTNFE,
  _GTPWCASSU,
  _GTPWCU,
  _IN,
  _INFEn,
  _IS,
  _LUDT,
  _LUTPPRDT,
  _m,
  _PRCASS,
  _PRCASSU,
  _PRCU,
  _PWCASS,
  _PWCASSU,
  _PWCU,
  _RBMS,
  _RGSIS,
  _RGSISD,
  _RGSISDL,
  _RGSISU,
  _RGSISUL,
  _RN,
  _RNFE,
  _RPRCASS,
  _RPRCASSU,
  _RPRCU,
  _RPWCASS,
  _RPWCU,
  _RS,
  _RSDe,
  _RSDL,
  _RSe,
  _RSU,
  _RSUL,
  _RTC,
  _RTCS,
  _TC,
  _TCS,
  _UGTS,
  _UGTSI,
  _UGTSO,
  n0,
} from "./schemas_0";
import { AutoScalingSettingsDescription, AutoScalingSettingsUpdate } from "./schemas_3_Table";

/* eslint no-var: 0 */

export var BillingModeSummary = struct(n0, _BMS, 0, [_BM, _LUTPPRDT], [0, 4]);
export var DescribeGlobalTableSettingsInput = struct(n0, _DGTSI, 0, [_GTN], [0]);
export var DescribeGlobalTableSettingsOutput = struct(
  n0,
  _DGTSO,
  0,
  [_GTN, _RS],
  [0, () => ReplicaSettingsDescriptionList]
);
export var GlobalTableGlobalSecondaryIndexSettingsUpdate = struct(
  n0,
  _GTGSISU,
  0,
  [_IN, _PWCU, _PWCASSU],
  [0, 1, () => AutoScalingSettingsUpdate]
);
export var GlobalTableNotFoundException = error(
  n0,
  _GTNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __GlobalTableNotFoundException
);
export var IndexNotFoundException = error(
  n0,
  _INFEn,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __IndexNotFoundException
);
export var ReplicaGlobalSecondaryIndexSettingsDescription = struct(
  n0,
  _RGSISD,
  0,
  [_IN, _IS, _PRCU, _PRCASS, _PWCU, _PWCASS],
  [0, 0, 1, () => AutoScalingSettingsDescription, 1, () => AutoScalingSettingsDescription]
);
export var ReplicaGlobalSecondaryIndexSettingsUpdate = struct(
  n0,
  _RGSISU,
  0,
  [_IN, _PRCU, _PRCASSU],
  [0, 1, () => AutoScalingSettingsUpdate]
);
export var ReplicaNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ReplicaNotFoundException
);
export var ReplicaSettingsDescription = struct(
  n0,
  _RSDe,
  0,
  [_RN, _RSe, _RBMS, _RPRCU, _RPRCASS, _RPWCU, _RPWCASS, _RGSIS, _RTCS],
  [
    0,
    0,
    () => BillingModeSummary,
    1,
    () => AutoScalingSettingsDescription,
    1,
    () => AutoScalingSettingsDescription,
    () => ReplicaGlobalSecondaryIndexSettingsDescriptionList,
    () => TableClassSummary,
  ]
);
export var ReplicaSettingsUpdate = struct(
  n0,
  _RSU,
  0,
  [_RN, _RPRCU, _RPRCASSU, _RGSISU, _RTC],
  [0, 1, () => AutoScalingSettingsUpdate, () => ReplicaGlobalSecondaryIndexSettingsUpdateList, 0]
);
export var TableClassSummary = struct(n0, _TCS, 0, [_TC, _LUDT], [0, 4]);
export var UpdateGlobalTableSettingsInput = struct(
  n0,
  _UGTSI,
  0,
  [_GTN, _GTBM, _GTPWCU, _GTPWCASSU, _GTGSISU, _RSU],
  [
    0,
    0,
    1,
    () => AutoScalingSettingsUpdate,
    () => GlobalTableGlobalSecondaryIndexSettingsUpdateList,
    () => ReplicaSettingsUpdateList,
  ]
);
export var UpdateGlobalTableSettingsOutput = struct(
  n0,
  _UGTSO,
  0,
  [_GTN, _RS],
  [0, () => ReplicaSettingsDescriptionList]
);
export var GlobalTableGlobalSecondaryIndexSettingsUpdateList = list(
  n0,
  _GTGSISUL,
  0,
  () => GlobalTableGlobalSecondaryIndexSettingsUpdate
);
export var ReplicaGlobalSecondaryIndexSettingsDescriptionList = list(
  n0,
  _RGSISDL,
  0,
  () => ReplicaGlobalSecondaryIndexSettingsDescription
);
export var ReplicaGlobalSecondaryIndexSettingsUpdateList = list(
  n0,
  _RGSISUL,
  0,
  () => ReplicaGlobalSecondaryIndexSettingsUpdate
);
export var ReplicaSettingsDescriptionList = list(n0, _RSDL, 0, () => ReplicaSettingsDescription);
export var ReplicaSettingsUpdateList = list(n0, _RSUL, 0, () => ReplicaSettingsUpdate);
export var DescribeGlobalTableSettings = op(
  n0,
  _DGTS,
  0,
  () => DescribeGlobalTableSettingsInput,
  () => DescribeGlobalTableSettingsOutput
);
export var UpdateGlobalTableSettings = op(
  n0,
  _UGTS,
  0,
  () => UpdateGlobalTableSettingsInput,
  () => UpdateGlobalTableSettingsOutput
);

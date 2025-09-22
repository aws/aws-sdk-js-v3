// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidGlobalReplicationGroupStateFault as __InvalidGlobalReplicationGroupStateFault } from "../models/index";
import {
  _AFE,
  _AI,
  _aQE,
  _c,
  _CNT,
  _CPGN,
  _CPGNM,
  _DGRG,
  _DGRGi,
  _DGRGM,
  _DGRGMi,
  _DGRGR,
  _DGRGRi,
  _DNGIGRG,
  _DNGIGRGM,
  _DNGIGRGR,
  _E,
  _e,
  _EV,
  _FGRG,
  _FGRGM,
  _FGRGR,
  _GNGI,
  _GNGIL,
  _GNGTR,
  _GNGTRl,
  _GRG,
  _GRGD,
  _GRGI,
  _hE,
  _IGRGSF,
  _INGIGRG,
  _INGIGRGM,
  _INGIGRGR,
  _m,
  _MCPG,
  _MCPGM,
  _MGRG,
  _MGRGM,
  _MGRGR,
  _NGCo,
  _PN,
  _PNV,
  _PNVa,
  _PNVL,
  _PR,
  _PRGI,
  _PV,
  _RAP,
  _RCe,
  _RCeg,
  _RCes,
  _RCLe,
  _RCPG,
  _RCPGM,
  _RGIe,
  _RGR,
  _RPRG,
  _RSIGRG,
  _RSIGRGM,
  _RSIGRGR,
  _xN,
  n0,
} from "./schemas_0";
import { ReshardingConfigurationList } from "./schemas_17_Snapshot";
import { GlobalReplicationGroup } from "./schemas_29_Global";

/* eslint no-var: 0 */

export var CacheParameterGroupNameMessage = struct(n0, _CPGNM, 0, [_CPGN], [0]);
export var DecreaseNodeGroupsInGlobalReplicationGroupMessage = struct(
  n0,
  _DNGIGRGM,
  0,
  [_GRGI, _NGCo, _GNGTR, _GNGTRl, _AI],
  [0, 1, [() => GlobalNodeGroupIdList, 0], [() => GlobalNodeGroupIdList, 0], 2]
);
export var DecreaseNodeGroupsInGlobalReplicationGroupResult = struct(
  n0,
  _DNGIGRGR,
  0,
  [_GRG],
  [[() => GlobalReplicationGroup, 0]]
);
export var DeleteGlobalReplicationGroupMessage = struct(n0, _DGRGM, 0, [_GRGI, _RPRG], [0, 2]);
export var DeleteGlobalReplicationGroupResult = struct(n0, _DGRGR, 0, [_GRG], [[() => GlobalReplicationGroup, 0]]);
export var DisassociateGlobalReplicationGroupMessage = struct(n0, _DGRGMi, 0, [_GRGI, _RGIe, _RGR], [0, 0, 0]);
export var DisassociateGlobalReplicationGroupResult = struct(
  n0,
  _DGRGRi,
  0,
  [_GRG],
  [[() => GlobalReplicationGroup, 0]]
);
export var FailoverGlobalReplicationGroupMessage = struct(n0, _FGRGM, 0, [_GRGI, _PR, _PRGI], [0, 0, 0]);
export var FailoverGlobalReplicationGroupResult = struct(n0, _FGRGR, 0, [_GRG], [[() => GlobalReplicationGroup, 0]]);
export var IncreaseNodeGroupsInGlobalReplicationGroupMessage = struct(
  n0,
  _INGIGRGM,
  0,
  [_GRGI, _NGCo, _RCe, _AI],
  [0, 1, [() => RegionalConfigurationList, 0], 2]
);
export var IncreaseNodeGroupsInGlobalReplicationGroupResult = struct(
  n0,
  _INGIGRGR,
  0,
  [_GRG],
  [[() => GlobalReplicationGroup, 0]]
);
export var InvalidGlobalReplicationGroupStateFault = error(
  n0,
  _IGRGSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidGlobalReplicationGroupState`, 400],
  },
  [_m],
  [0],

  __InvalidGlobalReplicationGroupStateFault
);
export var ModifyCacheParameterGroupMessage = struct(
  n0,
  _MCPGM,
  0,
  [_CPGN, _PNV],
  [0, [() => ParameterNameValueList, 0]]
);
export var ModifyGlobalReplicationGroupMessage = struct(
  n0,
  _MGRGM,
  0,
  [_GRGI, _AI, _CNT, _E, _EV, _CPGN, _GRGD, _AFE],
  [0, 2, 0, 0, 0, 0, 0, 2]
);
export var ModifyGlobalReplicationGroupResult = struct(n0, _MGRGR, 0, [_GRG], [[() => GlobalReplicationGroup, 0]]);
export var ParameterNameValue = struct(n0, _PNVa, 0, [_PN, _PV], [0, 0]);
export var RebalanceSlotsInGlobalReplicationGroupMessage = struct(n0, _RSIGRGM, 0, [_GRGI, _AI], [0, 2]);
export var RebalanceSlotsInGlobalReplicationGroupResult = struct(
  n0,
  _RSIGRGR,
  0,
  [_GRG],
  [[() => GlobalReplicationGroup, 0]]
);
export var RegionalConfiguration = struct(
  n0,
  _RCeg,
  0,
  [_RGIe, _RGR, _RCes],
  [0, 0, [() => ReshardingConfigurationList, 0]]
);
export var ResetCacheParameterGroupMessage = struct(
  n0,
  _RCPGM,
  0,
  [_CPGN, _RAP, _PNV],
  [0, 2, [() => ParameterNameValueList, 0]]
);
export var GlobalNodeGroupIdList = list(n0, _GNGIL, 0, [
  0,
  {
    [_xN]: _GNGI,
  },
]);
export var ParameterNameValueList = list(n0, _PNVL, 0, [
  () => ParameterNameValue,
  {
    [_xN]: _PNVa,
  },
]);
export var RegionalConfigurationList = list(n0, _RCLe, 0, [
  () => RegionalConfiguration,
  {
    [_xN]: _RCeg,
  },
]);
export var DecreaseNodeGroupsInGlobalReplicationGroup = op(
  n0,
  _DNGIGRG,
  0,
  () => DecreaseNodeGroupsInGlobalReplicationGroupMessage,
  () => DecreaseNodeGroupsInGlobalReplicationGroupResult
);
export var DeleteGlobalReplicationGroup = op(
  n0,
  _DGRG,
  0,
  () => DeleteGlobalReplicationGroupMessage,
  () => DeleteGlobalReplicationGroupResult
);
export var DisassociateGlobalReplicationGroup = op(
  n0,
  _DGRGi,
  0,
  () => DisassociateGlobalReplicationGroupMessage,
  () => DisassociateGlobalReplicationGroupResult
);
export var FailoverGlobalReplicationGroup = op(
  n0,
  _FGRG,
  0,
  () => FailoverGlobalReplicationGroupMessage,
  () => FailoverGlobalReplicationGroupResult
);
export var IncreaseNodeGroupsInGlobalReplicationGroup = op(
  n0,
  _INGIGRG,
  0,
  () => IncreaseNodeGroupsInGlobalReplicationGroupMessage,
  () => IncreaseNodeGroupsInGlobalReplicationGroupResult
);
export var ModifyCacheParameterGroup = op(
  n0,
  _MCPG,
  0,
  () => ModifyCacheParameterGroupMessage,
  () => CacheParameterGroupNameMessage
);
export var ModifyGlobalReplicationGroup = op(
  n0,
  _MGRG,
  0,
  () => ModifyGlobalReplicationGroupMessage,
  () => ModifyGlobalReplicationGroupResult
);
export var RebalanceSlotsInGlobalReplicationGroup = op(
  n0,
  _RSIGRG,
  0,
  () => RebalanceSlotsInGlobalReplicationGroupMessage,
  () => RebalanceSlotsInGlobalReplicationGroupResult
);
export var ResetCacheParameterGroup = op(
  n0,
  _RCPG,
  0,
  () => ResetCacheParameterGroupMessage,
  () => CacheParameterGroupNameMessage
);

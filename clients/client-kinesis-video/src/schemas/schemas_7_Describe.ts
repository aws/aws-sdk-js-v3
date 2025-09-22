// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _CTr,
  _DAU,
  _DC,
  _DECe,
  _DECIe,
  _DECOe,
  _DIS,
  _EAS,
  _EC,
  _ERIH,
  _FSD,
  _h,
  _HDA,
  _JSD,
  _LCT,
  _LRS,
  _LSC,
  _LUS,
  _LUT,
  _MLMSIMB,
  _MSCe,
  _MUSA,
  _MUT,
  _RC,
  _RS,
  _SARN,
  _SC,
  _SE,
  _SECU,
  _SECUI,
  _SECUO,
  _SN,
  _SOFS,
  _SS,
  _UC,
  _US,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var MediaUriSecretArn = sim(n0, _MUSA, 0, 8);
export var DeletionConfig = struct(n0, _DC, 0, [_ERIH, _LSC, _DAU], [1, () => LocalSizeConfig, 2]);
export var DescribeEdgeConfigurationInput = struct(n0, _DECIe, 0, [_SN, _SARN], [0, 0]);
export var DescribeEdgeConfigurationOutput = struct(
  n0,
  _DECOe,
  0,
  [_SN, _SARN, _CTr, _LUT, _SS, _FSD, _EC, _EAS],
  [0, 0, 4, 4, 0, 0, [() => EdgeConfig, 0], () => EdgeAgentStatus]
);
export var EdgeAgentStatus = struct(n0, _EAS, 0, [_LRS, _LUS], [() => LastRecorderStatus, () => LastUploaderStatus]);
export var EdgeConfig = struct(
  n0,
  _EC,
  0,
  [_HDA, _RC, _UC, _DC],
  [0, [() => RecorderConfig, 0], () => UploaderConfig, () => DeletionConfig]
);
export var LastRecorderStatus = struct(n0, _LRS, 0, [_JSD, _LCT, _LUT, _RS], [0, 4, 4, 0]);
export var LastUploaderStatus = struct(n0, _LUS, 0, [_JSD, _LCT, _LUT, _US], [0, 4, 4, 0]);
export var LocalSizeConfig = struct(n0, _LSC, 0, [_MLMSIMB, _SOFS], [1, 0]);
export var MediaSourceConfig = struct(n0, _MSCe, 0, [_MUSA, _MUT], [[() => MediaUriSecretArn, 0], 0]);
export var RecorderConfig = struct(n0, _RC, 0, [_MSCe, _SC], [[() => MediaSourceConfig, 0], () => ScheduleConfig]);
export var ScheduleConfig = struct(n0, _SC, 0, [_SE, _DIS], [0, 1]);
export var StartEdgeConfigurationUpdateInput = struct(n0, _SECUI, 0, [_SN, _SARN, _EC], [0, 0, [() => EdgeConfig, 0]]);
export var StartEdgeConfigurationUpdateOutput = struct(
  n0,
  _SECUO,
  0,
  [_SN, _SARN, _CTr, _LUT, _SS, _FSD, _EC],
  [0, 0, 4, 4, 0, 0, [() => EdgeConfig, 0]]
);
export var UploaderConfig = struct(n0, _UC, 0, [_SC], [() => ScheduleConfig]);
export var DescribeEdgeConfiguration = op(
  n0,
  _DECe,
  {
    [_h]: ["POST", "/describeEdgeConfiguration", 200],
  },
  () => DescribeEdgeConfigurationInput,
  () => DescribeEdgeConfigurationOutput
);
export var StartEdgeConfigurationUpdate = op(
  n0,
  _SECU,
  {
    [_h]: ["POST", "/startEdgeConfigurationUpdate", 200],
  },
  () => StartEdgeConfigurationUpdateInput,
  () => StartEdgeConfigurationUpdateOutput
);

// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import {
  _A,
  _BC,
  _CR,
  _CRD,
  _CRS,
  _D,
  _DLC,
  _ECRS,
  _ELGS,
  _ES,
  _KKA,
  _LBC,
  _LEC,
  _LGSC,
  _R,
  _Re,
  _S,
  _Sc,
  _SLC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CentralizationRule = struct(
  n0,
  _CR,
  0,
  [_S, _D],
  [() => CentralizationRuleSource, () => CentralizationRuleDestination]
);
export var CentralizationRuleDestination = struct(
  n0,
  _CRD,
  0,
  [_R, _A, _DLC],
  [0, 0, () => DestinationLogsConfiguration]
);
export var CentralizationRuleSource = struct(n0, _CRS, 0, [_Re, _Sc, _SLC], [64 | 0, 0, () => SourceLogsConfiguration]);
export var DestinationLogsConfiguration = struct(
  n0,
  _DLC,
  0,
  [_LEC, _BC],
  [() => LogsEncryptionConfiguration, () => LogsBackupConfiguration]
);
export var LogsBackupConfiguration = struct(n0, _LBC, 0, [_R, _KKA], [0, 0]);
export var LogsEncryptionConfiguration = struct(n0, _LEC, 0, [_ES, _KKA, _ECRS], [0, 0, 0]);
export var SourceLogsConfiguration = struct(n0, _SLC, 0, [_LGSC, _ELGS], [0, 0]);
export var Regions = 64 | 0;

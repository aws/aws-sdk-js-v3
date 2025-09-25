// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _BTI,
  _CCl,
  _Cs,
  _DCDSU,
  _DF,
  _EFA,
  _EIn,
  _EN,
  _ETO,
  _FA,
  _He,
  _IA,
  _ICns,
  _IT,
  _J,
  _KKI,
  _Li,
  _LP,
  _MCCon,
  _MCDF,
  _MCR,
  _MDF,
  _MJDF,
  _MO,
  _MOC,
  _MOo,
  _MPDF,
  _MRIS,
  _MRo,
  _MSCon,
  _MSO,
  _PA,
  _Pa,
  _PTA,
  _SDDT,
  _SIM,
  _SOu,
  _STO,
  _SUM,
  _SUr,
  _VKKI,
  _VSIGB,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchTransformInput = struct(
  n0,
  _BTI,
  0,
  [_DCDSU, _DF, _LP, _SIM, _SDDT, _FA, _IA, _PA, _PTA, _STO, _ETO, _EFA],
  [0, () => MonitoringDatasetFormat, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
);
export var EndpointInput = struct(
  n0,
  _EIn,
  0,
  [_EN, _LP, _SIM, _SDDT, _FA, _IA, _PA, _PTA, _STO, _ETO, _EFA],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
);
export var MonitoringClusterConfig = struct(n0, _MCCon, 0, [_ICns, _IT, _VSIGB, _VKKI], [1, 0, 1, 0]);
export var MonitoringConstraintsResource = struct(n0, _MCR, 0, [_SUr], [0]);
export var MonitoringCsvDatasetFormat = struct(n0, _MCDF, 0, [_He], [2]);
export var MonitoringDatasetFormat = struct(
  n0,
  _MDF,
  0,
  [_Cs, _J, _Pa],
  [() => MonitoringCsvDatasetFormat, () => MonitoringJsonDatasetFormat, () => MonitoringParquetDatasetFormat]
);
export var MonitoringJsonDatasetFormat = struct(n0, _MJDF, 0, [_Li], [2]);
export var MonitoringOutput = struct(n0, _MO, 0, [_SOu], [() => MonitoringS3Output]);
export var MonitoringOutputConfig = struct(n0, _MOC, 0, [_MOo, _KKI], [() => MonitoringOutputs, 0]);
export var MonitoringParquetDatasetFormat = struct(n0, _MPDF, 0, [], []);
export var MonitoringResources = struct(n0, _MRo, 0, [_CCl], [() => MonitoringClusterConfig]);
export var MonitoringS3Output = struct(n0, _MSO, 0, [_SUr, _LP, _SUM], [0, 0, 0]);
export var MonitoringStoppingCondition = struct(n0, _MSCon, 0, [_MRIS], [1]);
export var MonitoringOutputs = list(n0, _MOo, 0, () => MonitoringOutput);
export var MonitoringEnvironmentMap = 128 | 0;

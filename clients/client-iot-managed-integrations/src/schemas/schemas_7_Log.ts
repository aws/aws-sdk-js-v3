// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CELC,
  _CELCR,
  _CELCRr,
  _CT,
  _DLSAU,
  _ELCL,
  _ELCLD,
  _ELCS,
  _ELL,
  _GELC,
  _GELCR,
  _GELCRe,
  _GRLC,
  _GRLCR,
  _GRLCRe,
  _h,
  _hQ,
  _I,
  _LELC,
  _LELCR,
  _LELCRi,
  _LFL,
  _LL,
  _LSFRMB,
  _LSFRMF,
  _LSL,
  _MR,
  _MTI,
  _NT,
  _PRLC,
  _PRLCR,
  _RI,
  _RLC,
  _RT,
  _UELC,
  _UELCR,
  _UL,
  _UPM,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateEventLogConfigurationRequest = struct(n0, _CELCR, 0, [_RT, _RI, _ELL, _CT], [0, 0, 0, [0, 4]]);
export var CreateEventLogConfigurationResponse = struct(n0, _CELCRr, 0, [_I], [0]);
export var EventLogConfigurationSummary = struct(n0, _ELCS, 0, [_I, _RT, _RI, _ELL], [0, 0, 0, 0]);
export var GetEventLogConfigurationRequest = struct(n0, _GELCR, 0, [_I], [[0, 1]]);
export var GetEventLogConfigurationResponse = struct(n0, _GELCRe, 0, [_I, _RT, _RI, _ELL], [0, 0, 0, 0]);
export var GetRuntimeLogConfigurationRequest = struct(n0, _GRLCR, 0, [_MTI], [[0, 1]]);
export var GetRuntimeLogConfigurationResponse = struct(
  n0,
  _GRLCRe,
  0,
  [_MTI, _RLC],
  [0, () => RuntimeLogConfigurations]
);
export var ListEventLogConfigurationsRequest = struct(
  n0,
  _LELCR,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListEventLogConfigurationsResponse = struct(
  n0,
  _LELCRi,
  0,
  [_ELCL, _NT],
  [() => EventLogConfigurationListDefinition, 0]
);
export var PutRuntimeLogConfigurationRequest = struct(
  n0,
  _PRLCR,
  0,
  [_MTI, _RLC],
  [[0, 1], () => RuntimeLogConfigurations]
);
export var RuntimeLogConfigurations = struct(
  n0,
  _RLC,
  0,
  [_LL, _LFL, _LSL, _LSFRMF, _LSFRMB, _UL, _UPM, _DLSAU],
  [0, 0, 0, 1, 1, 2, 1, 2]
);
export var UpdateEventLogConfigurationRequest = struct(n0, _UELCR, 0, [_I, _ELL], [[0, 1], 0]);
export var EventLogConfigurationListDefinition = list(n0, _ELCLD, 0, () => EventLogConfigurationSummary);
export var CreateEventLogConfiguration = op(
  n0,
  _CELC,
  {
    [_h]: ["POST", "/event-log-configurations", 201],
  },
  () => CreateEventLogConfigurationRequest,
  () => CreateEventLogConfigurationResponse
);
export var GetEventLogConfiguration = op(
  n0,
  _GELC,
  {
    [_h]: ["GET", "/event-log-configurations/{Id}", 200],
  },
  () => GetEventLogConfigurationRequest,
  () => GetEventLogConfigurationResponse
);
export var GetRuntimeLogConfiguration = op(
  n0,
  _GRLC,
  {
    [_h]: ["GET", "/runtime-log-configurations/{ManagedThingId}", 200],
  },
  () => GetRuntimeLogConfigurationRequest,
  () => GetRuntimeLogConfigurationResponse
);
export var ListEventLogConfigurations = op(
  n0,
  _LELC,
  {
    [_h]: ["GET", "/event-log-configurations", 200],
  },
  () => ListEventLogConfigurationsRequest,
  () => ListEventLogConfigurationsResponse
);
export var PutRuntimeLogConfiguration = op(
  n0,
  _PRLC,
  {
    [_h]: ["PUT", "/runtime-log-configurations/{ManagedThingId}", 200],
  },
  () => PutRuntimeLogConfigurationRequest,
  () => Unit
);
export var UpdateEventLogConfiguration = op(
  n0,
  _UELC,
  {
    [_h]: ["PATCH", "/event-log-configurations/{Id}", 200],
  },
  () => UpdateEventLogConfigurationRequest,
  () => Unit
);

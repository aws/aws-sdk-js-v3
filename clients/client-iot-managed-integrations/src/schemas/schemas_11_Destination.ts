// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAr,
  _CD,
  _CDR,
  _CDRr,
  _CNC,
  _CNCR,
  _CNCRr,
  _CT,
  _D,
  _DD,
  _DDA,
  _DDR,
  _DDT,
  _DL,
  _DLD,
  _DN,
  _DS,
  _ETv,
  _GD,
  _GDR,
  _GDRe,
  _GNC,
  _GNCR,
  _GNCRe,
  _h,
  _hQ,
  _LD,
  _LDR,
  _LDRi,
  _LNC,
  _LNCR,
  _LNCRi,
  _MR,
  _N,
  _NCL,
  _NCLD,
  _NCS,
  _NT,
  _RA,
  _Ta,
  _UA,
  _UD,
  _UDR,
  _UNC,
  _UNCR,
  n0,
  TagsMap,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDestinationRequest = struct(
  n0,
  _CDR,
  0,
  [_DDA, _DDT, _N, _RA, _CT, _D, _Ta],
  [0, 0, 0, 0, [0, 4], 0, [() => TagsMap, 0]]
);
export var CreateDestinationResponse = struct(n0, _CDRr, 0, [_N], [0]);
export var CreateNotificationConfigurationRequest = struct(
  n0,
  _CNCR,
  0,
  [_ETv, _DN, _CT, _Ta],
  [0, 0, [0, 4], [() => TagsMap, 0]]
);
export var CreateNotificationConfigurationResponse = struct(n0, _CNCRr, 0, [_ETv], [0]);
export var DeleteDestinationRequest = struct(n0, _DDR, 0, [_N], [[0, 1]]);
export var DestinationSummary = struct(n0, _DS, 0, [_D, _DDA, _DDT, _N, _RA], [0, 0, 0, 0, 0]);
export var GetDestinationRequest = struct(n0, _GDR, 0, [_N], [[0, 1]]);
export var GetDestinationResponse = struct(
  n0,
  _GDRe,
  0,
  [_D, _DDA, _DDT, _N, _RA, _CAr, _UA, _Ta],
  [0, 0, 0, 0, 0, 4, 4, [() => TagsMap, 0]]
);
export var GetNotificationConfigurationRequest = struct(n0, _GNCR, 0, [_ETv], [[0, 1]]);
export var GetNotificationConfigurationResponse = struct(
  n0,
  _GNCRe,
  0,
  [_ETv, _DN, _CAr, _UA, _Ta],
  [0, 0, 4, 4, [() => TagsMap, 0]]
);
export var ListDestinationsRequest = struct(
  n0,
  _LDR,
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
export var ListDestinationsResponse = struct(n0, _LDRi, 0, [_DL, _NT], [() => DestinationListDefinition, 0]);
export var ListNotificationConfigurationsRequest = struct(
  n0,
  _LNCR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListNotificationConfigurationsResponse = struct(
  n0,
  _LNCRi,
  0,
  [_NCL, _NT],
  [() => NotificationConfigurationListDefinition, 0]
);
export var NotificationConfigurationSummary = struct(n0, _NCS, 0, [_ETv, _DN], [0, 0]);
export var UpdateDestinationRequest = struct(n0, _UDR, 0, [_N, _DDA, _DDT, _RA, _D], [[0, 1], 0, 0, 0, 0]);
export var UpdateNotificationConfigurationRequest = struct(n0, _UNCR, 0, [_ETv, _DN], [[0, 1], 0]);
export var DestinationListDefinition = list(n0, _DLD, 0, () => DestinationSummary);
export var NotificationConfigurationListDefinition = list(n0, _NCLD, 0, () => NotificationConfigurationSummary);
export var CreateDestination = op(
  n0,
  _CD,
  {
    [_h]: ["POST", "/destinations", 201],
  },
  () => CreateDestinationRequest,
  () => CreateDestinationResponse
);
export var CreateNotificationConfiguration = op(
  n0,
  _CNC,
  {
    [_h]: ["POST", "/notification-configurations", 201],
  },
  () => CreateNotificationConfigurationRequest,
  () => CreateNotificationConfigurationResponse
);
export var DeleteDestination = op(
  n0,
  _DD,
  {
    [_h]: ["DELETE", "/destinations/{Name}", 200],
  },
  () => DeleteDestinationRequest,
  () => Unit
);
export var GetDestination = op(
  n0,
  _GD,
  {
    [_h]: ["GET", "/destinations/{Name}", 200],
  },
  () => GetDestinationRequest,
  () => GetDestinationResponse
);
export var GetNotificationConfiguration = op(
  n0,
  _GNC,
  {
    [_h]: ["GET", "/notification-configurations/{EventType}", 200],
  },
  () => GetNotificationConfigurationRequest,
  () => GetNotificationConfigurationResponse
);
export var ListDestinations = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/destinations", 200],
  },
  () => ListDestinationsRequest,
  () => ListDestinationsResponse
);
export var ListNotificationConfigurations = op(
  n0,
  _LNC,
  {
    [_h]: ["GET", "/notification-configurations", 200],
  },
  () => ListNotificationConfigurationsRequest,
  () => ListNotificationConfigurationsResponse
);
export var UpdateDestination = op(
  n0,
  _UD,
  {
    [_h]: ["PUT", "/destinations/{Name}", 201],
  },
  () => UpdateDestinationRequest,
  () => Unit
);
export var UpdateNotificationConfiguration = op(
  n0,
  _UNC,
  {
    [_h]: ["PUT", "/notification-configurations/{EventType}", 201],
  },
  () => UpdateNotificationConfigurationRequest,
  () => Unit
);

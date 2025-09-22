// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DCe,
  _DIGC,
  _DIGCI,
  _DIGCO,
  _DNC,
  _DNCI,
  _DNCO,
  _DR,
  _F,
  _FC,
  _h,
  _HP,
  _IGC,
  _IGDC,
  _IST,
  _NC,
  _NDC,
  _S,
  _SARN,
  _SIa,
  _SN,
  _U,
  _UIGC,
  _UIGCI,
  _UIGCO,
  _UNC,
  _UNCI,
  _UNCO,
  _WP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeImageGenerationConfigurationInput = struct(n0, _DIGCI, 0, [_SN, _SARN], [0, 0]);
export var DescribeImageGenerationConfigurationOutput = struct(
  n0,
  _DIGCO,
  0,
  [_IGC],
  [() => ImageGenerationConfiguration]
);
export var DescribeNotificationConfigurationInput = struct(n0, _DNCI, 0, [_SN, _SARN], [0, 0]);
export var DescribeNotificationConfigurationOutput = struct(n0, _DNCO, 0, [_NC], [() => NotificationConfiguration]);
export var ImageGenerationConfiguration = struct(
  n0,
  _IGC,
  0,
  [_S, _IST, _DCe, _SIa, _F, _FC, _WP, _HP],
  [0, 0, () => ImageGenerationDestinationConfig, 1, 0, 128 | 0, 1, 1]
);
export var ImageGenerationDestinationConfig = struct(n0, _IGDC, 0, [_U, _DR], [0, 0]);
export var NotificationConfiguration = struct(n0, _NC, 0, [_S, _DCe], [0, () => NotificationDestinationConfig]);
export var NotificationDestinationConfig = struct(n0, _NDC, 0, [_U], [0]);
export var UpdateImageGenerationConfigurationInput = struct(
  n0,
  _UIGCI,
  0,
  [_SN, _SARN, _IGC],
  [0, 0, () => ImageGenerationConfiguration]
);
export var UpdateImageGenerationConfigurationOutput = struct(n0, _UIGCO, 0, [], []);
export var UpdateNotificationConfigurationInput = struct(
  n0,
  _UNCI,
  0,
  [_SN, _SARN, _NC],
  [0, 0, () => NotificationConfiguration]
);
export var UpdateNotificationConfigurationOutput = struct(n0, _UNCO, 0, [], []);
export var FormatConfig = 128 | 0;

export var DescribeImageGenerationConfiguration = op(
  n0,
  _DIGC,
  {
    [_h]: ["POST", "/describeImageGenerationConfiguration", 200],
  },
  () => DescribeImageGenerationConfigurationInput,
  () => DescribeImageGenerationConfigurationOutput
);
export var DescribeNotificationConfiguration = op(
  n0,
  _DNC,
  {
    [_h]: ["POST", "/describeNotificationConfiguration", 200],
  },
  () => DescribeNotificationConfigurationInput,
  () => DescribeNotificationConfigurationOutput
);
export var UpdateImageGenerationConfiguration = op(
  n0,
  _UIGC,
  {
    [_h]: ["POST", "/updateImageGenerationConfiguration", 200],
  },
  () => UpdateImageGenerationConfigurationInput,
  () => UpdateImageGenerationConfigurationOutput
);
export var UpdateNotificationConfiguration = op(
  n0,
  _UNC,
  {
    [_h]: ["POST", "/updateNotificationConfiguration", 200],
  },
  () => UpdateNotificationConfigurationInput,
  () => UpdateNotificationConfigurationOutput
);

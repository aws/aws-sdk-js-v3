// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _eM, _GEDIC, _GEDICR, _GEDICRe, _ht, _oPP, _pP, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetEc2DeepInspectionConfigurationRequest = struct(n0, _GEDICR, 0, [], []);
export var GetEc2DeepInspectionConfigurationResponse = struct(
  n0,
  _GEDICRe,
  0,
  [_pP, _oPP, _s, _eM],
  [64 | 0, 64 | 0, 0, 0]
);
export var GetEc2DeepInspectionConfiguration = op(
  n0,
  _GEDIC,
  {
    [_ht]: ["POST", "/ec2deepinspectionconfiguration/get", 200],
  },
  () => GetEc2DeepInspectionConfigurationRequest,
  () => GetEc2DeepInspectionConfigurationResponse
);

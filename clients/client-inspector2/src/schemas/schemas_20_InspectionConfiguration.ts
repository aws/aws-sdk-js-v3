// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _oPP, _UOEDIC, _UOEDICR, _UOEDICRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateOrgEc2DeepInspectionConfigurationRequest = struct(n0, _UOEDICR, 0, [_oPP], [64 | 0]);
export var UpdateOrgEc2DeepInspectionConfigurationResponse = struct(n0, _UOEDICRp, 0, [], []);
export var PathList = 64 | 0;

export var UpdateOrgEc2DeepInspectionConfiguration = op(
  n0,
  _UOEDIC,
  {
    [_ht]: ["POST", "/ec2deepinspectionconfiguration/org/update", 200],
  },
  () => UpdateOrgEc2DeepInspectionConfigurationRequest,
  () => UpdateOrgEc2DeepInspectionConfigurationResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CSN,
  _DAa,
  _DOa,
  _EM,
  _GA,
  _GO,
  _h,
  _OSD,
  _PAVA,
  _PAVAR,
  _PAVARu,
  _PCSVO,
  _PCSVOR,
  _PCSVORu,
  _VA,
  _VE,
  _VO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DashboardAttributes = struct(n0, _DAa, 0, [_EM], [0]);
export var DashboardOptions = struct(n0, _DOa, 0, [_EM], [0]);
export var GuardianAttributes = struct(n0, _GA, 0, [_OSD], [0]);
export var GuardianOptions = struct(n0, _GO, 0, [_OSD], [0]);
export var PutAccountVdmAttributesRequest = struct(n0, _PAVAR, 0, [_VA], [() => VdmAttributes]);
export var PutAccountVdmAttributesResponse = struct(n0, _PAVARu, 0, [], []);
export var PutConfigurationSetVdmOptionsRequest = struct(n0, _PCSVOR, 0, [_CSN, _VO], [[0, 1], () => VdmOptions]);
export var PutConfigurationSetVdmOptionsResponse = struct(n0, _PCSVORu, 0, [], []);
export var VdmAttributes = struct(
  n0,
  _VA,
  0,
  [_VE, _DAa, _GA],
  [0, () => DashboardAttributes, () => GuardianAttributes]
);
export var VdmOptions = struct(n0, _VO, 0, [_DOa, _GO], [() => DashboardOptions, () => GuardianOptions]);
export var PutAccountVdmAttributes = op(
  n0,
  _PAVA,
  {
    [_h]: ["PUT", "/v2/email/account/vdm", 200],
  },
  () => PutAccountVdmAttributesRequest,
  () => PutAccountVdmAttributesResponse
);
export var PutConfigurationSetVdmOptions = op(
  n0,
  _PCSVO,
  {
    [_h]: ["PUT", "/v2/email/configuration-sets/{ConfigurationSetName}/vdm-options", 200],
  },
  () => PutConfigurationSetVdmOptionsRequest,
  () => PutConfigurationSetVdmOptionsResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EC, _ECc, _eCc, _eCco, _ht, _pDRD, _pDRM, _rD, _sM, _UC, _UCR, _UCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Ec2Configuration = struct(n0, _EC, 0, [_sM], [0]);
export var EcrConfiguration = struct(n0, _ECc, 0, [_rD, _pDRD, _pDRM], [0, 0, 0]);
export var UpdateConfigurationRequest = struct(
  n0,
  _UCR,
  0,
  [_eCc, _eCco],
  [() => EcrConfiguration, () => Ec2Configuration]
);
export var UpdateConfigurationResponse = struct(n0, _UCRp, 0, [], []);
export var UpdateConfiguration = op(
  n0,
  _UC,
  {
    [_ht]: ["POST", "/configuration/update", 200],
  },
  () => UpdateConfigurationRequest,
  () => UpdateConfigurationResponse
);

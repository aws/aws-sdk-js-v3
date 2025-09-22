// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dCN, _DDC, _DDCR, _DDCRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDomainConfigurationRequest = struct(n0, _DDCR, 0, [_dCN], [[0, 1]]);
export var DeleteDomainConfigurationResponse = struct(n0, _DDCRe, 0, [], []);
export var DeleteDomainConfiguration = op(
  n0,
  _DDC,
  {
    [_h]: ["DELETE", "/domainConfigurations/{domainConfigurationName}", 200],
  },
  () => DeleteDomainConfigurationRequest,
  () => DeleteDomainConfigurationResponse
);

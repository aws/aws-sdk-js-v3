// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AWSSAS, _GALSC, _GALSCO, _h, _OC, _SLR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAccountLevelServiceConfigurationOutput = struct(n0, _GALSCO, 0, [_OC], [() => OrgConfiguration]);
export var OrgConfiguration = struct(n0, _OC, 0, [_AWSSAS, _SLR], [0, 0]);
export var GetAccountLevelServiceConfiguration = op(
  n0,
  _GALSC,
  {
    [_h]: ["POST", "/GetAccountLevelServiceConfiguration", 200],
  },
  () => Unit,
  () => GetAccountLevelServiceConfigurationOutput
);

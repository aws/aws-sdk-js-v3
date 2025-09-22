// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidOperationException as __InvalidOperationException } from "../models/index";
import { _a, _c, _DVPCEC, _DVPCECR, _DVPCECRe, _e, _IOE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVPCEConfigurationRequest = struct(n0, _DVPCECR, 0, [_a], [0]);
export var DeleteVPCEConfigurationResult = struct(n0, _DVPCECRe, 0, [], []);
export var InvalidOperationException = error(
  n0,
  _IOE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidOperationException
);
export var DeleteVPCEConfiguration = op(
  n0,
  _DVPCEC,
  0,
  () => DeleteVPCEConfigurationRequest,
  () => DeleteVPCEConfigurationResult
);

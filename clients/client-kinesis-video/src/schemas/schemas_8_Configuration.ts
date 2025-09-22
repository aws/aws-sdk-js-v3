// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { StreamEdgeConfigurationNotFoundException as __StreamEdgeConfigurationNotFoundException } from "../models/index";
import { _c, _DEC, _DECI, _DECO, _e, _h, _hE, _M, _SARN, _SECNFE, _SN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEdgeConfigurationInput = struct(n0, _DECI, 0, [_SN, _SARN], [0, 0]);
export var DeleteEdgeConfigurationOutput = struct(n0, _DECO, 0, [], []);
export var StreamEdgeConfigurationNotFoundException = error(
  n0,
  _SECNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __StreamEdgeConfigurationNotFoundException
);
export var DeleteEdgeConfiguration = op(
  n0,
  _DEC,
  {
    [_h]: ["POST", "/deleteEdgeConfiguration", 200],
  },
  () => DeleteEdgeConfigurationInput,
  () => DeleteEdgeConfigurationOutput
);

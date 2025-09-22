// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _C, _G, _GC, _GGC, _GGCI, _GGCO, _h, _PGC, _PGCI, _PGCO, n0 } from "./schemas_0";
import { GroupConfiguration, GroupConfigurationList } from "./schemas_1_Group";

/* eslint no-var: 0 */

export var GetGroupConfigurationInput = struct(n0, _GGCI, 0, [_G], [0]);
export var GetGroupConfigurationOutput = struct(n0, _GGCO, 0, [_GC], [() => GroupConfiguration]);
export var PutGroupConfigurationInput = struct(n0, _PGCI, 0, [_G, _C], [0, () => GroupConfigurationList]);
export var PutGroupConfigurationOutput = struct(n0, _PGCO, 0, [], []);
export var GetGroupConfiguration = op(
  n0,
  _GGC,
  {
    [_h]: ["POST", "/get-group-configuration", 200],
  },
  () => GetGroupConfigurationInput,
  () => GetGroupConfigurationOutput
);
export var PutGroupConfiguration = op(
  n0,
  _PGC,
  {
    [_h]: ["POST", "/put-group-configuration", 202],
  },
  () => PutGroupConfigurationInput,
  () => PutGroupConfigurationOutput
);

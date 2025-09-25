// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _aT, _LSC, _LSCI, _LSCO, _res, _sCI, _SCIo, _SCIou, _sTer, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListSourceCredentialsInput = struct(n0, _LSCI, 0, [], []);
export var ListSourceCredentialsOutput = struct(n0, _LSCO, 0, [_sCI], [() => SourceCredentialsInfos]);
export var SourceCredentialsInfo = struct(n0, _SCIo, 0, [_a, _sTer, _aT, _res], [0, 0, 0, 0]);
export var SourceCredentialsInfos = list(n0, _SCIou, 0, () => SourceCredentialsInfo);
export var ListSourceCredentials = op(
  n0,
  _LSC,
  0,
  () => ListSourceCredentialsInput,
  () => ListSourceCredentialsOutput
);

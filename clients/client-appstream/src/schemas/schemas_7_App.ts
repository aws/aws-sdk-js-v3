// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _A,
  _AB,
  _ABE,
  _CT,
  _D,
  _DN,
  _EC,
  _ED,
  _EDL,
  _EM,
  _EP,
  _EPx,
  _N,
  _PSSD,
  _PT,
  _S,
  _SD,
  _SSD,
  _SSL,
  _SSLc,
  _TIS,
  n0,
  S3Location,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AppBlock = struct(
  n0,
  _AB,
  0,
  [_N, _A, _D, _DN, _SSL, _SSD, _CT, _PSSD, _PT, _S, _ABE],
  [0, 0, 0, 0, () => S3Location, () => ScriptDetails, 4, () => ScriptDetails, 0, 0, () => ErrorDetailsList]
);
export var ErrorDetails = struct(n0, _ED, 0, [_EC, _EM], [0, 0]);
export var ScriptDetails = struct(n0, _SD, 0, [_SSLc, _EP, _EPx, _TIS], [() => S3Location, 0, 0, 1]);
export var ErrorDetailsList = list(n0, _EDL, 0, () => ErrorDetails);

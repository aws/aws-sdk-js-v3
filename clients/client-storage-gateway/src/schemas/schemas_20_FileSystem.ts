// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _ADS, _DC, _DN, _DUP, _GARN, _JD, _JDI, _JDO, _OU, _P, _TIS, _UN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DomainUserPassword = sim(n0, _DUP, 0, 8);
export var JoinDomainInput = struct(
  n0,
  _JDI,
  0,
  [_GARN, _DN, _OU, _DC, _TIS, _UN, _P],
  [0, 0, 0, 64 | 0, 1, 0, [() => DomainUserPassword, 0]]
);
export var JoinDomainOutput = struct(n0, _JDO, 0, [_GARN, _ADS], [0, 0]);
export var Hosts = 64 | 0;

export var JoinDomain = op(
  n0,
  _JD,
  0,
  () => JoinDomainInput,
  () => JoinDomainOutput
);

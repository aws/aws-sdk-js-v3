// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _AC, _DAC, _DN, _RDAC, _RDACR, _RDACRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DomainAuthCode = sim(n0, _DAC, 0, 8);
export var RetrieveDomainAuthCodeRequest = struct(n0, _RDACR, 0, [_DN], [0]);
export var RetrieveDomainAuthCodeResponse = struct(n0, _RDACRe, 0, [_AC], [[() => DomainAuthCode, 0]]);
export var RetrieveDomainAuthCode = op(
  n0,
  _RDAC,
  0,
  () => RetrieveDomainAuthCodeRequest,
  () => RetrieveDomainAuthCodeResponse
);

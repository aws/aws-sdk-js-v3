// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DNo, _LDN, _LDNR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ListDomainNamesResponse = struct(n0, _LDNR, 0, [_DNo], [128 | 0]);
export var DomainNameMap = 128 | 0;

export var ListDomainNames = op(
  n0,
  _LDN,
  0,
  () => Unit,
  () => ListDomainNamesResponse
);

// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAN, _DCAD, _DCADR, _DCADRe, _DN, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCalculatedAttributeDefinitionRequest = struct(
  n0,
  _DCADR,
  0,
  [_DN, _CAN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteCalculatedAttributeDefinitionResponse = struct(n0, _DCADRe, 0, [], []);
export var DeleteCalculatedAttributeDefinition = op(
  n0,
  _DCAD,
  {
    [_h]: ["DELETE", "/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}", 200],
  },
  () => DeleteCalculatedAttributeDefinitionRequest,
  () => DeleteCalculatedAttributeDefinitionResponse
);

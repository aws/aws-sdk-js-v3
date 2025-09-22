// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _MSP, _MSPR, _MSPRo, _PTD, _RI, _RSPN, _SP, _St, _UAU, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifySamlPropertiesRequest = struct(n0, _MSPR, 0, [_RI, _SP, _PTD], [0, () => SamlProperties, 64 | 0]);
export var ModifySamlPropertiesResult = struct(n0, _MSPRo, 0, [], []);
export var SamlProperties = struct(n0, _SP, 0, [_St, _UAU, _RSPN], [0, 0, 0]);
export var DeletableSamlPropertiesList = 64 | 0;

export var ModifySamlProperties = op(
  n0,
  _MSP,
  0,
  () => ModifySamlPropertiesRequest,
  () => ModifySamlPropertiesResult
);

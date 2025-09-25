// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ANTMM, _CCIa, _LANTM, _LANTMM, _RGIe, _SDM, _SUM, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AllowedNodeTypeModificationsMessage = struct(n0, _ANTMM, 0, [_SUM, _SDM], [64 | 0, 64 | 0]);
export var ListAllowedNodeTypeModificationsMessage = struct(n0, _LANTMM, 0, [_CCIa, _RGIe], [0, 0]);
export var NodeTypeList = 64 | 0;

export var ListAllowedNodeTypeModifications = op(
  n0,
  _LANTM,
  0,
  () => ListAllowedNodeTypeModificationsMessage,
  () => AllowedNodeTypeModificationsMessage
);

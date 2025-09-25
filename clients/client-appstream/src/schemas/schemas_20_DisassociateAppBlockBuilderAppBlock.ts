// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ABA, _ABBN, _DABBAB, _DABBABR, _DABBABRi, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateAppBlockBuilderAppBlockRequest = struct(n0, _DABBABR, 0, [_ABA, _ABBN], [0, 0]);
export var DisassociateAppBlockBuilderAppBlockResult = struct(n0, _DABBABRi, 0, [], []);
export var DisassociateAppBlockBuilderAppBlock = op(
  n0,
  _DABBAB,
  0,
  () => DisassociateAppBlockBuilderAppBlockRequest,
  () => DisassociateAppBlockBuilderAppBlockResult
);

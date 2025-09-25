// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AABBAB,
  _AABBABR,
  _AABBABRs,
  _ABA,
  _ABBABA,
  _ABBABAL,
  _ABBABAp,
  _ABBN,
  _DABBABA,
  _DABBABAR,
  _DABBABARe,
  _MR,
  _NT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AppBlockBuilderAppBlockAssociation = struct(n0, _ABBABA, 0, [_ABA, _ABBN], [0, 0]);
export var AssociateAppBlockBuilderAppBlockRequest = struct(n0, _AABBABR, 0, [_ABA, _ABBN], [0, 0]);
export var AssociateAppBlockBuilderAppBlockResult = struct(
  n0,
  _AABBABRs,
  0,
  [_ABBABA],
  [() => AppBlockBuilderAppBlockAssociation]
);
export var DescribeAppBlockBuilderAppBlockAssociationsRequest = struct(
  n0,
  _DABBABAR,
  0,
  [_ABA, _ABBN, _MR, _NT],
  [0, 0, 1, 0]
);
export var DescribeAppBlockBuilderAppBlockAssociationsResult = struct(
  n0,
  _DABBABARe,
  0,
  [_ABBABAp, _NT],
  [() => AppBlockBuilderAppBlockAssociationsList, 0]
);
export var AppBlockBuilderAppBlockAssociationsList = list(n0, _ABBABAL, 0, () => AppBlockBuilderAppBlockAssociation);
export var AssociateAppBlockBuilderAppBlock = op(
  n0,
  _AABBAB,
  0,
  () => AssociateAppBlockBuilderAppBlockRequest,
  () => AssociateAppBlockBuilderAppBlockResult
);
export var DescribeAppBlockBuilderAppBlockAssociations = op(
  n0,
  _DABBABA,
  0,
  () => DescribeAppBlockBuilderAppBlockAssociationsRequest,
  () => DescribeAppBlockBuilderAppBlockAssociationsResult
);

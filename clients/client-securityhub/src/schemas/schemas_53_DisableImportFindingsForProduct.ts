// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIFFP, _DIFFPR, _DIFFPRi, _h, _PSA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableImportFindingsForProductRequest = struct(n0, _DIFFPR, 0, [_PSA], [[0, 1]]);
export var DisableImportFindingsForProductResponse = struct(n0, _DIFFPRi, 0, [], []);
export var DisableImportFindingsForProduct = op(
  n0,
  _DIFFP,
  {
    [_h]: ["DELETE", "/productSubscriptions/{ProductSubscriptionArn+}", 200],
  },
  () => DisableImportFindingsForProductRequest,
  () => DisableImportFindingsForProductResponse
);

// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AA, _AAc, _AAL, _ALt, _AN, _ANL, _ANt, _AV, _AVL, _AVT, _AVt, _DAA, _DAAM, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AccountAttribute = struct(n0, _AA, 0, [_AN, _AV], [0, [() => AttributeValueList, 0]]);
export var AccountAttributeList = struct(n0, _AAL, 0, [_AAc], [[() => AttributeList, 0]]);
export var AttributeValueTarget = struct(n0, _AVT, 0, [_AVt], [0]);
export var DescribeAccountAttributesMessage = struct(n0, _DAAM, 0, [_ANt], [[() => AttributeNameList, 0]]);
export var AttributeList = list(n0, _ALt, 0, [
  () => AccountAttribute,
  {
    [_xN]: _AA,
  },
]);
export var AttributeNameList = list(n0, _ANL, 0, [
  0,
  {
    [_xN]: _AN,
  },
]);
export var AttributeValueList = list(n0, _AVL, 0, [
  () => AttributeValueTarget,
  {
    [_xN]: _AVT,
  },
]);
export var DescribeAccountAttributes = op(
  n0,
  _DAA,
  0,
  () => DescribeAccountAttributesMessage,
  () => AccountAttributeList
);

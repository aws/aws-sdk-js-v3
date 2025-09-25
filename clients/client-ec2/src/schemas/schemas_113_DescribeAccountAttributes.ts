// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AAcc,
  _AAL,
  _AANSL,
  _aASc,
  _AAV,
  _AAVL,
  _AN,
  _aN,
  _ANt,
  _AV,
  _aV,
  _aVS,
  _AVt,
  _DAA,
  _DAAR,
  _DAARe,
  _DR,
  _dR,
  _eQN,
  _it,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountAttribute = struct(
  n0,
  _AA,
  0,
  [_AN, _AV],
  [
    [
      0,
      {
        [_eQN]: `AttributeName`,
        [_xN]: _aN,
      },
    ],
    [
      () => AccountAttributeValueList,
      {
        [_eQN]: `AttributeValueSet`,
        [_xN]: _aVS,
      },
    ],
  ]
);
export var AccountAttributeValue = struct(
  n0,
  _AAV,
  0,
  [_AVt],
  [
    [
      0,
      {
        [_eQN]: `AttributeValue`,
        [_xN]: _aV,
      },
    ],
  ]
);
export var DescribeAccountAttributesRequest = struct(
  n0,
  _DAAR,
  0,
  [_DR, _ANt],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => AccountAttributeNameStringList,
      {
        [_eQN]: `AttributeName`,
        [_xN]: _aN,
      },
    ],
  ]
);
export var DescribeAccountAttributesResult = struct(
  n0,
  _DAARe,
  0,
  [_AAcc],
  [
    [
      () => AccountAttributeList,
      {
        [_eQN]: `AccountAttributeSet`,
        [_xN]: _aASc,
      },
    ],
  ]
);
export var AccountAttributeList = list(n0, _AAL, 0, [
  () => AccountAttribute,
  {
    [_xN]: _it,
  },
]);
export var AccountAttributeNameStringList = list(n0, _AANSL, 0, [
  0,
  {
    [_xN]: _aN,
  },
]);
export var AccountAttributeValueList = list(n0, _AAVL, 0, [
  () => AccountAttributeValue,
  {
    [_xN]: _it,
  },
]);
export var DescribeAccountAttributes = op(
  n0,
  _DAA,
  0,
  () => DescribeAccountAttributesRequest,
  () => DescribeAccountAttributesResult
);

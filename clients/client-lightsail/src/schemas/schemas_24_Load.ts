// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aNt, _aVt, _ht, _lBN, _o, _ULBA, _ULBAR, _ULBARp, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateLoadBalancerAttributeRequest = struct(n0, _ULBAR, 0, [_lBN, _aNt, _aVt], [0, 0, 0]);
export var UpdateLoadBalancerAttributeResult = struct(n0, _ULBARp, 0, [_o], [() => OperationList]);
export var UpdateLoadBalancerAttribute = op(
  n0,
  _ULBA,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/UpdateLoadBalancerAttribute", 200],
  },
  () => UpdateLoadBalancerAttributeRequest,
  () => UpdateLoadBalancerAttributeResult
);

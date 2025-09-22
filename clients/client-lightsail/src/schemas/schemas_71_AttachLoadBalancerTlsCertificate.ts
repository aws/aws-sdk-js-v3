// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ALBTC, _ALBTCR, _ALBTCRt, _cN, _ht, _lBN, _o, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var AttachLoadBalancerTlsCertificateRequest = struct(n0, _ALBTCR, 0, [_lBN, _cN], [0, 0]);
export var AttachLoadBalancerTlsCertificateResult = struct(n0, _ALBTCRt, 0, [_o], [() => OperationList]);
export var AttachLoadBalancerTlsCertificate = op(
  n0,
  _ALBTC,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/AttachLoadBalancerTlsCertificate", 200],
  },
  () => AttachLoadBalancerTlsCertificateRequest,
  () => AttachLoadBalancerTlsCertificateResult
);

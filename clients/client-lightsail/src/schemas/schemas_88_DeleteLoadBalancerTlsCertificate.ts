// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cN, _DLBTC, _DLBTCR, _DLBTCRe, _f, _ht, _lBN, _o, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLoadBalancerTlsCertificateRequest = struct(n0, _DLBTCR, 0, [_lBN, _cN, _f], [0, 0, 2]);
export var DeleteLoadBalancerTlsCertificateResult = struct(n0, _DLBTCRe, 0, [_o], [() => OperationList]);
export var DeleteLoadBalancerTlsCertificate = op(
  n0,
  _DLBTC,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteLoadBalancerTlsCertificate", 200],
  },
  () => DeleteLoadBalancerTlsCertificateRequest,
  () => DeleteLoadBalancerTlsCertificateResult
);

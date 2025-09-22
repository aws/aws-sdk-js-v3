// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cAN,
  _cDN,
  _CLBTC,
  _CLBTCR,
  _CLBTCRr,
  _cN,
  _ht,
  _lBN,
  _o,
  _ta,
  n0,
  OperationList,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateLoadBalancerTlsCertificateRequest = struct(
  n0,
  _CLBTCR,
  0,
  [_lBN, _cN, _cDN, _cAN, _ta],
  [0, 0, 0, 64 | 0, () => TagList]
);
export var CreateLoadBalancerTlsCertificateResult = struct(n0, _CLBTCRr, 0, [_o], [() => OperationList]);
export var DomainNameList = 64 | 0;

export var CreateLoadBalancerTlsCertificate = op(
  n0,
  _CLBTC,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateLoadBalancerTlsCertificate", 200],
  },
  () => CreateLoadBalancerTlsCertificateRequest,
  () => CreateLoadBalancerTlsCertificateResult
);

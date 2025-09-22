// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCFD, _DCFDR, _DCFDRe, _dN, _ht, _op, n0, Operation } from "./schemas_0";

/* eslint no-var: 0 */

export var DetachCertificateFromDistributionRequest = struct(n0, _DCFDR, 0, [_dN], [0]);
export var DetachCertificateFromDistributionResult = struct(n0, _DCFDRe, 0, [_op], [() => Operation]);
export var DetachCertificateFromDistribution = op(
  n0,
  _DCFD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DetachCertificateFromDistribution", 200],
  },
  () => DetachCertificateFromDistributionRequest,
  () => DetachCertificateFromDistributionResult
);

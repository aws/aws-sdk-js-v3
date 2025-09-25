// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ACTD, _ACTDR, _ACTDRt, _cN, _dN, _ht, _op, n0, Operation } from "./schemas_0";

/* eslint no-var: 0 */

export var AttachCertificateToDistributionRequest = struct(n0, _ACTDR, 0, [_dN, _cN], [0, 0]);
export var AttachCertificateToDistributionResult = struct(n0, _ACTDRt, 0, [_op], [() => Operation]);
export var AttachCertificateToDistribution = op(
  n0,
  _ACTD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/AttachCertificateToDistribution", 200],
  },
  () => AttachCertificateToDistributionRequest,
  () => AttachCertificateToDistributionResult
);

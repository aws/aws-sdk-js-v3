// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BPCT,
  _BPS,
  _BPST,
  _C,
  _DIPU,
  _DIPUR,
  _DIPURe,
  _DS,
  _FM,
  _GBPD,
  _GBPDR,
  _GBPDRe,
  _h,
  _hQ,
  _IPI,
  _IPU,
  _IPUd,
  _IPUL,
  _LIPU,
  _LIPUR,
  _LIPURi,
  _LMD,
  _MR,
  _mR,
  _NT,
  _nT,
  _SSC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeIdentityPoolUsageRequest = struct(n0, _DIPUR, 0, [_IPI], [[0, 1]]);
export var DescribeIdentityPoolUsageResponse = struct(n0, _DIPURe, 0, [_IPU], [() => IdentityPoolUsage]);
export var GetBulkPublishDetailsRequest = struct(n0, _GBPDR, 0, [_IPI], [[0, 1]]);
export var GetBulkPublishDetailsResponse = struct(n0, _GBPDRe, 0, [_IPI, _BPST, _BPCT, _BPS, _FM], [0, 4, 4, 0, 0]);
export var IdentityPoolUsage = struct(n0, _IPU, 0, [_IPI, _SSC, _DS, _LMD], [0, 1, 1, 4]);
export var ListIdentityPoolUsageRequest = struct(
  n0,
  _LIPUR,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListIdentityPoolUsageResponse = struct(
  n0,
  _LIPURi,
  0,
  [_IPUd, _MR, _C, _NT],
  [() => IdentityPoolUsageList, 1, 1, 0]
);
export var IdentityPoolUsageList = list(n0, _IPUL, 0, () => IdentityPoolUsage);
export var DescribeIdentityPoolUsage = op(
  n0,
  _DIPU,
  {
    [_h]: ["GET", "/identitypools/{IdentityPoolId}", 200],
  },
  () => DescribeIdentityPoolUsageRequest,
  () => DescribeIdentityPoolUsageResponse
);
export var GetBulkPublishDetails = op(
  n0,
  _GBPD,
  {
    [_h]: ["POST", "/identitypools/{IdentityPoolId}/getBulkPublishDetails", 200],
  },
  () => GetBulkPublishDetailsRequest,
  () => GetBulkPublishDetailsResponse
);
export var ListIdentityPoolUsage = op(
  n0,
  _LIPU,
  {
    [_h]: ["GET", "/identitypools", 200],
  },
  () => ListIdentityPoolUsageRequest,
  () => ListIdentityPoolUsageResponse
);

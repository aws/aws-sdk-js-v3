// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CCS,
  _ch,
  _CIh,
  _CP,
  _CPS,
  _CPSD,
  _CPSh,
  _CPSha,
  _CPSL,
  _D,
  _DDCP,
  _DDCPR,
  _DDCPRe,
  _DN,
  _h,
  _hQ,
  _IB,
  _LU,
  _LUT,
  _N,
  _PP,
  _S,
  _ST,
  _TNOS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChangeProgressStage = struct(n0, _CPS, 0, [_N, _S, _D, _LU], [0, 0, 0, 4]);
export var ChangeProgressStatusDetails = struct(
  n0,
  _CPSD,
  0,
  [_CIh, _ST, _S, _PP, _CP, _TNOS, _CPSh, _LUT, _CCS, _IB],
  [0, 4, 0, 64 | 0, 64 | 0, 1, () => ChangeProgressStageList, 4, 0, 0]
);
export var DescribeDomainChangeProgressRequest = struct(
  n0,
  _DDCPR,
  0,
  [_DN, _CIh],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ch,
      },
    ],
  ]
);
export var DescribeDomainChangeProgressResponse = struct(n0, _DDCPRe, 0, [_CPSha], [() => ChangeProgressStatusDetails]);
export var ChangeProgressStageList = list(n0, _CPSL, 0, () => ChangeProgressStage);
export var DescribeDomainChangeProgress = op(
  n0,
  _DDCP,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/domain/{DomainName}/progress", 200],
  },
  () => DescribeDomainChangeProgressRequest,
  () => DescribeDomainChangeProgressResponse
);

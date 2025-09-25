// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AO,
  _CCS,
  _CIh,
  _CPD,
  _DN,
  _h,
  _IB,
  _LUT,
  _M,
  _PCO,
  _ST,
  _TVa,
  _UDp,
  _UDR,
  _UDRp,
  _UI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChangeProgressDetails = struct(n0, _CPD, 0, [_CIh, _M, _CCS, _IB, _ST, _LUT], [0, 0, 0, 0, 4, 4]);
export var UpgradeDomainRequest = struct(n0, _UDR, 0, [_DN, _TVa, _PCO, _AO], [0, 0, 2, 128 | 0]);
export var UpgradeDomainResponse = struct(
  n0,
  _UDRp,
  0,
  [_UI, _DN, _TVa, _PCO, _AO, _CPD],
  [0, 0, 0, 2, 128 | 0, () => ChangeProgressDetails]
);
export var AdvancedOptions = 128 | 0;

export var UpgradeDomain = op(
  n0,
  _UDp,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/upgradeDomain", 200],
  },
  () => UpgradeDomainRequest,
  () => UpgradeDomainResponse
);

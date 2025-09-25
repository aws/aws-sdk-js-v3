// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _AL,
  _ALd,
  _ALdd,
  _ATd,
  _C,
  _CC,
  _CN,
  _CPN,
  _DOC,
  _GSA,
  _GSAI,
  _GSAO,
  _h,
  _hQ,
  _Mu,
  _PC,
  _SI,
  _SOR,
  _USA,
  _USAI,
  _USAO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Address = struct(
  n0,
  _A,
  0,
  [_CN, _CPN, _AL, _ALd, _ALdd, _C, _SOR, _DOC, _PC, _CC, _Mu],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var GetSiteAddressInput = struct(
  n0,
  _GSAI,
  0,
  [_SI, _ATd],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ATd,
      },
    ],
  ]
);
export var GetSiteAddressOutput = struct(n0, _GSAO, 0, [_SI, _ATd, _A], [0, 0, () => Address]);
export var UpdateSiteAddressInput = struct(n0, _USAI, 0, [_SI, _ATd, _A], [[0, 1], 0, () => Address]);
export var UpdateSiteAddressOutput = struct(n0, _USAO, 0, [_ATd, _A], [0, () => Address]);
export var GetSiteAddress = op(
  n0,
  _GSA,
  {
    [_h]: ["GET", "/sites/{SiteId}/address", 200],
  },
  () => GetSiteAddressInput,
  () => GetSiteAddressOutput
);
export var UpdateSiteAddress = op(
  n0,
  _USA,
  {
    [_h]: ["PUT", "/sites/{SiteId}/address", 200],
  },
  () => UpdateSiteAddressInput,
  () => UpdateSiteAddressOutput
);

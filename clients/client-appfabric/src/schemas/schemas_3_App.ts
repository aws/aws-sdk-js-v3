// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ABS, _ABSL, _aBSL, _ar, _h, _hQ, _LAB, _LABR, _LABRi, _mR, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AppBundleSummary = struct(n0, _ABS, 0, [_ar], [0]);
export var ListAppBundlesRequest = struct(
  n0,
  _LABR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListAppBundlesResponse = struct(n0, _LABRi, 0, [_aBSL, _nT], [() => AppBundleSummaryList, 0]);
export var AppBundleSummaryList = list(n0, _ABSL, 0, () => AppBundleSummary);
export var ListAppBundles = op(
  n0,
  _LAB,
  {
    [_h]: ["GET", "/appbundles", 200],
  },
  () => ListAppBundlesRequest,
  () => ListAppBundlesResponse
);

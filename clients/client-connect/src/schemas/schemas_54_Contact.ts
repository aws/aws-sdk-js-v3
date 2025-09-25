// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CFS,
  _CFSL,
  _CFSo,
  _CFSon,
  _CFT,
  _cFT,
  _CFTo,
  _h,
  _hQ,
  _I,
  _II,
  _LCF,
  _LCFR,
  _LCFRi,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ContactFlowSummary = struct(n0, _CFS, 0, [_I, _A, _N, _CFT, _CFSo, _CFSon], [0, 0, 0, 0, 0, 0]);
export var ListContactFlowsRequest = struct(
  n0,
  _LCFR,
  0,
  [_II, _CFTo, _NT, _MRa],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _cFT,
      },
    ],
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
export var ListContactFlowsResponse = struct(n0, _LCFRi, 0, [_CFSL, _NT], [() => ContactFlowSummaryList, 0]);
export var ContactFlowSummaryList = list(n0, _CFSL, 0, () => ContactFlowSummary);
export var ContactFlowTypes = 64 | 0;

export var ListContactFlows = op(
  n0,
  _LCF,
  {
    [_h]: ["GET", "/contact-flows-summary/{InstanceId}", 200],
  },
  () => ListContactFlowsRequest,
  () => ListContactFlowsResponse
);

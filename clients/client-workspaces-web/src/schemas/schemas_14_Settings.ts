// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _aEC,
  _aPA,
  _BP,
  _bP,
  _BS,
  _bS,
  _bSA,
  _CBS,
  _CBSR,
  _CBSRr,
  _cMK,
  _cT,
  _GBS,
  _GBSR,
  _GBSRe,
  _h,
  _ta,
  _UBS,
  _UBSR,
  _UBSRp,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_8_Create";

/* eslint no-var: 0 */

export var BrowserPolicy = sim(n0, _BP, 0, 8);
export var BrowserSettings = struct(
  n0,
  _BS,
  0,
  [_bSA, _aPA, _bP, _cMK, _aEC],
  [0, 64 | 0, [() => BrowserPolicy, 0], 0, 128 | 0]
);
export var CreateBrowserSettingsRequest = struct(
  n0,
  _CBSR,
  0,
  [_ta, _cMK, _aEC, _bP, _cT],
  [[() => TagList, 0], 0, 128 | 0, [() => BrowserPolicy, 0], [0, 4]]
);
export var CreateBrowserSettingsResponse = struct(n0, _CBSRr, 0, [_bSA], [0]);
export var GetBrowserSettingsRequest = struct(n0, _GBSR, 0, [_bSA], [[0, 1]]);
export var GetBrowserSettingsResponse = struct(n0, _GBSRe, 0, [_bS], [[() => BrowserSettings, 0]]);
export var UpdateBrowserSettingsRequest = struct(
  n0,
  _UBSR,
  0,
  [_bSA, _bP, _cT],
  [
    [0, 1],
    [() => BrowserPolicy, 0],
    [0, 4],
  ]
);
export var UpdateBrowserSettingsResponse = struct(n0, _UBSRp, 0, [_bS], [[() => BrowserSettings, 0]]);
export var CreateBrowserSettings = op(
  n0,
  _CBS,
  {
    [_h]: ["POST", "/browserSettings", 200],
  },
  () => CreateBrowserSettingsRequest,
  () => CreateBrowserSettingsResponse
);
export var GetBrowserSettings = op(
  n0,
  _GBS,
  {
    [_h]: ["GET", "/browserSettings/{browserSettingsArn+}", 200],
  },
  () => GetBrowserSettingsRequest,
  () => GetBrowserSettingsResponse
);
export var UpdateBrowserSettings = op(
  n0,
  _UBS,
  {
    [_h]: ["PATCH", "/browserSettings/{browserSettingsArn+}", 200],
  },
  () => UpdateBrowserSettingsRequest,
  () => UpdateBrowserSettingsResponse
);

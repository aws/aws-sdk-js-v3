// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AUD,
  _Ca,
  _CSSU,
  _CSSUR,
  _CSSURa,
  _CVu,
  _D,
  _DN,
  _DSTe,
  _h,
  _NV,
  _OD,
  _SAche,
  _SSO,
  _SSSU,
  _SSSUR,
  _SSSURt,
  _UAp,
  _USp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelServiceSoftwareUpdateRequest = struct(n0, _CSSUR, 0, [_DN], [0]);
export var CancelServiceSoftwareUpdateResponse = struct(n0, _CSSURa, 0, [_SSO], [() => ServiceSoftwareOptions]);
export var ServiceSoftwareOptions = struct(
  n0,
  _SSO,
  0,
  [_CVu, _NV, _UAp, _Ca, _USp, _D, _AUD, _OD],
  [0, 0, 2, 2, 0, 0, 4, 2]
);
export var StartServiceSoftwareUpdateRequest = struct(n0, _SSSUR, 0, [_DN, _SAche, _DSTe], [0, 0, 1]);
export var StartServiceSoftwareUpdateResponse = struct(n0, _SSSURt, 0, [_SSO], [() => ServiceSoftwareOptions]);
export var CancelServiceSoftwareUpdate = op(
  n0,
  _CSSU,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/serviceSoftwareUpdate/cancel", 200],
  },
  () => CancelServiceSoftwareUpdateRequest,
  () => CancelServiceSoftwareUpdateResponse
);
export var StartServiceSoftwareUpdate = op(
  n0,
  _SSSU,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/serviceSoftwareUpdate/start", 200],
  },
  () => StartServiceSoftwareUpdateRequest,
  () => StartServiceSoftwareUpdateResponse
);

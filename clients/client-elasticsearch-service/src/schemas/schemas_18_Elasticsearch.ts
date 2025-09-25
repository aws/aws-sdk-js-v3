// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AUD,
  _Ca,
  _CESSU,
  _CESSUR,
  _CESSURa,
  _CVu,
  _De,
  _DN,
  _h,
  _NV,
  _OD,
  _SESSU,
  _SESSUR,
  _SESSURt,
  _SSO,
  _UA,
  _USp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelElasticsearchServiceSoftwareUpdateRequest = struct(n0, _CESSUR, 0, [_DN], [0]);
export var CancelElasticsearchServiceSoftwareUpdateResponse = struct(
  n0,
  _CESSURa,
  0,
  [_SSO],
  [() => ServiceSoftwareOptions]
);
export var ServiceSoftwareOptions = struct(
  n0,
  _SSO,
  0,
  [_CVu, _NV, _UA, _Ca, _USp, _De, _AUD, _OD],
  [0, 0, 2, 2, 0, 0, 4, 2]
);
export var StartElasticsearchServiceSoftwareUpdateRequest = struct(n0, _SESSUR, 0, [_DN], [0]);
export var StartElasticsearchServiceSoftwareUpdateResponse = struct(
  n0,
  _SESSURt,
  0,
  [_SSO],
  [() => ServiceSoftwareOptions]
);
export var CancelElasticsearchServiceSoftwareUpdate = op(
  n0,
  _CESSU,
  {
    [_h]: ["POST", "/2015-01-01/es/serviceSoftwareUpdate/cancel", 200],
  },
  () => CancelElasticsearchServiceSoftwareUpdateRequest,
  () => CancelElasticsearchServiceSoftwareUpdateResponse
);
export var StartElasticsearchServiceSoftwareUpdate = op(
  n0,
  _SESSU,
  {
    [_h]: ["POST", "/2015-01-01/es/serviceSoftwareUpdate/start", 200],
  },
  () => StartElasticsearchServiceSoftwareUpdateRequest,
  () => StartElasticsearchServiceSoftwareUpdateResponse
);

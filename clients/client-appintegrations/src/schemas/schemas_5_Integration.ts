// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { UnsupportedOperationException as __UnsupportedOperationException } from "../models/index";
import {
  _A,
  _AC,
  _Al,
  _AO,
  _ASC,
  _AU,
  _c,
  _CH,
  _D,
  _E,
  _e,
  _EUC,
  _h,
  _hE,
  _IC,
  _IS,
  _IT,
  _M,
  _N,
  _P,
  _Pe,
  _PL,
  _Pu,
  _S,
  _Sa,
  _Sc,
  _SL,
  _Su,
  _Sub,
  _UA,
  _UAR,
  _UARp,
  _UOE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationConfig = struct(n0, _AC, 0, [_CH], [() => ContactHandling]);
export var ApplicationSourceConfig = struct(n0, _ASC, 0, [_EUC], [() => ExternalUrlConfig]);
export var ContactHandling = struct(n0, _CH, 0, [_S], [0]);
export var ExternalUrlConfig = struct(n0, _EUC, 0, [_AU, _AO], [0, 64 | 0]);
export var IframeConfig = struct(n0, _IC, 0, [_Al, _Sa], [64 | 0, 64 | 0]);
export var Publication = struct(n0, _Pu, 0, [_E, _Sc, _D], [0, 0, 0]);
export var Subscription = struct(n0, _Sub, 0, [_E, _D], [0, 0]);
export var UnsupportedOperationException = error(
  n0,
  _UOE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __UnsupportedOperationException
);
export var UpdateApplicationRequest = struct(
  n0,
  _UAR,
  0,
  [_A, _N, _D, _ASC, _Su, _P, _Pe, _IS, _IT, _AC, _IC],
  [
    [0, 1],
    0,
    0,
    () => ApplicationSourceConfig,
    () => SubscriptionList,
    () => PublicationList,
    64 | 0,
    2,
    1,
    () => ApplicationConfig,
    () => IframeConfig,
  ]
);
export var UpdateApplicationResponse = struct(n0, _UARp, 0, [], []);
export var ApplicationApprovedOrigins = 64 | 0;

export var IframePermissionList = 64 | 0;

export var PermissionList = 64 | 0;

export var PublicationList = list(n0, _PL, 0, () => Publication);
export var SubscriptionList = list(n0, _SL, 0, () => Subscription);
export var UpdateApplication = op(
  n0,
  _UA,
  {
    [_h]: ["PATCH", "/applications/{Arn}", 200],
  },
  () => UpdateApplicationRequest,
  () => UpdateApplicationResponse
);

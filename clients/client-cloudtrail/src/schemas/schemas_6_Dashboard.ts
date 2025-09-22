// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ResourceARNNotValidException as __ResourceARNNotValidException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ResourcePolicyNotFoundException as __ResourcePolicyNotFoundException,
  ResourcePolicyNotValidException as __ResourcePolicyNotValidException,
  ResourceTypeNotSupportedException as __ResourceTypeNotSupportedException,
} from "../models/index";
import {
  _aQE,
  _AT,
  _ATR,
  _ATRd,
  _c,
  _CT,
  _DA,
  _DARP,
  _DDe,
  _DDR,
  _DDRe,
  _DI,
  _DRP,
  _DRPR,
  _DRPRe,
  _e,
  _GD,
  _GDR,
  _GDRe,
  _GRP,
  _GRPR,
  _GRPRe,
  _hE,
  _LRFR,
  _LRI,
  _LT,
  _LTR,
  _LTRi,
  _M,
  _NT,
  _PRP,
  _PRPR,
  _PRPRu,
  _QPV,
  _RA,
  _RARNNVE,
  _RI,
  _RIe,
  _RIL,
  _RNFE,
  _RPe,
  _RPNFE,
  _RPNVE,
  _RS,
  _RTe,
  _RTem,
  _RTL,
  _RTNSE,
  _RTR,
  _RTRe,
  _SDR,
  _SDRR,
  _SDRRt,
  _St,
  _T,
  _TL,
  _TPE,
  _UT,
  _W,
  n0,
} from "./schemas_0";
import { TagsList } from "./schemas_4_Create";
import { RefreshSchedule, WidgetList } from "./schemas_21_Event";

/* eslint no-var: 0 */

export var AddTagsRequest = struct(n0, _ATR, 0, [_RI, _TL], [0, () => TagsList]);
export var AddTagsResponse = struct(n0, _ATRd, 0, [], []);
export var DeleteDashboardRequest = struct(n0, _DDR, 0, [_DI], [0]);
export var DeleteDashboardResponse = struct(n0, _DDRe, 0, [], []);
export var DeleteResourcePolicyRequest = struct(n0, _DRPR, 0, [_RA], [0]);
export var DeleteResourcePolicyResponse = struct(n0, _DRPRe, 0, [], []);
export var GetDashboardRequest = struct(n0, _GDR, 0, [_DI], [0]);
export var GetDashboardResponse = struct(
  n0,
  _GDRe,
  0,
  [_DA, _T, _St, _W, _RS, _CT, _UT, _LRI, _LRFR, _TPE],
  [0, 0, 0, () => WidgetList, () => RefreshSchedule, 4, 4, 0, 0, 2]
);
export var GetResourcePolicyRequest = struct(n0, _GRPR, 0, [_RA], [0]);
export var GetResourcePolicyResponse = struct(n0, _GRPRe, 0, [_RA, _RPe, _DARP], [0, 0, 0]);
export var ListTagsRequest = struct(n0, _LTR, 0, [_RIL, _NT], [64 | 0, 0]);
export var ListTagsResponse = struct(n0, _LTRi, 0, [_RTL, _NT], [() => ResourceTagList, 0]);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_RA, _RPe], [0, 0]);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [_RA, _RPe, _DARP], [0, 0, 0]);
export var RemoveTagsRequest = struct(n0, _RTR, 0, [_RI, _TL], [0, () => TagsList]);
export var RemoveTagsResponse = struct(n0, _RTRe, 0, [], []);
export var ResourceARNNotValidException = error(
  n0,
  _RARNNVE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ResourceARNNotValid`, 400],
  },
  [_M],
  [0],

  __ResourceARNNotValidException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ResourceNotFound`, 400],
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var ResourcePolicyNotFoundException = error(
  n0,
  _RPNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ResourcePolicyNotFound`, 404],
  },
  [_M],
  [0],

  __ResourcePolicyNotFoundException
);
export var ResourcePolicyNotValidException = error(
  n0,
  _RPNVE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ResourcePolicyNotValid`, 400],
  },
  [_M],
  [0],

  __ResourcePolicyNotValidException
);
export var ResourceTag = struct(n0, _RTe, 0, [_RI, _TL], [0, () => TagsList]);
export var ResourceTypeNotSupportedException = error(
  n0,
  _RTNSE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ResourceTypeNotSupported`, 400],
  },
  [_M],
  [0],

  __ResourceTypeNotSupportedException
);
export var StartDashboardRefreshRequest = struct(n0, _SDRR, 0, [_DI, _QPV], [0, 128 | 0]);
export var StartDashboardRefreshResponse = struct(n0, _SDRRt, 0, [_RIe], [0]);
export var ResourceIdList = 64 | 0;

export var ResourceTagList = list(n0, _RTL, 0, () => ResourceTag);
export var QueryParameterValues = 128 | 0;

export var AddTags = op(
  n0,
  _AT,
  2,
  () => AddTagsRequest,
  () => AddTagsResponse
);
export var DeleteDashboard = op(
  n0,
  _DDe,
  2,
  () => DeleteDashboardRequest,
  () => DeleteDashboardResponse
);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  2,
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResponse
);
export var GetDashboard = op(
  n0,
  _GD,
  2,
  () => GetDashboardRequest,
  () => GetDashboardResponse
);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  2,
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse
);
export var ListTags = op(
  n0,
  _LT,
  2,
  () => ListTagsRequest,
  () => ListTagsResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  2,
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
export var RemoveTags = op(
  n0,
  _RTem,
  2,
  () => RemoveTagsRequest,
  () => RemoveTagsResponse
);
export var StartDashboardRefresh = op(
  n0,
  _SDR,
  2,
  () => StartDashboardRefreshRequest,
  () => StartDashboardRefreshResponse
);

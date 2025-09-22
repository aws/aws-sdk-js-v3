// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AT,
  _C,
  _CA,
  _CG,
  _CGI,
  _CGO,
  _Cr,
  _D,
  _DG,
  _DGI,
  _DGO,
  _DN,
  _EM,
  _Fi,
  _G,
  _GA,
  _GC,
  _GF,
  _GFL,
  _GG,
  _GGI,
  _GGO,
  _GGQ,
  _GGQI,
  _GGQO,
  _GI,
  _GIL,
  _GIr,
  _GL,
  _GN,
  _GQ,
  _Gr,
  _GTST,
  _GTSTI,
  _GTSTO,
  _h,
  _hQ,
  _I,
  _LG,
  _LGI,
  _LGO,
  _LGR,
  _LGRI,
  _LGRIi,
  _LGRIL,
  _LGRO,
  _LTST,
  _LTSTF,
  _LTSTFL,
  _LTSTI,
  _LTSTO,
  _MR,
  _mR,
  _N,
  _NT,
  _nT,
  _O,
  _QE,
  _R,
  _RAo,
  _RF,
  _RFL,
  _RI,
  _RQ,
  _RS,
  _S,
  _STST,
  _STSTI,
  _STSTO,
  _T,
  _TA,
  _TK,
  _TST,
  _TSTI,
  _TSTL,
  _TV,
  _UG,
  _UGI,
  _UGO,
  _UGQ,
  _UGQI,
  _UGQO,
  _V,
  n0,
} from "./schemas_0";
import { GroupConfiguration, GroupConfigurationList } from "./schemas_1_Group";
import { QueryErrorList, ResourceIdentifier, ResourceIdentifierList } from "./schemas_2_TagSync";
import { ResourceQuery } from "./schemas_10_TagSync";

/* eslint no-var: 0 */

export var CreateGroupInput = struct(
  n0,
  _CGI,
  0,
  [_N, _D, _RQ, _T, _C, _Cr, _O, _DN],
  [0, 0, () => ResourceQuery, 128 | 0, () => GroupConfigurationList, 1, 0, 0]
);
export var CreateGroupOutput = struct(
  n0,
  _CGO,
  0,
  [_G, _RQ, _T, _GC],
  [() => Group, () => ResourceQuery, 128 | 0, () => GroupConfiguration]
);
export var DeleteGroupInput = struct(n0, _DGI, 0, [_GN, _G], [0, 0]);
export var DeleteGroupOutput = struct(n0, _DGO, 0, [_G], [() => Group]);
export var GetGroupInput = struct(n0, _GGI, 0, [_GN, _G], [0, 0]);
export var GetGroupOutput = struct(n0, _GGO, 0, [_G], [() => Group]);
export var GetGroupQueryInput = struct(n0, _GGQI, 0, [_GN, _G], [0, 0]);
export var GetGroupQueryOutput = struct(n0, _GGQO, 0, [_GQ], [() => GroupQuery]);
export var GetTagSyncTaskInput = struct(n0, _GTSTI, 0, [_TA], [0]);
export var GetTagSyncTaskOutput = struct(
  n0,
  _GTSTO,
  0,
  [_GA, _GN, _TA, _TK, _TV, _RQ, _RAo, _S, _EM, _CA],
  [0, 0, 0, 0, 0, () => ResourceQuery, 0, 0, 0, 4]
);
export var Group = struct(n0, _G, 0, [_GA, _N, _D, _Cr, _O, _DN, _AT], [0, 0, 0, 1, 0, 0, 128 | 0]);
export var GroupFilter = struct(n0, _GF, 0, [_N, _V], [0, 64 | 0]);
export var GroupIdentifier = struct(n0, _GI, 0, [_GN, _GA, _D, _Cr, _O, _DN], [0, 0, 0, 1, 0, 0]);
export var GroupQuery = struct(n0, _GQ, 0, [_GN, _RQ], [0, () => ResourceQuery]);
export var ListGroupResourcesInput = struct(
  n0,
  _LGRI,
  0,
  [_GN, _G, _Fi, _MR, _NT],
  [0, 0, () => ResourceFilterList, 1, 0]
);
export var ListGroupResourcesItem = struct(n0, _LGRIi, 0, [_I, _S], [() => ResourceIdentifier, () => ResourceStatus]);
export var ListGroupResourcesOutput = struct(
  n0,
  _LGRO,
  0,
  [_R, _RI, _NT, _QE],
  [() => ListGroupResourcesItemList, () => ResourceIdentifierList, 0, () => QueryErrorList]
);
export var ListGroupsInput = struct(
  n0,
  _LGI,
  0,
  [_Fi, _MR, _NT],
  [
    () => GroupFilterList,
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
export var ListGroupsOutput = struct(n0, _LGO, 0, [_GIr, _Gr, _NT], [() => GroupIdentifierList, () => GroupList, 0]);
export var ListTagSyncTasksFilter = struct(n0, _LTSTF, 0, [_GA, _GN], [0, 0]);
export var ListTagSyncTasksInput = struct(n0, _LTSTI, 0, [_Fi, _MR, _NT], [() => ListTagSyncTasksFilterList, 1, 0]);
export var ListTagSyncTasksOutput = struct(n0, _LTSTO, 0, [_TST, _NT], [() => TagSyncTaskList, 0]);
export var ResourceFilter = struct(n0, _RF, 0, [_N, _V], [0, 64 | 0]);
export var ResourceStatus = struct(n0, _RS, 0, [_N], [0]);
export var StartTagSyncTaskInput = struct(n0, _STSTI, 0, [_G, _TK, _TV, _RQ, _RAo], [0, 0, 0, () => ResourceQuery, 0]);
export var StartTagSyncTaskOutput = struct(
  n0,
  _STSTO,
  0,
  [_GA, _GN, _TA, _TK, _TV, _RQ, _RAo],
  [0, 0, 0, 0, 0, () => ResourceQuery, 0]
);
export var TagSyncTaskItem = struct(
  n0,
  _TSTI,
  0,
  [_GA, _GN, _TA, _TK, _TV, _RQ, _RAo, _S, _EM, _CA],
  [0, 0, 0, 0, 0, () => ResourceQuery, 0, 0, 0, 4]
);
export var UpdateGroupInput = struct(n0, _UGI, 0, [_GN, _G, _D, _Cr, _O, _DN], [0, 0, 0, 1, 0, 0]);
export var UpdateGroupOutput = struct(n0, _UGO, 0, [_G], [() => Group]);
export var UpdateGroupQueryInput = struct(n0, _UGQI, 0, [_GN, _G, _RQ], [0, 0, () => ResourceQuery]);
export var UpdateGroupQueryOutput = struct(n0, _UGQO, 0, [_GQ], [() => GroupQuery]);
export var GroupFilterList = list(n0, _GFL, 0, () => GroupFilter);
export var GroupFilterValues = 64 | 0;

export var GroupIdentifierList = list(n0, _GIL, 0, () => GroupIdentifier);
export var GroupList = list(n0, _GL, 0, () => Group);
export var ListGroupResourcesItemList = list(n0, _LGRIL, 0, () => ListGroupResourcesItem);
export var ListTagSyncTasksFilterList = list(n0, _LTSTFL, 0, () => ListTagSyncTasksFilter);
export var ResourceFilterList = list(n0, _RFL, 0, () => ResourceFilter);
export var ResourceFilterValues = 64 | 0;

export var TagSyncTaskList = list(n0, _TSTL, 0, () => TagSyncTaskItem);
export var ApplicationTag = 128 | 0;

export var CreateGroup = op(
  n0,
  _CG,
  {
    [_h]: ["POST", "/groups", 200],
  },
  () => CreateGroupInput,
  () => CreateGroupOutput
);
export var DeleteGroup = op(
  n0,
  _DG,
  {
    [_h]: ["POST", "/delete-group", 200],
  },
  () => DeleteGroupInput,
  () => DeleteGroupOutput
);
export var GetGroup = op(
  n0,
  _GG,
  {
    [_h]: ["POST", "/get-group", 200],
  },
  () => GetGroupInput,
  () => GetGroupOutput
);
export var GetGroupQuery = op(
  n0,
  _GGQ,
  {
    [_h]: ["POST", "/get-group-query", 200],
  },
  () => GetGroupQueryInput,
  () => GetGroupQueryOutput
);
export var GetTagSyncTask = op(
  n0,
  _GTST,
  {
    [_h]: ["POST", "/get-tag-sync-task", 200],
  },
  () => GetTagSyncTaskInput,
  () => GetTagSyncTaskOutput
);
export var ListGroupResources = op(
  n0,
  _LGR,
  {
    [_h]: ["POST", "/list-group-resources", 200],
  },
  () => ListGroupResourcesInput,
  () => ListGroupResourcesOutput
);
export var ListGroups = op(
  n0,
  _LG,
  {
    [_h]: ["POST", "/groups-list", 200],
  },
  () => ListGroupsInput,
  () => ListGroupsOutput
);
export var ListTagSyncTasks = op(
  n0,
  _LTST,
  {
    [_h]: ["POST", "/list-tag-sync-tasks", 200],
  },
  () => ListTagSyncTasksInput,
  () => ListTagSyncTasksOutput
);
export var StartTagSyncTask = op(
  n0,
  _STST,
  {
    [_h]: ["POST", "/start-tag-sync-task", 200],
  },
  () => StartTagSyncTaskInput,
  () => StartTagSyncTaskOutput
);
export var UpdateGroup = op(
  n0,
  _UG,
  {
    [_h]: ["POST", "/update-group", 200],
  },
  () => UpdateGroupInput,
  () => UpdateGroupOutput
);
export var UpdateGroupQuery = op(
  n0,
  _UGQ,
  {
    [_h]: ["POST", "/update-group-query", 200],
  },
  () => UpdateGroupQueryInput,
  () => UpdateGroupQueryOutput
);

const _A = "Arn";
const _AS = "AccountSettings";
const _AT = "ApplicationTag";
const _Ac = "Action";
const _BRE = "BadRequestException";
const _C = "Configuration";
const _CA = "CreatedAt";
const _CG = "CreateGroup";
const _CGI = "CreateGroupInput";
const _CGO = "CreateGroupOutput";
const _CTST = "CancelTagSyncTask";
const _CTSTI = "CancelTagSyncTaskInput";
const _Cr = "Criticality";
const _D = "Description";
const _DG = "DeleteGroup";
const _DGI = "DeleteGroupInput";
const _DGO = "DeleteGroupOutput";
const _DN = "DisplayName";
const _EC = "ErrorCode";
const _EM = "ErrorMessage";
const _F = "Failed";
const _FE = "ForbiddenException";
const _FR = "FailedResource";
const _FRL = "FailedResourceList";
const _FRa = "FailureReason";
const _Fi = "Filters";
const _G = "Group";
const _GA = "GroupArn";
const _GAS = "GetAccountSettings";
const _GASO = "GetAccountSettingsOutput";
const _GC = "GroupConfiguration";
const _GCI = "GroupConfigurationItem";
const _GCL = "GroupConfigurationList";
const _GCP = "GroupConfigurationParameter";
const _GF = "GroupFilter";
const _GFL = "GroupFilterList";
const _GG = "GetGroup";
const _GGC = "GetGroupConfiguration";
const _GGCI = "GetGroupConfigurationInput";
const _GGCO = "GetGroupConfigurationOutput";
const _GGI = "GetGroupInput";
const _GGO = "GetGroupOutput";
const _GGQ = "GetGroupQuery";
const _GGQI = "GetGroupQueryInput";
const _GGQO = "GetGroupQueryOutput";
const _GI = "GroupIdentifier";
const _GIL = "GroupIdentifierList";
const _GIr = "GroupIdentifiers";
const _GL = "GroupList";
const _GLEDS = "GroupLifecycleEventsDesiredStatus";
const _GLES = "GroupLifecycleEventsStatus";
const _GLESM = "GroupLifecycleEventsStatusMessage";
const _GN = "GroupName";
const _GPL = "GroupParameterList";
const _GQ = "GroupQuery";
const _GR = "GroupResources";
const _GRI = "GroupResourcesInput";
const _GRO = "GroupResourcesOutput";
const _GS = "GroupingStatuses";
const _GSI = "GroupingStatusesItem";
const _GSL = "GroupingStatusesList";
const _GT = "GetTags";
const _GTI = "GetTagsInput";
const _GTO = "GetTagsOutput";
const _GTST = "GetTagSyncTask";
const _GTSTI = "GetTagSyncTaskInput";
const _GTSTO = "GetTagSyncTaskOutput";
const _Gr = "Groups";
const _I = "Identifier";
const _ISEE = "InternalServerErrorException";
const _K = "Keys";
const _LG = "ListGroups";
const _LGI = "ListGroupsInput";
const _LGO = "ListGroupsOutput";
const _LGR = "ListGroupResources";
const _LGRI = "ListGroupResourcesInput";
const _LGRIL = "ListGroupResourcesItemList";
const _LGRIi = "ListGroupResourcesItem";
const _LGRO = "ListGroupResourcesOutput";
const _LGS = "ListGroupingStatuses";
const _LGSF = "ListGroupingStatusesFilter";
const _LGSFL = "ListGroupingStatusesFilterList";
const _LGSI = "ListGroupingStatusesInput";
const _LGSO = "ListGroupingStatusesOutput";
const _LTST = "ListTagSyncTasks";
const _LTSTF = "ListTagSyncTasksFilter";
const _LTSTFL = "ListTagSyncTasksFilterList";
const _LTSTI = "ListTagSyncTasksInput";
const _LTSTO = "ListTagSyncTasksOutput";
const _M = "Message";
const _MNAE = "MethodNotAllowedException";
const _MR = "MaxResults";
const _N = "Name";
const _NFE = "NotFoundException";
const _NT = "NextToken";
const _O = "Owner";
const _P = "Parameters";
const _PC = "ProposedConfiguration";
const _PGC = "PutGroupConfiguration";
const _PGCI = "PutGroupConfigurationInput";
const _PGCO = "PutGroupConfigurationOutput";
const _PR = "PendingResource";
const _PRL = "PendingResourceList";
const _Pe = "Pending";
const _Q = "Query";
const _QE = "QueryErrors";
const _QEL = "QueryErrorList";
const _QEu = "QueryError";
const _R = "Resources";
const _RA = "ResourceArn";
const _RAe = "ResourceArns";
const _RAo = "RoleArn";
const _RF = "ResourceFilter";
const _RFL = "ResourceFilterList";
const _RI = "ResourceIdentifiers";
const _RIL = "ResourceIdentifierList";
const _RIe = "ResourceIdentifier";
const _RQ = "ResourceQuery";
const _RS = "ResourceStatus";
const _RT = "ResourceType";
const _S = "Status";
const _SR = "SearchResources";
const _SRI = "SearchResourcesInput";
const _SRO = "SearchResourcesOutput";
const _STST = "StartTagSyncTask";
const _STSTI = "StartTagSyncTaskInput";
const _STSTO = "StartTagSyncTaskOutput";
const _Su = "Succeeded";
const _T = "Tags";
const _TA = "TaskArn";
const _TI = "TagInput";
const _TK = "TagKey";
const _TMRE = "TooManyRequestsException";
const _TO = "TagOutput";
const _TST = "TagSyncTasks";
const _TSTI = "TagSyncTaskItem";
const _TSTL = "TagSyncTaskList";
const _TV = "TagValue";
const _Ta = "Tag";
const _Ty = "Type";
const _U = "Untag";
const _UA = "UpdatedAt";
const _UAS = "UpdateAccountSettings";
const _UASI = "UpdateAccountSettingsInput";
const _UASO = "UpdateAccountSettingsOutput";
const _UE = "UnauthorizedException";
const _UG = "UpdateGroup";
const _UGI = "UpdateGroupInput";
const _UGO = "UpdateGroupOutput";
const _UGQ = "UpdateGroupQuery";
const _UGQI = "UpdateGroupQueryInput";
const _UGQO = "UpdateGroupQueryOutput";
const _UI = "UntagInput";
const _UO = "UntagOutput";
const _UR = "UngroupResources";
const _URI = "UngroupResourcesInput";
const _URO = "UngroupResourcesOutput";
const _V = "Values";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _mR = "maxResults";
const _nT = "nextToken";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.resourcegroups";
const n0 = "com.amazonaws.resourcegroups";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  BadRequestException as __BadRequestException,
  ForbiddenException as __ForbiddenException,
  InternalServerErrorException as __InternalServerErrorException,
  MethodNotAllowedException as __MethodNotAllowedException,
  NotFoundException as __NotFoundException,
  TooManyRequestsException as __TooManyRequestsException,
  UnauthorizedException as __UnauthorizedException,
} from "../models/errors";
import { ResourceGroupsServiceException as __ResourceGroupsServiceException } from "../models/ResourceGroupsServiceException";

/* eslint no-var: 0 */
export var AccountSettings: StaticStructureSchema = [3, n0, _AS, 0, [_GLEDS, _GLES, _GLESM], [0, 0, 0]];
export var BadRequestException: StaticErrorSchema = [-3, n0, _BRE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(BadRequestException, __BadRequestException);
export var CancelTagSyncTaskInput: StaticStructureSchema = [3, n0, _CTSTI, 0, [_TA], [0]];
export var CreateGroupInput: StaticStructureSchema = [
  3,
  n0,
  _CGI,
  0,
  [_N, _D, _RQ, _T, _C, _Cr, _O, _DN],
  [0, 0, () => ResourceQuery, 128 | 0, () => GroupConfigurationList, 1, 0, 0],
];
export var CreateGroupOutput: StaticStructureSchema = [
  3,
  n0,
  _CGO,
  0,
  [_G, _RQ, _T, _GC],
  [() => Group, () => ResourceQuery, 128 | 0, () => GroupConfiguration],
];
export var DeleteGroupInput: StaticStructureSchema = [3, n0, _DGI, 0, [_GN, _G], [0, 0]];
export var DeleteGroupOutput: StaticStructureSchema = [3, n0, _DGO, 0, [_G], [() => Group]];
export var FailedResource: StaticStructureSchema = [3, n0, _FR, 0, [_RA, _EM, _EC], [0, 0, 0]];
export var ForbiddenException: StaticErrorSchema = [-3, n0, _FE, { [_e]: _c, [_hE]: 403 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ForbiddenException, __ForbiddenException);
export var GetAccountSettingsOutput: StaticStructureSchema = [3, n0, _GASO, 0, [_AS], [() => AccountSettings]];
export var GetGroupConfigurationInput: StaticStructureSchema = [3, n0, _GGCI, 0, [_G], [0]];
export var GetGroupConfigurationOutput: StaticStructureSchema = [3, n0, _GGCO, 0, [_GC], [() => GroupConfiguration]];
export var GetGroupInput: StaticStructureSchema = [3, n0, _GGI, 0, [_GN, _G], [0, 0]];
export var GetGroupOutput: StaticStructureSchema = [3, n0, _GGO, 0, [_G], [() => Group]];
export var GetGroupQueryInput: StaticStructureSchema = [3, n0, _GGQI, 0, [_GN, _G], [0, 0]];
export var GetGroupQueryOutput: StaticStructureSchema = [3, n0, _GGQO, 0, [_GQ], [() => GroupQuery]];
export var GetTagsInput: StaticStructureSchema = [3, n0, _GTI, 0, [_A], [[0, 1]]];
export var GetTagsOutput: StaticStructureSchema = [3, n0, _GTO, 0, [_A, _T], [0, 128 | 0]];
export var GetTagSyncTaskInput: StaticStructureSchema = [3, n0, _GTSTI, 0, [_TA], [0]];
export var GetTagSyncTaskOutput: StaticStructureSchema = [
  3,
  n0,
  _GTSTO,
  0,
  [_GA, _GN, _TA, _TK, _TV, _RQ, _RAo, _S, _EM, _CA],
  [0, 0, 0, 0, 0, () => ResourceQuery, 0, 0, 0, 4],
];
export var Group: StaticStructureSchema = [3, n0, _G, 0, [_GA, _N, _D, _Cr, _O, _DN, _AT], [0, 0, 0, 1, 0, 0, 128 | 0]];
export var GroupConfiguration: StaticStructureSchema = [
  3,
  n0,
  _GC,
  0,
  [_C, _PC, _S, _FRa],
  [() => GroupConfigurationList, () => GroupConfigurationList, 0, 0],
];
export var GroupConfigurationItem: StaticStructureSchema = [3, n0, _GCI, 0, [_Ty, _P], [0, () => GroupParameterList]];
export var GroupConfigurationParameter: StaticStructureSchema = [3, n0, _GCP, 0, [_N, _V], [0, 64 | 0]];
export var GroupFilter: StaticStructureSchema = [3, n0, _GF, 0, [_N, _V], [0, 64 | 0]];
export var GroupIdentifier: StaticStructureSchema = [3, n0, _GI, 0, [_GN, _GA, _D, _Cr, _O, _DN], [0, 0, 0, 1, 0, 0]];
export var GroupingStatusesItem: StaticStructureSchema = [
  3,
  n0,
  _GSI,
  0,
  [_RA, _Ac, _S, _EM, _EC, _UA],
  [0, 0, 0, 0, 0, 4],
];
export var GroupQuery: StaticStructureSchema = [3, n0, _GQ, 0, [_GN, _RQ], [0, () => ResourceQuery]];
export var GroupResourcesInput: StaticStructureSchema = [3, n0, _GRI, 0, [_G, _RAe], [0, 64 | 0]];
export var GroupResourcesOutput: StaticStructureSchema = [
  3,
  n0,
  _GRO,
  0,
  [_Su, _F, _Pe],
  [64 | 0, () => FailedResourceList, () => PendingResourceList],
];
export var InternalServerErrorException: StaticErrorSchema = [-3, n0, _ISEE, { [_e]: _s, [_hE]: 500 }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalServerErrorException, __InternalServerErrorException);
export var ListGroupingStatusesFilter: StaticStructureSchema = [3, n0, _LGSF, 0, [_N, _V], [0, 64 | 0]];
export var ListGroupingStatusesInput: StaticStructureSchema = [
  3,
  n0,
  _LGSI,
  0,
  [_G, _MR, _Fi, _NT],
  [0, 1, () => ListGroupingStatusesFilterList, 0],
];
export var ListGroupingStatusesOutput: StaticStructureSchema = [
  3,
  n0,
  _LGSO,
  0,
  [_G, _GS, _NT],
  [0, () => GroupingStatusesList, 0],
];
export var ListGroupResourcesInput: StaticStructureSchema = [
  3,
  n0,
  _LGRI,
  0,
  [_GN, _G, _Fi, _MR, _NT],
  [0, 0, () => ResourceFilterList, 1, 0],
];
export var ListGroupResourcesItem: StaticStructureSchema = [
  3,
  n0,
  _LGRIi,
  0,
  [_I, _S],
  [() => ResourceIdentifier, () => ResourceStatus],
];
export var ListGroupResourcesOutput: StaticStructureSchema = [
  3,
  n0,
  _LGRO,
  0,
  [_R, _RI, _NT, _QE],
  [() => ListGroupResourcesItemList, () => ResourceIdentifierList, 0, () => QueryErrorList],
];
export var ListGroupsInput: StaticStructureSchema = [
  3,
  n0,
  _LGI,
  0,
  [_Fi, _MR, _NT],
  [() => GroupFilterList, [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }]],
];
export var ListGroupsOutput: StaticStructureSchema = [
  3,
  n0,
  _LGO,
  0,
  [_GIr, _Gr, _NT],
  [() => GroupIdentifierList, () => GroupList, 0],
];
export var ListTagSyncTasksFilter: StaticStructureSchema = [3, n0, _LTSTF, 0, [_GA, _GN], [0, 0]];
export var ListTagSyncTasksInput: StaticStructureSchema = [
  3,
  n0,
  _LTSTI,
  0,
  [_Fi, _MR, _NT],
  [() => ListTagSyncTasksFilterList, 1, 0],
];
export var ListTagSyncTasksOutput: StaticStructureSchema = [3, n0, _LTSTO, 0, [_TST, _NT], [() => TagSyncTaskList, 0]];
export var MethodNotAllowedException: StaticErrorSchema = [-3, n0, _MNAE, { [_e]: _c, [_hE]: 405 }, [_M], [0]];
TypeRegistry.for(n0).registerError(MethodNotAllowedException, __MethodNotAllowedException);
export var NotFoundException: StaticErrorSchema = [-3, n0, _NFE, { [_e]: _c, [_hE]: 404 }, [_M], [0]];
TypeRegistry.for(n0).registerError(NotFoundException, __NotFoundException);
export var PendingResource: StaticStructureSchema = [3, n0, _PR, 0, [_RA], [0]];
export var PutGroupConfigurationInput: StaticStructureSchema = [
  3,
  n0,
  _PGCI,
  0,
  [_G, _C],
  [0, () => GroupConfigurationList],
];
export var PutGroupConfigurationOutput: StaticStructureSchema = [3, n0, _PGCO, 0, [], []];
export var QueryError: StaticStructureSchema = [3, n0, _QEu, 0, [_EC, _M], [0, 0]];
export var ResourceFilter: StaticStructureSchema = [3, n0, _RF, 0, [_N, _V], [0, 64 | 0]];
export var ResourceIdentifier: StaticStructureSchema = [3, n0, _RIe, 0, [_RA, _RT], [0, 0]];
export var ResourceQuery: StaticStructureSchema = [3, n0, _RQ, 0, [_Ty, _Q], [0, 0]];
export var ResourceStatus: StaticStructureSchema = [3, n0, _RS, 0, [_N], [0]];
export var SearchResourcesInput: StaticStructureSchema = [3, n0, _SRI, 0, [_RQ, _MR, _NT], [() => ResourceQuery, 1, 0]];
export var SearchResourcesOutput: StaticStructureSchema = [
  3,
  n0,
  _SRO,
  0,
  [_RI, _NT, _QE],
  [() => ResourceIdentifierList, 0, () => QueryErrorList],
];
export var StartTagSyncTaskInput: StaticStructureSchema = [
  3,
  n0,
  _STSTI,
  0,
  [_G, _TK, _TV, _RQ, _RAo],
  [0, 0, 0, () => ResourceQuery, 0],
];
export var StartTagSyncTaskOutput: StaticStructureSchema = [
  3,
  n0,
  _STSTO,
  0,
  [_GA, _GN, _TA, _TK, _TV, _RQ, _RAo],
  [0, 0, 0, 0, 0, () => ResourceQuery, 0],
];
export var TagInput: StaticStructureSchema = [3, n0, _TI, 0, [_A, _T], [[0, 1], 128 | 0]];
export var TagOutput: StaticStructureSchema = [3, n0, _TO, 0, [_A, _T], [0, 128 | 0]];
export var TagSyncTaskItem: StaticStructureSchema = [
  3,
  n0,
  _TSTI,
  0,
  [_GA, _GN, _TA, _TK, _TV, _RQ, _RAo, _S, _EM, _CA],
  [0, 0, 0, 0, 0, () => ResourceQuery, 0, 0, 0, 4],
];
export var TooManyRequestsException: StaticErrorSchema = [-3, n0, _TMRE, { [_e]: _c, [_hE]: 429 }, [_M], [0]];
TypeRegistry.for(n0).registerError(TooManyRequestsException, __TooManyRequestsException);
export var UnauthorizedException: StaticErrorSchema = [-3, n0, _UE, { [_e]: _c, [_hE]: 401 }, [_M], [0]];
TypeRegistry.for(n0).registerError(UnauthorizedException, __UnauthorizedException);
export var UngroupResourcesInput: StaticStructureSchema = [3, n0, _URI, 0, [_G, _RAe], [0, 64 | 0]];
export var UngroupResourcesOutput: StaticStructureSchema = [
  3,
  n0,
  _URO,
  0,
  [_Su, _F, _Pe],
  [64 | 0, () => FailedResourceList, () => PendingResourceList],
];
export var UntagInput: StaticStructureSchema = [3, n0, _UI, 0, [_A, _K], [[0, 1], 64 | 0]];
export var UntagOutput: StaticStructureSchema = [3, n0, _UO, 0, [_A, _K], [0, 64 | 0]];
export var UpdateAccountSettingsInput: StaticStructureSchema = [3, n0, _UASI, 0, [_GLEDS], [0]];
export var UpdateAccountSettingsOutput: StaticStructureSchema = [3, n0, _UASO, 0, [_AS], [() => AccountSettings]];
export var UpdateGroupInput: StaticStructureSchema = [3, n0, _UGI, 0, [_GN, _G, _D, _Cr, _O, _DN], [0, 0, 0, 1, 0, 0]];
export var UpdateGroupOutput: StaticStructureSchema = [3, n0, _UGO, 0, [_G], [() => Group]];
export var UpdateGroupQueryInput: StaticStructureSchema = [
  3,
  n0,
  _UGQI,
  0,
  [_GN, _G, _RQ],
  [0, 0, () => ResourceQuery],
];
export var UpdateGroupQueryOutput: StaticStructureSchema = [3, n0, _UGQO, 0, [_GQ], [() => GroupQuery]];
export var __Unit = "unit" as const;
export var ResourceGroupsServiceException: StaticErrorSchema = [-3, _sm, "ResourceGroupsServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(ResourceGroupsServiceException, __ResourceGroupsServiceException);
export var FailedResourceList: StaticListSchema = [1, n0, _FRL, 0, () => FailedResource];
export var GroupConfigurationList: StaticListSchema = [1, n0, _GCL, 0, () => GroupConfigurationItem];
export var GroupConfigurationParameterValueList = 64 | 0;
export var GroupFilterList: StaticListSchema = [1, n0, _GFL, 0, () => GroupFilter];
export var GroupFilterValues = 64 | 0;
export var GroupIdentifierList: StaticListSchema = [1, n0, _GIL, 0, () => GroupIdentifier];
export var GroupingStatusesList: StaticListSchema = [1, n0, _GSL, 0, () => GroupingStatusesItem];
export var GroupList: StaticListSchema = [1, n0, _GL, 0, () => Group];
export var GroupParameterList: StaticListSchema = [1, n0, _GPL, 0, () => GroupConfigurationParameter];
export var ListGroupingStatusesFilterList: StaticListSchema = [1, n0, _LGSFL, 0, () => ListGroupingStatusesFilter];
export var ListGroupingStatusesFilterValues = 64 | 0;
export var ListGroupResourcesItemList: StaticListSchema = [1, n0, _LGRIL, 0, () => ListGroupResourcesItem];
export var ListTagSyncTasksFilterList: StaticListSchema = [1, n0, _LTSTFL, 0, () => ListTagSyncTasksFilter];
export var PendingResourceList: StaticListSchema = [1, n0, _PRL, 0, () => PendingResource];
export var QueryErrorList: StaticListSchema = [1, n0, _QEL, 0, () => QueryError];
export var ResourceArnList = 64 | 0;
export var ResourceFilterList: StaticListSchema = [1, n0, _RFL, 0, () => ResourceFilter];
export var ResourceFilterValues = 64 | 0;
export var ResourceIdentifierList: StaticListSchema = [1, n0, _RIL, 0, () => ResourceIdentifier];
export var TagKeyList = 64 | 0;
export var TagSyncTaskList: StaticListSchema = [1, n0, _TSTL, 0, () => TagSyncTaskItem];
export var ApplicationTag = 128 | 0;
export var Tags = 128 | 0;
export var CancelTagSyncTask: StaticOperationSchema = [
  9,
  n0,
  _CTST,
  { [_h]: ["POST", "/cancel-tag-sync-task", 200] },
  () => CancelTagSyncTaskInput,
  () => __Unit,
];
export var CreateGroup: StaticOperationSchema = [
  9,
  n0,
  _CG,
  { [_h]: ["POST", "/groups", 200] },
  () => CreateGroupInput,
  () => CreateGroupOutput,
];
export var DeleteGroup: StaticOperationSchema = [
  9,
  n0,
  _DG,
  { [_h]: ["POST", "/delete-group", 200] },
  () => DeleteGroupInput,
  () => DeleteGroupOutput,
];
export var GetAccountSettings: StaticOperationSchema = [
  9,
  n0,
  _GAS,
  { [_h]: ["POST", "/get-account-settings", 200] },
  () => __Unit,
  () => GetAccountSettingsOutput,
];
export var GetGroup: StaticOperationSchema = [
  9,
  n0,
  _GG,
  { [_h]: ["POST", "/get-group", 200] },
  () => GetGroupInput,
  () => GetGroupOutput,
];
export var GetGroupConfiguration: StaticOperationSchema = [
  9,
  n0,
  _GGC,
  { [_h]: ["POST", "/get-group-configuration", 200] },
  () => GetGroupConfigurationInput,
  () => GetGroupConfigurationOutput,
];
export var GetGroupQuery: StaticOperationSchema = [
  9,
  n0,
  _GGQ,
  { [_h]: ["POST", "/get-group-query", 200] },
  () => GetGroupQueryInput,
  () => GetGroupQueryOutput,
];
export var GetTags: StaticOperationSchema = [
  9,
  n0,
  _GT,
  { [_h]: ["GET", "/resources/{Arn}/tags", 200] },
  () => GetTagsInput,
  () => GetTagsOutput,
];
export var GetTagSyncTask: StaticOperationSchema = [
  9,
  n0,
  _GTST,
  { [_h]: ["POST", "/get-tag-sync-task", 200] },
  () => GetTagSyncTaskInput,
  () => GetTagSyncTaskOutput,
];
export var GroupResources: StaticOperationSchema = [
  9,
  n0,
  _GR,
  { [_h]: ["POST", "/group-resources", 200] },
  () => GroupResourcesInput,
  () => GroupResourcesOutput,
];
export var ListGroupingStatuses: StaticOperationSchema = [
  9,
  n0,
  _LGS,
  { [_h]: ["POST", "/list-grouping-statuses", 200] },
  () => ListGroupingStatusesInput,
  () => ListGroupingStatusesOutput,
];
export var ListGroupResources: StaticOperationSchema = [
  9,
  n0,
  _LGR,
  { [_h]: ["POST", "/list-group-resources", 200] },
  () => ListGroupResourcesInput,
  () => ListGroupResourcesOutput,
];
export var ListGroups: StaticOperationSchema = [
  9,
  n0,
  _LG,
  { [_h]: ["POST", "/groups-list", 200] },
  () => ListGroupsInput,
  () => ListGroupsOutput,
];
export var ListTagSyncTasks: StaticOperationSchema = [
  9,
  n0,
  _LTST,
  { [_h]: ["POST", "/list-tag-sync-tasks", 200] },
  () => ListTagSyncTasksInput,
  () => ListTagSyncTasksOutput,
];
export var PutGroupConfiguration: StaticOperationSchema = [
  9,
  n0,
  _PGC,
  { [_h]: ["POST", "/put-group-configuration", 202] },
  () => PutGroupConfigurationInput,
  () => PutGroupConfigurationOutput,
];
export var SearchResources: StaticOperationSchema = [
  9,
  n0,
  _SR,
  { [_h]: ["POST", "/resources/search", 200] },
  () => SearchResourcesInput,
  () => SearchResourcesOutput,
];
export var StartTagSyncTask: StaticOperationSchema = [
  9,
  n0,
  _STST,
  { [_h]: ["POST", "/start-tag-sync-task", 200] },
  () => StartTagSyncTaskInput,
  () => StartTagSyncTaskOutput,
];
export var Tag: StaticOperationSchema = [
  9,
  n0,
  _Ta,
  { [_h]: ["PUT", "/resources/{Arn}/tags", 200] },
  () => TagInput,
  () => TagOutput,
];
export var UngroupResources: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["POST", "/ungroup-resources", 200] },
  () => UngroupResourcesInput,
  () => UngroupResourcesOutput,
];
export var Untag: StaticOperationSchema = [
  9,
  n0,
  _U,
  { [_h]: ["PATCH", "/resources/{Arn}/tags", 200] },
  () => UntagInput,
  () => UntagOutput,
];
export var UpdateAccountSettings: StaticOperationSchema = [
  9,
  n0,
  _UAS,
  { [_h]: ["POST", "/update-account-settings", 200] },
  () => UpdateAccountSettingsInput,
  () => UpdateAccountSettingsOutput,
];
export var UpdateGroup: StaticOperationSchema = [
  9,
  n0,
  _UG,
  { [_h]: ["POST", "/update-group", 200] },
  () => UpdateGroupInput,
  () => UpdateGroupOutput,
];
export var UpdateGroupQuery: StaticOperationSchema = [
  9,
  n0,
  _UGQ,
  { [_h]: ["POST", "/update-group-query", 200] },
  () => UpdateGroupQueryInput,
  () => UpdateGroupQueryOutput,
];
